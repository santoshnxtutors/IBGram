async function main() {
  const store = await import("../src/lib/generated-pages/store");
  const cityPages = await import("../src/lib/seo/city-pages");
  const all = store.getAllGeneratedPages();
  console.log("TOTAL generated pages in store:", all.length);
  const byType: Record<string, number> = {};
  for (const p of all) byType[p.pageType] = (byType[p.pageType] || 0) + 1;
  console.log("by type:", JSON.stringify(byType));
  console.log("sample canonicals:", all.slice(0, 3).map(p => `${p.pageId} :: ${p.canonicalUrl}`));
  const gby = cityPages.getCitySeoPageBySlug("gurugram");
  console.log("gurugram city subjects:", gby?.ibSubjectsAvailable?.slice(0,3).map((s:any)=>s.slug));
}
main().catch(e => { console.error("PROBE ERROR:", e); process.exit(1); });
