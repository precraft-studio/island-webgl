import * as THREE from 'three';

/**
 * THE LIGHTING SOURCE OF TRUTH.
 *
 * `slideProgress` (0..1, driven by horizontal drag) is mapped to a time of day.
 * Everything visual — sun direction, sun colour, sky gradient, fog, ambient,
 * water tint — is derived here and pushed into shader uniforms.
 *
 * This is the piece that makes "drag the island → the light sweeps across it"
 * feel like one coherent scene rather than several effects that happen to
 * animate together. Keep it as the single place that owns lighting.
 */

// Keyframes around the full 0..1 loop. Colours are linear-ish sRGB values that
// get converted by the renderer's tone mapping.
const STOPS = [
  {
    at: 0.0, // dawn
    sunColor: '#ffb27a',
    skyTop: '#2a4a7a',
    skyBottom: '#ffc39a',
    fog: '#c9b0a4',
    ambient: '#4a5a78',
    water: '#2b5a75',
    intensity: 0.75,
  },
  {
    at: 0.28, // midday
    sunColor: '#fff6e0',
    skyTop: '#2f7fc4',
    skyBottom: '#bfe4f2',
    fog: '#cfe6ee',
    ambient: '#7fa0bd',
    water: '#1f7fa0',
    intensity: 1.15,
  },
  {
    at: 0.55, // golden hour
    sunColor: '#ff9d52',
    skyTop: '#3d5f96',
    skyBottom: '#ffbe7c',
    fog: '#e0b394',
    ambient: '#6b6a86',
    water: '#2d6a86',
    intensity: 0.95,
  },
  {
    at: 0.75, // dusk
    sunColor: '#ff6f4d',
    skyTop: '#1e2c52',
    skyBottom: '#ff8a5c',
    fog: '#8f7086',
    ambient: '#404a70',
    water: '#1d4460',
    intensity: 0.6,
  },
  {
    at: 1.0, // back to dawn (loop)
    sunColor: '#ffb27a',
    skyTop: '#2a4a7a',
    skyBottom: '#ffc39a',
    fog: '#c9b0a4',
    ambient: '#4a5a78',
    water: '#2b5a75',
    intensity: 0.75,
  },
];

const toColor = (hex) => new THREE.Color(hex);

const PALETTE = STOPS.map((s) => ({
  at: s.at,
  sunColor: toColor(s.sunColor),
  skyTop: toColor(s.skyTop),
  skyBottom: toColor(s.skyBottom),
  fog: toColor(s.fog),
  ambient: toColor(s.ambient),
  water: toColor(s.water),
  intensity: s.intensity,
}));

export class Atmosphere {
  constructor() {
    this.sunDir = new THREE.Vector3();
    this.sunColor = new THREE.Color();
    this.skyTop = new THREE.Color();
    this.skyBottom = new THREE.Color();
    this.fogColor = new THREE.Color();
    this.ambient = new THREE.Color();
    this.waterColor = new THREE.Color();
    this.intensity = 1;
    this.update(0);
  }

  /**
   * @param {number} p slideProgress, wrapped to 0..1
   */
  update(p) {
    const t = ((p % 1) + 1) % 1;

    // --- Sun position -------------------------------------------------
    // One full drag rotation sweeps the sun through a full arc. The vertical
    // term keeps it above the horizon at midday and dips it at dusk, which is
    // what sells the "light gradient" as the scene turns.
    const angle = t * Math.PI * 2;
    const elevation = Math.sin(angle * 0.5 + 0.35) * 0.62 + 0.22;
    this.sunDir
      .set(Math.sin(angle), Math.max(elevation, -0.25), Math.cos(angle))
      .normalize();

    // --- Palette interpolation ---------------------------------------
    let a = PALETTE[0];
    let b = PALETTE[PALETTE.length - 1];
    for (let i = 0; i < PALETTE.length - 1; i++) {
      if (t >= PALETTE[i].at && t <= PALETTE[i + 1].at) {
        a = PALETTE[i];
        b = PALETTE[i + 1];
        break;
      }
    }
    const span = b.at - a.at || 1;
    const k = THREE.MathUtils.clamp((t - a.at) / span, 0, 1);
    // smoothstep so palette changes ease rather than ramp linearly
    const e = k * k * (3 - 2 * k);

    this.sunColor.copy(a.sunColor).lerp(b.sunColor, e);
    this.skyTop.copy(a.skyTop).lerp(b.skyTop, e);
    this.skyBottom.copy(a.skyBottom).lerp(b.skyBottom, e);
    this.fogColor.copy(a.fog).lerp(b.fog, e);
    this.ambient.copy(a.ambient).lerp(b.ambient, e);
    this.waterColor.copy(a.water).lerp(b.water, e);
    this.intensity = THREE.MathUtils.lerp(a.intensity, b.intensity, e);
  }
}
