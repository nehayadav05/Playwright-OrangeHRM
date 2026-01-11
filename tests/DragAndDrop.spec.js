const {test,expect} = require('@playwright/test') // Import Playwright test and assertion utilities

test('Drag and Drop', async({page})=>{  // Define test case and get page object

    await page.goto('https://ui.vision/demo/webtest/dragdrop/')

    //three--->bin
    const three= await page.locator("#three") //captured the source element
    const bin =await page.locator("#bin") //captured the target element

    //Approach 1
    /*await three.hover()
    await page.mouse.down()

    await bin.hover()
    await page.mouse.up()*/

    //Approach 2
    await three.dragTo(bin)

    await page.waitForTimeout(3000)

    //one--->bin
    const one=await page.locator("#one")

    await one.dragTo(bin)

    await page.waitForTimeout(5000)

})