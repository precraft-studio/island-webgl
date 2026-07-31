import * as THREE from 'three';
import { fbm2D } from './noise.js';
import { SEABED_Y } from './journeys.js';
import {
  SEABED_VERT, SEABED_FRAG, REEF_VERT, REEF_FRAG, SHAFT_VERT, SHAFT_FRAG,
} from './shaders/seabed.js';

/**
 * The reef floor and its inhabitants.
 *
 * Built once and reconfigured per section rather than rebuilt: the two diving
 * sections want very different populations (a busy sunlit reef, and a sparse
 * dark one), but rebuilding geometry on every navigation would stall the frame
 * exactly when the camera is moving. So the instance buffers are allocated at
 * the maximum and only the drawn count changes.
 *
 * Everything is instanced. One draw call per species, however many there are.
 */

const MAX = { coral: 140, fish: 260, resting: 6, shafts: 26 };

/** Deterministic RNG — the reef must be identical on every reload. */
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const CORAL_COLOURS = [
  [0.85, 0.42, 0.38], // pink branching
  [0.92, 0.62, 0.30], // orange
  [0.55, 0.68, 0.42], // olive brain
  [0.42, 0.55, 0.72], // blue-grey
  [0.78, 0.72, 0.45], // sandy
  [0.62, 0.36, 0.58], // purple fan
];

const FISH_COLOURS = [
  [0.95, 0.78, 0.32],
  [0.88, 0.52, 0.28],
  [0.55, 0.75, 0.85],
  [0.92, 0.90, 0.86],
];

export class Seabed {
  constructor(shared) {
    this.shared = shared;
    this.group = new THREE.Group();
    this.group.visible = false;

    this.time = 0;
    this.schools = [];

    this.#buildFloor();
    this.#buildCoral();
    this.#buildFish();
    this.#buildResting();
    this.#buildShafts();
  }

  /** Height of the seabed at a point — a shallow bowl with dunes. */
  static floorHeight(x, z) {
    const r = Math.hypot(x, z);
    // Rises toward the island so the floor meets the shore instead of ending.
    const shelf = Math.max(0, 1 - r / 150) ** 2 * 16;
    const dunes = fbm2D(x * 0.035, z * 0.035, 4) * 3.4;
    const ripple = Math.sin(x * 0.55 + fbm2D(x * 0.05, z * 0.05, 2) * 3) * 0.16;
    return SEABED_Y + shelf + dunes + ripple;
  }

