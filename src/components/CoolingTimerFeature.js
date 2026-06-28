const ASSET_BASE = "/assets/products/exm/features/cooling-timer";

const temperatureFrames = Array.from({ length: 31 }, (_, index) => 30 - index);

export function CoolingTimerFeature() {
  return `
    <section class="cooling-timer-feature-section cooling-performance-section reveal" aria-label="from ambient to 0°C in about 20 minutes">
      <div class="cooling-timer-feature__heading">
        <h2>Rapid Cooling<span class="period-accent">.</span></h2>
      </div>
      <div class="cooling-timer-feature__inner cooling-performance-section__inner">
        <div class="cooling-timer-feature__timer cooling-performance-section__timer">
          <div class="cooling-timer-feature__layout">
            <div class="cooling-timer-feature__stage">
              <img
                class="cooling-timer-feature__asset cooling-timer-feature__ring"
                src="${ASSET_BASE}/cooling-timer-ring-shell.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async">
              <svg class="cooling-timer-feature__progress" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
                <defs>
                  <linearGradient id="coolingTimerProgressGradient" x1="160" y1="250" x2="820" y2="780" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#4ecfff"/>
                    <stop offset="42%" stop-color="#8eefff"/>
                    <stop offset="100%" stop-color="#e7fbff"/>
                  </linearGradient>
                </defs>
                <circle class="cooling-timer-feature__warm-line" cx="500" cy="500" r="374"></circle>
                <circle class="cooling-timer-feature__progress-line" cx="500" cy="500" r="374"></circle>
              </svg>
              <div class="cooling-timer-feature__markers" aria-hidden="true">
                <span class="cooling-timer-feature__marker cooling-timer-feature__marker--5">5min</span>
                <span class="cooling-timer-feature__marker cooling-timer-feature__marker--10">10min</span>
                <span class="cooling-timer-feature__marker cooling-timer-feature__marker--15">15min</span>
                <span class="cooling-timer-feature__marker cooling-timer-feature__marker--20">20min</span>
              </div>
              <img
                class="cooling-timer-feature__asset cooling-timer-feature__sweep"
                src="${ASSET_BASE}/cooling-timer-sweep-head.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async">
              <img
                class="cooling-timer-feature__asset cooling-timer-feature__particles"
                src="${ASSET_BASE}/cooling-timer-particles.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async">
              <div class="cooling-timer-feature__copy" aria-label="Cooling from 30°C to 0°C">
                <div class="cooling-timer-feature__temperature" aria-hidden="true">
                  <div class="cooling-timer-feature__temperature-track">
                  ${temperatureFrames.map((temperature, index) => `
                    <span
                      class="cooling-timer-feature__temperature-frame cooling-timer-feature__temperature-frame--${index + 1}"
                      style="--temperature-frame-index: ${index};">
                      ${temperature}<span>°C</span>
                    </span>
                  `).join("")}
                  </div>
                </div>
                <span class="cooling-timer-feature__sr">Cooling from 30°C to 0°C</span>
              </div>
            </div>
            <p class="cooling-timer-feature__result">from ambient to <span class="cooling-timer-feature__result-highlight">0°C ≈ 20min</span></p>
          </div>
        </div>
      </div>
    </section>
  `;
}
