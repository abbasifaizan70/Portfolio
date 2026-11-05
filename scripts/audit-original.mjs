import {chromium} from 'playwright';
import {writeFile,mkdir} from 'node:fs/promises';
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
await mkdir('artifacts/original',{recursive:true});
const result=[];
for(const path of ['/','/experience','/education','/projects','/blogs','/contact']){
 await page.goto('https://faizan-shoukat-abbasi.vercel.app'+path,{waitUntil:'networkidle',timeout:45000});
 await page.waitForTimeout(800);
 result.push({path,title:await page.title(),text:await page.locator('body').innerText(),links:await page.locator('a').evaluateAll(a=>a.map(x=>({text:x.innerText,href:x.href}))),images:await page.locator('img').evaluateAll(a=>a.map(x=>({src:x.src,alt:x.alt})))});
 await page.screenshot({path:'artifacts/original/'+(path.slice(1)||'home')+'.png',fullPage:true});
}
await writeFile('artifacts/original/live-audit.json',JSON.stringify(result,null,2));
console.log(result.map(x=>({path:x.path,title:x.title,characters:x.text.length,links:x.links.length})));
await browser.close();
