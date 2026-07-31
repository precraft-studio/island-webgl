import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { port: 4321 },
  vite: {
    // GLSL lives in .js template strings for Phase 0 — no plugin needed.
    build: { target: 'es2022' },
  },
});
