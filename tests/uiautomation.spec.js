const {test, expect} = require('@playwright/test');

test.only('Registration Test Case',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client');
    await page.getByText('Register here').click();
    await page.getByPlaceholder('First Name').fill('raju');
    await page.getByPlaceholder('Last Name').fill('sin');
    await page.getByPlaceholder('email@example.com').fill('rajusin66775@gmail.com');
    await page.getByPlaceholder('enter your number').fill('9867561234');
    await page.locator('[formcontrolname="occupation"]').selectOption('1: Doctor');
    await page.locator('input[value="Male"]').check();
    await page.locator('#userPassword').fill('Abc@12345');
    await page.locator("#confirmPassword").fill('Abc@12345');
    await page.locator('[formcontrolname="required"]').check();
    await page.getByRole('button',{name: 'Register'}).click();

    await expect(page.locator('.headcolor')).toHaveText('Account Created Successfully');
    await expect(page.getByRole('button',{name: 'Login'})).toBeVisible();
});

test('Login Test Case',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('rajusin675@gmail.com');
    await page.locator('userPassword').fill('Abc@12345');
    await page.locator('#login').click();
    await expect(page.locator('#toast-container div')).toHaveText('Login Successful');
});


