import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { state, EVENTS } from '../webgl/state.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll drives two things from ONE progress value:
 *   - the DOM text layers (parallax, different rates = depth)
 *   - the WebGL camera dolly (emitted as SCROLL)
 * Sharing the source is what keeps 2D and 3D locked together.
 */
export function initScroll() {
  const scroller = document.querySelector('[data-scroll-root]');
  if (!scroller) return;

  ScrollTrigger.create({
    trigger: scroller,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => state.emit(EVENTS.SCROLL, self.progress),
  });

  // Multi-layer parallax. `data-parallax` is the rate: bigger = moves faster
  // = reads as closer to the viewer.
  gsap.utils.toArray('[data-parallax]').forEach((el) => {
    const rate = parseFloat(el.dataset.parallax) || 1;
    gsap.to(el, {
      yPercent: -18 * rate,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('[data-chapter]') || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Chapter copy fades in once, on entry.
  gsap.utils.toArray('[data-chapter]').forEach((chapter) => {
    const items = chapter.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    gsap.from(items, {
      y: 34,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: chapter, start: 'top 72%', once: true },
    });
  });
}
