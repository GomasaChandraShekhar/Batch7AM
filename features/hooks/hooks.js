const { After, Before, Status } = require('@cucumber/cucumber');
const { BeforeStep, AfterStep, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { PageObjectManager } = require('../../pages/pageObjectManager');
const playwright = require('@playwright/test');
const { expect } = require('@playwright/test');

// BeforeAll(async function () {
//     console.log("I am the BeforeAll hook");
// });

// AfterAll(async function () {
//     console.log("I am the AfterAll hook");
// });

Before(async function () {
    // console.log("I am the Before hook");
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext({ viewport: { width: 1500, height: 690 } })
    this.page = await context.newPage();
    this.poManager = new PageObjectManager(this.page);
});

// After(async function () {
//     console.log("I am the After hook");
// });

// BeforeStep(async function () {
//     // This hook will be executed before all steps in a scenario with tag @foo
//     console.log("I am the BeforeStep hook");
// });

AfterStep(async function ({ result }) {
    // console.log("I am the AfterStep hook");
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: `screenshots/failed_${Date.now()}.png` });
    }
});



