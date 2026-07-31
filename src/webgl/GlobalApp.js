import * as THREE from 'three';
import { state, EVENTS } from './state.js';
import { Atmosphere } from './Atmosphere.js';
import { IslandScene } from './IslandScene.js';
import { SECTIONS } from '../config/sections.js';
import { sampleJourney } from './journeys.js';

/**
 * The engine. Owns the renderer, the camera and the frame loop, and knows
 * nothing about the DOM beyond the canvas it was handed — everything else
 * arrives as events (SLIDE from the drag handler, SCROLL from ScrollTrigger).
 */
class App {
  constructor() {
    this.ready = false;
    this.atmosphere = new Atmosphere();

    // Fractional section index (0..SECTIONS.length-1). `target` jumps, `current`
    // chases it — that gap is what makes the carousel feel weighted rather than
    // stepped, and what carries the scene through the route change.
    this.slide = { target: 0, current: 0 };
    this.scroll = { target: 0, current: 0 };

    // Pointer, normalised to -1..1. Damped hard on purpose: the world should
    // feel like it notices the cursor, not like it is being steered by it.
    // This is the whole trick behind the reference site's sense of liveness —
    // the scene answers a gesture the visitor did not know they were making.
    this.pointer = { tx: 0, ty: 0, x: 0, y: 0 };

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
    // `ready` alone is not enough: two callers can both pass the check before
    // either finishes, and end up building two renderers on one canvas.
    if (this.ready || this.initializing) return;
    this.initializing = true;

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

    // A browser allows only a handful of live WebGL contexts (~16). Without
    // this, every full reload during development leaks one and the renderer
    // eventually fails to construct at all — "Error creating WebGL context",
    // with no scene and no obvious cause.
    // Note: `beforeunload`, not `pagehide` — pagehide also fires when the tab
    // is merely hidden, and killing the context there loses the scene on every
    // tab switch.
    window.addEventListener('beforeunload', () => {
      this.renderer?.setAnimationLoop(null);
      this.renderer?.dispose();
      this.renderer?.forceContextLoss();
    });

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.5, 1400);

    window.addEventListener(
      'pointermove',
      (e) => {
        this.pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        this.pointer.ty = -((e.clientY / window.innerHeight) * 2 - 1);
      },
      { passive: true }
    );

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
    // Each section carries its own time of day, and dragging interpolates
    // between neighbours — the same idea as the reference site baking a
    // different lightmap per page, but computed instead of stored.
    const i0 = THREE.MathUtils.clamp(Math.floor(s), 0, SECTIONS.length - 1);
    const i1 = Math.min(i0 + 1, SECTIONS.length - 1);
    const sun = THREE.MathUtils.lerp(SECTIONS[i0].sun, SECTIONS[i1].sun, s - i0);
    this.atmosphere.update(sun);

    // Cloud cover is art-directed the same way — clear over the lagoon,
    // building toward the horizon section.
    this.world.shared.uCoverage.value = THREE.MathUtils.lerp(
      SECTIONS[i0].clouds, SECTIONS[i1].clouds, s - i0
    );
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
    // One full turn spread across the five sections — 72° apart. The sun is
    // set per section rather than by this angle, so the light is never locked
    // to the camera.
    const az = (s / SECTIONS.length) * Math.PI * 2;
    // Opens high enough to read the heart from the air (~50° elevation), then
    // dives to sea level as you scroll. The shape IS the subject, so the first
    // frame has to show it.
    // Each section chooses where scrolling takes the camera. Blend between the
    // neighbours' journeys while dragging, so a half-turned carousel is not
    // snapping between two different flight paths mid-gesture.
    const jA = sampleJourney(SECTIONS[i0].journey, sc);
    const jB = sampleJourney(SECTIONS[i1].journey, sc);
    const k = s - i0;
    const dist = THREE.MathUtils.lerp(jA.d, jB.d, k);
    const height = THREE.MathUtils.lerp(jA.h, jB.h, k);
    const lookY = THREE.MathUtils.lerp(jA.look, jB.look, k);
    const azExtra = THREE.MathUtils.lerp(jA.az, jB.az, k);

    // Pointer parallax. Deliberately tiny — a few degrees of swing and a metre
    // or two of lift. Large enough to register as the world responding, small
    // enough that it never feels like a camera control.
    this.pointer.x += (this.pointer.tx - this.pointer.x) * 0.045;
    this.pointer.y += (this.pointer.ty - this.pointer.y) * 0.045;
    const px = this.pointer.x;
    const py = this.pointer.y;

    const azTotal = az + azExtra + px * 0.05;
    this.camera.position.set(
      Math.sin(azTotal) * dist,
      height + py * 2.4,
      Math.cos(azTotal) * dist
    );
    this.camera.lookAt(px * 1.4, lookY - py * 0.5, 0);
    this.camera.updateMatrixWorld();
    u.uCameraPos.value.copy(this.camera.position);

    // How submerged the eye is. Smoothed over ~1.6 units rather than switched
    // at y = 0, so breaking the surface is a transition instead of a pop —
    // this single value drives the medium in every shader.
    const submerged = THREE.MathUtils.smoothstep(-this.camera.position.y, -0.8, 0.8);
    u.uUnderwater.value = submerged;
    this.world.setUnderwater(submerged, this.camera.position.y);
    this.world.update(dt, this.camera.position.y, u.uTime.value, this.camera.position);

    // Populate the reef for whichever section the carousel has settled on.
    // Doing this on change rather than per frame keeps the instance rebuild
    // off the frame budget while the camera is actually moving.
    const settled = Math.round(s);
    if (settled !== this._populatedFor) {
      this._populatedFor = settled;
      this.world.applySection(SECTIONS[settled]);
    }

    // Where the cursor lands on the sea. Both the sky clouds and their shadows
    // are stirred around this one point, so a disturbance in the deck and the
    // disturbance in its shadow are always the same event.
    this.#updateStir(u, px, py);

    this.renderer.render(this.world.scene, this.camera);
  }

  /**
   * Project the cursor onto the water plane and convert to cloud-plane
   * coordinates — the same mapping cloudShadow uses, so the stir centre means
   * the same thing to the sky and to the ground.
   */
  #updateStir(u, px, py) {
    this._ndc = this._ndc || new THREE.Vector3();
    const origin = this.camera.position;
    const dir = this._ndc.set(px, py, 0.5).unproject(this.camera).sub(origin).normalize();

    // Ray/plane at y = 0. Looking at the horizon gives a near-parallel ray, so
    // clamp the travel rather than letting the intersection shoot to infinity.
    let t = dir.y !== 0 ? -origin.y / dir.y : 0;
    if (!(t > 0)) t = 0;
    t = Math.min(t, 400);

    const hitX = origin.x + dir.x * t;
    const hitZ = origin.z + dir.z * t;

    const CLOUD_H = 300;
    u.uStir.value.set((hitX / CLOUD_H) * 0.3, (hitZ / CLOUD_H) * 0.3);
    // The same point in plain world units, for anything that lives in the
    // water rather than on the cloud plane.
    u.uStirWorld.value.set(hitX, hitZ);
  }
}

export const GlobalApp = new App();

// Debug handle. The engine is deliberately unreachable from the DOM, which
// also makes it unreachable from the console — this is the one door in.
if (typeof window !== 'undefined') window.__islandApp = GlobalApp;
export { state, EVENTS };
