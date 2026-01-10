const {test,expect} = require('@playwright/test')

test.skip('Alert with OK', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handlling //Dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click("//button[@id='alertBtn']")

    await page.waitForTimeout(5000)
})

test.skip('Confirmation Dialog - Alert with OK and Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handlling //Dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() //close by using OK button
        //await dialog.dismiss() //close by using cancel button
    })

    await page.click("//button[@id='confirmBtn']")

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)
})


test('Prompt Dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert handlling //Dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter') //verifying default input value
        await dialog.accept('John') //close the prompt window by providing value in the input box
    })

    await page.click("//button[@id='promptBtn']")

    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?')

    await page.waitForTimeout(5000)
})