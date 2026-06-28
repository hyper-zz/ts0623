# Travel Science Website Content Map

Purpose: central index for visible website copy so future English copy edits can be made from the right source file without searching the full project.

## Home

### Hero

- Render path: `src/pages/HomePage.js` -> `src/components/HeroCarousel.js`
- Data source: `src/data/heroSlides.js`
- Copy includes: slide eyebrow, badge, title, supporting text, feature chips, CTA labels, hero image alt text, and slide targets.
- Notes: product series names and CTA destinations for the homepage hero are controlled in `heroSlides.js`, not `i18n/en.js`.

### Product Families

- Render path: `src/pages/HomePage.js` -> `src/components/ProductFamily.js`
- Data source: `src/i18n/en.js`
- Keys:
  - `home.families.kicker`
  - `home.families.title`
  - `home.families.openPrefix`
  - `home.families.cards`
- Copy includes: section kicker, section title, four family card names, labels, images, and route targets.

### Accessories Card

- Render path: `src/pages/HomePage.js` -> `src/components/ServiceEntryCards.js`
- Data source: `src/i18n/en.js`
- Key: `home.serviceCards[0]`
- Copy includes: eyebrow, title, supporting copy, button text, image, image position, and route target.

### Custom Projects Card

- Render path: `src/pages/HomePage.js` -> `src/components/ServiceEntryCards.js`
- Data source: `src/i18n/en.js`
- Key: `home.serviceCards[1]`
- Copy includes: eyebrow, title, supporting copy, button text, image, image position, and route target.

### Community Card

- Render path: `src/pages/HomePage.js` -> `src/components/ServiceEntryCards.js`
- Data source: `src/i18n/en.js`
- Key: `home.serviceCards[2]`
- Copy includes: eyebrow, title, supporting copy, button text, image, image position, and route target.

### Inquiry CTA

- Render path: `src/pages/HomePage.js` -> `src/components/ContactSection.js`
- Data source: `src/i18n/en.js`
- Keys:
  - `home.contact.kicker`
  - `home.contact.title`
  - `home.contact.copy`
- Hardcoded in component: `info@kelvcoop.com`

## Products Page

- Render path: `src/pages/ProductsPage.js`
- Page hero source: hardcoded `Products` kicker in `src/pages/ProductsPage.js`
- Product grid data source: `src/data/products.js`
- Product card render path: `src/components/ProductCard.js`
- Product card copy sources:
  - Product name: `products[].name` in `src/data/products.js`
  - Model count: `products[].models.length` rendered as `${count} models` in `src/components/ProductCard.js`
  - Headline: `productHeadline(product)` from `src/data/products.js`, mainly `productPositioning`
  - Intro: `productIntro(product)` from `src/data/products.js`, mainly `productPositioning`
  - CTA: hardcoded `Explore` in `src/components/ProductCard.js`
  - Link aria label: hardcoded `Open ${product.name}` in `src/components/ProductCard.js`
- Inquiry CTA source: `src/components/ContactSection.js` + `src/i18n/en.js` `home.contact`

### Product Family Pages

- Render path: `src/pages/ProductFamilyPage.js`
- Family data source: `src/data/productFamilies.js`
- Copy includes: family eyebrow, title, summary, description, features, use cases, related products.
- Template hardcoded copy in `src/pages/ProductFamilyPage.js` includes breadcrumbs, section headings, specification labels, CTAs, and helper text.

## Product Detail Template

Render path: `src/components/ProductDetailTemplate.js`

### Hero Title

- Source: `src/data/products.js`
- Field: `product.name`
- Rendered as product detail `<h1>`.

### Hero Supporting Copy

- Source: `src/data/products.js`
- Functions:
  - `productHeadline(product)`
  - `productIntro(product)`
- Main data object: `productPositioning`
- Fallback source: product entry `intro` in `products`.

### Statement

- Source: `src/data/products.js`
- Field: `product.application`
- Rendered only when `product.application` exists.

### Feature Cards

- Source: `src/data/products.js`
- Fields:
  - `product.featureDetails`
  - fallback: `product.highlights`
- Template: first four feature/detail items rendered in `src/components/ProductDetailTemplate.js`.

### Specifications

- Source values: `src/data/products.js`
- Fields:
  - `product.modelDetails`
  - fallback fields: `capacity`, `voltage`, `cooling`, `application`
