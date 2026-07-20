import { defineConfig } from 'vite';

// GitHub Pages project site is served from https://<user>.github.io/geoai-sa/,
// so all built asset URLs must be prefixed with the repo name.
// If you later deploy to a custom domain (or the root of a *.github.io user
// page), change this back to '/'.
const base = process.env.VITE_BASE ?? '/geoai-sa/';

// Multi-page build: the main landing page + the per-advantage details page.
export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        details: 'details.html',
        engine: 'engine.html',
      },
    },
  },
});
