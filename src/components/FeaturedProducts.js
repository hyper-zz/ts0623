import { productHeadline, productIntro } from "../data/products.js";

export function FeaturedProducts({ products }) {
  return `
    <section class="featured reveal">
      ${products.map(featuredProduct).join("")}
    </section>
  `;
}

function featuredProduct(product, index) {
  return `
    <article class="feature-product ${index % 2 ? "is-reversed" : ""}">
      <div class="feature-visual">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="feature-copy">
        <p class="kicker">Featured system</p>
        <h2>${product.name}</h2>
        <h3>${productHeadline(product)}</h3>
        <p>${productIntro(product)}</p>
        <a class="card-cta" href="#/products/${product.id}" data-go="/products/${product.id}">View Product</a>
      </div>
    </article>
  `;
}
