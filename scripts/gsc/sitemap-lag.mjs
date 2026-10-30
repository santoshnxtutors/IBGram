// Compares what Google has recorded per child sitemap against what the site
// actually serves, so a stale index total can be attributed to a specific child
// rather than hand-waved as "caching".
import path from "node:path";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({ keyFile: path.join(process.cwd(), "Iamuseragent.json"), scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });
const wm = google.webmasters({ version: "v3", auth });
const { data } = await wm.sitemaps.list({ siteUrl: "sc-domain:ibgram.com" });

const live = async (u) => ((await (await fetch(u, { headers: { "user-agent": "Mozilla/5.0" } })).text()).match(/<loc>/g) ?? []).length;

let googleChildSum = 0, liveChildSum = 0, indexCount = 0;
console.log("sitemap                               google   live   diff   lastDownloaded");
for (const s of (data.sitemap ?? []).sort((a, b) => a.path.localeCompare(b.path))) {
  const g = Number(s.contents?.[0]?.submitted ?? 0);
  const l = await live(s.path);
  const isIndex = s.path.endsWith("/sitemap.xml");
  const name = s.path.replace("https://www.ibgram.com/", "");
  if (isIndex) { indexCount = g; }
  else if (!name.startsWith("priority")) { googleChildSum += g; liveChildSum += l; }
  console.log(`${name.padEnd(30)} ${String(g).padStart(8)} ${String(l).padStart(6)} ${String(g - l).padStart(6)}   ${String(s.lastDownloaded ?? "-").slice(0, 16)}`);
}
console.log(`\nindex "Discovered pages" reported by Google : ${indexCount}`);
console.log(`sum of Google's own child counts           : ${googleChildSum}`);
console.log(`sum of what the children actually serve    : ${liveChildSum}`);
console.log(`\nindex vs Google's own children : ${indexCount - googleChildSum}`);
console.log(`Google's children vs live      : ${googleChildSum - liveChildSum}`);
