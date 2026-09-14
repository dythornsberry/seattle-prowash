import assert from 'node:assert/strict';
import { mkdirSync, readFileSync } from 'node:fs';
import ts from 'typescript';
import { chromium } from 'playwright-core';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:8086';
const output = '/private/tmp/prowash-brand-consistency';
mkdirSync(output, { recursive: true });

// Follow the app's route declarations so newly added pages join this audit.
const source = ts.createSourceFile('App.tsx', readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const paths = [];
function visit(node) {
  if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(source) === 'Route') {
    const attributes = node.attributes.properties.filter(ts.isJsxAttribute);
    const path = attributes.find(attribute => attribute.name.getText(source) === 'path')?.initializer;
    const element = attributes.find(attribute => attribute.name.getText(source) === 'element')?.initializer;
    if (path && ts.isStringLiteral(path) && path.text !== '*' && element && ts.isJsxExpression(element) && ts.isJsxSelfClosingElement(element.expression) && element.expression.tagName.getText(source) !== 'Navigate') paths.push(path.text);
  }
  ts.forEachChild(node, visit);
}
visit(source);
assert.ok(paths.length >= 34, 'All public pages included');

async function wordmarkStyles(locator) {
  return locator.evaluate(element => [...element.children].map(part => {
    const style = getComputedStyle(part);
    return {
      text: part.textContent,
      family: style.fontFamily,
      size: style.fontSize,
      weight: style.fontWeight,
      spacing: style.letterSpacing === 'normal' ? '0px' : style.letterSpacing,
      lineHeight: style.lineHeight,
      transform: style.textTransform,
      color: style.color,
    };
  }));
}

const browser = await chromium.launch();
let checks = 0;
let reference;
let darkReference;
try {
  for (const width of [1440, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    await context.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const path of paths) {
      await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
      await page.locator('header [data-brand-wordmark]').waitFor();
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.evaluate(() => document.fonts.check('700 22px Poppins')), true);
      const header = await wordmarkStyles(page.locator('header [data-brand-wordmark]'));
      const footer = await wordmarkStyles(page.locator('footer [data-brand-wordmark]'));
      reference ||= header;
      darkReference ||= footer;
      assert.deepEqual(header, reference, `Header matches across ${path} at ${width}`);
      assert.deepEqual(footer, darkReference, `Footer matches across ${path} at ${width}`);
      for (const mark of [header, footer]) {
        assert.deepEqual(mark.map(part => part.text), ['Seattle', 'ProWash']);
        const typography = part => { const { text, color, ...type } = part; return type; };
        assert.deepEqual(typography(mark[0]), typography(mark[1]));
        assert.match(mark[0].family, /^Poppins/);
        assert.equal(mark[0].weight, '700');
        assert.equal(mark[0].size, '22px');
        assert.equal(mark[0].spacing, '0px');
      }
      assert.equal(await page.locator('footer').getByRole('link', { name: 'Seattle ProWash home', exact: true }).getAttribute('href'), '/');
      const brandBox = await page.locator('header [data-brand-wordmark]').boundingBox();
      const quoteBox = await page.locator('header').getByRole('button', { name: 'Get a Quote', exact: true }).boundingBox();
      assert.ok(brandBox.x >= 0 && brandBox.x + brandBox.width < quoteBox.x && brandBox.y >= 0 && brandBox.y + brandBox.height <= 80, `Header fit: ${path} at ${width}`);
      const typographyIssues = await page.locator('main h1, main h2, main h3, main h4').evaluateAll(headings => headings.filter(element => !getComputedStyle(element).fontFamily.startsWith('Poppins')).map(element => element.textContent));
      assert.deepEqual(typographyIssues, [], `Heading font: ${path}`);
      assert.equal(await page.locator('body').evaluate(element => getComputedStyle(element).fontFamily.startsWith('Inter')), true);
      if (path === '/about') {
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `About page fits: ${width}`);
        assert.deepEqual(await page.locator('main div.text-sm').evaluateAll(elements => elements.filter(element => element.scrollWidth > element.clientWidth + 2).map(element => element.textContent)), [], `About stats fit: ${width}`);
      }
      checks += 8;

      if (width < 1280) {
        await page.getByRole('button', { name: 'Open menu', exact: true }).click();
        const dialog = page.getByRole('dialog');
        await dialog.waitFor();
        assert.deepEqual(await wordmarkStyles(dialog.locator('[data-brand-wordmark]')), reference, `Menu matches: ${path}`);
        await page.getByRole('heading', { name: 'Seattle ProWash', exact: true }).waitFor();
        if (path === '/' && width === 390) await page.screenshot({ path: `${output}/menu-${width}.png`, animations: 'disabled' });
        await page.keyboard.press('Escape');
        await dialog.waitFor({ state: 'hidden' });
        checks++;
      }

      if (path === '/service-areas') {
        const mapMark = await wordmarkStyles(page.locator('main [data-brand-wordmark]'));
        assert.deepEqual(mapMark, reference.map(part => ({ ...part, size: '14px', lineHeight: '15.4px' })));
        assert.equal(await page.locator('main [data-brand-wordmark]').evaluate(element => [...element.closest('section').querySelectorAll('.absolute')].every(marker => {
          const box = marker.getBoundingClientRect();
          return box.left >= 0 && box.right <= innerWidth;
        })), true, `Service-area diagram fits: ${width}`);
        checks++;
      }
      if (['/', '/about', '/service-areas'].includes(path) && width !== 320) {
        const label = path === '/' ? 'home' : path.slice(1);
        await page.screenshot({ path: `${output}/${label}-${width}.png` });
        await page.locator('footer').evaluate(element => window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 96));
        await page.screenshot({ path: `${output}/${label}-footer-${width}.png` });
      }
      assert.deepEqual(errors, [], `Runtime errors: ${path}`);
    }
    console.log(`PASS: ${paths.length} pages at ${width}px`);
    await context.close();
  }
  console.log(`PASS: ${checks} cross-site brand, typography, header-fit, and menu checks. Screenshots: ${output}`);
} finally {
  await browser.close();
}
