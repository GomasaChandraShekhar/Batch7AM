import { test, expect } from '@playwright/test';


test("Handling Radio Button", async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.waitForLoadState('domcontentloaded');

    await page.getByLabel('Email:').fill('gomasachandrashekhar@gmail.com');
    await page.getByLabel('Password:').fill('Gomasa@1988');

    // await page.getByLabel('Email:').pressSequentially('gomasachandrashekhar@gmail.com');
    // await page.getByLabel('Password:').pressSequentially('Gomasa@1988');

    await page.getByRole('button', { name: 'Log in' }).click();

    // Log out Link - Assert
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    await page.getByLabel('Poor').check();
    await page.waitForLoadState('domcontentloaded');
    await page.locator('css = #pollanswers-4').check();
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`xpath = //input[@name='pollanswers-1']`).first().check();
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`xpath = //input[@name='pollanswers-1']`).last().check();
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`xpath = //input[@name='pollanswers-1']`).nth(2).check();
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`xpath = //input[@name='pollanswers-1']`).nth(3).check();
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`xpath = //input[@name='pollanswers-1']`).nth(0).check();
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`xpath = //input[@name='pollanswers-1']`).nth(1).check();
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator(`xpath = //input[@name='pollanswers-1']`).nth(1)).toBeChecked();
    await expect(page.locator(`xpath = //input[@name='pollanswers-1']`).nth(2)).not.toBeChecked();



});


test.skip("Handling Checkboxes Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('checkbox', { name: 'Sunday' }).scrollIntoViewIfNeeded();
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await expect(page.getByRole('checkbox', { name: 'Sunday' })).toBeChecked();

    await page.getByLabel('Monday').check();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByLabel('Monday')).toBeChecked();
    await page.waitForLoadState('domcontentloaded');

    // await page.locator('css = #wednesday').check();
    await page.waitForLoadState('domcontentloaded');
    // await expect.soft(page.locator('#wednesday')).toBeChecked();

    await expect.soft(page.getByLabel('Wednesday')).toBeChecked();

    await page.locator(`//input[@id='thursday']`).check();
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.locator(`//input[@id='thursday']`)).toBeChecked();
    await page.waitForLoadState('domcontentloaded');

    // await expect.soft(page.getByLabel('Wednesday')).toBeChecked();

    await page.locator(`//input[@id='thursday']`).uncheck();
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.locator(`//input[@id='thursday']`)).not.toBeChecked();
    await page.waitForLoadState('domcontentloaded');

    // await expect.soft(page.getByLabel('Wednesday')).toBeChecked();

});












