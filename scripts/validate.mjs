import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
const root=resolve('dist');let checked=0;const errors=[];
import {siteOrigin as origin} from './site-config.mjs';
async function scan(dir){for(const f of await readdir(dir)){const file=resolve(dir,f);if((await stat(file)).isDirectory()){await scan(file);continue;}if(!f.endsWith('.html'))continue;const html=await readFile(file,'utf8');checked++;
if(!html.includes('<title>')||!html.includes('name="description"'))errors.push(`Missing metadata: ${file}`);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if(new Set(ids).size!==ids.length)errors.push(`Duplicate element IDs: ${file}`);
for(const [,href] of html.matchAll(/href="([^"]*)"/g)){
 if(!href||href==='#'){errors.push(`Empty link in ${file}`);continue;}
 const url=new URL(href,origin+'/'+file.slice(root.length+1));
 if(url.origin!==origin||!url.hash)continue;
 const target=resolve(root,'.'+(url.pathname.endsWith('/')?url.pathname+'index.html':url.pathname));
 try{const targetHtml=await readFile(target,'utf8');const targetIds=[...targetHtml.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);if(!targetIds.includes(decodeURIComponent(url.hash.slice(1))))errors.push(`Missing anchor ${href} in ${file}`);}catch{errors.push(`Missing anchor page ${href} in ${file}`);}
}
for(const [,image] of html.matchAll(/property="og:image" content="([^"]+)"/g)){
 const url=new URL(image);if(url.origin!==origin)errors.push(`Wrong share-image origin: ${file}`);
 try{await stat(resolve(root,'.'+url.pathname));}catch{errors.push(`Missing share image ${image} in ${file}`);}
}
if(html.includes('chatgpt.site'))errors.push(`Stale preview domain: ${file}`);
for(const [,attr,url]of html.matchAll(/(src|href)="([^"]+)"/g)){if(/^(https?:|mailto:|#|data:)/.test(url))continue;const path=url.split(/[?#]/)[0];try{await stat(path.startsWith('/')?resolve(root,'.'+path):resolve(dirname(file),path));}catch{errors.push(`Missing ${attr} ${url} in ${file}`);}}
}}
await scan(root);if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`Validated ${checked} static pages and their local assets.`);
