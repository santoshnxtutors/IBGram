import type { CitySeoPage } from "../types";

/**
 * /nagaon/ - IB and IGCSE tutoring page for Nagaon, central Assam. No IB or Cambridge / Edexcel
 * school could be confirmed in the town; the nearest confirmed Cambridge school is in Guwahati.
 * Online one-to-one only; in-person home tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const nagaon: CitySeoPage = {
  slug: "nagaon",
  countryName: "Nagaon",
  countryNameLong: "Nagaon, Assam",
  demonym: "Nagaon",
  state: "Assam",
  stateCode: "IN-AS",
  flagCode: "in",
  countryCode: "IN",
  region: "Assam, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are set around Bihu weeks, the Brahmaputra flood season and whatever HSLC, HS, CBSE or ICSE timetable your child's school follows",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.3500, longitude: 92.6833 },
  wikipedia: "https://en.wikipedia.org/wiki/Nagaon",
  alternateNames: ["Nowgong", "Nagaon town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nagaon | Online Private Tuition, Assam",
  metaDescription:
    "IB and IGCSE tutors for Nagaon, Assam: live one-to-one private tuition from home over video, DP, MYP, PYP and Cambridge subjects, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nagaon",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR NAGAON FAMILIES",
  heroSubtitle:
    "Private tuition from home for an IB or IGCSE student in Nagaon means a live video lesson, one to one, with a teacher who already knows the course. Tutors do not knock on doors in Assam, since visits at home are offered only in Gurugram and parts of Delhi NCR; the lesson comes to your child through a laptop. Guwahati, the nearest city with a confirmed Cambridge school, is about two hours away, and most Nagaon families cannot make that trip weekly.",
  primaryKeyword: "IB and IGCSE tutors in Nagaon",
  imageAltText: "A Nagaon student at home in central Assam following a live online IB Chemistry lesson on a laptop",
  secondaryKeywords: [
    "IB tutor Nagaon",
    "IGCSE tutor Nagaon",
    "IB home tuition Nagaon",
    "IGCSE home tuition Nagaon",
    "IB private tuition Nagaon",
    "IB Maths tutor Nagaon",
    "IGCSE Maths tutor Nagaon",
    "IB Physics tutor Nagaon",
    "IB Chemistry tutor Nagaon",
    "IB Biology tutor Nagaon",
    "IB DP tutor Nagaon",
    "IB MYP tutor Nagaon",
    "IB PYP tutor Nagaon",
    "IGCSE online tuition Nagaon",
    "IB tutor Nowgong",
    "IB tutor Haiborgaon",
    "IGCSE tutor Nagaon Assam",
    "online IB tutor Dhing",
    "IB tutor Jagiroad Hojai",
  ],

  heroTrustPoints: [
    "Tutor picked for your child's exact IB subject and level or IGCSE code and tier",
    "Lessons happen online; in-person home visits exist only in Gurugram and parts of Delhi NCR",
    "Free trial lesson, written feedback after each session, tutor change if the fit is off",
    "Rates given in writing before you book anything",
    "Not connected with any school, board or exam body",
  ],
  heroStats: [
    { value: "IST", label: "No time-zone juggling" },
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "Try first" },
  ],

  intro: {
    heading: "Studying an international syllabus from central Assam",
    paragraphs: [
      "Nagaon sits in the middle of Assam's Brahmaputra valley, on the Kolong river, with a district that stretches from Kaliabor near Kaziranga to Jagiroad and Dhing. It is the birthplace region of Srimanta Sankardeva at Batadrava, a market and railway town and a serious tuition town: tuition culture here is old, intense and built around the SEBA and AHSEC calendar.",
      "What Nagaon does not have, as far as we could confirm, is a school running the IB or a Cambridge or Edexcel IGCSE. The closest confirmed Cambridge-linked school in Assam is in Guwahati, and the closest well-known IB schools are in Kolkata or further away. So a Nagaon family that wants either qualification is usually a family in transition: a parent posted here by a bank, oil company or the army, a household returning from a job elsewhere, or parents who plan a foreign degree and want the child to prepare early.",
      "For those families the practical answer is a specialist teacher online. The tutor may sit in Pune or Chennai; the lesson lands in a Nagaon living room. IB Gram does not send anyone to your house in Assam.",
      "IB Gram is independent of every school and exam body mentioned on this page. Tutors coach and explain but never write an Internal Assessment, Extended Essay, TOK essay or piece of coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP plus Cambridge and Pearson Edexcel IGCSE",
      "Live online private tuition, one to one, in IST",
      "Home visits only in Gurugram and parts of Delhi NCR, never in Nagaon",
      "Free trial, written notes, tutor change on request",
    ],
  },

  programmesIntro:
    "Nagaon has no IB school we could verify, so the four programmes appear in this town in unusual ways: a transfer file, a boarding arrangement in another city, or a family that expects to move. What follows describes what each stage asks of a tutor.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Children work through six transdisciplinary themes, asking questions and presenting what they find, and the last year ends with the Exhibition. There is no exam; strong reading, number sense and confident English come first.",
      countryNote:
        "In Nagaon a PYP child is generally a returner from an IB school in another city or abroad, and the tutor's task is keeping inquiry-style learning alive while the child settles into a very different local school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Marks are given against four criteria per subject, and the Personal Project in the final year is a self-directed piece with a process journal. Students who have only met right-or-wrong marking need time to see how criteria work.",
      countryNote:
        "A Nagaon student going from MYP to the Assam HSLC or a CBSE class faces the reverse problem, moving from criteria to a single terminal paper.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, sit beside Theory of Knowledge, the Extended Essay and CAS. Internal Assessments and May examinations decide the final score.",
      countryNote:
        "DP students linked to Nagaon are typically enrolled through a boarding school or a school in another city; a tutor here usually takes one Higher Level subject where the school support is thin.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses are combined with a career-related qualification, a reflective project and skills work. Rare in India, but the Diploma courses inside it carry the same expectations.",
      countryNote:
        "Requests from Nagaon are rare and come from families returning after a posting overseas.",
    },
  ],

  subjectsIntro:
    "Whatever the subject, the first question is level and exam session. From there a Nagaon student and tutor build a weekly routine that respects the school day and the evenings when power and broadband are most reliable.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof; HL adds the unfamiliar, multi-step problems of Paper 3." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical modelling and technology, with an exploration that should be chosen early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields, with data-booklet fluency and a repeatable investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work first, then organic chemistry and equilibrium, the step where HL students often slip." },
    { name: "IB Biology", levels: "HL / SL", description: "Content-heavy but marked for precision in command terms and in statistical reasoning." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams tied to a current example, and evaluation paragraphs that weigh both sides." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case analysis and a research project on a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, comparative essays and a prepared oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, data structures and a written solution that justifies design choices." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approach-based essays with accurate studies and a short experimental IA." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Flood, wetland and river-basin examples are natural material for a student in the Brahmaputra valley." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies with depth and a fieldwork investigation that another person could repeat." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and sustained argument across the essay papers." },
    { name: "IB Hindi B and language support", levels: "HL / SL", description: "Hindi B for students who need a language course, plus spoken practice; Assamese-speaking households can ask about school-supported options." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Spoken coaching for the exhibition and for unpacking a prescribed title." },
  ],

  igcseSubjectsIntro:
    "IGCSE learners linked to Nagaon usually prepare for Cambridge papers as private candidates or through a school elsewhere, though Pearson Edexcel is offered too. We first fix board, code and tier, then work back from the exam session.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Working shown at every step, a non-calculator paper and the difference between Core and Extended ceilings." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Introductory calculus and trigonometry that ease the step into IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula handling, electricity, waves and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding, organic basics and planning practical answers." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance and ecology with structured extended answers." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary as learnable techniques." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Listening, reading and speaking for students who use Assamese or Hindi at home." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams, definitions and evaluative writing." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the business named in the case study." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithms, pseudocode and binary logic." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Writing and speaking practice for the language paper." },
  ],

  regionsTitle: "Where in Nagaon our online students learn from",
  regionsIntro:
    "A live lesson works the same from any address, so these places matter for school context and daily routine, not for travel. Nagaon town and the surrounding district have very different rhythms, and we plan slots with that in mind.",
  regions: [
    { name: "Haiborgaon", note: "Around the main bus stand and commercial centre; busy through the evening, which makes a quiet home study room worth planning for." },
    { name: "Barpujia", note: "A residential part of town with many government-service households and a long-standing tuition culture." },
    { name: "Panigaon", note: "A residential area on the edge of the town centre where many students walk to school or coaching." },
    { name: "Kathiatoli", note: "A locality known to residents for its busy roads and mixed housing; families here often juggle school and evening coaching." },
    { name: "Dhing", note: "A town in the district to the west, closer to Guwahati than to Nagaon centre, with families who consider Guwahati boarding options." },
    { name: "Raha", note: "A small town on the highway corridor, where an online tutor saves a long trip for specialist teaching." },
    { name: "Kaliabor", note: "The area toward Kaziranga; families here are often further from any city school and rely on online tuition for advanced subjects." },
    { name: "Jagiroad", note: "An industrial and railway town in the district, with families tied to the paper mill and the railways." },
    { name: "Hojai", note: "A neighbouring district town known for its agarwood trade; students often study online for subjects the local school cannot cover." },
    { name: "Samaguri and Kampur", note: "Rural and semi-urban belts where broadband reliability varies, so evening slots need a backup plan." },
  ],

  schoolDisclaimer:
    "No school in Nagaon could be confirmed as running the IB or a Cambridge or Edexcel IGCSE, so none is named as such. The other cities listed are options families sometimes consider, not partners, and IB Gram has no commercial link with any school, board or exam body.",
  schoolClusters: [
    {
      city: "Nagaon and central Assam",
      note: "The school network here is Assam board, CBSE and ICSE. We found no confirmed IB or IGCSE school, so international-syllabus students study online or through another city.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "About two hours away, Guwahati has the state's one confirmed Cambridge-linked school, offering IGCSE and A Level. We have found no IB Diploma school there.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata (boarding or relocation)",
      note: "Some Assam families consider Kolkata for IB schooling. This is a family decision that IB Gram does not arrange, and tutors carry on online afterwards.",
      schools: ["The Heritage School", "Calcutta International School"],
    },
  ],

  modesIntro:
    "In Nagaon the delivery is online for everyone; what varies is the reason a family books it, whether steady weekly lessons, help through a change of board or an exam push.",
  modes: [
    {
      title: "Steady weekly lessons over video",
      description:
        "One fixed slot each week with the same tutor, shared whiteboard, past papers and a written note after each session.",
      bullets: [
        "All IB programmes and both IGCSE boards",
        "Evenings and weekends",
        "Recorded worked solutions on request",
        "Progress reviewed every few weeks",
      ],
    },
    {
      title: "Board-switch bridging",
      description:
        "Focused sessions for a student moving between the Assam boards, CBSE, IGCSE and IB, aimed at differences in command words, coursework and marking.",
      bullets: [
        "Useful for transferred officials' children",
        "Gap map in the first sessions",
        "Regular check-ins with parents",
        "Ends when the gap has closed",
      ],
    },
    {
      title: "Exam-season revision",
      description:
        "A denser schedule in the weeks before the May or November series, built around timed papers and quick feedback.",
      bullets: [
        "Two to four sessions weekly near the exam",
        "Marks against current grade boundaries",
        "Book about a month early",
        "Weak topics first",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Nagaon?",
      paragraphs: [
        "We could not confirm one. Checks of school directories and the IB and Cambridge school finders turned up no IB World School and no Cambridge or Edexcel IGCSE centre in Nagaon, and we prefer to say so plainly. Schooling here is the Assam state board, CBSE and ICSE, with a strong private tuition layer on top.",
        "That shapes the families who look for IB and IGCSE tutors in Nagaon. Most are not choosing between two local schools; they are managing a gap. Some are officials, bank staff or oil-sector employees posted to central Assam with a child already on an international syllabus. Others plan a UK, Canadian or Singapore degree and want an IGCSE or Diploma record. A few are returning from Gulf or Southeast Asian postings.",
        "For these households the choices are limited but real. A student can board at a school in Guwahati or Kolkata, study as a private candidate through an approved exam centre, or follow a distance arrangement. Whichever route, the child needs subject teaching that matches the syllabus, and finding it locally is difficult.",
        "Online tutoring closes that gap without moving the child. The tutor's location is irrelevant; the tutor's experience of the exact syllabus is what counts.",
      ],
      table: {
        caption: "What Nagaon offers locally and what families do about the rest",
        columns: ["Need", "Available in Nagaon", "What families do"],
        rows: [
          ["IB Diploma classroom", "None confirmed", "Board elsewhere, study online, or move"],
          ["Cambridge IGCSE school", "None confirmed", "Guwahati school, private candidacy, or online study"],
          ["Assam board and CBSE coaching", "Plentiful", "Use for the school syllabus only"],
          ["Subject specialist for IB or IGCSE", "Very few", "Match an online tutor"],
        ],
      },
      bullets: [
        "No IB or IGCSE school could be confirmed in Nagaon",
        "Families are usually transferred, returning or planning study abroad",
        "Boarding, private candidacy and distance routes all exist",
        "Online tutors provide the specialist teaching",
      ],
    },
    {
      heading: "Assam boards, CBSE and ICSE next to IB and IGCSE",
      paragraphs: [
        "Assam's own system runs through SEBA for the HSLC at Class 10 and AHSEC for the Higher Secondary certificate at Class 12. Most Nagaon students follow it, and its exams arrive in February and March. The papers reward complete, accurate recall of the prescribed textbooks, and the tuition economy is built to deliver exactly that.",
        "CBSE and ICSE add more application and, in ICSE's case, heavier language and content loads, but the shape is still a big terminal paper at the end of Class 10 and 12. IB and IGCSE tilt the balance: they test whether a student can reason from data, argue a case in writing and evaluate a method.",
        "A student who is very good at SEBA-style preparation can find the first IB or IGCSE term unsettling. The content may be familiar; the questions are not. Command words such as evaluate, justify and discuss carry marks in their own right, and a memorised answer to a different question earns little.",
        "The upside is that skills carry across. A student who writes clearly and shows working methodically does well in any system, and those habits are exactly what a tutor builds.",
      ],
      table: {
        caption: "How the boards a Nagaon family might meet compare",
        columns: ["Point", "SEBA / AHSEC", "CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Class 10 exam", "HSLC in February-March", "Board exam in February-March", "IGCSE in May-June and October-November"],
          ["Question emphasis", "Textbook recall", "Recall plus application", "Reasoning, data and evaluation"],
          ["Coursework", "Small internal component", "Internal marks", "IAs, practicals and projects with real weight"],
          ["Language options", "Assamese, Hindi, English", "Hindi, English, other electives", "Language A and B courses; Assamese only where a school arranges it"],
        ],
      },
      bullets: [
        "SEBA and AHSEC exams fall in February and March",
        "IB and IGCSE reward reasoning, not only recall",
        "Command words carry marks and need practice",
        "Good writing and working habits transfer across boards",
      ],
    },
    {
      heading: "How much does an IB or IGCSE tutor cost for a family in Nagaon?",
      paragraphs: [
        "There is no fixed number, because the price follows the teacher and the course, not the postcode. A tutor for Higher Level Physics with years of Diploma teaching will be quoted differently from one for IGCSE Core English, and weekly frequency and session length change the figure again.",
        "Nagaon families sometimes compare with local tuition, which tends to be priced per subject per month and is often much lower. That comparison is fair for the state syllabus. For IB or IGCSE it misses the point: a local teacher who has never seen a Paper 3 or a Cambridge alternative-to-practical cannot prepare a student for it, so cheaper is not the same as adequate.",
        "The figure for your child is given in writing before the trial lesson. If you decide to go ahead, it stays as agreed unless you ask to change it. You can pause, cut back to fewer sessions or stop with short notice.",
        "One clear advantage: nobody travels. Distance from Guwahati or Kolkata does not add cost, and a tutor in another city charges what the syllabus deserves, not what the journey demands.",
      ],
      bullets: [
        "Subject, level, tutor experience and session length set the price",
        "Compare against IB or IGCSE-specific help, not state-syllabus tuition",
        "Quotes are in writing before the trial lesson",
        "No travel costs, whatever your address",
      ],
    },
    {
      heading: "Online tutor, local tuition centre or self-study: what works in Nagaon?",
      paragraphs: [
        "Nagaon's coaching sector is real and busy. Students go to batches for HSLC and AHSEC, for CBSE subjects, and for NEET and JEE preparation, many of them travelling to Guwahati for the strongest names. Those batches are efficient at what they do, but none is designed to prepare a student for an IB Chemistry paper or a Cambridge Extended Mathematics paper.",
        "A local private teacher can be excellent, and some Nagaon students have been taught for years by the same trusted person. The difficulty is narrower: it is unusual to find someone who has taught the IB or IGCSE course to a class and marked its papers to the official scheme.",
        "Self-study is possible for a disciplined student with a full set of past papers, particularly in Maths and Sciences. Where it fails is feedback, since a student cannot easily see what an examiner would penalise in a long answer or an Internal Assessment draft.",
        "Online matching removes the supply problem. It does need a working connection and a quiet corner, which in Assam means checking backup power and broadband before the monsoon and flood season.",
      ],
      table: {
        caption: "Support options for an IB or IGCSE student in Nagaon",
        columns: ["Option", "Fit for IB or IGCSE", "Format", "Watch out for"],
        rows: [
          ["Assam board or CBSE coaching batch", "Low; built for a different exam", "Group, in person", "Pace and content differ"],
          ["Private local teacher", "Uncertain; depends on their past classes", "One to one, in person", "Few have IB or IGCSE marking experience"],
          ["Self-study", "Fine for practice, weak on feedback", "Solo", "Recurring errors go unseen"],
          ["Online tutor matched to syllabus", "High; chosen by code and level", "One to one, online", "Needs stable broadband and power"],
        ],
      },
      bullets: [
        "Local coaching serves state, CBSE and entrance exams",
        "Private teachers rarely have IB or IGCSE experience",
        "Self-study needs outside feedback",
        "Online tutoring needs a backup for power and connectivity",
      ],
    },
    {
      heading: "Bihu, floods and exam months: planning the Nagaon year",
      paragraphs: [
        "Assam's calendar has its own pulses. Rongali Bihu in mid-April brings a week of celebrations that can empty classrooms, Kongali Bihu in October is quieter, and Bhogali Bihu in mid-January follows the harvest with feasts and community gatherings. Durga Puja in autumn is another period when routines bend, and families often travel.",
        "The Brahmaputra and its tributaries, including the Kolong, flood large parts of central Assam in the monsoon, roughly June to September. Even when Nagaon town is dry, roads and power in outlying areas can fail for days. We plan a spare slot in these months and suggest a phone hotspot as backup.",
        "Exams run on two clocks. HSLC and AHSEC papers fall in February and March, which is also when many IB and IGCSE students are sitting mocks. The international sessions follow their own timetable: IGCSE has a main series in May and June and a smaller one in October and November, and the IB Diploma sits in May.",
        "For a student on two syllabuses, or with a sibling on the state board, staggering lessons matters. A household in Nagaon can have two revision peaks in the same quarter, and a tutor can help by front-loading one child's plan early.",
      ],
      table: {
        caption: "The Nagaon school year and tutoring plans",
        columns: ["Period", "What is happening", "Tutoring note"],
        rows: [
          ["January", "Bhogali Bihu; IB and IGCSE mocks", "Lighter weeks around the festival, then mock preparation"],
          ["February-March", "HSLC and AHSEC exams", "Stagger lessons if siblings are on the state board"],
          ["April", "Rongali Bihu week", "Pause or reduce lessons during the celebration"],
          ["May-June", "IGCSE main series; IB exams; monsoon starts", "Book revision early; test the backup connection"],
          ["June-September", "Flood season", "Keep a spare weekly slot"],
          ["October-November", "Kongali Bihu; Durga Puja; IGCSE resits; IB November session", "Catch-up window, planned around festival travel"],
        ],
      },
      bullets: [
        "Rongali Bihu in April and Durga Puja are natural pauses",
        "Flood season needs a backup connection",
        "HSLC and AHSEC fall in February and March",
        "IGCSE sessions: May-June and October-November",
      ],
    },
    {
      heading: "After IB or IGCSE from Nagaon: which universities and routes?",
      paragraphs: [
        "Nagaon students look toward Guwahati first. Gauhati University, Cotton University and IIT Guwahati are close enough to matter, and Tezpur University is a regional option. For medicine, Assam has government medical colleges in Guwahati, Dibrugarh, Jorhat and elsewhere, and AIIMS Guwahati is a national draw. Any of these routes needs a careful reading of admission rules for IB and IGCSE holders.",
        "The main Indian document is the Association of Indian Universities equivalence certificate, and the subject combination matters too. JEE Main and NEET-UG state their own eligibility and syllabus expectations, and CUET-UG is the entry point for many central universities. An IB student with the wrong combination of subjects can find a door closed later, so planning in Class 11 is safer than repairing in Class 12.",
        "For study abroad the picture is different. UK offers are written in IB points with named Higher Level subjects, American colleges look at predicted grades as part of a wider file, and Canadian and Australian universities publish their own conversion tables. Assamese students have also made a habit of applying to Singapore and Australia, where distance is manageable.",
        "Tutors help with the subject side: teaching, exam technique and predicted-grade improvement where it is genuinely possible. University counselling, visas and scholarships sit with the school, a counsellor or the university.",
      ],
      bullets: [
        "Guwahati has the nearest concentration of universities and medical options",
        "AIU equivalence and subject choice decide Indian eligibility",
        "JEE Main, NEET-UG and CUET-UG have separate rules",
        "Predicted grades matter most for UK and Canadian offers",
      ],
    },
    {
      heading: "Which IB Maths route and which sciences suit a Nagaon student?",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is a Class 11 decision that many Assam students make from habit. If the plan is engineering, physics or pure mathematics, AA is the natural fit. If it is economics, psychology, biology or business, AI often serves the student better and rewards technology skills. A one-hour diagnostic beats a term of second thoughts.",
        "Physics is where an SEBA or CBSE-trained student often feels the difference first. The formulas are familiar, but IB questions ask for reasoning about a system, and the internal investigation has to be designed by the student. Chemistry asks for the same shift, with organic mechanisms and equilibrium raising the pace at Higher Level.",
        "Biology's challenge is precision. A student with a strong NEET-style memory can still lose marks by not answering the command term, or by describing when the question asks for an explanation. Practise with mark schemes early and the marks follow.",
        "Across all three, a specialist can shorten the learning curve. In Nagaon there is no IB Diploma classroom to provide it, so the specialist is online.",
      ],
      bullets: [
        "AA for engineering and physical science; AI for social science and biology paths",
        "Physics and Chemistry HL both depend on the internal investigation",
        "Biology marks depend on command-term precision",
        "A specialist tutor replaces a missing local classroom",
      ],
    },
    {
      heading: "IGCSE tiers and boards: what a Nagaon private candidate should settle first",
      paragraphs: [
        "A private candidate has two decisions to settle before any lessons: which board, and which tier. Cambridge and Pearson Edexcel both offer IGCSE, with different codes and paper structures, and an approved exam centre may offer only one of them. The centre's list decides the board, not the tutor.",
        "Tier comes next. Core caps the grade in most subjects, while Extended keeps the full range open. For a student planning A Level, the Diploma or any science degree, Extended in Mathematics and the sciences is the sensible default. A student aiming at a lighter subject load can choose Core in one or two subjects.",
        "Practical papers matter too. Cambridge Sciences offer a written alternative to practical, which suits a student without laboratory access, but it still needs rehearsal. A tutor can walk through those questions and the reasoning they expect.",
        "Finally, entry deadlines fall months before the exam session. A Nagaon family should ask the centre for the dates, fees and any practical requirements in advance, as tutoring cannot substitute for a missed entry.",
      ],
      bullets: [
        "Confirm the board with the exam centre before lessons begin",
        "Extended keeps every grade open; Core caps most",
        "Alternative-to-practical papers need rehearsal",
        "Enter early; deadlines are months ahead",
      ],
    },
    {
      heading: "How does an IB Gram tutor get matched to a Nagaon student?",
      paragraphs: [
        "We start from a conversation about the child, not from a subject menu. Board, subject, level, current grade, target, exam session and the specific trouble, be it a topic, a mock, an Internal Assessment or a change of school, all shape the shortlist.",
        "Each tutor is checked for qualifications, recent teaching of the syllabus and approach to assessed work. For Nagaon, we also look for experience with students who study without a local IB or IGCSE classroom, because those learners need a tutor who can fill gaps without relying on school support.",
        "The trial lesson comes next. The child works through a real topic and parents see how the tutor listens and explains. A short first-month plan follows, and you can change it.",
        "If it is not working we swap the tutor. That is the normal process, not an exception.",
      ],
      bullets: [
        "Board, subject, level, target and the actual problem shape the match",
        "Tutors are checked for recent teaching of the exact syllabus",
        "The free trial lesson decides",
        "Swapping tutors is normal",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors for IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE, teaching live over video for Nagaon families. Matching starts from syllabus and level, since every lesson is online.",

  process: [
    { title: "Send the details", description: "Board or programme, subject and level, present and target grade, and the evenings that suit your Nagaon home." },
    { title: "Get a shortlist", description: "Tutors are chosen for syllabus fit and recent teaching of it, wherever they live." },
    { title: "Try a free lesson", description: "Your child works on a real topic online, at no cost and with no strings." },
    { title: "Confirm the plan", description: "You receive the rate in writing, the topics, the weekly rhythm and how progress will be reported." },
    { title: "Begin weekly sessions", description: "Fixed slot, regular reviews, and a new tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Syllabus first", description: "Matches use the IB subject and level or the IGCSE board, code and tier." },
    { title: "Built for towns without IB schools", description: "Online teaching gives Nagaon families access to specialists they cannot find locally." },
    { title: "Trial before commitment", description: "A live lesson tells you more than a profile." },
    { title: "Academic honesty", description: "Tutors guide IAs and essays but never write assessed work." },
    { title: "Written progress notes", description: "After each session you get a short record of what was done and what is next." },
    { title: "Independent and flexible", description: "No school ties, no long contract, and a change of tutor on request." },
  ],

  faqs: [
    { question: "How can I find IB and IGCSE tutors in Nagaon?", answer: "Send IB Gram the programme or board, subject, level and exam session, and we shortlist tutors who teach that exact course online. Because we could not confirm an IB or IGCSE school in Nagaon, matching is by syllabus fit and not distance. A free trial lesson lets you judge the match before committing." },
    { question: "Is there an IB or Cambridge school in Nagaon?", answer: "We could not confirm one. Nagaon schooling is the Assam board, CBSE and ICSE. The nearest confirmed Cambridge-linked school in Assam is in Guwahati, and we have found no IB Diploma school in the state. Families studying these courses board elsewhere, sit as private candidates or study online." },
    { question: "Will a tutor visit my home in Nagaon?", answer: "No. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Nagaon, home tuition means online: a live one-to-one lesson your child takes from home on a laptop, with a shared whiteboard and past papers. You get the specialist without anyone travelling to Assam." },
    { question: "What does IB or IGCSE tuition cost in Nagaon?", answer: "It depends on the programme, subject, level, tutor experience and session length. The figure is given in writing before the trial lesson. Higher Level Diploma sciences and Maths usually cost more than IGCSE Core, and where you live in Nagaon does not affect the rate." },
    { question: "My child studies SEBA or CBSE. Can they add an IGCSE subject?", answer: "Yes, as a private candidate through an approved exam centre, provided the family arranges entry. Tutoring covers the teaching and paper practice. It does not include the entry itself, so check the centre's dates, fees and practical arrangements well ahead of the session." },
    { question: "Can you help a child who moved to Nagaon in the middle of the IB Diploma?", answer: "Yes. We match a tutor who has recently taught the same subjects and levels, and the first sessions map gaps against the syllabus. The tutor works alongside whatever school arrangement the family has made, whether distance study or boarding elsewhere, and reports progress after each session." },
    { question: "Which IB Diploma subjects can you cover?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, History and Hindi B, plus TOK coaching. Level matters, so an HL and an SL student in the same subject are matched separately." },
    { question: "Do you tutor MYP and PYP students in Nagaon?", answer: "Yes. MYP support focuses on criterion-based writing and the Personal Project journal, while PYP support builds reading, writing and number confidence. Sessions are short and lively for younger children, and parents receive a written note after each one." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge and Pearson Edexcel. Cambridge codes such as 0580, 0625 and 0620 are the most requested. Your exam centre decides which board is possible for a private candidate, so confirm that first and share the code with us." },
    { question: "Is online tuition as good as a teacher in the room?", answer: "For most IB and IGCSE students it works well, especially where local specialists are missing. The whiteboard, shared papers and recorded solutions cover most of what a person beside the child would do. It needs a steady connection, and we advise honestly if a very young child needs shorter sessions." },
    { question: "Can a tutor help with an IA or the Extended Essay?", answer: "A tutor can guide but not write. That includes choosing a research question, explaining the criteria, planning data collection and giving honest feedback on drafts. Producing assessed work breaches IB academic integrity rules, so tutors decline it." },
    { question: "How do floods and power cuts affect lessons?", answer: "Monsoon flooding and outages can hit parts of central Assam between June and September, so we schedule a spare weekly slot and suggest a mobile hotspot backup. A lesson lost to a power cut is rescheduled without extra charge." },
    { question: "When should my child begin?", answer: "The start of the course is ideal: Grade 9 for IGCSE, Class 11 for the Diploma. Early support builds foundations before mocks and IA deadlines. Starting later still helps, with attention on the highest-value topics and past papers." },
    { question: "Can lessons fit around Bihu and school exams?", answer: "Yes. We plan around Rongali Bihu week, Durga Puja and HSLC or AHSEC exam months, and can lighten or pause the schedule when family plans require it. A denser block before the May series is easy to add." },
    { question: "What happens if we do not like the tutor?", answer: "Tell us and we will find someone else. We review progress every few weeks and re-match whenever the fit is wrong. No long contract means pausing or stopping carries no penalty." },
    { question: "Are you linked to any school, board or Guwahati institution?", answer: "No. IB Gram is independent and has no connection with any school, the International Baccalaureate, Cambridge or Pearson. Names of other cities and schools on this page are for context only, and tutors follow each syllabus as published." },
    { question: "Can my child study for IGCSE without joining a school?", answer: "Possibly, as a private candidate through an approved centre, though availability depends on the centre and on your family's arrangements. IB Gram provides teaching and paper practice; the entry and any practical components are for the family to arrange." },
    { question: "How do I get started?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme or board, subject, level and current grade. You will receive a shortlisted tutor, their background and trial slots, with no charge and no obligation." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "Nearest big city, with one confirmed Cambridge school." },
    { label: "IB and IGCSE tutoring in Silchar", href: "/silchar/", description: "Online tuition for Barak Valley families." },
    { label: "IB and IGCSE tutoring in Kolkata", href: "/kolkata/", description: "The eastern region's biggest IB and IGCSE school cluster." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works across Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person tuition is available." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and sessions." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and book a free trial." },
  ],

  closingHeading: "Book a free trial lesson for your Nagaon student",
  closingBody:
    "Send the programme or board, subject and level, present grade and the evenings that suit your home. We come back with a tutor, their teaching background and trial slots, taught online and one to one, at no charge and no obligation. Reach us at support@ibgram.com or +91 7439 368 115 on WhatsApp.",
};
