const {test,expect} = require('@playwright/test')

test('handling table', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table=await page.locator('#productTable')

    //1) total number of rows and columns
    const columns=await table.locator('thead tr th');
    console.log("Number of columns : ", await columns.count())
    expect(await columns.count()).toBe(4)

    const rows=await table.locator('tbody tr')
    console.log('Number of rows : ', await rows.count())
    expect(await rows.count()).toBe(5)

    //2) Select checkbox for Smartwatch
    /*const matchedRow = rows.filter({
      // td represents column cells inside a row; this checks each row's columns
      // and returns the row where any column contains the text "Smartwatch"
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchedRow.locator('input').check()*/

    //3) Select multiple products by using reusable function
    //await selectProduct(rows,page,'Wireless Earbuds')
    //await selectProduct(rows,page,'Laptop')
    //await selectProduct(rows,page,'Smartwatch')

    //4) Print all product details using loop
    /*for(let i = 0;i < await rows.count(); i++) // Loop through each row in the current page
    {
        const row=rows.nth(i); // Capture one row at a time using index
        const tds=row.locator('td'); // Capture all columns (cells) in the row

        for(let j = 0; j < await tds.count()-1; j++) // Loop through each column except checkbox
        {
            console.log(await tds.nth(j).textContent()) // Print text of each cell (except checkbox)
        }
    }*/
    // (Commented code) → Reads and prints all product data from a single page

    //5) Read data from all the pages in the table

    const pages=await page.locator("#pagination li a") // Capture all pagination page numbers
    console.log("Number of pages in the table : ", await pages.count()) // Print total pages count

    for(let p = 0 ; p < await pages.count() ; p++)// Loop through each pagination page
    {
        if(p>0)
        {
            // p = 0 means index 0, which represents Page 1 (already loaded by default),
            // so we click only when p > 0 to move to Page 2, Page 3, and so on
            await pages.nth(p).click()
        }

        for(let i = 0;i < await rows.count(); i++) // Loop through each row in the current page
        {
         const row=rows.nth(i); // Get a single row
         const tds=row.locator('td'); // Get all columns in that row

         for(let j = 0; j < await tds.count()-1; j++)// Loop through each column except checkbox
          {
            console.log(await tds.nth(j).textContent())// Print cell text
          }
        }

     await page.waitForTimeout(3000)// Wait to observe the current page data


    }


    await page.waitForTimeout(3000)// Final wait before test ends
})

// Reusable function to select a product checkbox based on product name
async function selectProduct(rows, page, name) 
{
    const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText: name
    })// Filter row which contains the given product name

    await matchedRow.locator('input').check()// Select checkbox for the matched product
    
}