// Import required Playwright modules
// test   → used to define test cases
// expect → used for assertions/validations
// chromium → used to launch Chromium browser explicitly
const { test, expect, chromium } = require('@playwright/test')

test('Handle Pages / Windows', async () => {

    // create new browser
    // This launches a fresh Chromium browser instance
    const browser = await chromium.launch()

    // create new context - contains multiple pages (n number of pages)
    // Context is like a fresh browser profile (cookies, cache, sessions are isolated)
    const context = await browser.newContext()

    // create your own page by using browser and context
    // page1 and page2 are two separate tabs/windows inside the same browser context
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    // returns all the pages which are there in the same context
    // This will return an array of all open pages/tabs
    const allPages = context.pages()
    console.log('No. of Pages created', allPages.length)

    // Navigate page1 to OrangeHRM login page
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Validate the title of page1
    await expect(page1).toHaveTitle('OrangeHRM')

    // Navigate page2 to OrangeHRM official website
    await page2.goto("https://www.orangehrm.com/")

    // Validate the title of page2
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')

})

test.only('Handle Multiple Pages / Windows', async () => {

    // create new browser
    // Launches a new Chromium browser for this test
    const browser = await chromium.launch()

    // create new context - contains multiple pages (n number of pages)
    // Ensures this test runs in an isolated environment
    const context = await browser.newContext()

    // create your own page by using browser and context
    // page1 represents the first browser tab
    const page1 = await context.newPage()

    // Navigate to OrangeHRM login page
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Verify title of the first page
    await expect(page1).toHaveTitle('OrangeHRM')

    // Prepare to listen for a new page (popup / new tab)
    // This promise will resolve when a new page is opened
    const pagePromise = context.waitForEvent('page')

    // Click on the link that opens a new window/tab
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    // Wait for the new page to open
    // newPage represents the second page opened after clicking the link
    const newPage = await pagePromise; // newPage representing the second page

    // Validate the title of the newly opened page
    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

    // Static wait added for demo/learning purpose
    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    // Close the browser and all pages
    await browser.close()

})
