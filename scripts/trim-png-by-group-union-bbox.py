#!/usr/bin/env python3
"""
Trim PNG product renders by a shared alpha union bbox per model + angle group.

Default input:
  public/assets/input-png

Default output:
  public/assets/output-trimmed

This script does not scale, recenter, or overwrite source images. Each group
uses one shared crop box so color changes for the same model + angle do not
visually jump.
"""

from __future__ import annotations

import argparse
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from PIL import Image


INPUT_DIR = Path("public/assets/input-png")
OUTPUT_DIR = Path("public/assets/output-trimmed")


# Edit this list if your color naming changes. The longest suffix match wins,
# so "sage-green" is handled before the fallback that removes only "-green".
COLOR_SUFFIXES = (
    "black-beige-gray",
    "blue-gray-light-gray",
    "blue-gray-beige-gray",
    "dark-gray-light-gray",
    "mung-bean-gray",
    "black-silver",
    "black-gray",
    "sage-green",
    "all-black",
    "champagne",
    "light-gray",
    "beige-gray",
    "orange-black",
    "silver",
    "beige",
    "green",
    "gray",
    "grey",
    "white",
    "black",
)


def get_group_key(filename: str) -> str:
    """Return the shared crop group key for a PNG filename.

    Examples:
      GL45-front-black.png -> GL45-front
      GL45-front-sage-green.png -> GL45-front
      GL45-side-black.png -> GL45-side

    If your filenames use a different pattern, modify only this function.
    """

    stem = Path(filename).stem
    normalized = stem.lower()

    for color in sorted(COLOR_SUFFIXES, key=len, reverse=True):
        suffix = f"-{color}"
        if normalized.endswith(suffix):
            return stem[: -len(suffix)]

    if "-" in stem:
        return stem.rsplit("-", 1)[0]

    return stem


@dataclass(frozen=True)
class ImageInfo:
    path: Path
    group_key: str
    original_size: tuple[int, int]
    bbox: tuple[int, int, int, int] | None


def alpha_bbox(path: Path) -> tuple[tuple[int, int], tuple[int, int, int, int] | None]:
    with Image.open(path) as image:
        rgba = image.convert("RGBA")
        alpha = rgba.getchannel("A")
        return rgba.size, alpha.getbbox()


def union_bbox(boxes: Iterable[tuple[int, int, int, int]]) -> tuple[int, int, int, int]:
    lefts: list[int] = []
    tops: list[int] = []
    rights: list[int] = []
    bottoms: list[int] = []

    for left, top, right, bottom in boxes:
        lefts.append(left)
        tops.append(top)
        rights.append(right)
        bottoms.append(bottom)

    return min(lefts), min(tops), max(rights), max(bottoms)


def collect_images(input_dir: Path) -> list[ImageInfo]:
    files = sorted(input_dir.glob("*.png"))
    images: list[ImageInfo] = []

    for path in files:
        original_size, bbox = alpha_bbox(path)
        images.append(
            ImageInfo(
                path=path,
                group_key=get_group_key(path.name),
                original_size=original_size,
                bbox=bbox,
            )
        )

    return images


def trim_group(
    group_key: str,
    images: list[ImageInfo],
    output_dir: Path,
) -> None:
    boxes = [image.bbox for image in images if image.bbox is not None]

    if boxes:
        crop_box = union_bbox(boxes)
        output_size = (crop_box[2] - crop_box[0], crop_box[3] - crop_box[1])
        print(f"\nGroup: {group_key}")
        print(f"  union bbox: {crop_box}")
    else:
        crop_box = None
        output_size = None
        print(f"\nGroup: {group_key}")
        print("  union bbox: none (all images are fully transparent)")

    for image_info in images:
        output_path = output_dir / image_info.path.name

        with Image.open(image_info.path) as source:
            rgba = source.convert("RGBA")
            result = rgba.crop(crop_box) if crop_box else rgba.copy()
            result.save(output_path)

        final_size = output_size or image_info.original_size
        print(
            "  "
            f"{image_info.path.name}: "
            f"original={image_info.original_size}, "
            f"alpha_bbox={image_info.bbox}, "
            f"output={final_size}"
        )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Trim PNGs with one shared alpha union bbox per model + angle group."
    )
    parser.add_argument(
        "--input",
        type=Path,
        default=INPUT_DIR,
        help=f"Input PNG folder. Default: {INPUT_DIR}",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=OUTPUT_DIR,
        help=f"Output folder. Default: {OUTPUT_DIR}",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    input_dir = args.input
    output_dir = args.output

    if not input_dir.exists():
        raise SystemExit(f"Input folder does not exist: {input_dir}")

    output_dir.mkdir(parents=True, exist_ok=True)

    images = collect_images(input_dir)
    if not images:
        print(f"No PNG files found in: {input_dir}")
        return 0

    groups: dict[str, list[ImageInfo]] = defaultdict(list)
    for image_info in images:
        groups[image_info.group_key].append(image_info)

    print(f"Input: {input_dir}")
    print(f"Output: {output_dir}")
    print(f"PNG files: {len(images)}")
    print(f"Groups: {len(groups)}")

    for group_key in sorted(groups):
        trim_group(group_key, groups[group_key], output_dir)

    print("\nDone.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
