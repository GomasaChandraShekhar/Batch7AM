import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

test("Login Test", async ({ page }) => {

    const pageObjectManager = new PageObjectManager(page);

    const url = "https://rahulshettyacademy.com/client";
    const userEmail = 'gomasachandrashekhar@gmail.com';
    const password = 'Gomasa@1988';
    const ProdName = "ZARA COAT 3";
    let orderId;

    await pageObjectManager.loginPage.goto(url);
    await page.pause();
    await pageObjectManager.loginPage.login(userEmail, password);
    // Add product to the cart
    await pageObjectManager.placeOrderPage.addProdToCart(ProdName);
    // Navigate to cart and place order
    await pageObjectManager.placeOrderPage.placeOrder();
    // Capture and verify the order
    orderId = await pageObjectManager.placeOrderPage.getOrderId();
    await pageObjectManager.placeOrderPage.verifyOrder(orderId);
    await pageObjectManager.loginPage.logout();

    await page.close();


});
