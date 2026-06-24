# Kelvcoop / Travel Science Website Code Review Package

Generated for GPT code review from the current workspace.

## Review Request

Please review this vanilla JavaScript/CSS website for correctness, maintainability, accessibility, responsive behavior, Safari/iPhone scrolling issues, SEO metadata, broken links/assets, product-data consistency, and obvious runtime bugs. Lead with concrete findings ordered by severity, and reference file paths and functions/classes/selectors where relevant.

Pay special attention to:
- Homepage protected hero system and `src/utils/heroScrollGate.js`.
- Product detail template, model/color image manifests, gallery manifests, and horizontal scrolling behavior.
- iPhone Safari/mobile overflow and scroll context behavior in `src/styles.css`.
- Header/dropdown/mobile navigation behavior.
- Missing assets, 404-prone image paths, and generated manifest consistency.

## Project Notes

- Runtime: static native ES modules served by `server.mjs`.
- Dev command: `npm run dev`.
- Entry point: `src/main.js`.
- Main stylesheet: `src/styles.css`.
- Product data: `src/data/products.js`.
- Generated manifests: `src/data/galleryManifest.js`, `src/data/productImageManifest.js`.
- Large binary assets are listed but not embedded.

## Included Source Files

```text
.gitignore
.vscode/settings.json
assets/brand/k-icon.svg
chatgpt-review-prompt.md
docs/hero-protection.md
gl-series.md
index.html
package-lock.json
package.json
public/assets/brand/k-icon.svg
public/assets/icons/arrowleft.svg
public/assets/icons/arrowright.svg
README.md
scripts/generate-gallery-manifest.mjs
scripts/generate-product-gallery.mjs
scripts/trim-png-by-group-union-bbox.py
server.mjs
src/components/ContactSection.js
src/components/FeaturedProducts.js
src/components/Footer.js
src/components/Header.js
src/components/HeroCarousel.js
src/components/ProductCard.js
src/components/ProductDetailTemplate.js
src/components/ProductFamily.js
src/data/galleryManifest.js
src/data/heroSlides.js
src/data/homepage.js
src/data/productGallery.js
src/data/productImageManifest.js
src/data/products.js
src/data/seo.js
src/data/socialLinks.js
src/main.js
src/pages/CapabilitiesPage.js
src/pages/ContactPage.js
src/pages/CustomProjectsPage.js
src/pages/HomePage.js
src/pages/OemOdmPage.js
src/pages/ProductDetailPage.js
src/pages/ProductsPage.js
src/router.js
src/styles.css
src/utils/dom.js
src/utils/heroScrollGate.js
src/utils/navigation.js
```

## Binary / Asset Inventory

Total non-embedded asset/binary files: 401
Public asset files: 251

```text
assets/360/gl55/frame-001.jpg
assets/360/gl55/frame-002.jpg
assets/360/gl55/frame-003.jpg
assets/360/gl55/frame-004.jpg
assets/360/gl55/frame-005.jpg
assets/360/gl55/frame-006.jpg
assets/360/gl55/frame-007.jpg
assets/360/gl55/frame-008.jpg
assets/360/gl55/frame-009.jpg
assets/360/gl55/frame-010.jpg
assets/360/gl55/frame-011.jpg
assets/360/gl55/frame-012.jpg
assets/360/gl55/frame-013.jpg
assets/360/gl55/frame-014.jpg
assets/360/gl55/frame-015.jpg
assets/360/gl55/frame-016.jpg
assets/360/gl55/frame-017.jpg
assets/360/gl55/frame-018.jpg
assets/360/gl55/frame-019.jpg
assets/360/gl55/frame-020.jpg
assets/360/gl55/frame-021.jpg
assets/360/gl55/frame-022.jpg
assets/360/gl55/frame-023.jpg
assets/360/gl55/frame-024.jpg
assets/360/gl55/frame-025.jpg
assets/360/gl55/frame-026.jpg
assets/360/gl55/frame-027.jpg
assets/360/gl55/frame-028.jpg
assets/360/gl55/frame-029.jpg
assets/360/gl55/frame-030.jpg
assets/360/gl55/frame-031.jpg
assets/360/gl55/frame-032.jpg
assets/360/gl55/frame-033.jpg
assets/360/gl55/frame-034.jpg
assets/360/gl55/frame-035.jpg
assets/360/gl55/frame-036.jpg
assets/360/gl55/frame-037.jpg
assets/360/gl55/frame-038.jpg
assets/360/gl55/frame-039.jpg
assets/360/gl55/frame-040.jpg
assets/360/gl55/frame-041.jpg
assets/360/gl55/frame-042.jpg
assets/360/gl55/frame-043.jpg
assets/360/gl55/frame-044.jpg
assets/360/gl55/frame-045.jpg
assets/360/gl55/frame-046.jpg
assets/360/gl55/frame-047.jpg
assets/360/gl55/frame-048.jpg
assets/360/gl55/frame-049.jpg
assets/360/gl55/frame-050.jpg
assets/360/m55/frame-001.jpg
assets/360/m55/frame-002.jpg
assets/360/m55/frame-003.jpg
assets/360/m55/frame-004.jpg
assets/360/m55/frame-005.jpg
assets/360/m55/frame-006.jpg
assets/360/m55/frame-007.jpg
assets/360/m55/frame-008.jpg
assets/360/m55/frame-009.jpg
assets/360/m55/frame-010.jpg
assets/360/m55/frame-011.jpg
assets/360/m55/frame-012.jpg
assets/360/m55/frame-013.jpg
assets/360/m55/frame-014.jpg
assets/360/m55/frame-015.jpg
assets/360/m55/frame-016.jpg
assets/360/m55/frame-017.jpg
assets/360/m55/frame-018.jpg
assets/360/m55/frame-019.jpg
assets/360/m55/frame-020.jpg
assets/360/m55/frame-021.jpg
assets/360/m55/frame-022.jpg
assets/360/m55/frame-023.jpg
assets/360/m55/frame-024.jpg
assets/360/m55/frame-025.jpg
assets/360/m55/frame-026.jpg
assets/360/m55/frame-027.jpg
assets/360/m55/frame-028.jpg
assets/360/m55/frame-029.jpg
assets/360/m55/frame-030.jpg
assets/360/m55/frame-031.jpg
assets/360/m55/frame-032.jpg
assets/360/m55/frame-033.jpg
assets/360/m55/frame-034.jpg
assets/360/m55/frame-035.jpg
assets/360/m55/frame-036.jpg
assets/360/m55/frame-037.jpg
assets/360/m55/frame-038.jpg
assets/hero/b20-hero.png
assets/hero/ex-hero.png
assets/hero/s35-hero.png
assets/input-png/gl35-black.png
assets/input-png/gl35-sage.png
assets/input-png/gl45-black.png
assets/input-png/gl45-sage.png
assets/input-png/gl55-black.png
assets/input-png/gl55-sage.png
assets/output-trimmed/gl35-black.png
assets/output-trimmed/gl35-sage.png
assets/output-trimmed/gl45-black.png
assets/output-trimmed/gl45-sage.png
assets/output-trimmed/gl55-black.png
assets/output-trimmed/gl55-sage.png
assets/products/ax.png
assets/products/b.jpg
assets/products/b20.png
assets/products/d.jpg
assets/products/ex.png
assets/products/exm.jpg
assets/products/exm.png
assets/products/gl/4 models.png
assets/products/gl/control-panel.png
assets/products/gl/front.png
assets/products/gl/handle-detail.png
assets/products/gl/open-lid front.png
assets/products/gl/open-lid.png
assets/products/gl.png
assets/products/k.jpg
assets/products/ke.jpg
assets/products/m.png
assets/products/p12.png
assets/products/s18-orange.png
assets/products/S35.png
assets/products/tf.jpg
outputs/ax.jpg
outputs/b.jpg
outputs/d.jpg
outputs/ex.jpg
outputs/exm.jpg
outputs/gl.jpg
outputs/k.jpg
outputs/ke.jpg
outputs/kelvcoop-interactive-site.zip
outputs/m.jpg
outputs/s.jpg
outputs/tf.jpg
public/assets/360/gl55/frame-001.jpg
public/assets/360/gl55/frame-002.jpg
public/assets/360/gl55/frame-003.jpg
public/assets/360/gl55/frame-004.jpg
public/assets/360/gl55/frame-005.jpg
public/assets/360/gl55/frame-006.jpg
public/assets/360/gl55/frame-007.jpg
public/assets/360/gl55/frame-008.jpg
public/assets/360/gl55/frame-009.jpg
public/assets/360/gl55/frame-010.jpg
public/assets/360/gl55/frame-011.jpg
public/assets/360/gl55/frame-012.jpg
public/assets/360/gl55/frame-013.jpg
public/assets/360/gl55/frame-014.jpg
public/assets/360/gl55/frame-015.jpg
public/assets/360/gl55/frame-016.jpg
public/assets/360/gl55/frame-017.jpg
public/assets/360/gl55/frame-018.jpg
public/assets/360/gl55/frame-019.jpg
public/assets/360/gl55/frame-020.jpg
public/assets/360/gl55/frame-021.jpg
public/assets/360/gl55/frame-022.jpg
public/assets/360/gl55/frame-023.jpg
public/assets/360/gl55/frame-024.jpg
public/assets/360/gl55/frame-025.jpg
public/assets/360/gl55/frame-026.jpg
public/assets/360/gl55/frame-027.jpg
public/assets/360/gl55/frame-028.jpg
public/assets/360/gl55/frame-029.jpg
public/assets/360/gl55/frame-030.jpg
public/assets/360/gl55/frame-031.jpg
public/assets/360/gl55/frame-032.jpg
public/assets/360/gl55/frame-033.jpg
public/assets/360/gl55/frame-034.jpg
public/assets/360/gl55/frame-035.jpg
public/assets/360/gl55/frame-036.jpg
public/assets/360/gl55/frame-037.jpg
public/assets/360/gl55/frame-038.jpg
public/assets/360/gl55/frame-039.jpg
public/assets/360/gl55/frame-040.jpg
public/assets/360/gl55/frame-041.jpg
public/assets/360/gl55/frame-042.jpg
public/assets/360/gl55/frame-043.jpg
public/assets/360/gl55/frame-044.jpg
public/assets/360/gl55/frame-045.jpg
public/assets/360/gl55/frame-046.jpg
public/assets/360/gl55/frame-047.jpg
public/assets/360/gl55/frame-048.jpg
public/assets/360/gl55/frame-049.jpg
public/assets/360/gl55/frame-050.jpg
public/assets/360/m55/frame-001.jpg
public/assets/360/m55/frame-002.jpg
public/assets/360/m55/frame-003.jpg
public/assets/360/m55/frame-004.jpg
public/assets/360/m55/frame-005.jpg
public/assets/360/m55/frame-006.jpg
public/assets/360/m55/frame-007.jpg
public/assets/360/m55/frame-008.jpg
public/assets/360/m55/frame-009.jpg
public/assets/360/m55/frame-010.jpg
public/assets/360/m55/frame-011.jpg
public/assets/360/m55/frame-012.jpg
public/assets/360/m55/frame-013.jpg
public/assets/360/m55/frame-014.jpg
public/assets/360/m55/frame-015.jpg
public/assets/360/m55/frame-016.jpg
public/assets/360/m55/frame-017.jpg
public/assets/360/m55/frame-018.jpg
public/assets/360/m55/frame-019.jpg
public/assets/360/m55/frame-020.jpg
public/assets/360/m55/frame-021.jpg
public/assets/360/m55/frame-022.jpg
public/assets/360/m55/frame-023.jpg
public/assets/360/m55/frame-024.jpg
public/assets/360/m55/frame-025.jpg
public/assets/360/m55/frame-026.jpg
public/assets/360/m55/frame-027.jpg
public/assets/360/m55/frame-028.jpg
public/assets/360/m55/frame-029.jpg
public/assets/360/m55/frame-030.jpg
public/assets/360/m55/frame-031.jpg
public/assets/360/m55/frame-032.jpg
public/assets/360/m55/frame-033.jpg
public/assets/360/m55/frame-034.jpg
public/assets/360/m55/frame-035.jpg
public/assets/360/m55/frame-036.jpg
public/assets/360/m55/frame-037.jpg
public/assets/360/m55/frame-038.jpg
public/assets/downloads/ex-series-manual.pdf
public/assets/downloads/exm-series-manual.pdf
public/assets/downloads/travel-science-brochure.pdf
public/assets/hero/b20-hero.png
public/assets/hero/ex-hero.png
public/assets/hero/s35-hero.png
public/assets/products/ax/gallery/1.png
public/assets/products/ax/gallery/2.png
public/assets/products/ax/gallery/4.png
public/assets/products/ax/gallery/7.png
public/assets/products/ax/gallery/10.png
public/assets/products/ax/gallery/ax.png
public/assets/products/ax/gallery/ax30-front.png
public/assets/products/ax/gallery/ax30-open.png
public/assets/products/ax/gallery/ax30-side.png
public/assets/products/ax/gallery/ax30-side2.png
public/assets/products/ax/gallery/ax40-front.png
public/assets/products/ax/gallery/ax50-black.png
public/assets/products/ax/gallery/ax50-side.png
public/assets/products/ax/models/ax30-black.png
public/assets/products/ax/models/ax30-champagne.png
public/assets/products/ax/models/ax30-light-gray.png
public/assets/products/ax/models/ax40-black.png
public/assets/products/ax/models/ax40-champagne.png
public/assets/products/ax/models/ax40-light-gray.png
public/assets/products/ax/models/ax50-black.png
public/assets/products/ax/models/ax50-champagne.png
public/assets/products/ax/models/ax50-light-gray.png
public/assets/products/ax 10.02.27.jpg
public/assets/products/ax.png
public/assets/products/b/b25.png
public/assets/products/b/gallery/1.png
public/assets/products/b/gallery/2.png
public/assets/products/b/gallery/4.png
public/assets/products/b/gallery/b20.png
public/assets/products/b/gallery/主图1.jpg
public/assets/products/b/gallery/主图2.jpg
public/assets/products/b.jpg
public/assets/products/b20.png
public/assets/products/d.jpg
public/assets/products/ex/ex.png
public/assets/products/ex/gallery/2.png
public/assets/products/ex/gallery/623 拷贝.png
public/assets/products/ex/gallery/E30.png
public/assets/products/ex/gallery/E50.png
public/assets/products/ex/gallery/EX50.png
public/assets/products/ex/gallery/细节图 拷贝.png
public/assets/products/ex/gallery/细节图 拷贝2.png
public/assets/products/ex/gallery/细节图 拷贝3.png
public/assets/products/ex 10.05.28.jpg
public/assets/products/ex.png
public/assets/products/exm/6.png
public/assets/products/exm/exm.png
public/assets/products/exm/gallery/1.png
public/assets/products/exm/gallery/6.png
public/assets/products/exm/gallery/11.png
public/assets/products/exm/gallery/623 拷贝.png
public/assets/products/exm/gallery/xj.2.png
public/assets/products/exm/gallery/开瓶器更新2.png
public/assets/products/exm/gallery/开瓶器更新8.png
public/assets/products/exm 10.05.11.jpg
public/assets/products/exm 10.35.08.jpg
public/assets/products/exm.png
public/assets/products/gl/control-panel.png
public/assets/products/gl/front.png
public/assets/products/gl/gallery/gl-control-panel-close.jpg
public/assets/products/gl/gallery/gl-detail-control-panel.png
public/assets/products/gl/gallery/gl-lifestyle-camp.jpg
public/assets/products/gl/gallery/gl-lifestyle-storage.jpg
public/assets/products/gl/gallery/gl-lifestyle-vehicle.jpg
public/assets/products/gl/gallery/gl-lineup-black.jpg
public/assets/products/gl/gallery/gl-open-angle.jpg
public/assets/products/gl/gallery/gl-open-top.jpg
public/assets/products/gl/gallery/gl75-main-render.png
public/assets/products/gl/gl-black-open.png
public/assets/products/gl/gl-sage-open.png
public/assets/products/gl/handle-detail.png
public/assets/products/gl/models/gl35-black 2.png
public/assets/products/gl/models/gl35-black.jpg
public/assets/products/gl/models/gl35-black.png
public/assets/products/gl/models/gl35-sage.png
public/assets/products/gl/models/gl45-black.jpg
public/assets/products/gl/models/gl45-black.png
public/assets/products/gl/models/gl45-sage.png
public/assets/products/gl/models/gl55-black 2.png
public/assets/products/gl/models/gl55-black.jpg
public/assets/products/gl/models/gl55-black.png
public/assets/products/gl/models/gl55-sage.png
public/assets/products/gl/models/gl75-black 2.png
public/assets/products/gl/models/gl75-black.png
public/assets/products/gl/models/gl75-sage.png
public/assets/products/gl/models/untitled.1351.png
public/assets/products/gl/models/暂时测试隐藏/gl45-black.png
public/assets/products/gl/models/暂时测试隐藏/gl45-sage.png
public/assets/products/gl/open-lid.png
public/assets/products/gl/render/gl35-black.png
public/assets/products/gl/render/gl35-sage.png
public/assets/products/gl/render/gl45-black.png
public/assets/products/gl/render/gl45-sage.png
public/assets/products/gl/render/gl55-black.png
public/assets/products/gl/render/gl55-sage.png
public/assets/products/gl 10.06.11.jpg
public/assets/products/gl.png
public/assets/products/k.jpg
public/assets/products/ke 10.02.53.jpg
public/assets/products/ke.jpg
public/assets/products/m/gallery/m45-black.png
public/assets/products/m/gallery/m45-front.png
public/assets/products/m/gallery/m45-open.png
public/assets/products/m/gallery/m45-side.png
public/assets/products/m/gallery/M45.14 拷贝.png
public/assets/products/m/gallery/M45土色.2 拷贝.png
public/assets/products/m/gallery/M45土色.3.png
public/assets/products/m/gallery/M系列双温效果图.png
public/assets/products/m/gallery/M页面图.png
public/assets/products/m/gallery/untitled.1488.png
public/assets/products/m/gallery/双门.png
public/assets/products/m/gallery/屏幕.png
public/assets/products/m/gallery/把手.png
public/assets/products/m/gallery/拉杆（特写拉杆.png
public/assets/products/m/gallery/电池.png
public/assets/products/m/gallery/车家两用太阳能.png
public/assets/products/m/gallery/轮子（特写轮子.png
public/assets/products/m/models/m35-black.png
public/assets/products/m/models/m35-sage.png
public/assets/products/m/models/m45-black.png
public/assets/products/m/models/m45-sage.png
public/assets/products/m/models/m55-black.png
public/assets/products/m/models/m55-sage.png
public/assets/products/m/拉杆（特写拉杆.png
public/assets/products/m 10.05.47.jpg
public/assets/products/m.png
public/assets/products/p12.png
public/assets/products/productcollectionspage-images/ax-card.webp
public/assets/products/productcollectionspage-images/b-card.webp
public/assets/products/productcollectionspage-images/d-card.webp
public/assets/products/productcollectionspage-images/ex-card.webp
public/assets/products/productcollectionspage-images/exm-card.webp
public/assets/products/productcollectionspage-images/gl-card.webp
public/assets/products/productcollectionspage-images/k-card.webp
public/assets/products/productcollectionspage-images/m-card.webp
public/assets/products/productcollectionspage-images/s-card.webp
public/assets/products/productcollectionspage-images/tf-card.webp
public/assets/products/s 10.03.28.jpg
public/assets/products/s-upgraded-cutout.png
public/assets/products/S18/gallery/1.png
public/assets/products/S18/gallery/2.png
public/assets/products/S18/gallery/3.png
public/assets/products/S18/gallery/4.png
public/assets/products/S18/gallery/5.png
public/assets/products/S18/gallery/6.png
public/assets/products/S18/gallery/7.png
public/assets/products/S18/gallery/0908banjin 拷贝.png
public/assets/products/S18/gallery/0915 拷贝.png
public/assets/products/S18/gallery/S18.20.png
public/assets/products/s18-orange.png
public/assets/products/S35.png
public/assets/products/stx/gallery/2.png
public/assets/products/stx/gallery/3.png
public/assets/products/stx/gallery/4.png
public/assets/products/stx/gallery/5.png
public/assets/products/stx/gallery/p12.png
public/assets/products/tf.jpg
work/gl-assets-preview.png
work/gl-detail-contact.png
work/gl-flyer-1.png
work/gl-flyer-2.png
work/gl-flyer-hi-1.png
work/gl-flyer-hi-2.png
work/pdf-preview/foldout-1.png
work/pdf-preview/foldout-2.png
work/pdf-preview/foldout-3.png
work/pdf-preview/foldout-4.png
work/pdf-preview/travel_science-01.png
work/pdf-preview/travel_science-02.png
work/pdf-preview/travel_science-03.png
work/pdf-preview/travel_science-04.png
```

## Source Contents

### .gitignore

Size: 161 bytes

```text
.DS_Store
**/.DS_Store

node_modules/
.env
.env.*

dist/
build/
.cache/

assets/
outputs/
work/
review.txt

npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.zip

```

### .vscode/settings.json

Size: 40 bytes

```json
{
    "liveServer.settings.port": 5501
}

```

### assets/brand/k-icon.svg

Size: 769 bytes

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.18 122.55">
  <defs>
    <style>
      .cls-1 {
        fill: #231f20;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <path class="cls-1" d="M63.67,0L0,67.42V18.56C0,8.31,8.31,0,18.57,0h45.11Z"/>
    <path class="cls-1" d="M138.18,0l-9.72,10.24-49.83,52.53-17.07,18-7.08,7.47-1.02,1.07-16.24,17.12-.09.09-1.93,2.03c-8.91,8.87-21.37,14.13-35.06,13.95-.05,0-.1,0-.15,0v-30.93l2.26-2.26,26.65-26.64L90.99.59c2.46-.39,4.99-.59,7.56-.59h39.64Z"/>
    <path class="cls-1" d="M138.18,122.32v.24h-42.15c-4.63,0-9.07-1.84-12.34-5.11l-28.13-28.13h42.39c4.63,0,9.07,1.84,12.34,5.11l1.47,1.47,26.43,26.43Z"/>
  </g>
</svg>

```

### chatgpt-review-prompt.md

Size: 2050 bytes

```md
Please review this frontend prototype and give design/code feedback.

Project context:
- Static vanilla JS/CSS site for Travel Science by Kelvcoop.
- Local preview: `http://localhost:4174/?fresh=1728#/products`
- Main files:
  - `index.html`
  - `src/main.js`
  - `src/styles.css`
  - `src/data.js`
  - `server.mjs`
- Assets are under `public/assets/`.

What I want reviewed:
- Light theme quality and visual consistency.
- Product card image treatment. The current intent is: image should fill the card image container, product should remain centered, and the image should not look like a detached white rectangle.
- Header/nav polish on mobile and desktop.
- Logo integration with the navbar. In light theme the logo should read dark; in dark theme it should read light.
- Button hover/press effects should apply to real site buttons, not a separate demo button.
- Responsive behavior, especially product grid and mobile header.

Recent relevant CSS areas:
- Theme variables: `src/styles.css` lines 1-58.
- Shared button hover/press motion: around lines 77-117.
- Header/logo/nav: around lines 130-260.
- Hero: around lines 352-459.
- Product cards and images: around lines 632-683.
- Mobile header/menu: around lines 1125-1265.

Important current product card CSS:

`\`\`css
.product-card {
  overflow: hidden;
}

.card-image {
  display: grid;
  place-items: center;
  min-height: clamp(250px, 24vw, 360px);
  aspect-ratio: 1.32;
  padding: 0;
  background:
    radial-gradient(circle at 50% 72%, var(--product-wash), transparent 15rem),
    linear-gradient(145deg, rgba(183, 215, 232, 0.14), rgba(255, 255, 255, 0.22));
}

.card-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform-origin: center;
  transition: transform 360ms ease;
}

.product-card:hover img {
  transform: scale(1.025) rotate(-0.5deg);
}
`\`\`

Please focus on practical improvements rather than a full rewrite. If you suggest changes, give concrete CSS/JS snippets and explain what tradeoff each change makes.

```

### docs/hero-protection.md

Size: 1194 bytes

```md
# Homepage Hero Protection

The homepage hero is a protected system.

Current behavior: the first wheel scroll moves the hero background image through its gated scroll range. After the background reaches the end, the page scrolls normally into the following sections. Scrolling upward at the hero start can move the background back to its start offset.

The hero DOM contract depends on these class names:

- `hero-scroll-stage`
- `hero`
- `hero-sticky-viewport`
- `hero-bg-scroll`
- `hero-bg`
- `hero-media`
- `hero-image-link`
- `hero-ui`
- `hero-slide`
- `hero-copy`
- `hero-dots`
- `hero-index`

The required hero control attributes are:

- `data-hero-swipe`
- `data-hero-prev`
- `data-hero-next`
- `data-hero-dot`

The JavaScript entry point is `src/utils/heroScrollGate.js`. It owns the scroll gate measurement, wheel handling, resize handling, image load refresh, and the `--hero-bg-y` CSS variable update.

Non-hero tasks must not modify `HeroCarousel.js`, the protected hero CSS block, or `heroScrollGate.js`. If hero behavior must change, create a dedicated hero task first and review the full hero behavior separately from product pages, gallery, navigation, or color selector work.

```

### gl-series.md

Size: 5297 bytes

```md
# GL Series

## Basic Info

| Field | Content |
| --- | --- |
| Product ID | gl |
| Product Name | GL Series |
| Models | GL35 / GL45 / GL55 / GL75 |
| Positioning | Expedition cooling for longer routes. |
| Intro | The GL Series is built for outdoor trips, vehicle travel and larger cold-storage needs, with rugged proportions and a strong equipment presence. |

## SEO

| Field | Content |
| --- | --- |
| SEO Title | GL Series Expedition Portable Fridge \| Travel Science |
| SEO Description | GL Series expedition cooling systems for overlanding, SUV travel, pickup routes and larger cold-storage needs. |

### SEO Keywords

- expedition portable fridge
- overlanding fridge
- large car fridge
- camping compressor fridge

## Model Specs

### GL35

| Spec | Value |
| --- | --- |
| Capacity | 35L |
| Voltage | DC 12/24V; AC with adapter |
| Cooling | Compressor cooling |
| Temperature Range | -20C to 20C / -4F to 68F |
| Product Dimensions | 685mm x 410mm x 390mm |
| Packing Size | 730mm x 495mm x 460mm |
| Net Weight | 14.4kg |
| Gross Weight | 17.3kg |
| Power Consumption | 60W |
| Loading QTY | 20GP/40HQ: 175/360 |
| Application | Overlanding, SUV travel, pickup routes and long-distance camping |

### GL45

| Spec | Value |
| --- | --- |
| Capacity | 45L |
| Voltage | DC 12/24V; AC with adapter |
| Cooling | Compressor cooling |
| Temperature Range | -20C to 20C / -4F to 68F |
| Product Dimensions | 685mm x 410mm x 450mm |
| Packing Size | 730mm x 495mm x 520mm |
| Net Weight | 14.8kg |
| Gross Weight | 18.1kg |
| Power Consumption | 60W |
| Loading QTY | 20GP/40HQ: 140/360 |
| Application | Overlanding, SUV travel, pickup routes and long-distance camping |

### GL55

| Spec | Value |
| --- | --- |
| Capacity | 55L |
| Voltage | DC 12/24V; AC with adapter |
| Cooling | Compressor cooling |
| Temperature Range | -20C to 20C / -4F to 68F |
| Product Dimensions | 685mm x 410mm x 510mm |
| Packing Size | 730mm x 495mm x 580mm |
| Net Weight | 15.3kg |
| Gross Weight | 18.3kg |
| Power Consumption | 60W |
| Loading QTY | 20GP/40HQ: 140/288 |
| Application | Overlanding, SUV travel, pickup routes and long-distance camping |

### GL75

| Spec | Value |
| --- | --- |
| Capacity | 75L |
| Voltage | DC 12/24V; AC with adapter |
| Cooling | Compressor cooling |
| Temperature Range | -20C to 20C / -4F to 68F |
| Product Dimensions | 729mm x 410mm x 627mm |
| Packing Size | 735mm x 495mm x 705mm |
| Net Weight | 16.3kg |
| Gross Weight | 20.6kg |
| Power Consumption | 60W |
| Loading QTY | 20GP/40HQ: 96/207 |
| Application | Overlanding, SUV travel, pickup routes and long-distance camping |

## Gallery

| Image | Title | Text |
| --- | --- | --- |
| `/assets/products/gl/front.png` | Front angle | Rugged proportions with a strong outdoor equipment presence. |
| `/assets/products/gl/open-lid.png` | Open storage | Dual-lid access for larger cold-storage needs. |
| `/assets/products/gl/control-panel.png` | Control panel | Clear operation for vehicle travel and outdoor use. |
| `/assets/products/gl/handle-detail.png` | Side handle detail | Handle structure designed for outdoor handling and vehicle travel. |

## Core Features

| Title | Text |
| --- | --- |
| Dual-zone layout options | Flexible storage with independent temperature control. |
| Two-door reversible design | Dual-door access supports flexible outdoor storage and operation. |
| Car and home dual use | Supports vehicle and home use through DC/AC power options. |
| Battery protection system | Three-stage battery protection helps prevent vehicle battery drain. |
| Bluetooth APP connection | App connectivity supports easier temperature control and monitoring. |
| Low-noise operation | Low vibration and low noise below 45dB. |
| High texture industrial shell | Durable exterior built to handle outdoor use. |
| OEM color, label and packaging ready | Support for brand customization and packaging solutions. |

## Materials

| Part | Material |
| --- | --- |
| Housing | PE |
| Frame | ABS |
| Door | PE |
| Compressor Cabin Cover | ABS |
| Handle | Metal + Plastic for 35L / 45L / 55L; Plastic for 75L |
| Inner Liner | Embossed Aluminum |
| Inner Base | HIPS |
| Optional Part | Basket |

## Use Cases

| Use Case | Text |
| --- | --- |
| Overlanding | Built for longer outdoor routes and larger cold-storage needs. |
| SUV travel | Designed to move between vehicle storage and outdoor use. |
| Pickup routes | Strong storage capacity for work, travel and equipment-based use. |
| Long-distance camping | Reliable cooling for extended outdoor stays. |

## Certifications

- CE
- CB
- RoHS
- RED

## Downloads

| Asset | Path |
| --- | --- |
| Brochure | `/assets/downloads/gl-series-brochure.pdf` |
| Spec Sheet | `/assets/downloads/gl-series-spec-sheet.pdf` |
| Manual | `/assets/downloads/gl-series-manual.pdf` |

## Inquiry CTA

| Field | Content |
| --- | --- |
| Title | Start a GL Series project. |
| Text | Request specifications, customization options or distributor details for GL35, GL45, GL55 and GL75. |
| Button | Request GL Series details |

## Source Files

| Source | Local Path |
| --- | --- |
| Travel Science brochure | `/Users/yiwenzhou/Documents/Kelvcoop/Travel Science画册.pdf` |
| GL flyer | `/Users/yiwenzhou/Documents/Kelvcoop/单张flyers/GL单张-20250717.pdf` |

```

### index.html

Size: 693 bytes

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Travel Science designs portable cooling systems by Kelvcoop for modern travel, vehicle life, weekend escapes and tool-battery powered mobility."
    />
    <title>Travel Science | by Kelvcoop</title>
    <link rel="stylesheet" href="/src/styles.css?v=20260622-nav-panel-gap" />
    <link rel="preload" as="image" href="/assets/hero/s35-hero.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.js?v=20260622-route-scroll-top"></script>
  </body>
</html>

```

### package-lock.json

Size: 242 bytes

```json
{
  "name": "kelvcoop-interactive-site",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "kelvcoop-interactive-site",
      "version": "0.1.0",
      "devDependencies": {}
    }
  }
}

```

### package.json

Size: 394 bytes

```json
{
  "name": "kelvcoop-interactive-site",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "generate:gallery": "node scripts/generate-product-gallery.mjs",
    "dev": "node scripts/generate-gallery-manifest.mjs && node server.mjs",
    "preview": "node scripts/generate-gallery-manifest.mjs && node server.mjs"
  },
  "dependencies": {},
  "devDependencies": {}
}

