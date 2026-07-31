import * as THREE from 'three';
import { fbm2D } from './noise.js';
import { SKY_VERT, SKY_FRAG } from './shaders/sky.js';
import { TERRAIN_VERT, TERRAIN_FRAG } from './shaders/terrain.js';
import { WATER_VERT, WATER_FRAG } from './shaders/water.js';

export const ISLAND_RADIUS = 34;

/** 1×1 placeholder so the sampler is always bound, even with no photo. */
const BLANK_TEXTURE = new THREE.DataTexture(
  new Uint8Array([255, 255, 255, 255]), 1, 1
);
BLANK_TEXTURE.needsUpdate = true;

/**
 * Drop an aerial photo here and the terrain switches from procedural colour to
 * the photograph — no code change required. Top-down, island centred, square.
 */
export const PHOTO_URL = '/textures/island-aerial.webp';

const smoothstep = (edge0, edge1, x) => {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

/**
 * Procedural stand-in for the artist's `island.glb`.
 *
 * PHASE 2 SWAP: replace `buildTerrain()` with a GLTF load and keep everything
 * else. The material, uniforms and lighting contract below are what the real
 * asset plugs into, which is the whole point of proving them now.
 */
export class IslandScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Shared uniform *objects* — every material references these same
    // instances, so Atmosphere only has to write them once per frame.
    this.shared = {
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunColor: { value: new THREE.Color(0xffffff) },
      uSkyTop: { value: new THREE.Color(0x2f7fc4) },
      uSkyBottom: { value: new THREE.Color(0xbfe4f2) },
      uAmbient: { value: new THREE.Color(0x7fa0bd) },
      uFogColor: { value: new THREE.Color(0xcfe6ee) },
      uWaterColor: { value: new THREE.Color(0x1f7fa0) },
      uIntensity: { value: 1 },
      uCameraPos: { value: new THREE.Vector3() },
      uTime: { value: 0 },
      uFogNear: { value: 90 },
      uFogFar: { value: 330 },
      uShoreRadius: { value: ISLAND_RADIUS },

      // Photo projection — inert until an image is actually dropped in.
      uPhotoMap: { value: BLANK_TEXTURE },
      uHasPhoto: { value: 0 },
      uPhotoSize: { value: ISLAND_RADIUS * 2.35 },
      uDelight: { value: 0.6 },
    };

    this.#buildSky();
    this.#buildTerrain();
    this.#buildWater();
    this.loadPhoto();
  }

  /** Island height field. Radial falloff × fbm, with a ridge along the spine. */
  static height(x, z) {
    const r = Math.hypot(x, z);
    const falloff = smoothstep(ISLAND_RADIUS * 1.05, ISLAND_RADIUS * 0.08, r);

    const base = fbm2D(x * 0.042, z * 0.042, 5) * 0.5 + 0.5;
    // A ridge gives the silhouette a readable peak instead of a dome.
    const ridge = 1 - Math.abs(fbm2D(x * 0.018 + 11.3, z * 0.018 - 7.1, 3));

    // The constant term is a radial dome: without it the noise can dip at the
    // centre and the island reads as an accidental atoll instead of a landmass.
    const h = base * 0.46 + ridge * 0.28 + 0.26;
    return Math.pow(falloff, 1.35) * h * 26 - 1.7;
  }

  #buildSky() {
    const geo = new THREE.SphereGeometry(600, 32, 24);
    const mat = new THREE.ShaderMaterial({
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uSkyTop: this.shared.uSkyTop,
        uSkyBottom: this.shared.uSkyBottom,
        uSunDir: this.shared.uSunDir,
        uSunColor: this.shared.uSunColor,
        uIntensity: this.shared.uIntensity,
      },
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);
  }

  #buildTerrain() {
    const SIZE = 150;
    const SEG = 200;
    const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, IslandScene.height(x, z));
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const mat = new THREE.ShaderMaterial({
      vertexShader: TERRAIN_VERT,
      fragmentShader: TERRAIN_FRAG,
      uniforms: {
        uSunDir: this.shared.uSunDir,
        uSunColor: this.shared.uSunColor,
        uAmbient: this.shared.uAmbient,
        uFogColor: this.shared.uFogColor,
        uIntensity: this.shared.uIntensity,
        uCameraPos: this.shared.uCameraPos,
        uFogNear: this.shared.uFogNear,
        uFogFar: this.shared.uFogFar,
        uPhotoMap: this.shared.uPhotoMap,
        uHasPhoto: this.shared.uHasPhoto,
        uPhotoSize: this.shared.uPhotoSize,
        uDelight: this.shared.uDelight,
      },
    });

    this.terrain = new THREE.Mesh(geo, mat);
    this.group.add(this.terrain);
  }

  /**
   * Optional aerial photo. Silently no-ops when the file is absent, so the
   * prototype runs identically with or without artwork.
   */
  loadPhoto(url = PHOTO_URL) {
    new THREE.TextureLoader().load(
      url,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.anisotropy = 8;
        this.shared.uPhotoMap.value = tex;
        this.shared.uHasPhoto.value = 1;
      },
      undefined,
      () => {
        // No photo yet — procedural albedo stays in charge.
      }
    );
  }

  #buildWater() {
    const geo = new THREE.PlaneGeometry(900, 900, 200, 200);
    geo.rotateX(-Math.PI / 2);

    const mat = new THREE.ShaderMaterial({
      vertexShader: WATER_VERT,
      fragmentShader: WATER_FRAG,
      uniforms: {
        uSunDir: this.shared.uSunDir,
        uSunColor: this.shared.uSunColor,
        uSkyTop: this.shared.uSkyTop,
        uSkyBottom: this.shared.uSkyBottom,
        uWaterColor: this.shared.uWaterColor,
        uFogColor: this.shared.uFogColor,
        uCameraPos: this.shared.uCameraPos,
        uIntensity: this.shared.uIntensity,
        uTime: this.shared.uTime,
        uFogNear: this.shared.uFogNear,
        uFogFar: this.shared.uFogFar,
        uShoreRadius: this.shared.uShoreRadius,
      },
    });

    this.water = new THREE.Mesh(geo, mat);
    this.water.position.y = 0;
    this.group.add(this.water);
  }

  dispose() {
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  }
}
