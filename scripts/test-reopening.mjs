import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright-core';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:8084';
const output = '/private/tmp/prowash-reopen-qa';
mkdirSync(output, { recursive: true });
const browser = await chromium.launch();
let checks = 0;
try {
  for (const width of [1440, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const errors = [];
    await context.route('**/*', (route) => route.request().url().startsWith(base) ? route.continue() : route.abort());
    const page = await context.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    for (const path of ['/', '/pricing', '/roof-cleaning', '/gutter-cleaning', '/services', '/seattle-roof-gutter-cleaning', '/gallery']) {
      await page.goto(base + path, { waitUntil: 'domcontentloaded' });
      await page.locator('h1').waitFor();
      await page.evaluate(async () => {
        for (let y = 0; y <= document.body.scrollHeight; y += 750) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 40));
        }
        window.scrollTo(0, 0);
      });
      const body = await page.locator('body').innerText();
      assert.doesNotMatch(body, /\$499|\$250|fully booked|reopen.*January/i, path);
      if (path !== '/gallery') {
        assert.match(body, /\$849/, path);
        assert.match(body, /\$400/, path);
      }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      assert.equal(overflow, false, `Horizontal overflow: ${path} at ${width}px`);
      assert.equal(await page.locator('header a[href="/window-cleaning"], header a[href="/pressure-washing"], footer a[href="/window-cleaning"]').count(), 0);
      if (['/', '/pricing', '/services', '/gutter-cleaning'].includes(path)) {
        await page.screenshot({ path: `${output}/${path.replaceAll('/', '') || 'home'}-${width}.png`, fullPage: true });
      }
      checks++;
    }
    for (const path of ['/window-cleaning', '/pressure-washing', '/commercial', '/services/window-cleaning']) {
      await page.goto(base + path, { waitUntil: 'domcontentloaded' });
      await page.waitForURL('**/services*');
      await page.locator('h1').waitFor();
      assert.match(await page.locator('body').innerText(), /only as an add-on/i);
      checks++;
    }
    assert.deepEqual(errors, [], `Runtime errors at ${width}px`);
    await context.close();
  }

  // Intercept all external traffic; never create a real lead during testing.
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  let payload;
  let submissions = 0;
  let simulateFailure = false;
  await context.route('**/*', async (route) => {
    if (route.request().url().includes('/functions/v1/submit-quote')) {
      assert.equal(route.request().method(), 'POST');
      payload = route.request().postDataJSON();
      submissions++;
      return route.fulfill({ status: simulateFailure ? 500 : 200, contentType: 'application/json', body: JSON.stringify({ ok: !simulateFailure }) });
    }
    return route.request().url().startsWith(base) ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  async function fillDetails() {
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await page.getByRole('textbox', { name: 'Your name', exact: true }).fill('QA Preview Only');
    await page.getByRole('textbox', { name: 'Phone number', exact: true }).fill('2062346789');
    await page.getByRole('button', { name: 'Next: Project Details', exact: true }).click();
    await page.getByLabel('Email *', { exact: true }).fill('preview@example.com');
    await page.getByLabel('Address *', { exact: true }).fill('123 Example Street, Seattle, WA 98101');
    await page.getByRole('radio', { name: 'Flexible', exact: true }).click();
  }
  await fillDetails();
  const addon = page.getByRole('checkbox', { name: 'Pressure washing add-on', exact: true });
  const roof = page.getByRole('checkbox', { name: 'Roof Cleaning', exact: true });
  const gutter = page.getByRole('checkbox', { name: 'Complete Gutter Cleaning', exact: true });
  assert.equal(await addon.isDisabled(), true);
  assert.equal(await page.getByRole('checkbox').count(), 3);
  await page.locator('#contact button[type="submit"]').click();
  await page.getByText('Please select roof cleaning or complete gutter cleaning', { exact: true }).waitFor();
  assert.equal(submissions, 0);
  await roof.check();
  await addon.check();
  await roof.uncheck();
  assert.equal(await addon.isChecked(), false);
  assert.equal(await addon.isDisabled(), true);
  await gutter.check();
  await addon.check();
  await page.screenshot({ path: `${output}/form-mobile.png`, fullPage: true });
  await page.locator('#contact button[type="submit"]').click();
  await page.getByText("Got it! We're on it.", { exact: true }).waitFor();
  assert.equal(submissions, 1);
  assert.equal(payload.services, 'Gutter cleaning (includes roof blow-off), Pressure washing | Timeline: Flexible');
  assert.equal(payload.business_name, 'Seattle ProWash');
  assert.equal(payload.source, 'Website Quote Form');
  assert.equal(payload.address_verified, false);
  checks += 6;

  await fillDetails();
  await roof.check();
  simulateFailure = true;
  await page.locator('#contact button[type="submit"]').click();
  await page.getByText('Got it! We\'re on it.', { exact: true }).waitFor({ timeout: 1000 }).then(() => { throw new Error('False success on server failure'); }, (error) => { if (error.message.includes('False success')) throw error; });
  await page.waitForFunction(() => !document.querySelector('#contact button[type="submit"]')?.disabled);
  assert.equal(await roof.isChecked(), true);
  simulateFailure = false;
  await page.locator('#contact button[type="submit"]').click();
  await page.getByText("Got it! We're on it.", { exact: true }).waitFor();
  assert.equal(payload.services, 'Roof cleaning (moss removal & treatment) | Timeline: Flexible');
  checks += 2;
  await context.close();
  console.log(`PASS: ${checks} route, layout, redirect, and intercepted-form checks. Screenshots: ${output}`);
} finally {
  await browser.close();
}
