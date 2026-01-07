// Importing the 'test' and 'expect' functions from the Playwright test library
const { test, expect } = require('playwright/test');

// Defining a test case named "Home Page"
test('Home Page', async ({ page }) => {

    // Open the given website URL in the browser page
    await page.goto('https://www.demoblaze.com/index.html');
    
    // Get the title of the current webpage
    const pageTitle = await page.title();

    // Print the page title to the console
    console.log('Current Page title is:', pageTitle);

    // Check whether the page title exactly matches the text 'STORE'
    await expect(page).toHaveTitle('STORE');

    // Get the current page URL
    const pageURL = page.url();

    // Print the URL to the console
    console.log('Page URL is', pageURL);

    // Verify that the page URL is exactly the expected one
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); 

    // Close the page after test execution
    await page.close();
})
