import { NOISE_GLSL } from './common.js';
import { CLOUDS_GLSL } from './clouds.js';
import { UNDERWATER_GLSL } from './underwater.js';
import { SHADOW_GLSL } from '../SunShadow.js';

/**
 * Island surface. Blends sand / rock / vegetation by height and slope, then
 * lights it with the shared sun uniforms.
 *
 * Phase 2 note: this procedural blend is the stand-in for the artist's
 * diffuse maps + a baked lightmap. When real textures arrive, replace the
 * `albedo` block and multiply by the lightmap — the lighting maths below
 * stays as-is.
 */
export const TERRAIN_VERT = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vHeight;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vHeight = position.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const TERRAIN_FRAG = /* glsl */ `
precision highp float;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform vec3 uWaterColor;
uniform float uIntensity;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uCameraPos;

// --- Photo projection ------------------------------------------------
// An aerial photograph projected straight down onto the terrain. When one is
// present it replaces the procedural albedo; the lighting maths below is
// untouched, which is exactly why this hybrid keeps the light sweep working.
uniform sampler2D uPhotoMap;
uniform float uHasPhoto;   // 0 = procedural, 1 = photo
uniform float uPhotoSize;  // world units the photo spans
uniform float uDelight;    // how hard to flatten the photo's own baked shading

uniform float uTime;
uniform float uCoverage;
uniform vec2 uStir;
uniform float uUnderwater;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vHeight;

${NOISE_GLSL}
${CLOUDS_GLSL}
${UNDERWATER_GLSL}
${SHADOW_GLSL}

/**
 * Surface detail the mesh cannot hold.
 *
 * The terrain is a 240x240 grid over 150 units, so a quad is more than half a
 * metre across — every grain of sand and every crack in the rock is below what
 * the geometry can express. Perturbing the normal from noise gradients puts it
 * back, and it is most of the difference between ground and a coloured shape.
 */
vec3 detailNormal(vec3 p, vec3 N, float amount) {
  if (amount < 0.01) return N;
  float e = 0.16;
  float h  = fbm3(p * 2.6);
  float hx = fbm3(p + vec3(e, 0.0, 0.0) * 2.6);
  float hz = fbm3(p + vec3(0.0, 0.0, e) * 2.6);
  vec3 bump = vec3(h - hx, 0.0, h - hz) * 5.5;

  float f = 0.05;
  float g  = fbm3(p * 9.5 + 13.0);
  float gx = fbm3(p * 9.5 + vec3(f, 0.0, 0.0) + 13.0);
  float gz = fbm3(p * 9.5 + vec3(0.0, 0.0, f) + 13.0);
  bump += vec3(g - gx, 0.0, g - gz) * 2.2;

  return normalize(N + bump * amount);
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(uCameraPos - vWorldPos);

  // Detail fades with distance so it never turns into aliasing.
  float viewDist = length(uCameraPos - vWorldPos);
  N = detailNormal(vWorldPos, N, (1.0 - smoothstep(20.0, 120.0, viewDist)) * 0.65);

  float slope = 1.0 - clamp(N.y, 0.0, 1.0);
  float grain = fbm3(vWorldPos * 0.35) * 0.5 + 0.5;

  // --- Albedo: sand → grass → rock -----------------------------------
  vec3 sand  = mix(vec3(0.86, 0.77, 0.60), vec3(0.78, 0.68, 0.51), grain);
  vec3 grass = mix(vec3(0.25, 0.38, 0.22), vec3(0.34, 0.47, 0.26), grain);
  vec3 rock  = mix(vec3(0.36, 0.33, 0.30), vec3(0.47, 0.44, 0.40), grain);

  // Beach band sits just above the waterline.
  float beach = 1.0 - smoothstep(0.15, 1.5, vHeight);
  float veg   = smoothstep(0.9, 2.6, vHeight) * (1.0 - smoothstep(0.35, 0.62, slope));

  vec3 albedo = mix(grass, sand, beach);
  albedo = mix(albedo, rock, smoothstep(0.38, 0.70, slope));
  albedo = mix(albedo, grass, veg * 0.55);

  // --- Photo albedo (top-down projection) -----------------------------
  if (uHasPhoto > 0.5) {
    vec2 uv = vWorldPos.xz / uPhotoSize + 0.5;
    vec3 photo = texture2D(uPhotoMap, uv).rgb;

    // De-light: a photo already contains the sun that shot it. Normalising
    // toward its own luminance flattens that baked shading so OUR sun is the
    // only light in the scene — without this the photo fights the drag sweep.
    float lum = max(dot(photo, vec3(0.2126, 0.7152, 0.0722)), 0.04);
    vec3 flat_ = photo * (0.5 / lum);
    photo = mix(photo, flat_, uDelight);

    // Outside the photo's footprint, fall back to the procedural blend.
    vec2 edge = smoothstep(vec2(0.0), vec2(0.06), uv) *
                (1.0 - smoothstep(vec2(0.94), vec2(1.0), uv));
    float inside = edge.x * edge.y;

    albedo = mix(albedo, photo, inside);
  }

  // --- Lighting -------------------------------------------------------
  // Wrapped lambert keeps the terminator soft, which reads better than hard
  // N·L when the sun is low during the drag sweep.
  float ndl = dot(N, L);
  float wrapped = clamp((ndl + 0.35) / 1.35, 0.0, 1.0);

  // Cheap sky occlusion: valleys darker than exposed faces.
  float ao = mix(0.72, 1.0, clamp(N.y * 0.5 + 0.5, 0.0, 1.0));

  // Same cloud field the sky draws, so shadows land under actual clouds.
  // Cloud overhead, and anything standing between this point and the sun.
  float shade = cloudShadow(vWorldPos, L, uTime, uCoverage, 0.45, uStir)
              * sunShadow(vWorldPos, N, L);

  // Wet sand: a band that the water has just been over. It is darker, smoother
  // and it shines — the single cue that separates a beach from a sand-coloured
  // slope, and it sits exactly where the shore foam breaks.
  float wet = (1.0 - smoothstep(0.05, 1.35, vHeight)) * (1.0 - smoothstep(0.4, 0.75, slope));
  albedo *= mix(1.0, 0.62, wet);

  vec3 diffuse = uSunColor * wrapped * uIntensity * shade;
  vec3 ambient = uAmbient * ao * 0.85;

  // Rim light picks out the silhouette against the sky when the sun is behind.
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * max(dot(-V, L) * 0.5 + 0.5, 0.0);
  vec3 color = albedo * (diffuse + ambient) + uSunColor * rim * 0.35 * uIntensity;

  // Specular. Dry sand and rock are rough and barely glint; wet sand is close
  // to a mirror. One lobe, with roughness driven by how wet the ground is.
  vec3 H = normalize(L + V);
  float rough = mix(0.62, 0.16, wet);
  float a = rough * rough;
  float a2 = a * a;
  float ndh = max(dot(N, H), 0.0);
  float dTerm = ndh * ndh * (a2 - 1.0) + 1.0;
  float ggx = a2 / (3.14159265 * dTerm * dTerm + 1e-5);
  float fres = 0.03 + 0.97 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  color += uSunColor * ggx * fres * max(dot(N, L), 0.0)
         * mix(0.05, 0.55, wet) * uIntensity * shade;

  // --- Fog ------------------------------------------------------------
  float dist = length(uCameraPos - vWorldPos);

  // Submerged parts of the island belong to the water, not the air.
  float submerged = max(uUnderwater, smoothstep(0.6, -1.2, vWorldPos.y));

  // Caustics on the sand. The lagoon floor IS this terrain, not the reef bed,
  // so without this the shallow water a diver swims over has no moving light
  // on it at all — which is most of why going under there looked like nothing
  // happened. Strongest in the shallows, gone by the time it is deep.
  if (submerged > 0.01) {
    float shallow = 1.0 - smoothstep(0.0, 16.0, -vWorldPos.y);
    float caus = caustics(vWorldPos.xz, uTime) * clamp(N.y, 0.0, 1.0);
    color += uSunColor * caus * shallow * submerged * 1.35 * uIntensity * shade;
  }

  color = underwaterMedium(color, dist, deepWater(uWaterColor), submerged);

  float fog = smoothstep(uFogNear, uFogFar, dist);
  color = mix(color, uFogColor, fog * (1.0 - uUnderwater));

  gl_FragColor = vec4(color, 1.0);
}
`;