- Template labels and headings: `src/components/ProductDetailTemplate.js`
- Hardcoded template copy includes:
  - `Technical features`
  - `Performance, resolved quietly.`
  - `Model specifications`
  - `Choose the capacity that fits the route.`
  - row labels such as `Capacity`, `Voltage`, `Cooling`, `Temperature`, `Product size`, `Packing size`, `Net weight`, `Gross weight`, `Power`, `Loading QTY`, `Application`

### Engineering

- Core features source: `src/data/products.js` `product.featureDetails`
- Materials source: `src/data/products.js` `product.materials`
- Template copy source: `src/components/ProductDetailTemplate.js`
- Hardcoded template copy includes:
  - `Core features`
  - `Engineering Details`
  - `Materials`
  - `Durable structure, clearly specified.`

### Applications

- Source: `src/data/products.js`
- Field: `product.useCases`
- Template copy source: `src/components/ProductDetailTemplate.js`
- Hardcoded template copy includes:
  - `Usage scenarios`
  - `Made for longer routes.`

### Downloads

- Source values: `src/data/products.js`
- Field: `product.documents`
- Template source: `src/components/ProductDetailTemplate.js`
- Hardcoded template copy includes:
  - `Downloads`
  - `Product documents.`
  - `Product brochure`
  - `User manual`
  - `Spec sheet`
  - `Certification documents`
  - `Download`
  - `Request document`
- Mailto fallback copy is also hardcoded in `documentLink()`.

### Related Products

- Related product data source: `src/data/products.js`
- Related card template: `src/components/ProductCard.js`
- Template copy source: `src/components/ProductDetailTemplate.js`
- Hardcoded heading copy:
  - `Continue exploring`
  - `More Travel Science systems.`

### Inquiry CTA

- Source: `src/data/products.js`
- Field: `product.inquiryFocus`
- Helper: `inquiry(seriesName, text)` in `src/data/products.js`
- Template source: `src/components/ProductDetailTemplate.js`
- Hardcoded template copy includes:
  - `Inquiry`
  - mailto subject behavior

## Support

- Render path: `src/pages/SupportPage.js`
- Main copy source: `src/i18n/en.js`
- Keys:
  - `support.hero`
  - `support.promise`
  - `support.spareParts`
  - `support.qa`
  - `support.downloads`
  - `support.cta`
  - `actions.contactSupport`
- Download series list source: `src/pages/SupportPage.js` `documentSeries`
- Download accordion structure, icons, disabled row behavior, and document item layout: `src/pages/SupportPage.js`
- Section anchors in template:
  - `id="warranty"`
  - `id="spare-parts"`
  - `id="downloads"`

## Accessories

- Render path: `src/pages/AccessoriesPage.js`
- Main copy source: `src/i18n/en.js`
- Keys:
  - `accessories.hero`
  - `accessories.gallery`
  - `accessories.categories`
  - `accessories.suitableFor`
  - `accessories.cta`
  - `actions.contactUs`
- Gallery image paths and alt text source: `src/i18n/en.js` `accessories.gallery.items`
- Gallery scroll button labels source: `src/i18n/en.js` `accessories.gallery.previous` and `accessories.gallery.next`

## Custom Projects

- Render path: `src/pages/CustomProjectsPage.js`
- Main copy source: `src/i18n/en.js`
- Keys:
  - `customProjects.hero`
  - `customProjects.options`
  - `customProjects.process`
  - `customProjects.suitableFor`
  - `customProjects.cta`
  - `actions.startCustomProject`
- Process numbering is generated in `src/pages/CustomProjectsPage.js`.

## Community

- Render path: `src/pages/CommunityPage.js`
- Page copy source: `src/i18n/en.js`
- Keys:
  - `community.breadcrumbHome`
  - `community.breadcrumbCurrent`
  - `community.label`
  - `community.headline`
  - `community.note`
  - `community.heroAlt`
  - `community.ending`
  - `community.crew`
- Crew/social data source: `src/data/socialCrew.js`
- Crew/social data includes: person name, platform names, platform icon id, avatar image, accent color, link labels, and href values.
- Inline social SVGs and crew card rendering live in `src/pages/CommunityPage.js`.
- Hero image source: `src/data/socialCrew.js` `communityHeroImage`.

## Contact

