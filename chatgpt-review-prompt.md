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

```css
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
```

Please focus on practical improvements rather than a full rewrite. If you suggest changes, give concrete CSS/JS snippets and explain what tradeoff each change makes.
