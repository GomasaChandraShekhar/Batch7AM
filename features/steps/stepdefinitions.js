const { Given, When, Then, And } = require('@cucumber/cucumber');
const { PageObjectManager } = require('../../pages/pageObjectManager');
const { playwright, expect } = require('@playwright/test');

const url = "https://rahulshettyacademy.com/client/#/auth/login";
let orderId;


Given('User is in login page', { timeout: 10000 }, async function () {
    await this.poManager.loginPage.goto(url);
});

Given('User is in login page {string}', { timeout: 10000 }, async function (url) {
    await this.poManager.loginPage.goto(url);
});

When('User login using {string} and {string}', { timeout: 10000 }, async function (email, password) {
    await this.poManager.loginPage.login(email, password);
});

When('User add product {string} to the cart', { timeout: 10000 }, async function (prodName) {
    await this.poManager.placeOrderPage.addProdToCart(prodName);
});

Then('Verify the product {string} in the cart', { timeout: 10000 }, async function (prodName) {
    await this.poManager.placeOrderPage.navigateToCart();
    await this.poManager.placeOrderPage.verifyProdInCart(prodName);
});


When('User enters {string} and place order', { timeout: 10000 }, async function (country) {
    await this.poManager.placeOrderPage.placeOrder(country);
    orderId = await this.poManager.placeOrderPage.getOrderId();
});


Then('Verify order displayed in the orders page', { timeout: 10000 }, async function () {
    await this.poManager.placeOrderPage.verifyOrder(orderId);
    await this.poManager.loginPage.logout();
    await this.poManager.loginPage.closePage();
});