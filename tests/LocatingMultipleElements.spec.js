// Importing the 'test' and 'expect' functions from Playwright Test framework
// 'test' is used to define test cases
// 'expect' is used for assertions (checking expected results)
const { test, expect } = require('@playwright/test'); 

// Defining a test case named "LocateMultipleElements"
// Playwright automatically provides a 'page' object which represents the browser page
test('LocateMultipleElements', async ({ page }) => {

    // Opening the DemoBlaze homepage in the browser
    await page.goto("https://www.demoblaze.com/index.html");

    // Waiting for the product elements to be available on the page
    // This ensures the page is fully loaded before interacting with it
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    // Finding all product title elements using XPath
    // $$ → selects multiple elements that match the locator
    // This XPath means:
    // Go to div with id='tbodyid' → inside it find h4 → inside h4 find <a> tag
    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    // Looping through each product element one by one
    for (const product of products) {

        // Getting the visible text (product name) from the element
        const prodName = await product.textContent();

        // Printing the product name in the console
        console.log(prodName);
    }

    // Test ends here — Playwright will automatically close the page/session
});
