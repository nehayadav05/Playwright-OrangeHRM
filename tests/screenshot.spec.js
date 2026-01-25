const {test,expect} = require('@playwright/test')

test('page screenshot',async({page})=>{

    await page.goto('https://tutorialsninja.com/demo/');
    await page.screenshot({path:'tests/screenshots/'+ Date.now()+'HomePage.png'})

})

test('Full page screenshot',async({page})=>{

    await page.goto('https://tutorialsninja.com/demo/');
    await page.screenshot({path:'tests/screenshots/'+ Date.now()+'FullPage.png',fullPage:true})
    
})

test.only('Element screenshot',async({page})=>{

    await page.goto('https://tutorialsninja.com/demo/');
    await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path:'tests/screenshots/'+ Date.now()+'MacBook.png'})
    
})