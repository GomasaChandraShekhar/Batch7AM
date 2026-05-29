import { test, expect } from '@playwright/test';

test("Click Events", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const heading1 = page.getByText('Automation Testing Practice');
    const blogLink = page.locator(`//a[text()='Blog']`);
    const ppLink = page.locator(`//a[text()='Online Trainings']`);

    // Click on element
    // await blogLink.click();

    // Double click
    // await heading1.dblclick();
    // console.log(await heading1.textContent());
    // console.log(await heading1.innerText());

    // Hover on element
    // await blogLink.hover();

    // // Focus - highlight element
    // await blogLink.focus();

    // right click
    await blogLink.click({ button: 'right' });
    // Click an item within the newly visible context menu
    await page.locator('.context-menu-item:has-text("Open link in new tab")').click();




    // force click
    // await ppLink.click({ force: true });

    // await expect.soft(page.getByRole('heading', { name: 'SDET-QA' })).toBeVisible();

    // Click on element by position
    // await heading1.click({ position: { x: 100, y: 100 } }); // pixels

    // await page.pause();
    await page.close();

});



