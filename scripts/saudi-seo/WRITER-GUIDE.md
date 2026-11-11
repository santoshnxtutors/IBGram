# Saudi Arabia page writer guide

You are writing **one** landing page for IB Gram, an independent IB and IGCSE tutor-matching
platform, for a URL under `/saudi-arabia/`. The URL is a phrase a Saudi parent types into Google.
Write the single most useful page on the internet for that exact search.

The best pages currently ranking for these queries are **900–2,300 words of vendor marketing with
no tables**. You are writing **4,500–5,000 words** with real data tables. Depth is the strategy —
but depth means more *answers*, not more adjectives. A parent should finish the page knowing
exactly what to do next.

**There is a hard ceiling of 5,200 words and the gate enforces it.** Aim for 4,600–4,900. Going
long is not better: it doubles the time per page and buys nothing against a competitor set that
tops out at 2,300. If the gate says you are over, cut a whole section — do not thin every
paragraph, which costs the depth that makes the page worth reading.

## Before you write

Read these. They are the difference between a page that ranks and a page that gets filed under
"Crawled – currently not indexed":

1. `scripts/saudi-seo/RESEARCH.md` — who you are beating, the fourteen gaps nobody fills, real
   SAR market rates, **verified facts with their sourcing**, and **fifteen cautions**. Read the
   cautions in full. Several are gated and will fail your page.
2. `scripts/saudi-seo/PAA.md` — real questions Saudi parents ask. Use it as a starting pool, not
   a script: your FAQs must be unique across the whole corpus (see below).
3. Your brief: `tmp/saudi-seo/briefs/<slug-with-__-for-slashes>.json`

## Inputs and output

1. Read your brief: `tmp/saudi-seo/briefs/<key>.json` where `<key>` is your slug with `/`
   replaced by `__` — slug `riyadh/ib-tutor` → `riyadh__ib-tutor.json`.
2. Write your page to: `tmp/saudi-seo/agent-out/<key>.json`
3. Gate it: `npx tsx scripts/saudi-seo/build.ts --check <slug>` (the real slug, with the slash)
4. Fix every problem the gate prints by editing your file, then run the gate again. Repeat until
   it prints `PASS`.

Touch no other file. Do not run builds, tests, the dev server, lint, or `--compile`.

**Write the page JSON with the Write tool, not a bash heredoc.** A heredoc of this size fails on
this Windows setup with `ENAMETOOLONG: uv_spawn`, and the shell also eats backslashes inside
quoted heredocs.

**Do not re-read, grep or word-count your own written file.** The gate reports the word count and
every failure. Verifying your own output by reading it back costs more than writing it did.
Write, gate, fix what the gate names, gate again.

---

## The three rules that override everything

### 1. Delivery is online

**Tutoring for Saudi families is delivered online, one-to-one, over live video.** IB Gram does
not send tutors to homes anywhere in the Kingdom — home visits are a service we offer only in
India. This is stated on all 48 live country pages and on `/saudi-arabia/` itself.

Your URL may still be `/saudi-arabia/riyadh/ib-home-tutor-in-al-olaya/`. That is fine and
intended: it is the phrase parents search. Target it honestly.

- **Do** use the phrase in the H1, title and body — it is the query.
- **Do** write about what home tutoring in that district actually involves: what the market
  charges, travel time, how families choose, why the pool is small.
- **Do** state plainly, early, that IB Gram delivers this as one-to-one online tuition to that
  district, and make the case on its merits: an Al Olaya family gets a Chemistry HL specialist
  instead of whoever happens to live within a 20-minute drive.
- **Never** write a sentence that promises a tutor will come to a Saudi address. The gate blocks
  "our tutors come to you", "at your home", "in-person lessons in Riyadh" and similar. Hard
  failures, not style notes.

A good opening move on a home-tutor page: answer the home-tutoring question properly, compare it
to online in a table, and let the comparison do the selling.

### 2. No years, anywhere, in a calendar context

The gate fails **any** month-plus-year pair ("June 2027", "March 2026") and **any** academic year
("2026/27"). It also fails a dated Ramadan or Eid.

Write the **series** and the **term** instead:

- ✅ "the June series", "the November series", "the May session"
- ✅ "the autumn term", "the spring term", "the eight weeks before the June series"
- ✅ "entries close several months ahead of the June series — your school's examinations officer
  has the exact date"
- ❌ "the June 2027 series", "the 2026/27 academic year", "Ramadan begins in mid-February"

This is not pedantry. A year on a page is wrong twelve months later, and nobody is going back to
edit 2,492 pages.

### 3. Every FAQ must be unique across the whole corpus

