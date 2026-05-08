import { absoluteUrl } from "@/lib/seo/slug-utils";
import type { GeneratedContentBlock, GeneratedSeoPage } from "@/lib/page-generator/types";
import { countWords } from "@/lib/page-generator/quality-score";
import { gurgaonAreaPlaces } from "./gurgaon-areas";
import { buildGurgaonFaqs } from "./gurgaon-faqs";
import { buildGurgaonInternalLinks, pathFor } from "./gurgaon-internal-links";
import { GURGAON_IB_PROGRAMMES, GURGAON_IB_SUBJECTS, GURGAON_IGCSE_SUBJECTS, buildGurgaonKeywords } from "./gurgaon-keywords";
import { buildGurgaonLocalMetadata } from "./gurgaon-metadata";
import { buildGurgaonQualityScore } from "./gurgaon-quality";
import { buildGurgaonSchema } from "./gurgaon-schema";
import { gurgaonSectorPlaces } from "./gurgaon-sectors";
import { gurgaonSocietyPlaces } from "./gurgaon-societies";
import type { GurgaonLocalPageType, GurgaonLocalPlace } from "./gurgaon.types";

const LAST_UPDATED = "2026-05-07";
const allPlaces = [...gurgaonAreaPlaces, ...gurgaonSectorPlaces, ...gurgaonSocietyPlaces];

export const gurgaonLocalPlaces = allPlaces;
export const gurgaonGeneratedSeoPages = allPlaces.map(buildGeneratedPage);

export function getGurgaonLocalPlace(type: GurgaonLocalPageType, slug: string): GurgaonLocalPlace | undefined {
  return allPlaces.find((place) => place.pageType === type && place.slug === slug);
}

export function getGurgaonLocalPagesByType(type: GurgaonLocalPageType): GurgaonLocalPlace[] {
  return allPlaces.filter((place) => place.pageType === type);
}

export function getGurgaonIndexablePlaces(): GurgaonLocalPlace[] {
  return allPlaces.filter((place) => place.indexFlag === "index");
}

export function getGurgaonIgcseStaticParams(type: GurgaonLocalPageType) {
  return allPlaces.filter((place) => place.pageType === type).map((place) => ({ citySlug: "gurugram", [`${type}Slug`]: place.slug }));
}

function buildGeneratedPage(place: GurgaonLocalPlace): GeneratedSeoPage {
  const parentArea = place.parentAreaSlug ? allPlaces.find((item) => item.pageType === "area" && item.slug === place.parentAreaSlug) : undefined;
  const { primaryKeyword, secondaryKeywords } = buildGurgaonKeywords(place.pageType, place.name, parentArea?.name);
  const metadata = buildGurgaonLocalMetadata({ pageType: place.pageType, placeName: place.name, primaryKeyword });
  const pageId = `IBG_GURGAON_${place.pageType.toUpperCase()}_${place.slug.replace(/-/g, "_").toUpperCase()}`;
  const internalLinks = buildGurgaonInternalLinks(place, allPlaces, pageId).filter((link) => link.targetUrl !== pathFor(place));
  const contentBlocks = buildContentBlocks(place, parentArea?.name);
  const faqs = buildGurgaonFaqs(place);
  const visibleWordCount = countWords(
    [
      metadata.h1,
      heroSubtitle(place),
      introSummary(place),
      ...contentBlocks.flatMap((block) => [block.heading, block.body, ...block.items]),
      ...faqs.flatMap((faq) => [faq.question, faq.answer]),
      finalCta(place),
    ].join(" "),
  );

  const pageWithoutSchema: GeneratedSeoPage = {
    pageId,
    pageType: place.pageType,
    status: "published",
    indexFlag: place.indexFlag,
    canonicalUrl: absoluteUrl(pathFor(place)),
    canonicalTarget: place.indexFlag === "index" ? absoluteUrl(pathFor(place)) : absoluteUrl("/ib-tutors/gurugram/"),
    slug: place.slug,
    cityName: "Gurugram",
    citySlug: "gurugram",
    parentLocation: parentArea?.name ?? "Gurugram",
    microLocationName: place.name,
    microLocationType: place.pageType,
    primaryKeyword,
    secondaryKeywords,
    serviceFocus: "IB tutoring services",
    programmes: [...GURGAON_IB_PROGRAMMES],
    subjects: [...GURGAON_IB_SUBJECTS],
    tutoringModes: ["home", "online", "hybrid"],
    premiumAreas: place.nearbyAreas,
    nearbyAreas: [...place.nearbySectors, ...place.nearbyAreas, ...place.nearbySocieties].slice(0, 10),
    nearbyCities: ["Delhi", "Noida", "Faridabad"],
    schoolsMentioned: place.schoolEcosystem,
    ...metadata,
    ogImage: absoluteUrl("/images/ib-gram-city-og.svg"),
    twitterTitle: metadata.ogTitle,
    twitterDescription: metadata.ogDescription,
    heroTitle: heroTitle(place),
    heroSubtitle: heroSubtitle(place),
    introSummary: introSummary(place),
    contentBlocks,
    faqs,
    internalLinks,
    relatedPageSuggestions: internalLinks.slice(0, 6),
    schema: {},
    quality: buildGurgaonQualityScore({
      pageType: place.pageType,
      indexFlag: place.indexFlag,
      wordCount: visibleWordCount,
      internalLinkCount: internalLinks.length,
      duplicateRisk: place.duplicateRisk,
    }),
    finalCta: finalCta(place),
    schoolDisclaimer: societyDisclaimer(place),
    lastUpdated: LAST_UPDATED,
  };

  return {
    ...pageWithoutSchema,
    schema: buildGurgaonSchema(pageWithoutSchema),
  };
}

