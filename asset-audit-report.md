# Asset Audit Report

Scope: `public/assets` image files with extensions `png`, `jpg`, `jpeg`, `webp`, `avif`.

Generated locally from the current workspace. Total images scanned: **215**.

## Risk Thresholds

- File size > 1MB: warning
- File size > 2MB: high
- File size > 4MB: critical
- Pixel area > 2MP: warning
- Pixel area > 4MP: high
- Pixel area > 8MP: critical
- Decoded memory estimate: `width x height x 4 bytes`.

## Executive Summary

- Total images: **215**
- Total encoded asset weight: **446.8 MB**
- Images > 4MB: **54**
- Images > 2MB and <= 4MB: **32**
- Images > 1MB and <= 2MB: **9**
- Images > 8MP: **75**
- Images > 4MP and <= 8MP: **9**
- Images > 2MP and <= 4MP: **3**

Primary mobile-loading risks are large PNG/JPG product/detail assets, unoptimized gallery images, and high decoded memory from oversized source dimensions. Even when encoded file size is moderate, decoded memory can be large on mobile because browsers expand images to RGBA in memory.

## Top 50 By File Size

| path | size | dimensions | MP | format | decoded memory | risk | category |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `public/assets/products/gl/control-panel.png` | 9.8 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/ex/models/E50.png` | 9.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/gl/front.png` | 9.4 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/exm/models/exm50-bluegray&lightgray.png` | 9.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/6.png` | 8.9 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/open-lid.png` | 8.5 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/ex/models/EX50.png` | 8.3 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/models/exm40-bluegray&lightgray.png` | 7.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/1.png` | 7.2 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/gl-black-open.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/handle-detail.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/models/gl45-black.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/ex/models/E30.png` | 6.8 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/m/models/m55-sage.png` | 6.8 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/ex/gallery/细节图 拷贝3.png` | 6.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/exm/models/exm30-bluegray&lightgray.png` | 6.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/S35.png` | 6.5 MB | 3932 x 2534 | 9.96 | PNG | 38.0 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/m/models/m55-black.png` | 6.2 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/xj.2.png` | 6.1 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/gallery/m45-front.png` | 6.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/models/m45-sage.png` | 6.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/features/4.png` | 6.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-04.png` | 6.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/gallery/623 拷贝.png` | 5.9 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/models/gl55-black.png` | 5.8 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/m/gallery/m45-black.png` | 5.7 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/models/m45-black.png` | 5.7 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/ex/gallery/细节图 拷贝2.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl.png` | 5.5 MB | 2518 x 2359 | 5.94 | PNG | 22.7 MB | size:critical, pixels:high | collection/product listing |
| `public/assets/products/exm/features/3.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-03.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/2.png` | 5.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-02.png` | 5.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/m/gallery/m45-side.png` | 5.2 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/gl-sage-open.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/models/gl35-sage.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/gl/models/gl45-sage.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/gl/models/gl55-sage.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm.png` | 4.8 MB | 2217 x 2021 | 4.48 | PNG | 17.1 MB | size:critical, pixels:high | collection/product listing |
| `public/assets/services/gallery/适配器.png` | 4.8 MB | 4032 x 3024 | 12.19 | PNG | 46.5 MB | size:critical, pixels:critical | services/collection content |
| `public/assets/products/ax.png` | 4.7 MB | 2227 x 2058 | 4.58 | PNG | 17.5 MB | size:critical, pixels:high | collection/product listing |
| `public/assets/products/m/gallery/m45-open.png` | 4.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/ex/gallery/细节图 拷贝.png` | 4.6 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/models/gl35-black.png` | 4.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/开瓶器更新2.png` | 4.6 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/models/m35-sage.png` | 4.5 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/m/models/m35-black.png` | 4.5 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/p12.png` | 4.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/services/gallery/烟线.png` | 4.3 MB | 4032 x 3024 | 12.19 | PNG | 46.5 MB | size:critical, pixels:critical | services/collection content |
| `public/assets/products/ex/gallery/623 拷贝.png` | 4.3 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |

## Top 50 By Decoded Memory

