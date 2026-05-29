import { test, expect } from '@playwright/test';
import fs from 'fs';
import { PageObjectManager } from '../pages/PageObjectManager';

let pageObjectManager;
let orderId;
const jsonFilePath = 'testdata/PlaceOrder.json';
const loginData = JSON.parse( fs.readFileSync( jsonFilePath, 'utf-8' ) );

for ( const { prodName, email, password, url } of loginData ) {

    test.describe( `Verify Login`, () => {

        test( `Login Test for ${prodName}`, async ( { page } ) => {
            pageObjectManager = new PageObjectManager( page );

            await pageObjectManager.loginPage.goto( url );
            await pageObjectManager.loginPage.login( email, password );
            // Add product to the cart
            await pageObjectManager.placeOrderPage.addProdToCart( prodName );
            // Navigate to cart and place order
            await pageObjectManager.placeOrderPage.placeOrder();
            // Capture and verify the order
            orderId = await pageObjectManager.placeOrderPage.getOrderId();
            await pageObjectManager.placeOrderPage.verifyOrder( orderId );
            await pageObjectManager.loginPage.logout();
        } );


    } );

}
