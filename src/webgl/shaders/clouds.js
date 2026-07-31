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
float cloudDensity(vec2 p, float t, float coverage) {
  // Where the weather is. Low frequency, drifting slowly, and thresholded hard
  // so much of the sky simply has no cloud over it.
  float systems = fbm3(vec3(p * 0.21, t * 0.012)) * 0.5 + 0.5;
  float where = smoothstep(0.60 - coverage * 0.42, 0.72 - coverage * 0.30, systems);
  if (where <= 0.001) return 0.0;

  // The cloud itself. A narrow band gives it a boundary instead of letting it
  // dissolve into the blue.
  float base = cloudFbm(p * 0.55, t);
  float body = smoothstep(0.585 - coverage * 0.10, 0.665 - coverage * 0.10, base);

  return body * where;
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

  float d = cloudDensity(p, t, coverage);
  return 1.0 - d * strength;
}
`;
