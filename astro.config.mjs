import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vibtools.github.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
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
