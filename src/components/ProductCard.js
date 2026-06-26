import { productHeadline, productIntro, productPath } from "../data/products.js";

export function ProductCard(product) {
  const image = product.cardImage || product.image;
  const imageClass = ["product-card-image", product.imageClass || product.cardImageClass].filter(Boolean).join(" ");
  const path = productPath(product);

  return `
    <article class="product-card">
      <a class="product-media" href="#${path}" data-go="${path}" aria-label="Open ${product.name}">
        <img class="${imageClass}" src="${image}" alt="${product.name}">
      </a>
      <div class="product-card-copy">
        <span>${product.models.length} models</span>
        <h2>${product.name}</h2>
        <h3>${productHeadline(product)}</h3>
        <p>${productIntro(product)}</p>
        <a class="card-cta" href="#${path}" data-go="${path}">Explore</a>
      </div>
    </article>
  `;
}
