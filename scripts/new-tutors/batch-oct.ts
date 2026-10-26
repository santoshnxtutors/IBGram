// October batch: 7 new tutor profiles from applications + CVs, rating 4 for all 15 applicants,
// blank areas filled on the 8 applicants who already had profiles, and every application shortlisted
// with its profile URL in adminNotes. Current employers left unnamed.
//   npx tsx --env-file=.env scripts/new-tutors/batch-oct.ts          # dry run
//   npx tsx --env-file=.env scripts/new-tutors/batch-oct.ts --write
import { PrismaClient, type Curriculum } from "@prisma/client";

const prisma = new PrismaClient();
const WRITE = process.argv.includes("--write");
const PHOTO = "/api/media/tutor-applications/photos/";
const slugify = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const url = (slug: string) => `https://www.ibgram.com/tutor-profile/${slug}/`;

type Place = { country: [string, string]; state: string; city: string; tz: string; area: string };
type Seed = {
  app: string; slug: string; name: string; headline: string; bio: string; about: string[];
  exp: number | null; rate: number | null; currency: "INR" | "USD"; photo: string | null;
  education: string; methodology: string; availability: string; languages: string[]; tags: string[];
  quals: { title: string; description: string }[]; countries: string[];
  subjects: { name: string; curriculum: Curriculum; level?: string }[];
  curriculums: { curriculum: Curriculum; programme: string | null; isPrimary?: boolean }[];
  place: Place; faqs: { question: string; answer: string }[];
};

