from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
QUALITY = 80

FEATURE_DIR = ROOT / "public/assets/products/exm/features"
GALLERY_DIR = ROOT / "public/assets/products/exm/gallery"
MODELS_DIR = ROOT / "public/assets/products/exm/models"
REPORT_PATH = ROOT / "exm-asset-optimization-report.md"

FEATURE_SOURCES = [
    ("Feature effects", FEATURE_DIR / "sequence-01.png", 1200, 2000),
    ("Feature effects", FEATURE_DIR / "sequence-02.png", 1200, 2000),
    ("Feature effects", FEATURE_DIR / "sequence-03.png", 1200, 2000),
    ("Feature effects", FEATURE_DIR / "sequence-04.png", 1200, 2000),
    ("Feature effects", FEATURE_DIR / "cooling-effect.jpg", 1200, 2000),
    ("Feature effects", FEATURE_DIR / "sound-level-camping.jpg", 1000, 1600),
]

GALLERY_SOURCES = [
    ("Product gallery", GALLERY_DIR / "1.png", 1000, 1800),
    ("Product gallery", GALLERY_DIR / "6.png", 1000, 1800),
    ("Product gallery", GALLERY_DIR / "623 拷贝.png", 1000, 1800),
    ("Product gallery", GALLERY_DIR / "xj.2.png", 1000, 1800),
    ("Product gallery", GALLERY_DIR / "开瓶器更新2.png", 1000, 1800),
]

MODEL_SOURCES = [
    ("Model images", MODELS_DIR / "exm30-black.jpg", 1200, 1800),
    ("Model images", MODELS_DIR / "exm30-bluegray&lightgray.png", 1200, 1800),
    ("Model images", MODELS_DIR / "exm40-black.jpg", 1200, 1800),
    ("Model images", MODELS_DIR / "exm40-bluegray&lightgray.png", 1200, 1800),
    ("Model images", MODELS_DIR / "exm50-black.jpg", 1200, 1800),
    ("Model images", MODELS_DIR / "exm50-bluegray&lightgray.png", 1200, 1800),
]

MOVED_ASSETS = [
    (
        "public/assets/products/exm/features/_sequence-originals/sequence-01.png",
        ROOT / "backups/exm-sequence-originals/sequence-01.png",
    ),
    (
        "public/assets/products/exm/features/_sequence-originals/sequence-02.png",
        ROOT / "backups/exm-sequence-originals/sequence-02.png",
    ),
    (
        "public/assets/products/exm/features/_sequence-originals/sequence-03.png",
        ROOT / "backups/exm-sequence-originals/sequence-03.png",
    ),
    (
        "public/assets/products/exm/features/_sequence-originals/sequence-04.png",
        ROOT / "backups/exm-sequence-originals/sequence-04.png",
    ),
    ("public/assets/products/exm/features/1.png", ROOT / "backups/exm-sequence-legacy-canvas/1.png"),
    ("public/assets/products/exm/features/2.png", ROOT / "backups/exm-sequence-legacy-canvas/2.png"),
    ("public/assets/products/exm/features/3.png", ROOT / "backups/exm-sequence-legacy-canvas/3.png"),
    ("public/assets/products/exm/features/4.png", ROOT / "backups/exm-sequence-legacy-canvas/4.png"),
]


def rel(path):
    return str(path.relative_to(ROOT))


def mb(value):
    return f"{value / 1024 / 1024:.2f} MB"


def decoded_mb(width, height):
    return width * height * 4 / 1024 / 1024


def variant_path(source, size):
    return source.with_name(f"{source.stem}-{size}.webp")


def image_info(path):
    with Image.open(path) as image:
        return {
            "width": image.width,
            "height": image.height,
            "size": path.stat().st_size,
            "decoded": decoded_mb(image.width, image.height),
        }


def save_webp(source, output, max_width):
    with Image.open(source) as image:
        image.load()
        target_width = min(max_width, image.width)
        target_height = round(image.height * target_width / image.width)

        if (target_width, target_height) != image.size:
            image = image.resize((target_width, target_height), Image.Resampling.LANCZOS)

        if image.mode not in ("RGB", "RGBA"):
            has_alpha = "A" in image.getbands()
            image = image.convert("RGBA" if has_alpha else "RGB")

        output.parent.mkdir(parents=True, exist_ok=True)
        image.save(output, "WEBP", quality=QUALITY, method=6, exact=True)


def generate_variants(sources):
    for _, source, mobile_width, desktop_width in sources:
        if not source.exists():
            raise FileNotFoundError(source)
        save_webp(source, variant_path(source, "mobile"), mobile_width)
        save_webp(source, variant_path(source, "desktop"), desktop_width)


def assert_sequence_dimensions():
    expected = None
    for source in [item[1] for item in FEATURE_SOURCES[:4]]:
        for size in ("mobile", "desktop"):
            info = image_info(variant_path(source, size))
            current = (info["width"], info["height"])
            if expected is None:
                expected = {size: current}
            elif size not in expected:
                expected[size] = current
            elif expected[size] != current:
                raise RuntimeError(
                    f"Sequence {size} dimensions are inconsistent: "
                    f"{rel(source)} produced {current}, expected {expected[size]}"
                )


