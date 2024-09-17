import {test} from '@playwright/test'
import * as fs from 'fs';
//import { writeFileAsync } from 'xlsx';

test("whether Report", async({page})=>{
    await page.goto("https://www.accuweather.com/");
    //await page.getByRole('link',{name:"Weather Today"}).click();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Search your Address, City or').click();
    await page.getByPlaceholder('Search your Address, City or').fill("Nellore");

    await page.keyboard.press('Enter');
    await page.getByRole('link', { name: 'Nellore India' }).click();
    await page.getByRole('link', { name: 'Hourly' }).click();
   // await page.getByRole('button',{name:'I Understand'}).click();
   await page.getByText('I Understand').click();


    

    await page.waitForTimeout(2000);
    const hourly_report =await page.locator('.hourly-wrapper').textContent();
   //***********************************{Text Report}*************************** *//
   
    console.log("hourly Report:",hourly_report);
    fs.writeFileSync('hourly_report.txt', hourly_report || 'No data available');
    console.log('Hourly report saved to hourly_report.txt');

    //**********************************{Screenshot} *****************************//
    await page.waitForTimeout(3000)
    const now_report = await page.locator('.page-content');
    await now_report.screenshot({path:"weather_report.png"});

    await page.locator('.header-logo').click();
    await page.getByPlaceholder('Search your Address, City or').click();
    await page.getByPlaceholder('Search your Address, City or').fill("Kolkata");
    await page.keyboard.press('Enter');
    await page.getByRole('link', { name: 'Kolkata Kolkata, WB IN' }).first().click();
    await page.getByRole('link', { name: 'Hourly' }).click();



    await page.waitForTimeout(3000)         
    const now_report1 = await page.locator('.page-content');
    await now_report1.screenshot({path:"weather_report_kol.png"});




    


   
    

});