import * as THREE from 'three';
import { fbm2D } from './noise.js';
import { buildHeartLUT, heartRadius, HEART_LUT_SIZE } from './heart.js';
import { SKY_VERT, SKY_FRAG } from './shaders/sky.js';
import { TERRAIN_VERT, TERRAIN_FRAG } from './shaders/terrain.js';
import { WATER_VERT, WATER_FRAG } from './shaders/water.js';

/** World-space radius of the coastline at its widest point. */
export const ISLAND_RADIUS = 34;

/** Coastline shape, computed once and shared by the CPU and the GPU. */
const HEART_LUT = buildHeartLUT();

/** 1×1 placeholder so the photo sampler is always bound. */
const BLANK_TEXTURE = new THREE.DataTexture(
  new Uint8Array([255, 255, 255, 255]), 1, 1
);
BLANK_TEXTURE.needsUpdate = true;

/**
 * Drop an aerial photo here and the terrain switches from procedural colour to
 * the photograph — no code change required. See public/textures/README.md.
 */
export const PHOTO_URL = '/textures/island-aerial.webp';

const smoothstep = (edge0, edge1, x) => {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

/**
 * Procedural stand-in for the artist's `island.glb`, shaped after Tavarua.
 *
 * PHASE 2 SWAP: replace `buildTerrain()` with a GLTF load and keep everything
 * else. The material, uniforms and lighting contract are what the real asset
 * plugs into — which is the whole point of proving them now.
 */
export class IslandScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // The coastline LUT as an 8-bit texture. Byte precision costs ~0.13 world
    // units of accuracy on the shoreline — invisible, and it keeps linear
    // filtering available on every device (float filtering is not guaranteed).
    const lutBytes = new Uint8Array(HEART_LUT_SIZE);
    for (let i = 0; i < HEART_LUT_SIZE; i++) {
      lutBytes[i] = Math.round(THREE.MathUtils.clamp(HEART_LUT[i], 0, 1) * 255);
    }
    const lutTex = new THREE.DataTexture(
      lutBytes, HEART_LUT_SIZE, 1, THREE.RedFormat, THREE.UnsignedByteType
    );
    lutTex.wrapS = THREE.RepeatWrapping;
    lutTex.minFilter = lutTex.magFilter = THREE.LinearFilter;
    lutTex.needsUpdate = true;

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
      uFogNear: { value: 110 },
      uFogFar: { value: 380 },

      // Coastline
      uHeartLUT: { value: lutTex },
      uHeartScale: { value: ISLAND_RADIUS },

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

  /**
   * Island height field.
   *
   * `t` is the normalised distance to the coastline: 0 at the centre, 1 on the
   * heart outline. Tavarua is a low coral island, so the profile is a wide flat
   * sand shelf that lifts into a gently domed, vegetated interior — not a peak.
   */
  static height(x, z) {
    const r = Math.hypot(x, z);
    const R = heartRadius(HEART_LUT, Math.atan2(z, x)) * ISLAND_RADIUS;
    const t = r / Math.max(R, 0.001);

    // Sand shelf: lifts out of the lagoon just inside the outline.
    const beach = smoothstep(1.05, 0.86, t);
    // Interior: raised, domed, carrying the noise detail.
    const inland = Math.pow(smoothstep(1.0, 0.15, t), 1.35);

    const grain = fbm2D(x * 0.05, z * 0.05, 5) * 0.5 + 0.5;
    const ridge = 1 - Math.abs(fbm2D(x * 0.021 + 11.3, z * 0.021 - 7.1, 3));
    const relief = grain * 0.5 + ridge * 0.3 + 0.2;

    return beach * 2.3 + inland * relief * 13 - 1.35;
  }

  #buildSky() {
    const geo = new THREE.SphereGeometry(700, 32, 24);
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
    const SEG = 240;
    const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, IslandScene.height(pos.getX(i), pos.getZ(i)));
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

  #buildWater() {
    const geo = new THREE.PlaneGeometry(1100, 1100, 220, 220);
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
        uAmbient: this.shared.uAmbient,
        uFogColor: this.shared.uFogColor,
        uCameraPos: this.shared.uCameraPos,
        uIntensity: this.shared.uIntensity,
        uTime: this.shared.uTime,
        uFogNear: this.shared.uFogNear,
        uFogFar: this.shared.uFogFar,
        uHeartLUT: this.shared.uHeartLUT,
        uHeartScale: this.shared.uHeartScale,
      },
    });

    this.water = new THREE.Mesh(geo, mat);
    this.water.position.y = 0;
    this.group.add(this.water);
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

  dispose() {
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  }
}
