# Onos — The EHSQ Intelligence Platform

Marketing site concept for [onos.app](https://onos.app): safety, sustainability, quality and compliance on one platform, powered by **Onos Q** — one intelligence with twelve superpowers.

## Structure

- `index.html` + 44 generated pages (products, industries, Onos Q superpowers, core pages)
- `build.mjs` — static site generator; all copy lives in `data/*.mjs`
- `assets/site.css` / `assets/site.js` — shared design system (GSAP ScrollTrigger + Lenis)
- `assets/img/` — site photography and client logos

## Develop

```sh
npm run build   # regenerate all pages from data files
npm run dev     # serve locally on http://localhost:3000 (set PORT to override)
```

Edit content in `data/superpowers.mjs`, `data/products.mjs`, `data/industries.mjs` or templates in `build.mjs`, then rebuild. Don't hand-edit generated HTML. Bump `ASSET_V` in `build.mjs` when changing CSS/JS so browser caches refresh.
