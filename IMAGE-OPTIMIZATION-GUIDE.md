# Image Optimization Guide - Seattle ProWash Website

**Last Updated:** October 24, 2025

## Overview
This guide lists every image currently used on the website, organized by location and priority. Download, compress to WebP format using [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app), and re-upload to replace the originals.

## Compression Guidelines
- **Hero Images:** Max 400 KB (WebP format)
- **Standard Images:** Max 300 KB (WebP format)
- **Quality Setting:** 85-90% for WebP compression
- **Format:** Convert ALL to `.webp` for best performance

---

## 1. CRITICAL PRIORITY - Hero Image (Largest Contentful Paint)

### Hero Section
| Current Filename | Location | Used In | Target Size | Notes |
|-----------------|----------|---------|-------------|-------|
| `hero-roof-cleaning.jpg` | `src/assets/` | Hero.tsx | **400 KB max** | Main hero background - compress to WebP and rename to `hero-roof-cleaning.webp` |

**How to Replace:**
1. Download `src/assets/hero-roof-cleaning.jpg`
2. Compress to WebP (<400KB)
3. Save as `hero-roof-cleaning.webp`
4. Upload to `src/assets/`
5. Update import in `src/components/Hero.tsx` from `.jpg` to `.webp`

---

## 2. HIGH PRIORITY - Above The Fold & Frequently Viewed

### About Section Images
| Current Filename | Location | Used In | Target Size | Notes |
|-----------------|----------|---------|-------------|-------|
| `dylan-owner-patio-pressure-washing.jpg` | `src/assets/` | AboutPreview.tsx, About.tsx, Gallery.tsx | 300 KB | Owner photo - has WebP version already |
| `dylan-owner-patio-pressure-washing.webp` | `src/assets/` | AboutPreview.tsx | 300 KB | WebP version exists, verify size |

### Before/After Slider (Homepage - High Visibility)
| Current Filename | Location | Used In | Target Size | Notes |
|-----------------|----------|---------|-------------|-------|
| `new-roof-before-1.jpg` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | Slider project #1 before |
| `new-roof-after-1.jpg` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | Slider project #1 after |
| `new-roof-before-1.webp` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | WebP version exists |
| `new-roof-after-1.webp` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | WebP version exists |
| `new-metal-roof-before-2.jpg` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | Slider project #2 before |
| `new-metal-roof-after-2.jpg` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | Slider project #2 after |
| `new-metal-roof-before-2.webp` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | WebP version exists |
| `new-metal-roof-after-2.webp` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | WebP version exists |
| `new-patio-before-3.jpg` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | Slider project #3 before |
| `new-patio-after-3.jpg` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | Slider project #3 after |
| `new-patio-before-3.webp` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | WebP version exists |
| `new-patio-after-3.webp` | `src/assets/` | BeforeAfterSlider.tsx | 300 KB | WebP version exists |

### Cost of Waiting Section
| Current Filename | Location | Used In | Target Size | Notes |
|-----------------|----------|---------|-------------|-------|
| `8cb3c10f-c05a-4727-93c9-247d82982b7a.png` | `public/lovable-uploads/` | CostOfWaiting.tsx | 300 KB | Damaged roof image |
| `0189ddf5-dfd1-4746-b6b4-7b665e561954.png` | `public/lovable-uploads/` | CostOfWaiting.tsx | 300 KB | Clean roof image |

---

## 3. MEDIUM PRIORITY - Service Pages & Gallery

### Service Page Hero Images
| Current Filename | Location | Used In | Target Size | Notes |
|-----------------|----------|---------|-------------|-------|
| `roof-moss-removal-detailed-before-after.jpg` | `src/assets/` | RoofCleaning.tsx, RoofMoss.tsx, Services.tsx | 300 KB | Main roof service image |
| `gutter-cleaning-before-after.jpg` | `src/assets/` | GutterCleaning.tsx, Services.tsx, Gallery.tsx | 300 KB | Main gutter service image |
| `house-softwash-before-after.jpg` | `src/assets/` | Services.tsx | 300 KB | House washing service |
| `patio-pressure-washing-before-after.jpg` | `src/assets/` | Services.tsx, Gallery.tsx | 300 KB | Patio service image |
| `house-wash-exterior-before-after.jpg` | `src/assets/` | Gallery.tsx | 300 KB | House exterior before/after |
| `driveway-moss-cleaning-before-after.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Driveway cleaning |
| `asphalt-roof-moss-cleaning-before-after.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Asphalt roof cleaning |
| `metal-roof-cleaning-before-after.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Metal roof cleaning |

### Team & Equipment Photos
| Current Filename | Location | Used In | Target Size | Notes |
|-----------------|----------|---------|-------------|-------|
| `dylan-roof-work.jpg` | `src/assets/` | About.tsx, Gallery.tsx | 300 KB | Dylan working on roof |
| `technician-house-washing.jpg` | `src/assets/` | About.tsx | 300 KB | Team member washing house |
| `technician-truck-portrait.jpg` | `src/assets/` | About.tsx, Gallery.tsx | 300 KB | Team member with truck |
| `technician-holding-ladder.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Team member with ladder |
| `technician-moving-ladder.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Team member moving ladder |
| `prowash-truck.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Company truck photo |
| `prowash-truck-street.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Truck on street |
| `prowash-truck-driveway.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Truck at jobsite |
| `truck-at-jobsite.jpg` | `src/assets/` | Gallery.tsx | 300 KB | Truck at work location |
| `hero-cleaning-service.jpg` | `src/assets/` | Gallery.tsx | 300 KB | General service photo |

