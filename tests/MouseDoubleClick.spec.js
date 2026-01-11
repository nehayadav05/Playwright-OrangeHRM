const {test,expect} = require('@playwright/test') // Import Playwright test and assertion utilities

test('Mouse Double Click', async({page})=>{  // Define test case and get page object

    await page.goto('https://testautomationpractice.blogspot.com/'); 

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']")

    //double click
    await btnCopy.dblclick()

    const f2 = await page.locator("#field2")
    await expect(f2).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)

})
