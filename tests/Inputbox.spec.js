const { test, expect } = require('@playwright/test')

test('handling inputbox', async ({ page }) => {

    await page.goto("https://awesomeqa.com/ui/index.php?route=account/register")

    //Input box firstname
    await expect(page.locator('#input-firstname')).toBeVisible()
    await expect(page.locator('#input-firstname')).toBeEmpty()
    await expect(page.locator('#input-firstname')).toBeEditable()
    await expect(page.locator('#input-firstname')).toBeEnabled()

    //await page.locator('#input-firstname').fill('Neha')
    await page.fill('#input-firstname','John')

    await page.waitForTimeout(5000) //pause code for 5 seconds

})
