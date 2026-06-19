# -*- coding: utf-8 -*-
"""Generate src/lib/gurgaon-seo/content/<slug>.ts + index.ts.

Reads unique content JSON from tmp/gurgaon-content/<slug>.json when present.
Falls back to a minimal valid placeholder so the scaffold compiles before the
content workflow runs.
"""
import json, os, re

PAGES = json.load(open('./tmp/gurgaon-content/_pages.json', encoding='utf-8'))
CONTENT_DIR = 'src/lib/gurgaon-seo/content'
JSON_DIR = './tmp/gurgaon-content'
os.makedirs(CONTENT_DIR, exist_ok=True)


def js(s):
    return json.dumps("" if s is None else str(s), ensure_ascii=False)


def arr(items, indent):
    pad = " " * indent
    if not items:
        return "[]"
    body = ",\n".join(f"{pad}  {js(i)}" for i in items)
    return "[\n" + body + f"\n{pad}]"


def word_count(content):
    parts = [content.get("heroIntro", ""), content.get("closingCta", "")]
    parts += content.get("trustPoints", [])
    for s in content.get("sections", []):
        parts.append(s.get("heading", ""))
        parts += s.get("paragraphs", [])
        parts += s.get("bullets", [])
    for f in content.get("faqs", []):
        parts.append(f.get("question", ""))
        parts.append(f.get("answer", ""))
    return len(re.findall(r"\b\w+\b", " ".join(parts)))


def placeholder(page):
    loc = page["locality"]
    kw = page["primaryKeyword"]
    return {
        "heroIntro": f"Placeholder intro for {kw}. Unique content pending.",
        "trustPoints": ["Verified tutors", "Home, online and hybrid", "Programme-aware matching", "Free first consultation"],
        "sections": [{
            "heading": f"Tutoring near {loc}",
            "paragraphs": [f"Placeholder body for {kw} in {loc}, Gurugram."],
            "bullets": ["Local matching", "Subject specialists", "Flexible scheduling"],
        }],
        "faqs": [{"question": f"Do you cover {loc}?", "answer": "Yes, placeholder answer."}],
        "closingCta": f"Placeholder CTA for {loc}.",
        "localKeywords": [kw],
    }


def emit_section(s, indent):
    pad = " " * indent
    lines = [f"{pad}{{"]
    lines.append(f"{pad}  heading: {js(s.get('heading',''))},")
    lines.append(f"{pad}  paragraphs: {arr(s.get('paragraphs', []), indent + 2)},")
    if s.get("bullets"):
        lines.append(f"{pad}  bullets: {arr(s.get('bullets', []), indent + 2)},")
    lines.append(f"{pad}}}")
    return "\n".join(lines)


def emit_faq(f, indent):
    pad = " " * indent
    return (f"{pad}{{\n{pad}  question: {js(f.get('question',''))},\n"
            f"{pad}  answer: {js(f.get('answer',''))},\n{pad}}}")


def emit_file(page, content):
    slug = page["slug"]
    L = []
    L.append('import type { GurgaonSeoContent } from "../types";')
    L.append('')
    L.append('const content: GurgaonSeoContent = {')
    L.append(f'  slug: {js(slug)},')
    L.append(f'  heroIntro: {js(content.get("heroIntro",""))},')
    L.append(f'  trustPoints: {arr(content.get("trustPoints", []), 2)},')
    secs = ",\n".join(emit_section(s, 4) for s in content.get("sections", []))
    L.append('  sections: [\n' + secs + '\n  ],')
    faqs = ",\n".join(emit_faq(f, 4) for f in content.get("faqs", []))
    L.append('  faqs: [\n' + faqs + '\n  ],')
    L.append(f'  closingCta: {js(content.get("closingCta",""))},')
    L.append(f'  localKeywords: {arr(content.get("localKeywords", []), 2)},')
    L.append('};')
    L.append('')
    L.append('export default content;')
    L.append('')
    with open(f'{CONTENT_DIR}/{slug}.ts', 'w', encoding='utf-8') as fh:
        fh.write("\n".join(L))


def ident(slug):
    return "c_" + re.sub(r'[^a-zA-Z0-9]', '_', slug)


real = 0
short = []
for page in PAGES:
    slug = page["slug"]
    jpath = f'{JSON_DIR}/{slug}.json'
    if os.path.exists(jpath):
        try:
            content = json.load(open(jpath, encoding='utf-8'))
            content["slug"] = slug
            wc = word_count(content)
            if wc < 1800:
                short.append((slug, wc))
            real += 1
        except Exception as e:
            print("BAD JSON", slug, e)
            content = placeholder(page)
    else:
        content = placeholder(page)
    emit_file(page, content)

# index.ts registry
idx = ['import type { GurgaonSeoContent } from "../types";', '']
for page in PAGES:
    idx.append(f'import {ident(page["slug"])} from "./{page["slug"]}";')
idx.append('')
idx.append('export const gurgaonSeoContentBySlug: Record<string, GurgaonSeoContent> = {')
for page in PAGES:
    idx.append(f'  {js(page["slug"])}: {ident(page["slug"])},')
idx.append('};')
idx.append('')
with open(f'{CONTENT_DIR}/index.ts', 'w', encoding='utf-8') as fh:
    fh.write("\n".join(idx))

print(f"Generated {len(PAGES)} content modules ({real} from real JSON, {len(PAGES)-real} placeholder).")
if short:
    print(f"UNDER 1800 words: {len(short)} ->", short[:20])
