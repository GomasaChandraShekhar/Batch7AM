import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvFilepath = 'testdata/data.csv';
const content = fs.readFileSync( csvFilepath, 'utf-8' );
const loginData = parse( content, { columns: true, skip_empty_lines: true } );

test.describe( "Verify Login", () => {

    for ( const { id, email, password, validity } of loginData ) {

        test( `Login Test for ${id}`, async ( { page } ) => {
            await page.goto( 'https://rahulshettyacademy.com/client/#/auth/login' );
            await page.waitForTimeout( 2000 );
            // await page.pause();

            await page.locator( '#userEmail' ).fill( email );
            await page.locator( '#userPassword' ).fill( password );
            await page.locator( '#login' ).click();

            if ( validity == 'valid' ) {
                await page.waitForTimeout( 2000 );
                await expect.soft( page.getByRole( 'button', { name: 'HOME' } ) ).toBeVisible();
                await expect.soft( page.getByText( 'Automation Practice' ) ).toBeVisible();
                const signOutButton = page.getByRole( 'button', { name: 'Sign Out' } );
                await expect.soft( signOutButton ).toBeVisible();
                await signOutButton.click();
            }
            else if ( validity == 'invalid' ) {
                const errorMessage = page.locator( 'div#toast-container' );
                await expect.soft( errorMessage ).toBeVisible();
                console.log( await errorMessage.innerText() );
            }
            await page.waitForTimeout( 2000 );
            await page.close();

        } );
    }

} );


