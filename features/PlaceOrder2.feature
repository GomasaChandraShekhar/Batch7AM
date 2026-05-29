Feature: Verify the place order functionality


    @Regression
    Scenario: Verify place order 1
        Given User is in login page
        When User login using "gomasachandrashekhar@gmail.com" and "Gomasa@1988"
        When User add product "ZARA COAT 3" to the cart
        Then Verify the product "ZARA COAT 3" in the cart
        When User enters "India" and place order
        Then Verify order displayed in the orders page


    @Sanity
    Scenario: Verify place order with error 2
        Given User is in login page
        When User login using "gomasachandrashekhar@gmail.com" and "Gomasa@1988"
        When User add product "ZARA COAT 3" to the cart
        Then Verify the product "ZARA COAT 4" in the cart
        When User enters "India" and place order
        Then Verify order displayed in the orders page


    @Smoke
    Scenario: Verify place order with error 2
        Given User is in login page
        When User login using "gomasachandrashekhar@gmail.com" and "Gomasa@1988"
        When User add product "ZARA COAT 3" to the cart
        Then Verify the product "ZARA COAT 4" in the cart
        When User enters "India" and place order
        Then Verify order displayed in the orders page

    @Sanity @Regression
    Scenario: Verify place order with error 3
        Given User is in login page
        When User login using "gomasachandrashekhar@gmail.com" and "Gomasa@1988"
        When User add product "ZARA COAT 3" to the cart
        Then Verify the product "ZARA COAT 3" in the cart
        When User enters "India" and place order
        Then Verify order displayed in the orders page


    @Sanity @Regression
    Scenario Outline: Verify place order with error 4
        Given User is in login page
        When User login using "<userEmail>" and "<userPassword>"
        When User add product "<prodName>" to the cart
        Then Verify the product "<prodName>" in the cart
        When User enters "<country>" and place order
        Then Verify order displayed in the orders page

        Examples:
            | userEmail                      | userPassword | prodName    | country |
            | gomasachandrashekhar@gmail.com | Gomasa@1988  | ZARA COAT 3 | India   |





