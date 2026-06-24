import { projectSteps } from "../data/homepage.js";

const customOptions = [
  ["Capacity & model direction", "Choose from existing product platforms or develop around a new capacity target."],
  ["Color, finish and branding", "Apply brand colors, logo placement, exterior finish and packaging direction."],
  ["Power route", "Configure DC, AC or battery-powered routes depending on product use."],
  ["Structure and accessories", "Adjust handles, wheels, baskets, lids and storage details around the use case."],
];

const suitableFor = [
  "Outdoor brands",
  "Vehicle accessory distributors",
  "Camping equipment channels",
  "Private-label product teams",
  "Regional distributors",
];

export function CustomProjectsPage() {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">Custom Projects</p>
        <h1>Custom cooling projects for brands and product teams.</h1>
        <p>Develop portable cooling products around capacity, power, structure, color, packaging and market requirements.</p>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">What can be customized</p>
          <h2>Start from the product direction.</h2>
        </div>
        <div class="feature-detail-grid">
          ${customOptions.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">Project process</p>
          <h2>From brief to repeatable supply.</h2>
        </div>
        <div class="process-grid">
          ${projectSteps.map(([title, text], index) => `
            <article>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="certifications">
        <div>
          <p class="kicker">Suitable for</p>
          <h2>Built around commercial use.</h2>
        </div>
        <div>
          ${suitableFor.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="product-inquiry">
        <p class="kicker">Start a project</p>
        <h2>Share your target product and market.</h2>
        <p>Send the series, capacity, quantity, customization direction and timeline you want to discuss.</p>
        <a class="hero-cta" href="#/contact" data-go="/contact">Start a custom project</a>
      </section>
    </main>
  `;
}
