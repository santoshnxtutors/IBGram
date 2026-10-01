# Blog rewrite: writer guide

You are rewriting one existing IB Gram blog post from scratch so it becomes the most useful page on
the internet for its search. IB Gram (ibgram.com) is an independent tutor-matching platform for IB
(PYP, MYP, DP) and IGCSE families, based in Gurgaon (Gurugram) and serving India and families abroad.

The model to match is the flagship post `src/content/blog/how-to-score-7-ib-math-aa-hl.md`
(live at /blog/how-to-score-7-ib-math-aa-hl/). Match its **quality, depth, structure and voice**:
a clear thesis in the first paragraph, honest diagnosis before advice, tables that compare,
animated figures that teach, a concrete system the reader can run, sharp FAQs, and a closing
"next actions" list. **Never copy its sentences**; the gate rejects shared phrasing.

## Steps for each post

1. Brief: `npx tsx scripts/blog-rewrite/plan.ts <key>` prints your post's keyword (`kw`), its lane,
   its cluster siblings and their lanes, every other post (for links), the tag vocabulary, and the
   **old post** (title + body). Read the old post: keep any true, specific information in it; drop
   the fluff.
2. Read the flagship post once (first post only; you remember it after that), and
   `scripts/india-keywords/facts.ts` (the exam and syllabus facts you may state).
3. Find service pages to link: `grep -E "<pattern>" scripts/blog-rewrite/routes.txt` (every live
   non-blog URL, e.g. `grep -E "^/ib-tutors/gurugram/" ...`, `grep "^/gurgaon/" ...`,
   `grep -E "^/(noida|delhi|faridabad)/" ...`, `grep igcse ...`).
4. Write the whole post in **one** Write call to `scripts/blog-rewrite/posts/<key>.md`.
5. Gate: `npx tsx scripts/blog-rewrite/check.ts <key>`. Fix every problem with Edit and re-run
   until it prints `PASS`. Then move to your next post.

Touch no other file. No builds, tests, dev server, git, or database.

## File format

```
---
{
 "slug": "<key, exactly>",
 "title": "40-110 chars. The H1. Contains the keyword naturally. Promise the specific payoff.",
 "metaTitle": "30-62 chars. Keyword near the front. Ends with ' | IB Gram' only if it fits.",
 "metaDescription": "130-165 chars. Contains the keyword. States what the reader gets.",
 "excerpt": "120-320 chars. Shown under the H1 and on cards. Plain, specific, no hype.",
 "metaKeywords": ["<kw exactly>", "4-11 more real search phrases"],
 "tags": ["4-8 tags, only from the tag vocabulary in the brief"]
}
---

Body markdown starts here...
```

## Body structure (gate-enforced numbers in bold)

- **3,600+ words; aim for 4,200-4,800.** Length comes from new information: worked examples,
  scenarios, real trade-offs, calendar pressure points, paper and criterion detail. Never restate.
- **No H1** (`# `). The page prints the title as H1. Start with 2-4 intro paragraphs: the first
  sentence answers the search, the **keyword appears in the first 100 words**, and the intro says
  who the post is for and what it covers.
- **12+ H2s** (`## `), with H3s beneath where useful. **3+ H2s phrased as questions** ending in `?`;
  the first 40-60 words under each answer it completely, then add depth (this is what AI Overviews
  and assistants quote).
- The **keyword** appears **4-16 times** in the body, exact wording, case-insensitive, read
  naturally. In at most 3 H2s. Seed 5-6 natural uses in the first draft.
- **2+ GFM tables** (comparison, plan, error log, checklist).
- **3+ data figures using at least 2 kinds** (syntax below). Space them through the post.
- A standalone **numbered process** (`1.` `2.` `3.`) somewhere that makes sense quoted alone.
- `## Frequently Asked Questions` (exact text), then **8-12** `### Question?` headings. Each answer
  opens with a one-sentence direct answer, then 40-110 words of detail. Real questions families
  ask, including awkward ones (cost, a tutor not working out, no progress after a month).
