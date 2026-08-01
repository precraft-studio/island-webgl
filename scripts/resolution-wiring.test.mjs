/**
 * The integration point, tested without a GPU.
 *
 *     node scripts/resolution-wiring.test.mjs
 *
 * resolution-sim.mjs proves the control law converges. This proves the four
 * lines in GlobalApp.tick() that feed it are right, which is a different and
 * much dumber class of bug: seconds passed where milliseconds were expected,
 * the clamped delta passed instead of the raw one, the return value ignored so
 * the scale changes and the canvas never follows.
 *
 * None of that needs a renderer, so none of it is blocked by a machine whose
 * WebGL context pool is exhausted — which is exactly the situation this was
 * written in.
 */
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createResolutionState, feedFrame, WINDOW } from '../src/webgl/resolution.js';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '..', 'src', 'webgl', 'GlobalApp.js'), 'utf8');

let failed = 0;
const check = (name, fn) => {
  try { fn(); console.log(`PASS  ${name}`); }
  catch (e) { failed++; console.log(`FAIL  ${name}\n      ${e.message}`); }
};

check('tick passes MILLISECONDS, not seconds', () => {
  // getDelta() returns seconds; feedFrame's budget is in ms. Passing seconds
  // would make every frame look like 0.016ms and the scale would pin at max on
  // any device, however slow.
  assert.match(src, /feedFrame\(\s*this\.res,\s*\w+\s*\*\s*1000/,
    'expected the delta to be multiplied by 1000 at the call site');
});

check('tick passes the RAW delta, not the clamped one', () => {
  // dt is clamped to 0.1 to keep damping stable across a stall. Feeding the
  // clamp in would report every stall as a 100ms frame and have the controller
  // chase tab switches instead of fragment cost.
  const call = src.match(/feedFrame\(\s*this\.res,\s*(\w+)\s*\*\s*1000/);
  assert.ok(call, 'no feedFrame call found');
  assert.notStrictEqual(call[1], 'dt', 'the clamped delta is being fed in');
  assert.match(src, new RegExp(`const ${call[1]}\\s*=\\s*this\\.clock\\.getDelta\\(\\)`),
    `${call[1]} is not the raw clock delta`);
});

check('tick acts on the return value by resizing', () => {
  assert.match(src, /if\s*\(\s*feedFrame\([^)]*\)\s*!==\s*null\s*\)\s*\{\s*this\.resize\(this\.viewportInfo\(\)\)/,
    'the scale can change without the canvas following');
});

check('viewportInfo multiplies the capped ratio by the scale', () => {
  assert.match(src, /capped\s*\*\s*this\.res\.scale/,
    'viewportInfo does not apply res.scale');
});

check('the engine holds no second copy of the control law', () => {
  assert.ok(!src.includes('goodWindows'),
    'GlobalApp still carries its own copy of the controller state');
});

check('a slow device drops, in ms units, through the real call shape', () => {
  const r = createResolutionState({ coarse: true });
  assert.strictEqual(r.scale, 0.6, 'touch devices should start at 0.6');
  let now = 2, changed = null;
  for (let i = 0; i < WINDOW * 3 && changed === null; i++) {
    now += 0.12;                                  // 120ms frames = 8fps
    changed = feedFrame(r, 120, now);
  }
  assert.ok(changed !== null && changed < 0.6, `expected a drop, got ${changed}`);
});

check('the same numbers in SECONDS would silently do nothing', () => {
  // The bug this guards: 0.12 instead of 120 looks like a 0.12ms frame.
  const r = createResolutionState({ coarse: true });
  let now = 2, changed = null;
  for (let i = 0; i < WINDOW * 3 && changed === null; i++) {
    now += 0.12;
    changed = feedFrame(r, 0.12, now);
  }
  assert.ok(changed === null || changed > 0.6,
    'seconds-as-ms should read as an idle GPU, never as a slow one');
});

console.log(failed ? `\n${failed} FAILED` : '\nall passed');
process.exit(failed ? 1 : 0);
