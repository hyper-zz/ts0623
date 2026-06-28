import { AntiShakingSection } from "./AntiShakingSection.js";
import { CoolingTimerFeature } from "./CoolingTimerFeature.js";

const featureAssets = {
  sequence: [
    {
      fallback: "/assets/products/exm/features/sequence-01.png",
      mobile: "/assets/products/exm/features/sequence-01-mobile.webp",
      desktop: "/assets/products/exm/features/sequence-01-desktop.webp",
      width: 3373,
      height: 1525,
    },
    {
      fallback: "/assets/products/exm/features/sequence-02.png",
      mobile: "/assets/products/exm/features/sequence-02-mobile.webp",
      desktop: "/assets/products/exm/features/sequence-02-desktop.webp",
      width: 3373,
      height: 1525,
    },
    {
      fallback: "/assets/products/exm/features/sequence-03.png",
      mobile: "/assets/products/exm/features/sequence-03-mobile.webp",
      desktop: "/assets/products/exm/features/sequence-03-desktop.webp",
      width: 3373,
      height: 1525,
    },
    {
      fallback: "/assets/products/exm/features/sequence-04.png",
      mobile: "/assets/products/exm/features/sequence-04-mobile.webp",
      desktop: "/assets/products/exm/features/sequence-04-desktop.webp",
      width: 3373,
      height: 1525,
    },
  ],
  sound: {
    fallback: "/assets/products/exm/features/sound-level-camping.jpg",
    mobile: "/assets/products/exm/features/sound-level-camping-mobile.webp",
    desktop: "/assets/products/exm/features/sound-level-camping-desktop.webp",
    width: 925,
    height: 1177,
  },
};

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function progressBetween(progress, start, end) {
  return clamp((progress - start) / (end - start));
}

function easeOut(value) {
  const x1 = 0.22;
  const y1 = 1;
  const x2 = 0.36;
  const y2 = 1;
  const epsilon = 0.00001;
  const sampleCurve = (a1, a2, t) => {
    const invT = 1 - t;
    return (3 * invT * invT * t * a1) + (3 * invT * t * t * a2) + (t * t * t);
  };
  const sampleDerivativeX = (t) => {
    const invT = 1 - t;
    return (3 * invT * invT * x1) + (6 * invT * t * (x2 - x1)) + (3 * t * t * (1 - x2));
  };

  let t = clamp(value);
  for (let i = 0; i < 6; i += 1) {
    const currentX = sampleCurve(x1, x2, t) - value;
    const derivative = sampleDerivativeX(t);
    if (Math.abs(currentX) < epsilon || Math.abs(derivative) < epsilon) break;
    t -= currentX / derivative;
  }

  if (t < 0 || t > 1) {
    let lower = 0;
    let upper = 1;
    t = value;
    for (let i = 0; i < 8; i += 1) {
      const currentX = sampleCurve(x1, x2, t);
      if (Math.abs(currentX - value) < epsilon) break;
      if (currentX < value) lower = t;
      else upper = t;
      t = (lower + upper) / 2;
    }
  }

  return clamp(sampleCurve(y1, y2, t));
}

