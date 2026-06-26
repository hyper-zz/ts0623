import { localizedPath } from "../i18n/index.js";

function textWithBreaks(value) {
  return value.split("\n").join("<br>");
}

function serviceEntryCard(card, index, locale) {
  const path = localizedPath(locale, card.href);
  const hashHref = `#${path}`;
  const imageStyle = card.imagePosition ? ` style="object-position: ${card.imagePosition};"` : "";
  const themeClass = card.theme ? ` service-entry-card--${card.theme}` : "";

  return `
    <article class="feature-product service-entry-card${themeClass} ${index % 2 ? "is-reversed" : ""}">
      <div class="feature-visual">
        <img src="${card.image}" alt="${card.label}"${imageStyle}>
      </div>
      <div class="feature-copy">
        <p class="kicker">${card.label}</p>
        <h2>${textWithBreaks(card.title)}</h2>
        <p>${textWithBreaks(card.description)}</p>
        <a class="card-cta" href="${hashHref}" data-go="${path}">${card.buttonText}</a>
      </div>
    </article>
  `;
}

export function ServiceEntryCards({ cards, locale = "en" }) {
  return `
    <section class="featured service-entry-cards reveal">
      ${cards.map((card, index) => serviceEntryCard(card, index, locale)).join("")}
    </section>
  `;
}
