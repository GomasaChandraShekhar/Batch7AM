import { test, expect } from '@playwright/test';
import { OrangeHRMPage } from '../pageobjects/OrangeHRMPage';


test.skip("OrangeHRM Login Test", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState("domcontentloaded");
    await page.pause();

    await page.locator(`//input[@name='username']`).fill("Admin");

    await page.locator("xpath = //input[@name='password']").fill("admin123");
    await page.locator("xpath = //button[text()=' Login ']").click();
    await page.waitForLoadState("domcontentloaded");

    await page.locator(".oxd-userdropdown-tab").isVisible();
    await page.locator("css = .oxd-userdropdown-tab").click();
    await page.locator("xpath = //a[text()='Logout']").isVisible();





    // await page.locator("xpath = //a[text()='Logout']").click();
    // await page.waitForLoadState("domcontentloaded");

    // await page.locator("css = input[name='username']").isVisible();
    // await expect(page.locator("css = input[name='username']")).toBeVisible();


    // await page.close();

});


test('OrangeHrm Login Add User', async ({ page }) => {

    const orangeHrmPage = new OrangeHRMPage(page);

    orangeHrmPage.goto();

    orangeHrmPage.login();

    /*
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('FirstName001');
    await page.getByRole('textbox', { name: 'Middle Name' }).fill('MName001');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('LastName001');
    await page.locator('.oxd-switch-input').click();
    await page.getByRole('textbox').nth(5).click();
    await page.getByRole('textbox').nth(5).fill('FirstLastName001');

    await page.locator('input[type="password"]').first().fill('admin123');
    await page.locator('input[type="password"]').nth(1).fill('admin123');
    await page.getByRole('button', { name: 'Save' }).click();

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/172');
        await page.getByText('-- Select --').first().click();
        await page.getByText('Danish').click();
        await page.getByText('Married').click();
        await page.locator('div:nth-child(5) > div:nth-child(2) > div > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
        await page.locator('.oxd-calendar-selector-year-selected > .oxd-icon').click();
        await page.getByText('1988').click();
        await page.locator('div').filter({ hasText: /^April$/ }).click();
        await page.getByText('August').click();
        await page.getByText('20', { exact: true }).click();
        await page.locator('.oxd-radio-input').first().click();
        await page.getByText('* Required Save').click();
        await page.getByText('Personal DetailsEmployee Full').click();
        await page.locator('div').filter({ hasText: 'FirstName001' }).nth(3).click();
        await page.getByText('FirstName001 LastName001Personal DetailsContact DetailsEmergency').click();
        await page.getByText('-- Select --').click();
        await page.getByText('AB+').click();
        await page.locator('form').filter({ hasText: 'Blood TypeAB+Test_clsField Save' }).getByRole('button').click();
        await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
    
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByText('FirstLastName001').click();
    await page.locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
    await page.getByRole('button', { name: 'Save' }).click();
    */
    await page.getByRole('banner').getByText('hello1 Test12name').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

});
