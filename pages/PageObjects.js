
class PageObjects {

    constructor ( page ) {
        this.page = page;
        this.userEmail = this.page.locator( '#userEmail' );
        this.password = this.page.locator( '#userPassword' );
        this.loginBtn = this.page.locator( '#login' );
        this.homeButton = this.page.getByRole( 'button', { name: 'HOME' } );
        this.atpHeading = this.page.getByText( 'Automation Practice' );
        this.successMessage = this.page.locator( 'div#toast-container' );
        this.signOutBtn = this.page.getByText( ' Sign Out ' );
        this.products = this.page.locator( 'div.card-body' );
        this.cartBtn = this.page.locator( 'button[routerlink*="cart"]' );
        this.checkoutBtn = this.page.getByText( 'Checkout' );
        this.countryField = this.page.getByPlaceholder( 'Select Country' );
        this.countryOption = this.page.locator( 'button.ng-star-inserted' );
        this.placeOrderBtn = this.page.getByText( 'Place Order ' );
        this.orderIdText = this.page.locator( 'label.ng-star-inserted' );
        this.ordersBtn = this.page.locator( 'button[routerlink*="myorders"]' );
        this.successMessage = this.page.locator( 'div#toast-container' );
        this.addToCartBtn = this.page.getByText( ' Add To Cart' );
        this.ordersTable = this.page.locator( `table.table.table-bordered.table-hover.ng-star-inserted` );
        this.rows = this.ordersTable.locator( '//tbody//tr' );
        this.orderIdCol = this.rows.first().locator( '//th' );
        this.viewOrderButon = this.page.getByRole( 'button', { name: 'View' } ).first();
        this.orderIdInOrderDetails = this.page.locator( 'div.col-text.-main' );
        this.viewOrdersButton = this.page.getByText( 'View Orders' );
        this.cartItem = this.page.locator( 'div.cartSection' );
        this.ordersHistoryButton = this.page.getByText( 'Orders History Page' );





    }

}

module.exports = { PageObjects };

