import path from "node:path";import { pathToFileURL } from "node:url";
const [s,...ps]=process.argv.slice(2);
(async()=>{const m:any=await import(pathToFileURL(path.resolve("src/lib/india-cities/cities/"+s+".ts")).href);const c:any=Object.values(m).find((v:any)=>v?.slug===s);
for(const p of ps){const v=p.split(/[.\[\]]+/).filter(Boolean).reduce((o:any,k)=>o[k],c);console.log("##",p,"\n"+JSON.stringify(v,null,1));}})();
