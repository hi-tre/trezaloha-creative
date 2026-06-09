# Trezaloha Creative — Astro Portfolio

A Kanaka-owned design studio portfolio built with [Astro](https://astro.build).

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- A terminal (VS Code's built-in terminal works great)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open `http://localhost:4321`.

> **If `npm run build` ever fails with `Cannot find module '@rollup/rollup-...'`**, that's a
> known npm optional-dependency bug. Fix it with a clean install:
> `rm -rf node_modules package-lock.json && npm install`

---

## 📁 Project Structure

```
trezaloha-creative/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── trezaloha-wordmark.png   ← logo (served as-is; not optimized)
├── src/
│   ├── assets/
│   │   └── images/          ← ALL photos live here; optimized at build time
│   │       ├── about/  articles/  brands/  case-studies/  home/
│   ├── components/
│   │   ├── Nav.astro        ← shared navigation
│   │   ├── Footer.astro     ← shared footer (contact + look-book signup)
│   │   ├── Img.astro        ← optimized-image wrapper (see "Images" below)
│   │   └── Cover.astro      ← typographic fallback cover for image-less posts
│   ├── data/
│   │   ├── site.mjs         ← contact info, socials, nav links, Formspree ID
│   │   ├── case-studies.mjs ← all projects (text + image filenames)
│   │   └── articles.mjs     ← all blog posts
│   ├── layouts/
│   │   └── BaseLayout.astro ← <head>, SEO/OG tags, canonical, JSON-LD, transitions
│   ├── pages/
│   │   ├── index.astro · about.astro · services.astro · contact-us.astro
│   │   ├── kahua-deck.astro · 404.astro
│   │   ├── case-studies/  (index.astro + [slug].astro)
│   │   └── articles/      (index.astro + [slug].astro)
│   ├── scripts/bento.js
│   └── styles/global.css   ← design tokens + global styles
├── astro.config.mjs        ← `site` URL + sitemap integration
└── package.json
```

---

## 🖼️ Images

All photos live in `src/assets/images/<folder>/` and are referenced **by filename** in the
data files (e.g. `"heroImage": "piko-hero.jpg"`). The `<Img>` component resolves that filename
and optimizes it at build time — automatic WebP, compression, and intrinsic width/height
(which prevents layout shift). The wordmark/logo stays in `public/images/` and is served as-is.

To add or swap an image: drop the file into the right `src/assets/images/` folder and reference
its filename in the relevant `src/data/*.mjs` entry.

---

## ✏️ Content

- **Projects** → `src/data/case-studies.mjs`. Each entry has `overview`, `sections`,
  image filenames, and a `hasMedia` flag (set it to `true` once real images are in place;
  `false` shows placeholders).
- **Blog posts** → `src/data/articles.mjs`. `thumb`/`heroImg`/`midImg`/`splitImg` are optional;
  posts without them publish text-first using the `Cover` fallback.

---

## 🎨 Colors & Fonts

Edit `:root { }` at the top of `src/styles/global.css`:

```css
--color-accent: #ffd45c;   /* brand gold — accents only */
--color-bg:     #0a0a0a;
--color-text:   #f0ede8;
```

Fonts (Anton + Inter) load via a `<link>` in `BaseLayout.astro` from Google Fonts.

---

## 📬 Contact Form

The contact form and footer form both submit through [Formspree](https://formspree.io) using a
single ID in `src/data/site.mjs`:

1. Create a free Formspree account with the destination email (e.g. `hi@trezalohacreative.com`).
2. Create a form; Formspree gives you an ID like `xayzwabc`.
3. Set `FORMSPREE_ID` in `src/data/site.mjs` to that ID.

Until that's set, the form shows a friendly "not connected yet" message instead of submitting.
Spam is filtered by Formspree plus a hidden honeypot field.

---

## 🚢 Deploying

```bash
npm run build      # outputs dist/ (HTML, optimized images, sitemap, robots.txt)
```

Before going live:
- Confirm `site` in `astro.config.mjs` matches the production domain (drives canonical
  tags, Open Graph URLs, and the sitemap). Currently `https://trezalohacreative.com`.
- For a custom domain on GitHub Pages, add a `public/CNAME` file containing the bare domain
  (e.g. `trezalohacreative.com`).
- Add a social-share image at `public/images/og-image.jpg` (1200×630).

Then deploy via **GitHub Pages → Settings → Pages → Source: GitHub Actions** (Astro provides a
starter workflow), or any static host.

---

Built with ♥ by Tre Zamora | Trezaloha Creative
