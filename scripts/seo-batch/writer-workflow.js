export const meta = {
  name: 'ibgram-seo-writer',
  description: 'Write unique 1,800+ word IB tutor landing-page content for a batch of target URLs (one writer agent per page; each writes its own JSON file).',
  phases: [{ title: 'Write', detail: 'one writer agent per target URL' }],
};

// args = { root: "<abs project root>", entries: [{ pageId, url, pageType }, ...] }
let A = args;
if (typeof A === 'string') { try { A = JSON.parse(A); } catch (e) { A = {}; } }
if (!A || typeof A !== 'object') A = {};
const root = A.root;
const entries = Array.isArray(A.entries) ? A.entries : [];
log(`args typeof=${typeof args} root=${root ? 'set' : 'MISSING'} entries=${entries.length}`);

const SAFE = `HARD SAFETY RULES (must follow exactly):
- No guarantees of marks, grades, admission, or exam results.
- No fake success numbers, no fake testimonials, no invented tutor counts, no invented school names.
- No claim of official affiliation with the IB Organization, Cambridge, Pearson Edexcel, schools, or exam boards.
- For availability, use safe wording like "availability depends on subject, schedule, exact location, tutor fit and mode".
- Academic honesty: tutors guide thinking, structure and revision; assessed work (IA/EE/TOK) stays student-owned.
- No keyword stuffing. Vary sentence structure. Sound like a thoughtful human education advisor, not a template. Do NOT reuse stock sentences that could be pasted onto another city or area.`;

const SCHEMA = `Write the file as ONE JSON object (no markdown fences, no text outside the JSON) with EXACTLY these keys:
{
  "metaTitle": string,        // ~60 chars where practical; includes the place and "IB"
  "metaDescription": string,  // 150-160 chars; NEVER exceed 165 chars; natural, no stuffing
  "ogTitle": string,
  "ogDescription": string,
  "twitterTitle": string,
  "twitterDescription": string,
  "breadcrumbTitle": string,  // short
  "h1": string,               // natural H1 containing the place
  "heroTitle": string,
  "heroSubtitle": string,     // 40-70 words; include the safe availability wording
  "introSummary": string,     // 50-80 words
  "contentBlocks": [ { "type": <one of the enum below>, "heading": string, "body": string, "items": string[] } ],
  "faqs": [ { "question": string, "answer": string } ],
  "finalCta": string
}
contentBlocks MUST include these types, in this order, each specific and substantial (body 150-230 words, items = 3-4 short specific phrases):
  "intro"            - why families in THIS exact place need IB support; the specific local angle.
  "programmes"       - IB PYP, MYP, DP; HL/SL; IA; EE & TOK; command terms; assessment criteria; school deadlines.
  "subjects"         - subject support relevant here (Math AA/AI HL & SL, Physics, Chemistry, Biology, Economics, English, etc.).
  "local_areas"      - home-tutoring practicality here; nearby areas; when online/hybrid beats a nearby tutor; city-level fallback; travel/scheduling windows.
  "matching_process" - how IB Gram matches a tutor (programme, grade, subject, level, school timeline, mode, fit).
  "tutoring_modes"   - home vs online vs hybrid; when each is right for this place.
  "verification"     - how tutors are reviewed; parent communication; first-class checks.
  "schools"          - school ecosystem context WITHOUT claiming affiliation (use seed schools if present; otherwise neutral wording).
  "trust"            - honest note on availability + academic-honesty boundaries (safe wording).
  "cta"              - next step + reassurance, no guarantees.
faqs MUST be 6 questions a real parent in THIS place would ask, with honest, specific answers. Make the last FAQ an affiliation/honesty question answered using the seed "schoolDisclaimer" wording.`;

