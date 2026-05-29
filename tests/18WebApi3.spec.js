import { test, expect, request } from '@playwright/test';
import { ApiUtils } from './utils/APiUtils';

const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPalyload = { orders: [{ country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5" }] };
const noOrdersPayload = { data: [], message: "No Orders" };
let response = {};

test.beforeAll("API Test valid credentials", async () => {

    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPalyload);

});


test("Place Order", async ({ page }) => {

    await page.addInitScript(value => { window.localStorage.setItem('token', value); },
        response.token);

    await page.goto('https://rahulshettyacademy.com/client');

    // intercepting the response - API response -> { playwright dummy response } - browser - render data on browser

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(noOrdersPayload);
            route.fulfill(
                {
                    response,
                    body,
                }
            );
        }
    );

    await page.locator("button[routerlink*='myorders']").click();

    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    await page.pause();
    const noOrdersMessage = await page.locator('.mt-4').innerText();
    console.log(noOrdersMessage);

    const signOutBtn = page.getByRole('button', { name: 'Sign Out' });
    await expect(signOutBtn).toBeVisible();
    await signOutBtn.click();

    await page.close();

});


// {"data":[],"message":"No Orders"}
