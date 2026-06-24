import { socialLinks } from "../data/socialLinks.js";

export function Footer() {
  return `
    <footer>
      <span>TRAVEL SCIENCE</span>
      <span>Outdoor technology by Kelvcoop.</span>
      <div class="footer-social">
        <p>Follow Travel Science</p>
        <div class="footer-social-links">
          ${socialLinks.map((link) => `
            <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
          `).join("")}
        </div>
      </div>
    </footer>
  `;
}
