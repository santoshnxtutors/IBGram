import { absoluteUrl } from "./slug-utils";

export type IgcseHubLinkType = "curriculum" | "subject" | "tutor" | "assessment" | "platform";

export type IgcseHubLink = {
  linkId: string;
  title: string;
  description: string;
  href: string;
  anchorText: string;
  linkType: IgcseHubLinkType;
  priority: number;
};

export type IgcseHubFaq = {
  question: string;
  answer: string;
};

export type IgcsePagesHubData = {
  pageId: string;
  canonicalPath: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  h1: string;
  heroSummary: string;
  lastUpdated: string;
  links: IgcseHubLink[];
  faqs: IgcseHubFaq[];
};

export const IGCSE_PAGES_HUB: IgcsePagesHubData = {
  pageId: "igcse-pages-hub",
  canonicalPath: "/igcse-pages/",
  canonicalUrl: absoluteUrl("/igcse-pages/"),
  metaTitle: "IGCSE Pages for Cambridge & Edexcel Tutors",
  metaDescription:
    "Explore IGCSE pages for Cambridge and Pearson Edexcel support, subject tutors, exam prep, assessment guidance, maths, sciences, English and humanities.",
  keywords: [
    "IGCSE Pages",
    "IGCSE tutors",
    "Cambridge IGCSE tutors",
    "Pearson Edexcel IGCSE tutors",
    "IGCSE subject tutors",
    "IGCSE maths tutor",
    "IGCSE physics tutor",
    "IGCSE chemistry tutor",
    "IGCSE English tutor",
    "IGCSE exam preparation",
  ],
  ogTitle: "IGCSE Pages for Cambridge & Edexcel Support | IB Gram",
  ogDescription:
    "A parent-friendly IGCSE page hub for Cambridge and Pearson Edexcel subject support, tutoring options, assessment guidance and next-step planning.",
  ogImage: absoluteUrl("/images/ib-gram-city-og.svg"),
  h1: "IGCSE Pages for Cambridge & Edexcel Support",
  heroSummary:
    "Use this hub to move quickly between IB Gram's IGCSE curriculum guide, subject directory, tutor discovery, assessment notes and contact routes. The page is built for families comparing Cambridge IGCSE and Pearson Edexcel International GCSE support without keyword-stuffed doorway content.",
  lastUpdated: "2026-05-04",
  links: [
    {
      linkId: "igcse-curriculum-hub",
      title: "IGCSE curriculum guide",
      description:
        "Start with the main IGCSE guide for Cambridge and Pearson Edexcel programme structure, subject browsing and board-aware tutoring context.",
      href: "/igcse/",
      anchorText: "Explore the IGCSE curriculum guide",
      linkType: "curriculum",
      priority: 1,
    },
    {
      linkId: "igcse-subject-directory",
      title: "IGCSE subject directory",
      description:
        "Browse subject support across mathematics, sciences, English, business, economics, humanities and languages.",
      href: "/igcse/#subjects",
      anchorText: "Browse IGCSE subjects",
      linkType: "subject",
      priority: 2,
    },
    {
      linkId: "igcse-tutors",
      title: "IGCSE tutor discovery",
      description:
        "Review available tutor profiles and compare support for Cambridge IGCSE and Edexcel International GCSE learners.",
      href: "/igcse/#igcse-tutors",
      anchorText: "Find an IGCSE tutor",
      linkType: "tutor",
      priority: 3,
    },
    {
      linkId: "igcse-assessment-guide",
      title: "IGCSE assessment guide",
      description:
        "Understand grading, exam routes, board differences and how students can plan revision without guessing late in the course.",
      href: "/igcse/#assessment",
      anchorText: "Read the IGCSE assessment guide",
      linkType: "assessment",
      priority: 4,
    },
    {
      linkId: "global-tutor-directory",
      title: "Tutor directory",
      description:
        "Open the wider tutor directory when you want to compare profiles, availability, subject strengths and tutoring modes.",
      href: "/tutors/",
      anchorText: "Compare tutor profiles",
      linkType: "platform",
      priority: 5,
    },
    {
      linkId: "contact-igcse-advisor",
      title: "Academic advisor",
      description:
        "Share the student's board, subjects, current grade range and target exam session so IB Gram can suggest a suitable next step.",
      href: "/contact-us/",
      anchorText: "Speak with an IGCSE academic advisor",
      linkType: "platform",
      priority: 6,
    },
  ],
  faqs: [
    {
      question: "What is the purpose of the IGCSE Pages hub?",
      answer:
        "The hub gives families one clean place to reach IB Gram's IGCSE curriculum guide, subject directory, tutor discovery section, assessment notes and contact routes. It is meant to reduce searching and help parents compare the right support path faster.",
    },
    {
      question: "Does IB Gram support both Cambridge IGCSE and Pearson Edexcel International GCSE?",
      answer:
        "Yes. IB Gram positions IGCSE support around both Cambridge IGCSE and Pearson Edexcel International GCSE. The exact tutor match depends on the student's board, subject, paper route, exam session and schedule.",
    },
    {
      question: "Which IGCSE subjects are commonly requested?",
      answer:
        "Families commonly ask for IGCSE maths, physics, chemistry, biology, English language, English literature, economics, business studies, history, geography and computer science support. Availability can vary by subject and timing.",
    },
    {
      question: "Can students get online IGCSE tutoring?",
      answer:
        "Yes. Online IGCSE tutoring is usually the most flexible mode for board-specific help, especially when a student needs a tutor familiar with a particular syllabus, paper pattern or assessment objective.",
    },
    {
      question: "Is this page affiliated with Cambridge or Pearson Edexcel?",
      answer:
        "No. IB Gram is an independent tutoring platform. Board and syllabus names are used only to describe the curriculum support families are looking for.",
    },
    {
      question: "How should a parent choose the right IGCSE tutor?",
      answer:
        "A good match starts with the board, subject code or specification, current performance, target grade, exam session and learning gaps. IB Gram recommends choosing a tutor who can explain the syllabus clearly and turn assessment objectives into weekly practice.",
    },
  ],
};
