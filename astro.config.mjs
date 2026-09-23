import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vibtools.github.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    assets: '_assets',
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
