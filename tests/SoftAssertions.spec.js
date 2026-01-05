const {test,expect} = require('@playwright/test')

test('Soft Assertion', async({page}) => {

    await page.goto("https://www.demoblaze.com/index.html")

   /* //Hard Assertions
    await expect(page).toHaveTitle('STORE123')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect(page.locator('#nava')).toBeVisible()
    */

    //Soft Assertions
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect.soft(page.locator('#nava')).toBeVisible()
})