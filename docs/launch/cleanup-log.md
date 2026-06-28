# Cleanup Log

Last updated: 2026-06-28

## Scope

This was a conservative prelaunch cleanup. No visual redesign, route restructure, product data rewrite, hero scroll-gate change, gallery layout change, or EXM feature order change was intended.

## Archived Reports

Moved to `docs/archive/reports/`:

- `asset-audit-report.md`
- `asset-reference-audit.md`
- `asset-migration-report.md`
- `image-format-cleanup-report.md`
- `exm-asset-optimization-report.md`
- `gl-series.md`
- `content-map.md`
- `chatgpt-review-prompt.md`

Copied, but not moved:

- `review.md` -> `docs/archive/reports/review-2026-06-28.md`

Root `review.md` remains in place.

## Asset Audit Notes

- Runtime product asset scanning is limited to `public/assets/products/`.
- `source-assets/` and `backups/` contain source/original or historical files and are not runtime directories.
- No runtime app source references to `source-assets/` were found.
- `scripts/optimize-exm-assets.py` still mentions `backups/` because it documents and manages EXM source/original backup movement; it is not part of runtime app code.
- Several active runtime `.png` and `.jpg` images remain under `public/assets/products/` because they are the only available versions or require manual confirmation.
- EXM opening PNG keyframes remain in `public/assets/products/exm/features/exm-opening/` as runtime feature frames.

## Route Audit Notes

- Official launch route list is documented in `docs/launch/route-checklist.md`.
- `#/accessories` and `#/community` are still active public routes and are linked from service cards.
- No active `/oem-odm` route was found.
- No active `/capabilities` route was found.
- `.capabilities` CSS remains as legacy/reusable styling and was not removed.

## Lifecycle Audit Notes

- `src/components/ExmFeatureEffects.js` has a cleanup path for listeners, observers, timers, and animation frames.
- `src/utils/navigation.js` tracks and replaces the horizontal scroll resize handler when rebinding content.
- `src/utils/heroScrollGate.js` owns setup/refresh/teardown logic and ResizeObserver cleanup.
- `src/main.js` intentionally owns global route/navigation listeners for the single-page app lifecycle.
- No conservative code change was made in lifecycle logic during this cleanup.

## CSS Cleanup Notes

- Added high-level section comments to `src/styles.css`.
- No CSS rules were reordered.
- No uncertain selectors/classes were deleted.
- No visual values were intentionally changed.

## Manifest Check Notes

- `npm run check` completed successfully.
- Syntax checks passed for the configured entry, route, component, and manifest script files.
- Manifest regeneration changed EXM gallery references from legacy PNG filenames to `-desktop.webp` runtime assets in:
  - `src/data/galleryManifest.js`
  - `src/data/productGallery.js`
- `src/data/productImageManifest.js` had no generated diff in this check.
- Manifest script output:
  - `gl`: 0 gallery, 7 model images
  - `ax`: 4 gallery, 9 model images
  - `b`: 5 gallery, 0 model images
  - `d`: 6 gallery, 0 model images
  - `ex`: 5 gallery, 0 model images
  - `exm`: 5 gallery, 6 model images
  - `k`: 0 gallery, 0 model images
  - `m`: 4 gallery, 6 model images
  - `s`: 5 gallery, 0 model images
  - `tf`: 0 gallery, 0 model images

## Manual Confirmation Remaining

- Decide whether `#/accessories` and `#/community` should remain visible launch routes.
- Review remaining non-EXM PNG/JPG runtime images in a dedicated image-format pass.
- Confirm whether legacy `.capabilities` CSS can be removed in a later cleanup after visual QA.
