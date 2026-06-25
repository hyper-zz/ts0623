// PROTECTED HERO SCROLL GATE. Do not modify unless explicitly asked.

export function createHeroScrollGate() {
  let heroScrollTicking = false;
  let heroResizeObserver;
  let heroLoadTarget;
  let heroLoadHandler;
  let heroGate = emptyHeroGate();

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const isScreenshotMode = () => (
    document.documentElement.classList.contains("is-screenshot-mode") ||
    document.body.classList.contains("is-screenshot-mode")
  );

  function emptyHeroGate() {
    return {
      bg: null,
      hero: null,
      heroStartY: 0,
      offset: 0,
      startOffset: 0,
      maxOffset: 0,
    };
  }

  function reset() {
    heroGate = emptyHeroGate();
  }

  function clearObservers() {
    heroResizeObserver?.disconnect();
    heroResizeObserver = null;

    if (heroLoadTarget && heroLoadHandler) {
      heroLoadTarget.removeEventListener("load", heroLoadHandler);
    }
    heroLoadTarget = null;
    heroLoadHandler = null;
  }

  function measureHeroScroll() {
    if (isScreenshotMode()) {
      reset();
      return null;
    }

    const hero = document.querySelector(".hero-sticky-viewport");
    const bg = document.querySelector(".hero-bg");
    if (!hero || !bg) {
      reset();
      return null;
    }

    const heroHeight = hero.getBoundingClientRect().height || window.innerHeight;
    const mediaHeight = bg.getBoundingClientRect().height || bg.offsetHeight || heroHeight;
    const startOffset = Number.parseFloat(getComputedStyle(hero).getPropertyValue("--hero-bg-start-offset")) || 0;
    const maxOffset = Math.max(startOffset, mediaHeight - heroHeight);

    heroGate = {
      hero,
      bg,
      heroStartY: hero.getBoundingClientRect().top + window.scrollY,
      offset: clamp(heroGate.offset || startOffset, startOffset, maxOffset),
      startOffset,
      maxOffset,
    };

    applyHeroBackgroundOffset();
    return heroGate;
  }

  function applyHeroBackgroundOffset() {
    heroGate.bg?.style.setProperty("--hero-bg-y", `${-heroGate.offset}px`);
  }

  function requestUpdate() {
    if (heroScrollTicking) return;
    heroScrollTicking = true;

    window.requestAnimationFrame(() => {
      applyHeroBackgroundOffset();
      heroScrollTicking = false;
    });
  }

  function refresh() {
    measureHeroScroll();
    requestUpdate();
  }

  function handleWheel(event) {
    if (isScreenshotMode()) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gate = heroGate.hero ? heroGate : measureHeroScroll();
    if (!gate?.hero || !gate.bg || gate.maxOffset <= 0) return;

    const delta = event.deltaY;
    const isScrollingDown = delta > 0;
    const isScrollingUp = delta < 0;
    const pageAtHeroStart = window.scrollY <= gate.heroStartY + 1;

    if (isScrollingDown && pageAtHeroStart && gate.offset < gate.maxOffset) {
      event.preventDefault();
      heroGate.offset = clamp(gate.offset + delta, gate.startOffset, gate.maxOffset);
      requestUpdate();
      return;
    }

    if (isScrollingUp && pageAtHeroStart && gate.offset > gate.startOffset) {
      event.preventDefault();
      heroGate.offset = clamp(gate.offset + delta, gate.startOffset, gate.maxOffset);
      requestUpdate();
    }
  }

  function setup() {
    clearObservers();
    reset();
    if (isScreenshotMode()) return;

    const hero = document.querySelector(".hero-sticky-viewport");
    const bg = document.querySelector(".hero-bg");
    if (!hero || !bg) return;

    heroResizeObserver = new ResizeObserver(refresh);
    heroResizeObserver.observe(bg);
    heroLoadTarget = bg;
    heroLoadHandler = refresh;
    bg.addEventListener("load", heroLoadHandler, { once: true });
    bg.decode?.().then(refresh).catch(() => {});
    refresh();
  }

  function destroy() {
    clearObservers();
    reset();
    heroScrollTicking = false;
  }

  return {
    setup,
    refresh,
    requestUpdate,
    handleWheel,
    destroy,
  };
}
