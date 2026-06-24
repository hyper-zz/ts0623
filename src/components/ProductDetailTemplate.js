import { ContactSection } from "./ContactSection.js";
import { ProductCard } from "./ProductCard.js";
import { galleryManifest } from "../data/galleryManifest.js";
import { productImageManifest } from "../data/productImageManifest.js";
import { productHeadline, productIntro } from "../data/products.js";

export function ProductDetailTemplate({ product, related = [] }) {
  return `
    <main class="product-page">
      <section class="product-hero product-config-panel reveal" ${productHeroState(product)}>
        <div class="product-hero-copy product-config-copy">
          <nav class="breadcrumb product-config-breadcrumb" aria-label="Breadcrumb">
            <a href="#/" data-go="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="#/products" data-go="/products">Products</a>
            <span aria-hidden="true">/</span>
            <span>${product.name}</span>
          </nav>
          <h1>${product.name}</h1>
          <h2>${withAccentPeriod(productHeadline(product))}</h2>
          <p>${productIntro(product)}</p>
        </div>
        <div class="product-config-controls">
          ${modelSelector(product)}
          ${colorSelector(product)}
        </div>
        <div class="product-hero-media product-config-visual">
          <img class="${product.id === "gl" ? "gl-product-hero-image" : ""}" data-product-hero-image src="${productHeroImage(product)}" alt="${product.alt || product.name}">
        </div>
      </section>

      <section class="statement reveal">
        <p>${product.application}</p>
      </section>

      <section class="detail-grid reveal">
        ${(product.featureDetails || product.highlights.map((title) => ({ title })))
          .slice(0, 4)
          .map((item) => `<article><span></span><h3>${item.title}</h3>${item.text ? `<p>${item.text}</p>` : ""}</article>`)
          .join("")}
      </section>

      ${modelSpecifications(product)}
      ${gallerySection(product)}
      ${coreFeatures(product)}
      ${materialsSection(product)}
      ${useCasesSection(product)}
      ${certificationsSection(product)}
      ${downloadsSection(product)}
      ${inquirySection(product)}

      <section class="related reveal">
        <div class="section-heading">
          <p class="kicker">Continue exploring</p>
          <h2>More Travel Science systems.</h2>
        </div>
        <div class="related-grid">
          ${related.map(ProductCard).join("")}
        </div>
      </section>
      ${ContactSection()}
    </main>
  `;
}

function withAccentPeriod(text) {
  if (!text) return "";
  return text.endsWith(".")
    ? `${text.slice(0, -1)}<span class="period-accent">.</span>`
    : text;
}

function productHeroState(product) {
  const imageMap = productImageMap(product);
  if (!imageMap) return "";
  const { model, color } = resolveProductSelection(product);
  return `data-product-hero data-selected-model="${model}" data-selected-color="${color}" data-fallback-image="${product.image}" data-product-images='${JSON.stringify(imageMap)}'`;
}

function productHeroImage(product) {
  const imageMap = productImageMap(product);
  const { model, color } = resolveProductSelection(product);
  return productImageForVariant(imageMap, model, color) || product.image;
}

function productImageMap(product) {
  if (Object.prototype.hasOwnProperty.call(productImageManifest, product.id)) {
    return productImageManifest[product.id] || {};
  }

  return product.productImages || null;
}

function productImageForVariant(imageMap, model, color) {
  if (!model || !color) return "";
  return imageMap?.[model]?.[color] || "";
}

function resolveProductSelection(product) {
  const imageMap = productImageMap(product);
  const models = product.modelOptions || product.models || [];
  const colors = product.colorOptions || [];
  const defaultModel = product.defaultModel || models[0] || "";
  const defaultColor = product.defaultColor || colors[0]?.value || "";

  if (productImageForVariant(imageMap, defaultModel, defaultColor)) {
    return { model: defaultModel, color: defaultColor };
  }

  for (const model of models) {
    for (const color of colors) {
      if (productImageForVariant(imageMap, model, color.value)) {
        return { model, color: color.value };
      }
    }
  }

  return { model: defaultModel, color: defaultColor };
}