export function ExmFeatureEffects() {
  return `
    <section class="exm-feature-effects" data-exm-feature-effects>
      <section class="exm-sequence-reveal" data-exm-sequence-gate aria-label="EXM feature sequence">
        <div class="exm-sequence-frame exm-dimensions-stage">
          <div class="exm-dimensions-visual-stage">
            <div class="exm-dimensions-visual-group">
              ${featureAssets.sequence.map((image, index) => `
                ${responsivePicture({
                  image,
                  className: "exm-sequence-image exm-dimensions-product-image",
                  alt: "",
                  loading: index === 0 ? "eager" : "lazy",
                  extraAttributes: `data-exm-sequence-image data-exm-sequence-index="${index}" aria-hidden="true"`,
                })}
              `).join("")}
              <div class="exm-dimension-overlay exm-dimensions-scene" data-exm-dimension-overlay aria-label="EXM dimensions">
                <div class="exm-dimension-desktop exm-dimensions-product-scene" aria-hidden="true">
                  <div class="exm-dimension-line exm-dimension-line--length">
                    <span class="exm-dimension-rule"></span>
                    <span class="exm-dimension-label">646 mm</span>
                  </div>
                  <div class="exm-dimension-line exm-dimension-line--depth">
                    <span class="exm-dimension-rule"></span>
                    <span class="exm-dimension-label">423 mm</span>
                  </div>
                  <div class="exm-dimension-height-line"></div>
                  <div class="exm-dimension-height">
                    <p>Height</p>
                    <dl>
                      <div data-exm-height-row>
                        <dt>30L</dt>
                        <dd>409 mm</dd>
                      </div>
                      <div data-exm-height-row>
                        <dt>40L</dt>
                        <dd>489 mm</dd>
                      </div>
                      <div data-exm-height-row>
                        <dt>50L</dt>
                        <dd>569 mm</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div class="exm-dimension-mobile-height">
                  <p>Height</p>
                  <dl>
                    <div>
                      <dt>30L</dt>
                      <dd>409 mm</dd>
                    </div>
                    <div>
                      <dt>40L</dt>
                      <dd>489 mm</dd>
                    </div>
                    <div>
                      <dt>50L</dt>
                      <dd>569 mm</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div class="exm-sequence-copy-group exm-dimensions-copy-group" data-exm-sequence-copy-group aria-label="EXM feature highlights">
              <p class="exm-sequence-copy-item" data-exm-sequence-copy-item>Stable system<span class="period-accent">.</span></p>
              <p class="exm-sequence-copy-item" data-exm-sequence-copy-item>Reinforced structure<span class="period-accent">.</span></p>
              <p class="exm-sequence-copy-item" data-exm-sequence-copy-item>True-rated capacity<span class="period-accent">.</span></p>
            </div>
          </div>
          <div class="exm-dimensions-cooling-bridge">
            <div class="exm-dimensions-cooling-bridge__inner">
              <h2 class="exm-sequence-cooling-title" data-exm-sequence-cooling-title>Cooling system<span class="period-accent">.</span></h2>
            </div>
          </div>
        </div>
      </section>

      <section class="exm-cooling-effect reveal" data-exm-fade-panel>
        <div class="exm-cooling-effect-media">
          <div class="exm-cooling-effect-overlay">
            <div class="exm-cooling-effect-copy">
              <p class="exm-cooling-effect-body">Compressor, condenser, wrap-around evaporator, airflow, insulation, and control logic work together to align display and chamber temperature<span class="period-accent">.</span></p>
              <p class="exm-cooling-effect-proof cooling-main-claim">
                <span class="cooling-main-claim__line cooling-main-claim__line--cold">DOWN TO -20°C<span class="period-accent">.</span></span>
                <span class="cooling-main-claim__line cooling-main-claim__line--real">FOR REAL<span class="period-accent">.</span></span>
              </p>
              <p class="exm-cooling-effect-body exm-cooling-effect-closing">We mean it<span class="period-accent">.</span></p>
              <div class="exm-cooling-effect-features" aria-label="Cooling system feature summary">
                <article>
                  <h3>-20°C</h3>
                  <p>Cold you can actually measure<span class="period-accent">.</span></p>
                </article>
                <article>
                  <h3>Display + chamber aligned</h3>
                  <p>Display and chamber temperature align<span class="period-accent">.</span></p>
                </article>
                <article>
                  <h3>System-matched calibration</h3>
                  <p>Tuned as one system<span class="period-accent">.</span></p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${CoolingTimerFeature()}

      ${AntiShakingSection()}

      <section class="exm-sound-level reveal" data-exm-sound-gate>
        <div class="exm-sound-level-space">
          <figure class="exm-sound-level-figure">
            ${responsivePicture({
              image: featureAssets.sound,
              className: "exm-sound-level-bg",
              alt: "Quiet camping night scene",
              loading: "lazy",
            })}
            <svg class="exm-sound-level-svg exm-sound-level__svg--desktop" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="exmSoundGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#5ec5d7"></stop>
                  <stop offset="55%" stop-color="#9fd6c0"></stop>
                  <stop offset="100%" stop-color="#71b845"></stop>
                </linearGradient>
                <radialGradient id="exmSoftWhiteGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(255,255,255,1)"></stop>
                  <stop offset="22%" stop-color="rgba(255,255,255,0.92)"></stop>
                  <stop offset="48%" stop-color="rgba(255,255,255,0.38)"></stop>
                  <stop offset="72%" stop-color="rgba(255,255,255,0.12)"></stop>
                  <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
                </radialGradient>
              </defs>
              <path class="exm-sound-curve-shadow" d="M 10 305 C 90 250, 160 210, 260 260 C 380 320, 490 320, 600 315 C 700 310, 750 365, 880 430"></path>
              <path class="exm-sound-curve-path" d="M 10 305 C 90 250, 160 210, 260 260 C 380 320, 490 320, 600 315 C 700 310, 750 365, 880 430"></path>

              <g class="exm-sound-point" data-exm-sound-trigger="0.24">
                <circle class="exm-sound-node-glow" cx="260" cy="260" r="64"></circle>
                <circle class="exm-sound-node" cx="260" cy="260" r="10"></circle>
                <g class="exm-sound-copy">
                  <text class="exm-sound-label exm-sound-label-main" x="260" y="190" text-anchor="middle">60db</text>
                  <text class="exm-sound-label exm-sound-label-sub" x="260" y="225" text-anchor="middle">Daily Conversation</text>
                </g>
              </g>

              <g class="exm-sound-point" data-exm-sound-trigger="0.58">
                <circle class="exm-sound-node-glow" cx="600" cy="315" r="64"></circle>
                <circle class="exm-sound-node" cx="600" cy="315" r="10"></circle>
                <line class="exm-sound-dotted-line" x1="600" y1="335" x2="600" y2="455"></line>
                <g class="exm-sound-copy">
                  <text class="exm-sound-label exm-sound-label-main" x="600" y="500" text-anchor="middle">≤40db</text>
                  <text class="exm-sound-label exm-sound-label-sub" x="600" y="535" text-anchor="middle">Unit Operation</text>
                </g>
              </g>

              <g class="exm-sound-point" data-exm-sound-trigger="0.87">
                <circle class="exm-sound-node-glow" cx="880" cy="430" r="64"></circle>
                <circle class="exm-sound-node" cx="880" cy="430" r="10"></circle>
                <g class="exm-sound-copy">
                  <text class="exm-sound-label exm-sound-label-main" x="880" y="365" text-anchor="middle">20db</text>
                  <text class="exm-sound-label exm-sound-label-sub" x="880" y="400" text-anchor="middle">Whisper</text>
                </g>
              </g>
            </svg>
            <svg class="exm-sound-level-svg exm-sound-level__svg--mobile" viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="exmSoundMobileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#5ec5d7"></stop>
                  <stop offset="55%" stop-color="#9fd6c0"></stop>
                  <stop offset="100%" stop-color="#71b845"></stop>
                </linearGradient>
                <radialGradient id="exmSoftWhiteMobileGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(255,255,255,1)"></stop>
                  <stop offset="24%" stop-color="rgba(255,255,255,0.9)"></stop>
                  <stop offset="52%" stop-color="rgba(255,255,255,0.34)"></stop>
                  <stop offset="76%" stop-color="rgba(255,255,255,0.1)"></stop>
                  <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
                </radialGradient>
              </defs>
              <path class="exm-sound-curve-shadow exm-sound-curve-shadow--mobile" d="M 36 245 C 92 210, 132 278, 190 292 C 245 306, 282 235, 350 252"></path>
              <path class="exm-sound-curve-path exm-sound-curve-path--mobile" d="M 36 245 C 92 210, 132 278, 190 292 C 245 306, 282 235, 350 252"></path>

              <g class="exm-sound-point exm-sound-point--mobile" data-exm-sound-trigger="0.24">
                <circle class="exm-sound-node-glow exm-sound-node-glow--mobile" cx="72" cy="230" r="42"></circle>
                <circle class="exm-sound-node" cx="72" cy="230" r="7"></circle>
                <g class="exm-sound-copy exm-sound-copy--mobile">
                  <text class="exm-sound-label exm-sound-label-main" x="72" y="175" text-anchor="middle">60dB</text>
                  <text class="exm-sound-label exm-sound-label-sub" x="72" y="202" text-anchor="middle">Daily</text>
                  <text class="exm-sound-label exm-sound-label-sub" x="72" y="219" text-anchor="middle">Conversation</text>
                </g>
              </g>

              <g class="exm-sound-point exm-sound-point--mobile" data-exm-sound-trigger="0.58">
                <circle class="exm-sound-node-glow exm-sound-node-glow--mobile" cx="205" cy="296" r="48"></circle>
                <circle class="exm-sound-node" cx="205" cy="296" r="8"></circle>
                <line class="exm-sound-dotted-line exm-sound-dotted-line--mobile" x1="205" y1="312" x2="205" y2="500"></line>
              </g>

              <g class="exm-sound-point exm-sound-point--mobile exm-sound-point--quiet" data-exm-sound-trigger="0.87">
                <circle class="exm-sound-node-glow exm-sound-node-glow--mobile" cx="330" cy="250" r="38"></circle>
                <circle class="exm-sound-node" cx="330" cy="250" r="6"></circle>
                <g class="exm-sound-copy exm-sound-copy--mobile">
                  <text class="exm-sound-label exm-sound-label-main" x="330" y="198" text-anchor="middle">20dB</text>
                  <text class="exm-sound-label exm-sound-label-sub" x="330" y="224" text-anchor="middle">Whisper</text>
                </g>
              </g>
            </svg>
            <div class="exm-sound-level__mobile-copy">
              <p class="exm-feature-eyebrow">Quiet operation</p>
              <h2>Runs quietly nearby.</h2>
              <div class="exm-sound-level__mobile-metric">≤40 dB</div>
              <p>Low operating noise for rest stops, cabins, and camp setups.</p>
            </div>
          </figure>
        </div>
      </section>
    </section>
  `;
}

