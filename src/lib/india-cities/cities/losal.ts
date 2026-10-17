import type { CitySeoPage } from "../types";

/**
 * /losal/ - IB and IGCSE tutoring page for Losal, a municipal town in Sikar district, Shekhawati region, Rajasthan,
 * about 100 km from Jaipur. Online-only: tutors do not visit homes in Losal, since in-person home tuition runs only
 * in Gurugram and parts of Delhi NCR. No IB or Cambridge/Edexcel school in Losal could be confirmed.
 */
export const losal: CitySeoPage = {
  slug: "losal",
  countryName: "Losal",
  countryNameLong: "Losal, Sikar district, Rajasthan",
  demonym: "Losal",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening-heavy timetable that leaves room for Shekhawati's cold January mornings, the Gangaur and Teej weeks and wedding season",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.4000, longitude: 74.9200 },
  wikipedia: "https://en.wikipedia.org/wiki/Losal",
  alternateNames: ["Losal Sikar", "Losal Rajasthan", "Losal Shekhawati"],
  stripSchools: [],

  title: "Losal IB & IGCSE Tutors | Private Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Losal in Sikar district: private one-to-one online home tuition for DP, MYP and IGCSE subjects, plus a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Losal",
  heroEyebrow: "LOSAL, SHEKHAWATI: ONLINE IB AND IGCSE HOME TUITION",
  heroSubtitle:
    "Families in Losal who want IB or IGCSE private tuition at home rarely find a specialist within a hundred kilometres. IB Gram closes that gap with a live, one-to-one video lesson from a tutor who has already taught your child's exact course, delivered to your own living room or study. No one will come to a Losal doorstep, since home visits happen only in Gurugram and parts of Delhi NCR, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Losal",
  imageAltText: "A Losal student in Sikar district reviewing IB Economics notes with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Losal",
    "IGCSE tutor Losal",
    "IB home tuition Losal",
    "IGCSE home tuition Losal",
    "IB private tuition Losal",
    "IB Maths tutor Losal",
    "IGCSE Maths tutor Losal",
    "IB Physics tutor Losal",
    "IB Chemistry tutor Losal",
    "IB Biology tutor Losal",
    "IB DP tutor Losal",
    "IB MYP tutor Losal",
    "IB PYP tutor Losal",
    "IGCSE online tuition Losal",
    "IB tutor Sikar",
    "IGCSE tutor Shekhawati",
    "online IB tutor Jaipur",
    "IB and IGCSE tutors in Losal",
  ],

  heroTrustPoints: [
    "You are introduced to tutors who have taught your child's exact IB course or IGCSE code",
    "Only online: tutors do not come to Losal, because doorstep tuition runs in Gurugram and parts of Delhi NCR alone",
    "Free first lesson, rates stated in writing",
    "Short written updates after every class",
  ],
  heroStats: [
    { value: "Nursery to Class 12", label: "PYP, MYP and DP support" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Tutor and student share a clock" },
    { value: "Free trial", label: "See a real class first" },
  ],

  intro: {
    heading: "International-syllabus tutoring for a Shekhawati town",
    paragraphs: [
      "Losal sits in Sikar district, around a hundred kilometres north-east of Jaipur, in the sandy Shekhawati belt where business families have long sent sons and daughters to study far from home. The town itself has grown through new schools, colleges and housing, and its own history credits the Khaitan family with an early school and hospital. Sikar, the district's big city, is famous across India for JEE and NEET coaching, and that culture shapes what local families expect from a tutor.",
      "IB and IGCSE do not fit that mould, and we could not confirm any school in Losal that teaches either. The families who raise them usually have a link beyond Rajasthan: a Marwari business with branches in Kolkata, Mumbai or the Gulf, a son who studies in a metro, or a daughter planning to apply abroad. For them, a tutor is the practical way to meet the syllabus.",
      "A lesson takes place on a screen. The student shares the page, the tutor sees the working as it forms, and corrections come at the exact line where a step went wrong. Because the tutor has taught the same paper before, the explanation is fast and aimed.",
      "IB Gram has no affiliation with the IB, Cambridge, Pearson or any school. Tutors teach and coach; they do not write Internal Assessments, Extended Essays, TOK essays or other graded coursework.",
    ],
    bullets: [
      "One-to-one live video lessons with a shared board",
      "IB PYP, MYP, DP and CP, with Cambridge and Edexcel IGCSE",
      "Tutors found by syllabus, not by distance",
      "A free first class and a written plan",
      "In-person visits only in Gurugram and parts of Delhi NCR, so Losal learning stays online",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught in Losal itself. Their relevance here is as a future destination, so each programme below is described by what a Losal child needs before arriving at it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "Teachers build units around themes and questions, and the final year ends with a student-led Exhibition. There are no external exams, which means a tutor can spend time on fluent reading, short written explanations and number reasoning that goes beyond sums.",
      countryNote:
        "Parents in Losal who ask about PYP usually plan to join a relative in a metro or abroad, and want the child at ease with English discussion first.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP grades subjects against published criteria and closes with a Personal Project. Children raised on exact-answer tests find open prompts the hardest part, since there is rarely one correct response.",
      countryNote:
        "Students from Rajasthan Board or CBSE classrooms around Sikar typically need the most help with written science explanation and with reflecting on how they worked.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A student takes three Higher Level and three Standard Level subjects alongside Theory of Knowledge, the Extended Essay and CAS. The big written papers arrive in May for most Indian schools.",
      countryNote:
        "A Diploma student from Losal is generally boarding or living in another city, so a weekly online lesson often protects one weaker subject.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP pairs two or more Diploma courses with a career-related study and a reflective project. Few Indian schools offer it, and its academic courses are as rigorous as in the Diploma.",
      countryNote:
        "CP is almost never raised from Sikar district; support there would focus on the Diploma courses within the combination.",
    },
  ],

  subjectsIntro:
    "Whether a tutor suits a student depends on the precise course: Analysis and Approaches or Applications and Interpretation, HL or SL, Language and Literature or Literature. We start from that and only later look at the clock.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof-style reasoning, a natural fit for JEE-minded students, with the exploration planned early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial and geometric modelling and technology use, suited to business and social-science aims." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics to fields and quantum ideas, with drills on data questions and clearly written methods." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, equilibrium and organic reaction paths, with the data booklet used from week one." },
    { name: "IB Biology", levels: "HL / SL", description: "Molecular and cell biology to ecology, with command terms practised as instructions." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-based reasoning tied to current events; a good match for business-minded Shekhawati families." },
    { name: "IB Business Management", levels: "HL / SL", description: "Cases answered with the firm named, plus an internal project on a real organisation, often a family one." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis, comparison of works and a spoken commentary." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and systems, with a working software project for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies recalled accurately and evaluated within an argued answer." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data handling and a defensible fieldwork design." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and extended essay writing." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Unseen reading, formal writing and speaking, helpful for students from Hindi or Rajasthani homes." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talking through knowledge questions and the exhibition; the essay itself stays the student's." },
  ],

  igcseSubjectsIntro:
    "The first choice is Core or Extended. After that, preparation counts back from the entry series, which is February-March, May-June or October-November for Cambridge, and January, May-June or October for Edexcel.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with working shown to protect method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and vectors, which prepare a student for IB Analysis and Approaches." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits, waves and atomic physics, plus the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "The mole, reactivity, electrolysis and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, organ systems and ecology with well-planned long answers." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, firms and government, with neat annotated diagrams." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Marketing, operations and finance applied to the case provided." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, trial balances and statements, a natural subject for trading families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Data, networks and algorithms with pseudocode." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, grammar and directed writing for students whose home language is Hindi or Rajasthani." },
  ],

  regionsTitle: "Losal and the Shekhawati towns our online tutoring reaches",
  regionsIntro:
    "These places set the context for a video lesson: where Losal families send children to school, which towns they visit for services, and how far they are from the big cities.",
  regions: [
    { name: "Losal town", note: "A growing municipal town with newer schools, colleges and housing, and many business families with links beyond Rajasthan." },
    { name: "Sikar", note: "The district headquarters and a national coaching centre for JEE and NEET, with a heavy student population." },
    { name: "Fatehpur Shekhawati", note: "A historic town with painted havelis and a tradition of trading families that spread across India." },
    { name: "Nawalgarh", note: "A Shekhawati town of havelis and well-known schools, popular with day visitors from the whole region." },
    { name: "Laxmangarh", note: "A fort-dominated town near Sikar with its own schools and a trading population." },
    { name: "Ramgarh Shekhawati", note: "A haveli town, another source of long-standing business families." },
    { name: "Sujangarh", note: "A town in Churu district with Marwari trading roots, reachable from Losal by road." },
    { name: "Ratangarh", note: "A railway junction town on the route toward Bikaner, used by many Shekhawati families." },
    { name: "Chomu", note: "A town on the Jaipur road, often a halfway point for families going to the capital." },
    { name: "Jaipur", note: "About 100 km away, the state capital where families look for higher education, hospitals and services." },
  ],

  schoolDisclaimer:
    "Schools are named only to explain what is on offer and where students go. IB Gram is independent and has no partnership, referral or endorsement arrangement with any school, the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Losal and Sikar district",
      note: "We could not confirm any school in Losal or Sikar district that teaches the IB or a Cambridge or Edexcel IGCSE. Schools there follow CBSE or the Rajasthan Board, and Sikar's fame is for coaching rather than international curricula.",
      schools: [],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Many Shekhawati families have relatives or businesses in Delhi NCR, where IB day schools are plentiful. Confirm admissions, fees and programmes directly with each school.",
      schools: ["Pathways World School", "The Shri Ram School, Moulsari"],
    },
    {
      city: "Nearby: Mussoorie (boarding)",
      note: "A hill-station boarding option in Uttarakhand that offers the IB Diploma. It is a large step, usually researched years ahead.",
      schools: ["Woodstock School"],
    },
  ],

  modesIntro:
    "All three formats are live one-to-one video lessons with a tutor in India; they differ in rhythm only. A visit to a Losal house is not available, since in-person tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly lessons on a fixed slot",
      description:
        "One or two sessions every week with the same tutor, moving through the course in order and revisiting trouble spots.",
      bullets: [
        "Same tutor all term",
        "Past-paper questions in each class",
        "Notes after every lesson",
        "Gaps for Gangaur and Teej are simple to plan",
      ],
    },
    {
      title: "Pre-exam sprint",
      description:
        "Closer-spaced lessons in the weeks before a mock or a series, aimed at the topics where marks still leak.",
      bullets: [
        "Timed questions marked on the spot",
        "Plan agreed first",
        "Good for private candidates",
        "Ends when the exam ends",
      ],
    },
    {
      title: "Online home tuition",
      description:
        "Parents often search for home tuition. In Losal that means private lessons taught to a student at home through a screen. A tutor does not come to the house; visits are limited to Gurugram and parts of Delhi NCR.",
      bullets: [
        "Laptop and a quiet room",
        "Parent can attend the trial",
        "Replacement tutor if the fit is wrong",
        "Quote in writing first",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Losal, and who enquires?",
      paragraphs: [
        "Not one we could confirm. Losal's schools follow the Rajasthan Board or CBSE, and Sikar, the nearest large centre, is known for JEE and NEET coaching rather than international syllabuses. A family who wants IB or IGCSE must look to a metro, a boarding school or a private route.",
        "The people who ask are a recognisable few. Business families with offices in Kolkata, Mumbai, Chennai or the Gulf who see an international qualification as portable. Doctors and teachers whose children plan to apply to universities abroad. Parents who have moved from Losal to a city and now find the child in an IB classroom.",
        "In all these cases, tutoring is a bridge. A Class 9 student can begin IGCSE-style Maths and Science a year before a planned move. A student already in an IB school elsewhere, visiting grandparents in Losal for a long stretch, can keep a weekly class without breaking continuity.",
        "No local ecosystem exists to compare, so tutors are chosen nationally by syllabus experience and trial-lesson quality. A Losal student therefore gets the same quality of teaching as a family in a metro.",
        "School offerings change, so confirm any programme directly with the school.",
      ],
      table: {
        caption: "Why Shekhawati families look at IB or IGCSE",
        columns: ["Situation", "Timing", "What a tutor does"],
        rows: [
          ["Business relocation to a metro or abroad", "Before the move", "Bridges the Rajasthan or CBSE syllabus to IB"],
          ["Boarding for the Diploma", "Class 9 to 10", "Strengthens Maths and Science early"],
          ["Study abroad plans", "From Class 9", "Builds predicted-grade strength"],
          ["Private IGCSE entry", "Full course", "Teaches the whole specification"],
        ],
      },
    },
    {
      heading: "How does Sikar-style coaching differ from IB and IGCSE preparation?",
      paragraphs: [
        "Sikar trains students for entrance tests that reward speed on multiple-choice problems. IB and IGCSE reward something else: explaining a method in words, applying a concept to an unfamiliar case, and sustaining an argument over a page. A student sharp at JEE problems can feel slow when asked to evaluate a policy or write up an investigation.",
        "Rajasthan Board and CBSE papers sit between the two, with a mix of short and long answers, mostly tied to textbook chapters. IB and IGCSE questions seldom repeat; they are built from fresh data every year.",
        "Reporting varies too. Boards give percentages, IGCSE gives A* to G, and the Diploma gives points out of 45. Indian and overseas universities each read these in their own way.",
        "A tutor's first task is to show how a question is built and what a full-mark answer looks like, so that effort lands where marks are.",
      ],
      table: {
        caption: "Rajasthan Board, CBSE, IGCSE and IB Diploma compared",
        columns: ["Point", "Rajasthan Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Stage", "Class 9-12", "Class 9-10", "Class 11-12"],
          ["Result format", "Percentage", "Grades A* to G", "Points out of 45"],
          ["Question style", "Chapter-based", "Structured and applied", "Applied, with essay and investigation"],
          ["Near Losal", "Widely available", "Not confirmed", "Not confirmed"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Losal family?",
      paragraphs: [
        "A fixed price without context would mislead, so none appears on this page. Once we know the course, the level and the weekly plan, a written quote arrives before you commit.",
        "Level and subject carry the most weight. HL Chemistry asks more of a tutor than a Class 6 MYP lesson. Weekly frequency and length of session add to the total.",
        "Experience is the third factor. A tutor who has taught the specification for several years and understands how examiners award marks costs more than a new graduate, which is usually justified for a final paper.",
        "Compared with moving a child to a Sikar hostel or a Jaipur flat to access coaching, online lessons cost nothing in rent or fares. The quoted rate is the whole bill, and a free trial lets you judge value first.",
      ],
      bullets: [
        "Programme, level and subject",
        "Tutor's experience with the specification",
        "Sessions per week and their length",
        "No hostel, rent or travel cost",
      ],
    },
    {
      heading: "Is an online tutor better than Sikar coaching or self-study for IB?",
      paragraphs: [
        "For IB and IGCSE, mostly yes, because Sikar's centres are designed for different exams. Large batches, rank lists and test series are built for JEE and NEET, and none covers IB command terms or Cambridge mark schemes.",
        "Self-study is cheap, but marking your own script is unreliable. Students are generous with themselves, and the same slip repeats across papers.",
        "A local general tutor is convenient, yet few have taught these syllabuses. Online adds a specialist at the cost of a connection.",
        "That connection is the trade-off. Sandy summers and storms can interrupt power in the Shekhawati belt, so a charged laptop and hotspot are sensible.",
      ],
      table: {
        caption: "Study routes from Losal",
        columns: ["Route", "Helps with", "Watch out for"],
        rows: [
          ["Online one-to-one tutor", "Syllabus-specific feedback", "Connection quality"],
          ["Sikar coaching centre", "Peers and routine", "Aimed at JEE and NEET, not IB"],
          ["Local general tutor", "Convenience", "Seldom IB or Cambridge trained"],
          ["Self-study", "Low cost", "No expert marking"],
        ],
      },
    },
    {
      heading: "When are the exams, and how does the Shekhawati year affect study?",
      paragraphs: [
        "IB Diploma papers fall mainly in May, with some schools sitting in November. Cambridge IGCSE has February-March, May-June and October-November series, and Edexcel has January, May-June and October. A private candidate registers through an approved centre, probably in Jaipur or Delhi.",
        "Climate matters. Shekhawati has hot summers with afternoon temperatures above forty degrees, and winters cold enough for frost on January mornings. Study blocks therefore shift to evenings in summer and to late mornings in winter.",
        "The calendar is crowded with family occasions. Gangaur, Teej, Holi and Diwali take days, and the winter wedding season takes more, especially for business families with large networks. A mock set for the week after a major wedding date is a classic trap.",
        "We suggest starting heavy revision ten weeks before each paper and keeping the last fortnight for timed practice.",
      ],
      table: {
        caption: "Exam months and the Losal year",
        columns: ["Months", "Exam events", "Local factor"],
        rows: [
          ["January-February", "Edexcel January papers, mocks", "Cold mornings, late-morning slots"],
          ["March-April", "Cambridge results, IB preparation", "Gangaur, Holi, rising heat"],
          ["May-June", "IB May exams, Cambridge May-June", "Extreme heat, evening lessons"],
          ["July-September", "IB results, new session", "Teej and monsoon showers"],
          ["October-November", "Autumn series, IB November", "Diwali breaks and wedding season starts"],
        ],
      },
    },
    {
      heading: "Where can a Losal IB or IGCSE student study next?",
      paragraphs: [
        "In Rajasthan the nearest options include Jaipur's universities and engineering colleges, BITS Pilani in the Shekhawati belt itself, the Malaviya National Institute of Technology and Rajasthan University. Admission to most depends on national exams such as JEE, NEET and CUET-UG, and IB students should read each year's notice before choosing subjects.",
        "The Association of Indian Universities issues equivalence for the IB Diploma, which many institutions recognise. Each one still sets its own subject requirements and cut-offs.",
        "Overseas, IB and IGCSE are widely understood. The UK uses predicted grades, Canada and Australia publish conversion tables, and US colleges review the Diploma with test scores where required.",
        "A tutor can strengthen the subjects a course demands; admission can never be promised. Planning works best before Class 11 subject selection.",
      ],
      bullets: [
        "BITS Pilani and Jaipur institutions via entrance exams",
        "AIU equivalence for the IB Diploma",
        "CUET-UG for central universities",
        "UK, Canada, Australia and US routes",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught over video?",
      paragraphs: [
        "From the student's side, a Maths class begins with last night's stubborn question. The tutor reads the working, finds the line where it turned, and rebuilds that step with them. Two similar problems follow, and a short timed question is marked before the hour ends. The board is saved afterwards.",
        "The two Maths courses attract different students. Analysis and Approaches suits those who enjoy algebra and calculus, often future engineers, while Applications and Interpretation suits those heading to business, economics or biology, where statistics and modelling count.",
        "In Physics, Chemistry and Biology, explanation alternates with lab-skills coaching for the investigation: picking variables, handling error, graphing and drawing a conclusion. Shared data sets replace apparatus, so no lab is needed.",
        "Rather than teach everything twice, a tutor looks for the few topics that cost the most marks and spends the hours there.",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects should a Losal student pick?",
      paragraphs: [
        "Extended reaches the top grades and suits anyone who might continue a subject at IB Higher Level or A Level, while Core suits a student who wants a secure pass. Schools usually decide; a private candidate ticks the box at registration.",
        "Maths is the pivot. Extended Maths followed by Additional Maths leaves a student comfortable with calculus on the first day of an Analysis and Approaches class. A student who finds algebra hard may be better served by a clean Core result.",
        "Subjects should follow the goal. Engineering suggests Maths, Physics, Chemistry and Computer Science. Medicine suggests Biology, Chemistry and Maths. Commerce, the usual route for trading families, suggests Economics, Business Studies and Accounting.",
        "Cambridge and Pearson Edexcel are both recognised widely, and the tutor follows whichever the student is entered for.",
      ],
      table: {
        caption: "IGCSE tier and subjects by ambition",
        columns: ["Ambition", "Tier", "Subjects"],
        rows: [
          ["Engineering", "Extended", "Maths, Additional Maths, Physics, Chemistry"],
          ["Medicine", "Extended", "Biology, Chemistry, Maths"],
          ["Family business or commerce", "Extended or Core", "Economics, Business, Accounting"],
          ["A secure overall pass", "Core", "Core papers throughout"],
        ],
      },
    },
  ],

  tutorsIntro:
    "Below is a sample of the tutors a Losal family might be introduced to, spanning primary years to the Diploma and IGCSE, each selected for an exact course. They teach on video, the only format available in Losal.",

  process: [
    { title: "Tell us your situation", description: "Programme, subject, level, recent marks and when your child is free at home in Losal." },
    { title: "Look at the shortlist", description: "Tutors who have taught that precise course, each with a short profile." },
    { title: "Sit in on a free class", description: "A real topic, taught live, with no obligation." },
    { title: "Agree month one", description: "Topics, weekly slot and how news reaches you, written down." },
    { title: "Review and adjust", description: "Regular check-ins and a swap of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the exact paper", description: "The course, level and tier decide the shortlist." },
    { title: "Fits a town without local options", description: "When nothing nearby teaches these syllabuses, a national tutor pool is the practical route." },
    { title: "Judge a real lesson", description: "The free class shows how the tutor explains." },
    { title: "A firm coursework line", description: "Tutors never write IAs, Extended Essays or TOK essays." },
    { title: "Parents stay informed", description: "A short note arrives after every class." },
    { title: "No lock-in", description: "Pause, swap or stop at any time." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE tutor in Losal?", answer: "We found no verifiable specialist in town, so the sensible route is online. A Losal student is matched with a tutor who has already taught their exact IB or IGCSE course, and the two meet live on video in IST. The tutor's city is irrelevant; knowing the specification is what counts." },
    { question: "Can I get IB or IGCSE home tuition in Losal?", answer: "You can get private tuition at home, delivered over video. No tutor visits a Losal address, because in-person home tuition is limited to Gurugram and parts of Delhi NCR. The student sits in their own room with a laptop, a tutor on screen and a shared digital board." },
    { question: "How much does tuition cost in Losal?", answer: "Four things set the price: programme, level, subject and tutor experience. A Diploma HL class and a Class 7 MYP class are quoted differently. You receive the figure in writing before booking, there is no travel or hostel cost, and the first class is a free trial." },
    { question: "Which schools in Losal or Sikar teach IB or IGCSE?", answer: "We could not confirm any. Schools in Losal and Sikar follow CBSE or the Rajasthan Board. Families who want an international curriculum usually look at Delhi NCR, other metros or boarding schools, and use online tutoring to prepare for the move." },
    { question: "Can a Sikar-district student take IGCSE privately?", answer: "Yes. Candidates sit the papers at an authorised Cambridge or Pearson centre, probably in Jaipur or Delhi, while the teaching is done online. Entry deadlines fall many weeks before a series, so contact the centre early about fees and dates." },
    { question: "Is the first lesson free?", answer: "Yes, and it is a full class on a real topic rather than a demo. You see how the tutor explains and how your child responds. If the style does not suit, we suggest another tutor, and nothing is charged for the trial." },
    { question: "Will the tutor write the IA or Extended Essay?", answer: "No tutor writes graded work. They decode the criteria, help shape a research question, check a method and read drafts the student produced. The IA, Extended Essay and TOK essay must remain the candidate's own." },
    { question: "Can Rajasthani or Hindi speakers cope with English-medium lessons?", answer: "Yes. The exams are in English so the teaching is too, but a tutor can restate a hard idea in Hindi when that helps, if you mention it in the brief. Weekly practice builds spoken confidence quickly." },
    { question: "What happens if power or internet fails?", answer: "Charge the laptop and keep a hotspot ready. Summer demand and desert storms sometimes interrupt supply. A lost lesson is made up later, and the tutor still sends notes on the part that took place." },
    { question: "Can a Rajasthan Board student move to IB or IGCSE?", answer: "Yes, and it is a well-worn path. Content rarely blocks progress; wording and answer length do. Early lessons decode command words such as justify and compare, then practise real exam questions, so the first term of the new course feels familiar." },
    { question: "When should we begin?", answer: "Ideally at the start of the course: Class 9 for IGCSE and Class 11 for the Diploma. Joining later still helps, and six to eight weeks before a single paper can improve technique." },
    { question: "What times suit Losal families?", answer: "Weekday evenings and weekend mornings suit most. In summer, slots shift to cooler hours. Around Gangaur, Diwali and the wedding season, times are agreed in advance so revision is not lost." },
    { question: "How will I follow my child's progress?", answer: "After each lesson you get a few lines on what was covered, what went well and what to practise. Every few weeks there is a longer comparison with the target grade, and you may watch the trial class." },
    { question: "What if the tutor does not suit my child?", answer: "Tell us and we find another, free of charge. Pairings sometimes fail on pace or manner rather than ability. Nobody is bound to a term, so you can also pause for exams and resume." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "Not at all. IB Gram stands apart from the IB, Cambridge, Pearson and every school, and where they are named it is only to state facts. To enquire, email support@ibgram.com or message +91 7439 368 115 on WhatsApp." },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "How online IB and IGCSE help reaches towns and cities across the country." },
    { label: "IB and IGCSE home tuition in Gurugram", href: "/gurgaon/", description: "The one place a tutor does visit the home." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects plus the three core elements." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based marking and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Diploma subjects with career study." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choice." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Which of the two Maths courses fits." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and ask for a trial slot." },
  ],

  closingHeading: "Ask for a free IB or IGCSE class in Losal",
  closingBody:
    "Tell us the programme, the subject, how marks look today and which evenings are quiet at home in Losal. A tutor suggestion, a short account of their teaching and trial times will follow. Email support@ibgram.com or WhatsApp +91 7439 368 115.",
};