The gate compares your questions against **every other written page in this set** and fails you if
any question has been asked before, anywhere. Your brief gives you `faqLanes` — three theme sets your
questions should draw from. Use it. Then make them specific to *your* page: the subject, the
level, the district, the school cluster, the exact thing this query is about.

"How much does an IB tutor cost in Saudi Arabia?" will be taken within the first ten pages of the
wave. "What does a Mathematics AA HL tutor cost compared with a Mathematics AI SL one, and why?"
is yours.

---

## Output shape

Exactly these keys. This is the renderer's shape — what passes the gate is what ships, with no
transformation on the way in.

```jsonc
{
  "slug": "riyadh/ib-tutor",             // exactly the slug from your brief

  // Optional: override the generated meta if you find a sharper line.
  // If you override, title stays under 72 chars and metaDescription lands in 120-165.
  "title": "...",
  "metaDescription": "...",
  "h1": "...",

  "heroEyebrow": "SHORT ALL-CAPS LABEL",  // e.g. "ONLINE IB TUTORING FOR RIYADH FAMILIES"
  "heroSubtitle": "45-110 words. Must contain the primary keyword inside the first 70 words, and must name the place.",
  "heroTrustPoints": ["exactly 4", "6-16 words each", "concrete and checkable", "no slogans"],
  "heroStats": [
    { "value": "Sun–Thu", "label": "School week lessons are timed to" }  // exactly 4
  ],
  "tutorsIntro": "35-70 words introducing the tutor cards for this page's subject and level.",

  "intro": {
    "heading": "A real H2 a person would write",
    "paragraphs": ["4-6 paragraphs", "450+ words total"],
    "bullets": ["4-6 scannable specifics"]
  },

  "programmesIntro": "40-90 words.",
  "programmes": [                         // 3-5
    { "code": "DP", "name": "Diploma Programme", "ageRange": "Ages 16-19 · Years 12-13",
      "description": "60-110 words", "countryNote": "50-100 words, specific to THIS place" }
  ],

  "subjectsIntro": "40-90 words.",
  "subjects": [                           // 8+
    { "name": "Mathematics: Analysis and Approaches", "levels": "HL and SL",
      "description": "35-80 words, specific - what it assesses, where marks are lost" }
  ],
  "igcseSubjectsIntro": "optional second grid when the page covers both boards",
  "igcseSubjects": [ /* same shape */ ],

  "regionsTitle": "optional - overrides the areas heading",
  "regionsIntro": "40-90 words.",
  "regions": [                            // 6+
    { "name": "Al Olaya", "note": "25-60 words of real local detail" }
  ],

  "schoolClusters": [                     // 2+
    { "city": "North Riyadh", "note": "30-70 words",
      "schools": ["4-8 real school names"] }
  ],
  "schoolDisclaimer": "One sentence: named schools are ecosystem context, no affiliation implied.",

  "modesIntro": "40-90 words.",
  "modes": [                              // 3-4
    { "title": "Weekly one-to-one", "description": "50-100 words", "bullets": ["3-5 items"] }
  ],

  "sections": [          // 7+; 2 tables on a city hub, 1 on a district or Kingdom-keyword page
    {
      "heading": "A real H2",
      "paragraphs": ["3+ paragraphs", "240+ words total"],
      "bullets": ["optional 4-6"],
      "table": {
        "caption": "SHORT CAPTION",
        "columns": ["3+ columns"],
        "rows": [["4+ rows", "cell", "cell"]]   // every row matches the column count
      }
    }
  ],

  "process": [ { "title": "...", "description": "40-80 words" } ],      // 4-6
  "whyPoints": [ { "title": "...", "description": "40-80 words" } ],    // 5-6
  "faqs": [ { "question": "ends with ?", "answer": "60-140 words" } ],  // 14+, all corpus-unique
  "closingHeading": "...",
  "closingBody": "80-150 words.",
  "localKeywords": ["8-14 long-tail phrases actually used in the body"]
}
```

---

## Hitting 4,500 words without padding

The gate counts every word in the structure above, with a floor of 4,500 and a **ceiling of
5,200**. A page built to this shape lands around 4,600–4,900 naturally:

| Block | Words |
|---|---|
| hero + trust points + stats + tutorsIntro | ~200 |
| intro | 450+ |
| programmes (4 × ~160) | ~640 |
| subjects (10 × ~55) | ~550 |
| regions (8 × ~40) | ~320 |
| schools + modes | ~450 |
| **sections (8 × 280)** | **~2,240** |
| process + whyPoints | ~550 |
| **faqs (14 × 95)** | **~1,330** |
| closing | ~120 |

