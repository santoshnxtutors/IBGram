import type { CitySeoPage } from "../types";

/**
 * /kath/ - IB and IGCSE tutoring for Kathua, Jammu and Kashmir. The plan slug "kath" is a truncated
 * name from the source PDF; the state is Jammu and Kashmir at rank 596, and the only matching town
 * of that size is Kathua (district headquarters, 2011 census 59,866, on NH44, 88 km south of
 * Jammu), so the copy uses "Kathua". Online only: no in-person visits. No IB or Cambridge/Edexcel
 * school is confirmed in Kathua, so stripSchools is empty and clusters use Amritsar and
 * Chandigarh/Mohali names already on the Jammu and Pathankot pages.
 */
export const kath: CitySeoPage = {
  slug: "kath",
  countryName: "Kathua",
  countryNameLong: "Kathua, Jammu and Kashmir",
  demonym: "Kathua",
  state: "Jammu and Kashmir",
  stateCode: "IN-JK",
  flagCode: "in",
  countryCode: "IN",
  region: "Jammu and Kashmir, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Class hours shift with the July-August downpours, the near-freezing January dawns, Lohri and Navratri, and the exam series that the pupil's school or exam centre has fixed",
  lastUpdated: "2026-09-21",
  geo: { latitude: 32.3855, longitude: 75.5170 },
  wikipedia: "https://en.wikipedia.org/wiki/Kathua",
  alternateNames: ["Kathua Jammu", "Kathua J&K", "Kathua town"],
  stripSchools: [],

  title: "Kathua IB & IGCSE Tutors | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Kathua, Jammu and Kashmir: live one-to-one PYP, MYP, DP, Cambridge and Edexcel teaching from home, online, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition for Kathua Students, Online",
  heroEyebrow: "PRIVATE IB AND IGCSE TUITION FOR KATHUA, DELIVERED ONLINE",
  heroSubtitle:
    "A parent in Kathua who searches for IB or IGCSE home tuition is really asking for a specialist teaching their child alone, at a fixed hour, and in this part of Jammu division that means a live video lesson at the family's own desk. The tutor is based elsewhere in India, keeps to the same clock and does not travel to Kathua. The town is the gateway to the Jammu region on the national highway from Punjab, its schools follow the JKBOSE or CBSE, and international courses come up when a child is placed at a school in Chandigarh, Amritsar or Delhi NCR, when a service posting looms, or when a degree abroad is the goal.",
  primaryKeyword: "IB and IGCSE tutors in Kathua",
  imageAltText: "A Kathua student with a laptop and notebook taking a live IB Chemistry lesson on a cold winter evening",
  secondaryKeywords: [
    "IB tutor Kathua",
    "IGCSE tutor Kathua",
    "IB home tuition Kathua",
    "IGCSE home tuition Kathua",
    "IB private tuition Kathua",
    "IB Maths tutor Kathua",
    "IGCSE Maths tutor Kathua",
    "IB Physics tutor Kathua",
    "IB Chemistry tutor Kathua",
    "IB Biology tutor Kathua",
    "IB DP tutor Kathua",
    "IB MYP tutor Kathua",
    "IB PYP tutor Kathua",
    "IGCSE online tuition Kathua",
    "IB tutor Kathua Jammu and Kashmir",
    "IGCSE tutor Kathua J&K",
    "IB tutor Jammu division",
    "online IB tuition Kathua",
    "IB Economics tutor Kathua",
  ],

  heroTrustPoints: [
    "Teachers are chosen by the course code, tier and sitting that your child is really working towards",
    "House calls belong to Gurugram and some Delhi NCR districts alone, so Kathua classes take place on screen",
    "A trial lesson costs nothing, and after each class you get a few written lines on it",
    "Fees are sent in writing before you commit, and another tutor is available if the first is not right",
    "IB Gram has no connection to the schools, boards or universities that appear on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "plus CP support" },
    { value: "Cambridge and Edexcel", label: "both IGCSE boards" },
    { value: "IST", label: "one clock for tutor and student" },
    { value: "Free trial", label: "no strings attached" },
  ],

  intro: {
    heading: "International courses for the last plains town before the Jammu hills",
    paragraphs: [
      "Kathua is a district seat roughly 88 km below Jammu city along NH44, with the Ravi and the Ujh flowing close by and about sixty thousand residents at the 2011 census. Dogri is spoken at home, Hindi and Urdu fill official life, and the local economy includes textile and cement plants. Schools use JKBOSE or CBSE papers. Our checks turned up no Kathua school teaching the IB or a Cambridge or Edexcel IGCSE, so none is suggested here.",
      "The families who raise the subject are few but specific. Some have a child at a boarding school in Chandigarh, Amritsar or Delhi NCR. Some belong to service, police, army-linked or government households that move often, and a child's syllabus should not break at every posting. Others want to add one IGCSE subject to a JKBOSE or CBSE timetable. A tutor in Kolkata or Bengaluru reaches all of them equally well through a screen.",
      "What we sell is teaching. Tutors go through concepts, assign questions, correct them and show what an examiner looks for, whereas Internal Assessments, Extended Essays, Theory of Knowledge essays and coursework belong entirely to the student. IB Gram is its own organisation and answers to none of the IB, Cambridge, Pearson or any school.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP tutoring, subject by subject",
      "Cambridge and Pearson Edexcel IGCSE across all tiers",
      "Private live classes timed to IST",
      "An unpaid first lesson, written notes and the freedom to swap tutors",
      "In Kathua every class is on screen, because home visits are a Gurugram and Delhi NCR arrangement only",
    ],
  },

  programmesIntro:
    "We cannot verify any Kathua school delivering an IB programme. The notes below set out how a family from this town ends up meeting each one.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3 to 11 (early years to Class 5)",
      description:
        "Learning is built around themed inquiry and ends with a pupil Exhibition instead of an exam. Private help stays light and conversational, with reading, mental maths and explaining an idea aloud.",
      countryNote:
        "A Kathua family raises PYP when a posting to a city school is coming, and a young child needs a first taste of inquiry-style classes.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11 to 16 (Class 6 to 10)",
      description:
        "Eight subject groups are graded against published criteria, with a Personal Project at the close. Students who know the content still lose marks by not answering the criterion, which tutors rehearse.",
      countryNote:
        "For a Kathua child, MYP coaching typically accompanies a seat at a school in a different city, or readies them for a move during the year.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16 to 19 (Class 11 and 12)",
      description:
        "Candidates study six subjects and complete Theory of Knowledge, a 4,000-word Extended Essay and CAS. May is the principal exam month, and coursework-style assessment threads through most subjects.",
      countryNote:
        "Diploma students linked to Kathua almost always study at a school in another city, so the tutor works to that school's calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16 to 19 (Class 11 and 12)",
      description:
        "A pair or more of Diploma courses runs alongside vocational study and a reflective project. Indian schools seldom offer it, though the Diploma courses within are marked at full standard.",
      countryNote:
        "CP is an unusual question from Kathua, and sessions then focus on the academic subjects involved.",
    },
  ],

  subjectsIntro:
    "A plan starts from the exact course and level, since Physics HL and Geography SL are very different jobs. For a student whose school is outside Jammu and Kashmir, that school's exam session decides the order of the work.",
  subjects: [
    { name: "IB Maths Analysis and Approaches", levels: "HL / SL", description: "Functions, calculus and proof; JKBOSE and CBSE students are quick at algebra but need practice writing out reasons." },
    { name: "IB Maths Applications and Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator work for commerce and social science routes." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields; hydroelectric and river-flow examples from the region make good context." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles, equilibrium and organic mechanisms, reinforced with weekly problem sheets." },
    { name: "IB Biology", levels: "HL / SL", description: "Ecology, physiology and genetics, with foothill habitats offering local examples." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "River systems, monsoon flooding and land change on the Ravi and Ujh plain." },
    { name: "IB Geography", levels: "HL / SL", description: "Rivers, hazards and development with named, data-backed case studies." },
    { name: "IB Economics", levels: "HL / SL", description: "Regional trade along the highway, pilgrim tourism and small industry as ready examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case analysis and a research project on real local firms." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essays, with Dogra-era and Partition material close to home." },
    { name: "IB English A Language and Literature", levels: "HL / SL", description: "Commentary and essay technique for students who speak Dogri, Hindi or Punjabi at home." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Precise writing and fluent speaking." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a documented programming project." },
    { name: "Theory of Knowledge", levels: "DP Core", description: "Discussion-based coaching for the exhibition and the essay." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Edexcel use different course codes, tiers and exam months, so a plan starts with those details. Most Kathua entrants are private candidates, or continue a syllabus that a school in another city began.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Clear working and careful reading of command words, practised on past papers." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry early, a good bridge to IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "A different question style from Cambridge, so drills use Edexcel papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling, circuits and practical-skills questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole work, rates and qualitative analysis." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Terminology, labelled diagrams and experiment design." },
    { name: "IGCSE Geography 0460", levels: "Grade 10", description: "River and hazard case studies, map skills and the decision-making paper." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Listening, reading and writing for students whose home language is Dogri or Hindi." },
    { name: "IGCSE Economics 0455", levels: "Grade 10", description: "Definitions, diagrams and data-response answers." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 10", description: "Accurate writing and spoken confidence." },
  ],

  regionsTitle: "Kathua neighbourhoods and nearby places our online tutors teach",
  regionsIntro:
    "For an online lesson a neighbourhood affects only timing: school end, power, and the weather that changes quickly between seasons here.",
  regions: [
    { name: "Kathua town centre", note: "The market and administrative core, where teaching, government and trading families live; evenings work best." },
    { name: "Kathua railway station area", note: "Close to the rail and highway links that carry families between Jammu and Punjab." },
    { name: "Nagri and Gandhi Nagar side", note: "Residential pockets with service and business households interested in portable qualifications." },
    { name: "Bus stand and highway belt", note: "A busy corridor along NH44, where traffic noise makes a quiet study corner worth planning." },
    { name: "Hiranagar direction", note: "The sub-division town towards the border, where students often combine local schooling with online specialists." },
    { name: "Lakhanpur side", note: "The entry point from Punjab, with families who have ties on both sides of the state line." },
    { name: "Billawar and Basohli direction", note: "Hill-edge belts known for Basohli painting, where winter and monsoon can affect roads." },
    { name: "Barnoti and Marheen belt", note: "Rural stretches where signal strength matters more than distance." },
    { name: "Army and police quarters", note: "Service households used to postings and keen on continuity for a child's syllabus." },
  ],

  schoolDisclaimer:
    "Every school below appears solely to map out where an international syllabus is within reach of Kathua. IB Gram has no deal with any of them and is independent of the IB, Cambridge and Pearson. Admissions and exam registration should be confirmed with the school or awarding body directly.",
  schoolClusters: [
    {
      city: "Inside Kathua",
      note: "No IB or IGCSE school in Kathua could be confirmed. Local schools are JKBOSE or CBSE, which means an international course requires leaving the district or learning privately on screen.",
      schools: [],
    },
    {
      city: "Nearby: Amritsar",
      note: "The Punjab city most families in Jammu division can reach by road or rail, with international-curriculum options.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "A longer journey, but the main regional cluster of international schools for northern families.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Sector 26"],
    },
    {
      city: "Nearby: Jammu and Pathankot",
      note: "Both lie within easy reach, but our own pages for them explain that no IB or IGCSE school was confirmed in either, so they help only with CBSE and JKBOSE choices.",
      schools: [],
    },
  ],

  modesIntro:
    "Lessons for Kathua are live, private and held over video. Pick from a weekly slot, a burst before exams, or a brief bridging course. No tutor rings the doorbell, as home visits are reserved for Gurugram and part of Delhi NCR.",
  modes: [
    {
      title: "Weekly private online classes",
      description: "Evening classes once or twice weekly with the same teacher, work corrected between sessions and a summary for parents.",
      bullets: ["One tutor throughout", "Homework marked", "Written note after each class"],
    },
    {
      title: "Pre-exam burst",
      description: "Timed papers and mark-scheme walkthroughs in the weeks before a May or November sitting.",
      bullets: ["Timed papers", "Lost-marks review", "Final-week plan"],
    },
    {
      title: "Bridge for a school move",
      description: "A compact course for a child heading into an IB or IGCSE classroom after JKBOSE or CBSE schooling.",
      bullets: ["Skills check in week one", "Command-word drills", "Notes for new teachers"],
    },
  ],

  sections: [
    {
      heading: "How do Kathua families actually reach an IB or IGCSE education?",
      paragraphs: [
        "With no confirmed school in town teaching either curriculum, Kathua families pick from three routes. The first is boarding or a day school in Chandigarh, Amritsar or Delhi NCR, the fullest route and the most expensive. The second is relocation, which postings make common. The third is studying selected IGCSE subjects privately while staying in a JKBOSE or CBSE school.",
        "Boarding asks a child to leave home at 11 to 16 and needs a family that has visited and questioned schools closely. Relocation brings a whole new environment at short notice. Private study is the lightest route, though the family must find an exam centre, often in Jammu, Pathankot or farther.",
        "Jammu division's position on the route to Punjab helps. Amritsar and Chandigarh are within a day's travel, and many families already know those cities through relatives, pilgrimage or work, so visiting schools is realistic.",
        "Online tutoring supports all three routes without replacing any of them. It keeps a boarder's weak subject on track in the holidays, eases a transferred child through the first term and carries a private candidate all the way to the exam.",
      ],
    },
    {
      heading: "JKBOSE, CBSE, IB and IGCSE compared for a student in Kathua",
      paragraphs: [
        "The Jammu and Kashmir Board of School Education runs Class 10 and 12 exams in most local schools, with CBSE used by many private and central schools. Both lead smoothly into the University of Jammu, national entrance tests and state services. IB and IGCSE assess reasoning, data handling and independent work in English.",
        "Students from these boards are usually disciplined and good at revision. The adjustment lies in writing full reasons, tackling unseen contexts and keeping up a long project such as the IB Extended Essay.",
        "The table condenses a bigger picture and is no league table. How comfortable a child is in English, how they handle exams and where they hope to end up count for more than any label.",
      ],
      table: {
        caption: "Four routes compared from Kathua",
        columns: ["Route", "Awarding body", "What earns marks", "Common next step"],
        rows: [
          ["JKBOSE", "JKBOSE, Jammu and Srinagar", "Syllabus coverage and accuracy", "University of Jammu, state and national tests"],
          ["CBSE", "CBSE, Delhi", "Concepts applied in board papers", "JEE, NEET and CUET-UG"],
          ["IB Diploma", "International Baccalaureate", "Analysis, internal work and breadth", "Global universities and Indian equivalence routes"],
          ["IGCSE", "Cambridge or Pearson Edexcel", "Structured answers by tier", "A Level, IB or Indian Class 11"],
        ],
      },
    },
    {
      heading: "What shapes the price of IB and IGCSE tutoring for a family in Kathua?",
      paragraphs: [
        "No tariff sheet is published. Once the trial is over you get a written quote, and nothing is booked unless you accept it. The quote reflects subject, level, weekly classes and how specialised the tutor is.",
        "A Higher Level Physics or Maths specialist who has coached several May cohorts charges more than a teacher of early Middle Years work, since fewer people qualify and each lesson needs more preparation. A dense exam plan with a lot of marking is priced apart from a relaxed weekly class.",
        "Screen-based teaching removes costs a Kathua family might otherwise meet: fares to Jammu or Pathankot, centre fees and hours lost on the highway. Charges from schools, exam bodies and centres stay outside our rate.",
        "A careful start is one subject and a few lessons. The written notes show whether confidence and marks are moving, and the family can extend or stop from there.",
      ],
      bullets: [
        "How rare the tutor's subject and level are",
        "Lessons per week and length of the plan",
        "Extra marking of past papers",
        "School, exam and centre fees, which are separate",
      ],
    },
    {
      heading: "Online tutor, Jammu coaching or a local teacher: what suits a Kathua student?",
      paragraphs: [
        "Jammu offers coaching for JEE, NEET and boards, and Kathua has its own private teachers. Both are useful for school subjects, yet IB command terms and Cambridge mark schemes are rarely their focus, and the highway run to Jammu eats hours.",
        "A specialist on screen fills the gap: a first-lesson diagnosis, written work marked against genuine criteria, and a clear view of where marks went. What it needs is a dependable connection and a student able to work alone between classes.",
        "Most families do best with a blend: the local teacher for daily schoolwork and the online tutor for the syllabus nobody nearby teaches. Reading the written notes each week shows whether the arrangement is working.",
      ],
      table: {
        caption: "Study options from Kathua",
        columns: ["Option", "Strong point", "Weak point", "Travel"],
        rows: [
          ["Online syllabus specialist", "Knows IB or IGCSE marking closely", "Needs a steady connection", "None"],
          ["Jammu coaching centre", "Wide choice of teachers", "Aimed at board and entrance exams", "A long commute on NH44"],
          ["Local private teacher", "Knows the child and the school", "Rarely trained in international papers", "Minimal"],
          ["Self-study with past papers", "Low cost", "No marking of written answers", "None"],
        ],
      },
    },
    {
      heading: "Monsoon rain, winter cold and Navratri: the Kathua study calendar",
      paragraphs: [
        "Kathua's rainfall is heavy, with the monsoon concentrated in July and August, and the Ujh and the seasonal streams through town can rise quickly. Roads flood and power can fail. A lesson that needs no journey survives, and a monthly catch-up slot absorbs the ones that do not.",
        "Winter mornings can be close to freezing, and dense fog slows the highway. Online study suits those weeks, though a warm room matters for a teenager sitting for an hour. Summers are hot before the rains, with afternoon power cuts.",
        "Festivals add breaks: Lohri in January, Baisakhi in April, Navratri and Dussehra in autumn, and Diwali. Pilgrim traffic towards Katra in peak seasons also affects highway travel for families with relatives on the route.",
        "Sittings vary by awarding body and by school or centre. IB Diploma papers cluster in May, Cambridge IGCSE runs May-June and October-November, and Edexcel offers January and May-June. A centre's published timetable beats any rule of thumb.",
      ],
      table: {
        caption: "A yearly planner for Kathua",
        columns: ["Months", "Local conditions", "Study focus"],
        rows: [
          ["December to January", "Near-freezing mornings, fog, Lohri, Edexcel January window", "Mocks and gap repair"],
          ["February to April", "Pleasant weather, Baisakhi, exam preparation", "Timed papers and feedback"],
          ["May to June", "Hot pre-monsoon weeks, IB and Cambridge exams", "Early or late lessons, short sessions"],
          ["July to September", "Heavy monsoon and river rise, new school year", "New content with catch-up slots"],
          ["October to November", "Navratri, Dussehra, Diwali, Cambridge October-November series", "Light plan around festivals, then final revision"],
        ],
      },
    },
    {
      heading: "Where can a Kathua IB or IGCSE student study next?",
      paragraphs: [
        "Within Jammu and Kashmir, the University of Jammu, Cluster University Jammu, IIT Jammu, IIM Jammu, Shri Mata Vaishno Devi University in Katra and AIIMS at Vijaypur are well-known names, each with its own admission route. IB and IGCSE students should check the current rules for each.",
        "Indian universities generally accept the IB Diploma through AIU equivalence, and CUET-UG opens many doors, though required subjects differ by course. JEE and NEET-UG set eligibility rules of their own, and these shift, so read each year's notice closely.",
        "Abroad, students from this region look at the UK, Canada, Australia and the US, often for engineering, medicine-adjacent sciences and management. Predicted grades, subject mix and funding all matter, and a tutor strengthens the subjects while counselling stays with the school or an adviser.",
        "Plan from Class 9 or 10. Knowing early that a degree abroad is probable lets a student deepen Maths, English and the Sciences steadily rather than in a late rush.",
      ],
      bullets: [
        "In the region: Jammu-area institutions with their own rules",
        "National: AIU equivalence and CUET-UG subject mapping",
        "JEE and NEET: read the current eligibility notice",
        "Abroad: predicted grades, subject mix and funding",
      ],
    },
    {
      heading: "Do Dogri, Hindi and Urdu households handle IB and IGCSE English well?",
      paragraphs: [
        "In most cases yes, with steady practice. Students who speak Dogri, Hindi, Punjabi or Urdu at home are comfortable switching registers, and that helps in English. Reading for pleasure matters more than any method, because it builds the vocabulary that timed essays need.",
        "The gap is usually in extended writing under time. A student who answers well in conversation may still write a thin paragraph in the exam. Weekly timed paragraphs, then full essays marked against the real criteria, close the gap over a term or two.",
        "For the IB oral and the IGCSE speaking element, short recorded talks played back with the tutor are cheap and effective. Pronunciation is rarely the issue; structure and evidence are.",
        "IB Hindi B and IGCSE Hindi as a Second Language can be strength subjects for these students, though accuracy in writing still loses marks if ignored.",
      ],
    },
    {
      heading: "Can service and army-linked families keep one syllabus across postings?",
      paragraphs: [
        "They can do better than many expect. A family used to two or three postings in a child's school life often values the IB and IGCSE precisely because the syllabus is the same in any accredited school. A child moving from Kathua to another city can continue the same course, sometimes with the same exam session.",
        "An online tutor adds one more constant. The teacher stays the same, the clock stays the same, and only the school calendar and exam centre change. Sharing the new dates with the tutor is enough to reset the plan.",
        "Families should still check the receiving school's offer before relying on continuity. Not every IB school offers every subject or level, and an IGCSE candidate's centre may change. Ask early, in writing.",
        "No outcome is guaranteed, but continuity of teaching is one of the few things a family can control in a posting.",
      ],
    },
  ],

  tutorsIntro:
    "Teachers are spread across India and join Kathua students on video in IST. Pairing weighs syllabus, level and personality, and the trial lesson tests the match.",
  process: [
    { title: "Send a short brief", description: "Name the board or programme, the subject, the level and the sitting." },
    { title: "See the shortlist", description: "Tutors with experience of that syllabus are suggested, with time slots in IST." },
    { title: "Try the free lesson", description: "A genuine class with no charge and no obligation." },
    { title: "Read the written rate", description: "Terms and a schedule reach you in writing before you book." },
    { title: "Begin and review", description: "Classes begin, notes follow each session and swapping tutors stays possible." },
  ],
  whyPoints: [
    { title: "A tutor who has taught your course", description: "Biology HL is taught by someone who has taught Biology HL." },
    { title: "Plain about what is local", description: "Kathua families hear from us that no IB or IGCSE school in town has been confirmed." },
    { title: "Notes every time", description: "A written record shows parents what was taught and what follows." },
    { title: "Guidance, not ghost-writing", description: "Nobody writes an IA, essay or coursework for a student." },
    { title: "Rates before booking", description: "Quotes come first in writing, and IB Gram adds no hidden extras." },
    { title: "Planned around rain and cold", description: "Monsoon weeks, winter mornings and festivals are built into the schedule." },
  ],

  faqs: [
    {
      question: "Can I find an IB tutor in Kathua?",
      answer: "Yes, on screen rather than in your living room. Our tutors sit in other Indian cities and teach live, one child at a time, on IST. Selection follows subject, level and the school's timetable, and the trial lesson gives your child a feel for the style before anything is agreed.",
    },
    {
      question: "Is IGCSE home tuition offered in Kathua?",
      answer: "Yes, provided you accept it as a screen lesson. Your child sits at home with a laptop while the tutor teaches privately, and nobody journeys to Kathua, since house calls exist only in Gurugram and parts of Delhi NCR. A shared whiteboard and past papers give full syllabus depth.",
    },
    {
      question: "Is there an IB or Cambridge school in Kathua?",
      answer: "Not one we have been able to verify. Kathua's schools teach JKBOSE or CBSE, and we refuse to label any local school international. Those who want the route normally consider Amritsar, Chandigarh, Mohali or Delhi NCR, or take single IGCSE subjects privately.",
    },
    {
      question: "How does a Kathua student sit IGCSE as a private candidate?",
      answer: "By booking a place at a Cambridge or Pearson approved centre, possibly in Jammu, Pathankot or further afield. That centre sets entry dates, fees and practical arrangements, while IB Gram simply teaches. Ask it first for syllabus codes, tiers and the final registration date.",
    },
    {
      question: "What do IB and IGCSE tutors cost in Kathua?",
      answer: "There is no list price; the fee moves with subject, level, weekly lessons and tutor experience. A written quote follows the trial and always comes before a booking. Teaching by video saves travel money, and school, exam and centre fees remain separate and outside IB Gram.",
    },
    {
      question: "What happens in the free trial lesson?",
      answer: "It is proper teaching on a subject your child struggles with. The tutor probes, explains one concept, sets a brief exercise and gives comments, then sends a few lines in writing. Another tutor can be requested, and nothing forces you to carry on afterwards.",
    },
    {
      question: "Will a tutor help write an IA or Extended Essay?",
      answer: "Coaching yes, authorship no. The tutor may unpack the mark scheme, tell you whether a draft reads clearly and suggest an outline for an investigation, yet every idea, figure, sentence and citation must be the student's, since ghost-writing counts as malpractice for schools and examiners.",
    },
    {
      question: "Which IB Maths course suits a JKBOSE or CBSE student?",
      answer: "Students headed for engineering, physics or pure maths usually choose Analysis and Approaches for its calculus and proof, while those leaning to economics, management or social science often prefer Applications and Interpretation. Read the target university's entry rules, then let a diagnostic lesson show which feels natural.",
    },
    {
      question: "Do monsoon floods or winter fog disrupt online classes?",
      answer: "At times, yes. July and August downpours can knock out power or signal, whereas winter fog mostly holds up roads rather than broadband. Keep a hotspot and a charged laptop handy, and tell the tutor when a storm is forecast. A cut-off class is rescheduled and notes are shared.",
    },
    {
      question: "Which exams would a Kathua student sit, and when?",
      answer: "The answer lies with the school or centre rather than the town. In outline, the IB Diploma is sat in May, Cambridge IGCSE in May-June and October-November, and Edexcel in January and May-June. A centre's own timetable always overrules this summary.",
    },
    {
      question: "Can a Class 10 JKBOSE student add one IGCSE subject?",
      answer: "It can work if the workload stays sensible. Before board exams, a student should take on one extra subject at most, frequently Mathematics or a science, and see how a term goes. The tutor can set out Core and Extended tiers so the entry tier is based on evidence.",
    },
    {
      question: "Is the IB Diploma accepted for university admission in India?",
      answer: "Mostly yes, since the Association of Indian Universities grants equivalence, but each university applies its own conditions. CUET-UG, JEE and NEET have separate, shifting eligibility criteria, so consult the official notice for your year. Our tutors build subject knowledge and do not advise on admissions.",
    },
    {
      question: "Can an army or police family keep the same tutor after a transfer?",
      answer: "Yes. With lessons on video and in IST, a transfer alters only the school calendar and exam centre. Pass on the fresh dates, the plan resets, and the child keeps the same teacher throughout, a point service families often rate above everything else.",
    },
    {
      question: "Do you teach students in Hiranagar, Billawar or Basohli?",
      answer: "Yes, wherever the connection is dependable. Pupils from all over Kathua district join the same live sessions in IST, and nobody travels to a house in these places. Teaching, notes and scheduling flexibility match what town students receive.",
    },
    {
      question: "How do I start with IB Gram from Kathua?",
      answer: "Drop a line to support@ibgram.com or WhatsApp +91 7439 368 115, stating board, subject, level, latest grade and sitting. You will get suggested tutors and trial times, and a written rate only after you choose to go ahead. Changing tutor stays possible.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A city-by-city look at online IB and IGCSE help." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where tutors do come to the door." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Stage-by-stage and subject-by-subject guides." },
    { label: "IGCSE guide", href: "/igcse/", description: "The two boards and how tiers fit." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Levels, core components and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How criteria are applied to Class 6 to 10 work." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Learning by inquiry in the early years." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Vocational study plus academics." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "The two routes side by side." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutors listed by subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Get in touch for a trial." },
    { label: "IB and IGCSE tutors in Jammu", href: "/jammu/", description: "The divisional city 88 km north, served online." },
    { label: "IB and IGCSE tutors in Pathankot", href: "/pathankot/", description: "The Punjab gateway town just south." },
    { label: "IB and IGCSE tutors in Gurdaspur", href: "/gurdaspur/", description: "A nearby Punjab district town with the same online model." },
    { label: "IB and IGCSE tutors in Srinagar", href: "/srinagar/", description: "The Kashmir Valley's largest city." },
  ],

  closingHeading: "Try a free IB or IGCSE lesson from Kathua",
  closingBody:
    "Tell us the board or programme, subject and level, and the sitting your school or centre uses. Suggested tutors and times come first, with a written quote only if you want to go on. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
