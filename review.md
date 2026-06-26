# Travel Science Website Code Review Brief

Use this file as the handoff prompt/context for a full-site GPT code review.

## Review Goal

Review the current Kelvcoop / Travel Science static website code for launch readiness, regression risk, broken navigation, missing assets, inconsistent content architecture, theme bugs, and mobile/Safari issues.

Do not assume previous implementation intent is correct. Prioritize bugs and launch blockers over style opinions.

## Project Snapshot

- App type: vanilla JavaScript single-page site with hash routing.
- Entry point: `src/main.js`
- Router: `src/router.js`
- Styles: `src/styles.css`
- Static server: `server.mjs`
- Dev command: `npm run dev`
- Manifest generation: `scripts/generate-gallery-manifest.mjs`
- Public assets: `public/assets/`
- i18n framework exists, but not all product data/copy has been migrated.

## Important Current Git State

There are many modified and untracked files. Review should not assume a clean tree.

Notable status items:

- Modified: `src/components/Header.js`, `src/components/Footer.js`, `src/components/ProductDetailTemplate.js`, `src/pages/*`, `src/data/products.js`, `src/data/galleryManifest.js`, `src/styles.css`, `src/router.js`, `src/utils/navigation.js`
- Untracked: `src/i18n/`, `src/components/ProductMaterials.js`, `src/data/materials.js`, `content-map.md`
- Untracked asset folders: `public/assets/products/D/`, `public/assets/products/S18/`, `public/assets/products/b/gallery/`, `public/assets/products/b/models/`, `public/assets/products/ex/`, `public/assets/travel-science-material-library/`
- Deleted asset: `public/assets/products/b/b25.png`

Potential review concern: deleted `b25.png` may still be referenced somewhere. Confirm before launch.

## Public Routes To Verify

Hash routes:

- `#/`
- `#/products`
- `#/accessories`
- `#/community`
- `#/custom-projects`
- `#/support`
- `#/contact`

Product detail routes expected to work:

- `#/products/gl-series`
- `#/products/m-series`
- `#/products/ex-series`
- `#/products/exm-series`
- `#/products/b-series`
- `#/products/s-series`
- `#/products/tf-series`
- `#/products/k-series`
- `#/products/d-series`

Family/category routes expected to work:

- `#/products/compact-cooling`
- `#/products/large-capacity`
- `#/products/dual-zone-storage`
- `#/products/wheeled-mobility`

Chinese placeholder routes should normalize without breaking English:

- `#/zh`
- `#/zh/products`
- `#/zh/support`
- `#/zh/contact`
- `#/zh/products/gl-series`

## Core Architecture

### Routing

File: `src/router.js`

- `routeWithLocale()` reads `window.location.hash`.
- `routeLocale()` derives locale with `localeFromPath`.
- `route()` normalizes localized paths to English route shape.
- `go(path)` updates `window.location.hash` and treats same localized route as no-op.
- Product routes are matched with `current.startsWith("/products/")`.
- If slug matches `productFamilyById`, route renders `ProductFamilyPage`.
- Otherwise route renders `ProductDetailPage`.

Review risks:

- Same-route behavior in `go()` scrolls top even for same anchor/localized path. Check anchor navigation to `#/support#downloads`, `#/support#warranty`, `#/support#spare-parts`.
- `routeSeo()` returns the global SEO object for most non-product pages. Check if page-specific SEO is required before launch.

### Header

File: `src/components/Header.js`

Includes:

- Products hover dropdown on desktop.
- Products nested panel on mobile.
- Support hover dropdown on desktop.
- Support subitems in mobile nav.
- EN / 中文 language switch.
- Theme toggle.

Review risks:

- Mobile product menu currently lists only `EX`, `GL`, `AX`, `TF`, `EXM`, `M`. It omits `B`, `S`, `K`, `D`. Verify whether this is intentional.
- Desktop Products dropdown duplicates some products across category groups. Verify UX and click targets.
- Header references product ids and family ids manually. Any future product id rename can break dropdown links.
- Check keyboard focus behavior for hover dropdowns and mobile menu close behavior.

