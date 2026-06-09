import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` + `base` define where the build is hosted. They drive canonical tags,
// Open Graph URLs, the sitemap, and (via src/utils/url.mjs) every internal link.
//
// CURRENTLY: GitHub Pages project site → hi-tre.github.io/trezaloha-creative/
// TO MOVE TO the custom domain later, swap to:
//     site: 'https://trezalohacreative.com',
//     base: '/',
// (No other code changes needed — url() in src/utils/url.mjs handles the rest.)
export default defineConfig({
  site: 'https://hi-tre.github.io',
  base: '/trezaloha-creative',
  integrations: [sitemap()],
});
