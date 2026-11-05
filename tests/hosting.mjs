import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {once} from 'node:events';

const server=spawn(process.execPath,['scripts/serve.mjs'],{env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});
try {
  const output=await Promise.race([
    once(server.stdout,'data').then(([data])=>data.toString()),
    once(server,'exit').then(([code])=>{throw new Error(`Preview exited: ${code}`);})
  ]);
  const base=output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
  assert.ok(base,'Server must report its assigned port');
  for(const [path,section] of [['home','home'],['projects','work'],['experience','experience'],['education','education'],['blogs','writing'],['contact','contact']]){
    for(const suffix of ['','/']){
      const response=await fetch(`${base}/${path}${suffix}`,{redirect:'manual'});
      assert.equal(response.status,308,`Legacy URL /${path}${suffix}`);
      assert.equal(response.headers.get('location'),`/#${section}`);
    }
  }
  for(const path of ['/','/work/solo.html','/work/carli.html','/work/house.html','/work/expensify.html','/work/boon.html','/work/voxa.html','/work/agents.html','/assets/social-card.png','/sitemap.xml','/robots.txt']){
    const response=await fetch(base+path);assert.equal(response.status,200,path);
  }
  const missing=await fetch(base+'/missing-page');assert.equal(missing.status,404);assert.match(await missing.text(),/Back to my portfolio/);
  console.log('Hosting checks passed: 12 legacy redirects, 8 content pages, share image, sitemap, robots, and helpful 404.');
}finally{server.kill();}
