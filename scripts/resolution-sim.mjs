/**
 * Run the adaptive-resolution controller against devices this machine is not.
 *
 *     node scripts/resolution-sim.mjs
 *
 * The cost model comes from EXT_disjoint_timer_query measurements of this scene
 * at a 390x844 frame on an Intel UHD 630: frame time is close to linear in
 * pixel count with a fixed floor that resolution cannot touch.
 *
 *     dpr 2.0 -> 1.32 Mpx -> 120.6 ms      dpr 0.75 -> 0.19 Mpx -> 31.1 ms
 *     dpr 1.5 -> 0.74 Mpx ->  75.6 ms      dpr 0.6  -> 0.12 Mpx -> 22.9 ms
 *     dpr 1.0 -> 0.33 Mpx ->  47.9 ms      dpr 0.5  -> 0.08 Mpx -> 18.4 ms
 *
 * Least squares over those six points: 11.8 ms fixed + 82.4 ms per megapixel.
 * A device is then one multiplier on each term — `speed` scales the per-pixel
 * cost, which is what actually differs between GPUs here.
 */
import { createResolutionState, feedFrame } from '../src/webgl/resolution.js';

const FIXED_MS = 11.8;
const MS_PER_MPX = 82.4;
const CSS_PX = 390 * 844;
const DPR_CAP = 2;

/** Frame time for a device at a given resolution scale. */
const frameMs = (device, scale) => {
  const mpx = (CSS_PX * (DPR_CAP * scale) ** 2) / 1e6;
  const gpu = FIXED_MS * device.fixed + mpx * MS_PER_MPX * device.speed;
  // A frame can never beat the display's refresh interval — the reason the
  // climb threshold cannot be far below the budget.
  return Math.max(gpu, device.refreshMs);
};

function run(device, seconds = 60, throttleAt = null) {
  const r = createResolutionState({ coarse: device.coarse !== false });
  const trace = [];
  let now = 0;
  let d = { ...device };
  while (now < seconds) {
    if (throttleAt && now >= throttleAt && d.speed === device.speed) {
      d = { ...d, speed: device.speed * 2 };   // thermal throttle: half speed
      trace.push({ t: +now.toFixed(1), event: 'THROTTLED to half speed' });
    }
    const ms = frameMs(d, r.scale);
    now += ms / 1000;
    const changed = feedFrame(r, ms, now);
    if (changed !== null) {
      trace.push({ t: +now.toFixed(1), scale: changed, ms: +ms.toFixed(1),
                   fps: Math.round(1000 / ms) });
    }
  }
  const finalMs = frameMs(d, r.scale);
  return { trace, scale: r.scale, ms: +finalMs.toFixed(1), fps: Math.round(1000 / finalMs) };
}

const DEVICES = [
  { name: 'flagship phone  (10x this GPU)', speed: 0.1, fixed: 0.4, refreshMs: 16.7 },
  { name: 'fast phone      (3x this GPU)', speed: 1 / 3, fixed: 0.6, refreshMs: 16.7 },
  { name: 'mid phone       (= this GPU)', speed: 1, fixed: 1, refreshMs: 16.7 },
  { name: 'slow phone      (half this GPU)', speed: 2, fixed: 1.4, refreshMs: 16.7 },
  { name: 'very slow phone (quarter)', speed: 4, fixed: 2, refreshMs: 16.7 },
];

let failures = 0;
for (const dev of DEVICES) {
  const r = run(dev);
  const changes = r.trace.length;
  // Converged = it stopped changing well before the end of the run.
  const lastChange = r.trace.length ? r.trace[r.trace.length - 1].t : 0;
  const settled = lastChange < 45;
  const ok = settled && changes <= 8;
  if (!ok) failures++;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  ${dev.name.padEnd(38)} ` +
    `settles at scale ${String(r.scale).padEnd(5)} ${String(r.fps).padStart(3)}fps  ` +
    `(${changes} changes, last at ${lastChange}s)`
  );
  if (!ok) console.log(JSON.stringify(r.trace, null, 2));
}

/**
 * The regression the first version of this shipped with.
 *
 * dt comes from the animation frame callback, so on a 60Hz display it cannot go
 * below 16.7ms. The climb threshold was 0.62 of the budget — 13.6ms — which is
 * unreachable, so the scale could only ever fall and a phone starting at 0.6
 * was stuck there for good. A device with real headroom has to reach the top.
 */
const flagship = run(DEVICES[0]);
const climbs = flagship.scale >= 0.99;
if (!climbs) failures++;
console.log(
  `${climbs ? 'PASS' : 'FAIL'}  device with headroom climbs 0.6 -> ${flagship.scale} ` +
  `(${flagship.fps}fps)`
);

/**
 * Not climbing is also a requirement. A device that is inside the budget but
 * would break it one step up must STAY — otherwise it climbs, drops, climbs,
 * and every one of those is a render target reallocation the visitor sees.
 */
const fast = run(DEVICES[1], 120);
const lastFast = fast.trace.length ? fast.trace[fast.trace.length - 1].t : 0;
const stable = lastFast < 60 && fast.ms <= 22.5;
if (!stable) failures++;
console.log(
  `${stable ? 'PASS' : 'FAIL'}  device near the budget settles instead of oscillating ` +
  `(scale ${fast.scale}, ${fast.fps}fps, last change ${lastFast}s of 120s)`
);

/**
 * The case the whole thing exists for: a phone that is fine, and then is not,
 * four minutes in. Run it from a device that has somewhere to fall.
 */
const t = run(DEVICES[1], 100, 40);
const corrections = t.trace.filter((e) => e.t > 40 && e.scale !== undefined);
const responded = corrections.length > 0 && t.scale < fast.scale;
if (!responded) failures++;
console.log(
  `${responded ? 'PASS' : 'FAIL'}  thermal throttle at 40s: ${corrections.length} corrections, ` +
  `scale ${fast.scale} -> ${t.scale} (${t.fps}fps)`
);

console.log(failures ? `\n${failures} FAILED` : '\nall passed');
process.exit(failures ? 1 : 0);
