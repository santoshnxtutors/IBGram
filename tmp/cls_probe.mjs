import { chromium, devices } from "playwright";

const url = process.argv[2] || "http://localhost:3000/";
const browser = await chromium.launch();
const context = await browser.newContext({ ...devices["Pixel 5"] });
const page = await context.newPage();

await page.addInitScript(() => {
  window.__cls = 0;
  window.__shifts = [];
  const po = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.hadRecentInput) continue;
      window.__cls += entry.value;
      const sources = (entry.sources || []).map((s) => {
        const n = s.node;
        if (!n) return "(no node)";
        const tag = n.tagName ? n.tagName.toLowerCase() : n.nodeName;
        const cls = n.className && typeof n.className === "string" ? "." + n.className.trim().split(/\s+/).slice(0, 3).join(".") : "";
        const id = n.id ? "#" + n.id : "";
        const txt = (n.textContent || "").trim().slice(0, 40);
        return `${tag}${id}${cls} | "${txt}"`;
      });
      window.__shifts.push({ value: Number(entry.value.toFixed(4)), sources });
    }
  });
  po.observe({ type: "layout-shift", buffered: true });
});

await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(6500); // capture late shifts (fonts, deferred header)
const cls = await page.evaluate(() => window.__cls);
const shifts = await page.evaluate(() => window.__shifts);

console.log("TOTAL CLS:", cls.toFixed(4));
console.log("shift events:", shifts.length);
shifts
  .sort((a, b) => b.value - a.value)
  .slice(0, 10)
  .forEach((s, i) => {
    console.log(`#${i + 1}  value=${s.value}`);
    s.sources.forEach((src) => console.log("     <-", src));
  });

await browser.close();