const NEW: Seed[] = [
  {
    app: "cmvi8o07i000uqmj97ep9ki7t",
    slug: "valerie-strassmann-online-ib-german-tutor",
    name: "Valerie Strassmann",
    headline: "Online IB DP German and MYP Individuals and Societies Tutor",
    bio: "Valerie Strassmann is an online IB DP German and IGCSE German tutor with 10+ years in IB and Cambridge international schools, including Head of German and Cambridge Examinations Officer roles.",
    about: [
      "Valerie Strassmann is an international educator teaching online from McKinney, Texas, with more than 10 years of experience across IB, Cambridge and German school systems. Valerie teaches IB DP German ab initio, IB DP German B, IGCSE German as a Foreign Language and MYP Individuals and Societies.",
      "Valerie has built and led a German department at a Cambridge and IB international school in China, taught IB DP German B, First Language German and MYP Individuals and Societies at an IB school in Suzhou, and served as Cambridge Examinations Officer in two schools. Roles have also included Head of Primary, Pastoral and Guidance Coordinator, and university guidance for students applying to Germany.",
      "Valerie holds an MA in Middle Eastern and North African History (magna cum laude) from Tel Aviv University, a BA in Political Science from Ludwig-Maximilians-University Munich and a Bavarian State License for Teaching. IB training covers DP German B, DP German ab initio and MYP Individuals and Societies, alongside Cambridge IGCSE German (0525) training and Positive Discipline certification.",
      "Lessons are online, daily between 8 AM and 4 PM, and focus on speaking confidence, grammar, written tasks and exam preparation for the student's course.",
    ],
    exp: 10, rate: null, currency: "USD",
    photo: `${PHOTO}1792594810635-0dfbc446-976a-424f-aeee-33847b8e66d2-Valerie-Foto.jpg`,
    education: "MA Middle Eastern and North African History, Tel Aviv University\nBA Political Science, Ludwig-Maximilians-University Munich",
    methodology: "Course-specific online German lessons for IB DP German ab initio and B and IGCSE German: speaking, grammar, writing tasks and exam technique, plus criterion-based MYP Individuals and Societies support.",
    availability: "Daily, 8:00 AM–4:00 PM",
    languages: ["German", "English"],
    tags: ["IB German ab initio tutor", "IB German B tutor", "IGCSE German tutor", "MYP Individuals and Societies tutor", "Online German tutor"],
    quals: [
      { title: "MA Middle Eastern and North African History", description: "Tel Aviv University, magna cum laude." },
      { title: "BA Political Science", description: "Ludwig-Maximilians-University Munich." },
      { title: "Bavarian State Teaching License", description: "Bavarian State Ministry of Education and Cultural Affairs." },
      { title: "IB Professional Development", description: "DP German B and DP German ab initio (Cat. 2); MYP Individuals and Societies (Cat. 1)." },
      { title: "Head of German Department", description: "Cambridge and IB international school, also Cambridge Examinations Officer." },
      { title: "Certified Positive Discipline Educator", description: "Positive Discipline Association." },
    ],
    countries: ["us"],
    subjects: [
      { name: "German ab initio", curriculum: "IB" }, { name: "German B", curriculum: "IB" },
      { name: "MYP Individuals and Societies", curriculum: "IB" }, { name: "German as a Foreign Language", curriculum: "IGCSE" },
    ],
    curriculums: [{ curriculum: "IB", programme: null, isPrimary: true }, { curriculum: "IB", programme: "DP" }, { curriculum: "IB", programme: "MYP" }, { curriculum: "IGCSE", programme: null }],
    place: { country: ["United States", "US"], state: "Texas", city: "McKinney", tz: "America/Chicago", area: "All over McKinney" },
    faqs: [
      { question: "Which subjects do you teach?", answer: "IB DP German ab initio, IB DP German B, IGCSE German as a Foreign Language and MYP Individuals and Societies." },
      { question: "What is your experience?", answer: "More than 10 years in IB, Cambridge and German schools, including Head of German Department and Cambridge Examinations Officer roles." },
      { question: "What are your qualifications?", answer: "An MA from Tel Aviv University, a BA from Ludwig-Maximilians-University Munich, a Bavarian State Teaching License, and IB Category 1 and 2 training." },
      { question: "When are you available?", answer: "Daily between 8 AM and 4 PM, online." },
    ],
  },
  {
    app: "cmvheyds50009qmj9vamuskpi",
    slug: "renato-estrela-dos-santos-online-portuguese-tutor",
    name: "Renato Estrela dos Santos",
    headline: "Online Brazilian Portuguese Tutor (A1–C1)",
    bio: "Renato Estrela dos Santos is a native Brazilian Portuguese speaker teaching Portuguese as a foreign language online from beginner (A1) to advanced (C1), with a focus on conversation.",
    about: [
      "Renato Estrela dos Santos is a native Brazilian Portuguese speaker based in Rio Branco, Brazil, teaching Portuguese as a foreign language online at every level from beginner (A1) to advanced (C1).",
      "Lessons focus on conversational Brazilian Portuguese: practical communication, pronunciation, vocabulary and cultural immersion. Renato taught adult education for the municipal education service in Paraíba, Brazil, adapting lessons to learners with different backgrounds, confidence levels and learning speeds.",
      "Renato is completing a Bachelor's degree in Mathematics at UniCesumar and holds a C1 Advanced English certificate (EF SET), so lessons can be explained in English. Classes are online and scheduled on request.",
    ],
    exp: 6, rate: null, currency: "USD",
    photo: `${PHOTO}1792544906306-4395ae71-7168-4db9-b0e6-7e522540cc7f-Foto-perfil.png`,
    education: "Bachelor's Degree in Mathematics (in progress), UniCesumar",
    methodology: "Conversation-led online Portuguese lessons from A1 to C1: speaking practice, pronunciation, everyday vocabulary and Brazilian culture, explained in English where needed.",
    availability: "Scheduled on request",
    languages: ["Portuguese", "English"],
    tags: ["Online Portuguese tutor", "Brazilian Portuguese tutor", "Portuguese conversation tutor", "Portuguese A1 to C1 tutor"],
    quals: [
      { title: "Native Brazilian Portuguese Speaker", description: "Conversational Portuguese from A1 to C1." },
      { title: "Adult Education Teacher", description: "Municipal adult education (EJA) programme, Paraíba, Brazil (2020–2021)." },
      { title: "C1 Advanced English", description: "EF SET English Certificate (2026)." },
      { title: "Bachelor's in Mathematics", description: "In progress, UniCesumar." },
    ],
    countries: ["br"],
    subjects: [{ name: "Portuguese as a Foreign Language", curriculum: "IB", level: "A1–C1" }],
    curriculums: [{ curriculum: "IB", programme: null, isPrimary: true }],
    place: { country: ["Brazil", "BR"], state: "Acre", city: "Rio Branco", tz: "America/Rio_Branco", area: "All over Rio Branco" },
    faqs: [
      { question: "What do you teach?", answer: "Portuguese as a foreign language, from beginner (A1) to advanced (C1), with a focus on conversational Brazilian Portuguese." },
      { question: "Can lessons be explained in English?", answer: "Yes. I hold a C1 Advanced English certificate." },
      { question: "What teaching experience do you have?", answer: "I taught in a municipal adult education programme in Paraíba, Brazil, adapting lessons to learners of different levels." },
      { question: "Are lessons online?", answer: "Yes, all lessons are online and scheduled on request." },
    ],
  },
  {
    app: "cmve88to4000gqmg8gvok3fmw",
    slug: "dr-akhil-sharma-online-ib-maths-physics-tutor",
    name: "Dr Akhil Sharma",
    headline: "Online IB DP Maths AA/AI and Physics HL/SL Tutor",
    bio: "Dr Akhil Sharma is an online IB DP Maths and Physics mentor with 15+ years of experience, a PhD from MNIT Jaipur and an M.Tech from IIT Madras, also teaching IGCSE and AP.",
    about: [
      "Dr Akhil Sharma is an online mentor for IB DP Mathematics and Physics based in Noida, with more than 15 years of experience teaching students from diverse cultural and educational backgrounds. Subjects include IB DP Mathematics Analysis and Approaches HL and SL, Applications and Interpretation SL, IB DP Physics HL and SL, MYP Mathematics and Physics, IGCSE Mathematics and Physics, Edexcel, and AP Calculus AB/BC and AP Physics.",
      "Dr Sharma holds a PhD from Malaviya National Institute of Technology (MNIT) Jaipur (2017), an M.Tech from the Indian Institute of Technology Madras (2012) and a B.Tech from Vinayaka Mission Research Foundation. Former students have gone on to Imperial College London and the University of Toronto.",
      "Lessons are built individually: a programme that starts from fundamentals for students with gaps, and exam-focused practice for DP1 and DP2 students. Guidance on choosing and structuring Internal Assessment and Extended Essay topics in Physics and Mathematics is also available. Classes are online in English and Hindi, and fees are ₹2,200 per hour.",
    ],
    exp: 15, rate: 2200, currency: "INR", photo: null,
    education: "PhD, Malaviya National Institute of Technology (MNIT) Jaipur (2017)\nM.Tech, Indian Institute of Technology Madras (2012)",
    methodology: "Individually planned online mentoring for IB DP Maths and Physics: fundamentals first for students with gaps, then exam practice, with guidance on IA and EE topic choice and structure.",
    availability: "Flexible; WhatsApp calls after 3:00 PM IST",
    languages: ["English", "Hindi"],
    tags: ["IB Maths AA tutor", "IB Maths AI tutor", "IB Physics HL tutor", "IGCSE Maths tutor", "AP Calculus tutor", "Online IB tutor Noida"],
    quals: [
      { title: "PhD", description: "Malaviya National Institute of Technology (MNIT), Jaipur (2017)." },
      { title: "M.Tech", description: "Indian Institute of Technology (IIT) Madras (2012)." },
      { title: "15+ Years of Online Mentoring", description: "IB DP Maths and Physics HL/SL, IGCSE, MYP, AP and Edexcel." },
      { title: "IA and EE Guidance", description: "Topic selection and structure for Physics and Mathematics IAs and Extended Essays." },
    ],
    countries: ["in"],
    subjects: [
      { name: "Mathematics AA", curriculum: "IB", level: "HL/SL" }, { name: "Mathematics AI", curriculum: "IB", level: "SL" },
      { name: "Physics", curriculum: "IB", level: "HL/SL" }, { name: "Mathematics", curriculum: "IGCSE" }, { name: "Physics", curriculum: "IGCSE" },
    ],
    curriculums: [{ curriculum: "IB", programme: null, isPrimary: true }, { curriculum: "IB", programme: "DP" }, { curriculum: "IB", programme: "MYP" }, { curriculum: "IGCSE", programme: null }],
    place: { country: ["India", "IN"], state: "Uttar Pradesh", city: "Noida", tz: "Asia/Kolkata", area: "Jaypee Greens" },
    faqs: [
      { question: "Which subjects do you teach?", answer: "IB DP Maths AA HL/SL and AI SL, IB DP Physics HL/SL, MYP, IGCSE Maths and Physics, and AP Calculus and Physics." },
      { question: "What are your qualifications?", answer: "A PhD from MNIT Jaipur, an M.Tech from IIT Madras and a B.Tech." },
      { question: "How much experience do you have?", answer: "More than 15 years of online mentoring in IB DP and IGCSE Maths and Physics." },
      { question: "Do you help with IA and EE?", answer: "Yes, with choosing a topic, planning the investigation and structuring the work. The writing stays the student's own." },
      { question: "What are your fees?", answer: "₹2,200 per hour." },
    ],
  },
  {
    app: "cmvdemyon0001qmg8yc500ol4",
    slug: "kate-bloom-online-ib-english-a-tutor",
    name: "Kate Bloom",
    headline: "Online IB DP English A and IGCSE English Tutor | IB Examiner",
    bio: "Kate Bloom is an online IB DP English A and IGCSE English tutor, an IBDP English A examiner and Head of English with 20 years of teaching in international schools.",
    about: [
      "Kate Bloom is an IB DP English A examiner and experienced Head of English, teaching online from Madrid. With 20 years in the classroom, Kate teaches IB DP English A: Literature, IB DP English A: Language and Literature, IGCSE English Language and IGCSE English Literature.",
      "Kate currently leads an English department and coordinates the IBDP Extended Essay at an international school in Madrid. Earlier roles include Assistant Head of English at a British school in Madrid, IB DP and MYP English teacher and Head of Language and Literature at Antwerp International School, and English teacher at Berlin British School, where Kate also taught IB Theory of Knowledge.",
      "Kate holds a BA Joint Honours in English and French (2:1) from the University of Liverpool, a PGCE in Secondary English from the University of Bath and the CELTA. IB training includes DP English A Literature (Cat. 3), DP English Language and Literature (Cat. 2) and MYP Language and Literature (Cat. 2).",
      "Lessons focus on textual analysis, essay writing, the individual oral and exam technique. Classes are online, Monday to Friday, and fees are €100–120 per hour.",
    ],
    exp: 20, rate: 116, currency: "USD", photo: null,
    education: "BA Joint Honours English and French (2:1), University of Liverpool\nPGCE Secondary English, University of Bath",
    methodology: "Examiner-informed online lessons for IB DP English A and IGCSE English: close reading, textual analysis, essay structure, individual oral practice and exam technique.",
    availability: "Monday to Friday",
    languages: ["English", "French"],
    tags: ["IB English A examiner", "IB English Literature tutor", "IB English Language and Literature tutor", "IGCSE English tutor", "Extended Essay coordinator"],
    quals: [
      { title: "IBDP English A Examiner", description: "Assesses IB Diploma English A." },
      { title: "Head of English and EE Coordinator", description: "International school in Madrid." },
      { title: "PGCE Secondary English", description: "University of Bath." },
      { title: "BA Joint Honours English and French", description: "University of Liverpool, 2:1." },
      { title: "IB Training", description: "DP English A Literature (Cat. 3); DP and MYP Language and Literature (Cat. 2)." },
      { title: "CELTA", description: "International House Barcelona." },
    ],
    countries: ["es"],
    subjects: [
      { name: "English A: Literature", curriculum: "IB" }, { name: "English A: Language and Literature", curriculum: "IB" },
      { name: "English Language", curriculum: "IGCSE" }, { name: "English Literature", curriculum: "IGCSE" },
    ],
    curriculums: [{ curriculum: "IB", programme: null, isPrimary: true }, { curriculum: "IB", programme: "DP" }, { curriculum: "IB", programme: "MYP" }, { curriculum: "IGCSE", programme: null }],
    place: { country: ["Spain", "ES"], state: "Madrid", city: "Guadalix de la Sierra", tz: "Europe/Madrid", area: "All over Madrid" },
    faqs: [
      { question: "Which courses do you teach?", answer: "IB DP English A: Literature, IB DP English A: Language and Literature, IGCSE English Language and IGCSE English Literature." },
      { question: "Are you an IB examiner?", answer: "Yes, I am an IBDP English A examiner." },
      { question: "How much experience do you have?", answer: "20 years, including Head of English roles in international schools in Belgium and Spain." },
      { question: "When are you available?", answer: "Monday to Friday, online." },
      { question: "What are your fees?", answer: "€100–120 per hour." },
    ],
  },
  {
    app: "cmv9qh0n00001qm5vqhqr3abh",
    slug: "seoyoung-park-online-ib-biology-tutor",
    name: "Seoyoung Park",
    headline: "Online IB DP Biology HL/SL Tutor | Cambridge PhD",
    bio: "Seoyoung Park is an online IB DP Biology tutor and University of Cambridge PhD researcher, with 5 years of IB Biology tutoring and a 42-point IB Diploma with a 7 in Biology HL.",
    about: [
      "Seoyoung Park is an IB Biology tutor and PhD student in Medical Sciences at the University of Cambridge, where Seoyoung researches mitochondrial inflammation in Parkinson's disease as a Gates Cambridge Scholar. Seoyoung has 5 years of experience teaching IB Biology SL and HL one-to-one and in small groups.",
      "Lessons cover key concepts and exam preparation, together with detailed feedback on IB Biology Internal Assessments and Extended Essays. Seoyoung earned 42 points in the IB Diploma, including a 7 in Biology HL and a 7 in Chemistry HL, so the course and its assessments are familiar from both sides.",
      "Seoyoung also holds an MPhil in Translational Biomedical Research from Cambridge and a first-class BSc in Biomedical Sciences from University College London. Classes are online on weekdays from 9:00 to 18:00 UK time, and fees are £45–50 per hour.",
    ],
    exp: 5, rate: 60, currency: "USD", photo: null,
    education: "PhD Medical Sciences (in progress), University of Cambridge\nMPhil Translational Biomedical Research, University of Cambridge\nBSc Biomedical Sciences (First Class), University College London",
    methodology: "Online IB Biology SL/HL lessons on core concepts and exam technique, with detailed feedback on IA and EE drafts.",
    availability: "Weekdays 9:00–18:00 UK time",
    languages: ["English", "Korean"],
    tags: ["IB Biology tutor", "IB Biology HL tutor", "IB Biology IA feedback", "IB Biology EE tutor", "Cambridge PhD tutor"],
    quals: [
      { title: "PhD Medical Sciences", description: "University of Cambridge (in progress); Gates Cambridge Scholar." },
      { title: "MPhil Translational Biomedical Research", description: "University of Cambridge." },
      { title: "BSc Biomedical Sciences, First Class", description: "University College London; Dean's List." },
      { title: "IB Diploma, 42 Points", description: "Biology HL 7, Chemistry HL 7." },
      { title: "5 Years of IB Biology Tutoring", description: "One-to-one and small-group SL and HL classes." },
    ],
    countries: ["gb"],
    subjects: [{ name: "Biology", curriculum: "IB", level: "HL/SL" }],
    curriculums: [{ curriculum: "IB", programme: null, isPrimary: true }, { curriculum: "IB", programme: "DP" }],
    place: { country: ["United Kingdom", "GB"], state: "Cambridgeshire", city: "Cambridge", tz: "Europe/London", area: "All over Cambridge" },
    faqs: [
      { question: "What do you teach?", answer: "IB DP Biology SL and HL, including feedback on Internal Assessments and Extended Essays." },
      { question: "What is your background?", answer: "I am a PhD student in Medical Sciences at the University of Cambridge and scored 42 points in the IB, with a 7 in Biology HL." },
      { question: "How much experience do you have?", answer: "5 years of IB Biology tutoring, one-to-one and in small groups." },
      { question: "When are you available?", answer: "Weekdays 9:00–18:00 UK time." },
      { question: "What are your fees?", answer: "£45–50 per hour." },
    ],
  },
  {
    app: "cmv7tm02v0001qm65p1kz7wnr",
    slug: "chetan-patne-online-ib-igcse-maths-tutor",
    name: "Chetan Patne",
    headline: "Online IB Maths AA/AI, IGCSE and A Level Maths Tutor",
    bio: "Chetan Patne is a Mumbai-based IB, IGCSE and A Level Maths tutor with 10+ years of experience, teaching IB Maths AA and AI and 500+ students from leading international schools.",
    about: [
      "Chetan Patne is a Mathematics tutor based in Mumbai with more than 10 years of experience teaching IB, IGCSE, AS and A Level Mathematics. Chetan teaches both IB Mathematics Analysis and Approaches and Applications and Interpretation at HL and SL, and has taught more than 500 students from leading international schools in Mumbai.",
      "Lessons simplify difficult topics with clear, step-by-step explanations, then build exam confidence through worksheets, tests and past-paper practice. Topics include algebra, functions, calculus, trigonometry, vectors, matrices, coordinate geometry, statistics and probability.",
      "Chetan holds a B.E. in Mechanical Engineering from the University of Mumbai and teaches one-to-one and small-group classes online in English, Hindi and Marathi. Fees range from ₹1,500 to ₹3,000 per hour.",
    ],
    exp: 10, rate: 1500, currency: "INR",
    photo: `${PHOTO}1791964861158-7ae94dd4-daf6-4deb-879a-257a32f90b48-1000009258.jpg`,
    education: "B.E. Mechanical Engineering, University of Mumbai (2013)",
    methodology: "Step-by-step online Maths lessons with worksheets, topic tests and past-paper practice for IB AA/AI, IGCSE and A Level.",
    availability: "Scheduled on request",
    languages: ["English", "Hindi", "Marathi"],
    tags: ["IB Maths AA tutor", "IB Maths AI tutor", "IGCSE Maths tutor", "A Level Maths tutor", "IB Maths tutor Mumbai"],
    quals: [
      { title: "B.E. Mechanical Engineering", description: "University of Mumbai (2013)." },
      { title: "10+ Years Teaching Mathematics", description: "IB, IGCSE, AS and A Level." },
      { title: "500+ Students Taught", description: "From leading international schools in Mumbai." },
    ],
    countries: ["in"],
    subjects: [
      { name: "Mathematics AA", curriculum: "IB", level: "HL/SL" }, { name: "Mathematics AI", curriculum: "IB", level: "HL/SL" },
      { name: "Mathematics", curriculum: "IGCSE" },
    ],
    curriculums: [{ curriculum: "IB", programme: null, isPrimary: true }, { curriculum: "IB", programme: "DP" }, { curriculum: "IGCSE", programme: null }],
    place: { country: ["India", "IN"], state: "Maharashtra", city: "Mumbai", tz: "Asia/Kolkata", area: "Sewri" },
    faqs: [
      { question: "Which courses do you teach?", answer: "IB Maths AA and AI (HL and SL), IGCSE Maths, and AS and A Level Maths." },
      { question: "How much experience do you have?", answer: "More than 10 years, with over 500 students taught." },
      { question: "Are classes online?", answer: "Yes, one-to-one and small-group online classes." },
      { question: "What are your fees?", answer: "₹1,500 to ₹3,000 per hour depending on level." },
    ],
  },
  {
    app: "cmv5uu6u70001qmpns0pl0upk",
    slug: "antonio-torres-waddington-online-ib-maths-physics-tutor",
    name: "Antônio Torres Waddington",
    headline: "Online IB Maths AA and Physics Tutor | 41/45 IB Graduate",
    bio: "Antônio Torres Waddington is an online IB Maths AA and Physics tutor, a UCL Theoretical Physics student and IB graduate with 41/45 points and an A in the Maths Extended Essay.",
    about: [
      "Antônio Torres Waddington is a Theoretical Physics student at University College London and an IB Diploma graduate with 41 out of 45 points, a Grade A in the Mathematics Extended Essay and a 7 in every Internal Assessment. Antônio tutors IB Mathematics AA HL and SL and IB Physics HL and SL online, in English or Portuguese.",
      "At Leysin American School in Switzerland, Antônio set up a tutoring programme for first-year IB students and younger pupils, and reports helping students improve from IB grades of 4 to 6 and 7. Antônio has also tutored privately in Brazil.",
      "Lessons usually last 60–90 minutes: they start with the difficult concepts, work through examples together, then build to past-paper questions using mark schemes. A Level Mathematics, Further Mathematics and Physics are also available, along with guidance on Extended Essay research and TOK essay planning. Times are arranged with each student.",
    ],
    exp: 2, rate: null, currency: "USD", photo: null,
    education: "BSc Theoretical Physics (in progress), University College London\nIB Diploma, 41/45, Leysin American School",
    methodology: "Concept-first online lessons of 60–90 minutes: difficult ideas, worked examples, then past-paper questions with mark-scheme feedback.",
    availability: "Arranged with each student",
    languages: ["English", "Portuguese"],
    tags: ["IB Maths AA tutor", "IB Physics tutor", "IB Maths EE guidance", "A Level Further Maths tutor", "Online IB tutor London"],
    quals: [
      { title: "IB Diploma, 41/45", description: "Grade A Maths Extended Essay; 7 in all Internal Assessments." },
      { title: "Theoretical Physics, UCL", description: "Current undergraduate, University College London." },
      { title: "School Tutoring Programme Founder", description: "Leysin American School, Switzerland." },
    ],
    countries: ["gb"],
    subjects: [{ name: "Mathematics AA", curriculum: "IB", level: "HL/SL" }, { name: "Physics", curriculum: "IB", level: "HL/SL" }],
    curriculums: [{ curriculum: "IB", programme: null, isPrimary: true }, { curriculum: "IB", programme: "DP" }],
    place: { country: ["United Kingdom", "GB"], state: "Greater London", city: "London", tz: "Europe/London", area: "All over London" },
    faqs: [
      { question: "What do you teach?", answer: "IB Maths AA HL/SL and IB Physics HL/SL, plus A Level Maths, Further Maths and Physics." },
      { question: "What is your IB result?", answer: "41/45, with a Grade A Maths Extended Essay and a 7 in every Internal Assessment." },
      { question: "Can lessons be in Portuguese?", answer: "Yes, lessons are available in English or Portuguese." },
      { question: "How long are lessons?", answer: "Usually 60–90 minutes, at times arranged with each student." },
    ],
  },
];

