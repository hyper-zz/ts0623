import { productPath, products } from "../data/products.js";
import { productFamilies } from "../data/productFamilies.js";
import { alternateLocalePath, localizedPath, translate } from "../i18n/index.js";

const productById = new Map(products.map((product) => [product.id, product]));
const familyById = new Map(productFamilies.map((family) => [family.id, family]));

const productMenuGroups = [
  {
    titleKey: "footer.compactCooling",
    familyId: "compact-cooling",
    descriptionKey: "nav.groupDescriptions.compactCooling",
    items: [
      { id: "d", name: "D Series", detail: "9L" },
      { id: "k", name: "K Series", detail: "15L&ndash;20L" },
      { id: "s", name: "S Series", detail: "18L / tool-battery option" },
      { id: "b", name: "B Series", detail: "20L&ndash;25L" },
    ],
  },
  {
    titleKey: "footer.largeCapacity",
    familyId: "large-capacity",
    descriptionKey: "nav.groupDescriptions.largeCapacity",
    items: [
      { id: "ex", name: "EX Series", detail: "30L&ndash;50L" },
      { id: "gl", name: "GL Series", detail: "35L&ndash;75L" },
    ],
  },
  {
    titleKey: "footer.dualZoneStorage",
    familyId: "dual-zone-storage",
    descriptionKey: "nav.groupDescriptions.dualZoneStorage",
    items: [
      { id: "gl", name: "GL Series", detail: "35L&ndash;75L" },
      { id: "tf", name: "TF Series", detail: "35L&ndash;55L" },
    ],
  },
  {
    titleKey: "footer.wheeledMobility",
    familyId: "wheeled-mobility",
    descriptionKey: "nav.groupDescriptions.wheeledMobility",
    items: [
      { id: "exm", name: "EXM Series", detail: "30L&ndash;50L" },
      { id: "m", name: "M Series", detail: "35L&ndash;55L &middot; Dual-zone" },
    ],
  },
];

const mobileProductMenuItems = [
  { id: "gl", name: "GL Series", tagKey: "nav.tags.dualZone", capacity: "35L&ndash;75L" },
  { id: "m", name: "M Series", tagKey: "nav.tags.dualZone", capacity: "35L&ndash;55L" },
  { id: "ex", name: "EX Series", tag: "", capacity: "30L&ndash;50L" },
  { id: "exm", name: "EXM Series", tag: "", capacity: "30L&ndash;50L" },
  { id: "b", name: "B Series", tag: "", capacity: "20L&ndash;25L" },
  { id: "s", name: "S Series", tag: "", capacity: "18L / 35L" },
  { id: "tf", name: "TF Series", tagKey: "nav.tags.dualZone", capacity: "35L&ndash;55L" },
  { id: "k", name: "K Series", tag: "", capacity: "15L&ndash;20L" },
  { id: "d", name: "D Series", tag: "", capacity: "9L" },
];

const supportMenuItems = [
  { labelKey: "nav.supportCenter", target: "/support" },
  { labelKey: "nav.manualsDownloads", target: "/support#downloads" },
  { labelKey: "nav.warranty", target: "/support#warranty" },
  { labelKey: "nav.sparePartsProgram", target: "/support#spare-parts" },
];

function navAttrs(locale, path) {
  const target = localizedPath(locale, path);
  return `href="#${target}" data-go="${target}"`;
}

function productMenuItem(item, locale) {
  if (!productById.has(item.id)) return "";
  const path = productPath(item.id);

  return `
    <a class="products-menu-item" ${navAttrs(locale, path)}>
      <span class="products-menu-name">${item.name}</span>
      <span class="products-menu-detail">${item.detail}</span>
      <span class="products-menu-arrow" aria-hidden="true">&rarr;</span>
    </a>
  `;
}

function productMenuGroupHeading(group, locale) {
  const family = familyById.get(group.familyId);
  const title = translate(locale, group.titleKey);
  if (!family) return `<h3>${title}</h3>`;
  return `<h3><a ${navAttrs(locale, family.target)}>${title}</a></h3>`;
}

function mobileProductMenuItem(item, locale) {
  if (!productById.has(item.id)) return "";
  const path = productPath(item.id);

  return `
    <a class="mobile-product-row" ${navAttrs(locale, path)}>
      <span class="mobile-product-name">${item.name}</span>
      <span class="mobile-product-tag">${item.tagKey ? translate(locale, item.tagKey) : item.tag}</span>
      <span class="mobile-product-capacity">${item.capacity}</span>
    </a>
  `;
}

function supportMenuItem(item, locale) {
  return `<a class="support-menu-item" ${navAttrs(locale, item.target)}>${translate(locale, item.labelKey)}<span aria-hidden="true">&rarr;</span></a>`;
}

