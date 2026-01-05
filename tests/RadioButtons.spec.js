const { test, expect } = require('@playwright/test')

test('handling radio button', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com")

    //Radio button
    await page.locator("//input[@value='radio1']").check() //Radio1
    await expect(page.locator("//input[@value='radio1']")).toBeChecked()
    await expect(page.locator("//input[@value='radio1']").isChecked()).toBeTruthy()//Radio1

    await expect(await page.locator("//input[@value='radio2']").isChecked()).toBeFalsy()//Radio2

    await page.waitForTimeout(5000) //pause code for 5 seconds

})
