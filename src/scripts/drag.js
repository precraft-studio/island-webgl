import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { navigate } from 'astro:transitions/client';
import { state, EVENTS } from '../webgl/state.js';
import { SECTIONS, pathFor, indexForPath } from '../config/sections.js';

gsap.registerPlugin(Observer);

/** Drag distance that advances one section. Lower = flickier. */
const PX_PER_SECTION = 200;

const LAST = SECTIONS.length - 1;
const clamp = (v) => Math.max(0, Math.min(LAST, v));

let observer = null;
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
    dragMinimum: 2,
    lockAxis: true,
    onPress: () => zone.setAttribute('data-cursor-state', 'dragging'),
    onRelease: () => zone.removeAttribute('data-cursor-state'),
    onDrag: (self) => {
      if (self.lockedAxis === 'y') return;
      // Drag left to move forward through the sections.
      index = clamp(index - self.deltaX / PX_PER_SECTION);
      publish(zone, index);
    },
    onDragEnd: () => settle(zone),
  });

  // Keyboard access — the drag must not be the only way through the sections.
  zone.addEventListener('keydown', onKey);
}

function onKey(e) {
  const zone = e.currentTarget;
  if (e.key === 'ArrowRight') go(zone, Math.round(index) + 1);
  if (e.key === 'ArrowLeft') go(zone, Math.round(index) - 1);
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

  const path = pathFor(snapped);
  if (path !== location.pathname) navigate(path);
}

function publish(zone, value) {
  // Integer for the DOM contract, continuous for the scene.
  zone.style.setProperty('--slide-progress', String(Math.round(value)));
  state.emit(EVENTS.SLIDE, value);

  const readout = document.querySelector('[data-slide-readout]');
  if (readout) readout.textContent = SECTIONS[clamp(Math.round(value))].nav;
}
