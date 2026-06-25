import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { heroSlides } from "./data/heroSlides.js";
import { renderRoute, route, routeAnchor, routeSeo } from "./router.js";
import { applySeo, highlightPeriods, revealSections } from "./utils/dom.js";
import { createHeroScrollGate } from "./utils/heroScrollGate.js";
import { bindNavigation } from "./utils/navigation.js";

const app = document.getElementById("root");
const heroScrollGate = createHeroScrollGate();

function initialTheme() {
  try {
    return window.localStorage.getItem("travelScienceTheme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

const state = {
  menuOpen: false,
  mobileProductsOpen: false,
  productsOpen: false,
  theme: initialTheme(),
  currentHeroSlide: 0,
  headerMode: "hero",
};

let productsCloseTimer;
const mobileNavQuery = window.matchMedia("(max-width: 1023px)");
let lastRenderedRoute = route();

function scrollPageToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function forceScrollPageToTop() {
  scrollPageToTop();
  window.requestAnimationFrame(() => {
    scrollPageToTop();
    window.requestAnimationFrame(scrollPageToTop);
  });
}

function setMenuOpen(value) {
  state.menuOpen = value;
  if (!value) state.mobileProductsOpen = false;
}

function setProductsOpen(value) {
  state.productsOpen = value;
  document.querySelector(".site-header")?.classList.toggle("is-products-open", value);
  document.querySelector("[data-products-dropdown]")?.classList.toggle("is-open", value);
  document.querySelector("[data-products-trigger]")?.setAttribute("aria-expanded", String(value));
}

function openProductsMenu() {
  window.clearTimeout(productsCloseTimer);
  if (state.productsOpen) return;
  setProductsOpen(true);
}

function closeProductsMenuSoon() {
  window.clearTimeout(productsCloseTimer);
  productsCloseTimer = window.setTimeout(() => {
    if (!state.productsOpen) return;
    setProductsOpen(false);
  }, 160);
}

function toggleMenu() {
  state.menuOpen = !state.menuOpen;
  state.mobileProductsOpen = false;
}

function toggleMobileProducts() {
  state.mobileProductsOpen = !state.mobileProductsOpen;
}

function setTheme(theme) {
  state.theme = theme;
}

function setHeroSlide(index) {
  state.currentHeroSlide = index;
}

function updateHeaderMode() {
  const contentLayer = document.querySelector(".home-content-layer");
  const header = document.querySelector(".site-header");
  if (!header) return;

  if (!contentLayer) {
    state.headerMode = "content";
    header.classList.remove("is-over-hero");
    header.classList.add("is-over-content");
    return;
  }

  const isOverHero = contentLayer.getBoundingClientRect().top > 90;
  const nextMode = isOverHero ? "hero" : "content";
  if (state.headerMode === nextMode) return;

  state.headerMode = nextMode;
  header.classList.toggle("is-over-hero", nextMode === "hero");
  header.classList.toggle("is-over-content", nextMode === "content");
}

function render() {
  const currentRoute = route();
  const routeChanged = currentRoute !== lastRenderedRoute;
  lastRenderedRoute = currentRoute;

  document.documentElement.dataset.theme = state.theme;
  app.innerHTML = `
    ${Header({ theme: state.theme, menuOpen: state.menuOpen, mobileProductsOpen: state.mobileProductsOpen, productsOpen: state.productsOpen, headerMode: state.headerMode })}
    ${renderRoute({ currentHeroSlide: state.currentHeroSlide })}
    ${Footer()}
  `;

  applySeo(routeSeo());
  const mainContent = app.querySelector("main");
  if (mainContent) {
    highlightPeriods(mainContent);
  }

  bindNavigation({
    root: app,
    state,
    heroSlideCount: heroSlides.length,
    render,
    setHeroSlide,
    setMenuOpen,
    setProductsOpen,
    setTheme,
    openProductsMenu,
    closeProductsMenuSoon,
    toggleMenu,
    toggleMobileProducts,
  });

  revealSections(app);
  updateHeaderMode();
  heroScrollGate.setup();
  heroScrollGate.requestUpdate();

  const anchor = routeAnchor();
  if (anchor) {
    window.requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    });
  } else if (routeChanged) {
    forceScrollPageToTop();
  }
}

function handleMobileBreakpointChange(event) {
  const shouldRender =
    state.menuOpen ||
    state.mobileProductsOpen ||
    state.productsOpen;

  state.menuOpen = false;
  state.mobileProductsOpen = false;
  setProductsOpen(false);

  if (shouldRender || event.matches) render();
}

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.addEventListener("scroll", updateHeaderMode, { passive: true });
window.addEventListener("wheel", heroScrollGate.handleWheel, { passive: false });
window.addEventListener("resize", () => {
  heroScrollGate.refresh();
  heroScrollGate.requestUpdate();
});
mobileNavQuery.addEventListener("change", handleMobileBreakpointChange);
handleMobileBreakpointChange(mobileNavQuery);
window.addEventListener("hashchange", render);
render();
