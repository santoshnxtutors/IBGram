# IB Gram — Blog Writing Prompt (for interns)

Two things live here:

- **Part A** — the prompt the intern pastes into Claude/ChatGPT (or writes to, by hand).
- **Part B** — where each output goes in `ibgram.com/admin/blog/`, plus the QA checklist.

The blog body is rendered by a **custom minimal markdown renderer**
(`src/components/blog/Markdown.tsx`), not a full markdown library. Unsupported
syntax renders as literal junk text on the live page. Part A already encodes
those limits — do not loosen them.

---

## Part A — The prompt (copy everything inside the box)

<pre>
You are a senior IB/IGCSE education writer for IB Gram (ibgram.com), a tutoring
marketplace that matches IB, IGCSE, A-Level and AP students with vetted subject
tutors, online worldwide and in-person in Gurgaon/Delhi NCR.

Write ONE complete blog article of MINIMUM 4,000 words on the topic below.
This publishes to a live site. Do not produce an outline, a summary, or a
"here is a draft" note — output only the finished article in the exact format
specified in OUTPUT FORMAT.

=== ASSIGNMENT ===
TOPIC:              {{TOPIC}}
PRIMARY KEYWORD:    {{PRIMARY KEYWORD}}
SECONDARY KEYWORDS: {{3-6 keywords, comma separated}}
SEARCH INTENT:      {{informational / comparison / how-to / cost / decision}}
READER:             {{IB parent / IB DP student / MYP parent / IGCSE student}}
MUST MENTION:       {{curriculum, subject, city, exam session, anything non-negotiable}}

=== READER AND ANGLE ===
The reader is an intelligent, anxious, time-poor parent or a student under exam
pressure. They have already read three generic articles that told them nothing.
Your job is to be the one page that answers the actual question, with specifics
they can act on this week. Assume they know what the IB is — never explain the
acronym from scratch unless the topic is literally "what is the IB".

=== NON-NEGOTIABLE RULES ===
1. MINIMUM 4,000 words of body text. Count before you finish. 3,600 is a fail.
   Reach it with depth — worked examples, tables, comparisons, edge cases,
   mistakes, timelines — never with padding or restated sentences.
2. Answer the primary question in the FIRST 60 WORDS, in plain language, before
   any context or throat-clearing. AI Overviews and featured snippets read the
   opening; a 150-word warm-up wastes the only paragraph that gets quoted.
3. Every factual claim is either (a) something IB Gram genuinely knows from
   tutoring, (b) a stable, checkable fact about the IB/IGCSE system, or
   (c) marked "[needs source]" at the end of the sentence for the editor to
   verify. NEVER invent statistics, percentages, survey results, grade-boundary
   numbers, pass rates, salary figures, rankings or IBO policy dates. A wrong
   number on an education site destroys trust and rankings.
4. Prices and fees: only use ranges the assignment gives you. If none are given,
   write about what drives cost, not a number.
5. No competitor names, no claims of being "the best/#1/leading", no guarantees
   of grades or results, no "India's largest". Write with confidence, not hype.
6. British/Indian English spelling (programme, practise (verb), organise,
   analyse, maths — not math).

=== STRUCTURE (follow this shape) ===
- Opening: 2-3 short paragraphs, ~180 words total. Direct answer first, then
  why the question is harder than it looks, then what the article delivers.
- 8 to 12 "## " sections. Each section 320-450 words. Each H2 is a question or
  a promise a searcher would actually type — never one-word labels like
  "Introduction", "Overview", "Conclusion", "Benefits".
- Use "### " sub-sections inside the longer H2s (2-4 of the sections should have
  them). Never skip a level (no H4 directly under an H2).
- At least TWO markdown tables: e.g. a comparison table (option A vs B), a
  timeline table (month-by-month plan), a cost/effort table, or a
  "symptom -> likely cause -> fix" table. Tables are what gets screenshotted
  and cited.
- At least one numbered step-by-step section (a process the reader follows).
- At least one section on mistakes: "What parents get wrong about X" — with the
  correction after each mistake.
- One short section grounded in real tutoring experience: what actually happens
  in sessions, what students say, what changes after 6-8 weeks. This is the
  E-E-A-T signal no competitor can copy. Keep it concrete and modest.
- "## Frequently asked questions" near the end: 6-8 questions as "### " headings,
  each answered in 40-90 words. Use the real long-tail questions people type
  (start with How, What, When, Is, Should, Can, Does, How much).
