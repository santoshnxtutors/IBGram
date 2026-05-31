# IBGram — Long-Form SEO Rewrite Plan

**Repo:** santoshnxtutors/IBGram
**Branch:** `codex-publish-project`
**Date:** 2026-05-30
**Reads from:** [IBGRAM_LONGFORM_SEO_PAGE_INVENTORY.md](IBGRAM_LONGFORM_SEO_PAGE_INVENTORY.md)
**Purpose:** A concrete, executable plan to rewrite every eligible public page into 1,800+ word, schema-rich, locally-keyworded long-form content **stored in the CMS / DB** (not in TSX files). No content is rewritten in this doc — this is the planning artefact that Part 2 builds against.

---

## 1. Protected pages — locked

Per the inventory, do not edit copy on these:

- `/` — Homepage
- `/ib-tutors/` — IB hub (treated as the "main IB page")
- `/tutors/` — Main tutors directory
- `/admissions/`
- `/admissions/test-prep/`

Tiny technical fixes (broken imports, accessibility roles, responsive overflow) are permitted; copy edits are not.

If the user clarifies that `/programmes/dp/` or `/programmes/` should be the "main IB page" instead of `/ib-tutors/`, swap that route into the protected set and out of P0.

---

## 2. Eligible pages by priority (rewrite order)

### Wave 1 · P0 — Money pages
| # | Route | Why P0 |
|---|---|---|
| 1 | `/courses/[curriculum]/[subject]/` template + ~38 per-subject `GeneratedPage` rows | One template, many high-intent URLs (`/courses/ib/math-aa-hl/`, `/courses/igcse/physics/`, …). Currently ~650 words each. |
| 2 | `/programmes/` | Programme hub — currently thin, zero FAQs, no metadata |
| 3 | `/programmes/pyp/` | Same |
| 4 | `/programmes/myp/` | Same |
| 5 | `/programmes/dp/` | Highest commercial intent IB programme page |
| 6 | `/programmes/cp/` | Lowest volume but completes the set |
| 7 | `/ib-tutors/gurugram/` (DB content uplift) + Gurugram areas + schools + societies | Largest local-SEO opportunity. Build out the user's priority list: Golf Course Road, DLF Phases 1–5, DLF Cyber City, Golf Course Extension Road, Sushant Lok, Sectors 49/50/56/57, Sohna Road, Nirvana Country, South City, MG Road, Galleria, Ardee City |
| 8 | `/igcse-tutors/gurugram/` + Gurugram areas + schools + subjects | Mirror of #7 for IGCSE |

