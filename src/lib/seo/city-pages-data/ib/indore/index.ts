import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "IND001",
  cityName: "Indore",
  citySlug: "indore",
  stateName: "Madhya Pradesh",
  latitude: 22.7196,
  longitude: 75.8577,
  priorityScore: 7.8,
  demandScore: 71,
  demandBand: "medium",
  contentUniquenessScore: 87,
  academicEnvironment:
    "Indore's premium academic market is expanding, with families seeking international curriculum support for university readiness, subject confidence and stronger writing habits.",
  parentContext:
    "Parents often compare local home tutoring with online IB specialists because DP subject depth can vary by availability.",
  tutoringPracticality:
    "Home tutoring may work in central and eastern Indore pockets, while online support is often stronger for HL Math, sciences, Economics and IA review.",
  localExamFocus:
    "May 2026 and November 2026 DP support, especially for Math practice, science application, Economics writing and early IA structure.",
  premiumAreas: [
    { name: "Vijay Nagar", slug: "vijay-nagar", description: "High-demand residential and commercial hub for Math, science and exam-revision tutoring.", landmarks: ["AB Road", "Scheme 54"] },
    { name: "Palasia", slug: "palasia", description: "Central premium pocket where families often request structured weekly support and parent feedback.", landmarks: ["Old Palasia", "New Palasia"] },
    { name: "Nipania", slug: "nipania", description: "Growing residential area where hybrid IB tutoring can help students maintain consistency.", landmarks: ["Bypass Road", "Mahalaxmi Nagar"] },
    { name: "Rau", slug: "rau", description: "Important education-side corridor where online DP support can reduce travel time for specialist subjects.", landmarks: ["IIM Road", "Pithampur Road"] },
    { name: "Super Corridor", slug: "super-corridor", description: "Newer corridor for families seeking flexible IB tutoring around school routes and activity schedules.", landmarks: ["Airport Road", "MR 10"] },
  ],
  nearbyAreas: ["Mahalaxmi Nagar", "Scheme 78", "AB Road", "Bypass Road", "Old Palasia", "New Palasia", "MR 10"],
  nearbyCities: [
    { cityName: "Bhopal", citySlug: "bhopal", description: "Bhopal is the closest comparison city for Madhya Pradesh IB support." },
    { cityName: "Vadodara", citySlug: "vadodara", description: "Vadodara is relevant for western-central India families reviewing online support." },
    { cityName: "Ahmedabad", citySlug: "ahmedabad", description: "Ahmedabad offers a wider Gujarat comparison for IB tutor availability." },
  ],
  schoolClusters: [
    { name: "Vijay Nagar and eastern Indore learner cluster", slug: "vijay-nagar-eastern-indore-learner-cluster", area: "Vijay Nagar, Nipania and Bypass Road", description: "Families often need Math, science and structured revision support that fits busy school weeks.", typicalNeeds: ["Math AA HL", "Physics", "Revision"] },
    { name: "Central Indore academic families", slug: "central-indore-academic-families", area: "Palasia and AB Road", description: "Requests often involve English, Economics, study planning and careful progress communication.", typicalNeeds: ["English A", "Economics", "Parent updates"] },
    { name: "Rau and Super Corridor school routes", slug: "rau-super-corridor-school-routes", area: "Rau and Super Corridor", description: "Online and hybrid support can be useful where travel makes frequent in-person lessons difficult.", typicalNeeds: ["Online DP", "Chemistry", "IA planning"] },
  ],
  schoolNeeds: [
    "Honest availability checks for DP specialists in a developing IB tutoring market.",
    "Online HL subject support when the best match is outside Indore.",
    "MYP criteria and project help for students adapting to international assessment.",
    "Exam planning that turns broad goals into weekly practice.",
  ],
  strongSubjects: ["Math AA HL", "Physics", "English A"],
  moderateSubjects: ["Math AI HL", "Chemistry", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Indore is reviewed by pathway, level and whether online specialist tutoring would be stronger.",
    science: "Physics, Chemistry and Biology tutoring focuses on concept clarity, data response and exam application.",
    humanities: "Economics, Business Management and Psychology support can strengthen writing, examples and answer structure.",
    language: "English A, English B, Hindi, French and other languages are reviewed based on availability.",
  },
  proofThemes: [
    "Indore families often ask whether a local tutor or an online specialist is the better academic fit.",
    "Hybrid tutoring can help students keep accountability while accessing stronger subject depth online.",
    "MYP learners commonly need help moving from general understanding to criteria-aware submissions.",
  ],
  averageMatchingTime: "Availability-led after local and online fit review",
} satisfies AdditionalCityConfig;

export const indoreCityPage = buildAdditionalIndianIbCityPage(config);
