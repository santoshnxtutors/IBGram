import type { CitySeoPage } from "../types";

/**
 * /wani/ - IB and IGCSE tutoring page for Wani, Yavatmal district, Maharashtra. Online-only. No IB or
 * Cambridge school confirmed in Wani, so stripSchools is empty. Clusters reuse Nagpur school names
 * already verified on the Nagpur page and point honestly to Yavatmal and Wardha, which have none.
 */
export const wani: CitySeoPage = {
  slug: "wani",
  countryName: "Wani",
  countryNameLong: "Wani, Yavatmal, Maharashtra",
  demonym: "Wani",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote:
    "Timings respect the Vidarbha summer when mid-forties afternoons keep everyone indoors, the Pola and Ganesh festival weeks, Diwali and the shift patterns of mining households, all alongside the child's school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.0556, longitude: 78.9533 },
  wikipedia: "https://en.wikipedia.org/wiki/Wani,_Maharashtra",
  alternateNames: ["Wani Yavatmal", "Wani Maharashtra", "Wani city", "Black Diamond City"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Wani | Private Online Home Tuition",
  metaDescription:
    "Wani IB and IGCSE tutors, Yavatmal district: live one-to-one lessons for DP, MYP, PYP and Cambridge IGCSE, scheduled around coal-belt routines, free trial.",
  h1: "IB and IGCSE Tutors in Wani: Live Private Tuition from Home",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR WANI AND THE COAL BELT",
  heroSubtitle:
    "Private tuition at home in Wani for an IB or Cambridge IGCSE course is possible, with one condition: it is taught online. A specialist joins your child on video, one to one, in the evening hours a mining or business family actually has free.",
  primaryKeyword: "IB and IGCSE tutors in Wani",
  imageAltText:
    "A Wani student in Class 11 studying IB Chemistry notes beside a laptop during an online lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Wani",
    "IGCSE tutor Wani",
    "IB home tuition Wani",
    "IGCSE home tuition Wani",
    "IB private tuition Wani",
    "IB Maths tutor Wani",
    "IGCSE Maths tutor Wani",
    "IB Physics tutor Wani",
    "IB Chemistry tutor Wani",
    "IB Biology tutor Wani",
    "IB DP tutor Wani",
    "IB MYP tutor Wani",
    "IB PYP tutor Wani",
    "IGCSE online tuition Wani",
    "Cambridge IGCSE tutor Wani",
    "IB tutor Wani Yavatmal",
    "online IB tutor Rajur",
    "IGCSE tutor Maregaon",
    "IB tutor Wani Maharashtra",
  ],
  heroTrustPoints: [
    "Lessons in Wani are always live and online, since tutors visit homes only in Gurugram and parts of Delhi NCR",
    "Tutors are picked for your child's exact IB course and level or Cambridge paper code",
    "You take a full free lesson first and receive a written rate before any booking",
    "IB Gram stands apart from the IB, Cambridge, Pearson and all schools mentioned below",
  ],
  heroStats: [
    { value: "Online", label: "Live, one tutor per student" },
    { value: "PYP to DP", label: "IB continuum supported" },
    { value: "IST", label: "Indian time for tutor and student" },
    { value: "Free trial", label: "Judge the fit first" },
  ],

  intro: {
    heading: "Who in Wani asks for IB and IGCSE tutors, and what for",
    paragraphs: [
      "Wani is known across Maharashtra as the Black Diamond City. Coal from the Western Coalfields mines around Ukni, Pimpalgaon and the rest of the Wani North area shapes its economy, alongside cotton and soybean farming on the Yavatmal plateau. It sits roughly 110 kilometres from Yavatmal, 52 from Chandrapur and about 135 from Nagpur, and it has Marathi and Hindi as its daily languages. Its schools follow the Maharashtra state board or CBSE. We could not confirm any IB or Cambridge school in the town.",
      "So the families who write to us from Wani tend to belong to a few types. Mining and colliery officers and engineers, whose careers have already moved them between states and who want a portable curriculum for their children. Business families in the town with relatives in Nagpur, Pune or abroad, who think about international study. Parents whose child is enrolled at an IB or Cambridge school in Nagpur and comes home to Wani for holidays. And a smaller set of households who simply want IGCSE Mathematics or Sciences because they see it as a stronger foundation than what a local syllabus offers.",
      "Tutors for these courses are hard to find locally. Nobody has built a pool of IB Maths HL or IGCSE Chemistry specialists in a town with no school for them. A live video lesson means the tutor can be in Nagpur, Mumbai or Bengaluru, which matters when the choice within reach of the Nirguda river is close to zero.",
      "IB Gram is independent. We have no agreement with the International Baccalaureate Organization, Cambridge, Pearson or any school named on this page, and our tutors never write IAs, Extended Essays, TOK essays or other assessed coursework on a student's behalf.",
    ],
    bullets: [
      "Colliery and mining families whose careers take them between postings",
      "Wani business households with links to Nagpur, Pune or overseas",
      "Nagpur boarders and day students who come home on weekends and holidays",
      "Students adding IGCSE Mathematics or Sciences to a Maharashtra board or CBSE year",
      "In-person home tuition exists only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No IB programme is taught inside Wani, so each stage below is described together with how it typically reaches a Wani household, mostly through a Nagpur school, a posting or a planned relocation. IGCSE tends to be the first international course that local parents enquire about.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Children explore units of inquiry instead of moving through a textbook page by page, and they present an Exhibition at the end. Tutoring is gentle: reading aloud, number games and helping the child say what they have understood.",
      countryNote:
        "A PYP request from Wani usually comes from parents of a child at a Nagpur school, or from a family returning from abroad and settling near the collieries.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Learning is judged against published criteria in every subject, and each student completes a Personal Project. Families used to percentage marks find the approach unfamiliar, and a tutor can explain each criterion in plain steps.",
      countryNote:
        "MYP help in Wani is nearly always for a student at a Nagpur or boarding school who wants support at home during vacations.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, combine with Theory of Knowledge, an Extended Essay and CAS. Internal assessments count towards the score, and the usual exam session in India is May.",
      countryNote:
        "DP students linked to Wani study in Nagpur or at a boarding school, and our lessons follow that school's calendar, not anything local.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A few Diploma courses are taken beside a career-related qualification, a reflection project and skills modules. Few Indian schools offer it, but the academic content within it is taught as any Diploma course is.",
      countryNote:
        "We see very few CP enquiries in Wani, and when they arrive the lessons focus on the academic courses in the student's pathway.",
    },
  ],

  subjectsIntro:
    "A Class 12 student at a Nagpur campus who needs IB Maths AA HL help is not the same customer as a Class 9 student adding Cambridge Chemistry beside a Maharashtra board timetable. We therefore match on the exact course, level and exam session before looking at availability.",
  subjects: [
    {
      name: "IB Maths Analysis & Approaches",
      levels: "HL / SL",
      description:
        "Calculus, algebra and proof-style reasoning. At HL, unfamiliar Paper 3 problems reward students who have practised mixing topics, so sessions rotate between repair and stretch questions.",
    },
    {
      name: "IB Maths Applications & Interpretation",
      levels: "HL / SL",
      description:
        "Statistics, financial and growth models and heavy use of technology. Tutors train calculator habits and then train the sentence that explains what the output means.",
    },
    {
      name: "IB Physics",
      levels: "HL / SL",
      description:
        "Mechanics, thermal physics, waves and fields. Sessions combine derivations with data-booklet fluency and unit discipline.",
    },
    {
      name: "IB Chemistry",
      levels: "HL / SL",
      description:
        "Organic mechanisms, equilibrium and energetics are revisited in rotation, which is how long-term memory forms.",
    },
    {
      name: "IB Biology",
      levels: "HL / SL",
      description:
        "Cell biology, genetics and ecology with careful command-term practice and real data interpretation.",
    },
    {
      name: "IB Economics",
      levels: "HL / SL",
      description:
        "Diagrams built from memory and applied to current cases, with examples from energy, agriculture and mining supplying useful context in Wani.",
    },
    {
      name: "IB Business Management",
      levels: "HL / SL",
      description:
        "Case-study reading and application of tools to real organisations, including small-town and family enterprises.",
    },
    {
      name: "IB English A Language & Literature",
      levels: "HL / SL",
      description:
        "Unseen-text commentary and comparative essays, with repeated timed writing and feedback on structure.",
    },
    {
      name: "IB Computer Science",
      levels: "HL / SL",
      description:
        "Programming, algorithmic thinking and systems theory, tied to the way exam questions are worded.",
    },
    {
      name: "IB Psychology",
      levels: "HL / SL",
      description:
        "Study recall and evaluation arranged into essays that finish inside the time allowed.",
    },
    {
      name: "IB Environmental Systems & Societies",
      levels: "SL",
      description:
        "Systems models, resource use and energy transitions, with coal and renewable energy giving concrete case material in this region.",
    },
    {
      name: "IB Geography",
      levels: "HL / SL",
      description:
        "Case studies with real data and fieldwork method, using the Vidarbha plateau and mining landscape as relatable examples.",
    },
    {
      name: "IB Marathi and Hindi language courses",
      levels: "SL / HL",
      description:
        "Language support for students who keep Marathi or Hindi inside the Diploma, with oral practice and text types.",
    },
    {
      name: "Theory of Knowledge (TOK)",
      levels: "DP Core",
      description:
        "Discussion-led sessions to sharpen how a student argues about knowledge, for the exhibition and the essay.",
    },
  ],
  igcseSubjectsIntro:
    "No school in Wani has a Cambridge or Edexcel centre number that we could confirm, so a local IGCSE student normally studies privately and sits exams through an approved centre in a larger city, often Nagpur. Teaching follows the exact syllabus code.",
  igcseSubjects: [
    {
      name: "IGCSE Mathematics 0580",
      levels: "Core / Extended",
      description:
        "Extended students need algebra and graph fluency, and Core candidates should confirm that Core will not limit later choices.",
    },
    {
      name: "IGCSE Additional Mathematics 0606",
      levels: "Grade 10",
      description:
        "Calculus and trigonometry early on, a strong bridge to IB Maths AA or A level Mathematics.",
    },
    {
      name: "IGCSE Physics 0625",
      levels: "Core / Extended",
      description:
        "Formula handling and the alternative-to-practical paper, which private candidates often leave too late.",
    },
    {
      name: "IGCSE Chemistry 0620",
      levels: "Core / Extended",
      description:
        "Moles, reactivity, electrolysis and organic chemistry in short, repeated blocks.",
    },
    {
      name: "IGCSE Biology 0610",
      levels: "Core / Extended",
      description:
        "Genetics, cells and physiology, with written-answer practice for the long questions.",
    },
    {
      name: "IGCSE Economics 0455",
      levels: "Grade 9-10",
      description:
        "Clean diagrams and two-sided evaluation, using Indian and Maharashtra examples.",
    },
    {
      name: "IGCSE Computer Science 0478",
      levels: "Grade 9-10",
      description:
        "Python coding alongside algorithm tracing and theory revision.",
    },
    {
      name: "IGCSE English First Language 0500",
      levels: "Grade 9-10",
      description:
        "Directed writing, summary and descriptive tasks, with annotated model answers.",
    },
    {
      name: "IGCSE Marathi and Hindi as a second language",
      levels: "Grade 9-10",
      description:
        "Reading, writing and speaking preparation for students who want a home language on their certificate.",
    },
  ],

  regionsTitle: "Wani localities and coal-belt towns our online IB and IGCSE tutors reach",
  regionsIntro:
    "Every lesson is online, so the list below offers context and not directions. It describes the school mix in each area and how work patterns, such as colliery shifts or market hours, affect the hour a family can give to a lesson.",
  regions: [
    {
      name: "Wani town centre and main market",
      note: "The commercial heart, with trading and business families who often have relatives in Nagpur or Pune and are curious about international courses.",
    },
    {
      name: "WCL colony areas, Wani North",
      note: "Colliery officers and staff live here, and their shift patterns mean evening lessons work better than afternoon ones.",
    },
    {
      name: "Ukni and Pimpalgaon mining belt",
      note: "Households tied to the open-cast and underground mines, where transfers between coalfields are common and portable curricula appeal.",
    },
    {
      name: "Rajur and Maregaon",
      note: "Nearby small towns on the road toward Chandrapur and Yavatmal with Maharashtra board and CBSE schools but no international options.",
    },
    {
      name: "Zari Jamani and Pandharkawada side",
      note: "Towns to the south where secondary choices are limited and families look to Yavatmal or Nagpur for anything beyond the local boards.",
    },
    {
      name: "Ghugus and Chandrapur road",
      note: "Industrial and colliery communities to the east, where Chandrapur is the nearest larger city for shopping and coaching.",
    },
    {
      name: "Nirguda riverside neighbourhoods",
      note: "Older residential pockets where households have been in the town for generations and are comparing boards for younger children.",
    },
    {
      name: "Nagpur highway corridor",
      note: "Families who travel to Nagpur for schools, hospitals and shopping, and sometimes arrange weekly boarding there.",
    },
    {
      name: "Farms and villages around Wani",
      note: "Cotton and soybean farming families, where online tuition is usually the only route to an international syllabus.",
    },
  ],

  schoolDisclaimer:
    "The schools named below show where IB or Cambridge classrooms genuinely exist for families prepared to board or move. This is information alone. IB Gram is independent and has no contract, endorsement or tie-up with them, or with the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Wani itself",
      note: "We could not confirm an IB World School or Cambridge or Edexcel IGCSE centre in Wani. Local options are the Maharashtra state board and CBSE, so international syllabi are studied through tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Yavatmal and Wardha",
      note: "The two nearest district cities have not produced a confirmed IB or Cambridge school on our checks, so they add little for these curricula.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur",
      note: "About 135 kilometres away, Nagpur is the nearest place with confirmed international schools, used by families who send children as boarders or relocate for senior years.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Some families with business ties south consider Hyderabad for a boarding campus with IB and Cambridge options.",
      schools: ["The Gaudium School", "Oakridge International School"],
    },
  ],

  modesIntro:
    "Lessons for Wani students happen online, one to one. The difference between engagements is the plan around them: a steady weekly hour, a term plan with notes, or a block built for a Nagpur boarder's holiday or a mining family's shift pattern.",
  modes: [
    {
      title: "Weekly live lesson",
      description:
        "A single fixed hour on video each week, taught by a tutor matched on the exact course and level.",
      bullets: [
        "Tutor chosen on syllabus, not geography",
        "Works for IB, MYP and IGCSE",
        "Past papers marked live on screen",
        "Continuity with one tutor",
      ],
    },
    {
      title: "Term plan with notes",
      description:
        "Weekly lessons with a short note after each and a longer review every few weeks, suited to parents who work shifts.",
      bullets: [
        "Notes list what was covered",
        "Reviews adjust the plan",
        "PYP and MYP students cope well with it",
        "Extra slots before mocks are easy to add",
      ],
    },
    {
      title: "Holiday and boarder blocks",
      description:
        "Concentrated lessons in Diwali, winter and summer breaks, with timed papers and quick feedback for students who study away during term.",
      bullets: [
        "Follows the Nagpur school calendar",
        "Timed papers against current criteria",
        "Planned around Vidarbha summer heat",
        "Book two to three weeks before term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Wani",
      paragraphs: [
        "To answer plainly, Wani's schools teach the Maharashtra state board or CBSE, and we could not verify an IB or Cambridge school in the town. Its educational profile is that of a busy mining and trading centre on the eastern edge of Yavatmal district, with a good number of Marathi and English-medium schools and a coaching culture that leans on MHT-CET, JEE and NEET preparation.",
        "The households asking about IB and IGCSE are a subset with a specific reason. Colliery officers and engineers have moved between Maharashtra, Madhya Pradesh, Chhattisgarh and Odisha, and their children carry the memory of different boards. Some have seen an international curriculum at a previous posting and want to keep it. Others expect a move abroad and want the child ready.",
        "Families with a child at a Nagpur international school form the third group. The drive to Nagpur is long enough that weekly or term boarding is usual, and holidays at home are when they need tutoring. Finally, there are parents who prefer IGCSE Mathematics and Sciences as a stronger base.",
        "The shared problem is finding an experienced tutor. A specialist in IB Maths Applications and Interpretation or IGCSE Additional Mathematics is unlikely to live in Wani, which is why we teach online and choose the tutor by course instead of postcode.",
      ],
      bullets: [
        "Colliery and mining households on postings",
        "Wani business families with Nagpur or overseas ties",
        "Nagpur boarders home for holidays",
        "Students adding IGCSE Mathematics or Sciences beside a local board",
      ],
      table: {
        caption: "Distances from Wani to places with international schooling",
        columns: ["Place", "Approximate distance from Wani", "What we could confirm"],
        rows: [
          ["Wani", "0 km", "Maharashtra board and CBSE schools; no confirmed IB or Cambridge school"],
          ["Chandrapur", "About 52 km", "Larger city for shopping and coaching; no international school confirmed in our checks"],
          ["Nagpur", "About 135 km", "Confirmed IB and Cambridge schools including D Y Patil MIHAN and Centre Point International"],
          ["Yavatmal", "About 110 km", "District headquarters without a confirmed IB or Cambridge school"],
        ],
      },
    },
    {
      heading: "Maharashtra board, CBSE, IGCSE or IB: which route suits a Wani student?",
      paragraphs: [
        "A Wani family choosing a curriculum is usually choosing between a known route and an unknown one. The Maharashtra board leads to HSC and MHT-CET, which many local students prepare for through coaching. CBSE follows the NCERT pattern and is familiar through transfers. IGCSE and IB are different in method: more extended writing, internal assessment, a written practical paper in sciences, and mark schemes that reward reasoning.",
        "Will a student from the state board cope? Yes, with preparation. The main shift is expression. A Class 10 student who has memorised textbook answers must learn to write a structured explanation of why a reaction happens. The second is pace: IGCSE papers reward speed on short questions, and IB papers reward depth on long ones.",
        "On recognition, universities abroad read IB and Cambridge results, and the Association of Indian Universities issues equivalence for Indian admission. JEE Main, NEET and CUET eligibility for foreign boards changes, so check the current bulletin.",
        "This table compares the four routes as a Wani family would see them.",
      ],
      table: {
        caption: "Maharashtra board, CBSE, IGCSE and IB: what a Wani family should know",
        columns: ["Feature", "Maharashtra board or CBSE", "Cambridge IGCSE", "IB Diploma"],
        rows: [
          ["Offered locally", "Yes", "No centre confirmed in Wani", "No school in Wani"],
          ["Assessment", "Board exams at Class 10 and 12", "Final papers, written practical paper in sciences", "Final exams plus internal assessment and core"],
          ["Indian entrance exams", "MHT-CET, JEE Main, NEET, CUET", "Same exams after AIU equivalence", "Same exams after AIU equivalence"],
          ["Usual support", "Coaching classes", "Private subject tutoring", "Subject and assessment guidance"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Wani, and why does it vary?",
      paragraphs: [
        "IB Gram does not publish prices. You get a written quote before booking, and a free trial lesson comes first. Variation is easier to explain than to tabulate: the rate follows the course, the level, how often you meet and how near the exam is.",
        "Specialist subjects cost more to staff. IB Physics HL with a Scientific Investigation to plan needs an experienced tutor, and so does Maths AA HL near Paper 3. Lower-level or younger-student tutoring is usually easier to match.",
        "Frequency and timing also matter. Coal-belt households often prefer evening slots, and many students want the same hours, so flexible timing can affect availability. Holiday blocks for a Nagpur boarder are quoted as a block.",
        "Compared with a local private tutor or a coaching batch, one-to-one specialist tuition costs more per hour, but covers different ground. A batch teaches the board syllabus to many students. A specialist teaches your child's exact course and marks their papers.",
      ],
      bullets: [
        "Programme and level",
        "Scarcity of the subject specialist",
        "Number and length of weekly lessons",
        "Time left before a mock or exam session",
      ],
    },
    {
      heading: "Online home tuition, coaching class, private tutor or self-study: which works for IB and IGCSE in Wani?",
      paragraphs: [
        "Four options are open to a Wani family. Online home tuition puts a specialist on your laptop screen at home. Coaching classes in Wani and Chandrapur prepare students for state board, MHT-CET, JEE and NEET. Local private tutors, often school teachers, teach board subjects. Self-study with past papers suits disciplined students.",
        "We do not send tutors to homes in Wani. In-person home tuition runs only in Gurugram and parts of Delhi NCR. Here, online home tuition means a private lesson that you take at home, on a laptop, with one tutor. For IB and IGCSE that is usually a better match than local options, since the needed expertise is specialised.",
        "Match the choice to the goal. If your child needs MHT-CET preparation, a local coaching class is the natural fit. If the goal is IGCSE Extended Mathematics or IB Chemistry HL, a tutor who has taught that exact paper is worth more than convenience.",
        "Whichever you pick, check whether the person knows the current syllabus, marks against the real mark scheme, and lets you see what was covered.",
      ],
      table: {
        caption: "Study options for IB and IGCSE students in Wani",
        columns: ["Option", "What it does well", "Where it falls short", "Suited to"],
        rows: [
          ["Online one-to-one", "Exact-course specialist, written notes, flexible evenings", "Needs stable internet and a quiet corner", "Any IB or IGCSE student"],
          ["Coaching class", "Structure and peer energy for entrance exams", "Limited IB or Cambridge focus", "State board and CBSE students"],
          ["Local private tutor", "Convenient, familiar with local schools", "Seldom trained on IB or Cambridge assessment", "General revision"],
          ["Self-study", "Free and self-paced", "Gaps are hard to spot alone", "Strong, disciplined students"],
        ],
      },
    },
    {
      heading: "How do Vidarbha summers and festivals shape the IB and IGCSE calendar in Wani?",
      paragraphs: [
        "IB Diploma exams fall mainly in May, with a November session at some schools, while Cambridge IGCSE runs in the March, May and June, and October and November series depending on the syllabus. Private IGCSE candidates must book a centre early, so preparation often starts before the school year does.",
        "Wani's climate is part of planning. Summer from April to June is among the hottest in Maharashtra, with temperatures in the mid-forties partly attributed to the mining landscape. Afternoons are not for studying, and evening sessions are better. The monsoon brings relief and occasional power interruptions.",
        "Festivals add their own rhythm. Pola honours bullocks in the farming calendar, Ganesh Chaturthi and Diwali bring school breaks and family travel, and Holi and Gudi Padwa are shorter pauses. Boarders come home at these times and often want an intensive block.",
        "The table lays out a typical year for a Wani student with a Nagpur or private IGCSE plan.",
      ],
      table: {
        caption: "A typical year for a Wani IB or IGCSE student",
        columns: ["Months", "What is happening", "Tutoring focus"],
        rows: [
          ["January to March", "Cool dry weather, mocks, IGCSE March series for some syllabuses", "Timed papers and topic repair"],
          ["April to June", "Peak heat, IB May and IGCSE May-June exams", "Evening revision and exam technique"],
          ["July to September", "Monsoon, Pola and Ganesh Chaturthi, new term", "New content and Internal Assessment planning"],
          ["October to December", "Diwali break, IB November and IGCSE Oct-Nov series", "Holiday blocks and mock preparation"],
        ],
      },
    },
    {
      heading: "Where can a Wani student go after IB or IGCSE?",
      paragraphs: [
        "Families from Wani look at three directions: Indian universities, study abroad and professional exams. Nagpur has well-known institutions including medical and engineering colleges, and Pune and Mumbai are the usual next steps.",
        "For Indian admission, the Association of Indian Universities issues equivalence for the IB Diploma and some IGCSE-based profiles, and many institutions ask for it. CUET-UG, MHT-CET, JEE Main and NEET have their own rules for foreign boards, which change. Check the current bulletin before choosing subjects.",
        "Abroad, UK, US, Canadian, Australian and European universities read IB and Cambridge results directly. Families with relatives overseas sometimes already have a destination in mind.",
        "Tutors help with subject content and exam technique. Admissions paperwork, scholarships and visas are separate processes that we do not manage.",
      ],
      bullets: [
        "AIU equivalence for IB and IGCSE-based profiles",
        "CUET-UG, MHT-CET, JEE Main and NEET eligibility checked against current bulletins",
        "Nagpur, Pune and Mumbai as common Indian destinations",
        "Direct overseas applications",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: what do Wani students find hard?",
      paragraphs: [
        "Mathematics offers two routes. Analysis and Approaches suits students heading to engineering, physical science or economics with a quantitative side. Applications and Interpretation suits business, social science and biology. At HL both are demanding.",
        "Typical gaps are specific. In AA, integration methods and Paper 3 problems. In AI, modelling, calculator steps and interpretation in words. A short diagnostic in the first lesson finds them faster than a general review.",
        "In the sciences the gap is often habit. Physics needs clean working and units. Chemistry needs organised practice with moles and mechanisms. Biology needs exact vocabulary under each command term. Practical work is done at school, but tutors teach the planning, analysis and write-up.",
        "Students moving from Marathi or Hindi medium sometimes find English command terms the real obstacle, and targeted practice on those pays off quickly.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and picking subjects from Wani",
      paragraphs: [
        "Most IGCSE subjects have two tiers. Core is aimed at lower grades and Extended opens the full range, so students planning IB Diploma HL sciences or A level Mathematics nearly always take Extended. Decide early, because a switch in Class 10 is painful.",
        "Subject choice follows the pathway. A future engineer or doctor would take Mathematics and the three sciences. A commerce-minded student would pick Economics, Business Studies and perhaps Accounting. Marathi or Hindi as a second language rounds out a timetable.",
        "Private candidates need an approved centre, registration deadlines and arrangements for science practical assessment. Confirm these in Class 9 instead of Class 10.",
        "Starting in Class 8 or 9 allows two years for content and a year for revision. A Class 10 start is possible for Core subjects but tight for Extended Mathematics and sciences.",
      ],
      bullets: [
        "Extended is usual for later IB or A level sciences and Mathematics",
        "Core suits a solid pass with less pressure",
        "Additional Mathematics 0606 is good preparation for IB Maths AA",
        "Register with a centre in Class 9",
      ],
    },
  ],

  tutorsIntro:
    "Explore tutors for IB PYP, MYP and Diploma subjects and for Cambridge IGCSE, chosen for Wani families. Each match considers the syllabus, level and exam session, and every lesson is live online on Indian Standard Time.",
  process: [
    {
      title: "Send a short brief",
      description: "Programme or board, subject, level, current grade and the evening hours that suit your Wani household.",
    },
    {
      title: "Meet your proposed tutor",
      description: "We suggest one tutor, with a reason tied to the exact course and exam session.",
    },
    {
      title: "Take a free lesson",
      description: "A real topic taught live on video at no charge and with no obligation.",
    },
    {
      title: "Approve the first month",
      description: "The tutor sets out topics, rhythm and reporting for you to approve or change.",
    },
    {
      title: "Continue with check-ins",
      description: "A fixed slot, regular reviews and a change of tutor if the fit is wrong.",
    },
  ],
  whyPoints: [
    {
      title: "Specialists by course",
      description: "Tutors are chosen for a specific IB subject and level or a Cambridge code and tier.",
    },
    {
      title: "Made for towns without an IB school",
      description: "Since Wani has none, we search across India instead of waiting for a local tutor to appear.",
    },
    {
      title: "Quick written notes",
      description: "After every session you get a short summary, which is useful for shift-working parents.",
    },
    {
      title: "Coaching within IB rules",
      description: "Tutors guide and give feedback but never write IAs, Extended Essays or TOK essays.",
    },
    {
      title: "Honest about format",
      description: "Online in Wani. In-person home tuition is offered only in Gurugram and parts of Delhi NCR.",
    },
    {
      title: "Free trial and a change if needed",
      description: "Judge the teaching before you commit and ask for another tutor if it is not right.",
    },
  ],

  faqs: [
    {
      question: "Where can I find an IB tutor in Wani?",
      answer:
        "Through IB Gram, over a live video link rather than at a local address. Wani has no school we could verify as IB authorised, which means the town simply lacks people who teach the Diploma daily. Give us the subject, HL or SL, and your exam month, and we pick someone from elsewhere in India who has taught that very course, available on your evenings.",
    },
    {
      question: "Do you offer IGCSE tuition for students in Wani?",
      answer:
        "Yes, and it is done online, one student with one tutor. Cambridge and Pearson Edexcel codes are both covered, Core or Extended. A Wani candidate usually has no school centre to enter through, so the first practical step is finding an approved exam centre, often in Nagpur, and learning its deadlines. We can pace the syllabus backwards from those dates.",
    },
    {
      question: "Do tutors visit homes in Wani?",
      answer:
        "They do not. Visits to a student's house are restricted to Gurugram and parts of Delhi NCR. A Wani family still gets private tuition at home, but the tutor appears on a screen, shares a digital whiteboard and marks papers live. Set up a laptop at a desk with earphones, and the teaching feels close to sitting beside the tutor.",
    },
    {
      question: "Is there an IB or Cambridge school in Wani?",
      answer:
        "Not one that we could confirm. Schools in town run Maharashtra state board or CBSE. Nagpur, around 135 kilometres away, is the nearest place where verified international campuses sit. Since authorisations change, check the IB's own find-a-school list and each Cambridge school's listing before making any plans based on this page.",
    },
    {
      question: "What decides the tuition rate for a Wani student?",
      answer:
        "Four things: the programme and level, how rare the subject specialist is, the number of sessions each week, and how close the exam is. A written figure reaches you before anything is booked, and the free lesson precedes that decision. Published price lists would mislead, because a Class 7 IGCSE English learner and an IB Physics HL finalist need entirely different people.",
    },
    {
      question: "Can IGCSE run alongside the Maharashtra state board?",
      answer:
        "It can, and plenty of students manage it, typically with Mathematics plus a science. Time is the limit, since school, coaching and board-exam months in March already fill a day. We usually place IGCSE lessons on weekends at those peaks. Beginning in Class 8 or 9 leaves room for content and revision without panic in the final year.",
    },
    {
      question: "My child studies in Nagpur. Do you teach during holidays?",
      answer:
        "Yes, concentrated holiday teaching is very common for Nagpur students who come home to Wani. The tutor works from your child's school syllabus and term dates, so nothing conflicts with classroom teaching. Reserve a slot two to three weeks before the break begins, and ask for a brief note after each lesson to keep everyone aligned.",
    },
    {
      question: "Which IB Maths course suits a Wani student?",
      answer:
        "The answer follows the university goal. Analysis and Approaches is usual for engineering, pure science and quantitative economics. Applications and Interpretation fits business, social sciences and biology, with heavier calculator use. Universities publish preferences, so read them first. A trial lesson on each helps judge whether the teaching style matches your child before you commit to a course.",
    },
    {
      question: "Will the tutor write my child's IA or Extended Essay?",
      answer:
        "Never. A tutor may explain the marking criteria, discuss possible research questions, read a draft and suggest improvements, and help with a timeline. The words and the analysis must be the student's own. Submitting outside work is academic misconduct in the IB and can lead to a lost diploma, so requests to ghost-write are refused outright.",
    },
    {
      question: "What happens if the electricity fails mid-lesson?",
      answer:
        "We move the lesson to another slot at no cost. Storms in the monsoon and heavy summer load can both interrupt supply in a coal-belt town. A phone hotspot as a backup keeps most lessons alive, and choosing a second weekly slot gives breathing room. Warn the tutor early when you know of a scheduled outage.",
    },
    {
      question: "Can physics and chemistry really be taught online?",
      answer:
        "The marks are mostly in reasoning, calculation and written technique, and these transfer well to a screen. A tutor draws diagrams live, works through past-paper questions and times your child. The hands-on experiments happen at school or at an exam centre, so the tutor coaches planning, data analysis and write-up rather than demonstrating apparatus.",
    },
    {
      question: "Will Indian universities accept IB and IGCSE results?",
      answer:
        "Generally yes, after the Association of Indian Universities issues an equivalence certificate, which many institutions request. CUET-UG, MHT-CET, JEE Main and NEET each set their own rules for foreign-board candidates, and these are revised, so read the latest bulletin first. Overseas universities read IB and Cambridge transcripts directly, without any equivalence step.",
    },
    {
      question: "When should preparation begin before the exam?",
      answer:
        "Half a year out is the shortest sensible lead, and private IGCSE entrants should add time to register at a centre. A full year suits IB Maths HL and the sciences. Late starters can still gain from targeted work on past papers and weak topics, though nobody can truthfully promise a grade, and we avoid any such promise.",
    },
    {
      question: "Do younger children in PYP or MYP take tutoring?",
      answer:
        "They do, in a format unlike exam coaching. Primary learners work on reading stamina, number confidence and describing their thinking aloud. Middle-years students learn to read assessment criteria, plan the Personal Project and write tidy paragraphs. Sessions run shorter and feel more like conversation, and a parent receives a written note afterwards.",
    },
    {
      question: "What happens in the free trial?",
      answer:
        "One genuine lesson, without payment, on a topic taken from your child's actual syllabus. The tutor is not pitching. You decide afterwards whether to carry on, and stopping costs nothing. Should the subject be right but the teaching style wrong, ask for a second tutor and try again before any money changes hands.",
    },
    {
      question: "How do I reach IB Gram from Wani?",
      answer:
        "WhatsApp +91 7439 368 115 or write to support@ibgram.com, stating programme or board, subject, level, present grade and convenient hours. A proposed tutor and a trial slot come back to you. The contact page on this website offers the same route if you prefer a form.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "City pages for IB and IGCSE tuition nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home visits are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How tutors are matched to IB subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Syllabus codes, tiers and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and assessment explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "The nearest city with confirmed international schools." },
    { label: "IB and IGCSE tutors in Yavatmal", href: "/yavatmal/", description: "Online tuition for the district headquarters." },
    { label: "IB and IGCSE tutors in Wardha", href: "/wardha/", description: "Online tuition for students in Wardha." },
  ],
  closingHeading: "Book a free trial with an IB or IGCSE tutor in Wani",
  closingBody:
    "Send the programme or board, subject and level, your child's current grade and the evening hours that suit your Wani home. We reply with a matched tutor and a free first lesson, live on video on Indian Standard Time.",
};
