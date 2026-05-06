import { canonicalUrl } from "@/lib/seo/canonical";
import { buildGeneratedCanonicalPath, getPageSlug, pageIdFromInput } from "./slug";
import { buildInternalLinksForInput, getRelatedGeneratedPageSuggestions } from "./internal-link-engine";
import { normalizeGeneratedPageContent } from "./content-normalizer";
import { buildGeneratedPageSchema } from "./schema-generator";
import { scoreGeneratedPage } from "./quality-score";
import { resolveGeneratedPageStatus, resolveIndexFlag } from "./page-status";
import { GENERATED_PAGE_JSON_SCHEMA, buildSeoGeneratorSystemPrompt, buildSeoGeneratorUserPrompt } from "./prompts";
import type { GeneratedContentBlock, GeneratedSeoPage, GeneratedSeoResult, SeoGeneratorInput } from "./types";
import { validateGeneratedSeoResult } from "./validators";

export async function generateSeoPage(input: SeoGeneratorInput): Promise<GeneratedSeoResult> {
  const slug = getPageSlug(input);
  const citySlug = input.citySlug || input.cityName;
  const path = buildGeneratedCanonicalPath({ pageType: input.pageType, citySlug, slug });
  const absoluteCanonical = canonicalUrl(path);
  const pageId = pageIdFromInput(input, slug);

  const generated = process.env.OPENAI_API_KEY
    ? await generateWithOpenAI(input, absoluteCanonical, pageId)
    : buildFallbackGeneratedPage(input, absoluteCanonical, pageId, slug);

  const normalized = normalizeGeneratedPageContent({
    ...generated.page,
    pageId,
    citySlug: input.citySlug || generated.page.citySlug,
    slug,
    canonicalUrl: absoluteCanonical,
    internalLinks: buildInternalLinksForInput(input, pageId),
    relatedPageSuggestions: getRelatedGeneratedPageSuggestions(input, pageId),
    lastUpdated: new Date().toISOString().slice(0, 10),
  });

  const quality = scoreGeneratedPage(normalized, input);
  const status = resolveGeneratedPageStatus({ publishMode: input.publishMode, quality, validationPassed: true });
  const indexFlag = resolveIndexFlag({ preference: input.indexPreference, quality, status });
  const page: GeneratedSeoPage = {
    ...normalized,
    status,
    indexFlag,
    canonicalTarget: indexFlag === "index" ? normalized.canonicalUrl : canonicalUrl(`/ib-tutors/${normalized.citySlug}/`),
    quality,
  };

  page.schema = buildGeneratedPageSchema(page);
  return validateGeneratedSeoResult({ page });
}

async function generateWithOpenAI(input: SeoGeneratorInput, canonical: string, pageId: string): Promise<GeneratedSeoResult> {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5.2",
      input: [
        { role: "system", content: buildSeoGeneratorSystemPrompt() },
        { role: "user", content: buildSeoGeneratorUserPrompt(input, canonical, pageId) },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "ibgram_generated_seo_page",
          schema: GENERATED_PAGE_JSON_SCHEMA,
          strict: false,
        },
      },
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`OpenAI generation failed: ${message}`);
  }

  const payload = await response.json();
  const outputText = extractOutputText(payload);
  if (!outputText) throw new Error("OpenAI response did not include output_text.");
  return validateGeneratedSeoResult(JSON.parse(outputText));
}

function extractOutputText(payload: unknown): string | undefined {
  const record = payload as { output_text?: string; output?: Array<{ content?: Array<{ text?: string }> }> };
  if (typeof record.output_text === "string") return record.output_text;
  return record.output?.flatMap((item) => item.content ?? []).map((content) => content.text).find(Boolean);
}

function buildFallbackGeneratedPage(input: SeoGeneratorInput, canonical: string, pageId: string, slug: string): GeneratedSeoResult {
  const citySlug = input.citySlug || input.cityName.toLowerCase();
  const location = input.microLocationName ? `${input.microLocationName} ${input.cityName}` : input.cityName;
  const title = titleFor(input, location);
  const blocks = fallbackBlocks(input, location);
  const page: GeneratedSeoPage = {
    pageId,
    pageType: input.pageType,
    status: "draft",
    indexFlag: "noindex",
    canonicalUrl: canonical,
    canonicalTarget: canonical,
    slug,
    cityName: input.cityName,
    citySlug,
    parentLocation: input.parentLocation,
    microLocationName: input.microLocationName,
    microLocationType: input.microLocationType,
    primaryKeyword: input.primaryKeyword,
    secondaryKeywords: input.secondaryKeywords,
    serviceFocus: input.serviceFocus,
    programmes: input.programmes.length ? input.programmes : ["PYP", "MYP", "DP"],
    subjects: input.subjects.length ? input.subjects : ["Math AA", "Math AI", "Physics", "Chemistry", "Economics", "English"],
    tutoringModes: input.tutoringModes.length ? input.tutoringModes : ["home", "online", "hybrid"],
    premiumAreas: input.premiumAreas,
    nearbyAreas: input.nearbyAreas,
    nearbyCities: input.nearbyCities,
    schoolsMentioned: input.schoolsMentioned,
    metaTitle: title,
    metaDescription: `${input.serviceFocus} in ${location} for IB PYP, MYP and DP students. Get verified tutor matching with home, online and hybrid support.`,
    ogTitle: `${title} | IB Gram`,
    ogDescription: `Parent-facing IB tutor support for ${location}, with careful tutor matching and safe school ecosystem language.`,
    ogImage: "https://ibgram.com/images/ib-gram-city-og.svg",
    twitterTitle: title,
    twitterDescription: `${input.serviceFocus} in ${location} with IB Gram tutor matching.`,
    breadcrumbTitle: title.replace(" | IB Gram", ""),
    h1: title.replace(" | IB Gram", ""),
    heroTitle: `Find ${input.serviceFocus} in ${location}`,
    heroSubtitle: `IB Gram helps families compare programme needs, subject levels, tutoring mode and tutor availability before recommending a suitable ${location} match.`,
    introSummary: `This generated draft is built from your inputs and should be reviewed before publishing. It keeps local context, school disclaimers, tutor verification and internal links visible for SEO quality checks.`,
    contentBlocks: blocks,
    faqs: fallbackFaqs(input, location),
    internalLinks: buildInternalLinksForInput(input, pageId),
    relatedPageSuggestions: getRelatedGeneratedPageSuggestions(input, pageId),
    schema: {},
    quality: {
      wordCount: 0,
      uniquenessScore: 0,
      localDepthScore: 0,
      seoScore: 0,
      readabilityScore: 0,
      internalLinkScore: 0,
      duplicateRisk: "medium",
      recommendedIndexFlag: "noindex",
      warnings: ["OPENAI_API_KEY is not configured, so a deterministic review draft was generated."],
    },
    finalCta: input.ctaFocus,
    schoolDisclaimer:
      input.pageType === "school"
        ? "IB Gram is an independent tutoring platform and is not officially affiliated with this school unless specifically stated."
        : undefined,
    lastUpdated: new Date().toISOString().slice(0, 10),
  };

  page.schema = buildGeneratedPageSchema(page);
  return { page };
}

