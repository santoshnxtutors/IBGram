export interface Subject {
  board: string;
  program: string;
  subject_code: string;
  subject_title: string;
  brief_description: string;
  assessment_type: string;
  typical_age_or_grade: string;
  tiering: string;
  recommended_official_resources: string;
}

export const cambridgeSubjects: Subject[] = [
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0452",
    subject_title: "Accounting",
    brief_description: "Financial accounting concepts and interpretation of accounts for individuals and organizations.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF on Cambridge subject page; School Support Hub (past papers/specimen/examiner reports, login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0985",
    subject_title: "Accounting (9-1)",
    brief_description: "Accounting principles assessed on a 9–1 grading scale variant where offered.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF on Cambridge subject page; School Support Hub (past papers/specimen/examiner reports, login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0548",
    subject_title: "Afrikaans - Second Language",
    brief_description: "Communicative Afrikaans reading, writing, listening, and speaking for second-language learners.",
    assessment_type: "Exam + Speaking",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0600",
    subject_title: "Agriculture",
    brief_description: "Crop and animal production fundamentals, sustainability, and agricultural decision-making.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0508",
    subject_title: "Arabic - First Language",
    brief_description: "Advanced Arabic language skills for first-language learners: reading, writing, and text analysis.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0610",
    subject_title: "Biology",
    brief_description: "Core biological principles across cells, organisms, and ecosystems with practical scientific skills.",
    assessment_type: "Exam + Practical",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0970",
    subject_title: "Biology (9-1)",
    brief_description: "9–1 graded Biology variant aligned to the same broad subject domain with updated assessment design.",
    assessment_type: "Exam + Practical",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0450",
    subject_title: "Business Studies",
    brief_description: "Business environments and decision-making with quantitative and qualitative analysis.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0620",
    subject_title: "Chemistry",
    brief_description: "Chemical principles, reactions, and quantitative chemistry supported by practical investigation skills.",
    assessment_type: "Exam + Practical",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0478",
    subject_title: "Computer Science",
    brief_description: "Computational thinking, programming concepts, data representation, and system fundamentals.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0455",
    subject_title: "Economics",
    brief_description: "Micro- and macroeconomics concepts with data interpretation and policy evaluation.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0500",
    subject_title: "English - First Language",
    brief_description: "Advanced reading and writing skills for fluent learners, emphasizing analysis and accurate communication.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0580",
    subject_title: "Mathematics",
    brief_description: "Mathematical techniques and problem solving; explicitly described as tiered on the official page.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "Core/Extended",
    recommended_official_resources: "Official syllabus PDF(s); School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0625",
    subject_title: "Physics",
    brief_description: "Mechanics, electricity, waves, and modern physics with practical scientific skills.",
    assessment_type: "Exam + Practical",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0470",
    subject_title: "History",
    brief_description: "Historical investigation skills using source analysis and structured written arguments.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0460",
    subject_title: "Geography",
    brief_description: "Physical and human geography with data, decision-making, and investigation skills.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  },
  {
    board: "Cambridge",
    program: "IGCSE",
    subject_code: "0417",
    subject_title: "ICT",
    brief_description: "Applied digital literacy: data, information systems, and productivity tools.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Official syllabus PDF; School Support Hub resources (login); endorsed resources"
  }
];

export const edexcelSubjects: Subject[] = [
  {
    board: "Pearson",
    program: "International GCSE (9-1)",
    subject_code: "4AC1",
    subject_title: "Accounting",
    brief_description: "Financial statements, accounting concepts, and interpretation of business accounts.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Specification PDF on Pearson qualification page; Sample Assessment Materials; Course materials (past papers/mark schemes/examiner reports, access rules); Published resources guide"
  },
  {
    board: "Pearson",
    program: "International GCSE (9-1)",
    subject_code: "4BI1",
    subject_title: "Biology",
    brief_description: "Biology foundations across cells, organisms, and ecosystems with practical scientific understanding.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Specification PDF; Sample Assessment Materials; Course materials; Past paper search"
  },
  {
    board: "Pearson",
    program: "International GCSE (9-1)",
    subject_code: "4CH1",
    subject_title: "Chemistry",
    brief_description: "Chemical principles, reactions, and quantitative chemistry for international cohorts.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Specification PDF; Sample Assessment Materials; Course materials; Past paper search"
  },
  {
    board: "Pearson",
    program: "International GCSE (9-1)",
    subject_code: "4MA1",
    subject_title: "Mathematics A",
    brief_description: "Core mathematics course; check specification for tiering and paper structure.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "Foundation/Higher",
    recommended_official_resources: "Specification PDF; Sample Assessment Materials; Course materials"
  },
  {
    board: "Pearson",
    program: "International GCSE (9-1)",
    subject_code: "4PH1",
    subject_title: "Physics",
    brief_description: "Physics principles across mechanics, electricity, waves, and modern physics in a linear model.",
    assessment_type: "Exam",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Specification PDF; Sample Assessment Materials; Course materials; Past paper search"
  },
  {
    board: "Pearson",
    program: "International GCSE (9-1)",
    subject_code: "4EA1",
    subject_title: "English Language A",
    brief_description: "English language skills; includes routes with coursework and optional spoken language endorsement.",
    assessment_type: "Exam + Coursework",
    typical_age_or_grade: "Ages 14–16 (typically)",
    tiering: "None",
    recommended_official_resources: "Specification PDF; Sample Assessment Materials; Course materials"
  }
];
