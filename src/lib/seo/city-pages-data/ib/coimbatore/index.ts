import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "CBE001",
  cityName: "Coimbatore",
  citySlug: "coimbatore",
  stateName: "Tamil Nadu",
  latitude: 11.0168,
  longitude: 76.9558,
  priorityScore: 7.8,
  demandScore: 70,
  demandBand: "medium",
  contentUniquenessScore: 87,
  academicEnvironment:
    "Coimbatore's international tutoring demand is shaped by education-focused families, returning professionals and students who may combine local schooling with global university ambitions.",
  parentContext:
    "Parents often need clear advice on whether a home tutor, online specialist or hybrid plan will give the student the strongest IB fit.",
  tutoringPracticality:
    "Home tutoring can work in central neighbourhoods, while online tutoring is valuable for DP HL subjects and less common electives.",
  localExamFocus:
    "May 2026 and November 2026 DP preparation, with Math, science, English and IA planning as common needs.",
  premiumAreas: [
    { name: "Race Course", slug: "race-course", description: "Central premium pocket where families often prefer structured support, parent updates and home tutoring review.", landmarks: ["Gopalapuram", "Red Fields"] },
    { name: "RS Puram", slug: "rs-puram", description: "Established area for PYP, MYP, English and Math tutoring with practical weekly scheduling.", landmarks: ["Saibaba Colony", "Gandhipuram"] },
    { name: "Peelamedu", slug: "peelamedu", description: "Education and residential corridor where DP Math and sciences are common tutoring requests.", landmarks: ["Avinashi Road", "Hope College"] },
    { name: "Saravanampatti", slug: "saravanampatti", description: "Growing technology-side corridor where online and hybrid tutoring can reduce travel pressure.", landmarks: ["Kalapatti", "Kovilpalayam"] },
    { name: "Saibaba Colony", slug: "saibaba-colony", description: "Residential area where families often ask for steady MYP foundations and English writing support.", landmarks: ["NSR Road", "RS Puram"] },
  ],
  nearbyAreas: ["Gandhipuram", "Avinashi Road", "Kalapatti", "Vadavalli", "Ramanathapuram", "Singanallur", "Kovaipudur"],
  nearbyCities: [
    { cityName: "Kochi", citySlug: "kochi", description: "Kochi is relevant for South India families comparing online IB tutoring options." },
    { cityName: "Chennai", citySlug: "chennai", description: "Chennai offers a larger comparison pool for DP specialists." },
    { cityName: "Bangalore", citySlug: "bangalore", description: "Bangalore is useful for specialist online IB availability." },
  ],
  schoolClusters: [
    { name: "Central Coimbatore learner cluster", slug: "central-coimbatore-learner-cluster", area: "Race Course, RS Puram and Saibaba Colony", description: "Families often need English, MYP and study planning support with clear communication.", typicalNeeds: ["English A", "MYP support", "Study planning"] },
    { name: "Peelamedu education corridor", slug: "peelamedu-education-corridor", area: "Peelamedu and Avinashi Road", description: "Requests often include Math, sciences and DP revision around school and activity schedules.", typicalNeeds: ["Math AA HL", "Physics", "Revision"] },
    { name: "Saravanampatti technology-side families", slug: "saravanampatti-technology-side-families", area: "Saravanampatti and Kalapatti", description: "Hybrid tutoring helps families combine accountability with online specialist reach.", typicalNeeds: ["Hybrid tutoring", "Chemistry", "IA planning"] },
  ],
  schoolNeeds: [
    "Mode guidance for a city where some DP specialists may be easier to access online.",
    "Math and science practice connected to exam-style application.",
    "English and MYP writing support with criteria-aware feedback.",
    "Parent-facing progress updates and realistic next steps.",
  ],
  strongSubjects: ["Math AA HL", "Physics", "English A"],
  moderateSubjects: ["Math AI HL", "Chemistry", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Coimbatore is reviewed by subject level, school pace and university direction.",
    science: "Physics, Chemistry and Biology support focuses on concept clarity, data interpretation and timed practice.",
    humanities: "Economics, Business Management and Psychology support can be arranged where tutor availability matches the student's writing goals.",
    language: "English A, English B, Hindi, Tamil, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Coimbatore parents often ask for an honest comparison between home tutoring and online DP specialists.",
    "Hybrid support is practical when students need accountability as well as stronger subject reach.",
    "English and MYP students often need clearer writing routines and feedback loops.",
  ],
  averageMatchingTime: "Availability-led after home versus online fit review",
} satisfies AdditionalCityConfig;

export const coimbatoreCityPage = buildAdditionalIndianIbCityPage(config);
