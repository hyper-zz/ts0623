const downloadGroups = [
  {
    label: "Product brochures",
    status: "Request document",
  },
  {
    label: "User manuals",
    status: "Request document",
  },
  {
    label: "Spec sheets",
    status: "Request document",
  },
  {
    label: "Certification documents",
    status: "Request document",
  },
];

const supportItems = [
  "Product use guidance",
  "Troubleshooting support",
  "Spare parts and accessory support",
  "Warranty and service communication",
  "Distributor service coordination",
];

const questions = [
  [
    "Can I request product specifications before ordering?",
    "Yes. Send the target model or product series and we will provide available specifications.",
  ],
  [
    "Do you support private label or packaging customization?",
    "Yes. Logo, color, packaging and documentation options can be discussed by project.",
  ],
  [
    "Can you support different markets and certifications?",
    "Certification support depends on product model and target market.",
  ],
  [
    "Where can I get manuals or brochures?",
    "Available documents can be downloaded here or requested through the contact page.",
  ],
  [
    "Do you provide after-sales support for distributors?",
    "Yes. Support can include usage guidance, troubleshooting, spare parts and service coordination.",
  ],
];

export function SupportPage() {
  return `
    <main class="page b2b-page">
      <section class="page-hero">
        <p class="kicker">Support</p>
        <h1>Product documents, support and service information.</h1>
        <p>Access manuals, brochures, specifications, after-sales information and common questions for Travel Science cooling products.</p>
      </section>

      <section class="downloads">
        <div>
          <p class="kicker">Downloads</p>
          <h2>Product documents.</h2>
        </div>
        <div class="download-list">
          ${downloadGroups.map(downloadLink).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">After-sales service</p>
          <h2>Support for use, service and distribution.</h2>
        </div>
        <div class="feature-detail-grid">
          ${supportItems.map((item) => `<article><h3>${item}</h3></article>`).join("")}
        </div>
      </section>

      <section class="product-section">
        <div class="section-heading">
          <p class="kicker">Q&A</p>
          <h2>Common questions.</h2>
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

      <section class="product-inquiry">
        <p class="kicker">Support request</p>
        <h2>Need a document or service answer?</h2>
        <p>Send the product series, model or question and we will point you to the right information.</p>
        <a class="hero-cta" href="#/contact" data-go="/contact">Contact support</a>
      </section>
    </main>
  `;
}

function downloadLink(item) {
  if (item.href) {
    return `<a href="${item.href}" download>${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
  }

  const subject = encodeURIComponent(`Request ${item.label}`);
  const body = encodeURIComponent(`Hello Travel Science team,\n\nPlease send the ${item.label.toLowerCase()}.\n\nThank you.`);
  return `<a href="mailto:info@kelvcoop.com?subject=${subject}&body=${body}">${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
}
