// Exporting the HomePage class so it can be used in test files
exports.HomePage = class HomePage {

    // Constructor runs automatically when an object of HomePage is created
    // It receives the Playwright 'page' object
    constructor(page) {

        // Store the page object so it can be used in all methods
        this.page = page;

        // XPath locator for the list of all product names on the homepage
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';

        // XPath locator for the "Add to cart" button on product details page
        this.addToCartbtn = "//a[normalize-space()='Add to cart']";

        // CSS selector for the Cart link in the navigation bar
        this.cart = '#cartur';
    }

    // Method to add a specific product to the cart
    // Accepts productName as a parameter (example: "Samsung galaxy s6")
    async addProductToCart(productName) {

        // Get all product elements available on the page
        const productList = await this.page.$$(this.productList);

        // Loop through each product in the product list
        for (const product of productList) {

            // Check if the product text matches the given productName
            if (productName == await product.textContent()) {

                // Click on the matched product
                await product.click();

                // Exit the loop once the product is found and clicked
                break;
            }
        }

        // Listen for the browser alert (dialog) that appears after adding to cart
        await this.page.on('dialog', async dialog => {

            // Check if the alert message contains the word 'added'
            if (dialog.message().includes('added')) {

                // Accept (click OK) on the alert popup
                await dialog.accept();
            }
        });

        // Click on the "Add to cart" button
        await this.page.locator(this.addToCartbtn).click();
    }

    // Method to navigate to the Cart page
    async gotoCart() {

        // Click on the Cart link
        await this.page.locator(this.cart).click();
    }
}
