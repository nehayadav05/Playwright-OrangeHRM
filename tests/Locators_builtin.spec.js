// Importing the test runner and assertion library from Playwright Test
const { test, expect } = require('@playwright/test');

// Defining a test case named "Built-in Locators"
test('Built-in Locators', async ({ page }) => {

    // Open the OrangeHRM demo login page in the browser
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // =========================
    // getByAltText()
    // =========================
    // This locator is used to find an element (usually an image)
    // by the value of its alt attribute.
    // Here, we are locating the company logo using its alt text.
    const logo = await page.getByAltText('company-branding');

    // Verify that the logo is visible on the page
    await expect(logo).toBeVisible();

    // =========================
    // getByPlaceholder()
    // =========================
    // This locator finds input fields using their placeholder text.

    // Enter "Admin" into the Username field
    await page.getByPlaceholder('Username').fill('Admin');

    // Enter the password into the Password field
    await page.getByPlaceholder('Password').fill('admin123');

    // =========================
    // getByRole()
    // =========================
    // This locator finds elements using accessibility roles,
    // such as button, link, textbox, etc.
    // It works with both explicit ARIA roles and implicit HTML roles.

    // Click the Login button (role = button)
    await page.getByRole('button', { type: 'submit' }).click();

    // =========================
    // locator() + getByText()
    // =========================
    // After login, we capture the logged-in username displayed on the page

    const name = await page .locator('//p[@class="oxd-userdropdown-name"]').textContent();

    // Now verify that the same name text is visible on screen
    await expect(await page.getByText(name)).toBeVisible();

});
