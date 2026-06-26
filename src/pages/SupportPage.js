import { localizedPath } from "../i18n/index.js";

const documentSeries = [
  { name: "AX", size: "TBD", type: "PDF", url: "" },
  { name: "B", size: "TBD", type: "PDF", url: "" },
  { name: "GL / M", size: "TBD", type: "PDF", url: "" },
  { name: "EX / EXM", size: "TBD", type: "PDF", url: "" },
  { name: "D", size: "TBD", type: "PDF", url: "" },
  { name: "K", size: "TBD", type: "PDF", url: "" },
  { name: "S", size: "TBD", type: "PDF", url: "" },
  { name: "TF", size: "TBD", type: "PDF", url: "" },
];

const downloads = {
  userManuals: documentSeries,
  specSheets: documentSeries,
};

function routeAttrs(locale, target) {
  const path = localizedPath(locale, target);
  return `href="#${path}" data-go="${path}"`;
}

export function SupportPage({ locale = "en", t }) {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">${t("support.hero.kicker")}</p>
        <h1>${t("support.hero.title")}</h1>
        <p>${t("support.hero.copy")}</p>
      </section>

      <section class="product-section" id="warranty">
        <div class="section-heading">
          <p class="kicker">${t("support.promise.kicker")}</p>
          <h2>${t("support.promise.title")}</h2>
        </div>
        <div class="feature-detail-grid">
          ${t("support.promise.cards").map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="product-section" id="spare-parts">
        <div class="section-heading">
          <p class="kicker">${t("support.spareParts.kicker")}</p>
          <h2>${t("support.spareParts.title")}</h2>
        </div>
        <div class="feature-detail-grid">
          ${t("support.spareParts.items").map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">${t("support.qa.kicker")}</p>
          <h2>${t("support.qa.title")}</h2>
        </div>
        <div class="qa-list">
          ${t("support.qa.questions").map(([question, answer]) => `
            <article>
              <h3>${question}</h3>
              <p>${answer}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="downloads" id="downloads">
        <div>
          <p class="kicker">${t("support.downloads.kicker")}</p>
          <h2>${t("support.downloads.title")}</h2>
        </div>
        <div class="support-downloads">
          ${downloadAccordion(t("support.downloads.userManuals"), t("support.downloads.selectSeries"), downloads.userManuals, t)}
          ${downloadAccordion(t("support.downloads.specSheets"), t("support.downloads.selectSeries"), downloads.specSheets, t)}
          ${downloadDisabledRow(t("support.downloads.productBrochures"), t("support.downloads.comingSoon"))}
          ${downloadDisabledRow(t("support.downloads.warrantyOverview"), t("support.downloads.comingSoon"))}
        </div>
      </section>

      <section class="product-inquiry">
        <p class="kicker">${t("support.cta.kicker")}</p>
        <h2>${t("support.cta.title")}</h2>
        <p>${t("support.cta.copy")}</p>
        <a class="hero-cta" ${routeAttrs(locale, "/contact")}>${t("actions.contactSupport")}</a>
      </section>
    </main>
  `;
}

function downloadAccordion(label, helper, documents, t) {
  return `
    <details class="support-download-row">
      <summary>
        <span class="support-download-title">
          <strong>${label}</strong>
          <small>${helper}</small>
        </span>
        <span class="support-download-chevron" aria-hidden="true"></span>
      </summary>
      <div class="support-download-panel">
        <div class="support-download-panel-inner">
          ${documents.map((item) => documentItem(item, t)).join("")}
        </div>
      </div>
    </details>
  `;
}

function downloadDisabledRow(label, status) {
  return `
    <div class="support-download-row is-disabled" aria-disabled="true">
      <div class="support-download-disabled-content">
        <span class="support-download-title">
          <strong>${label}</strong>
          <small>${status}</small>
        </span>
      </div>
    </div>
  `;
}

function documentItem(item, t) {
  const action = item.url
    ? `<a class="support-document-action" href="${item.url}" download aria-label="${t("support.downloads.downloadAriaPrefix")} ${item.name} ${item.type}">${downloadIcon()}</a>`
    : `<button class="support-document-action" type="button" disabled tabindex="-1" aria-label="${item.name} ${item.type} ${t("support.downloads.comingSoonAria")}">${downloadIcon()}</button>`;

  return `
    <article class="support-document-item">
      <span class="support-document-icon" aria-hidden="true">${pdfIcon()}</span>
      <span class="support-document-name">${item.name}</span>
      <span class="support-document-size">${item.size}</span>
      <span class="support-document-type">${item.type}</span>
      ${action}
    </article>
  `;
}

function pdfIcon() {
  return `
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M7 3h7l4 4v14H7z"></path>
      <path d="M14 3v5h5"></path>
      <path d="M8.8 16h6.4"></path>
    </svg>
  `;
}

function downloadIcon() {
  return `
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M12 4v10"></path>
      <path d="m8 10 4 4 4-4"></path>
      <path d="M6 19h12"></path>
    </svg>
  `;
}
