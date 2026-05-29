
const { LoginPage } = require("./LoginPage");
const { PlaceOrderPage } = require("./PlaceOrderPage");

export class PageObjectManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
    }

}

// module.exports = { PageObjectManager };
