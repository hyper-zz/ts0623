# Prelaunch Checklist

Last updated: 2026-06-28

## Automated Checks

Run before launch:

```bash
npm run check
```

This command performs:

- Syntax checks for the key entry, route, product detail, EXM feature, timer, anti-shaking, and manifest scripts.
- Regeneration of gallery/product image manifests from `public/assets/products/`.

Do not use `npm run dev` as an automated launch check. Use it only for manual browser QA when needed.

## Manual Browser Checks

Check at least:

- 390px mobile width
- 430px mobile width
- 768px tablet width
- 900px tablet/desktop boundary
- 1200px desktop
- 1440px desktop
- 1680px+ wide desktop

## Product Detail Checks

- Hero loads and scroll behavior is unchanged.
- Product selector and color selector work.
- Gallery renders the expected image count and does not duplicate `.png`/`.webp` variants.
- Model Specifications render correctly at mobile, MacBook, and xlarge widths.
- EXM feature sections keep their scroll-gated behavior.
- EXM dimensions/cooling/timer/anti-shaking sections render in the intended order.
- Usage Scenarios remain open typography, not cards.

## Asset Checks

- Runtime product images load from `/assets/products/...`.
- `source-assets/`, `backups/`, and `docs/archive/` are not referenced by runtime code.
- EXM WebP responsive derivatives are preferred where the code supports them.
- PNG files that remain in `public/assets/products/` are active runtime files or need manual confirmation.

## Route Checks

Use `docs/launch/route-checklist.md` as the launch route source of truth.

## Hold Conditions

Do not launch if:

- `npm run check` fails.
- Generated manifests unexpectedly remove required product/gallery/model images.
- Any product detail route has missing images or visible duplicated gallery variants.
- Any archive/source directory is referenced by runtime code.
