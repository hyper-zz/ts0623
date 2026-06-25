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