// Applicants who already had profiles: shortlist + link, rating 4, fill blank area.
const EXISTING: { app: string; slug: string; area: string }[] = [
  { app: "cmv45h8i70001qmfsl5axtdn6", slug: "mateus-berutto-figueiredo-ib-igcse-global-politics-economics-tutor", area: "All over Rio de Janeiro" },
  { app: "cmv2etsf60001qmpq7a3w9u4e", slug: "amit-badola-ib-igcse-a-level-physics-tutor", area: "All over Dehradun" },
  { app: "cmv23yypr0001qmfoij0x2m47", slug: "meghna-thakkar-ib-igcse-a-level-biology-tutor", area: "All over Mumbai" },
  { app: "cmuz3wiv40001qmmy2jul99r0", slug: "lina-maria-moya-ib-french-spanish-tutor", area: "All over Bogotá" },
  { app: "cmuwseznf0001qmv4a1rytu61", slug: "zirong-chen-ib-igcse-mandarin-chinese-tutor", area: "All over Copenhagen" },
  { app: "cmuwp2z0z0001qmd1d2zg9ww3", slug: "nada-radwan-ib-dp-myp-chemistry-tutor", area: "Smouha" },
  { app: "cmuwcln6z0001qmbm1vs42hnc", slug: "annu-maria-roji-ib-myp-dp-history-tutor", area: "All over Muvattupuzha" },
  { app: "cmupeoydg0001qm3tkenkm68o", slug: "anukriti-ib-igcse-economics-tutor", area: "All over Mumbai" },
];
const ANNU_PLACE: Place = { country: ["India", "IN"], state: "Kerala", city: "Muvattupuzha", tz: "Asia/Kolkata", area: "All over Muvattupuzha" };