| path | decoded memory | dimensions | MP | size | format | risk | category |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `public/assets/products/exm/features/cooling-effect.jpg` | 73.7 MB | 4090 x 4723 | 19.32 | 1.9 MB | JPG | size:warning, pixels:critical | EXM feature effects |
| `public/assets/products/b/gallery/1.png` | 51.5 MB | 4500 x 3002 | 13.51 | 4.2 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/b/gallery/2.png` | 51.5 MB | 4500 x 3002 | 13.51 | 3.3 MB | PNG | size:high, pixels:critical | product gallery |
| `public/assets/products/b/gallery/4.png` | 51.5 MB | 4500 x 3002 | 13.51 | 2.8 MB | PNG | size:high, pixels:critical | product gallery |
| `public/assets/products/b/gallery/b20.png` | 51.5 MB | 4500 x 3002 | 13.51 | 3.4 MB | PNG | size:high, pixels:critical | product gallery |
| `public/assets/products/b/models/b20.png` | 51.5 MB | 4500 x 3002 | 13.51 | 3.4 MB | PNG | size:high, pixels:critical | other |
| `public/assets/products/b/models/b25.png` | 51.5 MB | 4500 x 3002 | 13.51 | 3.6 MB | PNG | size:high, pixels:critical | other |
| `public/assets/products/gl/control-panel.png` | 51.5 MB | 4500 x 3002 | 13.51 | 9.8 MB | PNG | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/front.png` | 51.5 MB | 4500 x 3002 | 13.51 | 9.4 MB | PNG | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/open-lid.png` | 51.5 MB | 4500 x 3002 | 13.51 | 8.5 MB | PNG | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/ex/gallery/623 拷贝.png` | 48.3 MB | 4500 x 2811 | 12.65 | 4.3 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/ex/gallery/细节图 拷贝.png` | 48.3 MB | 4500 x 2811 | 12.65 | 4.6 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/ex/gallery/细节图 拷贝2.png` | 48.3 MB | 4500 x 2811 | 12.65 | 5.5 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/ex/gallery/细节图 拷贝3.png` | 48.3 MB | 4500 x 2811 | 12.65 | 6.7 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/ex/models/E30.png` | 48.3 MB | 4500 x 2811 | 12.65 | 6.8 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/ex/models/E50.png` | 48.3 MB | 4500 x 2811 | 12.65 | 9.5 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/ex/models/EX50.png` | 48.3 MB | 4500 x 2811 | 12.65 | 8.3 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/exm/features/1.png` | 48.3 MB | 4500 x 2811 | 12.65 | 2.7 MB | PNG | size:high, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/2.png` | 48.3 MB | 4500 x 2811 | 12.65 | 5.4 MB | PNG | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/3.png` | 48.3 MB | 4500 x 2811 | 12.65 | 5.5 MB | PNG | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/4.png` | 48.3 MB | 4500 x 2811 | 12.65 | 6.0 MB | PNG | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-01.png` | 48.3 MB | 4500 x 2811 | 12.65 | 2.7 MB | PNG | size:high, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-02.png` | 48.3 MB | 4500 x 2811 | 12.65 | 5.4 MB | PNG | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-03.png` | 48.3 MB | 4500 x 2811 | 12.65 | 5.5 MB | PNG | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-04.png` | 48.3 MB | 4500 x 2811 | 12.65 | 6.0 MB | PNG | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/gallery/1.png` | 48.3 MB | 4500 x 2811 | 12.65 | 7.2 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/exm/gallery/6.png` | 48.3 MB | 4500 x 2811 | 12.65 | 8.9 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/exm/gallery/623 拷贝.png` | 48.3 MB | 4500 x 2811 | 12.65 | 5.9 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/exm/gallery/xj.2.png` | 48.3 MB | 4500 x 2811 | 12.65 | 6.1 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/exm/gallery/开瓶器更新2.png` | 48.3 MB | 4500 x 2811 | 12.65 | 4.6 MB | PNG | size:critical, pixels:critical | product gallery |
| `public/assets/products/exm/models/exm30-bluegray&lightgray.png` | 48.3 MB | 4500 x 2811 | 12.65 | 6.5 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/exm/models/exm40-bluegray&lightgray.png` | 48.3 MB | 4500 x 2811 | 12.65 | 7.7 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/exm/models/exm50-bluegray&lightgray.png` | 48.3 MB | 4500 x 2811 | 12.65 | 9.0 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/p12.png` | 48.3 MB | 4500 x 2811 | 12.65 | 4.4 MB | PNG | size:critical, pixels:critical | collection/product listing |
| `public/assets/services/gallery/tool-battery-holder.png` | 48.3 MB | 4500 x 2811 | 12.65 | 643.4 KB | PNG | pixels:critical | services/collection content |
| `public/assets/services/gallery/烟线.png` | 46.5 MB | 4032 x 3024 | 12.19 | 4.3 MB | PNG | size:critical, pixels:critical | services/collection content |
| `public/assets/services/gallery/适配器.png` | 46.5 MB | 4032 x 3024 | 12.19 | 4.8 MB | PNG | size:critical, pixels:critical | services/collection content |
| `public/assets/products/exm/models/exm30-black.jpg` | 41.7 MB | 3308 x 3308 | 10.94 | 3.0 MB | JPG | size:high, pixels:critical | other |
| `public/assets/products/exm/models/exm40-black.jpg` | 41.7 MB | 3308 x 3308 | 10.94 | 3.5 MB | JPG | size:high, pixels:critical | other |
| `public/assets/products/exm/models/exm50-black.jpg` | 41.7 MB | 3308 x 3308 | 10.94 | 4.0 MB | JPG | size:critical, pixels:critical | other |
| `public/assets/products/gl/models/gl75-black.png` | 41.7 MB | 3308 x 3308 | 10.94 | 4.2 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/gl/gl-black-open.png` | 40.7 MB | 4000 x 2668 | 10.67 | 7.0 MB | PNG | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/handle-detail.png` | 40.7 MB | 4000 x 2668 | 10.67 | 7.0 MB | PNG | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/models/gl45-black.png` | 40.7 MB | 4000 x 2668 | 10.67 | 7.0 MB | PNG | size:critical, pixels:critical | other |
| `public/assets/products/ax/gallery/ax30-open.png` | 40.7 MB | 4000 x 2667 | 10.67 | 2.5 MB | PNG | size:high, pixels:critical | product gallery |
| `public/assets/products/ax/gallery/ax40-front.png` | 40.7 MB | 4000 x 2667 | 10.67 | 3.3 MB | PNG | size:high, pixels:critical | product gallery |
| `public/assets/products/ax/gallery/ax50-black.png` | 40.7 MB | 4000 x 2667 | 10.67 | 3.0 MB | PNG | size:high, pixels:critical | product gallery |
| `public/assets/products/ax/gallery/ax50-side.png` | 40.7 MB | 4000 x 2667 | 10.67 | 2.7 MB | PNG | size:high, pixels:critical | product gallery |
| `public/assets/products/ax/models/ax30-black.png` | 40.7 MB | 4000 x 2667 | 10.67 | 2.3 MB | PNG | size:high, pixels:critical | other |
| `public/assets/products/ax/models/ax30-champagne.png` | 40.7 MB | 4000 x 2667 | 10.67 | 2.6 MB | PNG | size:high, pixels:critical | other |

## EXM Feature Effects

- Count: **14**
- Encoded size total: **52.5 MB**
- Largest encoded file: `public/assets/products/exm/features/4.png` (6.0 MB)
- Largest decoded memory: `public/assets/products/exm/features/cooling-effect.jpg` (73.7 MB, 4090 x 4723)

| path | size | dimensions | MP | format | decoded memory | risk |
| --- | --- | --- | --- | --- | --- | --- |
| `public/assets/products/exm/features/4.png` | 6.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/features/_sequence-originals/sequence-04.png` | 6.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/features/3.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/features/_sequence-originals/sequence-03.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/features/2.png` | 5.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/features/_sequence-originals/sequence-02.png` | 5.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/features/sequence-04.png` | 3.3 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:high, pixels:high |
| `public/assets/products/exm/features/sequence-03.png` | 3.1 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:high, pixels:high |
| `public/assets/products/exm/features/sequence-02.png` | 3.1 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:high, pixels:high |
| `public/assets/products/exm/features/1.png` | 2.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:high, pixels:critical |
| `public/assets/products/exm/features/_sequence-originals/sequence-01.png` | 2.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:high, pixels:critical |
| `public/assets/products/exm/features/sequence-01.png` | 1.9 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:warning, pixels:high |
| `public/assets/products/exm/features/cooling-effect.jpg` | 1.9 MB | 4090 x 4723 | 19.32 | JPG | 73.7 MB | size:warning, pixels:critical |
| `public/assets/products/exm/features/sound-level-camping.jpg` | 188.2 KB | 925 x 1177 | 1.09 | JPG | 4.2 MB | - |

## Product Gallery Images

- Count: **34**
- Encoded size total: **109.5 MB**
- Largest encoded file: `public/assets/products/exm/gallery/6.png` (8.9 MB)
- Largest decoded memory: `public/assets/products/b/gallery/1.png` (51.5 MB, 4500 x 3002)

| path | size | dimensions | MP | format | decoded memory | risk |
| --- | --- | --- | --- | --- | --- | --- |
| `public/assets/products/exm/gallery/6.png` | 8.9 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/gallery/1.png` | 7.2 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/ex/gallery/细节图 拷贝3.png` | 6.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/gallery/xj.2.png` | 6.1 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/m/gallery/m45-front.png` | 6.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical |
| `public/assets/products/exm/gallery/623 拷贝.png` | 5.9 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/m/gallery/m45-black.png` | 5.7 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical |
| `public/assets/products/ex/gallery/细节图 拷贝2.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/m/gallery/m45-side.png` | 5.2 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical |
| `public/assets/products/m/gallery/m45-open.png` | 4.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical |
| `public/assets/products/ex/gallery/细节图 拷贝.png` | 4.6 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/exm/gallery/开瓶器更新2.png` | 4.6 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/ex/gallery/623 拷贝.png` | 4.3 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/b/gallery/1.png` | 4.2 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical |
| `public/assets/products/b/gallery/b20.png` | 3.4 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical |
| `public/assets/products/ax/gallery/ax40-front.png` | 3.3 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical |
| `public/assets/products/b/gallery/2.png` | 3.3 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical |
| `public/assets/products/ax/gallery/ax50-black.png` | 3.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical |
| `public/assets/products/b/gallery/4.png` | 2.8 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical |
| `public/assets/products/ax/gallery/ax50-side.png` | 2.7 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical |
| `public/assets/products/ax/gallery/ax30-open.png` | 2.5 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical |
| `public/assets/products/b/gallery/主图2.jpg` | 1.6 MB | 2528 x 1702 | 4.30 | JPG | 16.4 MB | size:warning, pixels:high |
| `public/assets/products/D/gallery/D9-in car.png` | 1.5 MB | 1200 x 960 | 1.15 | PNG | 4.4 MB | size:warning |
| `public/assets/products/S18/gallery/5.png` | 1.0 MB | 1200 x 749 | 0.90 | PNG | 3.4 MB | size:warning |
| `public/assets/products/ex/gallery/2.png` | 942.8 KB | 1668 x 1042 | 1.74 | PNG | 6.6 MB | - |
| `public/assets/products/S18/gallery/S18.20.png` | 756.2 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - |
| `public/assets/products/S18/gallery/7.png` | 480.8 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - |
| `public/assets/products/D/gallery/D9.8.png` | 462.4 KB | 1200 x 800 | 0.96 | PNG | 3.7 MB | - |
| `public/assets/products/D/gallery/2.png` | 430.8 KB | 1200 x 750 | 0.90 | PNG | 3.4 MB | - |
| `public/assets/products/S18/gallery/4.png` | 423.0 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - |
| `public/assets/products/D/gallery/1.png` | 419.9 KB | 1200 x 750 | 0.90 | PNG | 3.4 MB | - |
| `public/assets/products/D/gallery/D9.2 拷贝.png` | 399.5 KB | 1200 x 800 | 0.96 | PNG | 3.7 MB | - |
| `public/assets/products/S18/gallery/0915 拷贝.png` | 319.3 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - |
| `public/assets/products/D/gallery/D9.1 拷贝.png` | 289.2 KB | 1200 x 800 | 0.96 | PNG | 3.7 MB | - |

## Hero Images

- Count: **3**
- Encoded size total: **6.8 MB**
- Largest encoded file: `public/assets/hero/b20-hero.png` (2.3 MB)
- Largest decoded memory: `public/assets/hero/b20-hero.png` (6.0 MB, 1536 x 1024)

| path | size | dimensions | MP | format | decoded memory | risk |
| --- | --- | --- | --- | --- | --- | --- |
| `public/assets/hero/b20-hero.png` | 2.3 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high |
| `public/assets/hero/s35-hero.png` | 2.3 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high |
| `public/assets/hero/ex-hero.png` | 2.2 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high |

## Collection / Product Listing Images

- Count: **20**
- Encoded size total: **83.8 MB**
- Largest encoded file: `public/assets/products/gl/control-panel.png` (9.8 MB)
- Largest decoded memory: `public/assets/products/gl/control-panel.png` (51.5 MB, 4500 x 3002)

| path | size | dimensions | MP | format | decoded memory | risk |
| --- | --- | --- | --- | --- | --- | --- |
| `public/assets/products/gl/control-panel.png` | 9.8 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical |
| `public/assets/products/gl/front.png` | 9.4 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical |
| `public/assets/products/gl/open-lid.png` | 8.5 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical |
| `public/assets/products/gl/gl-black-open.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical |
| `public/assets/products/gl/handle-detail.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical |
| `public/assets/products/S35.png` | 6.5 MB | 3932 x 2534 | 9.96 | PNG | 38.0 MB | size:critical, pixels:critical |
| `public/assets/products/gl.png` | 5.5 MB | 2518 x 2359 | 5.94 | PNG | 22.7 MB | size:critical, pixels:high |
| `public/assets/products/gl/gl-sage-open.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical |
| `public/assets/products/exm.png` | 4.8 MB | 2217 x 2021 | 4.48 | PNG | 17.1 MB | size:critical, pixels:high |
| `public/assets/products/ax.png` | 4.7 MB | 2227 x 2058 | 4.58 | PNG | 17.5 MB | size:critical, pixels:high |
| `public/assets/products/p12.png` | 4.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical |
| `public/assets/products/m.png` | 4.1 MB | 2994 x 2221 | 6.65 | PNG | 25.4 MB | size:critical, pixels:high |
| `public/assets/products/b20.png` | 2.9 MB | 1801 x 1699 | 3.06 | PNG | 11.7 MB | size:high, pixels:warning |
| `public/assets/products/s18-orange.png` | 2.7 MB | 1735 x 1422 | 2.47 | PNG | 9.4 MB | size:high, pixels:warning |
| `public/assets/products/ex.png` | 739.7 KB | 821 x 902 | 0.74 | PNG | 2.8 MB | - |
| `public/assets/products/S18/6.png` | 396.3 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - |
| `public/assets/products/b.jpg` | 264.9 KB | 1500 x 1010 | 1.51 | JPG | 5.8 MB | - |
| `public/assets/products/d.jpg` | 152.9 KB | 815 x 655 | 0.53 | JPG | 2.0 MB | - |
| `public/assets/products/tf.jpg` | 122.6 KB | 1500 x 1136 | 1.70 | JPG | 6.5 MB | - |
| `public/assets/products/k.jpg` | 80.2 KB | 1500 x 1500 | 2.25 | JPG | 8.6 MB | pixels:warning |