### Footer

File: `src/components/Footer.js`

Current columns:

- Products
- Projects
- Support
- Follow
- Company

Current Follow links are built from `src/data/socialLinks.js` and filtered to configured URLs only.

Review risks:

- Footer Follow intentionally excludes X even though `socialLinks.js` has X. Confirm product/content requirement.
- LinkedIn and TikTok do not appear because no real URLs are configured.
- Privacy Policy and Terms of Use route to `/contact`; this avoids dead links but is not a legal-page substitute.

### i18n

Files:

- `src/i18n/index.js`
- `src/i18n/en.js`
- `src/i18n/zh.js`

Current state:

- Header, Footer, Home, Support, Contact, Accessories, Community, Custom Projects, and common CTAs have keys.
- Product data and product specs remain mostly in `src/data/products.js`.
- Chinese content is partially placeholder/reused English.

Review risks:

- Some components still contain hardcoded English: Product detail template labels, breadcrumb labels, ProductFamilyPage copy, download/request email body, gallery headings, etc.
- Check whether current Chinese route should show translated page chrome only or whether partial English is acceptable.

## Product Data And Product Detail

Main file: `src/data/products.js`

Public product ids observed:

- `gl`
- `ax`
- `exm`
- `b`
- `k`
- `tf`
- `m`
- `ex`
- `s35`
- `s`
- `d`

Route slug mapping appears near the bottom of `src/data/products.js`:

- `gl` -> `gl-series`
- `m` -> `m-series`
- `ex` -> `ex-series`
- `exm` -> `exm-series`
- `b` -> `b-series`
- `s` -> `s-series`
- `tf` -> `tf-series`
- `k` -> `k-series`
- `d` -> `d-series`

Review risks:

- `s35` exists as product data/model-like entry. Confirm it is not exposed publicly as its own series if the rule is that S Series is public and S35 is model-level only.
- Confirm KE Series does not appear publicly. Search for `KE`, `ke-series`, and `ke` carefully; do not confuse valid `K Series`.
- Voltage value was requested to be `DC12/24V AC110～240V`. Search for remaining `DC 12/24V` and verify only Voltage fields were changed, not unrelated Power route copy.
- Product detail template is not fully i18n-aware.

### Product Detail Template

File: `src/components/ProductDetailTemplate.js`

Current sections:

- Hero / intro
- Optional statement
- Model specifications
- Product gallery
- Product Materials
- Usage scenarios
- Certifications
- Downloads
- Related products
- Product Inquiry CTA

Recently removed:

- Core Features / Engineering Details module should no longer render anywhere.

Review risks:

- Breadcrumb labels are hardcoded English.
- Related section is hardcoded to `Discover More` and `More Travel Science Systems`.
- Inquiry CTA is hardcoded in template rather than using `t("productDetail.contact.*")`, even though keys exist in `src/i18n/en.js`.
- Downloads fallback mailto uses hardcoded English body and `info@kelvcoop.com`.
- Document links with real files use `download`; external or future hosted docs may need different behavior.

### Materials Module

Files:

- `src/components/ProductMaterials.js`
- `src/data/materials.js`
- `public/assets/travel-science-material-library/`

Known requirement:

- Appearance Parts and Internal Parts should default collapsed on desktop, tablet, and mobile.
- No viewport-based auto-open logic should remain.
- User click alone should control expanded state.

Review risks:

- Confirm no resize/model/color change handler reopens material accordions.
- Verify keyboard accessibility of `<details>`/`summary` rows.
- Verify mobile accordion content has no horizontal overflow.

## Gallery And Asset Manifests

Generator:

- `scripts/generate-gallery-manifest.mjs`

Generated files:

- `src/data/galleryManifest.js`
- `src/data/productImageManifest.js`

Current folder mapping includes:

- `d: "D"`
- `s: "S18"`

D9 gallery check:

