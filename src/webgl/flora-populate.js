import * as THREE from 'three';
import { IslandScene } from './IslandScene.js';

/**
 * Placement, by zone.
 *
 * Coral islands band their vegetation by exposure, not by altitude: bare sand,
 * then a dense strand of salt-tolerant shrub and pandanus on the seaward
 * ridge, then a more open coconut grove inland. Scattering evenly across the
 * whole surface — which is what this used to do — gives an island with no
 * shoreline to it, because the line where greenery stops and sand starts is
 * the one edge that reads from the air.
 *
 * `t` throughout is distance to the coastline: 0 at the centre, 1 on the
 * outline. Every band is therefore defined against the same shape the beach
 * and the surf already agree on.
 *
 * Zonation after FAO's Pacific forest survey and the USGS Palmyra Atoll
 * management plan: Scaevola / Pandanus / Tournefortia on the beach ridge,
 * opening into coconut behind it.
 *
 * COLOUR. Every green here used to come from one formula with only its
 * brightness varied, which is a single hue however many plants you place. The
 * species in this zone are not one colour:
 *
 *   Tournefortia argentea  dense silvery hairs — argentea means silvery
 *   Scaevola taccada       glossy bright green
 *   Pandanus tectorius     light green, cooler than coconut
 *   Cocos nucifera         vivid green at the crown top, ageing through deep
 *                          green to the brown skirt of dead fronds beneath
 *
 * The silver shrub and the brown frond skirt are what break the monotone, and
 * both are real features of this exact band rather than invented variety.
 */

/** Slope at a point, from the island height field. */
function slopeAt(x, z, e = 1.2) {
  const h = IslandScene.height(x, z);
  const hx = IslandScene.height(x + e, z);
  const hz = IslandScene.height(x, z + e);
  return Math.hypot(h - hx, h - hz) / e;
}

/** Coastline radius along a bearing. coastT of a unit vector is 1/R. */
function coastRadiusAt(a) {
  const t = IslandScene.coastT(Math.cos(a), Math.sin(a));
  return t > 1e-6 ? 1 / t : 34;
}

