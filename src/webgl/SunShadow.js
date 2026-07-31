import * as THREE from 'three';

/**
 * A shadow map, cast by the sun.
 *
 * Nothing in this scene threw a shadow. The island had an analytic one on the
 * water, but a palm standing on sand cast nothing, and neither did a bure —
 * which is why the ground read as a painted surface with objects placed on top
 * rather than as objects standing in light. Contact shadow is the cue that
 * puts a thing IN a scene instead of ON it.
 *
 * A single orthographic pass covering the island. It does not follow the
 * camera or cascade: everything that matters is inside a 100-unit disc, so one
 * fixed frustum at high resolution is both simpler and sharper than a rig that
 * has to handle arbitrary range.
 *
 * Three.js's own shadow system is not used because every material here is a
 * custom ShaderMaterial; wiring those into its shadow chunks means adopting
 * its lights pipeline wholesale. Rendering depth ourselves is less code and
 * leaves the shaders readable.
 */

const SIZE = 2048;
const RADIUS = 62;   // world units the frustum covers, centred on the island
const DEPTH = 260;

export class SunShadow {
  constructor(renderer) {
    this.renderer = renderer;

    this.target = new THREE.WebGLRenderTarget(SIZE, SIZE);
    this.target.texture.minFilter = THREE.NearestFilter;
    this.target.texture.magFilter = THREE.NearestFilter;
    this.target.texture.generateMipmaps = false;
    this.target.depthTexture = new THREE.DepthTexture(SIZE, SIZE);
    this.target.depthTexture.type = THREE.UnsignedIntType;
    this.target.depthTexture.minFilter = THREE.NearestFilter;
    this.target.depthTexture.magFilter = THREE.NearestFilter;

    this.camera = new THREE.OrthographicCamera(
      -RADIUS, RADIUS, RADIUS, -RADIUS, 1, DEPTH
    );

    // Depth only — colour is never read, so the cheapest material will do.
    this.depthMaterial = new THREE.MeshBasicMaterial({ color: 0 });

    // Light-space matrix, with the [-1,1] to [0,1] remap folded in.
    this.matrix = new THREE.Matrix4();
    this._bias = new THREE.Matrix4().set(
      0.5, 0, 0, 0.5,
      0, 0.5, 0, 0.5,
      0, 0, 0.5, 0.5,
      0, 0, 0, 1
    );
  }

  get texture() {
    return this.target.depthTexture;
  }

  /**
   * Render the casters. `casters` is the list of objects that should appear in
   * the map — deliberately explicit, because the sky, the water and the reef
   * either cannot cast a useful shadow or would only cast one on themselves.
   */
  update(scene, sunDir, casters) {
    // Sun below the horizon: nothing to cast.
    if (sunDir.y < 0.06) return false;

    this.camera.position.copy(sunDir).multiplyScalar(DEPTH * 0.55);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateMatrixWorld();
    this.camera.updateProjectionMatrix();

    this.matrix
      .copy(this._bias)
      .multiply(this.camera.projectionMatrix)
      .multiply(this.camera.matrixWorldInverse);

    // Hide everything, show the casters, restore afterwards.
    const restore = [];
    scene.traverse((o) => {
      if (o.isMesh || o.isPoints) {
        restore.push([o, o.visible]);
        o.visible = false;
      }
    });
    for (const c of casters) {
      c?.traverse?.((o) => { if (o.isMesh) o.visible = true; });
      if (c?.isMesh) c.visible = true;
    }

    const prevTarget = this.renderer.getRenderTarget();
    const prevOverride = scene.overrideMaterial;

    scene.overrideMaterial = this.depthMaterial;
    this.renderer.setRenderTarget(this.target);
    this.renderer.clear();
    this.renderer.render(scene, this.camera);

    scene.overrideMaterial = prevOverride;
    this.renderer.setRenderTarget(prevTarget);

    for (const [o, v] of restore) o.visible = v;
    return true;
  }
}

/**
 * GLSL side. Percentage-closer filtering over a 3x3 tap so edges are soft
 * rather than stair-stepped, plus a slope-scaled bias: a surface seen almost
 * edge-on to the sun needs far more tolerance than one facing it, and a single
 * constant bias either acnes the flat ground or detaches the shadows from
 * whatever is standing on it.
 */
export const SHADOW_GLSL = /* glsl */ `
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowOn;

float sunShadow(vec3 worldPos, vec3 N, vec3 L) {
  if (uShadowOn < 0.5) return 1.0;

  vec4 lp = uShadowMatrix * vec4(worldPos, 1.0);
  vec3 c = lp.xyz / lp.w;
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0) return 1.0;

  float ndl = max(dot(N, L), 0.0);
  float bias = mix(0.0022, 0.00035, ndl);

  float lit = 0.0;
  float texel = 1.0 / ${SIZE}.0;
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      float d = texture2D(uShadowMap, c.xy + vec2(float(x), float(y)) * texel).r;
      lit += (c.z - bias) > d ? 0.0 : 1.0;
    }
  }
  lit /= 9.0;

  // Fade the shadow out at the edge of the map instead of ending it on a line.
  vec2 e = min(c.xy, 1.0 - c.xy);
  float edge = smoothstep(0.0, 0.04, min(e.x, e.y));
  return mix(1.0, lit, edge);
}
`;
