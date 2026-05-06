import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "LKO001",
  cityName: "Lucknow",
  citySlug: "lucknow",
  stateName: "Uttar Pradesh",
  latitude: 26.8467,
  longitude: 80.9462,
  priorityScore: 7.9,
  demandScore: 72,
  demandBand: "medium",
  contentUniquenessScore: 87,
  academicEnvironment:
    "Lucknow's premium tutoring demand is growing among families considering international curricula, overseas admissions and stronger academic mentoring beyond conventional board support.",
  parentContext:
    "Parents often need careful guidance because specialist IB tutor availability can vary by subject, making online and hybrid support important.",
  tutoringPracticality:
    "Home tutoring can be reviewed in established residential pockets, while online tutoring usually gives DP students better access to HL specialists and assessment-aware mentors.",
  localExamFocus:
    "DP support for May 2026 and November 2026, with Math practice, English writing, Economics structure and IA planning as common priorities.",
  premiumAreas: [
    { name: "Gomti Nagar", slug: "gomti-nagar", description: "Key premium residential area for IB tutor requests, especially Math, English and MYP foundations.", landmarks: ["Vibhuti Khand", "Viram Khand"] },
    { name: "Hazratganj", slug: "hazratganj", description: "Central area where families often seek structured support, parent updates and polished tutor communication.", landmarks: ["Civil Lines", "Lalbagh"] },
    { name: "Indira Nagar", slug: "indira-nagar", description: "Large residential catchment where home tutoring may be feasible for younger students and online DP support can add depth.", landmarks: ["Munshipulia", "Faizabad Road"] },
    { name: "Aliganj", slug: "aliganj", description: "Useful for steady MYP, Math and English support with practical weekly scheduling.", landmarks: ["Kapoorthala", "Vikas Nagar"] },
    { name: "Sushant Golf City", slug: "sushant-golf-city", description: "Newer premium corridor where hybrid tutoring can reduce travel friction and support exam-season continuity.", landmarks: ["Shaheed Path", "Ahmamau"] },
  ],
  nearbyAreas: ["Vibhuti Khand", "Vikas Nagar", "Jankipuram", "Mahanagar", "Faizabad Road", "Shaheed Path", "Viram Khand"],
  nearbyCities: [
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi is useful for online DP specialist availability." },
    { cityName: "Ghaziabad", citySlug: "ghaziabad", description: "Ghaziabad gives NCR comparison context for IB tutoring options." },
    { cityName: "Dehradun", citySlug: "dehradun", description: "Dehradun is relevant for families comparing North India international school support." },
  ],
  schoolClusters: [
    { name: "Gomti Nagar premium learner cluster", slug: "gomti-nagar-premium-learner-cluster", area: "Gomti Nagar and Vibhuti Khand", description: "Families often ask for structured Math, English and MYP support with clear parent reporting.", typicalNeeds: ["Math AI HL", "English A", "MYP support"] },
    { name: "Central Lucknow academic corridor", slug: "central-lucknow-academic-corridor", area: "Hazratganj, Mahanagar and Aliganj", description: "Requests may involve study planning, writing support and online access to DP subject specialists.", typicalNeeds: ["Study planning", "Economics", "Online DP"] },
    { name: "Shaheed Path and new residential school families", slug: "shaheed-path-new-residential-school-families", area: "Sushant Golf City and Shaheed Path", description: "Hybrid tutoring can help families maintain consistency across new residential corridors and school routes.", typicalNeeds: ["Hybrid tutoring", "Chemistry", "IA planning"] },
  ],
  schoolNeeds: [
    "Subject matching that accounts for limited local IB specialist depth in some areas.",
    "Online DP support for HL Math, sciences and essay-based subjects.",
    "MYP foundations for students adapting to inquiry-led assessment.",
    "Responsible IA and EE guidance without completing student work.",
  ],
  strongSubjects: ["Math AI HL", "English A", "Economics"],
  moderateSubjects: ["Math AA HL", "Physics", "Chemistry", "Biology"],
  subjectDemand: {
    math: "Math AA and Math AI support in Lucknow is reviewed by level and availability, with online specialists often useful for HL work.",
    science: "Physics, Chemistry and Biology support is reviewed for concept clarity, data questions and exam practice.",
    humanities: "Economics, Business Management, Psychology and History support can strengthen writing, examples and structured responses.",
    language: "English A, English B, Hindi, French and other languages are reviewed according to tutor availability.",
  },
  proofThemes: [
    "Lucknow families often need honest availability guidance before choosing between home and online tutoring.",
    "Online DP tutoring can unlock specialist support that may not be available in the immediate neighbourhood.",
    "Younger international curriculum students often need help building study routines before DP pressure begins.",
  ],
  averageMatchingTime: "Availability-led after subject and mode consultation",
} satisfies AdditionalCityConfig;

export const lucknowCityPage = buildAdditionalIndianIbCityPage(config);
