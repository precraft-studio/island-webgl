import { NOISE_GLSL } from './common.js';
import { CLOUDS_GLSL } from './clouds.js';
import { UNDERWATER_GLSL } from './underwater.js';
import { SWELL_GLSL, CHOP_AMPLITUDE } from '../waves.js';

/**
 * Ocean, lagoon and reef — the piece the mountain reference site never needs.
 *
 *   - the plane is displaced by layered swells + fbm, and its normals come
 *     from the SAME height function via finite differences, so shading can
 *     never disagree with the geometry
 *   - depth is measured against the heart coastline (shared LUT), so the pale
 *     sand shelf and the reef flat hug the island instead of ringing it in a
 *     circle
 *   - foam breaks twice: at the shoreline, and out on the reef edge — which is
 *     what Tavarua actually looks like from the air
 *   - every sun term reads the shared Atmosphere uniforms, so the water
 *     re-lights together with the sky and the island as the scene is dragged
 */

// Swell comes from waves.js so anything that floats can sit on exactly this
// surface; the fbm chop is GPU-only detail, and its amplitude is the waterline
// error a floating object inherits — see waves.js.
const WAVE_GLSL = /* glsl */ `
${SWELL_GLSL}
float waveHeight(vec2 p, float t) {
  return swellHeight(p, t) + fbm3(vec3(p * 0.075, t * 0.16)) * ${CHOP_AMPLITUDE.toFixed(2)};
}
`;

