import { test, expect } from '@playwright/test';

test("Recodr using codegen", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Automation Testing Practice" [level=1]`);
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Automation Testing Practice');
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Playwright');
    await page.getByRole('textbox', { name: 'Enter EMail' }).fill('abc3@gmail.com');
    await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9100774577');
    await page.getByRole('textbox', { name: 'Address:' }).fill('Hyderabad, India');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('checkbox', { name: 'Saturday' }).check();
    await page.getByLabel('Country:').selectOption('uk');
    await page.getByLabel('Colors:').selectOption('blue');
    await page.getByLabel('Colors:').selectOption(['blue', 'green']);
    await page.getByLabel('Sorted List:').selectOption('cheetah');
    await page.getByLabel('Sorted List:').selectOption(['cheetah', 'deer']);
    await page.locator('#datepicker').click();
    await page.getByRole('link', { name: '7', exact: true }).click();
    await page.locator('#txtDate').click();
    await page.getByRole('link', { name: '14' }).click();
    await page.locator('#singleFileInput').setInputFiles('./data/data.xlsx');
    await page.getByRole('button', { name: 'Upload Single File' }).click();
    await expect(page.locator('#singleFileStatus')).toContainText('data.xlsx');
    await page.locator('td:nth-child(4) > input').first().check();
    await expect(page.locator('#Stats1_totalCount')).toMatchAriaSnapshot(`- text: /\\d+,\\d+,\\d+/`);

});