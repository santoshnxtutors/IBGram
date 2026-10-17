import type { CitySeoPage } from "../types";

/**
 * Pollachi has no IB or Cambridge/Edexcel IGCSE school that could be confirmed, so stripSchools stays
 * empty. The cluster names below are the Coimbatore schools already verified on the Coimbatore page,
 * labelled as nearby-city options. Online-only delivery; no tutor visits homes in Pollachi.
 */
export const pollachi: CitySeoPage = {
  slug: "pollachi",
  countryName: "Pollachi",
  countryNameLong: "Pollachi, Tamil Nadu",
  demonym: "Pollachi",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after school and tuition hours, with Sunday mornings kept free for longer sessions",
  lastUpdated: "2026-09-21",
  geo: { latitude: 10.6609, longitude: 77.0048 },
  wikipedia: "https://en.wikipedia.org/wiki/Pollachi",
  alternateNames: ["Pollachi town", "Pollachi, Coimbatore district"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pollachi | Private Home Tuition Online",
  metaDescription:
    "Private one-to-one IB and IGCSE tuition for Pollachi students, taught live online at home: DP, MYP, PYP and Cambridge subjects, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Pollachi",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FROM HOME IN POLLACHI",
  heroSubtitle:
    "Looking for private home tuition in Pollachi for a child on the IB or a Cambridge IGCSE syllabus? The workable answer is a specialist who teaches online, live and one to one, while your child sits at the desk at home. There is no IB or IGCSE school in town itself, so most families here are either commuting toward Coimbatore, boarding elsewhere, or preparing a move, and every one of them needs a tutor who already knows the exact course.",
  primaryKeyword: "IB and IGCSE tutors in Pollachi",
  imageAltText: "Online IB Physics tutor explaining a worked problem to a student studying at home in Pollachi",
  secondaryKeywords: [
    "IB tutor in Pollachi",
    "IGCSE tutor in Pollachi",
    "IB home tuition Pollachi",
    "IGCSE home tuition Pollachi",
    "IB private tuition Pollachi",
    "IB Maths tutor Pollachi",
    "IGCSE Maths tutor Pollachi",
    "IB Physics tutor Pollachi",
    "IB Chemistry tutor Pollachi",
    "IB Biology tutor Pollachi",
    "IB DP tutor Pollachi",
    "IB MYP tutor Pollachi",
    "IB PYP tutor Pollachi",
    "IGCSE online tuition Pollachi",
    "online IB tutor Pollachi",
    "IB tutor Mahalingapuram",
    "IGCSE tutor Kovilpalayam",
    "IB tutor Udumalpet",
    "Cambridge IGCSE tutor Pollachi",
    "IB tutor Anamalai",
  ],

  heroTrustPoints: [
    "Tutors picked for your child's exact IB or Cambridge IGCSE course and level",
    "Private lessons taken live on video from home, no travel to Coimbatore",
    "A free trial lesson before you commit to anything",
    "An independent service with no link to any school or examining body",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB programmes covered" },
    { value: "Cambridge IGCSE", label: "Boards covered" },
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "Free trial", label: "Before any booking" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring looks like when the nearest school is in Coimbatore",
    paragraphs: [
      "Pollachi is a coconut-market town at the foot of the Anamalai hills, and its schools follow the Tamil Nadu State Board, CBSE and a handful of matriculation-style institutions. IB and IGCSE tutors in Pollachi therefore work with a different kind of family from the ones in a big metro: children who travel or board to reach an international programme, students who have moved back from a job abroad, and parents who want a second qualification alongside the local board. Lessons are live, private and one to one, matched to a named programme and subject.",
      "Home tuition is the phrase most parents type, so here is the honest version. IB Gram tutors do not come to the door in Pollachi. Every session is taught online, with the student at home on a laptop, and in-person home visits run only in Gurugram and parts of Delhi NCR. What the family gets is a private teacher who has already handled the same syllabus code or IB subject guide, and who can start within days rather than after a long hunt through local notice boards.",
      "The shortlist is built from four details: the programme (PYP, MYP, DP, CP or IGCSE), the subject and level, the school or exam session, and the days the child is actually free. A boy who leaves for a Coimbatore school at seven and comes back at five needs a different slot from a girl doing IGCSE self-study at home, and the match takes that into account before a tutor is proposed.",
      "IB Gram is independent of the International Baccalaureate, Cambridge University Press and Assessment, Pearson and every school named on this page. Tutors explain, question and give feedback; they never write an Internal Assessment, Extended Essay, Theory of Knowledge essay or coursework for a student. The first lesson is a free trial, and a short written note follows each session so parents can see what was covered.",
    ],
    bullets: [
      "Live one-to-one lessons at home, taught online across Pollachi and nearby towns",
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Tutors in India teaching on Indian Standard Time",
      "Free trial, written notes after sessions, tutor change if the fit is wrong",
    ],
  },

  programmesIntro:
    "Families in Pollachi meet the IB and IGCSE from unusual angles. Some enrol a child in a school in Coimbatore, roughly forty kilometres away, others send a teenager to a residential campus in the Siruvani foothills, and a growing number keep a child at home on the state syllabus and add private preparation for a later move. Each route asks for a slightly different kind of tutoring, so the four programmes below are described with Pollachi's situation in mind.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "No marks and no external exam here: children explore units of inquiry across subjects and end with the PYP Exhibition. Tutoring at this level is light and conversational, aimed at reading fluency, number confidence and the habit of asking why.",
      countryNote:
        "A Pollachi child coming from a Tamil-medium nursery into an English-medium inquiry classroom often needs steady spoken English before any of the units make sense, so early sessions lean on reading aloud and short explanations in the child's own words.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work is judged on four criteria per subject, and the year ends with the Personal Project in MYP 5. Students who have only been marked on right or wrong answers must learn to justify, evaluate and reflect, which is a skill in its own right.",
      countryNote:
        "For a Pollachi family whose child will change into MYP mid-way, the main gap is usually written explanation in Science and Individuals and Societies, so tutors practise turning a correct answer into a criterion-level paragraph.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across three Higher and three Standard Level choices, plus TOK, the Extended Essay and the CAS strand. Written papers fall in May, with a smaller November session, and the Internal Assessments are scored inside the school.",
      countryNote:
        "Students from the Pollachi area who board for the Diploma tend to ask for Maths and one science first, because the jump from Class 10 state-board work to HL papers is steepest there and hostel evenings leave little room for catching up alone.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses sit alongside a career-related study, a reflective project and a personal and professional skills component. Support therefore centres on the Diploma subjects and on shaping the reflective project.",
      countryNote:
        "The CP is rare in Tamil Nadu, so a Pollachi student meeting it usually does so at a school far from home; tutors then keep the Diploma-subject work steady while the student handles the practical components on campus.",
    },
  ],

  subjectsIntro:
    "Pollachi students ask for the same IB subjects as anywhere else, but the timing differs: many begin tutoring a full term before joining a school, so the subject lists below are written as preparation as well as support. Level matters as much as subject, since HL and SL papers, and Analysis versus Applications in Maths, are taught differently.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra fluency first, then functions, calculus and the reasoning-heavy Paper 3 problems that catch strong students out." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical modelling, distributions and calculator technique, with the Exploration topic chosen from things the student actually cares about." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, fields and waves worked through numerically, with proper treatment of uncertainties for the practical write-up." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, kinetics and organic mechanisms, with drills on reading the data booklet quickly." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with practice writing short answers that hit each command term." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram discipline for markets and macro policy, plus real-world examples for the internally assessed commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, tool selection and the HL research project built around a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen extracts, comparison essays and rehearsal for the oral, built from the student's own voice." },
    { name: "IB English B", levels: "HL / SL", description: "For students whose first language is Tamil: listening, receptive skills and confident written texts across text types." },
    { name: "IB Tamil B", levels: "HL / SL", description: "Register and text-type control in writing, with oral rehearsal drawing on the student's own literature reading." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Vocabulary building and formal writing for students who came to Hindi late through school in Tamil Nadu." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the internal solution, built in stages so the documentation stays honest." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Ecosystem and resource questions argued from real cases such as the Anamalai forests and Aliyar catchment." },
    { name: "IB Geography", levels: "HL / SL", description: "Case evidence for extended responses and a fieldwork question narrow enough to investigate." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Pressure-testing knowledge claims and choosing objects for the exhibition, always in the student's own words." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a topic into a researchable question and keeping to the supervisor timetable; guidance only, never drafting." },
    { name: "IB MYP Sciences & Mathematics", levels: "MYP 1-5", description: "Criterion-based investigations and explanations that will carry into DP sciences." },
  ],

  igcseSubjectsIntro:
    "Pollachi students who prepare for IGCSE, often as private candidates or before a move to a Cambridge school, usually work from the syllabus code outward. Tier decides most of the plan: Core caps the grade, while Extended opens the higher bands but expects far more fluency.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number and algebra fluency, then geometry and statistics, with calculator and non-calculator papers practised separately." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Functions, differentiation and trigonometry at a pace that leaves the student ready for A Level or IB Maths HL." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits and thermal physics, with the planning-style questions on the practical paper rehearsed early." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atomic structure through to organic chemistry, with mole calculations drilled until they are automatic." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Plant and human systems, inheritance and ecology, with extended answers checked for precise terminology." },
    { name: "IGCSE Combined & Co-ordinated Sciences", levels: "0653 / 0654", description: "Three sciences juggled inside one timetable, so a weaker strand never gets postponed." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and short evaluative paragraphs that show cause and consequence." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying business concepts to the scenario in front of the student instead of quoting textbook definitions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Python problem solving, practised until logic errors are found unaided." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary skills and descriptive composition for students not used to English-medium assessment." },
    { name: "IGCSE Tamil as a Second Language", levels: "Grade 9-10", description: "For students with Tamil at home who want a language credit from the same examination series." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking practice at a steady pace for students who studied Hindi only as a third language." },
  ],

  regionsTitle: "Pollachi neighbourhoods and nearby towns our online tutors reach",
  regionsIntro:
    "Since lessons run on video, a family in Mahalingapuram has exactly the same tutor choice as one in Anamalai or Udumalpet. What changes from street to street is the day: bus timings on the Coimbatore road, power cuts in some pockets and the pull of family shops during market hours. The notes below reflect that practical picture rather than any school catchment.",
  tutorsIntro:
    "These are the kinds of tutors a Pollachi family is matched with: teachers based in India who have already taught the IB or Cambridge syllabus in question, and who take lessons live on video during Pollachi's evenings and Sunday mornings. Each profile lists the subjects and levels covered, and the final match is confirmed after the free trial.",
  regions: [
    { name: "Mahalingapuram", note: "Central residential belt, close to the town's colleges, where evening slots after school tuition are the most requested." },
    { name: "Coimbatore Road belt", note: "Families here have the shortest link to Coimbatore schools and often want lessons timed around the return bus or car pickup." },
    { name: "Kovilpalayam", note: "Semi-rural edge of the town with coconut holdings; parents often want a fixed weekend block because weekday evenings are busy on the farm." },
    { name: "Ramapattinam", note: "Growing residential area where students moving from Tamil-medium schools ask for spoken English support alongside subject tutoring." },
    { name: "Udumalai Road", note: "Corridor toward Udumalpet, used by families whose children commute west, with lessons scheduled after the long bus ride home." },
    { name: "Kinathukadavu", note: "Town on the way to Coimbatore, well placed for children attending city schools and needing shorter, sharper evening sessions." },
    { name: "Anamalai", note: "Hill-edge town near the tiger reserve gateway; connectivity can dip during heavy rain, so a backup slot is agreed at the start." },
    { name: "Udumalpet", note: "Larger neighbouring town with its own school scene, reached by tutors online exactly as Pollachi is." },
    { name: "Valparai plateau", note: "Estate families on the hill plateau where boarding for secondary school is common and online tuition holds continuity during holidays." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service and has no tie to any school, the International Baccalaureate, Cambridge or Pearson. Coimbatore schools are named only as the nearest confirmed options for Pollachi families, and not as endorsements or partners. Confirm current programmes and authorisation with each school before applying.",
  schoolClusters: [
    {
      city: "In Pollachi itself",
      note: "We could not confirm any school in Pollachi that teaches the IB or a Cambridge or Edexcel IGCSE. Local schools follow the Tamil Nadu State Board or CBSE, which is why online tutoring is the realistic route for the syllabus itself.",
      schools: [],
    },
    {
      city: "Nearby: Coimbatore",
      note: "About forty kilometres away, Coimbatore is the closest city with a confirmed IB continuum and Cambridge IGCSE; some Pollachi families commute daily, others rent close to school during the week.",
      schools: ["Manchester International School, Coimbatore", "SSVM Institutions", "K'sirs International School"],
    },
    {
      city: "Nearby: Siruvani foothills (boarding)",
      note: "Chinmaya International Residential School runs the IB Diploma alongside CBSE in a boarding setting west of Coimbatore, and takes students from across Tamil Nadu.",
      schools: ["Chinmaya International Residential School"],
    },
  ],

  modesIntro:
    "Tutors do not visit homes in Pollachi, and home visits are offered only in Gurugram and parts of Delhi NCR. Lessons happen live on video from your own home, in one of three arrangements you can mix as the term changes.",
  modes: [
    {
      title: "A weekly private lesson on video",
      description:
        "One tutor, one regular slot and a shared digital whiteboard. This is the default for students who follow a syllabus at school in Coimbatore or elsewhere and want it explained a second time.",
      bullets: [
        "Same tutor every week",
        "Worked problems written on screen as you watch",
        "Short written note after each session",
        "No travel for the child",
      ],
    },
    {
      title: "Exam-season intensive blocks",
      description:
        "Extra sessions clustered around mock exams, IA deadlines or the Cambridge and IB series, then paused again. Handy for families who prefer light support most of the year.",
      bullets: [
        "Past-paper practice by topic",
        "Booked only around real deadlines",
        "Returns to the normal pace afterwards",
        "Fits hostel schedules for boarders home on break",
      ],
    },
    {
      title: "Live lesson plus marked practice",
      description:
        "A weekly live session for new material, and a problem set marked between sessions. It suits students who learn best by working alone first and asking about what went wrong.",
      bullets: [
        "Written feedback on independent work",
        "Keeps momentum through holidays",
        "Can move to two live sessions before exams",
        "Works around uneven evening power and connectivity",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB or IGCSE around Pollachi, and where do they go to school?",
      paragraphs: [
        "Almost nobody in Pollachi attends an IB or IGCSE school without leaving town. The nearest confirmed options sit in Coimbatore district: Manchester International School runs the IB continuum with Cambridge IGCSE, Chinmaya International Residential School offers the Diploma in a boarding setting, and SSVM Institutions and K'sirs International School are known for Cambridge IGCSE. That makes tutoring here less about supplementing a school on the next street and more about bridging a distance.",
        "The families who choose these routes are a mixed lot. Coconut and timber traders and larger farm families look for a curriculum that will travel abroad with their children. Engineers and faculty from the local engineering colleges want an international qualification that keeps doors open beyond Tamil Nadu. Returning workers from the Gulf and Singapore often bring children who already sit in Cambridge or IB classrooms and refuse to give that up.",
        "Distance also brings a very particular timing problem. A student who joins Coimbatore in June has usually spent the earlier months on the state syllabus, and the jump in expectation between Class 8 State Board work and MYP or IGCSE lower-secondary papers shows up in the first unit test. A tutor who has taught both systems can compress that adjustment into a few months rather than a whole failed term.",
        "Because there is no local school to ask, parents also lack informal advice. Nobody down the road can say whether IGCSE Extended Mathematics is realistic for a child who has been comfortable but not brilliant. A trial lesson is a low-risk way to get a tutor's honest view of the child's level before deciding on a tier, a programme or even a move.",
      ],
      bullets: [
        "No confirmed IB or IGCSE school inside Pollachi",
        "Coimbatore is the nearest city with confirmed options",
        "Boarding and daily commuting are both common",
        "The Class 8 to MYP or IGCSE jump is the usual pressure point",
      ],
    },
    {
      heading: "Tamil Nadu State Board, CBSE or IB and IGCSE: what changes for a Pollachi student?",
      paragraphs: [
        "The Tamil Nadu State Board sets a fixed textbook, a board exam in Class 10 and again in Class 12, and a culture of writing out complete answers exactly as printed. CBSE follows a similar rhythm with a shorter, more application-flavoured paper. IB and Cambridge IGCSE reward something else: reasoning that shows its steps, evaluation of evidence and the ability to handle a problem never seen before.",
        "Pollachi students who arrive from Tamil-medium schools carry real strengths into this switch, among them strong number work, patience with long calculations and good recall. What they usually lack is practice writing sustained English explanations and working to command terms such as discuss, evaluate and justify. Those two habits can be built, and they are exactly what one-to-one lessons are good at.",
        "There is also a difference in how the years are counted. State Board Class 10 pupils face one public examination, whereas an IGCSE candidate sits several separate papers per subject and the IB Diploma candidate faces a long written series across May. Understanding that shape early makes the workload feel less mysterious to parents as well as to students.",
        "The table lines the three systems up on the points Pollachi families ask about most often.",
      ],
      table: {
        caption: "State Board, CBSE and IB / IGCSE compared for a Pollachi student",
        columns: ["Point", "TN State Board", "CBSE", "IB / Cambridge IGCSE"],
        rows: [
          ["Medium and language", "Tamil or English, textbook-led", "English or Hindi, NCERT-led", "English, with language courses chosen by the student"],
          ["What earns marks", "Recall of prescribed content", "Recall plus application", "Reasoning, evaluation and command-term precision"],
          ["Assessment shape", "Class 10 and 12 board exams", "Class 10 and 12 board exams", "Papers per subject; IB adds internal assessment"],
          ["Usual next step from Pollachi", "State engineering and medical counselling", "JEE, NEET, CUET-UG", "CUET-UG, study abroad, JEE or NEET where subjects fit"],
        ],
      },
    },
    {
      heading: "What decides the cost of IB or IGCSE tuition for a Pollachi family?",
      paragraphs: [
        "The price of private IB or IGCSE tuition depends on five things: the programme, the level, the subject, the length and frequency of sessions, and how much experience the tutor has with that exact syllabus. A Diploma HL Physics tutor with years of Paper 2 marking practice costs more than a Grade 8 English tutor, and it should. IB Gram does not publish a rate card, and every rate is quoted in writing before a trial lesson is booked.",
        "A Pollachi family saves a cost that town parents usually miss. Because lessons are live on video, nobody pays for a teacher's travel time, and the family does not send a child on a long evening bus ride to reach a Coimbatore tuition centre. That saved hour is worth more to a Class 11 student than most people admit, especially in a town where public transport thins out after dark.",
        "The other saving is avoiding the wrong tutor. Hiring someone who teaches state-board Mathematics and hoping they adapt to IB Analysis and Approaches often costs several wasted months. A tutor who has seen the past papers, the command terms and the mark schemes starts productive from the second lesson, so the same money buys a clearer path.",
        "None of this needs a long commitment. Families can pause, change the number of sessions or end the arrangement after a few weeks, and the tutor can be changed if the fit is not right. Ask for the quote in writing, ask what the first month would cover, and compare that with the alternatives in the table below.",
      ],
      bullets: [
        "Rate depends on programme, level, subject and session length",
        "No travel cost because lessons run online",
        "Quoted in writing before the free trial",
        "No long contracts, tutor can be changed",
      ],
    },
    {
      heading: "Online home tutor, Coimbatore coaching, or studying alone: which suits a Pollachi student?",
      paragraphs: [
        "Coimbatore has a huge coaching market, but almost all of it targets NEET, JEE and state entrance preparation. Very little of it follows the IB subject guides or Cambridge syllabus codes, and a Pollachi student would spend hours on the road to sit in a batch built for another exam. A private online tutor matches the syllabus rather than the batch.",
        "Local private tutors in Pollachi do exist and many are excellent for the state board. The difficulty is finding one who has taught IB Physics HL or IGCSE Additional Mathematics, which is a small pool in a town this size. When such a person is not available, the family either compromises on the syllabus or drives an hour each way.",
        "Studying alone works for a disciplined student revising material already understood, and self-study with past papers is a proven way to prepare for IGCSE as a private candidate. It fails where feedback is missing: nobody marks a long IB Paper 2 answer, and errors in method are repeated for months.",
        "The table below sets the routes side by side on syllabus fit, feedback and time cost for a family in or around Pollachi.",
      ],
      table: {
        caption: "Study routes compared for IB and IGCSE students around Pollachi",
        columns: ["Route", "Syllabus fit", "Feedback", "Time cost from Pollachi"],
        rows: [
          ["Online private tutor", "Matched to programme and subject", "One-to-one, every session", "None; lessons at home"],
          ["Coimbatore coaching centre", "Mostly entrance exams, seldom IB or IGCSE", "Batch-paced, limited individual marking", "A long round trip, several evenings a week"],
          ["Local state-board tutor", "Excellent for state syllabus, rarely for IB or IGCSE", "Good, if syllabus knowledge matches", "Short, within town"],
          ["Self-study with past papers", "Whatever the student chooses", "None unless someone marks it", "Flexible, but no accountability"],
        ],
      },
    },
    {
      heading: "How do the monsoon, harvest and festivals shape the study year in Pollachi?",
      paragraphs: [
        "Pollachi's calendar is set as much by the coconut harvest and the two monsoons as by any school timetable. The south-west rains break over the Anamalai hills from June to September, and the north-east monsoon adds more rain in October to December. Heavy rain can interrupt power and mobile signal in outlying belts, so a tutor and family agree a fallback slot at the start of term.",
        "The larger festivals matter too. Pongal in mid-January closes schools for several days and is the best natural window for focused revision, while Diwali in October or November and Tamil New Year in April each bring visiting relatives and a week when regular sessions may slip. Families who plan the calendar in advance rarely lose momentum; those who do not tend to lose a month.",
        "The exam boards run on their own dates. IB Diploma papers arrive in May with results in early July, and a November session serves some schools. Cambridge IGCSE runs a May to June series and an October to November series in India. A school year that starts in April therefore means the first real exam pressure arrives while the student is still finding their feet.",
        "The table below places the local calendar against the two exam series so a family can see where revision fits.",
      ],
      table: {
        caption: "Pollachi's year set against IB and Cambridge dates",
        columns: ["Period", "What is happening locally", "What matters for exams"],
        rows: [
          ["January", "Pongal holidays, dry and cooler weather", "Good window for revision before spring assessments"],
          ["April to May", "New school year begins, summer heat peaks", "IB May papers and Cambridge May to June series"],
          ["June to September", "South-west monsoon over the Anamalai hills", "Coursework and Internal Assessment drafting time"],
          ["October to December", "North-east monsoon, Diwali break", "Cambridge Oct to Nov series and IB mock exams"],
        ],
      },
    },
    {
      heading: "How are IB Maths, Physics, Chemistry and Biology tutored for a first-time IB student?",
      paragraphs: [
        "IB Maths comes in two forms. Analysis and Approaches suits students planning engineering, physical sciences or economics and leans on algebra, calculus and proof-style reasoning. Applications and Interpretation is built around modelling, statistics and technology and suits students heading to business, social sciences or design. A tutor's first job is to check that the student is in the right course for the university plan, before any teaching begins.",
        "Pollachi students who come from the State Board are usually fast and accurate with calculations, so the tutor spends time on the parts that feel unfamiliar: explaining a step in words, choosing a model, and interpreting an answer in context. Paper 3 and the Exploration reward exactly those habits, and they are not built by more drill on routine problems.",
        "Physics, Chemistry and Biology share a structure across the Diploma: a core with additional topics, a practical scheme assessed through the internal Scientific Investigation, and papers that mix multiple choice, data response and extended writing. Weekly sessions are used to break down one topic at a time, work through past-paper questions, and practise writing short answers that show the exact steps the mark scheme expects.",
        "For students who are joining a Diploma school after Class 10, a summer block before Grade 11 can cover the bridging content, in particular vectors in Physics and mole calculations in Chemistry. This is the most efficient use of tutoring time in the whole programme and it costs far less than repairing gaps in Grade 12.",
      ],
      bullets: [
        "Pick Analysis or Applications after checking the university plan",
        "State Board students need help with written reasoning more than calculation",
        "Science labs are marked internally, so Investigation planning starts early",
        "A summer bridging block before Grade 11 pays off most",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Pollachi student choose?",
      paragraphs: [
        "Cambridge IGCSE offers most subjects at two tiers. Core papers cap the grade at a C in many subjects, while Extended papers open the whole range from A star down to E. Choosing a tier is a judgement call on the student's current level and future plans, and it deserves an honest conversation rather than an assumption that higher is always better.",
        "For Mathematics, Core is realistic for a student comfortable with basic algebra who finds abstract reasoning slow. Extended suits a student who enjoys algebraic manipulation and wants IB Analysis and Approaches, A Level Mathematics or a later engineering route. The gap is wide, and moving from Core to Extended late means a large amount of new content in a short time.",
        "The sciences follow a similar logic. Students planning to take the sciences at A Level or in the IB Diploma should aim for Extended in Physics, Chemistry and Biology, or in Coordinated Sciences if the school offers that. Others aiming for arts or commerce routes may be better served by Core, with more time left over for language and humanities subjects.",
        "A tutor can check current level with a short diagnostic in the trial lesson, look at past-paper marks, and suggest a tier. It is far better to make that decision in Grade 8 or early Grade 9 than after the entry deadline for the exam series has passed and only one option remains.",
      ],
    },
    {
      heading: "Which university routes are open from Pollachi with an IB or IGCSE background?",
      paragraphs: [
        "IB Diploma holders from Pollachi can apply widely. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, which makes admission to Indian universities straightforward, and CUET-UG accepts IB students for central and many state university programmes, with subject combinations and language choices needing to be planned early.",
        "For engineering, JEE Main is open to IB students who meet the subject conditions, with Physics, Chemistry and Mathematics normally required. NEET-UG likewise requires Physics, Chemistry and Biology along with English. Since Pollachi lies in a region with a heavy engineering and medical culture, many students look at these routes, and it is worth checking each subject condition before choosing Diploma courses.",
        "Study abroad is the most common goal for IB and IGCSE families. IB scores are read directly by universities in the UK, Canada, Australia and the US, and IGCSE results lead to A Level or IB in senior years. Coimbatore and Chennai host counselling services, though a tutor can help a student understand what grades each destination normally asks for.",
        "Tamil Nadu's own institutions are worth a look too. PSG College of Technology, Coimbatore Institute of Technology and Anna University colleges have their own admission rules that IB and IGCSE students should check with the institution directly, as policies for non-state-board candidates change from year to year.",
      ],
      table: {
        caption: "University routes open to Pollachi IB and IGCSE students",
        columns: ["Goal", "IB Diploma route", "IGCSE route", "What to check early"],
        rows: [
          ["Indian central universities", "CUET-UG with AIU equivalence", "Complete Class 12 or A Level first", "Subject and language choices for CUET"],
          ["Engineering", "JEE Main if Physics, Chemistry, Maths are taken", "Same, after Class 11 to 12 stage", "Eligibility rules for each institute"],
          ["Medicine", "NEET-UG with Physics, Chemistry, Biology, English", "Same, after Class 11 to 12 stage", "Subject and attempt limits"],
          ["Study abroad", "Predicted and final grades sent to universities", "IGCSE then IB or A Level", "Grade thresholds for the target country"],
        ],
      },
    },
  ],

  process: [
    { title: "Tell us the course", description: "Send the programme, subject, level and school or exam session through WhatsApp or email, along with the days that suit the family." },
    { title: "Receive a matched tutor", description: "We propose a tutor who has taught that exact syllabus and share a short profile and the availability." },
    { title: "Take a free trial lesson", description: "A live online session on a real topic, so the child and tutor can judge the fit without any payment." },
    { title: "Confirm the quote in writing", description: "The rate and session pattern are written down before anything is booked, with no published prices and no surprises." },
    { title: "Study weekly with notes", description: "Regular lessons at the agreed time, a written note after each, and a tutor change if it is not working." },
  ],

  whyPoints: [
    { title: "Syllabus-specific tutors", description: "Tutors are chosen for the exact IB subject guide or IGCSE code, not a general subject label." },
    { title: "No travel, no lost hours", description: "A child in Pollachi keeps the evening free instead of spending it on a bus to Coimbatore." },
    { title: "Honest about home visits", description: "Tutors do not come to homes in Pollachi, and we say so plainly instead of implying otherwise." },
    { title: "Written notes each week", description: "Parents see what was covered, what to practise and where the gaps remain." },
    { title: "Tutors coach, never write", description: "Guidance on IAs, essays and coursework is offered; the work stays the student's own." },
    { title: "Free trial and easy change", description: "Try a lesson first, and switch tutor if the match is wrong." },
  ],

  faqs: [
    {
      question: "Are there IB tutors in Pollachi?",
      answer:
        "Yes, but they teach online. IB Gram matches Pollachi students with IB tutors based in India who teach live over video, so the child studies at home without travelling to Coimbatore. Tell us the programme, subject and level, and we suggest a tutor who has taught that course, with a free trial before anything is booked.",
    },
    {
      question: "Do tutors come to my home in Pollachi?",
      answer:
        "No. IB Gram tutors do not visit homes in Pollachi, and in-person home visits run only in Gurugram and parts of Delhi NCR. What we offer is private, one-to-one tuition at home, delivered online. The child needs a laptop or tablet, a quiet corner and a stable connection, and the rest is arranged for you.",
    },
    {
      question: "Is there any IB or IGCSE school in Pollachi itself?",
      answer:
        "We could not confirm one. Pollachi schools follow the Tamil Nadu State Board or CBSE. The nearest confirmed options are in Coimbatore, roughly forty kilometres away, including Manchester International School and Chinmaya International Residential School. Please check each school's current status directly before applying, because programmes and authorisations change.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Pollachi?",
      answer:
        "The rate depends on programme, level, subject, session length and tutor experience, and IB Gram does not publish prices. You receive the rate in writing before booking. Online lessons remove travel costs, which is a real saving for families outside Coimbatore. There is no long contract, and you can pause or stop after a few weeks.",
    },
    {
      question: "My child studies the State Board. Can they still switch to IGCSE?",
      answer:
        "Yes, and many students do at Class 8 or 9. The main adjustment is writing explanations and reasoning in English, not the content itself. A tutor can run a short diagnostic in the free trial, suggest Core or Extended for each subject, and build a bridging plan that fits alongside the current school timetable.",
    },
    {
      question: "Can you help with IB Internal Assessments and the Extended Essay?",
      answer:
        "We coach, but we never write. Tutors help a student pick a workable topic, plan the method, understand the criteria and give feedback on drafts the student has written. They do not write any part of an IA, Extended Essay, TOK essay or coursework, which protects the student's academic integrity.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer:
        "We cover Cambridge and Pearson Edexcel IGCSE. Cambridge is more common among schools in the Coimbatore region, so most Pollachi enquiries are for syllabus codes such as 0580, 0625, 0620, 0610 and 0606. If your child is on Edexcel, mention that when you write and we will match a tutor who has taught that board.",
    },
    {
      question: "What internet speed and device do we need?",
      answer:
        "A laptop or tablet with a working camera and a stable broadband or fibre line is enough. Mobile data works as a backup. Pollachi's outlying areas can lose signal in heavy monsoon weather, so we suggest agreeing a fallback time at the start, and a tutor can move a session by a few hours if needed.",
    },
    {
      question: "Can my child take lessons after a long school or bus day?",
      answer:
        "Yes. Lessons are scheduled around your timetable, usually in the evening or on Sunday morning, and the tutor works on Indian Standard Time. For students who return late from Coimbatore, a shorter, sharper session is often more useful than a long one, and we can split a weekly hour into two half-hours.",
    },
    {
      question: "Do you teach IB PYP and MYP too?",
      answer:
        "Yes. PYP support is light, focused on reading, number sense and inquiry habits. MYP support covers criterion-based writing in the sciences, Individuals and Societies, Language and Literature, and help keeping the Personal Project journal current. The Diploma is the largest area, but younger students are welcome and are matched to tutors who work with their age group.",
    },
    {
      question: "Can you help my child prepare before joining a school in Coimbatore?",
      answer:
        "Yes, and it is one of the most common requests from Pollachi. A bridging block of six to ten weeks before term can cover the vocabulary, command terms and content gaps that the first unit test tends to expose. The tutor builds it from the school's syllabus, if you share the course outline.",
    },
    {
      question: "Will IB or IGCSE help with NEET or JEE?",
      answer:
        "It can, if subjects are chosen with care. JEE Main and NEET-UG both expect Physics, Chemistry and either Mathematics or Biology, and IB students need to take those at a suitable level. Entrance coaching itself is separate; we tutor the IB or IGCSE syllabus and help you understand how it aligns with the entrance route.",
    },
    {
      question: "How quickly can a tutor be arranged?",
      answer:
        "Usually within a few days for common subjects such as IB Mathematics, Physics or IGCSE Chemistry. Rarer combinations, such as IB Tamil B or IGCSE Hindi, may take a little longer. Send the request on WhatsApp on +91 7439 368 115 or email support@ibgram.com, and we confirm availability before the trial.",
    },
    {
      question: "What if my child does not get on with the tutor?",
      answer:
        "We change the tutor. Fit matters more than any single profile, so if the child finds the pace wrong or the style unhelpful, tell us after the trial or any later lesson, and we suggest another match. There is no penalty, and the notes from earlier sessions can be shared so the new tutor does not start from zero.",
    },
    {
      question: "Are you affiliated with the IB or Cambridge?",
      answer:
        "No. IB Gram is an independent tutoring service and is not affiliated with the International Baccalaureate, Cambridge, Pearson or any school. We describe syllabuses accurately and help students prepare, but we do not represent any examining body or school, and we do not guarantee results or admission anywhere.",
    },
    {
      question: "Do you cover Anamalai, Udumalpet and Valparai families?",
      answer:
        "Yes. Because lessons run online, any student in the Pollachi belt, including Anamalai, Udumalpet, Kinathukadavu and the Valparai plateau, can book the same tutors. The only difference is connectivity, so we ask about the home line during the trial and set a backup time in case of rain or power cuts.",
    },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "See how IB Gram works across every programme and board." },
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page for online IB and IGCSE tuition in Indian cities." },
    { label: "Coimbatore tutors", href: "/coimbatore/", description: "The nearest city with confirmed IB and Cambridge schools, forty kilometres away." },
    { label: "Tiruppur tutors", href: "/tiruppur/", description: "Another western Tamil Nadu page for families along the same industrial belt." },
    { label: "Palakkad tutors", href: "/palakkad/", description: "For families near the Kerala border who look across the Palakkad Gap." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subject support from PYP to Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support by syllabus code." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "What the two Diploma years involve and how tutoring fits in." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the tutors behind the lessons." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a request or ask a question before booking the free trial." },
  ],

  closingHeading: "Start with a free lesson from your own desk in Pollachi",
  closingBody:
    "Send the programme, subject and preferred evenings to support@ibgram.com or WhatsApp +91 7439 368 115, and a matched tutor will be proposed within days. The first lesson costs nothing, the quote arrives in writing beforehand, and the tutor can be swapped if it does not feel right. No bus to Coimbatore is needed.",
};
