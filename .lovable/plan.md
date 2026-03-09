
## Implementation: Add Pressure Washing, Window Cleaning, Dryer Vent + Fix Backend Bug

### Files to modify/create (8 total):

1. **TwoStepQuoteForm.tsx** - Add 3 new service checkboxes after Roof/Gutter
2. **submit-quote/index.ts** - Fix bug: use `payload.services` instead of `payload.details`, add services to email HTML
3. **ServicesPreview.tsx** - Add "Our Specialty" badge on Roof card, add text mention for additional services
4. **Header.tsx** - Add Pressure Washing and Window Cleaning to services dropdown
5. **Footer.tsx** - Add new service links, change bottom text to "Satisfaction Guaranteed"
6. **App.tsx** - Add routes for `/pressure-washing` and `/window-cleaning`, update redirects
7. **PressureWashing.tsx** (NEW) - Simple service page using existing patio/driveway photos
8. **WindowCleaning.tsx** (NEW) - Simple service page using technician photos

### Form checkbox order:
- Roof cleaning (moss removal & treatment) - Starting at $500
- Gutter cleaning (includes roof blow-off) - Starting at $300
- Pressure washing - Driveways, patios, siding (no price)
- Window cleaning - Exterior (no price)
- Dryer vent cleaning (no price, no subtitle)

### Available images for new pages:
**Pressure Washing:**
- driveway-pressure-washing.jpg
- patio-pressure-washing-before-after.jpg
- house-siding-softwash-before-after.jpg
- driveway-moss-cleaning-before-after.jpg

**Window Cleaning:**
- technician-house-washing.jpg
- technician-truck-portrait.jpg

### Backend fix detail:
Current code reads `payload.details` but form sends `services`. Fix ensures services appear in:
- Database (leads table)
- Email notification to dythornsberry@gmail.com
- Zapier webhook (already works since full payload is sent)

### After implementation:
User needs to update Zapier to recognize: "Pressure washing", "Window cleaning", "Dryer vent cleaning"
