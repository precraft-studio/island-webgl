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
uniform samplerCube uEnvMap;
uniform float uHasEnv;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vCrest;

${NOISE_GLSL}
${CLOUDS_GLSL}
${UNDERWATER_GLSL}
${COAST_GLSL}

/**
 * Ripples below the mesh resolution.
 *
 * The vertex displacement carries the swell — metres of it, at the scale the
 * geometry can hold. Everything finer than a vertex has to arrive as normals,
 * and its absence is most of why untextured water reads as a plastic membrane:
 * a real surface is never smooth at the scale that catches light.
 *
 * Two octaves, drifting at different rates so they never lock into a pattern.
 */
vec3 rippleNormal(vec2 p, float t) {
  float e = 0.4;
  float h  = fbm3(vec3(p * 1.15, t * 0.85));
  float hx = fbm3(vec3((p + vec2(e, 0.0)) * 1.15, t * 0.85));
  float hz = fbm3(vec3((p + vec2(0.0, e)) * 1.15, t * 0.85));
  vec3 coarse = normalize(vec3(h - hx, e * 1.5, h - hz));

  float f = 0.12;
  float g  = fbm3(vec3(p * 5.2 + 37.0, t * 1.9));
  float gx = fbm3(vec3((p + vec2(f, 0.0)) * 5.2 + 37.0, t * 1.9));
  float gz = fbm3(vec3((p + vec2(0.0, f)) * 5.2 + 37.0, t * 1.9));
  vec3 fine = normalize(vec3(g - gx, f * 2.2, g - gz));

  return normalize(coarse + fine * 0.55);
}

/**
 * The island's own shadow, thrown across the water.
 *
 * Nothing in this scene casts a shadow, and at a low sun that absence is loud:
 * an island sitting in blazing water with no shadow reads as a sticker. This
 * marches back along the sun ray and asks whether it passed through the island,
 * using the same coastline the beach and the surf already agree on — so the
 * shadow lands under the actual shape rather than under a circle.
 */
float islandShadow(vec3 p, vec3 L) {
  if (L.y < 0.06) return 1.0;

  float lit = 1.0;
  for (int i = 1; i <= 7; i++) {
    vec3 q = p + L * (float(i) * 7.0);
    float rr = length(q.xz) / max(coastRadius(q.xz), 0.001);
    if (rr < 1.0) {
      // The island's profile, near enough: a dome inside the coastline.
      float top = pow(1.0 - rr, 1.15) * 12.5;
      lit = min(lit, smoothstep(0.0, 3.5, q.y - top));
    }
  }
  return mix(0.34, 1.0, lit);
}

/** GGX. A real specular lobe is what turns a dot of sun into a glitter path. */
float ggxSpec(vec3 N, vec3 V, vec3 L, float rough) {
  vec3 H = normalize(V + L);
  float a = rough * rough;
  float a2 = a * a;
  float ndh = max(dot(N, H), 0.0);
  float d = ndh * ndh * (a2 - 1.0) + 1.0;
  return a2 / (3.14159265 * d * d + 1e-5);
}

/**
 * The sky a reflected ray lands on — gradient AND sun.
 *
 * Reflecting a two-colour gradient is why calm water so often looks like
 * coloured glass: the sun is missing from the thing being reflected, so the
 * surface can never throw it back.
 */
vec3 skySample(vec3 dir, vec3 sun) {
  // The real sky, captured into a cube map — clouds, sun and all. This is why
  // the deck overhead now appears in the water instead of only above it.
  if (uHasEnv > 0.5) return textureCube(uEnvMap, dir).rgb;

  // Fallback until the first capture lands.
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(uSkyBottom, uSkyTop, pow(h, 0.85));
  float d = max(dot(dir, sun), 0.0);
  col += uSunColor * (pow(d, 46.0) * 0.75 + pow(d, 6.0) * 0.16) * uIntensity;
  return col;
}

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
  float shade = cloudShadow(vWorldPos, L, uTime, uCoverage, 0.42, uStir)
              * islandShadow(vWorldPos, L);

  body *= mix(vec3(1.0), waterLight * shade, 0.7);

  // --- Surface detail --------------------------------------------------
  // Ripples fade out with distance rather than being drawn at every range:
  // held on, the sub-pixel detail turns into a shimmering mess of aliasing,
  // which reads as noise rather than as water.
  float viewDist = length(uCameraPos - vWorldPos);
  float detail = 1.0 - smoothstep(30.0, 190.0, viewDist);
  if (detail > 0.01) {
    vec3 rip = rippleNormal(vWorldPos.xz, uTime);
    // Calmer inside the reef, where the island shelters the water.
    float exposure = mix(0.35, 1.0, smoothstep(0.9, 1.6, reefRatio));
    N = normalize(mix(N, normalize(N + rip * 1.5), detail * exposure));
  }

  // --- Reflection + fresnel -------------------------------------------
  vec3 R = reflect(-V, N);
  vec3 skyRefl = skySample(R, L);

  // Schlick, with water's actual F0. The old curve reflected 3% head-on and
  // reached full mirror far too readily; 0.02 with a fifth power is why real
  // water is glass at grazing angles and nearly clear straight down.
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  // Shallow water is far less mirror-like — you see sand, not sky.
  fres *= mix(1.0, 0.30, shelf);

  // Light through the back of a wave, strongest looking into the sun.
  float sss = pow(clamp(dot(V, -L) * 0.5 + 0.5, 0.0, 1.0), 3.0)
            * clamp(vCrest * 0.9 + 0.4, 0.0, 1.0);
  body += uSunColor * sss * 0.16 * uIntensity;

  vec3 color = mix(body, skyRefl, fres);

  // --- Sun glitter ----------------------------------------------------
  // Roughness rises with distance, which spreads the highlight into the long
  // shimmering path you actually see on water instead of a single hot dot.
  float rough = mix(0.045, 0.30, smoothstep(20.0, 260.0, viewDist));
  float spec = ggxSpec(N, V, L, rough) * max(dot(N, L), 0.0);
  // Glitter is direct sun, so it has to disappear under cloud entirely —
  // shading the body but leaving the sparkle is a classic tell.
  color += uSunColor * spec * 0.055 * uIntensity * shade * fres * 14.0;

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
