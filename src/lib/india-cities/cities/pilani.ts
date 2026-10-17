import type { CitySeoPage } from "../types";

/**
 * /pilani/ - IB and IGCSE tutoring page for Pilani, Jhunjhunu district, Rajasthan (plan rank 728), the town
 * of BITS Pilani and CEERI. Online one-to-one only (homeTuition false). No IB or Cambridge/Edexcel school
 * in Pilani could be confirmed (Edustoke lists only Pilani Public School, CBSE), so stripSchools is empty.
 * Mody School (Laxmangarh), Jaipur and Gurugram names are reused from sikar.ts, jaipur.ts and narnaul.ts.
 * BITSAT wording was checked against the official BITS admissions site (2026 cycle).
 */
export const pilani: CitySeoPage = {
  slug: "pilani",
  countryName: "Pilani",
  countryNameLong: "Pilani, Jhunjhunu district, Rajasthan",
  demonym: "Pilani",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are timed around Shekhawati’s hot afternoons and cold winter mornings, campus festival weeks and the hours your child is at school",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.3623, longitude: 75.6042 },
  wikipedia: "https://en.wikipedia.org/wiki/Pilani",
  alternateNames: ["BITS Pilani town", "Pilani Jhunjhunu", "Pilani Rajasthan"],
  stripSchools: [],

  title: "IB and IGCSE Home Tuition in Pilani | Online Tutors, Free Trial",
  metaDescription:
    "Online IB and IGCSE tutors for Pilani, Rajasthan, home of BITS: Diploma, MYP, PYP and IGCSE lessons one-to-one from home, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pilani",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR PILANI AND THE BITS CAMPUS TOWN",
  heroSubtitle:
    "Home tuition for an IB or IGCSE course is hard to find in Pilani. The town is known for BITS Pilani and CEERI, no school here could be confirmed for IB or Cambridge, and the nearest confirmed campuses are in Laxmangarh, Jaipur and the Gurugram belt. Live one-to-one lessons online fill that gap, matched to the exact syllabus and taught on Indian Standard Time, for campus families, Shekhawati households and students working through a course independently.",
  primaryKeyword: "IB and IGCSE tutors in Pilani",
  imageAltText: "IB Physics student in Pilani working through a forces problem with an online tutor on a shared screen at home",
  secondaryKeywords: [
    "IB tutor Pilani",
    "IGCSE tutor Pilani",
    "IB home tuition Pilani",
    "IGCSE home tuition Pilani",
    "IB private tuition Pilani",
    "IB Maths tutor Pilani",
    "IGCSE Maths tutor Pilani",
    "IB Physics tutor Pilani",
    "IB Chemistry tutor Pilani",
    "IB Biology tutor Pilani",
    "IB DP tutor Pilani",
    "IB MYP tutor Pilani",
    "IB PYP tutor Pilani",
    "IGCSE online tuition Pilani",
    "IB tutor BITS Pilani campus",
    "IB tutor Jhunjhunu",
    "IGCSE tutor Chirawa",
    "Cambridge IGCSE tutor Shekhawati",
    "IB online tutor Rajasthan",
    "IB tutor Vidya Vihar Pilani",
  ],

  heroTrustPoints: [
    "Tutors picked for the exact IB course or IGCSE code, with recent teaching of that syllabus",
    "Everything is live on video; tutors do not visit homes in Pilani, because home visits exist only in Gurugram and parts of Delhi NCR",
    "A free first lesson, written notes afterwards and a rate confirmed in writing before you book",
    "Independent of BITS Pilani, every school mentioned here, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Campus town", label: "BITS Pilani and CEERI households, taught online" },
    { value: "PYP to DP", label: "Plus Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "A single clock for tutor and student" },
    { value: "Free trial", label: "See a real lesson before deciding" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring means in a campus town like Pilani",
    paragraphs: [
      "Pilani is a small town in Jhunjhunu district, Rajasthan, about 194 kilometres from Delhi and 208 from Jaipur, and it is known across India for one institution: BITS Pilani, the deemed university whose 328-acre campus sits at the heart of the town. The Central Electronics Engineering Research Institute, a CSIR laboratory, adds a second community of scientists, and G. D. Birla, whose family shaped much of Pilani, was born here.",
      "No school in the town could be confirmed as an IB, Cambridge or Edexcel school. The ones we know of include Pilani Public School on Chirawa Road, listed as a CBSE day-cum-boarding school, and the Birla-founded group of Birla Shishu Vihar, Birla High School, Birla Public School and Birla Balika Vidyapeeth. The nearest confirmed IB and Cambridge campus is Mody School at Laxmangarh in Sikar district.",
      "That leaves a particular set of families asking for IB and IGCSE tutors in Pilani. Some are faculty and research staff who have studied or worked abroad and want an international syllabus for a child. Some are local business families planning an education overseas. Others have children at CBSE or Rajasthan Board schools who want IGCSE as a bridge. Tutors are not local to Pilani, so lessons are live and online.",
      "Each lesson is a live video session between one tutor and one student. Tutors explain, set and mark work and coach exam technique, but they never write an Internal Assessment, Extended Essay, TOK essay or piece of coursework. IB Gram is independent of BITS Pilani, every school named here, the International Baccalaureate, Cambridge and Pearson, and the first lesson is free.",
    ],
    bullets: [
      "Lessons for students at any school, on any campus, or studying independently",
      "Tutors matched to the exact subject, level and exam code",
      "Timings that work around school, campus events and the heat",
      "A free trial, then a written note after each session",
      "No tutor visits in Pilani; in-person home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Nothing in Pilani teaches an IB programme that we could confirm, so the programme a family needs depends on the school a child will join or the syllabus being kept going at home. Tutors work from the IB’s published guides for all four programmes and do not assume any particular school timetable.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Pre-primary to Class 5, ages 3-12",
      description:
        "Inquiry in the PYP runs through concepts, skills, attitudes and action, and each unit asks a child to do something with what they learn. Since nothing is exam-graded, tutoring means reading stamina, number sense and the habit of asking a good question.",
      countryNote:
        "Here it is usually a campus family keeping an international foundation going for a young child, or a household preparing for a move to an IB school elsewhere.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Students usually study eight subject groups, meet an interdisciplinary unit, and finish with a Personal Project. The step that trips many is turning knowledge into the reasoned, evidenced answer a criterion descriptor rewards.",
      countryNote:
        "With no MYP school in the town, requests come from students preparing to join an MYP school in Laxmangarh, Jaipur or beyond.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Higher Level course carries 240 teaching hours and a Standard Level course 150, and the final score runs up to 45 points including bonus points from TOK and the Extended Essay. Planning the internal assessments early matters as much as revising for May.",
      countryNote:
        "A Pilani Diploma student is almost always at a school elsewhere, often boarding, so lessons at home must fit a hostel timetable and the holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme pairs two or more Diploma courses with a career-related study, community and service, language development and a reflective project. It is aimed at students who want a direct route into work or further vocational study.",
      countryNote:
        "No CP school is known to us in or around Pilani, so any request is really about the two Diploma courses in the pathway.",
    },
  ],

  subjectsIntro:
    "A tutor is matched on subject and level, because IB Physics HL and IGCSE Geography are not interchangeable skills. In a town built around engineering and science, Mathematics, Physics and Chemistry are natural first requests, while languages and humanities are filled from the wider pool of tutors across India.",
  subjects: [
    { name: "IB Mathematics: Analysis and Approaches", levels: "HL / SL", description: "For students aiming at engineering, calculus and proof carry the weight; sessions build the algebra underneath, then practise the long HL papers and the Paper 3 investigation." },
    { name: "IB Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Technology and data sit at the centre, so lessons practise regression, probability models and calculator routines, and help shape an exploration around a question the student wants answered." },
    { name: "IB Physics", levels: "HL / SL", description: "Students raised on entrance-test physics sometimes write answers that are correct but unexplained, so practice stresses reasoning in words, estimation and honest uncertainty in the lab report." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics and organic mechanisms are built up in order, and the Internal Assessment needs a method that can be repeated and conclusions tied to the evidence." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms decide marks, so answers are trained against outline, describe, explain and evaluate, and the investigation is planned around data that can actually be analysed." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms are run as well as read, object-oriented ideas are built into small programs, and the Internal Assessment product is documented as it is developed, not at the end." },
    { name: "IB Design Technology", levels: "HL / SL", description: "A design project drives the Internal Assessment, so students learn to document need, research, prototype and evaluation, with exam theory taught alongside." },
    { name: "IB Economics", levels: "HL / SL", description: "Precise diagram labels, exact definitions and current examples build an answer together, and Indian policy cases give students material they can discuss with confidence." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks come from applying theory to the firm in the case, not merely naming it, and the research project is easier when a real organisation is chosen early." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Paper 1 commentary, Paper 2 comparison and the oral each need their own routine, so students rehearse all three under time." },
    { name: "IB Hindi A: Literature", levels: "HL / SL", description: "A strong language for many Pilani students, where depth of literary analysis rather than fluency decides the grade." },
    { name: "Theory of Knowledge (TOK)", levels: "DP core", description: "Arguments are tested through real examples from different areas of knowledge, and the exhibition and essay are planned so each claim is backed by something concrete." },
  ],

  igcseSubjectsIntro:
    "Pilani students reach IGCSE in three ways: from a CBSE or Rajasthan Board school looking for an international route, as a private candidate studying around a tutor, or from a school elsewhere. In every case the board, tier and exam session are fixed first, since Cambridge and Edexcel differ in how they phrase and mark questions.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Sessions build non-calculator fluency and the habit of showing working, since method marks rescue many Extended answers that miss the final number." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Functions, differentiation and trigonometric identities come early, preparing students who may later take Maths AA or meet entrance-style problem sets." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Definitions are recited exactly, graphs read carefully, and the practical paper treated as planning and analysis, not memory." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Calculations from moles to titration are practised alongside the qualitative analysis tables that the practical paper demands." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Diagrams, data questions and genetics crosses get regular timed practice, with answers marked against the examiners’ own wording." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python tasks and trace tables are practised together so that the theory paper and the programming paper support each other." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Students practise building a chain of reasoning and then judging it, since evaluation marks separate the top grades." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Case studies are learned with real places and figures, and fieldwork-style questions are practised with unfamiliar data sets." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and composition are practised under timed conditions, with feedback on tone and choice of evidence." },
  ],

  regionsTitle: "Pilani and the Shekhawati towns around it that our lessons reach",
  regionsIntro:
    "Because lessons are online, these places are context: where the campus community sits, which roads and stations a family actually uses, and how pilgrim and festival traffic can reshape a week around Jhunjhunu district.",
  regions: [
    { name: "Vidya Vihar (BITS Pilani campus)", note: "The 328-acre campus and its faculty housing, the town’s main academic hub; campus festivals such as OASIS and APOGEE can fill roads and evenings." },
    { name: "CEERI campus", note: "The Central Electronics Engineering Research Institute, a CSIR laboratory, home to a second community of researchers and their families." },
    { name: "Pilani town centre and market", note: "The older commercial heart of the town, where shops quieten through the long summer afternoon and evening study is the natural slot." },
    { name: "Chirawa Road", note: "The road on which Pilani Public School, listed as a CBSE day-cum-boarding school, stands; it also leads toward Chirawa." },
    { name: "Chirawa", note: "The nearest railway station, about 16 km from Pilani, and a town of its own in Jhunjhunu district." },
    { name: "Loharu", note: "Across the state line in Haryana, about 23.5 km away, with a railway station that some Pilani travellers use." },
    { name: "Sadulpur", note: "About 40 km away, the third station named as a rail access point for Pilani." },
    { name: "Jhunjhunu", note: "The district headquarters, home of the Rani Sati temple and its large fair, which brings pilgrim traffic on key dates." },
    { name: "Nawalgarh", note: "A Shekhawati town celebrated for its painted havelis, a reminder that the region’s frescoed heritage sits within reach of Pilani." },
  ],

  schoolDisclaimer:
    "Mody School and the Jaipur and Gurugram schools are named only as reference points for families who look beyond Pilani, not as recommendations. IB Gram has no contract, partnership or endorsement with any school, BITS Pilani, the International Baccalaureate, Cambridge or Pearson, and each school’s programmes and admissions change, so confirm details with it directly.",
  schoolClusters: [
    {
      city: "Pilani itself",
      note: "No IB, Cambridge or Edexcel school could be confirmed in Pilani. Pilani Public School on Chirawa Road is listed as a CBSE day-cum-boarding school, and the town also has Birla-founded schools, so local schooling runs mainly on CBSE and the Rajasthan Board.",
      schools: [],
    },
    {
      city: "Nearby: Laxmangarh (Sikar district)",
      note: "Mody School, a girls’ day-cum-boarding school, is the closest confirmed IB and Cambridge campus, about 80 km from Pilani in a straight line and further by road. It runs the IB MYP and DP and Cambridge up to Secondary 1.",
      schools: ["Mody School, Laxmangarh"],
    },
    {
      city: "Nearby: Jaipur",
      note: "Jaipur, roughly 208 km from Pilani, has a wider spread of IB and Cambridge day schools, which makes it the usual choice for a family ready to move or to board a child.",
      schools: ["Sanskar School, Sirsi Road", "Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Nearby: Gurugram",
      note: "Delhi is about 194 km from Pilani and Gurugram lies on its south-western edge, home to the region’s densest cluster of IB and IGCSE schools. It suits relocation rather than a daily commute.",
      schools: ["Pathways World School", "Lancers International School", "Scottish High International School", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "All three modes are online: tutors do not visit homes in Pilani, because home visits are available only in Gurugram and parts of Delhi NCR. Which mode fits depends on whether a student lives on campus, boards elsewhere or studies from a home timetable.",
  modes: [
    {
      title: "Once-a-week lessons",
      description:
        "One hour at the same time each week, fitted around school, campus events and the Shekhawati heat. It suits students who need steady support in one or two subjects.",
      bullets: [
        "The tutor has recently taught the exact course",
        "Problems are solved and marked together on a shared screen",
        "Covers PYP, MYP, DP and both IGCSE boards",
        "The slot moves around exams and holidays",
      ],
    },
    {
      title: "Weekly lessons with shared records",
      description:
        "The same lesson, plus a short written record afterwards and a monthly look at how the plan matches the syllabus, for families who want to follow the course from outside.",
      bullets: [
        "A written record follows every lesson",
        "A monthly check on pace and gaps",
        "Helpful for boarders and students on the move",
        "Extra sessions are easy to add near assessments",
      ],
    },
    {
      title: "Concentrated blocks",
      description:
        "Short runs of daily or near-daily lessons before mock exams, the May session or an entrance-test window, spent on timed questions and immediate feedback.",
      bullets: [
        "Papers are timed and marked to the board’s scheme",
        "Feedback returns within a day or two",
        "Fits a holiday or a study-leave window",
        "Ideally planned two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools near Pilani teach IB or Cambridge, and who asks for them?",
      paragraphs: [
        "None inside Pilani could be confirmed. The nearest confirmed IB and Cambridge campus is Mody School at Laxmangarh in Sikar district, a girls’ day-cum-boarding school roughly 80 kilometres away in a straight line, and the wider choice sits in Jaipur and the Gurugram belt. Most Pilani families therefore pair a local school with online tutoring.",
        "Pilani’s schooling is shaped by its campus. Pilani Public School on Chirawa Road is listed as a CBSE day-cum-boarding school, and the town also has the Birla-founded schools, among them Birla Shishu Vihar, Birla High School, Birla Public School and Birla Balika Vidyapeeth. CBSE and the Rajasthan Board are the everyday syllabi, and Hindi, Shekhawati and English all share the same streets.",
        "The town has no railway station of its own. The nearest are Chirawa, about 16 kilometres away, Loharu in Haryana at roughly 23 and Sadulpur at about 40, with buses carrying students onward to Jaipur, Delhi and Sikar. A family weighing a move for the Diploma years counts that journey as part of the decision.",
        "Online lessons sidestep the move. A student keeps the local school, friends and campus community, and a subject specialist is a laptop away. For younger children it means an international foundation without an early relocation; for older ones it keeps the Diploma or IGCSE option open while the family decides where the next school will be.",
      ],
      table: {
        caption: "IB and Cambridge options reachable from Pilani",
        columns: ["Place", "Schools on our list", "Distance and route", "What to weigh"],
        rows: [
          ["Pilani", "None confirmed; Pilani Public School (CBSE) and Birla-founded schools", "Local", "No IB or Cambridge campus; CBSE and the Rajasthan Board dominate"],
          ["Laxmangarh, Sikar district", "Mody School, Laxmangarh", "About 80 km in a straight line, more by road", "Girls’ day-cum-boarding; IB MYP and DP, Cambridge to Secondary 1"],
          ["Jaipur", "Sanskar School, Jayshree Periwal International School, Mayoor School Jaipur", "Roughly 208 km", "Boarding or relocation; wider subject choice"],
          ["Gurugram", "Pathways World School, Lancers International School, Scottish High International School, GD Goenka World School", "Delhi is about 194 km away, with Gurugram on its south-western edge", "The densest IB and IGCSE cluster in the region; a full move"],
        ],
      },
      bullets: [
        "Mody School, Laxmangarh, is the nearest IB and Cambridge campus we can confirm",
        "Pilani has no railway station; Chirawa, Loharu and Sadulpur are the nearest",
        "Online lessons keep the local school and campus community in place",
        "Jaipur and Gurugram offer the wider choice for families ready to move",
      ],
    },
    {
      heading: "What should an IB or IGCSE student know about BITS Pilani and BITSAT?",
      paragraphs: [
        "BITS Pilani describes BITSAT as the sole gateway to its first-degree programmes, with no management quota or alternate entry route, though it publishes a separate route for international students. Its eligibility FAQ asks for at least 75 per cent in Physics, Chemistry and Mathematics together and 60 per cent in each subject at Class 12 level, so an IB or IGCSE family should ask the admissions office how a Diploma result is read against that rule.",
        "BITSAT has been held in two sessions, in April and May, which fall in the same weeks as the IB’s final exams and the Cambridge May-June series. For the 2026 intake, applications opened on 15 December 2025, the first session ran on 15 and 16 April and the second on 24 to 26 May. A student sitting IB papers in May needs a plan that covers both.",
        "BITS also warns applicants about fraudulent messages that promise direct admission, and says its own admissions website is the only official source. Merit and need-based scholarships are described on that site too. Families should read the current brochure and eligibility notes each year, because dates, sessions and rules change.",
        "Tutors cannot advise on admission, but they can prepare the content that BITSAT and the Diploma share: Mathematics, Physics and Chemistry at a depth that serves both, and timed problem-solving. A student aiming at BITS, the Diploma and overseas offers at once needs a written plan that shows where the three overlap and where they do not.",
      ],
      table: {
        caption: "BITSAT at a glance for an IB or IGCSE family",
        columns: ["Question", "What the official site says", "What to do"],
        rows: [
          ["How do you enter?", "BITSAT is described as the sole gateway to first-degree programmes, with no management quota or alternate route", "Plan for the test and ignore any offer of direct admission"],
          ["Who can apply?", "At least 75% in Physics, Chemistry and Mathematics together, and 60% in each, at Class 12 level", "Ask the admissions office how IB or A Level results are read"],
          ["When is the test?", "Two sessions, in April and May; for the 2026 intake, 15-16 April and 24-26 May", "Check the IB and Cambridge timetables against both sessions"],
          ["What about students from abroad?", "A separate route is published for international students", "Read that page first if your child studied overseas"],
        ],
      },
      bullets: [
        "BITS calls BITSAT the sole gateway to its first-degree programmes",
        "The published eligibility rule is 75% in PCM together and 60% in each subject",
        "BITSAT sessions fall in the same weeks as IB and Cambridge written papers",
        "BITS warns against anyone who promises direct admission",
      ],
    },
    {
      heading: "How do the Rajasthan Board, CBSE, IB and IGCSE compare for a Pilani family?",
      paragraphs: [
        "The Rajasthan Board and CBSE both assess a fixed syllabus in public examinations held from February and March, and both are in use in and around Pilani. IB and IGCSE assess reasoning in new contexts, and the IB adds coursework marked against published criteria. The table shows how the four compare for a family in Jhunjhunu district.",
        "For a student with BITS or an Indian engineering college in mind, the syllabus choice interacts with entrance tests. JEE Main and BITSAT test content drawn from Indian Class 11 and 12 syllabi, so an IB student aiming at them needs extra preparation in topics the Diploma treats differently, such as mechanics or organic chemistry.",
        "Rajasthan Board families moving to IGCSE in Class 9 face mostly a change of style. Questions ask for explanation and application, practical knowledge is examined on paper, and English is the language of every answer. A few months of practice with past papers usually closes the gap.",
        "CBSE students crossing over find the gap smaller, but not zero: IB and IGCSE mark schemes reward method and reasoning, not just the final number. The first job for any tutor is to teach how these mark schemes think, because the content is often already familiar.",
      ],
      table: {
        caption: "Four school routes compared for a Pilani family",
        columns: ["Feature", "Rajasthan Board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Language of instruction", "Hindi or English", "English or Hindi", "English", "English"],
          ["Main exams", "Class 10 and 12 board exams from March", "Class 10 and 12 board exams, February-March", "Externally marked papers in May, plus internal assessment", "Papers in May-June or October-November"],
          ["Entrance-test link", "JEE Main, BITSAT, NEET-UG and state tests", "JEE Main, BITSAT, NEET-UG and CUET-UG", "Needs AIU equivalence; check each test’s rules", "A Class 10 level qualification that leads into any Class 11 and 12 route"],
          ["Style of answer", "Recall of set material", "Recall plus application", "Extended reasoning against criteria", "Structured answers at Core or Extended tier"],
        ],
      },
      bullets: [
        "Rajasthan Board and CBSE reward recall of a fixed syllabus; IB and IGCSE reward reasoning",
        "JEE Main and BITSAT draw on Indian Class 11 and 12 syllabi, so an IB student needs bridging work",
        "English is the language of every IB and IGCSE answer",
        "Teaching how mark schemes think closes most of the gap for a CBSE student",
      ],
    },
    {
      heading: "What sets the fee for an IB or IGCSE tutor in Pilani?",
      paragraphs: [
        "The fee follows four things: how scarce the subject is, the level, how recently the tutor has taught the exact syllabus, and how often lessons run, and your rate is quoted in writing before you book. Nothing is added for distance, because no tutor travels to Pilani and no student travels to a tutor.",
        "Science and Mathematics at Higher Level draw on a smaller pool of experienced tutors than IGCSE Core or middle-years support, so those hours tend to cost more. A combination such as Physics HL with Design Technology narrows the pool further, and it can take a little longer to arrange than one common subject.",
        "Lesson patterns matter too. Families usually begin with one weekly hour, add a second before mock exams, and book short daily runs ahead of the May session or an entrance window. Starting small lets a family judge the value of the first month before scaling up.",
        "Compare providers on substance, not only price. Ask which current IB or Cambridge papers a tutor has marked, whether the plan is written down, and what happens if the fit is wrong. A tutor who has taught your exact course will usually cover ground faster than a capable general teacher working from notes.",
      ],
      bullets: [
        "Higher Level science and Maths usually cost more than IGCSE Core, because experienced tutors are fewer",
        "Your rate is confirmed in writing before the free trial",
        "Nothing is added for distance: lessons are online",
        "A different tutor is arranged if the first is not the right fit",
      ],
    },
    {
      heading: "Online tutors, local teachers, coaching towns or self-study: what suits a Pilani student?",
      paragraphs: [
        "For IB and IGCSE tutors in Pilani, live online lessons usually fit best, because local teaching here is built around CBSE, the Rajasthan Board and engineering entrance tests, and coaching centres are designed for batches rather than one student’s syllabus. The table compares four routes for a Pilani student.",
        "Local teachers and campus-linked tutors can be excellent at Mathematics and Physics at the level of Indian entrance tests. The IB and Cambridge papers ask for something different, such as explained reasoning, practical planning and structured extended answers, and very few tutors in town have marked them recently.",
        "Coaching towns, Sikar and Jaipur among them, offer intensive batches for JEE and NEET. They are built for that single goal, and a student taking the Diploma alongside would be stretched between two timetables. Some families use them for entrance preparation and add online lessons for the IB or IGCSE subjects.",
        "Self-study works well for motivated students with good access to past papers, and the academic culture around BITS can make it attractive. It is weaker where feedback is the whole point, in IB explorations, extended essays and practical components, and a tutor acts as the second reader who catches what a student cannot see alone.",
      ],
      table: {
        caption: "Four routes to IB or IGCSE support from Pilani",
        columns: ["Route", "Built for", "Fit with IB or IGCSE", "Practical note for Pilani"],
        rows: [
          ["Online one-to-one", "The exact IB or IGCSE course", "Matched to code, level and session", "Lesson at home; no travel in a town without a railway station"],
          ["Local teachers and tutors", "CBSE, Rajasthan Board and entrance-test preparation", "Uneven; few have marked current IB or Cambridge papers", "Slots depend on the teacher’s own timetable"],
          ["Coaching in Sikar or Jaipur", "Batch preparation for JEE and NEET", "Not designed for IB or Cambridge assessment", "Means a move or a long journey"],
          ["Self-study", "Independent learners with good past-paper access", "Whatever the student manages alone", "Nobody checks explorations or extended writing"],
        ],
      },
      bullets: [
        "Local teaching is built around CBSE, Rajasthan Board and entrance tests",
        "Coaching towns prepare for JEE and NEET, not for IB or Cambridge assessment",
        "Self-study is weakest where feedback matters most",
        "A tutor is the second reader who catches what a student cannot see alone",
      ],
    },
    {
      heading: "How do Shekhawati summers, winter cold and festival weeks shape the Pilani school year?",
      paragraphs: [
        "Pilani’s semi-arid climate gives long, hot summers and cold winter mornings, and those two extremes matter more to a study plan than any school holiday. Afternoons from May to June are best left for rest, while December and January mornings are too cold for early starts, so evening lessons work all year.",
        "Festivals add their own rhythm. Holi, Teej and Diwali pause the calendar, the Rani Sati fair at Jhunjhunu brings pilgrim traffic on key dates, and campus festivals such as OASIS and APOGEE fill the town with visitors. Lessons that are online can shift by a day without anyone travelling.",
        "Board and exam calendars set the real deadlines. Rajasthan Board and CBSE papers run from February and March, IB Diploma papers begin around the start of May, Cambridge’s main series runs in May and June, and BITSAT has been held in April and May. A Diploma student should plan the overlap early.",
        "For overseas plans, results and deadlines run later: IB May results arrive in early July and Cambridge June results in August, while university applications cluster between October and January. Predicted grades, requested in the autumn of Class 12, are therefore the first numbers that overseas admissions offices see.",
      ],
      table: {
        caption: "A Pilani study year and what it means for lessons",
        columns: ["Period", "What happens", "Planning note"],
        rows: [
          ["April to June", "Heat builds; board exams end; BITSAT sessions; IB and Cambridge written papers begin", "Evening sessions only; plan around BITSAT dates if relevant"],
          ["July to September", "Monsoon rains arrive after the heat; new school year; Teej and the Rani Sati fair", "Good months for covering content and building habits"],
          ["October to December", "Diwali; campus festival season; Cambridge October-November series; first cold mornings", "Expect short weeks; schedule revision blocks ahead"],
          ["January to March", "Cold mornings; mock exams; board exams from February; APOGEE and other campus events", "Timed-paper practice; avoid early-morning slots"],
        ],
      },
      bullets: [
        "Summer afternoons and winter mornings both argue for evening lessons",
        "Holi, Teej, Diwali and the Rani Sati fair each interrupt the calendar",
        "BITSAT, IB and Cambridge sessions overlap in April and May",
        "Predicted grades in the autumn of Class 12 reach overseas offices first",
      ],
    },
    {
      heading: "Where do IB and IGCSE students from Pilani go after school?",
      paragraphs: [
        "The routes are BITS Pilani itself through BITSAT, other engineering and science institutes through JEE Main, JEE Advanced or CUET-UG, medicine through NEET-UG, and universities abroad. IB Diploma holders need Association of Indian Universities equivalence for most Indian admissions, and every test publishes its own eligibility rules.",
        "Within reach are MNIT Jaipur and Delhi’s universities, entered through JEE Main, CUET-UG and their own processes, while Rajasthan offers state colleges and medical colleges through NEET-UG counselling. For the sciences, IB Higher Level Mathematics, Physics and Chemistry are a solid base, though each entrance test has its own syllabus to cover.",
        "For study abroad, UK offers usually name total IB points with Higher Level minimums, US and Canadian applications weigh grades beside essays and activities, and predicted grades requested in the autumn of Class 12 come first. Whatever the target country, tutors help lift the subject grades it asks for.",
        "IB Gram does not advise on admission rules or eligibility and cannot promise any outcome. What tutors do is teach the required subjects in depth, flag where an IB course differs from an Indian entrance syllabus, and keep your child’s options open while you check each test’s current rules.",
      ],
      bullets: [
        "BITSAT, JEE Main, CUET-UG and NEET-UG each publish their own eligibility rules",
        "IB Diploma holders usually need AIU equivalence for Indian admissions",
        "MNIT Jaipur and Delhi’s universities are within reach of a Pilani family",
        "Tutors teach subjects in depth and do not advise on admission rules",
      ],
    },
    {
      heading: "IB Maths, the sciences and IGCSE tiers: what should a student with BITS on the horizon choose?",
      paragraphs: [
        "Take Maths AA at Higher Level with Physics and Chemistry if engineering or pure science is the aim, since that combination covers the calculus, mechanics and chemistry that entrance tests examine. Maths AI suits economics, biology or design-led paths better. The safest step is to read the entry requirements for two or three target programmes before the subject forms are filed.",
        "IB sciences differ from entrance-test science in style. Physics HL rewards explained reasoning, Chemistry HL asks for applied organic and energetic thinking, and each course’s Internal Assessment is a report the student runs alone. A tutor can show how the styles differ and help a student prepare for both without diluting either.",
        "IGCSE choices come down to tier and board. Core limits the top grades while Extended opens them, and Additional Mathematics 0606 adds calculus for students heading toward Maths AA or entrance-style problem solving. A capable Pilani student with no school to set the tier should start Extended and review after the first mock.",
        "If a school or centre has not fixed the board, pick one early. Cambridge and Edexcel overlap heavily in content yet differ in tier names, phrasing and mark allocation, so working from one family of past papers avoids confusion. A tutor who has taught both explains the differences quickly.",
      ],
      bullets: [
        "Maths AA HL with Physics and Chemistry covers the content entrance tests examine",
        "Maths AI suits economics, biology and design-led paths",
        "Start a capable IGCSE student on Extended and review after the first mock",
        "Fix the board early and use only its past papers",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach the IB from PYP to DP and both IGCSE boards. For Pilani each match starts from the exact course, level and exam session, because local expertise here runs to engineering and entrance tests rather than to the IB or Cambridge syllabi.",

  process: [
    { title: "Send your details", description: "Programme or board, subjects, current class and the exam you are working toward, including any entrance test." },
    { title: "Review the suggestions", description: "Tutors shortlisted on recent teaching of your exact course, each with a reason." },
    { title: "Try a lesson", description: "A free trial on a topic your child brings." },
    { title: "Confirm the plan", description: "A written first-month outline and the rate, before anything is booked." },
    { title: "Review as you go", description: "Weekly lessons, notes, periodic reviews and a change of tutor on request." },
  ],

  whyPoints: [
    { title: "Right syllabus, right level", description: "Board, tier, subject code and exam session are settled before a tutor is suggested." },
    { title: "Suited to a campus town with no IB school", description: "With no IB or Cambridge campus in Pilani, tutors come from across India." },
    { title: "No journeys to plan", description: "With no railway station in town, a laptop lesson saves a bus or road trip." },
    { title: "Honest about coursework", description: "Tutors coach; they never write an Internal Assessment, Extended Essay or coursework." },
    { title: "Progress you can see", description: "A written note after each lesson and periodic reviews show what has moved." },
    { title: "Room to change", description: "The trial is free, no school or board is tied in, and a new tutor is arranged if needed." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Pilani?", answer: "Send your child’s programme, subject, level and exam session, and say whether an entrance test is in the picture. We shortlist tutors who have recently taught that exact course and arrange a free first lesson so your child can judge the fit. Because Pilani has no IB or Cambridge school, matching is done across India and every lesson takes place live on video." },
    { question: "Do you offer IGCSE tutors in Pilani for Cambridge and Edexcel?", answer: "Yes, for both boards, taught online. Tell us which board your child will sit and whether they are a school or private candidate, since codes, tiers and exam series differ. Tutors work from the board’s own past papers and mark schemes. For a private candidate, entry goes through an exam centre, so check availability early." },
    { question: "Do your tutors come to homes in Pilani?", answer: "No. Tutors do not visit homes in Pilani; in-person home visits are offered only in Gurugram and parts of Delhi NCR. A Pilani lesson is a live video call with one tutor and one student, sharing a screen to work through problems and papers. It is private tuition at home, taught through a laptop, which suits a town with no railway station." },
    { question: "What does an IB or IGCSE tutor cost in Pilani?", answer: "The fee depends on the subject’s scarcity, the level, lesson length and how recently the tutor has taught the syllabus, and it is quoted in writing before you book. Higher Level science and Mathematics usually cost more than IGCSE Core or middle-years support. Nothing is added for distance, since lessons are online, and families can start with one weekly hour." },
    { question: "Is there an IB or Cambridge school in Pilani?", answer: "None could be confirmed. Pilani Public School on Chirawa Road is listed as a CBSE school, the town has Birla-founded schools, and the nearest confirmed IB and Cambridge campus is Mody School at Laxmangarh, with more choice in Jaipur and Gurugram. Check admissions and programmes with any school yourself, because they change, and remember that tutoring works alongside any school." },
    { question: "We live on the BITS campus. Can lessons fit around a faculty or research schedule?", answer: "Yes. Evening and weekend slots are the most common, and they can move around campus events, conferences and travel, since nothing depends on a tutor’s commute. Some families keep the same slot each week, others agree the coming fortnight in advance, and both work. Tell us your routine at the first conversation and the plan is built around it." },
    { question: "Will BITS Pilani accept an IB Diploma or IGCSE results?", answer: "That is a question for the BITS admissions office, and we cannot answer it for them. BITS describes BITSAT as the sole gateway to first-degree programmes, publishes a 75 per cent rule for Physics, Chemistry and Mathematics together, and offers a separate route for international students. Read the current brochure, ask how your child’s qualification is treated, and be wary of any claim of direct admission." },
    { question: "BITSAT falls in the same weeks as IB exams. How should a student plan?", answer: "Start early and build a written timetable that shows both. BITSAT has been held in April and May, and IB written papers begin around the start of May, so a student needs BITSAT-style practice before the exam period and a calm plan for what follows. Tutors prepare the Mathematics, Physics and Chemistry that overlap and keep both targets visible, without guaranteeing either." },
    { question: "Can a tutor help with an IB Internal Assessment?", answer: "As a coach, yes; as an author, never. Tutors can help a student choose a workable question, read the criteria, design a method and improve the structure of a draft. They do not write or rewrite any part of an Internal Assessment, Extended Essay, TOK essay or coursework, because the IB requires the work to be the student’s own and the result belongs to your child." },
    { question: "Which IB subjects do you cover for Pilani students?", answer: "Both Mathematics courses, Physics, Chemistry, Biology, Computer Science, Design Technology, Economics, Business Management, English A, Hindi A and Theory of Knowledge are regular requests, and other subjects are checked case by case. Engineering-minded students often combine Maths AA, Physics and Chemistry; we confirm a tutor for each subject before the trial lesson." },
    { question: "Do you teach PYP and MYP students from Pilani?", answer: "Yes, across the continuum. PYP help centres on reading, number sense and explaining ideas; MYP help usually takes one subject and works it against the published criteria, or supports the Personal Project process. Sessions for younger children are short and varied, and tutors are matched to the child’s age and whichever programme the family is following." },
    { question: "When should my child start IB or IGCSE tutoring?", answer: "Ideally at the start of the course: Class 11 for the Diploma, Class 9 for IGCSE. The early months are for closing gaps before internal deadlines and mocks arrive. A later start still pays off, especially in the final four months, when timed papers and the highest-value topics count most." },
    { question: "Is online tuition reliable in Pilani through the summer heat and power cuts?", answer: "It is, with a little planning. Keep a phone hotspot as a backup to home broadband, choose an evening slot in May and June when afternoons are too hot to work, and tell us promptly about outages so the lesson can be moved. A written note after every session means nothing covered is lost if a session is shortened." },
    { question: "Is there a free trial lesson?", answer: "Yes, every match begins with one, free of charge, on a topic from your child’s current syllabus. Afterwards you receive a short written plan for the first month with the rate confirmed. You can continue, try a different tutor or stop, and the trial is also a chance to ask which past papers the tutor has marked recently." },
    { question: "How do you vet tutors?", answer: "We review qualifications, recent teaching of the specific syllabus and level, and how well a tutor knows the assessment criteria before any introduction. Tutors are based in India and teach on Indian Standard Time, so there is no time-zone gap to manage. The trial lesson then lets your child judge the match, and a change is easy to arrange." },
    { question: "Is IB Gram affiliated with BITS Pilani, any school, the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service with no link to BITS Pilani, any school named on this page, the International Baccalaureate, Cambridge or Pearson Edexcel, and none of them endorses it. BITS Pilani and the schools appear only as local context, and our tutors teach from each board’s published specifications." },
  ],

  internalLinks: [
    { label: "IB Gram across India", href: "/india/", description: "Online IB and IGCSE tutoring across Indian cities, from large metros to small campus and market towns." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The Gurugram hub, where in-person home tuition runs and IB and IGCSE schools are most concentrated." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE explained: Cambridge and Edexcel boards, tiers, subject codes and exam sessions." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma in depth: subject groups, HL and SL hours, TOK, the Extended Essay and scoring." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "The Middle Years Programme: subject groups, criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "The Primary Years Programme, its units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation: a guide to choosing between them." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles, searchable by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Get in touch to share your brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Sikar", href: "/sikar/", description: "Sikar, the district town known for coaching, with Mody School a short way off at Laxmangarh." },
    { label: "IB and IGCSE tutoring in Jaipur", href: "/jaipur/", description: "Jaipur and its wider choice of IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Bhiwani", href: "/bhiwani/", description: "Tutor matching for Bhiwani, the Haryana district city across the state line." },
    { label: "IB and IGCSE tutoring in Lachhmangarh", href: "/lachhmangarh/", description: "Tutoring for Lachhmangarh, the Sikar district town where Mody School stands." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson in Pilani",
  closingBody:
    "Share your child’s programme or board, the subjects and levels, any entrance test in the picture and the evenings that suit your household. You will receive a shortlist of tutors with their syllabus history and a few trial slots, all online and free of charge at this stage. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
