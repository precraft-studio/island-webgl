import * as THREE from 'three';
import { swellHeight, swellNormal, CHOP_AMPLITUDE } from './waves.js';
import { RIGID_VERT, RIGID_FRAG, WAKE_VERT, WAKE_FRAG } from './shaders/surface.js';

/**
 * A boat, sailing.
 *
 * The whole thing hangs on one correctness point: it rides `swellHeight` from
 * waves.js, which is the same analytic swell the water shader displaces the
 * surface with. Anything else — a separate sine, a tween, a constant height —
 * and the hull drifts through the water as the two definitions disagree.
 *
 * It ignores the GPU-only fbm chop, so its waterline is off by up to
 * CHOP_AMPLITUDE. The hull sits low enough that the residual reads as the boat
 * cutting through the small stuff, which is what a boat does.
 */

const CLOTH = 0xf3efe4;

export class Sailboat {
  constructor(shared) {
    this.shared = shared;
    this.group = new THREE.Group();
    this.group.visible = false;

    // Sails a wide, slow circuit out in the lagoon.
    this.orbit = { radius: 96, angle: 1.1, speed: 0.028 };
    this.time = 0;

    this.#build();
  }

  #rigid(color, translucency = 0) {
    return new THREE.ShaderMaterial({
      vertexShader: RIGID_VERT,
      fragmentShader: RIGID_FRAG,
      side: THREE.DoubleSide,
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uTranslucency: { value: translucency },
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

  #build() {
    // The hull rolls with the swell, so it lives in its own group.
    this.hull = new THREE.Group();
    this.group.add(this.hull);

    // --- Hull: a sphere squeezed into a boat, pointed at the bow ---------
    const hullGeo = new THREE.SphereGeometry(1, 20, 12);
    const hp = hullGeo.attributes.position;
    for (let i = 0; i < hp.count; i++) {
      const x = hp.getX(i), y = hp.getY(i), z = hp.getZ(i);
      // Taper toward the bow (+z) and flatten the deck.
      const taper = 1 - Math.max(z, 0) * 0.55;
      hp.setXYZ(i, x * 1.05 * taper, Math.min(y, 0.35) * 0.85, z * 3.1);
    }
    hullGeo.computeVertexNormals();
    const hull = new THREE.Mesh(hullGeo, this.#rigid(0xf7f5ee));
    hull.scale.setScalar(1.5);
    this.hull.add(hull);

    // A dark boot stripe at the waterline reads as a hull rather than a bar
    // of soap, and hides where the geometry meets the water.
    const stripeGeo = hullGeo.clone();
    const stripe = new THREE.Mesh(stripeGeo, this.#rigid(0x1d3346));
    stripe.scale.setScalar(1.505);
    stripe.position.y = -0.34;
    this.hull.add(stripe);

    // --- Rig -------------------------------------------------------------
    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.085, 7.6, 6),
      this.#rigid(0xd8d2c4)
    );
    mast.position.set(0, 4.0, 0.2);
    this.hull.add(mast);

    const boom = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 3.4, 5),
      this.#rigid(0xd8d2c4)
    );
    boom.rotation.x = Math.PI / 2;
    boom.position.set(0, 1.05, -1.1);
    this.hull.add(boom);

    // --- Sails: triangles with a belly in them ---------------------------
    // A flat triangle reads as paper. Bowing the leech is most of what makes
    // cloth look like it is holding wind.
    this.hull.add(this.#sail(3.2, 6.4, 0.42, { x: 0, y: 1.1, z: -1.1 }, 1));
    this.hull.add(this.#sail(2.0, 4.1, 0.34, { x: 0, y: 1.4, z: 1.5 }, -1));

    // --- Wake ------------------------------------------------------------
    const wakeGeo = new THREE.PlaneGeometry(7, 34, 1, 24);
    wakeGeo.rotateX(-Math.PI / 2);
    wakeGeo.translate(0, 0, -17);
    this.wake = new THREE.Mesh(
      wakeGeo,
      new THREE.ShaderMaterial({
        vertexShader: WAKE_VERT,
        fragmentShader: WAKE_FRAG,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: this.shared.uTime,
          uSunColor: this.shared.uSunColor,
          uIntensity: this.shared.uIntensity,
        },
      })
    );
    // Sits on the water, not on the rolling hull.
    this.group.add(this.wake);
  }

  /** One sail: a right triangle bowed away from the centreline. */
  #sail(foot, luff, belly, at, side) {
    const seg = 8;
    const pos = [];
    const idx = [];
    for (let j = 0; j <= seg; j++) {
      const v = j / seg;              // 0 at foot, 1 at head
      const width = foot * (1 - v);   // triangle
      for (let i = 0; i <= seg; i++) {
        const u = i / seg;
        const z = -width * u;
        // Belly: fullest mid-sail, tapering to nothing at head and foot.
        const bow = Math.sin(u * Math.PI) * Math.sin(v * Math.PI) * belly * side;
        pos.push(bow, v * luff, z);
      }
    }
    for (let j = 0; j < seg; j++) {
      for (let i = 0; i < seg; i++) {
        const a = j * (seg + 1) + i;
        idx.push(a, a + 1, a + seg + 1, a + 1, a + seg + 2, a + seg + 1);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();

    // Sails are thin cloth: they glow when the sun is behind them.
    const mesh = new THREE.Mesh(geo, this.#rigid(CLOTH, 0.85));
    mesh.position.set(at.x, at.y, at.z);
    return mesh;
  }

  setActive(on) {
    this.group.visible = on;
  }

  update(dt, time) {
    if (!this.group.visible) return;
    this.time = time;

    this.orbit.angle += this.orbit.speed * dt;
    const a = this.orbit.angle;
    const r = this.orbit.radius;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;

    // Ride the swell — the same one the water shader displaces with.
    const y = swellHeight(x, z, time);
    // Sink the hull so the chop it ignores breaks over it rather than under.
    this.group.position.set(x, y - CHOP_AMPLITUDE * 0.6, z);

    // Heading is the tangent of the circuit.
    const heading = a + Math.PI / 2;
    this.group.rotation.y = -heading;

    // Pitch and roll from the swell's slope, plus a steady heel from the wind.
    const n = swellNormal(x, z, time);
    const cosH = Math.cos(heading);
    const sinH = Math.sin(heading);
    const slopeAlong = -n.x * sinH - n.z * cosH;
    const slopeAcross = n.x * cosH - n.z * sinH;

    this.hull.rotation.x = slopeAlong * 0.5;
    this.hull.rotation.z = slopeAcross * 0.5 + 0.13;

    this.wake.position.y = 0.06;
  }
}
