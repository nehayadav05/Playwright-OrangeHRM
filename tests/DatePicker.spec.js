const {test,expect} = require('@playwright/test') // Import Playwright test and assertion utilities

test('Date Picker', async({page})=>{  // Define test case and get page object

    await page.goto('https://testautomationpractice.blogspot.com/'); // Navigate to the application URL
    // await page.fill('#datepicker','01/09/2026') 
    // (Alternative approach) Directly enter date using input field

    //datepicker
    const year="2023"   // Target year to be selected
    const month="June"  // Target month to be selected
    const date="10"     // Target date (day) to be selected

    await page.click('#datepicker') // Clicks on datepicker input to open calendar

    while(true) // Loop runs until the required month and year are found
    {
        const currentYear=await page.locator(".ui-datepicker-year").textContent();
        // Captures the currently displayed year from the calendar

        const currentMonth = await page.locator(".ui-datepicker-month").textContent()
        // Captures the currently displayed month from the calendar

        if(currentYear==year && currentMonth==month)
        {
            // If displayed month and year match the required values,
            // exit the loop
            break;
        }

        //await page.locator('[title="Next"]').click() // Clicks Next button to move forward in calendar
        await page.locator('[title="Prev"]').click() // Clicks Previous button to move backward in calendar

    }

    const dates = await page.$$("//a[@class='ui-state-default']")
    // Captures all available date elements (day numbers) from the calendar

    //date selection using loop
    /*for(const dt of dates)
    {
        if(await dt.textContent() == date)
        {
            await dt.click(); // Clicks the matching date
            break
        }
    }*/
    // (Commented code) → Selects the required date by looping through all dates

    // date selection without loop - 
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    // Directly clicks the required date using dynamic XPath

    await page.waitForTimeout(3000) // Pause to observe the selected date

})
