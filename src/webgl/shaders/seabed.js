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
attribute vec3 aFluor;

uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;
varying vec3 vFluor;
varying float vPhase;

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
  vFluor = aFluor;
  vPhase = aPhase;
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
varying vec3 vFluor;
varying float vPhase;

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

  // --- Fluorescence ---------------------------------------------------
  // Corals carry GFP-family proteins that absorb blue and ultraviolet light
  // and re-emit it at longer wavelengths. This is emission, not reflection:
  // it does not depend on the sun's angle, and it is the reason a night reef
  // can be vivid rather than merely dark.
  //
  // Gated on darkness because that is literally why you cannot see it by day —
  // daylight drowns it. Which conveniently means the midday reef stays a
  // daylight reef and only the dusk one lights up, from the same code.
  // Gated on how much light there is, not on the sun's angle: what hides
  // fluorescence is daylight drowning it, and intensity says that directly.
  float night = 1.0 - smoothstep(0.18, 0.55, uIntensity);
  if (night > 0.001) {
    // Slow, uneven breathing so a stand of coral is not one flat panel.
    float pulse = 0.82 + 0.18 * sin(uTime * 0.55 + vPhase * 2.3);
    // Brighter where the surface faces the eye, as the emitting tissue is
    // thickest through the line of sight.
    float face = 0.55 + 0.45 * max(dot(N, V), 0.0);
    color += vFluor * night * pulse * face * 1.35;
  }

  float dist = length(uCameraPos - vWorldPos);
  // The glow travels through water like any other light, so red fluorescence
  // dies with distance while green carries — which is exactly what a fluo dive
  // looks like.
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

/**
 * Bioluminescent plankton.
 *
 * Dinoflagellates emit a brief blue-green flash when the water around them is
 * disturbed — the effect that lights a bow wave or a footprint in wet sand at
 * night. Two things follow from that and both matter here:
 *
 *   - it is a RESPONSE, not a steady glow. Particles idle near-dark and flare
 *     where the water is stirred, which is why this is worth wiring to the
 *     pointer rather than left to drift on its own.
 *   - the emission is narrow-band blue-green (~480nm), which is also the band
 *     seawater absorbs least. It carries further than anything else down here.
 *
 * Gated on darkness for the same reason as the coral: daylight drowns it.
 */
export const PLANKTON_VERT = /* glsl */ `
attribute float aPhase;
attribute float aSize;

uniform float uTime;
uniform vec2 uStirWorld;
uniform float uPixelRatio;

varying float vGlow;

void main() {
  vec3 p = position;

  // Slow individual drift, so the field never reads as a fixed lattice.
  p.x += sin(uTime * 0.11 + aPhase * 3.1) * 2.4;
  p.y += sin(uTime * 0.07 + aPhase * 5.7) * 1.1;
  p.z += cos(uTime * 0.09 + aPhase * 2.3) * 2.4;

  vec4 wp = modelMatrix * vec4(p, 1.0);
  vec4 mv = viewMatrix * wp;

  // Disturbance: brightest right under the cursor, falling away over ~26 units.
  float d = distance(wp.xz, uStirWorld);
  float stirred = smoothstep(26.0, 0.0, d);

  // Idle shimmer keeps the field alive without competing with the flare.
  float idle = 0.16 + 0.10 * sin(uTime * 0.8 + aPhase * 6.28);

  vGlow = idle + stirred * 1.5;

  // Flaring plankton also read as larger, which is most of what sells it.
  gl_PointSize = aSize * uPixelRatio * (1.0 + stirred * 1.6) * (240.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`;

export const PLANKTON_FRAG = /* glsl */ `
precision highp float;

uniform vec3 uWaterColor;
uniform float uIntensity;

varying float vGlow;

void main() {
  // Soft round sprite — a squared falloff reads as a point of light rather
  // than a disc with an edge.
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float body = 1.0 - smoothstep(0.0, 1.0, r);
  body *= body;
  if (body <= 0.001) discard;

  float night = 1.0 - smoothstep(0.18, 0.55, uIntensity);
  if (night <= 0.001) discard;

  // Blue-green, the band that both dinoflagellates emit in and seawater
  // absorbs least.
  vec3 glow = vec3(0.35, 1.0, 0.85);

  float a = body * vGlow * night;
  gl_FragColor = vec4(glow * a, a);
}
`;
