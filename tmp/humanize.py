# -*- coding: utf-8 -*-
"""Light humanization pass over the 200 content JSON files.

Goal: kill the strongest "AI-written" tell (em-dash overuse, ~35/page) without
mangling grammar. Numeric ranges become "to"; most em/en dashes become commas,
but ~1 in 5 is kept so prose still varies naturally. Cleans doubled punctuation.
Operates in place on string fields.
"""
import json, glob, os, re

EM = "—"  # —
EN = "–"  # –

import sys
_listfile = sys.argv[1] if len(sys.argv) > 1 else 'tmp/gurgaon-content/_slugs.json'
slugs = json.load(open(_listfile, encoding='utf-8'))

# running counter so "keep 1 in 5" is global across a page's strings
state = {"n": 0}


def fix_text(t):
    if not isinstance(t, str) or (EM not in t and EN not in t):
        return t
    # 1) numeric ranges: "42 — 54" -> "42 to 54"
    t = re.sub(r'(\d)\s*[' + EM + EN + r']\s*(\d)', r'\1 to \2', t)

    # 2) remaining dashes -> comma, but keep every 5th
    def repl(m):
        state["n"] += 1
        if state["n"] % 5 == 0:
            return m.group(0)  # keep this one
        return ", "
    t = re.sub(r'\s*[' + EM + EN + r']\s*', repl, t)

    # 3) cleanup doubled / misplaced punctuation
    t = re.sub(r',\s*,', ',', t)
    t = re.sub(r'\s+,', ',', t)
    t = re.sub(r',\s*\.', '.', t)
    t = re.sub(r'\(\s*,\s*', '(', t)
    t = re.sub(r',\s*\)', ')', t)
    t = re.sub(r'\s{2,}', ' ', t)
    t = re.sub(r',\s*$', '', t).strip()
    return t


def walk(obj):
    if isinstance(obj, str):
        return fix_text(obj)
    if isinstance(obj, list):
        return [walk(x) for x in obj]
    if isinstance(obj, dict):
        return {k: walk(v) for k, v in obj.items()}
    return obj


before = after = 0
for s in slugs:
    p = f'tmp/gurgaon-content/{s}.json'
    c = json.load(open(p, encoding='utf-8'))
    raw = json.dumps(c, ensure_ascii=False)
    before += raw.count(EM) + raw.count(EN)
    state["n"] = 0
    c = walk(c)
    raw2 = json.dumps(c, ensure_ascii=False)
    after += raw2.count(EM) + raw2.count(EN)
    json.dump(c, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

print(f"em/en dashes across 200 pages: {before} -> {after} (avg {after/200:.1f}/page)")
