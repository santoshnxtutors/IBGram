// Turn the received tutor applications into live tutor profiles and shortlist the applications.
// Content comes only from each application form and CV (current employers left unnamed).
//
//   npx tsx --env-file=.env scripts/new-tutors/write.ts          # dry run: print what would be written
//   npx tsx --env-file=.env scripts/new-tutors/write.ts --write  # write to the DB in DATABASE_URL
//   npx tsx --env-file=.env scripts/new-tutors/write.ts --undo   # delete these tutors, reset applications
import { PrismaClient, type Curriculum } from "@prisma/client";

const prisma = new PrismaClient();
const PHOTO = "/api/media/tutor-applications/photos/";
const GURUGRAM = "cmpld4ivm001dln0ghlvb7j1m"; // the Gurugram row the 72 existing tutor locations use
const KOCHI = "cmpldqsxg00aqlnrssmg1xjz8";

type Faq = { question: string; answer: string };
type Seed = {
  applicationIds: string[];
  slug: string;
  displayName: string;
  headline: string;
  bio: string;
  about: string[];
  experienceYears: number;
  hourlyRate: number | null;
  currency: "INR" | "USD";
  avatarUrl: string | null;
  education: string;
  methodology: string;
  availabilityText: string;
  languages: string[];
  tags: string[];
  qualifications: { title: string; description: string }[];
  countriesCovered: string[];
  subjects: { name: string; curriculum: Curriculum; level?: string }[];
  curriculums: { curriculum: Curriculum; programme: string | null; isPrimary?: boolean }[];
  location?: { cityId: string; cityName: string; citySlug: string };
  faqs: Faq[];
};

