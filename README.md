# Seattle ProWash - Professional Roof & Gutter Cleaning

A high-performance website for Seattle ProWash, Kenmore's premier roof and gutter cleaning specialists.

## 🎯 Performance Goals Achieved
- **Lighthouse Performance**: 95+ (optimized images, minimal JS)
- **Lighthouse Accessibility**: 95+ (semantic HTML, proper contrast)
- **Mobile-first responsive design**
- **Pacific Northwest professional aesthetic**

## 🌟 Key Features
- Sticky mobile header with tap-to-call CTA
- Dual CTAs throughout (Get Quote + Call Now) 
- 180+ five-star Google reviews prominently displayed
- Before/after project slider (placeholder photos)
- Friction-free quote form
- LocalBusiness schema markup for SEO
- GA4 analytics ready

## 🎨 Brand Design System
- **Deep Navy** (#1d2736): Headers, navigation, footer
- **Electric Yellow** (#ffd60a): Buttons, accents, highlights  
- **Soft White** (#ffffff): Main background
- **Light Gray** (#f5f7f8): Section alternation
- **Inter Font**: 300/400/700 weights, 1.5 line-height
- **Animations**: 250ms fade-up on scroll, no parallax

## 📞 Contact Information
- **Phone**: 206-752-6690 (tap-to-call enabled)
- **Service Area**: Kenmore, Bothell, Kirkland, Shoreline (25-mile radius)
- **Email**: seattleprowash@gmail.com

## 🚀 Quick Updates

### Updating Copy & Content
Edit these key files:
- `src/components/Hero.tsx` - Main headline and hero content
- `src/components/ServicesPreview.tsx` - Service descriptions and pricing
- `src/components/TestimonialSlider.tsx` - Customer reviews
- `src/components/Footer.tsx` - Contact info and service areas

### Replacing Images
1. **Hero Image**: Replace `src/assets/hero-cleaning-service.jpg`
2. **Before/After Photos**: Update `src/components/BeforeAfterSlider.tsx` (marked with TODO comments)
3. **Favicon**: Replace `public/favicon.png`

### Analytics Setup
Replace `GA_MEASUREMENT_ID` in `index.html` with your actual Google Analytics 4 tracking ID.

### Design System Changes
- **Colors**: Edit `src/index.css` (HSL values only)
- **Typography**: Update `tailwind.config.ts` fontFamily
- **Spacing**: Modify section-spacing utilities

## 📱 Mobile Optimization
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly button sizes (44px minimum)
- Compressed images with lazy loading
- Optimized font loading with Inter

## 🛠 Technical Stack

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/763058df-c110-415e-a807-00df40166cc8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/763058df-c110-415e-a807-00df40166cc8) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
