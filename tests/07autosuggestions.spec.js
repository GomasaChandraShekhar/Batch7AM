import { test, expect } from '@playwright/test';

test.skip("Handling Dropdown", async ({ page }) => {

    await page.goto(`https://www.google.com/`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    await page.locator('textarea[name="q"]').fill(`playwright`);  //  //textarea[@name="q"]
    const autoSuggestions = page.locator('ul[role="listbox"] li'); // //ul[@role="listbox"]//li
    await expect(autoSuggestions).toHaveCount(10);

    for (let element of await autoSuggestions.all()) {
        const textData = await element.innerText();
        console.log(textData);
        if (textData == 'playwright documentation') {
            await element.click();
            await page.waitForTimeout(5000);
            expect(await page.locator(`//h3[@id="_gnzpaYmNNfr3seMPkP2goQY_37"]`)).toBeVisible();
            break;
        }
    }

    await page.close();
});


test("Handling Dropdown as button", async ({ page }) => {

    await page.goto(`https://getbootstrap.com/docs/5.3/components/dropdowns/`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const drpButtons = page.locator(`//div[@class="dropdown"]//button[@class='btn btn-secondary dropdown-toggle']`);

    await drpButtons.first().click();

    const listItems = page.locator(`//ul[@class="dropdown-menu show"]//li/a`);

    await listItems.nth(0).focus();
    await listItems.nth(0).click();

    await page.close();


});








