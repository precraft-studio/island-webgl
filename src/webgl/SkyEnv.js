import * as THREE from 'three';

/**
 * The sky, captured into a cube map so surfaces can reflect it.
 *
 * The water was reflecting an approximation of the sky written a second time
 * in its own shader — which meant the clouds overhead were never in the water,
 * and any change to the sky had to be mirrored by hand in another file to stay
 * consistent. Rendering the real sky into a cube map removes both problems at
 * once: there is one sky, and the water reflects it.
 *
 * A second mesh sharing the sky's geometry and material renders into the cube.
 * Sharing the material is the point — the uniforms are the same objects, so the
 * reflection cannot drift out of step with the sky it came from.
 */
export class SkyEnv {
  constructor(renderer, skyGeometry, skyMaterial) {
    this.renderer = renderer;

    // 128 is plenty: this is reflected off a moving surface, and detail beyond
    // this is destroyed by the ripples before anyone could see it.
    this.target = new THREE.WebGLCubeRenderTarget(128, {
      type: THREE.HalfFloatType,
      generateMipmaps: false,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    });

    this.camera = new THREE.CubeCamera(1, 2000, this.target);

    this.scene = new THREE.Scene();
    const dome = new THREE.Mesh(skyGeometry, skyMaterial);
    dome.frustumCulled = false;
    this.scene.add(dome);

    this.frame = 0;
  }

  get texture() {
    return this.target.texture;
  }

  /**
   * Refresh the capture. Not every frame: the sky changes on the timescale of
   * drifting cloud, and six renders a frame to chase that is waste.
   */
  update(force = false) {
    if (!force && this.frame++ % 4 !== 0) return;
    this.camera.update(this.renderer, this.scene);
  }
}
