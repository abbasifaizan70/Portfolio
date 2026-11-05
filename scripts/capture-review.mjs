import {chromium} from 'playwright';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
await page.goto('http://127.0.0.1:4173',{waitUntil:'networkidle'});
await page.locator('.motion-toggle').click();
for(const id of ['work','experience','skills','education','writing','contact']){await page.locator('#'+id).evaluate(el=>el.scrollIntoView({behavior:'instant'}));await page.waitForTimeout(100);await page.screenshot({path:'artifacts/review-'+id+'.png'});}
await page.locator('.theme-toggle').click();await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.screenshot({path:'artifacts/dark-hero.png'});
await browser.close();
