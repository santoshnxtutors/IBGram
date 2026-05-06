import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "VAD001",
  cityName: "Vadodara",
  citySlug: "vadodara",
  stateName: "Gujarat",
  latitude: 22.3072,
  longitude: 73.1812,
  priorityScore: 7.6,
  demandScore: 69,
  demandBand: "medium",
  contentUniquenessScore: 86,
  academicEnvironment:
    "Vadodara's international curriculum demand is practical and parent-led, with families seeking strong academic support without the scale of a metro tutoring market.",
  parentContext:
    "Parents often want a tutor match that is honest about availability and willing to use online support when that creates a better DP fit.",
  tutoringPracticality:
    "Home tutoring can be reviewed in Alkapuri, Gotri and Akota routes, while online tutoring is useful for HL subjects, IA review and urgent doubts.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, science, English and Economics needs reviewed according to tutor availability.",
  premiumAreas: [
    { name: "Alkapuri", slug: "alkapuri", description: "Central premium area for English, Economics, MYP and study-planning support.", landmarks: ["RC Dutt Road", "Race Course"] },
    { name: "Gotri", slug: "gotri", description: "Growing residential catchment where families often ask for Math, science and hybrid tutoring.", landmarks: ["Gotri Road", "Vasna"] },
    { name: "Vasna Bhayli Road", slug: "vasna-bhayli-road", description: "Premium corridor where online DP support can complement home tutoring and reduce travel pressure.", landmarks: ["Bhayli", "Sevasi"] },
    { name: "Akota", slug: "akota", description: "Practical area for home tutoring review, MYP foundations and English writing support.", landmarks: ["Old Padra Road", "Mujmahuda"] },
    { name: "Sama Savli", slug: "sama-savli", description: "Residential corridor where hybrid support helps students maintain consistency during exam months.", landmarks: ["Sama", "Savli Road"] },
  ],
  nearbyAreas: ["Race Course", "Old Padra Road", "Bhayli", "Sevasi", "Mujmahuda", "Waghodia Road", "Manjalpur"],
  nearbyCities: [
    { cityName: "Ahmedabad", citySlug: "ahmedabad", description: "Ahmedabad offers a wider Gujarat comparison for IB tutoring options." },
    { cityName: "Surat", citySlug: "surat", description: "Surat is relevant for families comparing online and hybrid support in Gujarat." },
    { cityName: "Indore", citySlug: "indore", description: "Indore is useful for central-west India online tutoring comparisons." },
  ],
  schoolClusters: [
    { name: "Alkapuri and Race Course learner cluster", slug: "alkapuri-race-course-learner-cluster", area: "Alkapuri and Race Course", description: "Families often request English, Economics and study planning with consistent parent feedback.", typicalNeeds: ["English A", "Economics", "Study planning"] },
    { name: "Gotri and Vasna Bhayli school families", slug: "gotri-vasna-bhayli-school-families", area: "Gotri, Vasna and Bhayli", description: "Requests often include Math, science and hybrid support around newer residential corridors.", typicalNeeds: ["Math AA HL", "Chemistry", "Hybrid support"] },
    { name: "Akota and Old Padra academic corridor", slug: "akota-old-padra-academic-corridor", area: "Akota and Old Padra Road", description: "Students often need MYP criteria, DP revision and online specialist reach for precise subject levels.", typicalNeeds: ["MYP criteria", "Physics", "Online DP"] },
  ],
  schoolNeeds: [
    "Subject matching that checks whether local or online tutor fit is stronger.",
    "DP Math and science support with structured practice.",
    "English and Economics writing support for assessment-ready responses.",
    "Academic honesty guidance for IA, EE and school submissions.",
  ],
  strongSubjects: ["English A", "Math AA HL", "Chemistry"],
  moderateSubjects: ["Math AI HL", "Physics", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Vadodara is reviewed by level, topic gaps and availability across home and online modes.",
    science: "Physics, Chemistry and Biology tutoring focuses on concept clarity, data handling and exam-style questions.",
    humanities: "Economics, Business Management and Psychology support can help students improve diagrams, examples and essay structure.",
    language: "English A, English B, Hindi, Gujarati, French and other languages are reviewed based on availability.",
  },
  proofThemes: [
    "Vadodara parents often appreciate clear guidance on when online tutoring is academically stronger than a nearby generic tutor.",
    "Hybrid plans can help students combine accountability with specialist DP support.",
    "English and Economics students often need help making answers more precise and evidence-led.",
  ],
  averageMatchingTime: "Availability-led after tutor fit review",
} satisfies AdditionalCityConfig;

export const vadodaraCityPage = buildAdditionalIndianIbCityPage(config);
