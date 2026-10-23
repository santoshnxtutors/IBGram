# UAE page writer guide

You are writing **one** landing page for IB Gram, an independent IB and IGCSE tutor-matching
platform, for a URL under `/uae/`. The URL is a phrase a UAE parent types into Google. Write the
single most useful page on the internet for that exact search.

The best page currently ranking for your query is about **2,300 words with no tables**. You are
writing 4,500+ words with at least three tables. Depth is the whole strategy — but depth means
more *answers*, not more adjectives. A parent should finish the page knowing exactly what to do
next.

## Before you write

Read these three files. They are short and they are the difference between a page that ranks
and a page that gets filed under "Crawled – currently not indexed":

1. `scripts/uae-seo/RESEARCH.md` — who you are beating, the eighteen gaps nobody fills, real
   AED market rates, **a list of verified facts with their sources**, and **fifteen legal and
   factual cautions**. Read the cautions in full. Several are gated and will fail your page;
   the rest are things a UAE regulator actually enforces.
2. `scripts/uae-seo/PAA.md` — 324 real questions UAE parents ask. Your FAQs come from here.
3. Your brief: `tmp/uae-seo/briefs/<slug-with-__-for-slashes>.json`

## Inputs and output

1. Read your brief: `tmp/uae-seo/briefs/<key>.json` where `<key>` is your slug with `/`
   replaced by `__` — slug `dubai/ib-tutor` → `dubai__ib-tutor.json`.
2. Write your page to: `tmp/uae-seo/agent-out/<key>.json`
3. Gate it: `npx tsx scripts/uae-seo/build.ts --check <slug>` (the real slug, with the slash)
4. Fix every problem the gate prints by editing your file, then run the gate again. Repeat
   until it prints `PASS`.

Touch no other file. Do not run builds, tests, the dev server, or `--compile`.

**Write the page JSON with the Write tool, not a bash heredoc.** A heredoc of this size fails on
this Windows setup with `ENAMETOOLONG: uv_spawn`, and the shell also eats backslashes inside
quoted heredocs.

**Do not re-read, grep, or word-count your own written file.** The gate reports the word count
and every failure. Verifying your own output by reading it back costs more than writing it did.
Write, gate, fix what the gate names, gate again.

---

## The one rule that overrides everything

**Tutoring for UAE families is delivered online, one-to-one, over live video.** IB Gram does not
send tutors to homes anywhere in the UAE — home visits are a service we offer only in India.
This is stated on all 48 live country pages and on `/uae/` itself.

Your URL may still be `/uae/dubai/ib-home-tutor-in-dubai-marina/`. That is fine and intended:
it is the phrase parents search. Target it honestly.

- **Do** use the phrase in the H1, title and body — it is the query.
- **Do** write about what home tutoring in that area actually involves: what the market charges,
  travel time, the permit position, how families choose.
- **Do** state plainly, early, that IB Gram delivers this as one-to-one online tuition to that
  neighbourhood, and make the case on its merits: a Marina family gets a Chemistry HL specialist
  instead of whoever happens to live within a 20-minute drive.
- **Never** write a sentence that promises a tutor will come to a UAE address. The gate blocks
  "our tutors come to you", "at your home", "in-person lessons in Dubai" and similar. Those are
  hard failures, not style notes.

A good opening move on a home-tutor page: answer the home-tutoring question properly, compare it
to online in a table, and let the comparison do the selling.

---

## Output shape

Exactly these keys. This is the renderer's shape — what passes the gate is what ships, with no
transformation on the way in.

