import { getAllGeneratedPages } from "../src/lib/generated-pages/store";
import { getVisibleGeneratedContentText } from "../src/lib/page-generator/content-normalizer";
const all = getAllGeneratedPages().filter(p => /gurugram|gurgaon/i.test(p.canonicalUrl));
function wc(p:any){ return getVisibleGeneratedContentText(p).trim().split(/\s+/).filter(Boolean).length; }
const byType:any = {};
for(const p of all){
  const t = p.pageType;
  byType[t] = byType[t] || { n:0, words:[], dup:{} };
  byType[t].n++; byType[t].words.push(wc(p));
  byType[t].dup[p.quality?.duplicateRisk||"?"] = (byType[t].dup[p.quality?.duplicateRisk||"?"]||0)+1;
}
for(const t of Object.keys(byType)){
  const w = byType[t].words.sort((a:number,b:number)=>a-b);
  const med = w[Math.floor(w.length/2)];
  console.log(`${t}: n=${byType[t].n} words[min/med/max]=${w[0]}/${med}/${w[w.length-1]} dup=${JSON.stringify(byType[t].dup)}`);
}
// crude near-duplicate check: intro similarity across societies
const socs = all.filter(p=>p.pageType==="society");
const intros = socs.map(p=>(p.introSummary||"").slice(0,80));
const uniqIntros = new Set(intros).size;
console.log(`societies: ${socs.length}, unique intro-prefixes: ${uniqIntros}`);
const heroes = socs.map(p=>(p.contentBlocks?.[0]?.body||"").slice(0,120));
console.log(`societies: unique first-block prefixes: ${new Set(heroes).size}/${socs.length}`);
