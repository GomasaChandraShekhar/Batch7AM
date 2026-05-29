import { test, expect } from '@playwright/test';

test.skip("Page Navigation Test", async ({ page }) => {

    await page.goto("https://www.tutorialspoint.com/typescript/index.htm");
    await page.waitForLoadState('domcontentloaded');
    const pageTitle1 = await page.title();
    console.log('First page title is :: ', pageTitle1);

    await page.pause();

    await page.goto("https://playwright.dev/");
    await page.waitForLoadState('domcontentloaded');
    const pageTitle2 = await page.title();
    console.log('Second page title is :: ', pageTitle2);

    expect.soft(pageTitle1).not.toBe(pageTitle2);

    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
    expect.soft(await page.title()).toBe(pageTitle1);

    await page.goForward();
    await page.waitForLoadState('domcontentloaded');
    expect.soft(await page.title()).not.toBe(pageTitle1);

    await page.close();

});

