# island-webgl — Phase 0

Technical prototype for an island WebGL scroll experience.

**What this exists to prove:** that the hardest parts of the pipeline work
*before* any 3D art is commissioned. If the light sweep, the drag feel, or the
water were going to fail, they fail here in week one — not in week eight with
an artist's model already paid for.

Stack: **Astro 5** · **Three.js r169** · **GSAP (Observer + ScrollTrigger)** · Vite

---

## Run it

```bash
npm install
npm run dev
```

Then: **drag horizontally** across the hero to turn between the five sections,
and **scroll** to move through the chapters of whichever section you landed on.

## The interaction model

Horizontal drag is **not free rotation** — it is a carousel of five detents,
and each detent is a route:

| Index | Route | Section |
|---|---|---|
| 0 | `/` | The Island |
| 1 | `/reef/` | The Reef |
| 2 | `/lagoon/` | The Lagoon |
| 3 | `/canopy/` | The Canopy |
| 4 | `/horizon/` | The Horizon |

While the pointer is down the scene follows a *fractional* index so rotation
tracks the finger. On release it snaps to the nearest section and navigates —
the canvas persists, so the world turns into place rather than reloading.
`--slide-progress` carries the settled integer index; the engine receives the
continuous value separately. Vertical scroll then belongs entirely to the
chapters of the current section.

All five come from one config (`src/config/sections.js`), which also feeds the
Astro routes and the nav, so they can never disagree about how many sections
exist or what order they are in.

---

## What is proven here

| Mechanism | Where | Status |
|---|---|---|
| Drag → snap between five sections, each a route | `scripts/drag.js` + `config/sections.js` | ✅ |
| Per-section time of day, interpolated while dragging | `webgl/GlobalApp.js` → `webgl/Atmosphere.js` | ✅ |
| Inertia / damping on drag and scroll | `webgl/GlobalApp.js` (`damp()`) | ✅ |
| Animated ocean: swells, normals, fresnel, sun glitter, foam | `webgl/shaders/water.js` | ✅ |
| Scroll → parallax (DOM) + camera dolly (3D), one source | `scripts/scroll.js` | ✅ |
| Custom inertial cursor with hover/press states | `scripts/cursor.js` | ✅ |
| Page transitions with a persisted WebGL context | `layouts/Layout.astro` | ✅ |
| Aerial-photo albedo projection (hybrid route) | `webgl/shaders/terrain.js` | ✅ interface ready |

---

## Architecture

The DOM layer and the WebGL layer never import each other. They communicate
through a small event bus (`webgl/state.js`), which is what allows the canvas
to survive a page navigation while the markup around it is replaced.

```
scripts/drag.js ──emit(SLIDE)──┐
scripts/scroll.js ─emit(SCROLL)─┼──▶ GlobalApp ──▶ Atmosphere ──▶ shared uniforms
                                │                                    │
layouts/Layout.astro ─emit(RESIZE)                        sky · terrain · water
```

### The one idea worth keeping

`Atmosphere` is the **single source of truth for lighting**. Drag position maps
to a time of day, which produces the sun direction and the entire palette — sky,
terrain, water, fog, ambient. Every shader reads the same uniform objects, so
the world re-lights as one coherent scene instead of several effects that happen
to animate at the same time.

The camera orbits at a *different* rate than the sun sweeps (`0.85` vs `1.0`).
If they matched, the sun would be pinned to the viewer and the light would never
appear to travel across the island. That number is load-bearing.

---

## The numbers you will want to tune

| Value | File | Effect |
|---|---|---|
| `self.deltaX / 1400` | `scripts/drag.js` | Drag sensitivity. Lower divisor = lighter, spinnier. |
| `damp(this.slide, 0.075)` | `webgl/GlobalApp.js` | Inertia. Lower = longer glide after release. |
| `0.85` orbit multiplier | `webgl/GlobalApp.js` | Camera-vs-sun rate. Never set this to `1.0`. |
| `STOPS[]` | `webgl/Atmosphere.js` | The palette keyframes — dawn / midday / golden / dusk. |
| `IslandScene.height()` | `webgl/IslandScene.js` | The island silhouette. |

---

## Roadmap

- **Phase 0 — done.** Pipeline proven with procedural stand-ins.
- **Phase 1 — DOM polish.** Chapter navigation, hero entrance timeline, sound toggle.
- **Phase 2 — real art.** Replace `IslandScene.height()` with a GLTF load, add
  the aerial photo (see `public/textures/README.md`), bake a lightmap.
- **Phase 3 — production.** Camera path per chapter, KTX2/Draco compression,
  mobile performance pass (DPR is already capped at 2).

### Visual direction: hybrid

Low-poly 3D geometry carrying an **aerial photograph as albedo**. This keeps
photographic realism while leaving the lighting computable — a pure photo or
image-sequence approach would bake the sun into the pixels and lose the light
sweep entirely, which is the signature effect.

---

## Performance notes

- Device pixel ratio is capped at **2**. Mobile runs the full 3D scene with no
  2D fallback, so this cap matters.
- Water is a 200×200 grid; the terrain is 200×200. Both are candidates for LOD
  reduction on small screens if the frame budget gets tight.
- No textures are loaded at all until an aerial photo is supplied.
