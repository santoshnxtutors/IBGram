import type { GurgaonLocalPageType } from "./gurgaon.types";

export const GURGAON_IB_PROGRAMMES = ["PYP", "MYP", "DP"] as const;

export const GURGAON_IB_SUBJECTS = ["Math AA", "Math AI", "Physics", "Chemistry", "Biology", "Economics", "English"] as const;

export const GURGAON_IGCSE_SUBJECTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Economics",
  "Business Studies",
] as const;

export function buildGurgaonKeywords(type: GurgaonLocalPageType, placeName: string, parentAreaName?: string): {
  primaryKeyword: string;
  secondaryKeywords: string[];
} {
  const nearOrIn = type === "society" || type === "area" ? "near" : "in";
  const primaryKeyword = `IB tutors ${nearOrIn} ${placeName} Gurugram`;
  const localQualifier = parentAreaName ? ` near ${parentAreaName}` : "";

  return {
    primaryKeyword,
    secondaryKeywords: [
      `IB home tutor ${placeName} Gurgaon`,
      `IB DP tutor ${placeName} Gurugram`,
      `IB Math AA HL tutor ${placeName}`,
      `IB Physics tutor ${placeName}${localQualifier}`,
      `IB online tutors in Gurugram`,
    ],
  };
}
