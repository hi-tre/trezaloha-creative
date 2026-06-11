import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` + `base` define where the build is hosted. They drive canonical tags,
// Open Graph URLs, the sitemap, and (via src/utils/url.mjs) every internal link.
//
// CURRENTLY: custom domain → trezalohacreative.com (served at the root).
// The public/CNAME file keeps GitHub Pages bound to this domain on each deploy.
//
// TO REVERT to the GitHub Pages project subpath, swap back to:
//     site: 'https://hi-tre.github.io',
//     base: '/trezaloha-creative',
// (No other code changes needed — url() in src/utils/url.mjs handles the rest.)
export default defineConfig({
  site: 'https://trezalohacreative.com',
  base: '/',
  integrations: [sitemap()],
});