function languageSwitch(locale) {
  const currentPath = typeof window === "undefined" ? "/" : window.location.hash.slice(1) || "/";
  const enPath = alternateLocalePath(currentPath, "en");
  const zhPath = alternateLocalePath(currentPath, "zh");

  return `
    <div class="language-switch" aria-label="${translate(locale, "language.label")}">
      <a class="${locale === "en" ? "is-active" : ""}" href="#${enPath}" data-go="${enPath}" hreflang="en">EN</a>
      <span aria-hidden="true">/</span>
      <a class="${locale === "zh" ? "is-active" : ""}" href="#${zhPath}" data-go="${zhPath}" hreflang="zh-CN">中文</a>
    </div>
  `;
}

export function Header({ theme, locale = "en", menuOpen, mobileProductsOpen = false, productsOpen = false, headerMode = "hero" }) {
  return `
    <header class="site-header ${headerMode === "hero" ? "is-over-hero" : "is-over-content"} ${menuOpen ? "is-menu-open" : ""} ${productsOpen ? "is-products-open" : ""}">
      <div class="site-header__shell">
        <a class="header-brand brand" ${navAttrs(locale, "/")} aria-label="${translate(locale, "nav.homeAria")}">
          <span class="brand-mark"><img src="/assets/brand/k-icon.svg" alt=""></span>
          <span class="brand-text">
            <strong>TRAVEL <span>S</span>CIENCE</strong>
            <small>Outdoor Technology <em>by Kelvcoop</em></small>
          </span>
        </a>
        <nav class="header-nav nav mobile-nav-panel ${menuOpen ? "is-open" : ""}" aria-label="${translate(locale, "nav.primaryNavigation")}">
          <div class="mobile-nav-scroll">
            <div class="nav-product nav-item nav-item-products" data-products-menu-zone>
              <a class="nav-link nav-product-trigger desktop-products-link" ${navAttrs(locale, "/products")} data-products-trigger aria-haspopup="true" aria-expanded="${productsOpen ? "true" : "false"}">${translate(locale, "nav.products")}</a>
              <button class="nav-link mobile-products-toggle" type="button" data-mobile-products-toggle aria-expanded="${mobileProductsOpen ? "true" : "false"}">${translate(locale, "nav.products")}</button>
              <div class="products-hover-bridge" data-products-bridge aria-hidden="true"></div>
              <div class="product-dropdown products-dropdown ${productsOpen ? "is-open" : ""}" data-products-dropdown aria-label="${translate(locale, "nav.productSeries")}">
                <div class="product-dropdown-inner products-dropdown-inner">
                  <div class="products-menu">
                    <div class="products-menu-heading">
                      <strong>${translate(locale, "nav.products")}</strong>
                      <span>${translate(locale, "nav.productsIntro")}</span>
                    </div>
                    <div class="products-menu-grid">
                      ${productMenuGroups.map((group) => `
                        <section class="products-menu-group">
                          ${productMenuGroupHeading(group, locale)}
                          <p>${translate(locale, group.descriptionKey)}</p>
                          <div class="products-menu-items">
                            ${group.items.map((item) => productMenuItem(item, locale)).join("")}
                          </div>
                        </section>
                      `).join("")}
                    </div>
                  </div>
                </div>
              </div>
              <div class="mobile-products-panel ${mobileProductsOpen ? "is-open" : ""}" aria-label="${translate(locale, "nav.mobileProductSeries")}">
                <a class="mobile-products-view-all" ${navAttrs(locale, "/products")}>${translate(locale, "nav.viewAllProducts")} <span aria-hidden="true">&rarr;</span></a>
                <div class="mobile-products-list">
                  ${mobileProductMenuItems.map((item) => mobileProductMenuItem(item, locale)).join("")}
                </div>
              </div>
            </div>
            <a ${navAttrs(locale, "/custom-projects")}>${translate(locale, "nav.customProjects")}</a>
            <div class="nav-support nav-item">
              <a class="nav-link nav-support-trigger" ${navAttrs(locale, "/support")} aria-haspopup="true">${translate(locale, "nav.support")}</a>
              <div class="support-dropdown" aria-label="${translate(locale, "nav.supportMenu")}">
                ${supportMenuItems.map((item) => supportMenuItem(item, locale)).join("")}
              </div>
              <div class="mobile-support-panel" aria-label="${translate(locale, "nav.mobileSupportLinks")}">
                ${supportMenuItems.map((item) => supportMenuItem(item, locale)).join("")}
              </div>
            </div>
            <div class="mobile-language-switch">
              ${languageSwitch(locale)}
            </div>
          </div>
        </nav>
        <div class="header-actions nav-actions">
          ${languageSwitch(locale)}
          <button class="theme-button" data-theme-toggle aria-label="${translate(locale, "theme.toggle")}" aria-pressed="${theme === "dark"}">${theme === "light" ? translate(locale, "theme.dark") : translate(locale, "theme.light")}</button>
          <a class="nav-cta" ${navAttrs(locale, "/contact")}>${translate(locale, "nav.contact")}</a>
          <button class="menu-button mobile-menu-toggle ${menuOpen ? "is-open" : ""}" type="button" data-menu-toggle aria-label="${menuOpen ? translate(locale, "nav.closeMenu") : translate(locale, "nav.openMenu")}" aria-expanded="${menuOpen ? "true" : "false"}"><span></span><span></span></button>
        </div>
      </div>
    </header>
  `;
}
