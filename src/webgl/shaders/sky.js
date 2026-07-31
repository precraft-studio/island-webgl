import { NOISE_GLSL } from './common.js';
import { CLOUDS_GLSL } from './clouds.js';
import { UNDERWATER_GLSL } from './underwater.js';

/**
 * Sky dome: vertical gradient, sun disc, and two layers of cloud.
 *
 * What makes the clouds read as clouds rather than as noise on a sphere:
 *
 *   - the direction is projected onto a plane at CLOUD_H, so the deck
 *     compresses toward the horizon the way a real one does
 *   - domain warping (see clouds.js) gives billowed, wind-torn shapes
 *   - lighting samples the density a step TOWARD the sun: where the cloud
 *     thins in that direction it lights up, which is what produces silver
 *     linings instead of flat grey
 *   - every colour comes from the shared Atmosphere palette, so the deck warms
 *     and darkens with the rest of the world as you drag between sections
 */

export const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const SKY_FRAG = /* glsl */ `
precision highp float;

uniform vec3 uSkyTop;
uniform vec3 uSkyBottom;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform float uIntensity;
uniform float uTime;
uniform float uCoverage;
uniform vec2 uStir;
uniform float uUnderwater;
uniform vec3 uWaterColor;

varying vec3 vDir;

${NOISE_GLSL}
${CLOUDS_GLSL}
${UNDERWATER_GLSL}

void main() {
  vec3 dir = normalize(vDir);
  vec3 sun = normalize(uSunDir);

  // --- Sky gradient ---------------------------------------------------
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(uSkyBottom, uSkyTop, pow(h, 0.85));

  // --- Sun glow + disc ------------------------------------------------
  float d = max(dot(dir, sun), 0.0);
  float glow = pow(d, 48.0) * 0.85 + pow(d, 6.0) * 0.18;
  float disc = smoothstep(0.9985, 0.9993, d);
  col += uSunColor * (glow + disc * 2.2) * uIntensity;

  float horizonWarm = pow(1.0 - abs(dir.y), 6.0)
    * max(dot(normalize(vec3(dir.x, 0.0, dir.z)),
              normalize(vec3(sun.x, 0.0, sun.z))), 0.0);
  col += uSunColor * horizonWarm * 0.12 * uIntensity;

  // --- Clouds ---------------------------------------------------------
  if (dir.y > 0.015) {
    // Stirred around the point the cursor touches the sea — the same centre
    // the shadows use, so deck and shadow are disturbed as one event.
    vec2 p1 = cloudStir(cloudPlaneFromDir(dir, uTime), uStir, 0.42, 0.10);
    float c1 = cloudDensity(p1, uTime, uCoverage);

    // Cirrus: stretched along the wind and much finer, so it reads as a thin
    // veil above the main deck rather than a second copy of it.
    vec2 uv = dir.xz / dir.y;
    vec2 p2 = vec2(uv.x * 0.10, uv.y * 0.42) + cloudWind(uTime) * 2.1;
    float c2 = smoothstep(0.42, 0.92, cloudFbm(p2, uTime * 1.6))
             * (0.30 + uCoverage * 0.30);

    // Self-shadowing: compare density here against a step toward the sun.
    // Where the cloud thins sunward, light gets through — that difference is
    // the silver lining.
    vec2 toSun = normalize(sun.xz + vec2(0.0001)) * 0.55;
    float cSun = cloudDensity(p1 + toSun, uTime, uCoverage);
    float lit = clamp((c1 - cSun) * 1.6 + 0.32, 0.0, 1.0);

    vec3 sunlitTop = mix(vec3(1.0), uSunColor, 0.42) * (0.75 + 0.45 * uIntensity);
    vec3 shadedBase = mix(uSkyTop * 1.05, uAmbient, 0.55);
    vec3 cloudCol = mix(shadedBase, sunlitTop, lit);

    // Rim glow when looking near the sun through thinning cloud.
    float rim = pow(max(dot(dir, sun), 0.0), 9.0) * (1.0 - lit);
    cloudCol += uSunColor * rim * 0.85 * uIntensity;

    float density = clamp(c1 + c2 * (1.0 - c1), 0.0, 1.0);

    // Fade into haze at the horizon and thin out directly overhead, so the
    // deck has a believable near edge instead of ending at the dome seam.
    float horizonFade = smoothstep(0.015, 0.16, dir.y);
    float zenithThin  = 1.0 - smoothstep(0.72, 1.0, dir.y) * 0.35;
    density *= horizonFade * zenithThin;

    cloudCol = mix(cloudCol, uFogColor, (1.0 - horizonFade) * 0.8);
    col = mix(col, cloudCol, density);
  }

  // Underwater there is no sky to see: scattering closes the view long before
  // any horizon. Without this the dome shows through wherever the seabed ends,
  // and a dusk sky paints the whole dive orange.
  col = underwaterMedium(col, 420.0, deepWater(uWaterColor), uUnderwater);

  gl_FragColor = vec4(col, 1.0);
}
`;
