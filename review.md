# Travel Science Site Code Review Brief

Use this file as a handoff prompt for ChatGPT or another reviewer. The goal is to find and fix bugs in the current local codebase, not to redesign the site.

## Review Goal

Review the full Travel Science / Kelvcoop vanilla JavaScript site for regressions, broken routes, mobile/Safari scroll bugs, missing assets, layout overflow, product-detail bugs, theme issues, and interaction bugs.

Prioritize real defects and risky edge cases. Avoid broad visual redesign unless it directly fixes a bug.

## Project Snapshot

- App type: vanilla JavaScript single-page app using hash routing.
- Entry point: `src/main.js`
- Router: `src/router.js`
- Main stylesheet: `src/styles.css`
- Dev server: `server.mjs`
- Public assets: `public/assets/`
- Dev command: `npm run dev`
- Gallery generation: `npm run generate:gallery`
- Product gallery manifest generator used by dev server: `scripts/generate-gallery-manifest.mjs`

## Current Verification

Ran:

```bash
for f in $(rg --files src scripts server.mjs | rg '\.(js|mjs)$'); do node --check "$f" || exit 1; done
npm run generate:gallery
```

Results:

- JavaScript syntax check passed.
- `npm run generate:gallery` completed.
- Generated gallery counts printed:
  - `gl: 0`
  - `ax: 4`
  - `exm: 5`
  - `b: 5`
  - `k: 0`
  - `tf: 0`
  - `m: 4`
  - `ex: 5`
  - `s35: 0`
  - `s: 5`
  - `d: 6`

## Current Git State

The worktree is dirty. Do not assume all changes are intentional or complete.

Modified:

- `src/components/ContactSection.js`
- `src/components/Header.js`
- `src/components/ProductDetailTemplate.js`
- `src/components/ProductFamily.js`
- `src/i18n/en.js`
- `src/main.js`
- `src/pages/ProductsPage.js`
- `src/styles.css`

Untracked:

- `src/components/ExmFeatureEffects.js`
- `public/assets/products/exm/features/`

Important: do not revert unrelated user work. If fixing bugs, scope patches carefully.

## Key Routes To Test

Primary routes:

- `#/`
- `#/products`
- `#/accessories`
- `#/community`
- `#/custom-projects`
- `#/support`
- `#/contact`

Product detail routes:

- `#/products/gl-series`
- `#/products/m-series`
- `#/products/ex-series`
- `#/products/exm-series`
- `#/products/b-series`
- `#/products/s-series`
- `#/products/tf-series`
- `#/products/k-series`
- `#/products/d-series`

Product family/category routes:

- `#/products/compact-cooling`
- `#/products/large-capacity`
- `#/products/dual-zone-storage`
- `#/products/wheeled-mobility`

Localized route smoke tests:

- `#/zh`
- `#/zh/products`
- `#/zh/support`
- `#/zh/contact`
- `#/zh/products/exm-series`

## Architecture Summary

### `src/main.js`

Responsible for:

- Rendering Header, route content, Footer.
- Applying SEO and text highlighting.
- Binding navigation after each render.
- Running `revealSections(app)`.
- Running `initExmFeatureEffects(app)`.
- Running protected `heroScrollGate`.
- Managing mobile nav state, product dropdown state, theme, and current hero slide.

Risk areas:

- `render()` rebuilds the whole app with `app.innerHTML`. Any event listener or observer must be cleaned up by its module before rerender.
- `initExmFeatureEffects(app)` depends on `cleanupExmFeatureEffects` inside `src/components/ExmFeatureEffects.js`; check for leaked scroll listeners after route changes.
- `window.addEventListener("wheel", heroScrollGate.handleWheel, { passive: false })` is global. It is protected hero logic, but it can still affect scroll behavior if measurement is wrong.
- `forceScrollPageToTop()` runs on route changes and may fight anchor navigation if route/anchor state is misdetected.

### `src/router.js`

Responsible for:

- Hash-based routing.
- Locale normalization.
- Product family vs product detail routing.
- Same-route anchor behavior.

Risk areas:

- `go(path)` treats same localized route as no-op and manually scrolls. Recheck same-route anchor links like support downloads/warranty/spare-parts.
- `routeSeo()` only has special product/family handling; most non-product pages get global SEO.

### `src/utils/navigation.js`

Responsible for:

- Delegated `[data-go]` route clicks.
- Mobile menu and product submenu toggles.
- Theme toggle.
- Desktop product dropdown hover/focus behavior.
- Product hero model/color image switching.
- Product image availability validation via `fetch(..., { method: "HEAD" })` fallback to GET.
- Horizontal scroller controls.
- Product materials preview interactions.

Risk areas:

