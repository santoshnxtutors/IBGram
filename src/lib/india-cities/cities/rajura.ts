import type { CitySeoPage } from "../types";

/**
 * /rajura/ - IB and IGCSE tutoring page for Rajura, Chandrapur district, Maharashtra. No IB or
 * Cambridge/Edexcel IGCSE school in Rajura could be confirmed, so stripSchools is empty and the
 * clusters point honestly to Nagpur and Hyderabad.
 */
export const rajura: CitySeoPage = {
  slug: "rajura",
  countryName: "Rajura",
  countryNameLong: "Rajura, Maharashtra",
  demonym: "Rajura",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times are set around Vidarbha's brutal May heat, the Ganeshotsav and Navratri weeks and shift changes at the coal and cement plants",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.7792, longitude: 79.3675 },
  wikipedia: "https://en.wikipedia.org/wiki/Rajura",
  alternateNames: ["Rajura Chandrapur", "Rajura Maharashtra", "Rajura Vidarbha"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rajura | Private Tuition at Home, Online",
  metaDescription:
    "IB and IGCSE tutors for Rajura, Chandrapur district: private home tuition taught live online one to one for DP, MYP, PYP, Cambridge and Edexcel. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Rajura",
  heroEyebrow: "IB & IGCSE HOME TUITION, ONLINE, FOR RAJURA IN CHANDRAPUR DISTRICT",
  heroSubtitle:
    "Home tuition for an IB or IGCSE course is hard to find in Rajura, since the closest schools teaching either are in Nagpur, a few hours away. IB Gram sets up a private lesson on a laptop instead: a tutor who has taught the specific syllabus, a student at the family desk and a shared whiteboard, with no road journey for anyone.",
  primaryKeyword: "IB and IGCSE tutors in Rajura",
  imageAltText: "A Rajura student doing IB Mathematics practice with a tutor on a video call at home",
  secondaryKeywords: [
    "IB tutor Rajura",
    "IGCSE tutor Rajura",
    "IB home tuition Rajura",
    "IGCSE home tuition Rajura",
    "IB private tuition Rajura",
    "IB Maths tutor Rajura",
    "IGCSE Maths tutor Rajura",
    "IB Physics tutor Rajura",
    "IB Chemistry tutor Rajura",
    "IB Biology tutor Rajura",
    "IB DP tutor Rajura",
    "IB MYP tutor Rajura",
    "IB PYP tutor Rajura",
    "IGCSE online tuition Rajura",
    "IB tutor Chandrapur district",
    "IGCSE tutor Rajura Maharashtra",
    "online IB tutor Gadchandur Rajura",
    "IB tutor near Ballarpur and Korpana",
  ],

  heroTrustPoints: [
    "Your child is paired with a tutor who has taught this very course and level",
    "Tutoring is online only; tutors do not come to Rajura homes",
    "One trial lesson at no charge",
    "Separate from the IB, Cambridge, Pearson and every school named",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB range" },
    { value: "CAIE, Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "One shared clock" },
    { value: "Free lesson", label: "Before paying" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a family in Rajura",
    paragraphs: [
      "Rajura sits on the Wardha river in the far south of Chandrapur district, right where Maharashtra meets Telangana. The country around it is coal and cement: the Western Coalfields mines, the plants at Gadchandur and Ballarpur, and the families who work in them. Marathi is the language of the town, and the schools are Maharashtra State Board or CBSE. We could not confirm any school in Rajura teaching the IB or a Cambridge or Edexcel IGCSE programme, and we prefer to say so plainly.",
      "In a town like this, home tuition for an international course has to arrive on a screen. A tutor logs in from another Indian city, your child works at home on a laptop, and the two go through the syllabus together, privately. Tutors do not visit homes in Rajura; face-to-face home visits belong to Gurugram and parts of Delhi NCR. The compensation is breadth of choice, because you can ask for exactly the subject experience you need.",
      "The people who write to us fall into a handful of groups. Engineers and managers with the mining and cement companies, who expect transfers and want the child's schooling to be portable. Doctors and teachers whose sons and daughters are aiming at foreign universities. And returning families, whose child was in an international school in Nagpur, Pune or abroad and now needs the course to continue.",
      "IB Gram is an independent tutoring service. We are not part of the International Baccalaureate, Cambridge, Pearson or any school, and tutors never write internal assessments, Extended Essays, TOK essays or coursework. They teach, question and coach.",
    ],
    bullets: [
      "Private live lessons for IB PYP, MYP and DP and for Cambridge and Edexcel IGCSE",
      "Taught online; in-person home lessons are available only in Gurugram and parts of Delhi NCR",
      "A written summary after each class for parents",
      "A different tutor on request if the match is wrong",
      "A written quote before any booking",
    ],
  },

  programmesIntro:
    "Rajura children almost always follow the Maharashtra State Board or CBSE until Class 10. Below is how a tutor meets each IB stage when the programme is studied at home beside, or in place of, that path.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Themes such as how we express ourselves replace a standard subject list. Pupils research, ask questions and finish with an Exhibition they present themselves.",
      countryNote:
        "A PYP enquiry from Rajura almost always involves a child who began in a larger city; the tutor keeps English reading and inquiry habits going.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10, ages 11-16",
      description:
        "Work in eight subject groups is graded against criteria and the programme closes with a Personal Project. Students learn to explain and justify.",
      countryNote:
        "Without a local MYP class, the tutor translates criteria into everyday language and shows what each band looks like in a real answer.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects are taken together with the Extended Essay, TOK and CAS, giving a score of up to 45 plus core points.",
      countryNote:
        "Diploma enquiries from this corner of Vidarbha centre on engineering, medicine and mining or chemical technology, so sciences and Mathematics lead.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "A few Diploma courses are combined with a career-related qualification and a reflective project, ideal for applied pathways.",
      countryNote:
        "No CP school is known near Rajura, so tutoring supports the academic courses that sit inside it.",
    },
  ],

  subjectsIntro:
    "Tell us which course and level your child is on. Mathematics Applications SL and Mathematics Analysis HL demand different teaching, and the same holds for every subject below.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus and algebra at depth for students who think of engineering, with the exploration planned early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology skills, suited to management, economics and life-science plans." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through quantum, practised as timed numerical problems with careful graph reading." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, equilibrium and organic mechanisms drilled with plenty of short problems." },
    { name: "IB Biology", levels: "HL / SL", description: "Physiology, genetics and ecology, with exact vocabulary and data-based question practice." },
    { name: "IB Environmental Systems & Societies", levels: "HL / SL", description: "Well suited to a coal and cement district, with sustainability, pollution and resource cases drawn from real industry." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and clear explanation, using mining, cement and agricultural markets as examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies on industrial firms, operations and finance, with decision tools applied to each." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and essay skills for students moving from Marathi-medium schooling." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and databases, trained in the exam's pseudocode form." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies and research methods turned into balanced extended responses." },
    { name: "IB Marathi B", levels: "HL / SL", description: "Formal writing, comprehension and speaking for students who want Marathi in the Diploma." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Text types and conversation, useful in a district that speaks Hindi, Marathi and Telugu." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Guided discussion of knowledge questions; the essay and exhibition belong entirely to the student." },
  ],

  igcseSubjectsIntro:
    "In Rajura, IGCSE is generally studied privately or in advance of a school change. Decide the board first, Cambridge or Pearson Edexcel, and then the tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and geometry through brief daily practice and clear worked solutions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A bridge towards Diploma or A Level Mathematics, introducing calculus early." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's problem style and method marking, practised on mixed past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy and electricity, with exam-style data handling." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Reactivity, mole calculations and organic families, revisited until secure." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Body systems, plant science and inheritance, with unaided labelled drawings." },
    { name: "IGCSE Combined Science 0653", levels: "Core / Extended", description: "A single route through all three sciences for non-specialists." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Energy, resources and pollution, with Vidarbha's mining and power landscape as the local example." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, trade and policy, with industrial and agricultural examples from the region." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business structures, accounting basics and marketing, practised on short cases." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Binary, logic and algorithm tracing before programming tasks." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and speaking for students who think first in Marathi." },
  ],

  regionsTitle: "Rajura and nearby places our online tutors reach",
  regionsIntro:
    "No tutor has to travel, so this list is not about distance. It shows how each area's schooling and daily timetable can affect the best lesson slot.",
  regions: [
    { name: "Rajura town centre", note: "The market and municipal area, with a mix of trading and salaried families who favour evening classes." },
    { name: "Wardha river bank", note: "Households near the river and the Saibaba temple, where the monsoon can raise water levels and disturb routines." },
    { name: "Jogapur", note: "A village a few kilometres out, known for its Hanuman temple, with rural families whose power supply decides class times." },
    { name: "Gadchandur", note: "An industrial township with cement operations; employees' families often get transferred, which suits portable tuition." },
    { name: "Ballarpur", note: "A paper-industry town and rail junction with larger school choice, though no IB or IGCSE option was confirmed." },
    { name: "Korpana", note: "A neighbouring taluk with farming households and limited coaching, where online delivery fills a clear gap." },
    { name: "Nanda and Bibi", note: "Villages and small settlements near the coal belt where school bus timing frames evenings." },
    { name: "Chandrapur", note: "The district headquarters and a major coal and power centre, roughly an hour or more away, with the area's largest coaching market." },
    { name: "Asifabad", note: "Across the Telangana border, a town whose students sometimes cross into Rajura for trade and study." },
    { name: "Nagpur", note: "About four to five hours away, the hub for hospitals, universities and international schools that Rajura families visit." },
  ],

  schoolDisclaimer:
    "No Rajura school is described as an IB or Cambridge/Edexcel IGCSE school, because we could not confirm one. Schools in other cities below are given only to show options some families consider; none has any link with IB Gram.",
  schoolClusters: [
    {
      city: "Rajura and Chandrapur district",
      note: "Local schooling follows the Maharashtra State Board and CBSE. We found no IB or IGCSE school in Rajura, so international-course students study at home with an online tutor.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur",
      note: "Nagpur is the main city for Vidarbha families seeking an international school, several hours away by road or train. A move is a big decision, so many start with online tuition.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Hyderabad is the other large city within reach, with a deep set of international schools, and some border families have relatives there.",
      schools: ["Oakridge International School", "CHIREC International School", "International School of Hyderabad"],
    },
    {
      city: "Nearby: Pune",
      note: "Pune has many corporate and industrial links with Vidarbha families and a strong IB and IGCSE school market.",
      schools: ["Mahindra International School", "Indus International School, Pune"],
    },
  ],

  modesIntro:
    "Three patterns suit most Rajura households. The format is always a live private call; the timing and purpose differ.",
  modes: [
    {
      title: "Ongoing weekly lessons",
      description:
        "A recurring slot with one teacher who covers the specification in order and checks homework photographed between classes.",
      bullets: [
        "Works for IB, MYP and IGCSE",
        "Shared whiteboard on screen",
        "Written comments on every worksheet",
        "One tutor who knows the student well",
      ],
    },
    {
      title: "International course alongside a state school",
      description:
        "For students at a Maharashtra board or CBSE school who study an IB or IGCSE syllabus in the evenings or on weekends.",
      bullets: [
        "Content follows only the international course",
        "Avoids school unit-test weeks",
        "Monthly progress note",
        "Groundwork for a later move to an international school",
      ],
    },
    {
      title: "Exam-season push",
      description:
        "A compact run of sessions ahead of the May or November papers, built around timed practice and correction.",
      bullets: [
        "Marked to the official mark schemes",
        "Weak topics retested each week",
        "Starts about five weeks before the papers",
        "Planned around heat and power cuts",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Rajura?",
      paragraphs: [
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Rajura, nor in nearby Ballarpur, Gadchandur or Korpana. The district's biggest school market is in Chandrapur city, and there too our checks found nothing we could name with confidence. Schooling in the area means the Maharashtra State Board, with CBSE schools attached to industrial townships.",
        "That does not mean international curricula are unknown. The mining and cement companies bring staff from every state, many of whom have children who attended CBSE or international schools in other cities. A mining engineer posted to the Wardha valley for three years, for example, may not want a Class 9 child to lose the continuity of a Cambridge course.",
        "Telangana is just across the river and families on both sides move easily for work and marriage. Hyderabad's international school sector is far larger than anything in Vidarbha, and some Rajura households have relatives there who talk about IB and IGCSE as normal parts of an education.",
        "If a new authorised school opens nearby, the IB school finder and the Cambridge school directory will show it first. Please check those for any future claim.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Rajura, Ballarpur or Gadchandur",
        "Local schooling is the Maharashtra State Board and CBSE",
        "Typical families: mining and cement employees, professionals, returnees",
        "Check ibo.org and the Cambridge directory for new schools",
      ],
    },
    {
      heading: "Maharashtra Board, CBSE, IB and IGCSE: which suits which child?",
      paragraphs: [
        "These four options are not ranked against each other. They serve different needs, and in Maharashtra the choice is shaped by how strongly state entrance exams, particularly MHT-CET, dominate professional admission.",
        "A Maharashtra State Board student typically prepares for the HSC and for MHT-CET, JEE or NEET. CBSE offers national exams and an easier path to institutions in other states. IGCSE develops applied reasoning over two years, and IB asks for six subjects, an extended essay and community service, a broad programme that suits an all-round student.",
        "For a family certain to stay in Maharashtra, the state board with focused CET coaching is often the quickest road to a seat. International programmes pay off where a move is probable, where overseas study is a firm aim, or where a child learns better by explaining than by repeating.",
      ],
      table: {
        caption: "Four routes compared for a Rajura family",
        columns: ["Point", "Maharashtra State Board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Available in Rajura", "Yes, widely", "In township schools", "No school found", "No school found"],
          ["Assessment style", "Written HSC and SSC exams", "Board exams with application", "Exams, coursework and essay", "Tiered external papers"],
          ["Entrance route", "MHT-CET, JEE, NEET after HSC", "JEE, NEET, CUET", "AIU equivalence, CUET or direct entry", "Class 11 at any board, or A Level"],
          ["How to study from Rajura", "Local school and coaching", "Local school and coaching", "Online tutor or relocation", "Online tutor, private entry"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB or IGCSE tuition in Rajura?",
      paragraphs: [
        "There is no rate list on this page, on purpose. A written quote follows a short talk about the child, the course and the exam date, and you decide after seeing it.",
        "Four things set the figure. Subject and level, since Higher Level Physics needs a rarer teacher than early reading. A tutor's record with that exact specification. The number of lessons per week. And the pattern of the plan, steady across a year or concentrated before papers.",
        "Rajura families avoid costs that city families accept. No fuel to Chandrapur, no hostel in Nagpur and no premium for a tutor willing to commute. The best match is found nationally and delivered on screen.",
        "The first lesson is free and is a complete class, so you can compare teaching styles before anything is agreed.",
      ],
      bullets: [
        "Rate depends on level, subject, experience and frequency",
        "A written quote is sent before any booking",
        "No travel or hostel costs",
        "First lesson free",
      ],
    },
    {
      heading: "Online tutor, coaching class, local teacher or self-study: what works in Rajura?",
      paragraphs: [
        "Coaching in Chandrapur and Ballarpur concentrates on MHT-CET, JEE, NEET and board marks. A parent asking about IGCSE Chemistry will probably be told the class does not cover it.",
        "A local teacher may be capable at general Science, but may never have used an IB mark scheme or a Cambridge examiner report. Self-study works for a few self-driven students, though without a marker an error can sit uncorrected for months.",
        "A tutor who has taught your child's exact course online comes closest to a school class. The table sets out how the four options compare.",
      ],
      table: {
        caption: "Study options for an international syllabus from Rajura",
        columns: ["Option", "Knows the syllabus?", "Marks to official schemes?", "Practical notes"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched on course and level", "Yes", "Laptop and stable internet needed"],
          ["Coaching class", "Seldom teaches IB or IGCSE", "Not applicable", "Fixed batches, travel to Chandrapur"],
          ["Local private teacher", "Depends on background", "Rarely", "Flexible, but a thin pool"],
          ["Self-study", "From the specification alone", "No", "No cost, slow correction"],
        ],
      },
    },
    {
      heading: "How do Vidarbha's heat, the monsoon and festivals shape the exam year?",
      paragraphs: [
        "The IB Diploma is examined in May and November, and Cambridge and Edexcel IGCSE series run in spring, summer and autumn. Most Indian candidates take the May session, so the closing revision weeks land in April and May, when Chandrapur district regularly records some of the highest temperatures in India.",
        "Heat is the main planning issue here, more than rain. Afternoons can be too hot to study with comfort, power demand is high and cuts are possible. The monsoon from June brings relief and heavy showers along the Wardha. Ganeshotsav in September, Navratri and Dussehra in October, Diwali and the winter wedding season take up family time, and Gudi Padwa in March or April marks the new year.",
        "We front-load syllabus teaching into the cooler months, hold full-length timed papers for early morning or evening slots in April, and leave room for the festival weeks that every Rajura family observes.",
      ],
      table: {
        caption: "Year plan for a Rajura student aiming at the May session",
        columns: ["Period", "Study priority", "Local factor"],
        rows: [
          ["June to August", "Begin the course, set routines", "Monsoon showers; Wardha water levels"],
          ["September to October", "Core topics, first assessments", "Ganeshotsav, Navratri and Dussehra"],
          ["November to January", "Practice papers, internal assessment drafts", "Diwali, mild winter, wedding season"],
          ["February to March", "Mock examinations and correction", "Gudi Padwa, rising heat"],
          ["April to May", "Timed papers and final revision", "Extreme heat; early or late slots"],
        ],
      },
    },
    {
      heading: "What can a Rajura student do after IB or IGCSE?",
      paragraphs: [
        "Routes depend on the certificate and the destination. The paperwork is easier to follow in Class 11 than in Class 12.",
        "Indian public universities usually ask IB Diploma holders for an equivalence certificate from the Association of Indian Universities, and a growing group of private universities admit directly on IB scores. CUET-UG sets its position for international boards each year. After IGCSE, students typically move into Class 11 at a CBSE, ICSE or IB school, or take A Level.",
        "For medicine and engineering, subject combinations matter. NEET-UG needs Physics, Chemistry and Biology, and JEE Main needs Mathematics. Maharashtra's CET cell publishes rules for admission quotas, and those for international-board students may differ from the state board, so confirm them each year.",
        "Abroad, UK universities work through UCAS, Canada and Australia use direct applications and the United States uses the Common Application. Many Vidarbha families see mining and chemical engineering degrees abroad as attractive. Tutors build the subject strength these applications rest on.",
      ],
      bullets: [
        "AIU equivalence for Indian public universities",
        "Check CUET-UG, JEE Main, NEET-UG and Maharashtra CET notices each year",
        "UCAS for the UK, direct applications for other countries",
        "Choose Diploma subjects with the degree in mind",
      ],
    },
    {
      heading: "How do IB Mathematics and science lessons work over video?",
      paragraphs: [
        "The lesson is a shared working page. The tutor writes on a digital whiteboard, the student writes on paper beside the laptop, and a photograph of the finished page lets the tutor see where a method slipped.",
        "There are two Diploma Mathematics courses. Analysis and Approaches suits students who like algebra and calculus and may study engineering or economics. Applications and Interpretation emphasises statistics and modelling with a calculator and suits business, social science and life-science courses. Many Vidarbha students pick the harder one by instinct, so we discuss the degree they actually want before the choice is final.",
        "The three sciences each need understanding, recall and a practical investigation. Tutors lay out the specification, drill calculations and definitions, and discuss experiment design. The write-up remains the student's own, with feedback given as questions.",
        "Because summer power cuts are common, we advise a charged laptop, a phone hotspot and, ideally, an inverter for timed papers.",
      ],
    },
    {
      heading: "How should a Rajura student choose between IGCSE Core and Extended?",
      paragraphs: [
        "Core and Extended are different papers, not one paper marked two ways. Core stops at grade C and Extended runs to A star, so the tier fixes the maximum grade available.",
        "A student heading for the IB Diploma, A Level sciences or a demanding engineering stream should usually enter Extended in Mathematics and the sciences. Core makes sense for a subject that is a genuine struggle or one chosen for breadth. A tutor can review the tier after a few months and recommend a change while entries are open.",
        "Subject selection matters just as much. English and Mathematics are near-universal, and most students add two or three sciences plus one from Economics or Business. Marathi or Hindi as a second language, or Environmental Management, can round out a timetable.",
        "Cambridge uses Core and Extended; Edexcel uses Foundation and Higher. Tell us your child's board and we will match accordingly.",
      ],
    },
  ],

  process: [
    { title: "Share the course", description: "Send class, board, subject, level and exam month by WhatsApp or email." },
    { title: "Get a suggested tutor", description: "We name someone who has taught that very syllabus." },
    { title: "Join a free lesson", description: "A whole class, no cost, no commitment." },
    { title: "Confirm in writing", description: "Rate, timing and a month-one plan arrive in a short note." },
    { title: "Learn and review", description: "Regular classes, written summaries and a swap if needed." },
  ],

  whyPoints: [
    { title: "Matched to the course", description: "Your child's teacher has taught the same subject, level and board." },
    { title: "Built for places without options", description: "Rajura students reach specialists no local class can provide." },
    { title: "Open about local schools", description: "We say that no IB or IGCSE school in Rajura could be confirmed." },
    { title: "Notes parents can follow", description: "A brief written record follows each lesson." },
    { title: "Free first class", description: "Judge the teaching before paying." },
    { title: "Integrity in coaching", description: "Tutors never write assessed work." },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian time, so a Rajura family has no time-zone arithmetic. A short profile goes out before the trial, and pairing considers course, level and teaching style.",

  faqs: [
    { question: "Will a tutor come to our house in Rajura?", answer: "No. Tutors do not visit homes in Rajura. In-person home tuition is run only in Gurugram and parts of Delhi NCR. In Rajura, the home lesson is a private live video class while your child studies at the family desk, which still gives complete attention and lets you choose a specialist from anywhere in India." },
    { question: "Is there an IB school in Rajura or Chandrapur?", answer: "We could not find one in Rajura, Ballarpur, Gadchandur or Chandrapur. Schools follow the Maharashtra State Board or CBSE. Authorisations change, so confirm any claim on the IB's school finder. Until something opens locally, IB students from Rajura study at home with an online tutor or move to a school in a larger city." },
    { question: "Is IGCSE home tuition available in Rajura?", answer: "It is, in online form. A tutor for your child's Cambridge or Edexcel subject meets them by video at agreed times. No one travels to Rajura. The advantage is that you can insist on experience with the exact specification instead of settling for a general teacher from a nearby town." },
    { question: "Where would a Rajura student sit IGCSE exams?", answer: "A private candidate registers through an approved centre, which is likely to be in Nagpur, Hyderabad or Pune. Cambridge and Pearson publish centre lists and entry deadlines months ahead of each series. Ask the centre early about practical papers and fees. Tutors prepare the student; registration and exam day are for the family and centre." },
    { question: "What does tuition cost and is the trial really free?", answer: "The trial is a full class and costs nothing. Afterwards the rate depends on the tutor's experience, subject, level and hours per week, and it is confirmed in writing before booking. Higher Level sciences and advanced Mathematics cost more than early support. There is no cost of travel to Chandrapur or Nagpur." },
    { question: "Which subjects are most requested from Rajura?", answer: "Mathematics, Physics, Chemistry and Biology, tied to engineering and medicine ambitions. Environmental Systems, Economics and Business Management follow, then English, Marathi and Hindi. A few parents ask about Theory of Knowledge, where the tutor discusses ideas but the student writes the essay." },
    { question: "After the IB can my child apply to NEET, JEE or Maharashtra CET?", answer: "Often yes, subject to the combination taken and the rules each agency publishes that year. Physics and Chemistry with Biology or Mathematics are usually required, and many bodies want an equivalence certificate. Choose Diploma subjects early and read the latest notice before the final year." },
    { question: "Does the summer heat disrupt lessons?", answer: "Sometimes. April and May are extremely hot in Chandrapur district and electricity may fail. Online lessons cope better than travel, but a cut still halts a call. Keep a charged laptop and hotspot ready, and schedule hard sessions for early morning or evening. Lost sessions are rescheduled free of charge." },
    { question: "Can tutors write an Extended Essay or an IA?", answer: "No. Tutors explain criteria, ask questions that sharpen a research question and comment in general terms on a plan or draft. Everything submitted must be the student's own. That protects your child from a misconduct finding that could endanger the Diploma." },
    { question: "Is Class 8 too early to begin IGCSE?", answer: "No. Starting in Class 8 or 9 gives time to move from memorising to explaining. Early lessons are light, focused on command words and core skills, with past papers added later. A trial lesson shows how your child copes and how many hours a week to plan." },
    { question: "How fast must our internet be?", answer: "A steady 5 Mbps or so is enough for video and a shared board. Broadband or reliable Wi-Fi is better than mobile data. If the call drops, move to a hotspot. Time lost is made up, and the note records what was covered." },
    { question: "My child studies in Marathi medium. Will English-only lessons work?", answer: "Yes, with patience. Lessons are in English because the exams are, but tutors are Indian and can clarify a stubborn idea in Hindi, and we try to place Marathi speakers with someone who understands the shift. Exam English grows gradually, and IB Marathi B or IGCSE English as a Second Language can run alongside." },
    { question: "How many classes a week make sense?", answer: "One lesson a week plus homework suits a normal term. In the month before exams, two to four are common. The tutor reviews past-paper results and suggests changes, and you can adjust the plan with written notice." },
    { question: "Which IGCSE boards do you cover?", answer: "Cambridge International and Pearson Edexcel, with A Level and AS as background. Their papers, codes and tiers differ, so say which your child will take. The tutor is selected for that board, and we can rematch if it changes." },
    { question: "How do I book the first class?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the class, board, subject and a convenient time. A tutor is usually suggested within a few days. There is no obligation, and you can request a different tutor before booking." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All Indian cities served online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB tutoring with us works." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Support for Cambridge and Edexcel IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "DP subjects and the core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led help for younger pupils." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis and Applications at HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a trial." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "Our page for the nearest big city." },
    { label: "IB and IGCSE tutors in Wardha", href: "/wardha/", description: "Our page for the Vidarbha city on the Wardha." },
    { label: "IB and IGCSE tutors in Amravati", href: "/amravati/", description: "Our page for another Vidarbha city." },
  ],

  closingHeading: "Start a free lesson from Rajura",
  closingBody:
    "Tell us the programme, subject and exam month, and we will name a tutor who has taught that course. Write to support@ibgram.com or WhatsApp +91 7439 368 115; the first lesson is free.",
};