- Render path: `src/pages/ContactPage.js`
- Main copy source: `src/i18n/en.js`
- Keys:
  - `contact.emailSubject`
  - `contact.emailBody`
  - `contact.hero`
  - `contact.specs`
  - `contact.social`
- Social links source: `src/data/socialLinks.js`
- Hardcoded in template: external social link attributes `target="_blank"` and `rel="noopener noreferrer"`.

## Header And Navigation

- Render path: `src/components/Header.js`
- Main navigation labels source: `src/i18n/en.js`
- Keys:
  - `nav`
  - `theme`
  - `language`
  - selected `footer.*` keys for product dropdown group headings
- Product dropdown group data source: `src/components/Header.js` `productMenuGroups`
- Mobile product menu data source: `src/components/Header.js` `mobileProductMenuItems`
- Support dropdown data source: `src/components/Header.js` `supportMenuItems`
- Product route helper source: `src/data/products.js` `productPath()` and `productSlugs`
- Localized route helper source: `src/i18n/index.js`

## Footer

- Render path: `src/components/Footer.js`
- Footer label source: `src/i18n/en.js`
- Keys:
  - `footer`
- Footer column structure source: `src/components/Footer.js` `footerColumns`
- Bottom bar structure source: `src/components/Footer.js` `bottomLinks`
- Social href source: `src/data/socialLinks.js`

## Quick Edit Index

- Home Hero: `src/data/heroSlides.js`
- Home Product Families section title/cards: `src/i18n/en.js` `home.families`
- Home Accessories Card: `src/i18n/en.js` `home.serviceCards[0]`
- Home Custom Projects Card: `src/i18n/en.js` `home.serviceCards[1]`
- Home Community Card: `src/i18n/en.js` `home.serviceCards[2]`
- Home Inquiry CTA: `src/i18n/en.js` `home.contact`
- Products Page hero kicker: `src/pages/ProductsPage.js`
- Product card CTA and microcopy: `src/components/ProductCard.js`
- Product card/product detail names, models, specs, feature copy: `src/data/products.js`
- Product detail hero for AX: `src/data/products.js` `productPositioning.ax`
- Product detail hero for B: `src/data/products.js` `productPositioning.b`
- Product detail hero for GL: `src/data/products.js` `productPositioning.gl`
- Product detail hero for M: `src/data/products.js` `productPositioning.m`
- Product detail hero for EX: `src/data/products.js` `productPositioning.ex`
- Product detail hero for EXM: `src/data/products.js` `productPositioning.exm`
- Product detail hero for D: `src/data/products.js` `productPositioning.d`
- Product detail hero for K: `src/data/products.js` `productPositioning.k`
- Product detail hero for S: `src/data/products.js` `productPositioning.s`
- Product detail hero for TF: `src/data/products.js` `productPositioning.tf`
- Product detail template section headings/spec/download labels: `src/components/ProductDetailTemplate.js`
- Product family pages: `src/data/productFamilies.js`
- Product family page template labels and CTAs: `src/pages/ProductFamilyPage.js`
- Support Hero: `src/i18n/en.js` `support.hero`
- Support Service Promise: `src/i18n/en.js` `support.promise`
- Support Spare Parts Program: `src/i18n/en.js` `support.spareParts`
- Support Q&A: `src/i18n/en.js` `support.qa`
- Support Downloads labels: `src/i18n/en.js` `support.downloads`
- Support Downloads series list: `src/pages/SupportPage.js` `documentSeries`
- Support CTA: `src/i18n/en.js` `support.cta`
- Accessories Hero/Gallery/Categories/CTA: `src/i18n/en.js` `accessories`
- Community Page hero/CTA/ending copy: `src/i18n/en.js` `community`
- Community crew names/platforms/social hrefs: `src/data/socialCrew.js`
- Community inline social SVG rendering: `src/pages/CommunityPage.js`
- Contact Hero/spec/social copy: `src/i18n/en.js` `contact`
- Contact social hrefs: `src/data/socialLinks.js`
- Custom Projects page: `src/i18n/en.js` `customProjects`
- Header navigation labels: `src/i18n/en.js` `nav`, `theme`, `language`
- Header product dropdown groups: `src/components/Header.js` `productMenuGroups`
- Footer labels: `src/i18n/en.js` `footer`
- Footer column/link structure: `src/components/Footer.js`
