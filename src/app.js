const root = document.documentElement;
root.classList.add('js');
const $ = (selector, within = document) => within.querySelector(selector);
const $$ = (selector, within = document) => [...within.querySelectorAll(selector)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPreference = null;
try { motionPreference = localStorage.getItem('faizan-motion'); } catch {}
let paused = reducedMotion.matches || motionPreference === 'paused';
const motionButton = $('.motion-toggle');
function applyMotion() {
  root.classList.toggle('motion-paused', paused);
  motionButton?.setAttribute('aria-pressed', String(paused));
  motionButton?.setAttribute('aria-label', paused ? 'Enable animations' : 'Pause animations');
  if ($('.motion-label')) $('.motion-label').textContent = paused ? 'Motion off' : 'Motion on';
  if ($('.motion-icon')) $('.motion-icon').textContent = paused ? '▷' : 'Ⅱ';
  window.dispatchEvent(new CustomEvent('portfolio:motion',{detail:{paused}}));
}
applyMotion();
motionButton?.addEventListener('click', () => {
  if (reducedMotion.matches) { notify('Animations are reduced to match your device settings.'); return; }
  paused = !paused; motionPreference = paused ? 'paused' : 'playing'; applyMotion();
  try { localStorage.setItem('faizan-motion', paused ? 'paused' : 'playing'); } catch {}
});
reducedMotion.addEventListener('change', event => { paused = event.matches || motionPreference === 'paused'; applyMotion(); });
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }, { threshold: .05, rootMargin: '0px 0px -20px 0px' });
  $$('.reveal').forEach(el => revealObserver.observe(el));
} else $$('.reveal').forEach(el => el.classList.add('visible'));
let scrollQueued = false;
const header = $('.site-header'), progress = $('.scroll-progress');
function updateScroll() {
  const scrollHeight = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.transform = `scaleX(${scrollHeight > 0 ? Math.min(1, scrollY / scrollHeight) : 0})`;
  header?.classList.toggle('scrolled', scrollY > 20);
  scrollQueued = false;
}
window.addEventListener('scroll', () => { if (!scrollQueued) { requestAnimationFrame(updateScroll); scrollQueued = true; } }, { passive: true });
window.addEventListener('resize', updateScroll); updateScroll();
const sectionObserver = new IntersectionObserver(entries => {
  for (const e of entries) if (e.isIntersecting) {
    $$('.desktop-nav a').forEach(a => { const current = a.getAttribute('href') === `#${e.target.id}`; a.classList.toggle('current', current); if(current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
  }
}, { rootMargin: '-20% 0px -55% 0px' });
$$('main section[id]').forEach(s => sectionObserver.observe(s));
const menuButton = $('.menu-toggle'), mobileNav = $('#mobile-nav');
function closeMenu() { if (!menuButton || !mobileNav) return; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); mobileNav.hidden = true; }
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); mobileNav.hidden = !open; });
$$('#mobile-nav a').forEach(a => a.addEventListener('click', closeMenu));
window.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav?.hidden) { closeMenu(); menuButton?.focus(); } });
window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if(event.matches) closeMenu(); });
let toastTimeout;
function notify(message) { const el = $('.toast'); if (!el) return; el.textContent = message; el.classList.add('visible'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => el.classList.remove('visible'), 3000); }
$('.copy-email')?.addEventListener('click', async () => {
  const email = 'abbasi.faizan1997@gmail.com';
  try { await navigator.clipboard.writeText(email); notify('Email copied. Let’s build something good.'); }
  catch { const el = $('.contact-email'); const range = document.createRange(); range.selectNodeContents(el); const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range); notify('Email selected — copy it, or click to open your email app.'); }
});
function updateClock() { const el = $('#local-time'); if(el) el.textContent = new Intl.DateTimeFormat('en-GB', { timeZone:'Asia/Karachi', hour:'2-digit', minute:'2-digit', hour12:false }).format(new Date()) + ' PKT'; }
updateClock(); setInterval(updateClock, 60000);
$$('.filter').forEach(button => button.addEventListener('click', () => {
  $$('.filter').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  const filter = button.dataset.filter; let count = 0;
  $$('.project-card').forEach(card => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.hidden = !visible;
    card.classList.remove('filter-enter');
    if (visible) { count++; card.classList.add('visible'); if(!paused) requestAnimationFrame(() => card.classList.add('filter-enter')); }
  });
  $('#filter-status').textContent = `Showing ${count} ${filter === 'all' ? '' : button.textContent.trim() + ' '}project${count === 1 ? '' : 's'}`;
  updateScroll();
}));
// Native links remain usable without JavaScript; the modal is progressive enhancement.
const dialog = $('#project-dialog');
let projectsPromise;
const getProjects = () => projectsPromise ||= fetch('/projects.json').then(r => { if(!r.ok) throw new Error('Project details unavailable'); return r.json(); }).catch(error => { projectsPromise = null; throw error; });
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function contributionMarkup(c) {
  if (typeof c === 'string') return `<li>${escapeHTML(c)}</li>`;
  return `<li class="contribution-detail"><strong>${escapeHTML(c.title)}</strong><p>${escapeHTML(c.text)}</p><div class="contribution-prs">${c.prs.map(n=>`<a href="https://github.com/Expensify/App/pull/${Number(n)}" target="_blank" rel="noopener noreferrer" aria-label="View merged Expensify PR ${Number(n)}">PR #${Number(n)} <span aria-hidden="true">↗</span></a>`).join('')}</div></li>`;
}
let lastProjectTrigger = null, projectRequest = 0;
$$('.project-trigger').forEach(link => link.addEventListener('click', async event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0 || typeof dialog?.showModal !== 'function') return;
  event.preventDefault(); const request = ++projectRequest;
  try {
    const projects = await getProjects(); if (request !== projectRequest) return;
    const project = projects.find(p => p.id === link.dataset.project); if(!project) throw new Error('Project not found');
    const p = project, safeLink = url => /^(https:\/\/|mailto:)/.test(url) ? escapeHTML(url) : '#';
    $('#dialog-content').innerHTML = `<div class="dialog-category">${escapeHTML(p.number)} / ${escapeHTML(p.type.toUpperCase())}</div><h2 id="dialog-title">${escapeHTML(p.name)}</h2><p class="case-headline">${escapeHTML(p.title)}</p><div class="case-meta"><div><span>MY ROLE</span><strong>${escapeHTML(p.role)}</strong></div><div><span>DOMAIN</span><strong>${escapeHTML(p.domain)}</strong></div></div><div class="case-copy"><h3>The context</h3><p>${escapeHTML(p.overview)}</p><h3>The challenge</h3><p>${escapeHTML(p.problem)}</p><h3>My contribution</h3><ul${p.contributionDetails?' class="contribution-list"':''}>${(p.contributionDetails||p.contributions).map(contributionMarkup).join('')}</ul></div><div class="project-tags case-stack">${p.stack.map(s=>`<span>${escapeHTML(s)}</span>`).join('')}</div><p class="case-scope">${escapeHTML(p.scope)}</p><div class="case-links">${p.links.map(l=>`<a class="button button-dark" href="${safeLink(l.href)}" ${l.href.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${escapeHTML(l.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div><a class="case-permalink" href="/work/${escapeHTML(p.id)}.html">Open full case study ↗</a>`;
    lastProjectTrigger = link;
    if(!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open'); dialog.scrollTop = 0; $('.dialog-close').focus();
  } catch { window.location.assign(link.href); }
}));
$('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if(event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close(); } });
dialog?.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastProjectTrigger?.focus({preventScroll:true}); });

// Theme and project notebook are small, progressively enhanced controls.
const themeButton = $('.theme-toggle');
let theme = 'light';
try { theme = localStorage.getItem('faizan-theme') || 'light'; } catch {}
function applyTheme(){root.dataset.theme=theme;themeButton?.setAttribute('aria-pressed',String(theme==='dark'));themeButton?.setAttribute('aria-label',theme==='dark'?'Switch to light theme':'Switch to dark theme');document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#101725':'#f7f9fc');window.dispatchEvent(new Event('portfolio:theme'));}
applyTheme();
themeButton?.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';applyTheme();try{localStorage.setItem('faizan-theme',theme);}catch{}});
$('#project-search')?.addEventListener('input',event=>{const query=event.target.value.trim().toLowerCase();let count=0;$$('.archive-item').forEach(card=>{const show=card.dataset.search.includes(query);card.hidden=!show;if(show){count++;card.classList.add('visible');}});$('#archive-status').textContent=`${count} project${count===1?'':'s'}${query?' found':''}`;$('#archive-empty').hidden=count>0;updateScroll();});

// Small, editable code examples. Visual typing is separate from accessible text.
const codeExamples = {
  react: {file:'ProjectCard.tsx',caption:'A reusable, typed component.',code:`type Project = {
  name: string;
  stack: string[];
};

export function ProjectCard({ project }: {
  project: Project
}) {
  return (
    <article>
      <h3>{project.name}</h3>
      <p>{project.stack.join(" · ")}</p>
    </article>
  );
}`},
  rails: {file:'projects_controller.rb',caption:'Scoped data. Predictable responses.',code:`class ProjectsController < ApplicationController
  before_action :authenticate_user!

  def index
    projects = current_user.projects
      .includes(:technologies)
      .order(updated_at: :desc)

    render json: projects.as_json(
      include: :technologies
    )
  end
end`},
  sql: {file:'project_activity.sql',caption:'Useful answers from relational data.',code:`SELECT
  p.name,
  COUNT(t.id) AS tasks_completed
FROM projects AS p
LEFT JOIN tasks AS t
  ON t.project_id = p.id
  AND t.status = 'completed'
WHERE p.owner_id = $1
GROUP BY p.id, p.name
ORDER BY tasks_completed DESC
LIMIT 10;`}
};
let activeCode='react', codeFrame=0, codeStarted=false, codeVisible=false;
const codeWindow=$('.code-window');
function colorCode(source){
  const pattern=/("[^"\n]*"|'[^'\n]*'|\/\/[^\n]*|\b(?:type|export|function|return|string|class|def|end|before_action|render|SELECT|COUNT|AS|FROM|LEFT|JOIN|ON|AND|WHERE|GROUP|BY|ORDER|DESC|LIMIT)\b|\b\d+\b)/g;
  return source.split(pattern).map(token=>{let kind='';if(/^['"]/.test(token))kind='string';else if(token.startsWith('//'))kind='comment';else if(/^\d+$/.test(token))kind='number';else if(/^(type|export|function|return|string|class|def|end|before_action|render|SELECT|COUNT|AS|FROM|LEFT|JOIN|ON|AND|WHERE|GROUP|BY|ORDER|DESC|LIMIT)$/.test(token))kind='keyword';return kind?`<span class="token-${kind}">${escapeHTML(token)}</span>`:escapeHTML(token);}).join('');
}
function renderCode(length){
  const example=codeExamples[activeCode].code,lines=example.slice(0,length).split('\n');
  // Hidden trailing text preserves line wrapping and keeps the footer still while typing.
  $('#code-visual').innerHTML=example.split('\n').map((fullLine,i)=>{const line=lines[i]||'';return `<div class="code-line"><span class="code-line-number">${String(i+1).padStart(2,'0')}</span><span class="code-line-source">${colorCode(line)}${i===lines.length-1&&length<example.length?'<span class="code-cursor"></span>':''}<span class="code-pending">${escapeHTML(fullLine.slice(line.length))}</span></span></div>`;}).join('');
}
function playCode(){
  cancelAnimationFrame(codeFrame);codeStarted=true;
  const example=codeExamples[activeCode];
  if(paused||!codeVisible){renderCode(example.code.length);return;}
  const started=performance.now();let lastLength=-1;
  const tick=now=>{const length=Math.min(example.code.length,Math.floor((now-started)/7));if(length!==lastLength){renderCode(length);lastLength=length;}if(length<example.code.length)codeFrame=requestAnimationFrame(tick);};
  renderCode(0);codeFrame=requestAnimationFrame(tick);
}
function selectCode(key,focus=false){
  activeCode=key;const example=codeExamples[key];
  $$('.code-tabs button').forEach(button=>{const selected=button.dataset.code===key;button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;if(selected&&focus)button.focus();});
  $('#code-filename').textContent=example.file;$('#code-caption').textContent=example.caption;$('#code-readable').textContent=example.code;$('#code-panel').setAttribute('aria-labelledby','code-tab-'+key);playCode();
}
if(codeWindow){
  $('#code-readable').textContent=codeExamples.react.code;renderCode(codeExamples.react.code.length);
  $$('.code-tabs button').forEach(button=>{button.addEventListener('click',()=>selectCode(button.dataset.code));button.addEventListener('keydown',event=>{const keys=Object.keys(codeExamples),index=keys.indexOf(activeCode);let next;if(event.key==='ArrowRight')next=(index+1)%keys.length;if(event.key==='ArrowLeft')next=(index+keys.length-1)%keys.length;if(event.key==='Home')next=0;if(event.key==='End')next=keys.length-1;if(next!==undefined){event.preventDefault();selectCode(keys[next],true);}});});
  $('.code-replay').addEventListener('click',playCode);
  $('.code-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(codeExamples[activeCode].code);notify('Code example copied.');}catch{notify('Clipboard unavailable. The example is readable in the code panel.');}});
  new IntersectionObserver(entries=>{codeVisible=entries[0].isIntersecting;if(codeVisible&&!codeStarted)playCode();if(!codeVisible){cancelAnimationFrame(codeFrame);renderCode(codeExamples[activeCode].code.length);}},{threshold:.15}).observe(codeWindow);
  window.addEventListener('portfolio:motion',()=>{if(paused){cancelAnimationFrame(codeFrame);renderCode(codeExamples[activeCode].code.length);}});
}
// Gentle pointer depth on desktop. Touch and reduced-motion users get steady cards.
const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
for(const card of $$('.project-card,.skill-card,.archive-item')){
  let frame=0;
  card.addEventListener('pointermove',event=>{if(paused||!finePointer.matches)return;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const box=card.getBoundingClientRect(),x=event.clientX-box.left,y=event.clientY-box.top;card.style.setProperty('--pointer-x',`${x}px`);card.style.setProperty('--pointer-y',`${y}px`);card.style.setProperty('--tilt-x',`${(0.5-y/box.height)*3}deg`);card.style.setProperty('--tilt-y',`${(x/box.width-0.5)*3}deg`);});},{passive:true});
  card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg');});
}
// A spring-smoothed portrait, with pointer and keyboard controls.
const portraitArea=$('.portrait-stage');
const portraitPointer={x:0,y:0,active:false};
if(portraitArea){
 let frame=0,targetX=0,targetY=0,x=0,y=0,scale=1,targetScale=1,last=0;
 const clamp=value=>Math.max(-1,Math.min(1,value));
 function paint(){
  portraitArea.style.setProperty('--portrait-x',`${-y*8}deg`);
  portraitArea.style.setProperty('--portrait-y',`${x*9}deg`);
  portraitArea.style.setProperty('--look-x',`${x*10}px`);
  portraitArea.style.setProperty('--look-y',`${y*8}px`);
  portraitArea.style.setProperty('--portrait-scale',scale.toFixed(4));
  portraitArea.style.setProperty('--glow-x',`${50+x*37}%`);
  portraitArea.style.setProperty('--glow-y',`${50+y*37}%`);
  portraitPointer.x=x;portraitPointer.y=y;
 }
 function settle(now){
  const dt=Math.min(40,last?now-last:16);last=now;const spring=1-Math.exp(-dt/85);
  x+=(targetX-x)*spring;y+=(targetY-y)*spring;scale+=(targetScale-scale)*spring;paint();
  if(Math.abs(x-targetX)+Math.abs(y-targetY)+Math.abs(scale-targetScale)>.001)frame=requestAnimationFrame(settle);
  else{frame=0;x=targetX;y=targetY;scale=targetScale;paint();}
 }
 function aim(nx,ny,active){targetX=clamp(nx);targetY=clamp(ny);targetScale=active?1.025:1;portraitPointer.active=active;portraitArea.classList.toggle('is-interacting',active);if(!frame){last=0;frame=requestAnimationFrame(settle);}}
 function reset(immediate=false){
  if(immediate){cancelAnimationFrame(frame);frame=0;x=y=targetX=targetY=0;scale=targetScale=1;portraitPointer.active=false;portraitArea.classList.remove('is-interacting');paint();}
  else aim(0,0,false);
 }
 portraitArea.addEventListener('pointermove',event=>{if(paused||!finePointer.matches||event.pointerType==='touch')return;const box=portraitArea.getBoundingClientRect();aim(((event.clientX-box.left)/box.width-.5)*2,((event.clientY-box.top)/box.height-.5)*2,true);},{passive:true});
 portraitArea.addEventListener('pointerleave',()=>reset());
 portraitArea.addEventListener('blur',()=>reset());
 portraitArea.addEventListener('keydown',event=>{if(paused)return;const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Escape'];if(!keys.includes(event.key))return;event.preventDefault();if(event.key==='Escape'){reset();return;}aim(targetX+(event.key==='ArrowRight'?.3:event.key==='ArrowLeft'?-.3:0),targetY+(event.key==='ArrowDown'?.3:event.key==='ArrowUp'?-.3:0),true);});
 window.addEventListener('portfolio:motion',()=>{if(paused)reset(true);});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)reset(true);});
 new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)reset(true);}).observe(portraitArea);
 paint();
}
// A quiet network behind the portrait. No external animation or 3D dependency.
const network=$('.hero-network');
if(network){
 const ctx=network.getContext('2d');let width=0,height=0,visible=true,frame=0,last=0,phase=0;
 const nodes=Array.from({length:27},(_,i)=>({x:(Math.sin(i*47.1)+1)/2,y:(Math.cos(i*31.7)+1)/2,speed:.3+(i%5)*.12}));
 function draw(){
  if(!ctx||!width)return;ctx.clearRect(0,0,width,height);
  const dark=root.dataset.theme==='dark',rgb=dark?'140,178,255':'64,114,201';
  const points=nodes.map((p,i)=>{let x=(.06+p.x*.88)*width+Math.sin(phase*p.speed+i)*11,y=(.05+p.y*.83)*height+Math.cos(phase*p.speed+i)*13;if(portraitPointer.active&&!paused){const dx=x-(.5+portraitPointer.x*.5)*width,dy=y-(.5+portraitPointer.y*.5)*height,d=Math.hypot(dx,dy);if(d>0&&d<145){const push=(1-d/145)*25;x+=dx/d*push;y+=dy/d*push;}}return{x,y};});
  points.forEach((p,i)=>{for(let j=i+1;j<points.length;j++){const q=points[j],distance=Math.hypot(p.x-q.x,p.y-q.y);if(distance<100){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(${rgb},${(1-distance/100)*.19})`;ctx.lineWidth=.6;ctx.stroke();}}ctx.beginPath();ctx.arc(p.x,p.y,i%4===0?2:1.2,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},${i%4===0?.55:.24})`;ctx.fill();});
 }
 function tick(time){if(!visible||document.hidden||paused){frame=0;return;}if(time-last>32){phase+=Math.min(time-last,60)*.00045;last=time;draw();}frame=requestAnimationFrame(tick);}
 function restart(){cancelAnimationFrame(frame);frame=0;draw();if(visible&&!document.hidden&&!paused){last=performance.now();frame=requestAnimationFrame(tick);}}
 new ResizeObserver(()=>{const rect=network.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);width=rect.width;height=rect.height;network.width=Math.round(width*dpr);network.height=Math.round(height*dpr);ctx?.setTransform(dpr,0,0,dpr,0,0);restart();}).observe(network);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;restart();}).observe(network);
 window.addEventListener('portfolio:motion',restart);window.addEventListener('portfolio:theme',restart);document.addEventListener('visibilitychange',restart);
}
