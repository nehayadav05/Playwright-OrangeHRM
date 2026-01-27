// Exporting the CartPage class so it can be used in test files
exports.CartPage = class CartPage {

    // Constructor runs automatically when an object of CartPage is created
    // It receives the Playwright 'page' object
    constructor(page) {

        // Store the page object so it can be reused in all methods
        this.page = page;

        // XPath locator to get all product name cells from the cart table
        this.noOfProducts = "//tbody[@id='tbodyid']/tr/td[2]";
    }

    // Method to check whether a specific product is present in the cart
    // Accepts productName as a parameter
    async checkProductInCart(productName) {

        // Get all product elements currently present in the cart
        const productInCart = await this.page.$$(this.noOfProducts);

        // Loop through each product in the cart
        for (const product of productInCart) {

            // Print the product name in console (useful for debugging)
            console.log(await product.textContent());

            // Check if the cart product name matches the expected productName
            if (productName == await product.textContent()) {

                // If product is found, return true
                return true;

                // break statement is unreachable here because return already exits the method
                break;
            }
        }
    }
}
