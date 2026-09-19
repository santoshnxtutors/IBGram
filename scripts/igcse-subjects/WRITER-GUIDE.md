# IGCSE subject hub page writer guide

You write one hand-authored page per IGCSE subject:
`src/lib/igcse-subjects/subjects/<slug>.ts`, exporting
`export const <camelCaseSlug>: IgcseSubjectContent = { ... }`.

Example: `english-as-a-second-language.ts` exports `englishAsASecondLanguage`.
`art-and-design.ts` exports `artAndDesign`. `physics.ts` exports `physics`.

The slug, display label, group and the real Cambridge syllabus codes for every
subject are in `src/lib/igcse-subjects/catalog.ts`. **Read your subject's catalog
entry first** — the codes there are the ones the site already publishes, and your
page must use those, not codes you remember.

The layout is shared and already built. You write words only: the renderer
produces the hero, tutor cards, schema graph, breadcrumbs, internal links,
metadata, the comparison table markup and the FAQ accordion.

## Reference, not template

`src/lib/igcse-subjects/subjects/mathematics.ts` is the quality and structure
bar. Read it once for shape, depth and tone.

**Never copy or reword its sentences.** The gate fails any page that shares more
than 8% of its 8-word phrases with any other subject page. This is the single
most important rule: 53 pages about one curriculum are trivially easy to write as
53 rewordings of each other, and that is exactly what gets them filtered out of
the index as doorway pages.

Uniqueness has to come from the subject itself — its own papers, its own
coursework or practical component, its own command words, its own reason
students lose marks, its own board routes, its own career and sixth-form
pathways. If a paragraph you wrote would read equally true with the subject name
swapped out, delete it and write the specific version.

## Hard facts about IB Gram (never contradict these)

- Tutors are based in India. **Outside India, tutoring is online only.** Home
  tutoring is offered **only in India**, and only where a tutor is currently
  available in that city. Never imply a branch, centre or campus.
- Online sessions run in the family's own time zone.
- Covers Cambridge IGCSE and Pearson Edexcel International GCSE (mention Oxford
  AQA only if the subject genuinely has a route there).
- Free trial lesson. A written note after every session. Tutor changed if the fit
  is wrong. Rates quoted in writing before booking. **No published prices** — say
  fees depend on tutor experience, tier, grade and frequency.
- Contact: `ibgram24@gmail.com` and `+91 7439 368 115` (WhatsApp). No other
  email or phone. No address.
- Independent platform, **not** affiliated with Cambridge International, Pearson
  Edexcel, Oxford AQA or the IB.
- Tutors coach. They never write, complete or co-author coursework, portfolios,
  assignments or assessed work. Say this plainly on subjects that have a
  coursework or portfolio component (Art & Design, Drama, Music, Design &
  Technology, ICT, Global Perspectives, English, Food & Nutrition, Enterprise).
- **Never** promise or imply a grade, a rank, "#1", "best", guaranteed results or
  admission.

## Accuracy

State only what you are confident is true. A wrong paper number is worse than no
paper number.

- Syllabus codes: use your catalog entry. You may name the code and the subject
  ("Cambridge IGCSE Physics 0625") freely.