function responsivePicture({ image, className, alt, loading, extraAttributes = "" }) {
  return `
    <picture style="display: contents">
      <source media="(max-width: 767px)" srcset="${image.mobile}" type="image/webp">
      <source media="(min-width: 768px)" srcset="${image.desktop}" type="image/webp">
      <img class="${className}" src="${image.fallback}" alt="${alt}" loading="${loading}" decoding="async" width="${image.width}" height="${image.height}" ${extraAttributes}>
    </picture>
  `;
}

let cleanupExmFeatureEffects = null;

export function initExmFeatureEffects(root = document) {
  cleanupExmFeatureEffects?.();
  cleanupExmFeatureEffects = null;

  const section = root.querySelector("[data-exm-sequence-gate]");
  const images = [...root.querySelectorAll("[data-exm-sequence-image]")];
  const sequenceCopyGroup = root.querySelector("[data-exm-sequence-copy-group]");
  const sequenceCopyItems = [...root.querySelectorAll("[data-exm-sequence-copy-item]")];
  const dimensionOverlay = root.querySelector("[data-exm-dimension-overlay]");
  const sequenceCoolingTitle = root.querySelector("[data-exm-sequence-cooling-title]");
  const panels = [...root.querySelectorAll("[data-exm-fade-panel]")];
  const antiShakingSections = [...root.querySelectorAll("[data-anti-shaking-section]")];
  const soundSection = root.querySelector("[data-exm-sound-gate]");
  if (!section || images.length < 4) return;

  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let rafId = 0;
  let sequenceProgress = 0;
  let soundProgress = 0;
  let staticStateApplied = false;
  const soundFlashTimers = new Set();
  let lastRenderedSoundProgress = -1;

  const setSequence = (progress) => {
    const opacities = [
      1,
      clamp(progress),
      clamp((progress - 0.33) / 0.67),
      clamp((progress - 0.66) / 0.34),
    ];

    images.forEach((image, index) => {
      image.style.opacity = String(opacities[index] ?? 0);
    });

    const itemRanges = mobileQuery.matches
      ? [[0, 0.2], [0.2, 0.38], [0.38, 0.54]]
      : [[0, 0.18], [0.18, 0.36], [0.36, 0.54]];

    sequenceCopyItems.forEach((item, index) => {
      const [start, end] = itemRanges[index] || [0, 1];
      const localProgress = easeOut(progressBetween(progress, start, end));
      item.style.opacity = String(localProgress);
      item.style.transform = `translateY(${(1 - localProgress) * 18}px)`;
    });

    const copyExitProgress = easeOut(progressBetween(progress, 0.54, 0.68));
    const copyExitShift = mobileQuery.matches ? -28 : -32;
    if (sequenceCopyGroup) {
      sequenceCopyGroup.style.opacity = String(1 - copyExitProgress);
      sequenceCopyGroup.style.transform = `translateY(${copyExitShift * copyExitProgress}px)`;
      sequenceCopyGroup.style.visibility = copyExitProgress > 0.92 ? "hidden" : "visible";
    }

    if (dimensionOverlay) {
      const lengthProgress = easeOut(progressBetween(progress, 0.68, mobileQuery.matches ? 0.82 : 0.8));
      const lengthLabelProgress = easeOut(progressBetween(progress, 0.74, 0.82));
      const depthProgress = easeOut(progressBetween(progress, 0.74, mobileQuery.matches ? 0.88 : 0.86));
      const depthLabelProgress = easeOut(progressBetween(progress, 0.8, 0.88));
      const heightLineProgress = easeOut(progressBetween(progress, 0.8, 0.94));
      const heightTextProgress = easeOut(progressBetween(progress, 0.86, 0.94));
      const mobileHeightProgress = easeOut(progressBetween(progress, 0.82, 0.94));
      dimensionOverlay.style.setProperty("--dimension-length-progress", String(lengthProgress));
      dimensionOverlay.style.setProperty("--dimension-length-label-progress", String(lengthLabelProgress));
      dimensionOverlay.style.setProperty("--dimension-depth-progress", String(depthProgress));
      dimensionOverlay.style.setProperty("--dimension-depth-label-progress", String(depthLabelProgress));
      dimensionOverlay.style.setProperty("--dimension-height-line-progress", String(heightLineProgress));
      dimensionOverlay.style.setProperty("--dimension-height-title-progress", String(heightTextProgress));
      dimensionOverlay.style.setProperty("--dimension-height-row-1-progress", String(heightTextProgress));
      dimensionOverlay.style.setProperty("--dimension-height-row-2-progress", String(heightTextProgress));
      dimensionOverlay.style.setProperty("--dimension-height-row-3-progress", String(heightTextProgress));
      dimensionOverlay.style.setProperty("--dimension-mobile-progress", String(mobileHeightProgress));
      dimensionOverlay.style.setProperty("--dimension-mobile-offset", `${(1 - mobileHeightProgress) * 20}px`);
    }

    if (sequenceCoolingTitle) {
      const coolingProgress = easeOut(progressBetween(progress, 0.72, 0.92));
      sequenceCoolingTitle.style.opacity = String(coolingProgress);
      sequenceCoolingTitle.style.transform = `translateY(${(1 - coolingProgress) * 32}px)`;
    }
  };

  const soundPaths = soundSection ? [...soundSection.querySelectorAll(".exm-sound-curve-path, .exm-sound-curve-shadow")] : [];
  const soundPoints = soundSection ? [...soundSection.querySelectorAll(".exm-sound-point")] : [];
  const mobileSoundCopy = soundSection?.querySelector(".exm-sound-level__mobile-copy");

  const isStaticMode = () => reduceMotionQuery.matches;
  const isMobileAnimationMode = () => mobileQuery.matches && !reduceMotionQuery.matches;
  const setMobileSoundCopyProgress = (progress) => {
    if (!mobileSoundCopy) return;
    mobileSoundCopy.classList.toggle("is-copy-visible", progress >= 0.48);
    mobileSoundCopy.classList.toggle("is-title-visible", progress >= 0.54);
    mobileSoundCopy.classList.toggle("is-metric-visible", progress >= 0.6);
    mobileSoundCopy.classList.toggle("is-unit-visible", progress >= 0.68);
  };
  const showMobileSoundCopy = () => {
    if (!mobileSoundCopy) return;
    mobileSoundCopy.classList.add(
      "is-copy-visible",
      "is-title-visible",
      "is-metric-visible",
      "is-unit-visible",
    );
  };

  const setAntiShakingProgress = () => {
    antiShakingSections.forEach((antiSection) => {
      if (isStaticMode()) {
        antiSection.style.setProperty("--anti-angle", "45deg");
        antiSection.style.setProperty("--anti-progress", "1");
        antiSection.style.setProperty("--anti-arc-offset", "0");
        return;
      }

      const rect = antiSection.getBoundingClientRect();
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.35));
      const easedProgress = easeOut(progress);
      antiSection.style.setProperty("--anti-angle", `${easedProgress * 45}deg`);
      antiSection.style.setProperty("--anti-progress", String(easedProgress));
      antiSection.style.setProperty("--anti-arc-offset", String(386 * (1 - easedProgress)));
    });
  };

  const renderSound = (progress) => {
    const previousProgress = lastRenderedSoundProgress < 0 ? 0 : lastRenderedSoundProgress;
    if (Math.abs(progress - lastRenderedSoundProgress) < 0.002) return;
    lastRenderedSoundProgress = progress;

    soundPaths.forEach((path) => {
      const length = Number(path.dataset.exmSoundLength || 0);
      path.style.strokeDashoffset = String(length * (1 - progress));
    });

    soundPoints.forEach((point) => {
      const trigger = Number(point.dataset.exmSoundTrigger || 0);
      const isVisible = progress >= trigger;

      if (isVisible) {
        point.classList.add("is-visible");
      }

      if (isVisible && previousProgress < trigger) {
        point.classList.remove("is-flashing");
        void point.getBoundingClientRect();
        point.classList.add("is-flashing");
        const timer = window.setTimeout(() => {
          point.classList.remove("is-flashing");
          soundFlashTimers.delete(timer);
        }, 650);
        soundFlashTimers.add(timer);
      } else if (!isVisible) {
        point.classList.remove("is-visible", "is-flashing");
      }
    });
  };

  const showStaticFeatureState = () => {
    showMobileSoundCopy();
    if (staticStateApplied) return;
    staticStateApplied = true;
    sequenceProgress = 1;
    soundProgress = 1;
    images.forEach((image, index) => {
      image.style.opacity = index === images.length - 1 ? "1" : "0";
    });
    sequenceCopyItems.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    });
    if (sequenceCopyGroup) {
      sequenceCopyGroup.style.transform = `translateY(${mobileQuery.matches ? -12 : -20}px)`;
    }
    if (dimensionOverlay) {
      dimensionOverlay.style.setProperty("--dimension-length-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-length-label-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-depth-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-depth-label-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-height-line-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-height-title-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-height-row-1-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-height-row-2-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-height-row-3-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-mobile-progress", "1");
      dimensionOverlay.style.setProperty("--dimension-mobile-offset", "0px");
    }
    if (sequenceCoolingTitle) {
      sequenceCoolingTitle.style.opacity = "0.4";
      sequenceCoolingTitle.style.transform = "translateY(20.4px)";
    }
    panels.forEach((panel) => panel.classList.add("is-visible"));
    antiShakingSections.forEach((antiSection) => {
      antiSection.style.setProperty("--anti-angle", "45deg");
      antiSection.style.setProperty("--anti-progress", "1");
      antiSection.style.setProperty("--anti-arc-offset", "0");
    });
    soundPaths.forEach((path) => {
      path.style.strokeDashoffset = "0";
    });
    soundPoints.forEach((point) => {
      point.classList.remove("is-flashing");
      point.classList.add("is-visible");
    });
  };

  const stickyProgress = (track, frame) => {
    const rect = track.getBoundingClientRect();
    const start = rect.top + window.scrollY;
    const stickyTop = Number.parseFloat(getComputedStyle(frame).top) || 0;
    const maxScroll = Math.max(1, track.offsetHeight - window.innerHeight);
    return clamp((window.scrollY - start + stickyTop) / maxScroll);
  };

  const syncGateProgressFromScroll = () => {
    if (isStaticMode()) {
      showStaticFeatureState();
      return;
    }

    sequenceProgress = stickyProgress(section, section.querySelector(".exm-sequence-frame") || section);
    setSequence(sequenceProgress);
    setAntiShakingProgress();

    if (soundSection) {
      soundProgress = stickyProgress(
        soundSection,
        soundSection.querySelector(".exm-sound-level-figure") || soundSection,
      );
      if (isMobileAnimationMode()) setMobileSoundCopyProgress(soundProgress);
      renderSound(soundProgress);
    }
  };

  const handleResize = () => {
    if (isStaticMode()) {
      showStaticFeatureState();
      requestUpdate();
      return;
    }

    if (isMobileAnimationMode()) {
      staticStateApplied = false;
      requestUpdate();
      return;
    }

    staticStateApplied = false;
    requestUpdate();
  };

  const update = () => {
    rafId = 0;
    syncGateProgressFromScroll();
  };

  const requestUpdate = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(update);
  };

  const handleModeChange = () => {
    if (isStaticMode()) {
      showStaticFeatureState();
    } else if (isMobileAnimationMode()) {
      staticStateApplied = false;
      lastRenderedSoundProgress = -1;
    } else {
      staticStateApplied = false;
      lastRenderedSoundProgress = -1;
      soundPaths.forEach((path) => {
        const length = Number(path.dataset.exmSoundLength || path.getTotalLength());
        path.dataset.exmSoundLength = String(length);
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length * (1 - soundProgress));
      });
    }
    requestUpdate();
  };

  let observer = null;

  soundPaths.forEach((path) => {
    const length = path.getTotalLength();
    path.dataset.exmSoundLength = String(length);
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
  });

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.28 },
  );

  panels.forEach((panel) => observer.observe(panel));
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", handleResize, { passive: true });
  const addQueryListener = (query) => {
    if (query.addEventListener) query.addEventListener("change", handleModeChange);
    else query.addListener?.(handleModeChange);
  };
  const removeQueryListener = (query) => {
    if (query.removeEventListener) query.removeEventListener("change", handleModeChange);
    else query.removeListener?.(handleModeChange);
  };

  addQueryListener(mobileQuery);
  addQueryListener(reduceMotionQuery);
  if (isStaticMode()) showStaticFeatureState();
  requestUpdate();

  cleanupExmFeatureEffects = () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", handleResize);
    removeQueryListener(mobileQuery);
    removeQueryListener(reduceMotionQuery);
    if (rafId) window.cancelAnimationFrame(rafId);
    soundFlashTimers.forEach((timer) => window.clearTimeout(timer));
    observer?.disconnect();
  };
}
