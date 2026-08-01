/**
 * The control law for adaptive resolution, kept separate from the engine so it
 * can be run against frame times the machine it was written on cannot produce.
 *
 * This exists because the target device is not available. The site was reported
 * slow on a phone; the phone cannot be profiled from here, and every number
 * measured locally comes from a GPU that is not the one having the problem. A
 * controller tuned by eye against one machine's frame times is a guess. This one
 * is a pure function of (state, frame time), so its behaviour on a device that
 * runs at 8fps, or one that thermally throttles halfway through a visit, can be
 * checked directly — see scripts/resolution-sim.mjs.
 */

/** How many frames go into one decision. ~1s at 60fps, ~3s at 20fps. */
export const WINDOW = 60;

export function createResolutionState({ coarse = false } = {}) {
  return {
    /**
     * Touch devices START low and climb, rather than starting full and falling.
     *
     * Both directions reach the same place, but not with the same first
     * impression. Measured on this scene at a 390x844 frame, an integrated GPU
     * runs 8fps at device ratio 2 and 44fps at 0.6 — so a phone opening at full
     * ratio spends its first seconds at eight frames a second, which is the
     * whole of what a visitor sees before deciding the site is broken. Opening
     * low costs some sharpness for a few seconds on a fast phone; opening high
     * costs the visit on a slow one.
     */
    scale: coarse ? 0.6 : 1,
    samples: [],
    lastChange: 0,
    lastWasDrop: false,
    goodWindows: 0,

    // Below ~45fps a drag stops tracking the finger, which is the thing this
    // site is. 22ms is where it starts to read as a slideshow rather than a
    // scene.
    budgetMs: 22,

    // 0.35 of a capped ratio of 2 is 0.7 device pixels per CSS pixel. That is
    // soft, and it is meant to be — it is the floor for hardware that cannot
    // hold the budget any other way, and a soft scene that tracks the finger
    // reads better than a sharp one that does not.
    min: 0.35,
    max: 1,
  };
}

/**
 * Feed one frame. Returns the new scale when it changed, or null.
 *
 * @param r    state from createResolutionState
 * @param dtMs frame time in milliseconds (raw — see the stall guard below)
 * @param now  seconds since start
 */
export function feedFrame(r, dtMs, now) {
  // Frames during the first second and a half are shader compiles, not
  // rendering, and a tab returning from the background reports one enormous
  // delta. Neither says anything about fragment cost.
  if (now < 1.5) return null;
  if (dtMs > 500) return null;

  r.samples.push(dtMs);
  if (r.samples.length < WINDOW) return null;

  // Median, not mean: a garbage collection pause or a shader compile lands in
  // the mean and would drag resolution down over a frame that had nothing to do
  // with how many pixels are being shaded.
  const sorted = [...r.samples].sort((a, b) => a - b);
  const median = sorted[sorted.length >> 1];
  r.samples.length = 0;

  // Wait out the previous change before judging the next. Longer after a drop,
  // so a device sitting right on the budget cannot ping-pong between two
  // scales — each change reallocates the composer's render targets, and that is
  // itself a visible hitch.
  if (now - r.lastChange < (r.lastWasDrop ? 4 : 2)) return null;

  let next = r.scale;
  let dropping = false;

  if (median > r.budgetMs && r.scale > r.min) {
    /**
     * Drop by exactly what the overshoot implies, and no more.
     *
     * Cost is close to linear in pixel count and pixels go as the square of the
     * scale, so the scale wants the square root of the ratio. Forcing a minimum
     * step on top of that — which this did at first, as
     * min(scale - 0.1, scale * need) — makes a device that is 5% over budget
     * drop 0.1, land well under, climb back, and go over again. That was 14
     * reallocations across one thermal throttle in the simulation, each of them
     * a hitch the visitor sees. Undershooting slightly just means another small
     * correction two seconds later, and the change filter below discards steps
     * too small to be worth a reallocation at all.
     */
    const need = Math.sqrt(r.budgetMs / median);
    next = Math.max(r.min, r.scale * need);
    dropping = true;
  } else if (median < r.budgetMs * 0.85 && r.scale < r.max) {
    /**
     * The climb threshold is just UNDER the budget, not far under it.
     *
     * dt comes from the animation frame callback, so on a 60Hz display it
     * cannot go below 16.7ms however much headroom the GPU has. A threshold of,
     * say, 0.62 of the budget would be 13.6ms — unreachable, and the scale
     * could then only ever fall, which is how the first version of this was
     * wrong. Anything comfortably at refresh rate is the signal that there is
     * room to spend: 0.85 of 22ms is 18.7ms, reached at 60fps and missed at 50.
     */
    if (++r.goodWindows < 2) return null;   // one good window is not evidence
    next = Math.min(r.max, r.scale + 0.1);
  } else {
    r.goodWindows = 0;
    return null;
  }

  r.goodWindows = 0;
  if (Math.abs(next - r.scale) < 0.01) return null;

  r.scale = Math.round(next * 100) / 100;
  r.lastChange = now;
  r.lastWasDrop = dropping;
  return r.scale;
}
