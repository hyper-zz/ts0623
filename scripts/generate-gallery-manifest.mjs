import { existsSync } from "node:fs";
import { readdir, writeFile } from "node:fs/promises";
import { extname, join, parse } from "node:path";
import { products } from "../src/data/products.js";

const productRoot = join(process.cwd(), "public", "assets", "products");
const galleryOutputFile = join(process.cwd(), "src", "data", "galleryManifest.js");
const productImageOutputFile = join(process.cwd(), "src", "data", "productImageManifest.js");
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);
const productFolders = {
  gl: "gl",
  ax: "ax",
  b: "b",
  d: "D",
  ex: "ex",
  exm: "exm",
  k: "k",
  m: "m",
  s: "S18",
  tf: "tf",
};
const extensionPreference = [".webp", ".png", ".jpg", ".jpeg", ".svg"];
const responsiveDerivativePattern = /-(mobile|desktop)\.webp$/i;
const colorSlugAliases = {
  "all-black": ["black"],
  "black-gray": ["blackgrey"],
  "black-silver": ["black-and-silver"],
  "black-beige-gray": ["black-beige", "black-beige-grey"],
  "blue-gray-light-gray": ["bluegray&lightgray", "bluegray-lightgray", "blue-gray-light", "blue-grey-light-grey"],
  "dark-gray-light-gray": ["dark-grey-light-grey"],
  "light-gray": ["light-grey"],
  "mung-bean-gray": ["mung-gray", "mung-bean-grey"],
  "sage-green": ["sage"],
};

function sortByName(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function slugify(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function titleFromFileName(fileName) {
  const baseName = parse(fileName).name
    .replace(/-(mobile|desktop)$/i, "")
    .replace(/^\d+[-_\s]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!baseName) return "Product detail";

  return baseName.charAt(0).toUpperCase() + baseName.slice(1);
}

function galleryBaseName(fileName) {
  return parse(fileName).name.replace(/-(mobile|desktop)$/i, "");
}

function preferredGalleryFile(fileNames) {
  const byLowerName = new Map(fileNames.map((name) => [name.toLowerCase(), name]));
  const baseName = galleryBaseName(fileNames[0]);
  const lowerBaseName = baseName.toLowerCase();
  const preferredNames = [
    `${lowerBaseName}-desktop.webp`,
    `${lowerBaseName}.webp`,
    `${lowerBaseName}-mobile.webp`,
    `${lowerBaseName}.png`,
    `${lowerBaseName}.jpg`,
    `${lowerBaseName}.jpeg`,
    `${lowerBaseName}.svg`,
  ];

  for (const name of preferredNames) {
    const matched = byLowerName.get(name);
    if (matched) return matched;
  }

  return fileNames.sort(sortByName)[0];
}

async function galleryItemsFor(folderName) {
  const galleryDir = join(productRoot, folderName, "gallery");
  if (!existsSync(galleryDir)) return [];

  const entries = await readdir(galleryDir, { withFileTypes: true });
  const groupedFiles = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("."))
    .filter((name) => imageExtensions.has(extname(name).toLowerCase()))
    .reduce((groups, name) => {
      const baseName = galleryBaseName(name);
      if (!groups.has(baseName)) groups.set(baseName, []);
      groups.get(baseName).push(name);
      return groups;
    }, new Map());

  return [...groupedFiles.entries()]
    .sort(([a], [b]) => sortByName(a, b))
    .map(([, names]) => preferredGalleryFile(names))
    .map((name) => ({
      image: `/assets/products/${folderName}/gallery/${name}`,
      title: titleFromFileName(name),
      text: "Product detail image.",
    }));
}

async function modelImageLookupFor(folderName) {
  const modelsDir = join(productRoot, folderName, "models");
  if (!existsSync(modelsDir)) return new Map();

  const entries = await readdir(modelsDir, { withFileTypes: true });
  return new Map(entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("."))
    .filter((name) => imageExtensions.has(extname(name).toLowerCase()))
    .map((name) => [name.toLowerCase(), name]));
}

function colorSlugCandidates(color) {
  const slugs = [
    slugify(color.value),
    slugify(color.name),
  ].filter(Boolean);

  return [...new Set(slugs.flatMap((slug) => [slug, ...(colorSlugAliases[slug] || [])]))];
}

function modelImageFor(fileLookup, folderName, model, color) {
  const modelSlug = slugify(model);

  for (const colorSlug of colorSlugCandidates(color)) {
    if (folderName === "exm") {
      const responsiveFileName = `${modelSlug}-${colorSlug}-desktop.webp`;
      const matchedResponsiveFileName = fileLookup.get(responsiveFileName);
      if (matchedResponsiveFileName) {
        return `/assets/products/${folderName}/models/${matchedResponsiveFileName}`;
      }
    }

    for (const extension of extensionPreference) {
      const fileName = `${modelSlug}-${colorSlug}${extension}`;
      const matchedFileName = fileLookup.get(fileName);
      if (matchedFileName) {
        return `/assets/products/${folderName}/models/${matchedFileName}`;
      }
    }
  }

  return "";
}

async function productImagesFor(product, folderName) {
  const fileLookup = await modelImageLookupFor(folderName);
  const models = product.modelOptions || product.models || [];
  const colors = product.colorOptions || [];
  const modelImages = {};

  for (const model of models) {
    const colorImages = {};

    for (const color of colors) {
      const image = modelImageFor(fileLookup, folderName, model, color);
      if (image) {
        colorImages[color.value] = image;
      }
    }

    if (Object.keys(colorImages).length) {
      modelImages[model] = colorImages;
    }
  }

  return modelImages;
}

async function generateManifests() {
  const manifest = {};
  const productImageManifest = {};
  const productsById = new Map(products.map((product) => [product.id, product]));

  for (const [productId, folderName] of Object.entries(productFolders)) {
    manifest[productId] = await galleryItemsFor(folderName);
    productImageManifest[productId] = productsById.has(productId)
      ? await productImagesFor(productsById.get(productId), folderName)
      : {};
  }

  const output = `// This file is generated by scripts/generate-gallery-manifest.mjs.\n// Run npm run dev or npm run preview after adding or deleting gallery images.\n\nexport const galleryManifest = ${JSON.stringify(manifest, null, 2)};\n`;
  await writeFile(galleryOutputFile, output);

  const productImageOutput = `// This file is generated by scripts/generate-gallery-manifest.mjs.\n// Run npm run dev or npm run preview after adding or deleting model images.\n\nexport const productImageManifest = ${JSON.stringify(productImageManifest, null, 2)};\n`;
  await writeFile(productImageOutputFile, productImageOutput);

  Object.entries(manifest).forEach(([id, items]) => {
    const modelCount = Object.values(productImageManifest[id] || {})
      .reduce((total, colors) => total + Object.keys(colors || {}).length, 0);
    console.log(`${id}: ${items.length} gallery, ${modelCount} model images`);
  });
}

await generateManifests();
