# Kelvcoop / Travel Science Website Code Review Package

Generated for GPT code review from the current workspace.

Generated at: 2026-06-25T10:11:50.271Z

## Review Request

Please review this vanilla JavaScript/CSS website for correctness, maintainability, accessibility, responsive behavior, Safari/iPhone scrolling issues, SEO metadata, broken links/assets, product-data consistency, and obvious runtime bugs. Lead with concrete findings ordered by severity, and reference file paths and functions/classes/selectors where relevant.

Pay special attention to:
- Homepage protected hero system and `src/utils/heroScrollGate.js`.
- Product detail template, model/color image manifests, gallery manifests, and horizontal scrolling behavior.
- Accessories page gallery scroller and service entry card image behavior.
- Community page hero/card responsive behavior and social platform card layout.
- iPhone Safari/mobile overflow and scroll context behavior in `src/styles.css`.
- Header/dropdown/mobile navigation behavior.
- Missing assets, 404-prone image paths, and generated manifest consistency.
- Public product visibility: K Series is valid and public; KE Series should not appear publicly.

## Project Notes

- Runtime: static native ES modules served by `server.mjs`.
- Dev command: `npm run dev`.
- Entry point: `src/main.js`.
- Main stylesheet: `src/styles.css`.
- Product data: `src/data/products.js`.
- Generated manifests: `src/data/galleryManifest.js`, `src/data/productImageManifest.js`.
- Large binary assets are listed but not embedded.
- Old generated audit reports are intentionally excluded to avoid stale asset/product references.

## Git Status

```text
 M review.md
 D src/components/FeaturedProducts.js
 M src/components/Footer.js
 M src/data/socialLinks.js
 M src/pages/ContactPage.js
 M src/pages/HomePage.js
 M src/router.js
 M src/styles.css
?? public/assets/community/
?? public/assets/services/
?? src/components/ServiceEntryCards.js
?? src/data/accessories.js
?? src/data/serviceCards.js
?? src/data/socialCrew.js
?? src/pages/AccessoriesPage.js
?? src/pages/CommunityPage.js
```

## Included Source Files

```text
chatgpt-review-prompt.md
docs/hero-protection.md
gl-series.md
index.html
package-lock.json
package.json
README.md
scripts/generate-gallery-manifest.mjs
scripts/generate-product-gallery.mjs
scripts/trim-png-by-group-union-bbox.py
server.mjs
src/components/ContactSection.js
src/components/Footer.js
src/components/Header.js
src/components/HeroCarousel.js
src/components/ProductCard.js
src/components/ProductDetailTemplate.js
src/components/ProductFamily.js
src/components/ServiceEntryCards.js
src/data/accessories.js
src/data/galleryManifest.js
src/data/heroSlides.js
src/data/homepage.js
src/data/productFamilies.js
src/data/productGallery.js
src/data/productImageManifest.js
src/data/products.js
src/data/seo.js
src/data/serviceCards.js
src/data/socialCrew.js
src/data/socialLinks.js
src/main.js
src/pages/AccessoriesPage.js
src/pages/CommunityPage.js
src/pages/ContactPage.js
src/pages/CustomProjectsPage.js
src/pages/HomePage.js
src/pages/ProductDetailPage.js
src/pages/ProductFamilyPage.js
src/pages/ProductsPage.js
src/pages/SupportPage.js
src/router.js
src/styles.css
src/utils/dom.js
src/utils/heroScrollGate.js
src/utils/navigation.js
```

## Binary / Asset Inventory

Total non-embedded asset/binary files: 178
Public asset files: 178

```text
public/assets/.DS_Store
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
public/assets/brand/k-icon.svg
public/assets/community/.DS_Store
public/assets/community/community-hero.jpg
public/assets/community/jonny-card.jpg
public/assets/community/mason-card.jpg
public/assets/community/vicky-card.jpg
public/assets/community/yiwen-card.jpg
public/assets/downloads/ex-series-manual.pdf
public/assets/downloads/exm-series-manual.pdf
public/assets/hero/b20-hero.png
public/assets/hero/ex-hero.png
public/assets/hero/s35-hero.png
public/assets/icons/arrowleft.svg
public/assets/icons/arrowright.svg
public/assets/products/.DS_Store
public/assets/products/ax.png
public/assets/products/ax/gallery/ax30-open.png
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
public/assets/products/b.jpg
public/assets/products/b/b25.png
public/assets/products/b20.png
public/assets/products/d.jpg
public/assets/products/ex.png
public/assets/products/exm.png
public/assets/products/exm/.DS_Store
public/assets/products/exm/gallery/1.png
public/assets/products/exm/gallery/6.png
public/assets/products/exm/gallery/623 拷贝.png
public/assets/products/exm/gallery/xj.2.png
public/assets/products/exm/gallery/开瓶器更新2.png
public/assets/products/exm/models/.DS_Store
public/assets/products/exm/models/exm30-black.jpg
public/assets/products/exm/models/exm30-bluegray&lightgray.png
public/assets/products/exm/models/exm40-black.jpg
public/assets/products/exm/models/exm40-bluegray&lightgray.png
public/assets/products/exm/models/exm50-black.jpg
public/assets/products/exm/models/exm50-bluegray&lightgray.png
public/assets/products/gl.png
public/assets/products/gl/control-panel.png
public/assets/products/gl/front.png
public/assets/products/gl/gl-black-open.png
public/assets/products/gl/gl-sage-open.png
public/assets/products/gl/handle-detail.png
public/assets/products/gl/models/gl35-black.png
public/assets/products/gl/models/gl35-sage.png
public/assets/products/gl/models/gl45-black.png
public/assets/products/gl/models/gl45-sage.png
public/assets/products/gl/models/gl55-black.png
public/assets/products/gl/models/gl55-sage.png
public/assets/products/gl/models/gl75-black.png
public/assets/products/gl/open-lid.png
public/assets/products/k.jpg
public/assets/products/m.png
public/assets/products/m/gallery/m45-black.png
public/assets/products/m/gallery/m45-front.png
public/assets/products/m/gallery/m45-open.png
public/assets/products/m/gallery/m45-side.png
public/assets/products/m/models/m35-black.png
public/assets/products/m/models/m35-sage.png
public/assets/products/m/models/m45-black.png
public/assets/products/m/models/m45-sage.png
public/assets/products/m/models/m55-black.png
public/assets/products/m/models/m55-sage.png
public/assets/products/p12.png
public/assets/products/s18-orange.png
public/assets/products/S35.png
public/assets/products/tf.jpg
public/assets/services/.DS_Store
public/assets/services/accessories-lineup.png
public/assets/services/community-connected.png
public/assets/services/custom-project-sketch.png
public/assets/services/gallery/.DS_Store
public/assets/services/gallery/solar-panel.png
public/assets/services/gallery/tool-battery-holder.png
public/assets/services/gallery/untitled.1488.png
public/assets/services/gallery/烟线.png
public/assets/services/gallery/电池.jpg
public/assets/services/gallery/适配器.png
```

## Runtime Asset Reference Scan

Detected runtime asset references in source files: 155
Missing referenced runtime assets: 0

## Source Contents

### chatgpt-review-prompt.md

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

`​``css
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
`​``

Please focus on practical improvements rather than a full rewrite. If you suggest changes, give concrete CSS/JS snippets and explain what tradeoff each change makes.
```

### docs/hero-protection.md

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

```html
<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Travel Science designs portable cooling systems by Kelvcoop for modern travel, vehicle life, weekend escapes and tool-battery powered mobility."
    />
    <title>Travel Science | by Kelvcoop</title>
    <script>
      (() => {
        try {
          const savedTheme = window.localStorage.getItem("travelScienceTheme");
          document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
        } catch {
          document.documentElement.dataset.theme = "dark";
        }
      })();
    </script>
    <style>
      html[data-theme="dark"],
      html[data-theme="dark"] body {
        background: #070809;
        color: #f5f2ec;
        color-scheme: dark;
      }
    </style>
    <link rel="stylesheet" href="/src/styles.css?v=20260624-family-compact-header" />
    <link rel="preload" as="image" href="/assets/hero/s35-hero.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.js?v=20260624-family-compact-header"></script>
  </body>
</html>
```

### package-lock.json

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

### README.md

```md
# Travel Science Website

A static product website for Travel Science, by Kelvcoop.

## Local Preview

`​``bash
npm run dev
`​``

Then open:

`​``text
http://localhost:4173/
`​``

## Project Structure

`​``text
src/
  components/
  data/
  pages/
  utils/
public/
  assets/
`​``

