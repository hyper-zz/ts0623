# Route Checklist

Last updated: 2026-06-28

## Official Launch Routes

Check these hash routes before launch:

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

## Additional Public Routes Found

These routes are currently active in `src/router.js` and are linked from service cards:

- `#/accessories`
- `#/community`

They were not removed during this launch cleanup. Confirm whether they remain public launch routes or should be hidden in a separate product/navigation decision.

## Product Route Naming Note

- Current product data includes `d`, so the active D-series detail route is `#/products/d`.
- If launch copy requires `#/products/d-series`, add that as a separate route-alias task; it was not changed in this conservative cleanup.

## Stale Route Audit

- No active `/oem-odm` route was found in app source.
- No active `/capabilities` route was found in app source.
- CSS still contains `.capabilities` section styles. These are retained because they may be legacy/reusable section styles and are not a routing risk by themselves.

## Manual QA Notes

- Confirm each product detail route renders the correct hero, model selector, gallery, model specification, and footer.
- Confirm unknown product ids still fall back safely through existing route behavior.
- Confirm localized/hash-anchor behavior still works where used.
