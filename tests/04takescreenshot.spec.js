import { test, expect, } from '@playwright/test';

test("Take screenshot Test", async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.waitForLoadState('domcontentloaded');

    const h1Text = page.getByText(`Automation Testing Practice`);
    const h1Textcss = page.locator(`css: h1.title`);
    const h1Textrole = page.getByRole('heading', { name: 'Automation Testing Practice' });
    await page.pause();

    // Specific element screenshot
    await h1Text.screenshot({ path: 'screenshots/elementScreenshot.png' }); // element screenshot

    // Full page screenshot
    await page.screenshot({ path: 'screenshots/expectedImg.png', fullPage: true }); // full page screenshot

    // Saving the screenshot using current date time stamp
    // await h1Text.screenshot({ path: 'screenshots/elementScreenshot_' + Date.now() + '.png' }); // element screenshot
    // await page.screenshot({ path: `screenshots/pagescreenshot_${Date.now()}.png`, fullPage: true }); // full page screenshot

    // Verify the screenshot
    await expect.soft(await page.screenshot({ path: 'screenshots/actualImg.png', fullPage: true })).toMatchSnapshot('.screenshots / expectedImg.png');

});




