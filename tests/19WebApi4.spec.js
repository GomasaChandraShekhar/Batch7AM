import { test, expect, request } from '@playwright/test';

test("Security Test Request Intercept", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client");

    // await page.route('**/*.css', route => route.abort());
    await page.locator("#userEmail").fill("gomasachandrashekhar@gmail.com");
    await page.locator("#userPassword").fill("Gomasa@1988");
    await page.locator("#login").click();
    await page.waitForLoadState("domcontentloaded");

    await page.locator("button[routerlink*='myorders']").click();

    // Intercepting response - fake response - 
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69e03b7ef86ba51a656956c1",
        route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69e041b7f86ba51a65695cac" })
    );

    await page.locator("//button[@class='btn btn-primary']").nth(0).click();
    await page.waitForLoadState('domcontentloaded');
    expect(page.getByText('You are not authorize to view')).toHaveText('You are not authorize to view this order');
    await page.pause();


    const signOutBtn = page.getByRole('button', { name: 'Sign Out' });
    await expect(signOutBtn).toBeVisible();
    await signOutBtn.click();

    await page.close();

});


