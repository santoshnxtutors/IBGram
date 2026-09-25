# Indian city landing page writer guide

You write hand-authored IB + IGCSE city landing pages, one file per city:
`src/lib/india-cities/cities/<slug>.ts`, exporting

```ts
import type { CitySeoPage } from "../types";

export const <exportName>: CitySeoPage = { ... };
```

`slug`, `exportName`, `name`, `state`, `stateCode`, `homeTuition` and `existingPaths` for every city come from
`npx tsx scripts/india-cities/plan.ts <fromRank> <toRank>`. The type is `src/lib/india-cities/types.ts`
(it extends `src/lib/country-seo/types.ts`; read both once).

The page renders with the same layout as `/gurgaon/` (`src/components/country-seo/CountryLanding.tsx`):
hero, school strip, programmes, IB subjects, IGCSE subjects, formats, tutor cards, prose sections with
tables, localities, school clusters, process, reviews, FAQs, closing CTA. You only write content.
The layout prints `countryName` after "in" and `demonym` before "school years" / "parents", so set both to
the city's everyday name (`countryName: "Mumbai"`, `demonym: "Mumbai"`, `countryNameLong: "Mumbai, Maharashtra"`).
`flagCode: "in"`, `countryCode: "IN"`, `region: "<State>, India"`, `timezoneLabel: "Indian Standard Time (IST)"`.

## Reference, not template

`src/lib/country-seo/countries/gurgaon.ts` is the structure and quality bar. Read it once for shape, depth
and tone. **Never copy or lightly reword its sentences, and never reuse your own sentences across your
cities.** The gate fails any page that shares more than 8% of its 8-word phrases with any other city page
(or gurgaon.ts / india.ts). Write each city from scratch, from what is true about that city. A page
written as a template with the city name swapped always fails and costs a full rewrite.

## Step 1: competitor check (do this first, per city)

Run 2-3 WebSearches, e.g. `IB tutors in <City>`, `IGCSE home tuition <City>`, `IB schools in <City>`.
Note the top 2 organic results that are tutoring pages (skip directories like Justdial/UrbanPro only if a
real tutoring site ranks). Write `tmp/india-cities/competitors/<slug>.md`: their URL, what they cover, what
they miss (thin copy, no tables, no FAQs, no school context, no exam calendar, unverifiable stats). Your page
must cover every genuine topic they cover and add what they miss. Do not name competitors on the page.
Use at most ~6 searches per city in total, including school fact checks.

## Hard facts about IB Gram (never contradict)

- **In-person home tuition exists only in Gurugram and parts of Delhi NCR.** If `homeTuition` is `false`,
  the city gets **online** one-to-one tuition: live private lessons the student takes at home on a laptop.
  You may and should target "home tuition" searches with honest phrasing: "online home tuition",
  "private tuition from home", "one-to-one tuition at home, online". Say plainly (once, in a FAQ and in
  the formats section) that tutors do not visit homes in <City>, and that home visits run only in
  Gurugram and parts of Delhi NCR. Never write that a tutor comes to your home, travels to your area, or
  teaches in person in that city. If `homeTuition` is `true`, home tuition is offered in parts of the city
  subject to a tutor being available in the family's area, plus online and hybrid.
- Tutors are based in India, teach in IST. Covers IB PYP, MYP, DP, CP and Cambridge / Pearson Edexcel IGCSE
  (A Level / AS only as context).
- Free trial lesson, written note after each session, tutor change if the fit is wrong, rates quoted in
  writing before booking. **No published prices** (cost questions: explain what drives the rate).
- Contact: `ibgram24@gmail.com` and `+91 7439 368 115` (WhatsApp). No other email or phone.
- Independent service, not affiliated with the IB, Cambridge, Pearson or any named school.
  `schoolDisclaimer` must say so in its own words.
- Tutors coach; they never write IAs, Extended Essays, TOK essays or coursework.
- **Never** claim "#1", "best tutors", top rankings, guaranteed grades, results or admission. No invented
  statistics, student counts, tutor counts or review scores.

## Accuracy

- Name only schools you are confident offer IB and/or Cambridge / Edexcel IGCSE in that city (confirm with a
  search when unsure). `stripSchools`: 4-8 such schools, or `[]` if the city has fewer than 3 you can confirm.
- `schoolClusters` (3+): group by locality inside the city. A smaller city with few or no IB / IGCSE schools
  may use clusters from the nearest cities students actually commute to or board at, clearly labelled
  (e.g. `city: "Nearby: Lucknow"`), and must say honestly that local options are limited. Never invent a school.
- `regions` (8+): real localities / neighbourhoods / sectors of that city with a note on school context and
  practical timing (traffic corridors, school end times, metro lines where real).
- `geo`: the city centre's real latitude / longitude (4 decimals). `wikipedia`: the city's English Wikipedia URL.
  `alternateNames`: old or alternative spellings people search (Bombay, Bangalore, Calcutta, Baroda...).
- Local detail that makes a page genuinely about the city: its board landscape (state board, CBSE, CISCE),
  its coaching culture (JEE/NEET hubs), the universities and colleges students target from there, climate
  and festival calendar effects on study (monsoon, Durga Puja, Onam, Pongal, Navratri, Chhath...), commute,
  the families who choose IB / IGCSE there (relocating professionals, NRIs returning, business families,
  defence / PSU transfers). Only what is true; if unsure, leave it out.