/** Coastline radius for a world-space direction, from the shared heart LUT. */
const COAST_GLSL = /* glsl */ `
uniform sampler2D uHeartLUT;
uniform float uHeartScale;

float coastRadius(vec2 xz) {
  float theta = atan(xz.y, xz.x);
  float u = (theta + 3.14159265) / 6.28318530;
  return texture2D(uHeartLUT, vec2(u, 0.5)).r * uHeartScale;
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
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform vec3 uCameraPos;
uniform float uIntensity;
uniform float uTime;
uniform float uFogNear;
uniform float uFogFar;
uniform float uCoverage;
uniform vec2 uStir;
uniform float uUnderwater;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vCrest;

${NOISE_GLSL}
${CLOUDS_GLSL}
${UNDERWATER_GLSL}
${COAST_GLSL}

/**
 * The surface seen from underneath.
 *
 * Refraction squeezes the entire sky into a cone about 48 degrees off vertical
 * — Snell's window. Look up and there is a bright disc of the world above;
 * look outward past the critical angle and the surface turns into a mirror of
 * the dark water behind you. Getting this right is most of what makes a dive
 * feel like being underwater rather than in a blue room.
 */
vec3 surfaceFromBelow(vec3 N, vec3 viewUp, vec3 L) {
  // Perturbing the vertical by the wave normal is what makes the rim of the
  // window ripple instead of sitting as a hard circle.
  vec3 up = normalize(vec3(0.0, 1.0, 0.0) + (N - vec3(0.0, 1.0, 0.0)) * 0.55);
  float ang = acos(clamp(dot(viewUp, up), -1.0, 1.0));

  const float CRITICAL = 0.8355;  // asin(1 / 1.333)
  float window = 1.0 - smoothstep(CRITICAL * 0.82, CRITICAL, ang);

  vec3 through = mix(uSkyBottom, uSkyTop, 0.35) * (0.85 + 0.5 * uIntensity);
  // Outside the window: total internal reflection of the water below.
  vec3 mirror = uWaterColor * 0.30 + uAmbient * 0.10;

  vec3 col = mix(mirror, through, window);

  // The sun, compressed toward the middle of the window.
  float sun = pow(max(dot(viewUp, L), 0.0), 34.0);
  col += uSunColor * sun * window * 1.7 * uIntensity;

  // Bright caustic filaments running along the underside.
  col += uSunColor * caustics(vWorldPos.xz * 1.4, uTime) * 0.28 * uIntensity * window;

  return col;
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCameraPos - vWorldPos);
  vec3 L = normalize(uSunDir);

  if (!gl_FrontFacing) {
    vec3 col = surfaceFromBelow(N, -V, L);
    float dist = length(uCameraPos - vWorldPos);
    col = underwaterMedium(col, dist, deepWater(uWaterColor), uUnderwater);
    gl_FragColor = vec4(col, 1.0);
    return;
  }

  float d = length(vWorldPos.xz);
  float coral = fbm3(vec3(vWorldPos.xz * 0.045, 0.0)) * 0.5 + 0.5;

  // TWO independent shapes, and keeping them independent matters.
  //
  //  - the sand shelf hugs the island, so it follows the heart outline
  //  - the reef is its own body of coral: a lopsided oval that happens to
  //    surround the island
  //
  // Deriving the reef from the coastline instead made the whole lagoon read as
  // one giant heart, which is not what the aerials look like.
  float shoreRatio = d / max(coastRadius(vWorldPos.xz), 0.001);

  // Irregular oval: a slow angular wobble plus coral noise, no heart in sight.
  float ang = atan(vWorldPos.z, vWorldPos.x);
  float lopsided = 1.0 + 0.16 * sin(ang * 1.0 + 0.9) + 0.09 * sin(ang * 2.0 - 2.1);
  float reefR = uHeartScale * 1.72 * lopsided * (0.92 + coral * 0.20);
  float reefRatio = d / reefR;

  // --- Depth bands ----------------------------------------------------
  vec3 sandShelf = vec3(0.62, 0.93, 0.90);  // white sand under clear water
  vec3 reefFlat  = vec3(0.13, 0.70, 0.74);  // coral shelf
  vec3 deep      = uWaterColor;

  float shelf = 1.0 - smoothstep(1.0, 1.36, shoreRatio);
  float reef  = 1.0 - smoothstep(1.0, 1.30, reefRatio);

  vec3 body = deep;
  body = mix(body, reefFlat, reef);
  body = mix(body, sandShelf, shelf);

  // Darker coral heads scattered over the flat.
  body = mix(body, body * 0.72, reef * smoothstep(0.62, 0.86, coral) * 0.55);

  // The band colours above are albedo, not final colour. Light them with the
  // same sun as everything else — otherwise the lagoon stays midday-turquoise
  // under a dusk sky, which is the exact incoherence this project exists to
  // avoid.
  // Partial, not full: a straight multiply crushes the lagoon to mud at golden
  // hour and throws away the turquoise entirely. 70% of the light lets the
  // water shift warm and dark with the sky while keeping its own identity.
  float sunUp = max(uSunDir.y, 0.0);
  vec3 waterLight = uSunColor * (0.55 + 0.45 * sunUp) * uIntensity + uAmbient * 0.28;

  // Cloud shadows drifting across the lagoon — the single most recognisable
  // feature of an aerial ocean shot, and the reason the clouds are worth
  // having at a camera angle that barely shows the sky.
  float shade = cloudShadow(vWorldPos, L, uTime, uCoverage, 0.42, uStir);

  body *= mix(vec3(1.0), waterLight * shade, 0.7);

  // --- Reflection + fresnel -------------------------------------------
  vec3 R = reflect(-V, N);
  float rh = clamp(R.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 skyRefl = mix(uSkyBottom, uSkyTop, pow(rh, 0.8));

  float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 4.0);
  fres = mix(0.03, 1.0, fres);
  // Shallow water is far less mirror-like — you see sand, not sky.
  fres *= mix(1.0, 0.28, shelf);

  float sss = pow(clamp(dot(V, -L) * 0.5 + 0.5, 0.0, 1.0), 3.0)
            * clamp(vCrest * 0.9 + 0.4, 0.0, 1.0);
  body += uSunColor * sss * 0.16 * uIntensity;

  vec3 color = mix(body, skyRefl, fres);

  // --- Sun glitter ----------------------------------------------------
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(N, H), 0.0), 220.0);
  float wide = pow(max(dot(N, H), 0.0), 26.0) * 0.12;
  // Glitter is direct sun, so it has to disappear under cloud entirely —
  // shading the body but leaving the sparkle is a classic tell.
  color += uSunColor * (spec * 1.6 + wide) * uIntensity * shade;

  // --- Foam: shoreline, and the break out on the reef ------------------
  float noiseF = fbm3(vec3(vWorldPos.xz * 0.55, uTime * 0.55)) * 0.5 + 0.5;

  float crest = smoothstep(0.44, 0.74, vCrest) * noiseF;

  // Shore break, just outside the sand line — follows the island.
  float shoreBand = 1.0 - smoothstep(0.0, 0.10, abs(shoreRatio - 1.03));
  float surge = sin(shoreRatio * 26.0 - uTime * 2.1) * 0.5 + 0.5;
  float shoreFoam = shoreBand * (0.45 + 0.55 * surge) * (0.55 + 0.45 * noiseF);

  // Reef break — the waves Tavarua is famous for, standing off the island on
  // the coral edge rather than tracing the coastline.
  float reefBand = 1.0 - smoothstep(0.0, 0.09, abs(reefRatio - 1.0));
  float reefSurge = sin(reefRatio * 26.0 - uTime * 1.4) * 0.5 + 0.5;
  float reefFoam = reefBand * (0.30 + 0.70 * reefSurge) * noiseF * 0.8;

  float foam = clamp(crest * 0.6 + shoreFoam + reefFoam, 0.0, 1.0);
  vec3 foamCol = mix(vec3(0.95), uSunColor, 0.16);
  color = mix(color, foamCol, foam * 0.88);

  // --- Fog ------------------------------------------------------------
  float dist = length(uCameraPos - vWorldPos);
  float fog = smoothstep(uFogNear, uFogFar, dist);
  color = mix(color, uFogColor, fog);

  gl_FragColor = vec4(color, 1.0);
}
`;
