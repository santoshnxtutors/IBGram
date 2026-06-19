# -*- coding: utf-8 -*-
import json, re, urllib.request, urllib.error, concurrent.futures

BASE = "http://localhost:3000"
slugs = json.load(open('tmp/gurgaon-content/_slugs.json', encoding='utf-8'))


def fetch(slug):
    url = f"{BASE}/{slug}/"
    res = {"slug": slug, "issues": []}
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Googlebot/2.1"})
        with urllib.request.urlopen(req, timeout=30) as r:
            res["code"] = r.getcode()
            html = r.read().decode("utf-8", "ignore")
    except urllib.error.HTTPError as e:
        res["code"] = e.code; res["issues"].append(f"HTTP {e.code}"); return res
    except Exception as e:
        res["code"] = 0; res["issues"].append(f"ERR {str(e)[:50]}"); return res

    if res["code"] != 200:
        res["issues"].append(f"HTTP {res['code']}"); return res

    canon = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    want = f"https://www.ibgram.com/{slug}/"
    if not canon:
        res["issues"].append("no canonical")
    elif canon.group(1) != want:
        res["issues"].append(f"canonical mismatch: {canon.group(1)}")

    robots = re.search(r'<meta name="robots" content="([^"]+)"', html)
    if not robots:
        res["issues"].append("no robots meta")
    elif "noindex" in robots.group(1).lower():
        res["issues"].append(f"NOINDEX: {robots.group(1)}")

    if not re.search(r'<title>[^<]+</title>', html):
        res["issues"].append("no title")
    if not re.search(r'<meta name="description" content="[^"]+"', html):
        res["issues"].append("no meta description")
    if not re.search(r'<h1[^>]*>', html):
        res["issues"].append("no H1")
    if 'application/ld+json' not in html:
        res["issues"].append("no JSON-LD")
    # OpenGraph
    if not re.search(r'<meta property="og:title"', html):
        res["issues"].append("no og:title")
    # visible text length (rough)
    text = re.sub(r'<[^>]+>', ' ', html)
    words = len(re.findall(r'\b\w+\b', text))
    res["words"] = words
    if words < 1500:
        res["issues"].append(f"thin HTML ({words} words)")
    return res


results = []
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
    for r in ex.map(fetch, slugs):
        results.append(r)

ok = [r for r in results if not r["issues"]]
bad = [r for r in results if r["issues"]]
codes = {}
for r in results:
    codes[r.get("code")] = codes.get(r.get("code"), 0) + 1
print(f"HTTP codes: {codes}")
print(f"HEALTHY: {len(ok)}/400 | WITH ISSUES: {len(bad)}")
wcs = sorted(r.get("words", 0) for r in results if r.get("code") == 200)
if wcs:
    print(f"rendered HTML words: min {wcs[0]} / median {wcs[len(wcs)//2]} / max {wcs[-1]}")
for r in bad[:60]:
    print(f"  ! {r['slug']}: {', '.join(r['issues'])}")
json.dump(bad, open('tmp/gurgaon-content/_health_issues.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
