import { HeroCarousel } from "../components/HeroCarousel.js";
import { ProductFamily } from "../components/ProductFamily.js";
import { ServiceEntryCards } from "../components/ServiceEntryCards.js";
import { ContactSection } from "../components/ContactSection.js";
import { heroSlides } from "../data/heroSlides.js";

export function HomePage({ currentHeroSlide, locale = "en", t }) {
  return `
    <main>
      ${HeroCarousel({ slides: heroSlides, currentSlide: currentHeroSlide })}

      <div class="home-content-layer">
        ${ProductFamily({ categories: t("home.families.cards"), locale, t })}

        ${ServiceEntryCards({ cards: t("home.serviceCards"), locale })}
        ${ContactSection({ t })}
      </div>
    </main>
  `;
}
