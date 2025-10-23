# Image Optimization Guide

## Priority Images to Compress and Convert to WebP

### 🔴 CRITICAL - Hero & Above-the-Fold Images (Max 400KB)
These images load first and have the biggest impact on LCP (Largest Contentful Paint):

1. **src/assets/hero-gray-house.webp** - Already WebP ✓ but verify it's under 400KB
   - Current: Main hero background
   - Already has `loading="eager"` and `fetchPriority="high"` ✓

### 🟡 HIGH PRIORITY - Gallery & Before/After Images (Max 300KB each)

#### BeforeAfterSlider Images (convert to WebP):
2. **src/assets/new-roof-before-1.webp** - Already WebP ✓
3. **src/assets/new-roof-after-1.webp** - Already WebP ✓
4. **src/assets/new-metal-roof-before-2.webp** - Already WebP ✓
5. **src/assets/new-metal-roof-after-2.webp** - Already WebP ✓
6. **src/assets/new-patio-before-3.webp** - Already WebP ✓
7. **src/assets/new-patio-after-3.webp** - Already WebP ✓

#### JPG Fallbacks (these should also be compressed):
8. **src/assets/new-roof-before-1.jpg**
9. **src/assets/new-roof-after-1.jpg**
10. **src/assets/new-metal-roof-before-2.jpg**
11. **src/assets/new-metal-roof-after-2.jpg**
12. **src/assets/new-patio-before-3.jpg**
13. **src/assets/new-patio-after-3.jpg**

#### Gallery Page Images (convert to WebP):
14. **src/assets/dylan-owner-patio-pressure-washing.jpg** - Has WebP version ✓
15. **src/assets/dylan-roof-work.jpg**
16. **src/assets/hero-cleaning-service.jpg**
17. **src/assets/prowash-truck.jpg**
18. **src/assets/prowash-truck-street.jpg**
19. **src/assets/prowash-truck-driveway.jpg**
20. **src/assets/technician-truck-portrait.jpg**
21. **src/assets/technician-holding-ladder.jpg**
22. **src/assets/technician-moving-ladder.jpg**
23. **src/assets/truck-at-jobsite.jpg**
24. **src/assets/asphalt-roof-moss-cleaning-before-after.jpg**
25. **src/assets/gutter-cleaning-before-after.jpg**
26. **src/assets/metal-roof-cleaning-before-after.jpg**
27. **src/assets/patio-pressure-washing-before-after.jpg**
28. **src/assets/house-wash-exterior-before-after.jpg**
29. **src/assets/driveway-moss-cleaning-before-after.jpg**

#### About Page Images (convert to WebP):
30. **src/assets/technician-house-washing.jpg**

#### Service Page Images (convert to WebP):
31. **src/assets/roof-moss-removal-detailed-before-after.jpg**
32. **src/assets/house-softwash-before-after.jpg**

### 🟢 MEDIUM PRIORITY - Public Uploads (Max 300KB each)

These are in `/public/lovable-uploads/` - used in Gallery, BeforeAfterSlider, and CostOfWaiting:
33. All PNG files in `/public/lovable-uploads/*.png` (50+ files)
   - These should be converted to WebP format
   - Consider if any can be removed if not actively used

### 🔵 LOW PRIORITY - Additional Assets
34. **src/assets/seattle-prowash-logo.png** - Logo (keep as PNG for transparency)
35. **public/favicon.png** - Favicon (small, keep as is)

## Optimization Steps

### Step 1: Compress with TinyPNG or Squoosh
1. Download all images listed above
2. Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress
3. For Squoosh, recommended settings:
   - **WebP format**
   - **Quality: 80-85** (adjust based on visual quality)
   - **Resize if needed** (max width: 1920px for hero, 1200px for others)

### Step 2: Verify File Sizes
- Hero images: ≤ 400KB
- All other images: ≤ 300KB
- PNG uploads: ≤ 200KB (or convert to WebP)

### Step 3: Replace Files
After compression:
1. Replace the original files in `src/assets/` and `public/lovable-uploads/`
2. Verify images still look crisp on the site
3. Run Lighthouse test to check LCP improvements

## Lazy Loading Status

✅ **IMPLEMENTED** - All non-hero images now use lazy loading via `OptimizedImage` component
✅ **IMPLEMENTED** - Hero image uses `loading="eager"` and `fetchPriority="high"`

## Next Steps

1. ✅ Update messaging to prioritize Roof Cleaning
2. ✅ Add Gutter Cleaning as add-on section
3. ✅ Enable lazy loading for non-hero images
4. ⏳ Compress and replace images (manual step)
5. ⏳ Run Lighthouse test to verify LCP < 2.5s

## Expected Performance Impact

- **Before:** LCP likely 3-5 seconds
- **After:** Target LCP < 2.5 seconds (desktop and mobile)
- **Savings:** 50-70% reduction in image file sizes
- **Result:** Faster page loads, better SEO, improved user experience
