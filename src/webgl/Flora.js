import * as THREE from 'three';
import { FLORA_VERT, FLORA_FRAG } from './shaders/surface.js';
import { IslandScene } from './IslandScene.js';

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

const MAX = { palm: 120, shrub: 200, grass: 3200, wood: 24 };

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

  #buildDriftwood() {
    const geo = new THREE.CylinderGeometry(0.16, 0.24, 3.4, 5);
    geo.rotateZ(Math.PI / 2);
    this.wood = this.#instanced(geo, MAX.wood, 0.05);
  }

  /** Place everything. Called on navigation, not per frame. */
  populate(flora) {
    const cfg = flora || { palms: 0, shrubs: 0, grass: 0, driftwood: 0 };
    const rand = rng(775533);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const pos = new THREE.Vector3();
    const scl = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);

    const write = (mesh, i, tint, phase, stiff) => {
      mesh.geometry.getAttribute('aTint').setXYZ(i, tint[0], tint[1], tint[2]);
      mesh.geometry.getAttribute('aPhase').setX(i, phase);
      mesh.geometry.getAttribute('aStiff').setX(i, stiff);
    };
    const flush = (mesh, n) => {
      mesh.count = n;
      mesh.instanceMatrix.needsUpdate = true;
      for (const a of ['aTint', 'aPhase', 'aStiff']) {
        mesh.geometry.getAttribute(a).needsUpdate = true;
      }
    };

    /** Find a spot matching height and slope limits, or null. */
    const spot = (minH, maxH, maxSlope, tries = 60) => {
      for (let k = 0; k < tries; k++) {
        const a = rand() * Math.PI * 2;
        const r = rand() ** 0.65 * 33;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        const h = IslandScene.height(x, z);
        if (h < minH || h > maxH) continue;
        if (slopeAt(x, z) > maxSlope) continue;
        return { x, z, h };
      }
      return null;
    };

    // --- Palms, with their fronds ----------------------------------------
    let p = 0;
    let f = 0;
    const nPalms = Math.min(cfg.palms ?? 0, MAX.palm);
    while (p < nPalms) {
      const s = spot(2.6, 12, 0.55);
      if (!s) break;

      const lean = rand() * Math.PI * 2;
      const scale = 0.7 + rand() * 0.6;
      pos.set(s.x, s.h - 0.3, s.z);
      scl.setScalar(scale);
      q.setFromAxisAngle(up, lean);
      m.compose(pos, q, scl);
      this.palmTrunk.setMatrixAt(p, m);
      write(this.palmTrunk, p, [0.42, 0.34, 0.24], rand() * 6.28, 0.011);

      // The crown sits at the top of the bent trunk, offset the way it leaned.
      const crownY = s.h - 0.3 + 9.5 * scale;
      const bendOff = 1.5 * scale;
      const cx = s.x + Math.cos(lean) * bendOff;
      const cz = s.z - Math.sin(lean) * bendOff;

      const fronds = 6 + ((rand() * 2) | 0);
      for (let k = 0; k < fronds && f < MAX.palm * 7; k++) {
        const spin = lean + (k / fronds) * Math.PI * 2 + rand() * 0.25;
        const tiltUp = 0.25 + rand() * 0.5;
        pos.set(cx, crownY, cz);
        scl.setScalar(scale * (0.85 + rand() * 0.3));
        const e = new THREE.Euler(0, -spin, tiltUp);
        q.setFromEuler(e);
        m.compose(pos, q, scl);
        this.palmFronds.setMatrixAt(f, m);
        const g = 0.26 + rand() * 0.16;
        write(this.palmFronds, f, [g * 0.40, g * 1.55, g * 0.34], rand() * 6.28, 0.02);
        f++;
      }
      p++;
    }
    flush(this.palmTrunk, p);
    flush(this.palmFronds, f);

    // --- Shrubs ----------------------------------------------------------
    let sh = 0;
    const nShrubs = Math.min(cfg.shrubs ?? 0, MAX.shrub);
    while (sh < nShrubs) {
      const s = spot(1.6, 11, 0.75);
      if (!s) break;
      const scale = 0.6 + rand() * 1.5;
      pos.set(s.x, s.h + scale * 0.3, s.z);
      scl.set(scale, scale * (0.6 + rand() * 0.5), scale);
      q.setFromAxisAngle(up, rand() * Math.PI * 2);
      m.compose(pos, q, scl);
      this.shrubs.setMatrixAt(sh, m);
      const g = 0.2 + rand() * 0.18;
      write(this.shrubs, sh, [g * 0.50, g * 1.62, g * 0.40], rand() * 6.28, 0.014);
      sh++;
    }
    flush(this.shrubs, sh);

    // --- Grass -----------------------------------------------------------
    let gr = 0;
    const nGrass = Math.min(cfg.grass ?? 0, MAX.grass);
    let guard = 0;
    while (gr < nGrass && guard++ < nGrass * 6) {
      const s = spot(1.1, 10, 0.6, 8);
      if (!s) continue;
      const scale = 0.5 + rand() * 0.9;
      pos.set(s.x, s.h, s.z);
      scl.set(scale, scale * (0.7 + rand() * 0.8), scale);
      q.setFromAxisAngle(up, rand() * Math.PI * 2);
      m.compose(pos, q, scl);
      this.grass.setMatrixAt(gr, m);
      const g = 0.24 + rand() * 0.2;
      write(this.grass, gr, [g * 0.66, g * 1.58, g * 0.38], rand() * 6.28, 0.05);
      gr++;
    }
    flush(this.grass, gr);

    // --- Driftwood, on the sand just above the waterline ------------------
    let w = 0;
    const nWood = Math.min(cfg.driftwood ?? 0, MAX.wood);
    guard = 0;
    while (w < nWood && guard++ < nWood * 40) {
      const s = spot(0.15, 1.5, 0.35, 10);
      if (!s) continue;
      const scale = 0.7 + rand() * 0.9;
      pos.set(s.x, s.h + 0.16 * scale, s.z);
      scl.setScalar(scale);
      q.setFromEuler(new THREE.Euler(rand() * 0.3, rand() * Math.PI * 2, rand() * 0.2));
      m.compose(pos, q, scl);
      this.wood.setMatrixAt(w, m);
      const t = 0.5 + rand() * 0.2;
      write(this.wood, w, [t, t * 0.92, t * 0.8], rand() * 6.28, 0);
      w++;
    }
    flush(this.wood, w);
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
