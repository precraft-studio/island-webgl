/**
 * Tiny event bus. The DOM layer and the WebGL layer never import each other's
 * internals — they only exchange events through here. This is the same
 * decoupling Montfort uses (`state.emit(ATTACH)` / `state.emit(RESIZE)`).
 */
export const EVENTS = {
  ATTACH: 'attach',
  DETACH: 'detach',
  RESIZE: 'resize',
  SCROLL: 'scroll',
  SLIDE: 'slide',
};

class Emitter {
  #map = new Map();

  on(type, fn) {
    if (!this.#map.has(type)) this.#map.set(type, new Set());
    this.#map.get(type).add(fn);
    return () => this.off(type, fn);
  }

  off(type, fn) {
    this.#map.get(type)?.delete(fn);
  }

  emit(type, payload) {
    this.#map.get(type)?.forEach((fn) => fn(payload));
  }
}

export const state = new Emitter();
