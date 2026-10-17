import type { CitySeoPage } from "../types";

/**
 * /suri/ - IB and IGCSE tutoring page for Suri, Birbhum, West Bengal. Online only.
 * No IB or Cambridge/Edexcel school in Suri is confirmed, so stripSchools is empty and the clusters
 * are honestly labelled Kolkata options reused from the Kolkata and Asansol pages.
 */
export const suri: CitySeoPage = {
  slug: "suri",
  countryName: "Suri",
  countryNameLong: "Suri, Birbhum, West Bengal",
  demonym: "Suri",
  state: "West Bengal",
  stateCode: "IN-WB",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots planned around Durga Puja, Poush Mela week, Kali Puja and the heavy Birbhum summer afternoons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.9078, longitude: 87.5247 },
  wikipedia: "https://en.wikipedia.org/wiki/Suri,_India",
  alternateNames: ["Siuri", "Sury", "Birbhum", "Suri Birbhum"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Suri, Birbhum | Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Suri, Birbhum: private one-to-one lessons in Maths, Science and English for Bengali-medium families. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Suri, Birbhum",
  heroEyebrow: "IB & IGCSE TUITION FOR SURI AND BIRBHUM, LIVE ONLINE",
  heroSubtitle:
    "Looking for private tuition at home in Suri for an IB or IGCSE student? The workable form is online home tuition: a live, one-to-one lesson that your child takes at the family desk while a tutor, teaching from elsewhere in India, works through the actual syllabus. Suri is the district headquarters of Birbhum, about a day's travel from Kolkata's international schools, so a screen is often the more practical classroom.",
  primaryKeyword: "IB and IGCSE tutors in Suri",
  imageAltText: "A Suri student in Birbhum revising IGCSE Chemistry at home on a winter evening with a live tutor on the laptop",
  secondaryKeywords: [
    "IB tutor Suri",
    "IGCSE tutor Suri",
    "IB home tuition Suri",
    "IGCSE home tuition Suri",
    "IB private tuition Suri",
    "IB Maths tutor Suri",
    "IGCSE Maths tutor Suri",
    "IB Physics tutor Suri",
    "IB Chemistry tutor Suri",
    "IB Biology tutor Suri",
    "IB DP tutor Suri",
    "IB MYP tutor Suri",
    "IB PYP tutor Suri",
    "IGCSE online tuition Suri",
    "IB tutor Birbhum",
    "IGCSE tutor Bolpur Santiniketan",
    "online IB tutor Sainthia Rampurhat",
    "IB tutor Siuri West Bengal",
    "Cambridge IGCSE tuition Birbhum district",
  ],

  heroTrustPoints: [
    "Tutors matched to the IB subject and level or IGCSE syllabus code your child follows",
    "One-to-one video lessons that fit around a Bengali-medium school timetable",
    "A first lesson at no cost, with a written rate beforehand",
    "Independent of the IB, Cambridge, Pearson and every school",
  ],
  heroStats: [
    { value: "IST", label: "Same time zone as Suri" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "Suri's students usually have the talent and the ambition; the missing piece is a teacher who knows the syllabus",
    paragraphs: [
      "Suri is a quiet administrative town. The district courts, the Birbhum collectorate, Suri Vidyasagar College and a long run of Bengali-medium and English-medium schools define its rhythm, and Santiniketan, with its Visva-Bharati tradition, lies a short ride away towards Bolpur. Educational culture here runs deep. Families that send children to Kolkata for school, or are considering a move there, often ask about IB and Cambridge IGCSE because those syllabuses are accepted in universities across India and overseas.",
      "We do not have tutors who visit Suri, and in-person home visits exist only in Gurugram and parts of Delhi NCR. What we offer is online: the lesson is live, private and scheduled, the tutor teaches from elsewhere in India, and the student stays at home with a laptop. For a Suri family this means one teacher who has taught IB Physics HL or IGCSE Additional Mathematics, without a long commute to a coaching centre in Durgapur or Kolkata.",
      "Students come in three ways. Some are already enrolled at an international school in Kolkata or a boarding school and want help during holidays. Some are in Bengali-medium schools in Suri and preparing for a move after Class 8 or Class 10. A few belong to families working in Birbhum's government services, banking or medicine who want an international course kept going through a posting.",
      "Our tutors coach, explain and give feedback. They do not write Internal Assessments, Extended Essays or any other assessed piece. IB Gram is not linked to any board or school, and the first lesson is free.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Online lessons only; tutors do not come to Suri",
      "Bengali-medium students preparing to switch to English-medium international courses are welcome",
      "Free first lesson and a written note after every session",
    ],
  },

  programmesIntro:
    "Parents in Birbhum often ask what an IB programme looks like to a child raised on the West Bengal board. The summaries below explain each stage and what our lessons add for a Suri student.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning runs through big ideas such as how we express ourselves or where we are in place and time, and children finish with an Exhibition project they lead. Tutoring at this age builds spoken English, reading stamina and confident number work.",
      countryNote:
        "Suri's primary children usually speak Bengali at home, so a patient weekly English session before a school move in Kolkata makes the first term in a PYP class far gentler.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against criteria, units are built around concepts and contexts, and the Personal Project closes the stage. Students have to show how they reason and not merely what they remember.",
      countryNote:
        "A Class 7 or 8 student arriving from a Bengali-medium school tends to be strong at content but unused to writing explanations in English, which is where one-to-one sessions help.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, the Extended Essay, Theory of Knowledge and CAS. The load is demanding and predictions feed into university offers.",
      countryNote:
        "DP students linked to Suri are mostly boarders or Kolkata-based, and a tutor at home keeps Maths and the sciences moving during Puja holidays and the long winter break.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP mixes DP courses with a career-related study and a reflective project. Only a small number of Indian schools run it.",
      countryNote:
        "No CP school is known to us in Suri or Birbhum. Support would cover the DP-level subjects of a student enrolled somewhere else.",
    },
  ],

  subjectsIntro:
    "Suri is better known for Bengali literature and humanities than for IB sciences, so we pay extra attention to matching your child with a tutor who has taught the same course at the same level, and to building English fluency alongside the subject.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof, with careful reading of multi-step problems." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator methods, with the exploration topic chosen early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through fields, with emphasis on graphs, units and unfamiliar contexts." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Atomic structure, bonding, kinetics and organic chemistry, using the data booklet fluently." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, written with the exact terms markers look for." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, definitions and evaluation, with Bengal's jute, rice and tea economies as live examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, finance calculations and recommendations." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay structure, with the Bengal Renaissance and Partition as familiar backdrops." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and comparative writing, for students used to thinking in Bengali." },
    { name: "IB Bengali A", levels: "HL / SL", description: "Literature in Bengali, from Tagore and Bibhutibhushan to modern poetry, for students who want their own language counted." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition for speaking, reading and writing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, networks and the programming project." },
    { name: "IB Visual Arts", levels: "HL / SL", description: "Portfolio planning and critical writing, relevant to students from a region rich in art and craft." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of knowledge claims, leading to an exhibition and an essay of the student's own." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Planning a researchable question and structuring the argument. Feedback only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigation, written reasoning and foundations for the Diploma." },
  ],

  igcseSubjectsIntro:
    "Suri students who move to a Kolkata international school will usually meet Cambridge IGCSE, with some schools using Pearson Edexcel. We confirm the board and syllabus code first, then follow it closely.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with tier guidance." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus and functions, a bridge to IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, circuits and waves, plus practical skills." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, rates, electrolysis and organic basics with tidy working." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, human biology, inheritance and ecology with data questions." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences under one qualification." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Algorithms, logic and pseudocode." },
    { name: "IGCSE Economics and Accounting", levels: "Grade 9-10", description: "Concepts, ledgers and final accounts, suited to business-minded families." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Comprehension, directed writing and speaking for first-generation English-medium students." },
    { name: "IGCSE Bengali as a Second Language", levels: "Grade 9-10", description: "Reading and writing in Bengali, a natural strength for Suri students." },
  ],

  regionsTitle: "Suri, Birbhum and the towns around it that we teach online",
  regionsIntro:
    "A tutor on a screen does not care whether a student lives in the town centre or in a village off the Suri-Bolpur road. The notes below describe the everyday context we plan around: school timings, travel corridors and seasonal interruptions.",
  regions: [
    { name: "Suri town centre", note: "The courts, collectorate and main market, where professional families live within reach of the older English-medium and Bengali-medium schools." },
    { name: "Suri Vidyasagar College area", note: "A college neighbourhood with teachers and students, and a steady habit of evening study." },
    { name: "Bolpur and Santiniketan", note: "About half an hour by road, home to Visva-Bharati's campus and to families with an interest in the arts and international education." },
    { name: "Sainthia", note: "A railway junction town in the district whose families often travel to Kolkata and Durgapur for work and study." },
    { name: "Rampurhat", note: "The northern commercial town of Birbhum, close to the Tarapith temple, with a busy trading and railway community." },
    { name: "Dubrajpur", note: "A town towards Durgapur side, with households that use Durgapur's coaching and school options." },
    { name: "Ilambazar and Rajnagar", note: "Semi-rural blocks near Suri where lessons suit households with a steady home internet link." },
    { name: "Nalhati and Mayureswar", note: "Smaller towns in the district where parents ask about online options as local teachers of international syllabuses are scarce." },
    { name: "Government quarters and bank colonies in Suri", note: "Posted officers, bankers and doctors who change stations and value a tutor who moves with them." },
  ],

  schoolClusters: [
    {
      city: "Suri and Birbhum",
      note: "We could not confirm an IB or Cambridge / Edexcel IGCSE school in Suri, Bolpur or Rampurhat. Local schools follow the West Bengal boards, CBSE or ISC.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata (EM Bypass and Anandapur)",
      note: "About 200 km by road and rail, and the main destination for Birbhum families seeking an international school. Many use boarding or relocate.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata", "Garden High International School"],
    },
    {
      city: "Nearby: Kolkata (Alipore and the south)",
      note: "A second cluster of international options for families who prefer the city's southern or older neighbourhoods.",
      schools: ["RP Goenka International School", "Oaktree International School"],
    },
  ],
  schoolDisclaimer:
    "The Kolkata schools listed are mentioned only because Birbhum families sometimes consider them. IB Gram is an independent tutoring business with no tie to any of them, to the IB, Cambridge or Pearson, and we have not confirmed an IB or IGCSE school inside Suri. Please check curricula and admissions with the school.",

  modesIntro:
    "All lessons for Suri are online. The three patterns below are the ones that suit a district town with a long rail link to Kolkata.",
  modes: [
    {
      title: "Online home tuition, weekly",
      description:
        "A regular evening slot with a tutor matched to the course. Your child studies at home and the tutor appears on screen, so there is no Kolkata trip and no dependence on a local specialist.",
      bullets: [
        "One tutor per subject and level",
        "Live board work and a written note after each class",
        "Slots moved around Puja and exam weeks",
        "No tutor visits homes in Suri",
      ],
    },
    {
      title: "Bridge before a move to Kolkata",
      description:
        "For students about to enter an international school, a few months of lessons prepare English writing, subject vocabulary and the style of reasoning the new school will expect.",
      bullets: [
        "Diagnostic first lesson",
        "English for Maths and Science answers",
        "Sample papers in the destination syllabus",
        "Check-ins through the first term",
      ],
    },
    {
      title: "Holiday and exam-season blocks",
      description:
        "Boarders back for Durga Puja or winter holidays use short, intensive lesson blocks. Extra hours are added before mocks and the May and November exam series.",
      bullets: [
        "Alternate-day or daily sessions in breaks",
        "Timed past papers with mark-scheme review",
        "Revision planner shared with parents",
        "Back to a weekly slot afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB and IGCSE schools in or near Suri?",
      paragraphs: [
        "We could not confirm any IB or Cambridge / Edexcel IGCSE school in Suri, Bolpur, Sainthia or Rampurhat. The district's schools follow the West Bengal board for Madhyamik and Higher Secondary, along with CBSE and ISC. We checked school directories and the IB and Cambridge lists and found nothing in Birbhum, so we do not name any.",
        "The international options that Birbhum families consider are in Kolkata, roughly 200 km away by road and a little over three hours by train from Bolpur side stations. Calcutta International School, The Heritage School and Garden High International School sit in the EM Bypass and Anandapur belt, while RP Goenka International School and Oaktree International School are in other parts of the metropolis. All of these are confirmed on our Kolkata and Asansol pages. The distance means boarding or relocation, which is a big decision.",
        "The families who write to us are usually one of three kinds. Some are deciding whether to move a child to Kolkata and want a realistic taste of the syllabus first. Some already have a child in a Kolkata school and want holiday help. And some are professionals posted to Birbhum, such as doctors, bank managers and college lecturers, who want an international curriculum to continue without a break.",
        "In each case, tutoring supports the school arrangement and does not replace it. A free trial lesson is a simple way to see whether the style of an IB or Cambridge classroom suits your child.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Suri or Birbhum",
        "Kolkata is the main destination and is about 200 km away",
        "Three kinds of family use online tutoring: movers, boarders and posted professionals",
        "Tutors support the school route and never replace it",
      ],
    },
    {
      heading: "How does IB or IGCSE compare with the West Bengal board and CBSE for a Suri student?",
      paragraphs: [
        "Most students in Suri study under the West Bengal Board of Secondary Education for Madhyamik, followed by the Higher Secondary council, largely in Bengali with English as a subject. The syllabus is content-rich, the exams reward accurate recall, and the route to Presidency, Jadavpur, Visva-Bharati or engineering entrance exams is well understood. CBSE and ISC are present in a few private schools and follow national patterns.",
        "IB and IGCSE are organised differently. The teaching language is English, and the marks reward explanation and evaluation. A student who can reproduce a textbook proof may still lose marks in IGCSE Mathematics because working is not set out, or in IB Chemistry because a reason was left unsaid. Much of what we teach is that habit of showing your thinking.",
        "There is also a pace difference. Bengal Board subjects are often covered in great detail, whereas an IB course selects fewer topics and goes deeper into application. A student moving from one to the other may feel the work is both easier and harder, and needs to hear that this is normal.",
        "The table compares the main boards from a Birbhum perspective.",
      ],
      table: {
        caption: "West Bengal boards, CBSE and IB or IGCSE seen from Suri",
        columns: ["Feature", "West Bengal Board", "CBSE / ISC", "IB / IGCSE"],
        rows: [
          ["Main teaching language", "Bengali, with English as a subject", "English", "English, plus a second language such as Bengali"],
          ["Assessment style", "Detailed recall and long answers", "Recall and application", "Reasoning, evidence, evaluation"],
          ["Availability in Suri", "Widespread", "A small number of schools", "None confirmed; nearest in Kolkata"],
          ["Route to Indian universities", "Direct, including state entrance exams", "Direct", "Needs AIU equivalence and eligibility checks"],
          ["Portability", "Mostly within West Bengal", "Across India", "Across authorised schools worldwide"],
        ],
      },
    },
    {
      heading: "What does a tutor for IB or IGCSE cost in Suri, and what drives the rate?",
      paragraphs: [
        "Fees are built from the programme and level, the subject, the length of the lesson, the number of lessons a week and the tutor's track record with your syllabus. A Class 12 IB Physics HL tutor with years behind them is priced differently from a tutor for Class 7 MYP reading and Maths. We do not publish a price list because any figure would be wrong for half the families who read it.",
        "Because teaching happens online, nothing is spent on fuel or train fares, and no hours vanish into a commute to Durgapur or Kolkata. Families in district towns often tell us this is the decisive factor, since the local alternative is either a generalist teacher or a long journey.",
        "After you message us with the class, board and subject, we reply with a tutor profile and a written rate. You see the figure before the free trial is booked, and if the trial is not right, you pay nothing. Later you can reduce hours, pause during Puja or a family event, or change tutor without a fee.",
        "A sensible start is one lesson a week in the hardest subject, a review after a month, and extra sessions only before mocks. That way spending follows need and not anxiety.",
      ],
      bullets: [
        "Programme, level, subject, lesson length and weekly frequency",
        "No travel cost and no commute to Durgapur or Kolkata",
        "Written rate before the free trial",
        "Pause, reduce or change tutor whenever you like",
      ],
    },
    {
      heading: "Is online tuition better than a local tutor or coaching in Birbhum?",
      paragraphs: [
        "It depends what the child needs. Suri and nearby Bolpur have capable teachers and coaching centres for Madhyamik, Higher Secondary and JEE or NEET preparation, and for those exams they are a sensible choice. They are less equipped for IB Mathematics or IGCSE Chemistry, where the question styles and mark schemes are unfamiliar to teachers who have never prepared students for them.",
        "An IB Gram tutor is chosen for experience with the actual course. They use past papers from the correct board, explain how examiners award marks, and write a short note after each session. One-to-one attention also matters for a student whose English is still developing, because the tutor can pause and rephrase without holding up a class.",
        "Self-study and recorded videos are good for revision but weak on feedback. They cannot mark an essay, point out that a graph lacks labelled axes, or hear that an oral response is too short.",
        "The table sets the options next to each other.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE student in Suri",
        columns: ["Route", "Familiar with the course", "Feedback", "Fit for Birbhum"],
        rows: [
          ["Online one-to-one tutor", "Yes, for the named syllabus", "Personal, every lesson", "Needs a home connection; no travel"],
          ["Local private teacher", "Rarely beyond the state board", "Personal", "Convenient but limited for international papers"],
          ["Coaching centre in Durgapur or Kolkata", "Mostly JEE, NEET or board-focused", "Shared in a batch", "Long journeys and fixed batches"],
          ["Self-study with videos", "Varies", "None unless reviewed", "Flexible but unsupported"],
        ],
      },
    },
    {
      heading: "How do Durga Puja, Poush Mela and the Birbhum summer shape the study year?",
      paragraphs: [
        "In West Bengal, Durga Puja is the longest pause in the year. Schools close for a week or more around Mahalaya and Dashami, families travel, and students rarely want to study after a night of pandal visits. We therefore plan lesson blocks before the holidays, and leave Puja week largely free, then resume with a short revision session.",
        "Birbhum has its own calendar. Poush Mela in Santiniketan, held in the winter months, and the Kenduli Joydev fair at Makar Sankranti bring visitors and traffic, and Basanta Utsav at Holi is a local spring event. Kali Puja and Diwali fall within the autumn exam window, which matters for November papers.",
        "The weather sets limits too. Summers in Birbhum are hot and dry, with loadshedding possible during peak afternoon hours, and the monsoon brings heavy rain on rural roads. Winters are pleasant and suit long study blocks. We schedule hard subjects in cooler months and in the evenings where possible.",
        "The table sets the local pattern against international exam dates.",
      ],
      table: {
        caption: "Suri's festival and weather calendar against IB and IGCSE dates",
        columns: ["Months", "Local pattern", "Academic point"],
        rows: [
          ["January to February", "Poush Mela aftermath, Saraswati Puja, pleasant weather", "Mock exams in many schools; Cambridge February-March series"],
          ["March to May", "Holi, Basanta Utsav, rising heat", "IB May and Cambridge May-June exams"],
          ["June to September", "Monsoon and school reopening", "New year; IB results in July; Class 10 and 11 start-up"],
          ["October to December", "Durga Puja, Kali Puja, Diwali", "IB November session; Cambridge and Edexcel autumn papers"],
        ],
      },
    },
    {
      heading: "What can a Suri student do after IB or IGCSE?",
      paragraphs: [
        "A student who finishes IGCSE and the IB Diploma or A Levels can aim at Indian universities, through Association of Indian Universities equivalence and CUET-UG, or at foreign ones. West Bengal has strong institutions that Suri families know well: Presidency University, Jadavpur University, IIT Kharagpur, Visva-Bharati and the IISER at Kolkata. Each has its own conditions for international-board applicants, and these change, so check the current notice.",
        "Medical and engineering entrances such as NEET and JEE have published eligibility rules for students of international boards, including subject requirements and equivalence. These must be confirmed from official notifications each year, and a tutor cannot decide them for you.",
        "Many Birbhum families also think about study abroad. The UK, Canada, Australia and the United States are the usual choices, and the IB Diploma and strong IGCSE to A Level results are well understood by their admissions offices. Bengal has a long tradition of students going abroad for research degrees, and the IB's emphasis on independent work suits that path.",
        "Our role is to help with grades and exam technique. Personal statements and applications are written by the student.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for central universities",
        "Presidency, Jadavpur, IIT Kharagpur and Visva-Bharati are well-known local targets",
        "NEET and JEE eligibility for international boards must be checked each year",
        "Study abroad is a common second route",
      ],
    },
    {
      heading: "How do IB Mathematics and the IB sciences work, and where do Suri students struggle?",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches and Applications and Interpretation. The first is heavy on algebra and calculus and is the usual choice for future engineers, scientists and economists. The second uses statistics, modelling and technology, and suits many social science and business students. Students from the Bengal Board are usually strong at algebra and geometry but less used to a graphic display calculator and to explaining each step in English.",
        "IB Physics, Chemistry and Biology share a structure: a core of content, options or applications, and an Internal Assessment investigation. Physics questions often present unfamiliar situations, Chemistry demands exact terminology and calculation layout, and Biology wants accurate vocabulary and clear reasoning in short answers. Students educated in Bengali sometimes know the idea but not the English phrase, which costs marks.",
        "We deal with this through vocabulary lists built lesson by lesson, worked examples that show a full-mark answer, and timed questions to train pace. Command terms such as state, outline, discuss and evaluate get direct practice.",
        "For Internal Assessments, the tutor can talk through research questions, variables and data handling, and give feedback on clarity. The student does the work and writes it up.",
      ],
      bullets: [
        "Pick Mathematics AA or AI with future study in mind",
        "Build English vocabulary alongside scientific ideas",
        "Practise command terms with timed questions",
        "Receive feedback on Internal Assessments without ghost-writing",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects should a Suri student choose?",
      paragraphs: [
        "Cambridge IGCSE subjects usually come in Core and Extended tiers. Core limits the top grade and covers fewer topics, while Extended covers everything and reaches A*. A student who expects to continue to IB Mathematics, A Level sciences or competitive engineering routes should normally sit Extended.",
        "A standard subject spread has English, Mathematics, two or three sciences, a second language and one or two electives. For a Suri student the second language often becomes Bengali, which is a reliable scoring subject, while Hindi is an option for others. Electives such as Computer Science, Economics, Accounting or Art follow the student's interests and the school's offer.",
        "English as a Second Language is the quiet key to everything else. Students who read confidently and write clear paragraphs do better in Science and Humanities papers too, so we suggest regular short reading and writing practice even in the quiet months.",
        "Edexcel courses are laid out slightly differently from Cambridge, so the tutor confirms the board and specification code first.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the class, board, subject and any Kolkata school under consideration on WhatsApp." },
    { title: "See a tutor profile", description: "We propose a tutor who has taught your exact syllabus and quote a rate in writing." },
    { title: "Try a free lesson", description: "Meet the tutor online and test the home connection without paying." },
    { title: "Set a weekly slot", description: "Choose an evening that works around school, tuition and festival weeks." },
    { title: "Review monthly", description: "Read the lesson notes, adjust hours and switch tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right course, right tutor", description: "We match by syllabus code and level, not only by subject name." },
    { title: "English made gentle", description: "Tutors rebuild vocabulary for students moving from Bengali-medium schooling." },
    { title: "No long journeys", description: "Lessons happen at home, so evenings stay for studying." },
    { title: "Visible progress", description: "A short written note after each lesson keeps parents informed." },
    { title: "Plans around Bengal's calendar", description: "Puja, Poush Mela and monsoon weeks are built into the timetable." },
    { title: "Clear limits", description: "We coach and explain; we do not write assessed work or promise grades." },
  ],

  tutorsIntro:
    "IB Gram tutors teach from different cities in India and work in Indian Standard Time, the same clock as Suri. Every tutor has taught the syllabus they offer, and we select by course and level.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Suri, Birbhum?",
      answer:
        "We could not confirm one. Schools in Suri and the district follow the West Bengal boards, CBSE or ISC, and our checks of the IB and Cambridge lists found no authorised school in Birbhum. The nearest international options are in Kolkata, about 200 km away. Online lessons let a student prepare for that move or keep an international course going at home. Please verify each school's status directly.",
    },
    {
      question: "Will a tutor visit my home in Suri?",
      answer:
        "No. Tutors do not visit homes in Suri, and in-person home tuition is limited to Gurugram and parts of Delhi NCR. We offer online home tuition instead: a live private lesson at your own desk, with a tutor elsewhere in India. You keep the focus and flexibility of a home tutor and gain access to specialists who do not live in Birbhum.",
    },
    {
      question: "Can my child study IB while attending a Bengali-medium school in Suri?",
      answer:
        "Not as an official IB student, because IB is delivered by authorised schools, but a child can prepare for a future move. Online tutoring can build English writing, scientific vocabulary and problem-solving style over several months. Many families begin in Class 7 or 8 to ease an entry into an international school in Kolkata at Class 9 or 11.",
    },
    {
      question: "How much does IB or IGCSE tuition cost for a student in Suri?",
      answer:
        "Rates are quoted individually, not from a public list. They depend on the programme and level, the subject, lesson length, weekly frequency and tutor experience. Lessons are online, so there is no travel charge. You receive a written rate before the free trial and can change, pause or stop lessons later without penalty, so you always know what you are agreeing to.",
    },
    {
      question: "Do tutors help with the IB Internal Assessment and Extended Essay?",
      answer:
        "They guide, but never write. A tutor can help a student choose a question, plan method, discuss data handling and give feedback on structure. Every sentence of the IA or Extended Essay must be the student's own. IB Gram does not write assessed work, and any request to do so would end the arrangement.",
    },
    {
      question: "Can a tutor explain difficult ideas in Bengali?",
      answer:
        "Sometimes, where the tutor speaks it, but IB and IGCSE papers are written in English, so most teaching is in English. Some tutors can clarify a tough concept in Hindi first. We help students build an English vocabulary for each topic so exam answers come out clearly. Bengali itself is available as IB Bengali A and as an IGCSE second language subject.",
    },
    {
      question: "Which exam sessions apply and when should preparation start?",
      answer:
        "IB Diploma exams are held in May and November. Cambridge IGCSE runs in February and March, May and June, and October and November, and Edexcel has January, May and June, and November series. Begin content revision at least six months before the exam, and move to timed papers in the last eight weeks. The school or centre confirms dates for your child.",
    },
    {
      question: "Will loadshedding or rain in Birbhum affect online lessons?",
      answer:
        "Occasionally. Summer afternoons and monsoon storms can interrupt power and mobile signal. Keep a charged laptop and a phone hotspot ready, and let the tutor know early if a storm is forecast. Missed lessons are rebooked within the week, and the tutor can share worked notes afterwards. Evening slots usually avoid the worst of the summer supply problems.",
    },
    {
      question: "What is the difference between IGCSE Core and Extended?",
      answer:
        "Core covers the essential topics and caps the grade, while Extended adds further content and allows the full range up to A*. Students aiming for IB Mathematics, A Level sciences or engineering routes should normally choose Extended. A diagnostic lesson helps us recommend the tier that suits the current level and the goal.",
    },
    {
      question: "Can my child take IB Bengali or a Bengali IGCSE subject?",
      answer:
        "Yes, where the school offers it. IB Bengali A is a first-language literature course and IGCSE Bengali as a Second Language is a language subject. Both let students use a home-language strength. Availability depends on the school and exam centre, so ask early, and we can advise on preparation once you know the syllabus.",
    },
    {
      question: "Can lessons continue if we move from Suri to Kolkata?",
      answer:
        "Yes. The tutor, the lesson slot and the notes remain the same after a move, because lessons follow the student. If the new school uses a different board, the tutor adapts the plan within a session or two. You can also ask for a fresh match whenever the fit changes.",
    },
    {
      question: "Do you teach both Mathematics AA and AI?",
      answer:
        "Yes, at HL and SL. Analysis and Approaches suits students heading to engineering, physics or pure mathematics, while Applications and Interpretation suits those heading to social sciences, business or design. Ask the school which it offers. A trial lesson on a typical problem shows which style your child enjoys more.",
    },
    {
      question: "Is my child too far behind to start IGCSE Physics in Class 10?",
      answer:
        "Usually not. We begin by finding where understanding broke, often in motion, energy or circuits, and rebuild from there with short problem sets. Two or three lessons a week for a few weeks steadies most students, after which one weekly lesson keeps pace. Starting early in the year makes the workload feel lighter.",
    },
    {
      question: "How do I begin, and is the first lesson free?",
      answer:
        "The first lesson is free. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the class, board and subject. We reply with a tutor profile and a written rate, then arrange a trial at a time that suits your household. If the tutor is not the right fit, we will match another.",
    },
    {
      question: "Is IB Gram connected to any board or school?",
      answer:
        "No. IB Gram is an independent tutoring service and is not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel or any school named on this page. School names appear only to show where students from Birbhum sometimes go. Always confirm admissions, fees and curriculum with the school itself.",
    },
    {
      question: "Can students in Bolpur, Sainthia or Rampurhat use the same service?",
      answer:
        "Yes. Because lessons are online, the same tutors teach students anywhere in Birbhum. What changes is the practical detail: school timings, travel and power. Tell us your town in the first message, and we plan the timetable around the local pattern. Everyone begins with the same free trial lesson.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Our national page for students in every state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB support from PYP to Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE by subject." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "How DP tutoring handles six subjects and the core." },
    { label: "IB Primary Years Programme tuition", href: "/programmes/pyp/", description: "Early-years and primary support for PYP children." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "AA and AI courses explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles and syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "IB and IGCSE tutors in Kolkata", href: "/kolkata/", description: "The main West Bengal city for international schools." },
    { label: "IB and IGCSE tutors in Asansol", href: "/asansol/", description: "A neighbouring industrial city in the same state." },
    { label: "IB and IGCSE tutors in Siliguri", href: "/siliguri/", description: "North Bengal's largest city, with a similar school picture." },
  ],

  closingHeading: "Book a free lesson from your own desk in Suri",
  closingBody:
    "Share your child's class, board and the subject that feels hardest. We will propose a matched tutor, quote the rate in writing and set up a trial at a time that fits your evenings. Reach us on WhatsApp at +91 7439 368 115 or at support@ibgram.com, and skip the train to Kolkata.",
};