```jsonc
{
  "slug": "dubai/ib-tutor",              // exactly the slug from your brief

  // Optional: override the generated meta if you find a sharper line.
  // If you override, title stays under 72 chars and metaDescription lands in 120-165.
  "title": "...",
  "metaDescription": "...",
  "h1": "...",

  "heroEyebrow": "SHORT ALL-CAPS LABEL",  // e.g. "ONLINE IB TUTORING FOR DUBAI FAMILIES"
  "heroSubtitle": "45-110 words. Must contain the primary keyword inside the first 70 words, and must name the place.",
  "heroTrustPoints": ["exactly 4", "6-16 words each", "concrete and checkable", "no slogans"],
  "heroStats": [
    { "value": "60+", "label": "IB World Schools across the UAE" }  // exactly 4
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
      "description": "35-80 words, specific — what it assesses, where marks are lost" }
  ],
  "igcseSubjectsIntro": "optional second grid when the page covers both boards",
  "igcseSubjects": [ /* same shape */ ],

  "regionsTitle": "optional — overrides the areas heading",
  "regionsIntro": "40-90 words.",
  "regions": [                            // 6+
    { "name": "Dubai Marina", "note": "25-60 words of real local detail" }
  ],

  "schoolClusters": [                     // 2+
    { "city": "Dubai Marina and JLT", "note": "30-70 words",
      "schools": ["4-8 real school names"] }
  ],
  "schoolDisclaimer": "One sentence: named schools are ecosystem context, no affiliation implied.",

  "modesIntro": "40-90 words.",
  "modes": [                              // 3-4
    { "title": "Weekly one-to-one", "description": "50-100 words", "bullets": ["3-5 items"] }
  ],

  "sections": [                           // 8+, at least 3 carrying a table
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
  "faqs": [ { "question": "ends with ?", "answer": "60-140 words" } ],  // 14+
  "closingHeading": "...",
  "closingBody": "80-150 words.",
  "localKeywords": ["8-14 long-tail phrases actually used in the body"]
}
```

---

## Hitting 4,500 words without padding

The gate counts every word in the structure above. A page built properly lands around
4,600–5,200 naturally:

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

---

## The eight-plus sections

Pick the ones your query actually needs, in an order that reads like an argument. Build at least
three around a table. Suggested spine, adapt freely:

1. **What this search actually means** — answer the literal query in the first 80 words.
2. **The syllabus** — the real content: papers, weightings, command terms, syllabus codes.
   On a subject page this is the heart of the page.
3. **Where marks are actually lost** — specific, diagnosable, per-topic.
4. **What tutoring costs in this market** — *table*: the AED bands from RESEARCH.md, attributed.
5. **Online versus in-home in this area** — *table*: cost, travel, tutor pool, scheduling.
6. **The exam calendar counted backwards** — *table*: session, registration, results, what to do
   when. Nobody else does this.
7. **The schools and the regulator** — KHDA/ADEK/SPEA/MoE, inspection bands, what a report means.
8. **Academic honesty** — what a tutor may and may not do with an IA, EE or TOK essay.
9. **MoE equivalency and attestation** — what IB/IGCSE students need for UAE universities.
10. **Getting started** — the honest version, including what happens if no specialist is free.

### Table ideas that are uncontested

- AED/hour by tier and format, with who charges what
- HL vs SL assessment weightings by paper
- Cambridge vs Edexcel for the same subject (codes, papers, tiering)
- Maths AA vs AI, with which UAE universities expect which
- Exam session → registration deadline → results date
- Criterion letters and mark allocations for an IA
- Word and page limits by assessment component
- This neighbourhood vs the next one over: schools, commute, session timing
- Inspection band meanings (Outstanding → Very Weak) and what each implies

Every row must carry information. A table whose cells say "Yes / Yes / Yes" is worse than no
table. Rows need the same number of cells as there are columns, or the gate fails you.

---

## Uniqueness — the thing that actually breaks at this scale

There are 2,654 pages in this set. The gate compares your page against every other written page
with an 8-gram sketch, and fails you at **28% similarity to a sibling** (same city or area, same
page kind) or **38% to anything else in the corpus**.

Your brief carries a `uniqueAngle`. Build the page around it. It is not a suggestion — it is
what makes your page a different page rather than the same page with the place name swapped.

What reliably fails:
- Opening every page with the same sentence shape ("Finding the right X in Y can be…").
- Reusing a programmes or subjects block with only the place name changed.
- The same eight FAQs everywhere.
- Describing a neighbourhood in words that would be true of any neighbourhood.

What reliably passes:
- Different *sections*, not reworded ones. A Dubai Marina page and a JLT page should answer
  different questions, because Marina families and JLT families ask different ones.
