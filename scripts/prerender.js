/**
 * Post-build prerender script for SEO.
 *
 * Creates route-specific HTML files with correct static meta tags so that
 * search engines get proper titles, descriptions, canonical URLs, and
 * Open Graph tags without needing to execute JavaScript.
 *
 * Run after `vite build`: node scripts/prerender.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://www.seattleprowash.com';

// All routes with their SEO metadata
const routes = [
  {
    path: '/',
    title: 'Seattle Roof & Gutter Cleaning Experts',
    description: 'Expert roof cleaning and gutter cleaning in Seattle, Kenmore, Bothell, Kirkland & Shoreline. 12-month moss-free guarantee. Licensed & insured. Free quotes.',
  },
  {
    path: '/services',
    title: 'All Services',
    description: 'Roof cleaning, gutter cleaning, moss treatment, pressure washing, window cleaning, and commercial services in Seattle, Kenmore, Bothell, Kirkland & beyond.',
  },
  {
    path: '/roof-cleaning',
    title: 'Professional Roof Cleaning Services',
    description: 'Expert roof cleaning and moss removal in Seattle. Eco-friendly soft wash that extends roof life. 12-month guarantee. Licensed & insured. Free quotes.',
  },
  {
    path: '/gutter-cleaning',
    title: 'Professional Gutter Cleaning Services',
    description: 'Expert gutter cleaning in Seattle, Kenmore, Bothell & Kirkland. Prevent water damage and protect your foundation. Licensed & insured. Free quotes.',
  },
  {
    path: '/moss-treatment',
    title: 'Professional Moss Removal & Treatment',
    description: 'Expert moss removal and treatment in Seattle, Bothell & Kirkland. 12-month moss-free guarantee. Safe removal & prevention. Licensed & insured.',
  },
  {
    path: '/pressure-washing',
    title: 'Pressure Washing Services',
    description: 'Professional pressure washing for driveways, patios, decks, and siding in Seattle, Kenmore, Bothell, and surrounding areas. Free quotes, licensed and insured.',
  },
  {
    path: '/window-cleaning',
    title: 'Exterior Window Cleaning',
    description: 'Professional exterior window cleaning in Seattle, Kenmore & Bothell. Streak-free results with safe techniques. Free quotes. Licensed & insured.',
  },
  {
    path: '/commercial',
    title: 'Commercial Cleaning Services',
    description: 'Commercial power washing, roof cleaning, gutter cleaning, and window cleaning for businesses in the Seattle area. Licensed & insured. Free estimates.',
  },
  {
    path: '/pricing',
    title: 'Pricing | Roof, Gutter & Pressure Washing',
    description: 'Transparent pricing for roof cleaning, gutter cleaning, pressure washing, and window cleaning in Seattle. No hidden fees. Free quotes.',
  },
  {
    path: '/about',
    title: 'About Dylan & the Team',
    description: 'Meet Dylan Thornsberry, owner of Seattle ProWash. Kenmore-based roof and gutter cleaning specialists serving Seattle Metro since 2022. 200+ 5-star reviews.',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    description: 'Get answers to common questions about Seattle ProWash roof and gutter cleaning. Learn about our process, moss treatment guarantee, pricing, and service areas.',
  },
  {
    path: '/gallery',
    title: 'Before & After Gallery',
    description: 'See real roof and gutter cleaning transformations from Seattle ProWash. Before and after photos from Kenmore, Bothell, Kirkland, and Seattle area homes.',
  },
  {
    path: '/reviews',
    title: 'Customer Reviews',
    description: 'Read 200+ authentic 5-star reviews for Seattle ProWash. Real testimonials from customers in Kenmore, Bothell, Kirkland & Seattle.',
  },
  {
    path: '/service-areas',
    title: 'Service Areas - Roof & Gutter Cleaning Near You',
    description: 'Seattle ProWash serves Kenmore, Bothell, Kirkland, Lynnwood, Shoreline & surrounding cities. Professional roof and gutter cleaning within 15 miles.',
  },
  {
    path: '/resources',
    title: 'Roof & Gutter Care Resources',
    description: 'Expert guides and tips from Seattle ProWash professionals. Learn about moss prevention, gutter maintenance, and protecting your Pacific Northwest home.',
  },
  {
    path: '/resources/roof-gutter-cleaning-importance',
    title: 'Why Regular Roof and Gutter Cleaning Matters',
    description: 'Learn why regular roof and gutter maintenance is essential for Pacific Northwest homes. Prevent water damage, extend roof life, and save on energy costs.',
  },
  {
    path: '/resources/prevent-moss-algae-growth',
    title: 'How to Prevent Moss and Algae Growth on Your Roof',
    description: 'Discover proven strategies to prevent moss and algae growth on Pacific Northwest roofs. Professional tips for protecting your home\'s value and extending roof life.',
  },
  {
    path: '/resources/gutter-cleaning-safety-tips',
    title: 'Safety Tips When Cleaning Gutters',
    description: 'Essential safety tips for gutter cleaning. Learn proper equipment, techniques, and when to call professionals. Avoid common hazards and protect yourself.',
  },
  // Location pages
  {
    path: '/kenmore-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Kenmore, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Kenmore, WA. Serving Kenmore Highlands, Moorlands, and all local neighborhoods. 12-month guarantee. Licensed & insured.',
  },
  {
    path: '/bothell-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Bothell, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Bothell, WA. Serving all Bothell neighborhoods including Canyon Park and Country Village. 12-month moss-free guarantee. Licensed & insured.',
  },
  {
    path: '/kirkland-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Kirkland, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Kirkland, WA. Serving Juanita, Totem Lake, Houghton, and all Kirkland neighborhoods. 12-month guarantee.',
  },
  {
    path: '/seattle-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning - Seattle',
    description: 'Kenmore-based roof and gutter cleaning specialists serving Seattle. Warranty-safe moss removal for Queen Anne, Ballard, Green Lake, Capitol Hill and all Seattle neighborhoods.',
  },
  {
    path: '/shoreline-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning Shoreline WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Shoreline. Expert roof and gutter services with 5-star reviews. Free quotes. Call (206) 752-6690',
  },
  {
    path: '/lynnwood-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning Lynnwood WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Lynnwood. Expert exterior cleaning services with 5-star reviews. Free quotes. Call (206) 752-6690',
  },
  {
    path: '/woodinville-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Woodinville, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Woodinville, WA. Professional service for all Woodinville neighborhoods. 12-month guarantee. Licensed & insured.',
  },
  {
    path: '/bellevue-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Bellevue, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Bellevue, WA. Serving all Bellevue neighborhoods. 12-month moss-free guarantee. Licensed & insured. Same-day quotes.',
  },
  {
    path: '/edmonds-roof-gutter-cleaning',
    title: 'Roof Cleaning & Gutter Cleaning Edmonds WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Edmonds. Expert exterior cleaning services with 5-star reviews. Free quotes. Call (206) 752-6690',
  },
  {
    path: '/mill-creek-roof-gutter-cleaning',
    title: 'Roof Cleaning & Gutter Cleaning Mill Creek WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Mill Creek. Expert exterior cleaning services with 5-star reviews. Free quotes. Call (206) 752-6690',
  },
  {
    path: '/mountlake-terrace-roof-gutter-cleaning',
    title: 'Roof Cleaning & Gutter Cleaning Mountlake Terrace WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Mountlake Terrace. Expert exterior cleaning services with 5-star reviews. Free quotes. Call (206) 752-6690',
  },
  {
    path: '/redmond-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Redmond, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Redmond, WA. Professional service for all Redmond neighborhoods. 12-month moss-free guarantee. Licensed & insured.',
  },
  {
    path: '/sammamish-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Sammamish, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Sammamish, WA. Professional service for all Sammamish neighborhoods. 12-month guarantee. Licensed & insured.',
  },
];

function generateHead(route) {
  const fullTitle = route.path === '/'
    ? 'Expert Roof & Gutter Cleaning in Seattle | Seattle ProWash'
    : `${route.title} | Seattle ProWash`;
  const canonicalUrl = `${BASE_URL}${route.path === '/' ? '' : route.path}`;
  const ogImage = `${BASE_URL}/og-seattle-prowash.jpg`;

  return `
    <title>${fullTitle}</title>
    <meta name="description" content="${route.description}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="Seattle ProWash" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Geographic Meta Tags -->
    <meta name="geo.region" content="US-WA" />
    <meta name="geo.placename" content="Kenmore" />
    <meta name="geo.position" content="47.7574;-122.2429" />
    <meta name="ICBM" content="47.7574, -122.2429" />

    <!-- Open Graph -->
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Seattle ProWash" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${ogImage}" />`;
}

function prerender() {
  const templatePath = join(DIST, 'index.html');

  if (!existsSync(templatePath)) {
    console.error('dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  const template = readFileSync(templatePath, 'utf-8');
  let count = 0;

  for (const route of routes) {
    const headContent = generateHead(route);

    // Replace the existing <title> and meta description in the template
    // with route-specific values, and inject additional SEO tags
    let html = template;

    // Replace title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      '' // Remove - will be in injected block
    );

    // Remove existing meta description (will be in injected block)
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      ''
    );

    // Remove existing OG tags (will be in injected block)
    html = html.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      ''
    );
    html = html.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      ''
    );
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      ''
    );

    // Remove existing Twitter tags (will be in injected block)
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      ''
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      ''
    );

    // Remove existing geo tags (will be in injected block)
    html = html.replace(
      /<meta name="geo\.region" content="[^"]*" \/>/,
      ''
    );
    html = html.replace(
      /<meta name="geo\.placename" content="[^"]*" \/>/,
      ''
    );
    html = html.replace(
      /<meta name="geo\.position" content="[^"]*" \/>/,
      ''
    );
    html = html.replace(
      /<meta name="ICBM" content="[^"]*" \/>/,
      ''
    );

    // Inject the route-specific head content before </head>
    html = html.replace('</head>', `${headContent}\n  </head>`);

    // Clean up empty lines from removed tags
    html = html.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Determine output path
    if (route.path === '/') {
      writeFileSync(templatePath, html);
    } else {
      const routeDir = join(DIST, route.path);
      mkdirSync(routeDir, { recursive: true });
      writeFileSync(join(routeDir, 'index.html'), html);
    }
    count++;
  }

  console.log(`✓ Pre-rendered ${count} routes with static SEO meta tags`);
}

prerender();
