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

const supportMenuItems = [
  { label: "Support Center", href: "#/support", target: "/support" },
  { label: "Manuals & Downloads", href: "#/support#downloads", target: "/support#downloads" },
  { label: "Warranty", href: "#/support#warranty", target: "/support#warranty" },
  { label: "Spare Parts Program", href: "#/support#spare-parts", target: "/support#spare-parts" },
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

function supportMenuItem(item) {
  return `<a class="support-menu-item" href="${item.href}" data-go="${item.target}">${item.label}<span aria-hidden="true">&rarr;</span></a>`;
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
          <div class="nav-support nav-item">
            <a class="nav-link nav-support-trigger" href="#/support" data-go="/support" aria-haspopup="true">Support</a>
            <div class="support-dropdown" aria-label="Support menu">
              ${supportMenuItems.map(supportMenuItem).join("")}
            </div>
            <div class="mobile-support-panel" aria-label="Mobile support links">
              ${supportMenuItems.map(supportMenuItem).join("")}
            </div>
          </div>
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
