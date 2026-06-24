import { productHeadline, productIntro } from "../data/products.js";

export function ProductCard(product) {
  const image = product.cardImage || product.image;
  const imageClass = ["product-card-image", product.imageClass || product.cardImageClass].filter(Boolean).join(" ");

  return `
    <article class="product-card">
      <a class="product-media" href="#/products/${product.id}" data-go="/products/${product.id}" aria-label="Open ${product.name}">
        <img class="${imageClass}" src="${image}" alt="${product.name}">
      </a>
      <div class="product-card-copy">
        <span>${product.models.length} models</span>
        <h2>${product.name}</h2>
        <h3>${productHeadline(product)}</h3>
        <p>${productIntro(product)}</p>
        <a class="card-cta" href="#/products/${product.id}" data-go="/products/${product.id}">Explore</a>
      </div>
    </article>
  `;
}
