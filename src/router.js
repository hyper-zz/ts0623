import { AccessoriesPage } from "./pages/AccessoriesPage.js";
import { CommunityPage } from "./pages/CommunityPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { CustomProjectsPage } from "./pages/CustomProjectsPage.js";
import { HomePage } from "./pages/HomePage.js";
import { ProductDetailPage } from "./pages/ProductDetailPage.js";
import { ProductFamilyPage } from "./pages/ProductFamilyPage.js";
import { ProductsPage } from "./pages/ProductsPage.js";
import { SupportPage } from "./pages/SupportPage.js";
import { seo } from "./data/seo.js";
import { productFamilyById } from "./data/productFamilies.js";
import { productById } from "./data/products.js";

export function route() {
  return (window.location.hash.slice(1) || "/").split("#")[0] || "/";
}

export function routeAnchor() {
  const [, anchor] = (window.location.hash.slice(1) || "").split("#");
  return anchor || "";
}

export function go(path) {
  if (route() === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }
  window.location.hash = path;
  return true;
}

export function renderRoute({ currentHeroSlide }) {
  const current = route();
  if (current === "/accessories") return AccessoriesPage();
  if (current === "/community") return CommunityPage();
  if (current === "/products") return ProductsPage();
  if (current === "/custom-projects") return CustomProjectsPage();
  if (current === "/support") return SupportPage();
  if (current === "/contact") return ContactPage();

  if (current.startsWith("/products/")) {
    const productId = current.match(/^\/products\/([^/]+)/)?.[1];
    if (productFamilyById(productId)) return ProductFamilyPage({ familyId: productId });
    return ProductDetailPage({ productId });
  }

  return HomePage({ currentHeroSlide });
}

export function routeSeo() {
  const current = route();

  if (current.startsWith("/products/")) {
    const productId = current.match(/^\/products\/([^/]+)/)?.[1];
    const family = productFamilyById(productId);
    if (family) {
      return {
        title: `${family.title} | Travel Science`,
        description: family.description || seo.description,
      };
    }
    const product = productById(productId);
    if (product?.seo) {
      return {
        title: product.seo.title || seo.title,
        description: product.seo.description || seo.description,
      };
    }
  }

  return seo;
}
