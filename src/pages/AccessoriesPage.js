import { localizedPath } from "../i18n/index.js";

function routeAttrs(locale, target) {
  const path = localizedPath(locale, target);
  return `href="#${path}" data-go="${path}"`;
}

function horizontalControls(t) {
  return `
    <div class="horizontal-control-row">
      <button class="scroll-arrow scroll-arrow--prev" type="button" data-horizontal-prev aria-label="${t("accessories.gallery.previous")}"><span class="scroll-arrow-icon" aria-hidden="true">&larr;</span></button>
      <button class="scroll-arrow scroll-arrow--next" type="button" data-horizontal-next aria-label="${t("accessories.gallery.next")}"><span class="scroll-arrow-icon" aria-hidden="true">&rarr;</span></button>
    </div>
  `;
}

export function AccessoriesPage({ locale = "en", t }) {
  return `
    <main class="page accessories-page">
      <section class="page-hero reveal">
        <p class="kicker">${t("accessories.hero.kicker")}</p>
        <h1>${t("accessories.hero.title")}</h1>
        <p>${t("accessories.hero.copy")}</p>
      </section>

      <section class="gl-product-gallery-section accessory-gallery reveal">
        <div class="gl-product-gallery-viewport">
          ${horizontalControls(t)}
          <div class="gallery-scroller" data-horizontal-scroll>
            <div class="gallery-track gl-product-gallery-track" data-horizontal-track>
              ${t("accessories.gallery.items").map((item) => `
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
          <p class="kicker">${t("accessories.categories.kicker")}</p>
          <h2>${t("accessories.categories.title")}</h2>
        </div>
        <div class="accessory-grid">
          ${t("accessories.categories.items").map(([name, description]) => `
            <article>
              <h3>${name}</h3>
              <p>${description}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="certifications reveal">
        <div>
          <p class="kicker">${t("accessories.suitableFor.kicker")}</p>
          <h2>${t("accessories.suitableFor.title")}</h2>
        </div>
        <div>
          ${t("accessories.suitableFor.items").map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="product-inquiry reveal">
        <p class="kicker">${t("accessories.cta.kicker")}</p>
        <h2>${t("accessories.cta.title")}</h2>
        <p>${t("accessories.cta.copy")}</p>
        <a class="hero-cta" ${routeAttrs(locale, "/contact")}>${t("actions.contactUs")}</a>
      </section>
    </main>
  `;
}
