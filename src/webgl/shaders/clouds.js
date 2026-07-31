/**
 * Cloud field, shared by the sky, the water and the terrain.
 *
 * One definition, three consumers: the sky draws the deck, and the water and
 * terrain sample the SAME field to cast its shadow. If these drifted apart the
 * shadows would fall where no cloud is, which is the tell that instantly makes
 * a scene look fake.
 *
 * Pure functions only — no uniform declarations here, so each shader can
 * declare `uTime` / `uCoverage` once without colliding.
 */

/** World height of the cloud deck. Shared by the sky projection and shadows. */
export const CLOUD_HEIGHT = 300.0;

export const CLOUDS_GLSL = /* glsl */ `
const float CLOUD_H = ${CLOUD_HEIGHT.toFixed(1)};

vec2 cloudWind(float t) {
  return vec2(t * 0.012, t * 0.006);
}

// Billowed fbm: warping the sample point by another fbm turns smooth blobs
// into structure with torn edges and wisps.
float cloudFbm(vec2 p, float t) {
  vec2 warp = vec2(
    fbm3(vec3(p * 0.9 + 11.3, t * 0.045)),
    fbm3(vec3(p * 0.9 - 7.1,  t * 0.045 + 3.7))
  );
  return fbm3(vec3(p + warp * 0.85, t * 0.03)) * 0.5 + 0.5;
}

// Density 0..1 on the cloud plane. Coverage moves it from clear to overcast.
// (No backticks in comments inside this template literal — one would close it.)
//
// Two things separate cloud from haze, and the old single wide smoothstep had
// neither. A cloud has an EDGE: the transition from cloud to sky happens over
// a short distance, not across the whole range of the noise. And cloud comes
// in SYSTEMS: there are tracts of sky with nothing in them, rather than a thin
// veil everywhere. Miss both and any amount of coverage reads as fog.
/**
 * OPTICAL DEPTH, not a mask.
 *
 * Coverage says how much of the sky has cloud over it. It says nothing about
 * how much cloud, and that is the difference between a cloud field and a
 * stencil. A threshold returns a cut-out: everything that passes is equally
 * opaque and the edge is a line. Real cloud varies continuously in thickness —
 * dense cores that shut out the sky, thin margins you can see blue through,
 * and every value between. That variation is most of what reads as real, and
 * it is also what makes the field look three-dimensional, because thickness is
 * what decides how much light gets through to any given part of it.
 *
 * So this returns depth, and the caller turns depth into opacity and into
 * lighting. Two scales combine: where the weather systems are at all, and how
 * far above the condensation level each parcel of air within them sits.
 */
float cloudDepth(vec2 p, float t, float coverage) {
  // Where the weather is. Low frequency and slow — this is the scale that
  // gives whole tracts of clear sky between one system and the next.
  float systems = fbm3(vec3(p * 0.21, t * 0.012)) * 0.5 + 0.5;
  float where = smoothstep(0.50 - coverage * 0.26, 0.70 - coverage * 0.22, systems);
  if (where <= 0.001) return 0.0;

  // How far this parcel rises above the level where it condenses. Below it
  // there is no cloud at all; above it, depth grows smoothly — which is what
  // gives a single cloud a thick middle and thin edges instead of one flat
  // opacity bounded by a hard line.
  float base = cloudFbm(p * 0.55, t);
  float lift = base - (0.545 - coverage * 0.10);
  if (lift <= 0.0) return 0.0;

  return lift * 7.0 * where;
}

/**
 * Depth to opacity. Beer-Lambert: thin margins let the sky through, cores do
 * not, and the falloff between them is smooth rather than stepped.
 */
float cloudOpacity(float depth) {
  return 1.0 - exp(-depth * 1.55);
}

/** Kept for callers that only need "how much cloud is over this point". */
float cloudDensity(vec2 p, float t, float coverage) {
  return cloudOpacity(cloudDepth(p, t, coverage));
}

/**
 * Plane coordinates for a view direction — this is what the sky samples.
 * Dividing by dir.y is what gives the deck perspective: overhead cells stay
 * large while distant ones crowd toward the horizon.
 */
vec2 cloudPlaneFromDir(vec3 dir, float t) {
  return (dir.xz / dir.y) * 0.30 + cloudWind(t);
}

/**
 * Push the cloud field away from a point, falling off with distance.
 *
 * This is what makes the pointer feel like it is stirring the deck rather than
 * sliding a texture. It works in cloud-plane coordinates so the sky sampling
 * and the ground shadows can be given the same centre — disturbing one but not
 * the other would be immediately obvious from above, where you see mostly
 * shadows.
 */
vec2 cloudStir(vec2 p, vec2 centre, float radius, float strength) {
  vec2 d = p - centre;
  float fall = smoothstep(radius, 0.0, length(d));
  return p + normalize(d + vec2(1e-4)) * fall * strength;
}

/**
 * Shadow multiplier for a point on the ground.
 *
 * Walks from the surface toward the sun until it reaches the deck, then reads
 * the same density the sky would draw there. Because both use
 * cloudPlaneFromDir's scale, a shadow always lands under an actual cloud.
 */
float cloudShadow(vec3 worldPos, vec3 sunDir, float t, float coverage,
                  float strength, vec2 stirCentre) {
  // Sun on or below the horizon: everything is in shadow anyway, and the
  // projection blows up as sunDir.y approaches zero.
  if (sunDir.y < 0.06) return 1.0;

  vec2 hit = worldPos.xz + sunDir.xz * ((CLOUD_H - worldPos.y) / sunDir.y);
  vec2 p = (hit / CLOUD_H) * 0.30 + cloudWind(t);
  p = cloudStir(p, stirCentre, 0.42, 0.10);

  // Opacity, so a thin margin barely dims the ground and a dense core throws
  // a real shadow — the same variation the sky is drawing.
  float d = cloudOpacity(cloudDepth(p, t, coverage));
  return 1.0 - d * strength;
}
`;
