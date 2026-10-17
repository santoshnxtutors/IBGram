import { IGCSE_SUBJECT_GROUP_LABELS, igcseSubjectCatalog } from "@/lib/igcse-subjects/catalog";

export type SubjectGroup = { label: string; options: string[] };

/**
 * IB subjects a tutor can pick, grouped the way the IB groups them. Names follow the
 * site's Subject table ("Math AA", "Math AI") so new profiles match existing pages.
 */
export const IB_SUBJECT_GROUPS: SubjectGroup[] = [
  { label: "DP Mathematics", options: ["Math AA", "Math AI"] },
  { label: "DP Sciences", options: ["Physics", "Chemistry", "Biology", "Computer Science", "Design Technology", "Sports, Exercise and Health Science", "Environmental Systems and Societies"] },
  { label: "DP Individuals & Societies", options: ["Economics", "Business Management", "Psychology", "History", "Geography", "Global Politics", "Philosophy", "Digital Society"] },
  { label: "DP Language & Literature", options: ["English A: Language and Literature", "English A: Literature", "Hindi A"] },
  { label: "DP Language Acquisition", options: ["English B", "French B", "Spanish B", "German B", "Hindi B", "Mandarin B", "Arabic B", "French ab initio", "Spanish ab initio", "German ab initio", "Mandarin ab initio"] },
  { label: "DP Arts", options: ["Visual Arts", "Music", "Theatre", "Film"] },
  { label: "DP Core", options: ["Theory of Knowledge (TOK)", "Extended Essay (EE)", "CAS"] },
  { label: "MYP", options: ["MYP Mathematics", "MYP Sciences", "MYP Language and Literature", "MYP Language Acquisition", "MYP Individuals and Societies", "MYP Design", "MYP Arts", "MYP Personal Project"] },
  { label: "PYP", options: ["PYP All Subjects", "PYP Mathematics", "PYP Language", "PYP Units of Inquiry"] },
];

/** IGCSE subjects from the same catalog that powers the /igcse/subject/ pages. */
export const IGCSE_SUBJECT_GROUPS: SubjectGroup[] = Object.entries(IGCSE_SUBJECT_GROUP_LABELS).map(([key, label]) => ({
  label,
  options: igcseSubjectCatalog.filter((s) => s.group === key).map((s) => s.shortLabel),
}));
