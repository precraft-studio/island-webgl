import * as THREE from 'three';
import { FLORA_VERT, FLORA_FRAG } from './shaders/surface.js';
import { IslandScene } from './IslandScene.js';
import { populateFlora } from './flora-populate.js';

/**
 * What grows on the island, and what washes up on it.
 *
 * Nothing is placed by hand or by uniform scatter. Everything is placed by
 * asking the terrain where it is: palms and shrubs want height and gentle
 * slope, grass wants the flats, driftwood wants the narrow band just above
 * the waterline. Placement rules keep the island readable as an island — a
 * beach that ends where the greenery begins, because both were derived from
 * the same surface rather than drawn separately.
 *
 * Instanced, one draw call per species, populated only for the section that
 * comes close enough to see it.
 */

const MAX = { palm: 120, shrub: 420, grass: 3200, wood: 24, pandanus: 70, bure: 18 };

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Slope at a point, from the island height field. */
function slopeAt(x, z, e = 1.2) {
  const h = IslandScene.height(x, z);
  const hx = IslandScene.height(x + e, z);
  const hz = IslandScene.height(x, z + e);
  return Math.hypot(h - hx, h - hz) / e;
}

export class Flora {
  constructor(shared) {
    this.shared = shared;
    this.group = new THREE.Group();
    this.group.visible = false;

    this.#buildPalms();
    this.#buildShrubs();
    this.#buildGrass();
    this.#buildPandanus();
    this.#buildBures();
    this.#buildDriftwood();
  }

