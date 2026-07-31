import gsap from 'gsap';

/**
 * A ring that trails the pointer.
 *
 * It is an accent, not a pointer. The operating system's own cursor stays
 * visible underneath — it is drawn by the system compositor and never waits
 * for the page, so nothing in the DOM can match it, and substituting for it is
 * what makes a site feel laggy however carefully the substitute is written.
 * The reference site does the same: real cursors (grab on the drag surface)
 * with a trailing ring over the top.
 *
 * Because the real pointer is right there, this is free to lag — which is the
 * effect.
 *
 * States come from markup, matching the reference site's contract:
 *   data-cursor="draggable"   → hover style
 *   data-cursor-down="dragging" → active/pressed style
 */
export function initCursor() {
  // Touch devices get no custom cursor — there is no pointer to decorate.
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  const ring = document.querySelector('.cursor-ring');
  if (!ring) return;

  const pointer = { x: innerWidth / 2, y: innerHeight / 2 };
  const ringPos = { ...pointer };
  let visible = false;

  const onMove = (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    if (!visible) {
      visible = true;
      ringPos.x = pointer.x;
      ringPos.y = pointer.y;
      document.body.classList.add('cursor-active');
    }
  };

  window.addEventListener('pointermove', onMove, { passive: true });
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