- Folder: `public/assets/products/D/gallery/`
- Current files include names with spaces and Chinese characters:
  - `D9-in car.png`
  - `D9.1 拷贝.png`
  - `D9.2 拷贝.png`
- `src/data/galleryManifest.js` currently includes D gallery entries with those paths.

Review risks:

- Filenames with spaces and non-ASCII characters are currently emitted directly into URLs. Browser support is usually okay, but verify server URL decoding and deployment/CDN behavior.
- `.DS_Store` files exist in asset folders and should be excluded from deployment if possible.
- `productImageManifest.js` may be empty for products without `/models` assets. Verify hero image fallback works for every product.
- Check all image paths referenced in `src/data/products.js`, `src/i18n/en.js`, `src/data/heroSlides.js`, and service cards.

## Social Links

Data file: `src/data/socialLinks.js`

Real configured URLs:

- Facebook
- Instagram
- X

Missing real URLs:

- LinkedIn
- TikTok

Current Contact page behavior:

- File: `src/pages/ContactPage.js`
- Renders visual cards for LinkedIn, Facebook, Instagram, TikTok, X.
- Facebook, Instagram, X are links.
- LinkedIn and TikTok are disabled visual cards with no `href`.

Review risks:

- Confirm disabled social cards are acceptable; earlier requirements often said not to show empty/fake links.
- Footer Follow filters missing social URLs out, so Contact and Footer are intentionally inconsistent.
- Social icons are local inline SVG, not `react-icons`.

## Page-Specific Review Notes

### Home

Files:

- `src/pages/HomePage.js`
- `src/data/heroSlides.js`
- `src/components/HeroCarousel.js`
- `src/utils/heroScrollGate.js`
- `src/i18n/en.js`

Known protected behavior:

- Do not break normal hero scroll gate behavior.
- Screenshot mode CSS exists for full-page captures.

Review risks:

- Home hero uses scroll-gated/sticky behavior. Check iPhone Safari scroll lock, fullPage screenshot mode, and reduced motion.
- `HERO_SLIDE_INTERVAL` appears set to `null`; verify intended non-autoplay behavior.
- Check service card images fill their containers without gray inner padding.

### Products Page

Files:

- `src/pages/ProductsPage.js`
- `src/components/ProductCard.js`
- `src/data/products.js`

Expected display order:

1. GL Series
2. M Series
3. EX Series
4. EXM Series
5. B Series
6. S Series
7. TF Series
8. K Series
9. D Series

Review risks:

- Ensure Products page does not expose AX or S35 as public collection cards if not intended.
- Ensure KE Series is absent.
- Confirm capacity/model-count text matches product data.

### Accessories

Files:

- `src/pages/AccessoriesPage.js`
- `public/assets/services/gallery/`

Current top section should be a horizontal gallery-style scroller with no right-side text block.

Review risks:

- Some asset filenames are Chinese (`烟线.png`, `电池.jpg`, `适配器.png`). Confirm deployment compatibility.
- Verify gallery cards/swipe behavior on mobile.

### Community

Files:

- `src/pages/CommunityPage.js`
- `src/data/socialCrew.js`
- `src/styles.css`

Current structure:

- Hero image full background with subtle overlay.
- CTA text and paper plane.
- Platform cards for TikTok, Instagram, LinkedIn, Facebook & X.

Review risks:

- `socialCrew.js` has empty link arrays for TikTok and LinkedIn. Confirm buttons are hidden/disabled correctly and no `href="#"` remains.
- Verify uploaded official icons render without circular wrappers.
- Confirm mobile horizontal card layout has no overflow.

### Custom Projects

Files:

- `src/pages/CustomProjectsPage.js`
- `src/i18n/en.js`

Current content positions the page as product development/private-mould capability.

Review risks:

- The page intentionally uses British spelling: `customisation`, `private-mould`.
- Verify CTA route attributes honor `/zh` prefixes.

### Support

Files:

- `src/pages/SupportPage.js`
- `src/i18n/en.js`

Current sections:

- Hero
- Service Philosophy
- Spare Parts Program
- Support Q&A
- Downloads accordion
- Support Request CTA