- Every render calls `bindNavigation(...)` on the new root. This is okay for DOM listeners on replaced nodes, but global listeners must be removed. Horizontal resize handler is stored on `state.horizontalScrollResizeHandler`; verify it is always removed and replaced.
- `validateProductImageAvailability()` can issue many HEAD/GET requests on each product detail render. On slow servers this could cause delayed UI changes or console/network noise.
- Product image availability mutates the parsed image map in `dataset.productImages`; verify this cannot desync model/color controls after repeated route changes.
- Mobile menu toggle uses a 280ms lock stored in state. Verify rapid tapping cannot leave menu state out of sync with rendered classes.

### `src/components/Header.js`

Responsible for:

- Desktop product dropdown.
- Mobile nav/product accordion.
- Support dropdown.
- Language switch.
- Theme toggle.
- Contact CTA.

Risk areas:

- Product menu groups are manual data inside Header. Product ids or slugs can drift from `src/data/products.js`.
- Header has both desktop and mobile controls inside the same nav. Check tab order and screen reader behavior.
- Mobile menu and header fixed positioning have several media query overrides in `src/styles.css`; test at 390px, 768px, 1024px, and 1440px.

### `src/components/ProductDetailTemplate.js`

Responsible for product detail pages:

- Product hero/model/color selector.
- Model specifications.
- EXM-only feature effects.
- Product Gallery.
- Materials.
- Use cases.
- Certifications.
- Downloads.
- Related products.
- Product Inquiry CTA.

Current EXM insertion:

```js
${modelSpecifications(product)}
${product.id === "exm" ? ExmFeatureEffects() : ""}
${gallerySection(product)}
```

Risk areas:

- EXM feature effects should appear only on `product.id === "exm"`.
- Many labels are hardcoded English even when locale is Chinese.
- The Product Inquiry copy was recently changed. Reconfirm current copy is:
  - `PRODUCT INQUIRY`
  - `Not sure which model fits?`
  - `Tell us your capacity range, application, or market. We’ll help you find the right series.`
  - `info@kelvcoop.com`
- `productHeroState()` embeds JSON into an HTML attribute. Product image paths containing single quotes would break the attribute. Current paths appear safe, but this is fragile.

## EXM Feature Effects Special Review

File:

- `src/components/ExmFeatureEffects.js`

CSS:

- `src/styles.css`, EXM block around `.exm-feature-effects`, `.exm-sequence-*`, `.exm-cooling-*`, `.exm-sound-*`.

Assets:

- `public/assets/products/exm/features/sequence-01.png`
- `public/assets/products/exm/features/sequence-02.png`
- `public/assets/products/exm/features/sequence-03.png`
- `public/assets/products/exm/features/sequence-04.png`
- `public/assets/products/exm/features/cooling-effect.jpg`
- `public/assets/products/exm/features/sound-level-camping.jpg`

Current intended behavior:

- EXM feature appears between Model Specifications and Product Gallery.
- Sequence reveal is sticky-scroll, scroll progress drives four image opacities.
- Cooling effect uses IntersectionObserver fade-in.
- Sound level camping is sticky-scroll, scroll progress drives SVG curve/path, nodes, labels, and mobile copy.
- Mobile has a dedicated vertical SVG:
  - `.exm-sound-level__svg--desktop`
  - `.exm-sound-level__svg--mobile`
- Mobile must not be a static fallback unless `prefers-reduced-motion: reduce`.

Important current implementation notes:

- `ExmFeatureEffects.js` now uses one passive scroll listener plus `requestAnimationFrame`.
- EXM feature code should not use `touchmove preventDefault`.
- EXM feature code should not use fixed lock / lockScrollY / release scroll / scrollTo unlock.
- Reduced motion shows final state directly.

Potential bug to check:

- `renderSound(progress)` stores one global `lastRenderedSoundProgress` for both desktop and mobile paths. This is fine for one mounted EXM section, but if viewport changes across mobile/desktop while the same section remains mounted, state can make flash timing odd. It should not break rendering because path offset still updates when progress changes.
- In reduced motion, sequence sets only the last image opacity to `1` and earlier images to `0`. This is intentional final state, but confirm the visual is acceptable.
- In normal mode, sound points are hidden again when progress drops below trigger. Verify CSS transitions do not leave glow animation artifacts after reverse scroll.
- The sound section height is `220vh` desktop and `220svh` mobile. If the animation feels too fast on mobile, increase height/min-height rather than adding scroll locks.
- `svh` support is good on modern Safari, but older browsers may need fallback. There is currently no explicit `vh` fallback immediately before every `svh` mobile height.

## CSS Review Hotspots

File:

- `src/styles.css`

Risk areas:

