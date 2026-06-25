import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.SCREENSHOT_BASE_URL || "http://localhost:4173";
const outputDir = path.resolve("outputs/page-screenshots");

const pages = [
  ["#/", "01-home.png"],
  ["#/products", "02-products.png"],
  ["#/accessories", "03-accessories.png"],
  ["#/community", "04-community.png"],
  ["#/custom-projects", "05-custom-projects.png"],
  ["#/support", "06-support.png"],
  ["#/contact", "07-contact.png"],
  ["#/products/ax", "product-ax.png"],
  ["#/products/b", "product-b.png"],
  ["#/products/gl", "product-gl.png"],
  ["#/products/m", "product-m.png"],
  ["#/products/ex", "product-ex.png"],
  ["#/products/exm", "product-exm.png"],
  ["#/products/d", "product-d.png"],
  ["#/products/k", "product-k.png"],
  ["#/products/s", "product-s.png"],
  ["#/products/tf", "product-tf.png"],
];

async function prepareForScreenshot(page) {
  await page.evaluate(async () => {
    const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

    document.documentElement.classList.add("is-screenshot-mode");
    document.body.classList.add("is-screenshot-mode");
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-visible");
    });

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const images = Array.from(document.images);
    await Promise.all(images.map(async (image) => {
      if (image.complete && image.naturalWidth > 0) return;
      await Promise.race([
        (async () => {
          try {
            await image.decode();
          } catch {
            await new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            });
          }
        })(),
        wait(2000),
      ]);
    }));

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

await fs.mkdir(outputDir, { recursive: true });
await fs.rm(path.join(outputDir, "FAILED_ROUTES.txt"), { force: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
});

await context.addInitScript(() => {
  document.documentElement.classList.add("is-screenshot-mode");
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-screenshot-mode");
  }, { once: true });
});

const page = await context.newPage();
const failed = [];

for (const [hash, filename] of pages) {
  const url = `${baseUrl}/${hash}`;
  const target = path.join(outputDir, filename);

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForFunction((expectedHash) => window.location.hash === expectedHash, hash, { timeout: 8000 });
    await page.waitForSelector("main", { timeout: 8000 });
    await prepareForScreenshot(page);
    await page.waitForTimeout(150);
    await page.screenshot({ path: target, fullPage: true });
    console.log(`captured ${filename} ${hash}`);
  } catch (error) {
    failed.push(`${filename} ${hash}: ${error.message}`);
    console.log(`failed ${filename} ${hash}: ${error.message}`);
  }
}

await browser.close();

if (failed.length) {
  await fs.writeFile(path.join(outputDir, "FAILED_ROUTES.txt"), `${failed.join("\n")}\n`, "utf8");
  process.exitCode = 1;
}
