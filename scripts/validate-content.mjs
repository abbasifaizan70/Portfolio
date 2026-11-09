import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {experience,skills,education,articles} from '../src/history.mjs';
import {projects,profile} from '../src/projects.mjs';
const html=await readFile('dist/index.html','utf8');
const text=html.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&');
const legacy=JSON.parse(await readFile('src/legacy-projects.json','utf8')).data;
for(const [i,p]of legacy.entries()){
 const name=p.name.trim().replace('Payemnt','Payment').replace('Flack','Flask');
 assert.ok(text.includes(name),`Missing original project: ${name}`);
 const url=i===12?'https://github.com/abbasifaizan70/expense-manage-application':p.url;
 assert.ok(html.includes(url),`Missing project link: ${url}`);
}
for(const p of projects)assert.ok(text.includes(p.name),`Missing recent project: ${p.name}`);
for(const e of experience)assert.ok(text.includes(e.company),`Missing experience: ${e.company}`);
for(const e of education){assert.ok(text.includes(e.name),`Missing education: ${e.name}`);if(e.url)assert.ok(html.includes(e.url),`Missing education link: ${e.name}`);}
for(const a of articles)assert.ok(html.includes(a.url),`Missing article: ${a.title}`);
for(const url of [profile.resume,profile.github,profile.linkedin,profile.upwork,'https://coursera.org/share/678c02426c7e790ce4b2c902876d5584','https://medium.com/@abbasi.faizan1997','https://twitter.com/Faizana51216271','https://www.facebook.com/profile.php?id=100025535123020'])assert.ok(html.includes(url),`Missing profile link: ${url}`);
for(const s of skills)for(const t of s.tools)assert.ok(text.includes(t),`Missing skill: ${t}`);
for(const label of ['Silver Medalist','3.94 / 4','Deep Learning','Andrew Ng','cricket','2014 — 2016','2017 — 2021'])assert.ok(text.includes(label),`Missing original background detail: ${label}`);
for(const forbidden of ['Muffito','FreeCopy','Delhivery','Kanodar','Gujarat','Nov 2021 – Present','__PROJECTS__','__INSTAGRAM__'])assert.ok(!html.includes(forbidden),`Stale or template content: ${forbidden}`);
console.log(`Content parity checked: 13 original projects, ${projects.length} selected projects, all ${experience.length} experience entries, 3 education entries, certificate, 4 articles, skills, resume, and contact links. Instagram excluded at the owner’s request.`);