If you are short, the fix is another *section* answering another real question — never longer
adjectives. If the gate says you are 300 words short, that is one more FAQ pair and one more
paragraph, not a rewrite.

If you are OVER, drop a whole section and its table rather than trimming every paragraph by a
sentence. Seven strong sections beat nine thin ones, and the per-section 240-word floor still
applies to whatever remains.

**Aim each section at ~270 words, not 240.** Three paragraphs written at a natural length land
at 225–239 and fail the 240 floor — this is the single most common gate round-trip on this set.
Writing a little long first costs nothing and saves an iteration per page.

**Note on the similarity thresholds.** Two pages count as siblings when they share a page kind
*and* a city or district. Two city hubs both have no district, and two Kingdom-wide keyword
pages have neither — so those sets are compared against each other at the tighter 26%, not the
36% corpus limit. That is deliberate: they are the pages structurally most alike, so they are
the ones that have to differ most in substance.

---

## The seven-plus sections

Your brief gives you a `spine` — the order your argument runs in. Follow it. Pick the sections
your query actually needs. Suggested pool, adapt freely:

1. **What this search actually means** — answer the literal query in the first 80 words.
2. **The syllabus** — papers, weightings, command terms, syllabus codes. On a subject page this
   is the heart of the page.
3. **Where marks are actually lost** — specific, diagnosable, per-topic.
4. **What tutoring costs in this market** — *table*: the SAR bands from RESEARCH.md, attributed.
5. **Online versus in-home in this city or district** — *table*: cost, travel, tutor pool,
   scheduling.
6. **The academic year counted backwards** — *table*: series, entry window, results, what to do
   when. No years. Nobody else does this.
7. **The Sunday-to-Thursday week and Arabia Standard Time** — *table*: what a workable weekly
   slot looks like against a tutor in India, the UK or elsewhere.
8. **The schools and the regulator** — MoE licensing, ETEC evaluation, what each actually does.
9. **Academic honesty** — what a tutor may and may not do with an IA, EE, TOK essay or Personal
   Project.
10. **MoE equivalency, Qudurat and Tahsili** — the university endgame. The biggest gap in this
    SERP. Mechanism only, no thresholds.
11. **Getting started** — the honest version, including what happens if no specialist is free.

### Table ideas that are uncontested in this market

- SAR/hour by tier and format, with who publishes what
- Sunday–Thursday week against a tutor's own working week, by country
- Arabia Standard Time against IST, GMT/BST and other common tutor time zones
- HL vs SL assessment weightings by paper
- Cambridge vs Edexcel for the same subject (codes, papers, tiering)
- Mathematics AA vs AI, and which university courses expect which
- Series → entry window → results → what to do next (no years)
- Criterion letters and mark allocations for an IA
- Word and page limits by assessment component
- Equivalency step → who issues it → what it unlocks
- Tahsili subject coverage against what an IB or IGCSE student has actually studied
- This district against the next one over: schools, commute, session timing

Every row must carry information. A table whose cells say "Yes / Yes / Yes" is worse than no
table. Rows need the same number of cells as there are columns, or the gate fails you.

---

## Uniqueness — the thing that actually breaks at this scale

There are 2,492 pages in this set. The gate compares your page against every other written page
with an 8-gram sketch and fails you at **26% similarity to a sibling** (same city or district,
same page kind) or **36% to anything else in the corpus**. Both thresholds are tighter than the
UAE set's, because Saudi has far more pages per city.

Your brief carries three things that exist to keep your page distinct. They are not suggestions:

- **`uniqueAngle`** — the editorial angle the page is built around.
- **`spine`** — the order the argument runs in (cost-led, calendar-led, failure-led…).
- **`faqLanes`** — the three theme sets your questions come from.

Two pages that share an angle will still read differently if their spines differ. Two pages that
share both will not. Check your siblings list.

What reliably fails:
- Opening every page with the same sentence shape ("Finding the right X in Y can be…").
- Reusing a programmes or subjects block with only the place name changed.
- The same eight FAQs everywhere.
- Describing a district in words that would be true of any district.

What reliably passes:
- Different *sections*, not reworded ones. An Al Olaya page and an Al Narjis page should answer
  different questions, because the families there ask different ones.
- Local specifics that are checkable: which schools a district actually feeds, what the commute
  does to a 4pm session, which subjects that school cluster is short of.
- A different structural spine per angle.

Your brief lists up to 14 siblings with their angles. Read them. Do not write their page.

---

## Voice

Write like a subject teacher who has sat in these rooms, not like a marketing department.