- Final section: a decision-focused close (NOT titled "Conclusion") — what to do
  next, in what order — ending with one natural mention that IB Gram matches
  students with vetted IB/IGCSE tutors and a link to
  [book a free consultation](/contact-us/).

=== WRITING QUALITY ===
- Paragraphs: 2-4 sentences. Never a wall of text. Vary sentence length
  deliberately — a long explanatory sentence, then a short one that lands.
- Write like a person who has sat with these families, not like a content mill.
- Use the second person ("your child", "you") where it is natural.
- Specifics beat adjectives: "an IA that loses 4 marks on the exploration
  criterion" beats "a weaker IA".
- BANNED openings and phrases (instant rewrite): "In today's fast-paced world",
  "In the ever-evolving landscape", "delve into", "navigate the complexities",
  "unlock your potential", "It is important to note that", "Moreover",
  "Furthermore", "In conclusion", "game-changer", "robust", "leverage",
  "embark on a journey", "the world of IB", "As we all know".
- Do not start three consecutive paragraphs with the same word.
- No em dashes as a stylistic tic; use commas, full stops or brackets.
- No emoji anywhere in the body.

=== KEYWORDS (natural, not stuffed) ===
- Primary keyword in: the title, the first 60 words, at least two H2 headings,
  and roughly 6-9 times across 4,000 words. If it reads awkwardly anywhere,
  rewrite the sentence — density is not a target.
- Secondary keywords appear in H2/H3 headings and body text where they fit.
- Include natural variations and related entities (subject names, IB terms like
  IA, EE, TOK, Paper 1/2/3, MYP, DP, predicted grades, exam sessions) — search
  engines match topics, not just strings.

=== INTERNAL LINKS (3-6 of them, inside body sentences, never as a link list) ===
Use ONLY these paths, each with the trailing slash, and only where genuinely
relevant. Link text must be descriptive, never "click here" or a bare URL.
  /contact-us/   -> booking a free consultation / talking to an advisor
  /blog/         -> more IB and IGCSE guides
  /tutors/       -> browsing vetted tutors
  /courses/      -> subject and curriculum pages
If the assignment gives you related article slugs, link 1-2 of them as
/blog/&lt;slug&gt;/ where that topic comes up.

=== OUTPUT FORMAT (markdown, strict) ===
The site uses a MINIMAL markdown renderer. Anything outside this list renders as
broken literal text on the live page.

ALLOWED:
  ## Heading          (start the body at H2 — the post title is already the H1)
  ### Sub-heading
  #### Rare fourth level
  Plain paragraphs, one blank line between every block
  - bullet item        (one per line, flat, never indented)
  1. numbered item     (one per line, flat, never indented)
  **bold text**
  *italic text*
  &gt; a blockquote line
  ---                  (horizontal rule, sparingly)
  [link text](/contact-us/)
  | Column | Column |  (table — the |---|---| separator row is REQUIRED)
  |---|---|
  | cell | cell |

FORBIDDEN (these WILL break the page):
  - No H1 "# " anywhere in the body (the title field is the H1).
  - No images: ![alt](url) renders as literal broken text. Images are set with
    the Featured image / OG image pickers in the admin form only.
  - No code fences (three backticks).
  - No HTML tags of any kind (&lt;br&gt;, &lt;div&gt;, &lt;p&gt;, &lt;img&gt;, &lt;a&gt;).
  - No indented or nested bullets — sub-points become their own flat bullets or
    their own sentence.
  - No bold around a link: **[text](/path/)** breaks. Choose one or the other.
  - No asterisks inside bold text, no strikethrough, no task lists (- [ ]),
    no footnotes.
  - No table without the |---|---| separator row directly under the header row.
  - Every heading, bullet, table row and paragraph on its own line, with a blank
    line between blocks. No trailing spaces for line breaks.

=== ALSO OUTPUT (after the article, under a line reading "---FIELDS---") ===
TITLE:            (55-65 characters, contains the primary keyword, reads like a
                  human wrote it, no clickbait, no "| IB Gram" suffix)
SLUG:             (lowercase-hyphen, 3-7 words, contains the primary keyword,
                  no year, no stop words unless the phrase needs them)
EXCERPT:          (2 sentences, 150-200 characters, the promise of the article)
META TITLE:       (max 60 characters including spaces)
META DESCRIPTION: (150-158 characters, contains the primary keyword, ends with a
                  reason to click, no ellipsis)
META KEYWORDS:    (6-10, comma separated)
READING TIME:     (total body words divided by 200, rounded to a whole number)
WORD COUNT:       (the actual number — count it, do not estimate)

Now write the article.
</pre>

---

