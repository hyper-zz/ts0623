import { ProductDetailTemplate } from "../components/ProductDetailTemplate.js";
import { productById } from "../data/products.js";

export function ProductDetailPage({ productId, t }) {
  const product = productById(productId);
  if (!product) return notFound();

  const related = [
    { product: productById("s"), description: "Tool battery powered." },
    { product: productById("gl"), description: "Dual-zone storage." },
    { product: productById("exm"), description: "Wheeled mobility." },
  ].filter((item) => item.product);
  return ProductDetailTemplate({ product, related, t });
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
