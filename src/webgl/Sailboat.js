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

    /**
     * The boat sails across the view, not around the island.
     *
     * A fixed world circuit put it at a radius greater than the camera's, which
     * means behind the viewer — technically sailing, never seen. Its track is
     * therefore held between the camera and the island, and its bearing is
     * offset from the camera's own, so it crosses the frame and comes round
     * again instead of wandering out of shot.
     */
    this.track = {
      radius: 44,   // camera sits at ~72, so this passes ~28 units in front
      cross: -0.38, // bearing offset from the camera, in radians
      // Span is deliberately wider than the frame. Measured half-FOV here is
      // ~22 degrees and ±0.38 puts the boat at ~28, so it sails out of shot
      // before the track loops — otherwise the wrap is a visible teleport.
      span: 0.38,
      speed: 0.05,  // ~15s to cross
    };
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

  update(dt, time, cameraPos) {
    if (!this.group.visible) return;
    this.time = time;

    const t = this.track;
    t.cross += t.speed * dt;
    // Loop the crossing rather than reversing it: a boat that sails out of
    // frame and comes back the other way reads as a pendulum, not a boat.
    if (t.cross > t.span) t.cross = -t.span;

    // Bearing is measured from wherever the camera is standing, so the track
    // stays in front of the viewer whichever section the carousel has settled
    // on. Falls back to a fixed bearing before the first camera update.
    const camAz = cameraPos ? Math.atan2(cameraPos.x, cameraPos.z) : 0;
    const a = camAz + t.cross;
    const r = t.radius;
    // atan2(x, z) measures from +Z, so the position uses sin for x.
    const x = Math.sin(a) * r;
    const z = Math.cos(a) * r;

    // Ride the swell — the same one the water shader displaces with.
    const y = swellHeight(x, z, time);
    // Sink the hull so the chop it ignores breaks over it rather than under.
    this.group.position.set(x, y - CHOP_AMPLITUDE * 0.6, z);

    // Heading: the tangent of the track it is on. The hull's bow is local +Z,
    // which a Y rotation of θ sends to (sin θ, cos θ).
    const heading = a + Math.PI / 2;
    this.group.rotation.y = heading;

    const fwdX = Math.sin(heading);
    const fwdZ = Math.cos(heading);
    const rightX = Math.cos(heading);
    const rightZ = -Math.sin(heading);

    // Pitch and roll from the slope of the swell under the hull, plus a steady
    // heel from the wind. Reading the boat's attitude off the same surface it
    // floats on is what stops it looking like a decal sliding over the water.
    const n = swellNormal(x, z, time);
    const along = n.x * fwdX + n.z * fwdZ;
    const across = n.x * rightX + n.z * rightZ;

    this.hull.rotation.x = along * 0.55;
    this.hull.rotation.z = -across * 0.55 + 0.13;

    this.wake.position.y = 0.06;
  }
}