---

## 4. GALLERY IMAGES - Public Folder (48 images)

**Location:** `public/lovable-uploads/`  
**Used In:** Gallery.tsx, BeforeAfterSlider.tsx  
**Target Size:** 300 KB each  

### Before/After Gallery Images (Public Folder)
| Filename | Used In | Category | Target Size |
|----------|---------|----------|-------------|
| `30f25fb0-b625-4f3e-8328-3084ca71c36b.png` | BeforeAfterSlider, Gallery | Roof Before | 300 KB |
| `0d94bc5e-3592-4aa4-877a-d124110a3d0e.png` | BeforeAfterSlider, Gallery | Roof After | 300 KB |
| `7cdfb095-76e6-4419-b395-a8272819a23b.png` | BeforeAfterSlider, Gallery | Gutter Before | 300 KB |
| `cd85dd92-8acb-405d-a73c-44650e962bd8.png` | BeforeAfterSlider, Gallery | Gutter After | 300 KB |
| `61bfb1f1-0bee-423a-be7a-c49142b6fd6b.png` | BeforeAfterSlider, Gallery | Patio Before | 300 KB |
| `7a0d1b2c-03a2-4054-8cf2-6bdc1dca519c.png` | BeforeAfterSlider, Gallery | Patio After | 300 KB |
| `e74889d8-949e-43d7-8979-5150f13e7df4.png` | Gallery | Roof Moss | 300 KB |
| `39ad7527-e74d-4532-a64b-0365b83aee6b.png` | Gallery | Metal Roof | 300 KB |
| `380b267e-dbb4-4a71-8ac9-2bba6d28b15c.png` | Gallery | Asphalt Roof | 300 KB |
| `64d9c018-2edd-4f52-a9c8-26f38eacb1ab.png` | Gallery | Decra Roof Before | 300 KB |
| `d860338a-0f08-4e00-9f5a-6de054035c8f.png` | Gallery | Decra Roof After | 300 KB |
| `61baa673-a9e7-4e3c-a983-cc33629610c0.png` | Gallery | Plastic Awning Before | 300 KB |
| `0b5d9cfa-52bb-4f34-b0ff-3ddd5f38c3b4.png` | Gallery | Plastic Awning After | 300 KB |
| `06729db5-d286-4da3-88bf-5096689d3383.png` | Gallery | Paver Driveway Before | 300 KB |
| `84877120-87fc-4d9f-8151-f6013e38b055.png` | Gallery | Paver Driveway After | 300 KB |
| `a1418643-21de-4dd3-a77d-eebe9209eaef.png` | Gallery | House Washing Before | 300 KB |
| `da123d29-831c-41a6-be6e-0dab3deef9f0.png` | Gallery | House Washing After | 300 KB |
| `11602706-3a5c-4674-b4c2-f6957b0984d2.png` | Gallery | Siding Softwash | 300 KB |
| `26d7c8d9-d5dc-42b1-ac63-62630e258539.png` | Gallery | Concrete Stairs Before | 300 KB |
| `b2ed7767-a921-4d56-8dfb-1c942c3daaa7.png` | Gallery | Concrete Stairs After | 300 KB |
| `e5ca4024-1728-4972-8b36-99d8c320f4e4.png` | Gallery | Covered Driveway Before | 300 KB |
| `ae56c077-963d-480b-a403-d5f4e4f81a2a.png` | Gallery | Covered Driveway After | 300 KB |
| `b629f07e-3990-42a8-920f-554f60488376.png` | Gallery | 2nd Story Patio Before | 300 KB |
| `d07dd994-a56c-4706-8503-37b4bdde1119.png` | Gallery | 2nd Story Patio After | 300 KB |
| `405b2518-e88f-4784-9f29-4abab64c56e4.png` | Gallery | Modern Patio Before | 300 KB |
| `6792eaac-aa82-4a1d-bbea-f66f775c2275.png` | Gallery | Modern Patio After | 300 KB |
| `93a442fb-b597-4fdb-95b1-e0ca6294ae45.png` | Gallery | Gutter Brightening Before | 300 KB |
| `df415af5-fda0-44d2-aefc-2dd719bd41fd.png` | Gallery | Gutter Brightening After | 300 KB |
| `421f2edc-aeab-4325-add0-bfac9af5b8e0.png` | Gallery | Concrete Steps Moss | 300 KB |
| `0c381942-caa7-4984-890e-3512190e2d02.png` | Gallery | Retaining Wall | 300 KB |
| `5addf656-858e-47e3-87a9-1db331528b89.png` | Gallery | Pressure Wash Progress | 300 KB |
| `3ea4a872-b0d7-4474-bd88-15f516d47269.png` | Gallery | Driveway Surface Cleaner | 300 KB |
| `c3386497-89a0-4539-b130-d2f2a5b71098.png` | Gallery | Driveway Pressure Wash | 300 KB |
| `e71dc1ab-f8e0-4119-955e-97c1575a9493.png` | Gallery | Roof Softwash Progress | 300 KB |
| `f5ad7abe-66c3-4d28-9e13-0b6502f2accb.png` | Gallery | Roof Softwash Progress 2 | 300 KB |
| `a11c1a99-bb8a-4f6e-9560-6fb43b8f452d.png` | Gallery | Roof Softwash In Progress | 300 KB |
| `a5496294-1c91-46fa-b818-fc3078124376.png` | Gallery | Roof Softwash Complete | 300 KB |
| `9147ed99-2a8c-4306-8495-352fc0ed8049.png` | Gallery | Commercial Building Wash | 300 KB |
| `ec1b3a15-96fe-4ee4-a4e5-a3ac395e72bc.png` | Gallery | Commercial Entrance Before | 300 KB |
| `4c0b025c-98d6-4265-931f-3290ae71575e.png` | Gallery | Commercial Entrance After | 300 KB |
| `4b6fff3e-567e-4898-916f-6985b5ac941e.png` | Gallery | Technician Apartment Softwash | 300 KB |
| `b6f5f7ae-fe57-44dc-99a7-17e3d06139ee.png` | Gallery | Technician Surface Cleaning | 300 KB |
| `b075ca80-743b-42a6-830e-f31f8831ca56.png` | Gallery | Patio Pressure Wash Progress | 300 KB |
| `69a00574-1236-42ac-8dad-f347524ce62e.png` | Gallery | Disgusting Patio Before | 300 KB |
| `2c817c93-c905-4c9d-9f5c-9a73cbf8ad86.png` | Gallery | Patio After Clean | 300 KB |

