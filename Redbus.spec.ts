 import {test} from "@playwright/test";
test("Lets go RedBus", async({page})=>{
  await page.goto("https://www.abhibus.com/");
  await page.getByPlaceholder('From Station').click();
  await page.getByPlaceholder('From Station').fill("Hyderabad");
  await page.getByText('Hyderabad', { exact: true }).click();
  await page.getByPlaceholder('To Station').click();
  await page.getByPlaceholder('To Station').fill("Banglore");
  await page.getByText('Bangalore', { exact: true }).click();
  await page.getByPlaceholder('Onward Journey Date').click();
  await page.locator('(//*[@class=" "])[3]').click();
  await page.getByRole('button',{name :'Search'}).click();
  await page.waitForTimeout(3000);
  await page.locator('#service-operator-select-seat-2189498142').getByRole('button', { name: 'Show Seats' }).click();
  await page.getByRole('button', { name: 'B4' }).click();
  await page.getByText('Vanasthalipuram').click();
  await page.getByText('Chickballapur Byepass').click();
  await page.getByRole('button', { name: '₹1490 B4 Selected Seat' }).click()
  await page.getByText('Skip').click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill("Maheshwar reddy");
  await page.getByPlaceholder('Age').click();
  await page.getByPlaceholder('Age').fill('30');
  await page.getByRole('button',{name:'Male',exact:true}).click();


});
//(//*[@class="DayTiles__CalendarDaysSpan-sc-1xum02u-1 dkWAbH"])[4]

// test("Its time for RedBus Journey...", async({page})=>{
//   await page.goto("https://www.redbus.in/");
//   await page.getByLabel('From').click();
//   await page.getByLabel('From').fill("Nellore");
  
//   await page.locator('//*[@class="sc-iwsKbI jTMXri cursorPointing"]').click();
//   await page.getByLabel('To').click();
//   await page.getByLabel('To').fill("Hyderabad");
//   await page.locator('(//*[@class="sc-iwsKbI jTMXri cursorPointing"])').click();
//   await page.getByRole('button', { name: 'SEARCH BUSES' }).click();
//   await page.locator('//*[@class="DayTiles__CalendarDaysSpan-sc-1xum02u-1 dkWAbH"])[4]').click();


// })
// test("mobile application ", async({})=>{
//   const iPhone = playwright.devices['iPhone 12'];
//   const context = await browser.newContext({ ...iPhone });
//   const page = await context.newPage();


// });



