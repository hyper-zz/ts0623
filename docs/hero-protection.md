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
