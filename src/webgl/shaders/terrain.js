import { NOISE_GLSL } from './common.js';
import { CLOUDS_GLSL } from './clouds.js';
import { UNDERWATER_GLSL } from './underwater.js';

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

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(uCameraPos - vWorldPos);

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
  float shade = cloudShadow(vWorldPos, L, uTime, uCoverage, 0.45, uStir);

  vec3 diffuse = uSunColor * wrapped * uIntensity * shade;
  vec3 ambient = uAmbient * ao * 0.85;

  // Rim light picks out the silhouette against the sky when the sun is behind.
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * max(dot(-V, L) * 0.5 + 0.5, 0.0);
  vec3 color = albedo * (diffuse + ambient) + uSunColor * rim * 0.35 * uIntensity;

  // --- Fog ------------------------------------------------------------
  float dist = length(uCameraPos - vWorldPos);

  // Submerged parts of the island belong to the water, not the air.
  float wet = max(uUnderwater, smoothstep(0.6, -1.2, vWorldPos.y));
  color = underwaterMedium(color, dist, deepWater(uWaterColor), wet);

  float fog = smoothstep(uFogNear, uFogFar, dist);
  color = mix(color, uFogColor, fog * (1.0 - uUnderwater));

  gl_FragColor = vec4(color, 1.0);
}
`;
