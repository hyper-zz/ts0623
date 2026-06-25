import { HeroCarousel } from "../components/HeroCarousel.js";
import { ProductFamily } from "../components/ProductFamily.js";
import { ServiceEntryCards } from "../components/ServiceEntryCards.js";
import { ContactSection } from "../components/ContactSection.js";
import { businessEntries, categoryCopy } from "../data/homepage.js";
import { heroSlides } from "../data/heroSlides.js";
import { serviceCards } from "../data/serviceCards.js";

export function HomePage({ currentHeroSlide }) {
  return `
    <main>
      ${HeroCarousel({ slides: heroSlides, currentSlide: currentHeroSlide })}

      <div class="home-content-layer">
        ${ProductFamily({ categories: categoryCopy })}

        <section class="trust-line reveal">
          <p>Product specifications, customization and supply planning for outdoor cooling programs.</p>
        </section>

        ${ServiceEntryCards({ cards: serviceCards })}
        ${businessEntrySection()}
        ${ContactSection()}
      </div>
    </main>
  `;
}

function businessEntrySection() {
  return `
    <section class="b2b-entry reveal">
      <div class="section-heading">
        <p class="kicker">Work with Travel Science</p>
        <h2>Products, custom projects and support in one place.</h2>
      </div>
      <div class="entry-card-grid">
        ${businessEntries.map((entry) => `
          <a class="entry-card" href="${entry.href}" data-go="${entry.target}">
            <h3>${entry.title}</h3>
            <p>${entry.text}</p>
            <span>${entry.cta} →</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}
