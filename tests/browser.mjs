import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const base='http://127.0.0.1:4173';
await mkdir('artifacts',{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--no-first-run','--disable-dev-shm-usage']});
const context=await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1,permissions:['clipboard-read','clipboard-write']});
const page=await context.newPage();
const errors=[]; page.on('pageerror',e=>errors.push(e.message));
const failed=[];page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)failed.push([r.status(),r.url()]);});
await page.goto(base,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
assert.equal(await page.locator('h1').count(),1);
assert.equal(await page.locator('.project-card').count(),9);
const checks=[];
const portrait=page.locator('.portrait-stage');const photo=page.locator('.portrait-stage .portrait');const box=await portrait.boundingBox();
const initialTransform=await photo.evaluate(el=>getComputedStyle(el).transform);
await page.mouse.move(box.x+box.width*.82,box.y+box.height*.35);await page.waitForTimeout(350);
assert.notEqual(await photo.evaluate(el=>getComputedStyle(el).transform),initialTransform);assert.equal(await portrait.evaluate(el=>el.classList.contains('is-interacting')),true);
assert.notEqual(await page.locator('.chip-typescript').evaluate(el=>getComputedStyle(el).translate),'0px');
await page.mouse.move(5,5);await page.waitForTimeout(700);assert.equal(await portrait.evaluate(el=>el.classList.contains('is-interacting')),false);
await portrait.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(350);assert.ok(parseFloat(await portrait.evaluate(el=>el.style.getPropertyValue('--portrait-y')))>1);await page.keyboard.press('Escape');await page.waitForTimeout(700);assert.ok(Math.abs(parseFloat(await portrait.evaluate(el=>el.style.getPropertyValue('--portrait-y'))))<.1);await page.locator('.brand').first().focus();
checks.push('Larger portrait responds to pointer and keyboard, layers move, and tilt resets');

for(const [filter,count]of [['ai',2],['platform',6],['open-source',1],['all',9]]){await page.locator(`[data-filter="${filter}"]`).click();assert.equal(await page.locator('.project-card:visible').count(),count);assert.equal(await page.locator(`[data-filter="${filter}"]`).getAttribute('aria-pressed'),'true');}
checks.push('Project filters: all, product platforms, open source, AI lab');
for(const id of ['solo','carli','house','expensify','aio','contour','boon','voxa','agents']){
  await page.locator(`[data-project="${id}"]`).click();await page.locator('#project-dialog[open]').waitFor();assert.ok((await page.locator('#dialog-title').innerText()).trim().length>0);assert.equal(await page.locator('#dialog-content .case-copy li').count(),id==='expensify'?6:4);await page.keyboard.press('Escape');assert.equal(await page.locator('#project-dialog[open]').count(),0);assert.equal(await page.locator(`[data-project="${id}"]`).evaluate(el=>el===document.activeElement),true);
}
checks.push('All 9 project dialogs, content, Escape, and focus restoration');
await page.locator('[data-project="solo"]').click();await page.locator('#project-dialog[open]').waitFor();await page.locator('.dialog-close').click();assert.equal(await page.locator('#project-dialog[open]').count(),0);
await page.locator('[data-project="solo"]').click();await page.locator('#project-dialog[open]').waitFor();await page.mouse.click(5,5);assert.equal(await page.locator('#project-dialog[open]').count(),0);
await page.locator('.copy-email').click();await page.waitForFunction(()=>document.querySelector('.toast').textContent.includes('copied'));assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),'abbasi.faizan1997@gmail.com');checks.push('Email copy action');
await page.locator('.motion-toggle').click();assert.equal(await page.locator('html').evaluate(el=>el.classList.contains('motion-paused')),true);await page.reload();assert.equal(await page.locator('html').evaluate(el=>el.classList.contains('motion-paused')),true);await page.locator('.motion-toggle').click();checks.push('Motion setting persists across reload');
assert.equal(await page.locator('.archive-item').count(),14);
await page.locator('#project-search').fill('Django');assert.ok(await page.locator('.archive-item:visible').count()>=2);
await page.locator('#project-search').fill('no-such-project');assert.equal(await page.locator('.archive-item:visible').count(),0);assert.equal(await page.locator('#archive-empty').isVisible(),true);
await page.locator('#project-search').fill('');assert.equal(await page.locator('.archive-item:visible').count(),14);checks.push('All 13 original projects plus Room Chat; project search and empty state');
for(const selector of ['.timeline-item','.skill-card']){const item=page.locator(selector).first();await item.locator('summary').click();assert.equal(await item.locator('details').getAttribute('open'),'');assert.ok(await item.locator('details li:visible').count()>1);await item.locator('summary').click();}checks.push('Career and skill details expand');
assert.equal(await page.locator('.timeline-item').count(),9);assert.equal(await page.locator('.education-card').count(),3);assert.equal(await page.locator('.article-card').count(),4);assert.equal(await page.locator('.certificate').count(),1);checks.push('Complete experience, education, certification, and articles');
await page.locator('.theme-toggle').click();assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');await page.reload();assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');await page.locator('.theme-toggle').click();checks.push('Theme switching persists across reload');
await page.locator('#code-tab-sql').click();assert.equal(await page.locator('#code-tab-sql').getAttribute('aria-selected'),'true');assert.ok((await page.locator('#code-readable').innerText()).includes('LIMIT 10;'));await page.waitForFunction(()=>document.querySelector('#code-visual').textContent.includes('LIMIT 10;'));
await page.locator('#code-tab-sql').focus();await page.keyboard.press('ArrowLeft');assert.equal(await page.locator('#code-tab-rails').getAttribute('aria-selected'),'true');assert.equal(await page.locator('#code-tab-rails').evaluate(el=>el===document.activeElement),true);
await page.locator('.code-copy').click();assert.ok((await page.evaluate(()=>navigator.clipboard.readText())).includes('class ProjectsController'));
await page.locator('.code-replay').click();await page.locator('.motion-toggle').click();assert.equal(await page.locator('html').evaluate(el=>el.classList.contains('motion-paused')),true);assert.ok((await page.locator('#code-visual').innerText()).includes('ApplicationController'));
await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(100);const frozen=await page.locator('.hero-network').evaluate(el=>el.toDataURL());await page.waitForTimeout(150);assert.equal(await page.locator('.hero-network').evaluate(el=>el.toDataURL()),frozen);await page.locator('.motion-toggle').click();await page.waitForTimeout(200);assert.notEqual(await page.locator('.hero-network').evaluate(el=>el.toDataURL()),frozen);
assert.equal(await page.locator('.about-notes > div').count(),3);assert.equal(await page.locator('.tech-strip').count(),1);checks.push('Code tabs, keyboard switching, typing, copy, replay, and global pause for canvas motion');
const a11y=[];
for(const width of [1440,1024,768,390,320]){
 await page.setViewportSize({width,height:1000});await page.goto(base,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(200);
 const dimensions=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));assert.ok(dimensions.scroll<=dimensions.viewport+1,`Horizontal overflow at ${width}: ${JSON.stringify(dimensions)}`);
 if(width===1440||width===390){
  for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=700){await page.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),y);await page.waitForTimeout(85);}await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(650);
  await page.screenshot({path:`artifacts/${width===1440?'desktop':'mobile'}-full.png`,fullPage:true,animations:'disabled'});await page.screenshot({path:`artifacts/${width===1440?'desktop':'mobile'}-hero.png`});
  const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();a11y.push({viewport:width,violations:result.violations.map(v=>({id:v.id,impact:v.impact,help:v.help,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});await writeFile('artifacts/accessibility.json',JSON.stringify(a11y,null,2));
 }
}
checks.push('No horizontal overflow at 1440, 1024, 768, 390, 320 pixels');
await page.setViewportSize({width:390,height:844});await page.goto(base);await page.locator('.menu-toggle').click();assert.equal(await page.locator('#mobile-nav').isVisible(),true);await page.locator('#mobile-nav a[href="#work"]').click();assert.equal(await page.locator('#mobile-nav').isVisible(),false);await page.locator('.menu-toggle').click();await page.keyboard.press('Escape');assert.equal(await page.locator('#mobile-nav').isVisible(),false);checks.push('Mobile navigation opens, navigates, and closes with Escape');
await page.locator('[data-project="expensify"]').click();await page.locator('#project-dialog[open]').waitFor();await page.locator('#project-dialog').evaluate(el=>Promise.all(el.getAnimations().map(a=>a.finished)));const modalAudit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();a11y.push({viewport:'mobile-modal',violations:modalAudit.violations.map(v=>({id:v.id,impact:v.impact,help:v.help,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});await page.keyboard.press('Escape');
await page.locator('.theme-toggle').click();await page.locator('.code-tabs').evaluate(el=>Promise.all(el.getAnimations({subtree:true}).map(a=>a.finished)));const darkAudit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();a11y.push({viewport:'dark-mobile',violations:darkAudit.violations.map(v=>({id:v.id,impact:v.impact,help:v.help,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});await page.locator('.theme-toggle').click();
const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:1280,height:900}});const plain=await nojs.newPage();await plain.goto(base);await plain.locator('[data-project="solo"]').click();await plain.waitForURL('**/work/solo.html');assert.equal(await plain.locator('h1').innerText(),'Solo / SoloSuit');checks.push('No-JavaScript project navigation and static case study');
for(const id of ['carli','house','expensify','aio','contour','boon','voxa','agents']){const response=await plain.goto(`${base}/work/${id}.html`);assert.equal(response.status(),200);assert.equal(await plain.locator('h1').count(),1);}
const reduce=await browser.newContext({reducedMotion:'reduce',viewport:{width:390,height:844}});const rp=await reduce.newPage();await rp.goto(base);assert.equal(await rp.locator('html').evaluate(e=>e.classList.contains('motion-paused')),true);checks.push('System reduced-motion preference respected');
await writeFile('artifacts/accessibility.json',JSON.stringify(a11y,null,2));await writeFile('artifacts/test-results.json',JSON.stringify({checks,errors,failed,a11y},null,2));
console.log(JSON.stringify({checks,errors,failed,accessibility:a11y.map(a=>({viewport:a.viewport,violations:a.violations.map(v=>({id:v.id,count:v.nodes.length}))}))},null,2));
await browser.close();assert.deepEqual(errors,[],'Browser runtime errors');assert.deepEqual(failed,[],'Failed local resources');assert.equal(a11y.flatMap(a=>a.violations).length,0,'Accessibility issues: see artifacts/accessibility.json');
