const {test,expect} = require('@playwright/test')

test('frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allFrames=await page.frames(); //Capture all frames in array
    console.log("Number of Frames:", allFrames.length);

    //Approach 1 - using name attribute or URL 
    //const var =await page.frame('name'); if name attribute is available
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill('[name="mytext1"]','Hello');

    //Approach 2 - using Frame Locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator('[name="mytext1"]')
    inputbox.fill('Hello!')

    await page.waitForTimeout(5000)
})