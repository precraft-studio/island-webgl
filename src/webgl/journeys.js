/**
 * Where scrolling takes the camera, per section.
 *
 * Every section used to share one path — aerial, descending toward the island.
 * That is right for a section whose subject is the island, and wrong for one
 * whose subject is the reef floor or a boat. A journey is a list of keyframes
 * the scroll interpolates between, so each section can go somewhere the others
 * do not.
 *
 *   h    camera height (negative is below the surface)
 *   d    distance from the island's axis
 *   look height the camera aims at
 *   az   extra rotation, in radians, on top of the section's own angle
 */

export const SEABED_Y = -30;

const JOURNEYS = {
  /** The default: fly in from altitude and settle over the island. */
  approach: [
    [0.00, { h: 124, d: 100, look: 1.5, az: 0 }],
    [1.00, { h: 12, d: 58, look: 3.2, az: 0 }],
  ],

  /**
   * Down to the water and along it. Ends low and close enough that the swell
   * is at eye level — the whole point is to be ON the water rather than above
   * it, which is what makes it read as unhurried rather than as an approach.
   */
  /**
   * Down to the water, under it, and up again to find the boat.
   *
   * The submerged stretch runs close in, at d≈44, because that is where the
   * island's own flank is only a few units down — a lagoon floor you can see.
   * Dipping further out put the camera in open blue with the bottom 25 units
   * below and nothing in frame, which is why going under read as nothing
   * happening at all.
   */
  sail: [
    [0.00, { h: 124, d: 100, look: 1.5, az: 0.0 }],
    [0.26, { h: 40, d: 78, look: 4.0, az: 0.04 }],
    [0.44, { h: 1.6, d: 56, look: 0.0, az: 0.08 }],   // touches the surface
    [0.58, { h: -2.6, d: 48, look: -3.5, az: 0.11 }], // under, looking at sand
    [0.74, { h: -3.4, d: 44, look: -2.0, az: 0.14 }], // runs along the bottom
    [0.86, { h: -1.6, d: 42, look: 2.0, az: 0.17 }],  // rising, surface above
    [0.94, { h: 1.0, d: 40, look: 4.5, az: 0.19 }],   // breaks through
    [1.00, { h: 4.0, d: 38, look: 5.5, az: 0.2 }],    // and there is the boat
  ],

  /**
   * In toward the island until its surface is the subject.
   *
   * Ends low and close, near the top of the palms rather than above them —
   * from any higher the vegetation reads as texture, and the point of this
   * section is that it does not.
   */
  island: [
    [0.00, { h: 124, d: 100, look: 1.5, az: 0.0 }],
    [0.45, { h: 46, d: 72, look: 6.0, az: 0.05 }],
    [0.78, { h: 19, d: 50, look: 7.5, az: 0.11 }],
    [1.00, { h: 10, d: 40, look: 7.5, az: 0.16 }],
  ],

  /**
   * Through the surface and down to the seabed.
   *
   * The keyframes bunch up around h = 0 on purpose: crossing the surface is
   * the moment worth spending scroll on, so the camera slows through it
   * instead of punching from sky to seabed in one movement.
   */
  dive: [
    [0.00, { h: 124, d: 100, look: 1.5, az: 0 }],
    [0.40, { h: 16, d: 92, look: 3.0, az: 0 }],
    [0.54, { h: 2.2, d: 96, look: 1.0, az: 0.03 }],
    [0.62, { h: -2.5, d: 100, look: -4.0, az: 0.05 }],
    [0.78, { h: -12, d: 104, look: -17, az: 0.1 }],
    [1.00, { h: -20, d: 108, look: -25, az: 0.16 }],
  ],
};

const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);

/** Sample a journey at scroll progress `sc` (0..1). */
export function sampleJourney(name, sc) {
  const track = JOURNEYS[name] || JOURNEYS.approach;
  const t = Math.max(0, Math.min(1, sc));

  let i = 0;
  while (i < track.length - 2 && t > track[i + 1][0]) i++;

  const [t0, a] = track[i];
  const [t1, b] = track[i + 1];
  // Smoothstep within each segment so the joins between keyframes do not read
  // as corners in the motion.
  const k = smooth(t1 === t0 ? 0 : (t - t0) / (t1 - t0));

  return {
    h: lerp(a.h, b.h, k),
    d: lerp(a.d, b.d, k),
    look: lerp(a.look, b.look, k),
    az: lerp(a.az, b.az, k),
  };
}