function modelSelector(product) {
  const models = product.modelOptions || product.modelDetails?.map((model) => model.name);
  const imageMap = productImageMap(product);
  if (!imageMap || !models?.length) return "";
  const activeModel = resolveProductSelection(product).model;

  return `
    <div class="model-selector" aria-label="Select model">
      <span class="model-label">SELECT MODEL</span>
      <div class="model-tabs">
        ${models.map((model) => `
          <button
            class="model-tab ${model === activeModel ? "active" : ""}"
            type="button"
            data-product-model
            data-product-model-value="${model}"
            aria-pressed="${model === activeModel ? "true" : "false"}">
            ${model}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function colorSelector(product) {
  if (!product.colorOptions?.length) return "";
  const imageMap = productImageMap(product);
  const { model: activeModel, color: activeColor } = resolveProductSelection(product);

  return `
    <div class="product-color-selector" aria-label="${product.name} available colors">
      <p>Color</p>
      <div class="product-color-options">
        ${product.colorOptions.map((option) => {
          const isActive = option.value === activeColor;
          const isAvailable = !imageMap || Boolean(productImageForVariant(imageMap, activeModel, option.value));
          return `
            <button
              class="product-color-option ${isActive ? "is-active" : ""} ${isAvailable ? "" : "is-unavailable"}"
              type="button"
              data-product-color
              data-product-color-value="${option.value}"
              aria-pressed="${isActive ? "true" : "false"}"
              aria-disabled="${isAvailable ? "false" : "true"}"
              ${isAvailable ? "" : "disabled"}>
              ${colorSwatch(option)}
              <span>${option.name}</span>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function colorSwatch(option) {
  const colors = option.swatches || [option.swatch || option.value];
  const fallback = option.swatch || colors[0] || option.value;
  const segments = colors.length > 1
    ? colors.map((color) => `<span class="product-color-swatch-dot" style="--swatch-dot: ${color}"></span>`).join("")
    : "";

  return `
    <span class="product-color-swatch" style="--swatch: ${fallback}" aria-hidden="true">
      ${segments}
    </span>
  `;
}

function modelSpecifications(product) {
  if (!product.modelDetails?.length) {
    return `
      <section class="specs reveal">
        <div>
          <p class="kicker">Technical features</p>
          <h2>Performance, resolved quietly.</h2>
        </div>
        <dl>
          ${spec("Capacity", product.capacity)}
          ${spec("Voltage", product.voltage)}
          ${spec("Cooling", product.cooling)}
          ${spec("Application", product.application)}
        </dl>
      </section>
    `;
  }

  return `
    <section class="model-specs reveal">
      <div class="section-heading">
        <p class="kicker">Model specifications</p>
        <h2>Choose the capacity that fits the route.</h2>
      </div>
      <div class="horizontal-bleed" data-horizontal-shell>
        ${horizontalControls()}
        <div class="horizontal-scroll" data-horizontal-scroll>
          <div class="model-spec-grid horizontal-track">
            ${product.modelDetails.map(modelSpecCard).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function modelSpecCard(model) {
  const rows = [
    ["Capacity", model.capacity],
    ["Voltage", model.voltage],
    ["Cooling", model.cooling],
    ["Temperature", model.temperatureRange],
    ["Product size", model.productDimensions],
    ["Packing size", model.packingSize],
    ["Net weight", model.netWeight],
    ["Gross weight", model.grossWeight],
    ["Power", model.powerConsumption],
    ["Loading QTY", model.loadingQty],
    ["Application", model.application],
  ];

  return `
    <article class="model-spec-card" id="${model.id}">
      <h3>${model.name}</h3>
      <dl>
        ${rows.map(([label, value]) => spec(label, value)).join("")}
      </dl>
    </article>
  `;
}

function horizontalControls() {
  return `
    <div class="horizontal-control-row">
      <button class="scroll-arrow scroll-arrow--prev" type="button" data-horizontal-prev aria-label="Scroll previous"><span class="scroll-arrow-icon" aria-hidden="true">&larr;</span></button>
      <button class="scroll-arrow scroll-arrow--next" type="button" data-horizontal-next aria-label="Scroll next"><span class="scroll-arrow-icon" aria-hidden="true">&rarr;</span></button>
    </div>
  `;
}

function gallerySection(product) {
  const galleryItems = galleryManifest[product.id]?.length
    ? galleryManifest[product.id]
    : product.gallery;
  const gallery = (galleryItems || []).filter((item) => item?.src || item?.image);
  if (!gallery.length) return "";

  const sectionClass = "gl-product-gallery-section reveal";
  const trackClass = "gallery-track gl-product-gallery-track";
  const cardClass = ` class="gl-product-gallery-card"`;
  const imageClass = ` class="gl-product-gallery-image"`;
  const headingClass = "section-heading gl-product-gallery-heading";
  const heading = `
    <div class="${headingClass}">
      <p class="kicker">Product gallery</p>
      ${product.id === "gl" ? "<h2>Product structure and key details.</h2>" : ""}
    </div>
  `;
  const cards = gallery
    .map(
      (item) => `
        <article${cardClass}>
          <div class="gl-product-gallery-image-frame">
            <img${imageClass} src="${item.src || item.image}" alt="${item.alt || item.title || product.name}" draggable="false" onerror="this.closest('article')?.remove()">
          </div>
          <div class="gl-product-gallery-body">
            ${item.title ? `<h3>${item.title}</h3>` : ""}
            ${item.text ? `<p>${item.text}</p>` : ""}
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section class="${sectionClass}">
      <div class="gl-product-gallery-inner">
        ${heading}
      </div>
      <div class="gl-product-gallery-viewport">
        ${horizontalControls()}
        <div class="gallery-scroller" data-horizontal-scroll>
          <div class="${trackClass}" data-horizontal-track>
            ${cards}
          </div>
        </div>
      </div>
    </section>
  `;
}

function coreFeatures(product) {
  if (!product.featureDetails?.length) return "";

  return `
    <section class="product-section reveal">
      <div class="section-heading">
        <p class="kicker">Core features</p>
        <h2>Engineering Details</h2>
      </div>
      <div class="feature-detail-grid">
        ${product.featureDetails.map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function materialsSection(product) {
  if (!product.materials?.length) return "";

  return `
    <section class="specs reveal">
      <div>
        <p class="kicker">Materials</p>
        <h2>Durable structure, clearly specified.</h2>
      </div>
      <dl>
        ${product.materials.map((item) => spec(item.part, item.material)).join("")}
      </dl>
    </section>
  `;
}

function useCasesSection(product) {
  if (!product.useCases?.length) return "";

  return `
    <section class="product-section reveal">
      <div class="section-heading">
        <p class="kicker">Usage scenarios</p>
        <h2>Made for longer routes.</h2>
      </div>
      <div class="use-case-grid">
        ${product.useCases.map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function certificationsSection(product) {
  if (!product.certifications?.length) return "";

  return `
    <section class="certifications reveal">
      <p class="kicker">Certifications</p>
      <div>
        ${product.certifications.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function downloadsSection(product) {
  const documents = productDocuments(product);

  return `
    <section class="downloads reveal">
      <div>
        <p class="kicker">Downloads</p>
        <h2>Product documents.</h2>
      </div>
      <div class="download-list">
        ${documents.map(documentLink).join("")}
      </div>
    </section>
  `;
}

function productDocuments(product) {
  return [
    {
      label: "Product brochure",
      href: product.documents?.brochure,
      status: product.documents?.brochure ? "Download" : "Request document",
    },
    {
      label: "User manual",
      href: product.documents?.manual,
      status: product.documents?.manual ? "Download" : "Request document",
    },
    {
      label: "Spec sheet",
      href: product.documents?.specSheet,
      status: product.documents?.specSheet ? "Download" : "Request document",
    },
    {
      label: "Certification documents",
      href: product.documents?.certifications,
      status: product.documents?.certifications ? "Download" : "Request document",
    },
  ];
}

function documentLink(item) {
  if (item.href) {
    return `<a href="${item.href}" download>${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
  }

  const subject = encodeURIComponent(`Request ${item.label}`);
  const body = encodeURIComponent(`Hello Travel Science team,\n\nPlease send the ${item.label.toLowerCase()} for this product.\n\nThank you.`);
  return `<a href="mailto:info@kelvcoop.com?subject=${subject}&body=${body}">${item.label}<small>${item.status}</small><span class="arrow-accent">→</span></a>`;
}

function inquirySection(product) {
  if (!product.inquiryFocus) return "";

  return `
    <section class="product-inquiry reveal">
      <p class="kicker">Inquiry</p>
      <h2>${product.inquiryFocus.title}</h2>
      <p>${product.inquiryFocus.text}</p>
      <a class="hero-cta" href="mailto:info@kelvcoop.com?subject=${encodeURIComponent(product.inquiryFocus.title)}">${product.inquiryFocus.button}</a>
    </section>
  `;
}

function spec(label, value) {
  return `<div><dt>${label}</dt><dd>${value || "TBD"}</dd></div>`;
}
