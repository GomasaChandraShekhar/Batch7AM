import { test, expect } from '@playwright/test';


test.skip("Handling Tab Test", async ({ page, context }) => {

    await page.goto(`https://demo.automationtesting.in/Windows.html`);
    await page.waitForLoadState('domcontentloaded');

    const parentTabTitle = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(page).toHaveTitle('Frames & windows');

    await page.locator(`//a[text()='Open New Tabbed Windows ']`).click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'click' }).click(),
        ]);

    const childPageTitle = await newPage.title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(newPage).toHaveTitle("Selenium");
    await page.pause();

    if (childPageTitle == "Selenium") {
        await newPage.close();
    }

    await page.bringToFront();

    const parentTabTitle2 = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle2);

    await expect.soft(page).toHaveTitle('Frames & windows');



});


test.skip("Handling Window Test", async ({ browser }) => {

    const context = await browser.newContext();

    const parentPage = await context.newPage();

    await parentPage.goto(`https://demo.automationtesting.in/Windows.html`);
    await parentPage.waitForLoadState('domcontentloaded');

    const parentTabTitle = await parentPage.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(parentPage).toHaveTitle('Frames & windows');

    // await parentPage.locator(`//a[text()='Open New Seperate Windows']`).click();
    await parentPage.getByText('Open New Seperate Windows').click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            parentPage.getByRole('button', { name: 'click' }).click(),
        ]);

    const pages = await context.pages();

    const childPageTitle = await newPage.title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(newPage).toHaveTitle("Selenium");
    await page.pause();

    if (childPageTitle == "Selenium") {
        await newPage.close();
    }

    await page.bringToFront();

    const parentTabTitle2 = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle2);

    await expect.soft(page).toHaveTitle('Frames & windows');


});


test("Handling Multiple Windows Test", async ({ page, context }) => {

    await page.goto(`https://demo.automationtesting.in/Windows.html`);
    await page.waitForLoadState('domcontentloaded');

    const parentTabTitle = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(page).toHaveTitle('Frames & windows');

    // await page.locator(`//a[text()='Open Seperate Multiple Windows']`).click();
    await page.getByText('Open Seperate Multiple Windows').click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'click' }).click(),
        ]);

    const childPageTitle = await newPage.title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(newPage).toHaveTitle("Index");
    const emailField = newPage.getByPlaceholder('Email id for Sign Up');

    await expect.soft(emailField).toBeVisible();
    await expect.soft(emailField).toBeEnabled();
    await expect.soft(emailField).toBeEditable();

    if (childPageTitle == "Index") {
        await newPage.close();
    }

    await page.bringToFront();

    const parentTabTitle2 = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle2);

    await expect.soft(page).toHaveTitle('Frames & windows');


});


