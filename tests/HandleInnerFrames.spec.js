const {test,expect} = require('@playwright/test')

test('Inner frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

     const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}) //Capture the Parent Frame
    // await frame3.locator("input[name='mytext3']").fill('Welcome!')

    //nested frame
    const childFrames= await frame3.childFrames() //From the Parent Frame we captured all the child frames
    await childFrames[0].locator('//*[@id="i6"]/div[3]/div').check()

     await page.waitForTimeout(5000)
})