import { go, route } from "../router.js";

export function bindNavigation({
  root,
  state,
  heroSlideCount,
  render,
  setHeroSlide,
  setMenuOpen,
  setProductsOpen,
  setTheme,
  openProductsMenu,
  closeProductsMenuSoon,
  toggleMenu,
  toggleMobileProducts,
}) {
  root.addEventListener("click", (event) => {
    const element = event.target.closest("[data-go]");
    if (!element || !root.contains(element)) return;
    if (element.classList.contains("hero-image-link") && Date.now() < (state.heroImageLinkSuppressUntil || 0)) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    setMenuOpen(false);
    state.mobileProductsOpen = false;
    setProductsOpen(false);
    const routeChanged = go(element.dataset.go);
    if (!routeChanged) render();
  });

  root.querySelectorAll("[data-anchor]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      setMenuOpen(false);
      if (route() !== "/") {
        window.location.hash = "/";
        window.setTimeout(() => document.getElementById(element.dataset.anchor)?.scrollIntoView({ behavior: "smooth" }), 80);
      } else {
        document.getElementById(element.dataset.anchor)?.scrollIntoView({ behavior: "smooth" });
      }
      render();
    });
  });

  root.querySelectorAll("[data-local-anchor]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      setMenuOpen(false);
      state.mobileProductsOpen = false;
      document.getElementById(element.dataset.localAnchor)?.scrollIntoView({ behavior: "smooth" });
      render();
    });
  });

  root.querySelector("[data-menu-toggle]")?.addEventListener("click", () => {
    if (state.mobileToggleLocked) return;

    state.mobileToggleLocked = true;
    window.clearTimeout(state.mobileToggleTimer);
    state.mobileToggleTimer = window.setTimeout(() => {
      state.mobileToggleLocked = false;
    }, 280);

    toggleMenu();
    render();
  });

  root.querySelector("[data-mobile-products-toggle]")?.addEventListener("click", () => {
    toggleMobileProducts();
    render();
  });

  root.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const nextTheme = state.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem("travelScienceTheme", nextTheme);
    render();
  });

  const desktopProductsQuery = window.matchMedia("(min-width: 1024px)");
  const openDesktopProducts = () => {
    if (!desktopProductsQuery.matches) return;
    openProductsMenu();
  };
  const closeDesktopProductsSoon = () => {
    if (!desktopProductsQuery.matches) return;
    closeProductsMenuSoon();
  };

  root
    .querySelectorAll("[data-products-trigger], [data-products-bridge], [data-products-dropdown]")
    .forEach((element) => {
      element.addEventListener("mouseenter", openDesktopProducts);
      element.addEventListener("mouseleave", closeDesktopProductsSoon);
      element.addEventListener("focusin", openDesktopProducts);
      element.addEventListener("focusout", closeDesktopProductsSoon);
    });

  const getProductImages = (hero) => {
    if (!hero?.dataset.productImages) return null;
    try {
      return JSON.parse(hero.dataset.productImages);
    } catch {
      // Product image maps are optional; keep the current image if parsing fails.
      return null;
    }
  };

  const setProductImages = (hero, images) => {
    if (!hero || !images) return;
    hero.dataset.productImages = JSON.stringify(images);
  };

  const updateProductColorAvailability = (hero) => {
    const images = getProductImages(hero);
    if (!hero || !images) return;
    const availableColors = images?.[hero.dataset.selectedModel] || {};
    let activeColorIsAvailable = Boolean(availableColors[hero.dataset.selectedColor]);

    hero.querySelectorAll("[data-product-color]").forEach((item) => {
      const isAvailable = Boolean(availableColors[item.dataset.productColorValue]);
      item.classList.toggle("is-unavailable", !isAvailable);
      item.setAttribute("aria-disabled", String(!isAvailable));
      item.disabled = !isAvailable;
      if (!isAvailable && item.classList.contains("is-active")) {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      }
    });

    if (!activeColorIsAvailable) {
      const firstAvailable = hero.querySelector("[data-product-color]:not(.is-unavailable)");
      if (firstAvailable?.dataset.productColorValue) {
        hero.dataset.selectedColor = firstAvailable.dataset.productColorValue;
        firstAvailable.classList.add("is-active");
        firstAvailable.setAttribute("aria-pressed", "true");
        activeColorIsAvailable = true;
      }
    }
  };

  const updateProductHeroImage = (hero) => {
    const image = hero?.querySelector("[data-product-hero-image]");
    const images = getProductImages(hero);
    if (!hero || !image || !images) return;

    const nextImage = images?.[hero.dataset.selectedModel]?.[hero.dataset.selectedColor];
    image.src = nextImage || hero.dataset.fallbackImage || image.src;
  };

  const markSelectedProductImageUnavailable = (hero) => {
    const images = getProductImages(hero);
    if (!hero || !images) return;

    const selectedModelImages = images?.[hero.dataset.selectedModel];
    if (selectedModelImages?.[hero.dataset.selectedColor]) {
      delete selectedModelImages[hero.dataset.selectedColor];
      setProductImages(hero, images);
    }

    updateProductColorAvailability(hero);
    updateProductHeroImage(hero);
  };

  const validateProductImageAvailability = async (hero) => {
    const images = getProductImages(hero);
    if (!hero || !images || typeof fetch !== "function") return;

    const assetExists = async (src) => {
      const headResponse = await fetch(src, { method: "HEAD" });
      if (headResponse.ok) return true;

      if (headResponse.status === 405 || headResponse.status === 501) {
        const getResponse = await fetch(src, { method: "GET", cache: "no-store" });
        return getResponse.ok;
      }

      return false;
    };

    const checks = Object.entries(images).flatMap(([model, colors]) => (
      Object.entries(colors || {}).map(async ([color, src]) => {
        if (!src) return false;

        try {
          if (await assetExists(src)) return false;
        } catch {
          // Treat failed validation as unavailable so the selector cannot point
          // at a missing asset.
        }

        if (images?.[model]?.[color] === src) {
          delete images[model][color];
          return true;
        }

        return false;
      })
    ));

    if (!checks.length) return;

    const results = await Promise.all(checks);
    if (results.some(Boolean)) {
      setProductImages(hero, images);
      updateProductColorAvailability(hero);
      updateProductHeroImage(hero);
    }
  };

  root.querySelectorAll("[data-product-model]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".model-tabs");
      const hero = button.closest("[data-product-hero]");
      if (!hero || !button.dataset.productModelValue) return;

      hero.dataset.selectedModel = button.dataset.productModelValue;

      group?.querySelectorAll("[data-product-model]").forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      updateProductColorAvailability(hero);
      updateProductHeroImage(hero);
    });
  });

  root.querySelectorAll("[data-product-color]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".product-color-options");
      const hero = button.closest("[data-product-hero]");
      if (!hero || !button.dataset.productColorValue) return;
      if (button.disabled || button.classList.contains("is-unavailable")) return;
      const image = hero?.querySelector("[data-product-hero-image]");

      hero.dataset.selectedColor = button.dataset.productColorValue;

      group?.querySelectorAll("[data-product-color]").forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      if (!hero.dataset.productImages && image && button.dataset.productImage) {
        image.src = button.dataset.productImage;
      } else {
        updateProductHeroImage(hero);
      }
    });
  });

  root.querySelectorAll("[data-product-hero]").forEach((hero) => {
    updateProductColorAvailability(hero);
    validateProductImageAvailability(hero);
  });
  root.querySelectorAll("[data-product-hero-image]").forEach((image) => {
    image.addEventListener("error", () => {
      const hero = image.closest("[data-product-hero]");
      if (!hero) return;
      markSelectedProductImageUnavailable(hero);
    });
  });

  root.querySelectorAll("[data-product-materials]").forEach((section) => {
    const previewImage = section.querySelector("[data-material-preview-image]");
    const previewLabel = section.querySelector("[data-material-preview-label]");
    const previewPart = section.querySelector("[data-material-preview-part]");
    const preview = section.querySelector(".product-material-preview");
    const desktopShell = section.querySelector(".product-materials-desktop");
    const materialItems = section.querySelectorAll("[data-material-item]");

    const activateMaterial = (item) => {
      preview?.removeAttribute("hidden");
      desktopShell?.classList.add("has-material-preview");

      materialItems.forEach((current) => {
        const isActive = current === item;
        current.classList.toggle("is-active", isActive);
        current.setAttribute("aria-pressed", String(isActive));
      });

      if (previewImage) {
        const hasImage = Boolean(item.dataset.materialImage);
        previewImage.hidden = !hasImage;
        if (hasImage) {
          previewImage.src = item.dataset.materialImage;
          previewImage.alt = item.dataset.materialLabel || "";
        }
      }
      if (previewLabel) previewLabel.textContent = item.dataset.materialLabel || "";
      if (previewPart) previewPart.textContent = item.dataset.materialPart || "";
    };

    materialItems.forEach((item) => {
      item.addEventListener("mouseenter", () => activateMaterial(item));
      item.addEventListener("focus", () => activateMaterial(item));
    });
  });

  if (state.horizontalScrollResizeHandler) {
    window.removeEventListener("resize", state.horizontalScrollResizeHandler);
  }

  const horizontalSetups = [];
  root.querySelectorAll("[data-horizontal-scroll]").forEach((scroller) => {
    const section = scroller.closest("section");
    const prev = section?.querySelector("[data-horizontal-prev]");
    const next = section?.querySelector("[data-horizontal-next]");
    const track = scroller.querySelector("[data-horizontal-track], .horizontal-track");
    if (!prev || !next || !track) return;

    const scrollTolerance = 2;
    const maxScrollLeft = () => Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    const clampScrollLeft = () => {
      const max = maxScrollLeft();
      const clamped = Math.min(Math.max(scroller.scrollLeft, 0), max);
      if (scroller.scrollLeft !== clamped) {
        scroller.scrollLeft = clamped;
      }
    };
    const updateArrowState = () => {
      clampScrollLeft();
      const max = maxScrollLeft();
      prev.disabled = scroller.scrollLeft <= scrollTolerance;
      next.disabled = scroller.scrollLeft >= max - scrollTolerance;
    };
    const scrollStep = () => {
      const firstCard = track.children[0];
      const cardWidth = firstCard?.getBoundingClientRect().width || scroller.clientWidth * 0.8;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      return cardWidth + gap;
    };
    const scrollByStep = (direction) => {
      const target = Math.min(Math.max(scroller.scrollLeft + direction * scrollStep(), 0), maxScrollLeft());
      scroller.scrollTo({ left: target, behavior: "smooth" });
      window.requestAnimationFrame(clampScrollLeft);
    };

    scroller.scrollLeft = 0;
    prev.addEventListener("click", () => scrollByStep(-1));
    next.addEventListener("click", () => scrollByStep(1));
    scroller.addEventListener("scroll", updateArrowState, { passive: true });

    updateArrowState();
    horizontalSetups.push(updateArrowState);
  });

  state.horizontalScrollResizeHandler = () => horizontalSetups.forEach((update) => update());
  window.addEventListener("resize", state.horizontalScrollResizeHandler, { passive: true });

  const lockHeroSlideControl = () => {
    state.heroSlideControlLocked = true;
    window.clearTimeout(state.heroSlideControlTimer);
    state.heroSlideControlTimer = window.setTimeout(() => {
      state.heroSlideControlLocked = false;
    }, 420);
  };

  const changeHeroSlideFromControl = (index) => {
    if (heroSlideCount < 2 || state.heroSlideControlLocked) return;
    setHeroSlide(index);
    lockHeroSlideControl();
    render();
  };

  root.querySelectorAll("[data-hero-swipe]").forEach((element) => {
    let startX = 0;
    let startY = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let tracking = false;
    let swiping = false;

    const lockSlideGesture = () => {
      state.heroSlideGestureLocked = true;
      window.clearTimeout(state.heroSlideGestureTimer);
      state.heroSlideGestureTimer = window.setTimeout(() => {
        state.heroSlideGestureLocked = false;
      }, 650);
    };

    const changeHeroSlide = (direction) => {
      if (heroSlideCount < 2) return;
      if (state.heroSlideGestureLocked) return;
      setHeroSlide((state.currentHeroSlide + direction + heroSlideCount) % heroSlideCount);
      lockSlideGesture();
      render();
    };

    element.addEventListener("pointerdown", (event) => {
      if (!event.isPrimary || event.target.closest("a:not(.hero-image-link), button, input, textarea, select")) return;
      startX = event.clientX;
      startY = event.clientY;
      tracking = true;
      swiping = false;
      element.setPointerCapture?.(event.pointerId);
    });

    element.addEventListener("pointermove", (event) => {
      if (!tracking) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) > 14 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
        swiping = true;
      }
    });

    element.addEventListener("pointerup", (event) => {
      if (!tracking) return;
      tracking = false;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      element.releasePointerCapture?.(event.pointerId);
      if (!swiping || Math.abs(deltaX) < 42 || Math.abs(deltaX) < Math.abs(deltaY) * 1.15) return;
      state.heroImageLinkSuppressUntil = Date.now() + 450;
      changeHeroSlide(deltaX < 0 ? 1 : -1);
    });

    element.addEventListener("pointercancel", (event) => {
      tracking = false;
      swiping = false;
      element.releasePointerCapture?.(event.pointerId);
    });

    element.addEventListener("wheel", (event) => {
      if (heroSlideCount < 2) return;
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      const isHorizontalSwipe = absX > absY && absX > 35;
      if (!isHorizontalSwipe) return;

      event.preventDefault();
      event.stopPropagation();

      if (state.heroSlideGestureLocked) {
        return;
      }

      changeHeroSlide(event.deltaX > 0 ? 1 : -1);
    }, { passive: false });

    element.addEventListener("touchstart", (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }, { passive: true });

    element.addEventListener("touchend", (event) => {
      if (heroSlideCount < 2) return;
      const touch = event.changedTouches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 48;
      if (!isHorizontalSwipe || state.heroSlideGestureLocked) return;

      state.heroImageLinkSuppressUntil = Date.now() + 450;
      changeHeroSlide(deltaX < 0 ? 1 : -1);
    }, { passive: true });

    element.addEventListener("lostpointercapture", () => {
      tracking = false;
      swiping = false;
    });
  });

  root.querySelectorAll("[data-hero-dot]").forEach((dot) => {
    dot.addEventListener("click", () => {
      changeHeroSlideFromControl(Number(dot.dataset.heroDot) % heroSlideCount);
    });
  });

  root.querySelector("[data-hero-prev]")?.addEventListener("click", () => {
    changeHeroSlideFromControl((state.currentHeroSlide - 1 + heroSlideCount) % heroSlideCount);
  });

  root.querySelector("[data-hero-next]")?.addEventListener("click", () => {
    changeHeroSlideFromControl((state.currentHeroSlide + 1) % heroSlideCount);
  });
}
