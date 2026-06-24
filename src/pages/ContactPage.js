import { socialLinks } from "../data/socialLinks.js";

export function ContactPage() {
  const subject = encodeURIComponent("Travel Science product inquiry");
  const body = encodeURIComponent(
    "Hello Travel Science team,\n\nI would like to request product details, distributor cooperation information, or custom project support.\n\nThank you.",
  );

  return `
    <main class="page contact-page">
      <section class="page-hero reveal">
        <p class="kicker">Contact Travel Science</p>
        <h1>Product details, distributor cooperation and custom projects.</h1>
        <p>Travel Science is backed by Kelvcoop for portable cooling product development, manufacturing and export support.</p>
        <a class="hero-cta" href="mailto:info@kelvcoop.com?subject=${subject}&body=${body}">info@kelvcoop.com</a>
      </section>

      <section class="specs reveal">
        <div>
          <p class="kicker">by Kelvcoop</p>
          <h2>Request the next step.</h2>
        </div>
        <dl>
          <div><dt>Email</dt><dd>info@kelvcoop.com</dd></div>
          <div><dt>Phone</dt><dd>Available on request</dd></div>
          <div><dt>Address</dt><dd>Kelvcoop manufacturing and export office, China</dd></div>
          <div><dt>Contact type</dt><dd>Product details, distributor cooperation, custom projects and service questions</dd></div>
        </dl>
      </section>

      <section class="contact-social reveal">
        <p class="kicker">Follow Travel Science</p>
        <h2>Connect with us for product updates, project references and distributor information.</h2>
        <div class="contact-social-links">
          ${socialLinks.map((link) => `
            <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
          `).join("")}
        </div>
      </section>
    </main>
  `;
}
