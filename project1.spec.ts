import {test, expect} from "@playwright/test";
import { TIMEOUT } from "dns";
import { builtinModules } from "module";
import { chromium } from 'playwright';
import * as ExcelJS from 'exceljs';

//..........................{to open Chrome web site}..............................

test("project one", async({page})=>{
    await page.goto("https://www.google.com/");

    const condition1 = await page.evaluate(()=>{
        return document.title.includes("Google");
    });

    if (condition1) {
        console.log("Chrome opened successfully");
    } else {
        console.log("Enabled to Access chrome");
    }
    //..........................{welcome to the Policy Bazaar}..............................

    await page.goto("https://www.policybazaar.com/");

    const condition2 = await page.evaluate(()=>{
        return document.title.includes("Insurance - Compare & Buy Insurance Plans – Health, Term, Life, Car, Bike, Investment");
    });

    if (condition2) {
        console.log("Welcome to Policy Bazaar");
    } else  {

        console.log("we are sorry, we are enable to connect");
    }

    const travellight = page.locator('(//*[@class="shadowHandlerBox"])[7]');
    await travellight.evaluate((element)=>{
        (element as HTMLElement).style.border = "2px solid blue";
        (element as HTMLElement).style.background = "yellow";
    
    });

    //..........................{Your in the Travel Insurance}..............................

    await page.getByRole('link',{name:'Travel Insurance',exact:true}).click();

    const condition3 = await page.evaluate(()=>{
    return document.location.href.includes("https://www.policybazaar.com/");
    });

    if (condition3) {
    console.log("Your are in the Travel Insurance");
    } else  {

    console.log("we are sorry, we are enable to connect");
    }

    await page.waitForLoadState("networkidle");

    await page.evaluate(()=> {
        const searchBar = document.querySelector('input[placeholder=" "]');
        if (searchBar) {
            (searchBar as HTMLElement).style.border = '3px solid black';
            (searchBar as HTMLElement).style.backgroundColor = 'yellow';
        }
      });
    const pic1 = page.getByText('Where are you travelling?Search countryPopular');
    await pic1.screenshot({path:'searchbar.png'});

    //..........................{Flying to Usa}..............................


    await page.getByPlaceholder(' ').click();
    await page.getByPlaceholder(' ').fill("USA")
    await page.locator('#search-country').getByText('USA', { exact: true }).click();

    await page.getByText("Start date").click();

    console.log("Flying to USAA????");
    
        
        const startdate = page.locator('xpath=//*[@aria-label="Sep 30, 2024"]');
        await startdate.evaluate((element)=>{
            (element as HTMLElement).style.border ="2px solid black";
            (element as HTMLElement).style.backgroundColor ="yellow"
        });

    const enddate = page.locator('xpath=//*[@aria-label="Oct 30, 2024"]');
    await enddate.evaluate((element)=>{
        (element as HTMLElement).style.border ="2px solid black";
        (element as HTMLElement).style.backgroundColor="yellow";
    }
);


    await page.waitForTimeout(2000);
    await page.getByLabel('Sep 30,').click();
    await page.getByLabel("Oct 30",).click();
    const done = page.locator('xpath=(//*[@class="travel_main_cta"])[2]');
    await done.evaluate((element)=>{
        (element as HTMLElement).style.border="2px solid black";
        (element as HTMLElement).style.backgroundColor="yellow";

    });
    await page.getByRole("button",{name:"Done"}).click();
    await page.getByText('Traveller(s)').click();
    const NoOfTrvellers = page.locator('xpath=(//*[@for="traveller_2"])');
    await NoOfTrvellers.evaluate((element)=>{
        (element as HTMLElement).style.border="2px solid black";
        (element as HTMLElement).style.backgroundColor="yellow";
    });
    await page.getByText("2",{exact:true}).click();
    await page.getByText("Select age of traveller 1",{exact:true}).click();
    await page.getByText("20 years",{exact:true}).click();
    await page.getByText("Select age of traveller 2",{exact:true}).click();
    await page.getByText("24 years",{exact:true}).click();

    const age1 = page.locator('xpath=(//*[@class="customDropdown__select  "])[2]');
    await age1.evaluate((element)=>{
        (element as HTMLElement).style.border="2px solid black";
        (element as HTMLElement).style.backgroundColor="yellow";
    });
    const age2 = page.locator('xpath=(//*[@class="customDropdown__select  "])[1]');
    await age2.evaluate((element)=>{
        (element as HTMLElement).style.border="2px solid black";
        (element as HTMLElement).style.backgroundColor="yellow";
    });
    await page.getByText('No',{exact:true}).click();
    const Bp = page.locator('xpath=(//*[@for="ped_no"])');
    await Bp.evaluate((element)=>{
        (element as HTMLElement).style.border="2px solid black";
        (element as HTMLElement).style.backgroundColor="yellow";

    });
    await page.getByRole('button', { name: 'Done' }).click();


    const view = page.locator('xpath=//*[@class="travel_main_cta"]');
        await view.evaluate((element)=>{
            (element as HTMLElement).style.border="2px solid black";
            (element as HTMLElement).style.backgroundColor="yellow";

        })


    await page.locator('xpath=//*[@class="travel_main_cta"]').click();

    

    console.log("Have a Happy Journey...")

//..........................{going back to the home page}..............................

    await page.getByRole('link').nth(2).click();

    //console.log("Welcome Back to the Policy Bazaar...")
    const condition4 = await page.evaluate(()=>{
        return document.title.includes("Insurance - Compare & Buy Insurance Plans – Health, Term, Life, Car, Bike, Investment");
    });

    if (condition4) {
        console.log("Welcome Back again to the Policy Bazaar");
    } else  {

        console.log("we are sorry, we are enable to connect");

    }

    //..........................{Thats Great , Your Stepping into the car Insurance...}..............................


    const carbomma = page.locator('xpath=(//*[@class="shadowHandlerBox"])[4]');
    await carbomma.evaluate((element)=>{
        (element as HTMLElement).style.border= "2px solid black";
        (element as HTMLElement).style.background="yellow";
    });

    await page.getByRole('link', { name: 'Upto 85% Discount Car' }).click();

    
    console.log("Thats Great, Your stepping into the Car Insurance..")

    await page.getByText("Click here",{exact:true}).click();
    const hyderabad = page.locator('xpath=(//*[@class="truncate"])[7]');
    await hyderabad.evaluate((element)=>{
        (element as HTMLElement).style.border= "2px solid black";
        (element as HTMLElement).style.background="yellow";
    });
    await page.getByText("Hyderabad",{exact:true}).click();

    const number = page.locator('xpath=(//*[@class="rtoItem "])[2]');
    await number.evaluate((element)=>{
        (element as HTMLElement).style.border= "2px solid black";
        (element as HTMLElement).style.background="yellow";
    });

    await page.getByText("AP11",{exact:true}).click();

    const Brand = page.locator('xpath=//*[@class="kia "]');
    await Brand.evaluate((element)=>{
       (element as HTMLElement).style.border= "2px solid black";
       (element as HTMLElement).style.background="yellow";
    });

    await page.locator('li').filter({ hasText: 'KIA' }).click();
    
    const model = page.locator('(//*[@class="rightArrow"])[5]');
    await model.evaluate((element)=>{
      (element as HTMLElement).style.border= "2px solid black";
      (element as HTMLElement).style.background="yellow";

   });
    await page.getByText("Sonet",{exact :true}).click();

    const fuel = page.locator('//*[text()="Petrol"]');
    await fuel.evaluate((element)=>{
        (element as HTMLElement).style.border= "2px solid black";
        (element as HTMLElement).style.background="yellow";
    });

    await page.getByText("Petrol").click();

        const series = page.locator('xpath=(//*[text()="HTK 1.2 (1197 cc)"])[2]');
         await series.evaluate((element)=>{
        (element as HTMLElement).style.border= "2px solid black";
        (element as HTMLElement).style.background="yellow";
    });
    await page.waitForTimeout(1000);

    await page.locator('li').filter({ hasText: 'HTK 1.2 (1197 cc)' }).click();
    const peru = page.locator('xpath=(//*[@class="form-control"])[1]');
    await peru.evaluate((element)=>{
        (element as HTMLElement).style.border= "2px solid black";
        (element as HTMLElement).style.background="yellow";
    });

    await page.getByPlaceholder('Full name').fill("zindhagi")

    const Phone = page.locator('xpath=(//*[@class="form-control"])[2]');
    await Phone.evaluate((element)=>{
        (element as HTMLElement).style.border= "2px solid black";
        (element as HTMLElement).style.background="yellow";
    });

    await page.getByPlaceholder('Mobile number').fill("9823819");

    const photo = page.getByText('Almost done! Just one last stepFull nameMobile numberEnter a valid mobile');
    await photo.screenshot({path:"figure1.png"});


    console.log("Please provide the valid Details..")
//..............................going back to the home page..............................................

    await page.getByRole('link', { name: 'policybazaar' }).click();

    console.log("Oh My God!!, Your Back Again")


    const frontpage = page.locator('(//*[@class="ruby-menu-mega shade mr"])');
    await frontpage.evaluate((element)=>{
        (element as HTMLElement).style.border="2px solid black";
        (element as HTMLElement).style.background="yellow";
    });

    
    await page.getByRole('link', { name: 'Insurance Products' }).click();

    console.log("Well,Your on The Right Path Now!!!")

    const pic = page.locator('.ruby-row');
    await pic.screenshot({path:"finguruuuu.png"});

//..........................{lets check the console once}..............................

    const text = await page.getByText('Health Insurance Family').first().textContent();
    console.log('Extracted Text:', text);

//********************************{Go..Check the Excel Sheet!!!} ******************************************************/

    await page.goto("https://www.policybazaar.com");
    await page.getByRole('link', { name: 'Insurance Products' }).click();
    const text1 = await page.getByText('Health Insurance Family').first().textContent();

    if (!text1) {
        throw new Error('Text content could not be found.');
    }

    await page.close();
    const lines = text1.split('\n');

    const workbook = new ExcelJS.Workbook();
    const worksheet1 = workbook.addWorksheet('Sheet1');
    const worksheet2 = workbook.addWorksheet('sheet2');
    worksheet1.addRow(['input Details']); 
    
    
    
    
    lines.forEach((line, index)=>{
       worksheet1.addRow([line]);
        worksheet2.addRow([line]);

    });
    
    await workbook.xlsx.writeFile('Output.xlsx');
    console.log('Text content written to output.xlsx');

});





test("conditional statements", async({page})=>{
    await page.goto("https://www.google.com/");
    const condition = await page.evaluate(()=>{
        return document.title.includes('Google');

    });
    if (condition) {
        console.log("true")
    } else {
        console.log("flase")
    }


});


