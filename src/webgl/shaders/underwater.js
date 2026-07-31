/**
 * The water medium, shared by everything that can be seen through it.
 *
 * Two effects, and they are not the same thing:
 *
 *   - ABSORPTION is chromatic. Water eats red within a few metres, green more
 *     slowly, blue barely at all. This is why a deep scene reads as blue even
 *     when nothing in it is blue, and why simply tinting the frame blue always
 *     looks like a filter rather than like depth.
 *   - SCATTERING is grey-ish and distance-based: the familiar haze.
 *
 * Doing both, in that order, is what makes distance underwater feel like
 * distance rather than like fog with the saturation pulled down.
 */

export const UNDERWATER_GLSL = /* glsl */ `
/**
 * Per-channel extinction, per world unit travelled.
 *
 * Calibrated against this scene's scale (seabed ~30 units down, view distances
 * 30-60): red is ~90% gone by 20 units, green halves by 30, blue barely moves.
 * Getting these an order of magnitude too small is what makes an underwater
 * scene render in the sun's own colour — a dusk sun paints the seabed red,
 * which is exactly the giveaway that the water is not absorbing anything.
 */
const vec3 UW_ABSORB = vec3(0.115, 0.023, 0.0056);

/**
 * Apply the medium to a colour.
 *   dist     — how far the light travelled through water to reach the eye
 *   tint     — the colour of the surrounding water at this depth
 *   amount   — 0 above the surface, 1 fully submerged (smoothed at the cross)
 */
vec3 underwaterMedium(vec3 color, float dist, vec3 tint, float amount) {
  if (amount <= 0.001) return color;
  vec3 absorb = exp(-UW_ABSORB * dist);
  color *= mix(vec3(1.0), absorb, amount);
  // Visibility, roughly: at 0.022 everything past ~60 units is pure tint and
  // the reef reads as one flat colour. Clear tropical water is far clearer
  // than that, and the scene needs the depth cue more than it needs the haze.
  float scatter = 1.0 - exp(-dist * 0.0085);
  return mix(color, tint, scatter * amount);
}

/**
 * The colour distance converges to underwater.
 *
 * Deriving it purely from the atmosphere's water colour looks right on paper
 * and fails at dusk: that colour is stored linear, so a hex that reads as a
 * respectable teal is a near-black triple once it is scaled. The constant is a
 * floor — deep water at night is dark, never unlit.
 */
vec3 deepWater(vec3 waterColor) {
  return waterColor * 0.42 + vec3(0.035, 0.115, 0.175);
}

/**
 * Caustics — the moving light net on the seabed.
 *
 * Two drifting noise fields subtracted from each other: the ridge where they
 * cross is thin and branching, which is what the real thing looks like. Raised
 * to a high power so it stays as sharp filaments rather than soft blobs.
 */
float caustics(vec2 p, float t) {
  float n1 = fbm3(vec3(p * 0.36 + vec2(t * 0.048, -t * 0.031), t * 0.09));
  float n2 = fbm3(vec3(p * 0.51 - vec2(t * 0.037, t * 0.055), t * 0.11 + 4.7));
  float ridge = 1.0 - abs(n1 - n2);
  return pow(clamp(ridge, 0.0, 1.0), 9.0);
}
`;
