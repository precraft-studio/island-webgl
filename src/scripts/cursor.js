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

  gsap.ticker.add(() => {
    // 0.16 ≈ a ring that feels attached but clearly trails. Lower = looser.
    ringPos.x += (pointer.x - ringPos.x) * 0.16;
    ringPos.y += (pointer.y - ringPos.y) * 0.16;

    ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
    dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
  });
}
