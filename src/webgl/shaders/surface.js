import { NOISE_GLSL } from './common.js';

/**
 * Lighting for things that stand in the air: the boat, and everything growing
 * on the island.
 *
 * Deliberately the same contract as the terrain — shared sun, ambient and fog
 * uniforms — so a palm and the sand it stands in are lit by one light. Giving
 * vegetation its own lighting is the fastest way to make it look pasted on.
 */

const SURFACE_LIGHT = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform vec3 uCameraPos;
uniform float uIntensity;
uniform float uFogNear;
uniform float uFogFar;

vec3 litSurface(vec3 albedo, vec3 N, vec3 worldPos, float translucency) {
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(uCameraPos - worldPos);

  // Wrapped lambert: fronds and sails are thin, and a hard terminator on them
  // reads as cardboard.
  float wrapped = clamp((dot(N, L) + 0.4) / 1.4, 0.0, 1.0);

  // Light coming through the far side — what makes a leaf or a sail glow when
  // the sun is behind it.
  float back = pow(clamp(dot(-N, L) * 0.5 + 0.5, 0.0, 1.0), 2.0) * translucency;

  vec3 color = albedo * (uSunColor * (wrapped + back) * uIntensity + uAmbient * 0.75);

  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * max(dot(-V, L) * 0.5 + 0.5, 0.0);
  color += uSunColor * rim * 0.25 * uIntensity;

  float dist = length(uCameraPos - worldPos);
  return mix(color, uFogColor, smoothstep(uFogNear, uFogFar, dist));
}
`;

/**
 * Instanced vertex shader with wind.
 *
 * Sway amplitude rises with height above the instance origin, so trunks stay
 * planted and only the crown moves — the single detail that separates
 * vegetation that is alive from vegetation that is vibrating.
 */
export const FLORA_VERT = /* glsl */ `
attribute vec3 aTint;
attribute float aPhase;
attribute float aStiff;

uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;

void main() {
  vec3 p = position;

  float lift = max(p.y, 0.0);
  float gust = sin(uTime * 0.55 + aPhase) * 0.6 + sin(uTime * 1.7 + aPhase * 2.1) * 0.25;
  float sway = gust * aStiff * lift;

  p.x += sway;
  p.z += sway * 0.45;

  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  vTint = aTint;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const FLORA_FRAG = /* glsl */ `
precision highp float;

${NOISE_GLSL}
${SURFACE_LIGHT}

uniform float uTranslucency;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;

void main() {
  // Break up the flat instance colour so a stand of palms is not a stencil.
  float grain = fbm3(vWorldPos * 1.7) * 0.5 + 0.5;
  vec3 albedo = vTint * (0.82 + grain * 0.36);

  gl_FragColor = vec4(litSurface(albedo, normalize(vNormal), vWorldPos, uTranslucency), 1.0);
}
`;

/** Non-instanced version, for the boat. */
export const RIGID_VERT = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const RIGID_FRAG = /* glsl */ `
precision highp float;

${NOISE_GLSL}
${SURFACE_LIGHT}

uniform vec3 uColor;
uniform float uTranslucency;

varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  gl_FragColor = vec4(litSurface(uColor, normalize(vNormal), vWorldPos, uTranslucency), 1.0);
}
`;

/** The wake: a foam trail that fades out behind the hull. */
export const WAKE_VERT = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const WAKE_FRAG = /* glsl */ `
precision highp float;

${NOISE_GLSL}

uniform float uTime;
uniform vec3 uSunColor;
uniform float uIntensity;

varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  // Widest and brightest at the stern, dissolving astern.
  float along = 1.0 - vUv.y;
  float across = 1.0 - abs(vUv.x - 0.5) * 2.0;

  float edge = smoothstep(0.0, 0.35, across) * (1.0 - smoothstep(0.25, 1.0, along));
  float churn = fbm3(vec3(vUv * vec2(6.0, 22.0), uTime * 0.9)) * 0.5 + 0.5;

  float a = edge * churn * 0.75;
  if (a <= 0.01) discard;

  vec3 foam = mix(vec3(0.95, 0.98, 1.0), uSunColor, 0.15) * (0.6 + 0.4 * uIntensity);
  gl_FragColor = vec4(foam, a);
}
`;
