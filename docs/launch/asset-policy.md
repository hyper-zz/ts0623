# Asset Policy

Last updated: 2026-06-28

## Runtime Asset Directory

- Runtime website assets live under `public/assets/`.
- Product runtime assets live under `public/assets/products/`.
- Product feature assets for EXM live under `public/assets/products/exm/features/`.
- Runtime paths should keep using `/assets/...` URLs.

## Non-Runtime Directories

These directories are source/archive only and must not be referenced by app code, manifests, CSS, or product data:

- `source-assets/`
- `backups/`
- `docs/archive/`

If a source/original file is needed at runtime, copy or export an optimized runtime version into `public/assets/`.

## Preferred Image Format

- Prefer WebP for runtime product/gallery/model imagery.
- PNG/JPG may remain in `public/assets/products/` only when they are currently the only available runtime version or require manual confirmation.
- PNG is allowed for special cases such as logos, icons, transparent cutouts, and EXM feature keyframes where the runtime asset intentionally needs alpha or exact frame behavior.
- Do not display duplicate gallery items for both `.png` and `.webp` versions of the same image.

## Manifest Rules

- `scripts/generate-gallery-manifest.mjs` scans only `public/assets/products/`.
- `scripts/generate-product-gallery.mjs` scans only `public/assets/products/`.
- Responsive derivatives such as `-mobile.webp` and `-desktop.webp` are grouped by base name.
- Preferred gallery order is `-desktop.webp`, `.webp`, `-mobile.webp`, then legacy raster formats.
- Source/archive folders must not be added to manifest scans.

## Current Manual Confirmation Items

- Existing non-EXM PNG/JPG product images are still referenced by data/manifests and should not be moved without a separate visual QA pass.
- Top-level product family PNGs such as `/assets/products/gl.png`, `/assets/products/exm.png`, `/assets/products/b20.png`, and similar files are active runtime images.
- EXM opening/keyframe PNG files under `public/assets/products/exm/features/exm-opening/` are retained as runtime feature frames.
