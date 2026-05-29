import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test("Handling web table 001", async ({ page }) => {

    await page.goto(`https://money.rediff.com/gainers/bsc/dailygroupa?`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const rows = page.locator(".dataTable").getByRole('row');
    const rowsCount = await rows.count();
    console.log('Total number of rows :: ', rowsCount);

    // Capture first row first column data.
    // const colName = await rows.nth(1).locator('//td[1]').textContent();
    // console.log(colName);

    // Capture header row every column data
    const columns = rows.nth(0).locator('//th');
    const colmsCount = await columns.count();
    for (let c = 1; c <= colmsCount; c++) {
        console.log('Column Data is :: ', await rows.nth(0).locator(`//th[${c}]`).textContent());
    }
    // console.log('Company Name is :: ', compName);


    // capture all rows all columns data
    // for (let i = 1; i < rowsCount; i++) {
    //     const colms = rows.nth(i).locator('//td');
    //     const colmsCount = await colms.count();
    //     console.log('Columns count is :: ', colmsCount);

    //     for (let c = 1; c <= colmsCount; c++) {
    //         console.log('Column Data is :: ', await rows.nth(i).locator(`//td[${c}]`).textContent());
    //     }
    // }

    for (const row of await rows.all()) {
        //console.log(await row.textContent());
        console.table(await row.innerText());
    }



});