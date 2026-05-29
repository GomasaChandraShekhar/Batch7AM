import { test, expect } from '@playwright/test';

test('Upload 1 File Test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.pause();

  await page.locator('#file-upload').setInputFiles('tests/File01.pdf');
  // await page.locator('#file-submit').click();
  // await expect.soft(page.locator('//h3[text()="File Uploaded!"]')).toBeVisible();

  // const fileName = await page.locator('#uploaded-files').innerText();
  // expect.soft(fileName).toBe('File01.pdf');

  await page.close();

});


test.skip('Upload 2 Files Test', async ({ page }) => {
  await page.goto('https://www.file.io/');
  await page.pause();

  await page.locator('#select-files-input').setInputFiles(['tests/File01.pdf', 'tests/PlaywrightArchit.jpg']);

  await page.close();

});

test.skip('Remove Uploaded File Test 001', async ({ page }) => {
  await page.goto('https://www.file.io/');
  await page.waitForLoadState('domcontentloaded');
  await page.pause();

  await page.locator('#select-files-input').setInputFiles(['tests/File01.pdf', 'tests/PlaywrightArchit.jpg']);

  await page.locator('#select-files-input').setInputFiles([]);

  await page.close();

});


test.skip('Remove Uploaded File Test 002', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.pause();

  await page.locator('#file-upload').setInputFiles([]);
  await page.locator('#file-submit').click();

  await page.close();

});




