import m from "../tmp/batch1/manifest.json";
const arr = m as any[];
const pick = (pred:any)=> arr.find(pred);
const show = (label:string, e:any)=>{ console.log("=== "+label+" ==="); if(!e){console.log("(none)");return;} console.log(JSON.stringify({url:e.url,pageType:e.pageType,pageId:e.pageId,reused:e.reusedPageId,primaryKeyword:e.input.primaryKeyword,serviceFocus:e.input.serviceFocus,subjects:e.input.subjects,nearbyAreas:e.input.nearbyAreas,schools:e.input.schoolsMentioned,brief:e.writerBrief},null,2));};
show("Vasant Vihar Delhi area", pick((e:any)=>e.url.includes("/delhi/areas/vasant-vihar/")));
show("Gurugram society", pick((e:any)=>e.pageType==="society"));
show("Pune city", pick((e:any)=>e.pageType==="city"&&e.citySlug==="pune"));
show("subject", pick((e:any)=>e.pageType==="subject"));