```

### public/assets/brand/k-icon.svg

Size: 769 bytes

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.18 122.55">
  <defs>
    <style>
      .cls-1 {
        fill: #231f20;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <path class="cls-1" d="M63.67,0L0,67.42V18.56C0,8.31,8.31,0,18.57,0h45.11Z"/>
    <path class="cls-1" d="M138.18,0l-9.72,10.24-49.83,52.53-17.07,18-7.08,7.47-1.02,1.07-16.24,17.12-.09.09-1.93,2.03c-8.91,8.87-21.37,14.13-35.06,13.95-.05,0-.1,0-.15,0v-30.93l2.26-2.26,26.65-26.64L90.99.59c2.46-.39,4.99-.59,7.56-.59h39.64Z"/>
    <path class="cls-1" d="M138.18,122.32v.24h-42.15c-4.63,0-9.07-1.84-12.34-5.11l-28.13-28.13h42.39c4.63,0,9.07,1.84,12.34,5.11l1.47,1.47,26.43,26.43Z"/>
  </g>
</svg>

```

### public/assets/icons/arrowleft.svg

Size: 249 bytes

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.69 206.57">
  <polygon points="59.47 206.57 113.69 206.57 54.28 103.31 113.65 .07 59.49 0 0 103.3 59.47 206.57"/>
</svg>

```

### public/assets/icons/arrowright.svg

Size: 246 bytes

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.69 206.57">
  <polygon points="54.23 206.57 0 206.57 59.41 103.31 .04 .07 54.21 0 113.69 103.3 54.23 206.57"/>
</svg>

```

### README.md

Size: 350 bytes

```md
# Travel Science Website

A static product website for Travel Science, by Kelvcoop.

## Local Preview

`\`\`bash
npm run dev
`\`\`

Then open:

`\`\`text
http://localhost:4173/
`\`\`

## Project Structure

`\`\`text
src/
  components/
  data/
  pages/
  utils/
public/
  assets/
`\`\`

Runtime assets referenced as `/assets/...` are served from `public/assets`.

```

### scripts/generate-gallery-manifest.mjs

Size: 5639 bytes

```js
import { existsSync } from "node:fs";
import { readdir, writeFile } from "node:fs/promises";
import { extname, join, parse } from "node:path";
import { products } from "../src/data/products.js";

const productRoot = join(process.cwd(), "public", "assets", "products");
const galleryOutputFile = join(process.cwd(), "src", "data", "galleryManifest.js");
const productImageOutputFile = join(process.cwd(), "src", "data", "productImageManifest.js");
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);
const productFolders = {
  gl: "gl",
  ax: "ax",
  b: "b",
  d: "d",
  ex: "ex",
  exm: "exm",
  k: "k",
  ke: "ke",
  m: "m",
  s: "S18",
  tf: "tf",
};
const extensionPreference = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
const colorSlugAliases = {
  "all-black": ["black"],
  "black-gray": ["blackgrey"],
  "black-silver": ["black-and-silver"],
  "black-beige-gray": ["black-beige", "black-beige-grey"],
  "blue-gray-beige-gray": ["blue-gray-beige", "blue-grey-beige-grey"],
  "dark-gray-light-gray": ["dark-grey-light-grey"],
  "light-gray": ["light-grey"],
  "mung-bean-gray": ["mung-gray", "mung-bean-grey", "sage", "sage-green"],
  "sage-green": ["sage"],
};

function sortByName(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function slugify(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function titleFromFileName(fileName) {
  const baseName = parse(fileName).name
    .replace(/^\d+[-_\s]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!baseName) return "Product detail";

  return baseName.charAt(0).toUpperCase() + baseName.slice(1);
}

async function galleryItemsFor(folderName) {
  const galleryDir = join(productRoot, folderName, "gallery");
  if (!existsSync(galleryDir)) return [];

  const entries = await readdir(galleryDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("."))
    .filter((name) => imageExtensions.has(extname(name).toLowerCase()))
    .sort(sortByName)
    .map((name) => ({
      image: `/assets/products/${folderName}/gallery/${name}`,
      title: titleFromFileName(name),
      text: "Product detail image.",
    }));
}

async function modelImageLookupFor(folderName) {
  const modelsDir = join(productRoot, folderName, "models");
  if (!existsSync(modelsDir)) return new Map();

  const entries = await readdir(modelsDir, { withFileTypes: true });
  return new Map(entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("."))
    .filter((name) => imageExtensions.has(extname(name).toLowerCase()))
    .map((name) => [name.toLowerCase(), name]));
}

function colorSlugCandidates(color) {
  const slugs = [
    slugify(color.value),
    slugify(color.name),
  ].filter(Boolean);

  return [...new Set(slugs.flatMap((slug) => [slug, ...(colorSlugAliases[slug] || [])]))];
}

function modelImageFor(fileLookup, folderName, model, color) {
  const modelSlug = slugify(model);

  for (const colorSlug of colorSlugCandidates(color)) {
    for (const extension of extensionPreference) {
      const fileName = `${modelSlug}-${colorSlug}${extension}`;
      const matchedFileName = fileLookup.get(fileName);
      if (matchedFileName) {
        return `/assets/products/${folderName}/models/${matchedFileName}`;
      }
    }
  }

  return "";
}

async function productImagesFor(product, folderName) {
  const fileLookup = await modelImageLookupFor(folderName);
  const models = product.modelOptions || product.models || [];
  const colors = product.colorOptions || [];
  const modelImages = {};

  for (const model of models) {
    const colorImages = {};

    for (const color of colors) {
      const image = modelImageFor(fileLookup, folderName, model, color);
      if (image) {
        colorImages[color.value] = image;
      }
    }

    if (Object.keys(colorImages).length) {
      modelImages[model] = colorImages;
    }
  }

  return modelImages;
}

async function generateManifests() {
  const manifest = {};
  const productImageManifest = {};
  const productsById = new Map(products.map((product) => [product.id, product]));

  for (const [productId, folderName] of Object.entries(productFolders)) {
    manifest[productId] = await galleryItemsFor(folderName);
    productImageManifest[productId] = productsById.has(productId)
      ? await productImagesFor(productsById.get(productId), folderName)
      : {};
  }

  const output = `// This file is generated by scripts/generate-gallery-manifest.mjs.\n// Run npm run dev or npm run preview after adding or deleting gallery images.\n\nexport const galleryManifest = ${JSON.stringify(manifest, null, 2)};\n`;
  await writeFile(galleryOutputFile, output);

  const productImageOutput = `// This file is generated by scripts/generate-gallery-manifest.mjs.\n// Run npm run dev or npm run preview after adding or deleting model images.\n\nexport const productImageManifest = ${JSON.stringify(productImageManifest, null, 2)};\n`;
  await writeFile(productImageOutputFile, productImageOutput);

  Object.entries(manifest).forEach(([id, items]) => {
    const modelCount = Object.values(productImageManifest[id] || {})
      .reduce((total, colors) => total + Object.keys(colors || {}).length, 0);
    console.log(`${id}: ${items.length} gallery, ${modelCount} model images`);
  });
}

await generateManifests();

```

### scripts/generate-product-gallery.mjs

Size: 2544 bytes

```js
import { readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { products } from "../src/data/products.js";

const productRoot = join(process.cwd(), "public", "assets", "products");
const outputFile = join(process.cwd(), "src", "data", "productGallery.js");
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const folderAliases = new Map([
  ["S18", "s"],
]);

const productIds = products.map((product) => product.id);
const gallery = Object.fromEntries(productIds.map((id) => [id, []]));

function imagePathFor(folderName, fileName) {
  return `/assets/products/${folderName}/gallery/${fileName}`;
}

function sortByName(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function productIdForFolder(folderName) {
  if (folderAliases.has(folderName)) return folderAliases.get(folderName);
  if (productIds.includes(folderName)) return folderName;

  const lowerCaseName = folderName.toLowerCase();
  if (productIds.includes(lowerCaseName)) return lowerCaseName;

  return "";
}

async function readGalleryImages(folderName) {
  const galleryDir = join(productRoot, folderName, "gallery");
  if (!existsSync(galleryDir)) return [];

  const entries = await readdir(galleryDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => {
      const extension = name.slice(name.lastIndexOf(".")).toLowerCase();
      return imageExtensions.has(extension);
    })
    .sort(sortByName)
    .map((name) => ({ image: imagePathFor(folderName, name) }));
}

async function generateProductGallery() {
  const productFolders = await readdir(productRoot, { withFileTypes: true });

  for (const folder of productFolders.filter((entry) => entry.isDirectory()).sort((a, b) => sortByName(a.name, b.name))) {
    const images = await readGalleryImages(folder.name);
    const productId = productIdForFolder(folder.name);
    if (!productId) continue;

    if (!images.length) {
      continue;
    }

    gallery[productId] = images;
  }

  const output = `// This file is generated by scripts/generate-product-gallery.mjs.\n// Run npm run generate:gallery after adding or deleting gallery images.\n\nexport const productGallery = ${JSON.stringify(gallery, null, 2)};\n`;
  await writeFile(outputFile, output);

  Object.entries(gallery).forEach(([id, items]) => {
    console.log(`${id}: ${items.length}`);
  });
}

await generateProductGallery();

```

### scripts/trim-png-by-group-union-bbox.py

Size: 5544 bytes

```py
#!/usr/bin/env python3
"""
Trim PNG product renders by a shared alpha union bbox per model + angle group.

Default input:
  assets/input-png

Default output:
  assets/output-trimmed

This script does not scale, recenter, or overwrite source images. Each group
uses one shared crop box so color changes for the same model + angle do not
visually jump.
"""

from __future__ import annotations

import argparse
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from PIL import Image


INPUT_DIR = Path("assets/input-png")
OUTPUT_DIR = Path("assets/output-trimmed")


# Edit this list if your color naming changes. The longest suffix match wins,
# so "sage-green" is handled before the fallback that removes only "-green".
COLOR_SUFFIXES = (
    "black-beige-gray",
    "blue-gray-beige-gray",
    "dark-gray-light-gray",
    "mung-bean-gray",
    "black-silver",
    "black-gray",
    "sage-green",
    "all-black",
    "champagne",
    "light-gray",
    "beige-gray",
    "orange-black",
    "silver",
    "beige",
    "green",
    "gray",
    "grey",
    "white",
    "black",
)


def get_group_key(filename: str) -> str:
    """Return the shared crop group key for a PNG filename.

    Examples:
      GL45-front-black.png -> GL45-front
      GL45-front-sage-green.png -> GL45-front
      GL45-side-black.png -> GL45-side

    If your filenames use a different pattern, modify only this function.
    """

    stem = Path(filename).stem
    normalized = stem.lower()

    for color in sorted(COLOR_SUFFIXES, key=len, reverse=True):
        suffix = f"-{color}"
        if normalized.endswith(suffix):
            return stem[: -len(suffix)]

    if "-" in stem:
        return stem.rsplit("-", 1)[0]

    return stem


@dataclass(frozen=True)
class ImageInfo:
    path: Path
    group_key: str
    original_size: tuple[int, int]
    bbox: tuple[int, int, int, int] | None


def alpha_bbox(path: Path) -> tuple[tuple[int, int], tuple[int, int, int, int] | None]:
    with Image.open(path) as image:
        rgba = image.convert("RGBA")
        alpha = rgba.getchannel("A")
        return rgba.size, alpha.getbbox()


def union_bbox(boxes: Iterable[tuple[int, int, int, int]]) -> tuple[int, int, int, int]:
    lefts: list[int] = []
    tops: list[int] = []
    rights: list[int] = []
    bottoms: list[int] = []

    for left, top, right, bottom in boxes:
        lefts.append(left)
        tops.append(top)
        rights.append(right)
        bottoms.append(bottom)

    return min(lefts), min(tops), max(rights), max(bottoms)


def collect_images(input_dir: Path) -> list[ImageInfo]:
    files = sorted(input_dir.glob("*.png"))
    images: list[ImageInfo] = []

    for path in files:
        original_size, bbox = alpha_bbox(path)
        images.append(
            ImageInfo(
                path=path,
                group_key=get_group_key(path.name),
                original_size=original_size,
                bbox=bbox,
            )
        )

    return images


def trim_group(
    group_key: str,
    images: list[ImageInfo],
    output_dir: Path,
) -> None:
    boxes = [image.bbox for image in images if image.bbox is not None]

    if boxes:
        crop_box = union_bbox(boxes)
        output_size = (crop_box[2] - crop_box[0], crop_box[3] - crop_box[1])
        print(f"\nGroup: {group_key}")
        print(f"  union bbox: {crop_box}")
    else:
        crop_box = None
        output_size = None
        print(f"\nGroup: {group_key}")
        print("  union bbox: none (all images are fully transparent)")

    for image_info in images:
        output_path = output_dir / image_info.path.name

        with Image.open(image_info.path) as source:
            rgba = source.convert("RGBA")
            result = rgba.crop(crop_box) if crop_box else rgba.copy()
            result.save(output_path)

        final_size = output_size or image_info.original_size
        print(
            "  "
            f"{image_info.path.name}: "
            f"original={image_info.original_size}, "
            f"alpha_bbox={image_info.bbox}, "
            f"output={final_size}"
        )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Trim PNGs with one shared alpha union bbox per model + angle group."
    )
    parser.add_argument(
        "--input",
        type=Path,
        default=INPUT_DIR,
        help=f"Input PNG folder. Default: {INPUT_DIR}",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=OUTPUT_DIR,
        help=f"Output folder. Default: {OUTPUT_DIR}",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    input_dir = args.input
    output_dir = args.output

    if not input_dir.exists():
        raise SystemExit(f"Input folder does not exist: {input_dir}")

    output_dir.mkdir(parents=True, exist_ok=True)

    images = collect_images(input_dir)
    if not images:
        print(f"No PNG files found in: {input_dir}")
        return 0

    groups: dict[str, list[ImageInfo]] = defaultdict(list)
    for image_info in images:
        groups[image_info.group_key].append(image_info)

    print(f"Input: {input_dir}")
    print(f"Output: {output_dir}")
    print(f"PNG files: {len(images)}")
    print(f"Groups: {len(groups)}")

    for group_key in sorted(groups):
        trim_group(group_key, groups[group_key], output_dir)

    print("\nDone.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

```

### server.mjs

Size: 1431 bytes

```js
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
};

createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  const isAssetRequest = safePath.startsWith("/assets/");
  let filePath = isAssetRequest
    ? join(root, "public", safePath)
    : join(root, safePath);

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    if (isAssetRequest) {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/plain; charset=utf-8");
      response.end("Asset not found");
      return;
    }

    filePath = join(root, "index.html");
  }

  response.setHeader("Content-Type", types[extname(filePath)] || "application/octet-stream");
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Travel Science site running at http://localhost:${port}`);
});

```

### src/components/ContactSection.js

Size: 456 bytes

```js
export function ContactSection() {
  return `
    <section class="contact reveal" id="contact">
      <p class="kicker">Product inquiry</p>
      <h2>Request specifications or start a custom cooling project.</h2>
      <p>Send your target model, capacity, market and customization needs. We will respond with product details, options and next steps.</p>
      <a class="hero-cta" href="mailto:info@kelvcoop.com">info@kelvcoop.com</a>
    </section>
  `;
}

```

### src/components/FeaturedProducts.js

Size: 815 bytes

```js
import { productHeadline, productIntro } from "../data/products.js";

export function FeaturedProducts({ products }) {
  return `
    <section class="featured reveal">
      ${products.map(featuredProduct).join("")}
    </section>
  `;
}

function featuredProduct(product, index) {
  return `
    <article class="feature-product ${index % 2 ? "is-reversed" : ""}">
      <div class="feature-visual">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="feature-copy">
        <p class="kicker">Featured system</p>
        <h2>${product.name}</h2>
        <h3>${productHeadline(product)}</h3>
        <p>${productIntro(product)}</p>
        <a class="card-cta" href="#/products/${product.id}" data-go="/products/${product.id}">View Product</a>
      </div>
    </article>
  `;
}

```

### src/components/Footer.js

Size: 502 bytes

```js
import { socialLinks } from "../data/socialLinks.js";

export function Footer() {
  return `
    <footer>
      <span>TRAVEL SCIENCE</span>
      <span>Outdoor technology by Kelvcoop.</span>
      <div class="footer-social">
        <p>Follow Travel Science</p>
        <div class="footer-social-links">
          ${socialLinks.map((link) => `
            <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
          `).join("")}
        </div>
      </div>
    </footer>
  `;
}

```

### src/components/Header.js

Size: 5679 bytes

```js
import { products } from "../data/products.js";

const productById = new Map(products.map((product) => [product.id, product]));

const productMenuGroups = [
  {
    title: "Compact Cooling",
    description: "Under 30L, lighter and easier to carry.",
    items: [
      { id: "d", name: "D Series", detail: "9L" },
      { id: "k", name: "K Series", detail: "15L&ndash;20L" },
      { id: "s", name: "S18", detail: "18L" },
      { id: "b", name: "B Series", detail: "20L&ndash;25L" },
    ],
  },
  {
    title: "Large Capacity",
    description: "30L and above for larger storage needs.",
    items: [
      { id: "ax", name: "AX Series", detail: "30L&ndash;50L" },
      { id: "ex", name: "EX Series", detail: "30L&ndash;50L" },
    ],
  },
  {
    title: "Dual-zone Storage",
    description: "Large-capacity dual-zone storage for chilled and frozen items.",
    items: [
      { id: "gl", name: "GL Series", detail: "35L&ndash;75L" },
      { id: "ax", name: "AX Series", detail: "30L&ndash;50L" },
      { id: "tf", name: "TF Series", detail: "35L&ndash;55L" },
    ],
  },
  {
    title: "Wheeled Mobility",
    description: "Large-capacity cooling with wheels and pull-handle structure.",
    items: [
      { id: "exm", name: "EXM Series", detail: "30L&ndash;50L" },
      { id: "m", name: "M Series", detail: "35L&ndash;55L &middot; Dual-zone" },
    ],
  },
];

function productMenuItem(item) {
  if (!productById.has(item.id)) return "";

  return `
    <a class="products-menu-item" href="#/products/${item.id}" data-go="/products/${item.id}">
      <span class="products-menu-name">${item.name}</span>
      <span class="products-menu-detail">${item.detail}</span>
      <span class="products-menu-arrow" aria-hidden="true">&rarr;</span>
    </a>
  `;
}

function mobileProductMenuItem(item) {
  if (!productById.has(item.id)) return "";

  return `
    <a class="mobile-product-row" href="#/products/${item.id}" data-go="/products/${item.id}">
      <span class="mobile-product-name">${item.name}</span>
      <span class="mobile-product-capacity">${item.detail}</span>
    </a>
  `;
}

export function Header({ theme, menuOpen, mobileProductsOpen = false, productsOpen = false, headerMode = "hero" }) {
  return `
    <header class="site-header ${headerMode === "hero" ? "is-over-hero" : "is-over-content"} ${menuOpen ? "is-menu-open" : ""} ${productsOpen ? "is-products-open" : ""}">
      <a class="brand" href="#/" data-go="/" aria-label="Travel Science home">
        <span class="brand-mark"><img src="/assets/brand/k-icon.svg" alt=""></span>
        <span class="brand-text">
          <strong>TRAVEL <span>S</span>CIENCE</strong>
          <small>Outdoor Technology <em>by Kelvcoop</em></small>
        </span>
      </a>
      <nav class="nav mobile-nav-panel ${menuOpen ? "is-open" : ""}" aria-label="Primary navigation">
        <div class="mobile-nav-scroll">
          <div class="nav-product nav-item nav-item-products" data-products-menu-zone>
            <a class="nav-link nav-product-trigger desktop-products-link" href="#/products" data-go="/products" data-products-trigger aria-haspopup="true" aria-expanded="${productsOpen ? "true" : "false"}">Products</a>
            <button class="nav-link mobile-products-toggle" type="button" data-mobile-products-toggle aria-expanded="${mobileProductsOpen ? "true" : "false"}">Products</button>
            <div class="products-hover-bridge" data-products-bridge aria-hidden="true"></div>
            <div class="product-dropdown products-dropdown ${productsOpen ? "is-open" : ""}" data-products-dropdown aria-label="Product series">
              <div class="product-dropdown-inner products-dropdown-inner">
                <div class="products-menu">
                  <div class="products-menu-heading">
                    <strong>Products</strong>
                    <span>Choose by capacity, zone and mobility.</span>
                  </div>
                  <div class="products-menu-grid">
                    ${productMenuGroups.map((group) => `
                      <section class="products-menu-group">
                        <h3>${group.title}</h3>
                        <p>${group.description}</p>
                        <div class="products-menu-items">
                          ${group.items.map(productMenuItem).join("")}
                        </div>
                      </section>
                    `).join("")}
                  </div>
                </div>
              </div>
            </div>
            <div class="mobile-products-panel ${mobileProductsOpen ? "is-open" : ""}" aria-label="Mobile product series">
              ${productMenuGroups.map((group) => `
                <section class="mobile-products-group">
                  <h4>${group.title}</h4>
                  ${group.items.map(mobileProductMenuItem).join("")}
                </section>
              `).join("")}
            </div>
          </div>
          <a href="#/custom-projects" data-go="/custom-projects">Custom Projects</a>
          <a href="#/capabilities" data-go="/capabilities">Support</a>
        </div>
      </nav>
      <div class="nav-actions">
        <button class="theme-button" data-theme-toggle aria-label="Toggle theme" aria-pressed="${theme === "dark"}">${theme === "light" ? "Dark" : "Light"}</button>
        <a class="nav-cta" href="#/contact" data-go="/contact">Contact</a>
        <button class="menu-button mobile-menu-toggle ${menuOpen ? "is-open" : ""}" type="button" data-menu-toggle aria-label="${menuOpen ? "Close menu" : "Open menu"}" aria-expanded="${menuOpen ? "true" : "false"}"><span></span><span></span></button>
      </div>
    </header>
  `;
}

```

### src/components/HeroCarousel.js

Size: 3545 bytes

```js
// HERO CONTRACT:
// The class names used by this component are required by heroScrollGate.js,
// navigation swipe controls, and the protected hero CSS block.
// Do not rename or restructure this component unless the full hero behavior is intentionally reviewed.

