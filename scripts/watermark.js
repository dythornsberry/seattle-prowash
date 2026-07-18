/**
 * Watermark job photos with "SeattleProWash.com" so they can't be reused
 * without attribution. Text is composited into the pixels, centered on the
 * lower-middle of the image where it can't be cropped out.
 *
 * Usage: node scripts/watermark.js [file ...]
 * With no args, runs on the default list of job/before-after photos below.
 * Skips files already watermarked (tracked in scripts/.watermarked.json).
 */

import sharp from "sharp";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(__dirname, "..", "src", "assets");
const LEDGER = join(__dirname, ".watermarked.json");

// Job photos to watermark. Excluded on purpose:
// - patio-pressure-wash-before-after-2026.jpg (already carries the URL banner)
// - hero/owner/truck/team shots (not before-after proof, theft not a concern)
const DEFAULT_FILES = [
  // 2026 raw before/after pairs
  "asphalt-moss-seams-before-2026.jpg",
  "asphalt-moss-seams-after-2026.jpg",
  "green-metal-roof-before-2026.jpg",
  "green-metal-roof-after-2026.jpg",
  "metal-roof-before-2-2026.jpg",
  "metal-roof-after-2-2026.jpg",
  "metal-roof-before-3-2026.jpg",
  "metal-roof-after-3-2026.jpg",
  "metal-roof-before-4-2026.jpg",
  "metal-roof-after-4-2026.jpg",
  "asphalt-roof-before-2-2026.jpg",
  "asphalt-roof-after-2-2026.jpg",
  "west-seattle-patio-before-2026.jpg",
  "west-seattle-patio-after-2026.jpg",
  "rooftop-patio-before-2026.jpg",
  "rooftop-patio-after-2026.jpg",
  "staircase-path-before-2026.jpg",
  "staircase-path-after-2026.jpg",
  "roof-needles-before.jpg",
  "roof-needles-after.jpg",
  "moss-treatment-fresh-application.jpg",
  // 2026 labeled composites without the URL baked in
  "asphalt-roof-before-after-1-2026.jpg",
  "asphalt-roof-before-after-3-2026.jpg",
  "asphalt-roof-before-after-4-2026.jpg",
  "asphalt-roof-before-after-5-2026.jpg",
  "asphalt-roof-before-after-6-2026.jpg",
  "asphalt-roof-before-after-7-2026.jpg",
  "house-wash-before-after-2026.jpg",
  "solar-panel-cleaning-before-after-2026.jpg",
  "gutter-brightening-before-after-2026.jpg",
  "deck-cleaning-before-after-2026.jpg",
  "qfc-sign-cleaning-before-after.jpg",
  "qfc-sign-cleaning-action.jpg",
  // older before/afters still used across the site
  "asphalt-roof-moss-cleaning-before-after.jpg",
  "gutter-cleaning-before-after.jpg",
  "metal-roof-cleaning-before-after.jpg",
  "patio-pressure-washing-before-after.jpg",
  "house-wash-exterior-before-after.jpg",
  "driveway-moss-cleaning-before-after.jpg",
  "roof-moss-removal-detailed-before-after.jpg",
  "roof-softwash-before-after.jpg",
  "recent-asphalt-roof-before-after-2026.webp",
  "recent-green-metal-roof-before-after-2026.webp",
  "recent-silver-metal-roof-before-after-2026.webp",
  "recent-black-metal-roof-cleaning-2026.webp",
  "recent-patio-pressure-washing-before-1-2026.webp",
  "recent-patio-pressure-washing-after-1-2026.webp",
  "recent-patio-pressure-washing-before-2-2026.webp",
  "recent-patio-pressure-washing-after-2-2026.webp",
];

const ledger = existsSync(LEDGER) ? JSON.parse(readFileSync(LEDGER, "utf8")) : {};

function watermarkSvg(width, height) {
  const fontSize = Math.round(width * 0.072);
  const y = Math.round(height * 0.58);
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="${y}" text-anchor="middle"
      font-family="Helvetica, Arial, sans-serif" font-weight="700"
      font-size="${fontSize}" fill="#ffffff" fill-opacity="0.32"
      stroke="#000000" stroke-opacity="0.18" stroke-width="${Math.max(1, Math.round(fontSize / 40))}"
    >SeattleProWash.com</text>
  </svg>`);
}

const files = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_FILES;
let done = 0, skipped = 0, missing = 0;

for (const name of files) {
  const file = join(ASSETS, basename(name));
  if (!existsSync(file)) { missing++; console.warn("missing:", name); continue; }
  if (ledger[basename(name)]) { skipped++; continue; }

  const img = sharp(file);
  const meta = await img.metadata();
  const buf = await img
    .composite([{ input: watermarkSvg(meta.width, meta.height), top: 0, left: 0 }])
    .toBuffer();
  writeFileSync(file, buf);
  ledger[basename(name)] = new Date().toISOString();
  done++;
}

writeFileSync(LEDGER, JSON.stringify(ledger, null, 2));
console.log(`watermarked: ${done}, already done: ${skipped}, missing: ${missing}`);
