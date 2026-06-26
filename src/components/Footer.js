import { socialLinks } from "../data/socialLinks.js";
import { localizedPath, translate } from "../i18n/index.js";

const socialByLabel = new Map(socialLinks.map((link) => [link.label, link.href]));

const footerColumns = [
  {
    titleKey: "footer.products",
    links: [
      { labelKey: "footer.viewAllProducts", href: "#/products", target: "/products" },
      { labelKey: "footer.compactModels", href: "#/products/compact-cooling", target: "/products/compact-cooling" },
      { labelKey: "footer.dualZoneModels", href: "#/products/dual-zone-storage", target: "/products/dual-zone-storage" },
      { labelKey: "footer.wheeledModels", href: "#/products/wheeled-mobility", target: "/products/wheeled-mobility" },
      { labelKey: "footer.toolBatteryModels", href: "#/products/s-series", target: "/products/s-series" },
    ],
  },
  {
    titleKey: "footer.projects",
    links: [
      { labelKey: "footer.customProjects", href: "#/custom-projects", target: "/custom-projects" },
      { labelKey: "footer.platformCustomisation", href: "#/custom-projects", target: "/custom-projects" },
      { labelKey: "footer.privateMouldDevelopment", href: "#/custom-projects", target: "/custom-projects" },
      { labelKey: "footer.contact", href: "#/contact", target: "/contact" },
    ],
  },
  {
    titleKey: "footer.support",
    links: [
      { labelKey: "footer.supportCenter", href: "#/support", target: "/support" },
      { labelKey: "footer.userManuals", href: "#/support#downloads", target: "/support#downloads" },
      { labelKey: "footer.specSheets", href: "#/support#downloads", target: "/support#downloads" },
      { labelKey: "footer.sparePartsSupport", href: "#/support#spare-parts", target: "/support#spare-parts" },
    ],
  },
  {
    titleKey: "footer.follow",
    links: [
      { label: "LinkedIn", href: socialByLabel.get("LinkedIn"), external: true },
      { label: "Facebook", href: socialByLabel.get("Facebook"), external: true },
      { label: "Instagram", href: socialByLabel.get("Instagram"), external: true },
      { label: "TikTok", href: socialByLabel.get("TikTok"), external: true },
      { label: "X", href: socialByLabel.get("X"), external: true },
    ].filter((link) => link.href),
  },
  {
    titleKey: "footer.company",
    links: [
      { labelKey: "footer.travelScience", href: "#/", target: "/" },
      { labelKey: "footer.privacy", href: "#/contact", target: "/contact" },
      { labelKey: "footer.terms", href: "#/contact", target: "/contact" },
    ],
  },
];

const bottomLinks = [
];

function footerLink(link, locale) {
  const label = link.labelKey ? translate(locale, link.labelKey) : link.label;
  const attrs = link.external
    ? `href="${link.href}" target="_blank" rel="noopener noreferrer"`
    : `href="#${localizedPath(locale, link.target)}" data-go="${localizedPath(locale, link.target)}"`;

  return `<a ${attrs}>${label}</a>`;
}

function footerColumn(column, locale) {
  const title = translate(locale, column.titleKey);

  return `
    <nav class="footer-column" aria-label="${title}">
      <h2>${title}</h2>
      <ul>
        ${column.links.map((link) => `<li>${footerLink(link, locale)}</li>`).join("")}
      </ul>
    </nav>
  `;
}

function footerAccordion(column, locale) {
  const title = translate(locale, column.titleKey);

  return `
    <details class="footer-accordion">
      <summary>${title}</summary>
      <ul>
        ${column.links.map((link) => `<li>${footerLink(link, locale)}</li>`).join("")}
      </ul>
    </details>
  `;
}

export function Footer({ locale = "en" } = {}) {
  return `
    <footer class="site-footer">
      <div class="footer-columns">
        ${footerColumns.map((column) => footerColumn(column, locale)).join("")}
      </div>

      <div class="footer-accordions" aria-label="${translate(locale, "footer.navigationAria")}">
        ${footerColumns.map((column) => footerAccordion(column, locale)).join("")}
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-identity">
          <span>${translate(locale, "footer.brand")}</span>
          <span>${translate(locale, "footer.tagline")}</span>
          <span>${translate(locale, "footer.copyright")}</span>
        </div>
        ${bottomLinks.length ? `<div class="footer-bottom-links">
          ${bottomLinks.map((link) => footerLink(link, locale)).join("")}
        </div>` : ""}
      </div>
    </footer>
  `;
}
