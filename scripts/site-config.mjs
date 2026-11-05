const configured=process.env.SITE_ORIGIN||(process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:null);
if(process.env.VERCEL==='1'&&!configured)throw new Error('Set SITE_ORIGIN or enable Vercel system environment variables before deploying.');
export const siteOrigin=new URL(configured||'http://localhost:4173').origin;