function typeGuidance(pageType) {
  if (pageType === 'area') {
    return `PAGE TYPE = AREA. Lead with what makes this specific locality distinct (use seed areaDescription, nearbyLandmarks, nearbyAreas, schools). Cover home-tutoring practicality in THIS locality, realistic travel/scheduling windows, when online beats a nearby tutor, nearby areas for context, city-level fallback, subject-availability notes, and the student-workload + parent concerns specific to this area.`;
  }
  if (pageType === 'society') {
    return `PAGE TYPE = SOCIETY (a premium gated residential community/condominium). Lead with the practicality of tutoring for families living inside a large society: home lessons within the complex, scheduling around school buses and activities, online for specialist DP subjects. Reference nearby areas/schools from seed. Be honest - do not claim a tutor already lives in the society or guarantee in-society availability.`;
  }
  if (pageType === 'city') {
    return `PAGE TYPE = CITY hub. Use seed cityOverview, cityAcademicIntro, premiumAreas and subjectsDetail. Give a genuine city-wide view across its corridors, mention real premium areas, describe subject-demand patterns, the school ecosystem (no affiliation), and how families choose between home, online and hybrid across the city.`;
  }
  if (pageType === 'subject' || pageType === 'programme') {
    return `PAGE TYPE = ${pageType.toUpperCase()}. The core focus is IB <serviceFocus> in this city (see seed subjectName/subjectLevel/subjectDescription/subjectCityNote or programme detail). Explain what this subject/programme tutoring actually involves at HL and SL, the real topics, IA where relevant, command terms, paper/exam practice, and how a family in this city gets matched. Keep light local context (areas/schools) but keep the subject/programme central.`;
  }
  return '';
}

function buildPrompt(e) {
  const seedPath = `${root}\\tmp\\batch1\\seed\\${e.pageId}.json`;
  const outPath = `${root}\\tmp\\batch1\\content\\${e.pageId}.json`;
  return `You are an expert SEO content writer for IB Gram, an independent IB/IGCSE tutor-matching platform in India. You will write genuinely useful, human-sounding landing-page content for ONE page and save it as a JSON file.

STEP 1 - Read this seed file (accurate local data for this exact URL): ${seedPath}
The seed contains the city, the area/society/subject name, real nearby areas, real schools, subjects, and a schoolDisclaimer. Use ONLY facts in the seed plus widely-known, verifiable geographic facts about the locality. Never invent schools, numbers, or affiliations.

TARGET URL: ${e.url}

${typeGuidance(e.pageType)}

${SAFE}

TONE: calm, premium, practical, trustworthy, parent-friendly. Audience: Indian and international-school parents.

LENGTH: total visible body content MUST be at least 1,800 words. Aim for 1,950-2,200 words; do NOT pad beyond ~2,400 - specificity and genuine local detail matter more than raw length. Visible content = h1 + heroSubtitle + introSummary + every contentBlock (heading + body + items) + every FAQ + finalCta. Before saving, estimate the word count and expand any thin block if the total is below 1,850. Keep each contentBlock body to roughly 150-200 words.

UNIQUENESS: This page must read as written specifically for ${e.url}. Open with a concrete local angle. Do not produce text that could be pasted onto a different city or area.

STEP 2 - ${SCHEMA}

STEP 3 - Use the Write tool to create EXACTLY this file (overwrite if it exists): ${outPath}
The file content must be ONLY the JSON object - valid, parseable JSON with all strings properly escaped. No commentary, no markdown.

STEP 4 - Reply with ONLY: "OK ${e.pageId}".`;
}

phase('Write');

const results = await parallel(
  entries.map((e) => () =>
    agent(buildPrompt(e), { label: `write:${e.pageId}`, phase: 'Write', agentType: 'general-purpose', model: 'sonnet' })
      .then((r) => ({ pageId: e.pageId, ok: true, reply: (r || '').slice(0, 80) }))
      .catch((err) => ({ pageId: e.pageId, ok: false, error: String(err).slice(0, 200) }))
  )
);

const ok = results.filter((r) => r && r.ok).length;
log(`writers done: ${ok}/${entries.length} ok`);
return { total: entries.length, ok, results };
