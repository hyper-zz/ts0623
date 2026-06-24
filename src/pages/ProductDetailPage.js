import { ProductDetailTemplate } from "../components/ProductDetailTemplate.js";
import { productById, products } from "../data/products.js";

export function ProductDetailPage({ productId }) {
  const product = productById(productId);
  if (!product) return notFound();

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);
  return ProductDetailTemplate({ product, related });
}

function notFound() {
  return `
    <main class="page">
      <section class="page-hero">
        <p class="kicker">404</p>
        <h1>Product not found.</h1>
        <a class="hero-cta" href="#/products" data-go="/products">Explore Products</a>
      </section>
    </main>
  `;
}
