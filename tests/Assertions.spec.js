const {test,expect} = require('@playwright/test')

test('AssertionsTest', async({page})=>{

   //open app url
    await page.goto("https://demo.nopcommerce.com/register")

    //1) expect(page).toHaveURL()                  Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) expect(page).toHaveTitle()                Page has Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3) expect(locator).toBeVisible()             Element is visible
    const logoElement= await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4) expect(locator).toBeEnabled()              Element is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    //5) expect(locator).toBeChecked()              Radio/Checkbox is checked
    
    //radio button
    const femaleRadioButton = await page.locator('#gender-female')
    await femaleRadioButton.click()  //select radio button
    await expect(femaleRadioButton).toBeChecked()

    //checked box
    const newsLetterCheckbox = await page.locator('#NewsLetterSubscriptions_0__IsActive')
    await expect(newsLetterCheckbox).toBeChecked()

    //6) expect(locator).toHaveAttribute()             Element has attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    //7) expect(locator).toHaveText()                   Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register') // full text

    //8)expect(locator).toContainText()                 Element comtains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg')//partial text

    //9)expect(locator).toHaveValue(value)              Input has value
    const emailInput=await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //10 expect(locator).toHaveCount()                  List of element has given length
    const options = await page.locator('select[id="customerCurrency"] option')
    await expect(options).toHaveCount(2)



})