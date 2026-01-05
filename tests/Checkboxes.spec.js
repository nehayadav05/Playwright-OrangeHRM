const { test, expect } = require('@playwright/test')

test('Handle checkboxes', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com")

    //Single Checkbox
    await page.locator("//input[@id='checkBoxOption1' and @type='checkbox']").check()
    //await page.check("//input[@id='checkBoxOption1' and @type='checkbox']")
   await expect(page.locator("//input[@id='checkBoxOption1' and @type='checkbox']")).toBeChecked()
   expect(await page.locator("//input[@id='checkBoxOption1' and @type='checkbox']").isChecked()).toBeTruthy()
   expect(await page.locator("//input[@id='checkBoxOption3' and @type='checkbox']").isChecked()).toBeFalsy() //for unchecked checkbox

   //Multiple checkboxes
   const checkboxLocators=[ 
    "//input[@id='checkBoxOption1' and @type='checkbox']",
    "//input[@id='checkBoxOption3' and @type='checkbox']"
    ];

    for(const locator of checkboxLocators) //select multiple checkboxes
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000) //pause code for 5 seconds

    for(const locator of checkboxLocators) //unselect multiple checkboxes which are already selected
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
    }

        await page.waitForTimeout(5000) //pause code for 5 seconds


})
