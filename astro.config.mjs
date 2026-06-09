import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is the canonical production URL. It drives canonical tags, Open Graph
// URLs, and the generated sitemap. Update this if the live domain changes.
export default defineConfig({
  site: 'https://trezalohacreative.com',
  base: '/',
  integrations: [sitemap()],
});
