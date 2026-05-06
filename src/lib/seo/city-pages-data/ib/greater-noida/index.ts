import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "GNO001",
  cityName: "Greater Noida",
  citySlug: "greater-noida",
  stateName: "Uttar Pradesh",
  latitude: 28.4744,
  longitude: 77.504,
  priorityScore: 8.2,
  demandScore: 76,
  demandBand: "medium",
  contentUniquenessScore: 89,
  academicEnvironment:
    "Greater Noida's IB tutoring demand is connected to expressway school corridors, premium societies and families comparing Noida, Delhi and Ghaziabad support options.",
  parentContext:
    "Parents often need tutoring that understands long school routes, society-based schedules and the difference between generic tuition and IB assessment support.",
  tutoringPracticality:
    "Home tutoring may be feasible within society clusters, while online and hybrid support often give DP students stronger subject depth across NCR.",
  localExamFocus:
    "May 2026 and November 2026 DP revision, with Math, Physics, Chemistry, Economics, English and IA support as common needs.",
  premiumAreas: [
    { name: "Jaypee Greens", slug: "jaypee-greens", description: "Premium area where families often ask for home tutoring review and online DP specialist access.", landmarks: ["Alpha", "Pari Chowk"] },
    { name: "Omega", slug: "omega", description: "Residential sector cluster for MYP foundations, Math support and hybrid tutoring around school routes.", landmarks: ["Pari Chowk", "Knowledge Park"] },
    { name: "Pari Chowk", slug: "pari-chowk", description: "Central Greater Noida node where families compare local, Noida and online tutoring options.", landmarks: ["Knowledge Park", "Alpha"] },
    { name: "Noida Extension", slug: "noida-extension", description: "Large residential corridor where online support can reduce travel pressure and widen specialist availability.", landmarks: ["Gaur City", "Techzone 4"] },
    { name: "Techzone", slug: "techzone", description: "Growing school and residential area for Math, science and exam-season support.", landmarks: ["Knowledge Park", "Yamuna Expressway"] },
  ],
  nearbyAreas: ["Alpha", "Beta", "Gamma", "Knowledge Park", "Gaur City", "Yamuna Expressway", "Sector 150"],
  nearbyCities: [
    { cityName: "Noida", citySlug: "noida", description: "Noida is the closest priority city for IB tutor comparisons." },
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi provides a wider NCR specialist tutor pool." },
    { cityName: "Ghaziabad", citySlug: "ghaziabad", description: "Ghaziabad is useful for nearby NCR tutoring comparisons." },
  ],
  schoolClusters: [
    { name: "Expressway international learner corridor", slug: "expressway-international-learner-corridor", area: "Pari Chowk, Knowledge Park and Yamuna Expressway", description: "Families often need DP subject support that can work around school routes and society-based schedules.", typicalNeeds: ["Math AA HL", "Physics", "Hybrid tutoring"] },
    { name: "Noida Extension school families", slug: "noida-extension-school-families", area: "Noida Extension and Gaur City", description: "Online tutoring can be especially useful where travel time makes frequent in-person specialist lessons difficult.", typicalNeeds: ["Online DP", "Chemistry", "IA planning"] },
    { name: "Jaypee Greens and Omega learner cluster", slug: "jaypee-greens-omega-learner-cluster", area: "Jaypee Greens, Omega and Alpha", description: "Requests often include MYP support, English writing and structured revision before assessments.", typicalNeeds: ["MYP criteria", "English A", "Revision"] },
  ],
  schoolNeeds: [
    "NCR-aware tutor matching across Greater Noida, Noida, Delhi and Ghaziabad.",
    "Home tutoring reviewed by society access, timing and subject fit.",
    "Online DP HL support where the best specialist is outside the immediate corridor.",
    "MYP criteria and project support for students in expressway school routes.",
  ],
  strongSubjects: ["Math AA HL", "Physics", "Chemistry"],
  moderateSubjects: ["Math AI HL", "Biology", "Economics", "English A"],
  subjectDemand: {
    math: "Math AA and Math AI support in Greater Noida is reviewed across local and wider NCR specialist availability.",
    science: "Physics, Chemistry and Biology tutoring focuses on concept clarity, data handling and exam-style practice.",
    humanities: "Economics, Business Management and Psychology support can improve diagrams, examples and essay structure.",
    language: "English A, English B, Hindi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Greater Noida parents often ask for tutoring that respects expressway travel and society schedules.",
    "Hybrid support helps students combine local accountability with wider NCR subject depth.",
    "DP students often need structured revision and IA planning before deadlines become urgent.",
  ],
  averageMatchingTime: "Availability-led after expressway and NCR fit review",
} satisfies AdditionalCityConfig;

export const greaterNoidaCityPage = buildAdditionalIndianIbCityPage(config);
