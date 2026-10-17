import type { CitySeoPage } from "../types";

/**
 * /sadri/ - IB and IGCSE tutoring page for Sadri, Pali district, Rajasthan. No school in Sadri is confirmed
 * to run the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and the clusters reuse Udaipur,
 * Jodhpur and Ahmedabad names from existing verified pages. All lessons online.
 */
export const sadri: CitySeoPage = {
  slug: "sadri",
  countryName: "Sadri",
  countryNameLong: "Sadri, Rajasthan",
  demonym: "Sadri",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-evening and Sunday lessons that leave out the Paryushan fortnight, wedding weeks and the hottest afternoons of May and June",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.1833, longitude: 73.4333 },
  wikipedia: "https://en.wikipedia.org/wiki/Sadri,_Rajasthan",
  alternateNames: ["Sadri Pali", "Sadri Godwar", "Sadri Rajasthan"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sadri | Online Private Home Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Sadri students in Pali district, planned around Ranakpur-season travel and heat, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sadri",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR SADRI STUDENTS",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Sadri, delivered online: a private, live lesson at your own desk with a tutor who has already taught your subject and exam board. Sadri sits in the Aravalli foothills of Pali district, a ninety-minute drive from the nearest school we can confirm for these boards, so the tutor reaches the student through a screen instead.",
  primaryKeyword: "IB and IGCSE tutors in Sadri",
  imageAltText: "A Sadri student with a laptop and notebook in a live online IB Mathematics lesson at a home study table",
  secondaryKeywords: [
    "IB tutor Sadri",
    "IGCSE tutor Sadri",
    "IB home tuition Sadri",
    "IGCSE home tuition Sadri",
    "IB private tuition Sadri",
    "IB Maths tutor Sadri",
    "IGCSE Maths tutor Sadri",
    "IB Physics tutor Sadri",
    "IB Chemistry tutor Sadri",
    "IB Biology tutor Sadri",
    "IB DP tutor Sadri",
    "IB MYP tutor Sadri",
    "IB PYP tutor Sadri",
    "IGCSE online tuition Sadri",
    "online IB tutor Sadri Pali district",
    "IB tutor Ranakpur Desuri",
    "IGCSE tutor Falna Bali Rajasthan",
    "Cambridge IGCSE tutor Pali district",
    "online home tuition Sadri Rajasthan",
  ],

  heroTrustPoints: [
    "Tutors picked for the exact IB subject, level or IGCSE syllabus code",
    "Every lesson is live and online; tutors do not come to Sadri, since home visits run only in Gurugram and parts of Delhi NCR",
    "A short written note after each lesson that parents can read without subject knowledge",
    "A free trial class first, and a rate in writing before you commit",
  ],
  heroStats: [
    { value: "Online", label: "Live, one-to-one, from home" },
    { value: "IB + IGCSE", label: "PYP, MYP, DP, Cambridge, Edexcel" },
    { value: "IST", label: "Late evenings and Sundays" },
    { value: "Free trial", label: "See the teaching first" },
  ],

  intro: {
    heading: "Online IB and IGCSE tutors for families in Sadri and around Ranakpur",
    paragraphs: [
      "Sadri is a small trading town in the Godwar belt of Pali district, tucked under the Aravalli hills and best known beyond Rajasthan for the marble Jain temples at nearby Ranakpur. Most households here know the Rajasthan Board or CBSE well. IB and IGCSE come into conversation for a narrower reason: a child about to move to Udaipur, Jodhpur or a city in Gujarat, a business family with relatives in Mumbai or Chennai, or a plan to study abroad.",
      "For those families, IB and IGCSE home tuition has to be online. We could not confirm any school in Sadri that teaches the International Baccalaureate or a Cambridge or Pearson Edexcel IGCSE, and our tutors are based elsewhere in India, so a lesson is a live video class that the student attends from a desk at home. It is private, it runs in IST, and it needs a laptop or tablet, a headset and a steady connection.",
      "That arrangement widens the choice instead of narrowing it. A Sadri student who would never find an IB Chemistry HL specialist within a hundred kilometres can work with one every week, and the tutor sees the student's handwriting through a shared digital board. The student keeps the same school, the same room and the same evening routine.",
      "IB Gram is an independent tutoring service and is not connected with the International Baccalaureate, Cambridge, Pearson or any school mentioned on this page. Tutors explain, correct and coach. Internal assessments, Extended Essays, TOK essays and coursework remain the student's own work.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Private lessons online in English, with Hindi used to clear up a concept when it helps",
      "A free trial lesson before any rate is discussed",
      "No tutor visits in Sadri; in-person home tuition is available only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "A Sadri family usually meets an international programme at a turning point, not at the start of schooling. The summaries below describe what each stage demands, and the local notes say how tutoring tends to be used from a Godwar town.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning is organised around units of inquiry in which children ask questions, test ideas and present what they found, ending in a small Exhibition. There are no board papers. A tutor spends the time on reading aloud, neat writing, number facts and the confidence to explain an answer in a full sentence.",
      countryNote:
        "In Sadri, PYP help most often supports a child who will join a city school next term, and a session is kept short, playful and in plain language.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against published criteria for knowing, investigating, communicating and reflecting, and a Personal Project closes the programme. A child raised on short-answer papers may know the chapter well yet lose marks for not justifying a choice. Tutoring is mostly about that habit of explaining.",
      countryNote:
        "Children from Sadri who move into an MYP class in Udaipur or Jodhpur typically need work on extended English writing and on science write-ups.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four at Higher Level, plus Theory of Knowledge, the Extended Essay and CAS. Grades add up to a maximum of 45 points, with a May session and a November session. Coursework is spread across the two years, so falling behind in the first year costs far more than it seems to at the time.",
      countryNote:
        "Diploma students from the Sadri area are often in a boarding or day school in another city, and use weekend evenings online to reinforce weak subjects.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines at least two Diploma courses with a career-related study and a core of reflective work. Very few schools in India offer it. The Diploma courses inside it are examined to the same standard as in the full Diploma.",
      countryNote:
        "We rarely receive CP requests from the Sadri side of Pali district, and when one arrives we treat its Diploma subjects exactly like DP subjects.",
    },
  ],

  subjectsIntro:
    "Tell us the subject, whether it is Higher or Standard Level, and the exam session. IB Maths alone offers two courses at two levels, and a tutor who has taught Applications and Interpretation is not automatically right for Analysis and Approaches HL, so we match on the precise combination.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for students heading to engineering or pure science, with attention to showing each step in the working." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use, with a calculator taught as a working tool rather than a shortcut." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through quantum ideas, with weekly practice at labelling graphs, handling uncertainty and writing a crisp explanation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, equilibrium and organic pathways, working from the data booklet from the very first lesson." },
    { name: "IB Biology", levels: "HL / SL", description: "A large syllabus tamed by retrieval practice and by learning what each command term expects in an answer." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram discipline and evaluation, with examples that can come from marble, mining and textile trade in Rajasthan." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and business tools, helpful for students from trading families who know the practice but not the vocabulary." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and comparative essays for students who think in Marwari or Hindi and write in English." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Literature analysis or language acquisition, depending on the school's choice, with oral practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a staged internal project." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems models using Aravalli case material such as water scarcity and mining pressure." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data response and fieldwork method." },
    { name: "IB Psychology", levels: "HL / SL", description: "Study evaluation and structured essay writing." },
    { name: "IB Chemistry and Biology combinations", levels: "HL", description: "A planned load for pre-medical students who take both sciences at Higher Level." },
  ],

  igcseSubjectsIntro:
    "IGCSE comes from two boards, Cambridge and Pearson Edexcel, and the papers differ in structure, tiers and command words. Please tell us which board your child's school uses. The list below shows the subjects families from the Sadri area request most.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths, with separate non-calculator and calculator papers; Extended students drill algebra, trigonometry and graphs." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "An early step toward calculus, for students who intend to take IB Maths HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's Maths, built on two equally weighted papers where method marks matter." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics, with practical-skills questions rehearsed at the table." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atomic structure, reactions, rates and organic basics." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human systems, plants and ecosystems." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "Three sciences in one qualification, for schools that do not run them separately." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing, listening and speaking for students whose home language is Marwari or Hindi." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing, narrative and argument." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension and composition, subject to the school entering the paper." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Computational thinking, pseudocode and data representation." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business terms and case questions for students from family firms." },
  ],

  regionsTitle: "Sadri localities and nearby towns our tutors serve online",
  regionsIntro:
    "A live lesson reaches a student in the old bazaar just as easily as one on the Ranakpur road. These notes describe how study time tends to fall in each part of Sadri and the villages around it, including shop hours, bus timings and power-cut habits.",
  regions: [
    { name: "Sadri bazaar and the old town", note: "Shopkeeping households live above or behind their stores, so a homework hour only begins after the shutters close, usually between nine and ten at night." },
    { name: "Sadri bus stand and Station Road", note: "A busy corridor of travellers, tea stalls and tuition notices; homes here are noisy until late, so a headset with a microphone is worth buying." },
    { name: "Ranakpur Road", note: "The road to the Jain temple complex; families here work in pilgrim lodging and trade, and lessons avoid the busiest season of visitors." },
    { name: "Sadri colonies near the college", note: "Quieter residential lanes where students prepare for RBSE and CBSE and often add one subject online." },
    { name: "Ghanerao and Narlai side", note: "Heritage villages along the Aravalli road; the connection can be patchy, so a mobile hotspot as a backup is sensible." },
    { name: "Desuri", note: "A neighbouring tehsil town to the south, with its own market and a long-standing Jain community that looks to Gujarat and Mumbai for opportunities." },
    { name: "Falna", note: "A railway halt on the Ahmedabad line, used by many families as the quick link to Gujarat and Delhi." },
    { name: "Bali and Rani", note: "Small Pali-district towns where students travel for Class 11 and 12 subject choice, so online lessons reduce a daily bus ride." },
    { name: "Kumbhalgarh and Rajsamand side", note: "A hill region to the east; boarding and hostel students here follow school timetables and book lessons during vacations." },
    { name: "Sirohi and Abu Road direction", note: "Families toward the Gujarat border often compare Ahmedabad schools with Udaipur, and shop for tutors before choosing." },
  ],

  schoolDisclaimer:
    "The schools shown here are mentioned only to indicate where IB and IGCSE classrooms exist within reach of Sadri. IB Gram has no business relationship with any of them, nor with the IB, Cambridge or Pearson. Programmes, grades offered and admission rules change, so confirm each detail with the school itself.",
  schoolClusters: [
    {
      city: "Local: Sadri and Pali district",
      note: "We could not confirm any school in Sadri or the surrounding towns that offers the IB or a Cambridge or Edexcel IGCSE, so none is named. Local schools run the Rajasthan Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Udaipur",
      note: "Roughly two hours by road to the south-east, Udaipur is the closest city with confirmed international-board schools and the one most Sadri families visit first.",
      schools: ["Crossroads International School", "Rockwoods International School", "Seedling The World School"],
    },
    {
      city: "Nearby: Jodhpur",
      note: "The big city of Marwar, reached through Pali; its confirmed international school appears on our Pali and Jodhpur pages.",
      schools: ["Bodhi International School, Jodhpur"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "A rail journey away from Falna and a natural choice for business families with Gujarat ties.",
      schools: ["Calorx Olive International School", "Fountainhead School, Ahmedabad"],
    },
  ],

  modesIntro:
    "Every lesson for a Sadri student is online. Families then choose how steady to make it, from one weekly slot to a full revision push in the weeks before a paper.",
  modes: [
    {
      title: "A weekly private class",
      description:
        "The same tutor at the same hour each week. The student arrives with questions and unfinished work, and the tutor teaches the next idea and corrects mistakes as they appear.",
      bullets: [
        "One tutor matched to subject, level and board",
        "Usually an hour, with a break in the middle for longer slots",
        "Working written on a shared digital board",
        "Suits IGCSE, MYP and DP students alike",
      ],
    },
    {
      title: "A term plan with reports",
      description:
        "A map of the topics for the term, a written summary after every class, and a check-in with the parent every few weeks to adjust the pace.",
      bullets: [
        "Notes written for parents who do not teach the subject",
        "Planned review points with the family",
        "Useful when the student also attends school classes elsewhere",
        "Extra lessons slotted in before school tests",
      ],
    },
    {
      title: "Exam-season sprints",
      description:
        "Before school mocks and the May or November papers, sessions become more frequent and consist largely of timed questions, marking and corrections.",
      bullets: [
        "Questions marked in the style of the relevant board",
        "Two to four sessions a week when the school calendar allows",
        "Scheduled away from Paryushan and big wedding dates",
        "Best begun about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools near Sadri offer IB or IGCSE?",
      paragraphs: [
        "In Sadri itself, none that we can confirm. The town's schools follow the Rajasthan Board or CBSE, and parents who ask us about international boards are usually thinking of a school in another city. The pattern is common in Pali district, where the next real choice appears only after a long drive.",
        "Udaipur is the nearest place with confirmed options. Crossroads International School is an IB World School, Rockwoods International School teaches the Cambridge pathway, and Seedling The World School appears on our Udaipur page as a Cambridge-curriculum school. Distances matter for a child: the road from Sadri via Ranakpur and Gogunda takes a couple of hours, so most families who choose these schools arrange boarding or a rented flat.",
        "Jodhpur draws families who prefer Marwar's larger city, and Bodhi International School there is the one name we have verified. Ahmedabad is the third direction, reached by train from Falna and often considered by families that already have a business or relatives in Gujarat. Calorx Olive International School and Fountainhead School are the Ahmedabad names we reuse from our own city page.",
        "The practical result is that many Sadri students are not yet enrolled in an IB or IGCSE school when they first contact us. They want to find out what the work is like, close a gap in English or Maths before an admission test, or keep a subject going while a transfer is arranged. Online lessons are well suited to that early stage.",
      ],
      bullets: [
        "Sadri itself: no confirmed IB or IGCSE school",
        "Udaipur: three confirmed schools, about two hours away",
        "Jodhpur and Ahmedabad: further options for families willing to relocate",
        "Always confirm the current programme and fees with the school",
      ],
    },
    {
      heading: "How do the Rajasthan Board, CBSE, IGCSE and IB compare for a Sadri student?",
      paragraphs: [
        "The Rajasthan Board of Secondary Education, based in Ajmer, runs the Class 10 and Class 12 examinations in March, with Hindi as the usual medium and English as an option. CBSE offers a national syllabus in the same season. IGCSE and the IB Diploma are international, examined in May and November, and written almost entirely in English.",
        "A student from a Hindi-medium Rajasthan Board classroom often knows a topic thoroughly yet is not used to the style of an international paper. Questions ask for reasoning, data interpretation and evaluation, and marks are given for method as well as the final answer. The first six to eight weeks of tutoring are spent on this change of style more than on new content.",
        "Entrance routes matter too. Engineering applicants face JEE Main and BITSAT, medical applicants face NEET, and Rajasthan has a big coaching culture in Kota that pulls students from across the state. A student who leaves the state board for IB or IGCSE must check eligibility for each of those exams before locking subject choices.",
        "For many Sadri families the guiding question is where the student will live at sixteen. If the plan is Kota-style coaching for a Rajasthan-based seat, CBSE or the state board fits more smoothly. If the plan is a university abroad or a private university, IB or IGCSE gives a stronger international record.",
      ],
      table: {
        caption: "Board options a Sadri family compares",
        columns: ["Board", "Usual home", "Style of assessment", "Main exam window"],
        rows: [
          ["Rajasthan Board (RBSE)", "Most local government and private schools", "Chapter-based, mostly Hindi medium", "March"],
          ["CBSE", "Private schools in the district", "National syllabus, application questions", "February to April"],
          ["IGCSE (Cambridge or Edexcel)", "Udaipur, Jodhpur, Ahmedabad", "Applied, English-language, tiered papers", "May-June and October-November"],
          ["IB Diploma", "Udaipur and larger cities", "Six subjects plus core, internal and external marks", "May and November"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Sadri?",
      paragraphs: [
        "We do not publish a rate, because two students rarely need the same thing. After the free trial lesson we send a written quote, and it reflects the course level, the subject, how closely the tutor's experience matches your syllabus, and how many lessons you want in a week.",
        "A Higher Level IB Physics tutor with years of Diploma teaching and an IGCSE English tutor for a Class 9 student are priced differently, and that is reasonable. What parents should compare is cost per useful outcome. A specialist who has seen a question type a hundred times can often explain it in ten minutes, while a generalist might need three sessions.",
        "Compare also what travel would cost. A weekly class in Udaipur from Sadri means a long drive or an overnight stay, fuel and tolls, and a lost school evening. Online lessons remove that bill and let a family raise or lower the number of hours month by month without a contract.",
        "Ask for the rate in writing and judge it after the trial. If circumstances change, you can pause lessons, switch to a lighter plan or ask for a different tutor.",
      ],
      bullets: [
        "Course and level: IB HL or SL, IGCSE Core, Extended, Foundation or Higher",
        "Subject demand and the tutor's record with that exact syllabus",
        "Number and length of weekly lessons",
        "Steady support through the year or a short pre-exam push",
      ],
    },
    {
      heading: "Online tutor, Udaipur classes, local home tutor or self-study?",
      paragraphs: [
        "Udaipur has teachers and centres with IB and IGCSE experience, but they are a long drive from Sadri. A student who attends weekly spends more hours on the road than in the lesson, and the plan usually collapses by the second month.",
        "Home tutors in Sadri are knowledgeable about Rajasthan Board and CBSE subjects and are often excellent with younger children. Very few have taught an IB or IGCSE syllabus, which makes them best for general homework support alongside a specialist online tutor.",
        "Self-study with past papers works for disciplined students in IGCSE Maths and the sciences. It struggles with subjects needing written feedback, such as English, Economics and any internally assessed component, because nobody marks the argument against the criteria.",
        "Online one-to-one lessons offer a specialist at a regular hour with personal attention. They depend on stable internet and power, which can fail in a summer storm or a long outage, so tutors agree on a backup such as an audio call with photographed working.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Sadri",
        columns: ["Route", "What it gives", "What limits it"],
        rows: [
          ["Online one-to-one", "Specialist for the exact syllabus, private attention", "Needs stable power and data"],
          ["Weekly classes in Udaipur", "In-person teaching and peers", "Long road, overnight stays, high travel cost"],
          ["Local home tutor", "Easy to arrange, knows the area", "Rarely trained in IB or IGCSE papers"],
          ["Self-study", "Free and flexible", "No marking of essays or internal work"],
        ],
      },
    },
    {
      heading: "How do Sadri's heat, Paryushan and wedding season shape the study year?",
      paragraphs: [
        "Summers in this part of Pali district are hot and dry, and May and June afternoons are difficult for anyone trying to concentrate. Families here often study early morning and late evening, which fits online lessons well, since the tutor can meet the student after dinner when the house has cooled.",
        "The monsoon arrives in July and runs to September, bringing relief from the heat and green hills near Ranakpur. Heavy spells can interrupt electricity and mobile data, so it is wise to charge devices ahead and keep a printed worksheet as an emergency option.",
        "Jain festivals have a strong effect in Sadri. Paryushan, the eight to ten days of fasting and reflection in late summer, sets a quiet tone in many homes, and Mahavir Jayanti, Diwali and Navratri bring guests and temple visits. Teej and Gangaur matter too, as do Holi and Raksha Bandhan. Lessons around these dates are lighter or moved.",
        "The IGCSE October-November session and IB November exams fall close to Diwali, which means revision must be mostly finished before the festival week. Wedding dates in the cooler months, from November to February, also take whole families away, so we ask for those dates in advance.",
      ],
      table: {
        caption: "A year of study in Sadri",
        columns: ["Months", "What is happening", "Planning advice"],
        rows: [
          ["Jan-Feb", "Cool, wedding dates, school pre-boards", "Steady weekly lessons; mark wedding weeks in advance"],
          ["Mar-Apr", "RBSE and CBSE exams, rising heat", "Light lessons for those in state boards; mocks for IB"],
          ["May-Jun", "IB May session, IGCSE papers, intense heat", "Early morning or late-night sessions"],
          ["Jul-Sep", "Monsoon, Paryushan, Teej and Gangaur", "Backup power and data; fewer lessons around festivals"],
          ["Oct-Nov", "Diwali, IGCSE and IB November exams", "Finish revision before festival week"],
          ["Dec", "Cool, holiday travel", "Longer consolidation sessions"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Sadri go after school?",
      paragraphs: [
        "Within Rajasthan the immediate options are Jodhpur, Udaipur and Jaipur. Jodhpur has IIT Jodhpur, AIIMS Jodhpur, National Law University and Jai Narain Vyas University, while Udaipur has Mohanlal Sukhadia University. BITS Pilani and Banasthali are in other districts of the state. Admission rules vary and are set out on each institution's website for the year of entry.",
        "The Association of Indian Universities issues equivalence for foreign qualifications so that IB and IGCSE results can be treated alongside Indian Class 12. Many public universities now admit through the CUET-UG, and IB Diploma students may sit it with subject combinations that match their chosen course. Guidance changes yearly, so check the current notices before planning.",
        "Engineering needs Physics, Chemistry and Maths for JEE Main and for state entrance routes, while NEET needs Biology with Physics and Chemistry. IB students should plan the Higher Level choices with those requirements in mind, and IGCSE students should select Chemistry and Biology as separate subjects if medicine is a possibility.",
        "Abroad, the IB Diploma is read widely in the UK, Europe, Canada and Australia, and American colleges consider it along with tests and essays. Business families from this region frequently look at the UK, Dubai and Singapore, where relatives often already live. Tutors support the subject work and never write application essays.",
      ],
    },
    {
      heading: "What makes IB Maths and the sciences difficult, and how do tutors help?",
      paragraphs: [
        "IB Maths asks a student to explain every result. In Analysis and Approaches, that means clean algebra, careful limits and proof. In Applications and Interpretation, it means choosing a model, running it on technology and judging whether it fits. Both courses include an Exploration, a written investigation worth a fifth of the final grade.",
        "Physics students commonly drop marks through missing units, unlabelled axes and vague explanations. Chemistry carries heavy calculation, and speed with the data booklet decides how many marks a student can collect. Biology rewards precise vocabulary and punishes loose language, since the command term tells the examiner how much detail to expect.",
        "For internal assessments, a tutor will clarify the criteria, ask the questions that sharpen a research focus and read a draft to point out where a criterion is not yet met. The experiment, data and text must come from the student.",
        "A tutor who has taught students from Rajasthan Board backgrounds understands the exact leap involved. Content is often covered, while argument, units and structure are new, and the quickest gains come from fixing those habits in the first term.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing IGCSE tiers",
      paragraphs: [
        "In Cambridge IGCSE, the Core tier caps the top grade at C, while Extended allows A* and A. Edexcel IGCSE uses Foundation and Higher tiers, with Foundation capped at grade 5 and Higher reaching grade 9. A student aiming for an IB science or Maths HL should plan to sit the higher tier.",
        "The school ordinarily makes the entry decision. A family arranging a transfer, or a private candidate, can use a diagnostic paper to see which tier is realistic. A score near the boundary deserves a conversation with the examination centre before the entry deadline.",
        "Subject choice follows the plan. A student interested in engineering takes Maths, Physics, Chemistry and often Computer Science. A student from a trading family may add Business Studies, Economics and Accounting. A language subject, including Hindi where offered, completes the profile.",
        "Before starting, confirm the exact board and syllabus code so that the tutor prepares for the right paper.",
      ],
    },
  ],

  tutorsIntro:
    "Sadri students are matched by programme, subject, level and exam board. Each tutor teaches from India in IST, and every introduction includes a few lines on why this person suits your child's course.",

  process: [
    { title: "Send the details", description: "Share the programme or board, subject, level, current school and the late-evening hours that work in your Sadri household." },
    { title: "Meet the proposed tutor", description: "We name one tutor and explain which similar students and syllabus they have taught." },
    { title: "Take a free trial lesson", description: "A genuine online class with no payment and no obligation." },
    { title: "Confirm the plan in writing", description: "Lesson count, rate and the first month's topics are set down before you pay." },
    { title: "Continue with check-ins", description: "Regular lessons with short written notes, and a replacement tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "A precise subject match", description: "The tutor is chosen for your child's subject, level and board, and not offered because they happen to be free." },
    { title: "Candour about what Sadri has", description: "We tell you plainly that no local IB or IGCSE school is confirmed, so the plan you make is realistic." },
    { title: "Try before paying", description: "A free first lesson shows how the tutor explains and how your child responds." },
    { title: "Coaching with limits", description: "Tutors help students learn; they never write assessed work." },
    { title: "Visible progress", description: "Written notes after lessons let you follow what was covered." },
    { title: "Easy to change", description: "If the chemistry between tutor and child is not right, we find someone else without argument." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Sadri?", answer: "None that we can confirm. Schools in Sadri follow the Rajasthan Board or CBSE. The nearest confirmed IB and Cambridge schools are in Udaipur, Jodhpur and Ahmedabad. If a school claims otherwise, ask for its authorisation and its list of subjects before relying on it." },
    { question: "Can I get IB home tuition in Sadri?", answer: "You can get online home tuition: a live, private lesson at home taught by a specialist based elsewhere in India. The tutor does not come to Sadri. In-person home tuition runs only in Gurugram and parts of Delhi NCR, and we say so before you book." },
    { question: "Do you have IGCSE tutors for Cambridge and Edexcel in Sadri?", answer: "Yes, for both boards. We match on the syllabus code and tier, such as Cambridge 0580 Maths Extended or Edexcel 4MA1 Higher. Lessons are online and held in IST. Share your child's board, tier and exam session so that we propose the right person." },
    { question: "Will a tutor visit our house in Sadri?", answer: "No. Home visits are limited to Gurugram and parts of Delhi NCR. In Sadri, each class is live and online. The student needs a laptop or tablet, a quiet table and a steady connection, and the tutor follows the written working on a shared board." },
    { question: "How much does IB or IGCSE tuition cost for a Sadri student?", answer: "It depends on level, subject, tutor experience and weekly hours, so we do not print a figure. After the free trial we give you a rate in writing. You can set it beside the cost of travelling to Udaipur each week and decide with the numbers in front of you." },
    { question: "Which schools should a Sadri family look at for IB or IGCSE?", answer: "In Udaipur, Crossroads International School, Rockwoods International School and Seedling The World School. In Jodhpur, Bodhi International School. In Ahmedabad, Calorx Olive International School and Fountainhead School. Contact each to confirm the programmes it currently offers and the seats available." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child attends a real lesson with the proposed tutor online, at no charge and with no commitment. Afterwards you choose whether to continue, and any rate is given in writing before you book." },
    { question: "Can a tutor help with my child's IA, Extended Essay or TOK essay?", answer: "A tutor can guide but not write. They explain the criteria, help narrow a question, review a plan and comment on a draft. The research, data and wording have to be your child's own, and we decline any request to produce assessed work." },
    { question: "Which IB Diploma subjects do you cover for Sadri students?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Hindi, Computer Science, ESS, Geography and Psychology, at Higher and Standard Level. If your combination is unusual, tell us, and we will say honestly whether we can staff it." },
    { question: "Do you teach IB MYP and PYP to children in Sadri?", answer: "Yes. PYP lessons are short and activity-led, built around reading, number sense and speaking in full sentences. MYP lessons deal with criterion-based writing, science investigations and the Personal Project. A parent receives a brief note after every class." },
    { question: "Is online tuition as effective as classes in Udaipur?", answer: "For most subjects, yes, provided the connection holds. Tutor and student solve problems together on a shared board, and the tutor can be chosen for syllabus experience instead of address. For a Sadri family the big difference is the hours saved on the road." },
    { question: "How do you choose tutors for students in the Sadri area?", answer: "We look at subject knowledge, recent teaching of the specific syllabus and the way the person explains. Then we match them to your child's level, school and goals. The trial lesson is the real test, and you can ask for another tutor if it does not feel right." },
    { question: "When should a Sadri student begin IB or IGCSE tuition?", answer: "At the start of the course if possible, which means Grade 9 for IGCSE and Class 11 for the Diploma. A child preparing for admission to a school in Udaipur or Jodhpur can start a term earlier and concentrate on English writing and Maths." },
    { question: "My child studies in the Rajasthan Board. Can we switch to IB or IGCSE?", answer: "A switch needs a seat at a school that teaches the programme, as tutoring alone cannot enrol a student. What a tutor can do is prepare your child for the applied style, fill content gaps and strengthen English writing before the first term." },
    { question: "Can lessons be planned around Paryushan, weddings and the summer heat?", answer: "Yes. Tell us the dates and we plan around them. Most Sadri families prefer late evenings and Sundays, and in the hot months we move to early morning or after dinner. During outages, the tutor and family agree an audio fallback." },
    { question: "What if my child does not get along with the tutor?", answer: "Tell us and we will arrange a new tutor, with no awkwardness. Early check-ins catch a poor fit quickly, and the written plan keeps expectations clear for everyone." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The online model for students in many Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The city where in-person visits are available." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and how tutors are chosen." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards compared." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, core and grading." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How AA and AI differ." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or message to begin." },
    { label: "IB and IGCSE tutoring in Pali", href: "/pali/", description: "The district headquarters, with the same online approach." },
    { label: "IB and IGCSE tutoring in Udaipur", href: "/udaipur/", description: "The nearest city with confirmed international schools." },
    { label: "IB and IGCSE tutoring in Jodhpur", href: "/jodhpur/", description: "Marwar's big city and its school options." },
  ],

  closingHeading: "Arrange a free trial lesson for your Sadri student",
  closingBody:
    "Send the programme or board, the subject and level, and the evening hours that suit your Sadri household. We will propose a tutor, explain the choice and set up a free online trial. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
