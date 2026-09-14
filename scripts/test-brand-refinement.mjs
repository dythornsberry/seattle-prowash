import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright-core';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:8086';
const output = '/private/tmp/prowash-brand-qa';
mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
let checks = 0;
try {
  for (const [width, height] of [[320, 740], [390, 844], [768, 1024], [1024, 800], [1280, 900], [1440, 900], [1920, 1080]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
    await context.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('header').evaluate(el => el.getBoundingClientRect().top), 0);
    const hero = await page.locator('.prowash-hero').boundingBox();
    assert.ok(hero.y + hero.height < height - (width < 768 ? 82 : 0), `Next section visible at ${width}`);
    assert.equal(await page.locator('.prowash-hero img').evaluate(el => el.complete && el.naturalWidth > 0), true);
    assert.doesNotMatch(await page.locator('.prowash-hero').innerText(), /\$\d|Step \d/);
    await page.screenshot({ path: `${output}/hero-${width}.png` });
    checks += 5;

    if (width < 1280) {
      const trigger = page.getByRole('button', { name: 'Open menu', exact: true });
      await trigger.click();
      const dialog = page.getByRole('dialog');
      await dialog.waitFor();
      for (let i = 0; i < 20; i++) {
        await page.keyboard.press('Tab');
        assert.equal(await dialog.evaluate(el => el.contains(document.activeElement)), true);
      }
      await page.keyboard.press('Escape');
      await dialog.waitFor({ state: 'hidden' });
      assert.equal(await trigger.evaluate(el => el === document.activeElement), true);
      await trigger.click();
      await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Pricing', exact: true }).click();
      await page.waitForURL('**/pricing');
      await dialog.waitFor({ state: 'hidden' });
      await page.goto(base, { waitUntil: 'networkidle' });
      checks += 3;
    }
    await page.locator('.prowash-hero').getByRole('button', { name: 'Get a Quote', exact: true }).click();
    const form = page.getByTestId('quote-form');
    await page.waitForFunction(() => {
      const box = document.querySelector('[data-testid="quote-form"]').getBoundingClientRect();
      return box.top >= 80 && box.top < 250;
    });
    for (const label of ['Name *', 'Phone *', 'Email *', 'Address *']) assert.equal(await page.getByLabel(label, { exact: true }).isVisible(), true);
    assert.equal(await form.getByRole('checkbox').count(), 6);
    assert.equal(await form.getByRole('radio').count(), 4);
    assert.doesNotMatch(await form.innerText(), /Step \d|Next:|Back to/);
    await form.screenshot({ path: `${output}/form-${width}.png` });
    checks += 4;

    await page.locator('#results').scrollIntoViewIfNeeded();
    const slider = page.getByRole('slider', { name: 'Before and after comparison' });
    await slider.focus();
    await page.keyboard.press('End');
    assert.equal(await slider.getAttribute('aria-valuenow'), '100');
    await page.keyboard.press('Home');
    assert.equal(await slider.getAttribute('aria-valuenow'), '0');
    await page.keyboard.press('ArrowRight');
    assert.equal(await slider.getAttribute('aria-valuenow'), '1');
    await page.getByRole('button', { name: 'Show next project' }).click();
    assert.match(await page.locator('#results').innerText(), /Skylight/);
    await page.getByRole('button', { name: 'Show previous project' }).click();
    assert.match(await page.locator('#results').innerText(), /Metal Roof Cleaning - Seattle/);
    checks += 3;
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        scrollTo(0, y);
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      await Promise.all([...document.querySelectorAll('main img')].map(img => img.decode().catch(() => {})));
      scrollTo(0, 0);
    });
    assert.deepEqual(await page.locator('main img').evaluateAll(images => images.filter(img => !img.complete || !img.naturalWidth).map(img => img.src)), []);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    assert.deepEqual(errors, []);
    if ([390, 1440].includes(width)) await page.screenshot({ path: `${output}/home-${width}.png`, fullPage: true });
    checks += 3;
    await context.close();
  }

  // All external calls are intercepted. These tests cannot create customer leads.
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  let calls = 0;
  let delay = false;
  let payload;
  await context.route('**/*', async route => {
    if (route.request().url().includes('/functions/v1/submit-quote')) {
      calls++;
      payload = route.request().postDataJSON();
      if (delay) await new Promise(resolve => setTimeout(resolve, 600));
      return route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    }
    return route.request().url().startsWith(base) ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  await page.goto(base, { waitUntil: 'networkidle' });
  const form = page.getByTestId('quote-form');
  await form.getByRole('button', { name: 'Get a Quote' }).click();
  for (const message of ['Name is required', 'Please enter a valid 10-digit phone number', 'Valid email is required', 'Please enter your full street address', 'Please select at least one service', 'Please pick a timeframe']) await page.getByText(message, { exact: true }).waitFor();
  assert.equal(calls, 0);
  checks++;
  await page.getByLabel('Name *', { exact: true }).fill('Preview QA');
  await page.getByLabel('Phone *', { exact: true }).fill('2062346789');
  await page.getByLabel('Email *', { exact: true }).fill('preview@example.com');
  await page.getByLabel('Address *', { exact: true }).fill('123 Example Street, Seattle, WA 98101');
  await page.getByRole('checkbox', { name: 'Complete Gutter Cleaning' }).check();
  await page.getByRole('radio', { name: 'Flexible', exact: true }).check();
  await page.locator('input[name="company"]').evaluate(el => { el.parentElement.style.display = 'block'; });
  await page.locator('input[name="company"]').fill('Spam');
  await form.getByRole('button', { name: 'Get a Quote' }).click();
  await page.waitForFunction(() => document.querySelector('input[name="company"]').getAttribute('aria-invalid') === 'true');
  assert.equal(calls, 0);
  await page.locator('input[name="company"]').fill('');
  checks++;
  delay = true;
  await page.getByLabel('Email *', { exact: true }).press('Enter');
  await page.getByRole('button', { name: 'Sending...' }).waitFor();
  await form.dispatchEvent('submit');
  await page.getByText("Got it! We're on it.", { exact: true }).waitFor();
  assert.equal(calls, 1);
  assert.equal(payload.services, 'Gutter cleaning (includes roof blow-off) | Timeline: Flexible');
  assert.equal(payload.phone, '(206) 234-6789');
  assert.equal(payload.address_verified, false);
  checks += 3;
  await context.close();
  console.log(`PASS: ${checks} branding, responsive layout, navigation, comparison, and mocked-form checks. Screenshots: ${output}`);
} finally {
  await browser.close();
}