const TUTORS: Seed[] = [
  {
    applicationIds: ["cmul7j3390001qmuo8cgfal7j"],
    slug: "savneet-kaur-online-ib-myp-individuals-and-societies-tutor",
    displayName: "Savneet Kaur",
    headline: "Online IB MYP Individuals and Societies Tutor",
    bio: "Savneet Kaur is a Gurgaon-based online IB MYP Individuals and Societies tutor with 9 years of teaching experience and an MA in Education, available on weekday evenings and weekends.",
    about: [
      "Savneet Kaur is an online tutor for IB MYP Individuals and Societies, based in Gurgaon, Haryana. With 9 years of teaching experience and an MA in Education, Savneet works with Middle Years Programme students who want steady, structured support in one of the broadest MYP subject groups.",
      "MYP Individuals and Societies brings history, geography, economics and civics together through conceptual inquiry rather than memorised facts. Students are assessed against four criteria: Knowing and understanding, Investigating, Communicating, and Thinking critically. Lessons work on these criteria directly, helping students read a task carefully, plan an investigation, use sources with care and write answers that show understanding instead of summary.",
      "Sessions follow the student's current school unit and can cover key concepts and content, research questions and action plans for investigations, source analysis, structured paragraph writing, and revision before summative tasks. For MYP 4 and MYP 5 students, this also builds the analytical writing habits that carry into IB Diploma humanities courses.",
      "Classes are online, so students in Gurgaon and anywhere else in India can join from home. Savneet is available on weekdays after 6 PM and on weekends, which fits around the school day. Fees start at ₹1,500 per hour; please share the student's grade, current unit and preferred times when you enquire.",
    ],
    experienceYears: 9,
    hourlyRate: 1500,
    currency: "INR",
    avatarUrl: null,
    education: "MA Education (Uttarakhand)",
    methodology:
      "Criterion-focused online lessons for IB MYP Individuals and Societies: unit concepts, investigation planning, source analysis and structured written responses, aligned with the student's school unit and assessment calendar.",
    availabilityText: "Weekdays after 6:00 PM; weekends",
    languages: [],
    tags: [
      "IB MYP Individuals and Societies tutor",
      "MYP I&S tutor",
      "IB MYP humanities tutor",
      "MYP History and Geography tutor",
      "Online IB tutor Gurgaon",
    ],
    qualifications: [
      { title: "MA Education", description: "Postgraduate degree in Education (Uttarakhand)." },
      { title: "9 Years of Teaching Experience", description: "Now focused on online IB MYP Individuals and Societies tuition." },
    ],
    countriesCovered: ["in"],
    subjects: [{ name: "MYP Individuals and Societies", curriculum: "IB" }],
    curriculums: [
      { curriculum: "IB", programme: null, isPrimary: true },
      { curriculum: "IB", programme: "MYP" },
    ],
    location: { cityId: GURUGRAM, cityName: "Gurugram", citySlug: "gurugram" },
    faqs: [
      { question: "Which subject do you teach?", answer: "I teach IB MYP Individuals and Societies, which brings together history, geography, economics and civics within the Middle Years Programme." },
      { question: "How do you prepare students for MYP Individuals and Societies assessments?", answer: "Lessons work through the four MYP criteria, Knowing and understanding, Investigating, Communicating, and Thinking critically, using the student's own school units and tasks." },
      { question: "What is your qualification and experience?", answer: "I hold an MA in Education and have 9 years of teaching experience." },
      { question: "Are classes online?", answer: "Yes. All classes are online, so students in Gurgaon and anywhere in India can join from home." },
      { question: "When are you available?", answer: "I am available on weekdays after 6 PM and on weekends." },
      { question: "What are your fees?", answer: "Fees range from ₹1,500 to ₹2,500 per hour depending on grade and lesson format. Please confirm the final fee before booking." },
    ],
  },
  {
    applicationIds: ["cmul0mdcd0001qm13j52na4qj"],
    slug: "zenia-shahin-online-ib-pyp-tutor",
    displayName: "Zenia Shahin",
    headline: "Online IB PYP Tutor and PYP Coordinator",
    bio: "Zenia Shahin is an online IB PYP tutor and serving PYP Coordinator at an IB World School in Kozhikode, with more than 8 years in education and an MSc in Applied Psychology.",
    about: [
      "Zenia Shahin is an IB Primary Years Programme educator based in Kozhikode (Calicut), Kerala, offering online PYP tutoring for primary learners. Zenia brings more than 8 years in education, including 5 years within the IB, and currently works as PYP Coordinator at an IB World School, leading PYP 1 to 5 across seven sections.",
      "That coordinator role shapes how sessions are planned. Zenia has built a Pre-K to PYP 5 Programme of Inquiry, written the school's PYP delivery procedures and led assessment standardisation, so tutoring connects directly with how PYP schools plan units of inquiry, lines of inquiry and assessment. Support can include making sense of a current unit, research and presentation skills, early numeracy and literacy, and guidance through inquiry projects.",
      "Zenia holds an MSc in Applied Psychology from Bharathiar University and a BSc in Psychology, which supports a wellbeing-centred approach grounded in child development. Professional learning includes the IB Category 1 workshop Making the PYP Happen: Implementing Agency, a Diploma in TEFL/TESOL, a Diploma in Early Years Care and Education, and the IB Educator Certificate (IBEC), currently in progress. Earlier, Zenia designed a kindergarten curriculum adopted by more than 20 schools in Kerala and Tamil Nadu and trained around 200 teachers.",
      "Classes are online, so families across India and abroad can book sessions. Fees are ₹2,500 per hour. Please share the child's PYP grade, current unit and preferred times when you enquire, and availability will be confirmed.",
    ],
    experienceYears: 8,
    hourlyRate: 2500,
    currency: "INR",
    avatarUrl: null,
    education: "MSc Applied Psychology, Bharathiar University",
    methodology:
      "Inquiry-based online PYP sessions built around the child's current unit of inquiry, with attention to student agency, research and communication skills, early numeracy and literacy, and wellbeing.",
    availabilityText: "Availability to be confirmed on enquiry.",
    languages: [],
    tags: ["IB PYP tutor", "PYP Coordinator", "IB PYP tutor Kerala", "Units of Inquiry support", "Online IB primary tutor"],
    qualifications: [
      { title: "MSc Applied Psychology", description: "Bharathiar University, Coimbatore (2018–2020)." },
      { title: "IB Category 1 Workshop", description: "Making the PYP Happen: Implementing Agency." },
      { title: "IB Educator Certificate (IBEC)", description: "In progress, ITARI and University of Windsor." },
      { title: "Diploma in TEFL/TESOL", description: "AP Teacher Training Institute, Canada (2022)." },
    ],
    countriesCovered: ["in"],
    subjects: [{ name: "IB PYP", curriculum: "IB" }],
    curriculums: [
      { curriculum: "IB", programme: null, isPrimary: true },
      { curriculum: "IB", programme: "PYP" },
    ],
    faqs: [
      { question: "Which programme do you teach?", answer: "I teach the IB Primary Years Programme (PYP), supporting learners from the early years through PYP 5." },
      { question: "What is your IB experience?", answer: "I have more than 8 years in education, including 5 years within the IB, and I currently work as PYP Coordinator at an IB World School in Kozhikode." },
      { question: "What are your qualifications?", answer: "I hold an MSc in Applied Psychology from Bharathiar University and a BSc in Psychology. I have completed the IB Category 1 workshop Making the PYP Happen: Implementing Agency and I am completing the IB Educator Certificate." },
      { question: "How are sessions planned?", answer: "Sessions follow the child's current unit of inquiry and focus on understanding, research, communication, and early numeracy and literacy skills." },
      { question: "Are classes online?", answer: "Yes, all classes are online." },
      { question: "What are your fees?", answer: "Fees are ₹2,500 per hour. Please confirm the final fee and schedule before booking." },
    ],
  },
  {
    applicationIds: ["cmui8cdso0001qmrgcw5xbxmg"],
    slug: "olga-santos-online-portuguese-english-tutor",
    displayName: "Olga Santos",
    headline: "Online Portuguese and English Tutor for IB and IGCSE",
    bio: "Olga Santos is a Porto-based online Portuguese and English tutor with 20 years of experience and a Modern Languages degree from the University of Porto, teaching Portuguese from A1 to C2.",
    about: [
      "Olga Santos is a language tutor based in Porto, Portugal, teaching Portuguese from A1 to C2 and English from A1 to C1 online. With 20 years of teaching experience, Olga supports students who need Portuguese or English within international school programmes, including IB PYP, IB MYP, IB DP and IGCSE, as well as learners studying the language for its own sake.",
      "Olga holds a degree in Modern Languages and Literatures, Portuguese and English Studies, from the Faculty of Arts of the University of Porto (FLUP), and is completing a Master's in Teaching Portuguese as a First Language and English as a Foreign Language at the same faculty. Further qualifications include the Cambridge First Certificate in English and a Certificate of Pedagogical Competences (CCP) validated by Portugal's IEFP.",
      "Olga's teaching career includes long-running private tuition in Portuguese and English for students from 5th to 12th grade, with preparation for Portuguese national exams in both languages, six years as a teacher and pedagogical coordinator at a study-support centre, and current work as a trainer in Portuguese and English courses. Work as an English–Portuguese translator and proofreader adds close attention to grammar, register and precise writing.",
      "For IB and IGCSE students, lessons can support Portuguese as a first or additional language, including IB Portuguese A, Portuguese B and ab initio courses, alongside English language development. Classes are online from 5:00 AM to 1:00 PM Portugal time, which is roughly 10:30 AM to 6:30 PM IST in winter and 9:30 AM to 5:30 PM IST in summer.",
    ],
    experienceYears: 20,
    hourlyRate: null,
    currency: "USD",
    avatarUrl: `${PHOTO}1790417485989-304a474b-31a0-4ee9-8a4f-a14edafac4cb-1000076039.jpg`,
    education: "Degree in Modern Languages and Literatures (Portuguese and English Studies), University of Porto",
    methodology:
      "Level-based online Portuguese and English lessons from beginner to advanced, covering grammar, reading, writing, speaking and exam preparation, aligned with the student's school course and CEFR level.",
    availabilityText: "5:00 AM–1:00 PM Portugal time",
    languages: ["Portuguese", "English"],
    tags: [
      "IB Portuguese tutor",
      "Online Portuguese tutor",
      "IGCSE Portuguese tutor",
      "Portuguese A1 to C2 tutor",
      "IB English B tutor",
      "Portuguese tutor Porto",
    ],
    qualifications: [
      { title: "Degree in Modern Languages and Literatures", description: "Portuguese and English Studies, Faculty of Arts, University of Porto (2003)." },
      { title: "Master's in Teaching Portuguese and English", description: "In progress, Faculty of Arts, University of Porto." },
      { title: "Cambridge First Certificate in English", description: "Cambridge English (1991)." },
      { title: "Certificate of Pedagogical Competences (CCP)", description: "Trainer certification validated by IEFP, Portugal (2022)." },
    ],
    countriesCovered: ["pt"],
    subjects: [
      { name: "Portuguese", curriculum: "IB" },
      { name: "English", curriculum: "IB" },
      { name: "Portuguese", curriculum: "IGCSE" },
      { name: "English", curriculum: "IGCSE" },
    ],
    curriculums: [
      { curriculum: "IB", programme: null, isPrimary: true },
      { curriculum: "IB", programme: "PYP" },
      { curriculum: "IB", programme: "MYP" },
      { curriculum: "IB", programme: "DP" },
      { curriculum: "IGCSE", programme: null },
    ],
    faqs: [
      { question: "Which languages do you teach?", answer: "I teach Portuguese from A1 to C2 and English from A1 to C1." },
      { question: "Do you teach Portuguese for IB and IGCSE students?", answer: "Yes. I support Portuguese and English for students following IB PYP, IB MYP, IB DP and IGCSE, as well as independent language learners." },
      { question: "What are your qualifications?", answer: "I hold a degree in Modern Languages and Literatures (Portuguese and English Studies) from the University of Porto, the Cambridge First Certificate in English and a Certificate of Pedagogical Competences. I am completing a Master's in Teaching Portuguese and English." },
      { question: "How much experience do you have?", answer: "I have 20 years of teaching experience, including private tuition in Portuguese and English for students from 5th to 12th grade and preparation for Portuguese national exams." },
      { question: "When are you available?", answer: "I am available for online lessons from 5:00 AM to 1:00 PM Portugal time." },
      { question: "Are lessons online?", answer: "Yes, all lessons are online." },
    ],
  },
  {
    applicationIds: ["cmugc1fq50001qmh5z0pbojxk"],
    slug: "antonita-nishanth-online-igcse-english-tutor",
    displayName: "Antonita Nishanth",
    headline: "Online Cambridge and Edexcel IGCSE English Tutor",
    bio: "Antonita Nishanth is an online IGCSE English tutor with 14 years of teaching experience, including 12 years as a secondary English teacher and Head of English at an international school in Malaysia.",
    about: [
      "Antonita Nishanth is an IGCSE English specialist based in Kochi, Kerala, teaching online. Antonita has 14 years of teaching experience, including 12 years as a secondary English Language and Literature teacher and Head of English at an international school in Malaysia, teaching the Cambridge and Pearson Edexcel IGCSE English courses.",
      "Subject coverage includes Cambridge IGCSE First Language English (0500), Cambridge IGCSE English as a Second Language (0510), Cambridge IGCSE Literature in English (0475) and Pearson Edexcel International GCSE English Literature (4ET1). Antonita reports that a former student received a Pearson Outstanding Learner Award for the highest mark in Asia in Edexcel English Literature, and has worked extensively with mixed international cohorts and ESL learners.",
      "Before moving into school teaching, Antonita lectured in English at undergraduate level in Kochi, trained learners for the Cambridge English Business Vantage (BEC) exam, and taught the postgraduate MA English programme as a part-time counsellor for IGNOU. Antonita holds an MA in English Language and Literature from Mahatma Gandhi University and qualified in the UGC National Eligibility Test (NET) for lectureship.",
      "Lessons focus on close reading, textual analysis, directed and composition writing, essay structure and exam technique for each syllabus code. Classes are online, Monday to Friday, from 10 AM to 12 noon and 2 PM to 5 PM IST. Fees range from ₹1,500 to ₹2,000 per hour.",
    ],
    experienceYears: 14,
    hourlyRate: 1500,
    currency: "INR",
    avatarUrl: null,
    education: "MA English Language and Literature, Mahatma Gandhi University; UGC NET qualified",
    methodology:
      "Syllabus-specific online lessons for IGCSE English and Literature: close reading, textual analysis, directed writing, composition and essay practice, with exam technique for each paper.",
    availabilityText: "Mon–Fri, 10:00 AM–12:00 PM and 2:00 PM–5:00 PM IST",
    languages: ["English"],
    tags: [
      "IGCSE English tutor",
      "IGCSE 0500 First Language English tutor",
      "IGCSE 0510 ESL tutor",
      "IGCSE 0475 Literature tutor",
      "Edexcel English Literature 4ET1 tutor",
      "Online English tutor Kochi",
    ],
    qualifications: [
      { title: "MA English Language and Literature", description: "Mahatma Gandhi University, Kerala (2009–2011)." },
      { title: "UGC NET for Lectureship", description: "University Grants Commission, June 2012." },
      { title: "Head of English, International School", description: "12 years teaching Cambridge and Edexcel IGCSE English in Malaysia (2013–2025)." },
    ],
    countriesCovered: ["in"],
    subjects: [
      { name: "English Language", curriculum: "IGCSE" },
      { name: "English Literature", curriculum: "IGCSE" },
      { name: "English as a Second Language", curriculum: "IGCSE" },
    ],
    curriculums: [{ curriculum: "IGCSE", programme: null, isPrimary: true }],
    location: { cityId: KOCHI, cityName: "Kochi", citySlug: "kochi" },
    faqs: [
      { question: "Which IGCSE English syllabuses do you teach?", answer: "Cambridge IGCSE First Language English (0500), English as a Second Language (0510), Literature in English (0475), and Pearson Edexcel International GCSE English Literature (4ET1)." },
      { question: "What is your teaching experience?", answer: "I have 14 years of teaching experience, including 12 years as a secondary English teacher and Head of English at an international school in Malaysia, and a year as an undergraduate English lecturer in Kochi." },
      { question: "What are your qualifications?", answer: "I hold an MA in English Language and Literature from Mahatma Gandhi University and qualified in the UGC NET for lectureship." },
      { question: "Do you work with ESL students?", answer: "Yes. I have taught mixed international cohorts and run remedial classes for ESL learners." },
      { question: "When are you available?", answer: "Monday to Friday, 10 AM to 12 noon and 2 PM to 5 PM IST, online." },
      { question: "What are your fees?", answer: "Fees range from ₹1,500 to ₹2,000 per hour. Please confirm the final fee before booking." },
    ],
  },
  {
    // Applied twice; the newer form is the source, the older one supplied the photo.
    applicationIds: ["cmud4qhqe0001qmwjiosc4ncc", "cmubly4ys0001qmszhvst4wgq"],
    slug: "shagun-tyagi-online-ib-igcse-physics-maths-tutor",
    displayName: "Shagun Tyagi",
    headline: "Online IB and IGCSE Physics and Mathematics Tutor",
    bio: "Shagun Tyagi is an online Physics and Mathematics tutor for IB MYP, IB DP, IGCSE and A Level students, with 9 years of teaching experience, an M.Sc. in Physics and a B.Ed.",
    about: [
      "Shagun Tyagi is an online Physics and Mathematics tutor based in Bhiwadi, Rajasthan, close to Gurgaon and Delhi NCR. With 9 years of experience teaching Classes 6 to 12, Shagun supports students following IB MYP, IB DP, Cambridge and Pearson Edexcel IGCSE, A Level, CBSE and ICSE.",
      "Shagun holds a Master's degree in Physics from Gurukul Kangri University (2018), a B.Ed. (2023) and a graduate degree in General Science, and currently teaches Mathematics and Physics online. Lessons focus on conceptual clarity: finding the gap in a student's understanding, rebuilding the fundamentals and then moving on to exam-style problems.",
      "Physics coverage includes mechanics, forces and motion, work, energy and power, gravitation, thermal physics, waves and sound, light and optics, and electricity and magnetism. Mathematics runs from number, algebra, geometry and mensuration in the middle years to coordinate geometry, trigonometry, functions, probability and advanced algebra for senior students. Sessions include doubt-solving, worksheets, topic tests and revision before school assessments.",
      "Classes are online and availability is flexible across the week. Shagun teaches in English and Hindi, and fees start at ₹800 per hour. Please share the student's curriculum, grade and target topics when you enquire.",
    ],
    experienceYears: 9,
    hourlyRate: 800,
    currency: "INR",
    avatarUrl: `${PHOTO}1790017072803-3d5e2380-d2a8-43e9-8d75-80fcb195a6f5-IMG_0315.jpeg`,
    education: "M.Sc. Physics, Gurukul Kangri University; B.Ed.",
    methodology:
      "Concept-first online lessons in Physics and Mathematics: diagnose learning gaps, rebuild fundamentals, then practise exam-style numerical and application questions, with regular doubt-solving, worksheets and topic tests.",
    availabilityText: "Flexible; available throughout the week",
    languages: ["English", "Hindi"],
    tags: ["IB Physics tutor", "IB Maths tutor", "IGCSE Physics tutor", "IGCSE Maths tutor", "IB MYP Physics tutor", "Online Physics tutor Bhiwadi"],
    qualifications: [
      { title: "M.Sc. Physics", description: "Gurukul Kangri University (2018)." },
      { title: "B.Ed.", description: "Bachelor of Education (2023)." },
      { title: "9 Years of Teaching Experience", description: "Mathematics and Physics for Classes 6 to 12, including online teaching." },
    ],
    countriesCovered: ["in"],
    subjects: [
      { name: "Physics", curriculum: "IB" },
      { name: "Mathematics", curriculum: "IB" },
      { name: "Physics", curriculum: "IGCSE" },
      { name: "Mathematics", curriculum: "IGCSE" },
    ],
    curriculums: [
      { curriculum: "IB", programme: null, isPrimary: true },
      { curriculum: "IB", programme: "MYP" },
      { curriculum: "IB", programme: "DP" },
      { curriculum: "IGCSE", programme: null },
    ],
    faqs: [
      { question: "Which subjects and curricula do you teach?", answer: "I teach Physics and Mathematics for IB MYP, IB DP, Cambridge and Edexcel IGCSE, A Level, CBSE and ICSE students." },
      { question: "What are your qualifications?", answer: "I hold a Master's degree in Physics from Gurukul Kangri University, a B.Ed. and a graduate degree in General Science." },
      { question: "How much teaching experience do you have?", answer: "I have 9 years of experience teaching Mathematics and Physics to students from Classes 6 to 12." },
      { question: "How do you teach?", answer: "I start by finding gaps in understanding, rebuild the fundamentals, and then practise exam-style numerical and application questions with regular tests and doubt-solving." },
      { question: "When are you available?", answer: "My availability is flexible throughout the week for online classes." },
      { question: "What are your fees?", answer: "Fees range from ₹800 to ₹1,500 per hour depending on grade and curriculum. Please confirm the final fee before booking." },
    ],
  },
  {
    applicationIds: ["cmucoutj10001qmat757cah5m"],
    slug: "richard-harrison-online-cambridge-a-level-english-history-tutor",
    displayName: "Richard Harrison",
    headline: "Online Cambridge A Level English, History and Law Tutor",
    bio: "Richard Harrison is an online Cambridge International A Level humanities tutor, a Cambridge Registered Senior Examiner and UK-qualified teacher, with more than 25 years of teaching experience.",
    about: [
      "Richard Harrison is a Cambridge International humanities tutor based in Cava de' Tirreni, Italy, teaching online. A UK Qualified Teacher (QTS), Cambridge International Registered Senior Examiner since 2021 and Pearson Registered EFL Examiner since 2018, Richard brings more than 25 years of teaching experience across the UK, USA, Saudi Arabia and Italy.",
      "Subject support covers Cambridge International AS and A Level English Language (9093), Literature in English (9695), History (9489) with a focus on American and international history, Law (9084) and Global Perspectives and Research (9239). Examiner experience is useful for students who need to understand how answers are marked: how to build an argument, evaluate evidence and sources, and write with precision.",
      "Richard holds an MA in US and Soviet History from Louisiana State University, where Richard also lectured and tutored, a BA (Hons) in International Relations from Keele University, and a postgraduate diploma from the Law Society Finals. Career highlights include university teaching in the USA and Saudi Arabia, international tax law research, and EFL leadership roles in Italy, including EFL Manager for South Italy at Pearson Italia.",
      "Richard works best with AS and A Level students preparing for university entry, especially applicants to Cambridge and other leading UK universities. Undergraduates can also get support with academic writing, research skills, Politics, International Relations and thesis preparation. Lessons are online and scheduled on request; fees are about €65 to €100 per hour depending on level.",
    ],
    experienceYears: 25,
    hourlyRate: 75,
    currency: "USD",
    avatarUrl: `${PHOTO}1790082423035-222372d4-86a0-4565-b604-a0ccdd6b92e7-RSH.IPA1.jpeg`,
    education: "MA US & Soviet History, Louisiana State University; UK Qualified Teacher Status",
    methodology:
      "Exam-focused online tuition for Cambridge International AS and A Level humanities, informed by examiner experience: argument structure, source and evidence evaluation, critical analysis and academic English, with university-entry and research-skills support.",
    availabilityText: "Scheduled on request (Italy time zone)",
    languages: ["English"],
    tags: [
      "Cambridge A Level English tutor",
      "A Level Literature in English tutor",
      "A Level History tutor",
      "A Level Law tutor",
      "Global Perspectives and Research tutor",
      "Cambridge examiner tutor",
    ],
    qualifications: [
      { title: "Cambridge International Registered Senior Examiner", description: "2021–present." },
      { title: "UK Qualified Teacher Status (QTS)", description: "Department for Education." },
      { title: "MA US & Soviet History", description: "Louisiana State University (1990)." },
      { title: "BA (Hons) International Relations", description: "University of Keele (1984)." },
      { title: "Postgraduate Diploma, Law Society Finals", description: "Leeds Metropolitan University (1992)." },
    ],
    countriesCovered: ["it"],
    // Cambridge International A Level only; the Curriculum enum has no A Level value, so it sits
    // under the Cambridge (IGCSE) board with level "A Level".
    subjects: [
      { name: "English Language", curriculum: "IGCSE", level: "A Level" },
      { name: "Literature in English", curriculum: "IGCSE", level: "A Level" },
      { name: "History", curriculum: "IGCSE", level: "A Level" },
      { name: "Law", curriculum: "IGCSE", level: "A Level" },
      { name: "Global Perspectives and Research", curriculum: "IGCSE", level: "A Level" },
    ],
    curriculums: [{ curriculum: "IGCSE", programme: "A Level", isPrimary: true }],
    faqs: [
      { question: "Which subjects do you teach?", answer: "Cambridge International AS and A Level English Language (9093), Literature in English (9695), History (9489), Law (9084) and Global Perspectives and Research (9239)." },
      { question: "Are you a Cambridge examiner?", answer: "Yes. I have been a Cambridge International Registered Senior Examiner since 2021 and a Pearson Registered EFL Examiner since 2018." },
      { question: "What are your qualifications?", answer: "I hold UK Qualified Teacher Status, an MA in US and Soviet History from Louisiana State University, a BA (Hons) in International Relations from Keele University and a postgraduate diploma from the Law Society Finals." },
      { question: "Which students do you work with?", answer: "Mainly AS and A Level students preparing for university entry, especially Cambridge and other leading UK universities, and undergraduates who need academic writing, research or thesis support." },
      { question: "Are lessons online?", answer: "Yes. Lessons are online and scheduled on request; I am based in Italy." },
      { question: "What are your fees?", answer: "Fees are about €65 to €100 per hour depending on level. Please confirm the final fee before booking." },
    ],
  },
];

