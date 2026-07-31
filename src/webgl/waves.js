/**
 * The swell — one definition, used by both the GPU and the CPU.
 *
 * Anything that floats has to sit on exactly the surface the water shader
 * draws. That rules out the obvious approach of writing the height field once
 * in GLSL and porting it to JS: the noise hash is `fract(sin(x) * 43758.5)`,
 * which is chaotic by design, so float32 on the GPU and float64 in JS diverge
 * into completely different values. A boat placed that way drifts through the
 * surface.
 *
 * So the height field is split:
 *
 *   - SWELL — three analytic sines, defined once as a string below and mirrored
 *     exactly in JS. Sine is identical in both to well past the precision that
 *     matters here, so a hull placed from JS lands on the GPU's surface.
 *   - CHOP — fbm detail, GPU only, small amplitude. Floating objects ignore it,
 *     which is why it must stay small: the residual is the error in their
 *     waterline, and at this amplitude it reads as the hull cutting chop.
 */

/** Amplitude of the GPU-only fbm detail. Also the worst-case waterline error. */
export const CHOP_AMPLITUDE = 0.22;

export const SWELL_GLSL = /* glsl */ `
float swellHeight(vec2 p, float t) {
  float h = 0.0;
  h += sin(dot(p, vec2( 0.62,  0.78)) * 0.42 + t * 0.95) * 0.34;
  h += sin(dot(p, vec2(-0.85,  0.52)) * 0.71 + t * 1.35) * 0.20;
  h += sin(dot(p, vec2( 0.31, -0.95)) * 1.28 + t * 1.85) * 0.10;
  return h;
}
`;

/** JS mirror of swellHeight. Keep in step with SWELL_GLSL above. */
export function swellHeight(x, z, t) {
  let h = 0;
  h += Math.sin((x * 0.62 + z * 0.78) * 0.42 + t * 0.95) * 0.34;
  h += Math.sin((x * -0.85 + z * 0.52) * 0.71 + t * 1.35) * 0.2;
  h += Math.sin((x * 0.31 + z * -0.95) * 1.28 + t * 1.85) * 0.1;
  return h;
}

/**
 * Surface normal of the swell, by finite difference — what a hull uses to lean
 * into the wave it is sitting on.
 */
export function swellNormal(x, z, t, e = 0.6) {
  const h = swellHeight(x, z, t);
  const hx = swellHeight(x + e, z, t);
  const hz = swellHeight(x, z + e, t);
  return { x: h - hx, y: e, z: h - hz };
}
