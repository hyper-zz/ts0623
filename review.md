# Kelvcoop / Travel Science Site Review

Last updated: 2026-06-28

## 1. Package Summary

This repository is a vanilla JavaScript single-page website for Kelvcoop / Travel Science. It uses hash routing, plain ES modules, a local Node static server, and runtime static assets from `public/assets/`.

This review reflects the current prelaunch code package state after conservative cleanup:

- No bundler build step is configured.
- Runtime assets are served from `public/assets/`.
- Historical reports are archived under `docs/archive/reports/`.
- Launch documentation is under `docs/launch/`.
- Source/original image files are outside runtime paths under `source-assets/` and `backups/`.

## 2. Current Commands

```bash
npm run dev
npm run preview
npm run generate:gallery
npm run check:syntax
npm run check:manifests
npm run check
```

Command behavior:

- `npm run dev`: regenerates `galleryManifest.js`, then starts `server.mjs`.
- `npm run preview`: same as `dev`.
- `npm run generate:gallery`: regenerates `src/data/productGallery.js`.
- `npm run check:syntax`: runs `node --check` on key source and script files.
- `npm run check:manifests`: regenerates gallery/product image manifests.
- `npm run check`: runs syntax checks and manifest generation.

Latest known check result:

```bash
npm run check
```

Passed on 2026-06-28.

## 3. Runtime Architecture

Render flow:

1. `index.html` loads `src/main.js`.
2. `src/main.js` renders `Header`, routed page content, and `Footer`.
3. `src/router.js` resolves the current hash route.
4. Post-render initialization binds navigation, reveal effects, EXM feature effects, product selectors, horizontal scrollers, and hero scroll gate behavior.

Important files:

- `index.html`: HTML shell.
- `server.mjs`: local static file server.
- `src/main.js`: app mount and lifecycle entry.
- `src/router.js`: hash router.
- `src/styles.css`: global stylesheet.
- `src/utils/navigation.js`: navigation, menus, selectors, scrollers.
- `src/utils/heroScrollGate.js`: homepage hero scroll-gate control.

## 4. Routes

Main active routes:

- `#/`
- `#/products`
- `#/products/gl`
- `#/products/ax`
- `#/products/exm`
- `#/products/b`
- `#/products/k`
- `#/products/tf`
- `#/products/m`
- `#/products/ex`
- `#/products/s35`
- `#/products/s`
- `#/products/d`
- `#/custom-projects`
- `#/support`
- `#/contact`

Additional public routes currently active:

- `#/accessories`
- `#/community`

Notes:

- No active `/oem-odm` route was found.
- No active `/capabilities` route was found.
- `.capabilities` styles still exist in CSS and are retained as legacy/reusable styles.
- If a public route such as `#/products/d-series` is required, add it later as an explicit route-alias task. Current product ids resolve to routes such as `#/products/d`.

## 5. Key Feature Areas

### Product Detail

Primary file:

- `src/components/ProductDetailTemplate.js`

Responsibilities:

- Product detail hero.
- Model/color selector.
- Model Specifications.
- EXM feature insertion.
- Product gallery.
- Usage Scenarios.
- Materials/certifications/downloads/related products.

### EXM Feature Story

Primary files:

- `src/components/ExmFeatureEffects.js`
- `src/components/CoolingTimerFeature.js`
- `src/components/AntiShakingSection.js`
- `src/styles.css`

Current EXM feature order:

1. Dimensions / measurement reveal.
2. Cooling system bridge title.
3. Cooling system content.
4. Cooling timer full-screen section.
5. Anti Shaking section.
6. Sound / quiet operation section.
7. Product Gallery.

### Cooling Timer

Primary file:

- `src/components/CoolingTimerFeature.js`

Runtime assets:

- `public/assets/products/exm/features/cooling-timer/`

Current behavior:

- Center countdown from `30°C` to `0°C`.
- Timer ring animation duration: `1.2s`.
- Blue progress ring covers the orange base ring to represent full cooling.
- Time markers: `5min`, `10min`, `15min`, `20min`.
- Result line: `from ambient to 0°C ≈ 20min`.

### Anti Shaking

Primary file:

- `src/components/AntiShakingSection.js`

Runtime assets:

- `public/assets/products/exm/features/anti-shaking/`

The section is inserted after the cooling timer and before the sound feature.

## 6. Data Files

Primary data:

- `src/data/products.js`
- `src/data/productFamilies.js`
- `src/data/homepage.js`
- `src/data/heroSlides.js`
- `src/data/serviceCards.js`
- `src/data/materials.js`
- `src/data/accessories.js`
- `src/data/socialCrew.js`
- `src/data/socialLinks.js`
- `src/data/seo.js`

Generated data:

- `src/data/galleryManifest.js`
- `src/data/productGallery.js`
- `src/data/productImageManifest.js`

Generation scripts:

- `scripts/generate-gallery-manifest.mjs`
- `scripts/generate-product-gallery.mjs`

Manifest behavior:

- Scans only `public/assets/products/`.
- Prefers WebP when duplicate image bases exist.
- Groups `-mobile.webp` and `-desktop.webp` derivatives by base image name.
- Does not scan `source-assets/`, `backups/`, or `docs/archive/`.

## 7. Asset Policy

Runtime assets:

- `public/assets/`
- `public/assets/products/`

Source/archive assets:

- `source-assets/`
- `backups/`
- `docs/archive/`

Rules:

