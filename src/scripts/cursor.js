import gsap from 'gsap';

/**
 * Custom cursor: a dot pinned to the pointer and a ring that lags behind it.
 * The lag IS the effect — the ring lerps toward the pointer every frame, so
 * fast movement stretches the gap and stopping lets it settle.
 *
 * States come from markup, matching the reference site's contract:
 *   data-cursor="draggable"   → hover style
 *   data-cursor-down="dragging" → active/pressed style
 */
export function initCursor() {
  // Touch devices get no custom cursor — there is no pointer to decorate.
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  const ring = document.querySelector('.cursor-ring');
  const dot = document.querySelector('.cursor-dot');
  if (!ring || !dot) return;

  const pointer = { x: innerWidth / 2, y: innerHeight / 2 };
  const ringPos = { ...pointer };
  let visible = false;

  /**
   * The dot is written here, in the event, and NOT in the frame loop.
   *
   * This is the difference between a cursor that feels attached to the hand and
   * one that feels laggy. Setting it in the ticker means the dot is always at
   * least a frame behind the pointer, and since the same frame loop is also
   * rendering the scene, every hitch in the render shows up as the cursor
   * stalling. The native cursor is hidden, so that lag is the only pointer the
   * visitor has — it has to be exact.
   *
   * The ring is the opposite case and stays in the ticker: its lag is the
   * effect.
   */
  const placeDot = () => {
    dot.style.transform =
      `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
  };

  const onMove = (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    placeDot();
    if (!visible) {
      visible = true;
      ringPos.x = pointer.x;
      ringPos.y = pointer.y;
      document.body.classList.add('cursor-active');
    }
  };

  // `pointerrawupdate` fires ahead of pointermove and is not coalesced, so the
  // dot lands on the newest position the OS has rather than the one the frame
  // pipeline got round to reporting. Where it does not exist, pointermove is
  // the same code path.
  const moveEvent = 'onpointerrawupdate' in window ? 'pointerrawupdate' : 'pointermove';
  window.addEventListener(moveEvent, onMove, { passive: true });
  window.addEventListener('pointerdown', () => ring.classList.add('is-down'));
  window.addEventListener('pointerup', () => ring.classList.remove('is-down'));
  document.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-active');
    visible = false;
  });

  // Hover states, delegated so it survives DOM swaps on page transitions.
  document.addEventListener('pointerover', (e) => {
    const el = e.target instanceof Element ? e.target.closest('[data-cursor]') : null;
    ring.dataset.state = el?.getAttribute('data-cursor') ?? '';
  });

  // Ring size is a transform, not width and height.
  //
  // Transitioning width/height re-runs layout on every frame of the change,
  // on the same main thread the pointer is being handled on. A scale is
  // composited and touches neither layout nor paint.
  const SIZE = { '': 1, draggable: 2.18 };
  let scale = 1;

  gsap.ticker.add(() => {
    // 0.16 ≈ a ring that feels attached but clearly trails. Lower = looser.
    ringPos.x += (pointer.x - ringPos.x) * 0.16;
    ringPos.y += (pointer.y - ringPos.y) * 0.16;

    const target = (SIZE[ring.dataset.state] ?? 1) * (ring.classList.contains('is-down') ? 0.72 : 1);
    scale += (target - scale) * 0.18;

    ring.style.transform =
      `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
  });
}
