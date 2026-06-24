// HERO CONTRACT:
// The class names used by this component are required by heroScrollGate.js,
// navigation swipe controls, and the protected hero CSS block.
// Do not rename or restructure this component unless the full hero behavior is intentionally reviewed.

export function HeroCarousel({ slides, currentSlide }) {
  const safeIndex = slides.length ? currentSlide % slides.length : 0;
  const slide = slides[safeIndex];
  if (!slide) return "";
  const detailUrl = slide.detailUrl || slide.target;

  return `
    <section class="hero-scroll-stage" aria-label="Featured Travel Science product image">
      <div class="hero hero-sticky-viewport" data-hero-swipe>
        <div class="hero-bg-scroll">
          <img
            class="hero-bg hero-media"
            src="${slide.background}"
            alt=""
            aria-hidden="true"
            style="--hero-position: ${slide.position || "center center"}">
          <a
            class="hero-image-link"
            href="#${detailUrl}"
            data-go="${detailUrl}"
            aria-label="Open ${(slide.eyebrow || slide.title).replace(/\n/g, " ")} details">
          </a>
        </div>

        <section class="hero-ui hero-slide hero-slide-${slide.id} is-active" aria-label="Featured Travel Science products">
          <div class="hero-copy">
            <span class="hero-badge">${slide.badge}</span>
            <p class="hero-eyebrow">${slide.eyebrow}</p>
            <h1 class="hero-title">${slide.title.replace("\n", "<br>")}</h1>
            <p class="hero-text">${slide.text}</p>
            <div class="hero-features">
              ${slide.features.map((feature) => `<span class="hero-feature"><span class="hero-feature-icon" aria-hidden="true"></span>${feature}</span>`).join("")}
            </div>
            <div class="hero-actions">
              <a class="text-button view-all-products" href="#${slide.secondaryTarget}" data-go="${slide.secondaryTarget}">${slide.secondary} <span class="arrow-accent">→</span></a>
            </div>
          </div>
          <div class="hero-arrows" aria-label="Hero carousel controls">
            <button class="hero-arrow hero-arrow-left" type="button" data-hero-prev aria-label="Previous hero slide">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button class="hero-arrow hero-arrow-right" type="button" data-hero-next aria-label="Next hero slide">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9 6l6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div class="hero-dots hero-index" aria-label="Hero carousel pagination">
            ${slides
              .map((_, index) => {
                const number = String(index + 1).padStart(2, "0");
                return `
                  <button
                    class="hero-dot hero-index-item ${index === safeIndex ? "is-active" : ""}"
                    data-hero-dot="${index}"
                    aria-label="Hero slide ${index + 1}"
                    aria-current="${index === safeIndex ? "true" : "false"}">
                    <span class="hero-index-number">${number}</span>
                    <span class="hero-index-line" aria-hidden="true"></span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}
