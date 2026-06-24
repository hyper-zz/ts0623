import { ContactSection } from "../components/ContactSection.js";
import { ProductCard } from "../components/ProductCard.js";
import { products } from "../data/products.js";

export function ProductsPage() {
  return `
    <main class="page">
      <section class="page-hero reveal">
        <p class="kicker">Products</p>
      </section>
      <section class="product-grid reveal">
        ${products.map(ProductCard).join("")}
      </section>
      ${ContactSection()}
    </main>
  `;
}
