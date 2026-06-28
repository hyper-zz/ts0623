# Image Format Cleanup Report

Date: 2026-06-28

## Scope

This cleanup focused on `public/assets/products/`.

Goal: prefer WebP for runtime assets when a WebP version already exists, and move confirmed raw PNG/JPG originals out of the deployable `public/assets/products/` tree.

## Summary

- Duplicate original + WebP groups found before cleanup: 17 groups.
- Duplicate original + WebP groups remaining after cleanup: 0 groups.
- Runtime EXM gallery references now point to `*-desktop.webp`.
- Runtime EXM model-color references already point to `*-desktop.webp` and were regenerated.
- Runtime EXM feature sequence and sound fallbacks now point to desktop WebP files.
- Confirmed raw originals moved to `source-assets/products-raw/`: 17 files.
- Unique PNG/JPG assets left in `public/assets/products/`: 93 files. These were not moved because no WebP replacement exists or because they require manual confirmation.

## Manifest / Generator Changes

Updated:

- `scripts/generate-gallery-manifest.mjs`
  - Groups gallery files by base name.
  - Prefers `*-desktop.webp`, then `.webp`, then `*-mobile.webp`, then original formats.
  - Prevents `png` + responsive `webp` duplicates from becoming multiple gallery entries.

- `scripts/generate-product-gallery.mjs`
  - Groups gallery files by base name.
  - Prefers WebP variants over original formats.
  - Prevents duplicate gallery items when multiple formats exist.

- `src/components/ProductDetailTemplate.js`
  - `responsiveAssetPath()` now handles source paths that already end in `-desktop.webp` or `-mobile.webp`.

## Runtime Reference Changes

Updated:

- `src/components/ExmFeatureEffects.js`
  - Sequence fallback paths changed from `.png` to `*-desktop.webp`.
  - Sound fallback path changed from `.jpg` to `sound-level-camping-desktop.webp`.

- `src/data/galleryManifest.js`
  - EXM gallery now references:
    - `/assets/products/exm/gallery/1-desktop.webp`
    - `/assets/products/exm/gallery/6-desktop.webp`
    - `/assets/products/exm/gallery/623 拷贝-desktop.webp`
    - `/assets/products/exm/gallery/xj.2-desktop.webp`
    - `/assets/products/exm/gallery/开瓶器更新2-desktop.webp`

- `src/data/productGallery.js`
  - EXM gallery now references the same desktop WebP files.

- `src/data/productImageManifest.js`
  - EXM model images reference `*-desktop.webp`.

## Files Moved Out Of Public

Moved from `public/assets/products/` to `source-assets/products-raw/`:

- `exm/features/sequence-01.png`
- `exm/features/sequence-02.png`
- `exm/features/sequence-03.png`
- `exm/features/sequence-04.png`
- `exm/features/cooling-effect.jpg`
- `exm/features/sound-level-camping.jpg`
- `exm/gallery/1.png`
- `exm/gallery/6.png`
- `exm/gallery/623 拷贝.png`
- `exm/gallery/xj.2.png`
- `exm/gallery/开瓶器更新2.png`
- `exm/models/exm30-black.jpg`
- `exm/models/exm30-bluegray&lightgray.png`
- `exm/models/exm40-black.jpg`
- `exm/models/exm40-bluegray&lightgray.png`
- `exm/models/exm50-black.jpg`
- `exm/models/exm50-bluegray&lightgray.png`

## Confirmed WebP Runtime Assets Remaining In Public

EXM feature / gallery / model runtime WebP assets now remain under:

- `public/assets/products/exm/features/*.webp`
- `public/assets/products/exm/gallery/*-desktop.webp`
- `public/assets/products/exm/gallery/*-mobile.webp`
- `public/assets/products/exm/models/*-desktop.webp`
- `public/assets/products/exm/models/*-mobile.webp`

## PNG/JPG Still In Public For Manual Confirmation

These are unique PNG/JPG files with no matching WebP replacement currently present, or assets that may be product cutouts / transparent keyframes requiring manual confirmation.

Top-level product images:

- `public/assets/products/S35.png`
- `public/assets/products/ax.png`
- `public/assets/products/b.jpg`
- `public/assets/products/b20.png`
- `public/assets/products/d.jpg`
- `public/assets/products/ex.png`
- `public/assets/products/exm.png`
- `public/assets/products/gl.png`
- `public/assets/products/k.jpg`
- `public/assets/products/m.png`
- `public/assets/products/p12.png`
- `public/assets/products/s18-orange.png`
- `public/assets/products/tf.jpg`

Product galleries / models without WebP replacement:

- `public/assets/products/D/gallery/*.png`
- `public/assets/products/S18/*.png`
- `public/assets/products/S18/gallery/*.png`
- `public/assets/products/S18/models/*.png`
- `public/assets/products/ax/gallery/*.png`
- `public/assets/products/ax/models/*.png`
- `public/assets/products/b/gallery/*.png`
- `public/assets/products/b/gallery/主图2.jpg`
- `public/assets/products/b/models/*.png`
- `public/assets/products/ex/gallery/*.png`
- `public/assets/products/ex/models/*.png`
- `public/assets/products/gl/*.png`
- `public/assets/products/gl/models/*.png`
- `public/assets/products/m/gallery/*.png`
- `public/assets/products/m/models/*.png`

EXM assets intentionally left in public:

- `public/assets/products/exm/features/anti-shaking/rough-road.png`
- `public/assets/products/exm/features/anti-shaking/campsite-roll.png`
- `public/assets/products/exm/features/anti-shaking/vehicle-trunk.jpg`
- `public/assets/products/exm/features/exm-opening/*.png`

Reason: these currently have no WebP replacements in the runtime folder, and the EXM opening files are transparent/cutout-style keyframes that should be manually confirmed before conversion or archival.

## Current Code References To PNG/JPG

Remaining PNG/JPG references are for unique or manually confirmed assets, mainly:

- Top-level product hero/family images in `src/data/products.js`, `src/data/homepage.js`, `src/data/productFamilies.js`, and `src/i18n/en.js`.
- Non-EXM product gallery/model images in `src/data/products.js` and generated manifests.
- EXM Anti Shaking images in `src/components/AntiShakingSection.js`.

No runtime source reference remains to the moved EXM original feature/gallery/model files.

## Commands Run

Manifest generation:

```bash
node scripts/generate-gallery-manifest.mjs
node scripts/generate-product-gallery.mjs
```

Results:

- EXM gallery: 5 entries.
- EXM model images: 6 entries.
- Product gallery generator: EXM remains 5 entries.

Static syntax checks:

```bash
node --check scripts/generate-gallery-manifest.mjs
node --check scripts/generate-product-gallery.mjs
node --check src/components/ProductDetailTemplate.js
node --check src/components/ExmFeatureEffects.js
node --check src/components/CoolingTimerFeature.js
node --check src/components/AntiShakingSection.js
```

Result: passed.

Build:

```bash
npm run build
```

Result: failed because `package.json` does not define a `build` script.

Current scripts are:

- `generate:gallery`
- `dev`
- `preview`

## Follow-Up Recommendations

- Add WebP versions for the remaining unique product PNG/JPG files before moving them out of `public/assets/products/`.
- Manually confirm transparent/cutout assets before converting or archiving them.
- Add a real `build` script if this project needs build-time validation.
