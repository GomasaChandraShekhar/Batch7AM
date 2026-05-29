const { expect } = require("@playwright/test");
const { PageObjects } = require("./PageObjects");

class PlaceOrderPage extends PageObjects{

    constructor(page) {
        super(page);
    }

    async addProdToCart(ProdName) {
        await expect.soft(this.products.first()).toBeVisible();
        const products = this.products;
        const productsCount = await products.count();
        for (let i = 0; i < productsCount; i++) {
            if (await products.nth(i).locator("//b").innerText() == ProdName) {
                await products.nth(i).locator("//button[text()=' Add To Cart']").click();
                break;
            }
        }
        
    }

    async navigateToCart() {
        await this.cartBtn.first().click();
    }

    async verifyProdInCart(prodName) {
        await expect.soft(this.cartItem.first()).toBeVisible();
        expect.soft(await this.cartItem.locator('h3').innerText()).toBe(prodName);
    }

    async placeOrder(country) {
        await this.checkoutBtn.click();
        await this.countryField.click();
        await this.countryField.pressSequentially(country);
        await expect.soft(this.countryOption.last()).toBeVisible();
        await this.countryOption.last().click();
        await this.placeOrderBtn.click();
    }


    async getOrderId() {
        await expect.soft(this.orderIdText).toBeVisible();
        let orderId = await this.orderIdText.innerText();
        orderId = orderId.replaceAll('|', '').trim();
        console.log(`OrderId is :: ${orderId}`);
        return orderId;
    }

    async verifyOrder(orderId) {
        await this.ordersHistoryButton.click();
        await expect.soft(this.orderIdCol).toContainText(orderId);
        await this.viewOrderButon.click();
        await expect.soft(this.orderIdInOrderDetails).toContainText(orderId);
        await this.viewOrdersButton.click();
    }




}

module.exports = { PlaceOrderPage };