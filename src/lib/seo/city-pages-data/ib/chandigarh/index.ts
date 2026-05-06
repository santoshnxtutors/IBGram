import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "CHD001",
  cityName: "Chandigarh",
  citySlug: "chandigarh",
  stateName: "Chandigarh",
  latitude: 30.7333,
  longitude: 76.7794,
  priorityScore: 8.3,
  demandScore: 77,
  demandBand: "medium",
  contentUniquenessScore: 88,
  academicEnvironment:
    "Chandigarh's international school demand extends into Mohali and Panchkula, so families often think in terms of the wider tricity rather than a single neighbourhood.",
  parentContext:
    "Parents usually want tutors who can combine polished communication with online reach for DP subjects that may not have a deep local pool.",
  tutoringPracticality:
    "Home tutoring is practical across selected sectors and tricity pockets, while online and hybrid support can connect students to stronger HL specialists.",
  localExamFocus:
    "May 2026 and November 2026 DP preparation, with support for Math, sciences, English writing, Economics structure and IA planning.",
  premiumAreas: [
    { name: "Sector 8", slug: "sector-8", description: "Central premium area where families often request home feasibility, English support and structured DP planning.", landmarks: ["Sector 9", "Madhya Marg"] },
    { name: "Sector 9", slug: "sector-9", description: "Established residential pocket for PYP, MYP and DP tutoring with practical access to nearby sectors.", landmarks: ["Sector 10", "Rose Garden"] },
    { name: "Sector 15", slug: "sector-15", description: "Useful area for Math and science support, especially where students need steady weekly accountability.", landmarks: ["Panjab University", "Sector 11"] },
    { name: "Mohali", slug: "mohali", description: "Important tricity catchment where hybrid tutoring helps families balance school travel and subject specialist access.", landmarks: ["SAS Nagar", "Airport Road"] },
    { name: "Panchkula", slug: "panchkula", description: "Nearby residential hub where online support can supplement home tutoring for DP HL and IA needs.", landmarks: ["Sector 5", "Zirakpur"] },
  ],
  nearbyAreas: ["Sector 10", "Sector 11", "Sector 17", "Zirakpur", "New Chandigarh", "Kharar", "Aerocity"],
  nearbyCities: [
    { cityName: "Ludhiana", citySlug: "ludhiana", description: "Ludhiana is relevant for Punjab families comparing IB and international tutoring options." },
    { cityName: "Dehradun", citySlug: "dehradun", description: "Dehradun families often compare boarding-school aligned online support with Chandigarh." },
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi can provide a wider online DP tutor pool for Chandigarh families." },
  ],
  schoolClusters: [
    { name: "Chandigarh sector school families", slug: "chandigarh-sector-school-families", area: "Sectors 8, 9, 15 and nearby", description: "Families often need consistent weekly support, English writing feedback and DP Math planning.", typicalNeeds: ["English A", "Math AA HL", "Study planning"] },
    { name: "Mohali international learner cluster", slug: "mohali-international-learner-cluster", area: "Mohali, Aerocity and Kharar", description: "Hybrid tutoring is helpful when students need subject depth without adding tricity travel pressure.", typicalNeeds: ["Physics", "Chemistry", "Hybrid support"] },
    { name: "Panchkula and Zirakpur school corridor", slug: "panchkula-zirakpur-school-corridor", area: "Panchkula and Zirakpur", description: "Requests often involve online DP specialists, MYP criteria and exam revision planning.", typicalNeeds: ["MYP criteria", "Economics", "Online DP"] },
  ],
  schoolNeeds: [
    "Tricity-aware mode planning across Chandigarh, Mohali and Panchkula.",
    "Online access to DP specialists for HL subjects and IA review.",
    "MYP assignment support that explains criteria and reflection.",
    "Parent updates that are clear without guaranteeing results.",
  ],
  strongSubjects: ["Math AA HL", "English A", "Physics"],
  moderateSubjects: ["Math AI HL", "Chemistry", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI tutoring in Chandigarh is reviewed by level, school pace and whether the student needs local or online specialist support.",
    science: "Physics, Chemistry and Biology support is available subject to fit, with focus on data questions, concepts and timed exam practice.",
    humanities: "Economics, Business Management and Psychology tutoring can support diagrams, essay plans and real-world examples.",
    language: "English A, English B, Hindi, Punjabi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Chandigarh parents often ask for tricity-aware support that works across sector, Mohali and Panchkula schedules.",
    "Online tutoring is useful when DP students need a specialist beyond the immediate local pool.",
    "MYP learners commonly need clearer systems for criteria, evidence and reflection.",
  ],
  averageMatchingTime: "Availability-led after tricity mode review",
} satisfies AdditionalCityConfig;

export const chandigarhCityPage = buildAdditionalIndianIbCityPage(config);