async function ensureCity(p: Place) {
  const [cName, code] = p.country;
  let country = await prisma.country.findUnique({ where: { code } });
  country ??= await prisma.country.create({ data: { name: cName, code, slug: slugify(cName) } });
  let state = await prisma.state.findFirst({ where: { countryId: country.id, name: p.state } });
  state ??= await prisma.state.create({ data: { countryId: country.id, name: p.state, slug: slugify(p.state) } });
  let city = await prisma.city.findFirst({ where: { countryId: country.id, slug: slugify(p.city) } });
  city ??= await prisma.city.create({ data: { countryId: country.id, stateId: state.id, name: p.city, slug: slugify(p.city), timezone: p.tz } });
  return city;
}

async function writeNew(t: Seed) {
  const city = await ensureCity(t.place);
  const data = {
    displayName: t.name, status: "active" as const, headline: t.headline, bio: t.bio, about: t.about.join("\n\n"),
    experienceYears: t.exp, rating: 4, hourlyRate: t.rate, currency: t.currency, avatarUrl: t.photo,
    verified: true, approved: true, faqs: t.faqs, deletedAt: null,
  };
  const profile = {
    education: t.education, methodology: t.methodology, responseTime: "< 30 mins", availabilityText: t.availability,
    languages: t.languages, tags: t.tags,
    metadata: { teachingModes: ["Online"], qualifications: t.quals, countriesCovered: t.countries, visibilityPlacements: [] },
  };
  await prisma.$transaction(async (tx) => {
    const tutor = await tx.tutor.upsert({ where: { slug: t.slug }, create: { slug: t.slug, ...data }, update: data });
    await tx.tutorProfile.upsert({ where: { tutorId: tutor.id }, create: { tutorId: tutor.id, ...profile }, update: profile });
    await tx.tutorSubject.deleteMany({ where: { tutorId: tutor.id } });
    await tx.tutorCurriculum.deleteMany({ where: { tutorId: tutor.id } });
    await tx.tutorLocation.deleteMany({ where: { tutorId: tutor.id } });
    await tx.tutorSubject.createMany({
      data: t.subjects.map((s, i) => ({ tutorId: tutor.id, subjectName: s.name, subjectSlug: slugify(s.name), curriculum: s.curriculum, level: s.level ?? null, priority: i })),
    });
    await tx.tutorCurriculum.createMany({ data: t.curriculums.map((c) => ({ tutorId: tutor.id, curriculum: c.curriculum, programme: c.programme, isPrimary: c.isPrimary ?? false })) });
    await tx.tutorLocation.create({
      data: { tutorId: tutor.id, cityId: city.id, cityName: city.name, citySlug: city.slug, areaName: t.place.area, areaSlug: slugify(t.place.area),
        homeTutoringAvailable: false, onlineTutoringAvailable: true, notes: "Online sessions only." },
    });
    await tx.jobApplication.update({ where: { id: t.app }, data: { status: "shortlisted", adminNotes: url(t.slug) } });
  });
}