- Large single CSS file with many overlapping media queries. Later rules can override earlier component-specific rules.
- Header has fixed positioning and multiple responsive overrides. Confirm it overlays hero without creating top whitespace.
- Product Family section has been changed from side-by-side to top header + card grid. Confirm mobile scroller/card widths do not conflict with later global media rules.
- EXM feature uses full-bleed `width: 100vw` and `margin-left: calc(50% - 50vw)`. It also sets `max-width: 100%` and `overflow-x: hidden`; still verify no body horizontal scroll on iPhone widths.
- Search for `100vw`, `min-width`, large `translate`, and wide absolute images when debugging horizontal overflow.
- `@media (prefers-reduced-motion: reduce)` sets many EXM elements to visible and transition none. Confirm this does not leak into non-EXM components.

## Server Review

File:

- `server.mjs`

Behavior:

- Serves `/assets/*` from `public/assets`.
- Serves app routes by falling back to `index.html`.
- Basic content-type map.

Risk areas:

- `safePath` uses `normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "")`; review path traversal hardening if exposing this server outside local dev.
- No cache headers. Fine for local/dev, not production.
- No compression. Fine for local/dev.

## Asset/Data Review

Important generated files:

- `src/data/galleryManifest.js`
- `src/data/productImageManifest.js`

Risk areas:

- `src/data/galleryManifest.js` may be regenerated by `scripts/generate-gallery-manifest.mjs` during `npm run dev`, while `npm run generate:gallery` runs a different generator: `scripts/generate-product-gallery.mjs`. Confirm which output is expected to be committed.
- Some product ids have zero generated galleries (`gl`, `k`, `tf`, `s35`). Verify this is expected or fallback galleries exist in `src/data/products.js`.
- File names include spaces, Chinese characters, and `&`. The local server handles encoded paths if the browser encodes them, but manually constructed URLs should be checked.

## High-Priority Bug Checklist

1. Mobile Safari / iPhone:
   - No horizontal body scroll on all main routes.
   - Header menu opens/closes reliably.
   - Product Gallery horizontal scrollers still work.
   - EXM sequence and sound sticky-scroll do not trap scrolling.
   - Hero scroll gate does not interfere after leaving homepage.

2. EXM product detail:
   - Feature effects appear only on EXM.
   - Sequence reveal scrolls naturally and completes.
   - Cooling fade-in triggers once and text remains readable.
   - Sound-level path/nodes/copy are scroll-driven, reversible, and not automatic.
   - Gallery below EXM feature remains reachable.

3. Product configurator:
   - Model tabs change image.
   - Color options disable unavailable combinations.
   - Missing image fallback does not leave all colors unavailable.

4. Routing:
   - Same-route nav clicks scroll or anchor correctly.
   - Locale switch preserves product/family page intent.
   - Unknown product slugs fail gracefully.

5. Theme:
   - Light/dark mode does not break product detail cards, gallery, header dropdowns, mobile nav, or EXM dark feature block.

## Suggested Manual Test Matrix

Viewports:

- 390 x 844 mobile
- 430 x 932 mobile
- 768 x 1024 tablet
- 1024 x 768 tablet/desktop boundary
- 1440 x 900 desktop

Pages:

- `#/`
- `#/products`
- `#/products/exm-series`
- `#/products/gl-series`
- `#/support`
- `#/contact`

Actions:

- Toggle theme.
- Switch language EN/中文.
- Open/close mobile menu.
- Open mobile Products panel.
- Use desktop product hover dropdown.
- Scroll homepage hero to content.
- Scroll EXM through Specs -> Feature Effects -> Gallery.
- Scroll EXM sound down and then back up to confirm reversible animation.
- Use product model/color selector.
- Use gallery horizontal arrows and swipe/trackpad scroll.

## Commands For Reviewer

```bash
npm run dev
```

Then open:

```text
http://localhost:4173/#/
http://localhost:4173/#/products/exm-series
```

Syntax and generator checks:

```bash
for f in $(rg --files src scripts server.mjs | rg '\.(js|mjs)$'); do node --check "$f" || exit 1; done
npm run generate:gallery
```

Useful searches:

```bash
rg -n "preventDefault|touchmove|scrollTo|is-locked|position: fixed" src/components/ExmFeatureEffects.js src/styles.css
rg -n "100vw|min-width|overflow-x|translate\\(" src/styles.css
rg -n "TODO|FIXME|console\\.log|debugger" src
rg -n "DC ?12/24|AC ?110|240" src/data src/components
```

## Known Non-Blocking Context

- `heroScrollGate` is marked protected. Do not modify unless the bug specifically involves homepage hero scroll gating.
- User has repeatedly requested not to alter Header, hero, Gallery, Specs, or other product pages while fixing EXM feature bugs.
- EXM feature assets are currently untracked. If deploying, make sure the whole `public/assets/products/exm/features/` directory is included.

