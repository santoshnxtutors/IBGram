import type { CitySeoPage } from "../types";

/**
 * Achhnera is a municipal-board town in Agra district (Kiraoli tehsil) on the Agra to Mathura and
 * Bharatpur side. Its page stays distinct from agra.ts by speaking about a commuter town, not the city.
 * No IB or Cambridge school in Achhnera itself could be confirmed, so stripSchools is empty.
 */
export const achhnera: CitySeoPage = {
  slug: "achhnera",
  countryName: "Achhnera",
  countryNameLong: "Achhnera, Uttar Pradesh",
  demonym: "Achhnera",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evenings before winter fog sets in and late evenings in the hot months, with Sunday mornings held back for papers",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 27.1783, longitude: 77.7625 },
  wikipedia: "https://en.wikipedia.org/wiki/Achhnera",
  alternateNames: ["Achnera", "Achhnera Agra", "Achhnera Junction", "Achhnera Kiraoli"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Achhnera | Online Home Tuition",
  metaDescription:
    "Live online IB and IGCSE tuition for Achhnera students near Agra: one-to-one lessons from home, tutors matched to the syllabus, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Achhnera",
  heroEyebrow: "IB & IGCSE TUITION FOR ACHHNERA, AGRA DISTRICT",
  heroSubtitle:
    "If you want home tuition for an IB or IGCSE student in Achhnera, it comes online, one to one. IB Gram tutors do not enter houses in Uttar Pradesh; house calls happen solely in Gurugram and parts of Delhi NCR. The class is still private, built around your child's exact papers. This page is about the town on the Agra-Jaipur road, not Agra city, and about the realities of a commuter town where the nearest international campus is a drive away.",
  primaryKeyword: "IB and IGCSE tutors in Achhnera",
  imageAltText: "Achhnera student revising IB Economics with a live online tutor at a desk at home",
  secondaryKeywords: [
    "IB tutor in Achhnera",
    "IGCSE tutor in Achhnera",
    "IB home tuition Achhnera",
    "IGCSE home tuition Achhnera",
    "IB private tuition Achhnera",
    "IB Maths tutor Achhnera",
    "IGCSE Maths tutor Achhnera",
    "IB Physics tutor Achhnera",
    "IB Chemistry tutor Achhnera",
    "IB Biology tutor Achhnera",
    "IB DP tutor Achhnera",
    "IB MYP tutor Achhnera",
    "IB PYP tutor Achhnera",
    "IGCSE online tuition Achhnera",
    "IB tutor Achnera",
    "IGCSE tutor Kiraoli",
    "IB online classes Agra district",
    "IB tuition near Agra",
  ],

  heroTrustPoints: [
    "Each class is live and for one student, with no recordings and no big batches",
    "Teachers who have worked on IB DP, MYP and PYP and on Cambridge or Edexcel IGCSE",
    "Timings that respect the Agra commute, winter fog and summer power cuts",
    "A first lesson at no cost and written notes after every session",
    "Free replacement if the first tutor does not suit",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "A town between Agra, Mathura and Bharatpur",
    paragraphs: [
      "Achhnera is a small municipal town in Kiraoli tehsil of Agra district, on the road and rail line that join Agra to Jaipur, with Mathura and Bharatpur an easy hop in the other directions. Employment inside the town is limited and many residents commute to those three places for work. Children mostly study in UP Board or CBSE schools, and parents have Dayalbagh, Agra's university colleges and Delhi in mind. Winters are cold, with nights close to freezing, and summers can touch forty-five degrees or more.",
      "A small number of households want the IB or a Cambridge or Edexcel IGCSE for their children. Some are linked to Agra's tourism, hospitality and footwear businesses and have clients abroad. Others have relatives in the Gulf, the UK or North America, or work in banking, railways or the armed forces and expect transfers. Agra city has one confirmed Cambridge-linked school, while the full IB campuses are in Gurugram, hours away by road. Achhnera itself has no international-curriculum school we could confirm.",
      "In practice, then, lessons are online. A teacher who knows the precise papers joins by video, teaches one student live, and writes up the session afterwards. No tutor visits Achhnera homes. IB Gram is unconnected with the IB, Cambridge, Pearson or any school, and its tutors never write assessments, essays or coursework on a student's behalf.",
    ],
  },

  programmesIntro:
    "In a commuter town the IB programmes tend to arrive late and out of order. Tutoring is adjusted to wherever the child is in the sequence.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Concept-based learning in themed units, closing with a student-led Exhibition. For young children a tutor mostly gives gentle reading time and number games in a calm setting.",
      countryNote:
        "A child here usually speaks Hindi or Braj at home. Ten or fifteen minutes of unhurried English talk in each session pays off over a term.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subjects marked against published criteria and a Personal Project at the end. A tutor shows how to read a task closely and shape an answer toward each band.",
      countryNote:
        "Coming from UP Board or CBSE textbooks, a pupil must learn that MYP credits reasoning, not just recall; weekly practice early on smooths that shift.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects alongside Theory of Knowledge, the Extended Essay and CAS. The tutor drills for the written papers and explains how coursework is judged, leaving the production of it to the student.",
      countryNote:
        "Diploma students based near Agra seldom find a Higher Level teacher locally, so an online specialist often supplies the toughest topics.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of Diploma courses with a vocational study and a reflective project. Support goes to the Diploma courses and to academic English.",
      countryNote:
        "CP is almost absent from this part of Uttar Pradesh. Each request is handled individually, matching a tutor to the courses selected.",
    },
  ],

  subjectsIntro:
    "We choose by course and level, and favour tutors used to students crossing over from Hindi-medium schools or the UP Board.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "The calculus-and-algebra course: differentiation, integration, vectors and rigorous reasoning, with a quick no-calculator drill at the start of each class." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "The data-driven course: distributions, regression, financial and geometric modelling, and explaining a result in words as well as numbers." },
    { name: "Physics", levels: "SL / HL", description: "Kinematics, thermal physics, waves, circuits and fields, plus error analysis and the format of a lab report." },
    { name: "Chemistry", levels: "SL / HL", description: "Mole calculations, enthalpy, kinetics, equilibria and organic mechanisms, with attention to unit slips." },
    { name: "Biology", levels: "SL / HL", description: "Cell and molecular biology, genetics, physiology and ecology, learned with the precise wording mark schemes reward." },
    { name: "Economics", levels: "SL / HL", description: "Markets, intervention, trade and development, argued with Agra's leather, tourism and handicraft trades as live cases." },
    { name: "Business Management", levels: "SL / HL", description: "Reading a case, working with finance ratios and picking the right tool for an unfamiliar company, a natural fit for trading families." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithmic thinking, data structures and exam pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Landmark experiments, how to evaluate them and how to build a high-scoring essay." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Reading unseen passages closely, writing comparisons and rehearsing the individual oral." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literary study for native Hindi speakers, or structured spoken and written Hindi for those in Hindi B." },
    { name: "History", levels: "SL / HL", description: "Evaluating sources and planning essays, with Mughal Agra a handy living example for students who pick South Asian topics." },
    { name: "Theory of Knowledge", levels: "Core", description: "Practising arguments about how we know things and planning the exhibition, with the student writing every word." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are both taught here. The Core or Extended entry is chosen early, because it fixes the highest grade that can be earned.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, plus a frank talk about which tier suits the pupil." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "An early look at calculus and functions for pupils expecting to continue to IB Mathematics AA." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Motion, circuits, waves and heat, along with the planning questions in the practical paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Atoms, the mole, the reactivity series and organic families, with ion tests committed to memory." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, enzymes, inheritance and ecosystems, with practice describing an investigation in exam language." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Designing and tracing algorithms, number systems and databases." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking tasks, pitched for pupils whose home language is Hindi." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Comprehension passages, letters and short compositions in the style the syllabus asks for." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Key vocabulary, calculations and short case questions." },
  ],

  regionsTitle: "Achhnera and the places around it that we teach",
  regionsIntro:
    "Because every lesson is online, location matters for signal, the school bus and the winter fog rather than for a tutor's travel. Here is how we read the area.",
  regions: [
    { name: "Achhnera town", note: "The municipal centre on the Agra-Jaipur road, with the main private schools and coaching shops; broadband and mobile data suit video lessons." },
    { name: "Achhnera Junction side", note: "Railway-linked households near the station, used to the timetable and to transfers, who often value a portable syllabus." },
    { name: "Kiraoli", note: "The tehsil headquarters a short distance away, with its own schools and a market that serves surrounding villages." },
    { name: "Sikandra and the Mathura Road belt", note: "Agra's northern side, where several schools and the Akbar's Tomb district create a busy morning commute." },
    { name: "Runkata and Raja ki Mandi", note: "Rail and market areas of Agra frequently used by families who work there and live in Achhnera." },
    { name: "Fatehabad Road and Shastripuram, Agra", note: "The part of Agra with a Cambridge-linked school, an option for Achhnera families open to a daily or weekly trip." },
    { name: "Fatehpur Sikri", note: "A historic town west of Agra whose students share the same online timetable as Achhnera." },
    { name: "Mathura and Vrindavan", note: "Nearby Braj towns with an active school scene, reached by road or rail from Achhnera." },
    { name: "Bharatpur, Rajasthan", note: "Just across the state line, with its bird sanctuary and a similar mix of farming, trading and service families." },
  ],

  schoolClusters: [
    {
      city: "Achhnera and Agra district",
      note: "We found no IB or Cambridge school inside Achhnera that we could confirm, so local choice is thin. Agra city has one Cambridge-linked school, listed below, and most students rely on an online school or private IGCSE entry.",
      schools: [],
    },
    {
      city: "Nearby: Fatehabad Road, Agra",
      note: "The one confirmed Cambridge-linked campus in Agra sits on the Fatehabad side of the city; Achhnera families would face a long daily trip, so some weigh a local stay.",
      schools: ["Sharda World School"],
    },
    {
      city: "Nearby: Gurugram (boarding)",
      note: "The full IB continuum is found in Gurugram, three to four hours from Agra by road. For Achhnera that means boarding or relocation, never a daily commute.",
      schools: ["Pathways World School, Aravali", "GD Goenka World School"],
    },
  ],
  schoolDisclaimer:
    "Sharda World School, Pathways World School and GD Goenka World School have no connection with IB Gram. They appear because each is open about teaching an international programme, and that is all. We are not advising anyone to apply; admissions and curricula are matters for the school.",

  tutorsIntro:
    "Our tutors live across India and teach on Indian time. An Achhnera student does not have to settle for whoever lives in Agra district; the match is made on subject depth and teaching style.",

  modesIntro:
    "In Achhnera the format is online. Families tend to use it in one of three ways.",
  modes: [
    {
      title: "Private online lesson at home",
      description: "A single tutor and a single pupil, linked by video and a shared board, from the family's own room.",
      bullets: [
        "House visits are limited to Gurugram and parts of Delhi NCR, so lessons here are by screen only",
        "The equipment is modest: laptop, exercise book, headphones",
        "Handwritten solutions are held up to the camera and discussed",
        "A short summary lands in the parent's inbox after each class",
      ],
    },
    {
      title: "Exam-season push",
      description: "Tighter scheduling in the weeks leading to the May or November papers.",
      bullets: [
        "Several lessons per week over about four weeks",
        "Real past papers marked line by line against the official scheme",
        "Topics the mock exposed get fixed first",
        "A proper rest before the first paper",
      ],
    },
    {
      title: "Standing weekly session",
      description: "A fixed weekly slot in one subject with a constant tutor.",
      bullets: [
        "Keeps the course from outrunning the student",
        "Well suited to MYP and the first Diploma year",
        "Moves around Holi, Janmashtami and school tests",
        "Begins with the free trial class",
      ],
    },
  ],

  sections: [
    {
      heading: "How does an Achhnera family reach an international syllabus?",
      paragraphs: [
        "Four routes are realistic from a commuter town. The first is an online international school, with lessons streamed to the child. The second is a day or boarding place at a campus, whether in Agra or further away in Gurugram. The third is relocation, which families sometimes consider when a job moves them. The fourth is entering IGCSE papers as a private candidate at an approved centre.",
        "Every route leaves a different job for the tutor. Online-school pupils get lessons but may lack a weekly check that they have truly understood. Boarders on holiday need a shaky unit repaired. Families relocating want the pace matched before term begins. Private candidates have no class teacher, so the tutor in effect keeps the syllabus calendar.",
        "We do not rank the routes. Age, comfort in English and plans for university tip the balance, and we will happily say what each would ask of a tutor.",
        "If you cannot decide, book a single trial in your child's hardest subject. It tells you more than a prospectus will. After an hour, an experienced teacher can say how wide the gap is between where the student stands and where the course needs them.",
      ],
    },
    {
      heading: "UP Board, CBSE, IB or IGCSE: what actually differs?",
      paragraphs: [
        "Most Achhnera children sit UP Board or CBSE papers at Class 10 and 12 and then look at Agra's universities, JEE Main, NEET-UG or CUET-UG. Those routes reward recall and quickness. The IB and IGCSE reward explanation, data handling and longer answers in English, which is a real change of habit.",
        "A student switching rarely lacks content. What is missing is familiarity with command words and mark-scheme logic, and a short run of targeted lessons usually closes that gap.",
      ],
      table: {
        caption: "Four systems from an Agra district viewpoint",
        columns: ["System", "How the final result is formed", "Teaching language", "Typical next step"],
        rows: [
          ["UP Board (Class 10 and 12)", "Written annual papers set by the state board", "Hindi or English", "Agra's universities, JEE Main, NEET-UG, CUET-UG"],
          ["CBSE", "Board exams combined with marks from the school", "English or Hindi", "JEE Main, NEET-UG, CUET-UG"],
          ["IB Diploma", "Coursework tasks and end-of-programme exams in six subjects", "English", "Degrees abroad, private Indian universities, or CUET-UG after equivalence"],
          ["Cambridge or Edexcel IGCSE", "Sat at Core or Extended level", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "What goes into the cost of IB and IGCSE tuition around Agra?",
      paragraphs: [
        "Fees for IB and IGCSE tuition in Achhnera are shaped by the subject, the level, how seasoned the tutor is and how many sessions you want each week. You receive a written quote before agreeing. No fixed rate card exists, because Class 6 reading and Higher Level Physics are not the same job.",
        "Because lessons are online, nobody pays for a tutor's journey and the pool of teachers is far larger. Where the nearest equal specialist could be in Gurugram or Delhi, choosing purely on subject strength is the real gain.",
        "Spend where it counts. A weekly slot in the first term of a new programme builds routines; extra sessions after the mocks patch what they exposed; a short final burst before the real papers consolidates it all. Many households begin with Mathematics alone and bring a science in a month later.",
      ],
      bullets: [
        "A Higher Level Mathematics or science teacher usually charges more than one for a junior language class",
        "Primary, middle years, Diploma and IGCSE tutoring each come from separate pools of teachers",
        "Steady weekly lessons across a year usually cost less than last-minute cramming",
        "Booking late shrinks the field of available teachers",
        "A longer commitment makes timetabling easier",
      ],
    },
    {
      heading: "Coaching shop, online tutor or self-study in Achhnera?",
      paragraphs: [
        "Three choices recur in Achhnera homes. The coaching shop in town or in Agra suits board exams and entrance tests but seldom knows IB or IGCSE papers. Free videos explain content yet cannot say why one answer scores and another does not. A private tutor online knows the papers and marks the work, and asks in return for a quiet corner and a dependable connection.",
        "Note the weak spot of screen teaching in the last column: it cannot give a student hands-on experience with laboratory equipment.",
      ],
      table: {
        caption: "How an Achhnera student can approach IB or IGCSE study",
        columns: ["Option", "Upside", "Downside", "Fits"],
        rows: [
          ["Private tutor on screen", "Exact syllabus and marked practice", "Needs steady signal; no hands-on lab", "Most IB and IGCSE students"],
          ["Coaching shop in town or Agra", "Classmates and a set timetable", "Built for board and entrance exams, plus a commute", "Students also sitting UP Board or CBSE papers"],
          ["Self-study with videos", "Cheap and flexible", "Nobody marks the work", "Revising topics already understood"],
          ["Campus in Agra or Gurugram", "Labs, teachers and peers on site", "Cost and separation from home", "Families who want the full school experience"],
        ],
      },
    },
    {
      heading: "Fog, summer heat and Braj festivals: the study calendar",
      paragraphs: [
        "The climate here swings hard. Summer afternoons reach forty-five degrees or beyond, so May exam preparation is best done early morning or late evening. Winter nights fall to one or two degrees, and from December to January dense fog slows buses and trains and sometimes shortens the school week. Online lessons can continue when a road cannot, which is a quiet advantage in January.",
        "The calendar here is full of Braj-region festivals. Holi, celebrated vigorously in nearby Mathura and Vrindavan, Janmashtami in August or September, and Govardhan Puja just after Diwali all draw families together. Diwali, Dussehra and Durga Puja arrive near the November exam sessions, so heavy revision is moved earlier and festival weeks are kept light.",
        "Tourism shapes some households. Agra's busy season runs from October to March, and parents in hotels, shops and guide work may be stretched in those months. We keep lessons flexible so that the child's schedule does not collapse when the family's work peaks.",
      ],
      table: {
        caption: "A study year in Achhnera",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["January to March", "Fog and cold early on, Holi, school exams", "Steady topic work, online when roads are bad"],
          ["April to June", "Rising heat, May sessions", "Early or late lessons, timed past papers"],
          ["July to September", "Monsoon, Janmashtami, new term", "Settle new subjects, assessment planning"],
          ["October to December", "Dussehra, Diwali, tourist season, November sessions", "Mocks early, light festival weeks"],
        ],
      },
    },
    {
      heading: "Universities and careers open to Achhnera students",
      paragraphs: [
        "After an international syllabus, three broad directions open: degrees overseas, private universities in India, and central or state institutions entered through national tests.",
        "Planning to study in India? Two things usually matter. One is an equivalence letter from the Association of Indian Universities, which covers the Diploma and the IGCSE-then-A-Level route. The other is a CUET-UG score when the target is a central university. JEE and NEET alter their subject conditions from year to year, so open the current notification before dropping Chemistry, Biology or Mathematics.",
        "Agra has Dr. B. R. Ambedkar University and the Dayalbagh Educational Institute, Aligarh Muslim University lies a short way north-east, and Delhi's colleges are a long day's journey away. Students aiming overseas look mostly at the United Kingdom, Canada, the United States, Australia and Singapore, where entrance-test preparation is a separate service from ours.",
        "Pick subjects by starting from the degree and working backwards. A single chat before the school's selection deadline normally settles it.",
      ],
    },
    {
      heading: "How online teaching handles IB Mathematics and the sciences",
      paragraphs: [
        "Students choose between two IB Mathematics courses before they start. Analysis and Approaches asks for confident algebra and calculus, which is why it attracts would-be engineers and physicists. Applications and Interpretation leans on statistics and real-world modelling, and economics or psychology candidates often prefer it. Our job is to help you decide honestly, not to nudge anyone towards the harder paper.",
        "On a shared board the tutor watches each line appear, so a dropped minus sign is caught within seconds instead of at the foot of the page. For the paper without a calculator we use short, repeated drills. For the paper with one, we teach students to lay out working so partial credit is never thrown away, and to know their device thoroughly.",
        "Science marks leak away in unglamorous places. A graph is read off the wrong scale. A numerical answer loses its unit. An explanation names the cause and forgets to link it to the effect. We attack those habits with genuine past questions, one at a time. An experiment can be talked through on a call, yet nothing replaces practical time in a real lab.",
        "Work starts with single topics, widens to mixed question sets and ends with full timed papers in the last term. That order lets pace grow out of understanding.",
      ],
    },
    {
      heading: "Core, Extended and subject choice in IGCSE",
      paragraphs: [
        "Some IGCSE subjects let a candidate choose between Core papers and Extended papers. The ceiling on Core sits below the best grades; Extended removes it. If IB Mathematics AA or A Level sciences are on the horizon, begin in Extended.",
        "The two boards use different syllabus numbers, and the correct past papers hang on them: Cambridge Biology is 0610, Edexcel Biology is 4BI1. Paste the number from your child's subject list into your first message.",
        "Choose subjects so that doors stay open. A science the child enjoys, a mathematics tier that stretches but does not overwhelm, and a language spoken at home make a sound base. English is assumed; Hindi comes naturally beside it.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Write on WhatsApp to +91 7439 368 115 with the board, programme, subject and exam sitting, mentioning Achhnera." },
    { title: "Get matched", description: "We reply with a tutor who has handled those papers and has evenings free." },
    { title: "Take the free class", description: "The trial lesson is free and works on whatever is troubling the student." },
    { title: "Confirm the terms", description: "Subject, timetable and fee are written out before any payment." },
    { title: "Review and adjust", description: "Notes follow every class; changing tutor or timing is a simple request." },
  ],

  whyPoints: [
    { title: "Candid on format", description: "Screen-based lessons in Achhnera and no suggestion of a house visit." },
    { title: "Chosen for your papers", description: "We select by course, level and board, not by a vague subject title." },
    { title: "Reports after each class", description: "Parents read what was taught and what follows." },
    { title: "Built for fog and heat", description: "Timetables flex for winter fog, summer heat and power cuts." },
    { title: "Coaching only", description: "No tutor drafts an assessment, essay or piece of coursework." },
    { title: "Easy exit from a poor match", description: "A mismatched tutor is swapped without any fee." },
  ],

  faqs: [
    { question: "Does a tutor visit the house in Achhnera?", answer: "No. Teachers travel to students' houses only in Gurugram and some parts of Delhi NCR. In Achhnera the class arrives through the screen: a live, private session on a shared writing board, with a written account of what was covered once it ends." },
    { question: "What are the fees for IB or IGCSE tutors here?", answer: "They depend on the subject, level, tutor experience and weekly sessions, and you receive a quotation in writing first. No fixed rate card is kept. The first lesson is free, so you can judge the quality of teaching before any money is spent." },
    { question: "Are there IB or Cambridge schools in Achhnera?", answer: "None that we could verify in the town. Agra city has one Cambridge-linked school, Sharda World School, and full IB campuses are in Gurugram, hours away. Many local students therefore use online schools or study privately. Check any school's claims with the school." },
    { question: "Can my child take IGCSE exams privately from Agra district?", answer: "Often yes. An approved Cambridge or Edexcel centre has to accept the entry, science practicals need a plan, and registration deadlines are fixed. We do not run examinations; we prepare the student to sit them." },
    { question: "When do students in Achhnera usually study?", answer: "Early evening in winter, before the fog thickens, and late evening or dawn in the hot months. Sundays suit long practice papers. We shift lessons around Holi, Janmashtami, Diwali and the school's own tests." },
    { question: "Can a tutor write my child's IA or Extended Essay?", answer: "No. A teacher offering to do it would be putting your child's diploma at risk. What is allowed is explaining the marking criteria, discussing what a strong investigation looks like and pointing out where an argument is thin. The student must produce every sentence, measurement and conclusion." },
    { question: "How fast must the internet be?", answer: "Modest speed is enough. A handful of megabits a second handles video and a shared board, via broadband or a phone hotspot. During summer power cuts keep a charged laptop and a backup SIM ready." },
    { question: "Is the first lesson truly free?", answer: "Yes. It is real teaching on a topic that is currently bothering your child, followed by written feedback, with no obligation to continue. Should the two not get along, another tutor is offered before any payment is requested." },
    { question: "Which IB and IGCSE stages do you cover?", answer: "All of them: PYP, MYP, the Diploma and both IGCSE boards. Younger pupils are helped with reading and numbers, MYP pupils with decoding criteria, and Diploma pupils with subject depth. A good tutor can remain with the same child as the stages change." },
    { question: "How do we choose between IB Maths AA and AI?", answer: "Look at where the degree leads. Engineering and physics call for the calculus course, Analysis and Approaches. Economics, psychology and business lean on the statistics course, Applications and Interpretation. Either can be studied at Standard or Higher Level, and a taster in each makes the decision easier." },
    { question: "Does an IB route close the door on JEE or NEET?", answer: "That depends on the subjects taken and on conditions published each year, including whether the IB or the IGCSE-plus-A-Level combination is accepted. Official bulletins decide those points. Our contribution is the teaching of Physics, Chemistry, Biology and Mathematics." },
    { question: "Which examining boards do you work with?", answer: "Both Cambridge International and Pearson Edexcel. Each course carries a number: for Physics it is 0625 at Cambridge and 4PH1 at Edexcel. Quote yours and the tutor we suggest will have taught those very papers." },
    { question: "How early should we book for the November session?", answer: "By August, ideally. Dussehra and Diwali fall just before November, so those weeks are kept light and heavy past-paper work moves into September, when there is less on the family calendar." },
    { question: "Can students in Kiraoli, Mathura or Bharatpur use the same service?", answer: "They can. A laptop and a stable link are the only requirements. A pupil in Kiraoli, Mathura, Vrindavan or Bharatpur has the same private live class, set at times that suit that household's travel and school day." },
    { question: "How do we begin?", answer: "Contact us through WhatsApp (+91 7439 368 115) or email (support@ibgram.com) with four details: the class, the hardest subject, the school or online school, and Achhnera as your town. In about a day you should hear back with a proposed tutor and a time for the free lesson." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Agra", href: "/agra/", description: "The city page for Agra itself, a short ride away." },
    { label: "IB and IGCSE tutors in Mathura", href: "/mathura/", description: "The Braj town on the other side of Achhnera." },
    { label: "IB and IGCSE tutors in Bharatpur", href: "/bharatpur/", description: "The Rajasthan neighbour across the state line." },
    { label: "IB and IGCSE tutors in Fatehpur Sikri", href: "/fatehpur-sikri/", description: "The historic town west of Agra." },
    { label: "IB tutors across India", href: "/india/", description: "The all-India overview of our live IB and IGCSE lessons." },
    { label: "IB and IGCSE tutors in Gurugram", href: "/gurgaon/", description: "Where home visits run and the full IB campuses sit." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Support for each IGCSE subject and board." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Subject-by-subject Diploma support, including TOK." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse tutors by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Send a question or reserve the free first lesson." },
  ],

  closingHeading: "Book a free lesson from Achhnera",
  closingBody:
    "Tell us the class, the subject and the target sitting. We will propose a tutor and set up the free first class. Reach us on WhatsApp at +91 7439 368 115 or by email at support@ibgram.com.",
};
