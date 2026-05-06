import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "JAI001",
  cityName: "Jaipur",
  citySlug: "jaipur",
  stateName: "Rajasthan",
  latitude: 26.9124,
  longitude: 75.7873,
  priorityScore: 8.2,
  demandScore: 76,
  demandBand: "medium",
  contentUniquenessScore: 88,
  academicEnvironment:
    "Jaipur's international curriculum demand is smaller than the largest metros but serious, especially among families planning overseas admissions or moving between Indian and international school pathways.",
  parentContext:
    "Parents often ask for careful subject matching because the local pool of specialist IB DP tutors can be narrower than Delhi NCR or Mumbai.",
  tutoringPracticality:
    "Home tutoring can be practical around central and western neighbourhoods, but online tutoring gives Jaipur students stronger access to rare DP subject specialists.",
  localExamFocus:
    "DP exam support for May 2026 and November 2026, with early structure for Math practice, English essays, Economics answers and IA milestones.",
  premiumAreas: [
    { name: "Vaishali Nagar", slug: "vaishali-nagar", description: "A high-demand residential area for MYP foundations, English support and online DP specialist tutoring.", landmarks: ["Gandhi Path", "Chitrakoot"] },
    { name: "C-Scheme", slug: "c-scheme", description: "Central Jaipur area where families often prefer polished communication, home feasibility checks and structured academic planning.", landmarks: ["MI Road", "Civil Lines"] },
    { name: "Mansarovar", slug: "mansarovar", description: "Large residential catchment where hybrid tutoring can help students maintain consistency around school and activity schedules.", landmarks: ["Shipra Path", "New Sanganer Road"] },
    { name: "Malviya Nagar", slug: "malviya-nagar", description: "Practical area for Math, Physics, Chemistry and exam-revision requests near south-eastern Jaipur.", landmarks: ["Jawahar Circle", "Tonk Road"] },
    { name: "Jagatpura", slug: "jagatpura", description: "Growing education corridor where online and hybrid IB support can reduce travel friction for specialist subjects.", landmarks: ["Airport Road", "Sitapura"] },
  ],
  nearbyAreas: ["Civil Lines", "Tonk Road", "Ajmer Road", "Sanganer", "Raja Park", "Bani Park", "Sitapura"],
  nearbyCities: [
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi is a useful nearby comparison for specialist online DP support." },
    { cityName: "Gurugram", citySlug: "gurugram", description: "Gurugram often has comparable parent demand for premium IB tutoring." },
    { cityName: "Ahmedabad", citySlug: "ahmedabad", description: "Ahmedabad is relevant for western India families comparing IB tutor options." },
  ],
  schoolClusters: [
    { name: "West Jaipur international learner cluster", slug: "west-jaipur-international-learner-cluster", area: "Vaishali Nagar and Ajmer Road", description: "Families often need MYP structure, DP Math support and online specialist access for subjects not easily available locally.", typicalNeeds: ["MYP criteria", "Math AA HL", "Online DP"] },
    { name: "Central Jaipur premium school families", slug: "central-jaipur-premium-school-families", area: "C-Scheme and Civil Lines", description: "Requests often focus on study planning, English writing, Economics structure and parent-visible progress.", typicalNeeds: ["English A", "Economics", "Parent updates"] },
    { name: "South Jaipur education corridor", slug: "south-jaipur-education-corridor", area: "Malviya Nagar, Jagatpura and Tonk Road", description: "Hybrid tutoring helps students balance school travel, competitive activities and exam preparation.", typicalNeeds: ["Physics", "Chemistry", "Hybrid tutoring"] },
  ],
  schoolNeeds: [
    "Online access to specialist DP tutors when local availability is limited.",
    "MYP criteria and project support for students moving into IB-style assessment.",
    "DP Math, Economics and English support aligned with overseas admissions goals.",
    "Clear academic honesty boundaries for IA, EE and TOK guidance.",
  ],
  strongSubjects: ["Math AA HL", "English A", "Economics"],
  moderateSubjects: ["Math AI HL", "Physics", "Chemistry", "Biology"],
  subjectDemand: {
    math: "Math AA, Math AI and SL pathways are reviewed in Jaipur with special care because students may need online specialist reach for HL depth.",
    science: "Physics, Chemistry and Biology support is reviewed for concept clarity, exam questions and data interpretation.",
    humanities: "Economics, Business Management, Psychology and History support can help Jaipur students strengthen writing, examples and command-term responses.",
    language: "English A, English B, Hindi, French and other languages are reviewed based on tutor availability.",
  },
  proofThemes: [
    "Jaipur families often value online DP tutoring when a strong local specialist is not available for the exact subject level.",
    "Home tutoring is most practical within compact neighbourhood clusters, especially for younger students.",
    "MYP students frequently need help understanding how criteria and reflections differ from conventional school answers.",
  ],
  averageMatchingTime: "Availability-led shortlist after subject-level review",
} satisfies AdditionalCityConfig;

export const jaipurCityPage = buildAdditionalIndianIbCityPage(config);
