import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "KOC001",
  cityName: "Kochi",
  citySlug: "kochi",
  stateName: "Kerala",
  latitude: 9.9312,
  longitude: 76.2673,
  priorityScore: 8.0,
  demandScore: 73,
  demandBand: "medium",
  contentUniquenessScore: 88,
  academicEnvironment:
    "Kochi's international curriculum demand is influenced by globally mobile families, Gulf-return households and premium residential corridors across Kakkanad, Panampilly Nagar, Edappally and Aluva.",
  parentContext:
    "Parents often want academically careful support that works around school travel, family schedules and subject availability in a smaller but premium market.",
  tutoringPracticality:
    "Home tutoring can be reviewed within practical neighbourhood routes, while online tutoring is valuable for DP HL subjects and IA support where specialist availability is limited.",
  localExamFocus:
    "May 2026 and November 2026 DP preparation, with emphasis on Math, sciences, English writing, Economics and academic planning.",
  premiumAreas: [
    { name: "Kakkanad", slug: "kakkanad", description: "Major residential and technology corridor where families often request Math, science and hybrid IB tutoring.", landmarks: ["Infopark", "SmartCity"] },
    { name: "Panampilly Nagar", slug: "panampilly-nagar", description: "Premium central area where home tutoring may work for younger students and structured weekly support.", landmarks: ["Kadavanthra", "Ravipuram"] },
    { name: "Edappally", slug: "edappally", description: "Practical school and residential catchment for PYP, MYP, Math and online DP specialist access.", landmarks: ["Lulu Mall", "Palarivattom"] },
    { name: "Aluva", slug: "aluva", description: "Important northern corridor where online support can reduce travel pressure for specialist DP subjects.", landmarks: ["Airport Road", "Kalamassery"] },
    { name: "Marine Drive", slug: "marine-drive", description: "Central premium pocket for families who prefer polished communication, English support and planning-led tutoring.", landmarks: ["Ernakulam", "High Court Junction"] },
  ],
  nearbyAreas: ["Kadavanthra", "Palarivattom", "Kalamassery", "Thevara", "Vyttila", "Thrippunithura", "Fort Kochi"],
  nearbyCities: [
    { cityName: "Coimbatore", citySlug: "coimbatore", description: "Coimbatore is relevant for South India families comparing international tutoring support." },
    { cityName: "Chennai", citySlug: "chennai", description: "Chennai offers a larger comparison market for online IB specialists." },
    { cityName: "Bangalore", citySlug: "bangalore", description: "Bangalore is useful for DP specialist availability across South India." },
  ],
  schoolClusters: [
    { name: "Kakkanad international learner cluster", slug: "kakkanad-international-learner-cluster", area: "Kakkanad, Infopark and SmartCity", description: "Families often ask for Math, sciences and hybrid tutoring that can fit busy technology-corridor schedules.", typicalNeeds: ["Math AI HL", "Chemistry", "Hybrid tutoring"] },
    { name: "Central Kochi premium school families", slug: "central-kochi-premium-school-families", area: "Panampilly Nagar, Marine Drive and Kadavanthra", description: "Requests often focus on English writing, Economics structure, PYP routines and parent updates.", typicalNeeds: ["English A", "Economics", "PYP routines"] },
    { name: "Edappally and Aluva school routes", slug: "edappally-aluva-school-routes", area: "Edappally, Kalamassery and Aluva", description: "Online support is often practical for DP HL subjects, IA guidance and exam-season continuity.", typicalNeeds: ["Online DP", "Physics", "IA planning"] },
  ],
  schoolNeeds: [
    "Subject matching that accounts for a premium but smaller local IB tutoring pool.",
    "Online access to DP specialists for HL subjects and IA review.",
    "PYP and MYP support that builds confidence without rote learning.",
    "Clear parent communication around progress, deadlines and realistic expectations.",
  ],
  strongSubjects: ["Math AI HL", "English A", "Chemistry"],
  moderateSubjects: ["Math AA HL", "Physics", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Kochi is reviewed by level, student pathway and whether online specialist help would be stronger.",
    science: "Physics, Chemistry and Biology support focuses on concepts, data response and DP exam application.",
    humanities: "Economics, Business Management and Psychology tutoring can help with diagrams, examples and structured writing.",
    language: "English A, English B, Hindi, Malayalam, French and other languages are reviewed based on availability.",
  },
  proofThemes: [
    "Kochi parents often ask for flexible tutoring that respects school travel and family schedules.",
    "Online specialist support is useful for DP subjects where the best match may not be in the immediate city area.",
    "PYP and MYP students often benefit from structured but gentle academic routines.",
  ],
  averageMatchingTime: "Availability-led after city and mode review",
} satisfies AdditionalCityConfig;

export const kochiCityPage = buildAdditionalIndianIbCityPage(config);
