import { test, expect, chromium } from '@playwright/test';



test("Handling date picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const datePicker1 = page.locator(`#datepicker`);
    const datePicker2 = page.locator(`#txtDate`);
    const startDate = page.locator(`#start-date`);
    const endDate = page.locator(`#end-date`);

    await datePicker1.fill(`03/11/2026`);
    await page.pause();


});



test.skip("Handling page", async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();

    const datePicker1 = page.locator(`#datepicker`);
    const datePicker2 = page.locator(`#txtDate`);
    const startDate = page.locator(`#start-date`);
    const endDate = page.locator(`#end-date`);

    await datePicker1.fill(`03/11/2026`);
    await page.pause();

    await browser.close();

});