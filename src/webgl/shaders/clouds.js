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
float cloudDensity(vec2 p, float t, float coverage) {
  float base = cloudFbm(p * 0.55, t);
  return smoothstep(0.52 - coverage * 0.30, 0.86 - coverage * 0.18, base);
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
 * Shadow multiplier for a point on the ground.
 *
 * Walks from the surface toward the sun until it reaches the deck, then reads
 * the same density the sky would draw there. Because both use
 * cloudPlaneFromDir's scale, a shadow always lands under an actual cloud.
 */
float cloudShadow(vec3 worldPos, vec3 sunDir, float t, float coverage, float strength) {
  // Sun on or below the horizon: everything is in shadow anyway, and the
  // projection blows up as sunDir.y approaches zero.
  if (sunDir.y < 0.06) return 1.0;

  vec2 hit = worldPos.xz + sunDir.xz * ((CLOUD_H - worldPos.y) / sunDir.y);
  vec2 p = (hit / CLOUD_H) * 0.30 + cloudWind(t);

  float d = cloudDensity(p, t, coverage);
  return 1.0 - d * strength;
}
`;
