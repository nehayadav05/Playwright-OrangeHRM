const {test,expect} = require('@playwright/test') // Import Playwright test and assertion utilities

test('Mouse hover', async({page})=>{  // Define test case and get page object

    await page.goto('https://tutorialsninja.com/demo/'); // Navigate to the application URL

   const desktops = await page.locator("//a[normalize-space()='Desktops']")
   const macbook = await page.locator("//a[normalize-space()='Mac (1)']")

   //mouse hover
   await desktops.hover();
   await macbook.hover();

   await page.waitForTimeout(5000)

})