const profileUrl = (slug: string) => `https://www.ibgram.com/tutor-profile/${slug}/`;
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

async function write(t: Seed) {
  const about = t.about.join("\n\n");
  const data = {
    displayName: t.displayName,
    status: "active" as const,
    headline: t.headline,
    bio: t.bio,
    about,
    experienceYears: t.experienceYears,
    rating: 4.8,
    hourlyRate: t.hourlyRate,
    currency: t.currency,
    avatarUrl: t.avatarUrl,
    verified: true,
    approved: true,
    faqs: t.faqs,
    deletedAt: null,
  };
  const profile = {
    education: t.education,
    methodology: t.methodology,
    responseTime: "< 30 mins",
    availabilityText: t.availabilityText,
    languages: t.languages,
    tags: t.tags,
    metadata: {
      teachingModes: ["Online"],
      qualifications: t.qualifications,
      countriesCovered: t.countriesCovered,
      visibilityPlacements: [],
    },
  };

  await prisma.$transaction(async (tx) => {
    const tutor = await tx.tutor.upsert({ where: { slug: t.slug }, create: { slug: t.slug, ...data }, update: data });
    await tx.tutorProfile.upsert({ where: { tutorId: tutor.id }, create: { tutorId: tutor.id, ...profile }, update: profile });
    await tx.tutorSubject.deleteMany({ where: { tutorId: tutor.id } });
    await tx.tutorCurriculum.deleteMany({ where: { tutorId: tutor.id } });
    await tx.tutorLocation.deleteMany({ where: { tutorId: tutor.id } });
    await tx.tutorSubject.createMany({
      data: t.subjects.map((s, i) => ({
        tutorId: tutor.id, subjectName: s.name, subjectSlug: slugify(s.name), curriculum: s.curriculum, level: s.level ?? null, priority: i,
      })),
    });
    await tx.tutorCurriculum.createMany({
      data: t.curriculums.map((c) => ({ tutorId: tutor.id, curriculum: c.curriculum, programme: c.programme, isPrimary: c.isPrimary ?? false })),
    });
    if (t.location) {
      await tx.tutorLocation.create({
        data: { tutorId: tutor.id, ...t.location, onlineTutoringAvailable: true, homeTutoringAvailable: false, notes: "Online sessions only." },
      });
    }
    await tx.jobApplication.updateMany({
      where: { id: { in: t.applicationIds } },
      data: { status: "shortlisted", adminNotes: profileUrl(t.slug) },
    });
  });
}

