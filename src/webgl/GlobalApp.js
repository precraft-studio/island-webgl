import * as THREE from 'three';
import { state, EVENTS } from './state.js';
import { Atmosphere } from './Atmosphere.js';
import { IslandScene } from './IslandScene.js';
import { SECTIONS } from '../config/sections.js';
import { sampleJourney } from './journeys.js';
import { Post } from './Post.js';
import { SkyEnv } from './SkyEnv.js';
import { SunShadow } from './SunShadow.js';
import { createResolutionState, feedFrame } from './resolution.js';

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

    this._shadowFrame = 0;
    this.clock = new THREE.Clock();
    this.sizes = { width: 1, height: 1, dpr: 1 };

    /**
     * Resolution scale, adjusted at runtime from the frame rate the device is
     * actually achieving.
     *
     * There is no device list here and no attempt to guess from the user agent,
     * because the thing that matters — how many of these fragments this GPU can
     * shade per second, right now, at this thermal state — cannot be looked up.
     * A phone that is fine on the first page can be throttled to half speed four
     * minutes later, and a laptop on battery does the same. So the frame time
     * is the input, and this is the output.
     */
    this.res = createResolutionState({
      coarse:
        typeof window !== 'undefined' &&
        window.matchMedia?.('(pointer: coarse)').matches,
    });

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

    // Capture the sky into a cube map the water can reflect, and put the
    // frame through bloom on the way out.
    this.skyEnv = new SkyEnv(this.renderer, this.world.skyGeometry, this.world.skyMaterial);
    this.world.shared.uEnvMap.value = this.skyEnv.texture;
    this.world.shared.uHasEnv.value = 1;

    this.shadow = new SunShadow(this.renderer);
    this.world.shared.uShadowMap.value = this.shadow.texture;
    this.world.shared.uShadowMatrix.value = this.shadow.matrix;

    this.post = new Post(this.renderer, this.world.scene, this.camera);

    this.ready = true;
    this.resize(this.viewportInfo());
  }

  viewportInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    /**
     * Two caps, because a device ratio alone does not bound the work.
     *
     * The scene is fragment-bound — clouds, water, the underwater medium and
     * caustics are all evaluated per pixel — so cost tracks the drawing buffer,
     * not the CSS size. A 3x phone would shade ~2.25x the pixels for no visible
     * gain, hence the ratio cap; but a large tablet at only 2x already exceeds
     * what a mobile GPU can shade at this cost, and the ratio cap says nothing
     * about that. So a pixel budget rides alongside it.
     *
     * The budget applies to coarse pointers only. Desktop framing is signed off
     * as it stands and a budget there would quietly soften a 4K display to fix
     * a problem it does not have.
     */
    const coarse = window.matchMedia?.('(pointer: coarse)').matches;
    const byBudget = coarse
      ? Math.sqrt(1.8e6 / Math.max(width * height, 1))
      : Infinity;

    const capped = Math.max(1, Math.min(window.devicePixelRatio || 1, 2, byBudget));

    // The adaptive scale multiplies the cap rather than replacing it, and is
    // allowed below 1 — a phone that cannot hold the budget at 1x is better off
    // soft than stuttering.
    return { width, height, dpr: capped * this.res.scale };
  }

  resize(info = this.viewportInfo()) {
    if (!this.ready) return;
    const { width, height, dpr } = info;

    // Several sources report the same size (a ResizeObserver, the window resize
    // event, orientationchange). Acting on each would reallocate the composer's
    // render targets two or three times per rotation, which is a visible hitch
    // for no change at all.
    const s = this.sizes;
    if (s && s.width === width && s.height === height && s.dpr === dpr) return;

    this.sizes = { width, height, dpr };

    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);
    this.post?.setSize(width, height, dpr);

    this.camera.aspect = width / height;

    /**
     * Framing is held HORIZONTALLY, not vertically.
     *
     * A perspective camera's `fov` is the vertical angle, so a fixed value
     * means the horizontal view narrows with the aspect ratio. The journeys
     * here were tuned on a landscape window; on a phone held upright the same
     * fov leaves the island a small object in the middle of a tall frame —
     * every camera distance in journeys.js would be wrong at once.
     *
     * So the vertical angle is derived from the horizontal one instead: the
     * subject keeps its width whatever the shape of the window. Capped, since
     * on a very narrow screen the exact solution reaches fisheye.
     */
    // The aspect the journeys were actually framed against. Setting this to a
    // wider "typical desktop" figure silently re-frames every shot that was
    // already tuned — the compensation must start from the shape the camera
    // distances were chosen at, and only ever widen from there.
    const DESIGN_ASPECT = 1.05;
    const DESIGN_FOV = 42;
    const half = THREE.MathUtils.degToRad(DESIGN_FOV) / 2;
    const horizontal = 2 * Math.atan(Math.tan(half) * DESIGN_ASPECT);
    const vertical = 2 * Math.atan(Math.tan(horizontal / 2) / Math.max(this.camera.aspect, 0.01));

    this.camera.fov = THREE.MathUtils.clamp(
      THREE.MathUtils.radToDeg(vertical), DESIGN_FOV, 78
    );
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
    // Raw first: the clamp below exists to keep the damping stable across a
    // stall, but it would also disguise every stall as a 100ms frame and have
    // the resolution controller chase tab switches.
    const raw = this.clock.getDelta();
    const dt = Math.min(raw, 0.1);

    if (feedFrame(this.res, raw * 1000, this.clock.elapsedTime) !== null) {
      this.resize(this.viewportInfo());
    }

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
    this.world.update(dt, this.camera.position.y, u.uTime.value);

    // Populate the reef for whichever section the carousel has settled on.
    // Doing this on change rather than per frame keeps the instance rebuild
    // off the frame budget while the camera is actually moving.
    const settled = Math.round(s);
    if (settled !== this._populatedFor) {
      this._populatedFor = settled;
      this.world.applySection(SECTIONS[settled], this.camera.position);
    }

    // Where the cursor lands on the sea. Both the sky clouds and their shadows
    // are stirred around this one point, so a disturbance in the deck and the
    // disturbance in its shadow are always the same event.
    this.#updateStir(u, px, py);

    // The sky capture has to happen before the frame that reflects it, and
    // outside the composer — it renders to its own target.
    this.skyEnv.update();

    // Shadows only matter where something stands in the light, so the map is
    // only rebuilt for sections that have anything on the island.
    const wantShadow = this.world.flora.group.visible || this.world.boat.group.visible;
    if (wantShadow && this._shadowFrame++ % 2 === 0) {
      const ok = this.shadow.update(this.world.scene, this.atmosphere.sunDir, [
        this.world.terrain, this.world.flora.group, this.world.boat.group,
      ]);
      u.uShadowOn.value = ok ? 1 : 0;
    } else if (!wantShadow) {
      u.uShadowOn.value = 0;
    }

    this.post.render();
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
