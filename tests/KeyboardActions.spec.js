const {test,expect} = require('@playwright/test') // Import Playwright test and assertion utilities

test('KeyBoard Actions', async({page})=>{  // Define test case and get page object

    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator('[name="text1"]').fill("Welcome to Automation")

    await page.type('[name="text1"]', "Welcome to Automation")

    //Ctrl + A - select the text
    await page.keyboard.press('Control+A') //press() for combination of keys

    //Ctrl + C - copy the text
    await page.keyboard.press('Control+C')


    // Press Tab key to move focus to the next input box
    //Tab
    await page.keyboard.down('Tab') //pressing the Tab key
    await page.keyboard.up('Tab') //releasing the Tab key


    //Ctrl + V - paste the text
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)

})