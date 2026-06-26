import { materialAssets, materialAssetByValue } from "../data/materials.js";

const groupLabels = {
  appearanceParts: "Appearance Parts",
  internalParts: "Internal Parts",
};

const internalPartNames = new Set([
  "inner liner",
  "inner base",
  "compressor",
  "battery accessory",
]);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeMaterialItem(item) {
  const material = materialAssets[item.materialKey] || materialAssetByValue(item.material || item.materialValue);
  const materialLabel = material?.label || item.material || item.materialValue || "";
  const materialImage = material?.image || "";
  const partEn = item.partEn || item.part || item.label || "";
  const partZh = item.partZh || "";

  if (!partEn || !materialLabel || materialLabel === "TBD") return null;

  return {
    partZh,
    partEn,
    materialLabel,
    materialImage,
  };
}

function normalizeGroupedMaterials(materials) {
  if (!materials) return [];

  if (!Array.isArray(materials) && typeof materials === "object") {
    return Object.entries(groupLabels)
      .map(([key, label]) => ({
        key,
        label,
        items: (materials[key] || []).map(normalizeMaterialItem).filter(Boolean),
      }))
      .filter((group) => group.items.length);
  }

  if (!Array.isArray(materials)) return [];

  const groups = {
    appearanceParts: [],
    internalParts: [],
  };

  materials.forEach((item) => {
    const normalized = normalizeMaterialItem(item);
    if (!normalized) return;
    const groupKey = internalPartNames.has(normalized.partEn.toLowerCase()) ? "internalParts" : "appearanceParts";
    groups[groupKey].push(normalized);
  });

  return Object.entries(groupLabels)
    .map(([key, label]) => ({ key, label, items: groups[key] }))
    .filter((group) => group.items.length);
}

function materialPartName(item) {
  return item.partZh
    ? `${escapeHtml(item.partZh)} / ${escapeHtml(item.partEn)}`
    : escapeHtml(item.partEn);
}

function materialRow(item) {
  return `
    <button
      class="product-material-row"
      type="button"
      data-material-item
      data-material-image="${escapeHtml(item.materialImage)}"
      data-material-label="${escapeHtml(item.materialLabel)}"
      data-material-part="${escapeHtml(item.partEn)}"
      aria-pressed="false">
      <span class="product-material-thumb" aria-hidden="true">
        ${item.materialImage ? `<img src="${item.materialImage}" alt="">` : ""}
      </span>
      <span class="product-material-copy">
        <strong>${materialPartName(item)}</strong>
        <small>${escapeHtml(item.materialLabel)}</small>
      </span>
    </button>
  `;
}

function mobileMaterialItem(item) {
  return `
    <details class="product-material-mobile-item" data-material-mobile-item>
      <summary>
        <span class="product-material-thumb" aria-hidden="true">
          ${item.materialImage ? `<img src="${item.materialImage}" alt="">` : ""}
        </span>
        <span class="product-material-copy">
          <strong>${materialPartName(item)}</strong>
          <small>${escapeHtml(item.materialLabel)}</small>
        </span>
        <span class="product-material-chevron" aria-hidden="true"></span>
      </summary>
      <div class="product-material-mobile-preview">
        ${item.materialImage ? `<img src="${item.materialImage}" alt="${escapeHtml(item.materialLabel)}">` : ""}
        <strong>${escapeHtml(item.materialLabel)}</strong>
      </div>
    </details>
  `;
}

export function ProductMaterials({ product }) {
  const groups = normalizeGroupedMaterials(product.materials);
  if (!groups.length) return "";

  return `
    <section class="product-materials product-section reveal" data-product-materials>
      <div class="section-heading">
        <p class="kicker">MATERIALS</p>
        <h2>Product Material.</h2>
      </div>

      <div class="product-materials-desktop">
        <div class="product-material-list">
          ${groups.map((group) => `
            <details class="product-material-group product-material-desktop-group">
              <summary>
                <span>${group.label}</span>
                <span class="product-material-chevron" aria-hidden="true"></span>
              </summary>
              <div class="product-material-rows">
                ${group.items.map((item) => materialRow(item)).join("")}
              </div>
            </details>
          `).join("")}
        </div>
        <aside class="product-material-preview" aria-live="polite" hidden>
          <img data-material-preview-image alt="" hidden>
          <p data-material-preview-part></p>
          <h3 data-material-preview-label></h3>
        </aside>
      </div>

      <div class="product-materials-mobile">
        ${groups.map((group) => `
          <details class="product-material-mobile-group">
            <summary>
              <span>${group.label}</span>
              <span class="product-material-chevron" aria-hidden="true"></span>
            </summary>
            <div class="product-material-mobile-list">
              ${group.items.map(mobileMaterialItem).join("")}
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}
