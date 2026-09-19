# Country landing page writer guide

You write one hand-authored country landing page per country: `src/lib/country-seo/countries/<slug>.ts`,
exporting `export const <exportName>: CountrySeoPage = { ... }`. Slug, exportName, flagCode, countryCode
and a starting fact brief (`angle`) for every country are in `scripts/country-seo/plan.ts`.

The layout is shared (`src/components/country-seo/CountryLanding.tsx`) and already renders the flag,
tutor cards, reviews, schema, hreflang and metadata. You only write content.

## Reference, not template

`src/lib/country-seo/countries/usa.ts` is the quality and structure bar: read it once for shape, depth
and tone. **Never copy or lightly reword its sentences.** The gate fails any page sharing more than 8% of
its 8-word phrases with any other country page. Every paragraph must be about *this* country's education
system, exam routes, cities, schools, calendar, university entry and practical realities, which is what
makes a page rank there and what makes it unique.

## Hard facts about IB Gram (do not contradict)

- Tutoring outside India is **online only**, one-to-one by default, small groups and exam-block intensives
  also available. Tutors are based in India. Never imply in-person or home tutoring in the country; you may
  say home tutoring is offered only in India.
- Covers IB PYP, MYP, DP, CP and Cambridge / Pearson Edexcel IGCSE (plus A Level/AS context where the
  country relies on it, framed as context, not a core promise).
- Free trial lesson, written note after each session, tutor change if the fit is wrong, rates quoted in
  writing before booking. No published prices.
- Contact: `ibgram24@gmail.com` and `+91 7439 368 115` (WhatsApp). No other email or phone.
- Independent service: not affiliated with the IB, Cambridge, Pearson or any named school. Each page's
  `schoolDisclaimer` must say so in its own words.
- Tutors coach; they never write IAs, Extended Essays, TOK work or coursework.
- **Never** claim or promise rankings, "#1", "best", guaranteed grades, results or admission.

## Accuracy

- Name only schools you are confident exist and offer IB and/or Cambridge/Edexcel. You may use WebSearch
  (at most ~5 searches per page) to confirm school names, IB World School counts, recognition rules and
  time zones. If unsure, leave it out; never invent statistics.
- Exam session: do not assume May. Many southern-hemisphere schools (Australia, New Zealand, South Africa,
  some in Southeast Asia and South America) sit the November session. Say it depends on the school where
  it varies.
- heroStats must be defensible. Non-numeric stats are fine ("UTC+4", "May & Nov", "1:1").
- Use the country's own school-year vocabulary (Year 12, Grade 11, Form 5, Sixth Form...) and local
  spelling (British English for UK/Commonwealth pages, US spelling only where local usage is American).

## SEO / AEO / GEO requirements (the gate enforces the numbers)

- `title` ≤ 65 chars, primary keyword first, e.g. `IB Tutors in the UAE | Online IB DP, MYP & IGCSE Tutoring`
  — vary the wording across countries.
- `metaDescription` 120-160 chars, includes country, IB and IGCSE, online, a local detail.
- `primaryKeyword`: `IB tutors in <Country>`. `secondaryKeywords`: **10+** local-intent keywords, mixing
  IGCSE, city names ("IB tutor Dubai"), local terms ("KHDA", "A Level tutor online"), exam terms.
- `h1` names IB, IGCSE and the country. Work the main cities and local keywords naturally into the body.
- `sections`: **6+** long-form sections, each 5-6 paragraphs of 100-150 words plus 4-6 bullets. At least
  **3 headings phrased as questions** whose first paragraph answers in the first 40-60 words.
- **2+ sections carry a `table`** (`caption`, `columns`, `rows`; first cell is the row header; 3+ rows).
  Good tables: local qualification vs IB vs IGCSE/A Level; city → time zone → typical session windows;
  exam calendar by programme; university recognition/equivalence steps; school-year mapping.
- One section must cover how IB/IGCSE results are recognised for university entry **in that country**
  and abroad; one must cover the local national curriculum vs IB vs IGCSE.
- `faqs`: **14+**, each answer opens with a one-sentence direct answer, 60-120 words, country-specific
  (local cities, costs question, time zone, local exams, recognition, trial, IGCSE, IA/EE, getting started).
- `programmes`: exactly 4 (PYP, MYP, DP, CP) with `ageRange` in local year/grade names and a country-specific
  `countryNote`.
- `subjects`: 12+ (include the country's language A/B where relevant, e.g. Arabic B, French B, Chinese A).
- `regions`: 8+ cities/regions/emirates/provinces with time zone and local school context.
  **`regionsTitle` is required** (e.g. "Emirates, cities and school communities across the UAE").
- `schoolClusters`: 4+ cities, 3-6 real schools each.
- `modes`: exactly 3. `process`: exactly 5. `whyPoints`: exactly 6.
- **`tutorsIntro` is required** (one or two sentences about the tutor cards, in local time).
- `timezoneLabel` e.g. `"Gulf Standard Time (UTC+4)"`; `schedulingNote` has no trailing period.
- `internalLinks`: 8+, only these hrefs: `/ib-tutors/`, `/igcse/`, `/programmes/dp/`, `/programmes/myp/`,
  `/courses/ib/mathematics/`, `/tutors/`, `/admissions/test-prep/`, `/contact-us/`, `/blog/`, `/usa/`, plus
  up to 3 neighbouring country pages from plan.ts (`/<slug>/`).
- `countryName` reads naturally after "in" ("the UAE", "Singapore", "the UK"); `countryNameLong` is formal
  ("the United Arab Emirates"); `demonym` reads before "school years"/"parents" ("Emirati", "British").
- `lastUpdated`: `"2026-09-14"`.
- Target 5,000-7,000 words. The gate floor is 4,000.

## Workflow per country

1. If `countries/<slug>.ts` exists and `npx tsx scripts/country-seo/check.ts <slug>` passes, skip it.
2. Optionally run a few WebSearches to confirm facts.
3. Write the whole file in one Write call (TypeScript; escape inner double quotes or use typographic quotes).
4. Run `npx tsx scripts/country-seo/check.ts <slug>`. Fix failures with Edit, re-run until it passes.
   Review any in-person wording warnings.
5. Do not edit any other file (not index.ts, not usa.ts, not the gate).
