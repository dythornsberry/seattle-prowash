/**
 * Merge a before photo and an after photo into one side-by-side composite
 * with BEFORE / AFTER labels, sized for the web.
 *
 * Usage: node scripts/composite-pair.js <before.jpg> <after.jpg> <out.jpg>
 */

import sharp from "sharp";

const [before, after, out] = process.argv.slice(2);
if (!before || !after || !out) {
  console.error("usage: node scripts/composite-pair.js <before> <after> <out>");
  process.exit(1);
}

const H = 1200; // working height per half
const GAP = 12;

function labelSvg(text, color, w) {
  const fs = Math.round(w * 0.085);
  const padX = Math.round(fs * 0.6);
  const pillW = Math.round(text.length * fs * 0.62) + padX * 2;
  const pillH = Math.round(fs * 1.7);
  return Buffer.from(`<svg width="${w}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" rx="${pillH / 2}" width="${pillW}" height="${pillH}" fill="${color}" fill-opacity="0.92"/>
    <text x="${16 + pillW / 2}" y="${16 + pillH / 2 + fs * 0.36}" text-anchor="middle"
      font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="${fs}" fill="#ffffff">${text}</text>
  </svg>`);
}

const mkHalf = async (file, label, color) => {
  const base = await sharp(file).rotate().resize({ height: H }).toBuffer();
  const { width } = await sharp(base).metadata();
  return {
    buf: await sharp(base).composite([{ input: labelSvg(label, color, width), top: 0, left: 0 }]).toBuffer(),
    width,
  };
};

const left = await mkHalf(before, "BEFORE", "#1A3E66");
const right = await mkHalf(after, "AFTER", "#E8722C");

const totalW = left.width + GAP + right.width;
const composite = await sharp({
  create: { width: totalW, height: H, channels: 3, background: "#ffffff" },
})
  .composite([
    { input: left.buf, top: 0, left: 0 },
    { input: right.buf, top: 0, left: left.width + GAP },
  ])
  .jpeg({ quality: 78 })
  .toBuffer();

// Final downscale for web
await sharp(composite).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 72 }).toFile(out);
console.log("wrote", out);
