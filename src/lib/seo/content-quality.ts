import type { CitySeoPage } from "./city-page-types";

export function getVisibleCityContentText(page: CitySeoPage): string {
  return [
    page.h1,
    page.heroSubtitle,
    page.introSummary,
    page.localCtaText,
    ...page.trustPoints,
    ...page.cityOverview,
    ...page.cityAcademicIntro,
    page.curriculumNotes,
    page.assessmentSupport,
    page.examSessionFocus,
    page.mathCoverage,
    page.scienceCoverage,
    page.humanitiesCoverage,
    page.languageCoverage,
    ...page.ibProgramsAvailable.flatMap((program) => [
      program.name,
      program.ageRange,
      program.description,
      program.cityNote,
    ]),
    ...page.ibSubjectsAvailable.flatMap((subject) => [
      subject.name,
      subject.level,
      subject.description,
      subject.cityNote,
    ]),
    ...page.matchingProcessSteps,
    ...page.premiumAreas.flatMap((area) => [area.name, area.description, ...(area.nearbyLandmarks ?? [])]),
    ...page.nearbyAreas,
    page.serviceAreaText,
    ...page.ibSchoolsCity.flatMap((school) => [school.name, school.area, school.description, ...school.typicalNeeds]),
    page.schoolDisclaimer,
    ...page.schoolSpecificNeeds,
    ...page.schoolAreaMapping.flatMap((mapping) => [mapping.area, ...mapping.schools, mapping.note]),
    page.teachingModeNotes,
    ...page.tutorVerificationProcess,
    page.averageMatchingTime,
    ...page.localTestimonials.flatMap((item) => [item.title, item.detail, item.sourceLabel]),
    ...page.internalLinksOut.map((link) => link.anchorText),
    ...page.cityFaqs.flatMap((faq) => [faq.question, faq.answer]),
    page.bottomCtaText,
  ].join(" ");
}

export function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
