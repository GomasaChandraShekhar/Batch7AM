import { test, expect } from '@playwright/test';


test("Handling Text Field 001", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState("domcontentloaded");
    await page.pause();

    await page.getByPlaceholder('Enter Name').fill('Playwright');

    console.log("Before clear :: ", await page.getByPlaceholder('Enter Name').inputValue());

    await page.getByRole('textbox', { name: 'Enter Name' }).clear();

    console.log("After clear :: ", await page.getByPlaceholder('Enter Name').inputValue());

});


test.skip("Handling Text Fields 002", async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');

    // await page.getByRole('textbox', { name: 'Username:' }).fill('Verify text role');
    // await page.getByRole('button', { name: 'Primary Action' }).click();
    // await page.getByRole('link', { name: 'Home' }).nth(3).click();
    // await page.getByText('Submit Form').click();
    await page.getByLabel('Email:').fill('Email001@gmail.com');
    await page.getByLabel('Password:').fill('Password001');
    await page.getByPlaceholder('Enter your full name').pressSequentially('FullName001');

});





