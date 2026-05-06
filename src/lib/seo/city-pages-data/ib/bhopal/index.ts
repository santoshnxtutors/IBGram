import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "BHO001",
  cityName: "Bhopal",
  citySlug: "bhopal",
  stateName: "Madhya Pradesh",
  latitude: 23.2599,
  longitude: 77.4126,
  priorityScore: 7.5,
  demandScore: 68,
  demandBand: "medium",
  contentUniquenessScore: 86,
  academicEnvironment:
    "Bhopal's international curriculum demand is focused and growing, with families often seeking strong online access to specialist IB support alongside local academic structure.",
  parentContext:
    "Parents may not always find the exact DP specialist locally, so IB Gram reviews both home and online options before recommending a route.",
  tutoringPracticality:
    "Home tutoring can be reviewed in Arera Colony, Shahpura and Kolar Road clusters, while online tutoring is often better for HL depth and IA review.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, science, English, Economics and mock exam planning as common needs.",
  premiumAreas: [
    { name: "Arera Colony", slug: "arera-colony", description: "Premium residential area for English, MYP and DP tutoring requests with home feasibility review.", landmarks: ["E-7", "Habibganj"] },
    { name: "Kolar Road", slug: "kolar-road", description: "Large residential corridor where hybrid tutoring can help families maintain consistency.", landmarks: ["Danish Kunj", "Bairagarh Chichli"] },
    { name: "MP Nagar", slug: "mp-nagar", description: "Central area for structured academic planning, revision support and online DP specialist access.", landmarks: ["Zone I", "Zone II"] },
    { name: "Shahpura", slug: "shahpura", description: "Established pocket for PYP, MYP, Math and English support near central Bhopal.", landmarks: ["Bittan Market", "Manisha Market"] },
    { name: "Hoshangabad Road", slug: "hoshangabad-road", description: "Growing corridor where online and hybrid support can reduce travel friction for DP subjects.", landmarks: ["Baghmugalia", "Misrod"] },
  ],
  nearbyAreas: ["Bittan Market", "Danish Kunj", "Misrod", "Habibganj", "Bairagarh", "Ayodhya Bypass", "Bawadia Kalan"],
  nearbyCities: [
    { cityName: "Indore", citySlug: "indore", description: "Indore is the closest comparison city for Madhya Pradesh IB tutoring." },
    { cityName: "Nagpur", citySlug: "nagpur", description: "Nagpur is useful for central India online support comparisons." },
    { cityName: "Ahmedabad", citySlug: "ahmedabad", description: "Ahmedabad offers a wider western India specialist comparison." },
  ],
  schoolClusters: [
    { name: "Arera and Shahpura learner cluster", slug: "arera-shahpura-learner-cluster", area: "Arera Colony, Shahpura and Bittan Market", description: "Families often need English, MYP and study planning support with clear progress updates.", typicalNeeds: ["English A", "MYP support", "Parent updates"] },
    { name: "Kolar Road residential school families", slug: "kolar-road-residential-school-families", area: "Kolar Road and Danish Kunj", description: "Hybrid tutoring can help students combine local structure with online subject specialists.", typicalNeeds: ["Hybrid support", "Chemistry", "Math AI HL"] },
    { name: "Hoshangabad Road academic corridor", slug: "hoshangabad-road-academic-corridor", area: "Hoshangabad Road and Misrod", description: "Online DP support is useful for HL subjects, IA review and exam-season continuity.", typicalNeeds: ["Online DP", "Physics", "IA planning"] },
  ],
  schoolNeeds: [
    "Availability-aware recommendations for a smaller IB tutoring market.",
    "Online DP specialist reach for HL subjects and assessment support.",
    "MYP and English writing support with criteria and evidence routines.",
    "Weekly revision plans that protect school deadlines.",
  ],
  strongSubjects: ["English A", "Math AI HL", "Chemistry"],
  moderateSubjects: ["Math AA HL", "Physics", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Bhopal is reviewed by level and whether online specialist tutoring would be more suitable.",
    science: "Physics, Chemistry and Biology support focuses on concepts, data response and timed exam questions.",
    humanities: "Economics, Business Management and Psychology tutoring can help students structure essays, examples and diagrams.",
    language: "English A, English B, Hindi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Bhopal parents often ask for honest guidance on local versus online tutor fit.",
    "Online lessons can be stronger for DP subjects that need exact HL or SL experience.",
    "MYP students often need help building criteria-aware habits before DP.",
  ],
  averageMatchingTime: "Availability-led after local market fit review",
} satisfies AdditionalCityConfig;

export const bhopalCityPage = buildAdditionalIndianIbCityPage(config);