def report_rows(sources):
    rows = []
    totals = {
        "source_size": 0,
        "mobile_size": 0,
        "desktop_size": 0,
        "source_decoded": 0,
        "mobile_decoded": 0,
        "desktop_decoded": 0,
    }

    for category, source, _, _ in sources:
        source_info = image_info(source)
        mobile = variant_path(source, "mobile")
        desktop = variant_path(source, "desktop")
        mobile_info = image_info(mobile)
        desktop_info = image_info(desktop)

        totals["source_size"] += source_info["size"]
        totals["mobile_size"] += mobile_info["size"]
        totals["desktop_size"] += desktop_info["size"]
        totals["source_decoded"] += source_info["decoded"]
        totals["mobile_decoded"] += mobile_info["decoded"]
        totals["desktop_decoded"] += desktop_info["decoded"]

        rows.append((category, source, source_info, mobile, mobile_info, desktop, desktop_info))

    return rows, totals


def write_report(sources):
    rows, totals = report_rows(sources)
    moved_existing = [(old, new, image_info(new)) for old, new in MOVED_ASSETS if new.exists()]
    moved_total = sum(info["size"] for _, _, info in moved_existing)

    lines = [
        "# EXM Asset Optimization Report",
        "",
        "Scope: EXM product detail page assets only. Generated by `scripts/optimize-exm-assets.py`.",
        "",
        "## Summary",
        "",
        f"- Source images optimized: {len(sources)}",
        f"- Source encoded total for optimized set: {mb(totals['source_size'])}",
        f"- Mobile WebP encoded total: {mb(totals['mobile_size'])} ({mb(totals['source_size'] - totals['mobile_size'])} less than source set)",
        f"- Desktop WebP encoded total: {mb(totals['desktop_size'])} ({mb(totals['source_size'] - totals['desktop_size'])} less than source set)",
        f"- Source decoded memory total: {totals['source_decoded']:.1f} MB",
        f"- Mobile WebP decoded memory total: {totals['mobile_decoded']:.1f} MB ({totals['source_decoded'] - totals['mobile_decoded']:.1f} MB less)",
        f"- Desktop WebP decoded memory total: {totals['desktop_decoded']:.1f} MB ({totals['source_decoded'] - totals['desktop_decoded']:.1f} MB less)",
        f"- Removed from deployable public assets: {mb(moved_total)}",
        "",
        "## Optimized Images",
        "",
        "| category | source | source size | source dimensions | source decoded memory | mobile WebP | mobile size | mobile dimensions | mobile decoded memory | desktop WebP | desktop size | desktop dimensions | desktop decoded memory |",
        "| --- | --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | ---: |",
    ]

    for category, source, source_info, mobile, mobile_info, desktop, desktop_info in rows:
        lines.append(
            f"| {category} | `{rel(source)}` | {mb(source_info['size'])} | {source_info['width']} x {source_info['height']} | {source_info['decoded']:.1f} MB | "
            f"`{rel(mobile)}` | {mb(mobile_info['size'])} | {mobile_info['width']} x {mobile_info['height']} | {mobile_info['decoded']:.1f} MB | "
            f"`{rel(desktop)}` | {mb(desktop_info['size'])} | {desktop_info['width']} x {desktop_info['height']} | {desktop_info['decoded']:.1f} MB |"
        )

    lines.extend(
        [
            "",
            "## Moved Out Of Public",
            "",
            "| original deploy path | new path | size | dimensions | decoded memory |",
            "| --- | --- | ---: | ---: | ---: |",
        ]
    )

    for old, new, info in moved_existing:
        lines.append(
            f"| `{old}` | `{rel(new)}` | {mb(info['size'])} | {info['width']} x {info['height']} | {info['decoded']:.1f} MB |"
        )

    lines.extend(
        [
            "",
            "## Code And Manifest Changes",
            "",
            "- `src/components/ExmFeatureEffects.js`: sequence, cooling, and sound images render through WebP `picture/source` with PNG/JPG fallback.",
            "- `src/components/ProductDetailTemplate.js`: EXM gallery images render mobile/desktop WebP sources with original PNG fallback and lazy async image loading.",
            "- `src/data/productImageManifest.js`: EXM model image entries point to generated desktop WebP files instead of original PNG/JPG files.",
            "- `scripts/generate-gallery-manifest.mjs`: generated manifests stay stable by ignoring responsive gallery derivatives and preferring EXM desktop WebP model images.",
            "",
            "## Verification Notes",
            "",
            "- Pillow WebP support is required; `webpmux` is not required for these static WebP images.",
            "- Sequence mobile variants are `1200 x 543`; sequence desktop variants are `2000 x 904`, so the reveal stack keeps consistent dimensions.",
            "- `features/1.png`, `features/2.png`, `features/3.png`, `features/4.png`, and `_sequence-originals/` are no longer referenced by runtime source code or deployable public assets.",
        ]
    )

    REPORT_PATH.write_text("\n".join(lines) + "\n")


def main():
    sources = FEATURE_SOURCES + GALLERY_SOURCES + MODEL_SOURCES
    generate_variants(sources)
    assert_sequence_dimensions()
    write_report(sources)
    print(f"Wrote {rel(REPORT_PATH)}")


if __name__ == "__main__":
    main()
