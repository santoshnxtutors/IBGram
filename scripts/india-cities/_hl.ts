import path from "node:path";
import { pathToFileURL } from "node:url";
const [a,...bs_]=process.argv.slice(2);
const SKIP=new Set(["slug","flagCode","countryCode","stateCode","href","lastUpdated","wikipedia"]);
function strs(v:any,p="",o:[string,string][]=[]){ if(typeof v==="string"){ if(!SKIP.has(p.split(".").pop()!)) o.push([p,v]);} else if(Array.isArray(v)) v.forEach((x,i)=>strs(x,p+"["+i+"]",o)); else if(v&&typeof v==="object") for(const[k,x] of Object.entries(v)) strs(x,p?p+"."+k:k,o); return o;}
const load=async(s:string)=>{const m:any=await import(pathToFileURL(path.resolve("src/lib/india-cities/cities/"+s+".ts")).href);return Object.values(m).find((v:any)=>v?.slug===s);};
const W=(s:string)=>s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").split(" ").filter(Boolean);
(async()=>{const A=strs(await load(a));const bs=new Set<string>();
for(const b of bs_){for(const[,t] of strs(await load(b))){const w=W(t);for(let i=0;i+8<=w.length;i++)bs.add(w.slice(i,i+8).join(" "));}}
for(const[p,t] of A){const w=W(t);const hit=new Array(w.length).fill(false);let n=0;for(let i=0;i+8<=w.length;i++)if(bs.has(w.slice(i,i+8).join(" "))){n++;for(let j=i;j<i+8;j++)hit[j]=true;}
if(n){console.log("### "+p+" ("+n+")");let out="",inh=false;w.forEach((x,i)=>{if(hit[i]&&!inh){out+="[[";inh=true}if(!hit[i]&&inh){out+="]] ";inh=false}out+=x+" "});if(inh)out+="]]";console.log(out);}}})();
