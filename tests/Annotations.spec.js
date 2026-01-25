import {test,expect} from '@playwright/test'

//only
/*test.only('test1',async({page})=>{

    console.log('This is my test1...')
})*/

//skip
/*test.skip('test2',async({page})=>{

    console.log('This is my test2...')
})*/

//skip with certain conditions
/*test('test3',async({page , browserName})=>{

    console.log('This is my test3...')
    if(browserName==='chromium'){
        test.skip()
    }
})*/

//Fixme
/*test('test4',async({page})=>{
    test.fixme() //automatically will skip the test
    console.log('This is my test4...')
})*/

//Fail
/*test('test5',async({page})=>{
    test.fail() //expect fail
    console.log('This is my test5...')
    expect(1).toBe(2)//actual--if both expected and actual fail then test will pass
})*/

//Fail test based on conditions
/*test('test6',async({page,browserName})=>{
    if(browserName==='chromium') //condition is passed
    {
    test.fail() //expect fail (failed annotation)
    }

    console.log('This is my test6...')
})*/

//
test('test7', async({page})=>{
    //test.slow() //increase the timeout to triple -Approach 1  Default timeout is 30 s
    test.setTimeout(5000)//applicable to a particular Test - Approach 2 to increase the timeout
    await page.goto('https://www.demoblaze.com/index.html')
        console.log("This is my test7....")

})