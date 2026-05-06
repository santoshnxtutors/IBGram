import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "LDH001",
  cityName: "Ludhiana",
  citySlug: "ludhiana",
  stateName: "Punjab",
  latitude: 30.901,
  longitude: 75.8573,
  priorityScore: 7.5,
  demandScore: 68,
  demandBand: "medium",
  contentUniquenessScore: 86,
  academicEnvironment:
    "Ludhiana's premium academic demand is connected to entrepreneurial families, overseas education plans and a need for international curriculum support beyond generic tuition.",
  parentContext:
    "Parents often need clarity on local availability, Chandigarh comparisons and online specialist support for DP subjects.",
  tutoringPracticality:
    "Home tutoring can be reviewed around Sarabha Nagar, Model Town and Pakhowal Road, while online support is useful for DP HL, IA and exam preparation.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, English, Economics, sciences and study planning reviewed early.",
  premiumAreas: [
    { name: "Sarabha Nagar", slug: "sarabha-nagar", description: "Premium residential area where families often request English, Math and structured academic planning.", landmarks: ["Ferozepur Road", "Gurdev Nagar"] },
    { name: "Model Town", slug: "model-town", description: "Established area for home tutoring review, MYP foundations and parent-visible progress.", landmarks: ["Dugri", "Atam Nagar"] },
    { name: "Pakhowal Road", slug: "pakhowal-road", description: "Growing premium corridor where hybrid tutoring can connect students to Chandigarh and online specialists.", landmarks: ["South City", "Barewal"] },
    { name: "Civil Lines", slug: "civil-lines", description: "Central Ludhiana pocket for English, Economics, PYP routines and exam planning.", landmarks: ["Mall Road", "Rakh Bagh"] },
    { name: "South City", slug: "south-city", description: "Residential area where online DP support can complement local accountability and reduce travel friction.", landmarks: ["Ayali Road", "Pakhowal Road"] },
  ],
  nearbyAreas: ["Ferozepur Road", "Dugri", "Gurdev Nagar", "Ayali Road", "Barewal", "Atam Nagar", "BRS Nagar"],
  nearbyCities: [
    { cityName: "Chandigarh", citySlug: "chandigarh", description: "Chandigarh is the closest comparison city for tricity and Punjab IB support." },
    { cityName: "Dehradun", citySlug: "dehradun", description: "Dehradun is relevant for North India boarding-school aligned tutoring comparisons." },
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi provides a wider online DP specialist pool." },
  ],
  schoolClusters: [
    { name: "Sarabha Nagar premium learner cluster", slug: "sarabha-nagar-premium-learner-cluster", area: "Sarabha Nagar and Ferozepur Road", description: "Families often need Math, English and study planning for overseas-oriented academic goals.", typicalNeeds: ["Math AI HL", "English A", "Study planning"] },
    { name: "Model Town and Civil Lines school families", slug: "model-town-civil-lines-school-families", area: "Model Town, Civil Lines and Dugri", description: "Requests often involve PYP routines, MYP criteria and parent updates.", typicalNeeds: ["PYP routines", "MYP criteria", "Parent updates"] },
    { name: "Pakhowal Road and South City corridor", slug: "pakhowal-road-south-city-corridor", area: "Pakhowal Road and South City", description: "Hybrid tutoring helps students combine local structure with online DP specialist reach.", typicalNeeds: ["Hybrid tutoring", "Chemistry", "IA planning"] },
  ],
  schoolNeeds: [
    "Honest availability guidance across Ludhiana, Chandigarh and online specialist options.",
    "DP Math, English and Economics support for overseas education goals.",
    "MYP and PYP routines for students adapting to international expectations.",
    "Academic honesty guidance for IA, EE and school submissions.",
  ],
  strongSubjects: ["English A", "Math AI HL", "Economics"],
  moderateSubjects: ["Math AA HL", "Physics", "Chemistry", "Biology"],
  subjectDemand: {
    math: "Math AA and Math AI support in Ludhiana is reviewed by level, availability and whether online specialist access is needed.",
    science: "Physics, Chemistry and Biology support focuses on concept clarity, data response and DP exam practice.",
    humanities: "Economics, Business Management and Psychology tutoring can help students build examples, diagrams and structured essays.",
    language: "English A, English B, Hindi, Punjabi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Ludhiana parents often ask for tutoring that connects academic performance with overseas education plans.",
    "Online DP support is useful when a subject specialist is not locally available at the required level.",
    "MYP students often need support with criteria and reflection before DP workload begins.",
  ],
  averageMatchingTime: "Availability-led after Ludhiana and Chandigarh fit review",
} satisfies AdditionalCityConfig;

export const ludhianaCityPage = buildAdditionalIndianIbCityPage(config);
