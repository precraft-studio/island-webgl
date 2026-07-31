import { NOISE_GLSL } from './common.js';

/**
 * Ocean surface — the piece the mountain reference site does not have.
 *
 * Approach (mirrors what Montfort's Maritime page does with `water-normal.webp`):
 *   - displace the plane with layered directional waves + fbm swell
 *   - derive the normal from the SAME height function via finite differences,
 *     so shading always agrees with the geometry
 *   - fresnel-weighted sky reflection + a sharp sun glitter term
 *   - foam on wave crests and in a shoreline band
 *
 * The sun terms read the shared Atmosphere uniforms, so the water re-lights
 * together with the sky and the island as the scene is dragged.
 */

const WAVE_GLSL = /* glsl */ `
float waveHeight(vec2 p, float t) {
  float h = 0.0;

  // Three directional swells at different scales/speeds.
  h += sin(dot(p, vec2( 0.62,  0.78)) * 0.42 + t * 0.95) * 0.34;
  h += sin(dot(p, vec2(-0.85,  0.52)) * 0.71 + t * 1.35) * 0.20;
  h += sin(dot(p, vec2( 0.31, -0.95)) * 1.28 + t * 1.85) * 0.10;

  // Broad fbm swell so the surface never looks perfectly periodic.
  h += fbm3(vec3(p * 0.075, t * 0.16)) * 0.55;

  return h;
}
`;

export const WATER_VERT = /* glsl */ `
uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vCrest;

${NOISE_GLSL}
${WAVE_GLSL}

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);

  float h = waveHeight(wp.xz, uTime);
  wp.y += h;

  // Finite-difference normal from the same height field.
  float e = 0.55;
  float hx = waveHeight(wp.xz + vec2(e, 0.0), uTime);
  float hz = waveHeight(wp.xz + vec2(0.0, e), uTime);
  vNormal = normalize(vec3(h - hx, e, h - hz));

  vCrest = h;
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const WATER_FRAG = /* glsl */ `
precision highp float;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyBottom;
uniform vec3 uWaterColor;
uniform vec3 uFogColor;
uniform vec3 uCameraPos;
uniform float uIntensity;
uniform float uTime;
uniform float uFogNear;
uniform float uFogFar;
uniform float uShoreRadius;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vCrest;

${NOISE_GLSL}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCameraPos - vWorldPos);
  vec3 L = normalize(uSunDir);

  // --- Reflection: cheap analytic sky, no cubemap needed ---------------
  vec3 R = reflect(-V, N);
  float rh = clamp(R.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 skyRefl = mix(uSkyBottom, uSkyTop, pow(rh, 0.8));

  // --- Fresnel --------------------------------------------------------
  float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 4.0);
  fres = mix(0.04, 1.0, fres);

  // --- Depth tint -----------------------------------------------------
  // Shallower (closer to the island) reads lighter and more turquoise.
  float d = length(vWorldPos.xz);
  float shallow = 1.0 - smoothstep(uShoreRadius, uShoreRadius * 2.6, d);
  vec3 deep = uWaterColor;
  vec3 shore = mix(uWaterColor, vec3(0.35, 0.78, 0.78), 0.55);
  vec3 body = mix(deep, shore, shallow);

  // Sub-surface style lift where the sun hits the back of a wave.
  float sss = pow(clamp(dot(V, -L) * 0.5 + 0.5, 0.0, 1.0), 3.0) * clamp(vCrest * 0.9 + 0.4, 0.0, 1.0);
  body += uSunColor * sss * 0.16 * uIntensity;

  vec3 color = mix(body, skyRefl, fres);

  // --- Sun glitter ----------------------------------------------------
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(N, H), 0.0), 220.0);
  float wide = pow(max(dot(N, H), 0.0), 26.0) * 0.12;
  color += uSunColor * (spec * 1.6 + wide) * uIntensity;

  // --- Foam -----------------------------------------------------------
  float noiseF = fbm3(vec3(vWorldPos.xz * 0.55, uTime * 0.55)) * 0.5 + 0.5;

  // crest foam
  float crest = smoothstep(0.42, 0.72, vCrest) * noiseF;

  // shoreline band — breaks against the island
  float band = 1.0 - smoothstep(0.0, 3.4, abs(d - uShoreRadius));
  float surge = sin(d * 1.4 - uTime * 2.1) * 0.5 + 0.5;
  float shoreFoam = band * (0.45 + 0.55 * surge) * (0.55 + 0.45 * noiseF);

  float foam = clamp(crest * 0.75 + shoreFoam, 0.0, 1.0);
  vec3 foamCol = mix(vec3(0.92), uSunColor, 0.18);
  color = mix(color, foamCol, foam * 0.85);

  // --- Fog ------------------------------------------------------------
  float dist = length(uCameraPos - vWorldPos);
  float fog = smoothstep(uFogNear, uFogFar, dist);
  color = mix(color, uFogColor, fog);

  gl_FragColor = vec4(color, 1.0);
}
`;