async function undo(t: Seed) {
  await prisma.$transaction([
    prisma.tutor.deleteMany({ where: { slug: t.slug } }),
    prisma.jobApplication.updateMany({
      where: { id: { in: t.applicationIds }, adminNotes: profileUrl(t.slug) },
      data: { status: "received", adminNotes: null },
    }),
  ]);
}

(async () => {
  const mode = process.argv.includes("--write") ? "write" : process.argv.includes("--undo") ? "undo" : "dry";
  for (const t of TUTORS) {
    const existing = await prisma.tutor.findUnique({ where: { slug: t.slug }, select: { id: true } });
    const apps = await prisma.jobApplication.count({ where: { id: { in: t.applicationIds } } });
    if (apps !== t.applicationIds.length) throw new Error(`${t.slug}: expected ${t.applicationIds.length} applications, found ${apps}`);
    if (t.bio.length > 200) throw new Error(`${t.slug}: bio is ${t.bio.length} chars, keep it under 200 for the meta description`);
    console.log(`${mode.padEnd(5)} ${existing ? "update" : "create"} ${t.slug}  about=${words(t.about.join(" "))}w bio=${t.bio.length}c faqs=${t.faqs.length} photo=${t.avatarUrl ? "yes" : "no"}`);
    if (mode === "write") await write(t);
    if (mode === "undo") await undo(t);
  }
  await prisma.$disconnect();
})();