  #material(translucency) {
    return new THREE.ShaderMaterial({
      vertexShader: FLORA_VERT,
      fragmentShader: FLORA_FRAG,
      side: THREE.DoubleSide,
      uniforms: {
        uTranslucency: { value: translucency },
        uTime: this.shared.uTime,
        uSunDir: this.shared.uSunDir,
        uSunColor: this.shared.uSunColor,
        uAmbient: this.shared.uAmbient,
        uFogColor: this.shared.uFogColor,
        uCameraPos: this.shared.uCameraPos,
        uIntensity: this.shared.uIntensity,
        uFogNear: this.shared.uFogNear,
        uFogFar: this.shared.uFogFar,
        uShadowMap: this.shared.uShadowMap,
        uShadowMatrix: this.shared.uShadowMatrix,
        uShadowOn: this.shared.uShadowOn,
      },
    });
  }

  #instanced(geo, count, translucency) {
    const m = new THREE.InstancedMesh(geo, this.#material(translucency), count);
    m.frustumCulled = false;
    m.count = 0;
    for (const [name, size] of [['aTint', 3], ['aPhase', 1], ['aStiff', 1]]) {
      geo.setAttribute(
        name,
        new THREE.InstancedBufferAttribute(new Float32Array(count * size), size)
      );
    }
    this.group.add(m);
    return m;
  }

  /**
   * A palm: a trunk that leans, and fronds that arch.
   *
   * Straight trunks and flat fronds are what make procedural palms look like
   * umbrellas. Both curves here are doing that work.
   */
  #buildPalms() {
    const parts = [];

    const trunk = new THREE.CylinderGeometry(0.16, 0.42, 9.5, 7, 8);
    const tp = trunk.attributes.position;
    for (let i = 0; i < tp.count; i++) {
      const y = tp.getY(i) + 4.75;      // 0 at the base
      const bend = (y / 9.5) ** 2 * 1.5; // leans more toward the crown
      tp.setXYZ(i, tp.getX(i) + bend, y, tp.getZ(i));
    }
    trunk.computeVertexNormals();
    parts.push({ geo: trunk, kind: 'trunk' });

    // Frond: a long tapered blade, drooping along its length.
    const frond = new THREE.PlaneGeometry(6.2, 1.15, 10, 2);
    const fp = frond.attributes.position;
    for (let i = 0; i < fp.count; i++) {
      const x = fp.getX(i) + 3.1;       // 0 at the stem
      const t = x / 6.2;
      const droop = -(t ** 2) * 2.6;
      const taper = 1 - t * 0.75;
      fp.setXYZ(i, x, droop, fp.getY(i) * taper);
    }
    frond.computeVertexNormals();
    parts.push({ geo: frond, kind: 'frond' });

    this.palmTrunk = this.#instanced(parts[0].geo, MAX.palm, 0.1);
    this.palmFronds = this.#instanced(parts[1].geo, MAX.palm * 7, 0.9);
  }

  #buildShrubs() {
    const geo = new THREE.IcosahedronGeometry(1, 1);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const n = 0.75 + Math.abs(Math.sin(x * 4.1 + z * 2.7)) * 0.5;
      p.setXYZ(i, x * n, Math.max(y, -0.2) * n * 0.8, z * n);
    }
    geo.computeVertexNormals();
    this.shrubs = this.#instanced(geo, MAX.shrub, 0.5);
  }

  /** Grass as crossed blades — cheap, and reads from any angle. */
  #buildGrass() {
    const blade = new THREE.PlaneGeometry(0.5, 1.5, 1, 3);
    blade.translate(0, 0.75, 0);
    const second = blade.clone();
    second.rotateY(Math.PI / 2);
    this.grass = this.#instanced(mergeGeos([blade, second]), MAX.grass, 0.85);
  }

  /**
   * Pandanus. Spindly trunk, stilt roots, and a crown of stiff blades thrown
   * out in a spiral — nothing like a palm, which is the point. An island with
   * one tree silhouette repeated reads as wallpaper however many you place.
   */
  #buildPandanus() {
    const trunk = new THREE.CylinderGeometry(0.16, 0.34, 5.2, 6, 4);
    const tp = trunk.attributes.position;
    for (let i = 0; i < tp.count; i++) {
      const y = tp.getY(i) + 2.6;
      tp.setXYZ(i, tp.getX(i) + Math.sin(y * 0.42) * 0.5, y, tp.getZ(i));
    }
    trunk.computeVertexNormals();
    this.pandanusTrunk = this.#instanced(trunk, MAX.pandanus, 0.08);

    // A blade: long, narrow, stiffly arched — not drooping like a frond.
    const blade = new THREE.PlaneGeometry(3.4, 0.42, 8, 1);
    const bp = blade.attributes.position;
    for (let i = 0; i < bp.count; i++) {
      const x = bp.getX(i) + 1.7;
      const t = x / 3.4;
      bp.setXYZ(i, x, -(t ** 2.4) * 1.5, bp.getY(i) * (1 - t * 0.6));
    }
    blade.computeVertexNormals();
    this.pandanusBlades = this.#instanced(blade, MAX.pandanus * 9, 0.85);
  }

  /**
   * A thatched bure. Squat walls under a steep hipped roof — the roof is the
   * whole silhouette, and getting its pitch right matters more than any detail
   * on it at the distances this is seen from.
   */
  #buildBures() {
    const body = new THREE.BoxGeometry(3.4, 2.2, 4.2);
    body.translate(0, 1.1, 0);
    this.bureWalls = this.#instanced(body, MAX.bure, 0);

    const roof = new THREE.ConeGeometry(3.5, 2.8, 4, 1);
    roof.rotateY(Math.PI / 4);
    roof.translate(0, 3.6, 0);
    this.bureRoofs = this.#instanced(roof, MAX.bure, 0.15);
  }

  #buildDriftwood() {
    const geo = new THREE.CylinderGeometry(0.16, 0.24, 3.4, 5);
    geo.rotateZ(Math.PI / 2);
    this.wood = this.#instanced(geo, MAX.wood, 0.05);
  }

  /** Place everything. Called on navigation, not per frame. */
  populate(flora) {
    populateFlora(this, flora || {}, rng(775533));
  }

  setActive(on) {
    this.group.visible = on;
  }
}

function mergeGeos(geos) {
  const out = new THREE.BufferGeometry();
  let vc = 0;
  let ic = 0;
  for (const g of geos) {
    vc += g.attributes.position.count;
    ic += g.index ? g.index.count : g.attributes.position.count;
  }
  const position = new Float32Array(vc * 3);
  const normal = new Float32Array(vc * 3);
  const uv = new Float32Array(vc * 2);
  const index = new Uint16Array(ic);
  let vo = 0;
  let io = 0;
  for (const g of geos) {
    const p = g.attributes.position;
    position.set(p.array.subarray(0, p.count * 3), vo * 3);
    if (g.attributes.normal) {
      normal.set(g.attributes.normal.array.subarray(0, p.count * 3), vo * 3);
    }
    if (g.attributes.uv) {
      uv.set(g.attributes.uv.array.subarray(0, p.count * 2), vo * 2);
    }
    if (g.index) {
      for (let i = 0; i < g.index.count; i++) index[io++] = g.index.array[i] + vo;
    } else {
      for (let i = 0; i < p.count; i++) index[io++] = i + vo;
    }
    vo += p.count;
  }
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.setIndex(new THREE.BufferAttribute(index, 1));
  out.computeVertexNormals();
  return out;
}
