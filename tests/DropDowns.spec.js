const {test,expect} = require('@playwright/test')

test('Handle dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   // MULTIPLE WAYS TO SELECT OPTION FROM THE DROPDOWN
   //await page.locator("#country").selectOption({label: 'India'}); // label  /visible text -MOST PREFERABLE
   //await page.locator("#country").selectOption('India') //visible text  -MOST PREFERABLE
   //await page.locator("#country").selectOption({value: 'uk'}) //by using value attribute
   //await page.locator("#country").selectOption({index: 4}) //by using index 
   await page.selectOption('#country','India') // Select by visible text through the page object   -MOST PREFERABLE

   //ASSERTIONS
   //1) check number of option in a dropdown - Approach 1
   //const options = await page.locator('#country option');
   //await expect(options).toHaveCount(10)

   //2) check number of option in a dropdown - Approach 2
   const options = await page.$$('#country option'); // capture all the option in form of array
   // console.log("Number of options", options.length)  // Using the length property to get the total number of options
   await expect(options.length).toBe(10)

    await page.waitForTimeout(5000);
})