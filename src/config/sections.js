/**
 * The five detents.
 *
 * Horizontal drag does not rotate freely — it snaps between these positions,
 * and each one is a route. The scene turns to that section's azimuth while the
 * canvas survives the navigation; vertical scroll then moves through that
 * section's own chapters.
 *
 * This file is the single source for both the Astro routes and the client
 * scripts, so the nav, the router and the camera can never disagree about how
 * many sections exist or what order they are in.
 */

export const SECTIONS = [
  {
    slug: '',
    // Scroll leaves the air and keeps going: surface, then reef floor.
    // Midday sun (below) is what makes this dive the bright one.
    journey: 'dive',
    life: { coral: 110, schools: 5, resting: 0, godrays: 1.0, fluorescent: 0 },
    clouds: 0.42,
    sun: 0.3,
    nav: 'The Island',
    title: 'A heart, seen from the air',
    tagline: 'Tavarua · Mamanuca Islands',
    chapters: [
      {
        eyebrow: '01 — Shape',
        heading: 'Twenty-nine acres in the shape of a heart',
        body: [
          'The outline is not a metaphor. A sand ring closed on itself and left a cleft at one end, and from a few hundred feet up the island reads as a heart without any help.',
          'The coastline here comes from an implicit heart curve, baked into a radius table that the terrain and the lagoon both read — so the beach and the shore break always agree.',
        ],
      },
      {
        eyebrow: '02 — Light',
        heading: 'One value moves the sun',
        body: [
          'Dragging sets a single number. That number places the sun and selects the entire palette: sky, sand, canopy, water, fog.',
          'Because every shader reads the same uniforms, the island re-lights as one world rather than as several effects that happen to animate together.',
        ],
      },
    ],
  },
  {
    slug: 'reef',
    clouds: 0.62,
    sun: 0.55,
    nav: 'The Reef',
    title: 'The break that made it famous',
    tagline: 'Coral shelf · Cloudbreak',
    chapters: [
      {
        eyebrow: '01 — Coral',
        heading: 'The reef is its own shape',
        body: [
          'It would be easy to draw the reef as a larger copy of the island. It would also be wrong — the water would read as one enormous heart, which is not what the aerials show.',
          'So the reef is modelled separately: a lopsided oval with coral noise, surrounding the island without imitating it.',
        ],
      },
      {
        eyebrow: '02 — Surf',
        heading: 'Waves break twice',
        body: [
          'Once at the sand line, following the coastline. Once far out on the coral edge, standing off the island entirely.',
          'Both are driven by the same wave field that displaces the surface, so the foam always sits on water that is actually moving.',
        ],
      },
    ],
  },
  {
    slug: 'lagoon',
    // Drops out of the air and glides low across the water alongside a boat.
    journey: 'sail',
    clouds: 0.22,
    sun: 0.2,
    nav: 'The Lagoon',
    title: 'Where the sand shows through',
    tagline: 'Shallows · Turquoise',
    chapters: [
      {
        eyebrow: '01 — Depth',
        heading: 'Colour is a depth cue',
        body: [
          'Shallow water over white sand throws light back before it can be absorbed. Deeper water keeps it. The gradient from turquoise to blue is doing the work of a depth map.',
          'Reflection follows the same rule: the shelf is far less mirror-like than open water, because you are looking at sand rather than sky.',
        ],
      },
    ],
  },
  {
    slug: 'canopy',
    // Comes in close enough that individual palms read.
    journey: 'island',
    flora: { palms: 90, shrubs: 140, grass: 2600, driftwood: 14 },
    clouds: 0.5,
    sun: 0.66,
    nav: 'The Canopy',
    title: 'Green above the sand line',
    tagline: 'Interior · Palms',
    chapters: [
      {
        eyebrow: '01 — Profile',
        heading: 'Flat, not peaked',
        body: [
          'A coral island is not a mountain. The profile is a wide sand shelf that lifts into a gently domed interior — get that wrong and the silhouette stops reading as tropical.',
          'Vegetation is placed by height and slope rather than painted, so the canopy stops where the beach begins on its own.',
        ],
      },
    ],
  },
  {
    slug: 'horizon',
    // The only section that keeps going past the surface. Scroll here does not
    // stop at sea level — it crosses it and descends to the seabed.
    journey: 'dive',
    // A night reef: sparse, dark, and roughly half of it fluorescing.
    life: { coral: 95, schools: 1, resting: 3, godrays: 0.35, fluorescent: 0.5 },
    clouds: 0.78,
    sun: 0.88,
    nav: 'The Horizon',
    title: 'Everything past the reef',
    tagline: 'Open water · Weather',
    chapters: [
      {
        eyebrow: '01 — Distance',
        heading: 'Fog is the only sense of scale',
        body: [
          'With no buildings and no trees at distance, an ocean scene loses depth fast. Atmospheric fade is what puts the horizon far away.',
          'Its colour is taken from the same palette as the sun, so haze at dusk warms with everything else instead of staying a fixed grey.',
        ],
      },
    ],
  },
];

/** Route path for a section index. */
export const pathFor = (i) => {
  const s = SECTIONS[((i % SECTIONS.length) + SECTIONS.length) % SECTIONS.length];
  return s.slug ? `/${s.slug}/` : '/';
};

/** Section index for a pathname, or 0 when it is not a section route. */
export const indexForPath = (pathname) => {
  const clean = pathname.replace(/^\/|\/$/g, '');
  const i = SECTIONS.findIndex((s) => s.slug === clean);
  return i === -1 ? 0 : i;
};
