import { NOISE_GLSL } from './common.js';
import { UNDERWATER_GLSL } from './underwater.js';

/**
 * The reef floor, and everything standing on it.
 *
 * Two materials, one lighting model. Both take the sun through the water
 * rather than a separate "underwater light": the sun is attenuated by the
 * depth it travelled to get here, so the same drag that moves the sun above
 * the surface also dims and warms the floor below it. A section at midday and
 * a section at dusk get a bright reef and a dark one from the same code.
 */

const SEABED_LIGHT = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uWaterColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyBottom;
uniform vec3 uCameraPos;
uniform float uIntensity;
uniform float uTime;
uniform float uUnderwater;

/**
 * Sunlight that has already travelled down through the water column.
 * Depth is negative below the surface, so this darkens and blues with descent.
 */
vec3 sunThroughWater(float y) {
  float depth = max(-y, 0.0);
  // The light also travelled at an angle, so the path is longer than the depth.
  float path = depth / max(uSunDir.y, 0.25);
  vec3 absorb = exp(-UW_ABSORB * path);
  float above = smoothstep(-0.05, 0.35, uSunDir.y);
  return uSunColor * absorb * uIntensity * above;
}

/**
 * Downwelling skylight — the whole sky, not the sun.
 *
 * This is what keeps a dusk reef legible instead of black. Lighting the seabed
 * from the sun alone is technically defensible and looks wrong: the sun sets,
 * the term goes to zero, and the scene is a black rectangle. Underwater, most
 * of the light arriving at depth came from the sky dome, and it keeps arriving
 * after the sun has gone.
 */
vec3 waterAmbient(float y) {
  float depth = max(-y, 0.0);
  vec3 sky = mix(uSkyBottom, uSkyTop, 0.55);
  vec3 down = sky * exp(-UW_ABSORB * depth * 0.7);
  // The constant is the floor: the water itself is never truly unlit.
  return down * 0.62 + deepWater(uWaterColor) * 0.85;
}
`;

export const SEABED_VERT = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const SEABED_FRAG = /* glsl */ `
precision highp float;

${NOISE_GLSL}
${UNDERWATER_GLSL}
${SEABED_LIGHT}

varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(uSunDir);

  // Sand, with a coarser darker grain in the hollows between ripples.
  float grain = fbm3(vWorldPos * 0.6) * 0.5 + 0.5;
  float rubble = fbm3(vWorldPos * 0.09 + 21.0) * 0.5 + 0.5;
  vec3 sand = mix(vec3(0.74, 0.70, 0.60), vec3(0.52, 0.53, 0.48), grain * 0.7);
  // Darker beds of rubble and seagrass, so the floor is not one flat tone.
  sand = mix(sand, vec3(0.22, 0.30, 0.28), smoothstep(0.55, 0.85, rubble) * 0.65);

  vec3 sun = sunThroughWater(vWorldPos.y);
  float ndl = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);

  // Caustics are the whole reason a seabed reads as being underwater. They
  // land on upward-facing surfaces and fade as the sun drops.
  float caus = caustics(vWorldPos.xz, uTime) * clamp(N.y, 0.0, 1.0);

  vec3 color = sand * (sun * ndl + waterAmbient(vWorldPos.y));
  color += sun * caus * 1.5;

  float dist = length(uCameraPos - vWorldPos);
  color = underwaterMedium(color, dist, deepWater(uWaterColor), max(uUnderwater, 0.85));

  gl_FragColor = vec4(color, 1.0);
}
`;

/** Coral, creatures and anything else standing on the floor. */
export const REEF_VERT = /* glsl */ `
attribute vec3 aTint;
attribute float aPhase;

uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;

void main() {
  vec3 p = position;

  // Everything alive sways a little. Amplitude rises with height above the
  // instance origin so the base stays planted and only the tips move.
  float sway = sin(uTime * 0.7 + aPhase) * 0.055 * max(p.y, 0.0);
  p.x += sway;
  p.z += sway * 0.6;

  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  vTint = aTint;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const REEF_FRAG = /* glsl */ `
precision highp float;

${NOISE_GLSL}
${UNDERWATER_GLSL}
${SEABED_LIGHT}

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(uCameraPos - vWorldPos);

  vec3 sun = sunThroughWater(vWorldPos.y);
  float ndl = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);

  vec3 color = vTint * (sun * ndl + waterAmbient(vWorldPos.y));

  // Caustic light also plays over the tops of the coral heads.
  color += sun * caustics(vWorldPos.xz * 1.15, uTime) * clamp(N.y, 0.0, 1.0) * 0.9;

  // Rim light against the darker water behind — this is what keeps silhouettes
  // legible once the water gets dim, which is most of the time down here.
  float rim = pow(1.0 - max(dot(N, V), 0.0), 2.6);
  color += mix(uWaterColor, vTint, 0.4) * rim * 0.55 * (0.4 + uIntensity * 0.6);

  float dist = length(uCameraPos - vWorldPos);
  color = underwaterMedium(color, dist, deepWater(uWaterColor), max(uUnderwater, 0.85));

  gl_FragColor = vec4(color, 1.0);
}
`;

/** Light shafts and marine snow — additive, depth-tested but not depth-writing. */
export const SHAFT_VERT = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const SHAFT_FRAG = /* glsl */ `
precision highp float;

${NOISE_GLSL}

uniform vec3 uSunColor;
uniform float uIntensity;
uniform float uTime;
uniform float uStrength;
uniform vec3 uCameraPos;

varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  // Soft along the width, fading downward: a shaft is brightest where it
  // enters the water and dissolves as it scatters.
  float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
  across = pow(clamp(across, 0.0, 1.0), 1.8);
  float down = pow(clamp(1.0 - vUv.y, 0.0, 1.0), 1.5);

  // Slow flicker, as the surface above moves.
  float flick = fbm3(vec3(vUv * 3.0, uTime * 0.25)) * 0.5 + 0.6;

  float a = across * down * flick * uStrength;

  // Fade out close to the camera so shafts never wash over the lens.
  a *= smoothstep(6.0, 26.0, length(uCameraPos - vWorldPos));

  gl_FragColor = vec4(uSunColor * uIntensity * a, a);
}
`;
