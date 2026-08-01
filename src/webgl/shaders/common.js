/**
 * Shared GLSL: gradient noise + fbm, injected into every shader.
 *
 * NO BACKTICKS anywhere below — the whole block is a template literal, and one
 * backtick in a comment closes it and takes the entire import graph down with
 * no console error at all: the layout script simply never runs and the page
 * sits on the loader forever.
 */
export const NOISE_GLSL = /* glsl */ `
/**
 * This is called 352 times per terrain pixel — eight per gnoise, four octaves
 * of gnoise per fbm3, eleven fbm3 per fragment — so it looks like the obvious
 * thing to optimise, and the sin() looks like the obvious thing to remove.
 *
 * It was measured. Swapping in the usual fract-multiply hash (Dave Hoskins'
 * hash33) made the frame 15% SLOWER on an Intel UHD 630: transcendentals run on
 * a dedicated unit that is otherwise idle here, while the fract version is a
 * chain of dependent multiplies competing for the same ALU as everything else
 * in the shader. The intuition that sin is expensive is a CPU intuition.
 *
 * Left alone deliberately. If this is ever revisited, measure it with
 * EXT_disjoint_timer_query on the target hardware — wall-clock timing around
 * readPixels was too noisy on this machine to tell the two apart, and would
 * have supported either conclusion.
 */
vec3 hash33(vec3 p){
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123) * 2.0 - 1.0;
}

float gnoise(vec3 p){
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(dot(hash33(i + vec3(0,0,0)), f - vec3(0,0,0)),
            dot(hash33(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
        mix(dot(hash33(i + vec3(0,1,0)), f - vec3(0,1,0)),
            dot(hash33(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
    mix(mix(dot(hash33(i + vec3(0,0,1)), f - vec3(0,0,1)),
            dot(hash33(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
        mix(dot(hash33(i + vec3(0,1,1)), f - vec3(0,1,1)),
            dot(hash33(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
    u.z);
}

float fbm3(vec3 p){
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 4; i++) {
    s += a * gnoise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return s;
}
`;
