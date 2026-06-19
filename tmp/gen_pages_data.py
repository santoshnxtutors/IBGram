# -*- coding: utf-8 -*-
import json

data = json.load(open('./tmp/gur_urls.json', encoding='utf-8'))
rows = data[:400]  # all 400

# School ecosystems by belt (real Gurgaon international/IB-IGCSE schools, used only
# for academic-calendar context, never as affiliations).
SCH = {
    "gcr": ["Pathways World School Aravali", "The Shri Ram School Aravali", "Heritage Xperiential Learning School", "Lancers International School", "GD Goenka World School", "Scottish High International School"],
    "ext": ["GD Goenka World School", "DPS International Edge", "The Heritage School Sector 62", "Excelsior American School", "Pathways School Gurgaon", "Suncity School Sector 54"],
    "sohna": ["GD Goenka World School", "DPS International Edge", "Suncity School Sector 54", "The Heritage School Sector 62", "RPS International School", "Excelsior American School"],
    "nirvana": ["Suncity School Sector 54", "The Shri Ram School", "Excelsior American School", "DPS Sector 45", "Heritage Xperiential Learning School", "GD Goenka World School"],
    "mgroad": ["Lancers International School", "Scottish High International School", "DPS Sector 45", "Heritage Xperiential Learning School", "GD Goenka World School", "The Shri Ram School Aravali"],
}

