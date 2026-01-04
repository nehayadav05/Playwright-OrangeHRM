// Importing test and expect from Playwright test library
//const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

// Defining a test case named "Locators"
test('Locators',async({page})=>{

    // Opening the website in the browser
    await page.goto("https://www.demoblaze.com/index.html")

    // Clicking on the Login button using its ID locator - property
    //await page.locator('id=login2').click();
    await page.click('id=login2')

    // Typing the username into the username textbox using CSS selector
    //await page.locator('#loginusername','pavanol')
    await page.fill('#loginusername', 'pavanol')

    // Typing the password into the password textbox using CSS selector
    await page.fill("input[id='loginpassword']",'test@123')

    // Clicking on the Log in button using XPath locator
    await page.click("//button[normalize-space()='Log in']")

    // Storing the Logout link element using XPath locator
    const logoutLink=await page.locator("//a[@id='logout2']")

    // Verifying that the Logout link is visible on the page
    await expect(logoutLink).toBeVisible();

    // Closing the page after test completion
    await page.close()

})
