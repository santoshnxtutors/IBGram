import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "NVM001",
  cityName: "Navi Mumbai",
  citySlug: "navi-mumbai",
  stateName: "Maharashtra",
  latitude: 19.033,
  longitude: 73.0297,
  priorityScore: 8.5,
  demandScore: 80,
  demandBand: "high",
  contentUniquenessScore: 90,
  academicEnvironment:
    "Navi Mumbai's international curriculum demand sits between Mumbai's specialist tutor market and local school corridors across Vashi, Nerul, Kharghar, Seawoods and Belapur.",
  parentContext:
    "Families often need mode guidance because a strong tutor may be in Mumbai, Thane or online while the student's school and home routine is Navi Mumbai based.",
  tutoringPracticality:
    "Home tutoring can work inside Vashi, Nerul or Kharghar clusters, while online and hybrid lessons help students access stronger DP specialists across the Mumbai region.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, Physics, Chemistry, Economics, English and IA planning in demand.",
  premiumAreas: [
    { name: "Vashi", slug: "vashi", description: "Central Navi Mumbai area for Math, science, English and structured IB tutoring requests.", landmarks: ["Sector 17", "Palm Beach Road"] },
    { name: "Nerul", slug: "nerul", description: "Practical residential and school corridor where families often ask for MYP support and hybrid DP tutoring.", landmarks: ["Seawoods", "Palm Beach Road"] },
    { name: "Kharghar", slug: "kharghar", description: "High-demand area for DP Math, sciences and online specialist access across the Mumbai region.", landmarks: ["Central Park", "Sector 35"] },
    { name: "Seawoods", slug: "seawoods", description: "Premium residential pocket where home tutoring and online backup can work well together.", landmarks: ["NRI Complex", "Nerul"] },
    { name: "Belapur", slug: "belapur", description: "Useful CBD-side catchment for English, Economics, study planning and exam revision support.", landmarks: ["CBD Belapur", "Palm Beach Road"] },
  ],
  nearbyAreas: ["Palm Beach Road", "Airoli", "Sanpada", "Kopar Khairane", "Ulwe", "CBD Belapur", "NRI Complex"],
  nearbyCities: [
    { cityName: "Mumbai", citySlug: "mumbai", description: "Mumbai is the closest major market for DP specialist availability." },
    { cityName: "Thane", citySlug: "thane", description: "Thane is relevant for Mumbai-region hybrid tutoring comparisons." },
    { cityName: "Pune", citySlug: "pune", description: "Pune is useful for Maharashtra families comparing IB support options." },
  ],
  schoolClusters: [
    { name: "Vashi and Nerul learner cluster", slug: "vashi-nerul-learner-cluster", area: "Vashi, Nerul and Palm Beach Road", description: "Families often need Math, English and MYP support with practical home and hybrid scheduling.", typicalNeeds: ["Math AI HL", "English A", "MYP support"] },
    { name: "Kharghar international school corridor", slug: "kharghar-international-school-corridor", area: "Kharghar and CBD Belapur", description: "Requests frequently involve DP Math, Physics, Chemistry and online specialist support.", typicalNeeds: ["Math AA HL", "Physics", "Chemistry"] },
    { name: "Seawoods and Belapur premium families", slug: "seawoods-belapur-premium-families", area: "Seawoods, NRI Complex and Belapur", description: "Hybrid support helps families combine local accountability with Mumbai-region subject depth.", typicalNeeds: ["Hybrid tutoring", "Economics", "IA planning"] },
  ],
  schoolNeeds: [
    "Mumbai-region tutor matching across Navi Mumbai, Mumbai and Thane.",
    "Home tutoring reviewed by node, travel time and subject fit.",
    "DP Math and science support with IA and exam practice.",
    "MYP criteria and English writing support with parent updates.",
  ],
  strongSubjects: ["Math AA HL", "Math AI HL", "Physics", "Chemistry"],
  moderateSubjects: ["Biology", "Economics", "English A"],
  subjectDemand: {
    math: "Math AA HL, Math AI HL and SL pathways are common in Navi Mumbai, especially for STEM, finance and overseas university planning.",
    science: "Physics, Chemistry and Biology support focuses on concepts, data response, lab-style thinking and timed IB questions.",
    humanities: "Economics, Business Management and Psychology support can strengthen examples, diagrams and essay structure.",
    language: "English A, English B, Hindi, Marathi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Navi Mumbai parents often ask for Mumbai-region tutor access while keeping the student's weekly routine manageable.",
    "Hybrid tutoring is helpful when DP specialists are not in the same node as the student.",
    "MYP learners often need support translating broad classroom tasks into criteria-ready work.",
  ],
  averageMatchingTime: "Availability-led after Mumbai-region mode review",
} satisfies AdditionalCityConfig;

export const naviMumbaiCityPage = buildAdditionalIndianIbCityPage(config);
