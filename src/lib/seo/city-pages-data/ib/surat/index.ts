import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "SUR001",
  cityName: "Surat",
  citySlug: "surat",
  stateName: "Gujarat",
  latitude: 21.1702,
  longitude: 72.8311,
  priorityScore: 7.7,
  demandScore: 70,
  demandBand: "medium",
  contentUniquenessScore: 87,
  academicEnvironment:
    "Surat's premium tutoring demand is linked to entrepreneurial families, globally mobile students and growing interest in international curriculum pathways.",
  parentContext:
    "Parents often need careful tutor matching because specialist IB availability can vary, especially for DP HL and less common subjects.",
  tutoringPracticality:
    "Home tutoring can work in Vesu, Adajan and Citylight clusters, while online tutoring is useful for DP specialists and assessment support.",
  localExamFocus:
    "May 2026 and November 2026 DP planning, with Math, science, English, Economics and IA support reviewed early.",
  premiumAreas: [
    { name: "Vesu", slug: "vesu", description: "High-demand residential area for Math, science, MYP and hybrid IB tutoring support.", landmarks: ["VIP Road", "Canal Road"] },
    { name: "Adajan", slug: "adajan", description: "Established residential catchment where families often request home feasibility and structured weekly tutoring.", landmarks: ["LP Savani Road", "Pal"] },
    { name: "Citylight", slug: "citylight", description: "Premium area for English, Economics, PYP routines and parent-visible progress updates.", landmarks: ["Ghod Dod Road", "Athwa"] },
    { name: "Piplod", slug: "piplod", description: "Practical area for online and hybrid DP support around school and activity schedules.", landmarks: ["Dumas Road", "Vesu"] },
    { name: "Pal", slug: "pal", description: "Growing residential pocket where students may need steady MYP support and online DP specialist access.", landmarks: ["Adajan", "LP Savani Road"] },
  ],
  nearbyAreas: ["Athwa", "Ghod Dod Road", "Dumas Road", "VIP Road", "Canal Road", "Althan", "Pal Gam"],
  nearbyCities: [
    { cityName: "Vadodara", citySlug: "vadodara", description: "Vadodara is a nearby Gujarat city for comparing IB tutor availability." },
    { cityName: "Ahmedabad", citySlug: "ahmedabad", description: "Ahmedabad provides a wider Gujarat comparison for online and hybrid support." },
    { cityName: "Mumbai", citySlug: "mumbai", description: "Mumbai is relevant for premium online DP specialist availability." },
  ],
  schoolClusters: [
    { name: "Vesu and Piplod international learner cluster", slug: "vesu-piplod-international-learner-cluster", area: "Vesu, Piplod and VIP Road", description: "Families often ask for Math, science and hybrid tutoring that fits busy school weeks.", typicalNeeds: ["Math AI HL", "Chemistry", "Hybrid tutoring"] },
    { name: "Adajan and Pal school families", slug: "adajan-pal-school-families", area: "Adajan, Pal and LP Savani Road", description: "Requests often involve MYP foundations, English support and home tutoring feasibility.", typicalNeeds: ["MYP support", "English A", "Home review"] },
    { name: "Citylight premium academic corridor", slug: "citylight-premium-academic-corridor", area: "Citylight, Athwa and Ghod Dod Road", description: "Parents often want structured revision, Economics writing support and careful progress communication.", typicalNeeds: ["Economics", "Revision", "Parent updates"] },
  ],
  schoolNeeds: [
    "Honest local availability checks for DP HL and specialist subjects.",
    "Online support when the best IB tutor is outside Surat.",
    "MYP and English writing support with clear criteria and feedback.",
    "Math and science practice tied to DP command terms and markschemes.",
  ],
  strongSubjects: ["Math AI HL", "Chemistry", "English A"],
  moderateSubjects: ["Math AA HL", "Physics", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Surat is reviewed by pathway, level and whether online specialist tutoring would be stronger.",
    science: "Physics, Chemistry and Biology support focuses on concepts, data response and exam-style practice.",
    humanities: "Economics, Business Management and Psychology tutoring can support diagrams, examples and structured writing.",
    language: "English A, English B, Hindi, Gujarati, French and other language support is reviewed according to availability.",
  },
  proofThemes: [
    "Surat parents often ask whether hybrid tutoring can give students stronger DP support without frequent travel.",
    "Online lessons are useful for specialist IB subjects where local options may be limited.",
    "MYP students commonly need help understanding criteria, evidence and reflection.",
  ],
  averageMatchingTime: "Availability-led after local and online tutor review",
} satisfies AdditionalCityConfig;

export const suratCityPage = buildAdditionalIndianIbCityPage(config);
