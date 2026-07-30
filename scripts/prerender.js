/**
 * Post-build prerender script for SEO.
 *
 * Phase 1 (meta): creates route-specific HTML files with correct static meta
 * tags (titles, descriptions, canonicals, OG tags) via string replacement.
 *
 * Phase 2 (snapshot): renders each route in headless Chromium against the
 * built output and writes the real DOM into each HTML file, so crawlers that
 * don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot, Bing, schema
 * validators) see full page content and page-specific JSON-LD. External
 * requests are blocked during snapshotting so third-party widgets never
 * pollute the captured DOM. If Chromium is unavailable (e.g. a restricted CI
 * image), phase 2 is skipped with a warning and the build still succeeds with
 * phase-1 output — a deploy can never break because of this step.
 *
 * Run after `vite build`: node scripts/prerender.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { createServer } from 'http';
import { execSync } from 'child_process';
import { dirname, join, extname, normalize } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://www.seattleprowash.com';

// All routes with their SEO metadata
const routes = [
  {
    path: '/',
    title: 'Seattle Roof & Gutter Cleaning Experts',
    description: 'Roof cleaning, moss removal & gutter cleaning in Seattle, Kenmore, Lake Forest Park, Bothell, Kirkland & Shoreline. 12-month moss-free guarantee. Licensed & insured. Fast quotes.',
  },
  {
    path: '/services',
    title: 'All Services',
    description: 'Roof cleaning, gutter cleaning, moss treatment, pressure washing, window cleaning, and commercial services in Seattle, Kenmore, Bothell, Kirkland & beyond.',
  },
  {
    path: '/roof-cleaning',
    title: 'Roof Cleaning & Moss Removal in Seattle, WA',
    description: 'Roof cleaning and moss removal for asphalt, composite & metal roofs in Seattle, Kenmore, Bothell & Kirkland. 12-month moss-free guarantee. Licensed & insured. Fast quotes.',
  },
  {
    path: '/gutter-cleaning',
    title: 'Gutter Cleaning in Seattle & Kenmore, WA',
    description: 'Expert gutter cleaning in Seattle, Kenmore, Bothell & Kirkland. Prevent water damage and protect your foundation. Licensed & insured. Free estimates.',
  },
  {
    path: '/moss-treatment',
    title: 'Moss Removal & Treatment in Seattle, WA',
    description: 'Expert moss removal and treatment in Seattle, Bothell & Kirkland. 12-month moss-free guarantee. Safe removal & prevention. Licensed & insured.',
  },
  {
    path: '/pressure-washing',
    title: 'Pressure Washing in Seattle & Kenmore, WA',
    description: 'Professional pressure washing for driveways, patios, decks, and siding in Seattle, Kenmore, Bothell, and surrounding areas. Free estimates, licensed and insured.',
  },
  {
    path: '/window-cleaning',
    title: 'Window Cleaning in Seattle & Kenmore, WA',
    description: 'Professional exterior window cleaning in Seattle, Kenmore & Bothell. Streak-free results with safe techniques. Free estimates. Licensed & insured.',
  },
  {
    path: '/commercial',
    title: 'Commercial Cleaning Services in Seattle, WA',
    description: 'Commercial power washing, roof cleaning, gutter cleaning, and window cleaning for businesses in the Seattle area. Licensed & insured. Free estimates.',
  },
  {
    path: '/pricing',
    title: 'Pricing | Roof, Gutter & Pressure Washing',
    description: 'Transparent pricing for roof cleaning, gutter cleaning, pressure washing, and window cleaning in Seattle. No hidden fees. Free estimates.',
  },
  {
    path: '/about',
    title: 'About Dylan & the Team',
    description: 'Meet Dylan Thornsberry, owner of Seattle ProWash. Kenmore-based roof and gutter cleaning specialists serving Seattle Metro since 2022. 224 5-star reviews.',
  },
  {
    path: '/faq',
    title: 'Roof Cleaning FAQ - Seattle & Kenmore',
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
    description: 'Read 224 authentic 5-star reviews for Seattle ProWash. Real testimonials from customers in Kenmore, Bothell, Kirkland & Seattle.',
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
    path: '/resources/roof-cleaning-cost-seattle',
    title: 'What Roof Cleaning Costs in Seattle (2026 Guide)',
    description: 'Real 2026 roof cleaning prices from a Seattle-area contractor. Most asphalt roofs run $499–$1,200 with gutter cleaning included. Metal starts at $800.',
  },
  {
    path: '/resources/best-time-roof-gutter-cleaning-seattle',
    title: 'Best Time of Year for Roof & Gutter Cleaning in Seattle',
    description: 'When to schedule roof cleaning, moss treatment, and gutter cleaning in Seattle — season-by-season advice from a Kenmore-based contractor who works year-round.',
  },
  {
    path: '/resources/moss-treatment-vs-roof-cleaning',
    title: 'Moss Treatment vs. Full Roof Cleaning: Which Do You Need?',
    description: 'Moss treatment kills the moss; full roof cleaning removes it too. A Seattle-area contractor explains when each makes sense and what they cost.',
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
    path: '/lake-forest-park-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Lake Forest Park, WA',
    description: 'Expert roof cleaning, moss removal, and gutter cleaning in Lake Forest Park, WA. Serving Sheridan Beach, Horizon View & all neighborhoods. 12-month guarantee. Licensed & insured.',
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
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Shoreline. Expert roof and gutter services with 5-star reviews. Free estimates. Call (206) 752-6690',
  },
  {
    path: '/lynnwood-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning Lynnwood WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Lynnwood. Expert exterior cleaning services with 5-star reviews. Free estimates. Call (206) 752-6690',
  },
  {
    path: '/woodinville-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Woodinville, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Woodinville, WA. Professional service for all Woodinville neighborhoods. 12-month guarantee. Licensed & insured.',
  },
  {
    path: '/bellevue-roof-gutter-cleaning',
    title: 'Roof & Gutter Cleaning in Bellevue, WA',
    description: 'Expert roof cleaning, gutter cleaning, and moss removal in Bellevue, WA. Serving all Bellevue neighborhoods. 12-month moss-free guarantee. Licensed & insured. Free estimates.',
  },
  {
    path: '/edmonds-roof-gutter-cleaning',
    title: 'Roof Cleaning & Gutter Cleaning Edmonds WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Edmonds. Expert exterior cleaning services with 5-star reviews. Free estimates. Call (206) 752-6690',
  },
  {
    path: '/mill-creek-roof-gutter-cleaning',
    title: 'Roof Cleaning & Gutter Cleaning Mill Creek WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Mill Creek. Expert exterior cleaning services with 5-star reviews. Free estimates. Call (206) 752-6690',
  },
  {
    path: '/mountlake-terrace-roof-gutter-cleaning',
    title: 'Roof Cleaning & Gutter Cleaning Mountlake Terrace WA',
    description: 'Professional roof cleaning, moss removal & gutter cleaning in Mountlake Terrace. Expert exterior cleaning services with 5-star reviews. Free estimates. Call (206) 752-6690',
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
    <meta name="geo.position" content="47.75740;-122.24650" />
    <meta name="ICBM" content="47.75740, -122.24650" />

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

// ---------------------------------------------------------------------------
// Phase 2: snapshot rendered DOM into the phase-1 HTML files
// ---------------------------------------------------------------------------

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff2': 'font/woff2',
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const safePath = normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
      const candidates = [
        join(DIST, safePath),
        join(DIST, safePath, 'index.html'),
        join(DIST, 'index.html'), // SPA fallback
      ];
      for (const file of candidates) {
        if (existsSync(file) && !file.endsWith('/') && extname(file)) {
          try {
            const body = readFileSync(file);
            res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
            res.end(body);
            return;
          } catch {
            // fall through to next candidate
          }
        }
      }
      res.writeHead(404);
      res.end();
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function launchChromium() {
  // playwright-core ships no browsers (keeps `npm install` fast on CI, e.g.
  // Cloudflare Pages). Download just headless Chromium on demand, pinned to
  // the same version so the browser revision matches the driver.
  const { chromium } = await import('playwright-core');
  try {
    return await chromium.launch();
  } catch {
    console.log('Chromium not found — downloading via `npx playwright@1.62.0 install chromium --only-shell`...');
    execSync('npx -y playwright@1.62.0 install chromium --only-shell', { stdio: 'inherit', timeout: 240000 });
    return await chromium.launch();
  }
}

async function snapshotRoutes() {
  let server;
  let browser;
  try {
    server = await startStaticServer();
    const port = server.address().port;
    browser = await launchChromium();
    await snapshotWithBrowser(browser, port);
  } finally {
    // Always release these — a leaked HTTP server keeps the node process
    // alive forever, which hangs CI builds (Cloudflare Pages kills them at
    // the time limit and the deploy never happens).
    if (browser) await browser.close().catch(() => {});
    if (server) server.close();
  }
}

async function snapshotWithBrowser(browser, port) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 2000 } });

  // Block all external requests: faster snapshots, and third-party widgets
  // (reviews carousel, analytics, maps) never end up in the captured DOM,
  // which keeps hydration on the client clean.
  await context.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith(`http://127.0.0.1:${port}`)) return route.continue();
    return route.abort();
  });

  const page = await context.newPage();
  let ok = 0;
  const failed = [];

  for (const route of routes) {
    const outFile = route.path === '/'
      ? join(DIST, 'index.html')
      : join(DIST, route.path, 'index.html');
    try {
      await page.goto(`http://127.0.0.1:${port}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForFunction(
        () => (document.getElementById('root')?.innerHTML.length ?? 0) > 500,
        { timeout: 15000 }
      );
      // Scroll through the page so IntersectionObserver-gated sections
      // (DeferredSection) render before we snapshot.
      await page.evaluate(async () => {
        const step = window.innerHeight;
        for (let y = 0; y <= document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(300);

      const { rootHtml, schemas } = await page.evaluate(() => ({
        rootHtml: document.getElementById('root').innerHTML,
        schemas: [...document.head.querySelectorAll('script[type="application/ld+json"][data-injected]')].map(
          (s) => s.textContent
        ),
      }));

      let html = readFileSync(outFile, 'utf-8');
      html = html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
      if (schemas.length) {
        const schemaTags = schemas
          .map((s) => `    <script type="application/ld+json" data-prerendered="1">${s}</script>`)
          .join('\n');
        html = html.replace('</head>', `${schemaTags}\n  </head>`);
      }
      writeFileSync(outFile, html);
      ok++;
    } catch (err) {
      failed.push(`${route.path} (${err.message.split('\n')[0]})`);
    }
  }

  console.log(`✓ Snapshotted rendered DOM for ${ok}/${routes.length} routes`);
  if (failed.length) {
    console.warn(`⚠ Snapshot failed for ${failed.length} route(s) — those remain meta-only:\n  ${failed.join('\n  ')}`);
  }
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

try {
  await snapshotRoutes();
} catch (err) {
  console.warn(`⚠ DOM snapshot phase skipped (${err.message.split('\n')[0]}) — pages ship with meta tags only, same as before this feature.`);
}

// Belt and braces: never let a lingering handle (server socket, browser
// subprocess) keep the build hanging in CI.
process.exit(0);
