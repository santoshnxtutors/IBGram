import type { CitySeoPage } from "../types";

/**
 * /patan/ - IB and IGCSE tutoring page for Patan, North Gujarat (Rani ki Vav, Patola weaving).
 * Not Patan in Nepal or Maharashtra. Online-only delivery: tutors do not visit homes in Patan, since
 * in-person home tuition runs only in Gurugram and parts of Delhi NCR. No IB or Cambridge school is
 * confirmed in Patan, so stripSchools is empty and the clusters point honestly to Ahmedabad.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const patan: CitySeoPage = {
  slug: "patan",
  countryName: "Patan",
  countryNameLong: "Patan, Gujarat",
  demonym: "Patan",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Study hours bend around Uttarayan kite days in January, the nine nights of Navratri, the long Diwali and Gujarati New Year break, Jain fasting weeks at Paryushan, and the peak of the North Gujarat summer",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.8493, longitude: 72.1266 },
  wikipedia: "https://en.wikipedia.org/wiki/Patan,_Gujarat",
  alternateNames: ["Anhilwad Patan", "Patan Gujarat", "Patan North Gujarat"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Patan, Gujarat | Online Tuition",
  metaDescription:
    "Patan (Gujarat) IB and IGCSE tutors, online and one to one. IB Diploma, MYP, PYP and Cambridge or Edexcel IGCSE help from home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Patan, Gujarat",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN PATAN, GUJARAT",
  heroSubtitle:
    "Home tuition in Patan for an international syllabus has to be online, because the specialists are not in town: a tutor who has taught your child's exact IB or IGCSE course teaches live and one to one while your child sits at their own desk. The city of Rani ki Vav and patola silk has no IB or Cambridge school we can confirm, so matching starts from your child's syllabus, not from a map.",
  primaryKeyword: "IB and IGCSE tutors in Patan",
  imageAltText: "A Patan student in North Gujarat studying IB Mathematics with an online tutor over a video lesson at home",
  secondaryKeywords: [
    "IB tutor Patan",
    "IGCSE tutor Patan",
    "IB home tuition Patan",
    "IGCSE home tuition Patan",
    "IB private tuition Patan",
    "IB Maths tutor Patan",
    "IGCSE Maths tutor Patan",
    "IB Physics tutor Patan",
    "IB Chemistry tutor Patan",
    "IB Biology tutor Patan",
    "IB DP tutor Patan",
    "IB MYP tutor Patan",
    "IB PYP tutor Patan",
    "IGCSE online tuition Patan",
    "Cambridge IGCSE tutor Patan",
    "IB tutor Patan Gujarat",
    "IGCSE tutor Patan North Gujarat",
    "online IB tuition Patan district",
    "IB tutor Anhilwad Patan",
  ],

  heroTrustPoints: [
    "Patan means Patan in Gujarat here, and lessons are live and online; tutors never come to the house",
    "Tutors are picked for the syllabus code and level, whatever school your child attends",
    "A free first lesson lets you judge the teaching before any commitment",
    "IB Gram is independent of every school named here, Hemchandracharya North Gujarat University, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Online tuition", label: "Live at home, not at a centre" },
    { value: "PYP to DP", label: "IB range from primary to Diploma" },
    { value: "Gujarat to IST", label: "A shared clock, no time-zone lag" },
    { value: "Free trial", label: "Watch a lesson first" },
  ],

  intro: {
    heading: "Tuition for an international syllabus, from a heritage city in North Gujarat",
    paragraphs: [
      "Patan has been a capital, and it still carries itself that way. The stepwell at Rani ki Vav, a UNESCO World Heritage Site since 2014, draws visitors from around the world. The city has a large Jain community, more than a hundred temples, and a patola weaving tradition kept alive by a very small number of families. A university, Hemchandracharya North Gujarat University, and a government engineering college anchor the education side of town.",
      "What Patan does not appear to have is a school teaching the IB or Cambridge or Edexcel IGCSE, and we will not pretend otherwise. Local schooling is mostly GSEB, the Gujarat board, along with CBSE and a few private schools. Ahmedabad, about 108 km away by rail, holds the nearest real cluster of international campuses.",
      "So who asks for IB and IGCSE help here? Often it is a business family with relatives in the UK, the United States or East Africa, thinking about a child's route abroad. Sometimes it is a family that lived in Ahmedabad or the Gulf and has come back to Patan. A few have a child boarding in another city and want holiday lessons. All of them want the same thing: a tutor who knows the course, at home, without a two-hour commute.",
      "That is what online tuition delivers. A tutor anywhere in India teaches your child live, one to one, with a shared whiteboard and marked past papers, and a short note follows each lesson. We coach, we do not write: Internal Assessments, Extended Essays, TOK essays and coursework remain the student's own work. IB Gram has no affiliation with any school, the IB Organization, Cambridge or Pearson.",
    ],
    bullets: [
      "Live, one-to-one online lessons at home on Indian Standard Time",
      "IB PYP, MYP, DP and CP, and Cambridge and Edexcel IGCSE",
      "Suits business, professional and diaspora-linked families in North Gujarat",
      "Free trial lesson and a written note after every session",
      "No tutor visits in Patan; home visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "The IB programmes below reach Patan through families more than through classrooms, since we cannot confirm a local IB school. A short description of each stage, followed by how it usually appears in a North Gujarat household, should help you place your own child.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12, up to Class 5",
      description:
        "Children work through units organised around a central idea, using several subjects at once, and build up to a final-year Exhibition. It is inquiry-led and not examined, so tutoring builds reading confidence, arithmetic speed and the ability to plan an investigation.",
      countryNote:
        "In Patan the PYP question mostly comes from parents returning from Ahmedabad or abroad, who want a child to keep the same reading and number routines.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Grades come from criterion-based marking in every subject, and the difficult step is moving from knowing a fact to using it in a new setting. A Personal Project in the last year asks for months of independent work.",
      countryNote:
        "A typical Patan case is a child who has moved between an Ahmedabad school and a local one, or a boarder home for a break with criteria still unclear.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects over two years, some at Higher Level, along with Theory of Knowledge, the Extended Essay and Creativity, Activity, Service. Internal assessments and the May exams combine to produce the final result.",
      countryNote:
        "Diploma students tied to Patan usually attend a school in another city, so lessons follow that school's calendar and mock dates.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "This pairs two or more Diploma courses with a career-related study and a reflective project. It is rarely offered in India, but the Diploma courses it contains are examined at full depth.",
      countryNote:
        "Very few families in Patan raise the Career-related route; if yours does, tutoring concentrates on the Diploma courses within the package.",
    },
  ],

  subjectsIntro:
    "A boarder from Patan revising Chemistry HL is in a different position from a newly returned child starting IGCSE, so the first thing we settle is the subject, level, exam session and the unit reached. That gives us enough to choose a tutor who taught the same content recently, and to work back from the May or November series.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Students who did well in Gujarat board mathematics still stall on justification and unfamiliar wording, so tutoring adds proof, calculus depth and timed papers, and settles the exploration topic well before the deadline." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Calculator confidence, statistics and modelling drive results here; sessions use real data sets and check that the exploration has genuine numbers to work with." },
    { name: "IB Physics", levels: "HL / SL", description: "Selecting the right relationship from the data booklet, handling units and structuring long derivations are practised before the investigation is designed with measurable data in mind." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Equilibrium, energetics and organic mechanisms get most of the time, using worked examples on paper and a lab-report habit that supports the investigation." },
    { name: "IB Biology", levels: "HL / SL", description: "Marks come from matching command terms, so students practise describing, explaining and evaluating, and the investigation's statistics are checked for sense." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, definitions and real examples from the Indian and world economy form the base, with HL policy evaluation and quantitative questions added." },
    { name: "IB Business Management", levels: "HL / SL", description: "Family-business students often shine, yet case papers demand theory tied to the numbers on the page, which the sessions rehearse using past-paper firms." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text commentary, the comparative essay and the Individual Oral are rehearsed separately, with feedback on structure, evidence and voice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory questions and algorithm design are paired with real coding, because the internal assessment needs working software and clear documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies from each approach are learned accurately with evaluation attached, and essays are planned as arguments with a clear line of reasoning." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems diagrams, case studies and the comparison of viewpoints are the core, with the practical investigation refined step by step." },
    { name: "IB Geography", levels: "HL / SL", description: "Case study details, data-response skills and fieldwork write-ups are rehearsed until specific evidence comes automatically." },
    { name: "IB Hindi B", levels: "HL / SL", description: "For students whose home language is Gujarati, the focus is written accuracy in Hindi, oral fluency and the Paper 2 writing tasks." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The exhibition and essay are challenged like a debate, until every claim is defended and each counterexample answered." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE look alike on the shelf but ask different things on the paper. We confirm the board, syllabus code and tier before assigning a tutor. Patan students typically meet IGCSE through a school in another city or as a switch from GSEB or CBSE at Class 9.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Extended questions reward clear working, so students are drilled in showing each step, with calculator and non-calculator papers practised apart." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and vectors arrive quickly, and the course is a strong bridge to IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Formula rearrangement and units cost more marks than the theory, and the alternative-to-practical paper gets its own block." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Mole calculations, reactivity and organic chemistry are built step by step alongside recurring qualitative analysis patterns." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Genetics, enzymes and transport are heavily tested, and unfamiliar graphs are practised under timed conditions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams give early marks, while extended evaluative answers separate higher grades." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python problems and pseudocode trace tables are practised on real programs so the logic sticks." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary tasks under time limits, with clarity and structure valued above ornate vocabulary." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading tasks, letter writing and essays, with detailed feedback on grammar and idiom." },
  ],

  regionsTitle: "Patan neighbourhoods and roads we hear from",
  regionsIntro:
    "Every lesson is online, so the list below offers context, not routes: where our families live, which roads set the school run, and how the city's rhythm of markets, temples and festivals shapes the best hour for a lesson.",
  regions: [
    { name: "Rani ki Vav and the Saraswati riverside", note: "The heritage stepwell district on the city's northwest edge, busy with visitors, whose tourism-linked families run hotels, guides and craft businesses." },
    { name: "Sahasralinga Talav area", note: "The historic reservoir zone with a mix of old homes and newer colonies, quiet in the evening." },
    { name: "Patola weaving quarter", note: "The traditional lanes where weaving and textile trades continue; households here often have long family business histories." },
    { name: "HNGU campus and university road", note: "Around Hemchandracharya North Gujarat University, popular with faculty, staff and students' families." },
    { name: "Government Engineering College area", note: "A technical-education pocket that draws lecturers and engineering families interested in STEM subjects." },
    { name: "Station Road", note: "The commercial spine near the railway station, convenient for families who travel regularly to Ahmedabad." },
    { name: "Patan-Mahesana road", note: "The road towards Mahesana, lined with newer housing and used by commuters and business owners." },
    { name: "Patan-Unjha and Siddhpur roads", note: "Routes to neighbouring towns known for trade and agriculture, with families who often keep business interests across several towns." },
    { name: "Jain temple quarter", note: "The dense old-city area around major Jain temples, where festival and fasting periods shape family schedules." },
  ],

  schoolDisclaimer:
    "The schools named on this page appear only to show where IB and Cambridge or Edexcel IGCSE are taught within reach of Patan. IB Gram is an independent tutoring service and has no partnership, contract or endorsement with them, or with the IB Organization, Cambridge Assessment International Education or Pearson.",
  schoolClusters: [
    {
      city: "Patan itself",
      note: "We could not confirm an IB or Cambridge or Edexcel IGCSE school inside Patan, so none is named. Local schooling is mostly GSEB and CBSE, with international programmes reached by moving or boarding in another city.",
      schools: [],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "About 108 km by rail, Ahmedabad has the closest and largest set of IB and IGCSE campuses, and is where many North Gujarat families board or relocate a child.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Mahatma Gandhi International School", "The Riverside School"],
    },
    {
      city: "Nearby: Mahesana and Gandhinagar belt",
      note: "Towns between Patan and Ahmedabad have growing school options, but we have not confirmed IB or IGCSE at any of them, so families generally look to Ahmedabad.",
      schools: [],
    },
  ],

  modesIntro:
    "Each format is live, one to one and online. The difference is rhythm: a steady weekly hour, a term plan with written check-ins, or a concentrated run around exams and festival-free weeks. Tutors do not visit Patan homes; home visits exist only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly online lesson",
      description:
        "One hour, the same day and time each week, with a tutor chosen for the course. It fits around school, evening prayers and family commitments.",
      bullets: [
        "The same tutor through the term",
        "Live marking of past papers",
        "Works for IB, MYP and IGCSE",
        "Evening and weekend slots",
      ],
    },
    {
      title: "Term plan with check-ins",
      description:
        "The weekly hour is joined by a short note after each lesson and a fuller review every few weeks, helpful for busy business parents who cannot sit in.",
      bullets: [
        "Summary after each lesson",
        "Regular goal and marks review",
        "Good for younger learners",
        "Extra slot before mocks",
      ],
    },
    {
      title: "Exam and holiday block",
      description:
        "A compact run of lessons before a series or in a school break, using timed papers and quick marking, scheduled around Navratri, Diwali and kite season.",
      bullets: [
        "Timed papers with current mark schemes",
        "Quick feedback",
        "Built around festival weeks",
        "Book several weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "What is the IB and IGCSE schooling picture for Patan families?",
      paragraphs: [
        "Patan is a city of roughly 265,000 people, and its classrooms are dominated by GSEB and CBSE. We searched for an IB World School or a Cambridge or Edexcel IGCSE centre in the city and could confirm none. Some international-style private schools may exist, but a name on this page has to be one we can stand behind, so we leave the list empty and say why.",
        "Ahmedabad holds the nearest concentration of international campuses, about 108 km away. Families who want a full IB continuum for a child generally choose between moving to Ahmedabad, boarding a child there or elsewhere, or staying in Patan while studying a state or CBSE syllabus. Each of those choices produces a different kind of tutoring request.",
        "The families we hear from fall into a few groups. Some have relatives in the UK, the United States or East Africa, part of the wide Gujarati diaspora, and are exploring routes abroad. Some are returning professionals. Some are Jain or business families building an education plan across generations. And some are simply curious about what an IB Diploma would demand of their child.",
        "For each of these, tutoring is chosen by course, not by address. A tutor in Bengaluru can take a Patan student through Economics HL as easily as a student sitting next door, and the exam board applies the same standard to both. We mention this because parents in smaller cities often assume a distant tutor must be a weaker one.",
      ],
      table: {
        caption: "Where Patan families reach international-curriculum schooling",
        columns: ["Place", "Access", "Offering"],
        rows: [
          ["Patan", "Home city", "No IB or IGCSE school confirmed; GSEB and CBSE schools"],
          ["Mahesana and Gandhinagar belt", "On the way to Ahmedabad", "No IB or IGCSE campus confirmed by us"],
          ["Ahmedabad", "About 108 km by rail", "Several IB and IGCSE campuses, day and boarding"],
        ],
      },
      bullets: [
        "No Patan school is named because none could be confirmed",
        "Families include diaspora-linked, returning and business households",
        "Course-based matching makes location irrelevant",
        "Hemchandracharya North Gujarat University has no link with IB Gram",
      ],
    },
    {
      heading: "How do GSEB, CBSE, IB and IGCSE compare for a Patan student?",
      paragraphs: [
        "Most Patan students follow the Gujarat Secondary and Higher Secondary Education Board, with CBSE the main alternative. Both assess through final papers, and both reward disciplined recall. IB and IGCSE ask for that recall, then ask the student to apply it in unfamiliar settings and to explain the reasoning.",
        "Language shapes the switch. Many Gujarati-medium students find that the greatest hurdle is not the concept but the English vocabulary in which questions are phrased. A tutor in the early weeks can build a subject word bank, practise reading command words and coach the student to write in full sentences in Physics and Economics answers.",
        "Assessment weight is a further difference. GSEB and CBSE give modest marks to practicals or projects, while IB has internal assessments in most subjects, a 4,000-word Extended Essay and a TOK essay. IGCSE has practical papers or coursework in several subjects. Handling extended work across months is a skill that many board students have not yet practised.",
        "Both routes can lead to good universities. GSEB and CBSE students sit GUJCET, JEE Main or NEET where relevant; IB students can be admitted to Indian universities through AIU equivalence, and IB and IGCSE are recognised abroad. The right choice depends on the child, the family's plans and what a school can offer, not on any general ranking.",
      ],
      table: {
        caption: "GSEB, CBSE, and IB or IGCSE compared for Patan students",
        columns: ["Feature", "GSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Local presence", "Most schools", "Several private schools", "None confirmed in Patan"],
          ["Exam style", "Fixed papers, recall-led", "Fixed papers, moderate application", "Papers plus coursework and criteria"],
          ["Language", "Gujarati or English medium", "English or Hindi", "English"],
          ["Entrance route in India", "GUJCET, JEE Main, NEET", "JEE Main, NEET, CUET-UG", "AIU equivalence, CUET-UG, JEE and NEET by eligibility"],
          ["Recognition abroad", "Limited", "Known", "Recognised worldwide"],
        ],
      },
    },
    {
      heading: "Why is there no fixed price for IB or IGCSE tuition in Patan?",
      paragraphs: [
        "Because a lesson's cost depends on who is teaching what, and the range is too wide for one figure to help you. Every quote we give is written down before you book, and we would rather explain the reasons than post a number that misleads.",
        "The first factor is the level: a Class 6 MYP session sits below a Diploma HL revision block. The second is subject rarity, since a scarce specialism naturally commands more. Then come frequency, length and a tutor's recent experience with your exact syllabus. Two students taking the same subject can pay differently for good reasons.",
        "Online delivery changes the sum in your favour. You do not pay for a commute or for a hostel bed in Ahmedabad just to attend weekend classes. A family that would otherwise consider sending a child to Ahmedabad for a season can compare that cost with a laptop lesson from home.",
        "We never recommend choosing on price alone. A cheap lesson that misses the syllabus costs weeks, and a well-matched tutor can save a term. That is why the trial lesson is free, and why a fee is only fixed once you have seen the teaching.",
      ],
      bullets: [
        "Level, from PYP to Diploma HL",
        "Subject rarity and how recently the tutor taught that exact course",
        "Length and weekly frequency of lessons",
        "Steady plan versus an exam-season block",
        "No commute or hostel costs because everything is online",
      ],
    },
    {
      heading: "Online tuition, coaching classes, home tutors or self-study in Patan?",
      paragraphs: [
        "Patan has tuition classes in every neighbourhood, many of them geared to GSEB Class 10 and 12, GUJCET and the engineering and medical entrances. They serve those goals well. What they generally do not offer is an IB Physics HL specialist, someone fluent in MYP criteria or a Cambridge Additional Mathematics teacher, because too few students would enrol.",
        "A private tutor visiting the home is a familiar comfort. It works for younger children and for content that any strong teacher can cover. It gets harder with Higher Level subjects and with coursework, where the tutor must understand how a moderator reads a research question. A private tutor also becomes a single point of failure when they are ill or busy.",
        "Online tuition through IB Gram puts the syllabus first. The tutor is selected for the course code, each session ends with a short note, and a change is straightforward. The trade-off is screen time: the child needs a stable connection and a quiet corner, and some younger children need shorter blocks. The trial lesson shows early whether the format suits them.",
        "Self-study with official past papers is a fine base for a disciplined student and costs very little. The weakness is uncorrected error. Without a tutor who reads written answers, a student can rehearse the same mistake for weeks. A single weekly lesson often catches that without replacing the student's own routine.",
      ],
      table: {
        caption: "Study routes for IB and IGCSE from Patan compared",
        columns: ["Route", "Strengths", "Watch out for"],
        rows: [
          ["Online home tuition (IB Gram)", "Tutor matched to the course, live one-to-one, free trial, written notes", "Needs a laptop, stable internet and screen focus"],
          ["Coaching class in Patan", "Peers, structure, aimed at board and entrance exams", "Few IB or IGCSE specialists; group pace"],
          ["Private tutor at home", "Personal attention in familiar surroundings", "Thin at Higher Level and coursework; reliant on one person"],
          ["Self-study", "Low cost, encourages independence", "No expert feedback on written answers"],
        ],
      },
    },
    {
      heading: "Uttarayan, Navratri and the Gujarat summer: how does the calendar affect study in Patan?",
      paragraphs: [
        "January belongs to kites. Uttarayan, on 14 January, turns rooftops into the centre of family life for days, and for an IB or IGCSE student whose mock exams fall in January or February, that can be a real distraction. We plan lessons before and after the festival week and set timed papers for the quieter days that follow.",
        "Navratri comes in autumn, when late-night garba takes over the evenings of nine nights, followed soon after by Diwali and the Gujarati New Year. That period often lands just before the November IB and October-November IGCSE series, so we book revision earlier and keep the festival weeks light. Jain families may also observe fasting weeks such as Paryushan, and we adjust in the same way.",
        "North Gujarat summers are severe, and April to June can bring extreme heat. Students studying in the afternoon lose focus quickly, so we favour early morning or evening slots. The monsoon usually arrives in late June or July and can occasionally disturb internet connections, so we suggest a mobile hotspot as a backup.",
        "Exams themselves follow the international calendar: IB in May with a November option for some schools, IGCSE in May and June and again in October and November. Mock exams usually happen in winter. Because the festival calendar and exam calendar can collide, the best defence is a plan made a few months ahead.",
      ],
      table: {
        caption: "Exam and festival calendar for IB and IGCSE students linked to Patan",
        columns: ["Months", "Academic event", "Local factor", "Tutoring emphasis"],
        rows: [
          ["January to February", "Mock exams, IA drafts", "Uttarayan on 14 January, cool weather", "Timed papers around festival days"],
          ["March to April", "Final revision", "Rising heat, wedding season", "Full papers and mark-scheme practice"],
          ["May to June", "IB May and IGCSE summer series", "Peak heat, then monsoon onset", "Early morning or evening slots, then rest"],
          ["July to September", "New academic year begins", "Monsoon, Paryushan for Jain families", "Foundations and IA topic choice"],
          ["October to November", "IGCSE autumn and IB November exams", "Navratri, Diwali, Gujarati New Year", "Front-loaded revision with light festival weeks"],
        ],
      },
    },
    {
      heading: "What can a Patan student do after IB or IGCSE?",
      paragraphs: [
        "A completed IB Diploma is treated as equivalent to Class 12 by the Association of Indian Universities, so admission to Indian universities is open, subject to each institution's own subject and grade rules. IGCSE is a two-year stage followed by IB, A Levels or an Indian board.",
        "Students who stay in Gujarat often look at Ahmedabad, Gandhinagar and Vadodara for undergraduate study, and at national options through CUET-UG. IB and IGCSE candidates register like anyone else, but the domain subjects and language paper must be checked against the target course. JEE Main and NEET have their own eligibility conditions that change, so confirm them with the conducting agencies.",
        "Business families often ask about management and commerce degrees, and here IB Economics and Business Management give a solid grounding. Families with relatives abroad often think of the UK, the US, Canada or Australia, where predicted grades, tests and applications matter, and we help only with the subject work, not the applications.",
        "No tutor can promise a place or a grade, and we will not. The useful conversation is which HL subjects keep the widest doors open, and it is best had before subjects are chosen in Class 11.",
      ],
      table: {
        caption: "Pathways from IB and IGCSE for Patan students",
        columns: ["Route", "What it needs", "What to confirm"],
        rows: [
          ["Indian university with IB Diploma", "AIU equivalence to Class 12", "Subject and grade rules of each university"],
          ["CUET-UG", "Registration and domain subjects", "Combinations the target course accepts"],
          ["JEE Main or NEET", "Eligible Class 12 or equivalent", "Current rules from the conducting agency"],
          ["Study abroad", "Diploma or A Level, tests, applications", "Predicted grades and country-specific deadlines"],
        ],
      },
    },
    {
      heading: "IB Maths AA or AI, and science subjects: how are they taught?",
      paragraphs: [
        "Analysis and Approaches suits students heading for engineering, physics or mathematics, with its focus on algebra, calculus and proof. Applications and Interpretation suits business, economics, life sciences and design, with more statistics, modelling and technology. Both come at HL and SL, so four distinct courses sit behind the label.",
        "Tutoring begins with a diagnostic. A student strong in algebra but hesitant with proof needs a different plan from one whose arithmetic is slow. We use past-paper questions to see where reasoning breaks, then rebuild that step and move on, not repeat the whole chapter.",
        "In the sciences, Physics HL leans hard on mathematics, so units and rearrangement are checked early. Chemistry HL needs steady progress from stoichiometry to equilibrium and mechanisms. Biology HL rewards exact language. Each course has an investigation the student designs and writes, and a tutor may question a method but may not draft the report.",
        "Start early if you can. The first term of Class 11 is ideal, when foundations are easy to lay. A student who begins after a poor mock exam can still improve, though the plan is tighter and the hours are higher.",
      ],
      bullets: [
        "AA suits engineering and physics; AI suits data, economics and design paths",
        "A diagnostic lesson guides the plan",
        "Physics HL needs early attention to units and algebra",
        "Investigations are discussed with the tutor but written by the student",
      ],
    },
    {
      heading: "IGCSE Core or Extended: what should a Class 9 student in Patan choose?",
      paragraphs: [
        "Cambridge IGCSE offers most subjects at Core and Extended tiers, and Edexcel offers Foundation and Higher in some. The tier caps the highest grade, so it deserves thought at the start of Class 9. Extended keeps IB and science routes open, while Core can be right when confidence needs building.",
        "A common set includes Mathematics, English, three sciences and one or two options such as Computer Science, Economics or Business Studies. Additional Mathematics helps a child heading for IB Maths AA. A language like Hindi is worth keeping, since it protects a strength and sometimes a scoring subject.",
        "Parents from GSEB backgrounds ask whether IGCSE is harder. The content at Core is close to board level and Extended sits higher, but the real change is in question style: more explanation, more method and more unfamiliar situations. Practice with past papers matters more than covering extra chapters.",
        "What matters most is the exact code and session. We ask for both, plus the tier, before matching, and we adjust when a school changes the tier during the year.",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors covering IB PYP, MYP and Diploma subjects as well as Cambridge and Edexcel IGCSE for Patan families. Every match starts from the exact syllabus, level and exam session, and every lesson runs live online at home.",
  process: [
    { title: "Send the details", description: "Board or programme, subject, level, recent marks and the hours that suit your Patan household." },
    { title: "See a shortlist", description: "Tutors chosen for syllabus fit, each with a line on why." },
    { title: "Try a lesson free", description: "A real topic from your child's syllabus, taught live, with no fee or obligation." },
    { title: "Agree a plan", description: "Topics, timing and reporting are set out and the rate is confirmed in writing." },
    { title: "Continue weekly", description: "A steady online slot, a note after each session, and a change of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the paper", description: "We choose on the exact IB level or IGCSE code, not on a loose subject label." },
    { title: "No local specialist needed", description: "With no confirmed IB or IGCSE school in Patan, national matching replaces a search for someone nearby." },
    { title: "Judge it yourself", description: "The free first lesson lets you and your child watch the teaching before deciding." },
    { title: "Student work stays the student's", description: "Tutors guide and give feedback but never write assessed work." },
    { title: "Reports you can read", description: "A written note after every lesson and a fuller review every few weeks." },
    { title: "Free to change", description: "No long contract, and a tutor change whenever the match is wrong." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Patan, Gujarat?", answer: "Send the programme, subject, level and exam session, and we return a tutor who has taught that course recently. We could not confirm an IB school in Patan, so we search across India. Lessons are live and online at home. The first lesson is free, and you can ask for a different tutor if the first is not a fit." },
    { question: "Are there IGCSE tutors for Patan students?", answer: "Yes, for Cambridge and Pearson Edexcel, taught online. Tell us the board, syllabus code and tier so we can match someone who knows those papers. Patan families often meet IGCSE through a school in Ahmedabad or when switching from GSEB or CBSE at Class 9. The first lesson is free." },
    { question: "Will a tutor come to our home in Patan?", answer: "No, tutors do not visit homes in Patan. In-person home tuition runs only in Gurugram and parts of Delhi NCR. What we offer in Patan is online home tuition: a live, one-to-one lesson at your child's own desk on a laptop. That allows the tutor to be chosen for the syllabus, not the distance." },
    { question: "What does IB or IGCSE tuition cost in Patan?", answer: "It depends on the level, subject, session length, frequency and the tutor's recent experience, and we quote in writing before you book. We do not publish a price list because ranges are wide. Online lessons remove travel and hostel costs, which matters if the alternative is Ahmedabad. The trial lesson is free." },
    { question: "Which schools near Patan offer IB or IGCSE?", answer: "We could confirm none inside Patan. The nearest cluster is in Ahmedabad, about 108 km away, where several schools teach IB or IGCSE. Towns between Patan and Ahmedabad may add options, but we do not name a school we cannot verify. If a Patan school starts offering either programme, we will update this page." },
    { question: "Can you help a child boarding in Ahmedabad or elsewhere?", answer: "Yes. Boarders from Patan often want holiday blocks or weekend support. The tutor works from your child's subject list and school calendar, and lessons are online, so no travelling is needed. We suggest booking a few weeks before a break, when popular slots fill quickly." },
    { question: "Is there a free trial lesson?", answer: "Yes, on every match. Your child takes a real lesson on a topic from their own syllabus, with no payment and no obligation afterwards. If the tutor is not right, we can propose another. If it is, a first-month plan is agreed and the rate is confirmed in writing." },
    { question: "Can a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach but never write. They can discuss research questions, explain criteria, check the method and comment on a student's own draft. Writing any part of an IA, Extended Essay, TOK essay or coursework is not allowed, and it can bring serious penalties from the IB or the exam board." },
    { question: "Which IB Diploma subjects are available for Patan students?", answer: "Both Mathematics courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, Environmental Systems and Societies, Hindi and TOK. If your subject is missing, send the details and we will say honestly whether a tutor exists before you commit." },
    { question: "Do you tutor MYP and PYP as well as the Diploma?", answer: "Yes. PYP support builds reading, number sense and inquiry skills, and MYP support covers subject criteria and the Personal Project. Families returning to Patan from Ahmedabad or abroad often ask for this help to keep a child settled. It also suits students who are ahead of or behind their class." },
    { question: "Is online tuition as good as face-to-face for these syllabuses?", answer: "For most students, yes, especially where local specialists are few. A shared whiteboard and a live marked paper do what a classroom would, with a better-matched teacher. It needs a stable connection and a child who can focus on screen. The trial lesson shows early whether that works, and shorter sessions help younger students." },
    { question: "How are your tutors checked?", answer: "We look at qualifications, recent teaching of the exact subject and level, and how a tutor handles assessment criteria. A trial lesson then shows their teaching. We collect feedback from families and change tutors when needed. We do not publish invented ratings, tutor numbers or student counts." },
    { question: "When should tutoring start?", answer: "Ideally at the start of the course: Class 9 for IGCSE and Class 11 for the Diploma. Early help fixes gaps before internal deadlines and mocks. Later starts can still improve results, though plans are tighter. For MYP and PYP, tutoring can begin whenever a child loses confidence in a subject." },
    { question: "My child is switching from GSEB or CBSE to IGCSE. How will a tutor help?", answer: "Early lessons deal with command words, extended answers, calculator use and the choice between Core and Extended. Content gaps are filled where syllabuses differ. For a child who studied in Gujarati medium, the tutor also builds a subject vocabulary bank in English, since that is often the biggest hurdle." },
    { question: "Can lessons be held in the evening or at weekends?", answer: "Yes, most Patan families choose weekday evenings and weekend mornings. We avoid the hottest afternoon hours in summer and can move sessions around Uttarayan, Navratri, Diwali and Paryushan. Boarders follow their own school's dates, and we plan holiday blocks around those." },
    { question: "What if we are unhappy with our tutor?", answer: "We will change them. We check in every few weeks, and the note after each lesson shows problems early. There is no long contract, so a family can move to a better match without penalty." },
    { question: "Is IB Gram connected to any Patan school, the university, the IB or Cambridge?", answer: "No. IB Gram is independent. It has no relationship with Hemchandracharya North Gujarat University, any school named on this page, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Such names are used only as context." },
    { question: "How can I contact IB Gram from Patan?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's programme, subject, level and preferred hours. We reply with a short list of tutors and a free trial slot. All of it, from enquiry to lessons, happens online." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE matching works in other Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The area where a tutor can visit a student's home." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices for Cambridge and Edexcel students." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, the Extended Essay, TOK and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units and the Exhibition for parents." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches compared with Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles sorted by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Mahesana", href: "/mahesana/", description: "The neighbouring North Gujarat city, reached by the same online matching." },
    { label: "IB and IGCSE tutoring in Ahmedabad", href: "/ahmedabad/", description: "The state's largest cluster of IB and IGCSE schools." },
    { label: "IB and IGCSE tutoring in Palanpur", href: "/palanpur/", description: "Online IB and IGCSE support for families further north in Gujarat." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Patan",
  closingBody:
    "Tell us your child's programme or board, subject and level, how they are doing now and the hours that work at home. We will reply with a tutor whose recent teaching fits the course, and a first lesson that costs nothing. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp. It is all online, and no tutor visits homes in Patan.",
};