## Services / Collection Content Images

- Count: **9**
- Encoded size total: **18.1 MB**
- Largest encoded file: `public/assets/services/gallery/适配器.png` (4.8 MB)
- Largest decoded memory: `public/assets/services/gallery/tool-battery-holder.png` (48.3 MB, 4500 x 2811)

| path | size | dimensions | MP | format | decoded memory | risk |
| --- | --- | --- | --- | --- | --- | --- |
| `public/assets/services/gallery/适配器.png` | 4.8 MB | 4032 x 3024 | 12.19 | PNG | 46.5 MB | size:critical, pixels:critical |
| `public/assets/services/gallery/烟线.png` | 4.3 MB | 4032 x 3024 | 12.19 | PNG | 46.5 MB | size:critical, pixels:critical |
| `public/assets/services/gallery/solar-panel.png` | 2.1 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high |
| `public/assets/services/custom-project-sketch.png` | 1.9 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:warning |
| `public/assets/services/accessories-lineup.png` | 1.6 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:warning |
| `public/assets/services/gallery/untitled.1488.png` | 1.4 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:warning, pixels:critical |
| `public/assets/services/community-connected.png` | 1.3 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:warning |
| `public/assets/services/gallery/tool-battery-holder.png` | 643.4 KB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | pixels:critical |
| `public/assets/services/gallery/电池.jpg` | 91.0 KB | 800 x 800 | 0.64 | JPG | 2.4 MB | - |

