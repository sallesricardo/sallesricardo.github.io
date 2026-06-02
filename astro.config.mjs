// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Caso use Tailwind

export default defineConfig({
  site: 'https://sallesricardo.github.io',
  integrations: [tailwind()],
});
