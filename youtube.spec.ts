import {test} from "@playwright/test"
test("Its Youtube time", async({page})=>{

    await page.goto("https://www.youtube.com/")
    await page.getByPlaceholder('Search').click()
    await page.waitForTimeout(3000)
    await page.getByPlaceholder('Search').fill("Urike Urike song");
    await page.keyboard.press('Enter');
   // await page.locator('a').filter({ hasText: ':52 3:52 Now playing' }).click();

   await page.waitForTimeout(3000)
  // await page.getByRole('link', { name: 'Urike Urike - Video Song | HIT 2 | Adivi Sesh | Meenakshi | MM Sreelekha | Sid Sriram by Saregama Telugu 35,161,996 views 1 year ago 3 minutes, 52 seconds', exact: true }).click();
  await page.locator('xpath =(//*[@class="yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"])[7]')
   try {
     await page.waitForSelector('.ytp-skip-ad-button__text',{timeout: 15000});
     await page.locator('.ytp-skip-ad-button__text').click();

   } catch (error) {
        console.log("No skippable ads detected or timeout reached.")
   }
    
});





// test("new youtube", async({page})=>{
//     await page.goto("https://www.youtube.com/");

//     await page.getByPlaceholder('Search').click();
//     await page.waitForTimeout(3000);
//     await page.getByPlaceholder('Search').fill("Urike Urike song");
//     await page.keyboard.press('Enter');

//     await page.waitForTimeout(3000);

//     // Wait for the search results to load and click on the specific video
//     // await page.waitForSelector('a:has-text("Urike Urike song")');
//     // await page.locator('a').filter({ hasText: 'Urike Urike song' }).click();

//     await page.getByRole('link', { name: 'Urike Urike - Video Song | HIT 2 | Adivi Sesh | Meenakshi | MM Sreelekha | Sid Sriram by Saregama Telugu 35,161,538 views 1 year ago 3 minutes, 52 seconds', exact: true }).click();

//     // Wait for the video to start, skipping any ads if they appear
//     try {
//         await page.waitForSelector('.ytp-ad-skip-button', { timeout: 15000 });
//         await page.locator('.ytp-ad-skip-button').click();  // Click "Skip Ads" button
//     } catch (error) {
//         console.log('No skippable ads detected or timeout reached.');
//     }

//     // Continue with the rest of your automation script
//     // You can add more code here to interact with the video or page after skipping the ads
// });


// // test("Skip YouTube Ads", async ({ page }) => {
// //     await page.goto("https://www.youtube.com/");

// //     await page.getByPlaceholder('Search').click();
// //     await page.waitForTimeout(3000);
// //     await page.getByPlaceholder('Search').fill("Urike Urike song");
// //     await page.keyboard.press('Enter');

// //     // Wait for the search results to load and click on the specific video
// //     await page.waitForSelector('a:has-text("Urike Urike song")');
//     await page.locator('a').filter({ hasText: 'Urike Urike song' }).click();

//     // Try to skip ads
//     try {
//         await page.waitForSelector('.ytp-ad-skip-button', { timeout: 15000 });
//         await page.locator('.ytp-ad-skip-button').click();  // Click "Skip Ads" button
//         console.log('Skipped ad successfully.');
//     } catch (error) {
//         console.log('No skippable ads detected or timeout reached.');
//     }

//     // Wait for the video to load and play
//     await page.waitForSelector('.html5-video-player');
//     console.log('Video is playing.');

//     // Continue with the rest of your automation script
//     // Example: Wait for the video to finish or perform other interactions
//     await page.waitForTimeout(30000);  // Wait for 30 seconds (adjust as needed)

// });
