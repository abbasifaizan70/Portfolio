import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist'), port=Number(process.env.PORT||4173);
const {redirects=[]}=JSON.parse(await readFile('vercel.json','utf8'));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ttf':'font/ttf','.xml':'application/xml','.txt':'text/plain'};
const server=createServer(async(req,res)=>{try{
  const url=new URL(req.url,'http://localhost');
  const redirect=redirects.find(rule=>rule.source===url.pathname.replace(/\/$/,''));
  if(redirect){res.writeHead(redirect.permanent?308:307,{Location:redirect.destination});res.end();return;}
  let file=resolve(root,'.'+decodeURIComponent(url.pathname));
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);res.end();return;}
  if((await stat(file)).isDirectory()) file=resolve(file,'index.html');
  const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);
}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'404.html'),'utf8'));}}).listen(port,'127.0.0.1',()=>console.log(`Portfolio preview: http://127.0.0.1:${server.address().port}`));