export function populateFlora(flora, cfg, rand) {
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

  /** A spot inside a coastline band, on ground gentle enough to stand on. */
  const spot = (tMin, tMax, maxSlope, tries = 40) => {
    for (let k = 0; k < tries; k++) {
      const a = rand() * Math.PI * 2;
      const t = tMin + rand() * (tMax - tMin);
      const r = t * coastRadiusAt(a);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const h = IslandScene.height(x, z);
      if (h < 0.1) continue;
      if (slopeAt(x, z) > maxSlope) continue;
      return { x, z, h, t: IslandScene.coastT(x, z), bearing: a };
    }
    return null;
  };

  // --- Coconut grove ------------------------------------------------------
  // Groves, not scatter: palms seed from fallen nuts, so they come in stands
  // with open ground between them.
  const groves = [];
  for (let i = 0; i < 7; i++) {
    groves.push({ a: rand() * Math.PI * 2, t: 0.16 + rand() * 0.52 });
  }

  let p = 0;
  let f = 0;
  const maxFronds = flora.palmFronds.instanceMatrix.count;
  const nPalms = Math.min(cfg.palms ?? 0, flora.palmTrunk.instanceMatrix.count);
  let guard = 0;
  while (p < nPalms && guard++ < nPalms * 30) {
    const g = groves[(rand() * groves.length) | 0];
    const a = g.a + (rand() - 0.5) * 0.6;
    const t = Math.max(0.1, Math.min(0.9, g.t + (rand() - 0.5) * 0.3));
    const r = t * coastRadiusAt(a);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const h = IslandScene.height(x, z);
    if (h < 0.6 || slopeAt(x, z) > 0.6) continue;

    const tt = IslandScene.coastT(x, z);
    // Tall and upright inland, shorter and leaning seaward at the edge —
    // what wind and salt spray actually do to a coconut grove.
    const scale = (0.62 + rand() * 0.5) * (1.25 - tt * 0.45);
    const lean = Math.max(0, tt - 0.55) * 1.5;
    const spin = a + (rand() - 0.5) * 0.6;

    pos.set(x, h - 0.3, z);
    scl.setScalar(scale);
    q.setFromEuler(
      new THREE.Euler(Math.sin(spin) * lean, -spin, -Math.cos(spin) * lean)
    );
    m.compose(pos, q, scl);
    flora.palmTrunk.setMatrixAt(p, m);
    // Coconut trunks weather grey, not brown — brown is a young palm or a wet one.
    const tg = 0.40 + rand() * 0.12;
    write(flora.palmTrunk, p, [tg, tg * 0.95, tg * 0.84], rand() * 6.28, 0.011);

    const crownY = h - 0.3 + 9.5 * scale * Math.cos(lean);
    const off = 1.5 * scale + lean * 4.0 * scale;
    const cx = x + Math.cos(spin) * off;
    const cz = z - Math.sin(spin) * off;

    // A coconut crown is a life-cycle, not a rosette: vivid new growth stands
    // up at the top, mature fronds arch out around it, and dead ones hang
    // straight down in a brown skirt until they drop.
    const fronds = 9 + ((rand() * 3) | 0);
    for (let k = 0; k < fronds && f < maxFronds; k++) {
      const age = k / (fronds - 1);           // 0 newest, 1 dying
      const around = spin + (k / fronds) * Math.PI * 2 * 1.3 + rand() * 0.22;
      // New fronds point up; old ones fall past horizontal.
      const tilt = 0.75 - age * 1.5 + (rand() - 0.5) * 0.18;

      pos.set(cx, crownY - age * 0.5 * scale, cz);
      scl.setScalar(scale * (0.72 + (1 - age) * 0.45));
      q.setFromEuler(new THREE.Euler(0, -around, tilt));
      m.compose(pos, q, scl);
      flora.palmFronds.setMatrixAt(f, m);

      let tint;
      if (age > 0.82) {
        // Dead: straw brown, and it no longer moves in the wind.
        const b = 0.34 + rand() * 0.16;
        tint = [b * 1.5, b * 1.05, b * 0.5];
      } else {
        // Young growth is yellower and lighter, mature is deep and cooler.
        const lum = 0.34 - age * 0.13 + rand() * 0.05;
        tint = [lum * (0.62 - age * 0.24), lum * 1.5, lum * (0.30 + age * 0.08)];
      }
      write(flora.palmFronds, f, tint, rand() * 6.28, age > 0.82 ? 0.004 : 0.02);
      f++;
    }
    p++;
  }
  flush(flora.palmTrunk, p);
  flush(flora.palmFronds, f);

  // --- Pandanus, on the seaward ridge -------------------------------------
  let pd = 0;
  let pb = 0;
  const maxBlades = flora.pandanusBlades.instanceMatrix.count;
  const nPand = Math.min(cfg.pandanus ?? 0, flora.pandanusTrunk.instanceMatrix.count);
  guard = 0;
  while (pd < nPand && guard++ < nPand * 30) {
    const s = spot(0.62, 0.93, 0.7, 12);
    if (!s) continue;
    const scale = 0.8 + rand() * 0.7;
    pos.set(s.x, s.h - 0.2, s.z);
    scl.setScalar(scale);
    q.setFromAxisAngle(up, rand() * Math.PI * 2);
    m.compose(pos, q, scl);
    flora.pandanusTrunk.setMatrixAt(pd, m);
    write(flora.pandanusTrunk, pd, [0.40, 0.33, 0.26], rand() * 6.28, 0.008);

    const crownY = s.h - 0.2 + 5.2 * scale;
    const blades = 8 + ((rand() * 2) | 0);
    for (let k = 0; k < blades && pb < maxBlades; k++) {
      // A helix, not a ring — that spiral is the plant's signature.
      const around = (k / blades) * Math.PI * 2 * 1.6 + rand() * 0.2;
      pos.set(s.x, crownY - k * 0.09 * scale, s.z);
      scl.setScalar(scale * (0.85 + rand() * 0.3));
      q.setFromEuler(new THREE.Euler(0, -around, 0.3 + rand() * 0.5));
      m.compose(pos, q, scl);
      flora.pandanusBlades.setMatrixAt(pb, m);
      // Light green, and cooler than the coconut behind it.
      const g3 = 0.30 + rand() * 0.13;
      write(flora.pandanusBlades, pb, [g3 * 0.66, g3 * 1.34, g3 * 0.62], rand() * 6.28, 0.012);
      pb++;
    }
    pd++;
  }
  flush(flora.pandanusTrunk, pd);
  flush(flora.pandanusBlades, pb);

  // --- Strand shrub: the band that draws the vegetation line --------------
  let sh = 0;
  const nShrubs = Math.min(cfg.shrubs ?? 0, flora.shrubs.instanceMatrix.count);
  guard = 0;
  while (sh < nShrubs && guard++ < nShrubs * 14) {
    const s = spot(0.72, 0.99, 0.85, 12);
    if (!s) continue;
    // Densest right at the line, thinning inland.
    if (rand() > Math.min(1, (s.t - 0.64) * 3.0)) continue;
    const scale = 0.55 + rand() * 1.15;
    pos.set(s.x, s.h + scale * 0.22, s.z);
    scl.set(scale * 1.3, scale * (0.5 + rand() * 0.4), scale * 1.3);
    q.setFromAxisAngle(up, rand() * Math.PI * 2);
    m.compose(pos, q, scl);
    flora.shrubs.setMatrixAt(sh, m);
    // Two species share this band, and they look nothing alike.
    let tint;
    if (rand() < 0.34) {
      // Tournefortia argentea — silvery, almost grey-green.
      const v = 0.42 + rand() * 0.14;
      tint = [v * 1.02, v * 1.12, v * 0.92];
    } else {
      // Scaevola taccada — glossy, bright, saturated.
      const v = 0.24 + rand() * 0.15;
      tint = [v * 0.50, v * 1.66, v * 0.46];
    }
    write(flora.shrubs, sh, tint, rand() * 6.28, 0.014);
    sh++;
  }
  flush(flora.shrubs, sh);

  // --- Grass: clearings between groves, not a lawn ------------------------
  let gr = 0;
  const nGrass = Math.min(cfg.grass ?? 0, flora.grass.instanceMatrix.count);
  guard = 0;
  while (gr < nGrass && guard++ < nGrass * 8) {
    const s = spot(0.12, 0.78, 0.62, 8);
    if (!s) continue;
    const scale = 0.45 + rand() * 0.85;
    pos.set(s.x, s.h, s.z);
    scl.set(scale, scale * (0.7 + rand() * 0.8), scale);
    q.setFromAxisAngle(up, rand() * Math.PI * 2);
    m.compose(pos, q, scl);
    flora.grass.setMatrixAt(gr, m);
    // Sun-dried and yellower than anything in the shade of the grove.
    const g5 = 0.30 + rand() * 0.2;
    write(flora.grass, gr, [g5 * 1.02, g5 * 1.32, g5 * 0.36], rand() * 6.28, 0.05);
    gr++;
  }
  flush(flora.grass, gr);

  // --- Bures along the beach ----------------------------------------------
  // Not decoration. They are the only object in the scene with a size anyone
  // knows, so they are what tells you how big the island is.
  let bu = 0;
  const nBures = Math.min(cfg.bures ?? 0, flora.bureWalls.instanceMatrix.count);
  guard = 0;
  while (bu < nBures && guard++ < nBures * 50) {
    const s = spot(0.68, 0.88, 0.3, 14);
    if (!s) continue;
    const facing = s.bearing + Math.PI;  // face the water
    const scale = 0.95 + rand() * 0.25;
    pos.set(s.x, s.h, s.z);
    scl.setScalar(scale);
    q.setFromAxisAngle(up, -facing);
    m.compose(pos, q, scl);
    flora.bureWalls.setMatrixAt(bu, m);
    flora.bureRoofs.setMatrixAt(bu, m);
    write(flora.bureWalls, bu, [0.52, 0.44, 0.34], 0, 0);
    write(flora.bureRoofs, bu, [0.62, 0.52, 0.33], 0, 0);
    bu++;
  }
  flush(flora.bureWalls, bu);
  flush(flora.bureRoofs, bu);

  // --- Driftwood on the sand ----------------------------------------------
  let w = 0;
  const nWood = Math.min(cfg.driftwood ?? 0, flora.wood.instanceMatrix.count);
  guard = 0;
  while (w < nWood && guard++ < nWood * 50) {
    const s = spot(0.93, 1.02, 0.35, 12);
    if (!s) continue;
    const scale = 0.7 + rand() * 0.9;
    pos.set(s.x, s.h + 0.16 * scale, s.z);
    scl.setScalar(scale);
    q.setFromEuler(new THREE.Euler(rand() * 0.3, rand() * Math.PI * 2, rand() * 0.2));
    m.compose(pos, q, scl);
    flora.wood.setMatrixAt(w, m);
    const t2 = 0.5 + rand() * 0.2;
    write(flora.wood, w, [t2, t2 * 0.92, t2 * 0.8], rand() * 6.28, 0);
    w++;
  }
  flush(flora.wood, w);

  return { palms: p, fronds: f, pandanus: pd, blades: pb, shrubs: sh, grass: gr, bures: bu, wood: w };
}
