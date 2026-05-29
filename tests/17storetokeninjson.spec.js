import { test, expect } from '@playwright/test';

let webContext;

test.beforeAll(async ({ browser }) => {

    const bContext = await browser.newContext();
    const page = await bContext.newPage();

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("gomasachandrashekhar@gmail.com");
    await page.locator("#userPassword").fill("Gomasa@1988");
    await page.locator("#login").click();

    await page.waitForLoadState("networkidle");

    await bContext.storageState({ path: 'state.json' });

    webContext = await browser.newContext({ storageState: 'state.json' });

});

test("Test01", async () => {

    const email = "";
    const prodName = "Zara Coat 4";

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.waitForLoadState('domcontentloaded');

    const products = page.locator(".card-body");
    const productsCount = await products.count();

    const titles = await page.locator(".card-body b").allTextContents();;
    console.log(`Titles are :: ${titles}`);

    for (let i = 0; i < productsCount; i++) {
        if (await products.nth(i).locator("//b").textContent() === prodName) {
            await page.getByRole("button", { name: 'Add To Cart' }).click();
        }
    }

    const signOutBtn = page.getByRole('button', { name: 'Sign Out' });
    await expect(signOutBtn).toBeVisible();
    await signOutBtn.click();

    await page.close();

});



