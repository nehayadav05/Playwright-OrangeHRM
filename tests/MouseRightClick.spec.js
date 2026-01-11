const {test,expect} = require('@playwright/test') // Import Playwright test and assertion utilities

test('Mouse Right Click', async({page})=>{  // Define test case and get page object

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html'); 

    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    //right click action
    await button.click({button: 'right'});

    await page.waitForTimeout(5000)

})