  #reefUniforms() {
    const s = this.shared;
    return {
      uSunDir: s.uSunDir, uSunColor: s.uSunColor, uAmbient: s.uAmbient,
      uWaterColor: s.uWaterColor, uSkyTop: s.uSkyTop, uSkyBottom: s.uSkyBottom,
      uCameraPos: s.uCameraPos,
      uIntensity: s.uIntensity, uTime: s.uTime, uUnderwater: s.uUnderwater,
    };
  }

  #buildFloor() {
    const geo = new THREE.PlaneGeometry(620, 620, 180, 180);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, Seabed.floorHeight(pos.getX(i), pos.getZ(i)));
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    this.floor = new THREE.Mesh(
      geo,
      new THREE.ShaderMaterial({
        vertexShader: SEABED_VERT,
        fragmentShader: SEABED_FRAG,
        uniforms: this.#reefUniforms(),
      })
    );
    this.group.add(this.floor);
  }

  /**
   * Coral. Three silhouettes — domes, branching stands and fans — because a
   * reef built from one repeated shape reads as scattered props no matter how
   * the colours vary.
   */
  #buildCoral() {
    const parts = [];

    const dome = new THREE.IcosahedronGeometry(1, 2);
    const dp = dome.attributes.position;
    for (let i = 0; i < dp.count; i++) {
      const x = dp.getX(i), y = dp.getY(i), z = dp.getZ(i);
      const n = 1 + fbm2D(x * 2.2, z * 2.2, 3) * 0.22;
      dp.setXYZ(i, x * n, Math.max(y, -0.1) * n * 0.75, z * n);
    }
    dome.computeVertexNormals();
    parts.push(dome);

    const branch = new THREE.CylinderGeometry(0.13, 0.3, 2.1, 6, 1);
    branch.translate(0, 1.05, 0);
    parts.push(branch);

    const fan = new THREE.TorusGeometry(0.95, 0.09, 5, 14, Math.PI * 1.15);
    fan.rotateX(Math.PI / 2);
    fan.translate(0, 0.95, 0);
    parts.push(fan);

    this.coral = parts.map((geo) => {
      const m = new THREE.InstancedMesh(
        geo,
        new THREE.ShaderMaterial({
          vertexShader: REEF_VERT,
          fragmentShader: REEF_FRAG,
          uniforms: this.#reefUniforms(),
        }),
        MAX.coral
      );
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.frustumCulled = false;
      m.count = 0;
      this.group.add(m);
      return m;
    });

    // Per-instance tint and sway phase.
    for (const m of this.coral) {
      m.geometry.setAttribute(
        'aTint',
        new THREE.InstancedBufferAttribute(new Float32Array(MAX.coral * 3), 3)
      );
      m.geometry.setAttribute(
        'aPhase',
        new THREE.InstancedBufferAttribute(new Float32Array(MAX.coral), 1)
      );
    }
  }

  /** A fish: stretched body plus a tail fin, kept deliberately simple. */
  #buildFish() {
    const body = new THREE.SphereGeometry(0.5, 8, 6);
    body.scale(1.0, 0.62, 0.34);
    const tail = new THREE.ConeGeometry(0.3, 0.55, 4);
    tail.rotateZ(Math.PI / 2);
    tail.translate(-0.62, 0, 0);
    tail.scale(1, 1, 0.35);

    const geo = mergeGeometries([body, tail]);

    this.fish = new THREE.InstancedMesh(
      geo,
      new THREE.ShaderMaterial({
        vertexShader: REEF_VERT,
        fragmentShader: REEF_FRAG,
        uniforms: this.#reefUniforms(),
      }),
      MAX.fish
    );
    this.fish.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.fish.frustumCulled = false;
    this.fish.count = 0;
    this.fish.geometry.setAttribute(
      'aTint',
      new THREE.InstancedBufferAttribute(new Float32Array(MAX.fish * 3), 3)
    );
    this.fish.geometry.setAttribute(
      'aPhase',
      new THREE.InstancedBufferAttribute(new Float32Array(MAX.fish), 1)
    );
    this.group.add(this.fish);
  }

  /**
   * The resting ones. A ray settled on the sand and a turtle tucked in — read
   * at a glance from their silhouette, which is all they need to do at the
   * distances and light levels down here.
   */
  #buildResting() {
    const disc = new THREE.SphereGeometry(1, 12, 8);
    disc.scale(1.5, 0.16, 1.2);
    const tail = new THREE.ConeGeometry(0.1, 2.4, 4);
    tail.rotateX(Math.PI / 2);
    tail.translate(0, 0, 1.9);
    const ray = mergeGeometries([disc, tail]);

    this.resting = new THREE.InstancedMesh(
      ray,
      new THREE.ShaderMaterial({
        vertexShader: REEF_VERT,
        fragmentShader: REEF_FRAG,
        uniforms: this.#reefUniforms(),
      }),
      MAX.resting
    );
    this.resting.frustumCulled = false;
    this.resting.count = 0;
    this.resting.geometry.setAttribute(
      'aTint',
      new THREE.InstancedBufferAttribute(new Float32Array(MAX.resting * 3), 3)
    );
    this.resting.geometry.setAttribute(
      'aPhase',
      new THREE.InstancedBufferAttribute(new Float32Array(MAX.resting), 1)
    );
    this.group.add(this.resting);
  }

  /** Light shafts: tall tapered quads hanging from the surface. */
  #buildShafts() {
    const geo = new THREE.PlaneGeometry(1, 1, 1, 1);
    geo.translate(0, -0.5, 0);

    this.shafts = new THREE.InstancedMesh(
      geo,
      new THREE.ShaderMaterial({
        vertexShader: SHAFT_VERT,
        fragmentShader: SHAFT_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: {
          uSunColor: this.shared.uSunColor,
          uIntensity: this.shared.uIntensity,
          uTime: this.shared.uTime,
          uCameraPos: this.shared.uCameraPos,
          uStrength: { value: 1 },
        },
      }),
      MAX.shafts
    );
    this.shafts.frustumCulled = false;
    this.shafts.count = 0;
    this.group.add(this.shafts);
  }

  /**
   * Populate for a section. Called on navigation, not per frame.
   * `life` is the section's own density config.
   */
  populate(life) {
    const cfg = life || { coral: 0, schools: 0, resting: 0, godrays: 0 };
    const rand = rng(20260731);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const pos = new THREE.Vector3();
    const scl = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);

    // --- Coral, in clumps rather than evenly scattered ------------------
    const perType = Math.floor(Math.min(cfg.coral, MAX.coral) / this.coral.length);
    for (const mesh of this.coral) {
      const tint = mesh.geometry.getAttribute('aTint');
      const phase = mesh.geometry.getAttribute('aPhase');
      let n = 0;
      let guard = 0;
      while (n < perType && guard++ < perType * 40) {
        // Clump centres, then jitter around them.
        const ca = rand() * Math.PI * 2;
        const cr = 46 + rand() * 96;
        const x = Math.cos(ca) * cr + (rand() - 0.5) * 22;
        const z = Math.sin(ca) * cr + (rand() - 0.5) * 22;
        const r = Math.hypot(x, z);
        if (r < 44 || r > 190) continue;

        const y = Seabed.floorHeight(x, z);
        const s = 0.7 + rand() * 2.3;
        pos.set(x, y - 0.2, z);
        scl.set(s, s * (0.75 + rand() * 0.7), s);
        q.setFromAxisAngle(up, rand() * Math.PI * 2);
        m.compose(pos, q, scl);
        mesh.setMatrixAt(n, m);

        const c = CORAL_COLOURS[(rand() * CORAL_COLOURS.length) | 0];
        tint.setXYZ(n, c[0], c[1], c[2]);
        phase.setX(n, rand() * Math.PI * 2);
        n++;
      }
      mesh.count = n;
      mesh.instanceMatrix.needsUpdate = true;
      tint.needsUpdate = true;
      phase.needsUpdate = true;
    }

    // --- Fish, organised into schools that drift as a body --------------
    this.schools = [];
    const perSchool = 34;
    const total = Math.min(cfg.schools * perSchool, MAX.fish);
    const tint = this.fish.geometry.getAttribute('aTint');
    const phase = this.fish.geometry.getAttribute('aPhase');

    for (let s = 0; s < cfg.schools; s++) {
      const a = rand() * Math.PI * 2;
      const r = 55 + rand() * 80;
      this.schools.push({
        centre: new THREE.Vector3(Math.cos(a) * r, SEABED_Y + 9 + rand() * 13, Math.sin(a) * r),
        radius: 55 + rand() * 70,
        angle: rand() * Math.PI * 2,
        speed: 0.045 + rand() * 0.05,
        bob: rand() * Math.PI * 2,
        from: s * perSchool,
        count: Math.min(perSchool, total - s * perSchool),
      });
    }
    for (let i = 0; i < total; i++) {
      const c = FISH_COLOURS[(rand() * FISH_COLOURS.length) | 0];
      tint.setXYZ(i, c[0], c[1], c[2]);
      phase.setX(i, rand() * Math.PI * 2);
    }
    // Per-fish offset within its school, kept so swimming stays coherent.
    this.fishOffsets = new Float32Array(total * 3);
    for (let i = 0; i < total; i++) {
      this.fishOffsets[i * 3] = (rand() - 0.5) * 9;
      this.fishOffsets[i * 3 + 1] = (rand() - 0.5) * 3.4;
      this.fishOffsets[i * 3 + 2] = (rand() - 0.5) * 9;
    }
    this.fish.count = total;
    tint.needsUpdate = true;
    phase.needsUpdate = true;

    // --- The resting ones -----------------------------------------------
    const rt = this.resting.geometry.getAttribute('aTint');
    const rp = this.resting.geometry.getAttribute('aPhase');
    const nRest = Math.min(cfg.resting, MAX.resting);
    for (let i = 0; i < nRest; i++) {
      const a = rand() * Math.PI * 2;
      const r = 58 + rand() * 70;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const s = 1.5 + rand() * 1.5;
      pos.set(x, Seabed.floorHeight(x, z) + 0.22 * s, z);
      scl.set(s, s, s);
      q.setFromAxisAngle(up, rand() * Math.PI * 2);
      m.compose(pos, q, scl);
      this.resting.setMatrixAt(i, m);
      rt.setXYZ(i, 0.34, 0.33, 0.31);
      rp.setX(i, rand() * Math.PI * 2);
    }
    this.resting.count = nRest;
    this.resting.instanceMatrix.needsUpdate = true;
    rt.needsUpdate = true;
    rp.needsUpdate = true;

    // --- Light shafts ----------------------------------------------------
    const nShafts = cfg.godrays > 0 ? MAX.shafts : 0;
    for (let i = 0; i < nShafts; i++) {
      const a = rand() * Math.PI * 2;
      const r = 20 + rand() * 130;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const w = 5 + rand() * 16;
      const h = 34 + rand() * 26;
      pos.set(x, 0.4, z);
      scl.set(w, h, 1);
      // Lean the shafts along the sun's azimuth so they all agree on where the
      // light is coming from.
      q.setFromAxisAngle(up, Math.atan2(this.shared.uSunDir.value.x, this.shared.uSunDir.value.z));
      m.compose(pos, q, scl);
      this.shafts.setMatrixAt(i, m);
    }
    this.shafts.count = nShafts;
    this.shafts.instanceMatrix.needsUpdate = true;
    this.shafts.material.uniforms.uStrength.value = cfg.godrays ?? 0;
  }

  /** Per-frame: swim the schools. Everything else is static or sways in GLSL. */
  update(dt, cameraY) {
    // Only worth running while the camera is anywhere near the water.
    this.group.visible = cameraY < 26;
    if (!this.group.visible || !this.schools.length) return;

    this.time += dt;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const pos = new THREE.Vector3();
    const scl = new THREE.Vector3(1, 1, 1);
    const up = new THREE.Vector3(0, 1, 0);

    for (const s of this.schools) {
      s.angle += s.speed * dt;
      const cx = Math.cos(s.angle) * s.radius;
      const cz = Math.sin(s.angle) * s.radius;
      const cy = s.centre.y + Math.sin(this.time * 0.3 + s.bob) * 1.6;
      // Face along the tangent of the circle they are tracing.
      const heading = s.angle + Math.PI / 2;
      q.setFromAxisAngle(up, -heading);

      for (let i = 0; i < s.count; i++) {
        const k = (s.from + i) * 3;
        const wob = Math.sin(this.time * 2.2 + i * 0.7) * 0.35;
        pos.set(
          cx + this.fishOffsets[k],
          cy + this.fishOffsets[k + 1] + wob,
          cz + this.fishOffsets[k + 2]
        );
        m.compose(pos, q, scl);
        this.fish.setMatrixAt(s.from + i, m);
      }
    }
    this.fish.instanceMatrix.needsUpdate = true;
  }
}

/** Minimal geometry merge — avoids pulling in the addons build. */
function mergeGeometries(geos) {
  const out = new THREE.BufferGeometry();
  let vCount = 0;
  let iCount = 0;
  for (const g of geos) {
    vCount += g.attributes.position.count;
    iCount += g.index ? g.index.count : g.attributes.position.count;
  }
  const position = new Float32Array(vCount * 3);
  const normal = new Float32Array(vCount * 3);
  const index = new Uint16Array(iCount);

  let vo = 0;
  let io = 0;
  for (const g of geos) {
    const p = g.attributes.position;
    const n = g.attributes.normal;
    position.set(p.array.subarray(0, p.count * 3), vo * 3);
    if (n) normal.set(n.array.subarray(0, n.count * 3), vo * 3);
    if (g.index) {
      for (let i = 0; i < g.index.count; i++) index[io++] = g.index.array[i] + vo;
    } else {
      for (let i = 0; i < p.count; i++) index[io++] = i + vo;
    }
    vo += p.count;
  }

  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setIndex(new THREE.BufferAttribute(index, 1));
  out.computeVertexNormals();
  return out;
}
