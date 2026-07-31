import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { state, EVENTS } from '../webgl/state.js';

gsap.registerPlugin(Observer);

/** Opening time of day. Mirrored in GlobalApp's initial slide value. */
export const INITIAL_SLIDE = 0.28;

/**
 * Horizontal drag → scene rotation + light sweep.
 *
 * The drag writes a single scalar to the CSS custom property
 * `--slide-progress` AND emits it on the event bus. That mirrors the reference
 * site's contract: one value drives both the DOM (via CSS var) and the WebGL
 * scene (via uniforms), so the two can never drift apart.
 */
export function initDrag() {
  const zone = document.querySelector('[data-cursor="draggable"]');
  if (!zone) return;

  const readout = document.querySelector('[data-slide-readout]');
  // Midday. Must match GlobalApp's initial slide, or the scene would jump on
  // the first publish.
  let slide = INITIAL_SLIDE;

  const publish = () => {
    zone.style.setProperty('--slide-progress', slide.toFixed(4));
    state.emit(EVENTS.SLIDE, slide);
    if (readout) readout.textContent = (((slide % 1) + 1) % 1).toFixed(2);
  };

  publish();

  Observer.create({
    target: zone,
    type: 'pointer,touch',
    dragMinimum: 2,
    // Only horizontal drags rotate the scene; vertical belongs to the page.
    lockAxis: true,
    onPress: () => zone.setAttribute('data-cursor-state', 'dragging'),
    onRelease: () => zone.removeAttribute('data-cursor-state'),
    onDrag: (self) => {
      if (self.lockedAxis === 'y') return;
      // 1/1400 px → one full revolution takes ~1400px of drag. Tune to taste;
      // this is the single number that decides whether the drag feels heavy.
      slide -= self.deltaX / 1400;
      publish();
    },
  });

  // Keyboard access — the drag must not be the only way to move the scene.
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { slide += 0.045; publish(); }
    if (e.key === 'ArrowRight') { slide -= 0.045; publish(); }
  });
}
