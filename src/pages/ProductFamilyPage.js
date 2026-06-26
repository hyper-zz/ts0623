import { productFamilyById } from "../data/productFamilies.js";
import { productById, productPath } from "../data/products.js";

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
                  <a class="family-product-heading" href="#${productPath(product)}" data-go="${productPath(product)}">
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
              ${products.map((product) => `<td><a class="table-link" href="#${productPath(product)}" data-go="${productPath(product)}">View details →</a></td>`).join("")}
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
        <a class="text-button" href="#${productPath(product)}" data-go="${productPath(product)}">View details <span class="arrow-accent">→</span></a>
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