---

## Bulk Optimization Workflow

### Step 1: Download All Images
Download all images from both locations:
- **From Project:** `src/assets/` folder (26 images)
- **From Project:** `public/lovable-uploads/` folder (48 images)

### Step 2: Compress to WebP
Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app):
1. Upload all images (TinyPNG accepts up to 20 at a time)
2. **Settings for Squoosh:**
   - Format: WebP
   - Quality: 85-90%
   - Resize if needed (max width 2000px for hero, 1200px for others)
3. **Settings for TinyPNG:**
   - Select "WebP" as output format
   - Download compressed versions

### Step 3: Verify File Sizes
Before re-uploading, verify:
- Hero image: ≤ 400 KB ✓
- All other images: ≤ 300 KB ✓

### Step 4: Re-upload & Replace
**For `src/assets/` images:**
1. Replace JPG files with WebP versions (same filename, change extension)
2. Update imports in code from `.jpg` to `.webp`

**For `public/lovable-uploads/` images:**
1. Replace PNG files with WebP versions (change `.png` to `.webp`)
2. Update src paths in Gallery.tsx and BeforeAfterSlider.tsx from `.png` to `.webp`

### Step 5: Update Code References
After uploading WebP versions, update these files:
- `src/components/Hero.tsx` - Change hero import to `.webp`
- `src/components/BeforeAfterSlider.tsx` - Update slider image paths
- `src/components/CostOfWaiting.tsx` - Update public folder paths
- `src/pages/Gallery.tsx` - Update all gallery image paths
- `src/pages/Services.tsx` - Update service page images
- `src/pages/About.tsx` - Update about page images

---

## Expected Performance Gains

### Before Optimization
- **Estimated Total Size:** ~25-35 MB (uncompressed JPG/PNG)
- **Hero LCP:** 3-5 seconds
- **Page Load:** 6-8 seconds

### After Optimization
- **Target Total Size:** ~8-12 MB (compressed WebP)
- **Hero LCP:** <2.5 seconds ✓
- **Page Load:** <3 seconds ✓
- **File Size Reduction:** ~60-70%

---

## Tools & Resources

### Recommended Compression Tools
1. **[TinyPNG](https://tinypng.com)** - Bulk compression, 20 files at once
2. **[Squoosh](https://squoosh.app)** - Fine-grained control, visual comparison
3. **[ImageOptim](https://imageoptim.com/)** - Mac app for batch processing

### Browser Support
WebP is supported by 97%+ of browsers (all modern browsers). No fallback needed for most users.

---

## Checklist

- [ ] Download all 74 images from project
- [ ] Compress hero image to <400KB WebP
- [ ] Compress 73 other images to <300KB WebP each
- [ ] Re-upload to `src/assets/` and `public/lovable-uploads/`
- [ ] Update code references (6 files to edit)
- [ ] Test hero image loads correctly
- [ ] Run Lighthouse test to verify LCP <2.5s
- [ ] Verify all gallery images display correctly

---

**Questions?** If any images appear broken after optimization, check:
1. File paths match exactly (case-sensitive)
2. Extensions changed from `.jpg`/`.png` to `.webp` in code
3. Images uploaded to correct folders

**Last Updated:** October 24, 2025
