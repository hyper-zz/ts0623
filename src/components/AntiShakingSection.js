const antiShakingImages = [
  {
    src: "/assets/products/exm/features/anti-shaking/rough-road.png",
    alt: "EXM cooler on a rough road",
  },
  {
    src: "/assets/products/exm/features/anti-shaking/campsite-roll.png",
    alt: "EXM cooler on uneven campsite ground",
  },
  {
    src: "/assets/products/exm/features/anti-shaking/vehicle-trunk.jpg",
    alt: "EXM cooler in a vehicle trunk",
  },
];

function antiShakingIcon(type) {
  if (type === "terrain") {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M5 32 L15 21 L24 30 L34 15 L43 32"></path>
      </svg>
    `;
  }

  if (type === "shield") {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M24 5 L39 11 V22 C39 32 33 39 24 43 C15 39 9 32 9 22 V11 Z"></path>
        <path d="M17 24 L22 29 L32 18"></path>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M4 24 C9 14 14 34 19 24 S29 14 34 24 S39 34 44 24"></path>
    </svg>
  `;
}

export function AntiShakingSection() {
  const features = [
    {
      icon: "wave",
      title: "Vibration resistant.",
      copy: "Stable performance on rough roads.",
    },
    {
      icon: "terrain",
      title: "Built for uneven ground.",
      copy: "Reliable operation when the terrain shifts.",
    },
    {
      icon: "shield",
      title: "Compressor stays steady.",
      copy: "Cooling stays consistent on the move.",
    },
  ];

  return `
    <section class="anti-shaking-section reveal" data-anti-shaking-section aria-label="Anti shaking feature">
      <div class="anti-shaking-image-strip" aria-label="Anti shaking usage scenes">
        ${antiShakingImages.map((image) => `
          <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async">
        `).join("")}
      </div>

      <div class="anti-shaking-main">
        <div class="anti-shaking-copy-block">
          <p class="anti-shaking-label">ANTI SHAKING.</p>
          <h2 class="anti-shaking-title">
            <span>Steady through</span>
            <span>the <em>bumps</em><b>.</b></span>
          </h2>
          <p class="anti-shaking-copy">Stable cooling through vibration,<br>rough roads, and uneven ground.</p>
        </div>

        <div class="anti-shaking-angle" aria-label="45 degree anti shaking angle">
          <svg class="anti-shaking-angle-svg" viewBox="0 0 560 300" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="antiAngleGradient" x1="110" y1="220" x2="430" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#38d8ff"></stop>
                <stop offset="58%" stop-color="#4f7cff"></stop>
                <stop offset="100%" stop-color="#9b6cff"></stop>
              </linearGradient>
              <marker id="antiAngleArrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M1 1 L11 6 L1 11 Z"></path>
              </marker>
              <filter id="antiAngleGlow" x="-30%" y="-30%" width="160%" height="160%" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="4" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.18  0 0 0 0 0.7  0 0 0 0 1  0 0 0 0.42 0" result="glow"></feColorMatrix>
                <feMerge>
                  <feMergeNode in="glow"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>

            <g class="anti-shaking-angle__ghosts">
              <line x1="110" y1="220" x2="430" y2="220"></line>
              <line x1="110" y1="220" x2="430" y2="220" style="--ghost-angle: 9deg;"></line>
              <line x1="110" y1="220" x2="430" y2="220" style="--ghost-angle: 18deg;"></line>
              <line x1="110" y1="220" x2="430" y2="220" style="--ghost-angle: 27deg;"></line>
              <line x1="110" y1="220" x2="430" y2="220" style="--ghost-angle: 36deg;"></line>
            </g>

            <line class="anti-shaking-angle__base" x1="110" y1="220" x2="500" y2="220"></line>
            <line class="anti-shaking-angle__tilt" x1="110" y1="220" x2="430" y2="220"></line>
            <path class="anti-shaking-angle__arc" d="M 356 220 A 246 246 0 0 0 283.95 46.05"></path>
            <circle class="anti-shaking-angle__pivot" cx="110" cy="220" r="4"></circle>
            <text class="anti-shaking-angle__text" x="368" y="98">45°</text>
          </svg>
        </div>
      </div>

      <div class="anti-shaking-feature-shell">
        <div class="anti-shaking-features">
          ${features.map((feature) => `
            <article>
              <div class="anti-shaking-feature-icon">
                ${antiShakingIcon(feature.icon)}
              </div>
              <div>
                <h3>${feature.title}</h3>
                <p>${feature.copy}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
