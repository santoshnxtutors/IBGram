import type { CitySeoPage } from "../types";

/**
 * Ranaghat (Nadia district, West Bengal). No school in Ranaghat could be confirmed as an IB World School
 * or a Cambridge / Edexcel IGCSE centre, so stripSchools stays empty and schoolClusters point to Kolkata
 * (reused from the verified kolkata page), Kalyani-side commuting and the Siliguri / Asansol contrast.
 * Delivery is online only.
 */
export const ranaghat: CitySeoPage = {
  slug: "ranaghat",
  countryName: "Ranaghat",
  countryNameLong: "Ranaghat, West Bengal",
  demonym: "Ranaghat",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoons after school and Sunday mornings, paused around the Durga Puja fortnight and rescheduled freely during heavy monsoon days",
  lastUpdated: "2026-09-21",
  state: "West Bengal",
  stateCode: "IN-WB",
  geo: { latitude: 23.1797, longitude: 88.5697 },
  alternateNames: ["Ranaghat Nadia", "Ranaghat Junction", "RANAGHAT"],
  wikipedia: "https://en.wikipedia.org/wiki/Ranaghat",
  stripSchools: [],

  title: "IB and IGCSE Tutors in Ranaghat | Online Home Tuition",
  metaDescription:
    "Ranaghat families can book live one-to-one IB and IGCSE tutors online: DP, MYP, PYP, Cambridge and Edexcel, matched to the syllabus, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ranaghat",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR RANAGHAT, TAUGHT ONLINE",
  heroSubtitle:
    "If you are searching for home tuition in Ranaghat for an IB or IGCSE student, the honest picture is this: the tutor is not walking up your lane, but a specialist for your exact subject sits with your child on a laptop, one to one, from your own study table. Nadia district has no confirmed IB or Cambridge campus, so the tutor often carries the whole international syllabus.",
  primaryKeyword: "IB and IGCSE tutors in Ranaghat",
  imageAltText: "Ranaghat student attending a live one-to-one IB Chemistry lesson at a home study desk",
  secondaryKeywords: [
    "IB tutor Ranaghat",
    "IGCSE tutor Ranaghat",
    "IB home tuition Ranaghat",
    "IGCSE home tuition Ranaghat",
    "IB private tuition Ranaghat",
    "IB Maths tutor Ranaghat",
    "IGCSE Maths tutor Ranaghat",
    "IB Physics tutor Ranaghat",
    "IB Chemistry tutor Ranaghat",
    "IB Biology tutor Ranaghat",
    "IB DP tutor Ranaghat",
    "IB MYP tutor Ranaghat",
    "IB PYP tutor Ranaghat",
    "IGCSE online tuition Ranaghat",
    "online IB tutor Nadia",
    "IB tutor Anulia",
    "IB tutor Birnagar",
    "IGCSE tutor Shantipur",
    "IB tutor Cooper's Camp",
    "Cambridge IGCSE tutor Ranaghat",
    "Edexcel IGCSE tutor Ranaghat",
    "IB Economics tutor Ranaghat",
    "IB English tutor Ranaghat",
    "online IB tuition West Bengal",
    "IB tutor Krishnanagar",
  ],

  heroTrustPoints: [
    "Each tutor is matched on the precise course and level your child sits, not on a loose IB label",
    "Live video lessons only, because nobody travels to Ranaghat for tuition and we say so plainly",
    "A written note lands in your inbox after every session",
    "Independent of the IB, Cambridge, Pearson and every school mentioned here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Live online", label: "Lesson format in Ranaghat" },
    { value: "Free trial", label: "Before any payment" },
  ],

  intro: {
    heading: "What an IB or IGCSE education looks like from Ranaghat",
    paragraphs: [
      "Ranaghat is a railway town with a strong school-going culture, and almost every child here studies under the West Bengal boards, CBSE or CISCE. Private tuition is woven into that routine: a student may see three or four teachers a week after school. What the town does not have, as far as we could verify, is an authorised IB World School or a recognised Cambridge or Edexcel IGCSE centre. Families who want an international pathway therefore look towards Kolkata, or they follow a syllabus online.",
      "That changes what a tutor is for. In a city with an IB campus, tuition patches gaps in a lesson already taught that day. Here it frequently has to be the lesson itself: introducing the topic, pacing the year, setting past papers and marking them against the published scheme. IB Gram tutors are trained to do exactly that, and they work in Indian Standard Time, so a session fits between school hours and evening meals.",
      "A word on the phrase home tuition. Our tutors do not visit homes in Ranaghat or anywhere in Nadia; in-person visits run only in Gurugram and parts of Delhi NCR. What we offer is online home tuition, meaning a live private lesson your child takes from home. You get the comfort of your own room and none of the two-hour local train to Sealdah.",
      "IB Gram is an independent tutoring service. We have no connection with the International Baccalaureate, Cambridge, Pearson, or any school named on this page. Tutors coach and explain; they never write Internal Assessments, Extended Essays, TOK essays or coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Whole-syllabus teaching when no local IB or IGCSE school backs the student up",
      "Free first lesson, then a rate quoted in writing before you commit",
      "Written feedback after each session and a tutor swap if the fit is wrong",
      "No home visits in Ranaghat, only live online lessons",
    ],
  },

  programmesIntro:
    "Every IB stage is open to a Ranaghat family through online lessons. The difference from a school-based student lies in who holds the pieces together, and the notes below describe what that means at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children explore themes through units of inquiry rather than separate subject periods, and the last year closes with a self-chosen Exhibition. Nothing is externally examined, so the aim is curiosity plus secure reading and number sense.",
      countryNote:
        "A Ranaghat child following PYP-style material is usually doing so through a distance or relocation arrangement. A tutor keeps reading, writing in English and number work steady, in short sessions that suit small attention spans.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Assessment follows four criteria per subject, graded on a 1-8 scale, with interdisciplinary units and a Personal Project in the final year. Marks reward reasoning and communication as much as recall.",
      countryNote:
        "Students switching from a Bengali-medium or CBSE school often need the criteria explained in plain terms first, then practice writing to them. Tutors help with planning the Personal Project timeline without doing any of the work.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, together with Theory of Knowledge, the Extended Essay and CAS. Final papers are sat in the May or November session, with internal assessments moderated by the IB.",
      countryNote:
        "With no DP school in Nadia, a Ranaghat candidate either enrols at a school elsewhere or sits as a private candidate. Either way, a subject specialist online becomes the steady weekly teacher for Mathematics, the sciences and languages.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three DP courses are combined with a career-related study, a reflective project, language development and personal and professional skills. It suits students headed toward applied study or work.",
      countryNote:
        "CP is rare in eastern India, so demand from Ranaghat is small. Tutors support the DP course component and the language element, and we tell families honestly when another route fits their child better.",
    },
  ],

  subjectsIntro:
    "These are the IB Diploma subjects Ranaghat students ask for most often. Levels and syllabus versions are confirmed with the student's own school or registration before the first lesson.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions, proof and statistics for students who enjoy algebraic manipulation and plan to study engineering, sciences or economics." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Modelling with technology, data handling and probability, suited to students heading for social sciences, business or design." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through to fields and quantum topics, with regular practice on data-booklet questions and the practical investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, energetics, kinetics and organic reactions, with a strong emphasis on written explanation and calculation layout." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology, genetics, ecology and physiology, where clear command-term answers earn more marks than memorised paragraphs." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and global themes, with diagram accuracy and real-world examples practised for paper one and two." },
    { name: "Business Management", levels: "SL and HL", description: "Organisations, marketing, finance and operations, using case-study reading skills for the externally set paper." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis, comparative essays and the individual oral, useful for students moving from a Bengali or Hindi-medium background." },
    { name: "English A: Literature", levels: "SL and HL", description: "Close reading of poems, plays and novels, plus structuring a thesis-led essay under timed conditions." },
    { name: "Hindi B", levels: "SL and HL", description: "Second-language practice with emphasis on written tasks, comprehension and the interactive oral." },
    { name: "Bengali A: Language and Literature", levels: "SL and HL", description: "Analysis of Bengali prose and poetry for students who want to take their mother tongue as a Group 1 subject." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures and programming logic, with support for the internal investigation approach." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods, biological, cognitive and sociocultural approaches, and evaluation style essays." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion partner sessions on knowledge questions and exhibition thinking; the essay itself remains the student's own." },
  ],
  igcseSubjectsIntro:
    "IGCSE is sat in the May or June and October or November series, and students may choose Core or Extended tiers in tiered subjects. These are the courses Ranaghat families ask about, across both the Cambridge and Pearson Edexcel specifications.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Number, algebra, geometry and statistics, with timed papers and non-calculator technique practised early." },
    { name: "Additional Mathematics", levels: "Extended route", description: "Calculus and further algebra, a bridge for students planning IB Mathematics AA or a Class 11 science stream." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, waves, electricity and thermal physics with worked practical-skill questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions, the periodic table and organic basics, plus alternative-to-practical paper strategy." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, transport, inheritance and ecosystems, with structured answers and data analysis." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "Double-award science, for students who want breadth over three separate papers." },
    { name: "Economics", levels: "Single tier", description: "Basic economic problems, markets, government policy and trade, using local examples where they help." },
    { name: "Business Studies", levels: "Single tier", description: "Business activity, marketing, operations and finance with short case studies." },
    { name: "English as a First Language", levels: "Single tier", description: "Directed writing, narrative and argument tasks, and the reading paper skills that many students underrate." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, writing, listening and speaking practice for students from Bengali-medium homes." },
    { name: "Computer Science", levels: "Single tier", description: "Theory topics and pseudocode or Python programming, practised paper by paper." },
    { name: "Hindi and Bengali as second languages", levels: "Single tier", description: "Available where the exam board and session allow; we confirm the specification code first." },
  ],

  regionsTitle: "Areas around Ranaghat we teach online",
  tutorsIntro:
    "These tutors teach from elsewhere in India and reach Ranaghat over live video. Each has taught the programme or IGCSE specification listed on their card, and the free trial lets you meet one before you decide.",
  regionsIntro:
    "Lessons are live online, so any lane with a working broadband or mobile connection is covered. These localities and neighbouring towns are where our enquiries tend to come from, with a note on school life and timing in each.",
  regions: [
    { name: "Ranaghat Station Road area", note: "The commercial core beside the junction. School buses and private-tuition batches crowd this stretch in the late afternoon, so online sessions after 6 pm avoid the rush entirely." },
    { name: "Anulia", note: "A residential belt north of the town centre with many state-board and CBSE students. Families here often want an evening slot once the coaching batches end." },
    { name: "Birnagar (Ula)", note: "A quieter heritage-town setting where parents look for English-medium reinforcement. Sessions work well on weekend mornings when the roads are calm." },
    { name: "Shantipur", note: "A well-known handloom town a short ride away. Students here usually study in Bengali medium and welcome tutors who explain English-language terminology slowly." },
    { name: "Cooper's Camp", note: "A settled neighbourhood in the Ranaghat area with a mix of government-service and business families, often the ones weighing an international curriculum for a child." },
    { name: "Fulia", note: "A handloom-weaving township near Shantipur. Study routines shift during festival weeks, so we keep plans flexible." },
    { name: "Aistala", note: "A rural-suburban stretch where broadband speed varies, so we test the video setup during the free trial before recommending any schedule." },
    { name: "Krishnanagar", note: "The district headquarters, an hour up the line. It has more schooling options, and some families there also compare IB Gram with Kolkata-based options." },
    { name: "Chakdaha", note: "A town south of Ranaghat on the same line. Commuting families to Kolkata schools appreciate that lessons need no extra travel." },
    { name: "Kalyani", note: "Home to the University of Kalyani and IISER Kolkata's neighbourhood, so academic families often ask about pathways for science students." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Kolkata",
      note: "Ranaghat has no IB or IGCSE campus we could confirm, so students who want a school-based international programme usually look towards Kolkata, roughly a two-hour rail journey away. Day travel is demanding, so boarding or relocation is the more common route.",
      schools: [
        "The Heritage School, Kolkata",
        "Calcutta International School",
        "The Cambridge School, Kolkata",
        "Oaktree International School",
        "Garden High International School",
      ],
    },
    {
      city: "Nearby: Kalyani and the Nadia corridor",
      note: "Between Ranaghat and Kolkata the main institutions are state-board, CBSE and CISCE schools plus the University of Kalyani. We could not confirm an IB or Cambridge school in this corridor, so we name none.",
      schools: ["No IB or Cambridge school confirmed in this corridor; we name none."],
    },
    {
      city: "Compare: Siliguri and Asansol",
      note: "Other West Bengal towns face the same picture, with international options concentrated in a few cities. These pages describe how families there handle the gap.",
      schools: ["See our Siliguri page", "See our Asansol page"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service with no tie to the IB, Cambridge, Pearson or any school listed. Schools are named only as nearby context and only where a published source shows an IB or Cambridge programme; always confirm current authorisation with the school directly.",

  modesIntro:
    "Ranaghat sits outside the area where our tutors travel, so every mode below happens on screen. What varies is who is in the session and how it is paced.",
  modes: [
    {
      title: "Online home tuition, one to one",
      description: "A private live lesson taken from your own room, the closest match to a home tutor without any travel. Our tutors do not visit homes in Ranaghat; home visits run only in Gurugram and parts of Delhi NCR.",
      bullets: ["One student, one subject specialist", "Screen sharing and a digital whiteboard", "Weekly slots fixed in IST"],
    },
    {
      title: "Exam-season intensives",
      description: "Short, focused blocks before the May or November IB session or the IGCSE series, built on past papers and mark schemes.",
      bullets: ["Timed paper practice with marking", "Topic gap lists shared with parents", "Booked around Puja and school breaks"],
    },
    {
      title: "Small group of siblings or friends",
      description: "Two or three students of the same course can share a lesson, which suits families in the same housing complex or cousins studying together.",
      bullets: ["Same syllabus, same level only", "Cost shared, rate quoted in writing", "Switch back to one-to-one any time"],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools serve families in Ranaghat?",
      paragraphs: [
        "None that we can confirm. Ranaghat's schools follow the West Bengal boards, CBSE or CISCE, and neither the IB's school directory nor Cambridge's centre listings gave us a Ranaghat campus we could stand behind. We would rather say so than fill a strip with names that might be wrong.",
        "The closest international schools are in Kolkata, about two hours away by train and road. A few families send a child to board there, others relocate, and many make peace with a slower route: keep the child at a local school and follow an IB or IGCSE syllabus through private online lessons, sitting exams as a private candidate where the board allows it.",
        "Who are these families? Often they include doctors and engineers posted to Nadia, parents returning from Gulf or European jobs who want a curriculum that will travel, and households with a child aiming at overseas study. Their common need is a syllabus explained by someone who has taught it, since the school around them cannot.",
        "If your child already attends a Kolkata international school and you live along the Sealdah line, online tuition removes an evening commute as well. Sessions start at a time you choose, and a student can hold a lesson the moment they walk in from the station.",
      ],
      bullets: [
        "State board, CBSE and CISCE dominate every Ranaghat school",
        "Nearest confirmed IB and Cambridge schools are in Kolkata",
        "Private candidates should check registration deadlines early",
        "Online tuition works with any school, local or in Kolkata",
      ],
    },
    {
      heading: "How do CBSE, ICSE and West Bengal boards compare with IB and IGCSE?",
      paragraphs: [
        "The boards differ in what they reward. West Bengal's Madhyamik and Higher Secondary exams lean on recall of the prescribed text, CBSE and ICSE add more application, and the IB and IGCSE reward explanation, unfamiliar data and structured argument. A Ranaghat student moving across usually finds the questions less predictable rather than harder.",
        "The change hits hardest in language and humanities. Extended writing under a command term such as evaluate or discuss is a skill in itself, and it is rarely drilled in a Bengali-medium classroom. Maths and the sciences are easier to bridge, although IB Mathematics AA expects far more written justification than a board paper.",
        "None of these routes is superior in itself. A child aiming at Indian engineering or medical entrance may be better served by CBSE with focused coaching, while a child eyeing a UK, Canadian or European university often benefits from IB or IGCSE grades. We will tell you which we think fits before you book.",
        "Switching mid-stream is possible but needs planning. Joining IGCSE at Class 9 is smoother than starting the Diploma in Class 11 from a state board, because DP subjects assume prior familiarity with international-style questions.",
      ],
      table: {
        caption: "How the main boards compare for a Ranaghat student",
        columns: ["Board", "Typical exam style", "Language of instruction", "Common next step"],
        rows: [
          ["West Bengal (WBBSE / WBCHSE)", "Recall of prescribed texts, short and long answers", "Bengali, English or Hindi medium", "State universities, JEE and NEET preparation"],
          ["CBSE", "Mix of recall and application, national syllabus", "English or Hindi", "JEE, NEET, CUET-UG"],
          ["CISCE (ICSE / ISC)", "Detailed answers, strong English emphasis", "English", "CUET-UG, Indian and overseas degrees"],
          ["IGCSE (Cambridge or Edexcel)", "Structured and data-based questions, Core or Extended", "English", "A Levels, IB Diploma, or CBSE Class 11"],
          ["IB Diploma", "Essays, papers and internal assessments across six subjects", "English", "Global universities, AIU-equivalent in India"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Ranaghat, and what drives it?",
      paragraphs: [
        "There is no fixed price list, and we publish none, because the rate depends on the tutor and the course rather than on the town. What we do promise is that you will receive a rate in writing before you book, and that the first lesson is free.",
        "Four things move the figure. Level comes first, since a Diploma Higher Level Physics specialist commands more than a Class 8 maths tutor. Rarity matters next: subjects such as Bengali A or Psychology have fewer qualified tutors than Mathematics. Then the number of weekly hours, and finally how close the exam session is, because intensive blocks before papers use more preparation time.",
        "Ranaghat parents sometimes compare us against a local tuition batch, which is naturally cheaper because one teacher is shared among many. A batch is not designed to teach the IB or IGCSE mark scheme, and online tuition cannot be compared rupee for rupee with it. The fairer comparison is with a specialist private tutor in Kolkata, without the rail fare.",
        "If cost is tight, say so in the first message. A short block of ten to twelve sessions aimed at one weak topic, or a shared lesson for two students of the same course, can be arranged so the spend matches the goal.",
      ],
      bullets: [
        "Level and subject rarity affect the rate the most",
        "Weekly hours and exam proximity change the total",
        "Rates are always confirmed in writing before booking",
        "The first trial lesson is free with no obligation",
      ],
    },
    {
      heading: "Online home tuition, coaching centres or self-study: which suits an IB student here?",
      paragraphs: [
        "For most Ranaghat students, live one-to-one online lessons are the only route that supplies an IB or IGCSE specialist at all. Coaching centres in town are built for JEE, NEET and board exams, and a self-study plan needs discipline that Class 11 students rarely sustain across two years.",
        "Self-study can work for a strong Class 10 student taking IGCSE Mathematics, using past papers and mark schemes. It struggles in the Diploma, where the internal assessments, the command terms and the Extended Essay all benefit from someone who has seen them before. Even a few hours a month with a specialist stops a wrong habit becoming permanent.",
        "The table sets out the trade-offs plainly. We did not include a local private home tutor for IB because we could not confirm any who teach the programme in Ranaghat; if you know one, ask for a demo lesson and check they have taught the actual syllabus.",
        "Many families blend the options: a local batch for board-exam subjects, and online IB or IGCSE lessons for the international courses. There is nothing wrong with that combination provided the timetable leaves the student time to sleep.",
      ],
      table: {
        caption: "Ways to study an IB or IGCSE course from Ranaghat",
        columns: ["Option", "Strength", "Limit", "Best for"],
        rows: [
          ["Online home tuition (IB Gram)", "Specialist for the exact course, flexible IST slots", "Needs steady internet and a quiet desk", "DP, MYP and IGCSE students without a local school"],
          ["Local coaching centre", "Low cost, peer group, close to home", "Built for board exams and entrances, not IB mark schemes", "CBSE or state-board subjects alongside IB study"],
          ["Private home tutor in town", "Familiar face, in-person routine", "Rarely trained in IB or IGCSE marking", "Younger students needing homework support"],
          ["Self-study with past papers", "Free and self-paced", "No feedback on mistakes, hard to keep going", "Motivated Class 10 IGCSE Maths students"],
        ],
      },
    },
    {
      heading: "How do Durga Puja, monsoon and exam sessions shape the Ranaghat study year?",
      paragraphs: [
        "The IB Diploma has May and November sessions, IGCSE runs in the May or June and October or November series, and Pearson Edexcel adds a January session in some subjects. Bengal's calendar sits awkwardly across them, because Durga Puja and Kali Puja fall right in the run-up to the November papers.",
        "Puja weeks bring travel, guests and late nights, and a student cannot count on the same hours as in August. We therefore front-load revision into July and September, keep the Puja fortnight for light work, and use late October for mock papers under exam timing.",
        "The monsoon from June to September affects a railway town in small ways: waterlogged lanes, power interruptions, and flooded road stretches on some days. Online lessons help, but we still recommend a backup mobile hotspot and rescheduling without penalty when a day genuinely fails.",
        "January brings Saraswati Puja and, for state-board students, Madhyamik and Higher Secondary preparation. Families running both a board and an international course should plan the January to March stretch carefully, giving each subject a clear block rather than alternating in the same evening.",
      ],
      table: {
        caption: "A working exam and festival calendar for a Ranaghat student",
        columns: ["Period", "What happens", "How we plan around it"],
        rows: [
          ["January to March", "Saraswati Puja, board exams for local schools, Edexcel January series", "Lighter international load, mock paper practice"],
          ["April to June", "IB May session, Cambridge and Edexcel May or June papers, summer heat", "Early morning or evening slots, final revision"],
          ["June to September", "Monsoon, new academic year, topics reopened", "Build foundations, flexible rescheduling"],
          ["October to November", "Durga Puja, Kali Puja, IB November session, October series", "Mocks before Puja, light work during it"],
          ["December", "Winter break, results planning", "Catch-up and university application support"],
        ],
      },
    },
    {
      heading: "Where do Ranaghat students go after IB or IGCSE?",
      paragraphs: [
        "The Association of Indian Universities recognises the IB Diploma as equivalent to the Class 12 pass certificate, which opens Indian undergraduate admission. Applicants should still read each university's own eligibility page, since subject requirements vary by course.",
        "For courses through CUET-UG, IB students register like anyone else and sit the domain subjects they choose. Engineering aspirants should note that JEE Main is open to IB graduates who meet the mathematics, physics and chemistry conditions, while NEET expects Biology, Physics and Chemistry with English at the level the NTA prescribes; both should be checked in the current bulletin.",
        "Locally, students often look at the University of Kalyani, IISER Kolkata in Mohanpur, Jadavpur University, Presidency University, and IIT Kharagpur for science and engineering. Kolkata also has strong private options in management, design and law, and IGCSE graduates usually move to A Levels or the IB Diploma before applying.",
        "Overseas destinations most often mentioned by Bengal families are the UK, Canada, the USA, Germany and Singapore. Grade requirements differ widely, so we suggest confirming them with the university and keeping a shortlist by Class 11.",
      ],
      bullets: [
        "IB Diploma is treated as Class 12 equivalent by the AIU",
        "CUET-UG, JEE Main and NEET have their own subject rules",
        "IGCSE is usually followed by A Levels or the IB Diploma",
        "Check every eligibility page in the current admission cycle",
      ],
    },
    {
      heading: "What do IB Mathematics AA and AI, Physics, Chemistry and Biology involve?",
      paragraphs: [
        "IB Mathematics Analysis and Approaches suits students who like algebra and expect to study mathematics, physics or engineering. It covers functions, calculus, vectors and proof, with two written papers and a mathematical exploration that is the student's own work.",
        "Applications and Interpretation is not the easy option, despite its reputation. It is heavy on technology, statistics, modelling and interpretation, and it suits students headed for economics, psychology, business or design. Choosing the wrong one in Class 11 is a costly mistake, so we help families compare before enrolment.",
        "Physics, Chemistry and Biology share a structure: core content, options, an internal investigation and three papers. Physics rewards clear unit work and problem strategy, Chemistry needs steady numerical practice alongside organic mechanisms, and Biology demands accurate terminology and the ability to write concise, evidence-based paragraphs.",
        "Ranaghat students commonly meet a wall in the experimental component, since school laboratories differ. Tutors help plan an investigation and interpret data, while the design, collection and write-up remain the student's own.",
      ],
    },
    {
      heading: "How do IGCSE Core and Extended tiers and subject choices work?",
      paragraphs: [
        "Most IGCSE subjects offer two tiers. Core papers cap the grade at C, while Extended papers reach A star, so the choice decides the ceiling. Students aiming for IB Mathematics or a science stream should take Extended.",
        "Choosing subjects needs thought. A typical package combines English, Mathematics, a science pathway, a language such as Hindi or Bengali, and two or three electives like Economics, Business Studies or Computer Science. Colleges abroad tend to look for a solid spread of Mathematics, sciences and English.",
        "Cambridge and Pearson Edexcel specifications differ in paper structure and in how they weight coursework. We check the specification code with the student before the first lesson, so revision targets the correct paper and its mark scheme.",
        "For a Ranaghat student taking IGCSE privately, the practical steps are to find an authorised exam centre, register well before the deadline, and confirm coursework or practical arrangements. We can explain the process but cannot register anyone; that belongs to the student and the centre.",
      ],
    },
  ],

  process: [
    { title: "Send your details", description: "Write to us on WhatsApp or email with the course, level, school and exam session, plus any topics that worry your child." },
    { title: "Get a matched tutor", description: "We propose a tutor who has taught that exact syllabus, along with a short profile and available weekly slots in IST." },
    { title: "Try a free lesson", description: "The first session is a working lesson on real material, so both student and parent see how the teaching feels." },
    { title: "Confirm the plan in writing", description: "If you continue, we send the rate and weekly schedule in writing before any payment is taken." },
    { title: "Review after each session", description: "A short written note follows every lesson, and a tutor change is easy if the fit is not right." },
  ],
  whyPoints: [
    { title: "Syllabus-level matching", description: "Tutors are paired by course code and level, such as IB Chemistry HL or IGCSE Extended Mathematics, not by a general label." },
    { title: "Honest about format", description: "We tell Ranaghat families plainly that lessons are online, and that in-person home visits run only in Gurugram and parts of Delhi NCR." },
    { title: "Coaching, never doing", description: "Tutors explain, question and mark practice work. They do not write IAs, Extended Essays, TOK essays or coursework." },
    { title: "IST-friendly timings", description: "Tutors are India-based, so evening and weekend lessons fit around school and travel in Nadia." },
    { title: "Written progress notes", description: "Parents receive a summary after each session listing what was covered and what to practise." },
    { title: "Easy to change", description: "If a tutor is not the right match, we replace them without awkwardness." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Ranaghat?", answer: "Yes, for online lessons, though not for in-person visits. IB Gram tutors teach live over video from elsewhere in India, matched to the student's course and level. No school in Ranaghat could be confirmed as an IB or Cambridge centre, so tutors often teach the full syllabus, not only revision. You can book a free trial lesson to see how a session runs before deciding anything." },
    { question: "Does an IB or IGCSE tutor come to my home in Ranaghat?", answer: "No. Tutors do not visit homes in Ranaghat, and in-person home visits run only in Gurugram and parts of Delhi NCR. What we offer is online home tuition: a live, private lesson your child takes at home on a laptop, usually at a fixed weekly time in Indian Standard Time, with a whiteboard and shared screen." },
    { question: "Is there an IB school in Ranaghat?", answer: "We could not confirm one. The town's schools follow the West Bengal boards, CBSE or CISCE, and neither the IB directory nor Cambridge listings pointed to a Ranaghat campus. Kolkata has the nearest confirmed IB and Cambridge schools. Always check current authorisation with the school directly, since these lists change from year to year." },
    { question: "What does IB tuition cost in Ranaghat?", answer: "The rate depends on the tutor and course rather than on the town, and we publish no price list. Level, subject rarity, weekly hours and exam proximity all move it. We quote the rate in writing before you book, and the first lesson is free, so you can judge value before paying anything at all." },
    { question: "Which IB subjects can you cover for Ranaghat students?", answer: "Most Diploma subjects are available, including Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Hindi B, Bengali A and Computer Science. PYP and MYP support is offered too. Tell us the course and level and we will confirm a tutor exists before suggesting any timetable." },
    { question: "Can you help with IGCSE for a private candidate in Nadia?", answer: "We can teach the syllabus and prepare the student, but registration is handled by an exam centre. A private candidate needs to find an authorised Cambridge or Pearson Edexcel centre, often in Kolkata, and register before the deadline. Ask the centre about coursework and practical arrangements well ahead of time." },
    { question: "Will a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach, explain and give feedback, but they never write an IA, Extended Essay, TOK essay or any coursework. Those pieces must be the student's own work, and we would not put a child's result at risk. A tutor can help with planning, structure and understanding the assessment criteria." },
    { question: "What is the difference between IB and IGCSE?", answer: "IGCSE is a two-year qualification usually taken in Classes 9 and 10, while the IB Diploma is a two-year pre-university programme in Classes 11 and 12. Many students take IGCSE first and then move to the IB Diploma or A Levels. Both use English-medium, structured exam questions unlike most state-board papers." },
    { question: "How do exam sessions fit around Durga Puja?", answer: "The IB November session and the IGCSE October or November series overlap Puja season, so we shift heavy revision into July to September and keep Puja weeks light. Mock papers are set before the festival. If a family travels, sessions can be paused or moved without penalty, provided we know in advance." },
    { question: "Is the IB Diploma accepted by Indian universities?", answer: "Yes, the Association of Indian Universities treats the IB Diploma as equivalent to Class 12. Individual universities and courses may add subject conditions, and CUET-UG, JEE Main and NEET have their own rules. Check each eligibility notice in the current cycle, and ask us if you want help reading it." },
    { question: "Can my child study IB while attending a West Bengal board school?", answer: "Yes, with a workload warning. Some students follow a state-board school timetable and take online IB or IGCSE lessons on the side, sitting exams privately. It demands careful time management, especially in January to March, when local board exams fall. We help plan the schedule so neither commitment collapses." },
    { question: "How fast is a tutor matched in Ranaghat?", answer: "Usually within a few days of receiving your course, level and availability. Common subjects such as Mathematics or Physics are quicker, while rare combinations like Bengali A or Psychology HL may take longer. We tell you honestly if we cannot find a tutor, instead of assigning someone unsuited to the syllabus." },
    { question: "What if my internet is poor at home?", answer: "A basic broadband or good 4G connection is enough for a live lesson. We test audio and video during the free trial and advise on a backup hotspot. Lessons can be recorded on request for your own revision, subject to the tutor's consent, and rescheduling is easy when the monsoon disrupts a day." },
    { question: "Do you offer a free trial?", answer: "Yes. The first lesson is free and is a real session on the student's actual material, not a sales call. It lets you see the tutor's style and lets the tutor gauge the level. If you continue, the rate and schedule are confirmed in writing beforehand, and nothing is charged before that." },
    { question: "Can two students from Ranaghat share a tutor?", answer: "Yes, if they follow the same course and level. Siblings, cousins or classmates in the same complex sometimes share a lesson, which reduces the cost per student. We recommend it only when the two are close in ability, otherwise one student is either lost or bored. You can switch to one-to-one at any time." },
    { question: "How do I start?", answer: "Message us on WhatsApp at +91 7439 368 115 or write to ibgram24@gmail.com with the student's course, level, school and exam session. We reply with a matched tutor and a free trial slot in IST. There is no fee for the enquiry, and you decide afterwards whether to continue." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "See how online IB and IGCSE tuition works for families in cities across the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person visits are offered, together with online lessons." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "How we select and match IB tutors for each programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel specifications, tiers and subject choices in one place." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core components and assessment for Class 11 and 12." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how tutoring supports both." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger children and where a tutor helps." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared, with what each paper expects." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, level and availability." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a short message and receive a matched tutor with a free trial slot." },
    { label: "IB and IGCSE tutors in Kolkata", href: "/kolkata/", description: "The nearest city with confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Siliguri", href: "/siliguri/", description: "How another West Bengal city handles the same international-curriculum gap." },
    { label: "IB and IGCSE tutors in Asansol", href: "/asansol/", description: "A look at tutoring in West Bengal's industrial belt." },
  ],

  closingHeading: "Start with one free lesson from your own desk in Ranaghat",
  closingBody:
    "Send us the course, the level and the exam session, and we will match a tutor who has taught it before. The first lesson is free, a written rate follows only if you carry on, and nobody has to travel anywhere. Message +91 7439 368 115 on WhatsApp or write to ibgram24@gmail.com.",
};