- Website runtime paths should use `/assets/...`.
- WebP is preferred for runtime product/gallery/model imagery.
- PNG/JPG files may remain when they are unique runtime assets or require manual confirmation.
- EXM opening/keyframe PNGs may remain as runtime feature frames.
- Do not reference `source-assets/`, `backups/`, or `docs/archive/` from app code.

See also:

- `docs/launch/asset-policy.md`

## 8. Documentation

Launch docs:

- `docs/launch/prelaunch-checklist.md`
- `docs/launch/route-checklist.md`
- `docs/launch/asset-policy.md`
- `docs/launch/cleanup-log.md`

Protection notes:

- `docs/hero-protection.md`

Archived reports:

- `docs/archive/reports/asset-audit-report.md`
- `docs/archive/reports/asset-migration-report.md`
- `docs/archive/reports/asset-reference-audit.md`
- `docs/archive/reports/chatgpt-review-prompt.md`
- `docs/archive/reports/content-map.md`
- `docs/archive/reports/exm-asset-optimization-report.md`
- `docs/archive/reports/gl-series.md`
- `docs/archive/reports/image-format-cleanup-report.md`
- `docs/archive/reports/review-2026-06-28.md`

## 9. Folder And Content Hierarchy

```text
.
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── review.md
├── server.mjs
├── docs/
│   ├── hero-protection.md
│   ├── launch/
│   │   ├── asset-policy.md
│   │   ├── cleanup-log.md
│   │   ├── prelaunch-checklist.md
│   │   └── route-checklist.md
│   └── archive/
│       ├── old-notes/
│       └── reports/
├── public/
│   └── assets/
│       ├── 360/
│       ├── brand/
│       ├── community/
│       ├── downloads/
│       ├── hero/
│       ├── icons/
│       ├── products/
│       │   ├── ax/
│       │   ├── b/
│       │   ├── D/
│       │   ├── ex/
│       │   ├── exm/
│       │   │   ├── features/
│       │   │   │   ├── anti-shaking/
│       │   │   │   ├── cooling-timer/
│       │   │   │   └── exm-opening/
│       │   │   ├── gallery/
│       │   │   └── models/
│       │   ├── gl/
│       │   ├── m/
│       │   └── S18/
│       ├── services/
│       └── travel-science-material-library/
├── scripts/
│   ├── capture-page-screenshots.mjs
│   ├── generate-gallery-manifest.mjs
│   ├── generate-product-gallery.mjs
│   ├── optimize-exm-assets.py
│   └── trim-png-by-group-union-bbox.py
├── source-assets/
│   └── products-raw/
├── backups/
└── src/
    ├── main.js
    ├── router.js
    ├── styles.css
    ├── components/
    │   ├── AntiShakingSection.js
    │   ├── ContactSection.js
    │   ├── CoolingTimerFeature.js
    │   ├── ExmFeatureEffects.js
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── HeroCarousel.js
    │   ├── ProductCard.js
    │   ├── ProductDetailTemplate.js
    │   ├── ProductFamily.js
    │   ├── ProductMaterials.js
    │   └── ServiceEntryCards.js
    ├── data/
    │   ├── accessories.js
    │   ├── galleryManifest.js
    │   ├── heroSlides.js
    │   ├── homepage.js
    │   ├── materials.js
    │   ├── productFamilies.js
    │   ├── productGallery.js
    │   ├── productImageManifest.js
    │   ├── products.js
    │   ├── seo.js
    │   ├── serviceCards.js
    │   ├── socialCrew.js
    │   └── socialLinks.js
    ├── i18n/
    │   ├── en.js
    │   ├── index.js
    │   └── zh.js
    ├── pages/
    │   ├── AccessoriesPage.js
    │   ├── CommunityPage.js
    │   ├── ContactPage.js
    │   ├── CustomProjectsPage.js
    │   ├── HomePage.js
    │   ├── ProductDetailPage.js
    │   ├── ProductFamilyPage.js
    │   ├── ProductsPage.js
    │   └── SupportPage.js
    └── utils/
        ├── dom.js
        ├── heroScrollGate.js
        └── navigation.js
```

## 10. Package Exclusions

Recommended code handoff archives should exclude:

- `.git/`
- `node_modules/`
- `.DS_Store`
- `backups/`
- `source-assets/`
- `docs/archive/`
- old package zip files

These exclusions keep the package focused on runnable site code, launch docs, and runtime public assets.

## 11. Generated Code Package

Generated package:

- `dist/kelvcoop-site-code-2026-06-28.zip`
- Size: approximately `741M`

Included:

- `index.html`
- `server.mjs`
- `package.json`
- `package-lock.json`
- `README.md`
- `review.md`
- `src/`
- `public/`
- `scripts/`
- `docs/launch/`
- `docs/hero-protection.md`

Excluded:

- `.git/`
- `node_modules/`
- `backups/`
- `source-assets/`
- `docs/archive/`
- `.DS_Store`
- `dist/`
- `.vscode/`

Package verification:

- No excluded path was found inside the generated zip.
- `npm run check` passed before packaging.

## 12. Current Manual Checks Before Final Launch

- Confirm `#/accessories` and `#/community` are intended public routes.
- Confirm remaining non-EXM PNG/JPG runtime assets are acceptable for launch.
- Browser-check product detail pages at mobile, tablet, desktop, and xlarge widths.
- Confirm `npm run check` still passes immediately before handoff.

## 13. Current Git Worktree Note

The worktree contains active modifications from the recent prelaunch cleanup and prior EXM/product-detail work. Do not use destructive reset commands unless these changes are intentionally discarded.