- Paper structure: describe it only if you are sure. If you are not, write about
  the *kind* of assessment ("a written theory paper and an alternative-to-
  practical route") rather than inventing "Paper 4, 75 marks, 1h15".
- You may use WebSearch, at most ~4 searches per page, to confirm paper
  structure, coursework weighting, tier names or board routes.
- Where a detail varies by school or by year, say that it varies and tell the
  reader to confirm with their school or the board. That sentence is a feature,
  not a hedge.
- Do not invent statistics, pass rates, student numbers or testimonials.

## Structure the gate enforces

`IgcseSubjectContent` in `src/lib/igcse-subjects/types.ts` is the shape. Required:

- `metaTitle` — **≤ 65 characters**, must contain the subject's `shortLabel`
  from the catalog. Put the keyword first. Vary the pattern across subjects.
- `metaDescription` — **120-175 characters**, contains the subject, "IGCSE", and
  a concrete detail (a code, a component, a tier).
- `primaryKeyword` — `IGCSE <Subject> tutors`.
- `secondaryKeywords` — **12+**, mixing board names, syllabus codes, tiers,
  Indian cities, international cities, grade levels and intent modifiers
  (online, home, private, past papers, revision, one-to-one).
- `h1` — contains "IGCSE" and the subject.
- `heroTitle` and `heroSubtitle` — hero title contains the subject; the subtitle
  is one sentence naming the codes and the modes.
- `introSummary` — 90-130 words, opens on the reader's actual situation.
- `blocks` — **10+ sections**, each with a `heading`, a `body` of **150+ words**
  (aim 200-240) and **4+ `items`**.
- `comparison` — a real table: `heading`, `intro`, `columns`, `rows`. **4+ rows**,
  and every row's `cells` array must be the same length as `columns`.
- `faqs` — **14+**, each answer **55+ words** (aim 70-110) and opening with a
  direct answer in the first sentence.
- `finalCta` — 70-110 words, ends on the contact route.
- `lastUpdated` — exactly `"2026-09-18"`.
- **Total 4,000+ words.** The reference page is ~5,200. Aim 4,500-5,500.

### Block types

Seven types get a dedicated section in the renderer and must each appear
**exactly once** (a second one of the same type is silently dropped):

`matching_process`, `programmes`, `subjects`, `local_areas`, `schools`,
`verification`, `tutoring_modes`

Three types may repeat and render in document order: `intro`, `trust`, `cta`.

So a page is those 7, plus 3 or more from `intro` / `trust` / `cta`. What each
one should carry:

| type | what it covers on this page |
|---|---|
| `matching_process` | What a parent must tell us (code, tier, grade, trigger), the diagnostic first session, written notes, rates in writing, tutor change |
| `programmes` | Grade 9 / 10 / 11 — how the useful help changes at each stage for *this* subject |
| `subjects` | What sits inside this subject: the codes, tiers, components, options, and why naming the code matters |
| `local_areas` | Online worldwide + which Indian cities have home-tutor density + international cities where this subject is commonly taken |
| `schools` | Working with the school's scheme, its calendar, its coursework deadlines; the no-ghostwriting line |
| `verification` | What is checked before a tutor is matched, specific to this subject's skills |
| `tutoring_modes` | Online vs home vs hybrid, honestly, for *this* subject (a practical or performance subject has real constraints — say so) |
| `intro` (×2 or more) | Why families arrive; and one subject-specific deep dive: the component students underestimate, how marks are really lost, command words, the coursework timeline |
| `trust` | What a parent should be able to see by week four. No grade promises. |
| `cta` | How to start this week; what to put in the first message |

### Global reach + India strength

Every page must work for an Indian family and an international one. Concretely:

- Name real Indian clusters where IGCSE demand is genuinely dense: Gurugram
  (Golf Course Road, DLF Phases 1-5, Sushant Lok, Sectors 43/50/56), South and
  South-West Delhi (Vasant Vihar, Vasant Kunj, Saket), Noida (Sectors 44/50/62,
  the Expressway), Mumbai (Bandra, Juhu, BKC, South Mumbai), Bangalore
  (Indiranagar, Koramangala, HSR, Whitefield, Sarjapur), Hyderabad, Pune,
  Chennai. **Vary which ones you name and what you say about them.**
- Name international contexts where this subject is actually taken — the Gulf
  (Dubai, Abu Dhabi, Doha, Muscat), Singapore, Malaysia, Hong Kong, Bangkok,
  Nairobi, Lagos, Accra, the UK, Europe. For language subjects, name the
  countries where that language route is common. **Choose what is true for your
  subject**: Marine Science is a Maldives-only syllabus; Swahili is East African;
  Urdu and Hindi skew South Asia and the Gulf diaspora.
- Say "online worldwide, in your own time zone" at least once, and be explicit
  that home tutoring is India-only and city-dependent.

### SEO and AEO details that matter

- Work the primary keyword into `h1`, the first 100 words, and 2+ block headings
  naturally. Do not stuff — the gate does not count density, but a human reads it.
- **2+ block headings phrased as questions**, answered in that block's first
  40-60 words. This is what gets lifted into AI answers and featured snippets.
- FAQ answers must be self-contained: each one should make sense read alone,
  because that is how an AI answer engine will quote it.
- The comparison table is a real `<table>` and is the most liftable element on
  the page. Make its rows genuinely informative and subject-specific: compare
  one-to-one tutoring against coaching-centre batches, recorded courses and
  school support on dimensions that matter for *this* subject (practical
  supervision, portfolio feedback, oral practice, essay marking turnaround).
- Mention at least one syllabus code from your catalog entry in the body text.

## Voice

Write like an experienced tutor talking to a parent who is mildly sceptical and
short on time. Specific, calm, occasionally willing to say something unflattering
("home tutoring is not available everywhere, and pretending otherwise wastes your
time"). No marketing adjectives, no "unlock your potential", no exclamation
marks, no em-dash-heavy hype. British spelling, since the boards are British.

Vary sentence length. A page of uniform 20-word sentences reads as generated.

## Workflow per subject

1. Read your subject's entry in `src/lib/igcse-subjects/catalog.ts`.
2. Skim `subjects/mathematics.ts` once for shape. Do not keep it open while
   writing — that is how phrasing leaks across pages.
3. Optionally run up to ~4 WebSearches to confirm assessment facts.
4. Write the whole file in one Write call. LF line endings (no CRLF).
5. Run `npx tsx scripts/igcse-subjects/check.ts <slug>`. Fix with Edit and
   re-run until it prints PASS.
6. Do **not** edit any other file — not the catalog, not the registry, not
   another subject, not the gate, not the route.
