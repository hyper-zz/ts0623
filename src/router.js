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
import { createTranslator, localeFromPath, normalizePath } from "./i18n/index.js";

function pathWithoutAnchor(path = "/") {
  return (path || "/").split("#")[0] || "/";
}

function anchorFromPath(path = "/") {
  return (path || "").split("#")[1] || "";
}

export function routeWithLocale() {
  return pathWithoutAnchor(window.location.hash.slice(1) || "/");
}

export function routeLocale() {
  return localeFromPath(routeWithLocale());
}

export function route() {
  return normalizePath(routeWithLocale());
}

export function routeAnchor() {
  return anchorFromPath(window.location.hash.slice(1) || "");
}

export function go(path) {
  const current = window.location.hash.slice(1) || "/";
  const target = path || "/";
  const isSameHash = current === target;
  const isSameLocalizedRoute =
    localeFromPath(current) === localeFromPath(target) &&
    normalizePath(pathWithoutAnchor(current)) === normalizePath(pathWithoutAnchor(target)) &&
    anchorFromPath(current) === anchorFromPath(target);

  if (isSameHash || isSameLocalizedRoute) {
    const anchor = anchorFromPath(target);
    if (anchor) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return false;
  }
  window.location.hash = target;
  return true;
}

export function renderRoute({ currentHeroSlide, locale = "en" }) {
  const current = route();
  const t = createTranslator(locale);

  if (current === "/accessories") return AccessoriesPage({ locale, t });
  if (current === "/community") return CommunityPage({ locale, t });
  if (current === "/products") return ProductsPage({ t });
  if (current === "/custom-projects") return CustomProjectsPage({ locale, t });
  if (current === "/support") return SupportPage({ locale, t });
  if (current === "/contact") return ContactPage({ locale, t });

  if (current.startsWith("/products/")) {
    const productId = current.match(/^\/products\/([^/]+)/)?.[1];
    if (productFamilyById(productId)) return ProductFamilyPage({ familyId: productId });
    return ProductDetailPage({ productId, t });
  }

  return HomePage({ currentHeroSlide, locale, t });
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
