import { test, expect } from '@playwright/test';


test("Handling Keyboard Actions", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#name').fill('Playwright');


    await page.locator('#email').fill('Playwright');


});