function titleFor(input: SeoGeneratorInput, location: string): string {
  if (input.pageType === "subject") return `${input.serviceFocus} in ${input.cityName} | IB Gram`;
  if (input.pageType === "programme") return `IB ${input.serviceFocus.toUpperCase()} Tutors in ${input.cityName} | IB Gram`;
  return `${input.serviceFocus} in ${location} | IB Gram`;
}

function fallbackBlocks(input: SeoGeneratorInput, location: string): GeneratedContentBlock[] {
  const subjects = input.subjects.length ? input.subjects.join(", ") : "Math AA, Math AI, Physics, Chemistry, Economics and English";
  return [
    block("intro", `IB tutoring context in ${location}`, `${location} families usually need IB tutoring that respects programme expectations, school timelines, subject levels and realistic weekly schedules. ${input.proofNotes || "This page should be enriched with verified local details before indexing."}`),
    block("programmes", `PYP, MYP and DP support in ${input.cityName}`, `The page can cover ${input.programmes.join(", ") || "PYP, MYP and DP"} support with different expectations for inquiry, criteria, HL/SL depth, IA planning and exam revision.`),
    block("subjects", `Subjects covered`, `Common subject requests include ${subjects}. Strong generated pages should explain levels such as Math AA HL, Math AA SL, Math AI HL and Math AI SL where relevant.`),
    block("local_areas", `Local coverage around ${location}`, `Nearby areas such as ${input.nearbyAreas.join(", ") || input.premiumAreas.join(", ") || input.cityName} should be described in practical terms: travel feasibility, online backup and scheduling pressure.`),
    block("schools", `School ecosystem guidance`, `${input.schoolsMentioned.join(", ") || "International school families"} may need support around calendars and assessments. IB Gram avoids implying official partnerships.`),
    block("matching_process", "Tutor matching process", "IB Gram reviews programme, grade, subject, level, school timeline, availability, teaching style and preferred mode before recommending a tutor shortlist."),
    block("tutoring_modes", "Home, online and hybrid tutoring", `${input.tutoringModes.join(", ") || "Home, online and hybrid"} tutoring can be compared based on commute, subject rarity, lesson timing and student comfort.`),
    block("verification", "Tutor verification and trust", input.tutorAvailabilityNotes || "Tutor availability and suitability should be checked before a demo or long-term plan is confirmed."),
    block("trust", "Responsible SEO quality note", "This page should not be published until the admin confirms local depth, grammar, metadata, FAQ visibility and internal links."),
    block("cta", "Next step", input.ctaFocus),
  ];
}

function block(type: GeneratedContentBlock["type"], heading: string, body: string): GeneratedContentBlock {
  return { type, heading, body, items: [] };
}

function fallbackFaqs(input: SeoGeneratorInput, location: string) {
  return [
    { question: `How do I find ${input.serviceFocus} in ${location}?`, answer: "Share the student's programme, subject level, current challenge and preferred mode. IB Gram reviews the request and suggests a suitable tutor match where available." },
    { question: `Is home tutoring available in ${location}?`, answer: "Home tutoring may be available depending on tutor travel, timing and subject fit. Online or hybrid support is recommended when it creates a stronger match." },
    { question: "Can tutors help with IB IA and exam preparation?", answer: "Tutors can guide planning, concepts, structure and revision. Assessed work must remain student-owned." },
    { question: "Which IB programmes are supported?", answer: `This page can support ${input.programmes.join(", ") || "PYP, MYP and DP"} students depending on the student's goals and tutor availability.` },
    { question: "Does IB Gram guarantee scores?", answer: "No. IB Gram avoids score guarantees and focuses on careful matching, consistent teaching and responsible academic support." },
    { question: "Is IB Gram affiliated with local schools?", answer: "IB Gram is an independent tutoring platform and does not claim official school affiliation unless specifically stated." },
  ];
}
