import * as THREE from 'three';
import { state, EVENTS } from './state.js';
import { Atmosphere } from './Atmosphere.js';
import { IslandScene } from './IslandScene.js';

/**
 * The engine. Owns the renderer, the camera and the frame loop, and knows
 * nothing about the DOM beyond the canvas it was handed — everything else
 * arrives as events (SLIDE from the drag handler, SCROLL from ScrollTrigger).
 */
class App {
  constructor() {
    this.ready = false;
    this.atmosphere = new Atmosphere();

    // Drag state: `target` jumps, `current` chases it — this gap is the inertia.
    this.slide = { target: 0, current: 0 };
    this.scroll = { target: 0, current: 0 };

    this.clock = new THREE.Clock();
    this.sizes = { width: 1, height: 1, dpr: 1 };

    this.#bind();
  }

  #bind() {
    state.on(EVENTS.RESIZE, (info) => this.resize(info));
    state.on(EVENTS.SLIDE, (v) => { this.slide.target = v; });
    state.on(EVENTS.SCROLL, (v) => { this.scroll.target = v; });
    state.on(EVENTS.ATTACH, () => this.start());
    state.on(EVENTS.DETACH, () => this.stop());
  }

  async init(wrapper, canvas) {
    if (this.ready) return;

    this.wrapper = wrapper;
    this.canvas = canvas;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.5, 1400);

    this.world = new IslandScene();

    this.ready = true;
    this.resize(this.viewportInfo());
  }

  viewportInfo() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      // Mobile runs the full 3D scene (no 2D fallback), so cap DPR at 2 —
      // a 3x phone would otherwise shade ~2.25x the pixels for no visible gain.
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    };
  }

  resize(info = this.viewportInfo()) {
    if (!this.ready) return;
    const { width, height, dpr } = info;
    this.sizes = { width, height, dpr };

    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  start() {
    if (!this.ready || this.running) return;
    this.running = true;
    this.clock.start();
    this.renderer.setAnimationLoop(() => this.tick());
  }

  stop() {
    this.running = false;
    this.renderer?.setAnimationLoop(null);
  }

  tick() {
    const dt = Math.min(this.clock.getDelta(), 0.1);

    // Frame-rate independent damping. `k` is the per-60fps-frame catch-up
    // fraction; the pow() keeps the feel identical at 120Hz and 30Hz.
    const damp = (obj, k) => {
      const f = 1 - Math.pow(1 - k, dt * 60);
      obj.current += (obj.target - obj.current) * f;
    };
    damp(this.slide, 0.075);
    damp(this.scroll, 0.09);

    const s = this.slide.current;
    const sc = this.scroll.current;

    // --- Atmosphere ----------------------------------------------------
    this.atmosphere.update(s);
    const u = this.world.shared;
    u.uSunDir.value.copy(this.atmosphere.sunDir);
    u.uSunColor.value.copy(this.atmosphere.sunColor);
    u.uSkyTop.value.copy(this.atmosphere.skyTop);
    u.uSkyBottom.value.copy(this.atmosphere.skyBottom);
    u.uAmbient.value.copy(this.atmosphere.ambient);
    u.uFogColor.value.copy(this.atmosphere.fogColor);
    u.uWaterColor.value.copy(this.atmosphere.waterColor);
    u.uIntensity.value = this.atmosphere.intensity;
    u.uTime.value = this.clock.getElapsedTime();

    // --- Camera --------------------------------------------------------
    // Orbit rate (0.85) deliberately differs from the sun's sweep rate (1.0).
    // If they matched, the sun would be locked to the camera and the light
    // would never appear to move across the island.
    const az = s * Math.PI * 2 * 0.85;
    const dist = THREE.MathUtils.lerp(112, 56, sc);
    const height = THREE.MathUtils.lerp(31, 11, sc);
    const lookY = THREE.MathUtils.lerp(6, 3.2, sc);

    this.camera.position.set(Math.sin(az) * dist, height, Math.cos(az) * dist);
    this.camera.lookAt(0, lookY, 0);
    u.uCameraPos.value.copy(this.camera.position);

    this.renderer.render(this.world.scene, this.camera);
  }
}

export const GlobalApp = new App();
export { state, EVENTS };
