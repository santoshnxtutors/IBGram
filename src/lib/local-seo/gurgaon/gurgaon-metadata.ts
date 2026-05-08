import type { GurgaonLocalPageType } from "./gurgaon.types";

export function buildGurgaonLocalMetadata(input: {
  pageType: GurgaonLocalPageType;
  placeName: string;
  primaryKeyword: string;
}) {
  const { pageType, placeName } = input;
  if (pageType === "area") {
    return {
      metaTitle: `IB Tutors near ${placeName} Gurugram | PYP, MYP & DP Support`,
      metaDescription: `Find IB tutors near ${placeName} Gurugram for PYP, MYP and DP subjects with home, online and hybrid support reviewed locally.`,
      h1: `IB Tutors near ${placeName} Gurugram for PYP, MYP and DP Students`,
      breadcrumbTitle: `IB Tutors near ${placeName}`,
      ogTitle: `IB Tutors near ${placeName} Gurugram | IB Gram`,
      ogDescription: `Local IB tutor matching near ${placeName} for Math AA, sciences, English, Economics, PYP, MYP and DP.`,
    };
  }
  if (pageType === "sector") {
    return {
      metaTitle: `IB Tutors in ${placeName} Gurugram | IB Home & Online Tutors`,
      metaDescription: `Find IB tutors in ${placeName} Gurugram for PYP, MYP and DP subjects including Math AA, Physics, Chemistry and Economics.`,
      h1: `IB Tutors in ${placeName} Gurugram for Home, Online and Hybrid Support`,
      breadcrumbTitle: `IB Tutors in ${placeName}`,
      ogTitle: `IB Tutors in ${placeName} Gurugram | IB Gram`,
      ogDescription: `${placeName} IB tutoring support with locality-first matching, city fallback and online specialist options.`,
    };
  }

  return {
    metaTitle: `IB Tutors near ${placeName} Gurugram | IB Gram`,
    metaDescription: `Find IB tutors near ${placeName} Gurugram for PYP, MYP and DP students. Availability depends on subject, schedule and location.`,
    h1: `IB Tutors near ${placeName} Gurugram for International School Students`,
    breadcrumbTitle: `IB Tutors near ${placeName}`,
    ogTitle: `IB Tutors near ${placeName} Gurugram | IB Gram`,
    ogDescription: `IB tutor matching for families in and around ${placeName}, with safe home, online and hybrid availability review.`,
  };
}