export function HeroCarousel({ slides, currentSlide }) {
  const safeIndex = slides.length ? currentSlide % slides.length : 0;
  const slide = slides[safeIndex];
  if (!slide) return "";
  const detailUrl = slide.detailUrl || slide.target;

  return `
    <section class="hero-scroll-stage" aria-label="Featured Travel Science product image">
      <div class="hero hero-sticky-viewport" data-hero-swipe>
        <div class="hero-bg-scroll">
          <img
            class="hero-bg hero-media"
            src="${slide.background}"
            alt=""
            aria-hidden="true"
            style="--hero-position: ${slide.position || "center center"}">
          <a
            class="hero-image-link"
            href="#${detailUrl}"
            data-go="${detailUrl}"
            aria-label="Open ${(slide.eyebrow || slide.title).replace(/\n/g, " ")} details">
          </a>
        </div>

        <section class="hero-ui hero-slide hero-slide-${slide.id} is-active" aria-label="Featured Travel Science products">
          <div class="hero-copy">
            <span class="hero-badge">${slide.badge}</span>
            <p class="hero-eyebrow">${slide.eyebrow}</p>
            <h1 class="hero-title">${slide.title.replace("\n", "<br>")}</h1>
            <p class="hero-text">${slide.text}</p>
            <div class="hero-features">
              ${slide.features.map((feature) => `<span class="hero-feature"><span class="hero-feature-icon" aria-hidden="true"></span>${feature}</span>`).join("")}
            </div>
            <div class="hero-actions">
              <a class="text-button view-all-products" href="#${slide.secondaryTarget}" data-go="${slide.secondaryTarget}">${slide.secondary} <span class="arrow-accent">→</span></a>
            </div>
          </div>
          <div class="hero-arrows" aria-label="Hero carousel controls">
            <button class="hero-arrow hero-arrow-left" type="button" data-hero-prev aria-label="Previous hero slide">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button class="hero-arrow hero-arrow-right" type="button" data-hero-next aria-label="Next hero slide">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9 6l6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div class="hero-dots hero-index" aria-label="Hero carousel pagination">
            ${slides
              .map((_, index) => {
                const number = String(index + 1).padStart(2, "0");
                return `
                  <button
                    class="hero-dot hero-index-item ${index === safeIndex ? "is-active" : ""}"
                    data-hero-dot="${index}"
                    aria-label="Hero slide ${index + 1}"
                    aria-current="${index === safeIndex ? "true" : "false"}">
                    <span class="hero-index-number">${number}</span>
                    <span class="hero-index-line" aria-hidden="true"></span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

```

### src/components/ProductCard.js

Size: 891 bytes

```js
import { productHeadline, productIntro } from "../data/products.js";

export function ProductCard(product) {
  const image = product.cardImage || product.image;
  const imageClass = ["product-card-image", product.imageClass || product.cardImageClass].filter(Boolean).join(" ");

  return `
    <article class="product-card">
      <a class="product-media" href="#/products/${product.id}" data-go="/products/${product.id}" aria-label="Open ${product.name}">
        <img class="${imageClass}" src="${image}" alt="${product.name}">
      </a>
      <div class="product-card-copy">
        <span>${product.models.length} models</span>
        <h2>${product.name}</h2>
        <h3>${productHeadline(product)}</h3>
        <p>${productIntro(product)}</p>
        <a class="card-cta" href="#/products/${product.id}" data-go="/products/${product.id}">Explore</a>
      </div>
    </article>
  `;
}

```

### src/components/ProductDetailTemplate.js

Size: 14205 bytes

```js
import { ContactSection } from "./ContactSection.js";
import { ProductCard } from "./ProductCard.js";
import { galleryManifest } from "../data/galleryManifest.js";
import { productImageManifest } from "../data/productImageManifest.js";
import { productHeadline, productIntro } from "../data/products.js";

export function ProductDetailTemplate({ product, related = [] }) {
  return `
    <main class="product-page">
      <nav class="breadcrumb reveal" aria-label="Breadcrumb">
        <a href="#/" data-go="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="#/products" data-go="/products">Products</a>
        <span aria-hidden="true">/</span>
        <span>${product.name}</span>
      </nav>

      <section class="product-hero reveal" ${productHeroState(product)}>
        <div class="product-hero-copy">
          <p class="kicker">${product.models.join(" / ")}</p>
          <h1>${product.name}</h1>
          <h2>${productHeadline(product)}</h2>
          <p>${productIntro(product)}</p>
          ${modelSelector(product)}
          ${colorSelector(product)}
        </div>
        <div class="product-hero-media">
          <img class="${product.id === "gl" ? "gl-product-hero-image" : ""}" data-product-hero-image src="${productHeroImage(product)}" alt="${product.alt || product.name}">
        </div>
      </section>

      <section class="statement reveal">
        <p>${product.application}</p>
      </section>

      <section class="detail-grid reveal">
        ${(product.featureDetails || product.highlights.map((title) => ({ title })))
          .slice(0, 4)
          .map((item) => `<article><span></span><h3>${item.title}</h3>${item.text ? `<p>${item.text}</p>` : ""}</article>`)
          .join("")}
      </section>

      ${modelSpecifications(product)}
      ${gallerySection(product)}
      ${coreFeatures(product)}
      ${materialsSection(product)}
      ${useCasesSection(product)}
      ${certificationsSection(product)}
      ${downloadsSection(product)}
      ${inquirySection(product)}

      <section class="related reveal">
        <div class="section-heading">
          <p class="kicker">Continue exploring</p>
          <h2>More Travel Science systems.</h2>
        </div>
        <div class="related-grid">
          ${related.map(ProductCard).join("")}
        </div>
      </section>
      ${ContactSection()}
    </main>
  `;
}

function productHeroState(product) {
  const imageMap = productImageMap(product);
  if (!imageMap) return "";
  const { model, color } = resolveProductSelection(product);
  return `data-product-hero data-selected-model="${model}" data-selected-color="${color}" data-fallback-image="${product.image}" data-product-images='${JSON.stringify(imageMap)}'`;
}

function productHeroImage(product) {
  const imageMap = productImageMap(product);
  const { model, color } = resolveProductSelection(product);
  return productImageForVariant(imageMap, model, color) || product.image;
}

function productImageMap(product) {
  if (Object.prototype.hasOwnProperty.call(productImageManifest, product.id)) {
    return productImageManifest[product.id] || {};
  }

  return product.productImages || null;
}

function productImageForVariant(imageMap, model, color) {
  if (!model || !color) return "";
  return imageMap?.[model]?.[color] || "";
}

function resolveProductSelection(product) {
  const imageMap = productImageMap(product);
  const models = product.modelOptions || product.models || [];
  const colors = product.colorOptions || [];
  const defaultModel = product.defaultModel || models[0] || "";
  const defaultColor = product.defaultColor || colors[0]?.value || "";

  if (productImageForVariant(imageMap, defaultModel, defaultColor)) {
    return { model: defaultModel, color: defaultColor };
  }

  for (const model of models) {
    for (const color of colors) {
      if (productImageForVariant(imageMap, model, color.value)) {
        return { model, color: color.value };
      }
    }
  }

  return { model: defaultModel, color: defaultColor };
}

function modelSelector(product) {
  const models = product.modelOptions || product.modelDetails?.map((model) => model.name);
  const imageMap = productImageMap(product);
  if (!imageMap || !models?.length) return "";
  const activeModel = resolveProductSelection(product).model;

  return `
    <div class="model-selector" aria-label="Select model">
      <span class="model-label">SELECT MODEL</span>
      <div class="model-tabs">
        ${models.map((model) => `
          <button
            class="model-tab ${model === activeModel ? "active" : ""}"
            type="button"
            data-product-model
            data-product-model-value="${model}"
            aria-pressed="${model === activeModel ? "true" : "false"}">
            ${model}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function colorSelector(product) {
  if (!product.colorOptions?.length) return "";
  const imageMap = productImageMap(product);
  const { model: activeModel, color: activeColor } = resolveProductSelection(product);

  return `
    <div class="product-color-selector" aria-label="${product.name} available colors">
      <p>Color</p>
      <div class="product-color-options">
        ${product.colorOptions.map((option) => {
          const isActive = option.value === activeColor;
          const isAvailable = !imageMap || Boolean(productImageForVariant(imageMap, activeModel, option.value));
          return `
            <button
              class="product-color-option ${isActive ? "is-active" : ""} ${isAvailable ? "" : "is-unavailable"}"
              type="button"
              data-product-color
              data-product-color-value="${option.value}"
              aria-pressed="${isActive ? "true" : "false"}"
              aria-disabled="${isAvailable ? "false" : "true"}"
              ${isAvailable ? "" : "disabled"}>
              ${colorSwatch(option)}
              <span>${option.name}</span>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function colorSwatch(option) {
  const colors = option.swatches || [option.swatch || option.value];
  const fallback = option.swatch || colors[0] || option.value;
  const segments = colors.length > 1
    ? colors.map((color) => `<span class="product-color-swatch-dot" style="--swatch-dot: ${color}"></span>`).join("")
    : "";

  return `
    <span class="product-color-swatch" style="--swatch: ${fallback}" aria-hidden="true">
      ${segments}
    </span>
  `;
}

function modelSpecifications(product) {
  if (!product.modelDetails?.length) {
    return `
      <section class="specs reveal">
        <div>
          <p class="kicker">Technical features</p>
          <h2>Performance, resolved quietly.</h2>
        </div>
        <dl>
          ${spec("Capacity", product.capacity)}
          ${spec("Voltage", product.voltage)}
          ${spec("Cooling", product.cooling)}
          ${spec("Application", product.application)}
        </dl>
      </section>
    `;
  }

  return `
    <section class="model-specs reveal">
      <div class="section-heading">
        <p class="kicker">Model specifications</p>
        <h2>Choose the capacity that fits the route.</h2>
      </div>
      <div class="horizontal-bleed" data-horizontal-shell>
        ${horizontalControls()}
        <div class="horizontal-scroll" data-horizontal-scroll>
          <div class="model-spec-grid horizontal-track">
            ${product.modelDetails.map(modelSpecCard).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function modelSpecCard(model) {
  const rows = [
    ["Capacity", model.capacity],
    ["Voltage", model.voltage],
    ["Cooling", model.cooling],
    ["Temperature", model.temperatureRange],
    ["Product size", model.productDimensions],
    ["Packing size", model.packingSize],
    ["Net weight", model.netWeight],
    ["Gross weight", model.grossWeight],
    ["Power", model.powerConsumption],
    ["Loading QTY", model.loadingQty],
    ["Application", model.application],
  ];

  return `
    <article class="model-spec-card" id="${model.id}">
      <h3>${model.name}</h3>
      <dl>
        ${rows.map(([label, value]) => spec(label, value)).join("")}
      </dl>
    </article>
  `;
}

function horizontalControls() {
  return `
    <div class="horizontal-control-row">
      <button class="scroll-arrow scroll-arrow--prev" type="button" data-horizontal-prev aria-label="Scroll previous"><span class="scroll-arrow-icon" aria-hidden="true">&larr;</span></button>
      <button class="scroll-arrow scroll-arrow--next" type="button" data-horizontal-next aria-label="Scroll next"><span class="scroll-arrow-icon" aria-hidden="true">&rarr;</span></button>
    </div>
  `;
}

function gallerySection(product) {
  const galleryItems = galleryManifest[product.id]?.length
    ? galleryManifest[product.id]
    : product.gallery;
  const gallery = (galleryItems || []).filter((item) => item?.src || item?.image);
  if (!gallery.length) return "";

  const sectionClass = "gl-product-gallery-section reveal";
  const trackClass = "gl-product-gallery-track";
  const cardClass = ` class="gl-product-gallery-card"`;
  const imageClass = ` class="gl-product-gallery-image"`;
  const headingClass = "section-heading gl-product-gallery-heading";
  const heading = `
    <div class="${headingClass}">
      <p class="kicker">Product gallery</p>
      ${product.id === "gl" ? "<h2>Product structure and key details.</h2>" : ""}
    </div>
  `;
  const cards = gallery
    .map(
      (item) => `
        <article${cardClass}>
          <img${imageClass} src="${item.src || item.image}" alt="${item.alt || item.title || product.name}" onerror="this.closest('article')?.remove()">
          <div class="gl-product-gallery-body">
            ${item.title ? `<h3>${item.title}</h3>` : ""}
            ${item.text ? `<p>${item.text}</p>` : ""}
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section class="${sectionClass}">
      <div class="gl-product-gallery-inner">
        ${heading}
      </div>
      <div class="gl-product-gallery-viewport horizontal-bleed">
        ${horizontalControls()}
        <div class="horizontal-scroll" data-horizontal-scroll>
          <div class="${trackClass} horizontal-track">
            ${cards}
          </div>
        </div>
      </div>
    </section>
  `;
}

function coreFeatures(product) {
  if (!product.featureDetails?.length) return "";

  return `
    <section class="product-section reveal">
      <div class="section-heading">
        <p class="kicker">Core features</p>
        <h2>Engineering Details</h2>
      </div>
      <div class="feature-detail-grid">
        ${product.featureDetails.map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function materialsSection(product) {
  if (!product.materials?.length) return "";

  return `
    <section class="specs reveal">
      <div>
        <p class="kicker">Materials</p>
        <h2>Durable structure, clearly specified.</h2>
      </div>
      <dl>
        ${product.materials.map((item) => spec(item.part, item.material)).join("")}
      </dl>
    </section>
  `;
}

function useCasesSection(product) {
  if (!product.useCases?.length) return "";

  return `
    <section class="product-section reveal">
      <div class="section-heading">
        <p class="kicker">Usage scenarios</p>
        <h2>Made for longer routes.</h2>
      </div>
      <div class="use-case-grid">
        ${product.useCases.map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function certificationsSection(product) {
  if (!product.certifications?.length) return "";

  return `
    <section class="certifications reveal">
      <p class="kicker">Certifications</p>
      <div>
        ${product.certifications.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function downloadsSection(product) {
  const documents = productDocuments(product);

  return `
    <section class="downloads reveal">
      <div>
        <p class="kicker">Downloads</p>
        <h2>Product documents.</h2>
      </div>
      <div class="download-list">
        ${documents.map(documentLink).join("")}
      </div>
    </section>
  `;
}

function productDocuments(product) {
  return [
    {
      label: "Product brochure",
      href: product.documents?.brochure || "/assets/downloads/travel-science-brochure.pdf",
      status: "Download",
    },
    {
      label: "User manual",
      href: product.documents?.manual,
      status: product.documents?.manual ? "Download" : "Request document",
    },
    {
      label: "Spec sheet",
      href: product.documents?.specSheet,
      status: product.documents?.specSheet ? "Download" : "Request document",
    },
    {
      label: "Certification documents",
      href: product.documents?.certifications,
      status: product.documents?.certifications ? "Download" : "Request document",
    },
  ];
}

function documentLink(item) {
  if (item.href) {
    return `<a href="${item.href}" download>${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
  }

  const subject = encodeURIComponent(`Request ${item.label}`);
  const body = encodeURIComponent(`Hello Travel Science team,\n\nPlease send the ${item.label.toLowerCase()} for this product.\n\nThank you.`);
  return `<a href="mailto:info@kelvcoop.com?subject=${subject}&body=${body}">${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
}

function inquirySection(product) {
  if (!product.inquiryFocus) return "";

  return `
    <section class="product-inquiry reveal">
      <p class="kicker">Inquiry</p>
      <h2>${product.inquiryFocus.title}</h2>
      <p>${product.inquiryFocus.text}</p>
      <a class="hero-cta" href="mailto:info@kelvcoop.com?subject=${encodeURIComponent(product.inquiryFocus.title)}">${product.inquiryFocus.button}</a>
    </section>
  `;
}

function spec(label, value) {
  return `<div><dt>${label}</dt><dd>${value || "TBD"}</dd></div>`;
}

```

### src/components/ProductFamily.js

Size: 998 bytes

```js
export function ProductFamily({ categories }) {
  return `
    <section class="product-family-section reveal" aria-label="Product families">
      <div class="product-family-intro">
        <p class="kicker">Product families</p>
        <h2>Choose by capacity, power and mobility.</h2>
        <a class="text-button" href="#/products" data-go="/products">Explore all series <span class="arrow-accent">→</span></a>
      </div>
      <div class="product-family-strip">
        ${categories.map(productFamilyCard).join("")}
      </div>
    </section>
  `;
}

function productFamilyCard(category) {
  return `
    <article class="product-family-card">
      <div class="family-image"><img src="${category.image}" onerror="this.onerror=null;this.src='${category.fallback || category.image}'" alt="${category.name}"></div>
      <div>
        <h3>${category.name}</h3>
        <p>${category.label}</p>
      </div>
      <span class="arrow-accent" aria-hidden="true">→</span>
    </article>
  `;
}

```

### src/data/galleryManifest.js

Size: 10261 bytes

```js
// This file is generated by scripts/generate-gallery-manifest.mjs.
// Run npm run dev or npm run preview after adding or deleting gallery images.

export const galleryManifest = {
  "gl": [
    {
      "image": "/assets/products/gl/gallery/gl-control-panel-close.jpg",
      "title": "Gl control panel close",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl-detail-control-panel.png",
      "title": "Gl detail control panel",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl-lifestyle-camp.jpg",
      "title": "Gl lifestyle camp",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl-lifestyle-storage.jpg",
      "title": "Gl lifestyle storage",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl-lifestyle-vehicle.jpg",
      "title": "Gl lifestyle vehicle",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl-lineup-black.jpg",
      "title": "Gl lineup black",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl-open-angle.jpg",
      "title": "Gl open angle",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl-open-top.jpg",
      "title": "Gl open top",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/gl/gallery/gl75-main-render.png",
      "title": "Gl75 main render",
      "text": "Product detail image."
    }
  ],
  "ax": [
    {
      "image": "/assets/products/ax/gallery/1.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/2.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/4.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/7.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/10.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax.png",
      "title": "Ax",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax30-front.png",
      "title": "Ax30 front",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax30-open.png",
      "title": "Ax30 open",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax30-side.png",
      "title": "Ax30 side",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax30-side2.png",
      "title": "Ax30 side2",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax40-front.png",
      "title": "Ax40 front",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax50-black.png",
      "title": "Ax50 black",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ax/gallery/ax50-side.png",
      "title": "Ax50 side",
      "text": "Product detail image."
    }
  ],
  "b": [
    {
      "image": "/assets/products/b/gallery/1.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/b/gallery/2.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/b/gallery/4.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/b/gallery/b20.png",
      "title": "B20",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/b/gallery/主图1.jpg",
      "title": "主图1",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/b/gallery/主图2.jpg",
      "title": "主图2",
      "text": "Product detail image."
    }
  ],
  "d": [],
  "ex": [
    {
      "image": "/assets/products/ex/gallery/2.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ex/gallery/623 拷贝.png",
      "title": "拷贝",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ex/gallery/E30.png",
      "title": "E30",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ex/gallery/E50.png",
      "title": "E50",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ex/gallery/EX50.png",
      "title": "EX50",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ex/gallery/细节图 拷贝.png",
      "title": "细节图 拷贝",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ex/gallery/细节图 拷贝2.png",
      "title": "细节图 拷贝2",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/ex/gallery/细节图 拷贝3.png",
      "title": "细节图 拷贝3",
      "text": "Product detail image."
    }
  ],
  "exm": [
    {
      "image": "/assets/products/exm/gallery/1.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/exm/gallery/6.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/exm/gallery/11.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/exm/gallery/623 拷贝.png",
      "title": "拷贝",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/exm/gallery/xj.2.png",
      "title": "Xj.2",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/exm/gallery/开瓶器更新2.png",
      "title": "开瓶器更新2",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/exm/gallery/开瓶器更新8.png",
      "title": "开瓶器更新8",
      "text": "Product detail image."
    }
  ],
  "k": [],
  "ke": [],
  "m": [
    {
      "image": "/assets/products/m/gallery/m45-black.png",
      "title": "M45 black",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/m45-front.png",
      "title": "M45 front",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/m45-open.png",
      "title": "M45 open",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/m45-side.png",
      "title": "M45 side",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/M45.14 拷贝.png",
      "title": "M45.14 拷贝",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/M45土色.2 拷贝.png",
      "title": "M45土色.2 拷贝",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/M45土色.3.png",
      "title": "M45土色.3",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/M系列双温效果图.png",
      "title": "M系列双温效果图",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/M页面图.png",
      "title": "M页面图",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/untitled.1488.png",
      "title": "Untitled.1488",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/双门.png",
      "title": "双门",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/屏幕.png",
      "title": "屏幕",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/把手.png",
      "title": "把手",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/拉杆（特写拉杆.png",
      "title": "拉杆（特写拉杆",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/电池.png",
      "title": "电池",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/车家两用太阳能.png",
      "title": "车家两用太阳能",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/m/gallery/轮子（特写轮子.png",
      "title": "轮子（特写轮子",
      "text": "Product detail image."
    }
  ],
  "s": [
    {
      "image": "/assets/products/S18/gallery/1.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/2.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/3.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/4.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/5.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/6.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/7.png",
      "title": "Product detail",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/0908banjin 拷贝.png",
      "title": "Banjin 拷贝",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/0915 拷贝.png",
      "title": "拷贝",
      "text": "Product detail image."
    },
    {
      "image": "/assets/products/S18/gallery/S18.20.png",
      "title": "S18.20",
      "text": "Product detail image."
    }
  ],
  "tf": []
};

```

### src/data/heroSlides.js

Size: 2128 bytes

```js
// TODO: Convert hero PNG backgrounds to optimized WebP/AVIF before production.
// TODO: Preload the first hero background in index.html for better LCP.
export const HERO_SLIDE_INTERVAL = null;

export const heroSlides = [
  {
    id: "s35",
    eyebrow: "Next-gen S Series.",
    badge: "NEW UPGRADE",
    title: "The second fridge.\nPowered differently.",
    text: "Runs on Makita batteries and other power tool batteries. A portable second fridge for home, workshop and weekend use.",
    background: "/assets/hero/s35-hero.png",
    position: "center center",
    cta: "Explore S Series",
    secondary: "View all products",
    target: "/products/s",
    detailUrl: "/products/s35",
    secondaryTarget: "/products",
    features: [
      "Tool battery compatible",
      "Fast cooling performance",
      "Quiet operation",
      "Built tough",
    ],
  },
  {
    id: "b-series",
    eyebrow: "B Series.",
    badge: "BEST SELLER",
    title: "Cold drinks.\nEvery weekend.",
    text: "B20 and B25 bring quiet compressor cooling into a compact form made for road trips, picnic days and everyday mobility.",
    background: "/assets/hero/b20-hero.png",
    position: "center center",
    cta: "Explore B Series",
    secondary: "View all products",
    target: "/products/b",
    detailUrl: "/products/b",
    secondaryTarget: "/products",
    features: [
      "20L / 25L capacity",
      "Compact portable design",
      "12V / 24V vehicle ready",
      "Quiet compressor cooling",
    ],
  },
  {
    id: "exm-series",
    eyebrow: "EXM Series.",
    badge: "WHEELED SERIES",
    title: "Roll farther.\nStay colder.",
    text: "A wheeled outdoor cooling platform for vehicle travel, coastal routes and longer days away from the city.",
    background: "/assets/hero/ex-hero.png",
    position: "center center",
    cta: "Explore EXM Series",
    secondary: "View all products",
    target: "/products/exm",
    detailUrl: "/products/exm",
    secondaryTarget: "/products",
    features: [
      "Wheeled mobility",
      "Pull-handle design",
      "Outdoor-ready shell",
      "Vehicle travel ready",
    ],
  },
];

```

### src/data/homepage.js

Size: 1603 bytes

```js
export const categoryCopy = [
  {
    name: "S35 (Upgraded)",
    label: "Battery Powered",
    image: "/assets/products/S35.png",
    fallback: "/assets/products/s18-orange.png",
  },
  {
    name: "B Series",
    label: "Compact Cooling",
    image: "/assets/products/b20.png",
  },
  {
    name: "GL Series",
    label: "Expedition Cooling",
    image: "/assets/products/gl.png",
  },
  {
    name: "EX Series",
    label: "Wheeled Mobility",
    image: "/assets/products/exm.png",
  },
];

export const businessEntries = [
  {
    title: "Custom Projects",
    text: "Develop cooling systems around your target market, capacity, power route and product form.",
    cta: "Explore custom projects",
    href: "#/custom-projects",
    target: "/custom-projects",
  },
  {
    title: "OEM / ODM Inquiry",
    text: "Start with an existing model, private-label request or new product direction.",
    cta: "Send inquiry",
    href: "#/oem-odm",
    target: "/oem-odm",
  },
  {
    title: "Capabilities & Support",
    text: "Find product documents, manuals, after-sales information and common service questions.",
    cta: "View capabilities",
    href: "#/capabilities",
    target: "/capabilities",
  },
];

export const projectSteps = [
  ["Brief", "Define target market, product series, capacity, price point and customization needs."],
  ["Proposal", "Confirm available platform, structure direction, MOQ, timeline and cost range."],
  ["Sample", "Build or prepare samples for testing, review and packaging checks."],
  ["Production", "Move into tooling, QC, packaging and repeatable supply."],
];

```

### src/data/productGallery.js

Size: 4421 bytes

```js
// This file is generated by scripts/generate-product-gallery.mjs.
// Run npm run generate:gallery after adding or deleting gallery images.

export const productGallery = {
  "gl": [
    {
      "image": "/assets/products/gl/gallery/gl-control-panel-close.jpg"
    },
    {
      "image": "/assets/products/gl/gallery/gl-detail-control-panel.png"
    },
    {
      "image": "/assets/products/gl/gallery/gl-lifestyle-camp.jpg"
    },
    {
      "image": "/assets/products/gl/gallery/gl-lifestyle-storage.jpg"
    },
    {
      "image": "/assets/products/gl/gallery/gl-lifestyle-vehicle.jpg"
    },
    {
      "image": "/assets/products/gl/gallery/gl-lineup-black.jpg"
    },
    {
      "image": "/assets/products/gl/gallery/gl-open-angle.jpg"
    },
    {
      "image": "/assets/products/gl/gallery/gl-open-top.jpg"
    },
    {
      "image": "/assets/products/gl/gallery/gl75-main-render.png"
    }
  ],
  "ax": [
    {
      "image": "/assets/products/ax/gallery/1.png"
    },
    {
      "image": "/assets/products/ax/gallery/2.png"
    },
    {
      "image": "/assets/products/ax/gallery/4.png"
    },
    {
      "image": "/assets/products/ax/gallery/7.png"
    },
    {
      "image": "/assets/products/ax/gallery/10.png"
    },
    {
      "image": "/assets/products/ax/gallery/ax.png"
    }
  ],
  "exm": [
    {
      "image": "/assets/products/exm/gallery/6.png"
    },
    {
      "image": "/assets/products/exm/gallery/11.png"
    },
    {
      "image": "/assets/products/exm/gallery/623 拷贝.png"
    },
    {
      "image": "/assets/products/exm/gallery/xj.2.png"
    },
    {
      "image": "/assets/products/exm/gallery/开瓶器更新2.png"
    },
    {
      "image": "/assets/products/exm/gallery/开瓶器更新8.png"
    }
  ],
  "b": [
    {
      "image": "/assets/products/b/gallery/1.png"
    },
    {
      "image": "/assets/products/b/gallery/2.png"
    },
    {
      "image": "/assets/products/b/gallery/4.png"
    },
    {
      "image": "/assets/products/b/gallery/b20.png"
    },
    {
      "image": "/assets/products/b/gallery/主图1.jpg"
    },
    {
      "image": "/assets/products/b/gallery/主图2.jpg"
    }
  ],
  "k": [],
  "tf": [],
  "m": [
    {
      "image": "/assets/products/m/gallery/m45-black.png"
    },
    {
      "image": "/assets/products/m/gallery/m45-open.png"
    },
    {
      "image": "/assets/products/m/gallery/m45-side.png"
    },
    {
      "image": "/assets/products/m/gallery/M45.14 拷贝.png"
    },
    {
      "image": "/assets/products/m/gallery/M45土色.2 拷贝.png"
    },
    {
      "image": "/assets/products/m/gallery/M45土色.3.png"
    },
    {
      "image": "/assets/products/m/gallery/M系列双温效果图.png"
    },
    {
      "image": "/assets/products/m/gallery/M页面图.png"
    },
    {
      "image": "/assets/products/m/gallery/untitled.1488.png"
    },
    {
      "image": "/assets/products/m/gallery/双门.png"
    },
    {
      "image": "/assets/products/m/gallery/屏幕.png"
    },
    {
      "image": "/assets/products/m/gallery/把手.png"
    },
    {
      "image": "/assets/products/m/gallery/拉杆（特写拉杆.png"
    },
    {
      "image": "/assets/products/m/gallery/电池.png"
    },
    {
      "image": "/assets/products/m/gallery/车家两用太阳能.png"
    },
    {
      "image": "/assets/products/m/gallery/轮子（特写轮子.png"
    }
  ],
  "ex": [
    {
      "image": "/assets/products/ex/gallery/2.png"
    },
    {
      "image": "/assets/products/ex/gallery/623 拷贝.png"
    },
    {
      "image": "/assets/products/ex/gallery/E30.png"
    },
    {
      "image": "/assets/products/ex/gallery/细节图 拷贝.png"
    },
    {
      "image": "/assets/products/ex/gallery/细节图 拷贝2.png"
    },
    {
      "image": "/assets/products/ex/gallery/细节图 拷贝3.png"
    }
  ],
  "s35": [],
  "s": [
    {
      "image": "/assets/products/S18/gallery/1.png"
    },
    {
      "image": "/assets/products/S18/gallery/3.png"
    },
    {
      "image": "/assets/products/S18/gallery/4.png"
    },
    {
      "image": "/assets/products/S18/gallery/5.png"
    },
    {
      "image": "/assets/products/S18/gallery/6.png"
    },
    {
      "image": "/assets/products/S18/gallery/7.png"
    },
    {
      "image": "/assets/products/S18/gallery/0915 拷贝.png"
    },
    {
      "image": "/assets/products/S18/gallery/S18.20.png"
    }
  ],
  "d": []
};

```

### src/data/productImageManifest.js

Size: 1983 bytes

```js
// This file is generated by scripts/generate-gallery-manifest.mjs.
// Run npm run dev or npm run preview after adding or deleting model images.

export const productImageManifest = {
  "gl": {
    "GL35": {
      "Black": "/assets/products/gl/models/gl35-black.png",
      "mung-bean-gray": "/assets/products/gl/models/gl35-sage.png"
    },
    "GL45": {
      "Black": "/assets/products/gl/models/gl45-black.png",
      "mung-bean-gray": "/assets/products/gl/models/gl45-sage.png"
    },
    "GL55": {
      "Black": "/assets/products/gl/models/gl55-black.png",
      "mung-bean-gray": "/assets/products/gl/models/gl55-sage.png"
    },
    "GL75": {
      "Black": "/assets/products/gl/models/gl75-black.png",
      "mung-bean-gray": "/assets/products/gl/models/gl75-sage.png"
    }
  },
  "ax": {
    "AX30": {
      "black": "/assets/products/ax/models/ax30-black.png",
      "champagne": "/assets/products/ax/models/ax30-champagne.png",
      "light-gray": "/assets/products/ax/models/ax30-light-gray.png"
    },
    "AX40": {
      "black": "/assets/products/ax/models/ax40-black.png",
      "champagne": "/assets/products/ax/models/ax40-champagne.png",
      "light-gray": "/assets/products/ax/models/ax40-light-gray.png"
    },
    "AX50": {
      "black": "/assets/products/ax/models/ax50-black.png",
      "champagne": "/assets/products/ax/models/ax50-champagne.png",
      "light-gray": "/assets/products/ax/models/ax50-light-gray.png"
    }
  },
  "b": {},
  "d": {},
  "ex": {},
  "exm": {},
  "k": {},
  "ke": {},
  "m": {
    "M35": {
      "black": "/assets/products/m/models/m35-black.png",
      "sage-green": "/assets/products/m/models/m35-sage.png"
    },
    "M45": {
      "black": "/assets/products/m/models/m45-black.png",
      "sage-green": "/assets/products/m/models/m45-sage.png"
    },
    "M55": {
      "black": "/assets/products/m/models/m55-black.png",
      "sage-green": "/assets/products/m/models/m55-sage.png"
    }
  },
  "s": {},
  "tf": {}
};

```

### src/data/products.js

Size: 66218 bytes

```js
// TODO: Remove or connect this copy object when language switching is finalized.
export const copy = {
  en: {
    nav: {
      products: "Products",
      allProducts: "All Products",
      development: "Development Projects",
      about: "About",
      contact: "Contact",
      language: "中文",
      request: "Start a project",
    },
    hero: {
      eyebrow: "Vehicle refrigeration systems",
      title: "Cold-chain equipment shaped for movement.",
      text: "Travel Science is the vehicle refrigeration product brand by Kelvcoop, building portable refrigerators, car fridge systems, and OEM/ODM projects for outdoor brands, vehicle platforms, and high-volume distributors.",
      primary: "Explore products",
      secondary: "View development capability",
      statA: "11",
      statALabel: "Product series",
      statB: "ISO9001 + CE CB RED RoHS",
      statBLabel: "Certified systems",
      statC: "Global",
      statCLabel: "Export ready",
    },
    sections: {
      seriesEyebrow: "Complete range",
      seriesTitle: "A product system from compact cabins to expedition boxes.",
      seriesText:
        "Each series is treated as a product platform: industrial design, structure, cooling performance, tooling, labels, packaging, and production can be adapted for your channel.",
      viewerEyebrow: "Interactive product viewer",
      viewerTitle: "Drag the product to inspect the form.",
      viewerText:
        "The detail page reserves a 3D/360 viewer. This prototype uses web-optimized multi-angle renders; when a compressed GLB or CAD-derived model is ready, the same position can become a full 3D model viewer.",
      projectsEyebrow: "DFM + OEM/ODM",
      projectsTitle: "From industrial design to mass production.",
      projectsText:
        "The development page turns your factory capability into a clear buyer journey: concept, mechanical design, prototype, validation, certification support, tooling, and assembly.",
      productsTitle: "All product series",
      productsText:
        "Filter by platform, compare models, then open a series page for specifications, scenes, details, and the 3D viewing position.",
      developmentTitle: "Development projects",
      developmentText:
        "A project-led page for buyers who care about design execution, factory control, and reliable launch.",
      contactTitle: "Build a new car refrigerator line with Travel Science.",
      contactText:
        "Send product targets, application scenarios, or a reference brief. The team can evaluate structure, cost, tooling, MOQ, and production path.",
    },
    ui: {
      openSeries: "Open series",
      viewAll: "View all products",
      details: "Series details",
      models: "Models",
      highlights: "Highlights",
      spec: "Specification focus",
      viewer: "360 viewer",
      drag: "Drag / swipe to rotate",
      auto: "Auto",
      manual: "Manual",
      available: "Web-ready 360",
      reserved: "3D slot reserved",
      inquiry: "Request quote",
      contactEmail: "info@kelvcoop.com",
      filterAll: "All",
      capacity: "Capacity",
      voltage: "Voltage",
      cooling: "Cooling",
      application: "Application",
      next: "Next step",
    },
  },
  zh: {
    nav: {
      products: "产品",
      allProducts: "全部产品",
      development: "开发项目",
      about: "关于我们",
      contact: "联系",
      language: "EN",
      request: "启动项目",
    },
    hero: {
      eyebrow: "车载制冷系统",
      title: "为移动场景设计的冷链装备。",
      text: "Travel Science 是 Kelvcoop 科旅共创旗下车载制冷产品品牌，专注车载冰箱、户外便携制冷设备与 OEM/ODM 开发项目，为户外品牌、车载平台和渠道客户提供设计到量产的完整能力。",
      primary: "查看产品",
      secondary: "查看开发能力",
      statA: "11",
      statALabel: "产品系列",
      statB: "ISO9001 + CE CB RED RoHS",
      statBLabel: "认证体系",
      statC: "全球",
      statCLabel: "出口支持",
    },
    sections: {
      seriesEyebrow: "全系列产品",
      seriesTitle: "从紧凑座舱到越野长途补给箱。",
      seriesText:
        "每个系列都按产品平台打造：工业设计、结构、制冷性能、模具、标签、包装和生产配置，都可以按客户渠道继续开发。",
      viewerEyebrow: "互动产品查看",
      viewerTitle: "拖动产品，立体查看外观。",
      viewerText:
        "系列详情页中已经保留 3D/360 查看位。当前版本使用网页轻量化多角度渲染图；后续有压缩后的 GLB 或 CAD 模型，可以在同一位置替换成完整 3D 查看器。",
      projectsEyebrow: "DFM + OEM/ODM",
      projectsTitle: "从工业设计到稳定量产。",
      projectsText:
        "开发项目页会把工厂能力转化成客户能理解的项目流程：概念、结构设计、样机、测试、认证支持、开模、组装和交付。",
      productsTitle: "全部产品系列",
      productsText:
        "按平台筛选、比较型号，再进入系列详情页查看规格、场景、细节和 3D 查看位。",
      developmentTitle: "开发项目",
      developmentText:
        "这个页面面向重视设计落地、工厂管控和可靠上市的 B 端客户。",
      contactTitle: "和 Travel Science 一起开发新的车载冰箱产品线。",
      contactText:
        "发送目标价格、应用场景或参考产品，我们可以评估结构、成本、模具、MOQ 和量产路径。",
    },
    ui: {
      openSeries: "进入系列",
      viewAll: "查看全部产品",
      details: "系列详情",
      models: "型号",
      highlights: "核心亮点",
      spec: "规格重点",
      viewer: "360 查看器",
      drag: "拖动 / 滑动旋转",
      auto: "自动",
      manual: "手动",
      available: "已接入 360",
      reserved: "已预留 3D 位",
      inquiry: "获取报价",
      contactEmail: "info@kelvcoop.com",
      filterAll: "全部",
      capacity: "容量",
      voltage: "电压",
      cooling: "制冷",
      application: "应用",
      next: "下一步",
    },
  },
};

export const products = [
  {
    id: "gl",
    name: "GL Series",
    nameZh: "GL 系列",
    models: ["GL35", "GL45", "GL55", "GL75"],
    tag: "expedition",
    image: "/assets/products/gl/models/gl35-black.png",
    cardImage: "/assets/products/productcollectionspage-images/gl-card.webp",
    alt: "GL Series expedition portable fridge for overlanding SUV travel and larger cold storage",
    defaultModel: "GL35",
    defaultColor: "Black",
    colorOptions: [
      { name: "Black", value: "Black", swatch: "#121211" },
      { name: "Beige Gray", value: "beige-gray", swatch: "#c8c1b4" },
      { name: "Mung Bean Gray / 绿豆沙", value: "mung-bean-gray", swatch: "#9da58e" },
    ],
    modelOptions: ["GL35", "GL45", "GL55", "GL75"],
    productImages: {
      GL35: {
        Black: "/assets/products/gl/models/gl35-black.png",
        "mung-bean-gray": "/assets/products/gl/models/gl35-sage.png",
      },
      GL45: {
        Black: "/assets/products/gl/models/gl45-black.png",
        "mung-bean-gray": "/assets/products/gl/models/gl45-sage.png",
      },
      GL55: {
        Black: "/assets/products/gl/models/gl55-black.png",
        "mung-bean-gray": "/assets/products/gl/models/gl55-sage.png",
      },
      GL75: {
        Black: "/assets/products/gl/models/gl75-black.png",
      },
    },
    seo: {
      title: "GL Series Expedition Portable Fridge | Travel Science",
      description:
        "GL Series expedition cooling systems for overlanding, SUV travel, pickup routes and larger cold-storage needs.",
      keywords: [
        "expedition portable fridge",
        "overlanding fridge",
        "large car fridge",
        "camping compressor fridge",
      ],
    },
    viewer: {
      type: "frames",
      count: 50,
      path: "/assets/360/gl55/frame-",
      ext: ".jpg",
      label: "GL55 360",
    },
    capacity: "35L - 75L",
    voltage: "DC 12/24V, AC adapter optional",
    cooling: "Compressor cooling",
    application: "Overlanding, SUV, pickup, long-distance camping",
    applicationZh: "越野、自驾、皮卡、长途露营",
    intro:
      "A rugged dual-lid platform with textured shell details, trolley mobility, and a strong outdoor equipment language.",
    introZh:
      "偏越野装备感的双门平台，带耐磨纹理、轮组和拉杆结构，适合大容量户外场景。",
    highlights: [
      "Dual-zone layout options",
      "Trolley structure for heavy loads",
      "High texture industrial shell",
      "OEM color, label, and packaging ready",
    ],
    highlightsZh: [
      "可做双温区配置",
      "拉杆轮组适合大容量搬运",
      "高质感工业外壳",
      "支持 OEM 配色、贴标和包装",
    ],
    modelDetails: [
      {
        id: "gl35",
        name: "GL35",
        capacity: "35L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: "-20C to 20C / -4F to 68F",
        productDimensions: "685mm x 410mm x 390mm",
        packingSize: "730mm x 495mm x 460mm",
        netWeight: "14.4kg",
        grossWeight: "17.3kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 175/360",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
      {
        id: "gl45",
        name: "GL45",
        capacity: "45L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: "-20C to 20C / -4F to 68F",
        productDimensions: "685mm x 410mm x 450mm",
        packingSize: "730mm x 495mm x 520mm",
        netWeight: "14.8kg",
        grossWeight: "18.1kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 140/360",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
      {
        id: "gl55",
        name: "GL55",
        capacity: "55L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: "-20C to 20C / -4F to 68F",
        productDimensions: "685mm x 410mm x 510mm",
        packingSize: "730mm x 495mm x 580mm",
        netWeight: "15.3kg",
        grossWeight: "18.3kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 140/288",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
      {
        id: "gl75",
        name: "GL75",
        capacity: "75L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: "-20C to 20C / -4F to 68F",
        productDimensions: "729mm x 410mm x 627mm",
        packingSize: "735mm x 495mm x 705mm",
        netWeight: "16.3kg",
        grossWeight: "20.6kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 96/207",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
    ],
    gallery: [
      {
        image: "/assets/products/gl/gallery/gl-lifestyle-camp.jpg",
        title: "Outdoor camp setting",
        text: "GL Series shaped for extended outdoor stays and larger cold-storage needs.",
      },
      {
        image: "/assets/products/gl/gallery/gl-lifestyle-vehicle.jpg",
        title: "Vehicle storage",
        text: "Designed to move naturally between SUV storage and outdoor use.",
      },
      {
        image: "/assets/products/gl/gallery/gl-lifestyle-storage.jpg",
        title: "Cold storage in use",
        text: "Dual-zone storage for drinks, fruit and longer travel supplies.",
      },
      {
        image: "/assets/products/gl/gallery/gl-lineup-black.jpg",
        title: "Four-capacity lineup",
        text: "GL35, GL45, GL55 and GL75 cover different route and storage needs.",
      },
      {
        image: "/assets/products/gl/gallery/gl-angle-black.jpg",
        title: "Front angle",
        text: "Rugged proportions with a strong outdoor equipment presence.",
      },
      {
        image: "/assets/products/gl/gallery/gl-open-angle.jpg",
        title: "Open storage",
        text: "Dual-lid access for larger cold-storage needs.",
      },
      {
        image: "/assets/products/gl/gallery/gl-open-top.jpg",
        title: "Dual-zone layout",
        text: "Independent compartments support flexible storage and operation.",
      },
      {
        image: "/assets/products/gl/gallery/gl-control-panel-close.jpg",
        title: "Control panel",
        text: "Clear operation for vehicle travel and outdoor use.",
      },
      {
        image: "/assets/products/gl/gallery/gl-detail-control-panel.png",
        title: "Control detail",
        text: "Close detail view of the control and display area.",
      },
      {
        image: "/assets/products/gl/gallery/gl-side-profile-01.jpg",
        title: "Side profile",
        text: "Side form and structure for vehicle and outdoor handling.",
      },
      {
        image: "/assets/products/gl/gallery/gl-side-profile-02.jpg",
        title: "Side profile detail",
        text: "Exterior shell detail for rugged outdoor use.",
      },
      {
        image: "/assets/products/gl/gallery/gl-side-profile-03.jpg",
        title: "Handle-side profile",
        text: "Side structure and handle detail for larger-capacity movement.",
      },
      {
        image: "/assets/products/gl/gallery/gl75-main-render.png",
        title: "GL75 render",
        text: "Large-capacity GL75 configuration for extended cold-storage needs.",
      },
    ],
    featureDetails: [
      {
        title: "Dual-zone layout options",
        text: "Flexible storage with independent temperature control.",
      },
      {
        title: "Two-door reversible design",
        text: "Dual-door access supports flexible outdoor storage and operation.",
      },
      {
        title: "Car and home dual use",
        text: "Supports vehicle and home use through DC/AC power options.",
      },
      {
        title: "Battery protection system",
        text: "Three-stage battery protection helps prevent vehicle battery drain.",
      },
      {
        title: "Bluetooth APP connection",
        text: "App connectivity supports easier temperature control and monitoring.",
      },
      {
        title: "Low-noise operation",
        text: "Low vibration and low noise below 45dB.",
      },
      {
        title: "High texture industrial shell",
        text: "Durable exterior built to handle outdoor use.",
      },
      {
        title: "OEM color, label and packaging ready",
        text: "Support for brand customization and packaging solutions.",
      },
    ],
    materials: [
      { part: "Housing", material: "PE" },
      { part: "Frame", material: "ABS" },
      { part: "Door", material: "PE" },
      { part: "Compressor Cabin Cover", material: "ABS" },
      { part: "Handle", material: "Metal + Plastic for 35L / 45L / 55L; Plastic for 75L" },
      { part: "Inner Liner", material: "Embossed Aluminum" },
      { part: "Inner Base", material: "HIPS" },
      { part: "Optional Part", material: "Basket" },
    ],
    useCases: [
      {
        title: "Overlanding",
        text: "Built for longer outdoor routes and larger cold-storage needs.",
      },
      {
        title: "SUV travel",
        text: "Designed to move between vehicle storage and outdoor use.",
      },
      {
        title: "Pickup routes",
        text: "Strong storage capacity for work, travel and equipment-based use.",
      },
      {
        title: "Long-distance camping",
        text: "Reliable cooling for extended outdoor stays.",
      },
    ],
    certifications: ["CE", "CB", "RoHS", "RED"],
    documents: {
      brochure: "/assets/downloads/travel-science-brochure.pdf",
    },
    inquiryFocus: {
      title: "Start a GL Series project.",
      text: "Request specifications, customization options or distributor details for GL35, GL45, GL55 and GL75.",
      button: "Request GL Series details",
    },
  },
  {
    id: "ax",
    name: "AX Series",
    nameZh: "AX 系列",
    models: ["AX30", "AX40", "AX50"],
    tag: "vehicle",
    image: "/assets/products/ax.png",
    cardImage: "/assets/products/productcollectionspage-images/ax-card.webp",
    capacity: "30L - 50L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Vehicle cabins, light camping, lifestyle channels",
    applicationZh: "车内、轻露营、生活方式渠道",
    intro:
      "A sharp, compact platform with clean face geometry and a modern control panel.",
    introZh: "造型利落的紧凑平台，正面线条清晰，适合更年轻的车生活渠道。",
    highlights: [
      "Clean front-face design",
      "Compact footprint",
      "Responsive control display",
      "Good for private-label programs",
    ],
    highlightsZh: [
      "正面造型识别度强",
      "占用空间紧凑",
      "显示控制区域清晰",
      "适合贴牌和渠道定制",
    ],
  },
  {
    id: "exm",
    name: "EXM Series",
    nameZh: "EXM 系列",
    models: ["EXM30", "EXM40", "EXM50"],
    tag: "vehicle",
    image: "/assets/products/exm.png",
    cardImage: "/assets/products/productcollectionspage-images/exm-card.webp",
    capacity: "30L - 50L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Export retail programs and customized front panels",
    applicationZh: "出口零售项目、定制面板",
    intro:
      "A platform optimized for export channel variation, front labels, accessories, and practical retail configurations.",
    introZh:
      "为出口渠道变化、前面贴、配件和实用零售配置优化的平台。",
    highlights: [
      "Export-ready label work",
      "Accessory planning",
      "Cost and function balance",
      "Multi-market packaging route",
    ],
    highlightsZh: [
      "出口标签适配",
      "配件规划清晰",
      "成本和功能平衡",
      "可做多市场包装",
    ],
    documents: {
      manual: "/assets/downloads/exm-series-manual.pdf",
    },
  },
  {
    id: "b",
    name: "B Series",
    nameZh: "B 系列",
    models: ["B20", "B25"],
    tag: "compact",
    image: "/assets/products/b20.png",
    cardImage: "/assets/products/productcollectionspage-images/b-card.webp",
    capacity: "20L - 25L",
    voltage: "DC 12/24V",
    cooling: "Compact compressor platform",
    application: "Small cars, day trips, office-to-car use",
    applicationZh: "小车、短途、办公到车载使用",
    intro:
      "A small format series designed for daily mobility and fast stock programs.",
    introZh: "面向日常移动使用的小体积系列，适合快速铺货和轻量渠道。",
    highlights: [
      "Small-space friendly",
      "Simple carrying logic",
      "Fast color and label variation",
      "Useful entry-level platform",
    ],
    highlightsZh: [
      "适合小空间",
      "携带逻辑简单",
      "配色和贴标变化快",
      "适合入门价位平台",
    ],
  },
  {
    id: "k",
    name: "K Series",
    nameZh: "K 系列",
    models: ["K15", "K20"],
    tag: "compact",
    image: "/assets/products/k.jpg",
    cardImage: "/assets/products/productcollectionspage-images/k-card.webp",
    capacity: "15L - 20L",
    voltage: "DC 12/24V",
    cooling: "Portable cooling",
    application: "Compact trunk, beverage storage, short-distance travel",
    applicationZh: "后备箱、饮品、短途出行",
    intro:
      "A compact product line for lighter scenarios where size, price, and portability matter.",
    introZh: "更轻量的便携产品线，适合尺寸、价格和便携性优先的场景。",
    highlights: [
      "Compact exterior",
      "Easy retail positioning",
      "Quick customization route",
      "Good for online channels",
    ],
    highlightsZh: [
      "外形紧凑",
      "零售定位清晰",
      "定制路径短",
      "适合线上渠道",
    ],
  },
  {
    id: "ke",
    name: "KE Series",
    nameZh: "KE 系列",
    models: ["KE25", "KE30", "KE40", "KE50", "KE75"],
    tag: "classic",
    image: "/assets/products/ke.jpg",
    capacity: "25L - 75L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Wide-capacity programs and distributor lineups",
    applicationZh: "宽容量渠道系列、经销商产品线",
    intro:
      "A broad capacity family for distributors who need a complete shelf from small to large formats.",
    introZh: "宽容量产品家族，适合经销商从小到大完整铺线。",
    highlights: [
      "Broad size coverage",
      "Useful for distributor planning",
      "Clear price ladder",
      "Scalable production mix",
    ],
    highlightsZh: [
      "容量覆盖广",
      "适合经销商规划",
      "价格梯度清晰",
      "生产组合可扩展",
    ],
  },
  {
    id: "tf",
    name: "TF Series",
    nameZh: "TF 系列",
    models: ["TF35", "TF45", "TF55"],
    tag: "classic",
    image: "/assets/products/tf.jpg",
    cardImage: "/assets/products/productcollectionspage-images/tf-card.webp",
    capacity: "35L - 55L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Classic car fridge channels and fleet use",
    applicationZh: "传统车载冰箱渠道、车队使用",
    intro:
      "A classic upright shell language for stable, familiar refrigerator programs.",
    introZh: "经典箱体语言，适合需要稳定、熟悉造型的车载冰箱项目。",
    highlights: [
      "Classic configuration",
      "Straightforward specification",
      "Stable channel familiarity",
      "Reliable for repeat orders",
    ],
    highlightsZh: [
      "经典配置",
      "规格清晰直接",
      "渠道接受度高",
      "适合持续复购",
    ],
  },
  {
    id: "m",
    name: "M Series",
    nameZh: "M 系列",
    models: ["M35", "M45", "M55"],
    tag: "expedition",
    image: "/assets/products/m.png",
    cardImage: "/assets/products/productcollectionspage-images/m-card.webp",
    viewer: {
      type: "frames",
      count: 38,
      path: "/assets/360/m55/frame-",
      ext: ".jpg",
      label: "M55 360",
    },
    capacity: "35L - 55L",
    voltage: "DC 12/24V",
    cooling: "Dual-zone compressor platform",
    application: "Premium outdoor, mobile camp, long-haul self-driving",
    applicationZh: "高端户外、移动营地、长途自驾",
    intro:
      "A premium mobile platform with wheel, pull handle, battery-ready architecture, and dual-zone layout options.",
    introZh:
      "高端移动平台，带轮组、拉杆、电池扩展思路和双温区配置，适合户外旗舰线。",
    highlights: [
      "Premium mobile structure",
      "Dual-door and dual-zone options",
      "Battery accessory potential",
      "Strong detail-storytelling value",
    ],
    highlightsZh: [
      "高端移动结构",
      "双门双温区选择",
      "具备电池配件扩展潜力",
      "细节展示价值高",
    ],
  },
  {
    id: "ex",
    name: "EX Series",
    nameZh: "EX 系列",
    models: ["EX30", "EX40", "EX50"],
    tag: "vehicle",
    image: "/assets/products/ex.png",
    cardImage: "/assets/products/productcollectionspage-images/ex-card.webp",
    imageClass: "product-card-image--ex",
    capacity: "30L - 50L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Mainstream car refrigerator distribution",
    applicationZh: "主流车载冰箱渠道",
    intro:
      "A proven family for volume programs, balancing cost control, production stability, and solid industrial styling.",
    introZh:
      "适合批量渠道的成熟平台，在成本、生产稳定性和工业造型之间取得平衡。",
    highlights: [
      "Mass-production friendly structure",
      "Multiple capacity options",
      "Stable compressor configuration",
      "Flexible brand panel customization",
    ],
    highlightsZh: [
      "结构适合稳定量产",
      "多容量选择",
      "压缩机制冷配置成熟",
      "品牌面贴定制灵活",
    ],
    documents: {
      manual: "/assets/downloads/ex-series-manual.pdf",
    },
  },
  {
    id: "s35",
    name: "S35",
    nameZh: "S35",
    models: ["S35"],
    tag: "project",
    image: "/assets/products/S35.png",
    cardImage: "/assets/products/productcollectionspage-images/s-card.webp",
    capacity: "35L",
    voltage: "DC 12/24V, Makita 18V LXT and tool-battery route",
    cooling: "Portable compressor / battery-compatible platform",
    application: "Camping, overlanding, outdoor work, tool-battery powered mobility",
    applicationZh: "露营、越野、户外工作、电动工具电池移动供电",
    intro:
      "An upgraded S platform with tool-battery compatibility, quiet compressor cooling and a compact black industrial design.",
    introZh:
      "升级版 S 平台，支持工具电池供电，具备安静压缩机制冷和紧凑黑色工业设计。",
    highlights: [
      "Makita 18V LXT compatible route",
      "Tool-battery powered outdoor use",
      "Compact compressor cooling",
      "Industrial black exterior",
    ],
    highlightsZh: [
      "可走 Makita 18V LXT 兼容路线",
      "适合工具电池户外供电",
      "紧凑压缩机制冷",
      "黑色工业外观",
    ],
  },
  {
    id: "s",
    name: "S18",
    nameZh: "S18",
    models: ["S18"],
    tag: "project",
    image: "/assets/products/s18-orange.png",
    cardImage: "/assets/products/productcollectionspage-images/s-card.webp",
    capacity: "18L",
    voltage: "DC 12/24V, battery project optional",
    cooling: "Portable compressor / project platform",
    application: "Project development, compact outdoor concept, battery route",
    applicationZh: "项目开发、紧凑户外概念、电池方案",
    intro:
      "A compact project platform with strong CMF potential and a clear position for battery-powered outdoor use.",
    introZh:
      "具备强 CMF 潜力的紧凑项目平台，可继续发展电池户外方案。",
    highlights: [
      "Project-friendly platform",
      "Battery concept extension",
      "Compact outdoor positioning",
      "GLB model exists, web compression recommended",
    ],
    highlightsZh: [
      "适合项目开发",
      "可延展电池方案",
      "紧凑户外定位",
      "已有 GLB 模型，建议压缩后上线",
    ],
  },
  {
    id: "d",
    name: "D Series",
    nameZh: "D 系列",
    models: ["D9"],
    tag: "compact",
    image: "/assets/products/d.jpg",
    cardImage: "/assets/products/productcollectionspage-images/d-card.webp",
    capacity: "9L",
    voltage: "DC 12/24V",
    cooling: "Compact cooling",
    application: "Seat-side storage, drinks, medication or daily carry",
    applicationZh: "座椅旁、饮品、药品或日常携带",
    intro:
      "A small product family for seat-side and short-distance usage, useful for entry SKU planning.",
    introZh: "小容量产品线，适合座椅旁和短距离使用，可作为入门 SKU。",
    highlights: [
      "Smallest footprint",
      "Color variation friendly",
      "Easy to explain at retail",
      "Good add-on product",
    ],
    highlightsZh: [
      "占用空间最小",
      "适合多配色",
      "零售说明简单",
      "适合做配套产品",
    ],
  },
];

const mSeriesColors = [
  { name: "Black", value: "black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Sage Green", value: "sage-green", swatch: "#879078", swatches: ["#879078"] },
];

const bSeriesColors = [
  { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Black & Silver", value: "black-silver", swatch: "#08090a", swatches: ["#08090a", "#c7c8c6"] },
  { name: "Green", value: "green", swatch: "#879078", swatches: ["#879078"] },
  { name: "Dark Gray & Light Gray", value: "dark-gray-light-gray", swatch: "#555755", swatches: ["#555755", "#c8c8c3"] },
];

const axSeriesColors = [
  { name: "Black", value: "black", swatch: "#2e2f2f", swatches: ["#2e2f2f"] },
  { name: "Champagne", value: "champagne", swatch: "#c8c1b4", swatches: ["#c8c1b4"] },
  { name: "Light Gray", value: "light-gray", swatch: "#d4d5d2", swatches: ["#d4d5d2"] },
];

const dSeriesColors = [
  { name: "Black & Gray", value: "black-gray", swatch: "#08090a", swatches: ["#08090a", "#8d8f8c"] },
  { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Mung Bean Gray", value: "mung-bean-gray", swatch: "#9da58e", swatches: ["#9da58e"] },
];

const exSeriesColors = [
  { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Black & Beige Gray", value: "black-beige-gray", swatch: "#08090a", swatches: ["#08090a", "#c8c1b4"] },
  { name: "Blue Gray & Beige Gray", value: "blue-gray-beige-gray", swatch: "#6f7f8d", swatches: ["#6f7f8d", "#c8c1b4"] },
];

function modelColorImages(models, colors, fallbackImage) {
  return Object.fromEntries(
    models.map((model) => [
      model,
      Object.fromEntries(colors.map((color) => [color.value, fallbackImage])),
    ]),
  );
}

const productDetailEnhancements = {
  ax: {
    defaultModel: "AX30",
    defaultColor: "black",
    colorOptions: axSeriesColors,
    modelOptions: ["AX30", "AX40", "AX50"],
    productImages: {
      AX30: {
        black: "/assets/products/ax/models/ax30-black.png",
        champagne: "/assets/products/ax/models/ax30-champagne.png",
        "light-gray": "/assets/products/ax/models/ax30-light-gray.png",
      },
      AX40: {
        black: "/assets/products/ax/models/ax40-black.png",
        champagne: "/assets/products/ax/models/ax40-champagne.png",
        "light-gray": "/assets/products/ax/models/ax40-light-gray.png",
      },
      AX50: {
        black: "/assets/products/ax/models/ax50-black.png",
        champagne: "/assets/products/ax/models/ax50-champagne.png",
        "light-gray": "/assets/products/ax/models/ax50-light-gray.png",
      },
    },
    seo: {
      title: "AX Series Portable Compressor Fridge | Travel Science",
      description:
        "AX Series portable compressor fridges for compact cooling, export channel variation, private label and product range planning.",
      keywords: [
        "portable compressor fridge",
        "compact car fridge",
        "AX30 portable fridge",
        "private label car fridge",
        "export portable fridge",
        "OEM portable fridge",
      ],
    },
    modelDetails: [
      modelDetail("ax30", "AX30", "30L", "DC 12/24V", "Compressor cooling", "TBD", "665 x 380 x 390 mm", "695 x 440 x 427 mm", "16.8 kg", "21.7 kg", "60W", "20GP/40HQ: 200/420", "Compact portable cooling for vehicle travel and distributor product ranges"),
      modelDetail("ax40", "AX40", "40L", "DC 12/24V", "Compressor cooling", "TBD", "665 x 380 x 480 mm", "695 x 440 x 497 mm", "18.8 kg", "22.1 kg", "60W", "20GP/40HQ: 160/420", "Compact portable cooling for vehicle travel and distributor product ranges"),
      modelDetail("ax50", "AX50", "50L", "DC 12/24V", "Compressor cooling", "TBD", "665 x 380 x 550 mm", "695 x 440 x 567 mm", "20.8 kg", "23.8 kg", "60W", "20GP/40HQ: 120/336", "Compact portable cooling for vehicle travel and distributor product ranges"),
    ],
    gallery: [
      {
        image: "/assets/products/ax/gallery/ax30-open.png",
        title: "Open storage",
        text: "Dual-lid access for compact portable cooling.",
      },
      {
        image: "/assets/products/ax/gallery/ax40-front.png",
        title: "Compact exterior",
        text: "Clean face geometry for vehicle travel and channel programs.",
      },
      {
        image: "/assets/products/ax/gallery/ax50-side.png",
        title: "Side profile",
        text: "Capacity options built around the same product language.",
      },
      {
        image: "/assets/products/ax/gallery/ax50-black.png",
        title: "Dark configuration",
        text: "Color routes for private-label and distributor programs.",
      },
    ],
    featureDetails: [
      feature("Cooling system", "Compressor cooling for compact vehicle and outdoor use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Product range", "30L / 40L / 50L capacity options for distributor planning."),
      feature("Private label", "Color, label, packaging and documentation support."),
    ],
    materials: [
      material("Housing", "Pre-coated steel"),
      material("Frame", "ABS"),
      material("Door", "ABS + glass"),
      material("Inner Liner", "Embossed aluminum"),
      material("Inner Base", "HIPS"),
      material("Handle", "ABS"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Distributor product range", "Three capacity options for product range planning."),
      useCase("Vehicle travel", "Portable cold storage for road trips and daily use."),
      useCase("Outdoor cooling", "Compressor cooling for camping and weekend use."),
      useCase("Private label projects", "Product platform for brand customization and packaging support."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("AX Series", "Send target model, quantity, market and private-label requirements for AX30, AX40 or AX50."),
  },
  exm: {
    defaultModel: "EXM30",
    defaultColor: "all-black",
    colorOptions: exSeriesColors,
    modelOptions: ["EXM30", "EXM40", "EXM50"],
    productImages: {
      EXM30: {},
      EXM40: {},
      EXM50: {},
    },
    seo: {
      title: "EXM Series Export Portable Fridge | Travel Science",
      description:
        "EXM Series portable compressor fridges for export retail programs, customized front panels, accessories and multi-market configurations.",
      keywords: [
        "export portable fridge",
        "customized front panel fridge",
        "portable compressor fridge",
        "retail car fridge program",
        "DC 12V 24V car fridge",
      ],
    },
    modelDetails: [
      modelDetail("exm30", "EXM30", "30L", "DC 12/24V", "Compressor cooling", "TBD", "649 x 423 x 409 mm", "692 x 462 x 452 mm", "13.5 kg", "16.8 kg", "60W", "20GP/40HQ: 185/380", "Export retail programs, customized front panels and vehicle cooling"),
      modelDetail("exm40", "EXM40", "40L", "DC 12/24V", "Compressor cooling", "TBD", "649 x 423 x 489 mm", "692 x 462 x 532 mm", "14.5 kg", "18 kg", "60W", "20GP/40HQ: 148/304", "Export retail programs, customized front panels and vehicle cooling"),
      modelDetail("exm50", "EXM50", "50L", "DC 12/24V", "Compressor cooling", "TBD", "649 x 423 x 569 mm", "692 x 462 x 612 mm", "15.5 kg", "19.5 kg", "60W", "20GP/40HQ: 111/228", "Export retail programs, customized front panels and vehicle cooling"),
    ],
    gallery: galleryFromImage("/assets/products/exm.png", "Export-ready body platform for retail configuration."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for export retail configurations."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Channel configuration", "Front label, accessory and packaging planning."),
      feature("Capacity options", "30L / 40L / 50L capacity options."),
    ],
    materials: [
      material("Housing", "TBD"),
      material("Frame", "TBD"),
      material("Door", "TBD"),
      material("Front Panel", "TBD"),
      material("Handle", "TBD"),
      material("Inner Liner", "TBD"),
      material("Inner Base", "TBD"),
    ],
    useCases: [
      useCase("Export retail programs", "Portable cooling platform for multi-market retail configurations."),
      useCase("Vehicle travel", "Compressor cooling for road trips and vehicle use."),
      useCase("Brand customization", "Front label, color, packaging and accessory planning."),
      useCase("Distributor range planning", "30L / 40L / 50L range for channel lineup planning."),
    ],
    certifications: ["TBD"],
    documents: {
      manual: "/assets/downloads/exm-series-manual.pdf",
    },
    inquiryFocus: inquiry("EXM Series", "Send target model, quantity, market, front-label and packaging requirements for EXM Series."),
  },
  b: {
    defaultModel: "B20",
    defaultColor: "all-black",
    colorOptions: bSeriesColors,
    modelOptions: ["B20", "B25"],
    productImages: {
      B20: Object.fromEntries(bSeriesColors.map((color) => [color.value, "/assets/products/b20.png"])),
      B25: Object.fromEntries(bSeriesColors.map((color) => [color.value, "/assets/products/b/b25.png"])),
    },
    seo: {
      title: "B Series Compact Portable Fridge | Travel Science",
      description:
        "B20 and B25 compact compressor fridges for road trips, picnic days, vehicle travel and everyday portable cooling.",
      keywords: [
        "compact portable fridge",
        "small car fridge",
        "20L portable fridge",
        "25L portable fridge",
        "camping compressor fridge",
        "DC 12V 24V car fridge",
      ],
    },
    modelDetails: [
      modelDetail("b20", "B20", "20L", "DC 12/24V", "Compressor cooling", "Down to -20C / -4F", "457 x 308 x 368 mm", "525 x 355 x 425 mm", "8.4 kg", "10.3 kg", "60W", "20GP/40HQ: 355/876", "Road trips, picnic days, compact vehicle use and daily portable cooling"),
      modelDetail("b25", "B25", "25L", "DC 12/24V", "Compressor cooling", "Down to -20C / -4F", "522 x 308 x 368 mm", "580 x 355 x 425 mm", "9.1 kg", "11.2 kg", "60W", "20GP/40HQ: 300/762", "Road trips, picnic days, compact vehicle use and daily portable cooling"),
    ],
    gallery: galleryFromImage("/assets/products/b20.png", "Compact body layout for vehicle storage and portable use."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for compact portable use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Storage direction", "20L / 25L compact capacity."),
      feature("OEM / ODM", "Color, logo, label, packaging and documentation support."),
    ],
    materials: standardTbdMaterials(),
    useCases: [
      useCase("Road trips", "Compact cooling for drinks and food during short vehicle travel."),
      useCase("Picnic days", "Easy-to-carry cooling for weekend outdoor use."),
      useCase("Small vehicles", "Compact size for limited vehicle storage space."),
      useCase("Daily use", "Portable cooling for everyday movement between home, car and outdoor use."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("B Series", "Send target model, quantity, market and customization needs for B20 or B25."),
  },
  k: {
    seo: {
      title: "K Series Compact Portable Fridge | Travel Science",
      description:
        "K15 and K20 compact portable cooling products for trunk storage, beverages, short-distance travel and online retail channels.",
      keywords: [
        "compact portable fridge",
        "K15 portable fridge",
        "K20 portable fridge",
        "beverage car fridge",
        "short-distance travel fridge",
        "online channel portable fridge",
      ],
    },
    modelDetails: [
      modelDetail("k15", "K15", "15L", "DC 12/24V", "Portable cooling", "TBD", "597 x 320 x 270 mm", "625 x 370 x 330 mm", "11 kg", "14 kg", "60W", "392/812/928 pcs", "Compact trunk, beverage storage and short-distance travel"),
      modelDetail("k20", "K20", "20L", "DC 12/24V", "Portable cooling", "TBD", "597 x 320 x 333 mm", "625 x 370 x 395 mm", "12 kg", "15 kg", "60W", "336/696/696 pcs", "Compact trunk, beverage storage and short-distance travel"),
    ],
    gallery: galleryFromImage("/assets/products/k.jpg", "Compact exterior for short-distance portable use."),
    featureDetails: [
      feature("Cooling system", "Portable cooling for compact trunk and beverage storage."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Channel direction", "Online retail and compact portable channels."),
      feature("OEM / ODM", "Color, logo, packaging and documentation support."),
    ],
    materials: standardTbdMaterials(),
    useCases: [
      useCase("Compact trunk", "Cooling for limited vehicle storage space."),
      useCase("Beverage storage", "Small-capacity storage for drinks and daily items."),
      useCase("Short-distance travel", "Portable cooling for short road trips."),
      useCase("Online channels", "Compact model for clear retail positioning."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("K Series", "Send target model, quantity, market and customization needs for K15 or K20."),
  },
  ke: {
    seo: {
      title: "KE Series Wide-Capacity Portable Fridge | Travel Science",
      description:
        "KE Series portable compressor fridges for wide-capacity distributor programs and complete product lineups.",
      keywords: [
        "wide capacity portable fridge",
        "KE Series portable fridge",
        "compressor car refrigerator",
        "distributor car fridge lineup",
      ],
    },
    modelDetails: [
      modelDetail("ke25", "KE25", "25L", "DC 12/24V", "Compressor cooling", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "Wide-capacity programs and distributor lineups"),
      modelDetail("ke30", "KE30", "30L", "DC 12/24V", "Compressor cooling", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "Wide-capacity programs and distributor lineups"),
      modelDetail("ke40", "KE40", "40L", "DC 12/24V", "Compressor cooling", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "Wide-capacity programs and distributor lineups"),
      modelDetail("ke50", "KE50", "50L", "DC 12/24V", "Compressor cooling", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "Wide-capacity programs and distributor lineups"),
      modelDetail("ke75", "KE75", "75L", "DC 12/24V", "Compressor cooling", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "Wide-capacity programs and distributor lineups"),
    ],
    gallery: galleryFromImage("/assets/products/ke.jpg", "Broad-size product family for distributor planning."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for wide-capacity lineups."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Channel direction", "Broad distributor lineup and price ladder."),
      feature("Production mix", "Product family for small-to-large capacity programs."),
    ],
    materials: standardTbdMaterials(),
    useCases: [
      useCase("Distributor lineup", "Wide capacity coverage for complete product shelves."),
      useCase("Price ladder planning", "Multiple capacities for market segmentation."),
      useCase("Vehicle travel", "Compressor cooling for vehicle and outdoor use."),
      useCase("Scalable production mix", "Product family for small-to-large capacity programs."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("KE Series", "Send target model, quantity, market and distributor-lineup requirements for KE Series."),
  },
  tf: {
    seo: {
      title: "TF Series Classic Car Fridge | Travel Science",
      description:
        "TF35, TF45 and TF55 compressor fridges for classic car fridge channels, fleet use and repeat-order programs.",
      keywords: [
        "classic car fridge",
        "TF35 portable fridge",
        "TF45 portable fridge",
        "TF55 portable fridge",
        "compressor car refrigerator",
        "fleet car fridge",
      ],
    },
    modelDetails: [
      modelDetail("tf35", "TF35", "24L", "DC 12/24V", "Compressor cooling", "TBD", "626 x 369 x 363 mm", "685 x 413 x 423 mm", "15 kg", "17 kg", "60W", "220/460/552 pcs", "Classic car fridge channels and fleet use"),
      modelDetail("tf45", "TF45", "34L", "DC 12/24V", "Compressor cooling", "TBD", "626 x 369 x 433 mm", "685 x 413 x 493 mm", "15.4 kg", "18 kg", "60W", "176/368/460 pcs", "Classic car fridge channels and fleet use"),
      modelDetail("tf55", "TF55", "41.2L", "DC 12/24V", "Compressor cooling", "TBD", "626 x 369 x 503 mm", "685 x 413 x 563 mm", "16.2 kg", "18.8 kg", "60W", "176/368/368 pcs", "Classic car fridge channels and fleet use"),
    ],
    gallery: galleryFromImage("/assets/products/tf.jpg", "Classic upright shell for familiar refrigerator programs."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for classic car fridge channels."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Channel direction", "Classic car fridge channels and fleet programs."),
      feature("Repeat orders", "Stable configuration for replenishment programs."),
    ],
    materials: [
      material("Housing", "Pre-coated steel"),
      material("Frame", "ABS"),
      material("Door", "PE / PE + glass"),
      material("Inner Liner", "One-piece molding HIPS"),
      material("Inner Base", "TBD"),
      material("Handle", "PE"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Classic car fridge channels", "Familiar form and specifications for established channels."),
      useCase("Fleet use", "Stable cooling platform for vehicle-based programs."),
      useCase("Repeat orders", "Product family for stable replenishment programs."),
      useCase("Private label projects", "Platform for color, label and packaging customization."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("TF Series", "Send target model, quantity, market and fleet or channel requirements for TF35, TF45 or TF55."),
  },
  m: {
    defaultModel: "M35",
    defaultColor: "black",
    colorOptions: mSeriesColors,
    modelOptions: ["M35", "M45", "M55"],
    productImages: {
      M35: {
        black: "/assets/products/m/models/m35-black.png",
        "sage-green": "/assets/products/m/models/m35-sage.png",
      },
      M45: {
        black: "/assets/products/m/models/m45-black.png",
        "sage-green": "/assets/products/m/models/m45-sage.png",
      },
      M55: {
        black: "/assets/products/m/models/m55-black.png",
        "sage-green": "/assets/products/m/models/m55-sage.png",
      },
    },
    seo: {
      title: "M Series Premium Mobile Fridge | Travel Science",
      description:
        "M35, M45 and M55 premium mobile compressor fridges with wheel, pull-handle, battery-ready architecture and dual-zone options.",
      keywords: [
        "premium mobile fridge",
        "wheeled portable fridge",
        "M35 portable fridge",
        "M45 portable fridge",
        "M55 portable fridge",
        "dual-zone compressor fridge",
      ],
    },
    modelDetails: [
      modelDetail("m35", "M35", "35L", "DC 12/24V", "Dual-zone compressor platform", "Down to -20C / -4F", "763 x 462 x 390 mm", "810 x 535 x 465 mm", "16 kg", "19.1 kg", "60W", "20GP/40HQ: 140/290", "Premium outdoor, mobile camp and long-haul self-driving"),
      modelDetail("m45", "M45", "45L", "DC 12/24V", "Dual-zone compressor platform", "Down to -20C / -4F", "763 x 462 x 450 mm", "810 x 535 x 525 mm", "16.4 kg", "19.7 kg", "60W", "20GP/40HQ: 112/290", "Premium outdoor, mobile camp and long-haul self-driving"),
      modelDetail("m55", "M55", "55L", "DC 12/24V", "Dual-zone compressor platform", "Down to -20C / -4F", "763 x 462 x 510 mm", "810 x 535 x 585 mm", "17 kg", "20.5 kg", "60W", "20GP/40HQ: 112/232", "Premium outdoor, mobile camp and long-haul self-driving"),
    ],
    gallery: [
      {
        image: "/assets/products/m/gallery/m45-front.png",
        title: "Front angle",
        text: "Premium mobile structure with strong outdoor presence.",
      },
      {
        image: "/assets/products/m/gallery/m45-open.png",
        title: "Open storage",
        text: "Dual-door access supports flexible outdoor storage.",
      },
      {
        image: "/assets/products/m/gallery/m45-side.png",
        title: "Side profile",
        text: "Wheel and pull-handle logic for mobile camp use.",
      },
      {
        image: "/assets/products/m/gallery/m45-black.png",
        title: "Dark configuration",
        text: "Black CMF route for flagship outdoor product lines.",
      },
    ],
    featureDetails: [
      feature("Cooling system", "Dual-zone compressor platform."),
      feature("Mobility", "Wheel and pull-handle structure for mobile outdoor use."),
      feature("Storage direction", "Dual-door and dual-zone options."),
      feature("Battery accessory", "Rechargeable battery / solar charging module shown as product direction."),
    ],
    materials: [
      material("Housing", "TBD"),
      material("Frame", "TBD"),
      material("Door", "TBD"),
      material("Wheel", "TBD"),
      material("Handle", "TBD"),
      material("Inner Liner", "TBD"),
      material("Inner Base", "TBD"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Premium outdoor", "Mobile cooling for higher-end outdoor product lines."),
      useCase("Mobile camp", "Wheeled cold storage for camp setups."),
      useCase("Long-haul self-driving", "Larger portable cooling for extended driving routes."),
      useCase("Flagship channel projects", "Product platform for brands needing a stronger flagship presence."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("M Series", "Send target model, quantity, market and mobility or dual-zone requirements for M35, M45 or M55."),
  },
  ex: {
    defaultModel: "EX30",
    defaultColor: "all-black",
    colorOptions: exSeriesColors,
    modelOptions: ["EX30", "EX40", "EX50"],
    productImages: modelColorImages(["EX30", "EX40", "EX50"], exSeriesColors, "/assets/products/ex.png"),
    seo: {
      title: "EX Series Portable Car Fridge | Travel Science",
      description:
        "EX30, EX40 and EX50 portable compressor fridges for mainstream car refrigerator distribution and volume programs.",
      keywords: [
        "EX Series car fridge",
        "EX30 portable fridge",
        "EX40 portable fridge",
        "EX50 portable fridge",
        "compressor car refrigerator",
        "mainstream car fridge distribution",
      ],
    },
    modelDetails: [
      modelDetail("ex30", "EX30", "30L", "DC 12/24V", "Compressor cooling", "TBD", "619 x 385 x 409 mm", "692 x 462 x 452 mm", "12.3 kg", "15.6 kg", "60W", "20GP/40HQ: 185/380", "Mainstream car refrigerator distribution and volume programs"),
      modelDetail("ex40", "EX40", "40L", "DC 12/24V", "Compressor cooling", "TBD", "619 x 385 x 489 mm", "692 x 462 x 532 mm", "13.3 kg", "16.8 kg", "60W", "20GP/40HQ: 148/304", "Mainstream car refrigerator distribution and volume programs"),
      modelDetail("ex50", "EX50", "50L", "DC 12/24V", "Compressor cooling", "TBD", "619 x 385 x 569 mm", "692 x 462 x 612 mm", "14.3 kg", "18.3 kg", "60W", "20GP/40HQ: 111/228", "Mainstream car refrigerator distribution and volume programs"),
    ],
    gallery: galleryFromImage("/assets/products/ex.png", "Mass-production friendly structure for volume programs."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for mainstream car refrigerator channels."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Production direction", "Mass-production friendly structure."),
      feature("Brand panel", "Flexible brand panel customization for channel programs."),
    ],
    materials: standardTbdMaterials(),
    useCases: [
      useCase("Mainstream distribution", "Portable fridge family for established car refrigerator channels."),
      useCase("Volume programs", "Platform for repeatable production and range planning."),
      useCase("Vehicle travel", "Compressor cooling for road trips and vehicle use."),
      useCase("Brand panel customization", "Flexible front-panel customization for channel brands."),
    ],
    certifications: ["TBD"],
    documents: {
      manual: "/assets/downloads/ex-series-manual.pdf",
    },
    inquiryFocus: inquiry("EX Series", "Send target model, quantity, market and customization needs for EX30, EX40 or EX50."),
  },
  s35: {
    defaultModel: "S35",
    defaultColor: "all-black",
    colorOptions: [
      { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
    ],
    modelOptions: ["S35"],
    productImages: {
      S35: {
        "all-black": "/assets/products/S35.png",
      },
    },
    seo: {
      title: "S35 Tool-Battery Compatible Portable Fridge | Travel Science",
      description:
        "S35 upgraded portable compressor fridge with DC 12/24V and tool-battery compatible route for workshop, home and weekend use.",
      keywords: [
        "S35 portable fridge",
        "tool battery fridge",
        "Makita battery fridge",
        "workshop fridge",
        "portable compressor fridge",
      ],
    },
    modelDetails: [
      modelDetail("s35", "S35", "35L", "DC 12/24V; tool-battery compatible route", "Compressor cooling", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "Portable second fridge for home, workshop and weekend use"),
    ],
    gallery: galleryFromImage("/assets/products/S35.png", "Compact body form for second-fridge and workshop use."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for portable second-fridge use."),
      feature("Power route", "DC 12/24V with tool-battery compatible route."),
      feature("Battery compatibility", "Tool-battery direction for upgraded S Series projects."),
      feature("Storage direction", "Compact second-fridge storage."),
    ],
    materials: [
      material("Housing", "ABS"),
      material("Frame", "ABS"),
      material("Door", "ABS"),
      material("Inner Liner", "One-piece molding HIPS"),
      material("Inner Base", "TBD"),
      material("Battery Accessory", "TBD"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Home second fridge", "Additional cold storage for drinks and food."),
      useCase("Workshop", "Cooling platform for users with tool-battery ecosystems."),
      useCase("Weekend use", "Portable cooling for short trips and outdoor days."),
      useCase("Vehicle use", "Compact compressor fridge for car and mobile use."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("S35", "Send target model, battery route, quantity, market and customization needs for S35."),
  },
  s: {
    defaultModel: "S18",
    defaultColor: "orange-black",
    colorOptions: [
      { name: "Orange & Black", value: "orange-black", swatch: "#f26a21", swatches: ["#f26a21", "#08090a"] },
      { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
    ],
    modelOptions: ["S18", "S35"],
    productImages: {
      S18: {
        "orange-black": "/assets/products/s18-orange.png",
        "all-black": "/assets/products/s18-orange.png",
      },
      S35: {
        "all-black": "/assets/products/S35.png",
      },
    },
    seo: {
      title: "S18 Portable Second Fridge | Travel Science",
      description:
        "S18 compact compressor fridge for home, car, workshop and weekend second-fridge use.",
      keywords: [
        "S18 portable fridge",
        "portable second fridge",
        "compact compressor fridge",
        "workshop fridge",
        "DC 12V 24V fridge",
      ],
    },
    modelDetails: [
      modelDetail("s18", "S18", "18L", "DC 12/24V", "Compressor cooling", "Down to -20C / -4F", "485 x 320 x 288 mm", "547 x 382 x 352 mm", "9.5 kg", "11.5 kg", "60W", "20GP/40HQ: 384/896", "Compact second-fridge use for home, car, workshop and weekend scenarios"),
    ],
    gallery: galleryFromImage("/assets/products/s18-orange.png", "Compact body form for second-fridge and workshop use."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for compact second-fridge use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Storage direction", "18L compact second-fridge storage."),
      feature("OEM / ODM", "Color, logo, battery accessory, packaging and documentation support."),
    ],
    materials: [
      material("Housing", "ABS"),
      material("Frame", "ABS"),
      material("Door", "ABS"),
      material("Inner Liner", "One-piece molding HIPS"),
      material("Inner Base", "TBD"),
      material("Battery Accessory", "TBD"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Home second fridge", "Additional cold storage for drinks and food."),
      useCase("Workshop", "Compact cooling platform for workshop use."),
      useCase("Weekend use", "Portable cooling for short trips and outdoor days."),
      useCase("Vehicle use", "Compact compressor fridge for car and mobile use."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("S18", "Send target model, quantity, market and customization needs for S18."),
  },
  d: {
    defaultModel: "D9",
    defaultColor: "black-gray",
    colorOptions: dSeriesColors,
    modelOptions: ["D9"],
    productImages: modelColorImages(["D9"], dSeriesColors, "/assets/products/d.jpg"),
    seo: {
      title: "D Series Compact Portable Fridge | Travel Science",
      description:
        "D Series compact portable cooling system for small-space use, lightweight storage and product range planning.",
      keywords: [
        "compact portable fridge",
        "small portable fridge",
        "D9 portable fridge",
        "mini compressor fridge",
        "small car fridge",
      ],
    },
    modelDetails: [
      modelDetail("d9", "D9", "9L", "DC 12/24V", "Compressor cooling", "20C to -20C", "474 x 320 x 266 mm", "517 x 400 x 336 mm", "6.9 kg", "8.5 kg", "60W", "427/889/1016 pcs", "Compact cooling for small-space use and lightweight storage needs"),
    ],
    gallery: galleryFromImage("/assets/products/d.jpg", "Compact body form for small-space cooling."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for small-space and daily carry use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Storage direction", "9L compact capacity."),
      feature("OEM / ODM", "Color, logo, packaging and documentation support."),
    ],
    materials: [
      material("Housing", "TBD"),
      material("Frame", "TBD"),
      material("Door", "TBD"),
      material("Inner Liner", "One-piece molded inner liner"),
      material("Inner Base", "TBD"),
      material("Handle", "Built-in handle"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Small vehicle use", "Compact cooling for limited vehicle space."),
      useCase("Short-distance travel", "Lightweight storage for short trips."),
      useCase("Personal cooling", "Small-capacity cooling for drinks and daily-use items."),
      useCase("Product range extension", "A compact model for brands expanding their portable cooling lineup."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("D Series", "Send target market, quantity and customization needs for D9."),
  },
};

products.forEach((product) => {
  Object.assign(product, productDetailEnhancements[product.id] || {});
});

function modelDetail(
  id,
  name,
  capacity,
  voltage,
  cooling,
  temperatureRange,
  productDimensions,
  packingSize,
  netWeight,
  grossWeight,
  powerConsumption,
  loadingQty,
  application,
) {
  return {
    id,
    name,
    capacity,
    voltage,
    cooling,
    temperatureRange,
    productDimensions,
    packingSize,
    netWeight,
    grossWeight,
    powerConsumption,
    loadingQty,
    application,
  };
}

function galleryFromImage(image, exteriorText) {
  return [
    {
      image,
      title: "Exterior view",
      text: exteriorText,
    },
    {
      image,
      title: "Open storage",
      text: "Storage layout for vehicle, outdoor and channel use.",
    },
    {
      image,
      title: "Control panel",
      text: "Temperature setting and operating control.",
    },
    {
      image,
      title: "Product detail",
      text: "Structure detail for product range planning and customization.",
    },
  ];
}

function feature(title, text) {
  return { title, text };
}

function material(part, materialValue) {
  return { part, material: materialValue };
}

function useCase(title, text) {
  return { title, text };
}

function inquiry(seriesName, text) {
  return {
    title: `Request ${seriesName} specifications.`,
    text,
    button: `Request ${seriesName} details`,
  };
}

function standardTbdMaterials() {
  return [
    material("Housing", "TBD"),
    material("Frame", "TBD"),
    material("Door", "TBD"),
    material("Inner Liner", "TBD"),
    material("Inner Base", "TBD"),
    material("Handle", "TBD"),
    material("Optional Part", "TBD"),
  ];
}

export const FEATURED_PRODUCT_IDS = ["b", "s", "gl"];

export const productPositioning = {
  ax: {
    headline: "Compact platform for export-ready programs.",
    text:
      "The AX Series is a practical portable fridge platform for distributors and product teams needing compact model options, clean product form and export-ready configuration support.",
  },
  b: {
    headline: "Compact cooling for modern travel.",
    text:
      "The B Series combines premium aesthetics, quiet compressor performance and everyday portability in a compact platform designed for life on the move.",
  },
  exm: {
    headline: "Export-ready cooling, configured for retail.",
    text:
      "The EXM Series is optimized for export channel variation, front labels, accessories and practical retail configurations.",
  },
  k: {
    headline: "Compact cooling for lighter scenarios.",
    text:
      "The K Series is a compact product line for lighter scenarios where size, price and portability matter.",
  },
  tf: {
    headline: "Classic car-fridge configuration.",
    text:
      "The TF Series uses a classic upright shell language for stable, familiar refrigerator programs.",
  },
  m: {
    headline: "Premium mobile cooling with more capability.",
    text:
      "The M Series is a premium mobile platform with wheel, pull handle, battery-ready architecture and dual-zone layout options.",
  },
  ex: {
    headline: "Mainstream cooling for volume programs.",
    text:
      "The EX Series is a proven family for volume programs, balancing cost control, production stability and solid industrial styling.",
  },
  s35: {
    headline: "The second fridge. Powered differently.",
    text: "Runs on Makita batteries and other power tool batteries. A portable second fridge for home, workshop and weekend use.",
  },
  s: {
    headline: "The second fridge. Powered differently.",
    text: "The S Series now includes an upgraded tool-battery compatible route, extending portable cooling from outdoor use to home, workshop and weekend life.",
  },
  gl: {
    headline: "Expedition cooling for longer routes.",
    text: "The GL Series is built for outdoor trips, vehicle travel and larger cold-storage needs, with rugged proportions and a strong equipment presence.",
  },
  d: {
    headline: "Small cooling for tight spaces.",
    text: "The D Series is a very small car refrigerator for drinks, medicine and everyday carry inside compact vehicle spaces.",
  },
  ke: {
    headline: "Wide-capacity cooling for distributor lineups.",
    text:
      "The KE Series is a broad capacity family for distributors who need a complete shelf from small to large formats.",
  },
};

export function productById(id) {
  return products.find((product) => product.id === id);
}

export function productIntro(product) {
  if (productPositioning[product.id]) return productPositioning[product.id].text;
  return product.intro.replace("OEM color, label, and packaging ready", "Designed for contemporary outdoor channels");
}

export function productHeadline(product) {
  return productPositioning[product.id]?.headline || "Designed for the journey ahead.";
}

export const productFilters = [
  { id: "all", en: "All", zh: "全部" },
  { id: "expedition", en: "Expedition", zh: "越野户外" },
  { id: "vehicle", en: "Vehicle", zh: "车载主力" },
  { id: "compact", en: "Compact", zh: "紧凑便携" },
  { id: "classic", en: "Classic", zh: "经典渠道" },
  { id: "project", en: "Project", zh: "项目开发" },
];

export const developmentSteps = [
  {
    id: "brief",
    en: "Brief",
    zh: "需求定义",
    textEn: "Translate target market, capacity, cost, and channel needs into a practical product brief.",
    textZh: "把目标市场、容量、成本和渠道需求整理成可执行的产品定义。",
  },
  {
    id: "design",
    en: "ID + CMF",
    zh: "外观与 CMF",
    textEn: "Shape the exterior language, color/material/finish direction, brand panels, and accessory logic.",
    textZh: "确定外观语言、色彩材质工艺、品牌面板和配件逻辑。",
  },
  {
    id: "engineering",
    en: "Engineering",
    zh: "结构工程",
    textEn: "Build the mechanical architecture around cooling, insulation, assembly, tooling, and reliability.",
    textZh: "围绕制冷、保温、装配、模具和可靠性建立结构架构。",
  },
  {
    id: "prototype",
    en: "Prototype",
    zh: "样机验证",
    textEn: "Move from sample build to usability, thermal, noise, vibration, and packing checks.",
    textZh: "从样机制作进入使用、温控、噪音、震动和包装验证。",
  },
  {
    id: "validation",
    en: "Validation",
    zh: "测试认证",
    textEn: "Support test plans, labels, energy compliance routes, battery documents, and export readiness.",
    textZh: "支持测试计划、铭牌、能效路线、电池资料和出口合规准备。",
  },
  {
    id: "production",
    en: "Production",
    zh: "量产交付",
    textEn: "Turn the approved product into tooling, BOM, QC checkpoints, packaging, and repeatable delivery.",
    textZh: "把确认方案落到模具、BOM、质检节点、包装和可重复交付。",
  },
];

export const metrics = [
  { en: "Research", zh: "研发", value: "ID / ME / CMF" },
  { en: "Manufacturing", zh: "制造", value: "Assembly + QC" },
  { en: "Service", zh: "服务", value: "OEM / ODM" },
  { en: "Export", zh: "出口", value: "US / EU / AU / SEA" },
];

```

### src/data/seo.js

Size: 262 bytes

```js
export const seo = {
  title: "Travel Science | Portable Cooling Systems by Kelvcoop",
  description:
    "Travel Science designs portable compressor fridges and vehicle cooling systems by Kelvcoop for travel, outdoor use, distributors and custom projects.",
};

```

### src/data/socialLinks.js

Size: 314 bytes

```js
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
];

```

### src/main.js

Size: 4822 bytes

```js
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { heroSlides } from "./data/heroSlides.js";
import { renderRoute, route, routeSeo } from "./router.js";
import { applySeo, highlightPeriods, revealSections } from "./utils/dom.js";
import { createHeroScrollGate } from "./utils/heroScrollGate.js";
import { bindNavigation } from "./utils/navigation.js";

const app = document.getElementById("root");
const heroScrollGate = createHeroScrollGate();

const state = {
  menuOpen: false,
  mobileProductsOpen: false,
  productsOpen: false,
  theme: window.localStorage.getItem("travelScienceTheme") || "light",
  currentHeroSlide: 0,
  headerMode: "hero",
};

let productsCloseTimer;
const mobileNavQuery = window.matchMedia("(max-width: 1023px)");
let lastRenderedRoute = route();

function scrollPageToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function forceScrollPageToTop() {
  scrollPageToTop();
  window.requestAnimationFrame(() => {
    scrollPageToTop();
    window.requestAnimationFrame(scrollPageToTop);
  });
}

function setMenuOpen(value) {
  state.menuOpen = value;
  if (!value) state.mobileProductsOpen = false;
}

function setProductsOpen(value) {
  state.productsOpen = value;
  document.querySelector(".site-header")?.classList.toggle("is-products-open", value);
  document.querySelector("[data-products-dropdown]")?.classList.toggle("is-open", value);
  document.querySelector("[data-products-trigger]")?.setAttribute("aria-expanded", String(value));
}

function openProductsMenu() {
  window.clearTimeout(productsCloseTimer);
  if (state.productsOpen) return;
  setProductsOpen(true);
}

function closeProductsMenuSoon() {
  window.clearTimeout(productsCloseTimer);
  productsCloseTimer = window.setTimeout(() => {
    if (!state.productsOpen) return;
    setProductsOpen(false);
  }, 160);
}

function toggleMenu() {
  state.menuOpen = !state.menuOpen;
  state.mobileProductsOpen = false;
}

function toggleMobileProducts() {
  state.mobileProductsOpen = !state.mobileProductsOpen;
}

function setTheme(theme) {
  state.theme = theme;
}

function setHeroSlide(index) {
  state.currentHeroSlide = index;
}

function updateHeaderMode() {
  const contentLayer = document.querySelector(".home-content-layer");
  const header = document.querySelector(".site-header");
  if (!header) return;

  if (!contentLayer) {
    state.headerMode = "content";
    header.classList.remove("is-over-hero");
    header.classList.add("is-over-content");
    return;
  }

  const isOverHero = contentLayer.getBoundingClientRect().top > 90;
  const nextMode = isOverHero ? "hero" : "content";
  if (state.headerMode === nextMode) return;

  state.headerMode = nextMode;
  header.classList.toggle("is-over-hero", nextMode === "hero");
  header.classList.toggle("is-over-content", nextMode === "content");
}

function render() {
  const currentRoute = route();
  const routeChanged = currentRoute !== lastRenderedRoute;
  lastRenderedRoute = currentRoute;

  document.documentElement.dataset.theme = state.theme;
  app.innerHTML = `
    ${Header({ theme: state.theme, menuOpen: state.menuOpen, mobileProductsOpen: state.mobileProductsOpen, productsOpen: state.productsOpen, headerMode: state.headerMode })}
    ${renderRoute({ currentHeroSlide: state.currentHeroSlide })}
    ${Footer()}
  `;

  applySeo(routeSeo());
  const mainContent = app.querySelector("main");
  if (mainContent) {
    highlightPeriods(mainContent);
  }

  bindNavigation({
    root: app,
    state,
    heroSlideCount: heroSlides.length,
    render,
    setHeroSlide,
    setMenuOpen,
    setProductsOpen,
    setTheme,
    openProductsMenu,
    closeProductsMenuSoon,
    toggleMenu,
    toggleMobileProducts,
  });

  revealSections(app);
  updateHeaderMode();
  heroScrollGate.setup();
  heroScrollGate.requestUpdate();

  if (routeChanged) {
    forceScrollPageToTop();
  }
}

function handleMobileBreakpointChange(event) {
  const shouldRender =
    state.menuOpen ||
    state.mobileProductsOpen ||
    state.productsOpen;

  state.menuOpen = false;
  state.mobileProductsOpen = false;
  setProductsOpen(false);

  if (shouldRender || event.matches) render();
}

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.addEventListener("scroll", updateHeaderMode, { passive: true });
window.addEventListener("wheel", heroScrollGate.handleWheel, { passive: false });
window.addEventListener("resize", () => {
  heroScrollGate.refresh();
  heroScrollGate.requestUpdate();
});
mobileNavQuery.addEventListener("change", handleMobileBreakpointChange);
handleMobileBreakpointChange(mobileNavQuery);
window.addEventListener("hashchange", render);
render();

```

### src/pages/CapabilitiesPage.js

Size: 3730 bytes

```js
const downloadGroups = [
  {
    label: "Product brochures",
    href: "/assets/downloads/travel-science-brochure.pdf",
    status: "Download",
  },
  {
    label: "User manuals",
    status: "Request document",
  },
  {
    label: "Spec sheets",
    status: "Request document",
  },
  {
    label: "Certification documents",
    status: "Request document",
  },
];

const supportItems = [
  "Product use guidance",
  "Troubleshooting support",
  "Spare parts and accessory support",
  "Warranty and service communication",
  "Distributor service coordination",
];

const questions = [
  [
    "Can I request product specifications before ordering?",
    "Yes. Send the target model or product series and we will provide available specifications.",
  ],
  [
    "Do you support private label or packaging customization?",
    "Yes. Logo, color, packaging and documentation options can be discussed by project.",
  ],
  [
    "Can you support different markets and certifications?",
    "Certification support depends on product model and target market.",
  ],
  [
    "Where can I get manuals or brochures?",
    "Available documents can be downloaded here or requested through the inquiry page.",
  ],
  [
    "Do you provide after-sales support for distributors?",
    "Yes. Support can include usage guidance, troubleshooting, spare parts and service coordination.",
  ],
];

export function CapabilitiesPage() {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">Capabilities & Support</p>
        <h1>Product documents, support and service information.</h1>
        <p>Access manuals, brochures, specifications, after-sales information and common questions for Travel Science cooling products.</p>
      </section>

      <section class="downloads">
        <div>
          <p class="kicker">Downloads</p>
          <h2>Product documents.</h2>
        </div>
        <div class="download-list">
          ${downloadGroups.map(downloadLink).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">After-sales service</p>
          <h2>Support for use, service and distribution.</h2>
        </div>
        <div class="feature-detail-grid">
          ${supportItems.map((item) => `<article><h3>${item}</h3></article>`).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">Q&A</p>
          <h2>Common questions.</h2>
        </div>
        <div class="qa-list">
          ${questions.map(([question, answer]) => `
            <article>
              <h3>${question}</h3>
              <p>${answer}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="product-inquiry">
        <p class="kicker">Support inquiry</p>
        <h2>Need a document or service answer?</h2>
        <p>Send the product series, model or question and we will point you to the right information.</p>
        <a class="hero-cta" href="#/oem-odm" data-go="/oem-odm">Contact support</a>
      </section>
    </main>
  `;
}

function downloadLink(item) {
  if (item.href) {
    return `<a href="${item.href}" download>${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
  }

  const subject = encodeURIComponent(`Request ${item.label}`);
  const body = encodeURIComponent(`Hello Travel Science team,\n\nPlease send the ${item.label.toLowerCase()}.\n\nThank you.`);
  return `<a href="mailto:info@kelvcoop.com?subject=${subject}&body=${body}">${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
}

```

### src/pages/ContactPage.js

Size: 1824 bytes

```js
import { socialLinks } from "../data/socialLinks.js";

export function ContactPage() {
  const subject = encodeURIComponent("Travel Science product inquiry");
  const body = encodeURIComponent(
    "Hello Travel Science team,\n\nI would like to request product details, distributor cooperation information, or custom project support.\n\nThank you.",
  );

  return `
    <main class="page contact-page">
      <section class="page-hero reveal">
        <p class="kicker">Contact Travel Science</p>
        <h1>Product details, distributor cooperation and custom projects.</h1>
        <p>Travel Science is backed by Kelvcoop for portable cooling product development, manufacturing and export support.</p>
        <a class="hero-cta" href="mailto:info@kelvcoop.com?subject=${subject}&body=${body}">info@kelvcoop.com</a>
      </section>

      <section class="specs reveal">
        <div>
          <p class="kicker">by Kelvcoop</p>
          <h2>Request the next step.</h2>
        </div>
        <dl>
          <div><dt>Email</dt><dd>info@kelvcoop.com</dd></div>
          <div><dt>Phone</dt><dd>Available on request</dd></div>
          <div><dt>Address</dt><dd>Kelvcoop manufacturing and export office, China</dd></div>
          <div><dt>Inquiry type</dt><dd>Product details, distributor cooperation, RFQ, OEM/ODM and custom projects</dd></div>
        </dl>
      </section>

      <section class="contact-social reveal">
        <p class="kicker">Follow Travel Science</p>
        <h2>Connect with us for product updates, project references and distributor information.</h2>
        <div class="contact-social-links">
          ${socialLinks.map((link) => `
            <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
          `).join("")}
        </div>
      </section>
    </main>
  `;
}

```

### src/pages/CustomProjectsPage.js

Size: 2629 bytes

```js
import { projectSteps } from "../data/homepage.js";

const customOptions = [
  ["Capacity & model direction", "Choose from existing product platforms or develop around a new capacity target."],
  ["Color, finish and branding", "Apply brand colors, logo placement, exterior finish and packaging direction."],
  ["Power route", "Configure DC, AC or battery-powered routes depending on product use."],
  ["Structure and accessories", "Adjust handles, wheels, baskets, lids and storage details around the use case."],
];

const suitableFor = [
  "Outdoor brands",
  "Vehicle accessory distributors",
  "Camping equipment channels",
  "Private-label product teams",
  "Regional distributors",
];

export function CustomProjectsPage() {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">Custom Projects</p>
        <h1>Custom cooling projects for brands and product teams.</h1>
        <p>Develop portable cooling products around capacity, power, structure, color, packaging and market requirements.</p>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">What can be customized</p>
          <h2>Start from the product direction.</h2>
        </div>
        <div class="feature-detail-grid">
          ${customOptions.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">Project process</p>
          <h2>From brief to repeatable supply.</h2>
        </div>
        <div class="process-grid">
          ${projectSteps.map(([title, text], index) => `
            <article>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="certifications">
        <div>
          <p class="kicker">Suitable for</p>
          <h2>Built around commercial use.</h2>
        </div>
        <div>
          ${suitableFor.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="product-inquiry">
        <p class="kicker">Start a project</p>
        <h2>Share your target product and market.</h2>
        <p>Send the series, capacity, quantity, customization direction and timeline you want to discuss.</p>
        <a class="hero-cta" href="#/oem-odm" data-go="/oem-odm">Start a custom project</a>
      </section>
    </main>
  `;
}

```

### src/pages/HomePage.js

Size: 1691 bytes

```js
import { FeaturedProducts } from "../components/FeaturedProducts.js";
import { HeroCarousel } from "../components/HeroCarousel.js";
import { ProductFamily } from "../components/ProductFamily.js";
import { ContactSection } from "../components/ContactSection.js";
import { businessEntries, categoryCopy } from "../data/homepage.js";
import { FEATURED_PRODUCT_IDS, productById } from "../data/products.js";
import { heroSlides } from "../data/heroSlides.js";

export function HomePage({ currentHeroSlide }) {
  const featured = FEATURED_PRODUCT_IDS.map(productById).filter(Boolean);

  return `
    <main>
      ${HeroCarousel({ slides: heroSlides, currentSlide: currentHeroSlide })}

      <div class="home-content-layer">
        ${ProductFamily({ categories: categoryCopy })}

        <section class="trust-line reveal">
          <p>Product specifications, customization and supply planning for outdoor cooling programs.</p>
        </section>

        ${FeaturedProducts({ products: featured })}
        ${businessEntrySection()}
        ${ContactSection()}
      </div>
    </main>
  `;
}

function businessEntrySection() {
  return `
    <section class="b2b-entry reveal">
      <div class="section-heading">
        <p class="kicker">Work with Travel Science</p>
        <h2>Products, custom projects and support in one place.</h2>
      </div>
      <div class="entry-card-grid">
        ${businessEntries.map((entry) => `
          <a class="entry-card" href="${entry.href}" data-go="${entry.target}">
            <h3>${entry.title}</h3>
            <p>${entry.text}</p>
            <span>${entry.cta} →</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

```

### src/pages/OemOdmPage.js

Size: 1819 bytes

```js
const inquiryOptions = [
  "Existing model inquiry",
  "Private label / logo request",
  "Packaging customization",
  "New product development",
  "Distributor cooperation",
];

const inquiryChecklist = [
  "Product series or model",
  "Target market",
  "Estimated order quantity",
  "Required certifications",
  "Color / logo / packaging needs",
  "Timeline",
  "Contact details",
];

export function OemOdmPage() {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">OEM / ODM Inquiry</p>
        <h1>Start with a model, specification or custom request.</h1>
        <p>Send your target product series, market, quantity and customization needs. We will respond with product details, options and next steps.</p>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">Inquiry options</p>
          <h2>Choose the path that fits your project.</h2>
        </div>
        <div class="entry-card-grid">
          ${inquiryOptions.map((item) => `<article class="entry-card"><h3>${item}</h3></article>`).join("")}
        </div>
      </section>

      <section class="certifications">
        <div>
          <p class="kicker">Inquiry checklist</p>
          <h2>Helpful details to include.</h2>
        </div>
        <div>
          ${inquiryChecklist.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="product-inquiry">
        <p class="kicker">Send inquiry</p>
        <h2>Contact Travel Science.</h2>
        <p>Email your project details to info@kelvcoop.com.</p>
        <a class="hero-cta" href="mailto:info@kelvcoop.com?subject=OEM%20%2F%20ODM%20Inquiry%20-%20Travel%20Science">Send project inquiry</a>
      </section>
    </main>
  `;
}

```

### src/pages/ProductDetailPage.js

Size: 693 bytes

```js
import { ProductDetailTemplate } from "../components/ProductDetailTemplate.js";
import { productById, products } from "../data/products.js";

export function ProductDetailPage({ productId }) {
  const product = productById(productId);
  if (!product) return notFound();

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);
  return ProductDetailTemplate({ product, related });
}

function notFound() {
  return `
    <main class="page">
      <section class="page-hero">
        <p class="kicker">404</p>
        <h1>Product not found.</h1>
        <a class="hero-cta" href="#/products" data-go="/products">Explore Products</a>
      </section>
    </main>
  `;
}

```

### src/pages/ProductsPage.js

Size: 492 bytes

```js
import { ContactSection } from "../components/ContactSection.js";
import { ProductCard } from "../components/ProductCard.js";
import { products } from "../data/products.js";

export function ProductsPage() {
  return `
    <main class="page">
      <section class="page-hero reveal">
        <p class="kicker">Products</p>
      </section>
      <section class="product-grid reveal">
        ${products.map(ProductCard).join("")}
      </section>
      ${ContactSection()}
    </main>
  `;
}

```

### src/router.js

Size: 1712 bytes

```js
import { CapabilitiesPage } from "./pages/CapabilitiesPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { CustomProjectsPage } from "./pages/CustomProjectsPage.js";
import { HomePage } from "./pages/HomePage.js";
import { OemOdmPage } from "./pages/OemOdmPage.js";
import { ProductDetailPage } from "./pages/ProductDetailPage.js";
import { ProductsPage } from "./pages/ProductsPage.js";
import { seo } from "./data/seo.js";
import { productById } from "./data/products.js";

export function route() {
  return window.location.hash.slice(1) || "/";
}

export function go(path) {
  if (route() === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }
  window.location.hash = path;
  return true;
}

export function renderRoute({ currentHeroSlide }) {
  const current = route();
  if (current === "/products") return ProductsPage();
  if (current === "/custom-projects") return CustomProjectsPage();
  if (current === "/oem-odm") return OemOdmPage();
  if (current === "/capabilities") return CapabilitiesPage();
  if (current === "/contact") return ContactPage();

  if (current.startsWith("/products/")) {
    const productId = current.match(/^\/products\/([^/]+)/)?.[1];
    return ProductDetailPage({ productId });
  }

  return HomePage({ currentHeroSlide });
}

export function routeSeo() {
  const current = route();

  if (current.startsWith("/products/")) {
    const productId = current.match(/^\/products\/([^/]+)/)?.[1];
    const product = productById(productId);
    if (product?.seo) {
      return {
        title: product.seo.title || seo.title,
        description: product.seo.description || seo.description,
      };
    }
  }

  return seo;
}

```

### src/styles.css

Size: 82192 bytes

```css
/* Base */
:root {
  color-scheme: light;
  --bg: #f6f3ee;
  --text: #101112;
  --muted: rgba(16, 17, 18, 0.62);
  --quiet: rgba(16, 17, 18, 0.42);
  --line: rgba(16, 17, 18, 0.12);
  --panel: rgba(255, 255, 255, 0.7);
  --panel-solid: #fbfaf7;
  --inverse: #08090a;
  --inverse-text: #f7f4ef;
  --red: #de2910;
  --orange: #f26a21;
  --shadow: 0 28px 80px rgba(30, 33, 35, 0.12);
  --page-max: 1180px;
  --page-width: min(82vw, var(--page-max));
  --wide-max: 1180px;
  --wide-width: min(84vw, var(--wide-max));
  --text-max: 520px;
  --nav-top: 24px;
  --nav-height: 64px;
  --nav-panel-gap: 6px;
  --products-trigger-bridge-height: 28px;
  --site-max: 1180px;
  --site-ratio: var(--page-width);
  --site-gutter: clamp(24px, 4vw, 48px);
  --content-max: min(
    var(--site-max),
    var(--site-ratio),
    calc(100vw - var(--site-gutter) * 2)
  );
  --content-offset: calc((100vw - var(--content-max)) / 2);
  --max: var(--site-max);
  --hero-height: min(86svh, 820px);
  --hero-bg-extra-scroll: clamp(260px, 34svh, 420px);
  --hero-stage-height: var(--hero-height);
  --scroll-gap: clamp(14px, 1.4vw, 22px);
  --model-card-width: clamp(320px, 31vw, 420px);
  --gallery-card-width: clamp(300px, 29vw, 390px);
  --related-card-width: clamp(260px, 24vw, 340px);
  --space-section: clamp(52px, 5.5vw, 86px);
  --section-gap: 88px;
  --space-section-tight: clamp(36px, 4vw, 64px);
  --space-card: clamp(16px, 1.6vw, 24px);
  --font-display-xl: clamp(34px, 4.2vw, 58px);
  --font-display-lg: clamp(30px, 3.4vw, 48px);
  --font-section-title: clamp(24px, 2.5vw, 36px);
  --font-card-title: clamp(17px, 1.25vw, 22px);
  --font-body-lg: clamp(15px, 0.95vw, 17px);
  --font-body: 14px;
  --font-small: 12px;
  --font-kicker: 10px;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[data-theme="dark"] {
  color-scheme: dark;
  --bg: #070809;
  --text: #f5f2ec;
  --muted: rgba(245, 242, 236, 0.66);
  --quiet: rgba(245, 242, 236, 0.44);
  --line: rgba(245, 242, 236, 0.14);
  --panel: rgba(255, 255, 255, 0.065);
  --panel-solid: #111315;
  --inverse: #f7f4ef;
  --inverse-text: #08090a;
  --shadow: 0 30px 90px rgba(0, 0, 0, 0.36);
}

* {
  box-sizing: border-box;
}

html {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  overflow-x: hidden;
  background: var(--bg);
  font-size: var(--font-body);
}

@media (min-width: 1024px) {
  body {
    min-width: 1024px;
  }
}

button,
a {
  font: inherit;
}

button {
  cursor: pointer;
}

.period-accent {
  color: var(--orange);
}

.arrow-accent {
  color: var(--orange);
}

button,
.hero-cta,
.nav-cta,
.card-cta,
.text-button {
  transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease, border-color 220ms ease, color 220ms ease;
}

button:hover,
.hero-cta:hover,
.nav-cta:hover,
.card-cta:hover,
.text-button:hover {
  transform: translateY(-2px);
}

button:active,
.hero-cta:active,
.nav-cta:active,
.card-cta:active,
.text-button:active {
  transform: translateY(1px);
}

img {
  display: block;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2,
h3 {
  letter-spacing: 0;
}

h1 {
  margin-bottom: 16px;
  font-size: var(--font-display-xl);
  line-height: 1.04;
  letter-spacing: -0.028em;
}

h2 {
  margin-bottom: 14px;
  font-size: var(--font-section-title);
  line-height: 1.08;
  letter-spacing: -0.024em;
}

h3 {
  margin-bottom: 8px;
  font-size: var(--font-card-title);
  line-height: 1.14;
  letter-spacing: -0.014em;
}

p {
  line-height: 1.5;
}

.kicker {
  margin: 0 0 18px;
  color: var(--quiet);
  font-size: var(--font-kicker);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Layout */
.section,
.story,
.partnership,
.contact,
.b2b-entry,
.featured,
.trust-line,
.page,
.product-page,
.related,
footer {
  width: var(--content-max);
  margin-inline: auto;
}

.site-container,
.section-inner,
.header-inner,
.hero-content,
.product-detail-inner,
.page-inner {
  width: var(--content-max);
  margin-inline: auto;
}

/* Header */
.site-header {
  position: fixed;
  top: 24px;
  left: 50%;
  z-index: 200;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  width: 90vw;
  max-width: none;
  height: 64px;
  min-height: 64px;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 14px;
  overflow: visible;
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  transform: translateX(-50%);
  transition:
    background 260ms ease,
    border-color 260ms ease,
    color 260ms ease,
    box-shadow 260ms ease;
}

.site-header.is-over-hero {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(8, 9, 10, 0.34);
  color: #f7f4ef;
  box-shadow: 0 18px 70px rgba(0, 0, 0, 0.22);
}

.site-header.is-over-hero .brand,
.site-header.is-over-hero .nav button,
.site-header.is-over-hero .nav a,
.site-header.is-over-hero .theme-button,
.site-header.is-over-hero .menu-button {
  color: #f7f4ef;
}

.site-header.is-over-hero .brand-mark img {
  filter: invert(1);
}

.site-header.is-over-hero .brand-text small {
  color: rgba(247, 244, 239, 0.62);
}

.site-header.is-over-hero .nav-cta {
  border-color: rgba(247, 244, 239, 0.34);
  background: transparent;
  color: #f7f4ef;
}

.site-header.is-over-hero .nav-cta:hover {
  border-color: rgba(247, 244, 239, 0.7);
  background: rgba(247, 244, 239, 0.08);
}

.site-header.is-over-content {
  border-color: rgba(16, 17, 18, 0.08);
  background: rgba(255, 255, 255, 0.74);
  color: var(--text);
  box-shadow: 0 18px 70px rgba(25, 27, 29, 0.1);
}

.site-header.is-over-content .brand,
.site-header.is-over-content .nav button,
.site-header.is-over-content .nav a,
.site-header.is-over-content .theme-button,
.site-header.is-over-content .menu-button {
  color: var(--text);
}

.site-header.is-over-content .brand-mark img {
  filter: none;
}

.site-header.is-over-content .nav-cta {
  border-color: #08090a;
  background: #08090a;
  color: #f7f4ef;
}

html[data-theme="dark"] .site-header.is-over-content {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(8, 9, 10, 0.52);
  color: #f7f4ef;
  box-shadow: 0 18px 70px rgba(0, 0, 0, 0.28);
}

html[data-theme="dark"] .site-header.is-over-content .brand,
html[data-theme="dark"] .site-header.is-over-content .nav button,
html[data-theme="dark"] .site-header.is-over-content .nav a,
html[data-theme="dark"] .site-header.is-over-content .theme-button,
html[data-theme="dark"] .site-header.is-over-content .menu-button {
  color: #f7f4ef;
}

html[data-theme="dark"] .site-header.is-over-content .brand-mark img {
  filter: invert(1);
}

html[data-theme="dark"] .site-header.is-over-content .brand-text small {
  color: rgba(247, 244, 239, 0.62);
}

html[data-theme="dark"] .site-header.is-over-content .nav-cta {
  border-color: rgba(247, 244, 239, 0.34);
  background: transparent;
  color: #f7f4ef;
}

.brand {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--text);
  text-align: left;
  text-decoration: none;
}

.brand-mark {
  width: 38px;
  height: 38px;
  opacity: 0.82;
}

.brand-mark img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-text strong {
  display: block;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: -0.028em;
  line-height: 1;
  white-space: nowrap;
}

.brand-text strong span {
  color: var(--red);
}

.brand-text small {
  display: block;
  margin-top: 4px;
  color: var(--quiet);
  font-size: 10px;
}

.brand-text small em {
  font-style: normal;
  opacity: 0.68;
}

.nav,
.nav-actions,
.hero-actions {
  display: flex;
  align-items: center;
}

.nav {
  justify-content: center;
  gap: 16px;
}

.nav-actions {
  justify-content: end;
  gap: 8px;
}

.nav button,
.nav a,
.theme-button,
.menu-button,
.text-button {
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: var(--text);
}

.nav button,
.nav a,
.theme-button,
.text-button {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 10px;
  font-size: 13px;
  text-decoration: none;
}

.nav > a,
.nav-product-trigger,
.nav button {
  position: relative;
}

.nav > a::after,
.nav-product-trigger::after,
.nav button::after {
  content: "";
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 5px;
  height: 2px;
  border-radius: 999px;
  background: #f26a21;
  opacity: 0;
  transform: scaleX(0.45);
  transition: opacity 220ms ease, transform 220ms ease;
}

.nav > a:hover::after,
.nav-product:hover .nav-product-trigger::after,
.nav-product-trigger:focus-visible::after,
.nav button:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

.nav-product {
  position: relative;
}

.nav .mobile-products-toggle,
.mobile-products-panel,
.mobile-nav-scroll,
.products-hover-bridge {
  display: none;
}

.nav-item-products {
  position: relative;
}

@media (min-width: 1024px) {
  .mobile-nav-scroll {
    display: contents;
  }
}

@media (min-width: 1024px) {
  .site-header,
  .nav,
  .nav-item-products {
    overflow: visible;
  }

  .products-hover-bridge {
    position: fixed;
    top: calc(var(--nav-top) + var(--nav-height));
    right: 0;
    left: 0;
    z-index: 218;
    height: calc(9px + var(--products-trigger-bridge-height));
    background: transparent;
    pointer-events: auto;
  }

  .site-header.is-products-open .products-hover-bridge,
  .site-header:has(.nav-item-products:focus-within) .products-hover-bridge {
    display: block;
  }

  .site-header.is-products-open,
  .site-header:has(.nav-item-products:focus-within) {
    z-index: 220;
  }

  .nav-item-products .products-dropdown {
    position: fixed;
    top: calc(var(--nav-top) + var(--nav-height) + var(--nav-panel-gap));
    left: 50%;
  }
}

@media (min-width: 1920px) {
  :root {
    --nav-panel-gap: 6px;
    --products-trigger-bridge-height: 56px;
  }
}

.product-dropdown {
  position: absolute;
  top: calc(100% + 9px);
  left: 50%;
  z-index: 220;
  width: min(92vw, 1440px);
  max-width: none;
  padding: 16px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: rgba(8, 9, 10, 0.78);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, 8px);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;
}

.nav-product:focus-within .product-dropdown,
.nav-item-products:focus-within .products-dropdown,
.products-dropdown.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

.product-dropdown-inner {
  width: var(--page-width);
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0;
}

.products-menu-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
}

.products-menu-heading strong {
  color: #f7f4ef;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0;
}

.products-menu-heading span {
  color: rgba(247, 244, 239, 0.58);
  font-size: 13px;
}

.products-menu-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.products-menu-group {
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.products-menu-group h3 {
  margin: 0 0 6px;
  color: var(--orange);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.products-menu-group p {
  min-height: 36px;
  margin: 0 0 6px;
  color: rgba(247, 244, 239, 0.58);
  font-size: 12px;
  line-height: 1.4;
}

.products-menu-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 8px;
  align-items: center;
  min-height: 30px;
  border-top: 1px solid rgba(247, 244, 239, 0.12);
  color: #f7f4ef;
  text-decoration: none;
  transition: color 180ms ease;
}

.products-menu-item:first-child {
  border-top: 0;
}

.products-menu-item:hover {
  color: var(--orange);
}

.products-menu-name {
  overflow: hidden;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.products-menu-detail {
  color: rgba(247, 244, 239, 0.58);
  font-size: 12px;
  white-space: nowrap;
}

.products-menu-arrow {
  color: var(--orange);
  font-size: 14px;
  line-height: 1;
}

.site-header.is-over-content .product-dropdown {
  border-color: rgba(16, 17, 18, 0.08);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 28px 90px rgba(25, 27, 29, 0.14);
}

.site-header.is-over-content .products-menu-heading strong,
.site-header.is-over-content .products-menu-item {
  color: #101112;
}

.site-header.is-over-content .products-menu-heading span,
.site-header.is-over-content .products-menu-group p,
.site-header.is-over-content .products-menu-detail {
  color: rgba(16, 17, 18, 0.54);
}

.site-header.is-over-content .products-menu-group {
  background: transparent;
}

.site-header.is-over-content .products-menu-item {
  border-top-color: rgba(8, 9, 10, 0.06);
}

.site-header.is-over-content .products-menu-item:hover {
  color: var(--orange);
}

.site-header.is-over-hero .product-dropdown,
html[data-theme="dark"] .site-header.is-over-content .product-dropdown {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(8, 9, 10, 0.78);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
}

.site-header.is-over-hero .products-menu-heading strong,
.site-header.is-over-hero .products-menu-item,
html[data-theme="dark"] .site-header.is-over-content .products-menu-heading strong,
html[data-theme="dark"] .site-header.is-over-content .products-menu-item {
  color: #f7f4ef;
}

.site-header.is-over-hero .products-menu-group,
html[data-theme="dark"] .site-header.is-over-content .products-menu-group {
  background: transparent;
}

.site-header.is-over-hero .products-menu-heading span,
.site-header.is-over-hero .products-menu-group p,
.site-header.is-over-hero .products-menu-detail,
html[data-theme="dark"] .site-header.is-over-content .products-menu-heading span,
html[data-theme="dark"] .site-header.is-over-content .products-menu-group p,
html[data-theme="dark"] .site-header.is-over-content .products-menu-detail {
  color: rgba(247, 244, 239, 0.58);
}

.site-header.is-over-hero .products-menu-item,
html[data-theme="dark"] .site-header.is-over-content .products-menu-item {
  border-top-color: rgba(247, 244, 239, 0.12);
}

.site-header.is-over-hero .products-menu-item:hover,
html[data-theme="dark"] .site-header.is-over-content .products-menu-item:hover {
  color: var(--orange);
}

.text-button {
  color: #f5f3ef;
}

.nav button:hover,
.nav a:hover,
.theme-button:hover,
.text-button:hover {
  border-color: transparent;
}

.nav-cta,
.hero-cta,
.card-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid var(--inverse);
  border-radius: 6px;
  background: var(--inverse);
  color: var(--inverse-text);
  font-weight: 700;
  font-size: 12px;
  text-decoration: none;
}

.nav-cta:hover,
.hero-cta:hover,
.card-cta:hover {
  box-shadow: 0 18px 40px rgba(16, 17, 18, 0.18);
}

html[data-theme="dark"] .nav-cta:hover,
html[data-theme="dark"] .hero-cta:hover,
html[data-theme="dark"] .card-cta:hover {
  box-shadow: 0 18px 44px rgba(255, 255, 255, 0.1);
}

.menu-button {
  display: none;
  width: 44px;
  height: 44px;
  padding: 0;
}

.menu-button span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  background: currentColor;
}

/*
PROTECTED HERO SYSTEM
This block supports the homepage scroll gate:

* .hero-scroll-stage
* .hero-sticky-viewport
* .hero-bg-scroll
* .hero-bg using --hero-bg-y

Do not rewrite this block during unrelated product, gallery, navigation, or content tasks.
*/
.hero-scroll-stage {
  position: relative;
  height: var(--hero-stage-height);
  min-height: 720px;
  max-height: 820px;
  overflow: visible;
  background: transparent;
  isolation: isolate;
}

.hero-sticky-viewport {
  position: relative;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background: #08090a;
}

.hero-bg-scroll {
  position: absolute;
  inset: 0;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

html[data-theme="dark"] .hero-scroll-stage {
  background: transparent;
}

.hero-slide {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 520px) minmax(0, 1fr);
  align-items: center;
  width: 100%;
  max-width: none;
  height: 100%;
  min-height: 0;
  margin: 0;
  padding: 70px var(--content-offset) clamp(26px, 2.4vw, 38px);
}

.hero-ui {
  position: relative;
  width: 100%;
  max-width: none;
  height: 100%;
  z-index: 2;
  margin: 0;
  touch-action: pan-y;
  pointer-events: none;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: auto;
  min-height: 100%;
  object-fit: cover;
  object-position: var(--hero-position, center 48%);
  filter: saturate(1.02) contrast(1.02);
  transform: translate3d(0, var(--hero-bg-y, 0px), 0);
  will-change: transform;
}

html[data-theme="dark"] .hero-bg {
  filter: saturate(1.02) contrast(1.02);
}

@media (min-width: 1024px) {
  .hero-scroll-stage,
  .hero,
  .hero-b-series {
    height: clamp(640px, 78svh, 860px);
    max-height: none;
  }
}

@media (min-width: 1440px) {
  .hero-scroll-stage,
  .hero,
  .hero-b-series {
    height: clamp(700px, 82svh, 900px);
    max-height: none;
  }
}

.hero-image-link {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
  cursor: pointer;
}

.hero-copy {
  position: relative;
  z-index: 3;
  grid-column: 1;
  justify-self: start;
  align-items: flex-start;
  width: clamp(420px, 36vw, 560px);
  min-width: 420px;
  max-width: 560px;
  color: #f5f3ef;
  text-align: left;
  transform: translateY(40px);
  pointer-events: auto;
}

.hero-slide-b-series .hero-copy {
  grid-column: 2;
  justify-self: end;
  align-items: flex-end;
  max-width: 560px;
  text-align: right;
}

.hero-slide-b-series .hero-text {
  margin-left: auto;
  margin-right: 0;
}

.hero-slide-b-series .hero-features {
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 0;
  text-align: right;
}

.hero-eyebrow {
  margin: 0 0 12px;
  color: #f5f3ef;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.hero-title {
  max-width: 460px;
  margin: 14px 0 18px;
  font-size: clamp(44px, 4.2vw, 68px);
  line-height: 0.96;
  letter-spacing: -0.055em;
}

.hero-slide-b-series .hero-title {
  margin-right: 0;
  margin-left: auto;
}

.hero-slide-s35 .hero-title {
  max-width: 520px;
}

.hero-slide-s35 .hero-copy {
  grid-column: 1;
  justify-self: start;
  max-width: 480px;
  text-align: left;
}

.hero-text {
  max-width: 460px;
  margin: 0;
  color: rgba(245, 243, 239, 0.82);
  font-size: 16px;
  line-height: 1.45;
  letter-spacing: -0.012em;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(4, minmax(86px, max-content));
  justify-content: start;
  gap: 18px;
  max-width: 560px;
  margin: 24px 0 0;
}

.hero-feature {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: auto;
  flex-shrink: 0;
  min-height: auto;
  margin-right: 0;
  padding-right: 0;
  border-right: 0;
  color: #f5f3ef;
  font-size: 13px;
  line-height: 1.18;
}

.hero-feature:last-child {
  margin-right: 0;
  padding-right: 0;
  border-right: 0;
}

.hero-feature-icon {
  display: inline-block;
  flex: 0 0 6px;
  width: 6px;
  height: 6px;
  border: 0;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.65;
}

.hero-badge {
  display: inline-flex;
  width: fit-content;
  min-height: 26px;
  align-items: center;
  margin-bottom: 12px;
  padding: 7px 13px;
  border: 0;
  border-radius: 999px;
  background: rgba(8, 9, 10, 0.88);
  color: #fff;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.04em;
}

.hero-actions {
  position: relative;
  bottom: auto;
  left: auto;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 18px;
  width: auto;
  margin-top: 18px;
  transform: none;
  pointer-events: auto;
  white-space: nowrap;
  flex-shrink: 0;
}

.hero-slide-b-series .hero-actions {
  right: auto;
  left: auto;
  justify-content: flex-end;
  text-align: right;
}

.hero-ui .hero-cta {
  min-height: 68px;
  padding: 0 28px;
  border-color: var(--orange);
  background: var(--orange);
  color: #101112;
  font-size: 24px;
}

.hero-ui .text-button {
  min-height: 68px;
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
  flex: 0 0 auto;
}

.view-all-products {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  flex: 0 0 auto;
}

@media (max-width: 1360px) {
  .hero-features {
    grid-template-columns: repeat(2, minmax(120px, max-content));
    row-gap: 10px;
    column-gap: 24px;
  }

  .hero-actions {
    margin-top: 14px;
  }
}

@media (max-width: 1100px) {
  .hero-copy,
  .hero-slide-b-series .hero-copy,
  .hero-slide-s35 .hero-copy {
    width: min(88vw, 520px);
    min-width: 0;
  }

  .hero-features {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .hero-actions {
    margin-top: 16px;
  }
}

.hero-arrows,
.hero-arrow,
.hero-dots,
.hero-index {
  pointer-events: auto;
}

.hero-arrows {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
}

.hero-arrow {
  position: absolute;
  top: 50%;
  z-index: 6;
  display: grid;
  width: clamp(38px, 3vw, 52px);
  height: clamp(38px, 3vw, 52px);
  place-items: center;
  flex-shrink: 0;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.035);
  color: var(--orange);
  box-shadow: none;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  transform: translateY(-50%);
  transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.hero-arrow::before {
  content: "";
  width: 42%;
  height: 42%;
  background: currentColor;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  color: #ff6a1a;
  fill: #ff6a1a;
}

.hero-arrow:has(svg)::before {
  content: none;
}

.hero-arrow svg {
  position: relative;
  z-index: 1;
  display: block;
  width: 22px;
  height: 22px;
  color: var(--orange);
  opacity: 1;
  visibility: visible;
  pointer-events: none;
}

.hero-arrow svg path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hero-arrow-left {
  left: clamp(32px, 5vw, 128px);
}

.hero-arrow-left::before {
  mask-image: url("/assets/icons/arrowleft.svg");
  -webkit-mask-image: url("/assets/icons/arrowleft.svg");
}

.hero-arrow-right {
  right: clamp(32px, 5vw, 128px);
}

.hero-arrow-right::before {
  mask-image: url("/assets/icons/arrowright.svg");
  -webkit-mask-image: url("/assets/icons/arrowright.svg");
}

.hero-arrow:hover {
  border-color: rgba(255, 255, 255, 0.36);
  background: rgba(0, 0, 0, 0.1);
  transform: translateY(-50%) scale(1.04);
}

@media (max-width: 767px) {
  .hero-arrow {
    top: auto;
    bottom: 18px;
    z-index: 8;
    width: 42px;
    height: 42px;
    color: var(--orange);
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .hero-arrow-left {
    left: 18px;
  }

  .hero-arrow-right {
    right: 18px;
  }

  .hero-arrow:hover {
    transform: none;
  }

  .hero-dots,
  .hero-pagination {
    right: auto;
    bottom: 28px;
    left: 50%;
    z-index: 8;
    justify-content: center;
    width: auto;
    max-width: calc(100vw - 140px);
    gap: 10px;
    transform: translateX(-50%);
  }
}

.hero-dots {
  position: absolute;
  bottom: clamp(22px, 2.5vw, 34px);
  left: var(--content-offset);
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 14px;
  transform: none;
}

.hero-index-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: auto;
  height: auto;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: rgba(245, 243, 239, 0.42);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1;
  transition: color 220ms ease, opacity 220ms ease;
}

.hero-index-number {
  line-height: 1;
}

.hero-index-line {
  display: block;
  width: 32px;
  height: 2px;
  border-radius: 999px;
  background: rgba(245, 243, 239, 0.28);
  transition: width 220ms ease, background 220ms ease, opacity 220ms ease;
}

.hero-index-item:last-child .hero-index-line {
  display: none;
}

.hero-index-item.is-active {
  color: #f5f3ef;
}

.hero-index-item.is-active .hero-index-line {
  width: 42px;
  background: #f5f3ef;
}

.hero-index-item:hover {
  color: #f5f3ef;
}

.hero-index-item:hover .hero-index-line {
  background: rgba(245, 243, 239, 0.72);
}

.home-content-layer {
  position: relative;
  z-index: 3;
  width: 100%;
  min-height: 100svh;
  margin: 0;
  padding: 0;
  background: var(--bg);
}

.home-content-layer .kicker {
  color: var(--orange);
}

/* Product Family */
.product-family-section {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 44px;
  align-items: start;
  width: var(--wide-width);
  max-width: var(--wide-max);
  margin-top: 0;
  margin-inline: auto;
  padding: var(--space-section-tight) 0;
  transform: none;
}

.product-family-intro {
  position: relative;
  top: 0;
}

.product-family-intro h2 {
  max-width: 360px;
  margin-bottom: 16px;
  font-size: var(--font-section-title);
  line-height: 1.08;
}

.product-family-intro .text-button {
  color: var(--text);
}

.product-family-intro .text-button .arrow-accent {
  color: var(--orange);
}

.product-family-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 1fr));
  gap: 18px;
}

.product-family-card {
  display: grid;
  grid-template-rows: 190px 1fr auto;
  gap: 10px;
  min-height: 280px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-solid);
  transition: transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease;
}

.product-family-card:hover {
  border-color: rgba(222, 41, 16, 0.22);
  box-shadow: 0 18px 46px rgba(17, 18, 19, 0.1);
  transform: translateY(-3px);
}

.family-image,
.product-media,
.feature-visual,
.product-hero-media {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 66%, rgba(255, 255, 255, 0.76), transparent 46%),
    linear-gradient(145deg, rgba(234, 238, 238, 0.72), rgba(255, 255, 255, 0.92));
}

html[data-theme="dark"] .family-image,
html[data-theme="dark"] .product-media,
html[data-theme="dark"] .feature-visual,
html[data-theme="dark"] .product-hero-media {
  background:
    radial-gradient(circle at 50% 66%, rgba(255, 255, 255, 0.7), transparent 46%),
    linear-gradient(145deg, rgba(235, 239, 239, 0.96), rgba(255, 255, 255, 0.82));
}

.family-image {
  width: 100%;
  height: 190px;
  border-radius: 6px;
}

.family-image img,
.product-media img,
.feature-visual img,
.product-hero-media img {
  position: relative;
  z-index: 1;
  width: 88%;
  height: 88%;
  object-fit: contain;
  object-position: center;
}

.family-image img {
  position: absolute;
  inset: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  object-fit: contain;
  object-position: center;
  transform: scale(1.18);
}

.product-family-card h3 {
  margin: 0 0 5px;
  font-size: 18px;
}

.product-family-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.product-family-card > span {
  justify-self: end;
  color: var(--orange);
  font-weight: 900;
}

/* Sections */
.trust-line {
  padding: 24px 0 8px;
  border-bottom: 1px solid var(--line);
}

.trust-line p {
  max-width: var(--text-max);
  margin: 0;
  color: var(--muted);
  font-size: clamp(18px, 2vw, 26px);
  font-weight: 800;
  line-height: 1.12;
}

.section {
  padding: var(--space-section) 0;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 28px;
}

.philosophy,
.capabilities {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 56px;
  align-items: start;
}

.section.philosophy,
.section.capabilities {
  padding-top: var(--space-section-tight);
  padding-bottom: var(--space-section-tight);
}

.philosophy-grid,
.detail-grid {
  display: grid;
  gap: 14px;
}

.philosophy-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.philosophy-grid article,
.detail-grid article {
  min-height: 160px;
  padding: var(--space-card);
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
}

.philosophy-grid article {
  min-height: 130px;
  padding: 18px 20px;
}

.philosophy-grid p,
.detail-grid h3 {
  color: var(--muted);
  line-height: 1.45;
}

.featured {
  display: grid;
  gap: 12px;
  width: var(--wide-width);
  max-width: var(--wide-max);
  padding: var(--space-section-tight) 0 var(--space-section);
}

.feature-product {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 260px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-solid);
}

.feature-product.is-reversed {
  grid-template-columns: 1fr 1fr;
}

.feature-product.is-reversed .feature-visual {
  order: 2;
}

.feature-visual img {
  width: 58%;
  height: 58%;
}

.feature-copy {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(20px, 2.4vw, 34px);
}

.feature-copy p,
.b2b-entry p,
.trust-line p {
  max-width: var(--text-max);
}

.feature-copy::after {
  content: "→";
  position: absolute;
  right: clamp(20px, 2.4vw, 34px);
  bottom: clamp(20px, 2.4vw, 34px);
  color: var(--orange);
  font-size: 24px;
  line-height: 1;
}

.feature-copy .kicker {
  margin-bottom: 12px;
  color: var(--orange);
  font-size: var(--font-kicker);
  line-height: 1;
}

.feature-copy p,
.story > p,
.product-hero-copy p,
.statement p,
.product-card-copy p,
.page-hero p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}

.feature-copy h3,
.product-card-copy h3,
.product-hero-copy h2 {
  max-width: 620px;
  margin: -8px 0 18px;
  color: var(--text);
  font-size: clamp(20px, 1.9vw, 28px);
  line-height: 1.12;
}

.feature-copy h2 {
  margin-bottom: 10px;
  font-size: clamp(24px, 2.8vw, 38px);
  line-height: 1.04;
}

.feature-copy h3 {
  margin: 0 0 14px;
  font-size: clamp(18px, 1.4vw, 22px);
  line-height: 1.18;
}

.feature-copy > p:not(.kicker) {
  max-width: 520px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.5;
}

.product-card-copy h3 {
  margin-top: -2px;
  font-size: 22px;
}

.product-hero-copy h2 {
  font-size: clamp(20px, 1.9vw, 28px);
  line-height: 1.12;
  letter-spacing: -0.024em;
}

.feature-copy .card-cta {
  align-self: flex-start;
  margin-top: 18px;
}

.b2b-entry {
  padding: var(--space-section-tight) 0 var(--space-section);
  border-top: 1px solid var(--line);
}

.b2b-entry .section-heading {
  max-width: 760px;
  margin-bottom: 28px;
}

.entry-card-grid,
.process-grid,
.qa-list {
  display: grid;
  gap: 14px;
}

.entry-card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.entry-card,
.process-grid article,
.qa-list article {
  min-height: 150px;
  padding: var(--space-card);
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-solid);
}

a.entry-card {
  display: flex;
  flex-direction: column;
  color: var(--text);
  text-decoration: none;
  transition: transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease;
}

a.entry-card:hover {
  border-color: rgba(242, 106, 33, 0.34);
  box-shadow: var(--shadow);
  transform: translateY(-4px);
}

.entry-card p,
.process-grid p,
.qa-list p {
  color: var(--muted);
  line-height: 1.48;
}

.entry-card span {
  margin-top: auto;
  color: var(--orange);
  font-weight: 800;
}

.process-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.process-grid article > span {
  display: block;
  margin-bottom: 20px;
  color: var(--orange);
  font-size: var(--font-small);
  font-weight: 900;
  letter-spacing: 0.08em;
}

.qa-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.download-list span {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  gap: 12px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel-solid);
  color: var(--text);
  font-weight: 800;
}

.download-list small {
  color: var(--quiet);
  font-size: 12px;
  font-weight: 800;
}

.story,
.partnership,
.contact {
  padding: var(--space-section-tight) clamp(0px, 2vw, 22px);
}

.story,
.partnership {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
  gap: clamp(42px, 7vw, 92px);
  align-items: start;
  border-top: 1px solid var(--line);
}

.story h2,
.partnership h2 {
  max-width: 620px;
  font-size: clamp(28px, 3.2vw, 46px);
  line-height: 1.06;
  letter-spacing: -0.034em;
}

.story > p,
.partnership-copy > p {
  max-width: 560px;
  margin: 34px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.015em;
}

.partnership {
  padding-top: var(--space-section-tight);
}

.partnership-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.partner-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 680px;
  margin-top: 34px;
}

.partner-list span {
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
}

.contact {
  min-height: 340px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    linear-gradient(135deg, transparent, rgba(222, 41, 16, 0.04)),
    var(--panel-solid);
}

.contact h2 {
  max-width: 900px;
}

.contact > p:not(.kicker) {
  max-width: 680px;
  margin-bottom: 22px;
  color: var(--muted);
  font-size: var(--font-body-lg);
  line-height: 1.5;
}

.page,
.product-page {
  padding-top: 104px;
}

.page-hero {
  padding: 54px 0 44px;
}

.page-hero h1 {
  max-width: 760px;
  font-size: clamp(32px, 4vw, 56px);
}

/* Product Cards */
.product-grid,
.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 14px;
  padding-bottom: var(--space-section);
}

.product-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-solid);
  transition: transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease;
}

.product-card:hover {
  border-color: rgba(222, 41, 16, 0.24);
  box-shadow: var(--shadow);
  transform: translateY(-4x);
}

.product-media {
  width: 100%;
  min-height: clamp(220px, 22vw, 320px);
  aspect-ratio: 1.24;
  padding: 0;
  border: 0;
  border-radius: 0;
}

.product-media img {
  transition: transform 360ms ease;
}

.product-card .product-card-image--ex {
  object-fit: contain;
  object-position: center 32%;
  transform: translateY(-10%);
}

.product-card:hover .product-media img {
  transform: scale(1.02);
}

.product-card:hover .product-card-image--ex {
  transform: translateY(-10%) scale(1.02);
}

.product-card-copy {
  padding: var(--space-card);
}

.product-card-copy span {
  display: block;
  margin-bottom: 12px;
  color: var(--orange);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-card-copy .card-cta {
  width: 100%;
  margin-top: 18px;
}

/* Product Detail */
.breadcrumb {
  display: flex;
  gap: 10px;
  align-items: center;
  width: var(--content-max);
  margin: 0 auto 34px;
  color: var(--quiet);
  font-size: 13px;
  font-weight: 800;
}

.breadcrumb a {
  color: inherit;
  text-decoration: none;
}

.breadcrumb a:hover {
  color: var(--orange);
}

.product-hero {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 28px;
  align-items: center;
  min-height: auto;
  padding-bottom: var(--space-section-tight);
}

.product-hero:has(.product-color-selector) {
  align-items: stretch;
}

.product-hero:has(.product-color-selector) .product-hero-copy {
  display: flex;
  flex-direction: column;
}

.product-hero-copy h1 {
  font-size: clamp(32px, 3.8vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.034em;
}

.product-hero-copy p {
  max-width: 620px;
  font-size: 15px;
  line-height: 1.5;
}

.product-hero-media {
  min-height: clamp(320px, 42vw, 520px);
  border-radius: 8px;
}

.gl-product-hero-image {
  transform: scale(1.18);
  transform-origin: center center;
}

.model-selector {
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  gap: 48px;
  margin-top: auto;
  margin-bottom: 30px;
  padding: 0 28px;
  overflow: hidden;
  border-radius: 0;
  background: #111;
}

.model-label {
  min-width: 150px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.16em;
  white-space: nowrap;
}

.model-tabs {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}

.model-tab {
  position: relative;
  height: 64px;
  padding: 0 10px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.88);
  font: inherit;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: color 200ms ease;
}

.model-tab:hover {
  color: #fff;
}

.model-tab.active {
  color: var(--orange);
}

.model-tab.active::after {
  content: "";
  position: absolute;
  right: 8px;
  bottom: 0;
  left: 8px;
  height: 2px;
  background: var(--orange);
}

.product-color-selector {
  width: min(100%, 560px);
  margin-top: 0;
  padding-top: 0;
}

.product-hero-copy .product-color-selector > p {
  max-width: none;
  margin: 0 0 14px;
  color: var(--text);
  font-size: 20px;
  font-weight: 800;
  line-height: 1.1;
}

.product-color-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.product-color-option {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 132px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--panel-solid);
  color: var(--text);
  font: inherit;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.product-color-option.is-unavailable {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
  filter: grayscale(1);
}

.product-color-option.is-unavailable::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.5);
  pointer-events: none;
}

html[data-theme="dark"] .product-color-option.is-unavailable::after {
  background: rgba(0, 0, 0, 0.5);
}

.product-color-option:hover {
  border-color: rgba(242, 106, 33, 0.46);
  transform: translateY(-1px);
}

.product-color-option.is-unavailable:hover {
  border-color: var(--line);
  transform: none;
}

.product-color-option.is-active {
  border-color: var(--orange);
  box-shadow: inset 0 0 0 2px var(--orange);
}

.product-color-swatch {
  display: flex;
  width: 42px;
  height: 42px;
  margin-bottom: 14px;
  overflow: hidden;
  border: 1px solid rgba(16, 17, 18, 0.18);
  border-radius: 50%;
  background: var(--swatch);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.18),
    0 8px 22px rgba(16, 17, 18, 0.12);
}

.product-color-swatch-dot {
  flex: 1 1 0;
  background: var(--swatch-dot);
}

html[data-theme="dark"] .product-color-option {
  border-color: rgba(245, 242, 236, 0.18);
  background: rgba(245, 242, 236, 0.05);
}

html[data-theme="dark"] .product-color-option:hover {
  border-color: rgba(242, 106, 33, 0.52);
}

html[data-theme="dark"] .product-color-option.is-active {
  border-color: var(--orange);
}

html[data-theme="dark"] .product-color-swatch {
  border-color: rgba(245, 242, 236, 0.22);
}

.product-hero.is-b-series {
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  min-height: auto;
  padding-bottom: 32px;
}

.product-hero.is-b-series .product-hero-media {
  order: 1;
  min-height: 0;
  height: clamp(320px, 34vw, 430px);
}

.product-hero.is-b-series .product-hero-copy {
  order: 2;
}

.product-hero.is-b-series .product-hero-copy h1 {
  font-size: clamp(32px, 3.8vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.034em;
}

.statement {
  width: var(--content-max);
  margin-inline: auto;
  padding: var(--space-section) 0;
  text-align: center;
}

.statement h2 {
  font-size: clamp(28px, 3.2vw, 46px);
  line-height: 1.06;
}

.detail-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: var(--content-max);
  margin-inline: auto;
  padding-bottom: var(--space-section);
}

.detail-grid span {
  display: block;
  width: 18px;
  height: 3px;
  margin-bottom: 28px;
  background: var(--red);
}

.detail-grid p {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
}

.model-nav {
  position: sticky;
  top: 76px;
  z-index: 8;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: var(--content-max);
  margin-inline: auto;
  padding: 12px 0;
}

.model-nav a {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel-solid);
  color: var(--text);
  font-weight: 800;
  text-decoration: none;
}

.model-nav a:hover {
  border-color: rgba(242, 106, 33, 0.42);
  color: var(--orange);
}

.model-specs,
.product-gallery,
.product-section,
.certifications,
.downloads,
.product-inquiry {
  width: var(--content-max);
  margin-inline: auto;
  padding: var(--space-section-tight) 0;
  border-top: 1px solid var(--line);
}

.product-gallery {
  width: 100%;
  margin-inline: 0;
}

.model-specs {
  width: min(92vw, 1280px);
  margin-inline: auto;
}

.model-specs > .section-heading {
  width: 100%;
  margin-inline: 0;
}

.product-gallery > .section-heading {
  width: var(--content-max);
  margin-inline: auto;
}

.horizontal-bleed {
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  margin-left: 50%;
  overflow: hidden;
  transform: translateX(-50%);
}

.horizontal-control-row {
  position: relative;
  display: flex;
  height: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: min(1180px, calc(100vw - 48px));
  margin: 0 auto 16px;
  transform: none;
}

.horizontal-control-row:hover {
  margin-top: 0;
  transform: none;
}

.scroll-arrow {
  position: relative;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  z-index: 5;
  box-sizing: border-box;
  display: inline-flex;
  width: 44px;
  min-width: 44px;
  height: 44px;
  min-height: 44px;
  flex: 0 0 44px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.88);
  cursor: pointer;
  font: inherit;
  line-height: 1;
  transform: none;
  translate: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    box-shadow 160ms ease,
    opacity 160ms ease;
}

.scroll-arrow:hover {
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  width: 44px;
  min-width: 44px;
  height: 44px;
  min-height: 44px;
  margin: 0;
  padding: 0;
  border-width: 1px;
  border-color: rgba(255, 122, 0, 0.55);
  background: rgba(255, 122, 0, 0.14);
  color: #ff7a00;
  box-shadow: 0 0 0 1px rgba(255, 122, 0, 0.08);
  transform: none;
  translate: none;
}

button.scroll-arrow:hover {
  transform: none;
  translate: none;
}

.scroll-arrow:active {
  background: rgba(255, 122, 0, 0.18);
  transform: none;
  translate: none;
}

.scroll-arrow:disabled {
  opacity: 0.32;
  cursor: default;
  box-shadow: none;
}

.scroll-arrow:disabled:hover {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.88);
  box-shadow: none;
}

.scroll-arrow-icon {
  display: block;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  margin: 0;
  padding: 0;
  line-height: 18px;
  text-align: center;
  transform: none;
  translate: none;
  pointer-events: none;
}

.scroll-arrow:hover .scroll-arrow-icon,
.scroll-arrow:hover > span,
.scroll-arrow:hover > svg,
.scroll-arrow:active .scroll-arrow-icon,
.scroll-arrow:active > span,
.scroll-arrow:active > svg {
  margin: 0;
  padding: 0;
  transform: none;
  translate: none;
}

.horizontal-control-row .scroll-arrow {
  position: relative;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  box-sizing: border-box;
  display: inline-flex;
  width: 44px;
  min-width: 44px;
  height: 44px;
  min-height: 44px;
  flex: 0 0 44px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 1px solid rgba(16, 17, 18, 0.28);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.94);
  color: rgba(16, 17, 18, 0.9);
  box-shadow: 0 10px 28px rgba(16, 17, 18, 0.12);
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  line-height: 1;
  transform: none;
  translate: none;
}

.horizontal-control-row .scroll-arrow:hover {
  border-color: rgba(255, 122, 0, 0.55);
  background: rgba(255, 122, 0, 0.14);
  color: #ff7a00;
  box-shadow: 0 0 0 1px rgba(255, 122, 0, 0.08), 0 12px 30px rgba(16, 17, 18, 0.14);
  transform: none;
  translate: none;
}

.horizontal-control-row .scroll-arrow:disabled {
  opacity: 0.42;
  visibility: visible;
  cursor: default;
}

html[data-theme="dark"] .horizontal-control-row .scroll-arrow {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.24);
}

.horizontal-scroll {
  box-sizing: border-box;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-padding-inline: max(5vw, 24px);
  padding-inline: max(5vw, 24px);
  padding-bottom: 10px;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: #ff7a00 rgba(255, 255, 255, 0.12);
  -webkit-overflow-scrolling: touch;
}

.horizontal-track {
  width: fit-content;
  max-width: none;
  min-width: 0;
}

.model-spec-grid,
.gallery-grid {
  gap: var(--scroll-gap);
  overflow: visible;
  scroll-snap-type: x proximity;
  padding-inline: 0;
}

.model-spec-grid {
  display: flex;
  gap: clamp(20px, 2vw, 32px);
}

.gallery-grid {
  display: flex;
  gap: clamp(20px, 2vw, 32px);
}

.gallery-grid {
  --scroll-card-width: var(--gallery-card-width);
}

.horizontal-scroll::-webkit-scrollbar {
  height: 10px;
}

.horizontal-scroll::-webkit-scrollbar-track {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
}

.horizontal-scroll::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 999px;
  background: #ff7a00;
  background-clip: padding-box;
}

.horizontal-scroll::-webkit-scrollbar-thumb:hover {
  border: 2px solid transparent;
  background: #ff8c1a;
  background-clip: padding-box;
}

.model-spec-card,
.gallery-grid article,
.feature-detail-grid article,
.use-case-grid article {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-solid);
}

.model-spec-card {
  flex: 0 0 clamp(360px, 28vw, 520px);
  min-width: 360px;
  padding: clamp(18px, 2vw, 28px);
  scroll-snap-align: start;
}

@media (min-width: 1440px) {
  .model-spec-grid {
    gap: 28px;
  }

  .model-spec-card {
    flex-basis: clamp(360px, 28vw, 520px);
  }
}

@media (max-width: 900px) {
  .model-spec-grid {
    gap: 18px;
  }

  .model-spec-card {
    flex-basis: clamp(300px, 42vw, 380px);
  }
}

@media (max-width: 640px) {
  .model-spec-grid {
    gap: 14px;
  }

  .model-spec-card {
    flex-basis: min(84vw, 360px);
  }
}

.model-spec-card h3 {
  margin-bottom: 14px;
  font-size: 20px;
}

.model-spec-card dl {
  margin: 0;
}

.model-spec-card div:has(dt) {
  display: grid;
  grid-template-columns: minmax(120px, 0.9fr) minmax(120px, 1fr);
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}

.model-spec-card div:has(dt):last-child,
.specs div:has(dt):last-child {
  border-bottom: 0;
}

.gallery-grid article {
  flex: 0 0 clamp(420px, 38vw, 680px);
  min-width: 420px;
  overflow: hidden;
  scroll-snap-align: start;
}

html[data-theme="dark"] .gallery-grid article {
  border-color: rgba(16, 17, 18, 0.12);
  background: #fbfaf7;
  color: #101112;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 1.35;
  object-fit: cover;
}

.gallery-grid h3,
.gallery-grid p {
  margin-right: 18px;
  margin-left: 18px;
}

.gallery-grid h3 {
  margin-top: 18px;
}

.gallery-grid p {
  margin-bottom: 20px;
  color: var(--muted);
  line-height: 1.45;
}

html[data-theme="dark"] .gallery-grid p {
  color: rgba(16, 17, 18, 0.62);
}

/* Product Gallery uses light-card islands even inside dark sections */
.product-gallery .gallery-grid article,
.product-gallery-card,
.gl-product-gallery-card {
  --gallery-card-bg: #f7f6f2;
  --gallery-card-title: #111111;
  --gallery-card-text: rgba(0, 0, 0, 0.58);
  --gallery-card-border: rgba(0, 0, 0, 0.12);

  overflow: hidden;
  border: 1px solid var(--gallery-card-border);
  border-radius: 16px;
  background: var(--gallery-card-bg);
  color: var(--gallery-card-title);
  box-shadow: none;
}

.product-gallery-card-copy,
.gl-product-gallery-body {
  background: var(--gallery-card-bg);
  color: var(--gallery-card-title);
}

.product-gallery .gallery-grid h3,
.product-gallery-card-title,
.product-gallery-card h3,
.gl-product-gallery-card h3 {
  color: var(--gallery-card-title);
  opacity: 1;
  font-weight: 700;
}

.product-gallery .gallery-grid p,
.product-gallery-card-description,
.product-gallery-card p,
.gl-product-gallery-card p {
  color: var(--gallery-card-text);
  opacity: 1;
}

.product-gallery .period-accent,
.product-gallery .gallery-grid article .period-accent,
.product-gallery-card .period-accent,
.gl-product-gallery-card .period-accent {
  color: #ff7a00;
}

html[data-theme="dark"] .product-gallery .gallery-grid article,
html[data-theme="dark"] .product-gallery-card,
html[data-theme="dark"] .gl-product-gallery-card {
  border-color: var(--gallery-card-border);
  background: var(--gallery-card-bg);
  color: var(--gallery-card-title);
}

html[data-theme="dark"] .product-gallery-card-copy,
html[data-theme="dark"] .gl-product-gallery-body {
  background: var(--gallery-card-bg);
  color: var(--gallery-card-title);
}

html[data-theme="dark"] .product-gallery .gallery-grid h3,
html[data-theme="dark"] .product-gallery-card-title,
html[data-theme="dark"] .product-gallery-card h3,
html[data-theme="dark"] .gl-product-gallery-card h3 {
  color: var(--gallery-card-title);
  opacity: 1;
}

html[data-theme="dark"] .product-gallery .gallery-grid p,
html[data-theme="dark"] .product-gallery-card-description,
html[data-theme="dark"] .product-gallery-card p,
html[data-theme="dark"] .gl-product-gallery-card p {
  color: var(--gallery-card-text);
  opacity: 1;
}

.feature-detail-grid,
.use-case-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.feature-detail-grid article,
.use-case-grid article {
  padding: clamp(16px, 1.8vw, 24px);
}

.feature-detail-grid h3,
.use-case-grid h3 {
  font-size: 18px;
}

.feature-detail-grid p,
.use-case-grid p,
.product-inquiry p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

.certifications {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 28px;
  align-items: center;
}

.certifications div,
.download-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.certifications span,
.download-list a {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel-solid);
}

.certifications span {
  padding: 0 14px;
  color: var(--text);
  font-weight: 900;
}

.downloads {
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  gap: 34px;
  align-items: start;
}

.download-list a {
  gap: 12px;
  padding: 0 14px;
  color: var(--text);
  font-weight: 800;
  text-decoration: none;
}

.download-list a:hover {
  border-color: rgba(242, 106, 33, 0.42);
}

.product-inquiry {
  min-height: 300px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    linear-gradient(135deg, transparent, rgba(242, 106, 33, 0.08)),
    var(--panel-solid);
  padding: clamp(28px, 4vw, 48px);
}

.product-inquiry h2 {
  max-width: 760px;
  font-size: clamp(28px, 3.2vw, 46px);
  line-height: 1.06;
}

.product-inquiry p {
  max-width: 620px;
  margin-bottom: 24px;
  font-size: 15px;
}

.specs {
  display: grid;
  grid-template-columns: 0.78fr 1fr;
  gap: 42px;
  width: var(--content-max);
  margin-inline: auto;
  padding: var(--space-section-tight) 0;
  border-top: 1px solid var(--line);
}

.specs dl {
  margin: 0;
}

.specs div:has(dt) {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}

dt {
  color: var(--quiet);
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
}

dd {
  margin: 0;
  color: var(--text);
  line-height: 1.45;
}

/* Footer */
footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 36px 0 52px;
  border-top: 1px solid var(--line);
  color: var(--quiet);
  font-size: 13px;
}

.footer-social {
  display: grid;
  gap: 10px;
}

.footer-social p {
  margin: 0;
  color: var(--quiet);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.footer-social-links,
.contact-social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.footer-social-links a,
.contact-social-links a {
  color: var(--muted);
  font-size: 13px;
  text-decoration: none;
}

.footer-social-links a:hover,
.contact-social-links a:hover {
  color: var(--orange);
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 700ms ease, transform 700ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (min-width: 1600px) {
  :root {
    --model-card-width: 400px;
    --gallery-card-width: 370px;
    --related-card-width: 320px;
  }
}

@media (max-width: 1100px) {
  :root {
    --model-card-width: clamp(300px, 44vw, 390px);
    --gallery-card-width: clamp(280px, 42vw, 360px);
    --related-card-width: clamp(250px, 38vw, 320px);
  }
}

@media (max-width: 1023px) {
  :root {
    --nav-panel-gap: 8px;
  }

  html,
  body,
  #root {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }

  html {
    overflow-x: clip;
  }

  body,
  #root,
  main,
  .page,
  .product-page {
    overflow: visible;
  }

  body {
    min-width: 0;
  }

  .site-header {
    width: var(--content-max);
    z-index: 160;
  }

  .nav {
    position: fixed;
    top: calc(var(--nav-top) + var(--nav-height) + var(--nav-panel-gap));
    right: auto;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: calc(100vw - 32px);
    max-height: calc(100dvh - 120px);
    overflow: hidden;
    padding: 0;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: var(--panel-solid);
    box-shadow: var(--shadow);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateX(-50%) translateY(-14px) scale(0.985);
    transform-origin: top center;
    transition:
      opacity 300ms ease,
      transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
      visibility 0s linear 360ms;
    z-index: 120;
  }

  .mobile-nav-scroll {
    display: block;
    max-height: calc(100dvh - 120px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 32px 20px 24px;
  }

  .site-header .nav.is-open {
    background: var(--panel-solid);
  }

  .site-header .nav.is-open button,
  .site-header .nav.is-open a {
    color: var(--text);
  }

  html[data-theme="dark"] .site-header .nav.is-open {
    background: var(--panel-solid);
  }

  html[data-theme="dark"] .site-header .nav.is-open button,
  html[data-theme="dark"] .site-header .nav.is-open a {
    color: #f7f4ef;
  }

  .nav.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0) scale(1);
    transition:
      opacity 260ms ease,
      transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
      visibility 0s;
  }

  .mobile-nav-panel .mobile-nav-scroll > * {
    opacity: 0;
    transform: translateY(-6px);
    transition:
      opacity 260ms ease,
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .mobile-nav-panel.is-open .mobile-nav-scroll > * {
    opacity: 1;
    transform: translateY(0);
  }

  .mobile-nav-panel.is-open .mobile-nav-scroll > *:nth-child(1) {
    transition-delay: 40ms;
  }

  .mobile-nav-panel.is-open .mobile-nav-scroll > *:nth-child(2) {
    transition-delay: 70ms;
  }

  .mobile-nav-panel.is-open .mobile-nav-scroll > *:nth-child(3) {
    transition-delay: 100ms;
  }

  .mobile-nav-panel.is-open .mobile-nav-scroll > *:nth-child(4) {
    transition-delay: 130ms;
  }

  .nav button,
  .nav a {
    justify-content: flex-start;
    width: 100%;
  }

  .mobile-nav-scroll > a,
  .nav .mobile-products-toggle {
    padding-block: 19px;
    font-size: 23px;
    font-weight: 500;
    line-height: 1.18;
  }

  .nav-product {
    width: 100%;
  }

  .desktop-products-link,
  .products-dropdown,
  .product-dropdown {
    display: none !important;
  }

  .nav .mobile-products-toggle {
    display: inline-flex;
  }

  .mobile-products-panel.is-open {
    display: grid;
  }

  .mobile-products-panel {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: none;
    margin: 10px 0 28px;
    padding: 12px 0 4px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    gap: 0;
  }

  .mobile-products-group {
    display: grid;
    gap: 0;
    margin-bottom: 20px;
  }

  .mobile-products-group:last-child {
    margin-bottom: 6px;
  }

  .mobile-products-group h4 {
    margin: 22px 0 9px;
    color: #ff5f1f;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .mobile-products-group a {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    min-height: 0;
    padding: 14px 0;
    overflow: visible;
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    color: #111;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.18;
    text-decoration: none;
    text-overflow: clip;
    white-space: normal;
  }

  .mobile-products-group a span {
    flex-shrink: 0;
    overflow: visible;
    color: rgba(17, 17, 17, 0.58);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.18;
    text-overflow: clip;
    white-space: nowrap;
  }

  html[data-theme="dark"] .mobile-products-panel {
    border-top-color: rgba(255, 255, 255, 0.14);
  }

  html[data-theme="dark"] .mobile-products-group a {
    border-bottom-color: rgba(255, 255, 255, 0.12);
    color: #f7f4ef;
  }

  html[data-theme="dark"] .mobile-products-group a span {
    color: rgba(247, 244, 239, 0.6);
  }

  .nav-cta {
    display: none;
  }

  .menu-button {
    position: relative;
    display: inline-grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border: 0;
    background: transparent;
    color: currentColor;
    cursor: pointer;
    z-index: 170;
    appearance: none;
    -webkit-appearance: none;
  }

  .menu-button span {
    position: absolute;
    width: 28px;
    height: 2px;
    margin: 0;
    border-radius: 999px;
    transform-origin: center;
    transition:
      transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 600ms ease;
  }

  .menu-button span:first-child {
    transform: translateY(-6px) rotate(0deg);
  }

  .menu-button span:last-child {
    transform: translateY(6px) rotate(0deg);
  }

  .menu-button.is-open span:first-child {
    transform: translateY(0) rotate(45deg);
  }

  .menu-button.is-open span:last-child {
    transform: translateY(0) rotate(-45deg);
  }

  .product-family-section,
  .philosophy,
  .capabilities,
  .entry-card-grid,
  .feature-product,
  .feature-product.is-reversed,
  .story,
  .partnership,
  .product-hero,
  .specs,
  .certifications,
  .downloads {
    grid-template-columns: 1fr;
  }

  .product-family-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .feature-product.is-reversed .feature-visual {
    order: initial;
  }

  .detail-grid,
  .feature-detail-grid,
  .use-case-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-grid,
  .qa-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-toggle span,
  .mobile-nav-panel,
  .mobile-nav-panel .mobile-nav-scroll > * {
    transition: none !important;
  }
}

@supports not (overflow: clip) {
  @media (max-width: 1023px) {
    html {
      overflow-x: hidden;
    }
  }
}

@media (max-width: 430px) {
  .mobile-nav-scroll > a,
  .nav .mobile-products-toggle {
    padding-block: 18px;
    font-size: 22px;
  }

  .mobile-products-group h4 {
    margin: 20px 0 8px;
    font-size: 12px;
  }

  .mobile-products-group a {
    padding: 13px 0;
    font-size: 21px;
  }

  .mobile-products-group a span {
    font-size: 19px;
  }
}

@media (max-width: 760px) {
  :root {
    --nav-top: 10px;
    --nav-height: 52px;
    --site-gutter: 20px;
    --site-ratio: calc(100vw - var(--site-gutter) * 2);
    --content-max: min(
      var(--site-max),
      var(--site-ratio),
      calc(100vw - var(--site-gutter) * 2)
    );
    --content-offset: var(--site-gutter);
    --font-display-xl: clamp(32px, 9vw, 40px);
    --font-display-lg: clamp(30px, 8vw, 38px);
    --font-section-title: clamp(24px, 6.5vw, 32px);
    --font-card-title: 19px;
    --font-body: 15px;
    --hero-height: max(560px, 72svh);
    --hero-bg-extra-scroll: 180px;
    --hero-stage-height: var(--hero-height);
    --scroll-gap: 14px;
    --model-card-width: min(84vw, 360px);
    --gallery-card-width: min(84vw, 340px);
    --related-card-width: min(78vw, 300px);
  }

  body {
    min-width: 320px;
  }

  .hero-bg-scroll {
    min-width: 0;
    min-height: 0;
    max-height: none;
    height: 100%;
  }

  .hero-sticky-viewport {
    min-height: 0;
    max-height: none;
  }

  .site-header {
    top: 10px;
    width: calc(100vw - 20px);
    height: 52px;
    min-height: 52px;
    gap: 8px;
  }

  .brand-mark {
    width: 28px;
    height: 28px;
  }

  .brand-text strong {
    font-size: 15px;
  }

  .brand-text small {
    display: none;
  }

  .theme-button {
    width: 48px;
    padding: 0;
    overflow: hidden;
    font-size: 0;
  }

  .theme-button::before {
    content: "";
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-radius: 50%;
  }

  .hero-slide {
    grid-template-columns: 1fr;
    min-width: 0;
    height: 100%;
    min-height: 0;
    padding: 78px 22px 40px;
  }

  .hero-ui {
    height: var(--hero-height);
    min-height: 0;
    max-height: none;
  }

  .hero-title {
    font-size: var(--font-display-lg);
  }

  .hero-copy,
  .hero-slide-s35 .hero-copy {
    grid-column: auto;
    justify-self: start;
    padding-bottom: 78px;
    text-align: left;
    transform: none;
  }

  .hero-slide-b-series .hero-copy {
    grid-column: auto;
    justify-self: end;
    text-align: right;
  }

  .hero-slide-b-series .hero-text {
    margin-left: auto;
  }

  .hero-slide-b-series .hero-features {
    justify-content: flex-end;
    margin-left: auto;
    text-align: right;
  }

  .hero-arrow {
    top: auto;
    bottom: 18px;
    z-index: 8;
    width: 42px;
    height: 42px;
    transform: none;
  }

  .hero-arrow-left {
    left: 18px;
  }

  .hero-arrow-right {
    right: 18px;
  }

  .hero-arrow:hover {
    transform: none;
  }

  .hero-dots {
    right: auto;
    bottom: 28px;
    left: 50%;
    z-index: 8;
    justify-content: center;
    width: auto;
    max-width: calc(100vw - 140px);
    gap: 10px;
    transform: translateX(-50%);
  }

  .hero-index-item {
    font-size: 11px;
  }

  .hero-index-line {
    width: 32px;
  }

  .hero-index-item.is-active .hero-index-line {
    width: 44px;
  }

  .hero-actions {
    position: relative;
    bottom: auto;
    left: auto;
    margin-top: 20px;
    width: auto;
    transform: none;
  }

  .hero-slide-b-series .hero-actions {
    right: auto;
    bottom: auto;
    left: auto;
    transform: none;
  }

  .hero-text {
    font-size: 14px;
  }

  .hero-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    max-width: none;
  }

  .hero-feature {
    width: auto;
    flex-shrink: 1;
    margin-right: 0;
    padding-right: 0;
    border-right: 0;
  }

  .product-family-section,
  .product-family-strip,
  .philosophy-grid,
  .detail-grid,
  .entry-card-grid,
  .process-grid,
  .qa-list,
  .feature-detail-grid,
  .use-case-grid,
  .product-grid,
  .related-grid {
    grid-template-columns: 1fr;
  }

  .product-family-strip {
    gap: 18px;
  }

  .section,
  .b2b-entry,
  .story,
  .partnership,
  .capabilities,
  .contact {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .section,
  .b2b-entry,
  .story,
  .partnership,
  .contact,
  .featured,
  .trust-line,
  .product-family-section,
  .page,
  .product-page,
  .statement,
  .detail-grid,
  .model-nav,
  .product-section,
  .certifications,
  .downloads,
  .product-inquiry,
  .specs,
  .related,
  footer {
    width: calc(100% - 32px);
  }

  .product-family-card {
    grid-template-rows: 180px auto auto;
    min-height: 260px;
    padding: 14px;
  }

  .family-image {
    height: 180px;
  }

  .family-image img {
    inset: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    padding: 0;
    object-fit: contain;
    object-position: center;
    transform: scale(1.18);
  }

  .feature-product {
    min-height: auto;
  }

  .feature-visual {
    min-height: 240px;
  }

  .product-hero-media {
    min-height: 280px;
  }

  .model-selector {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-top: 22px;
    margin-bottom: 18px;
    padding: 14px 16px;
  }

  .model-label {
    min-width: auto;
    font-size: 11px;
  }

  .model-tabs {
    width: 100%;
    justify-content: flex-start;
    gap: 28px;
    overflow-x: auto;
    padding-bottom: 2px;
  }

  .model-tab {
    flex: 0 0 auto;
    height: 42px;
    padding: 0 4px;
    font-size: 20px;
  }

  .product-color-selector {
    margin-top: 0;
  }

  .product-hero-copy .product-color-selector > p {
    margin-bottom: 12px;
    font-size: 18px;
  }

  .product-color-options {
    gap: 10px;
  }

  .product-color-option {
    min-height: 106px;
    padding: 14px;
    border-radius: 14px;
    font-size: 14px;
  }

  .product-color-swatch {
    width: 34px;
    height: 34px;
    margin-bottom: 10px;
  }

  .product-hero.is-b-series .product-hero-media,
  .product-hero.is-b-series .product-hero-copy {
    order: initial;
  }

  .product-hero.is-b-series .product-hero-media {
    height: 280px;
  }

  .model-nav {
    position: relative;
    top: auto;
  }

  .model-specs,
  .product-gallery,
  .product-section,
  .certifications,
  .downloads,
  .product-inquiry {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .product-gallery {
    width: 100%;
  }

  .gallery-grid {
    scroll-snap-type: x mandatory;
  }

  .model-spec-grid {
    scroll-padding-inline: 0;
    scroll-snap-type: x proximity;
    padding-inline: 0;
  }

  .specs div:has(dt) {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  footer {
    flex-direction: column;
  }
}

@media (max-width: 380px) {
  .hero-arrow-left {
    left: 12px;
  }

  .hero-arrow-right {
    right: 12px;
  }
}

/* Homepage layout rails */
@media (max-width: 767px) {
  :root {
    --page-width: calc(100vw - 40px);
    --page-max: none;
    --wide-width: calc(100vw - 40px);
    --wide-max: none;
    --section-gap: 56px;
  }

  body {
    min-width: 320px;
  }

  .product-family-section {
    display: block;
    width: var(--wide-width);
    max-width: none;
  }

  .product-family-intro {
    top: auto;
    margin-bottom: 20px;
  }

  .product-family-strip {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 8px;
  }

  .product-family-card {
    min-width: 72vw;
    scroll-snap-align: start;
  }

  .featured,
  .home-content-layer > .trust-line,
  .home-content-layer > .b2b-entry {
    width: var(--wide-width);
    max-width: none;
  }

  .feature-product,
  .feature-product.is-reversed {
    display: block;
  }
}

@media (min-width: 768px) and (max-width: 1919px) {
  :root {
    --page-max: 1180px;
    --page-width: min(82vw, var(--page-max));
    --wide-max: 1180px;
    --wide-width: min(84vw, var(--wide-max));
    --section-gap: 88px;
  }

  .home-content-layer > .trust-line,
  .home-content-layer > .b2b-entry {
    width: var(--wide-width);
    max-width: var(--wide-max);
  }

  .product-family-section {
    width: var(--wide-width);
    max-width: var(--wide-max);
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    gap: 44px;
    align-items: start;
  }

  .product-family-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(140px, 1fr));
    gap: 18px;
  }

  .feature-product,
  .feature-product.is-reversed {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  .feature-product.is-reversed .feature-visual {
    order: 2;
  }
}

@media (min-width: 1920px) {
  :root {
    --page-max: 1280px;
    --page-width: min(82vw, var(--page-max));
    --wide-max: 1480px;
    --wide-width: min(88vw, var(--wide-max));
    --section-gap: 112px;
  }

  .product-family-section {
    width: var(--wide-width);
    max-width: var(--wide-max);
    grid-template-columns: 360px minmax(0, 1fr);
    gap: 72px;
  }

  .product-family-strip {
    grid-template-columns: repeat(4, minmax(190px, 1fr));
    gap: 24px;
  }

  .featured,
  .home-content-layer > .trust-line,
  .home-content-layer > .b2b-entry {
    width: var(--wide-width);
    max-width: var(--wide-max);
  }

  .feature-product,
  .feature-product.is-reversed {
    grid-template-columns: minmax(480px, 1fr) minmax(520px, 1fr);
    gap: 72px;
  }

  .feature-product.is-reversed .feature-visual {
    order: 2;
  }
}

/* Mobile Safari hero compatibility */
@media (max-width: 767px) {
  :root {
    --hero-height: 720px;
    --hero-stage-height: var(--hero-height);
  }

  @supports (height: 100dvh) {
    :root {
      --hero-height: clamp(720px, 100dvh, 820px);
      --hero-stage-height: var(--hero-height);
    }
  }

  @supports not (height: 100dvh) {
    :root {
      --hero-height: clamp(720px, 100svh, 820px);
      --hero-stage-height: var(--hero-height);
    }
  }

  html {
    overflow-x: hidden;
  }

  .hero-scroll-stage,
  .hero,
  .hero-b-series,
  .hero-sticky-viewport,
  .hero-ui,
  .hero-slide {
    width: 100%;
    max-width: 100vw;
    height: var(--hero-height);
    min-height: var(--hero-height);
    max-height: none;
  }

  .hero,
  .hero-b-series,
  .hero-sticky-viewport {
    overflow: hidden;
  }

  .hero-bg-scroll,
  .hero-bg {
    max-width: 100vw;
  }

  .hero-slide {
    grid-template-columns: 1fr;
    align-items: center;
    padding: 82px 20px calc(104px + env(safe-area-inset-bottom, 0px));
  }

  .hero-copy,
  .hero-slide-b-series .hero-copy,
  .hero-slide-s35 .hero-copy {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    display: flex;
    flex-direction: column;
    grid-column: auto;
    justify-self: center;
    align-items: center;
    width: min(88vw, 420px);
    min-width: 0;
    max-width: 420px;
    margin-inline: auto;
    padding-bottom: 78px;
    text-align: center;
    transform: none;
  }

  .hero-badge {
    margin-inline: auto;
  }

  .hero-eyebrow {
    max-width: 100%;
    margin-inline: auto;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
  }

  .hero-title,
  .hero-copy h1,
  .hero-slide-b-series .hero-title,
  .hero-slide-s35 .hero-title {
    max-width: 100%;
    margin-inline: auto;
    font-size: clamp(40px, 10vw, 54px);
    line-height: 0.92;
    letter-spacing: -0.055em;
  }

  .hero-text,
  .hero-slide-b-series .hero-text,
  .hero-copy p {
    max-width: 360px;
    margin-inline: auto;
    font-size: 17px;
    line-height: 1.35;
    text-align: center;
  }

  .hero-copy .hero-eyebrow {
    font-size: 14px;
    line-height: 1.2;
  }

  .hero-features,
  .hero-slide-b-series .hero-features {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: center;
    width: min(88vw, 380px);
    max-width: 380px;
    margin: 18px auto 0;
    gap: 8px 18px;
    text-align: center;
  }

  .hero-feature {
    justify-content: center;
    min-width: 0;
    white-space: normal;
    font-size: clamp(13px, 3.6vw, 16px);
    line-height: 1.2;
  }

  .hero-actions,
  .hero-slide-b-series .hero-actions {
    width: 100%;
    margin-top: 18px;
    justify-content: center;
    text-align: center;
  }

  .view-all-products {
    gap: 8px;
    font-size: clamp(22px, 6vw, 26px);
    line-height: 1;
  }

  .hero-arrow {
    top: auto;
    bottom: calc(18px + env(safe-area-inset-bottom, 0px));
    z-index: 8;
    width: 42px;
    height: 42px;
    transform: none;
  }

  .hero-arrow-left {
    left: 18px;
  }

  .hero-arrow-right {
    right: 18px;
  }

  .hero-arrow:hover {
    transform: none;
  }

  .hero-dots,
  .hero-pagination {
    right: auto;
    bottom: calc(28px + env(safe-area-inset-bottom, 0px));
    left: 50%;
    z-index: 8;
    width: auto;
    max-width: calc(100vw - 140px);
    justify-content: center;
    gap: 10px;
    transform: translateX(-50%);
  }
}

@supports (-webkit-touch-callout: none) {
  @media (max-width: 767px) {
    .hero-copy,
    .hero-slide-b-series .hero-copy,
    .hero-slide-s35 .hero-copy {
      width: min(88vw, 420px);
      text-align: center;
      transform: none;
    }

    .hero-title,
    .hero-copy h1 {
      font-size: clamp(40px, 10vw, 54px);
    }

    .hero-features,
    .hero-slide-b-series .hero-features {
      width: min(88vw, 380px);
      margin-inline: auto;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-bg {
    transform: none !important;
  }

  .hero-scroll-stage {
    height: var(--hero-stage-height);
  }
}

@media (max-width: 1023px) {
  .mobile-nav-panel .mobile-nav-scroll > a,
  .mobile-nav-panel .mobile-products-toggle,
  .mobile-nav-panel .mobile-menu-item {
    padding-block: 19px !important;
    font-size: 23px !important;
    font-weight: 500;
    line-height: 1.18;
  }

  .mobile-nav-panel .mobile-products-panel {
    margin-top: 10px !important;
    padding-top: 12px !important;
  }

  .mobile-nav-panel .mobile-products-group {
    margin-bottom: 20px !important;
  }

  .mobile-nav-panel .mobile-products-group:last-child {
    margin-bottom: 6px !important;
  }

  .mobile-nav-panel .mobile-products-group h4 {
    margin: 22px 0 9px !important;
    color: #ff5f1f;
    font-size: 13px !important;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .mobile-nav-panel .mobile-product-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    padding: 14px 0 !important;
    overflow: visible;
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    text-decoration: none;
    text-overflow: clip;
  }

  .mobile-nav-panel .mobile-product-name {
    overflow: visible;
    color: #111;
    font-size: 22px !important;
    font-weight: 500;
    line-height: 1.18;
    text-overflow: clip;
    white-space: normal;
  }

  .mobile-nav-panel .mobile-product-capacity {
    flex-shrink: 0;
    overflow: visible;
    color: rgba(17, 17, 17, 0.58);
    font-size: 20px !important;
    font-weight: 400;
    line-height: 1.18;
    text-overflow: clip;
    white-space: nowrap;
  }

  html[data-theme="dark"] .mobile-nav-panel .mobile-product-name {
    color: #f7f4ef;
  }

  html[data-theme="dark"] .mobile-nav-panel .mobile-product-capacity {
    color: rgba(247, 244, 239, 0.6);
  }
}

@media (max-width: 430px) {
  .mobile-nav-panel .mobile-nav-scroll > a,
  .mobile-nav-panel .mobile-products-toggle,
  .mobile-nav-panel .mobile-menu-item {
    padding-block: 18px !important;
    font-size: 22px !important;
  }

  .mobile-nav-panel .mobile-products-group h4 {
    margin: 20px 0 8px !important;
    font-size: 12px !important;
  }

  .mobile-nav-panel .mobile-product-row {
    padding: 13px 0 !important;
  }

  .mobile-nav-panel .mobile-product-name {
    font-size: 21px !important;
  }

  .mobile-nav-panel .mobile-product-capacity {
    font-size: 19px !important;
  }
}

@media (max-width: 1023px) {
  html,
  body,
  #root,
  .app,
  .page,
  main,
  .home,
  .site-shell,
  .home-content-layer {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }

  html {
    overflow-x: clip;
  }

  .desktop-nav,
  .desktop-products-trigger,
  .desktop-products-link,
  .nav-product-trigger.desktop-products-link,
  .products-dropdown,
  .product-dropdown,
  .products-mega,
  .mega-menu,
  .products-hover-bridge,
  .products-trigger-bridge {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  .mobile-menu-toggle {
    display: grid !important;
    visibility: visible !important;
    pointer-events: auto !important;
    width: 48px !important;
    height: 48px !important;
    min-width: 48px !important;
    min-height: 48px !important;
    padding: 0 !important;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .mobile-products-toggle {
    display: inline-flex !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  .site-header,
  .mobile-nav-panel,
  .mobile-products-toggle,
  .mobile-nav-panel a {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
}

@supports (-webkit-touch-callout: none) {
  @media (max-width: 1023px) {
    .site-header,
    .mobile-menu-toggle,
    .mobile-nav-panel {
      touch-action: manipulation;
    }
  }
}

@media (min-width: 1024px) {
  .mobile-menu-toggle,
  .mobile-products-toggle,
  .mobile-products-panel {
    display: none !important;
  }

  .desktop-products-link {
    display: inline-flex !important;
  }
}

@media (max-width: 1023px) {
  html {
    overflow-x: clip;
  }

  body,
  #root,
  main,
  .page,
  .product-page {
    overflow: visible;
  }

  .product-page,
  .product-hero,
  .product-gallery,
  .model-specs,
  .product-section,
  .certifications,
  .downloads,
  .product-inquiry {
    height: auto;
    min-height: 0;
    overflow: visible;
    touch-action: auto;
  }

  .product-hero-media,
  .product-media,
  .product-gallery {
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .gl-product-gallery-track {
    touch-action: pan-x;
    -webkit-tap-highlight-color: transparent;
  }

  .model-spec-grid,
  .gallery-grid {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }
}

.gl-product-gallery-section {
  margin-inline: 0;
  padding: var(--space-section-tight) 0;
  border-top: 1px solid var(--line);
  overflow: visible;
}

.gl-product-gallery-inner,
.gl-product-gallery-heading {
  width: var(--content-max);
  max-width: none;
  margin-inline: auto;
}

.gl-product-gallery-viewport {
  box-sizing: border-box;
  width: 100vw;
  max-width: none;
  margin-left: 50%;
  overflow: hidden;
  padding: 0;
  transform: translateX(-50%);
}

.gl-product-gallery-viewport .horizontal-scroll {
  padding-inline: var(--content-offset);
  scroll-padding-inline: var(--content-offset);
}

.gl-product-gallery-track {
  display: flex;
  flex-wrap: nowrap;
  gap: clamp(14px, 1.6vw, 24px);
  width: max-content;
  min-width: 0;
  margin-left: 0;
  padding: 0;
  overflow: visible;
  scroll-snap-type: x proximity;
  touch-action: pan-x;
}

.gl-product-gallery-card {
  flex: 0 0 clamp(320px, 36vw, 640px);
  min-width: 320px;
  overflow: hidden;
  scroll-snap-align: start;
}

.gl-product-gallery-card .gl-product-gallery-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.gl-product-gallery-body {
  position: static;
  width: auto;
  margin: 0;
  padding: 28px 32px 30px;
  background: var(--gallery-card-bg);
  color: var(--gallery-card-title);
  transform: none;
}

.gl-product-gallery-body h3,
.gl-product-gallery-body p {
  margin-left: 0;
  transform: none;
}

.gl-product-gallery-body h3 {
  margin-top: 0;
}

.gl-product-gallery-body p {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .gl-product-gallery-card {
    flex-basis: clamp(280px, 72vw, 460px);
  }
}

@media (max-width: 768px) {
  .scroll-arrow {
    display: none;
  }
}

@media (max-width: 640px) {
  .horizontal-scroll {
    padding-inline: 20px;
    scroll-padding-inline: 20px;
  }

  .gl-product-gallery-viewport .horizontal-scroll {
    padding-inline: var(--content-offset);
    scroll-padding-inline: var(--content-offset);
  }

  .model-spec-card {
    flex: 0 0 min(86vw, 420px);
    min-width: min(86vw, 420px);
  }

  .gallery-grid article,
  .gl-product-gallery-card {
    flex: 0 0 min(86vw, 480px);
    min-width: min(86vw, 480px);
  }

  .gl-product-gallery-viewport {
    width: 100vw;
    max-width: none;
  }

  .gl-product-gallery-track {
    gap: 14px;
  }

  .gl-product-gallery-card {
    flex: 0 0 min(86vw, 480px);
    min-width: min(86vw, 480px);
    max-width: none;
  }

  .gl-product-gallery-body {
    padding: 16px 18px 20px;
  }
}

```

### src/utils/dom.js

Size: 2011 bytes

```js
export function applySeo(seo) {
  document.title = seo.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
}

const PUNCTUATION_REGEX = /([.。])/g;
const PUNCTUATION_SKIP_SELECTOR = "script, style, textarea, input, .period-accent";

export function highlightPeriods(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !PUNCTUATION_REGEX.test(node.nodeValue)) {
        PUNCTUATION_REGEX.lastIndex = 0;
        return NodeFilter.FILTER_REJECT;
      }

      PUNCTUATION_REGEX.lastIndex = 0;
      if (node.parentElement?.closest(PUNCTUATION_SKIP_SELECTOR)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    const parts = node.nodeValue.split(PUNCTUATION_REGEX);

    parts.forEach((part) => {
      if (!part) return;
      if (part === "." || part === "。") {
        const span = document.createElement("span");
        span.className = "period-accent";
        span.textContent = part;
        fragment.append(span);
      } else {
        fragment.append(document.createTextNode(part));
      }
    });

    node.replaceWith(fragment);
  });
}

export function revealSections(root = document) {
  const elements = root.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  elements.forEach((element) => observer.observe(element));
}

```

### src/utils/heroScrollGate.js

Size: 3662 bytes

```js
// PROTECTED HERO SCROLL GATE. Do not modify unless explicitly asked.

export function createHeroScrollGate() {
  let heroScrollTicking = false;
  let heroResizeObserver;
  let heroLoadTarget;
  let heroLoadHandler;
  let heroGate = emptyHeroGate();

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function emptyHeroGate() {
    return {
      bg: null,
      hero: null,
      heroStartY: 0,
      offset: 0,
      startOffset: 0,
      maxOffset: 0,
    };
  }

  function reset() {
    heroGate = emptyHeroGate();
  }

  function clearObservers() {
    heroResizeObserver?.disconnect();
    heroResizeObserver = null;

    if (heroLoadTarget && heroLoadHandler) {
      heroLoadTarget.removeEventListener("load", heroLoadHandler);
    }
    heroLoadTarget = null;
    heroLoadHandler = null;
  }

  function measureHeroScroll() {
    const hero = document.querySelector(".hero-sticky-viewport");
    const bg = document.querySelector(".hero-bg");
    if (!hero || !bg) {
      reset();
      return null;
    }

    const heroHeight = hero.getBoundingClientRect().height || window.innerHeight;
    const mediaHeight = bg.getBoundingClientRect().height || bg.offsetHeight || heroHeight;
    const startOffset = Number.parseFloat(getComputedStyle(hero).getPropertyValue("--hero-bg-start-offset")) || 0;
    const maxOffset = Math.max(startOffset, mediaHeight - heroHeight);

    heroGate = {
      hero,
      bg,
      heroStartY: hero.getBoundingClientRect().top + window.scrollY,
      offset: clamp(heroGate.offset || startOffset, startOffset, maxOffset),
      startOffset,
      maxOffset,
    };

    applyHeroBackgroundOffset();
    return heroGate;
  }

  function applyHeroBackgroundOffset() {
    heroGate.bg?.style.setProperty("--hero-bg-y", `${-heroGate.offset}px`);
  }

  function requestUpdate() {
    if (heroScrollTicking) return;
    heroScrollTicking = true;

    window.requestAnimationFrame(() => {
      applyHeroBackgroundOffset();
      heroScrollTicking = false;
    });
  }

  function refresh() {
    measureHeroScroll();
    requestUpdate();
  }

  function handleWheel(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gate = heroGate.hero ? heroGate : measureHeroScroll();
    if (!gate?.hero || !gate.bg || gate.maxOffset <= 0) return;

    const delta = event.deltaY;
    const isScrollingDown = delta > 0;
    const isScrollingUp = delta < 0;
    const pageAtHeroStart = window.scrollY <= gate.heroStartY + 1;

    if (isScrollingDown && pageAtHeroStart && gate.offset < gate.maxOffset) {
      event.preventDefault();
      heroGate.offset = clamp(gate.offset + delta, gate.startOffset, gate.maxOffset);
      requestUpdate();
      return;
    }

    if (isScrollingUp && pageAtHeroStart && gate.offset > gate.startOffset) {
      event.preventDefault();
      heroGate.offset = clamp(gate.offset + delta, gate.startOffset, gate.maxOffset);
      requestUpdate();
    }
  }

  function setup() {
    clearObservers();
    reset();

    const hero = document.querySelector(".hero-sticky-viewport");
    const bg = document.querySelector(".hero-bg");
    if (!hero || !bg) return;

    heroResizeObserver = new ResizeObserver(refresh);
    heroResizeObserver.observe(bg);
    heroLoadTarget = bg;
    heroLoadHandler = refresh;
    bg.addEventListener("load", heroLoadHandler, { once: true });
    bg.decode?.().then(refresh).catch(() => {});
    refresh();
  }

  function destroy() {
    clearObservers();
    reset();
    heroScrollTicking = false;
  }

  return {
    setup,
    refresh,
    requestUpdate,
    handleWheel,
    destroy,
  };
}

```

### src/utils/navigation.js

Size: 14805 bytes

```js
import { go, route } from "../router.js";

export function bindNavigation({
  root,
  state,
  heroSlideCount,
  render,
  setHeroSlide,
  setMenuOpen,
  setProductsOpen,
  setTheme,
  openProductsMenu,
  closeProductsMenuSoon,
  toggleMenu,
  toggleMobileProducts,
}) {
  root.querySelectorAll("[data-go]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (element.classList.contains("hero-image-link") && Date.now() < (state.heroImageLinkSuppressUntil || 0)) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      setMenuOpen(false);
      state.mobileProductsOpen = false;
      setProductsOpen(false);
      const routeChanged = go(element.dataset.go);
      if (!routeChanged) render();
    });
  });

  root.querySelectorAll("[data-anchor]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      setMenuOpen(false);
      if (route() !== "/") {
        window.location.hash = "/";
        window.setTimeout(() => document.getElementById(element.dataset.anchor)?.scrollIntoView({ behavior: "smooth" }), 80);
      } else {
        document.getElementById(element.dataset.anchor)?.scrollIntoView({ behavior: "smooth" });
      }
      render();
    });
  });

  root.querySelector("[data-menu-toggle]")?.addEventListener("click", () => {
    if (state.mobileToggleLocked) return;

    state.mobileToggleLocked = true;
    window.clearTimeout(state.mobileToggleTimer);
    state.mobileToggleTimer = window.setTimeout(() => {
      state.mobileToggleLocked = false;
    }, 280);

    toggleMenu();
    render();
  });

  root.querySelector("[data-mobile-products-toggle]")?.addEventListener("click", () => {
    toggleMobileProducts();
    render();
  });

  root.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const nextTheme = state.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem("travelScienceTheme", nextTheme);
    render();
  });

  const desktopProductsQuery = window.matchMedia("(min-width: 1024px)");
  const openDesktopProducts = () => {
    if (!desktopProductsQuery.matches) return;
    openProductsMenu();
  };
  const closeDesktopProductsSoon = () => {
    if (!desktopProductsQuery.matches) return;
    closeProductsMenuSoon();
  };

  root
    .querySelectorAll("[data-products-trigger], [data-products-bridge], [data-products-dropdown]")
    .forEach((element) => {
      element.addEventListener("mouseenter", openDesktopProducts);
      element.addEventListener("mouseleave", closeDesktopProductsSoon);
      element.addEventListener("focusin", openDesktopProducts);
      element.addEventListener("focusout", closeDesktopProductsSoon);
    });

  const getProductImages = (hero) => {
    if (!hero?.dataset.productImages) return null;
    try {
      return JSON.parse(hero.dataset.productImages);
    } catch {
      // Product image maps are optional; keep the current image if parsing fails.
      return null;
    }
  };

  const setProductImages = (hero, images) => {
    if (!hero || !images) return;
    hero.dataset.productImages = JSON.stringify(images);
  };

  const updateProductColorAvailability = (hero) => {
    const images = getProductImages(hero);
    if (!hero || !images) return;
    const availableColors = images?.[hero.dataset.selectedModel] || {};
    let activeColorIsAvailable = Boolean(availableColors[hero.dataset.selectedColor]);

    hero.querySelectorAll("[data-product-color]").forEach((item) => {
      const isAvailable = Boolean(availableColors[item.dataset.productColorValue]);
      item.classList.toggle("is-unavailable", !isAvailable);
      item.setAttribute("aria-disabled", String(!isAvailable));
      item.disabled = !isAvailable;
      if (!isAvailable && item.classList.contains("is-active")) {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      }
    });

    if (!activeColorIsAvailable) {
      const firstAvailable = hero.querySelector("[data-product-color]:not(.is-unavailable)");
      if (firstAvailable?.dataset.productColorValue) {
        hero.dataset.selectedColor = firstAvailable.dataset.productColorValue;
        firstAvailable.classList.add("is-active");
        firstAvailable.setAttribute("aria-pressed", "true");
        activeColorIsAvailable = true;
      }
    }
  };

  const updateProductHeroImage = (hero) => {
    const image = hero?.querySelector("[data-product-hero-image]");
    const images = getProductImages(hero);
    if (!hero || !image || !images) return;

    const nextImage = images?.[hero.dataset.selectedModel]?.[hero.dataset.selectedColor];
    image.src = nextImage || hero.dataset.fallbackImage || image.src;
  };

  const markSelectedProductImageUnavailable = (hero) => {
    const images = getProductImages(hero);
    if (!hero || !images) return;

    const selectedModelImages = images?.[hero.dataset.selectedModel];
    if (selectedModelImages?.[hero.dataset.selectedColor]) {
      delete selectedModelImages[hero.dataset.selectedColor];
      setProductImages(hero, images);
    }

    updateProductColorAvailability(hero);
    updateProductHeroImage(hero);
  };

  const validateProductImageAvailability = async (hero) => {
    const images = getProductImages(hero);
    if (!hero || !images || typeof fetch !== "function") return;

    const assetExists = async (src) => {
      const headResponse = await fetch(src, { method: "HEAD" });
      if (headResponse.ok) return true;

      if (headResponse.status === 405 || headResponse.status === 501) {
        const getResponse = await fetch(src, { method: "GET", cache: "no-store" });
        return getResponse.ok;
      }

      return false;
    };

    const checks = Object.entries(images).flatMap(([model, colors]) => (
      Object.entries(colors || {}).map(async ([color, src]) => {
        if (!src) return false;

        try {
          if (await assetExists(src)) return false;
        } catch {
          // Treat failed validation as unavailable so the selector cannot point
          // at a missing asset.
        }

        if (images?.[model]?.[color] === src) {
          delete images[model][color];
          return true;
        }

        return false;
      })
    ));

    if (!checks.length) return;

    const results = await Promise.all(checks);
    if (results.some(Boolean)) {
      setProductImages(hero, images);
      updateProductColorAvailability(hero);
      updateProductHeroImage(hero);
    }
  };

  root.querySelectorAll("[data-product-model]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".model-tabs");
      const hero = button.closest("[data-product-hero]");
      if (!hero || !button.dataset.productModelValue) return;

      hero.dataset.selectedModel = button.dataset.productModelValue;

      group?.querySelectorAll("[data-product-model]").forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      updateProductColorAvailability(hero);
      updateProductHeroImage(hero);
    });
  });

  root.querySelectorAll("[data-product-color]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".product-color-options");
      const hero = button.closest("[data-product-hero]");
      if (!hero || !button.dataset.productColorValue) return;
      if (button.disabled || button.classList.contains("is-unavailable")) return;
      const image = hero?.querySelector("[data-product-hero-image]");

      hero.dataset.selectedColor = button.dataset.productColorValue;

      group?.querySelectorAll("[data-product-color]").forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      if (!hero.dataset.productImages && image && button.dataset.productImage) {
        image.src = button.dataset.productImage;
      } else {
        updateProductHeroImage(hero);
      }
    });
  });

  root.querySelectorAll("[data-product-hero]").forEach((hero) => {
    updateProductColorAvailability(hero);
    validateProductImageAvailability(hero);
  });
  root.querySelectorAll("[data-product-hero-image]").forEach((image) => {
    image.addEventListener("error", () => {
      const hero = image.closest("[data-product-hero]");
      if (!hero) return;
      markSelectedProductImageUnavailable(hero);
    });
  });

  if (state.horizontalScrollResizeHandler) {
    window.removeEventListener("resize", state.horizontalScrollResizeHandler);
  }

  const horizontalSetups = [];
  root.querySelectorAll("[data-horizontal-scroll]").forEach((scroller) => {
    const section = scroller.closest("section");
    const prev = section?.querySelector("[data-horizontal-prev]");
    const next = section?.querySelector("[data-horizontal-next]");
    const track = scroller.querySelector(".horizontal-track");
    if (!prev || !next || !track) return;

    const scrollTolerance = 2;
    const maxScrollLeft = () => Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    const updateArrowState = () => {
      const max = maxScrollLeft();
      prev.disabled = scroller.scrollLeft <= scrollTolerance;
      next.disabled = scroller.scrollLeft >= max - scrollTolerance;
    };
    const scrollStep = () => {
      const firstCard = track.children[0];
      const cardWidth = firstCard?.getBoundingClientRect().width || scroller.clientWidth * 0.8;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      return cardWidth + gap;
    };
    const scrollByStep = (direction) => {
      scroller.scrollBy({ left: direction * scrollStep(), behavior: "smooth" });
    };

    prev.addEventListener("click", () => scrollByStep(-1));
    next.addEventListener("click", () => scrollByStep(1));
    scroller.addEventListener("scroll", updateArrowState, { passive: true });

    updateArrowState();
    horizontalSetups.push(updateArrowState);
  });

  state.horizontalScrollResizeHandler = () => horizontalSetups.forEach((update) => update());
  window.addEventListener("resize", state.horizontalScrollResizeHandler, { passive: true });

  const lockHeroSlideControl = () => {
    state.heroSlideControlLocked = true;
    window.clearTimeout(state.heroSlideControlTimer);
    state.heroSlideControlTimer = window.setTimeout(() => {
      state.heroSlideControlLocked = false;
    }, 420);
  };

  const changeHeroSlideFromControl = (index) => {
    if (heroSlideCount < 2 || state.heroSlideControlLocked) return;
    setHeroSlide(index);
    lockHeroSlideControl();
    render();
  };

  root.querySelectorAll("[data-hero-swipe]").forEach((element) => {
    let startX = 0;
    let startY = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let tracking = false;
    let swiping = false;

    const lockSlideGesture = () => {
      state.heroSlideGestureLocked = true;
      window.clearTimeout(state.heroSlideGestureTimer);
      state.heroSlideGestureTimer = window.setTimeout(() => {
        state.heroSlideGestureLocked = false;
      }, 650);
    };

    const changeHeroSlide = (direction) => {
      if (heroSlideCount < 2) return;
      if (state.heroSlideGestureLocked) return;
      setHeroSlide((state.currentHeroSlide + direction + heroSlideCount) % heroSlideCount);
      lockSlideGesture();
      render();
    };

    element.addEventListener("pointerdown", (event) => {
      if (!event.isPrimary || event.target.closest("a:not(.hero-image-link), button, input, textarea, select")) return;
      startX = event.clientX;
      startY = event.clientY;
      tracking = true;
      swiping = false;
      element.setPointerCapture?.(event.pointerId);
    });

    element.addEventListener("pointermove", (event) => {
      if (!tracking) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) > 14 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
        swiping = true;
      }
    });

    element.addEventListener("pointerup", (event) => {
      if (!tracking) return;
      tracking = false;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      element.releasePointerCapture?.(event.pointerId);
      if (!swiping || Math.abs(deltaX) < 42 || Math.abs(deltaX) < Math.abs(deltaY) * 1.15) return;
      state.heroImageLinkSuppressUntil = Date.now() + 450;
      changeHeroSlide(deltaX < 0 ? 1 : -1);
    });

    element.addEventListener("pointercancel", (event) => {
      tracking = false;
      swiping = false;
      element.releasePointerCapture?.(event.pointerId);
    });

    element.addEventListener("wheel", (event) => {
      if (heroSlideCount < 2) return;
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      const isHorizontalSwipe = absX > absY && absX > 35;
      if (!isHorizontalSwipe) return;

      event.preventDefault();
      event.stopPropagation();

      if (state.heroSlideGestureLocked) {
        return;
      }

      changeHeroSlide(event.deltaX > 0 ? 1 : -1);
    }, { passive: false });

    element.addEventListener("touchstart", (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }, { passive: true });

    element.addEventListener("touchend", (event) => {
      if (heroSlideCount < 2) return;
      const touch = event.changedTouches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 48;
      if (!isHorizontalSwipe || state.heroSlideGestureLocked) return;

      state.heroImageLinkSuppressUntil = Date.now() + 450;
      changeHeroSlide(deltaX < 0 ? 1 : -1);
    }, { passive: true });

    element.addEventListener("lostpointercapture", () => {
      tracking = false;
      swiping = false;
    });
  });

  root.querySelectorAll("[data-hero-dot]").forEach((dot) => {
    dot.addEventListener("click", () => {
      changeHeroSlideFromControl(Number(dot.dataset.heroDot) % heroSlideCount);
    });
  });

  root.querySelector("[data-hero-prev]")?.addEventListener("click", () => {
    changeHeroSlideFromControl((state.currentHeroSlide - 1 + heroSlideCount) % heroSlideCount);
  });

  root.querySelector("[data-hero-next]")?.addEventListener("click", () => {
    changeHeroSlideFromControl((state.currentHeroSlide + 1) % heroSlideCount);
  });
}

```