## Part B — Putting it into the admin

`ibgram.com/admin/blog/` → **New post**. The generated `---FIELDS---` block maps
one-to-one:

| Admin field | What goes in | Notes |
|---|---|---|
| **Title \*** | `TITLE` | Renders as the page H1. Do not repeat it as `#` in the body. |
| **Slug \*** | `SLUG` | Just the slug — no `/blog/`, no slashes. Never change it after publishing. |
| **Author name** | Real name of a reviewer/tutor | Empty falls back to "IB Gram Editorial". A named author is a stronger E-E-A-T signal — use one only if that person genuinely reviewed the post. |
| **Status** | `Draft` while writing → `Published` after review | Only an editor flips it to Published. |
| **Index flag** | `Auto` | Leave it. `Noindex` only for thin or duplicate posts. |
| **Feature on home page** | `Not featured` unless told otherwise | `IB` / `IGCSE` / `Both` puts it on that home page's insights strip. |
| **Excerpt** | `EXCERPT` | Shows under the H1 and on the blog index card. |
| **Body \*** | The full article markdown | Starts with `## `. Never paste straight from Word or Google Docs — it carries smart quotes and non-breaking spaces. Paste into Notepad first, then into the field. |
| **Meta title** | `META TITLE` | Blank falls back to Title. |
| **Reading time (min)** | `READING TIME` | Whole number, 1-120. If empty, the byline shows a blank " min read" — always fill it. |
| **Meta description** | `META DESCRIPTION` | ~155 characters. |
| **Meta keywords** | `META KEYWORDS` | Comma separated; the field splits on commas. |
| **Featured image** | Pick from the `blog` media folder | 16:9. Appears above the body and in `BlogPosting` schema. Give real alt text at upload time. |
| **OG image (social)** | Pick from `blog-og` | Optional — falls back to the featured image. |

Worth knowing:

- There is **no publish-date field** in the form. A published post with no date
  hides the date line and sorts below dated posts. Ask a developer if a post
  needs a specific date.
- Title, excerpt, author, date, reading time, tag chips and the closing
  "Need a tutor for this subject?" CTA block are rendered by the template. Do not
  rewrite any of them inside the body.
- `BlogPosting` and breadcrumb schema are generated automatically. There is no
  FAQ schema on blog posts — the FAQ section is still worth writing (AI answers
  and long-tail queries pull from it), just do not expect FAQ rich results.
- Four inline animated figures exist for maths/exam posts. Put one on its own
  line, nothing else on that line:
  `:::figure mark-breakdown:::` · `:::figure three-phase-system:::` ·
  `:::figure grade-boundary:::` · `:::figure signature-ajay:::`
  With a caption: `:::figure mark-breakdown|How Paper 1 marks are lost:::`
  An unknown figure name renders nothing at all. One or two per post, maximum.

---

## Part C — QA checklist before Status = Published

Run every line. Anything unchecked goes back to the writer.

**Content**

1. Word count is 4,000+ (paste the body into a word counter — do not trust the AI's own count).
2. The opening 60 words answer the title question directly.
3. No invented statistics, percentages, fees, grade boundaries or IBO dates. Every `[needs source]` is verified and the tag removed, or the sentence is cut.
4. No competitor names, no "best/#1/leading", no grade guarantees.
5. No banned phrases ("delve", "In today's fast-paced world", "In conclusion", "Moreover", "game-changer" …).
6. Reads like a human: paragraph lengths vary, no three paragraphs opening with the same word.

**Formatting (the part that breaks pages)**

7. Body starts with `## `, and there is **no `# ` anywhere** in it.
8. Search the body for `![`, three backticks, `<`, `~~`, `- [ ]` — all must return nothing.
9. No indented bullets (no line starting with spaces then `-`).
10. No `**[` (bold-wrapped links).
11. Every table has a `|---|---|` row directly under its header, and every row has the same number of `|`.
12. Blank line between every heading, paragraph, list and table.
13. Internal links all use a leading and trailing slash (`/contact-us/`), and every external link opens a real page.

**SEO fields**

14. Meta title ≤ 60 chars, meta description 150-158 chars, both containing the primary keyword.
15. Slug is lowercase-hyphen, keyword-bearing, and not already used by another post.
16. Reading time filled (words ÷ 200).
17. Featured image selected, alt text describes the image rather than the brand.

**Final**

18. Save as Draft, open `/blog/<slug>/` and read it top to bottom at phone width. Broken markdown is instantly visible as stray `|`, `#` or `**` characters.
19. Then, and only then, set Status = Published.
