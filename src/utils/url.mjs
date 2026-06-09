// Base-aware URL helper.
//
// The site is currently served from a GitHub Pages subfolder
// (hi-tre.github.io/trezaloha-creative/), so every internal, root-relative
// link and public asset path must be prefixed with the configured `base`.
//
// `url('/about')` →  '/trezaloha-creative/about'   (base = '/trezaloha-creative')
//                →  '/about'                        (base = '/')
//
// When the custom domain (trezalohacreative.com) is connected later, set
// `base: '/'` in astro.config.mjs and this helper becomes a no-op — no link
// edits required.
const BASE = import.meta.env.BASE_URL; // '/' or '/trezaloha-creative/'

export function url(path = '/') {
  const base = BASE.replace(/\/$/, ''); // '' or '/trezaloha-creative'
  if (!path || path === '/') return base + '/';
  return base + (path.startsWith('/') ? path : '/' + path);
}
