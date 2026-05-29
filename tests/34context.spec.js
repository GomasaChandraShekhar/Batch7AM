import { test, chromium } from '@playwright/test';

test.skip("Handling proxies", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext(
        {
            proxy: {
                server: 'https://selectorshub.com/xpath-practice-page',
                username: 'sername',
                password: 'passwrod'
            }
        }
    );

    const page = await context.newPage();

    await page.goto('https://selectorshub.com/iframe-in-shadow-dom/');
    await page.waitForTimeout(4000);
    await page.pause();

});

test.skip("Handling SSL", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext(
        {
            ignoreHTTPSErrors: true
        }
    );

    const page = await context.newPage();

    await page.goto('https://expired.badssl.com/');
    await page.waitForTimeout(4000);
    await page.pause();

});


test("Handling Coockies", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    context.addCookies(
        [
            {
                name: 'session_id1',
                value: '12345',
                domain: 'example1.com',
                path: '/'
            },
            {
                name: 'session_id2',
                value: '12345',
                domain: 'example2.com',
                path: '/'
            }
        ]
    );

    const allCoockies = await context.cookies();
    console.log(allCoockies.length); // 2

    for (const coockie of allCoockies) {
        console.log(coockie.name);
        console.log(coockie.value);
        console.log(coockie.domain);
        console.log(coockie.path);
    }

    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(4000);
    await page.pause();

});