Required anchors:

- `id="warranty"`
- `id="spare-parts"`
- `id="downloads"`

Review risks:

- Verify Support dropdown anchors scroll correctly after route render.
- Downloads accordion uses disabled buttons if URLs are missing. Confirm accessibility and no fake `href`.
- Downloads list should use real series list: AX, B, GL / M, EX / EXM, D, K, S, TF.

### Contact

Files:

- `src/pages/ContactPage.js`
- `src/data/socialLinks.js`
- `src/styles.css`

Current structure:

- Main contact hero with email.
- Follow Travel Science social section.

Review risks:

- The Contact social area shows disabled LinkedIn/TikTok visual cards because no real URL exists.
- If launch requires clickable LinkedIn/TikTok, add real URLs to `src/data/socialLinks.js`.

## Theme And CSS Review Areas

File: `src/styles.css`

Important areas:

- Header around `/* Header */`
- Product detail theme variables near `.product-page`
- Product materials styles
- Community platform cards
- Contact social cards
- Footer around `/* Footer */`
- Mobile media queries near bottom

Review risks:

- `color-mix()` is used in CSS. Check target browser support, especially older Safari.
- Product detail light theme was recently adjusted. Verify all product pages in light and dark modes.
- Check mobile overflow caused by horizontal galleries, product materials, contact social cards, footer accordions, and product specs.
- Check reveal animation classes with screenshot mode and reduced motion.

## Accessibility Review Checklist

Check:

- Header dropdowns are keyboard reachable.
- Mobile menu buttons have correct `aria-expanded`.
- Theme toggle has correct `aria-pressed`.
- Social disabled cards are not focusable and do not masquerade as links.
- Product model/color buttons expose selected state with `aria-pressed`.
- Material accordions use semantic `details/summary` or equivalent keyboard-friendly controls.
- Download accordion rows are buttons or keyboard-operable controls.
- Images have useful `alt`; decorative images use empty alt where appropriate.
- Mailto CTAs have clear accessible names.

## Launch Readiness Checklist

Critical before launch:

- Verify all public routes render and back/forward works.
- Verify all product detail routes render and Product page cards navigate correctly.
- Verify no public KE Series references remain.
- Verify K Series remains public.
- Verify no missing critical assets, especially deleted `public/assets/products/b/b25.png`.
- Confirm social link policy: either add real LinkedIn/TikTok URLs or accept disabled Contact cards and hidden Footer items.
- Verify footer legal links routing to Contact is acceptable.
- Verify product voltage values are consistently displayed as `DC12/24V AC110～240V` where required.

Should fix before launch:

- Add page-specific SEO for main pages beyond products.
- Reduce hardcoded English in product detail template if Chinese route is meant to be user-facing.
- Remove `.DS_Store` from asset folders and prevent future commits.
- Verify Safari/iPhone behavior for scroll gate and horizontal scrollers.
- Confirm all image filenames with spaces/non-ASCII survive production hosting.

Nice to fix later:

- Consolidate inline social SVGs into a shared icon helper.
- Move more product detail labels into i18n.
- Add a real legal page for Privacy Policy and Terms of Use.
- Add automated smoke test for public routes and product routes.

## Suggested GPT Review Prompt

Please review this Travel Science website codebase for launch readiness. Start with findings, ordered by severity. Focus on bugs, broken navigation, missing assets, accessibility issues, mobile/Safari risks, theme inconsistencies, SEO gaps, and data/content inconsistencies. Do not recommend broad rewrites unless necessary. Pay special attention to:

- hash routing and `/zh` route normalization
- Header Products and Support dropdowns
- Product detail route slug mapping
- KE Series absence and K Series presence
- S Series vs S18/S35 naming logic
- gallery manifest consistency with `public/assets`
- social links and disabled social cards
- Product Detail light/dark theme consistency
- Hero scroll gate and screenshot mode
- mobile overflow and accordion behavior
- current dirty git state and untracked assets

When reporting issues, include file paths and the smallest recommended fix.