- End with a short "next steps" section (3 numbered actions) and a final CTA paragraph linking to
  `/contact-us/` and one relevant tutor or service page.
- Lists use `- ` or `1. `; bold with `**`; blockquote with `> ` for one pull-quote line at most twice.

## Animated figures

Each renders as an animated card (bars grow, cards rise, timeline dots pulse) as the reader scrolls.
Opening line `:::<kind> <title>`, then 2-6 rows with cells separated by `|`, optionally one line
without `|` (the note shown under the figure), then a line with only `:::`. Blank line before and after.

```
:::steps How a home tutor match works
Query | Board, level, subject, area, schedule
Shortlist | Verified profiles that fit
Trial | A demo session before committing
Review | Switch if the fit is wrong
:::

:::bars Paper weightings in IB Math AA HL
Paper 1 (no calculator) | 30 | 30%
Paper 2 (calculator) | 30 | 30%
Paper 3 (extended) | 20 | 20%
Internal Assessment | 20 | 20%
Exams are 80% of the grade; the IA is the 20% you control.
:::

:::stats MYP Mathematics at a glance
4 | Criteria, A to D
0-8 | Score range per criterion
1-7 | Final MYP grade scale
:::

:::timeline A DP1 maths term
Weeks 1-4 | Diagnostic and algebra repair
Weeks 5-8 | First unit with mixed practice
Weeks 9-12 | Timed sections and an error-log review
:::
```

- `bars` rows: `label | number 0-100 (bar length) | label shown at the end (optional)`.
- `steps` rows: `name | short detail` (keep names 1-3 words, details under 10 words). 3-5 rows.
- `stats` rows: `short value | label`. 2-4 rows.
- `timeline` rows: `when | what`.
- **Figures must be true.** Use real structure (weightings, criteria, scales, durations from the
  facts file), a process, or a plan. If a bar chart shows a judgement rather than an official
  number (e.g. where marks usually go), say so in the title or note: "Illustrative", "Typical".
  Never present invented data as research or statistics.
- Posts bylined to Ajay Vatsyayan (brief `author`) may add `:::figure signature-ajay:::` once, at
  the end of the section about his approach. Others must not.

## Internal and external links

Links are how these posts rank as a set. Gate: **10+ internal links**, **4+ distinct `/blog/`
posts**, **3+ distinct non-blog pages**, every link must be live.

- `/blog/<key>/` links: only keys from the brief (siblings, everyOtherPost, the flagship).
  Link siblings where their lane is relevant, and say what the reader will find there, so each
  post hands off rather than repeats ("the fee drivers are covered in [what affects IB tutor fees
  in Gurgaon](/blog/ib-tutor-fees-in-gurgaon-what-affects-the-cost/)").
- Non-blog links: only paths that exist in `scripts/blog-rewrite/routes.txt`, exactly as written
  there, with the trailing slash. Prefer the most specific page (subject + city tutor page, city
  page, programme page). `/contact-us/` and `/tutors/` are always valid.
- Descriptive anchor text with the target's topic, never "click here" or a bare URL.
- **Pillar posts** (brief `pillar: true`) must link to **every** sibling; a "Related guides" H2
  with a one-line description per sibling is the natural place.
- IB maths posts (cluster `ib-maths`) must link to `/blog/how-to-score-7-ib-math-aa-hl/`.
- External links: only these exact URLs, at most 2: `https://www.ibo.org/`,
  `https://www.ibo.org/programmes/diploma-programme/`,
  `https://www.ibo.org/programmes/middle-years-programme/`,
  `https://www.cambridgeinternational.org/`, `https://qualifications.pearson.com/`.

## Stay in your lane

The brief's `lane` is what your post owns. Siblings own theirs. Build every section around your
lane; give a sibling's topic at most two sentences and a link. Two posts covering the same ground
compete in Google and neither ranks. The gate rejects a post sharing more than 8% of its 8-word
phrases with any other post (including posts other writers are writing now), so write every
sentence fresh; never reuse a template from your previous post with nouns swapped.

## SEO, AEO, GEO and E-E-A-T

