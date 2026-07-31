import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages serves an org's project repos from a subdirectory, so every
  // built URL has to carry it. Astro handles this for the pages it generates
  // and for its own asset URLs; what it cannot see is the routing this site
  // does by hand — pathFor() in config/sections.js builds the drag carousel's
  // destinations, so that reads import.meta.env.BASE_URL, which is this value.
  site: 'https://precraft-studio.github.io',
  base: '/island-webgl',

  server: { port: 4321 },
  vite: {
    // GLSL lives in .js template strings for Phase 0 — no plugin needed.
    build: { target: 'es2022' },
  },
});
