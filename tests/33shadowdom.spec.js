import { test, expect } from '@playwright/test';


test.skip("Handling Shadow DOM", async ({ page }) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForTimeout(4000);
    await page.pause();

    const shadowRoot = page.locator('#userName');

    const userName = shadowRoot.locator('#kils');
    await userName.scrollIntoViewIfNeeded();
    await userName.fill('Playwright');

    const field2 = shadowRoot.getByRole('textbox', { name: 'Enter pizza name' });
    await field2.fill('Chicken Pizaa');

    await page.waitForTimeout(4000);
});

test("Handling iframe inside Shadow DOM", async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-in-shadow-dom/');
    await page.waitForTimeout(4000);
    await page.pause();

    const shadowRoot = page.locator('#userName');

    const pact1Frame = shadowRoot.frameLocator('#pact1');
    const currentCrushFiel = pact1Frame.locator('#jex');
    await currentCrushFiel.scrollIntoViewIfNeeded();
    await currentCrushFiel.fill('Playwright');

    const pact3Frame = pact1Frame.frameLocator('#pact3');

    const destinyField = pact3Frame.getByRole('textbox', { name: 'Destiny' });
    await destinyField.fill('I am here');

    await page.waitForTimeout(4000);
});

