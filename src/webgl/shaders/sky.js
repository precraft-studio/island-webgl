/**
 * Sky dome. Vertical gradient between the two palette colours plus a sun disc
 * and glow placed at uSunDir — so the sun is visibly *where* the lighting says
 * it is, which is what makes the drag read as the world turning.
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
uniform float uIntensity;

varying vec3 vDir;

void main() {
  vec3 dir = normalize(vDir);

  // Vertical gradient, eased so the horizon band is tighter than a raw mix.
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  float g = pow(h, 0.85);
  vec3 col = mix(uSkyBottom, uSkyTop, g);

  // Sun glow + disc
  float d = max(dot(dir, normalize(uSunDir)), 0.0);
  float glow = pow(d, 48.0) * 0.85 + pow(d, 6.0) * 0.18;
  float disc = smoothstep(0.9985, 0.9993, d);
  col += uSunColor * (glow + disc * 2.2) * uIntensity;

  // Slight warm lift near the horizon on the sun's side.
  float horizon = pow(1.0 - abs(dir.y), 6.0);
  col += uSunColor * horizon * max(dot(normalize(vec3(dir.x, 0.0, dir.z)),
                                        normalize(vec3(uSunDir.x, 0.0, uSunDir.z))), 0.0) * 0.12 * uIntensity;

  gl_FragColor = vec4(col, 1.0);
}
`;
