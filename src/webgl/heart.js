/**
 * Heart-shaped coastline, after Tavarua in Fiji's Mamanuca group — a ~29-acre
 * island whose sand ring reads as a heart from the air.
 *
 * The shape comes from the implicit heart curve
 *
 *     F(x, y) = (x² + y² - 1)³ - x²y³        inside where F < 0
 *
 * which is star-shaped about the origin, so every direction has exactly one
 * coastline radius. We bake those radii into a lookup table once: the CPU uses
 * it to displace the terrain, and the same table goes to the GPU as a texture
 * so the lagoon and the surf line follow the identical outline.
 */

export const HEART_LUT_SIZE = 512;

function implicit(x, y) {
  const a = x * x + y * y - 1;
  return a * a * a - x * x * y * y * y;
}

/** First outward crossing of F = 0 along a ray, refined by bisection. */
function boundaryRadius(theta) {
  const cx = Math.cos(theta);
  const cy = Math.sin(theta);

  const STEP = 0.01;
  const MAX = 2.0;

  let prev = 0;
  for (let r = STEP; r <= MAX; r += STEP) {
    if (implicit(cx * r, cy * r) > 0) {
      // Bisect between the last inside sample and this outside one.
      let lo = prev;
      let hi = r;
      for (let i = 0; i < 24; i++) {
        const mid = (lo + hi) * 0.5;
        if (implicit(cx * mid, cy * mid) > 0) hi = mid;
        else lo = mid;
      }
      return (lo + hi) * 0.5;
    }
    prev = r;
  }
  return MAX;
}

/**
 * Radii sampled uniformly over [-π, π].
 * `rotation` turns the heart in plan view; the reference aerials sit with the
 * cleft toward the top-left, which is roughly -0.6 rad.
 */
export function buildHeartLUT(rotation = -0.6) {
  const lut = new Float32Array(HEART_LUT_SIZE);
  let max = 0;

  for (let i = 0; i < HEART_LUT_SIZE; i++) {
    const theta = (i / HEART_LUT_SIZE) * Math.PI * 2 - Math.PI;
    const r = boundaryRadius(theta - rotation);
    lut[i] = r;
    if (r > max) max = r;
  }

  // Normalise so the widest point of the coastline is exactly 1.0. Every
  // consumer then multiplies by one world-space scale and nothing else.
  for (let i = 0; i < HEART_LUT_SIZE; i++) lut[i] /= max;

  return lut;
}

/** Interpolated coastline radius (0..1) for a direction in the XZ plane. */
export function heartRadius(lut, theta) {
  const t = ((theta + Math.PI) / (Math.PI * 2)) * HEART_LUT_SIZE;
  const i0 = Math.floor(t);
  const f = t - i0;
  const a = lut[((i0 % HEART_LUT_SIZE) + HEART_LUT_SIZE) % HEART_LUT_SIZE];
  const b = lut[((i0 + 1) % HEART_LUT_SIZE + HEART_LUT_SIZE) % HEART_LUT_SIZE];
  return a + (b - a) * f;
}
