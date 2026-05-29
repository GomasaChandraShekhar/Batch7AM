const { expect } = require("@playwright/test");
const { PageObjects } = require("./PageObjects");

class LoginPage extends PageObjects {

    constructor(page) {
        super(page);
    }

    async login(userEmail, password) {
        await this.userEmail.fill(userEmail);
        await this.password.fill(password);
        await this.loginBtn.click();
        await expect.soft(this.signOutBtn).toBeVisible();
    }

    async goto(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async logout() {
        await expect.soft(this.signOutBtn).toBeVisible();
        await this.signOutBtn.click();
    }
    async closePage() {
        await this.page.close();
    }

}


module.exports = { LoginPage };

