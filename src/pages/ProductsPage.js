import { ContactSection } from "../components/ContactSection.js";
import { productPath, products } from "../data/products.js";

const productCollectionOrder = ["gl", "m", "ex", "exm", "b", "s", "tf", "k", "d"];
const productCollectionRank = new Map(productCollectionOrder.map((id, index) => [id, index]));
const productCollectionCopy = {
  gl: {
    modelCount: "4 MODELS",
    capacity: "35L / 45L / 55L / 75L",
    headline: "The core dual-zone platform.",
    description: "Rugged, highly customizable and built around separated storage for demanding programs.",
  },
  m: {
    modelCount: "3 MODELS",
    capacity: "35L / 45L / 55L",
    headline: "The full-feature mobile platform.",
    description: "A GL / M dual-zone platform with pull-cart mobility for higher-spec outdoor programs.",
  },
  ex: {
    modelCount: "3 MODELS",
    capacity: "30L / 40L / 50L",
    headline: "Single-zone space for flexible loading.",
    description: "A fixed-format EX / EXM platform with open storage for range planning.",
  },
  exm: {
    modelCount: "3 MODELS",
    capacity: "30L / 40L / 50L",
    headline: "Single-zone storage with suitcase-style mobility.",
    description: "A wheeled EX / EXM option for open storage, larger loads and retail programs.",
  },
  b: {
    modelCount: "2 MODELS",
    capacity: "20L / 25L",
    headline: "A modern classic for city life and weekend travel.",
    description: "Compact, well-balanced and easy to live with for daily drives and short escapes.",
  },
  s: {
    modelCount: "2 MODELS",
    capacity: "18L / 35L",
    headline: "A second fridge powered by tool batteries.",
    description: "Made for garages, jobsites, weekend setups and everyday spaces.",
  },
  tf: {
    modelCount: "3 MODELS",
    capacity: "35L / 45L / 55L",
    headline: "A familiar dual-zone format for everyday markets.",
    description: "Separated storage in a practical, easy-to-understand car-fridge structure.",
  },
  k: {
    modelCount: "2 MODELS",
    capacity: "15L / 20L",
    headline: "Simple, practical and ready for the market.",
    description: "An accessible model for everyday users who value portability and sensible pricing.",
  },
  d: {
    modelCount: "1 MODEL",
    capacity: "9L",
    headline: "Your first portable fridge.",
    description: "A personal 9L model for small spaces, daily items and easy carry.",
  },
};

function ProductCollectionCard(product) {
  const copy = productCollectionCopy[product.id];
  const image = product.cardImage || product.image;
  const imageClass = ["product-card-image", product.imageClass || product.cardImageClass].filter(Boolean).join(" ");
  const path = productPath(product);

  return `
    <article class="product-card">
      <a class="product-media" href="#${path}" data-go="${path}" aria-label="Open ${product.name}">
        <img class="${imageClass}" src="${image}" alt="${product.name}">
      </a>
      <div class="product-card-copy">
        <span>${copy.modelCount}</span>
        <span>${copy.capacity}</span>
        <h2>${product.name}</h2>
        <h3>${copy.headline}</h3>
        <p>${copy.description}</p>
        <a class="card-cta" href="#${path}" data-go="${path}">Explore</a>
      </div>
    </article>
  `;
}

export function ProductsPage({ t }) {
  const publicProducts = products
    .filter((product) => !product.hidden && productCollectionRank.has(product.id))
    .sort((a, b) => productCollectionRank.get(a.id) - productCollectionRank.get(b.id));

  return `
    <main class="page">
      <section class="page-hero reveal">
        <p class="kicker">Products</p>
      </section>
      <section class="product-grid reveal">
        ${publicProducts.map(ProductCollectionCard).join("")}
      </section>
      ${ContactSection({ t })}
    </main>
  `;
}
