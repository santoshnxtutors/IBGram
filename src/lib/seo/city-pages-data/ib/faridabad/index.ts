import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "FBD001",
  cityName: "Faridabad",
  citySlug: "faridabad",
  stateName: "Haryana",
  latitude: 28.4089,
  longitude: 77.3178,
  priorityScore: 8.1,
  demandScore: 74,
  demandBand: "medium",
  contentUniquenessScore: 88,
  academicEnvironment:
    "Faridabad's IB tutoring demand is closely connected to the wider NCR ecosystem, with families comparing local home support against Delhi, Gurugram and Noida specialist availability.",
  parentContext:
    "Parents often need help deciding whether a Faridabad home tutor is practical or whether an online NCR specialist gives stronger DP subject depth.",
  tutoringPracticality:
    "Home tutoring may be feasible in compact sectors and Surajkund-side pockets, while online and hybrid tutoring is often useful for DP HL, IA and exam support.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, Physics, Chemistry, Economics and English writing as common requests.",
  premiumAreas: [
    { name: "Sector 15", slug: "sector-15", description: "Established residential area for home tutoring review, MYP support and DP subject planning.", landmarks: ["Sector 16", "Ajronda"] },
    { name: "Sector 21", slug: "sector-21", description: "Premium pocket where families often ask for Math, science and hybrid tutoring with NCR specialist reach.", landmarks: ["Ankhir", "Surajkund Road"] },
    { name: "Green Fields", slug: "green-fields", description: "Useful area for families comparing Faridabad home support with Delhi and Gurugram online specialists.", landmarks: ["Surajkund", "Badarpur Border"] },
    { name: "Neharpar", slug: "neharpar", description: "Growing residential corridor where online tutoring can reduce travel friction and support exam-season continuity.", landmarks: ["Greater Faridabad", "Sector 86"] },
    { name: "Surajkund", slug: "surajkund", description: "Premium edge-of-NCR area where hybrid support can connect students to Delhi and Gurugram IB tutors.", landmarks: ["Shooting Range Road", "Delhi border"] },
  ],
  nearbyAreas: ["Sector 16", "Sector 28", "Sector 31", "Greater Faridabad", "Badarpur Border", "Charmwood Village", "Ballabhgarh"],
  nearbyCities: [
    { cityName: "Gurugram", citySlug: "gurugram", description: "Gurugram is a key nearby city for premium IB tutor availability." },
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi provides a wide NCR pool for online and hybrid DP support." },
    { cityName: "Noida", citySlug: "noida", description: "Noida is useful for NCR families comparing city-wise IB support." },
  ],
  schoolClusters: [
    { name: "Central Faridabad learner cluster", slug: "central-faridabad-learner-cluster", area: "Sector 15, Sector 16 and Sector 21", description: "Families often need home tutoring review, MYP support and DP Math planning.", typicalNeeds: ["MYP support", "Math AA HL", "Home review"] },
    { name: "Green Fields and Surajkund NCR corridor", slug: "green-fields-surajkund-ncr-corridor", area: "Green Fields and Surajkund", description: "Hybrid support can connect students to Delhi and Gurugram specialists while preserving local accountability.", typicalNeeds: ["Hybrid tutoring", "Physics", "NCR specialists"] },
    { name: "Neharpar and Greater Faridabad school families", slug: "neharpar-greater-faridabad-school-families", area: "Neharpar and Greater Faridabad", description: "Online tutoring is often practical for DP HL subjects and IA review across new residential sectors.", typicalNeeds: ["Online DP", "Chemistry", "IA planning"] },
  ],
  schoolNeeds: [
    "NCR-aware matching across Faridabad, Delhi, Gurugram and Noida.",
    "Mode decisions based on travel feasibility and subject depth.",
    "DP Math and science tutoring with exam-focused practice.",
    "MYP and English support for criteria, writing and confidence.",
  ],
  strongSubjects: ["Math AA HL", "Physics", "Chemistry"],
  moderateSubjects: ["Math AI HL", "Biology", "Economics", "English A"],
  subjectDemand: {
    math: "Math AA and Math AI support in Faridabad is reviewed with NCR specialist availability in mind.",
    science: "Physics, Chemistry and Biology tutoring focuses on concepts, data response and timed IB questions.",
    humanities: "Economics, Business Management and Psychology support can help students structure answers and examples.",
    language: "English A, English B, Hindi, French and other languages are reviewed based on availability.",
  },
  proofThemes: [
    "Faridabad families often ask whether local home tutoring or an NCR online specialist will be stronger.",
    "Hybrid support is useful when a student needs in-person accountability but specialist DP teaching online.",
    "DP students commonly need structured revision plans before mocks and final papers.",
  ],
  averageMatchingTime: "Availability-led after NCR tutor fit review",
} satisfies AdditionalCityConfig;

export const faridabadCityPage = buildAdditionalIndianIbCityPage(config);