- Spell entities out at first use: International Baccalaureate (IB), Diploma Programme (DP),
  Middle Years Programme (MYP), Higher Level (HL), Standard Level (SL), Internal Assessment (IA),
  Extended Essay (EE), Theory of Knowledge (TOK), Creativity, Activity, Service (CAS), Cambridge
  International Education, Pearson Edexcel, International General Certificate of Secondary
  Education (IGCSE).
- State checkable facts in extractable form: paper names, weightings, durations, criteria, grade
  scales, syllabus codes, session months. Only facts in `facts.ts`, the flagship post or the old
  post (if consistent with facts.ts). If unsure, leave it out or tell the family to confirm with
  the school's coordinator. Syllabuses change: say "check the current subject guide" where it matters.
- Include at least one definition passage, one comparison and one numbered process that each stand
  alone as a quotable answer.
- Show experience: concrete scenarios ("A DP1 student who scored well in IGCSE Extended often
  finds..."), the mistakes seen on real scripts, what a session actually looks like. Written as a
  practitioner, not a brochure.
- Local posts: name real localities in the brief precisely and say what they mean in practice
  (gate entry in societies, weekday evening traffic, study space, when online is better). Never
  invent distances or travel times.

## Honesty (the gate and reviewers reject these)

- No tutor, student, family or years-in-business counts for IB Gram.
- No guaranteed grades, 7s, A*s or improvements. "No tutor can guarantee a grade" is fine.
- No ratings, reviews, testimonials or success stories about real people. Illustrative scenarios
  must read as illustrative ("a typical student", "consider a student who...").
- No "number one", "top-rated", "the best tutors in" claims about IB Gram. On a "best" title,
  write about how to judge what is best.
- No rupee amounts or price ranges (one exception: the ₹5,000 post may discuss that figure as the
  rate parents ask about, never as IB Gram's price). Explain what moves fees instead.
- What IB Gram does, and nothing beyond it: a family sends a query or books a free consultation;
  IB Gram asks about board, programme, level, subject, school calendar, location and schedule;
  it shortlists tutors whose profiles are verified and fit; a demo or trial session can be
  arranged before committing; lessons run at home, online or hybrid; the family can ask for a
  different match. Availability is "subject to tutor availability".
- Ajay Vatsyayan is IB Gram's IB Mathematics mentor. State only what the flagship post or your
  old post says about him; never invent credentials, years, schools, results or student numbers.
- Schools named (Pathways, Heritage, etc.) are context only: never state what a school offers or
  imply a relationship. Include once: "IB Gram is an independent platform and is not affiliated
  with the International Baccalaureate, Cambridge International Education, Pearson Edexcel or any
  school named here."

## Voice

An experienced IB/IGCSE mentor who has sat with many families: direct, specific, warm, impatient
with marketing language. Vary sentence length hard. Admit trade-offs and say when a family does not
need a tutor. British spelling (programme, practise as a verb, organise). Indian English register
where natural (Class 10, revision, doubt-solving, board exams). **Max 12 em dashes**; use commas,
colons and full stops. Perfect grammar.

Never use (auto-rejected): in today's fast-paced, delve into, unlock, navigate the complexities,
it is important to note, it's worth noting, in conclusion, in summary, moreover, furthermore,
additionally, firstly, the landscape of, educational landscape, tapestry, a testament to, elevate
your, seamless, robust solution, leverage the, game-changer, look no further, rest assured, dive
into, embark on, at the end of the day, cutting-edge, state-of-the-art, world-class, unparalleled,
plethora, myriad of, harness the power, revolutionise, paradigm shift, in the realm of, boasts a,
nestled in, vibrant city, bustling city, in essence, crucially, notably, first and foremost, the key
takeaway, one thing is clear, in the heart of, stands as a, plays a vital role, academic journey,
learning journey, empower, we understand that, top-notch, second to none, one-stop, hassle-free,
peace of mind, needless to say, top-rated, number one, No. 1, India's leading, transforming education.

Also avoid: rule-of-three lists as a habit, three sentences in a row starting the same way,
rhetorical questions as paragraph openers, summarising a section at its end.