# Per-locality resolved context. corridor, nearbyAreas, nearbySectors, nearbySocieties, school-belt
CTX = {
    # ---- Batch 1 (Golf Course Road / DLF premium belt) ----
    "Golf Course Road": ("Golf Course Road corridor (Sectors 42-54)", ["DLF Phase 5", "Sushant Lok 1", "Golf Course Extension Road"], ["Sector 42", "Sector 43", "Sector 53", "Sector 54"], ["The Aralias", "The Magnolias", "The Camellias", "DLF Park Place"], "gcr"),
    "DLF Phase 5": ("DLF Phase 5 on Golf Course Road", ["Golf Course Road", "DLF Phase 4", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53", "Sector 54"], ["DLF The Crest", "DLF Park Place", "DLF The Belaire", "DLF The Pinnacle"], "gcr"),
    "DLF Phase 1": ("DLF Phase 1, central DLF city", ["DLF Phase 2", "MG Road", "Golf Course Road"], ["Sector 26", "Sector 27", "Sector 28", "Sector 42"], ["DLF Beverly Park", "DLF Exclusive Floors", "DLF Richmond Park"], "mgroad"),
    "DLF Phase 2": ("DLF Phase 2, MG Road / Cyber City side", ["DLF Phase 1", "DLF Phase 3", "MG Road"], ["Sector 24", "Sector 25", "Sector 28"], ["DLF Beverly Park", "Heritage City", "Ambience Caitriona"], "mgroad"),
    "Ambience Island": ("Ambience Island, NH-48 / DLF Phase 3 side", ["DLF Phase 3", "MG Road", "Sikanderpur"], ["Sector 24", "Sector 25", "Sector 28"], ["Ambience Caitriona", "Heritage City", "DLF Beverly Park"], "mgroad"),
    "DLF Camellias Sector 42": ("DLF The Camellias, Sector 42, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53"], ["The Aralias", "The Magnolias", "DLF Park Place"], "gcr"),
    "DLF Magnolias Sector 42": ("DLF The Magnolias, Sector 42, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53"], ["The Camellias", "The Aralias", "DLF Park Place"], "gcr"),
    "DLF Aralias Sector 42": ("DLF The Aralias, Sector 42, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53"], ["The Magnolias", "The Camellias", "DLF Park Place"], "gcr"),
    "DLF Icon Sector 43": ("DLF The Icon, Sector 43, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53"], ["The Aralias", "The Camellias", "DLF Park Place"], "gcr"),
    "DLF The Crest Sector 54": ("DLF The Crest, Sector 54, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 2"], ["Sector 53", "Sector 54", "Sector 42"], ["DLF Park Place", "DLF The Belaire", "DLF The Pinnacle"], "gcr"),
    "DLF Park Place Sector 54": ("DLF Park Place, Sector 54, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 2"], ["Sector 53", "Sector 54", "Sector 42"], ["DLF The Crest", "DLF The Belaire", "DLF The Pinnacle"], "gcr"),
    "DLF The Belaire Sector 54": ("DLF The Belaire, Sector 54, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 2"], ["Sector 53", "Sector 54", "Sector 42"], ["DLF The Crest", "DLF Park Place", "DLF The Pinnacle"], "gcr"),
    "DLF Westend Heights Sector 53": ("DLF Westend Heights, Sector 53, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 2"], ["Sector 53", "Sector 54", "Sector 42"], ["DLF The Crest", "DLF Park Place", "DLF The Belaire"], "gcr"),
    "DLF Trinity Towers Sector 53": ("DLF Trinity Towers, Sector 53, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Sushant Lok 2"], ["Sector 53", "Sector 54", "Sector 42"], ["DLF The Crest", "DLF Westend Heights", "DLF Park Place"], "gcr"),
    # ---- Batch 2 (Extension Road / Sohna / Nirvana / MG belts) ----
    "DLF Carlton Estate DLF Phase 5": ("DLF Carlton Estate, DLF Phase 5, Golf Course Road", ["Golf Course Road", "DLF Phase 4", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53", "Sector 54"], ["DLF The Crest", "DLF Park Place", "DLF The Belaire"], "gcr"),
    "DLF Phase 4": ("DLF Phase 4, central DLF and Galleria side", ["DLF Phase 5", "Sushant Lok 1", "MG Road"], ["Sector 27", "Sector 28", "Sector 43"], ["DLF Hamilton Court", "DLF Regency Park", "DLF Carlton Estate"], "gcr"),
    "Sushant Lok 1": ("Sushant Lok 1, central school-access pocket", ["DLF Phase 4", "Golf Course Road", "South City 1"], ["Sector 27", "Sector 28", "Sector 43", "Sector 44"], ["DLF Hamilton Court", "South City 1", "DLF Park Place"], "gcr"),
    "Heritage City MG Road": ("Heritage City, MG Road / DLF Phase 2 side", ["MG Road", "DLF Phase 2", "DLF Phase 1"], ["Sector 25", "Sector 26", "Sector 28"], ["DLF Beverly Park", "Ambience Caitriona", "DLF Richmond Park"], "mgroad"),
    "Emaar The Palm Springs Sector 54": ("Emaar Palm Springs, Sector 54, Golf Course Road", ["Golf Course Road", "DLF Phase 5", "Golf Course Extension Road"], ["Sector 53", "Sector 54", "Sector 42"], ["DLF Park Place", "DLF The Belaire", "M3M Golf Estate"], "gcr"),
    "Emaar Palm Drive Sector 66": ("Emaar Palm Drive, Sector 66, Golf Course Extension Road", ["Golf Course Extension Road", "Sohna Road", "Sushant Lok 3"], ["Sector 65", "Sector 66", "Sector 67"], ["Emaar Palm Springs", "M3M Golf Estate", "Central Park Resorts"], "ext"),
    "Ireo Grand Arch Sector 58": ("Ireo Grand Arch, Sector 58, Golf Course Extension Road", ["Golf Course Extension Road", "Sushant Lok 3", "Sohna Road"], ["Sector 58", "Sector 59", "Sector 60"], ["Ireo Skyon", "M3M Merlin", "Emaar DigiHomes"], "ext"),
    "M3M Golf Estate Sector 65": ("M3M Golf Estate, Sector 65, Golf Course Extension Road", ["Golf Course Extension Road", "Sohna Road", "Sushant Lok 3"], ["Sector 65", "Sector 66", "Sector 67"], ["M3M Merlin", "Emaar Palm Springs", "Ireo Grand Arch"], "ext"),
    "Mahindra Luminare Sector 59": ("Mahindra Luminare, Sector 59, Golf Course Extension Road", ["Golf Course Extension Road", "Sushant Lok 3", "Sohna Road"], ["Sector 58", "Sector 59", "Sector 60"], ["Ireo Grand Arch", "Tata Raisina Residency", "M3M Merlin"], "ext"),
    "Pioneer Park Sector 61": ("Pioneer Park, Sector 61, Golf Course Extension Road", ["Golf Course Extension Road", "Sohna Road", "Sushant Lok 3"], ["Sector 61", "Sector 62", "Sector 63"], ["Ireo Grand Arch", "M3M Merlin", "Emaar DigiHomes"], "ext"),
    "Tata Raisina Residency Sector 59": ("Tata Raisina Residency, Sector 59, Golf Course Extension Road", ["Golf Course Extension Road", "Sushant Lok 3", "Sohna Road"], ["Sector 58", "Sector 59", "Sector 60"], ["Mahindra Luminare", "Ireo Grand Arch", "M3M Merlin"], "ext"),
    "Bestech Park View Spa Sector 47": ("Bestech Park View Spa, Sector 47, Sohna Road", ["Sohna Road", "South City 2", "Nirvana Country"], ["Sector 47", "Sector 48", "Sector 49", "Sector 50"], ["Central Park Resorts", "Vatika City", "Orchid Petals"], "sohna"),
    "Central Park Resorts Sector 48": ("Central Park Resorts, Sector 48, Sohna Road", ["Sohna Road", "Golf Course Extension Road", "South City 2"], ["Sector 47", "Sector 48", "Sector 49", "Sector 66"], ["Tata Primanti", "Vatika City", "Bestech Park View Spa"], "sohna"),
    "Vatika City Sector 49": ("Vatika City, Sector 49, Sohna Road", ["Sohna Road", "South City 2", "Nirvana Country"], ["Sector 47", "Sector 48", "Sector 49", "Sector 50"], ["Central Park Resorts", "Bestech Park View Spa", "Orchid Petals"], "sohna"),
    "Nirvana Country Sector 50": ("Nirvana Country, Sector 50, South City 2 side", ["Nirvana Country", "South City 2", "Sohna Road"], ["Sector 49", "Sector 50", "Sector 51"], ["The Hibiscus", "Unitech Fresco", "South Close"], "nirvana"),
    "The Hibiscus Sector 50": ("The Hibiscus, Sector 50, Nirvana Country", ["Nirvana Country", "South City 2", "Sohna Road"], ["Sector 49", "Sector 50", "Sector 51"], ["Nirvana Country", "Unitech Fresco", "South Close"], "nirvana"),
}


def ctx_for(loc):
    corridor, areas, sectors, socs, belt = CTX[loc]
    return {"corridor": corridor, "nearbyAreas": areas, "nearbySectors": sectors, "nearbySocieties": socs, "schools": SCH[belt]}


def slug_of(row):
    return row['URL Slug'].strip('/').strip()


def js(s):
    return json.dumps(s if s is not None else "", ensure_ascii=False)


def arr(items):
    return "[" + ", ".join(js(i) for i in items) + "]"


# sanity: every locality has context
missing = sorted(set(r['Locality / Premium Society'] for r in rows) - set(CTX))
if missing:
    raise SystemExit("MISSING CONTEXT for: " + repr(missing))

out = []
out.append('// AUTO-GENERATED from ibgram_gurgaon_all_400_seo_urls workbook (all 400 rows).')
out.append('// SEO metadata + resolved locality context. Do not edit by hand; regenerate from the workbook.')
out.append('import type { GurgaonSeoPageMeta } from "./types";')
out.append('')
out.append('export const gurgaonSeoPagesMeta: GurgaonSeoPageMeta[] = [')
for row in rows:
    slug = slug_of(row); loc = row['Locality / Premium Society']; c = ctx_for(loc)
    out += ['  {',
            f'    id: {int(row["ID"])},',
            f'    slug: {js(slug)},',
            f'    path: {js("/" + slug + "/")},',
            f'    primaryKeyword: {js(row["Primary Keyword"])},',
            f'    searchIntent: {js(row["Search Intent"])},',
            f'    pageType: {js(row["Page Type"])} as GurgaonSeoPageMeta["pageType"],',
            f'    locality: {js(loc)},',
            f'    sector: {js(row["Sector / Corridor"])},',
            f'    board: {js(row["Board / Programme"])} as GurgaonSeoPageMeta["board"],',
            f'    subject: {js(row["Subject"])},',
            f'    level: {js(row["Class / Level"])},',
            f'    h1: {js(row["Suggested H1"])},',
            f'    title: {js(row["SEO Title Tag"])},',
            f'    metaDescription: {js(row["Meta Description"])},',
            f'    priority: {js(row["Priority"])},',
            f'    parentPage: {js(row["Parent Page"])},',
            f'    uniqueAngle: {js(row["Content Unique Angle"])},',
            '    localContext: {',
            f'      corridor: {js(c["corridor"])},',
            f'      nearbyAreas: {arr(c["nearbyAreas"])},',
            f'      nearbySectors: {arr(c["nearbySectors"])},',
            f'      nearbySocieties: {arr(c["nearbySocieties"])},',
            f'      schools: {arr(c["schools"])},',
            '    },',
            '  },']
out.append('];')
out.append('')
with open('src/lib/gurgaon-seo/pages-data.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(out))

# compact per-page json (all 400) + per-slug spec files
import os
os.makedirs('./tmp/gurgaon-content/spec', exist_ok=True)
compact = []
for row in rows:
    slug = slug_of(row); loc = row['Locality / Premium Society']; c = ctx_for(loc)
    rec = {"id": int(row["ID"]), "slug": slug, "primaryKeyword": row["Primary Keyword"], "searchIntent": row["Search Intent"],
           "pageType": row["Page Type"], "locality": loc, "sector": row["Sector / Corridor"], "board": row["Board / Programme"],
           "subject": row["Subject"], "level": row["Class / Level"], "h1": row["Suggested H1"], "title": row["SEO Title Tag"],
           "metaDescription": row["Meta Description"], "uniqueAngle": row["Content Unique Angle"], "parentPage": row["Parent Page"], "context": c}
    compact.append(rec)
    json.dump(rec, open(f'./tmp/gurgaon-content/spec/{slug}.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump(compact, open('./tmp/gurgaon-content/_pages.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# batch-2 slug list (rows 201-400)
b2 = [slug_of(r) for r in rows[200:400]]
json.dump(b2, open('./tmp/gurgaon-content/_slugs_batch2.json', 'w', encoding='utf-8'), ensure_ascii=False)
# full 400 slug list
json.dump([slug_of(r) for r in rows], open('./tmp/gurgaon-content/_slugs.json', 'w', encoding='utf-8'), ensure_ascii=False)

print("WROTE pages-data.ts with", len(rows), "pages;", len(b2), "in batch 2")
