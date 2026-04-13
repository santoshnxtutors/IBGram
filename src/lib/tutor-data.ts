export interface Tutor {
  id: number;
  name: string;
  subject: string;
  grade: string;
  rating: number;
  reviews: number;
  experience: string;
  bio: string;
  rate: string;
  image: string;
  tags: string[];
  accent: string;
  education: string;
  successRate: string;
  availability: string;
  responseTime: string;
  methodology: string;
}

export const allTutors: Tutor[] = [
  {
    id: 1,
    name: "Dr. Sarah M.",
    subject: "Mathematics",
    grade: "Year 12-13 (IB DP)",
    rating: 5.0,
    reviews: 142,
    experience: "8 Yrs",
    bio: "Oxford alumni with a PhD in Mathematics. Specialized in IB Math HL and SAT preparation with over 8 years of global tutoring experience. Known for breaking down complex calculus concepts into intuitive visual models.",
    rate: "$85/hr",
    image: "/tutor_sarah_avatar_1775559612425.png",
    tags: ["Examiner", "Oxford Alumni", "PhD holder"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "PhD in Mathematics, University of Oxford",
    successRate: "99%",
    availability: "Limited (4 slots left)",
    responseTime: "< 5 mins",
    methodology: "Rigorous exam-centric preparation combined with intuitive concept visualization.",
  },
  {
    id: 2,
    name: "James R.",
    subject: "Physics",
    grade: "Year 10-11 (IGCSE)",
    rating: 4.9,
    reviews: 89,
    experience: "5 Yrs",
    bio: "Former lead physics teacher at a top international school. James focuses on kinesthetic learning and interactive simulations. Expert in IGCSE/A-Level mechanics and thermodynamics.",
    rate: "$65/hr",
    image: "/tutor_james_avatar_1775559651647.png",
    tags: ["Interactive", "Fast Replies", "Lead Teacher"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.Sc. in Physics, Imperial College London",
    successRate: "96%",
    availability: "Flexible (10+ slots)",
    responseTime: "< 15 mins",
    methodology: "Kinesthetic learning and interactive simulations for deep conceptual understanding.",
  },
  {
    id: 3,
    name: "Elena K.",
    subject: "Economics",
    grade: "Year 12-13 (IB DP)",
    rating: 5.0,
    reviews: 210,
    experience: "12 Yrs",
    bio: "LSE Graduate with extensive experience in international trade and macroeconomics. Elena has helped hundreds of students achieve a 7 in IB Economics through structured essay planning and case study analysis.",
    rate: "$95/hr",
    image: "/tutor_elena_avatar_1775559725738.png",
    tags: ["High Success Rate", "LSE Alumni", "Essay Expert"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.A. in Economics, London School of Economics",
    successRate: "98%",
    availability: "Very Limited (2 slots)",
    responseTime: "< 2 mins",
    methodology: "Structured essay planning and real-world case study analysis to master IB criteria.",
  },
  {
    id: 4,
    name: "Daniel K.",
    subject: "Mathematics",
    grade: "Year 7-9 (MYP)",
    rating: 4.8,
    reviews: 56,
    experience: "4 Yrs",
    bio: "Math expert who makes numbers fun. Daniel uses gamified learning techniques to help middle-school students master foundations and prepare for IGCSE/MYP exams.",
    rate: "$55/hr",
    image: "/tutor_sarah_avatar_1775559612425.png",
    tags: ["Math Expert", "MYP Specialist"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "B.Sc. in Math Education, NYU",
    successRate: "94%",
    availability: "Moderate (6 slots)",
    responseTime: "< 30 mins",
    methodology: "Gamified learning techniques to make foundational math foundations engaging and accessible.",
  },
  {
    id: 5,
    name: "Sophia L.",
    subject: "English Literature",
    grade: "Year 12-13 (IB DP)",
    rating: 4.9,
    reviews: 124,
    experience: "10 Yrs",
    bio: "Expert in IB English A Literature and Language. Sophia focuses on critical thinking and essay structure, ensuring students can articulate complex themes with clarity.",
    rate: "$75/hr",
    image: "/tutor_elena_avatar_1775559725738.png",
    tags: ["IB Specialist", "Essay Coach"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.A. in English Literature, University of Cambridge",
    successRate: "97%",
    availability: "Moderate (5 slots)",
    responseTime: "< 10 mins",
    methodology: "Critical thinking and textual analysis focused on articulation and essay structuring.",
  }
];
