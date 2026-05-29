import { test, expect, firefox, chromium } from '@playwright/test';

// firefox

test.skip("Launch Firefox Browser", async () => {

    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.locator('#name').fill("Username");


    // await browser.close();
});

test("Launch Chrome Browser", async () => {

    const browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();



    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.locator('#name').fill("Username");


    // await browser.close();
});