(async () => {
  console.log(WRITE ? "WRITING" : "DRY RUN");
  for (const t of NEW) {
    if (t.bio.length > 200) throw new Error(`${t.slug}: bio ${t.bio.length}c`);
    const exists = await prisma.tutor.findUnique({ where: { slug: t.slug }, select: { id: true } });
    console.log(`new  ${exists ? "update" : "create"} ${t.name} -> ${t.slug} (${t.about.join(" ").split(/\s+/).length}w)`);
    if (WRITE) await writeNew(t);
  }
  for (const e of EXISTING) {
    const t = await prisma.tutor.findUnique({ where: { slug: e.slug }, include: { locations: true } });
    if (!t) throw new Error(`missing ${e.slug}`);
    const blank = t.locations.filter((l) => !l.areaName);
    console.log(`have ${t.displayName}: rating ${t.rating} -> 4, locations=${t.locations.length}, blank areas=${blank.length}`);
    if (!WRITE) continue;
    await prisma.tutor.update({ where: { id: t.id }, data: { rating: 4 } });
    if (!t.locations.length) {
      const city = await ensureCity(ANNU_PLACE);
      await prisma.tutorLocation.create({ data: { tutorId: t.id, cityId: city.id, cityName: city.name, citySlug: city.slug, areaName: e.area, areaSlug: slugify(e.area), homeTutoringAvailable: false, onlineTutoringAvailable: true, notes: "Online sessions only." } });
    } else if (blank.length) {
      await prisma.tutorLocation.updateMany({ where: { id: { in: blank.map((l) => l.id) } }, data: { areaName: e.area, areaSlug: slugify(e.area) } });
    }
    await prisma.jobApplication.update({ where: { id: e.app }, data: { status: "shortlisted", adminNotes: url(e.slug) } });
  }
  await prisma.$disconnect();
})();
