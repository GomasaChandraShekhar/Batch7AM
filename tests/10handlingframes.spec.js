import { test, expect } from '@playwright/test';

test.skip("Handling Frames", async ({ page }) => {

    await page.goto(`https://jqueryui.com/tooltip/`);
    await page.pause();

    // Locating frame using locator
    // const frameEle = page.frameLocator('.demo-frame');
    // await frameEle.locator(`#age`).fill('30');

    // locating frame using url
    //    https://jqueryui.com/resources/demos/tooltip/default.html

    const frameEle = page.frame({ url: 'https://jqueryui.com/resources/demos/tooltip/default.html' });
    await frameEle.locator(`#age`).fill('30');
    await page.pause();

    await page.close();

});


test.skip("Handling Nested Frames", async ({ page }) => {

    await page.goto(`https://ui.vision/demo/webtest/frames/`);
    await page.pause();

    // locating frame using url
    const parentFrame = page.frame({ url: `https://ui.vision/demo/webtest/frames/frame_3.html` });
    const childFrames = parentFrame?.childFrames();
    await childFrames?.at(0)?.locator(`.AB7Lab`).nth(1).check();

    await page.pause();

    await page.close();

});

test("Handling Tooltip", async ({ page }) => {

    await page.goto(`https://jqueryui.com/tooltip/`);
    await page.pause();

    // Locating frame using locator
    const frameElement = page.frameLocator(`.demo-frame`);
    const tooltip = await frameElement.locator(`#age`).getAttribute('title');
    console.log(tooltip);

    await page.close();

});



