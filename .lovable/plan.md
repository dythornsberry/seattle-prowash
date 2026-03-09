

## Assessment: Current Services Section vs. HydraClean

**Current state:** The ServicesPreview is a clean icon-based card grid with 5 services. It's functional but visually flat -- small icons, lots of text, no images, and every card looks similar. It doesn't create the visual impact HydraClean achieves.

**What HydraClean does better:**
1. **"FEATURED" label** with large, image-backed cards for their top 4 services -- each card has a real photo with a title overlay, making it scannable and visually compelling
2. **Below that**, a separate detailed section with descriptions, icons, and CTAs for each service
3. The two-layer approach (visual browse → detailed info) lets visitors quickly identify services AND read details

## Plan: Redesign Services Section

### 1. Replace ServicesPreview with a two-part layout

**Part A -- Featured Service Cards (image grid)**
- 4 large image cards in a 2x2 grid (desktop), stacking on mobile
- Each card: real before/after or service photo as background, dark gradient overlay, service title + short tagline in white text
- Roof Cleaning gets a "FEATURED" or "Our Specialty" badge
- Cards link to their service pages
- Use existing assets: `roof-softwash-before-after.jpg`, `gutter-cleaning-before-after.jpg`, `driveway-pressure-washing.jpg`, `technician-house-washing.jpg`

**Part B -- Service Details Section**
- Below the image grid, a 2-column (desktop) / single-column (mobile) layout
- 4-5 service blocks, each with: icon, title, 2-3 sentence description, "Learn More" link
- Includes Dryer Vent Cleaning (which has no photo)
- Single CTA button at bottom: "Get My Free Quote"

### 2. Files to modify
- `src/components/ServicesPreview.tsx` -- full rewrite with the two-part layout

### 3. Key details
- Images use `object-cover` with aspect-ratio containers (no broken layouts if images load slowly)
- Navy gradient overlay ensures white text is always readable
- Hover effect: slight scale + shadow lift
- Mobile: cards stack vertically, full-width
- All existing service links and navigation preserved