## SEO / AEO / GEO requirements (the gate enforces the numbers)

- `title` <= 65 chars, contains the city name, primary intent first, e.g.
  `IB & IGCSE Tutors in Pune | Home & Online Private Tuition`. Vary wording across cities.
- `metaDescription` 120-160 chars: city, IB, IGCSE, tuition format, one local detail, free trial.
- `h1` names IB, IGCSE and the city (e.g. `IB and IGCSE Tutors and Home Tuition in Pune`).
- `primaryKeyword`: `IB and IGCSE tutors in <City>`. `secondaryKeywords` **15+**: IB tutor <City>, IGCSE tutor
  <City>, IB home tuition <City>, IGCSE home tuition <City>, IB private tuition <City>, IB Maths tutor <City>,
  IGCSE Maths tutor <City>, IB Physics / Chemistry / Biology tutor <City>, IB DP / MYP / PYP tutor <City>,
  IGCSE online tuition <City>, locality-level ones ("IB tutor <Locality>"), alternate names.
- The primary keyword phrase (in that exact word order) appears 4+ times in body text; home / private tuition
  intent appears within the first 60 words of `heroSubtitle` or `intro`.
- `sections` **7+**, each 4-6 paragraphs of 90-150 words, plus 4-6 bullets where useful. **3+ headings are
  questions** (end with `?`) whose first paragraph answers directly in the first 40-60 words (AEO).
  Cover at least: IB and IGCSE schools and families in the city; CBSE / ICSE / state board vs IB vs IGCSE
  (table); what IB / IGCSE tuition costs in the city and what drives it (no prices); online home tuition vs
  local coaching centres vs private home tutors vs self-study (comparison table); exam calendar and the city's
  school year / festival / weather effects (table); university pathways from the city (AIU equivalence,
  CUET-UG, JEE / NEET eligibility for IB and IGCSE students, study abroad); IB Maths AA / AI and the sciences
  in detail; IGCSE Core vs Extended and subject choices.
- **3+ sections carry a `table`** (`caption`, `columns`, `rows`; first cell is the row header; 3+ rows, every
  row the same length as `columns`).
- `faqs` **15+**, each answer opens with a one-sentence direct answer, 60-120 words, city-specific (localities,
  cost, home tuition honesty, schools, boards, exam sessions, IA / EE help, IGCSE boards, trial, getting started).
- `programmes`: exactly 4 (PYP, MYP, DP, CP), `ageRange` in Indian class names ("Class 11-12, ages 16-19"),
  a city-specific `countryNote`.
- `subjects`: 12+ IB subjects. `igcseSubjects`: 8+ with `igcseSubjectsIntro`. Include Hindi and the state's
  language where relevant (Marathi, Tamil, Kannada, Bengali, Telugu, Gujarati, Malayalam, Punjabi...).
- `modes`: exactly 3, `process`: exactly 5, `whyPoints`: exactly 6, `heroStats`: exactly 4 (defensible,
  non-numeric is fine: "IST", "PYP to DP", "Free trial", "May & Nov"), `heroTrustPoints`: 4+.
- `regionsTitle`, `regionsIntro`, `tutorsIntro`, `schoolDisclaimer`, `modesIntro`, `programmesIntro`,
  `subjectsIntro`, `closingHeading`, `closingBody`, `imageAltText`, `heroEyebrow` (uppercase) all required.
- `schedulingNote`: no trailing period. `lastUpdated`: `"2026-09-21"`.
- `internalLinks` **8+**, only: `/`, `/india/`, `/gurgaon/`, `/ib-tutors/`, `/igcse/`, `/programmes/pyp/`,
  `/programmes/myp/`, `/programmes/dp/`, `/programmes/cp/`, `/courses/ib/mathematics/`, `/tutors/`,
  `/admissions/test-prep/`, `/contact-us/`, `/blog/`, **every path in the city's `existingPaths`** (required),
  and 2-4 other city pages from the plan (`/<slug>/`, nearby cities in the same state or region) within
  `MAX_LINK_RANK` in plan.ts.
- Target 5,500-6,500 words. The gate floor is 4,500.

## Style

- Natural, human Indian English (British spelling: programme, organise, centre). Varied sentence length.
  Specific over generic. No filler ("in today's fast-paced world", "look no further", "unlock your potential").
- **No em dashes** (the gate fails them). Never write "1:1"; say "one-to-one".
- Escape inner double quotes or use typographic quotes. Plain strings only, no markdown inside values.

## Workflow per city

1. If `cities/<slug>.ts` exists and `npx tsx scripts/india-cities/check.ts <slug>` passes, skip it.
2. Competitor check (step 1 above) and fact searches.
3. Write the whole file in one Write call.
4. Run `npx tsx scripts/india-cities/check.ts <slug>`. Fix every failure with Edit, re-run until it passes.
   If it fails on overlap with another city, rewrite the flagged passages in fresh words.
5. Do not edit any other file (not index.ts, not plan.ts, not the gate, not other cities).
