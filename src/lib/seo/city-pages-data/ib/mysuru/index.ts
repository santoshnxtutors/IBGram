import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "MYS001",
  cityName: "Mysuru",
  citySlug: "mysuru",
  stateName: "Karnataka",
  latitude: 12.2958,
  longitude: 76.6394,
  priorityScore: 7.4,
  demandScore: 67,
  demandBand: "medium",
  contentUniquenessScore: 86,
  academicEnvironment:
    "Mysuru's premium tutoring demand is quieter than Bangalore's but meaningful for families seeking international curriculum readiness, English confidence and university-aligned subject support.",
  parentContext:
    "Parents often compare local tutoring with Bangalore or online specialists because exact IB DP availability can be limited by subject.",
  tutoringPracticality:
    "Home tutoring can be reviewed in central Mysuru pockets, while online support often gives students stronger access to DP HL and IA specialists.",
  localExamFocus:
    "May 2026 and November 2026 DP preparation, with Math, English, science and study planning reviewed through local and online options.",
  premiumAreas: [
    { name: "Jayalakshmipuram", slug: "jayalakshmipuram", description: "Premium residential area for English, MYP and structured academic support.", landmarks: ["Vontikoppal", "Gokulam"] },
    { name: "Kuvempunagar", slug: "kuvempunagar", description: "Established neighbourhood for home tutoring review, PYP routines and Math support.", landmarks: ["Saraswathipuram", "Vivekananda Nagar"] },
    { name: "Vijayanagar", slug: "vijayanagar", description: "Large residential catchment where hybrid tutoring can combine local accountability with online DP depth.", landmarks: ["Hebbal", "Hinkal"] },
    { name: "Gokulam", slug: "gokulam", description: "Central premium pocket for English writing, study planning and parent-visible progress.", landmarks: ["Vontikoppal", "Yadavagiri"] },
    { name: "Hebbal", slug: "hebbal", description: "Growing corridor where online support can widen access to specialist IB tutors.", landmarks: ["Infosys Campus", "Vijayanagar"] },
  ],
  nearbyAreas: ["Vontikoppal", "Yadavagiri", "Saraswathipuram", "Hinkal", "Vivekananda Nagar", "Bogadi", "Siddhartha Layout"],
  nearbyCities: [
    { cityName: "Bangalore", citySlug: "bangalore", description: "Bangalore offers a larger specialist tutor pool for Mysuru families." },
    { cityName: "Coimbatore", citySlug: "coimbatore", description: "Coimbatore is relevant for South India online tutoring comparisons." },
    { cityName: "Chennai", citySlug: "chennai", description: "Chennai gives another South India comparison market for IB support." },
  ],
  schoolClusters: [
    { name: "Central Mysuru learner cluster", slug: "central-mysuru-learner-cluster", area: "Jayalakshmipuram, Gokulam and Yadavagiri", description: "Families often need English, MYP and study planning support with clear parent communication.", typicalNeeds: ["English A", "MYP support", "Study planning"] },
    { name: "Kuvempunagar residential school families", slug: "kuvempunagar-residential-school-families", area: "Kuvempunagar and Saraswathipuram", description: "Requests often involve PYP routines, Math foundations and home tutoring review.", typicalNeeds: ["PYP routines", "Math AI HL", "Home review"] },
    { name: "Vijayanagar and Hebbal education corridor", slug: "vijayanagar-hebbal-education-corridor", area: "Vijayanagar, Hebbal and Hinkal", description: "Online and hybrid support can connect students to Bangalore-level DP specialists.", typicalNeeds: ["Online DP", "Physics", "IA planning"] },
  ],
  schoolNeeds: [
    "Bangalore-aware online matching for DP specialist subjects.",
    "PYP and MYP support that builds confidence before heavier assessment years.",
    "English writing and study planning for international curriculum readiness.",
    "Clear academic honesty boundaries for assessed IB work.",
  ],
  strongSubjects: ["English A", "Math AI HL"],
  moderateSubjects: ["Math AA HL", "Physics", "Chemistry", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Mysuru is reviewed by level and whether Bangalore or online specialist access would be stronger.",
    science: "Physics, Chemistry and Biology support focuses on concept clarity, data response and exam-style practice.",
    humanities: "Economics, Business Management and Psychology support can improve examples, diagrams and structured responses.",
    language: "English A, English B, Hindi, Kannada, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Mysuru parents often ask for specialist online support without losing local accountability.",
    "English and study planning are common needs for students preparing for international pathways.",
    "MYP students often need help understanding criteria and project expectations.",
  ],
  averageMatchingTime: "Availability-led after Mysuru and Bangalore fit review",
} satisfies AdditionalCityConfig;

export const mysuruCityPage = buildAdditionalIndianIbCityPage(config);
