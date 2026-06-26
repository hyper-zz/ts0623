import { localizedPath } from "../i18n/index.js";

function routeAttrs(locale, target) {
  const path = localizedPath(locale, target);
  return `href="#${path}" data-go="${path}"`;
}

export function CustomProjectsPage({ locale = "en", t }) {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">${t("customProjects.hero.kicker")}</p>
        <h1>${t("customProjects.hero.title")}</h1>
        <p>${t("customProjects.hero.copy")}</p>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">${t("customProjects.options.kicker")}</p>
          <h2>${t("customProjects.options.title")}</h2>
        </div>
        <div class="feature-detail-grid">
          ${t("customProjects.options.items").map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">${t("customProjects.process.kicker")}</p>
          <h2>${t("customProjects.process.title")}</h2>
        </div>
        <div class="process-grid">
          ${t("customProjects.process.steps").map(([title, text], index) => `
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
          <p class="kicker">${t("customProjects.suitableFor.kicker")}</p>
          <h2>${t("customProjects.suitableFor.title")}</h2>
        </div>
        <div>
          ${t("customProjects.suitableFor.items").map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="product-inquiry">
        <p class="kicker">${t("customProjects.cta.kicker")}</p>
        <h2>${t("customProjects.cta.title")}</h2>
        <p>${t("customProjects.cta.copy")}</p>
        <a class="hero-cta" ${routeAttrs(locale, "/contact")}>${t("actions.startCustomProject")}</a>
      </section>
    </main>
  `;
}
