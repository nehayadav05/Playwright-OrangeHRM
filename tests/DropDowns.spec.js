const {test,expect} = require('@playwright/test')

test('Handle dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   // MULTIPLE WAYS TO SELECT OPTION FROM THE DROPDOWN
   //await page.locator("#country").selectOption({label: 'India'}); // label  /visible text -MOST PREFERABLE
   //await page.locator("#country").selectOption('India') //visible text  -MOST PREFERABLE
   //await page.locator("#country").selectOption({value: 'uk'}) //by using value attribute
   //await page.locator("#country").selectOption({index: 4}) //by using index 
   //await page.selectOption('#country','India') // Select by visible text through the page object   -MOST PREFERABLE

   //ASSERTIONS
   //1) check number of option in a dropdown - Approach 1
   //const options = await page.locator('#country option');
   //await expect(options).toHaveCount(10)

   //2) check number of option in a dropdown - Approach 2
   //const options = await page.$$('#country option'); // capture all the option in form of array
   // console.log("Number of options", options.length)  // Using the length property to get the total number of options
   //await expect(options.length).toBe(10)

   //3) check presence of value in the dropdown - Approach 1
   // const content = await page.locator('#country').textContent();
  // await expect(content.includes('India')).toBeTruthy();

  //4) check presence of value in the dropdown - Approach 2 -using loop

 /* // Get all dropdown options with id 'country'
  const options = await page.$$('#country');

  // Flag to track if the required value is found - Initially, the value is not found
  let status =false;

  // Loop through each dropdown option
  for(const option of options)
  {
    //console.log(await option.textContent());

    // Get the visible text of the current option
    let value=await option.textContent();

      // Check if the option contains 'France'
  if (value.includes('France')) {
    status = true; // Mark as found
    break; // Exit loop once value is found
  }
}

// Verify that the value 'France' exists in the dropdown
expect(status).toBeTruthy(); */

//5) select option from dropdown using loop

const options= await page.$$('#country');
for(const option of options){
    let value=await option.textContent();
    if(value.includes('France'))
    {
        await page.selectOption('#country', value);
        break;
    }
}


    await page.waitForTimeout(5000);
})