export function applySeo(seo) {
  document.title = seo.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
}

const PUNCTUATION_REGEX = /([.。])/g;
const PUNCTUATION_SKIP_SELECTOR = "script, style, textarea, input, .period-accent";

export function highlightPeriods(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !PUNCTUATION_REGEX.test(node.nodeValue)) {
        PUNCTUATION_REGEX.lastIndex = 0;
        return NodeFilter.FILTER_REJECT;
      }

      PUNCTUATION_REGEX.lastIndex = 0;
      if (node.parentElement?.closest(PUNCTUATION_SKIP_SELECTOR)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    const parts = node.nodeValue.split(PUNCTUATION_REGEX);

    parts.forEach((part) => {
      if (!part) return;
      if (part === "." || part === "。") {
        const span = document.createElement("span");
        span.className = "period-accent";
        span.textContent = part;
        fragment.append(span);
      } else {
        fragment.append(document.createTextNode(part));
      }
    });

    node.replaceWith(fragment);
  });
}

export function revealSections(root = document) {
  const elements = root.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  elements.forEach((element) => observer.observe(element));
}
