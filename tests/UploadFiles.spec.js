const { test, expect } = require('@playwright/test');

test('Single File', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  // FIXED PATH
  await page.locator('#file-upload').setInputFiles('tests/uploadFiles/Automation_Testing_Practice.pdf');

  await page.waitForTimeout(5000);
});


test.only('Multiple Files', async ({page})=> {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    
    //Inside setInputFiles pass multiple files in the form of array
    await page.locator("#filesToUpload")
    .setInputFiles(['tests/uploadFiles/Automation_Testing_Practice.pdf',
        'tests/uploadFiles/Manual_Testing_Practice.pdf'
    ])

    await page.waitForTimeout(3000)

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Automation_Testing_Practice.pdf')
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Manual_Testing_Practice.pdf')

    await page.waitForTimeout(3000)

    //Removing Files
    await page.locator("#filesToUpload").setInputFiles([]) //pass empty array
    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(3000)



})
