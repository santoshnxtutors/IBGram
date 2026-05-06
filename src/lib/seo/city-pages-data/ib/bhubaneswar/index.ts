import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "BBI001",
  cityName: "Bhubaneswar",
  citySlug: "bhubaneswar",
  stateName: "Odisha",
  latitude: 20.2961,
  longitude: 85.8245,
  priorityScore: 7.5,
  demandScore: 67,
  demandBand: "medium",
  contentUniquenessScore: 86,
  academicEnvironment:
    "Bhubaneswar's international curriculum demand is developing around education-focused families, globally mobile professionals and students preparing for broader university options.",
  parentContext:
    "Parents often need careful guidance on online versus local tutoring because DP specialist availability can vary by subject and timing.",
  tutoringPracticality:
    "Home tutoring can be reviewed in Patia, Kalinga Nagar and central pockets, while online support is often the best way to access exact IB DP expertise.",
  localExamFocus:
    "May 2026 and November 2026 DP preparation, with Math, science, English, Economics and IA planning supported through local or online modes.",
  premiumAreas: [
    { name: "Patia", slug: "patia", description: "Major residential and education corridor where families often request Math, science and online DP support.", landmarks: ["KIIT area", "Infocity"] },
    { name: "Kalinga Nagar", slug: "kalinga-nagar", description: "Growing residential pocket for hybrid tutoring, MYP foundations and exam planning.", landmarks: ["Khandagiri", "AIIMS Road"] },
    { name: "Nayapalli", slug: "nayapalli", description: "Central area where home tutoring review and structured weekly academic support may be practical.", landmarks: ["IRC Village", "CRP Square"] },
    { name: "Chandrasekharpur", slug: "chandrasekharpur", description: "Important residential and school-side corridor for Math, English and online specialist tutoring.", landmarks: ["Damana", "Niladri Vihar"] },
    { name: "Saheed Nagar", slug: "saheed-nagar", description: "Central premium pocket for English, Economics, study planning and parent-visible progress.", landmarks: ["Vani Vihar", "Janpath"] },
  ],
  nearbyAreas: ["Infocity", "KIIT area", "Khandagiri", "IRC Village", "Damana", "Niladri Vihar", "Jaydev Vihar"],
  nearbyCities: [
    { cityName: "Kolkata", citySlug: "kolkata", description: "Kolkata is a relevant eastern India comparison for IB tutoring support." },
    { cityName: "Visakhapatnam", citySlug: "visakhapatnam", description: "Visakhapatnam is useful for east-coast online tutoring comparisons." },
    { cityName: "Hyderabad", citySlug: "hyderabad", description: "Hyderabad provides a larger online specialist market for DP subjects." },
  ],
  schoolClusters: [
    { name: "Patia and Infocity learner cluster", slug: "patia-infocity-learner-cluster", area: "Patia, Infocity and Chandrasekharpur", description: "Families often need Math, science and online DP support around education and technology corridors.", typicalNeeds: ["Math AA HL", "Chemistry", "Online DP"] },
    { name: "Kalinga Nagar residential school families", slug: "kalinga-nagar-residential-school-families", area: "Kalinga Nagar and Khandagiri", description: "Hybrid tutoring can help students maintain structure while accessing stronger subject specialists.", typicalNeeds: ["Hybrid tutoring", "Physics", "IA planning"] },
    { name: "Central Bhubaneswar academic corridor", slug: "central-bhubaneswar-academic-corridor", area: "Nayapalli, Saheed Nagar and Jaydev Vihar", description: "Requests often include English, Economics, MYP support and parent progress updates.", typicalNeeds: ["English A", "Economics", "MYP support"] },
  ],
  schoolNeeds: [
    "Online specialist access for DP HL subjects and IA review.",
    "Local home tutoring reviewed by area, timing and subject fit.",
    "MYP criteria, English writing and study planning support.",
    "Clear parent communication without fake school affiliation or guaranteed outcomes.",
  ],
  strongSubjects: ["Math AA HL", "English A", "Chemistry"],
  moderateSubjects: ["Math AI HL", "Physics", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Bhubaneswar is reviewed by level and whether online specialist access would be stronger.",
    science: "Physics, Chemistry and Biology support focuses on concept clarity, data response and exam-style application.",
    humanities: "Economics, Business Management and Psychology tutoring can improve examples, diagrams and structured answers.",
    language: "English A, English B, Hindi, Odia, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Bhubaneswar parents often ask for online IB specialists when a local subject match is not deep enough.",
    "Hybrid support helps students maintain accountability while accessing stronger DP teaching.",
    "MYP learners commonly need help making assignments criteria-aware and well organised.",
  ],
  averageMatchingTime: "Availability-led after local and online support review",
} satisfies AdditionalCityConfig;

export const bhubaneswarCityPage = buildAdditionalIndianIbCityPage(config);