function heroTitle(place: GurgaonLocalPlace): string {
  if (place.pageType === "sector") return `Find Verified IB Tutors in ${place.name} Gurugram`;
  return `Find Verified IB Tutors near ${place.name} Gurugram`;
}

function heroSubtitle(place: GurgaonLocalPlace): string {
  const label = place.pageType === "sector" ? `in ${place.name}` : `near ${place.name}`;
  return `Local IB tutoring support ${label}, Gurugram, often searched as Gurgaon, for PYP, MYP and DP families who want programme-aware subject help, practical tutor matching and safe home, online or hybrid scheduling. Availability depends on subject, grade level, exact location, schedule and preferred tutoring mode.`;
}

function introSummary(place: GurgaonLocalPlace): string {
  const localPhrase =
    place.pageType === "society"
      ? `Families in and around this residential community often prefer a calm matching process that respects privacy, commute windows and the student's exact IB subject level.`
      : `Families around ${place.name} often need tutoring that is local enough for routine lessons but specialist enough for IB assessment, IA deadlines and exam revision.`;
  return `${localPhrase} This page is built for ${place.localIntent.toLowerCase()} It keeps the Gurugram locality context visible without claiming guaranteed availability or any official school, builder, RWA or community association.`;
}

function buildContentBlocks(place: GurgaonLocalPlace, parentAreaName?: string): GeneratedContentBlock[] {
  const placePrep = place.pageType === "sector" ? `in ${place.name}` : `near ${place.name}`;
  const parentLine = parentAreaName ? `${place.name} is mapped to the wider ${parentAreaName} tutoring catchment, so parents can compare exact local availability with nearby area and city-level options.` : `${place.name} is handled as part of the wider Gurugram tutoring catchment, with nearby areas used only when they are relevant to travel or online backup.`;
  const societySafeLine =
    place.pageType === "society"
      ? "IB Gram uses society names only as locality references for families in and around this residential community. It does not claim official association with the society, RWA, builder, school or community."
      : "IB Gram keeps locality wording practical and avoids unsupported claims about tutor counts, guaranteed results or official school relationships.";

  return [
    {
      type: "intro",
      heading: `Local academic context ${placePrep}`,
      body: `${parentLine} Parents ${placePrep} usually need more than a generic subject tutor. IB students work through inquiry, criteria, command terms, internal assessments and school-specific timelines. A useful tutor match starts by checking the student's programme, current unit, subject level, learning gaps, school calendar and preferred lesson mode. ${societySafeLine} The aim is to help parents make a clearer request before a shortlist is reviewed.`,
      items: [
        `${place.locationCluster} context for home, online and hybrid tutoring decisions.`,
        "Gurugram, often searched as Gurgaon, is treated as one connected NCR tutoring market with locality-first matching.",
        "Availability is reviewed by subject, schedule, exact address, programme level and tutor confirmation.",
      ],
    },
    {
      type: "programmes",
      heading: `IB programmes supported ${placePrep}`,
      body: `PYP, MYP and DP students need different kinds of support. PYP tutoring should protect curiosity while improving reading, numeracy, presentation and inquiry habits. MYP tutoring often focuses on criteria, evidence, reflection, projects and stronger writing routines. DP tutoring is usually more specialist: HL and SL content depth, IA planning, exam technique, TOK or EE direction and steady weekly accountability. Families ${placePrep} can use IB Gram to review which level of tutoring is actually needed before choosing a mode.`,
      items: [
        "PYP support for foundations, inquiry habits, reading, numeracy and confidence.",
        "MYP support for criteria, subject foundations, project planning and assignment structure.",
        "DP support for HL/SL subjects, IA direction, EE planning, TOK clarity and exam revision.",
      ],
    },
    {
      type: "subjects",
      heading: `IB subjects covered for ${place.name} families`,
      body: `Common Gurugram requests include Math AA, Math AI, Physics, Chemistry, Biology, Economics and English. Math AA and Math AI are not treated as interchangeable because the skills, calculator use, modelling work and exam routines differ. Science tutoring may include concept repair, data handling, lab-style questions and timed practice. English and Economics often need better argument structure, evidence, diagrams, real examples and response planning. Less common subjects are reviewed honestly rather than forced into a weak local match.`,
      items: [
        "Math AA HL/SL and Math AI HL/SL reviewed by exact pathway and topic need.",
        "Physics, Chemistry and Biology support for concepts, data questions and markscheme language.",
        "Economics, English and humanities support for writing, evidence and assessment criteria.",
      ],
    },
    {
      type: "local_areas",
      heading: `Tutor availability in this locality`,
      body: `Tutor matching ${placePrep} follows a simple priority order: exact locality matches first, nearby sector or area matches next, Gurugram city-level tutors after that, and online or hybrid fallback only when it gives the student a stronger academic match. Nearby options may include ${formatList(place.nearbyAreas.slice(0, 3))}, ${formatList(place.nearbySectors.slice(0, 3))} and selected residential communities such as ${formatList(place.nearbySocieties.slice(0, 3))}. This protects parents from seeing unrelated city tutors when a local request is specific.`,
      items: [
        "Exact local tutors are preferred when the subject, level, timing and travel window fit.",
        "Nearby sectors, areas and societies are considered only when they improve the match.",
        "Online and hybrid support remain useful for urgent doubts, rare subjects and DP specialist depth.",
      ],
    },
    {
      type: "schools",
      heading: `International school ecosystem nearby`,
      body: `Families ${placePrep} may be connected with international school ecosystems across Gurugram, including ${formatList(place.schoolEcosystem.slice(0, 4))}. School names are used only for local academic context and calendar awareness. IB Gram can help parents describe the student's school pace, assessment dates, IA milestones, mock timelines and current feedback so the tutor understands the real academic situation. The platform does not claim official partnership with schools unless that is explicitly verified.`,
      items: [
        "Calendar-aware tutoring around assignments, mocks, IA checkpoints and exam sessions.",
        "Independent support that respects school work and academic honesty boundaries.",
        "Parent-facing matching that asks for the student's real timetable before suggesting options.",
      ],
    },
    {
      type: "matching_process",
      heading: "Tutor matching process",
      body: `The matching process begins with programme, grade, subject, HL or SL level where relevant, school timeline, current pain point and preferred tutoring mode. IB Gram then checks whether the student needs concept repair, homework structure, writing feedback, IA guidance, exam revision or a longer academic plan. For local pages, the location layer matters: an excellent tutor is useful only when the schedule, commute and subject fit are realistic. If home tutoring is not practical, online or hybrid support may be a better decision.`,
      items: [
        "Share programme, grade, subject level, school timeline and exact locality.",
        "Clarify whether the student needs foundations, assignments, IA support or exam preparation.",
        "Review tutor fit by IB experience, subject depth, communication, availability and mode.",
      ],
    },
    {
      type: "tutoring_modes",
      heading: "Home tutoring plus online and hybrid support",
      body: `Home tutoring can be helpful for younger students who need structure and accountability, or for DP students who benefit from regular weekly lessons. Online tutoring is often stronger for specialist DP topics, urgent revision, IA feedback and rare subject combinations. Hybrid tutoring can combine both: home lessons for routine support and online sessions for focused revision or doubts. For ${place.name}, the best mode should be chosen after reviewing travel windows, lesson timing, subject complexity and the student's comfort.`,
      items: [
        "Home tutoring reviewed by exact location, travel feasibility and tutor schedule.",
        "Online tutoring for specialist reach, short-notice doubts and exam-season support.",
        "Hybrid plans for families who want local accountability with flexible academic depth.",
      ],
    },
    {
      type: "verification",
      heading: "Tutor verification and quality process",
      body: `IB Gram reviews tutor profiles, subject familiarity, programme knowledge, communication style, reliability and parent feedback before recommending a match. Verification does not mean guaranteed outcomes or immediate availability. Parents should still use the first class to check clarity, pace, rapport and whether the tutor understands the student's exact school context. For assessed work, tutors can guide thinking and structure, but the student's work must remain their own.`,
      items: [
        "Profile, subject and programme screening before a tutor is suggested.",
        "Demo or diagnostic feedback used where available to confirm teaching fit.",
        "Academic honesty boundaries for IA, EE, TOK, assignments and writing support.",
      ],
    },
    {
      type: "trust",
      heading: "Local trust and safe availability note",
      body: `This page is designed as a useful local guide, not a doorway page. It avoids fake tutor counts, official partnership claims, guaranteed results or instant-placement promises. IB Gram can help parents check tutor availability for this locality based on subject, programme level, schedule and preferred mode of tutoring. The page keeps indexing support tied to useful local context, crawlable internal links, FAQs and safe availability wording.`,
      items: [
        "No guaranteed marks, no invented tutor counts and no fake official affiliations.",
        "Local matching order favours exact locality, nearby locality, Gurugram city and online fallback.",
        "Indexing is reserved for pages with useful content, metadata, FAQs and internal links.",
      ],
    },
    {
      type: "cta",
      heading: `Request IB tutor availability ${placePrep}`,
      body: `Share the student's programme, subject list, level, school timeline, preferred tutoring mode and exact ${place.name} location details. IB Gram can review whether a home tutor, online tutor or hybrid plan is the most practical next step. The recommendation may differ by subject: a nearby MYP mentor may be ideal for weekly structure, while a DP Math AA HL or Physics specialist may be better online if the best fit is not close enough for regular travel.`,
      items: [
        "Programme and subject review before shortlisting.",
        "Mode recommendation based on location, timing and academic depth.",
        "Safe next step without guarantee language or forced local claims.",
      ],
    },
  ];
}

function societyDisclaimer(place: GurgaonLocalPlace): string | undefined {
  if (place.pageType !== "society") return undefined;
  return "IB Gram uses society names only as locality references for families in and around this residential community. IB Gram is not officially affiliated with this society, its RWA, builder, school or community unless specifically stated.";
}

function finalCta(place: GurgaonLocalPlace): string {
  const placePrep = place.pageType === "sector" ? `in ${place.name}` : `near ${place.name}`;
  return `Book a free academic consultation for IB tutoring ${placePrep}, Gurugram. Share the student's programme, subject level, exact location, schedule and preferred mode so IB Gram can review realistic tutor availability.`;
}

function formatList(items: string[]): string {
  const visible = items.filter(Boolean);
  if (visible.length <= 1) return visible[0] ?? "";
  if (visible.length === 2) return `${visible[0]} and ${visible[1]}`;
  return `${visible.slice(0, -1).join(", ")} and ${visible[visible.length - 1]}`;
}

export const gurgaonIgcsePreparedSubjects = [...GURGAON_IGCSE_SUBJECTS];