Runtime assets referenced as `/assets/...` are served from `public/assets`.
```

### scripts/generate-gallery-manifest.mjs

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
  "blue-gray-light-gray": ["bluegray&lightgray", "bluegray-lightgray", "blue-gray-light", "blue-grey-light-grey"],
  "dark-gray-light-gray": ["dark-grey-light-grey"],
  "light-gray": ["light-grey"],
  "mung-bean-gray": ["mung-gray", "mung-bean-grey"],
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

```py
#!/usr/bin/env python3
"""
Trim PNG product renders by a shared alpha union bbox per model + angle group.

Default input:
  public/assets/input-png

Default output:
  public/assets/output-trimmed

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


INPUT_DIR = Path("public/assets/input-png")
OUTPUT_DIR = Path("public/assets/output-trimmed")


# Edit this list if your color naming changes. The longest suffix match wins,
# so "sage-green" is handled before the fallback that removes only "-green".
COLOR_SUFFIXES = (
    "black-beige-gray",
    "blue-gray-light-gray",
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

### src/components/Footer.js

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
            <a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>
          `).join("")}
        </div>
      </div>
    </footer>
  `;
}
```

### src/components/Header.js

```js
import { products } from "../data/products.js";
import { productFamilies } from "../data/productFamilies.js";

const productById = new Map(products.map((product) => [product.id, product]));
const familyById = new Map(productFamilies.map((family) => [family.id, family]));

const productMenuGroups = [
  {
    title: "Compact Cooling",
    familyId: "compact-cooling",
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
    familyId: "large-capacity",
    description: "30L and above for larger storage needs.",
    items: [
      { id: "ax", name: "AX Series", detail: "30L&ndash;50L" },
      { id: "ex", name: "EX Series", detail: "30L&ndash;50L" },
      { id: "gl", name: "GL Series", detail: "35L&ndash;75L" },
    ],
  },
  {
    title: "Dual-zone Storage",
    familyId: "dual-zone-storage",
    description: "Large-capacity dual-zone storage for chilled and frozen items.",
    items: [
      { id: "gl", name: "GL Series", detail: "35L&ndash;75L" },
      { id: "ax", name: "AX Series", detail: "30L&ndash;50L" },
      { id: "tf", name: "TF Series", detail: "35L&ndash;55L" },
    ],
  },
  {
    title: "Wheeled Mobility",
    familyId: "wheeled-mobility",
    description: "Large-capacity cooling with wheels and pull-handle structure.",
    items: [
      { id: "exm", name: "EXM Series", detail: "30L&ndash;50L" },
      { id: "m", name: "M Series", detail: "35L&ndash;55L &middot; Dual-zone" },
    ],
  },
];

const mobileProductMenuItems = [
  { id: "ex", name: "EX Series", tag: "", capacity: "30L&ndash;50L" },
  { id: "gl", name: "GL Series", tag: "Dual-zone", capacity: "35L&ndash;75L" },
  { id: "ax", name: "AX Series", tag: "Dual-zone", capacity: "30L&ndash;50L" },
  { id: "tf", name: "TF Series", tag: "Dual-zone", capacity: "35L&ndash;55L" },
  { id: "exm", name: "EXM Series", tag: "", capacity: "30L&ndash;50L" },
  { id: "m", name: "M Series", tag: "Dual-zone", capacity: "35L&ndash;55L" },
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

function productMenuGroupHeading(group) {
  const family = familyById.get(group.familyId);
  if (!family) return `<h3>${group.title}</h3>`;
  return `<h3><a href="${family.href}" data-go="${family.target}">${group.title}</a></h3>`;
}

function mobileProductMenuItem(item) {
  if (!productById.has(item.id)) return "";

  return `
    <a class="mobile-product-row" href="#/products/${item.id}" data-go="/products/${item.id}">
      <span class="mobile-product-name">${item.name}</span>
      <span class="mobile-product-tag">${item.tag}</span>
      <span class="mobile-product-capacity">${item.capacity}</span>
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
                        ${productMenuGroupHeading(group)}
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
              <a class="mobile-products-view-all" href="#/products" data-go="/products">view all product <span aria-hidden="true">&rarr;</span></a>
              <div class="mobile-products-list">
                ${mobileProductMenuItems.map(mobileProductMenuItem).join("")}
              </div>
            </div>
          </div>
          <a href="#/custom-projects" data-go="/custom-projects">Custom Projects</a>
          <a href="#/support" data-go="/support">Support</a>
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

```js
import { ContactSection } from "./ContactSection.js";
import { ProductCard } from "./ProductCard.js";
import { galleryManifest } from "../data/galleryManifest.js";
import { productImageManifest } from "../data/productImageManifest.js";
import { productHeadline, productIntro } from "../data/products.js";

export function ProductDetailTemplate({ product, related = [] }) {
  return `
    <main class="product-page">
      <section class="product-hero product-config-panel reveal" ${productHeroState(product)}>
        <div class="product-hero-copy product-config-copy">
          <nav class="breadcrumb product-config-breadcrumb" aria-label="Breadcrumb">
            <a href="#/" data-go="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="#/products" data-go="/products">Products</a>
            <span aria-hidden="true">/</span>
            <span>${product.name}</span>
          </nav>
          <h1>${product.name}</h1>
          <h2>${withAccentPeriod(productHeadline(product))}</h2>
          <p>${productIntro(product)}</p>
        </div>
        <div class="product-config-controls">
          ${modelSelector(product)}
          ${colorSelector(product)}
        </div>
        <div class="product-hero-media product-config-visual">
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

function withAccentPeriod(text) {
  if (!text) return "";
  return text.endsWith(".")
    ? `${text.slice(0, -1)}<span class="period-accent">.</span>`
    : text;
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
  const trackClass = "gallery-track gl-product-gallery-track";
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
          <div class="gl-product-gallery-image-frame">
            <img${imageClass} src="${item.src || item.image}" alt="${item.alt || item.title || product.name}" draggable="false" onerror="this.closest('article')?.remove()">
          </div>
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
      <div class="gl-product-gallery-viewport">
        ${horizontalControls()}
        <div class="gallery-scroller" data-horizontal-scroll>
          <div class="${trackClass}" data-horizontal-track>
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
      href: product.documents?.brochure,
      status: product.documents?.brochure ? "Download" : "Request document",
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
    <a class="product-family-card" href="${category.href}" data-go="${category.target}" aria-label="Open ${category.name}">
      <div class="family-image"><img src="${category.image}" onerror="this.onerror=null;this.src='${category.fallback || category.image}'" alt="${category.name}"></div>
      <div>
        <h3>${category.name}</h3>
        <p>${category.label}</p>
      </div>
      <span class="arrow-accent" aria-hidden="true">→</span>
    </a>
  `;
}
```

### src/components/ServiceEntryCards.js

```js
function textWithBreaks(value) {
  return value.split("\n").join("<br>");
}

function serviceEntryCard(card, index) {
  const hashHref = `#${card.href}`;
  const imageStyle = card.imagePosition ? ` style="object-position: ${card.imagePosition};"` : "";
  const themeClass = card.theme ? ` service-entry-card--${card.theme}` : "";

  return `
    <article class="feature-product service-entry-card${themeClass} ${index % 2 ? "is-reversed" : ""}">
      <div class="feature-visual">
        <img src="${card.image}" alt="${card.label}"${imageStyle}>
      </div>
      <div class="feature-copy">
        <p class="kicker">${card.label}</p>
        <h2>${textWithBreaks(card.title)}</h2>
        <p>${textWithBreaks(card.description)}</p>
        <a class="card-cta" href="${hashHref}" data-go="${card.href}">${card.buttonText}</a>
      </div>
    </article>
  `;
}

export function ServiceEntryCards({ cards }) {
  return `
    <section class="featured service-entry-cards reveal">
      ${cards.map(serviceEntryCard).join("")}
    </section>
  `;
}
```

### src/data/accessories.js

```js
export const accessoryItems = [
  {
    name: "Power modules",
    description: "Battery and power accessories for extended outdoor cooling use.",
  },
  {
    name: "Compressor parts",
    description: "Cooling-system parts prepared for service, replacement and project support.",
  },
  {
    name: "DC cables",
    description: "Vehicle power cables for DC 12/24V portable fridge operation.",
  },
  {
    name: "AC adapters",
    description: "Home and workshop power adapters for flexible indoor use.",
  },
  {
    name: "Storage baskets",
    description: "Wire baskets and storage inserts for cleaner organization inside the fridge.",
  },
  {
    name: "Solar charging",
    description: "Portable solar charging accessories for longer trips and off-grid scenarios.",
  },
];

export const accessoryUseCases = [
  "Outdoor trips",
  "Vehicle travel",
  "Distributor service",
  "Replacement planning",
  "Custom project kits",
];
```

### src/data/galleryManifest.js

```js
// This file is generated by scripts/generate-gallery-manifest.mjs.
// Run npm run dev or npm run preview after adding or deleting gallery images.

export const galleryManifest = {
  "gl": [],
  "ax": [
    {
      "image": "/assets/products/ax/gallery/ax30-open.png",
      "title": "Ax30 open",
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
  "b": [],
  "d": [],
  "ex": [],
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
    }
  ],
  "k": [],
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
    }
  ],
  "s": [],
  "tf": []
};
```

### src/data/heroSlides.js

```js
// TODO: Convert hero PNG backgrounds to optimized WebP/AVIF before production.
// TODO: Preload the first hero background in index.html for better LCP.
export const HERO_SLIDE_INTERVAL = null;

export const heroSlides = [
  {
    id: "s35",
    eyebrow: "S-Series.",
    badge: "NEW UPGRADE",
    title: "Cooling powered by\nthe tool batteries you already use.",
    text: "",
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
    title: "Wheeled cooling for\nvehicle travel and outdoor supply.",
    text: "",
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

```js
export const categoryCopy = [
  {
    name: "Compact Cooling",
    label: "Under 30L, lighter and easier to carry.",
    image: "/assets/products/b20.png",
    href: "#/products/compact-cooling",
    target: "/products/compact-cooling",
  },
  {
    name: "Large Capacity",
    label: "30L and above for larger storage needs.",
    image: "/assets/products/ex.png",
    href: "#/products/large-capacity",
    target: "/products/large-capacity",
  },
  {
    name: "Dual-zone Storage",
    label: "Separated cooling zones for chilled and frozen items.",
    image: "/assets/products/gl.png",
    href: "#/products/dual-zone-storage",
    target: "/products/dual-zone-storage",
  },
  {
    name: "Wheeled Mobility",
    label: "Cooling systems with wheels and pull-handle layouts.",
    image: "/assets/products/exm.png",
    href: "#/products/wheeled-mobility",
    target: "/products/wheeled-mobility",
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
    title: "Support",
    text: "Find product documents, manuals, after-sales information and technical support.",
    cta: "View support",
    href: "#/support",
    target: "/support",
  },
  {
    title: "Contact",
    text: "Reach the team for inquiries, cooperation details, contact information and social channels.",
    cta: "Contact us",
    href: "#/contact",
    target: "/contact",
  },
];

export const projectSteps = [
  ["Brief", "Define target market, product series, capacity, price point and customization needs."],
  ["Proposal", "Confirm available platform, structure direction, MOQ, timeline and cost range."],
  ["Sample", "Build or prepare samples for testing, review and packaging checks."],
  ["Production", "Move into tooling, QC, packaging and repeatable supply."],
];
```

### src/data/productFamilies.js

```js
export const productFamilies = [
  {
    id: "compact-cooling",
    eyebrow: "PRODUCT FAMILY",
    title: "Compact Cooling",
    summary: "Under 30L, lighter and easier to carry.",
    description: "Ideal for everyday trips, solo adventures and short getaways. Quiet compressor cooling in a compact form.",
    href: "#/products/compact-cooling",
    target: "/products/compact-cooling",
    heroImage: "/assets/products/b20.png",
    products: ["d", "k", "s", "b"],
    features: ["Easy to carry", "Compact compressor cooling", "Vehicle-ready power", "Daily travel use"],
    useCases: ["Solo trips", "Picnics", "Daily vehicle use", "Small retail display"],
  },
  {
    id: "large-capacity",
    eyebrow: "PRODUCT FAMILY",
    title: "Large Capacity",
    summary: "30L and above for larger storage needs.",
    description: "Designed for longer routes, family travel and larger cold-storage requirements.",
    href: "#/products/large-capacity",
    target: "/products/large-capacity",
    heroImage: "/assets/products/ex.png",
    products: ["ax", "ex", "gl"],
    features: ["Larger storage volume", "Longer trip support", "Compressor cooling", "Strong equipment presence"],
    useCases: ["Family travel", "Long-distance driving", "Outdoor supply", "Larger cold storage"],
  },
  {
    id: "dual-zone-storage",
    eyebrow: "PRODUCT FAMILY",
    title: "Dual-zone Storage",
    summary: "Separated cooling zones for chilled and frozen items.",
    description: "Dual-zone layouts help organize fresh supplies, frozen goods and drinks for longer trips.",
    href: "#/products/dual-zone-storage",
    target: "/products/dual-zone-storage",
    heroImage: "/assets/products/gl.png",
    products: ["gl", "ax", "tf", "m"],
    features: ["Separate chilled and frozen storage", "Better organization", "Longer route support", "Multi-model range"],
    useCases: ["Fresh + frozen storage", "Camping", "Road trips", "Organized supplies"],
  },
  {
    id: "wheeled-mobility",
    eyebrow: "PRODUCT FAMILY",
    title: "Wheeled Mobility",
    summary: "Cooling systems with wheels and pull-handle layouts.",
    description: "Built for vehicle travel, outdoor supply and easier movement over longer distances.",
    href: "#/products/wheeled-mobility",
    target: "/products/wheeled-mobility",
    heroImage: "/assets/products/exm.png",
    products: ["exm", "m"],
    features: ["Wheels and pull-handle layout", "Easier movement", "Vehicle travel ready", "Outdoor supply use"],
    useCases: ["Vehicle travel", "Campsites", "Coastal routes", "Moving heavier loads"],
  },
];

export function productFamilyById(id) {
  return productFamilies.find((family) => family.id === id);
}
```

### src/data/productGallery.js

```js
// This file is generated by scripts/generate-product-gallery.mjs.
// Run npm run generate:gallery after adding or deleting gallery images.

export const productGallery = {
  "gl": [],
  "ax": [
    {
      "image": "/assets/products/ax/gallery/ax30-open.png"
    },
    {
      "image": "/assets/products/ax/gallery/ax40-front.png"
    },
    {
      "image": "/assets/products/ax/gallery/ax50-black.png"
    },
    {
      "image": "/assets/products/ax/gallery/ax50-side.png"
    }
  ],
  "exm": [],
  "b": [],
  "k": [],
  "tf": [],
  "m": [
    {
      "image": "/assets/products/m/gallery/m45-black.png"
    },
    {
      "image": "/assets/products/m/gallery/m45-front.png"
    },
    {
      "image": "/assets/products/m/gallery/m45-open.png"
    },
    {
      "image": "/assets/products/m/gallery/m45-side.png"
    }
  ],
  "ex": [],
  "s35": [],
  "s": [],
  "d": []
};
```

### src/data/productImageManifest.js

```js
// This file is generated by scripts/generate-gallery-manifest.mjs.
// Run npm run dev or npm run preview after adding or deleting model images.

export const productImageManifest = {
  "gl": {
    "GL35": {
      "Black": "/assets/products/gl/models/gl35-black.png",
      "Sage Green": "/assets/products/gl/models/gl35-sage.png"
    },
    "GL45": {
      "Black": "/assets/products/gl/models/gl45-black.png",
      "Sage Green": "/assets/products/gl/models/gl45-sage.png"
    },
    "GL55": {
      "Black": "/assets/products/gl/models/gl55-black.png",
      "Sage Green": "/assets/products/gl/models/gl55-sage.png"
    },
    "GL75": {
      "Black": "/assets/products/gl/models/gl75-black.png"
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
  "exm": {
    "EXM30": {
      "all-black": "/assets/products/exm/models/exm30-black.jpg",
      "blue-gray-light-gray": "/assets/products/exm/models/exm30-bluegray&lightgray.png"
    },
    "EXM40": {
      "all-black": "/assets/products/exm/models/exm40-black.jpg",
      "blue-gray-light-gray": "/assets/products/exm/models/exm40-bluegray&lightgray.png"
    },
    "EXM50": {
      "all-black": "/assets/products/exm/models/exm50-black.jpg",
      "blue-gray-light-gray": "/assets/products/exm/models/exm50-bluegray&lightgray.png"
    }
  },
  "k": {},
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

const DEFAULT_TEMPERATURE_RANGE = "Down to -20˚C";

export const products = [
  {
    id: "gl",
    name: "GL Series",
    nameZh: "GL 系列",
    models: ["GL35", "GL45", "GL55", "GL75"],
    tag: "expedition",
    image: "/assets/products/gl/models/gl35-black.png",
    alt: "GL Series expedition portable fridge for overlanding SUV travel and larger cold storage",
    defaultModel: "GL35",
    defaultColor: "Black",
    colorOptions: [
      { name: "Black", value: "Black", swatch: "#121211" },
      { name: "Sage Green", value: "Sage Green", swatch: "#879078" },
    ],
    modelOptions: ["GL35", "GL45", "GL55", "GL75"],
    productImages: {
      GL35: {
        Black: "/assets/products/gl/models/gl35-black.png",
        "Sage Green": "/assets/products/gl/models/gl35-sage.png",
      },
      GL45: {
        Black: "/assets/products/gl/models/gl45-black.png",
        "Sage Green": "/assets/products/gl/models/gl45-sage.png",
      },
      GL55: {
        Black: "/assets/products/gl/models/gl55-black.png",
        "Sage Green": "/assets/products/gl/models/gl55-sage.png",
      },
      GL75: {
        Black: "/assets/products/gl/models/gl75-black.png",
        "Sage Green": "/assets/products/gl/models/gl75-black.png",
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
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
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
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
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
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
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
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
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
        image: "/assets/products/gl/front.png",
        title: "Front exterior",
        text: "GL Series shaped for extended outdoor stays and larger cold-storage needs.",
      },
      {
        image: "/assets/products/gl/open-lid.png",
        title: "Open storage",
        text: "Designed to move naturally between SUV storage and outdoor use.",
      },
      {
        image: "/assets/products/gl/control-panel.png",
        title: "Control panel",
        text: "Dual-zone storage for drinks, fruit and longer travel supplies.",
      },
      {
        image: "/assets/products/gl/handle-detail.png",
        title: "Handle detail",
        text: "GL35, GL45, GL55 and GL75 cover different route and storage needs.",
      },
      {
        image: "/assets/products/gl/gl-black-open.png",
        title: "Black configuration",
        text: "Dual-lid access for larger cold-storage needs.",
      },
      {
        image: "/assets/products/gl/gl-sage-open.png",
        title: "Sage configuration",
        text: "Independent compartments support flexible storage and operation.",
      },
      {
        image: "/assets/products/gl.png",
        title: "Product family",
        text: "Clear operation for vehicle travel and outdoor use.",
      },
      {
        image: "/assets/products/gl/models/gl75-black.png",
        title: "GL75 render",
        text: "Close detail view of the control and display area.",
      },
      {
        image: "/assets/products/gl/models/gl55-sage.png",
        title: "GL55 sage render",
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
    id: "tf",
    name: "TF Series",
    nameZh: "TF 系列",
    models: ["TF35", "TF45", "TF55"],
    tag: "classic",
    image: "/assets/products/tf.jpg",
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
  { name: "Blue Gray & Light Gray", value: "blue-gray-light-gray", swatch: "#6f7f8d", swatches: ["#6f7f8d", "#d4d5d2"] },
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
    temperatureRange: DEFAULT_TEMPERATURE_RANGE,
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

```js
export const seo = {
  title: "Travel Science | Portable Cooling Systems by Kelvcoop",
  description:
    "Travel Science designs portable compressor fridges and vehicle cooling systems by Kelvcoop for travel, outdoor use, distributors and custom projects.",
};
```

### src/data/serviceCards.js

```js
export const serviceCards = [
  {
    label: "ACCESSORIES",
    title: "Gear that goes\nfurther with you.",
    description: "Explore our range of accessories designed to extend the capability of your fridge.",
    buttonText: "View Accessories",
    href: "/accessories",
    image: "/assets/services/accessories-lineup.png",
    imagePosition: "center",
  },
  {
    label: "CUSTOM PROJECTS",
    title: "Built for your\nunique needs.",
    description: "From concept to creation, we deliver tailored cooling solutions for your business and adventure.",
    buttonText: "Start a Project",
    href: "/custom-projects",
    image: "/assets/services/custom-project-sketch.png",
    imagePosition: "center",
  },
  {
    label: "JOIN OUR JOURNEY",
    title: "Adventure is\nbetter together.",
    description: "Follow us for stories, tips and updates from the road.\nLet's explore more.",
    buttonText: "Follow Us",
    href: "/community",
    image: "/assets/services/community-connected.png",
    imagePosition: "center",
  },
];
```

### src/data/socialCrew.js

```js
export const communityHeroImage = "/assets/community/community-hero.jpg";

export const socialCrew = [
  {
    name: "Yiwen",
    platforms: ["TikTok"],
    image: "/assets/community/yiwen-card.jpg",
    accentColor: "#ff5f9a",
    links: [],
  },
  {
    name: "Jonny",
    platforms: ["Instagram"],
    image: "/assets/community/jonny-card.jpg",
    accentColor: "#ff7a1a",
    links: [
      { label: "Follow on Instagram", href: "https://www.instagram.com/kelvcoop_car_fridge?igsh=MXMzY2NkNmlhcHp6dA%3D%3D", icon: "instagram" },
    ],
  },
  {
    name: "Mason",
    platforms: ["LinkedIn"],
    image: "/assets/community/mason-card.jpg",
    accentColor: "#2f80ff",
    links: [],
  },
  {
    name: "Vicky",
    platforms: ["Facebook", "X"],
    image: "/assets/community/vicky-card.jpg",
    accentColor: "#8b5cff",
    links: [
      { label: "Follow on Facebook", href: "https://www.facebook.com/vickie.liu.165033?mibextid=wwXIfr&rdid=635W4EY5wZT7CSJR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BawxA5vYY%2F%3Fmibextid%3DwwXIfr", icon: "facebook" },
      { label: "Follow on X", href: "https://x.com/VickieLiu12", icon: "x" },
    ],
  },
];
```

### src/data/socialLinks.js

```js
export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/vickie.liu.165033?mibextid=wwXIfr&rdid=635W4EY5wZT7CSJR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BawxA5vYY%2F%3Fmibextid%3DwwXIfr",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kelvcoop_car_fridge?igsh=MXMzY2NkNmlhcHp6dA%3D%3D",
  },
  {
    label: "X",
    href: "https://x.com/VickieLiu12",
  },
];
```

### src/main.js

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

function initialTheme() {
  try {
    return window.localStorage.getItem("travelScienceTheme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

const state = {
  menuOpen: false,
  mobileProductsOpen: false,
  productsOpen: false,
  theme: initialTheme(),
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

### src/pages/AccessoriesPage.js

```js
import { accessoryItems, accessoryUseCases } from "../data/accessories.js";

const accessoryGallery = [
  {
    image: "/assets/services/gallery/tool-battery-holder.png",
    alt: "Tool battery holder accessory",
  },
  {
    image: "/assets/services/gallery/电池.jpg",
    alt: "Battery accessory",
  },
  {
    image: "/assets/services/gallery/烟线.png",
    alt: "Vehicle power cable accessory",
  },
  {
    image: "/assets/services/gallery/适配器.png",
    alt: "Power adapter accessory",
  },
  {
    image: "/assets/services/gallery/untitled.1488.png",
    alt: "Storage basket accessory",
  },
  {
    image: "/assets/services/gallery/solar-panel.png",
    alt: "Solar panel accessory",
  },
];

function horizontalControls() {
  return `
    <div class="horizontal-control-row">
      <button class="scroll-arrow scroll-arrow--prev" type="button" data-horizontal-prev aria-label="Scroll previous"><span class="scroll-arrow-icon" aria-hidden="true">&larr;</span></button>
      <button class="scroll-arrow scroll-arrow--next" type="button" data-horizontal-next aria-label="Scroll next"><span class="scroll-arrow-icon" aria-hidden="true">&rarr;</span></button>
    </div>
  `;
}

export function AccessoriesPage() {
  return `
    <main class="page accessories-page">
      <section class="page-hero reveal">
        <p class="kicker">Accessories</p>
        <h1>Gear that goes further with your fridge.</h1>
        <p>Explore power, storage, service and travel accessories designed to extend the capability of Travel Science cooling products.</p>
      </section>

      <section class="gl-product-gallery-section accessory-gallery reveal">
        <div class="gl-product-gallery-viewport">
          ${horizontalControls()}
          <div class="gallery-scroller" data-horizontal-scroll>
            <div class="gallery-track gl-product-gallery-track" data-horizontal-track>
              ${accessoryGallery.map((item) => `
                <article class="gl-product-gallery-card accessory-gallery-card">
                  <div class="gl-product-gallery-image-frame">
                    <img class="gl-product-gallery-image" src="${item.image}" alt="${item.alt}" draggable="false">
                  </div>
                </article>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="product-section reveal">
        <div class="section-heading">
          <p class="kicker">Available categories</p>
          <h2>Choose accessories around the way your fridge is used.</h2>
        </div>
        <div class="accessory-grid">
          ${accessoryItems.map((item) => `
            <article>
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="certifications reveal">
        <div>
          <p class="kicker">Suitable for</p>
          <h2>Accessory planning for daily use and commercial support.</h2>
        </div>
        <div>
          ${accessoryUseCases.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="product-inquiry reveal">
        <p class="kicker">Accessory support</p>
        <h2>Need compatibility or accessory kit details?</h2>
        <p>Send the product series, model, target market and accessory needs. We will help match the right options.</p>
        <a class="hero-cta" href="#/contact" data-go="/contact">Contact us</a>
      </section>
    </main>
  `;
}
```

### src/pages/CommunityPage.js

```js
import { communityHeroImage, socialCrew } from "../data/socialCrew.js";

const platformIcons = {
  facebook: `
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97H15.83c-1.49 0-1.955.93-1.955 1.884v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 132.004 132" width="18" height="18" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="instagramGradientBlue">
          <stop offset="0" stop-color="#3771c8"/>
          <stop offset=".128" stop-color="#3771c8"/>
          <stop offset="1" stop-color="#60f" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="instagramGradientWarm">
          <stop offset="0" stop-color="#fd5"/>
          <stop offset=".1" stop-color="#fd5"/>
          <stop offset=".5" stop-color="#ff543e"/>
          <stop offset="1" stop-color="#c837ab"/>
        </linearGradient>
        <radialGradient id="instagramGradientBase" cx="158.429" cy="578.088" r="65" href="#instagramGradientWarm" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088"/>
        <radialGradient id="instagramGradientOverlay" cx="147.694" cy="473.455" r="65" href="#instagramGradientBlue" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455"/>
      </defs>
      <path fill="url(#instagramGradientBase)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
      <path fill="url(#instagramGradientOverlay)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
      <path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="#25f4ee" d="M14.1 2h3.1c.2 1.5.8 2.8 1.8 3.8 1 .9 2.2 1.4 3.7 1.6v3.8c-1.9 0-3.6-.6-5.1-1.6v6.1c0 3.8-3 6.8-6.8 6.8-3.6 0-6.6-2.8-6.8-6.4-.2-3.9 3-7.1 6.8-7.1.5 0 1 .1 1.5.2v4.1a3 3 0 0 0-1.7-.4c-1.7.1-3.1 1.6-3 3.3.1 1.6 1.4 2.9 3 3 1.8.1 3.3-1.4 3.3-3.2V2h.2Z"/>
      <path fill="#ff2b77" d="M15.4 2h2c.3 1.3.9 2.4 1.8 3.2.9.8 2 1.3 3.5 1.5v4.5c-1.9 0-3.6-.6-5.1-1.6v6.1c0 3.8-3 6.8-6.8 6.8-2.2 0-4.1-1-5.4-2.6a6.8 6.8 0 0 0 11.5-5V8.8c1.5 1.1 3.2 1.6 5.1 1.6V8.2c-3.4-.4-6.2-2.8-6.6-6.2Z"/>
      <path fill="#fff" d="M12.9 2H16c.2 1.5.8 2.8 1.8 3.8 1 .9 2.2 1.4 3.7 1.6v3.8c-1.9 0-3.6-.6-5.1-1.6v6.1c0 3.8-3 6.8-6.8 6.8-3.6 0-6.6-2.8-6.8-6.4-.2-3.9 3-7.1 6.8-7.1.5 0 1 .1 1.5.2v4.1a3 3 0 0 0-1.7-.4c-1.7.1-3.1 1.6-3 3.3.1 1.6 1.4 2.9 3 3 1.8.1 3.3-1.4 3.3-3.2V2h.2Z"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M13.9 10.5 21.3 2h-1.8l-6.4 7.4L8 2H2l7.8 11.3L2 22h1.8l6.8-7.8L16 22h6l-8.1-11.5zm-2.4 2.8-.8-1.1L4.5 3.3h2.7l5 7.1.8 1.1 6.5 9.3h-2.7l-5.3-7.5z"/>
    </svg>
  `,
};

function platformIcon(icon) {
  return `<span class="crew-platform-icon crew-platform-icon--${icon}">${platformIcons[icon] || icon}</span>`;
}

function crewCard(member) {
  const style = ` style="--crew-accent: ${member.accentColor};"`;

  return `
    <article class="crew-card"${style}>
      <div class="crew-platform-icons crew-platform-icons--hero">
        ${member.links.map((link) => platformIcon(link.icon)).join("")}
      </div>
      <h3>${member.platforms.join(" & ")}</h3>
      <div class="crew-card-actions">
        ${member.links.map((link) => `
          <a class="crew-social-button crew-social-button--${link.icon}" href="${link.href}" aria-label="${link.label}"${link.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>
            <span>${link.label}</span>
            <span aria-hidden="true">→</span>
          </a>
        `).join("")}
      </div>
      <div class="crew-person-row">
        <img class="crew-avatar" src="${member.image}" alt="${member.name}">
        <span>${member.name}</span>
      </div>
    </article>
  `;
}

export function CommunityPage() {
  return `
    <main class="community-page">
      <section class="community-landing reveal">
        <div class="community-hero-card">
          <div class="community-copy-panel">
            <p class="community-breadcrumb">HOME <span>/</span> COMMUNITY</p>
            <p class="community-label">LET'S BE FRIENDS</p>
            <h1>Different people.<br>One adventure.</h1>
            <p class="community-note">Pick a platform.<br>We'll see you there.<span class="community-paper-plane" aria-hidden="true"><svg viewBox="0 0 86 28" focusable="false"><path class="community-paper-plane-trail" d="M2 18c10-7 19-9 31-5 7 2 12 2 17-1"/><path class="community-paper-plane-mark" d="M54 5 82 14 54 24l5-9-5-10Z"/><path class="community-paper-plane-fold" d="M59 15h23M59 15l-5 9"/></svg></span></p>
          </div>
          <div class="community-image-panel">
            <img src="${communityHeroImage}" alt="Travel Science crew at a summer campsite">
          </div>
          <div class="crew-grid">
            ${socialCrew.map(crewCard).join("")}
          </div>
          <p class="community-mobile-ending">See you out there.</p>
        </div>
      </section>
    </main>
  `;
}
```

### src/pages/ContactPage.js

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
          <div><dt>Contact type</dt><dd>Product details, distributor cooperation, custom projects and service questions</dd></div>
        </dl>
      </section>

      <section class="contact-social reveal">
        <p class="kicker">Follow Travel Science</p>
        <h2>Connect with us for product updates, project references and distributor information.</h2>
        <div class="contact-social-links">
          ${socialLinks.map((link) => `
            <a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>
          `).join("")}
        </div>
      </section>
    </main>
  `;
}
```

### src/pages/CustomProjectsPage.js

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
        <a class="hero-cta" href="#/contact" data-go="/contact">Start a custom project</a>
      </section>
    </main>
  `;
}
```

### src/pages/HomePage.js

```js
import { HeroCarousel } from "../components/HeroCarousel.js";
import { ProductFamily } from "../components/ProductFamily.js";
import { ServiceEntryCards } from "../components/ServiceEntryCards.js";
import { ContactSection } from "../components/ContactSection.js";
import { businessEntries, categoryCopy } from "../data/homepage.js";
import { heroSlides } from "../data/heroSlides.js";
import { serviceCards } from "../data/serviceCards.js";

export function HomePage({ currentHeroSlide }) {
  return `
    <main>
      ${HeroCarousel({ slides: heroSlides, currentSlide: currentHeroSlide })}

      <div class="home-content-layer">
        ${ProductFamily({ categories: categoryCopy })}

        <section class="trust-line reveal">
          <p>Product specifications, customization and supply planning for outdoor cooling programs.</p>
        </section>

        ${ServiceEntryCards({ cards: serviceCards })}
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

### src/pages/ProductDetailPage.js

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

### src/pages/ProductFamilyPage.js

```js
import { productFamilyById } from "../data/productFamilies.js";
import { productById } from "../data/products.js";

const emptyValue = "—";

export function ProductFamilyPage({ familyId }) {
  const family = productFamilyById(familyId);
  if (!family) return notFound();

  const familyProducts = family.products.map(productById).filter(Boolean);

  return `
    <main class="family-page">
      ${familyHero(family)}
      ${compareSection(family, familyProducts)}
      ${featureSection(family)}
      ${useCaseSection(family)}
      ${helpSection()}
    </main>
  `;
}

function familyHero(family) {
  return `
    <section class="family-manifest-hero reveal">
      <div class="family-manifest-copy">
        <nav class="breadcrumb family-manifest-breadcrumb" aria-label="Breadcrumb">
          <a href="#/" data-go="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="#/products" data-go="/products">Products</a>
          <span aria-hidden="true">/</span>
          <span>${family.title}</span>
        </nav>
        <p class="kicker">${family.eyebrow}</p>
        <h1>${family.title}<span class="period-accent">.</span></h1>
        <h2>${family.summary}</h2>
        <p>${family.description}</p>
        <div class="family-manifest-actions">
          <a class="hero-cta" href="#lineup" data-local-anchor="lineup">Compare all models</a>
          <a class="text-button" href="#/products" data-go="/products">View all products <span class="arrow-accent">→</span></a>
        </div>
      </div>
    </section>
  `;
}

function compareSection(family, products) {
  return `
    <section class="family-section family-compare reveal">
      <div class="section-heading" id="lineup">
        <p class="kicker">Compare all models</p>
        <h2>${family.title} lineup.</h2>
      </div>
      <div class="family-comparison-mobile">
        ${products.map(compareCard).join("")}
        <a class="text-button family-table-jump" href="#comparison-table" data-local-anchor="comparison-table">View comparison table <span class="arrow-accent">→</span></a>
      </div>
      <div class="family-comparison-table-wrap" id="comparison-table">
        <table class="family-comparison-table">
          <thead>
            <tr>
              <th scope="col">Specification</th>
              ${products.map((product) => `
                <th scope="col">
                  <a class="family-product-heading" href="#/products/${product.id}" data-go="/products/${product.id}">
                    <img src="${product.cardImage || product.image}" alt="${product.name}">
                    <span>${product.name}</span>
                    <small>${value(product.capacity)}</small>
                  </a>
                </th>
              `).join("")}
            </tr>
          </thead>
          <tbody>
            ${comparisonRows(products).map(({ label, values }) => `
              <tr>
                <th scope="row">${label}</th>
                ${values.map((item) => `<td>${item}</td>`).join("")}
              </tr>
            `).join("")}
            <tr>
              <th scope="row">View details</th>
              ${products.map((product) => `<td><a class="table-link" href="#/products/${product.id}" data-go="/products/${product.id}">View details →</a></td>`).join("")}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function comparisonRows(products) {
  return [
    { label: "Model", values: products.map((product) => value(product.models?.join(" / ") || product.name)) },
    { label: "Capacity", values: products.map((product) => value(product.capacity)) },
    { label: "Dimensions", values: products.map((product) => value(firstDetail(product)?.productDimensions)) },
    { label: "Net weight", values: products.map((product) => value(firstDetail(product)?.netWeight)) },
    { label: "Temperature range", values: products.map((product) => value(firstDetail(product)?.temperatureRange)) },
    { label: "Voltage / Power", values: products.map((product) => value(product.voltage || firstDetail(product)?.voltage)) },
    { label: "Cooling type", values: products.map((product) => value(product.cooling || firstDetail(product)?.cooling)) },
    { label: "Zone", values: products.map(zoneValue) },
    { label: "Mobility", values: products.map(mobilityValue) },
    { label: "Best for", values: products.map((product) => value(product.application || firstDetail(product)?.application)) },
  ];
}

function compareCard(product) {
  const detail = firstDetail(product);
  return `
    <article class="family-compare-card">
      <img src="${product.cardImage || product.image}" alt="${product.name}">
      <div>
        <h3>${product.name}</h3>
        <dl>
          ${definition("Capacity", product.capacity)}
          ${definition("Voltage", product.voltage || detail?.voltage)}
          ${definition("Temperature", detail?.temperatureRange)}
          ${definition("Best for", product.application || detail?.application)}
        </dl>
        <a class="text-button" href="#/products/${product.id}" data-go="/products/${product.id}">View details <span class="arrow-accent">→</span></a>
      </div>
    </article>
  `;
}

function featureSection(family) {
  return `
    <section class="family-section reveal" id="key-features">
      <div class="section-heading">
        <p class="kicker">Key features</p>
        <h2>Why choose ${family.title}.</h2>
      </div>
      <div class="family-feature-grid">
        ${family.features.map((feature, index) => `
          <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${feature}</h3>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function useCaseSection(family) {
  return `
    <section class="family-section reveal" id="use-cases">
      <div class="section-heading">
        <p class="kicker">Use cases</p>
        <h2>Built around real routes.</h2>
      </div>
      <div class="family-use-case-list">
        ${family.useCases.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function helpSection() {
  return `
    <section class="family-help reveal" id="faqs">
      <div>
        <p class="kicker">Need help choosing?</p>
        <h2>Our team can help you find the right model for your market or use case.</h2>
      </div>
      <div class="family-help-actions">
        <a class="hero-cta" href="#/contact" data-go="/contact">Contact us <span aria-hidden="true">→</span></a>
        <a class="text-button" href="#/products" data-go="/products">View all products <span class="arrow-accent">→</span></a>
      </div>
    </section>
  `;
}

function firstDetail(product) {
  return product?.modelDetails?.[0] || null;
}

function value(input) {
  return input || emptyValue;
}

function definition(label, input) {
  return `<div><dt>${label}</dt><dd>${value(input)}</dd></div>`;
}

function zoneValue(product) {
  if (["gl", "ax", "tf", "m"].includes(product.id)) return "Dual-zone";
  return emptyValue;
}

function mobilityValue(product) {
  if (["gl", "exm", "m"].includes(product.id)) return "Wheels / pull handle";
  return "Portable";
}

function notFound() {
  return `
    <main class="page">
      <section class="page-hero">
        <p class="kicker">404</p>
        <h1>Product family not found.</h1>
        <a class="hero-cta" href="#/products" data-go="/products">Explore Products</a>
      </section>
    </main>
  `;
}
```

### src/pages/ProductsPage.js

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

### src/pages/SupportPage.js

```js
const downloadGroups = [
  {
    label: "Product brochures",
    status: "Request document",
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
    "Available documents can be downloaded here or requested through the contact page.",
  ],
  [
    "Do you provide after-sales support for distributors?",
    "Yes. Support can include usage guidance, troubleshooting, spare parts and service coordination.",
  ],
];

export function SupportPage() {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">Support</p>
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
        <p class="kicker">Support request</p>
        <h2>Need a document or service answer?</h2>
        <p>Send the product series, model or question and we will point you to the right information.</p>
        <a class="hero-cta" href="#/contact" data-go="/contact">Contact support</a>
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

### src/router.js

```js
import { AccessoriesPage } from "./pages/AccessoriesPage.js";
import { CommunityPage } from "./pages/CommunityPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { CustomProjectsPage } from "./pages/CustomProjectsPage.js";
import { HomePage } from "./pages/HomePage.js";
import { ProductDetailPage } from "./pages/ProductDetailPage.js";
import { ProductFamilyPage } from "./pages/ProductFamilyPage.js";
import { ProductsPage } from "./pages/ProductsPage.js";
import { SupportPage } from "./pages/SupportPage.js";
import { seo } from "./data/seo.js";
import { productFamilyById } from "./data/productFamilies.js";
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
  if (current === "/accessories") return AccessoriesPage();
  if (current === "/community") return CommunityPage();
  if (current === "/products") return ProductsPage();
  if (current === "/custom-projects") return CustomProjectsPage();
  if (current === "/support") return SupportPage();
  if (current === "/contact") return ContactPage();

  if (current.startsWith("/products/")) {
    const productId = current.match(/^\/products\/([^/]+)/)?.[1];
    if (productFamilyById(productId)) return ProductFamilyPage({ familyId: productId });
    return ProductDetailPage({ productId });
  }

  return HomePage({ currentHeroSlide });
}

export function routeSeo() {
  const current = route();

  if (current.startsWith("/products/")) {
    const productId = current.match(/^\/products\/([^/]+)/)?.[1];
    const family = productFamilyById(productId);
    if (family) {
      return {
        title: `${family.title} | Travel Science`,
        description: family.description || seo.description,
      };
    }
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

.products-menu-group h3 a {
  color: inherit;
  text-decoration: none;
}

.products-menu-group h3 a:hover {
  color: #ff7a00;
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
  min-height: 0;
  align-items: center;
  margin-bottom: 12px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--orange);
  font-size: 13px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
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
  color: var(--text);
  text-decoration: none;
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

/* Product Family Manifest */
.family-page {
  width: 100%;
  margin: 0;
  padding-top: 96px;
  background: var(--bg);
}

.family-manifest-hero,
.family-section,
.family-help {
  width: var(--content-max);
  margin-inline: auto;
}

.family-manifest-hero {
  display: block;
  padding: clamp(34px, 4vw, 52px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: #050607;
  color: #f7f4ef;
  overflow: hidden;
}

.family-manifest-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: clamp(18px, 2.4vw, 30px);
  color: rgba(247, 244, 239, 0.48);
  font-size: 13px;
  font-weight: 800;
}

.family-manifest-breadcrumb a {
  color: inherit;
  text-decoration: none;
}

.family-manifest-breadcrumb a:hover {
  color: var(--orange);
}

.family-manifest-copy .kicker {
  color: var(--orange);
  margin-bottom: 14px;
}

.family-manifest-copy h1 {
  max-width: 10ch;
  margin-bottom: 16px;
  color: #fff;
  font-size: clamp(56px, 6vw, 88px);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.family-manifest-copy h2 {
  max-width: 720px;
  margin-bottom: 14px;
  color: #fff;
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.12;
}

.family-manifest-copy p:not(.kicker) {
  max-width: 720px;
  margin-bottom: 0;
  color: rgba(247, 244, 239, 0.68);
  font-size: 17px;
  line-height: 1.45;
}

.family-manifest-actions,
.family-help-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin-top: 28px;
}

.family-manifest-actions .text-button,
.family-help-actions .text-button {
  color: #f7f4ef;
}

.family-section,
.family-help {
  padding: clamp(42px, 4vw, 64px) 0;
  border-top: 1px solid var(--line);
}

#lineup,
#comparison-table {
  scroll-margin-top: calc(var(--nav-top) + var(--nav-height) + 24px);
}

.family-comparison-mobile {
  display: none;
}

.family-comparison-table-wrap {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel-solid);
  -webkit-overflow-scrolling: touch;
}

.family-comparison-table {
  width: 100%;
  min-width: 920px;
  border-collapse: collapse;
}

.family-comparison-table th,
.family-comparison-table td {
  padding: 16px;
  border-bottom: 1px solid var(--line);
  border-left: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
  line-height: 1.35;
  text-align: left;
  vertical-align: top;
}

.family-comparison-table th:first-child,
.family-comparison-table td:first-child {
  border-left: 0;
}

.family-comparison-table tbody tr:last-child th,
.family-comparison-table tbody tr:last-child td {
  border-bottom: 0;
}

.family-comparison-table thead th {
  color: var(--text);
  font-weight: 900;
}

.family-product-heading {
  display: grid;
  gap: 8px;
  color: var(--text);
  text-decoration: none;
}

.family-product-heading img {
  width: 120px;
  height: 90px;
  object-fit: contain;
}

.family-product-heading span {
  font-weight: 900;
}

.family-product-heading small {
  color: var(--muted);
  font-size: 12px;
}

.table-link {
  color: var(--orange);
  font-weight: 900;
  text-decoration: none;
}

.family-feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.family-feature-grid article {
  min-height: 150px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-solid);
}

.family-feature-grid span {
  display: block;
  margin-bottom: 22px;
  color: var(--orange);
  font-size: 13px;
  font-weight: 900;
}

.family-feature-grid h3 {
  margin: 0;
}

.family-use-case-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.family-use-case-list span {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  padding: 0 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--panel-solid);
  color: var(--text);
  font-weight: 800;
}

.family-help {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  align-items: center;
  margin-bottom: var(--space-section-tight);
}

.family-help h2 {
  max-width: 700px;
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

.service-entry-card .feature-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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

.product-page {
  width: 100%;
  max-width: none;
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

.product-hero,
.product-config-panel {
  --text: #f7f4ef;
  --muted: rgba(247, 244, 239, 0.68);
  --quiet: rgba(247, 244, 239, 0.48);
  --line: rgba(255, 255, 255, 0.18);
  --panel-solid: rgba(255, 255, 255, 0.035);

  display: grid;
  grid-template-columns: minmax(360px, 0.42fr) minmax(520px, 0.58fr);
  grid-template-areas:
    "copy visual"
    "controls visual";
  gap: clamp(44px, 5vw, 72px);
  align-items: center;
  width: min(calc(100vw - 80px), 1320px);
  max-width: none;
  margin-inline: auto;
  min-height: auto;
  padding: clamp(48px, 6vw, 72px) 0;
  background: #050607;
  box-shadow: 0 0 0 100vmax #050607;
  clip-path: inset(0 -100vmax);
  color: var(--text);
}

.product-config-copy {
  grid-area: copy;
  min-width: 0;
}

.product-config-controls {
  grid-area: controls;
  min-width: 0;
}

.product-config-visual {
  grid-area: visual;
  min-width: 0;
}

.product-config-breadcrumb {
  width: 100%;
  margin: 0 0 26px;
  flex-wrap: wrap;
  color: rgba(247, 244, 239, 0.42);
}

.product-hero-copy h1 {
  margin-bottom: 10px;
  color: var(--text);
  font-size: clamp(32px, 3.8vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.034em;
}

.product-hero-copy h2 {
  color: var(--text);
}

.product-hero-copy p {
  max-width: 620px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.5;
}

.product-hero-media {
  width: 100%;
  min-height: clamp(460px, 48vw, 620px);
  border-radius: 10px;
  background: linear-gradient(180deg, #eef0f0 0%, #d7dada 100%);
}

.product-config-visual img,
.product-hero-media.product-config-visual img {
  width: 86%;
  height: 86%;
  object-fit: contain;
}

.product-config-visual .gl-product-hero-image {
  transform: none;
}

.gl-product-hero-image {
  transform: scale(1.18);
  transform-origin: center center;
}

.model-selector {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: auto;
  margin-top: clamp(44px, 6vw, 72px);
  margin-bottom: 28px;
  padding: 0;
  overflow: visible;
  border-radius: 0;
  background: transparent;
}

.model-label {
  display: block;
  min-width: 0;
  margin-bottom: 20px;
  color: var(--quiet);
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  white-space: nowrap;
}

.model-tabs {
  display: flex;
  flex: 1;
  max-width: 100%;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 16px 28px;
  overflow: visible;
}

.model-tab {
  position: relative;
  flex: 0 0 auto;
  min-width: max-content;
  height: auto;
  padding: 0 0 12px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  transition: color 200ms ease;
}

.model-tab:hover {
  color: var(--orange);
}

.model-tab.active {
  color: var(--orange);
}

.model-tab.active::after {
  content: "";
  position: absolute;
  right: auto;
  bottom: 0;
  left: 0;
  width: min(72px, 100%);
  height: 2px;
  background: var(--orange);
}

.product-color-selector {
  width: 100%;
  max-width: none;
  min-width: 0;
  margin-top: 0;
  padding-top: 0;
}

.product-color-selector > p,
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
  gap: 16px;
  width: 100%;
  min-width: 0;
}

.product-color-option {
  position: relative;
  display: grid;
  width: 100%;
  min-width: 0;
  place-items: center;
  min-height: 128px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.035);
  color: var(--text);
  font: inherit;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.product-color-option > span:not(.product-color-swatch) {
  min-width: 0;
  overflow-wrap: anywhere;
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
  scroll-padding-inline: 5vw;
  padding-inline: 5vw;
  padding-bottom: 10px;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: #ff7a00 rgba(255, 255, 255, 0.12);
  -webkit-overflow-scrolling: touch;
}

.horizontal-track {
  width: max-content;
  max-width: none;
  min-width: 0;
}

.model-specs .horizontal-track,
.model-specs .model-spec-grid {
  justify-content: flex-start;
  margin-left: 0;
  padding-left: 0;
  padding-inline-start: 0;
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

.horizontal-scroll::-webkit-scrollbar,
.gallery-scroller::-webkit-scrollbar {
  height: 10px;
}

.horizontal-scroll::-webkit-scrollbar-track,
.gallery-scroller::-webkit-scrollbar-track {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
}

.horizontal-scroll::-webkit-scrollbar-thumb,
.gallery-scroller::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 999px;
  background: #ff7a00;
  background-clip: padding-box;
}

.horizontal-scroll::-webkit-scrollbar-thumb:hover,
.gallery-scroller::-webkit-scrollbar-thumb:hover {
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
.use-case-grid,
.accessory-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.feature-detail-grid article,
.use-case-grid article,
.accessory-grid article {
  padding: clamp(16px, 1.8vw, 24px);
}

.feature-detail-grid h3,
.use-case-grid h3,
.accessory-grid h3 {
  font-size: 18px;
}

.feature-detail-grid p,
.use-case-grid p,
.accessory-grid p,
.product-inquiry p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

.accessory-grid article {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel-solid);
}

.accessory-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: center;
  padding: var(--space-section-tight) 0;
  border-top: 1px solid var(--line);
}

.accessory-showcase-media {
  display: grid;
  min-height: clamp(260px, 32vw, 460px);
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 66%, rgba(255, 255, 255, 0.76), transparent 46%),
    linear-gradient(145deg, rgba(234, 238, 238, 0.72), rgba(255, 255, 255, 0.92));
}

.accessory-showcase-media img {
  width: min(82%, 720px);
  height: auto;
}

.accessory-showcase-copy p:not(.kicker) {
  max-width: 560px;
  color: var(--muted);
  line-height: 1.5;
}

.accessory-gallery .gl-product-gallery-image-frame {
  height: 100%;
  max-height: 100%;
}

.accessory-gallery .gl-product-gallery-card .gl-product-gallery-image {
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.community-page {
  min-height: 100vh;
  padding: 104px clamp(18px, 3vw, 44px) 204px;
  background: #f4efe7;
  color: #101112;
}

.community-landing {
  width: min(100%, 1560px);
  margin: 0 auto;
}

.community-hero-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(360px, 0.75fr) minmax(720px, 1.25fr);
  min-height: clamp(700px, 78vh, 860px);
  overflow: visible;
  border-radius: 28px;
  background: #f8f3eb;
  box-shadow: 0 28px 90px rgba(68, 54, 35, 0.14);
}

.community-copy-panel {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(34px, 4.4vw, 62px);
  border-radius: 28px 0 0 28px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.24) 64%, rgba(0, 0, 0, 0));
}

.community-breadcrumb {
  margin: 0 0 clamp(48px, 7vw, 84px);
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.18em;
}

.community-breadcrumb span {
  display: inline-block;
  margin: 0 14px;
  color: rgba(255, 255, 255, 0.44);
}

.community-label {
  margin: 0 0 16px;
  color: var(--orange);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.18em;
}

.community-copy-panel h1 {
  max-width: 460px;
  margin: 0 0 28px;
  color: #fff;
  font-size: clamp(54px, 6vw, 86px);
  line-height: 0.92;
}

.community-copy-panel h1::first-letter {
  letter-spacing: 0;
}

.community-body {
  max-width: 390px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.48;
}

.community-note {
  position: relative;
  margin: auto 0 120px min(120px, 12vw);
  color: rgba(255, 255, 255, 0.78);
  font-family: "Comic Sans MS", "Marker Felt", cursive;
  font-size: clamp(18px, 2vw, 24px);
  transform: rotate(-4deg);
}

.community-paper-plane {
  position: absolute;
  left: calc(100% + 10px);
  bottom: 0.05em;
  display: inline-block;
  width: 86px;
  height: 28px;
  color: var(--orange);
  pointer-events: none;
  transform-origin: 80% 50%;
  animation: communityPaperPlaneFly 4.5s ease-in-out infinite;
}

.community-paper-plane svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.community-paper-plane-trail,
.community-paper-plane-mark,
.community-paper-plane-fold {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.community-paper-plane-trail {
  stroke-width: 1.4;
  stroke-dasharray: 4 6;
  opacity: 0.72;
}

.community-paper-plane-mark,
.community-paper-plane-fold {
  stroke-width: 2;
}

.community-mobile-ending {
  display: none;
}

@media (min-width: 1181px) {
  .community-page {
    padding-bottom: 420px;
  }

  .community-mobile-ending {
    position: absolute;
    right: 0;
    bottom: clamp(-328px, calc(-294px - 2.2vw), -312px);
    left: 0;
    display: block;
    margin: 0;
    color: var(--orange);
    font-size: 28px;
    font-weight: 900;
    text-align: center;
  }
}

@keyframes communityPaperPlaneFly {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(-8deg);
  }

  12% {
    opacity: 1;
  }

  70% {
    opacity: 0.95;
  }

  100% {
    opacity: 0;
    transform: translate(min(42vw, 620px), -54px) rotate(10deg);
  }
}

.community-image-panel {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  background: #d9d4c8;
}

.community-image-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
}

.crew-grid {
  position: absolute;
  z-index: 4;
  right: clamp(28px, 4vw, 64px);
  bottom: clamp(-194px, calc(-160px - 2.2vw), -178px);
  left: clamp(28px, 4vw, 64px);
  display: grid;
  grid-template-columns: repeat(4, minmax(270px, 300px));
  gap: clamp(14px, 1.6vw, 22px);
  justify-content: center;
  align-items: stretch;
}

.crew-card {
  --crew-accent: var(--orange);
  display: flex;
  min-height: 420px;
  max-height: 460px;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px 24px;
  border: 1px solid color-mix(in srgb, var(--crew-accent) 68%, rgba(255, 255, 255, 0.2));
  border-radius: 18px;
  background: rgba(16, 19, 21, 0.78);
  color: #f7f4ef;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(18px);
}

.crew-avatar {
  width: 48px;
  height: 48px;
  border-radius: 999px;
  object-fit: cover;
  object-position: center;
}

.crew-person-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--crew-accent) 38%, rgba(255, 255, 255, 0.14));
  color: rgba(247, 244, 239, 0.78);
  font-size: 24px;
  font-weight: 900;
}

.crew-person-row span {
  color: var(--crew-accent);
}

.crew-platform-icons {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.crew-platform-icon {
  display: inline-grid;
  width: 34px;
  height: 34px;
  place-items: center;
  flex: 0 0 34px;
  border-radius: 0;
  background: transparent;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  line-height: 1;
}

.crew-platform-icon svg {
  width: 100%;
  height: 100%;
}

.crew-platform-icons--hero {
  gap: 12px;
  justify-content: center;
  min-height: 72px;
}

.crew-platform-icons--hero .crew-platform-icon {
  width: 72px;
  height: 72px;
  flex-basis: 72px;
}

.crew-platform-icon--linkedin {
  color: #0a66c2;
}

.crew-platform-icon--facebook {
  color: #1877f2;
}

.crew-platform-icon--x {
  color: #fff;
}

.crew-card h3 {
  margin: 20px 0 28px;
  color: #fff;
  font-size: clamp(32px, 2.4vw, 40px);
  text-align: center;
  line-height: 1;
}

.crew-card-actions {
  display: grid;
  width: 100%;
  gap: 8px;
}

.crew-social-button {
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: var(--crew-accent);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--crew-accent) 28%, transparent);
}

.crew-social-button span:last-child {
  color: #fff;
  font-size: 20px;
  line-height: 1;
}

.crew-social-button--tiktok {
  background: linear-gradient(135deg, #ff2b77, #fe2c55);
}

.crew-social-button--instagram {
  background: linear-gradient(135deg, #f58529, #dd2a7b 58%, #8134af);
}

.crew-social-button--linkedin {
  background: #0a66c2;
}

.crew-social-button--facebook {
  background: #1877f2;
}

.crew-social-button--x {
  border-color: rgba(255, 255, 255, 0.32);
  background: #050505;
}

html[data-theme="dark"] .community-page {
  background: #07090b;
  color: #f7f4ef;
}

html[data-theme="dark"] .community-hero-card {
  background: #0e1113;
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.38);
}

html[data-theme="dark"] .community-breadcrumb,
html[data-theme="dark"] .community-body,
html[data-theme="dark"] .community-note {
  color: rgba(247, 244, 239, 0.68);
}

html[data-theme="dark"] .community-breadcrumb span {
  color: rgba(247, 244, 239, 0.34);
}

html[data-theme="dark"] .community-copy-panel h1 {
  color: #f7f4ef;
}

html[data-theme="dark"] .community-image-panel {
  background: #111;
}

html[data-theme="dark"] .crew-card {
  border-color: color-mix(in srgb, var(--crew-accent) 58%, rgba(255, 255, 255, 0.1));
  background: rgba(16, 19, 21, 0.78);
  color: #f7f4ef;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}

html[data-theme="dark"] .crew-person-row,
html[data-theme="dark"] .crew-social-button {
  color: #f7f4ef;
}

@media (max-width: 1180px) {
  .community-hero-card {
    grid-template-columns: minmax(320px, 0.8fr) minmax(520px, 1.2fr);
    min-height: 940px;
  }

  .crew-grid {
    grid-template-columns: repeat(2, minmax(270px, 300px));
  }
}

@media (max-width: 760px) {
  .community-page {
    padding: 88px 20px 56px;
  }

  .community-hero-card {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 0;
    overflow: visible;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }

  .community-copy-panel {
    display: contents;
    min-height: 0;
    padding: 0;
    border-radius: 0;
    background: none;
  }

  .community-breadcrumb {
    display: none;
  }

  .community-label {
    position: absolute;
    z-index: 2;
    top: 26px;
    left: 22px;
    margin: 0;
    font-size: 11px;
  }

  .community-copy-panel h1 {
    position: absolute;
    z-index: 2;
    top: 58px;
    left: 22px;
    max-width: 300px;
    margin: 0;
    font-size: clamp(44px, 15vw, 62px);
  }

  .community-note {
    order: 2;
    width: fit-content;
    max-width: calc(100% - 74px);
    margin: 28px 0 34px;
    color: #101112;
  }

  html[data-theme="dark"] .community-note {
    color: #f7f4ef;
  }

  .community-paper-plane {
    left: calc(100% + 8px);
    bottom: 0.1em;
    width: 68px;
    height: 22px;
  }

  .community-image-panel {
    position: relative;
    order: 1;
    inset: auto;
    height: auto;
    min-height: 0;
    overflow: visible;
    border-radius: 22px;
  }

  .community-image-panel img {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
    object-fit: contain;
    object-position: center;
  }

  .crew-grid {
    position: static;
    order: 3;
    right: auto;
    bottom: auto;
    left: auto;
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
    justify-content: stretch;
    padding: 0;
  }

  .crew-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    min-height: 0;
    max-height: none;
    gap: 18px;
    align-items: center;
    padding: 20px;
    border-radius: 18px;
  }

  .crew-platform-icons--hero {
    grid-column: 1;
    grid-row: 1;
    justify-content: flex-start;
    min-height: 48px;
  }

  .crew-platform-icons--hero .crew-platform-icon {
    width: 48px;
    height: 48px;
    flex-basis: 48px;
  }

  .crew-card h3 {
    grid-column: 1;
    grid-row: 2;
    margin: 4px 0 12px;
    font-size: 28px;
    text-align: left;
  }

  .crew-card-actions {
    grid-column: 1;
    grid-row: 3;
  }

  .crew-social-button {
    min-height: 46px;
  }

  .crew-person-row {
    grid-column: 2;
    grid-row: 1 / span 3;
    width: auto;
    min-width: 76px;
    flex-direction: column;
    gap: 8px;
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
    font-size: 16px;
    text-align: center;
  }

  .crew-avatar {
    width: 48px;
    height: 48px;
  }

  .community-mobile-ending {
    display: block;
    order: 4;
    margin: 34px 0 0;
    color: var(--orange);
    font-size: 24px;
    font-weight: 900;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .community-paper-plane {
    animation: none;
  }
}

@media (max-width: 760px) {
  .community-page .crew-grid {
    grid-template-columns: minmax(0, 1fr);
  }
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
    display: flex;
  }

  .mobile-products-panel {
    position: relative;
    z-index: 1;
    flex-direction: column;
    width: 100%;
    max-width: none;
    min-width: 0;
    margin: 10px 0 28px;
    padding: 12px 0 4px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    gap: 0;
    overflow: visible;
  }

  .mobile-products-view-all {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    min-width: 0;
    padding: 14px 0 18px;
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    color: rgba(17, 17, 17, 0.64);
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
  }

  .mobile-products-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
  }

  .mobile-product-row {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) auto auto;
    align-items: baseline;
    column-gap: 18px;
    width: 100%;
    min-width: 0;
    min-height: 0;
    padding: 22px 0;
    overflow: visible;
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    color: #111;
    text-decoration: none;
  }

  .mobile-product-name {
    min-width: 0;
    overflow: hidden;
    color: #111;
    font-size: clamp(24px, 6.4vw, 36px);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mobile-product-tag,
  .mobile-product-capacity {
    flex-shrink: 0;
    overflow: visible;
    font-size: clamp(20px, 5.6vw, 30px);
    font-weight: 500;
    line-height: 1;
    text-overflow: clip;
    white-space: nowrap;
  }

  .mobile-product-tag {
    color: var(--orange);
  }

  .mobile-product-tag:empty {
    display: block;
    width: 0;
  }

  .mobile-product-capacity {
    color: rgba(17, 17, 17, 0.58);
    text-align: right;
  }

  html[data-theme="dark"] .mobile-products-panel {
    border-top-color: rgba(255, 255, 255, 0.14);
  }

  html[data-theme="dark"] .mobile-products-view-all {
    border-bottom-color: rgba(255, 255, 255, 0.12);
    color: rgba(247, 244, 239, 0.62);
  }

  html[data-theme="dark"] .mobile-product-row {
    border-bottom-color: rgba(255, 255, 255, 0.12);
    color: #f7f4ef;
  }

  html[data-theme="dark"] .mobile-product-name {
    color: #f7f4ef;
  }

  html[data-theme="dark"] .mobile-product-capacity {
    color: rgba(247, 244, 239, 0.6);
  }

  html[data-theme="dark"] .mobile-product-tag {
    color: var(--orange);
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
  .downloads,
  .accessory-showcase,
  .community-hero {
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
  .use-case-grid,
  .accessory-grid,
  .crew-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .community-loop {
    align-items: flex-start;
    flex-direction: column;
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
  .accessory-grid,
  .crew-grid,
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
  .accessory-showcase,
  .community-hero,
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

@media (max-width: 640px) {
  .product-hero-copy {
    min-width: 0;
  }

  .model-selector {
    gap: 12px;
    row-gap: 12px;
    margin-top: 18px;
    margin-bottom: 16px;
    padding: 14px;
  }

  .model-label {
    width: 100%;
    min-width: 0;
    font-size: 11px;
  }

  .model-tabs {
    gap: 12px;
    padding-bottom: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .model-tabs::-webkit-scrollbar {
    display: none;
  }

  .model-tab {
    height: auto;
    min-height: 42px;
    padding: 10px 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    font-size: 16px;
    line-height: 1;
  }

  .model-tab.active {
    border-color: var(--orange);
    background: rgba(242, 106, 33, 0.14);
  }

  .model-tab.active::after {
    display: none;
  }

  .product-color-selector {
    width: 100%;
    max-width: 100%;
  }

  .product-color-options {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .product-color-option {
    display: flex;
    min-height: auto;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 18px;
    text-align: left;
  }

  .product-color-swatch {
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    margin: 0;
  }
}

@media (min-width: 901px) and (max-width: 1100px) {
  .product-config-panel {
    width: min(calc(100vw - 48px), 1000px);
    grid-template-columns: minmax(320px, 0.44fr) minmax(420px, 0.56fr);
    grid-template-areas:
      "copy visual"
      "controls visual";
    gap: 36px;
  }

  .product-config-visual {
    min-height: clamp(340px, 40vw, 500px);
  }

  .product-color-options {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 900px) {
  .product-config-panel {
    grid-template-columns: 1fr;
    grid-template-areas:
      "copy"
      "visual"
      "controls";
    width: min(calc(100vw - 40px), 720px);
    gap: 28px;
    margin-inline: auto;
  }

  .product-config-copy {
    grid-area: copy;
  }

  .product-config-visual {
    grid-area: visual;
    min-height: clamp(320px, 80vw, 480px);
  }

  .product-config-controls {
    grid-area: controls;
  }

  .model-selector {
    display: block;
    margin-top: 32px;
    margin-bottom: 22px;
    padding: 0;
    overflow: visible;
    background: transparent;
  }

  .model-tabs {
    flex-wrap: nowrap;
    gap: 12px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 4px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .model-tab {
    height: auto;
    min-height: 42px;
    padding: 10px 16px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    font-size: 16px;
    line-height: 1;
    scroll-snap-align: start;
  }

  .model-tab.active {
    border-color: var(--orange);
    background: rgba(242, 106, 33, 0.14);
  }

  .model-tab.active::after {
    display: none;
  }

  .product-color-options {
    grid-template-columns: 1fr;
  }

  .product-color-option {
    min-height: auto;
    padding: 16px 18px;
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
    width: 100%;
    min-width: 0;
    overflow: visible;
  }

  .mobile-nav-panel .mobile-products-view-all {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 0;
    padding: 14px 0 18px !important;
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    color: rgba(17, 17, 17, 0.64);
    font-size: 15px !important;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
  }

  .mobile-nav-panel .mobile-products-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
  }

  .mobile-nav-panel .mobile-product-row {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) auto auto;
    align-items: baseline;
    column-gap: 18px;
    width: 100%;
    min-width: 0;
    padding: 22px 0 !important;
    overflow: visible;
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    color: #111;
    text-decoration: none;
  }

  .mobile-nav-panel .mobile-product-name {
    min-width: 0;
    overflow: hidden;
    color: #111;
    font-size: clamp(24px, 6.4vw, 36px) !important;
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mobile-nav-panel .mobile-product-tag,
  .mobile-nav-panel .mobile-product-capacity {
    flex-shrink: 0;
    overflow: visible;
    font-size: clamp(20px, 5.6vw, 30px) !important;
    font-weight: 500;
    line-height: 1;
    text-overflow: clip;
    white-space: nowrap;
  }

  .mobile-nav-panel .mobile-product-tag {
    color: var(--orange);
  }

  .mobile-nav-panel .mobile-product-tag:empty {
    display: block;
    width: 0;
  }

  .mobile-nav-panel .mobile-product-capacity {
    color: rgba(17, 17, 17, 0.58);
    text-align: right;
  }

  html[data-theme="dark"] .mobile-nav-panel .mobile-products-view-all {
    border-bottom-color: rgba(255, 255, 255, 0.12);
    color: rgba(247, 244, 239, 0.62);
  }

  html[data-theme="dark"] .mobile-nav-panel .mobile-product-row {
    border-bottom-color: rgba(255, 255, 255, 0.12);
  }

  html[data-theme="dark"] .mobile-nav-panel .mobile-product-name {
    color: #f7f4ef;
  }

  html[data-theme="dark"] .mobile-nav-panel .mobile-product-capacity {
    color: rgba(247, 244, 239, 0.6);
  }

  html[data-theme="dark"] .mobile-nav-panel .mobile-product-tag {
    color: var(--orange);
  }
}

@media (max-width: 430px) {
  .mobile-nav-panel .mobile-nav-scroll > a,
  .mobile-nav-panel .mobile-products-toggle,
  .mobile-nav-panel .mobile-menu-item {
    padding-block: 18px !important;
    font-size: 22px !important;
  }

  .mobile-nav-panel .mobile-product-row {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: 6px;
    padding: 18px 0 !important;
  }

  .mobile-nav-panel .mobile-product-name {
    font-size: clamp(24px, 7vw, 32px) !important;
  }

  .mobile-nav-panel .mobile-product-tag {
    grid-column: 1 / 2;
    font-size: 17px !important;
  }

  .mobile-nav-panel .mobile-product-tag:empty {
    display: none;
  }

  .mobile-nav-panel .mobile-product-capacity {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    font-size: 22px !important;
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
  position: relative;
  width: 100vw;
  margin-left: 50%;
  overflow: hidden;
  padding: 0;
  transform: translateX(-50%);
}

.gl-product-gallery-viewport .horizontal-control-row {
  width: min(1180px, calc(100vw - 48px));
  margin: 0 auto 16px;
}

.gallery-scroller {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-padding-inline: 5vw;
  padding-inline: 5vw;
  padding-bottom: 10px;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: #ff7a00 rgba(255, 255, 255, 0.12);
  -webkit-overflow-scrolling: touch;
}

.gallery-track {
  display: flex;
  flex-wrap: nowrap;
  gap: clamp(20px, 2vw, 32px);
  width: max-content;
  justify-content: flex-start;
  min-width: 0;
  margin: 0;
  padding: 0;
  overflow: visible;
  scroll-snap-type: x proximity;
  touch-action: pan-x;
}

.gl-product-gallery-track {
  width: max-content;
}

.gl-product-gallery-card {
  display: flex;
  height: clamp(288px, 27.2vw, 384px);
  flex: 0 0 clamp(360px, 28vw, 520px);
  width: clamp(360px, 28vw, 520px);
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  scroll-snap-align: start;
}

.gl-product-gallery-image-frame {
  display: flex;
  width: 100%;
  height: 68%;
  max-height: 68%;
  min-height: 0;
  align-items: center;
  justify-content: center;
}

.gl-product-gallery-card .gl-product-gallery-image {
  display: block;
  width: auto;
  max-width: 82%;
  height: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
}

.gl-product-gallery-body {
  position: static;
  flex: 1 1 auto;
  width: auto;
  min-height: 0;
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
  .gallery-track,
  .gl-product-gallery-track {
    gap: 18px;
  }

  .gl-product-gallery-card {
    flex-basis: clamp(300px, 42vw, 380px);
    width: clamp(300px, 42vw, 380px);
  }
}

@media (max-width: 768px) {
  .scroll-arrow {
    display: none;
  }
}

@media (max-width: 640px) {
  .horizontal-scroll,
  .gallery-scroller {
    padding-inline: 5vw;
    scroll-padding-inline: 5vw;
  }

  .model-spec-card {
    flex: 0 0 min(86vw, 420px);
    min-width: min(86vw, 420px);
  }

  .gallery-grid article {
    flex: 0 0 auto;
    width: min(86vw, 480px);
    min-width: min(86vw, 480px);
  }

  .gl-product-gallery-viewport {
    width: 100vw;
  }

  .gallery-track,
  .gl-product-gallery-track {
    gap: 14px;
  }

  .gl-product-gallery-card {
    height: clamp(288px, 27.2vw, 384px);
    flex: 0 0 min(86vw, 420px);
    width: min(86vw, 420px);
    min-width: 0;
  }

  .gl-product-gallery-body {
    padding: 16px 18px 20px;
  }
}

@media (max-width: 768px) {
  .site-header.is-over-hero {
    height: 54px;
    min-height: 54px;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .site-header.is-over-hero .theme-button {
    display: none;
  }

  .site-header.is-over-hero .brand-mark {
    width: 30px;
    height: 30px;
  }

  .site-header.is-over-hero .brand-text strong {
    font-size: 16px;
    letter-spacing: 0;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.38);
  }

  .site-header.is-over-hero .mobile-menu-toggle {
    width: 46px !important;
    min-width: 46px !important;
    height: 46px !important;
    min-height: 46px !important;
    filter: drop-shadow(0 1px 8px rgba(0, 0, 0, 0.38));
  }

  .hero-badge {
    min-height: 0;
    margin-bottom: 12px;
    padding: 0;
    border-radius: 0;
    background: transparent;
    color: var(--orange);
    font-size: 13px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hero-features,
  .hero-slide-b-series .hero-features {
    display: none;
  }

  .hero-copy,
  .hero-slide-b-series .hero-copy,
  .hero-slide-s35 .hero-copy {
    position: static;
  }

  .hero-actions,
  .hero-slide-b-series .hero-actions {
    position: absolute;
    right: auto;
    bottom: calc(52px + env(safe-area-inset-bottom, 0px));
    left: 50%;
    z-index: 8;
    width: auto;
    margin: 0;
    justify-content: center;
    text-align: center;
    transform: translateX(-50%);
  }

  .view-all-products {
    white-space: nowrap;
  }

  .hero-arrow {
    bottom: calc(18px + env(safe-area-inset-bottom, 0px));
    width: 38px;
    height: 38px;
    border-color: rgba(255, 255, 255, 0.16);
    background: rgba(0, 0, 0, 0.08);
    opacity: 0.74;
  }

  .hero-arrow-left {
    left: 18px;
  }

  .hero-arrow-right {
    right: 18px;
  }

  .hero-dots,
  .hero-pagination {
    bottom: calc(28px + env(safe-area-inset-bottom, 0px));
    gap: 9px;
  }

  .hero-index-item {
    color: rgba(245, 243, 239, 0.48);
  }

  .hero-index-item.is-active {
    color: rgba(245, 243, 239, 0.95);
  }

  .hero-index-line {
    background: rgba(245, 243, 239, 0.26);
  }

  .hero-index-item.is-active .hero-index-line {
    background: var(--orange);
  }
}

@media (max-width: 900px) {
  .family-page {
    padding-top: 78px;
  }

  .family-manifest-hero,
  .family-section,
  .family-help {
    width: min(calc(100vw - 40px), 720px);
  }

  .family-manifest-hero {
    padding: 24px 20px 30px;
  }

  .family-manifest-copy h1 {
    max-width: none;
    font-size: clamp(44px, 12vw, 68px);
    line-height: 0.95;
  }

  .family-manifest-breadcrumb {
    margin-bottom: 20px;
    font-size: 12px;
  }

  .family-manifest-copy .kicker {
    margin-bottom: 12px;
  }

  .family-manifest-copy h2 {
    margin-bottom: 12px;
    font-size: clamp(22px, 6vw, 28px);
  }

  .family-manifest-copy p:not(.kicker) {
    font-size: 16px;
    line-height: 1.45;
  }

  .family-manifest-actions,
  .family-help-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    margin-top: 24px;
  }

  .family-comparison-mobile {
    display: grid;
    gap: 14px;
  }

  .family-comparison-table-wrap {
    margin-top: 18px;
  }

  .family-compare-card {
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 16px;
    padding: 16px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--panel-solid);
  }

  .family-compare-card img {
    width: 100%;
    height: 120px;
    object-fit: contain;
  }

  .family-compare-card h3 {
    margin-bottom: 10px;
  }

  .family-compare-card dl {
    display: grid;
    gap: 8px;
    margin: 0 0 12px;
  }

  .family-compare-card dl > div {
    display: grid;
    grid-template-columns: 88px minmax(0, 1fr);
    gap: 10px;
  }

  .family-compare-card dt {
    color: var(--quiet);
    font-size: 12px;
    font-weight: 900;
  }

  .family-compare-card dd {
    min-width: 0;
    margin: 0;
    color: var(--muted);
    font-size: 13px;
  }

  .family-table-jump {
    justify-self: start;
  }

  .family-feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .family-help {
    display: block;
  }
}

@media (max-width: 560px) {
  .family-feature-grid {
    grid-template-columns: 1fr;
  }

  .family-compare-card {
    grid-template-columns: 1fr;
  }

  .family-compare-card img {
    height: 150px;
  }

  .family-comparison-table {
    min-width: 760px;
  }
}
```

### src/utils/dom.js

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

  root.querySelectorAll("[data-local-anchor]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      setMenuOpen(false);
      state.mobileProductsOpen = false;
      document.getElementById(element.dataset.localAnchor)?.scrollIntoView({ behavior: "smooth" });
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
    const track = scroller.querySelector("[data-horizontal-track], .horizontal-track");
    if (!prev || !next || !track) return;

    const scrollTolerance = 2;
    const maxScrollLeft = () => Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    const clampScrollLeft = () => {
      const max = maxScrollLeft();
      const clamped = Math.min(Math.max(scroller.scrollLeft, 0), max);
      if (scroller.scrollLeft !== clamped) {
        scroller.scrollLeft = clamped;
      }
    };
    const updateArrowState = () => {
      clampScrollLeft();
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
      const target = Math.min(Math.max(scroller.scrollLeft + direction * scrollStep(), 0), maxScrollLeft());
      scroller.scrollTo({ left: target, behavior: "smooth" });
      window.requestAnimationFrame(clampScrollLeft);
    };

    scroller.scrollLeft = 0;
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