## EXM Sequence Black Canvas Check

| path | dimensions | non-black bbox | bbox size | margins L/T/R/B |
| --- | --- | --- | --- | --- |
| `public/assets/products/exm/features/sequence-01.png` | 3373 x 1525 | (81, 80, 3291, 1444) | 3211 x 1365 | (81, 80, 81, 80) |
| `public/assets/products/exm/features/sequence-02.png` | 3373 x 1525 | (80, 80, 3291, 1444) | 3212 x 1365 | (80, 80, 81, 80) |
| `public/assets/products/exm/features/sequence-03.png` | 3373 x 1525 | (80, 80, 3291, 1444) | 3212 x 1365 | (80, 80, 81, 80) |
| `public/assets/products/exm/features/sequence-04.png` | 3373 x 1525 | (80, 80, 3292, 1444) | 3213 x 1365 | (80, 80, 80, 80) |

Observation: current `sequence-01` through `sequence-04` are already cropped to a shared canvas and have approximately 80px safety margins around the non-black content. They no longer show the previous oversized black canvas in the source files. The `_sequence-originals/` backups are still present under `public/assets/products/exm/features/` and are much larger; they should not be referenced by the app, but because they live under `public/assets`, they can still be served if requested.

## All Images

| path | size | dimensions | MP | format | decoded memory | risk | category |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `public/assets/products/gl/control-panel.png` | 9.8 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/ex/models/E50.png` | 9.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/gl/front.png` | 9.4 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/exm/models/exm50-bluegray&lightgray.png` | 9.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/6.png` | 8.9 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/open-lid.png` | 8.5 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/ex/models/EX50.png` | 8.3 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/models/exm40-bluegray&lightgray.png` | 7.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/1.png` | 7.2 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/gl-black-open.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/handle-detail.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/models/gl45-black.png` | 7.0 MB | 4000 x 2668 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/ex/models/E30.png` | 6.8 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/m/models/m55-sage.png` | 6.8 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/ex/gallery/细节图 拷贝3.png` | 6.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/exm/models/exm30-bluegray&lightgray.png` | 6.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | other |
| `public/assets/products/S35.png` | 6.5 MB | 3932 x 2534 | 9.96 | PNG | 38.0 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/m/models/m55-black.png` | 6.2 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/xj.2.png` | 6.1 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/gallery/m45-front.png` | 6.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/models/m45-sage.png` | 6.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/features/4.png` | 6.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-04.png` | 6.0 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/gallery/623 拷贝.png` | 5.9 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/models/gl55-black.png` | 5.8 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/m/gallery/m45-black.png` | 5.7 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/models/m45-black.png` | 5.7 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/ex/gallery/细节图 拷贝2.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl.png` | 5.5 MB | 2518 x 2359 | 5.94 | PNG | 22.7 MB | size:critical, pixels:high | collection/product listing |
| `public/assets/products/exm/features/3.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-03.png` | 5.5 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/2.png` | 5.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-02.png` | 5.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | EXM feature effects |
| `public/assets/products/m/gallery/m45-side.png` | 5.2 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/gl-sage-open.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/products/gl/models/gl35-sage.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/gl/models/gl45-sage.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/gl/models/gl55-sage.png` | 4.9 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm.png` | 4.8 MB | 2217 x 2021 | 4.48 | PNG | 17.1 MB | size:critical, pixels:high | collection/product listing |
| `public/assets/services/gallery/适配器.png` | 4.8 MB | 4032 x 3024 | 12.19 | PNG | 46.5 MB | size:critical, pixels:critical | services/collection content |
| `public/assets/products/ax.png` | 4.7 MB | 2227 x 2058 | 4.58 | PNG | 17.5 MB | size:critical, pixels:high | collection/product listing |
| `public/assets/products/m/gallery/m45-open.png` | 4.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/ex/gallery/细节图 拷贝.png` | 4.6 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/models/gl35-black.png` | 4.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/exm/gallery/开瓶器更新2.png` | 4.6 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m/models/m35-sage.png` | 4.5 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/m/models/m35-black.png` | 4.5 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/p12.png` | 4.4 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | collection/product listing |
| `public/assets/services/gallery/烟线.png` | 4.3 MB | 4032 x 3024 | 12.19 | PNG | 46.5 MB | size:critical, pixels:critical | services/collection content |
| `public/assets/products/ex/gallery/623 拷贝.png` | 4.3 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/gl/models/gl75-black.png` | 4.2 MB | 3308 x 3308 | 10.94 | PNG | 41.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/b/gallery/1.png` | 4.2 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:critical, pixels:critical | product gallery |
| `public/assets/products/m.png` | 4.1 MB | 2994 x 2221 | 6.65 | PNG | 25.4 MB | size:critical, pixels:high | collection/product listing |
| `public/assets/products/exm/models/exm50-black.jpg` | 4.0 MB | 3308 x 3308 | 10.94 | JPG | 41.7 MB | size:critical, pixels:critical | other |
| `public/assets/products/ax/models/ax50-champagne.png` | 3.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/products/b/models/b25.png` | 3.6 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical | other |
| `public/assets/products/exm/models/exm40-black.jpg` | 3.5 MB | 3308 x 3308 | 10.94 | JPG | 41.7 MB | size:high, pixels:critical | other |
| `public/assets/products/b/gallery/b20.png` | 3.4 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical | product gallery |
| `public/assets/products/b/models/b20.png` | 3.4 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical | other |
| `public/assets/products/exm/features/sequence-04.png` | 3.3 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:high, pixels:high | EXM feature effects |
| `public/assets/products/ax/gallery/ax40-front.png` | 3.3 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | product gallery |
| `public/assets/products/ax/models/ax40-champagne.png` | 3.3 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/products/b/gallery/2.png` | 3.3 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical | product gallery |
| `public/assets/products/exm/features/sequence-03.png` | 3.1 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:high, pixels:high | EXM feature effects |
| `public/assets/products/exm/features/sequence-02.png` | 3.1 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:high, pixels:high | EXM feature effects |
| `public/assets/products/exm/models/exm30-black.jpg` | 3.0 MB | 3308 x 3308 | 10.94 | JPG | 41.7 MB | size:high, pixels:critical | other |
| `public/assets/products/ax/gallery/ax50-black.png` | 3.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | product gallery |
| `public/assets/products/ax/models/ax50-black.png` | 3.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/products/b20.png` | 2.9 MB | 1801 x 1699 | 3.06 | PNG | 11.7 MB | size:high, pixels:warning | collection/product listing |
| `public/assets/products/b/gallery/4.png` | 2.8 MB | 4500 x 3002 | 13.51 | PNG | 51.5 MB | size:high, pixels:critical | product gallery |
| `public/assets/products/exm/features/1.png` | 2.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:high, pixels:critical | EXM feature effects |
| `public/assets/products/exm/features/_sequence-originals/sequence-01.png` | 2.7 MB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | size:high, pixels:critical | EXM feature effects |
| `public/assets/products/ax/gallery/ax50-side.png` | 2.7 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | product gallery |
| `public/assets/products/s18-orange.png` | 2.7 MB | 1735 x 1422 | 2.47 | PNG | 9.4 MB | size:high, pixels:warning | collection/product listing |
| `public/assets/products/ax/models/ax30-champagne.png` | 2.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/products/ax/models/ax50-light-gray.png` | 2.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/products/ax/models/ax40-black.png` | 2.6 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/products/ax/gallery/ax30-open.png` | 2.5 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | product gallery |
| `public/assets/community/community-hero.jpg` | 2.5 MB | 1672 x 941 | 1.57 | JPG | 6.0 MB | size:high | community |
| `public/assets/products/ax/models/ax40-light-gray.png` | 2.5 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/hero/b20-hero.png` | 2.3 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high | hero |
| `public/assets/products/ax/models/ax30-black.png` | 2.3 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/hero/s35-hero.png` | 2.3 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high | hero |
| `public/assets/hero/ex-hero.png` | 2.2 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high | hero |
| `public/assets/services/gallery/solar-panel.png` | 2.1 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:high | services/collection content |
| `public/assets/products/ax/models/ax30-light-gray.png` | 2.0 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:high, pixels:critical | other |
| `public/assets/products/exm/features/sequence-01.png` | 1.9 MB | 3373 x 1525 | 5.14 | PNG | 19.6 MB | size:warning, pixels:high | EXM feature effects |
| `public/assets/products/exm/features/cooling-effect.jpg` | 1.9 MB | 4090 x 4723 | 19.32 | JPG | 73.7 MB | size:warning, pixels:critical | EXM feature effects |
| `public/assets/services/custom-project-sketch.png` | 1.9 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:warning | services/collection content |
| `public/assets/products/b/gallery/主图2.jpg` | 1.6 MB | 2528 x 1702 | 4.30 | JPG | 16.4 MB | size:warning, pixels:high | product gallery |
| `public/assets/services/accessories-lineup.png` | 1.6 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:warning | services/collection content |
| `public/assets/products/D/gallery/D9-in car.png` | 1.5 MB | 1200 x 960 | 1.15 | PNG | 4.4 MB | size:warning | product gallery |
| `public/assets/services/gallery/untitled.1488.png` | 1.4 MB | 4000 x 2667 | 10.67 | PNG | 40.7 MB | size:warning, pixels:critical | services/collection content |
| `public/assets/services/community-connected.png` | 1.3 MB | 1536 x 1024 | 1.57 | PNG | 6.0 MB | size:warning | services/collection content |
| `public/assets/products/S18/gallery/5.png` | 1.0 MB | 1200 x 749 | 0.90 | PNG | 3.4 MB | size:warning | product gallery |
| `public/assets/travel-science-material-library/04_Embossed_Aluminum.png` | 976.7 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/products/ex/gallery/2.png` | 942.8 KB | 1668 x 1042 | 1.74 | PNG | 6.6 MB | - | product gallery |
| `public/assets/travel-science-material-library/03_Pre-coated_Steel.png` | 849.0 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/travel-science-material-library/05_HIPS.png` | 793.0 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/travel-science-material-library/02_ABS_Plastic.png` | 781.4 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/travel-science-material-library/01_PP_Plastic.png` | 780.0 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/travel-science-material-library/08_Rubber.png` | 765.8 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/products/S18/gallery/S18.20.png` | 756.2 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - | product gallery |
| `public/assets/products/ex.png` | 739.7 KB | 821 x 902 | 0.74 | PNG | 2.8 MB | - | collection/product listing |
| `public/assets/travel-science-material-library/07_Metal_Aluminum_Alloy.png` | 721.4 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/travel-science-material-library/06_PE_Plastic.png` | 656.5 KB | 1024 x 1024 | 1.05 | PNG | 4.0 MB | - | materials library |
| `public/assets/services/gallery/tool-battery-holder.png` | 643.4 KB | 4500 x 2811 | 12.65 | PNG | 48.3 MB | pixels:critical | services/collection content |
| `public/assets/products/S18/gallery/7.png` | 480.8 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - | product gallery |
| `public/assets/products/D/gallery/D9.8.png` | 462.4 KB | 1200 x 800 | 0.96 | PNG | 3.7 MB | - | product gallery |
| `public/assets/products/D/gallery/2.png` | 430.8 KB | 1200 x 750 | 0.90 | PNG | 3.4 MB | - | product gallery |
| `public/assets/products/S18/gallery/4.png` | 423.0 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - | product gallery |
| `public/assets/products/D/gallery/1.png` | 419.9 KB | 1200 x 750 | 0.90 | PNG | 3.4 MB | - | product gallery |
| `public/assets/products/D/gallery/D9.2 拷贝.png` | 399.5 KB | 1200 x 800 | 0.96 | PNG | 3.7 MB | - | product gallery |
| `public/assets/products/S18/6.png` | 396.3 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - | collection/product listing |
| `public/assets/products/S18/gallery/0915 拷贝.png` | 319.3 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - | product gallery |
| `public/assets/products/D/gallery/D9.1 拷贝.png` | 289.2 KB | 1200 x 800 | 0.96 | PNG | 3.7 MB | - | product gallery |
| `public/assets/products/b.jpg` | 264.9 KB | 1500 x 1010 | 1.51 | JPG | 5.8 MB | - | collection/product listing |
| `public/assets/products/S18/models/1.png` | 219.8 KB | 1200 x 749 | 0.90 | PNG | 3.4 MB | - | other |
| `public/assets/products/exm/features/sound-level-camping.jpg` | 188.2 KB | 925 x 1177 | 1.09 | JPG | 4.2 MB | - | EXM feature effects |
| `public/assets/360/gl55/frame-050.jpg` | 180.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/products/d.jpg` | 152.9 KB | 815 x 655 | 0.53 | JPG | 2.0 MB | - | collection/product listing |
| `public/assets/products/tf.jpg` | 122.6 KB | 1500 x 1136 | 1.70 | JPG | 6.5 MB | - | collection/product listing |
| `public/assets/360/m55/frame-017.jpg` | 111.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-021.jpg` | 109.4 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-018.jpg` | 107.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-020.jpg` | 105.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-019.jpg` | 104.3 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-015.jpg` | 103.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-022.jpg` | 103.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-023.jpg` | 103.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-016.jpg` | 102.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-017.jpg` | 102.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-019.jpg` | 102.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-020.jpg` | 102.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-018.jpg` | 101.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-005.jpg` | 101.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-024.jpg` | 99.4 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-013.jpg` | 99.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-014.jpg` | 98.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-013.jpg` | 98.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-014.jpg` | 98.4 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-006.jpg` | 98.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-024.jpg` | 97.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-023.jpg` | 96.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-037.jpg` | 96.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-007.jpg` | 94.5 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-004.jpg` | 93.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-003.jpg` | 93.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-039.jpg` | 92.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-047.jpg` | 91.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-008.jpg` | 91.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/services/gallery/电池.jpg` | 91.0 KB | 800 x 800 | 0.64 | JPG | 2.4 MB | - | services/collection content |
| `public/assets/360/m55/frame-007.jpg` | 90.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-001.jpg` | 89.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-034.jpg` | 88.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-006.jpg` | 88.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/community/vicky-card.jpg` | 88.4 KB | 367 x 524 | 0.19 | JPG | 751.2 KB | - | community |
| `public/assets/360/gl55/frame-002.jpg` | 88.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-008.jpg` | 87.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-037.jpg` | 87.4 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-004.jpg` | 87.4 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-031.jpg` | 87.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-030.jpg` | 87.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-042.jpg` | 87.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-001.jpg` | 86.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/community/jonny-card.jpg` | 86.3 KB | 369 x 524 | 0.19 | JPG | 755.3 KB | - | community |
| `public/assets/360/gl55/frame-012.jpg` | 86.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-035.jpg` | 86.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-003.jpg` | 85.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-043.jpg` | 84.3 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-005.jpg` | 84.3 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-011.jpg` | 84.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-002.jpg` | 84.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-011.jpg` | 83.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-027.jpg` | 83.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-025.jpg` | 83.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/community/mason-card.jpg` | 82.7 KB | 365 x 524 | 0.19 | JPG | 747.1 KB | - | community |
| `public/assets/360/m55/frame-031.jpg` | 81.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-012.jpg` | 81.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/community/yiwen-card.jpg` | 80.8 KB | 367 x 524 | 0.19 | JPG | 751.2 KB | - | community |
| `public/assets/products/k.jpg` | 80.2 KB | 1500 x 1500 | 2.25 | JPG | 8.6 MB | pixels:warning | collection/product listing |
| `public/assets/360/gl55/frame-035.jpg` | 80.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-040.jpg` | 77.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-025.jpg` | 77.5 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-048.jpg` | 76.3 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-027.jpg` | 76.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-038.jpg` | 75.5 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-015.jpg` | 73.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-021.jpg` | 73.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-016.jpg` | 71.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-028.jpg` | 70.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-026.jpg` | 69.5 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-032.jpg` | 69.3 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-022.jpg` | 69.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-038.jpg` | 66.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-044.jpg` | 66.8 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-026.jpg` | 66.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-036.jpg` | 66.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-009.jpg` | 65.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-041.jpg` | 65.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-028.jpg` | 64.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-009.jpg` | 64.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-032.jpg` | 62.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-036.jpg` | 62.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-010.jpg` | 61.3 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-010.jpg` | 58.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-029.jpg` | 58.6 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-033.jpg` | 56.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-045.jpg` | 51.4 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-049.jpg` | 51.0 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-046.jpg` | 48.9 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-029.jpg` | 48.2 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-033.jpg` | 46.7 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/gl55/frame-034.jpg` | 42.4 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |
| `public/assets/360/m55/frame-030.jpg` | 42.1 KB | 1200 x 800 | 0.96 | JPG | 3.7 MB | - | 360 frames |

## Recommendations

1. Prioritize critical/high encoded-size images first, especially PNGs and large JPGs used above the fold or in early product-detail sections.
2. For mobile, generate responsive variants instead of shipping desktop-scale source dimensions. Use `srcset`/`sizes` or route-specific mobile assets where practical.
3. Convert photographic PNG/JPG assets to WebP/AVIF where transparency is not needed. Keep PNG only for assets that require alpha or exact UI compositing.
4. Do not leave backup/original files inside `public/assets` if they are not meant to ship. Move backups outside `public/` before deployment.
5. Review product gallery images separately from hero and feature assets. Galleries often load later, so lazy loading and responsive dimensions matter more than perfect original fidelity.
6. Keep EXM sequence images same dimensions and same crop box if further optimized; mismatched dimensions will cause reveal jitter.
