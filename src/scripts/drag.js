import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { navigate } from 'astro:transitions/client';
import { state, EVENTS } from '../webgl/state.js';
import { SECTIONS, pathFor, indexForPath } from '../config/sections.js';

gsap.registerPlugin(Observer);

/** Drag distance that advances one section. Lower = flickier. */
const PX_PER_SECTION = 200;

/**
 * Ceiling on a single pointer event's contribution. A pointer re-entering the
 * window can report one enormous jump, which would otherwise fling the
 * carousel across several sections from a gesture the user never made.
 */
const MAX_STEP_PX = 90;

/**
 * Travel before the drag starts — and, because lockAxis decides the axis from
 * that first sample, before the direction is committed.
 *
 * A mouse can afford 2px: it is precise, and anything larger reads as slack in
 * the control. A finger cannot. A vertical swipe on a phone almost always has a
 * few pixels of sideways drift in it, so deciding at 2px locks a good share of
 * intended scrolls to the x axis and turns the carousel instead. 12px is the
 * usual touch slop and is still well under the distance a deliberate horizontal
 * swipe covers before it feels like it has begun.
 */
const dragMinimum = () =>
  window.matchMedia?.('(pointer: coarse)').matches ? 12 : 2;

const LAST = SECTIONS.length - 1;
const clamp = (v) => Math.max(0, Math.min(LAST, v));

let observer = null;
let keyHandlerZone = null;
let index = 0;

/**
 * Horizontal drag is a carousel of five detents, not free rotation.
 *
 * While the finger is down the scene follows a *fractional* index so the
 * rotation tracks the drag. On release it snaps to the nearest section and
 * navigates to that route — the canvas persists, so the world turns into place
 * instead of reloading.
 *
 * `--slide-progress` carries the settled integer index, matching the contract
 * the reference site uses; the engine gets the continuous value separately.
 */
export function initDrag() {
  const zone = document.querySelector('[data-cursor="draggable"]');
  if (!zone) return;

  index = indexForPath(location.pathname);
  publish(zone, index);

  observer?.kill();
  observer = Observer.create({
    target: zone,
    type: 'pointer,touch',
    dragMinimum: dragMinimum(),
    lockAxis: true,
    onPress: () => zone.setAttribute('data-cursor-state', 'dragging'),
    onRelease: () => zone.removeAttribute('data-cursor-state'),
    onDrag: (self) => {
      if (self.lockedAxis === 'y') return;
      // Drag left to move forward through the sections.
      const step = Math.max(-MAX_STEP_PX, Math.min(MAX_STEP_PX, self.deltaX));
      index = clamp(index - step / PX_PER_SECTION);
      publish(zone, index);
    },
    onDragEnd: () => settle(zone),
  });

  // Keyboard access — the drag must not be the only way through the sections.
  // Detach the previous listener first: boot() can run more than once per page,
  // and stacked listeners would each advance the index, so one arrow press
  // would jump several sections at once.
  keyHandlerZone?.removeEventListener('keydown', onKey);
  zone.addEventListener('keydown', onKey);
  keyHandlerZone = zone;
}

function onKey(e) {
  const zone = e.currentTarget;
  if (e.key === 'ArrowRight') { e.preventDefault(); go(zone, Math.round(index) + 1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(zone, Math.round(index) - 1); }
}

function go(zone, target) {
  index = clamp(target);
  settle(zone);
}

/** Snap to the nearest section, then route to it. */
function settle(zone) {
  const snapped = clamp(Math.round(index));
  index = snapped;
  publish(zone, snapped);

  // Trailing slash stripped on both sides: the base-mounted home page reports
  // as `/island-webgl` while pathFor builds `/island-webgl/`, so a literal
  // comparison would treat a drag that snaps back to where it started as a
  // route change and navigate to the page already on screen.
  const path = pathFor(snapped);
  const same = (a, b) => a.replace(/\/+$/, '') === b.replace(/\/+$/, '');
  if (!same(path, location.pathname)) navigate(path);
}

function publish(zone, value) {
  // Integer for the DOM contract, continuous for the scene.
  zone.style.setProperty('--slide-progress', String(Math.round(value)));
  state.emit(EVENTS.SLIDE, value);

  const readout = document.querySelector('[data-slide-readout]');
  if (readout) readout.textContent = SECTIONS[clamp(Math.round(value))].nav;
}