- Local specifics that are checkable: which schools a neighbourhood actually feeds, what the
  commute does to a 4pm session, which subjects that school cluster is short of.
- A different structural spine per angle: cost-led, calendar-led, failure-mode-led, decision-led.

Your brief lists up to 12 siblings with their angles. Read them. Do not write their page.

---

## Voice

Write like a subject teacher who has sat in these rooms, not like a marketing department.

- Short declarative sentences. Real nouns. No hype.
- Name things: "Paper 3 is 35% of the HL grade", not "the assessment is significant".
- British spelling: programme, practise (verb), analyse, maths.
- AED for money, written "AED 250" not "250 AED" or "Dhs".
- Second person for the parent ("your child"), third for the student.
- Never use "we are the best", "number one", "top-rated", or any grade guarantee. The gate
  blocks these and they are also the fastest way to look like everyone else.
- Never promise a specific score, a specific grade improvement, or a 100% anything.

The gate also hard-fails these, which are liabilities rather than style problems:

- Claiming KHDA, ADEK, SPEA, MoHRE, MoE, IB, Cambridge or Pearson **approval, accreditation,
  licensing or partnership**. IB Gram holds none of them. You may name a regulator and explain
  what it does — you may not imply it endorses us.
- Offering to **write, complete or produce** an IA, Extended Essay, TOK essay, Personal Project
  or any coursework. A tutor teaches, reviews and gives feedback on the student's own work.
  Say that explicitly; it is a genuine differentiator against the essay mills in this SERP.
- Presenting a named school or group (GEMS, Taaleem, Aldar, Nord Anglia…) as a partner or
  client. "Students we support attend…" is fine. "We partner with…" is not.
- Stating a UAE office, centre or branch. There isn't one.
- Any statistic without n, date and method. No "96% satisfaction", no "median tutor score 43".

**IB exam dates are not verified.** ibo.org blocks automated fetching, so no IB session or
results date in this project has been confirmed. Write about the May session as the one UAE
schools sit; do not publish a specific IB exam or results date. Cambridge and Pearson dates in
RESEARCH.md *are* sourced and may be used with the source's framing.

The gate also blocks a list of filler phrases — "delve into", "unlock", "academic journey",
"bustling", "nestled", "look no further", "tailored to your" and about seventy more. If the gate
names one, delete the sentence; do not reword around it.

---

## Schema and keywords are handled for you

Do not write JSON-LD, meta tags or keyword lists into your page JSON beyond `localKeywords`.
The library already emits, per page: `EducationalOrganization`, `Service`, `WebPage` (with
`speakable`), `BreadcrumbList`, `FAQPage` built from **all** your FAQs, and `Course` when the
page is about one named subject — plus canonical, en-AE hreflang, OpenGraph, Twitter cards, geo
meta tags and a 25-term keyword set derived from your `localKeywords` plus the page's facts.

What this means for you: **your FAQs become the FAQ rich result.** Write them as real questions
with answers that stand alone, because an AI Overview or a voice assistant may quote one without
the surrounding page. That is also the whole of your GEO strategy — a quotable, self-contained,
factually checkable answer is what gets cited.

`localKeywords` must be phrases that genuinely appear in your body copy. Eight to fourteen. They
are published in `<meta keywords>` and in the schema's `knowsAbout`, so a phrase listed there but
absent from the page is a mismatch that helps nobody.

---

## Checklist before you gate

- [ ] `slug` matches the brief exactly
- [ ] Primary keyword is in the H1 and in the first 70 words of `heroSubtitle`
- [ ] The place (area or city) is named in `heroSubtitle`
- [ ] The page says, in plain words, that lessons are delivered online
- [ ] No sentence promises a tutor at a UAE address
- [ ] 8+ sections, 3+ with tables, every table row matching its column count
- [ ] 14+ FAQs, each 60–140 words, each ending in `?`, none duplicated
- [ ] Built around the brief's `uniqueAngle`, not a sibling's
- [ ] No superlatives, no guarantees, no invented statistics
- [ ] Every AED figure attributed to the market or a named source, never presented as our price
- [ ] `localKeywords` all appear in the body
