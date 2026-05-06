import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "NAG001",
  cityName: "Nagpur",
  citySlug: "nagpur",
  stateName: "Maharashtra",
  latitude: 21.1458,
  longitude: 79.0882,
  priorityScore: 7.6,
  demandScore: 69,
  demandBand: "medium",
  contentUniquenessScore: 87,
  academicEnvironment:
    "Nagpur's international tutoring market is focused but growing, with families seeking structured support for global curriculum expectations and university readiness.",
  parentContext:
    "Parents often need clarity on local home tutoring versus online IB specialists, especially for DP HL subjects and IA support.",
  tutoringPracticality:
    "Home tutoring can be reviewed in Civil Lines, Dharampeth and Wardha Road pockets, while online tutoring often provides better specialist reach.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, science, English and Economics revision planned around school deadlines.",
  premiumAreas: [
    { name: "Civil Lines", slug: "civil-lines", description: "Central premium area where families often request structured support, English writing and parent updates.", landmarks: ["Sadar", "RBI Square"] },
    { name: "Dharampeth", slug: "dharampeth", description: "Established residential pocket for Math, science, MYP and home tutoring review.", landmarks: ["Shankar Nagar", "Ramdaspeth"] },
    { name: "Wardha Road", slug: "wardha-road", description: "Important school and residential corridor where hybrid tutoring helps reduce travel pressure.", landmarks: ["Manish Nagar", "Airport"] },
    { name: "Manish Nagar", slug: "manish-nagar", description: "Growing residential area for DP Math, Chemistry and online specialist support.", landmarks: ["Besa", "Somalwada"] },
    { name: "Koradi Road", slug: "koradi-road", description: "Northern residential corridor where online support can improve access to exact IB subject fit.", landmarks: ["Mankapur", "Zingabai Takli"] },
  ],
  nearbyAreas: ["Ramdaspeth", "Sadar", "Besa", "Somalwada", "Shankar Nagar", "Mankapur", "Pratap Nagar"],
  nearbyCities: [
    { cityName: "Bhopal", citySlug: "bhopal", description: "Bhopal is relevant for central India families comparing online support." },
    { cityName: "Pune", citySlug: "pune", description: "Pune offers a wider Maharashtra comparison for IB tutor availability." },
    { cityName: "Hyderabad", citySlug: "hyderabad", description: "Hyderabad provides another central-south comparison market for DP support." },
  ],
  schoolClusters: [
    { name: "Central Nagpur academic families", slug: "central-nagpur-academic-families", area: "Civil Lines, Dharampeth and Ramdaspeth", description: "Families often need English, MYP and DP planning with consistent communication.", typicalNeeds: ["English A", "MYP support", "DP planning"] },
    { name: "Wardha Road school corridor", slug: "wardha-road-school-corridor", area: "Wardha Road, Manish Nagar and Somalwada", description: "Requests often include Math, Chemistry and hybrid tutoring around school routes.", typicalNeeds: ["Math AA HL", "Chemistry", "Hybrid tutoring"] },
    { name: "North Nagpur learner cluster", slug: "north-nagpur-learner-cluster", area: "Koradi Road and Mankapur", description: "Online DP support helps students access specialist teaching beyond the immediate neighbourhood.", typicalNeeds: ["Online DP", "Physics", "IA planning"] },
  ],
  schoolNeeds: [
    "Availability checks for DP HL subject specialists in a focused market.",
    "Online tutoring when subject depth is more important than proximity.",
    "MYP and English support with criteria, evidence and writing feedback.",
    "Revision planning that respects school deadlines and mock schedules.",
  ],
  strongSubjects: ["Math AA HL", "Chemistry", "English A"],
  moderateSubjects: ["Math AI HL", "Physics", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Nagpur is reviewed by level, topic gaps and online specialist availability.",
    science: "Physics, Chemistry and Biology tutoring focuses on concept clarity, data questions and exam application.",
    humanities: "Economics, Business Management and Psychology support can strengthen diagrams, examples and essay planning.",
    language: "English A, English B, Hindi, Marathi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Nagpur parents often ask whether a nearby tutor or a stronger online IB specialist is the right choice.",
    "Hybrid support can preserve accountability while giving DP students specialist reach.",
    "English and MYP students often need more structured feedback than generic tuition provides.",
  ],
  averageMatchingTime: "Availability-led after subject specialist review",
} satisfies AdditionalCityConfig;

export const nagpurCityPage = buildAdditionalIndianIbCityPage(config);
