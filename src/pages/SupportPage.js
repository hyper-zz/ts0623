const philosophyCards = [
  ["1-Year Whole Unit", "Basic product coverage for confirmed manufacturing issues."],
  ["3-Year Cooling System", "Extended support for compressor cooling system concerns."],
  ["Wholesale Spare Parts", "Parts planning for distributors, fleets and service partners."],
  ["Technical Support", "Model guidance, troubleshooting and service communication."],
];

const sparePartsItems = [
  ["Recommended packages", "Wholesale orders can include recommended spare parts packages based on order quantity."],
  ["Model-based planning", "Parts support is planned around product series, market and after-sales needs."],
  ["Distributor coordination", "We help partners prepare practical spare parts lists for service teams."],
];

const questions = [
  [
    "What is covered by the warranty?",
    "Warranty support focuses on confirmed product or cooling-system issues within the stated coverage period.",
  ],
  [
    "How do wholesale spare parts work?",
    "Spare parts can be planned with wholesale orders based on model mix, quantity and service requirements.",
  ],
  [
    "What information should I provide for support?",
    "Please share product series, model, order context, photos or video, and a clear issue description.",
  ],
  [
    "Can you help with troubleshooting remotely?",
    "Yes. We can review basic operating details and guide next steps before parts or service coordination.",
  ],
];

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

export function SupportPage() {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">Support Center</p>
        <h1>Everything you need after delivery.</h1>
        <p>Manuals, warranty guidance, spare parts support and technical help for Travel Science cooling products.</p>
      </section>

      <section class="product-section" id="warranty">
        <div class="section-heading">
          <p class="kicker">Service philosophy</p>
          <h2>Built to last. Supported to stay.</h2>
        </div>
        <div class="feature-detail-grid">
          ${philosophyCards.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="product-section" id="spare-parts">
        <div class="section-heading">
          <p class="kicker">Spare Parts Program</p>
          <h2>Parts support for wholesale partners.</h2>
        </div>
        <div class="feature-detail-grid">
          ${sparePartsItems.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">Support Q&A</p>
          <h2>Common service questions.</h2>
        </div>
        <div class="qa-list">
          ${questions.map(([question, answer]) => `
            <article>
              <h3>${question}</h3>
              <p>${answer}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="downloads" id="downloads">
        <div>
          <p class="kicker">Downloads</p>
          <h2>Product documents.</h2>
        </div>
        <div class="support-downloads">
          ${downloadAccordion("User manuals", "Select a series", downloads.userManuals)}
          ${downloadDisabledRow("Product brochures", "Coming soon")}
          ${downloadAccordion("Spec sheets", "Select a series", downloads.specSheets)}
          ${downloadDisabledRow("Warranty overview", "Coming soon")}
        </div>
      </section>

      <section class="product-inquiry">
        <p class="kicker">Support request</p>
        <h2>Still need help?</h2>
        <p>Send the product series, model and support topic so we can route your request.</p>
        <a class="hero-cta" href="#/contact" data-go="/contact">Contact Support</a>
      </section>
    </main>
  `;
}

function downloadAccordion(label, helper, documents) {
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
          ${documents.map(documentItem).join("")}
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

function documentItem(item) {
  const action = item.url
    ? `<a class="support-document-action" href="${item.url}" download aria-label="Download ${item.name} ${item.type}">${downloadIcon()}</a>`
    : `<button class="support-document-action" type="button" disabled aria-label="${item.name} ${item.type} coming soon">${downloadIcon()}</button>`;

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
