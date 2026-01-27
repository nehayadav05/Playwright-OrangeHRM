// Import 'test' and 'expect' from Playwright test library
// 'test' is used to write test cases
// 'expect' is used for assertions (not used yet in this test)
import { test, expect } from '@playwright/test'

// Import the LoginPage Page Object class
// This class contains the constructor and login-related methods
import { LoginPage } from '../pages/LoginPage'

// Import the HomePage Page Object class
// This class contains homepage and cart-related actions
import { HomePage } from '../pages/HomePage';

// Import the CartPage Page Object class
// This class handles cart-related validations
import { CartPage } from '../pages/CartPage';

// Define a test case
test('test', async ({ page }) => {

    // ---------------- Login Section ----------------

    // Create an object of the LoginPage class
    // IMPORTANT:
    // - When this object is created using 'new', the constructor of LoginPage is called automatically
    // - The constructor receives the 'page' object
    // - Inside the constructor, page and all locators are initialized
    // - This allows us to access LoginPage methods like gotoLoginPage() and login()
    const login = new LoginPage(page); // object creation triggers constructor

    // Calls the method from LoginPage to open the application URL
    await login.gotoLoginPage();

    // Calls the login method from LoginPage
    // Uses the page and locators that were initialized in the constructor
    await login.login('pavanol', 'test@123');

    // Static wait added only for learning/demo purposes
    // Not recommended in real automation projects
    await page.waitForTimeout(3000);

    
    // ---------------- Home Section ----------------


     // Create an object of the HomePage class
    // The constructor is called automatically and receives the same 'page'
    const home = new HomePage(page);

    // Add a specific product to the cart by passing product name
    await home.addProductToCart('Samsung galaxy s6');

    // Static wait to observe the add-to-cart action
    await page.waitForTimeout(3000);

    // Navigate to the Cart page
    await home.gotoCart();



   // ---------------- Cart Section ----------------

    // Create an object of the CartPage class
    // Constructor stores the page and cart-related locators
    const cart = new CartPage(page);

    // Static wait to ensure cart page is fully loaded
    await page.waitForTimeout(3000);

    // Check whether the expected product is present in the cart
    // The method returns true if product is found
    const status = await cart.checkProductInCart('Samsung galaxy s6');

    // Assertion to validate that the product is successfully added to the cart
    expect(await status).toBe(true);

    
});
