import { ibEnglishTutorData } from "./ibenglishtutordata";
import { ibIndividualsAndSocietiesTutorData } from "./ibindividualsandsocietiestutordata";
import { ibLanguageTutorData } from "./iblanguagetutordata";
import { ibMathTutorData } from "./ibmathtutordata";
import { ibSciencesTutorData } from "./ibsciencestutordata";
import type { CourseTutorProfile } from "./course-tutor-types";

const smallWords = new Set(["and", "of", "for", "to", "with"]);

export function formatCourseSubject(subjectSlug: string) {
  return subjectSlug
    .split("-")
    .map((part, index) => {
      const lower = part.toLowerCase();
      if (index > 0 && smallWords.has(lower)) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

const tutorRegistry: Record<string, CourseTutorProfile[]> = {
  mathematics: ibMathTutorData,
  sciences: ibSciencesTutorData,
  "individuals-and-societies": ibIndividualsAndSocietiesTutorData,
  english: ibEnglishTutorData,
  language: ibLanguageTutorData,
};

export function getCourseTutorProfiles(curriculum: string, subjectSlug: string): CourseTutorProfile[] {
  const normalizedCurriculum = curriculum?.toUpperCase() === "IGCSE" ? "IGCSE" : "IB";
  const subjectTitle = formatCourseSubject(subjectSlug);
  const selectedTutors = tutorRegistry[subjectSlug] ?? tutorRegistry.mathematics;

  return selectedTutors.map((tutor) => ({
    ...tutor,
    curriculum: normalizedCurriculum,
    subject: tutor.subject || subjectTitle,
  }));
}

export type { CourseTutorProfile } from "./course-tutor-types";
