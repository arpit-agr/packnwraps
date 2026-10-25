# Packnwraps

Website for Packnwraps, a packaging solutions company that manufactures food service disposables and packaging products.

**Live site:** https://packnwraps.netlify.app/

The site is a single page built with the [Eleventy](https://www.11ty.dev/) static site generator and deployed on [Netlify](https://www.netlify.com/).

## Getting started

### 1. Clone this repository

```bash
git clone git@github.com:arpit-agr/packnwraps.git
```

### 2. Navigate to the directory

```bash
cd packnwraps
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

This runs Eleventy in watch mode with a local server (by default at http://localhost:8080).

### 5. Build for production

```bash
npm run build
```

The site is written to `public/`. Production builds also minify HTML and CSS.

## Project structure

```
.eleventy.js            Eleventy config: passthrough copies, filters, collections, shortcodes, transforms
netlify.toml            Netlify build settings and cache plugin
src/
├── index.md            Home page; almost all page content lives in its front matter
├── _data/              Global data (site.json: name, description, URL, theme color)
├── _includes/
│   ├── layouts/        Page layouts (base.html, home.html)
│   ├── partials/       Page sections and SVG icons
│   └── css/            Stylesheets, combined and inlined via styles.njk
├── _11ty/image.js      Responsive image shortcode (@11ty/eleventy-img)
├── gallery/            One Markdown file per product gallery image
├── certificates/       One Markdown file per certificate
├── images/             Source images (gallery/ and certificates/ subfolders)
├── scripts/            Client-side JavaScript
├── fonts/              Self-hosted Inter variable font
└── favicons/           Favicons, copied to the site root
```

## Editing content

### Page copy and products

Edit the front matter in `src/index.md`. It holds the hero, About Us, product categories, quality control, gallery and contact sections.

To add a product, add an entry under the right `products.category[].items` list with a `name`, an `image` (`source` and `alt`) and optional `variants`. Product images go in `src/images/gallery/`.

### Gallery

Add the image to `src/images/gallery/`, then add a Markdown file to `src/gallery/`:

```md
---
source: "my-image.jpg"
alt: "Description of the image"
---
```

Gallery items are shown in random order on each build. Add `eleventyExcludeFromCollections: true` to hide an item without deleting it.

### Certificates

Add the image to `src/images/certificates/`, then add a Markdown file to `src/certificates/` with `source` and `alt` in its front matter.

## Images

Images are processed at build time by the `image` shortcode in `src/_11ty/image.js`. Each one is resized to 320, 640, 960 and 1280px wide and output as AVIF, WebP and JPEG into `public/img/`. Netlify caches `public/img/` and `.cache` between builds, so unchanged images are not processed again.

## Deployment

Netlify builds the site with `npm run build` and publishes the `public/` folder, as set in `netlify.toml`.
