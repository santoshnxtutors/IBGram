import type { CitySeoPage } from "../types";

/**
 * /mansa-gujarat/ - IB and IGCSE tutoring page for Mansa in Gandhinagar district, Gujarat (not Mansa,
 * Punjab, which has its own page). Online-only: tutors do not visit homes in Mansa. No IB or
 * Cambridge/Edexcel school confirmed in Mansa, so stripSchools is empty and clusters are nearby cities.
 */
export const mansaGujarat: CitySeoPage = {
  slug: "mansa-gujarat",
  countryName: "Mansa",
  countryNameLong: "Mansa, Gandhinagar district, Gujarat",
  demonym: "Mansa",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We pick slots that stay clear of Navratri garba nights, the Uttarayan kite weekend, the Diwali and New Year fortnight and the dry heat of May afternoons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.4300, longitude: 72.6600 },
  wikipedia: "https://en.wikipedia.org/wiki/Mansa,_Gujarat",
  alternateNames: ["Mansa Gandhinagar", "Mansa Gujarat", "Mansa North Gujarat"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mansa, Gujarat | Online Tuition",
  metaDescription:
    "Online IB and IGCSE tuition for Mansa, Gandhinagar district: live private lessons at home, PYP to DP and Cambridge or Edexcel IGCSE, free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mansa, Gujarat",
  heroEyebrow: "IB & IGCSE TUITION FOR MANSA, NORTH GUJARAT FAMILIES",
  heroSubtitle:
    "Families in Mansa often have a brother in Texas, a cousin in London or plans of their own to study abroad, so IB and IGCSE questions are not unusual. Private home tuition here arrives on a laptop: one specialist, one student, a live lesson at your own table. Tutors do not visit homes in Mansa; physical visits are offered only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Mansa",
  imageAltText: "Student in Mansa, Gujarat, studying IB Economics with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Mansa",
    "IGCSE tutor Mansa",
    "IB home tuition Mansa",
    "IGCSE home tuition Mansa",
    "IB private tuition Mansa",
    "IB Maths tutor Mansa",
    "IGCSE Maths tutor Mansa",
    "IB Physics tutor Mansa",
    "IB Chemistry tutor Mansa",
    "IB Biology tutor Mansa",
    "IB DP tutor Mansa",
    "IB MYP tutor Mansa",
    "IB PYP tutor Mansa",
    "IGCSE online tuition Mansa",
    "IB tutor Mansa Gujarat",
    "IB tutor Gandhinagar district",
    "IGCSE tutor Kalol",
    "online IB tutor North Gujarat",
    "Cambridge IGCSE tutor Mansa Gandhinagar",
    "IB tutor Mansa Gandhinagar",
  ],

  heroTrustPoints: [
    "Your child's actual IB subject and level, or IGCSE syllabus code, shapes the shortlist",
    "Every lesson is online; in-person home tuition is limited to Gurugram and parts of Delhi NCR",
    "Try a lesson free, and receive the fee in writing before you book",
    "IB Gram is independent of every Mansa school, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "North Gujarat", label: "Gandhinagar district, near Kalol" },
    { value: "PYP to DP", label: "The IB range in full" },
    { value: "IST", label: "One clock for both sides" },
    { value: "Free trial", label: "Sample a class first" },
  ],

  intro: {
    heading: "Why a Mansa family might look at IB or IGCSE, and how tuition works",
    paragraphs: [
      "Mansa is a town in Gandhinagar district, in the flat farming country of North Gujarat where castor, cotton, wheat and dairy keep trade moving. The state capital is not far off, Ahmedabad is within day-trip range, and the industrial estates around Kalol and Chhatral employ many local people. This is also one of the regions that has sent thousands of families to the United States, the United Kingdom and East Africa, so overseas study is a familiar idea.",
      "Schools in Mansa teach the Gujarat Board (GSEB) in Gujarati and English, with a few CBSE options, and ambitions usually point toward GUJCET, NEET, commerce or the family business. We could not confirm an IB World School or a Cambridge or Edexcel centre in Mansa itself, so this page names none. The closest international-curriculum schools are in and around Gandhinagar and Ahmedabad.",
      "That leaves a practical question: where does a Mansa student find a teacher for IB Chemistry HL or IGCSE Extended Maths? Not on the next street. We search nationally and match on the exact course, and the lesson is taught over video in Indian Standard Time, so a child can keep a school routine in Mansa and still study with a specialist.",
      "One firm point: tutors do not come to houses in Mansa. Home visits run only in Gurugram and parts of Delhi NCR, and what we offer here is private tuition at home, online. IB Gram is independent of schools and awarding bodies, and tutors coach without writing any assessed work.",
    ],
    bullets: [
      "IB tutoring for PYP, MYP, DP and CP students",
      "Cambridge and Pearson Edexcel IGCSE tutoring by code and tier",
      "Live online lessons from your own table",
      "Short written notes after each class",
    ],
  },

  programmesIntro:
    "A Mansa child usually meets these programmes after a move, a return from overseas or through a decision to prepare privately. This is what a tutor's work looks like at each of the four stages.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Think of a unit in which Class 3 children study how a market works, interview a shopkeeper, chart prices and present findings: that is PYP inquiry. The programme finishes with a group Exhibition and has no marks-based exam. Tutoring strengthens reading, number sense and the confidence to explain a result in full sentences.",
      countryNote:
        "A child from a Gujarati-medium primary class often needs a gentle bridge into spoken English before inquiry-style units feel natural.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "In the MYP each subject is graded on four criteria and each student plans a Personal Project of their own. Terms like 'evaluate' and 'justify' carry set meanings. A tutor shows a student what a top-band response looks like, then asks them to produce one on a fresh topic.",
      countryNote:
        "Pupils leaving a GSEB classroom for MYP meet rubric-based marking and extended writing for the first time.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three Higher and three Standard, run beside the Extended Essay, Theory of Knowledge and CAS. May or November papers and internal assessments give a total of up to 45 points. The tutor builds understanding and technique; the student writes every word handed in.",
      countryNote:
        "A Diploma student with a Mansa address generally attends a school in Gandhinagar, Ahmedabad or abroad, so lessons follow that school's term dates.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme combines a smaller set of Diploma courses with a career-linked study and a reflective project. It suits students who lean toward business, hospitality or technical work. Only a few Indian schools run it.",
      countryNote:
        "North Gujarat enquiries about the CP are rare and normally concern Business or Maths inside the package.",
    },
  ],

  subjectsIntro:
    "A parent in Mansa seldom wants general IB help. The need is something like Economics HL essays before a mock or Physics practicals before a deadline. Name the subject, level and exam session, and we start there.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and structured reasoning for students who may head to engineering, data science or finance." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology for those aiming at commerce, management or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, circuits and fields, with graph and uncertainty questions practised under time pressure." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics and organic routes, using the data booklet as the examiners expect." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecology, tightened into answers that match the command word." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets and policy explained through castor prices, dairy cooperatives and remittance flows, which North Gujarat students know well." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies and business tools, drawn from family firms, diamond and textile trading and agro-processing." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysing unseen passages, building comparative essays and preparing the oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming practised live, because algorithms that read well on paper often fail when run." },
    { name: "IB Psychology", levels: "HL / SL", description: "Landmark studies, their evaluation and the shape of a long answer." },
    { name: "IB Geography", levels: "HL / SL", description: "Arid-zone farming, groundwater depletion and urban growth, using Gujarat as a case." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Register, text types and spoken fluency for second-language learners." },
    { name: "IB Gujarati (school-supported language)", levels: "SL", description: "Support for students who bring Gujarati into the programme as a home language and need help with texts and written analysis." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Training in questioning how knowledge claims are justified; the essay and exhibition remain the student's work." },
  ],

  igcseSubjectsIntro:
    "No school in Mansa teaches Cambridge or Edexcel IGCSE as far as we could confirm, so requests come from private candidates and from children about to move to an IGCSE school. We fix the board, code and tier before practice begins.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended rewards quick, tidy algebra; Core rewards clear working that earns method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Brings calculus and functions forward, easing the leap to IB or A Level Maths." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation work and the alternative-to-practical paper, trained together." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Quantitative chemistry and identification tests built through past-paper questions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, human biology and plants, drilled through long-answer questions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definition, diagram and judgement, each sized to the marks it earns." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, trial balances and final accounts, a natural fit for trading families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python and pseudocode beside the theory paper." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking for pupils from Gujarati-medium schools." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case questions answered with applied, scenario-specific writing." },
  ],

  regionsTitle: "Mansa and Gandhinagar district places our online tutors already serve",
  regionsIntro:
    "Lessons are online, so the places below are context rather than delivery: where children go to school, how the highways and rail lines run, and what festivals and heat do to an evening.",
  regions: [
    { name: "Mansa town", note: "The municipal town, with a busy market, a bus stand and a school run that sets the daily clock." },
    { name: "Kalol", note: "A larger town and industrial centre nearby, with oilfield and engineering employment and more private schools." },
    { name: "Chhatral", note: "A GIDC industrial estate with factories that employ many local families." },
    { name: "Dehgam", note: "A town in Gandhinagar district, on the road toward Ahmedabad, with its own school cluster." },
    { name: "Pethapur", note: "A small town close to Gandhinagar, known for its printing blocks and commuter links to the capital." },
    { name: "Gandhinagar", note: "The state capital, with universities, GIFT City and the area's best-known international schools." },
    { name: "Vijapur", note: "A neighbouring town in Mehsana district, familiar to Mansa families through trade and relatives." },
    { name: "Mehsana", note: "A dairy and oil town to the north, a regional centre for education and commerce." },
    { name: "Ahmedabad", note: "The big city, about an hour or so away, where many families go for specialist schools and coaching." },
    { name: "Sanand", note: "An automobile and manufacturing hub south of Gandhinagar, home to a large workforce." },
  ],

  schoolDisclaimer:
    "A search for an IB or Cambridge/Edexcel school in Mansa found nothing we could confirm, so the town is left unnamed. Gandhinagar, Ahmedabad and other cities appear only as places a family might move to or send a child; there is no commercial tie. IB Gram is independent of all schools and of the IB, Cambridge and Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Mansa itself: local options are limited",
      note: "Schools in the town follow the Gujarat Board in Gujarati and English, with a few CBSE options. No IB or IGCSE campus was confirmed, so online matching is the realistic route.",
      schools: [],
    },
    {
      city: "Nearby: Gandhinagar",
      note: "The state capital, within easy reach, has more private and international-curriculum schooling. We name no specific school without direct confirmation.",
      schools: [],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Gujarat's largest city holds the biggest cluster of IB and Cambridge schools in the state, and is the usual choice for families planning a move.",
      schools: [],
    },
    {
      city: "Nearby: Mehsana and Kalol",
      note: "These regional towns offer wider CBSE and private choice than Mansa, but we did not verify an IB or IGCSE campus in either.",
      schools: [],
    },
  ],

  modesIntro:
    "For a Mansa student, delivery is always live, one-to-one and online. Families differ only in tempo, and the three patterns here cover most. No one visits the house; home visits exist only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Standing weekly class",
      description:
        "Your child sees one tutor at one fixed time every week, in a quiet corner of the house. After a few weeks the tutor knows how the child reasons and shapes the practice around that.",
      bullets: [
        "Fixed tutor and fixed hour",
        "From PYP through to the Diploma and IGCSE",
        "Past papers marked live in the call",
      ],
    },
    {
      title: "Weekly class plus written trail",
      description:
        "The same lesson, but each session ends with a few written lines and a fuller review follows every few weeks. It helps when a parent is travelling for business or working abroad.",
      bullets: [
        "A written summary after every class",
        "Regular review of the plan",
        "Extra slots are easy to add",
      ],
    },
    {
      title: "Run-up to an exam",
      description:
        "Lessons cluster in the weeks ahead of a mock or the May and November series. Timed papers return with comments in a few days, and the plan avoids garba nights and the wedding season.",
      bullets: [
        "Scripts marked against the official scheme",
        "Quick feedback turnaround",
        "Best booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Mansa families ask about IB and IGCSE?",
      paragraphs: [
        "North Gujarat has a particular relationship with the world beyond India. Many families have members in the United States, Canada, the United Kingdom or East Africa, and the pattern of leaving and returning shapes how parents think about education. In Mansa, that translates into occasional but pointed interest in international syllabuses.",
        "One group is returning families: parents who spent years abroad and come back to Gujarat with children who are midway through an IB or IGCSE course. Another is families planning an exit: a child who is expected to join a relative in the US or UK and wants an internationally recognised qualification. A third consists of ambitious students who simply want something broader than the GSEB path.",
        "None can find a local teacher of IB Physics HL or IGCSE Extended Chemistry, because no Mansa classroom teaches those papers. We therefore match across India, and the child studies with a specialist who has taught the course recently, on video, from home.",
        "The paper does not depend on the postcode. A Cambridge script from Mansa is marked against the same scheme as one from Mumbai, and IB moderators apply a single standard, so preparation is the real variable.",
      ],
    },
    {
      heading: "How does GSEB compare with IB and IGCSE?",
      paragraphs: [
        "The Gujarat Board's Class 10 and 12 papers follow a prescribed textbook and a predictable marking scheme, and routes such as GUJCET and NEET build on them. CBSE is close in spirit with slightly more application. IB and Cambridge IGCSE present unfamiliar situations and expect a student to choose the right idea and argue it in writing.",
        "For Gujarati-medium pupils, English is the biggest adjustment. A Biology answer demands exact terms in sentences that flow, and an Economics essay needs a visible line of argument. Early lessons therefore combine fresh content with generous writing practice.",
        "Coursework is the second shift. An IB Internal Assessment or an IGCSE practical component rewards independent planning and honest data. Few GSEB students have done anything similar, so the tutor's job is to question and guide while the student does the work.",
        "None of this undermines the state board, whose strengths are speed and memory. The international route tests a second set of abilities.",
      ],
      table: {
        caption: "Boards a Mansa family may compare",
        columns: ["Feature", "Gujarat Board (GSEB)", "CBSE", "IB / IGCSE"],
        rows: [
          ["Local presence", "Most schools", "A few campuses", "None confirmed in Mansa"],
          ["Final assessment", "Class 10 and 12 board papers", "Board papers plus internals", "Exams plus coursework over time"],
          ["Entrance routes", "GUJCET, NEET, JEE", "JEE, NEET, CUET", "AIU certificate, CUET or overseas"],
          ["Main medium", "Gujarati or English", "English or Hindi", "English plus language courses"],
        ],
      },
    },
    {
      heading: "What fee should a Mansa family expect for IB tuition?",
      paragraphs: [
        "We do not display prices, since the honest answer varies with the course. A tutor who can teach Physics HL or Maths HL to current IB standard is a rarer find than one for IGCSE Core subjects, and rates follow that difference.",
        "Familiarity with the syllabus comes next. A tutor who taught the course last year, or marked its papers, tends to find a student's weak spots sooner, and that often shortens the number of hours required.",
        "Weekly hours matter too. A single lesson is a modest outlay, while three in the weeks before a mock cost more, though a short intense block can end sooner than a long, thin one.",
        "You will not be asked to pay before the first class. Once your child has tried a lesson, a written figure follows, and if the tutor does not suit your child we offer another one at no extra step.",
      ],
    },
    {
      heading: "Online tutor, Ahmedabad coaching or self-study from Mansa?",
      paragraphs: [
        "Ahmedabad and Gandhinagar have thriving tuition markets, but most of them target GSEB, GUJCET and NEET preparation, not IB command terms or IGCSE practical papers. A daily trip also costs hours that a Class 11 student cannot spare.",
        "A private tutor nearby may know the subject thoroughly, yet with so few IB or Cambridge schools in North Gujarat, hardly any has taught these exact papers.",
        "Teaching over video closes the gap. The tutor might sit in Pune or Bengaluru, and the pairing depends on subject expertise, not on distance.",
        "Self-study with past papers helps only when someone marks them and explains lost marks. Otherwise the same mistake appears in three different papers.",
      ],
      table: {
        caption: "Ways to prepare for IB or IGCSE from Mansa",
        columns: ["Option", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Specialist matched to the course", "Needs reliable internet and power"],
          ["Ahmedabad or Gandhinagar classes", "In-person contact", "Aimed at board and entrance exams; long daily journeys"],
          ["Local private tutor", "Close to home", "Rarely has taught IB or IGCSE"],
          ["Self-study", "Cheap and flexible", "No expert marking"],
        ],
      },
    },
    {
      heading: "How do garba season, Uttarayan and the summer shape study time?",
      paragraphs: [
        "The Diploma exams most Indian students face fall in May, with a November session at certain schools. Cambridge IGCSE offers a May-June and an October-November series; results appear in July and January. Your child's own centre confirms the dates.",
        "Gujarat's festival calendar has its own weight. Navratri in autumn is nine nights of garba that can leave students drained for days. Uttarayan on 14 January turns a weekend into a kite-flying marathon, and Diwali doubles as the Gujarati New Year with a long family fortnight.",
        "Summer in North Gujarat is dry and fierce. April and May bring afternoons above 42 degrees, and power can wobble. Early-morning or late-evening lessons work better, and a backup battery for the router is worth having.",
        "The monsoon from late June is lighter than in Konkan or Kerala but still brings occasional outages. We count back from the exam date and leave buffer days around the big festivals.",
      ],
      table: {
        caption: "A study year for a Mansa student",
        columns: ["Period", "Local context", "Focus"],
        rows: [
          ["January to March", "Uttarayan, cool dry weather; school mocks", "Revision and weak-topic repair"],
          ["April to June", "Severe heat; May exams", "Timed papers in early or late slots"],
          ["July to September", "Monsoon showers, Janmashtami", "New content, coursework planning"],
          ["October to December", "Navratri, Diwali and New Year; November series", "Drafts, mocks and exam practice"],
        ],
      },
    },
    {
      heading: "Where can a student from Mansa go after IB or IGCSE?",
      paragraphs: [
        "Inside India, the Association of Indian Universities certifies the Diploma and Cambridge qualifications as equivalent, and CUET-UG is open to students from international boards. Nearby Gandhinagar alone houses IIT Gandhinagar, the Pandit Deendayal Energy University and the National Forensic Sciences University, each with its own admission route.",
        "Engineering and medicine come with entry rules. JEE Main and NEET list the subjects a candidate must have taken, and Gujarat's own admission bodies add rules for state seats, so Class 11 choices deserve a look at the latest bulletins first.",
        "Abroad, admissions offices in the UK, US, Canada, Australia and Europe read IB totals directly. Many North Gujarat families have relatives overseas who can advise on cities, costs and visas, which complements the academic preparation.",
        "Our contribution is teaching and exam practice. University forms, personal statements and portfolios stay in the student's hands.",
      ],
    },
    {
      heading: "How does live teaching handle IB Maths and the sciences?",
      paragraphs: [
        "Maths in the Diploma splits into two lanes. Analysis and Approaches is for the student who likes manipulating expressions, sketching functions and differentiating; Applications and Interpretation is for the one who prefers datasets, probability and spreadsheets. Both lanes run at Higher and Standard Level, and a child's likely university course usually tips the balance.",
        "On screen, the tutor and student share a whiteboard and solve together. Handwritten working is photographed and returned with notes against each line, which many students find clearer than comments in a margin.",
        "Each science has a typical drain on marks. Physics students lose them when a unit is dropped midway through a calculation, Chemistry students when the data booklet is half-remembered, Biology students when a definition is blurry. Lessons open by plugging whichever drain is biggest for your child.",
        "Internal assessments are discussed for planning and criteria only; investigation and write-up stay with the student.",
      ],
    },
    {
      heading: "Core or Extended IGCSE, and how many subjects?",
      paragraphs: [
        "For Maths and the sciences Cambridge offers a lower Core tier, where grades stop at C, and an Extended tier that goes up to A*. If your child is aiming for IB Physics or A Level Maths afterwards, the Extended tier keeps those doors open.",
        "How many subjects to attempt is the next question. Nine may overload a child who is also keeping up Gujarati, while five could narrow later choices. A sensible middle for many families is English, Maths, two sciences, one humanity and a language.",
        "Business-minded families may also consider Accounting or Business Studies, which suit children who grow up around a shop or trading firm.",
        "Pearson Edexcel uses a comparable tier system but with different papers and mark schemes, so please tell us at the outset which board your child's centre has registered with.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Send the class, board, subject and level on WhatsApp or by email; that is enough to begin." },
    { title: "Meet the proposed tutor", description: "We suggest someone who has recently taught or marked the very course you named." },
    { title: "Try a lesson free", description: "A full live class without payment, so the family can judge the fit for itself." },
    { title: "Agree hours and fee", description: "Everything is put in writing before any booking is made." },
    { title: "Settle in", description: "Weekly lessons with a note after each; a different tutor if the first is not right." },
  ],

  whyPoints: [
    { title: "Picked for your syllabus", description: "Subject, level and exam board decide who is shortlisted." },
    { title: "Upfront about delivery", description: "In Mansa every lesson is on screen; in-person visits are a Gurugram and Delhi NCR matter only." },
    { title: "Parents stay informed", description: "Short notes after each lesson mean no guessing, wherever you are working." },
    { title: "Try, then decide", description: "The free lesson shows the teaching before any commitment." },
    { title: "Firm academic limits", description: "Tutors do not author any student's IA, Extended Essay, TOK essay or coursework." },
    { title: "Easy to swap", description: "A mismatched tutor is replaced without fuss." },
  ],

  tutorsIntro:
    "Each tutor logs in from a different Indian city, on Indian time, and a Mansa student meets them over video. Experience with your course is what counts, not how far away the tutor lives.",

  faqs: [
    { question: "Are there IB and IGCSE tutors for Mansa, Gujarat?", answer: "Yes, online. Tutors teach live from other Indian cities while your child sits at home in Mansa, and we choose by subject, level and board before booking a free trial. No tutor comes to homes in Gandhinagar district, because in-person tuition exists only in Gurugram and parts of Delhi NCR." },
    { question: "Is this about Mansa in Gujarat or Mansa in Punjab?", answer: "Gujarat. This page is for Mansa in Gandhinagar district. Mansa in Punjab is a different town with its own page on this site. Lessons are online for both, so the distinction only matters for the local context, calendar and school landscape we describe." },
    { question: "Do you give home tuition in Mansa?", answer: "Private tuition at home, yes, taught over video, with your child studying one-to-one at the family desk. A tutor on the doorstep, no: that format exists only in Gurugram and parts of Delhi NCR, and we do not offer it in Mansa, Kalol or Gandhinagar." },
    { question: "Is there an IB school in Mansa?", answer: "We could not confirm one. Local schools follow the Gujarat Board plus some CBSE, while Gandhinagar and Ahmedabad hold more international options. Ask any school directly which IB or Cambridge programmes it is authorised to run before building plans on it." },
    { question: "What does IB tuition cost?", answer: "The site carries no rate card. A quote reflects the subject and level, the tutor's familiarity with that syllabus and the number of hours you choose, and advanced sciences or Maths usually cost more than IGCSE Core. You see the figure in writing once the trial lesson is over." },
    { question: "What happens in the free trial?", answer: "The trial is a full-length live lesson, free, with a tutor chosen for the subject. Notice how clearly they explain, how quickly they go and whether your child feels comfortable. You promise nothing, and a different tutor is offered if the first does not suit." },
    { question: "Can my child take IGCSE privately from Mansa?", answer: "Often, yes. Private candidates can enter via an approved exam centre, though fees, subject choice and closing dates differ a great deal. We handle preparation for the papers and practicals; booking the exam is a family task, and the closest centre is probably in Ahmedabad." },
    { question: "Will a tutor write the IA or Extended Essay?", answer: "Absolutely not, and a tutor who offered would be breaking IB rules. Ours clarify criteria, discuss topic ideas and comment on structure. The student researches, writes and submits, and the same applies to TOK essays and any other graded coursework." },
    { question: "Which IB subjects can your tutors teach?", answer: "Both Maths routes are covered, along with Physics, Chemistry, Biology, Economics, Business Management, English, Computer Science, Psychology, Geography, Hindi and TOK, at Higher and Standard Level. Anything unusual, mention in your first message and we will check whether a tutor is available before the trial." },
    { question: "Is IGCSE easier than GSEB?", answer: "IGCSE is not easier than GSEB; it simply asks different things. GSEB rewards exact recall of the set textbook, while IGCSE rewards explaining and applying ideas to new situations. Pupils who studied in Gujarati normally begin by rehearsing English phrasing and exam command words." },
    { question: "Can students from Kalol, Dehgam or Vijapur join?", answer: "Yes. A dependable connection is the only requirement, because every lesson is on video. We select tutors for subject knowledge and not for address, so a student in Dehgam or Kalol sees the same options as one in Mansa town." },
    { question: "What time are lessons held?", answer: "Lessons follow Indian Standard Time, typically early evening or weekend. We agree a standing slot and later move it around exams, wedding season, festival weeks or travel simply by messaging the tutor." },
    { question: "What if there is a power cut or heat wave?", answer: "During the hottest months, a slot before breakfast or after dinner is easier on everyone, and a phone hotspot beside a charged laptop covers brief power failures. If a whole session drops, message the tutor straight away and it can normally be moved within the week under the terms you were sent." },
    { question: "Is it too late for a GSEB student to switch to IB?", answer: "Switching is realistic. Class 6, Class 9 and Class 11 are the gentlest points to enter, because syllabuses reset there. Initial sessions work on thinking in English and on how exam questions are phrased, while the tutor judges whether Standard Level or the Core tier is kinder in year one." },
    { question: "Do you teach MYP and PYP students?", answer: "Yes to both. MYP pupils get help with criterion-marked assignments and with shaping a Personal Project; PYP pupils get help with reading, number sense and learning to ask a good question. Neither stage involves heavy examination pressure." },
    { question: "Will parents get feedback?", answer: "After every lesson you receive a few written lines: what was covered, what tripped your child up, what to practise next. A fuller progress review arrives every few weeks. Parents who work overseas say these notes are how they keep up with Mansa study life." },
    { question: "Is IB Gram linked to any school or awarding body?", answer: "We are not part of any school, nor of the IB, Cambridge or Pearson. IB Gram is a small, independent tutoring service. The towns and cities named here are only signposts, and our tutors, though experienced in teaching or examining, speak for themselves and not for any awarding body." },
    { question: "How do we begin?", answer: "Message +91 7439 368 115 on WhatsApp, or email support@ibgram.com, with the class, the exam board, the subject and the last marks you have. A tutor suggestion and a trial slot come back first; the fee is written out only afterwards, so you can decide calmly." },
  ],

  internalLinks: [
    { label: "IB Gram city pages across India", href: "/india/", description: "Our pages for towns and cities where relatives may live." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subjects and programmes, explained in plain terms." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "What we cover for Cambridge and Edexcel IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the six subjects and the core fit together." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "The practical alternative to the full Diploma." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How to pick between the Analysis and Interpretation routes." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the teachers and their subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a trial." },
    { label: "Tutors in Ahmedabad", href: "/ahmedabad/", description: "Gujarat's largest city, with the state's widest school choice." },
    { label: "Tutors in Mahesana", href: "/mahesana/", description: "The dairy and oil town to the north." },
    { label: "Tutors in Patan", href: "/patan/", description: "Another North Gujarat city page." },
  ],

  closingHeading: "A free first lesson, from Mansa",
  closingBody:
    "Closing step: WhatsApp us at +91 7439 368 115 or email support@ibgram.com with the subject, level and board. We will propose a tutor, offer a trial at an hour that suits your household, and put the fee in writing before you decide.",
};