- Short declarative sentences. Real nouns. No hype.
- Name things: "Paper 3 is 35% of the HL grade", not "the assessment is significant".
- British spelling: programme, practise (verb), analyse, maths.
- SAR for money, written "SAR 250", not "250 SAR" or "﷼250".
- Second person for the parent ("your child"), third for the student.
- Arabic place names as the sitemap spells them: Al Olaya, Al Malqa, Ha'il, AlUla, NEOM, KAFD,
  KFUPM, Thuwal.
- Never "we are the best", "number one", "top-rated", or any grade guarantee.
- Never promise a specific score, a specific grade improvement, or a 100% anything.

The gate also hard-fails these, which are liabilities rather than style problems:

- Claiming **MoE, ETEC, Qiyas, IB, Cambridge or Pearson approval, accreditation, licensing or
  partnership**. IB Gram holds none of them. You may name a regulator and explain what it does —
  you may not imply it endorses us.
- Offering to **write, complete or produce** an IA, Extended Essay, TOK essay, Personal Project
  or any coursework. A tutor teaches, reviews and gives feedback on the student's own work. Say
  that explicitly; it is a genuine differentiator against the essay mills in this SERP.
- Presenting a named school, group or employer (Aramco, ISG, KAUST, KFUPM, GEMS, BISJ…) as a
  partner or client. "Students we support attend…" is fine. "We partner with…" is not.
- Stating a Saudi office, centre or branch. There isn't one.
- Publishing a **Qudurat or Tahsili score threshold**, or a university's weighting formula.
- Promising or guaranteeing a **university admission** outcome.
- Any statistic without n, date and method. No "98% satisfaction", no "4.9/5", no "500+ tutors".
- Any **count of IB World Schools in the Kingdom** — it is unverified. Describe the distribution
  or point at the IB's own directory. Note that `dozens|hundreds|thousands of
  schools/students/tutors/families` is itself blocked as an unverifiable scale claim; write "a
  number of", "a small set of", or name the cities.
- A **quoted or hypothetical** phrase still trips the assessed-work rule — a table cell reading
  "I help students write their IA" fails even as an example of a bad answer. Either put a
  negator in the same sentence or reword ("I help students with their IA").

**IB examination dates are not verified.** Write about the May session as the one Saudi IB
schools sit; do not publish a specific IB examination or results date. Cambridge and Pearson
series *names* may be used — never with a year.

The gate also blocks a list of filler phrases — "delve into", "unlock", "academic journey",
"bustling", "nestled", "look no further", "world-class", "tailored to your" and about eighty
more. If the gate names one, delete the sentence; do not reword around it.

---

## Schema and keywords are handled for you

Do not write JSON-LD, meta tags or keyword lists into your page JSON beyond `localKeywords`. The
library already emits, per page: `EducationalOrganization`, `Service`, `WebPage` (with
`speakable`), `BreadcrumbList`, `FAQPage` built from **all** your FAQs, and `Course` when the page
is about one named subject — plus canonical, en-SA hreflang, OpenGraph, Twitter cards, geo meta
tags and a 25-term keyword set derived from your `localKeywords` plus the page's facts. Every
page in this set is indexable; nothing is ever noindex.

What this means for you: **your FAQs become the FAQ rich result.** Write them as real questions
with answers that stand alone, because an AI Overview or a voice assistant may quote one without
the surrounding page. That is also the whole of your GEO strategy — a quotable, self-contained,
factually checkable answer is what gets cited.

`localKeywords` must be phrases that genuinely appear in your body copy. Eight to fourteen. They
are published in `<meta keywords>` and in the schema, so a phrase listed there but absent from
the page is a mismatch that helps nobody.

---

## Checklist before you gate

- [ ] Between 4,500 and 5,200 words — aim for 4,600–4,900
- [ ] `slug` matches the brief exactly
- [ ] Primary keyword is in the H1 and in the first 70 words of `heroSubtitle`
- [ ] The place (district or city) is named in `heroSubtitle`
- [ ] The page says, in plain words, that lessons are delivered online
- [ ] No sentence promises a tutor at a Saudi address
- [ ] **No month-plus-year anywhere. No academic year. No dated Ramadan or Eid.**
- [ ] 7+ sections; 2 tables on a city hub, 1 on a district or Kingdom-keyword page, every row
      matching its column count
- [ ] 14+ FAQs, each 60–140 words, each ending in `?`, **none used on any other page**
- [ ] Built around the brief's `uniqueAngle` and `spine`, not a sibling's
- [ ] No superlatives, no guarantees, no invented statistics, no school counts
- [ ] Every SAR figure attributed to the market or a named source type, never as our price
- [ ] `localKeywords` all appear in the body
