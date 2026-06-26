import { en } from "./en.js";
import { zh } from "./zh.js";

const dictionaries = { en, zh };

export function localeFromPath(path = "/") {
  return path === "/zh" || path.startsWith("/zh/") ? "zh" : "en";
}

export function normalizePath(path = "/") {
  if (path === "/zh") return "/";
  if (path.startsWith("/zh/")) return path.slice(3) || "/";
  return path || "/";
}

export function localizedPath(locale, path = "/") {
  const [basePath, anchor] = path.split("#");
  const normalized = normalizePath(basePath || "/");
  const localized = locale === "zh"
    ? `/zh${normalized === "/" ? "" : normalized}`
    : normalized;

  return `${localized || "/"}${anchor ? `#${anchor}` : ""}`;
}

export function alternateLocalePath(path = "/", nextLocale = "en") {
  return localizedPath(nextLocale, normalizePath(path));
}

export function dictionary(locale = "en") {
  return dictionaries[locale] || dictionaries.en;
}

export function translate(locale, key) {
  return key.split(".").reduce((value, part) => value?.[part], dictionary(locale)) || key;
}

export function createTranslator(locale = "en") {
  return (key) => translate(locale, key);
}
