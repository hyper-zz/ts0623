import { socialLinks } from "../data/socialLinks.js";

const socialByLabel = new Map(socialLinks.map((link) => [link.label, link.href]));

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Compact Cooling", href: "#/products/compact-cooling", target: "/products/compact-cooling" },
      { label: "Large Capacity", href: "#/products/large-capacity", target: "/products/large-capacity" },
      { label: "Dual-zone Storage", href: "#/products/dual-zone-storage", target: "/products/dual-zone-storage" },
      { label: "Wheeled Mobility", href: "#/products/wheeled-mobility", target: "/products/wheeled-mobility" },
      { label: "View All Products", href: "#/products", target: "/products" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support", href: "#/support", target: "/support" },
      { label: "Manuals & Downloads", href: "#/support", target: "/support" },
      { label: "Accessories", href: "#/accessories", target: "/accessories" },
      { label: "Contact", href: "#/contact", target: "/contact" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Custom Projects", href: "#/custom-projects", target: "/custom-projects" },
      { label: "OEM / ODM", href: "#/custom-projects", target: "/custom-projects" },
      { label: "Distributor Inquiry", href: "#/contact", target: "/contact" },
      { label: "Request a Quote", href: "#/contact", target: "/contact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Community", href: "#/community", target: "/community" },
      { label: "Instagram", href: socialByLabel.get("Instagram"), external: true },
      { label: "Facebook", href: socialByLabel.get("Facebook"), external: true },
      { label: "X", href: socialByLabel.get("X"), external: true },
    ].filter((link) => link.href),
  },
  {
    title: "Company",
    links: [
      { label: "About Kelvcoop", href: "#/contact", target: "/contact" },
      { label: "Travel Science", href: "#/", target: "/" },
      { label: "Privacy Policy", href: "#/contact", target: "/contact" },
      { label: "Terms of Use", href: "#/contact", target: "/contact" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#/contact", target: "/contact" },
  { label: "Terms of Use", href: "#/contact", target: "/contact" },
];

function footerLink(link) {
  const attrs = link.external
    ? `href="${link.href}" target="_blank" rel="noopener noreferrer"`
    : `href="${link.href}" data-go="${link.target}"`;

  return `<a ${attrs}>${link.label}</a>`;
}

function footerColumn(column) {
  return `
    <nav class="footer-column" aria-label="${column.title}">
      <h2>${column.title}</h2>
      <ul>
        ${column.links.map((link) => `<li>${footerLink(link)}</li>`).join("")}
      </ul>
    </nav>
  `;
}

function footerAccordion(column) {
  return `
    <details class="footer-accordion">
      <summary>${column.title}</summary>
      <ul>
        ${column.links.map((link) => `<li>${footerLink(link)}</li>`).join("")}
      </ul>
    </details>
  `;
}

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-columns">
        ${footerColumns.map(footerColumn).join("")}
      </div>

      <div class="footer-accordions" aria-label="Footer navigation">
        ${footerColumns.map(footerAccordion).join("")}
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-identity">
          <span>Travel Science by Kelvcoop</span>
          <span>Copyright © 2026 Kelvcoop. All rights reserved.</span>
        </div>
        <div class="footer-bottom-links">
          ${bottomLinks.map(footerLink).join("")}
        </div>
      </div>
    </footer>
  `;
}
