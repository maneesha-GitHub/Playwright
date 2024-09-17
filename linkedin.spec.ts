import {test} from "@playwright/test";
test("linkedin",async({page})=>{
    await page.goto("https://www.linkedin.com/login");
    await page.getByLabel('Email or phone').click();
    await page.getByLabel('Email or phone').fill("manishachilakapati57@gmail.com");
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill("Linkedin@418");
    await page.getByLabel('Sign in', { exact: true }).click();
    await page.getByRole('button',{name:'Verify'})
})