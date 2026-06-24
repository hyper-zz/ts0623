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
