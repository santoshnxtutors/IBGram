import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "CHE001",
  cityName: "Chennai",
  citySlug: "chennai",
  stateName: "Tamil Nadu",
  latitude: 13.0827,
  longitude: 80.2707,
  priorityScore: 8.9,
  demandScore: 86,
  demandBand: "high",
  contentUniquenessScore: 90,
  academicEnvironment:
    "Chennai's international school ecosystem is spread across older central neighbourhoods, OMR, ECR and southern residential corridors, so tutoring decisions are tied closely to travel time and school calendars.",
  parentContext:
    "Families often want rigorous but steady support for Math, sciences and English, with tutors who can balance academic precision with the student's confidence and workload.",
  tutoringPracticality:
    "Home tutoring can work well inside Adyar, Anna Nagar or Velachery clusters, while OMR and ECR families often use online or hybrid lessons for specialist DP subjects.",
  localExamFocus:
    "May 2026 and November 2026 exam planning for DP students, with extra attention to IA timelines, science data questions and English analytical writing.",
  premiumAreas: [
    {
      name: "Adyar",
      slug: "adyar",
      description:
        "A strong central-south tutoring pocket for PYP, MYP, English and DP science support with practical home lesson potential.",
      landmarks: ["Besant Nagar", "Indira Nagar"],
    },
    {
      name: "OMR",
      slug: "omr",
      description:
        "Long school and residential corridor where hybrid tutoring can help families access stronger DP subject specialists.",
      landmarks: ["Thoraipakkam", "Sholinganallur"],
    },
    {
      name: "ECR",
      slug: "ecr",
      description:
        "Premium coastal corridor where online support often complements home tutoring because travel windows can be unpredictable.",
      landmarks: ["Neelankarai", "Injambakkam"],
    },
    {
      name: "Anna Nagar",
      slug: "anna-nagar",
      description:
        "Established residential area where parents often seek consistent weekly support for MYP foundations and DP exam preparation.",
      landmarks: ["Shenoy Nagar", "Kilpauk"],
    },
    {
      name: "Velachery",
      slug: "velachery",
      description:
        "Practical south Chennai catchment for Math AA, Physics, Chemistry and online backup before assessments.",
      landmarks: ["Guindy", "Taramani"],
    },
  ],
  nearbyAreas: ["Besant Nagar", "Thoraipakkam", "Sholinganallur", "Neelankarai", "Taramani", "Nungambakkam"],
  nearbyCities: [
    { cityName: "Bangalore", citySlug: "bangalore", description: "Bangalore is a useful comparison city for DP specialist subjects." },
    { cityName: "Hyderabad", citySlug: "hyderabad", description: "Hyderabad families often compare online IB tutoring availability with Chennai." },
    { cityName: "Coimbatore", citySlug: "coimbatore", description: "Coimbatore is relevant for Tamil Nadu families reviewing city-wise IB support." },
  ],
  schoolClusters: [
    {
      name: "South Chennai international learner cluster",
      slug: "south-chennai-international-learner-cluster",
      area: "Adyar, Velachery and Besant Nagar",
      description:
        "Families here often need balanced tutoring across English, sciences and MYP criteria with reliable parent communication.",
      typicalNeeds: ["English", "MYP criteria", "Chemistry"],
    },
    {
      name: "OMR and ECR school corridor",
      slug: "omr-ecr-school-corridor",
      area: "OMR, ECR and Sholinganallur",
      description:
        "Long-distance school routes make online and hybrid support especially useful for DP Math, Physics and IA review.",
      typicalNeeds: ["Math AA HL", "Physics", "Online support"],
    },
    {
      name: "Central Chennai premium school families",
      slug: "central-chennai-premium-school-families",
      area: "Anna Nagar, Nungambakkam and Kilpauk",
      description:
        "Requests often involve structured weekly tutoring, study planning and careful writing feedback for DP humanities and English.",
      typicalNeeds: ["Economics", "English A", "Study planning"],
    },
  ],
  schoolNeeds: [
    "Subject tutoring that respects Chennai school commutes and co-curricular schedules.",
    "DP Math and science practice connected to markschemes and data questions.",
    "English and Economics writing support with clear thesis and evidence routines.",
    "Academic honesty boundaries for school submissions, IA, EE and TOK.",
  ],
  strongSubjects: ["Math AA HL", "Physics", "Chemistry", "English A"],
  moderateSubjects: ["Math AI HL", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA HL, Math AA SL, Math AI HL and Math AI SL support is reviewed in Chennai according to school pace, topic gaps and university goals.",
    science: "Physics, Chemistry and Biology HL/SL support is common for students who need application practice, data interpretation and exam timing.",
    humanities: "Economics, Business Management, Psychology and History support can be arranged where tutor availability matches the student's writing needs.",
    language: "English A, English B, Hindi, Tamil, French and other language support is reviewed based on availability.",
  },
  proofThemes: [
    "Chennai parents often ask for serious subject support that does not overload students already managing long school routes.",
    "Hybrid tutoring is useful for OMR and ECR families who want specialist DP support without extra commute pressure.",
    "English and Economics students frequently need help moving from good ideas to assessment-ready paragraphs.",
  ],
  averageMatchingTime: "Shortlist timing depends on subject level, area and preferred mode",
} satisfies AdditionalCityConfig;

export const chennaiCityPage = buildAdditionalIndianIbCityPage(config);
