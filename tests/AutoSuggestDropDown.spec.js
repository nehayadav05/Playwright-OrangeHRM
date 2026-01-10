const { test, expect } = require('@playwright/test')

test('Auto suggest dropdown', async ({ page }) => {

    // Navigate to the RedBus application
    await page.goto('https://www.redbus.in/')

    // Enter "Delhi" in the From city input field to trigger auto-suggestions
    await page.locator('#srcinput').fill('Delhi') // provided the search value

    // Wait until at least one auto-suggestion containing "Delhi" is visible
    await page.waitForSelector('//*[@role="option"][contains(., "Delhi")]') 
    // waiting for the autosuggestion

    // Capture all auto-suggestion options that contain the text "Delhi"
    const fromCityOptions = await page.$$('//*[@role="option"][contains(., "Delhi")]') 
    // capture all the autosuggestion options of Delhi

    // Loop through each auto-suggestion option
    for (let option of fromCityOptions) {

        // Get the visible text of the current option
        const value = await option.textContent()

        // Print the auto-suggestion text in the console
        console.log(value)

        // Check if the option matches the required boarding point
        if (value.includes('Mayur Vihar, Delhi')) {

            // Click on the matched auto-suggestion
            await option.click()

            // Exit the loop once the desired option is selected
            break
        }
    }

    // Pause execution for observation/debugging purpose
    await page.waitForTimeout(3000)
})
