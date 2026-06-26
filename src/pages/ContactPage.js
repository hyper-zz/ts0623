import { socialLinks } from "../data/socialLinks.js";

const socialOrder = ["LinkedIn", "Facebook", "Instagram", "TikTok", "X"];

const socialIcons = {
  LinkedIn: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.25h4.4V23H.3V8.25Zm7.2 0h4.22v2.02h.06c.59-1.11 2.03-2.28 4.18-2.28 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.31c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V23H7.5V8.25Z"/>
    </svg>
  `,
  Facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"/>
    </svg>
  `,
  Instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"/>
    </svg>
  `,
  TikTok: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M17.12 1.52c.36 3.08 2.08 4.91 5.07 5.1v3.46a8.77 8.77 0 0 1-5.02-1.58v6.47c0 8.22-8.96 10.8-12.56 4.9-2.31-3.79-.9-10.45 6.52-10.72v3.65c-.5.08-1.04.2-1.53.36-1.47.5-2.3 1.43-2.07 3.08.44 3.15 6.22 4.08 5.74-2.07V1.52h3.85Z"/>
    </svg>
  `,
  X: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M18.9 1.5h3.68l-8.04 9.18L24 23.18h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.5h7.59l5.24 6.93L18.9 1.5Zm-1.29 19.48h2.04L6.48 3.59H4.29l13.32 17.39Z"/>
    </svg>
  `,
};

const getSocialSlug = (label) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function ContactPage({ t }) {
  const subject = encodeURIComponent(t("contact.emailSubject"));
  const body = encodeURIComponent(t("contact.emailBody"));
  const socialTitle = t("contact.social.title").replace(/\.$/, "");
  const socialByLabel = new Map(socialLinks.map((link) => [link.label, link]));
  const contactSocialLinks = socialOrder.map((label) => ({
    label,
    href: socialByLabel.get(label)?.href ?? "",
  })).filter((link) => link.href);

  return `
    <main class="page contact-page">
      <section class="page-hero reveal">
        <p class="kicker">${t("contact.hero.kicker")}</p>
        <h1>${t("contact.hero.title")}</h1>
        <p>${t("contact.hero.copy")}</p>
        <a class="hero-cta" href="mailto:info@kelvcoop.com?subject=${subject}&body=${body}">info@kelvcoop.com</a>
      </section>

      <section class="contact-social reveal">
        <p class="kicker">${t("contact.social.kicker")}</p>
        <h2>${socialTitle}<span class="accent-dot">.</span></h2>
        <div class="contact-social-links">
          ${contactSocialLinks.map((link) => `
            <a class="contact-social-card contact-social-card--${getSocialSlug(link.label)}" href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="Follow Travel Science on ${link.label}">
              <span class="contact-social-icon">${socialIcons[link.label] ?? ""}</span>
              <span>${link.label}</span>
            </a>
          `).join("")}
        </div>
      </section>
    </main>
  `;
}