### Wave 2 · P1 — Important SEO pages
9. `/igcse/` (hub deepening to 1,800+ words)
10. `/igcse-pages/` (hub deepening)
11. `/igcse-pages/[citySlug]/` for Delhi and Noida
12. `/igcse-tutors/[citySlug]/` for Delhi and Noida
13. `/ib-tutors/delhi/` + areas + schools (South Delhi, Vasant Vihar, Chanakyapuri, Saket, Greater Kailash, Defence Colony, Hauz Khas, Dwarka, Rohini)
14. `/ib-tutors/noida/` + areas + schools (Sectors 44, 50, 62, 128, Noida Expressway, Jaypee Greens Wish Town)
15. `/ib-tutors/[citySlug]/[pageSlug]/` per-subject rows for Gurugram, Delhi, Noida
16. `/about-us/`
17. `/blog/` hub uplift + first 6 long-form blog posts in `BlogPost`
18. `/tutor-profile/[id]/` SEO copy template (bio + methodology expanded from DB)
19. IGCSE renderer wire-up to db-first (renderer fix so the DB content from #10–#15 can flow through)

### Wave 3 · P2 — Supporting pages
20. IB areas / sectors / societies for non-Gurugram priority cities
21. IGCSE areas / sectors / societies for Gurugram first, then Delhi/Noida
22. `/jobs/`
23. `/admissions/success-stories/` (light expansion only; main scroll experience is protected)

### Wave 4 · P3 — Index hygiene + light SEO
24. `/contact-us/` (form page; add `LocalBusiness` schema only — no copy expansion)
25. `/subscription/` (conversion-focused; pricing FAQs only)
26. `/tutor-compare/`, `/login/`, `/signup/` → ensure `noindex` via admin `RobotsRule`

---

## 3. Page-type templates (the rewrite recipe)

Each page type uses a fixed `PageBlock` block order so renderers stay deterministic and tutors / staff can author new pages by filling the same slots.

### 3.1 Programme template (P0)
Used by: `/programmes/`, `/programmes/pyp/`, `/programmes/myp/`, `/programmes/dp/`, `/programmes/cp/`

```
PageBlock order:
1. intro                — 220–280 words. What the programme is, who it serves, why families search for it.
2. structure            — 280–360 words. Curriculum components, assessment outline, IB language.
3. subjects_grid        — items[] = [{ subject, blurb, link }] for each subject in the programme.
4. assessment           — 220–280 words. Internal/external balance, IA / EE / TOK where relevant.
5. tutoring_approach    — 260–320 words. How IBGram matches tutors for this programme.
6. learning_modes       — 200–260 words. Home / online / hybrid — when each is recommended.
7. parent_pain_points   — 200–260 words. Common worries + how tutoring addresses them.
8. local_context        — 200–280 words. Which cities/areas have strong availability.
9. internal_links       — items[] = ≥ 6 links (sibling programmes, top city pages, subject pages).
10. cta                 — items = { primaryLabel, primaryHref, secondaryLabel?, secondaryHref? }

PageFaq: ≥ 8 questions.
Total target: 1,800–2,200 words.
```

### 3.2 Course (subject) template (P0)
Used by: every `/courses/[curriculum]/[subject]/` URL.

```
PageBlock order:
1. intro              — 200–260 words. What this subject is, paper structure, exam length.
2. syllabus           — 300–400 words. Topic breakdown by paper (Paper 1, 2, 3 as relevant).
3. ia_ee_coursework   — 240–320 words (IB DP only — IA scaffold or EE pathway).
4. tutor_approach     — 240–320 words. How a tutor handles this subject (command terms, marking).
5. study_plan         — 200–260 words. Suggested cadence for the academic year.
6. resources          — items[] = past papers, command-term sheets, IA exemplars.
7. who_we_match       — 200–260 words. Levels supported, school-aware approach.
8. internal_links     — items[] = sibling subjects (same curriculum) + same subject in other cities.
9. cta                — primary = "Find a {subject} tutor", secondary = WhatsApp.

PageFaq: ≥ 8 questions.
Total: 1,800–2,100 words.
```

### 3.3 City template (P0/P1)
Used by: `/ib-tutors/[citySlug]/`, `/igcse-tutors/[citySlug]/`, `/igcse-pages/[citySlug]/`

```
PageBlock order:
1. intro                  — 240–320 words. City context, IB/IGCSE landscape locally.
2. programmes_inventory   — items[] = programmes available; per-programme blurb.
3. subjects_inventory     — items[] = subjects with strong / moderate inventory in this city.
4. areas_grid             — items[] = enabled areas with one-line each + link.
5. schools_ecosystem      — items[] = schools, with the school disclaimer block at end.
6. tutoring_modes         — 220–280 words. Home / online / hybrid recommendations for this city.
7. matching_process       — 220–280 words. How matching works locally.
8. local_logistics        — 220–280 words. Commute realities, traffic windows, online when not local.
9. internal_links         — items[] = sibling cities + national hub + main programme pages.
10. cta                   — primary = "Find a tutor in {City}", secondary = WhatsApp.

PageFaq: ≥ 8 questions; first 3 must use "Gurgaon" naturally for Gurugram pages.
Total: 1,800–2,400 words.
```

### 3.4 Area template (P1)
Used by: `/ib-tutors/[citySlug]/areas/[areaSlug]/`, `/igcse-tutors/[citySlug]/areas/[areaSlug]/`

```
PageBlock order:
1. intro              — 200–260 words. Where this area is, landmarks, nearby schools.
2. demand_signals     — 200–260 words. Subjects most requested in this area.
3. tutor_availability — items[] = subject × mode availability matrix.
4. schools_nearby     — items[] (with disclaimer block).
5. commute_notes      — 200–260 words. Travel windows, peak-hours, online recommendation when local match isn't realistic.
6. internal_links     — items[] = sibling areas + parent city + national hub.
7. cta                — local-specific CTA.

PageFaq: ≥ 8 questions.
Total: 1,800–2,000 words.
```

### 3.5 Sector / Society template (P2)
Same as area, slightly shorter (1,800 words still required; lean on commute notes and society-specific schools).

### 3.6 School ecosystem template (P1)
Used by: `/ib-tutors/[citySlug]/schools/[schoolSlug]/`, `/igcse-tutors/[citySlug]/schools/[schoolSlug]/`

```
PageBlock order:
1. intro                  — 200–260 words. Where this school sits, curriculum offered.
2. programme_at_school    — 240–320 words. Programmes the school runs (PYP / MYP / DP / IGCSE).
3. tutoring_approach      — 240–320 words. How school-aware tutoring works (assignments, term plan).
4. assessment_calendar    — 200–260 words. Generic IB / IGCSE assessment cadence.
5. local_context          — 200–260 words. Area around the school.
6. internal_links         — items[] = parent area + city + sibling schools.
7. disclaimer             — **always render** "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated."
8. cta                    — school-specific.

PageFaq: ≥ 8.
Total: 1,800–2,000 words.
```

### 3.7 Blog post template (P1)
Stored in `BlogPost`, not `GeneratedPage`. Body field accepts long-form text with embedded headings.

```
1. Title (= H1)
2. Excerpt (160–180 chars)
3. Body — 1,800+ words, 5–7 H2 sections, 8+ inline questions if appropriate
4. metaTitle / metaDescription / metaKeywords[] / featuredImageId / ogImageAssetId
5. schemaJson — Article + BreadcrumbList
6. Category + tags
```

---

## 4. Local keyword map

### 4.1 Gurugram (canonical: gurugram · alias-in-copy: Gurgaon)

| Tier | Keywords |
|---|---|
| Head | IB tutor Gurugram · IGCSE tutor Gurugram · IB home tutor Gurugram · IB online tutor Gurugram · IB tuition Gurgaon |
| Programme | IB DP tutor Gurugram · IB MYP tutor Gurugram · IB PYP tutor Gurugram · IB CP tutor Gurugram |
| Subject (head) | IB Math AA tutor Gurugram · IB Math AI tutor Gurugram · IB Physics tutor Gurugram · IB Chemistry tutor Gurugram · IB Biology tutor Gurugram · IB Economics tutor Gurugram · IB English tutor Gurugram · IB Business Management tutor Gurugram · IB Computer Science tutor Gurugram |
| Subject (mid-tail) | Math AA HL tutor Gurugram · Math AI SL tutor Gurugram · Physics HL tutor Gurugram · IGCSE Math tutor Gurugram · IGCSE Physics tutor Gurugram · Cambridge IGCSE tutor Gurgaon · Edexcel IGCSE tutor Gurgaon |
| Area | IB tutor Golf Course Road · IB tutor DLF Phase 5 · IB tutor DLF Phase 4 · IB tutor DLF Phase 3 · IB tutor DLF Phase 2 · IB tutor DLF Phase 1 · IB tutor DLF Cyber City · IB tutor Golf Course Extension Road · IB tutor Sushant Lok · IB tutor Sector 57 · IB tutor Sector 56 · IB tutor Sector 49 · IB tutor Sector 50 · IB tutor Sohna Road · IB tutor Nirvana Country · IB tutor South City · IB tutor MG Road · IB tutor Galleria · IB tutor Ardee City |
| School | IB tutor near Pathways World School · IB tutor near Lancers International · IB tutor near Scottish High International · IB tutor near GD Goenka World School |
| Mode | IB home tutor Gurugram · IB online tutor Gurgaon · IB hybrid tutor Gurugram |

### 4.2 Delhi

| Tier | Keywords |
|---|---|
| Head | IB tutor Delhi · IGCSE tutor Delhi · IB home tutor Delhi · IB online tutor Delhi |
| Area | IB tutor South Delhi · IB tutor Vasant Vihar · IB tutor Chanakyapuri · IB tutor Saket · IB tutor Greater Kailash · IB tutor Defence Colony · IB tutor Hauz Khas · IB tutor Dwarka · IB tutor Rohini |
| School | IB tutor near British School New Delhi · IB tutor near American Embassy School · IB tutor near DPS International Saket |

### 4.3 Noida

| Tier | Keywords |
|---|---|
| Head | IB tutor Noida · IGCSE tutor Noida · IB home tutor Noida · IB online tutor Noida |
| Area | IB tutor Sector 44 · IB tutor Sector 50 · IB tutor Sector 62 · IB tutor Sector 128 · IB tutor Noida Expressway · IB tutor Jaypee Greens Wish Town |
| School | IB tutor near Pathways School Noida · IB tutor near Genesis Global School |

### 4.4 Programme keyword map

| Programme | Head | Long-tail examples |
|---|---|---|
| PYP | IB PYP tutor · IB PYP transdisciplinary themes · IB PYP exhibition support | IB PYP early years tutor · IB PYP grade 5 exhibition tutor |
| MYP | IB MYP tutor · IB MYP personal project tutor · IB MYP eAssessment preparation | IB MYP mathematics tutor · IB MYP language and literature tutor |
| DP | IB DP tutor · IB DP TOK essay help · IB DP extended essay supervisor · IB DP IA help | IB DP Math AA HL IA tutor · IB DP Physics IA tutor · IB DP Economics IA tutor |
| CP | IB CP tutor · IB CP reflective project tutor · IB CP personal and professional skills support | IB CP service learning tutor · IB CP language development tutor |

### 4.5 Course / subject keyword map (sample — full set in Part 2 seed)

| Subject | Head | Long-tail |
|---|---|---|
| Math AA HL | Math AA HL tutor · IB Math Analysis and Approaches HL tutor | Math AA HL Paper 3 tutor · Math AA HL IA tutor · Math AA HL command terms |
| Math AI SL/HL | Math AI tutor · IB Math Applications and Interpretation tutor | Math AI HL exploration tutor · Math AI SL revision tutor |
| Physics | IB Physics tutor · IB Physics HL tutor | IB Physics IA tutor · IB Physics Paper 2 long answer tutor |
| Chemistry | IB Chemistry tutor · IB Chemistry HL tutor | IB Chemistry IA tutor · IB organic chemistry tutor |
| Biology | IB Biology tutor · IB Biology HL tutor | IB Biology IA tutor · IB Biology data-based questions |
| Economics | IB Economics tutor · IB Economics HL tutor | IB Economics IA commentary tutor · IB Economics paper 1 essay tutor |
| English A | IB English A Lang & Lit tutor · IB English A Literature tutor | IB English IO tutor · IB English HL essay tutor |
| Business Management | IB Business Management tutor | IB BM IA tutor · IB BM HL paper 3 tutor |
| Computer Science | IB Computer Science tutor | IB CS IA tutor · IB CS option D tutor |

---

## 5. FAQ strategy

- **Minimum 8 FAQs per page** stored in `PageFaq` (page-specific) or `FaqItem` (global).
- **Mix:** 3 informational (what is X) · 2 logistical (home vs online · how matching works) · 2 trust (verification · disclaimer) · 1 cost-related (indicative, no fixed numbers).
- **No fixed numerical claims** ("guaranteed 7", "1000+ tutors") unless the admin has stored that number with evidence.
- For Gurugram FAQs, at least 2 must use "Gurgaon" naturally so the page picks up the alias query without needing a separate URL.
- Every FAQ surfaces in the `PageSchema` row of type `FAQPage`.

---

## 6. Schema strategy

For every eligible page, emit at minimum:

| Schema | Page types | Source |
|---|---|---|
| `BreadcrumbList` | all | derived from `parentPageId` chain + `fullPath` |
| `FAQPage` | all | derived from `PageFaq[]` |
| `Organization` | all | rendered once at root via root layout; `sameAs` from `SiteSetting` |
| `LocalBusiness` | every city / area / sector / society / school page | populated from `City` + `Area` + `Society` records + contact info |
| `Service` | programme + subject pages | `serviceType`, `provider`, `areaServed` (city list) |
| `EducationalOccupationalProgram` | programme pages (PYP/MYP/DP/CP) | `programType`, `educationalLevel`, `provider` |
| `Person` | tutor-profile pages | already partially in `/tutors/`; expand for `/tutor-profile/[id]/` |
| `Article` | blog posts | from `BlogPost` |

Implementation: all schemas live in `PageSchema` rows for `GeneratedPage`; for `BlogPost` use the existing `schemaJson` column.

---

## 7. Internal linking strategy

Goal: every long-form page exits to **≥ 4** other relevant pages so crawlers traverse the hierarchy without orphans.

### 7.1 Link graph rules

- **Programme page** → 3+ subject pages in that programme + 2 city pages.
- **Subject page** → parent programme + same subject in 2 other cities + 1 related subject.
- **City page** → parent national hub (`/ib-tutors/` or `/igcse/`) + 4 areas/schools + 3 top subjects.
- **Area page** → parent city + 2 sibling areas + 1 school within the area.
- **School page** → parent area + parent city + 2 sibling schools in the same city.

### 7.2 Where it's stored

`PageInternalLink` rows (already in schema). Each row: `sourcePageId`, `targetPageId` (or `targetUrl` for non-`GeneratedPage` targets), `anchorText`, `context`, `weight`. Anchor-text variation is provided via `AnchorTextVariant` so two siblings linking to the same target don't share identical anchors.

### 7.3 Where it renders

The `internal_links` `PageBlock` slot renders a labelled card-grid component (already exists as part of the IB city template). For Part 2, ensure the same renderer ships for IGCSE city / area / school / subject pages.

---

## 8. CMS / DB fields needed

### 8.1 Already present (no migration required)

Every field required by the rewrite spec is already on `GeneratedPage`, `PageBlock`, `PageFaq`, `PageMetadata`, `PageSchema`, `PageInternalLink`, `BlogPost` — see [inventory §5.1](IBGRAM_LONGFORM_SEO_PAGE_INVENTORY.md#51-long-form-content-surface-generatedpage--relations).

### 8.2 Optional enhancements (deferrable; NOT required to start Part 2)

| Enhancement | Why | Effort |
|---|---|---|
| `GeneratedPage.primaryCtaLabel` + `.primaryCtaHref` | Convenience over storing CTA in `PageBlock.items` | Trivial additive migration |
| `GeneratedPage.bodyJson` (Json) | Plate / TipTap rich-block editor | Medium; pairs with WYSIWYG admin |
| `PageBlock.blockType` enum | Replace untyped string with `BlockType` enum | Minor migration + admin form refactor |
| `Faq` global library reuse on pages via join table | Avoid copy-pasting FAQs across cities | New `PageFaqLink` join model |
| `RedirectRule.regexPattern` | Pattern-based redirects (e.g. all `*/gurgaon/*` → `/gurugram/*`) | Minor migration + middleware update |

**Decision: Part 2 starts on the current schema.** No schema changes are made in this planning step.

### 8.3 Code surface changes that ARE required for Part 2

These are renderer/API patches, not schema migrations:

1. **IGCSE family → db-first**: wire `getDbGeneratedSeoPageByPath` into the four IGCSE renderer files so authored DB content takes precedence over `static-seed`. Mirror of the IB family.
2. **BlogPost CRUD**: add `/admin/api/blog/[id]/route.ts` with PATCH + DELETE.
3. **Tutor profile SEO copy**: extend `/tutor-profile/[id]/page.tsx` to read an optional long-form bio + methodology blob from `TutorProfile.metadata` (already JSON) so per-tutor SEO copy is editable.
4. **`noindex` for `/login/`, `/signup/`, `/tutor-compare/`**: add `RobotsRule` rows OR per-page `metadata.robots` exports.
5. **Programme/course renderers**: convert to read `GeneratedPage` by `fullPath` (currently hardcoded JSX). The "renderer ready" `GeneratedPageRenderer` component used by IB city pages is the model.

---

## 9. Responsive component changes

Long-form pages are typically 2–3x the current page length. Three components must be verified or upgraded before Part 2 ships:

| Component | Risk | Fix in Part 2 |
|---|---|---|
| `ProgrammeSection` | Fixed card widths overflow on 360px | Convert to `grid-cols-1 sm:grid-cols-2` with `min-w-0` |
| FAQ accordion | Mixed implementations across pages | Standardise on `<details>` semantic accordion or a single shadcn `Accordion` wrapper; verify keyboard + screen-reader; mobile-tested |
| Internal-link grid | Long city/area lists | Wrap in `grid-cols-2 md:grid-cols-3 xl:grid-cols-4` + `min-w-0 truncate` per cell |
| Long quotes / blockquotes inside body | Mobile word-wrap | Use `max-w-prose` wrapper inside `PageBlock` body renderer |
| Sticky CTA (if added) | Blocks content on iOS Safari | Use `position: sticky` with `bottom: 4` + `lg:hidden` to hide on desktop |

Acceptance: **no horizontal overflow** at 360 / 390 / 768 / 1024 widths on any rewritten page. Verify via Playwright with viewport sizes set or DevTools.

---

## 10. Sitemap + indexing strategy

The existing 3-phase sitemap merger already supports rewriting workflow:

1. Code-derived entries (static + module-driven)
2. Published `GeneratedPage` rows (sitemap-included → present)
3. Admin `SitemapEntry` overrides (toggle + per-URL `changefreq` / `priority`)

Part 2 actions:

- Every rewritten `GeneratedPage` must have `status='published'` AND `sitemapIncluded=true`.
- For Gurgaon alias paths kept as redirects (not destinations): leave them OUT of the sitemap (default).
- For `noindex` pages: ensure `indexFlag='noindex'` AND remove from sitemap.
- After each wave, manually invalidate cache: hit `/sitemap.xml` so `revalidate=3600` propagates.

`/robots.txt` is already DB-driven. To add `noindex` for `/login/`, `/signup/`, `/tutor-compare/`, prefer the per-page `robots` metadata export (cleaner than disallow-from-robots).

---

## 11. Tone & content quality rules (binding for Part 2)

Every rewritten page must follow these rules. Each rule maps to a reviewer checklist item.

1. **Human, grammar-perfect tone.** Conversational where appropriate, never robotic. No em-dash overuse (use varied punctuation).
2. **No AI tells.** Avoid "In conclusion", "Delve into", "It's important to note", "Whether you're…", "Unlock", "Unleash", "Embark on".
3. **No fake claims.** No invented success rates, no "1000+ tutors", no "guaranteed 7", no fake awards, no fake school partnerships.
4. **Cautious phrasing for tutoring outcomes.** Use the brief's vocabulary: "families often look for…", "students may need…", "support can include…", "subject to tutor availability", "where home tutoring is practical", "online support may be recommended".
5. **School disclaimer.** Every page that names a school renders: *"IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated."*
6. **Gurgaon ↔ Gurugram.** Canonical URL = `/gurugram/`. "Gurgaon" used naturally in body, FAQs, meta keywords. **No duplicate Gurgaon URLs indexed.**
7. **No keyword stuffing.** Primary keyword 4–8 times per 1,800 words; secondary keywords once or twice each.
8. **No duplicate blocks reused blindly across cities.** Each city/area gets unique landmark/school/sector context.
9. **Specific local detail.** Mention real area names, real landmarks, real schools (and use the disclaimer). Avoid generic filler ("the great city of…").
10. **Internal-link variety.** Vary anchor text via `AnchorTextVariant`; don't link every Gurugram page with the same anchor "IB tutor Gurugram".
11. **Image alt text.** When `ogImageAssetId` is used, the asset's `altText` must describe the city/programme/subject — not generic ("photo").
12. **Mobile word-wrap.** Long sentences must wrap cleanly at 360px; break long URLs/keywords with `word-break: break-word` where needed.

---

## 12. Authoring workflow (per page, Part 2 will execute)

```
1. Editor opens /admin/pages/new (or /admin/pages/[id]/edit for existing GeneratedPage).
2. Pick pageType (city / area / school / sector / society / subject / programme) and curriculum.
3. Fill SEO fields: primaryKeyword, secondaryKeywords[], metaTitle, metaDescription, h1, heroTitle, heroSubtitle, introSummary, ogTitle, ogDescription, canonicalUrl, robotsTag, ogImageAssetId.
4. Add PageBlocks in order per the template (§3) — each block has heading + body + optional items JSON.
5. Add PageFaqs (≥ 8).
6. Add PageSchemas (BreadcrumbList + FAQPage + page-type primary schema).
7. Add PageInternalLinks (≥ 4 outbound).
8. Submit for review → reviewer checks against §11 + §13 acceptance checklist.
9. Approve & publish — sitemap, cache, internal-link graph all update.
```

Bulk authoring for many cities/areas: use the existing seed-script pattern in [seed-gurgaon-money-pages.ts](../database/prisma/seed-gurgaon-money-pages.ts) as the executable template; replicate per Wave 1/2/3 batch.

---

## 13. Acceptance checklist (per page — copy this into PR / review)

- [ ] `contentWordCount ≥ 1,800`
- [ ] `PageFaq` count ≥ 8
- [ ] `PageSchema` includes `BreadcrumbList` + `FAQPage` + primary type
- [ ] `PageInternalLink` count ≥ 4 outbound
- [ ] `primaryKeyword` set; `secondaryKeywords[]` ≥ 6
- [ ] `metaTitle` ≤ 60 chars; `metaDescription` ≤ 160 chars
- [ ] `canonicalUrl` populated and matches `fullPath`
- [ ] `robotsTag` set ("index, follow" for normal pages; "noindex, follow" for utility)
- [ ] `ogTitle`, `ogDescription`, `ogImageAssetId` populated
- [ ] School disclaimer rendered if any school is named
- [ ] No fake claims; tone follows §11
- [ ] Gurgaon alias used naturally; canonical URL uses `gurugram`
- [ ] Mobile render verified at 360 / 390 / 768 / 1024 (no horizontal overflow)
- [ ] `status='published'`, `sitemapIncluded=true` (or both false if intentionally hidden)
- [ ] Sitemap and `/robots.txt` reflect new state
- [ ] `PageQualityScore` recorded; `duplicateRisk` not `high`

---

## 14. Sequencing summary (one-page recap)

| Wave | Scope | Output |
|---|---|---|
| **0 — Plan** *(this doc)* | Inventory + plan | 2 docs in `/docs/` |
| **1 — P0** | Programmes (5) · `/courses/` template + ~38 subject rows · Gurugram IB/IGCSE city + areas + schools + societies | ~70 `GeneratedPage` rows; ~600+ FAQs; renderer wire-ups for `/programmes/*` and `/courses/[curriculum]/[subject]/` |
| **2 — P1** | IGCSE hub · IGCSE family db-first · Delhi + Noida cities · `/about-us/` · `/blog/` + 6 long-form posts · tutor-profile SEO copy | ~50 more pages |
| **3 — P2** | Areas / sectors / societies for non-Gurugram cities · `/jobs/` · `/admissions/success-stories/` minor | ~80 more pages |
| **4 — P3** | Index hygiene: `noindex` `/login/`, `/signup/`, `/tutor-compare/`; light `/contact-us/`, `/subscription/` | small |

---

## 15. Files this plan touches in Part 2 (preview, not now)

```
src/lib/cms/generated-page-adapter.ts          (no-op if shape stays)
src/lib/cms/generated-pages-db.ts              (no-op)
src/app/(marketing)/programmes/*/page.tsx      (convert to GeneratedPageRenderer)
src/app/(marketing)/courses/[curriculum]/[subject]/page.tsx (convert)
src/app/(marketing)/igcse-tutors/**/*.tsx      (add db-first fallback)
src/app/(marketing)/igcse-pages/**/*.tsx       (add db-first fallback)
src/app/(marketing)/about-us/page.tsx          (convert to GeneratedPageRenderer)
src/app/(marketing)/blog/page.tsx              (read from BlogPost)
src/app/admin/api/blog/[id]/route.ts           (NEW — PATCH/DELETE)
src/app/tutor-profile/[id]/page.tsx            (read long-form SEO copy from TutorProfile.metadata)
src/components/programmes/ProgrammeSection.tsx (responsive uplift)
database/prisma/seed-programmes-longform.ts    (NEW — Wave 1 seed)
database/prisma/seed-courses-longform.ts       (NEW — Wave 1 seed)
database/prisma/seed-gurugram-areas-longform.ts(NEW — Wave 1 seed)
database/prisma/seed-delhi-noida-longform.ts   (NEW — Wave 2 seed)
database/prisma/seed-blog-longform.ts          (NEW — Wave 2 seed)
```

---

**End of plan.** Part 2 will execute against this document wave-by-wave, page-by-page, with the acceptance checklist (§13) enforced as a precondition for publish.
