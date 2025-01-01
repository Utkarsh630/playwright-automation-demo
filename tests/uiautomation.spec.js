const {test} = require('@playwright/test');

test.only('First Test Case',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client');
    await page.getByText('Register here').click();
    await page.getByPlaceholder('First Name').fill('raju');
    await page.getByPlaceholder('Last Name').fill('sin');
    await page.getByPlaceholder('email@example.com').fill('rajusin675@getMaxListeners.com');
    await page.getByPlaceholder('enter your number').fill('9867561234');
    await page.locator('[formcontrolname="occupation"]').selectOption('1: Doctor');
    await page.locator('input[value="Male"]').check();
    await page.locator('#userPassword').fill('Abc@12345');
    await page.locator("#confirmPassword").fill('Abc@12345');
    await page.locator('[formcontrolname="required"]').check();
    await page.getByRole('button',{name: 'Register'}).click();
});

