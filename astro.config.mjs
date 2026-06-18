// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import swup from '@swup/astro';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [swup()],
});
