import { localizedPath } from "../i18n/index.js";

function routeAttrs(locale, target) {
  const path = localizedPath(locale, target);
  return `href="#${path}" data-go="${path}"`;
}

export function ProductFamily({ categories, locale = "en", t }) {
  return `
    <section class="product-family-section reveal" aria-label="${t("home.families.aria")}">
      <div class="product-family-intro">
        <p class="kicker">${t("home.families.kicker")}</p>
        <h2>${t("home.families.title")}</h2>
        <a class="text-button" ${routeAttrs(locale, "/products")}>${t("actions.exploreAllSeries")} <span class="arrow-accent">→</span></a>
      </div>
      <div class="product-family-strip">
        ${categories.map((category) => productFamilyCard(category, locale, t)).join("")}
      </div>
    </section>
  `;
}

function productFamilyCard(category, locale, t) {
  return `
    <a class="product-family-card" ${routeAttrs(locale, category.target)} aria-label="${t("home.families.openPrefix")} ${category.name}">
      <div class="family-image"><img src="${category.image}" onerror="this.onerror=null;this.src='${category.fallback || category.image}'" alt="${category.name}"></div>
      <div>
        <h3>${category.name}</h3>
        <p>${category.label}</p>
      </div>
      <span class="arrow-accent" aria-hidden="true">→</span>
    </a>
  `;
}
