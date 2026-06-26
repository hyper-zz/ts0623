import { createTranslator } from "../i18n/index.js";

export function ContactSection({ t, variant = "home" } = {}) {
  const translate = t || createTranslator("en");
  const keyPrefix = variant === "productDetail" ? "productDetail.contact" : "home.contact";
  const email = variant === "productDetail" ? "info@travelscience.com" : "info@kelvcoop.com";

  return `
    <section class="contact reveal" id="contact">
      <p class="kicker">${translate(`${keyPrefix}.kicker`)}</p>
      <h2>${translate(`${keyPrefix}.title`)}</h2>
      <p>${translate(`${keyPrefix}.copy`)}</p>
      <a class="hero-cta" href="mailto:${email}">${email}</a>
    </section>
  `;
}
