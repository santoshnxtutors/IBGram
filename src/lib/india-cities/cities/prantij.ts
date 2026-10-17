import type { CitySeoPage } from "../types";

/**
 * Prantij is a cotton-and-grain taluka town in Sabarkantha district, Gujarat, on the Ahmedabad to
 * Udaipur railway. No school in the town could be confirmed as an IB World School or a Cambridge or
 * Edexcel centre, so stripSchools is empty and the clusters point to Ahmedabad and say so plainly.
 * Note: scripts/india-cities/plan.ts lists Prantij under Rajasthan, which is a data error.
 */
export const prantij: CitySeoPage = {
  slug: "prantij",
  countryName: "Prantij",
  countryNameLong: "Prantij, Gujarat",
  demonym: "Prantij",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after the school van or train commute, and quiet Sunday mornings outside cotton-picking and festival weeks",
  lastUpdated: "2026-09-21",
  state: "Gujarat",
  stateCode: "IN-GJ",
  geo: { latitude: 23.4383, longitude: 72.8572 },
  wikipedia: "https://en.wikipedia.org/wiki/Prantij",
  alternateNames: ["Prantij Gujarat", "Prantij Sabarkantha", "Prantij taluka"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Prantij | Private Tuition at Home, Online",
  metaDescription:
    "Live online IB and IGCSE tutors for Prantij students, taught one-to-one from home, planned around Sabarkantha school hours, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Prantij",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PRANTIJ STUDENTS",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Prantij, taught as live lessons on a laptop in your own front room. The town sits on the Ahmedabad to Udaipur line, close enough to the capital region to watch its international schools but far enough that none of them is a daily option. A tutor who already teaches your child's exact syllabus fills that gap. Share the programme, subject and exam session and we arrange a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Prantij",
  imageAltText: "Prantij student working through an IB Chemistry problem set with a live online tutor at home",
  secondaryKeywords: [
    "IB tutor in Prantij",
    "IGCSE tutor in Prantij",
    "IB home tuition Prantij",
    "IGCSE home tuition Prantij",
    "IB private tuition Prantij",
    "IB Maths tutor Prantij",
    "IGCSE Maths tutor Prantij",
    "IB Physics tutor Prantij",
    "IB Chemistry tutor Prantij",
    "IB Biology tutor Prantij",
    "IB DP tutor Prantij",
    "IB MYP tutor Prantij",
    "IB PYP tutor Prantij",
    "IGCSE online tuition Prantij",
    "IB tutor Talod",
    "IGCSE tutor Himmatnagar",
    "IB tuition Sabarkantha",
    "IB online classes Prantij Gujarat",
  ],

  heroTrustPoints: [
    "Live private lessons, never recorded videos or crowded batches",
    "Tutors who have taught IB DP, MYP, PYP and Cambridge or Edexcel IGCSE papers",
    "Timings built around the Sabarkantha school day and the Ahmedabad train",
    "Free trial lesson and a short written note after every session",
    "A different tutor at no charge if the fit is wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you commit" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Why Prantij families look for IB and IGCSE tutors online",
    paragraphs: [
      "Walk around Prantij and ask what the neighbours' children are preparing for. The answer is mostly the Gujarat Secondary and Higher Secondary boards, a smaller number of CBSE papers, and, after Class 12, GUJCET, NEET or a commerce degree in Himmatnagar or Ahmedabad. A quieter group is working toward something different: an IB Diploma, a Cambridge or Edexcel IGCSE certificate, or an international school place that a job transfer, a relative abroad or a family business has made realistic.",
      "That group has a real problem. The schools that teach those syllabuses are in and around Ahmedabad and Gandhinagar, roughly fifty kilometres of road away, and the town itself has none that we could verify. Moving house is a huge step, and boarding a twelve-year-old is another. Our IB and IGCSE tutors in Prantij arrangement lets the child stay home. Lessons are live, private and taught on Indian time by someone who has actually taught the paper your child will sit.",
      "The rest of this page works through the practical questions as they apply to a Prantij address: which schools are realistically in reach, how Gujarat's boards compare with the IB and IGCSE, what shapes a tutor's rate, how the exam calendar meets Navratri and Uttarayan, where students go afterwards, and how subject choices are made. Tutors do not visit homes in Prantij; everything here is delivered online.",
    ],
  },

  programmesIntro:
    "Families in Prantij seldom meet the four IB stages in sequence. A relative abroad or an employer's posting usually introduces the Diploma first, and only afterwards does the value of the earlier stages become clear.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning built around shared questions and ending in a group Exhibition. Lessons stay light and warm: reading aloud, comfortable arithmetic, tidy handwriting and the confidence to explain a thought in full sentences.",
      countryNote:
        "A child from a Gujarati-medium class heading toward English-language international schooling gains most from short, cheerful sessions that build spoken English before the workload grows.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups judged against published criteria, capped by a Personal Project. A tutor teaches how to unpack a task statement and aim an answer at each criterion instead of retelling a chapter.",
      countryNote:
        "Students raised on GSEB textbooks are used to mastering one fixed text. MYP expects them to apply ideas to situations they have not seen, a shift that one term of patient online coaching can begin.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six courses plus Theory of Knowledge, the Extended Essay and CAS. Coaching goes into the examined papers and the method behind internal assessments; no tutor writes any assessed piece.",
      countryNote:
        "In Sabarkantha the private tutor may be the only teacher within reach who has handled Higher Level content, so session time goes to depth, not to filling administrative gaps.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma courses paired with practical career study and a reflective project. Tutors cover the academic courses and the English that supports them.",
      countryNote:
        "This route is uncommon around Prantij. Requests are welcome, and the student is matched with a specialist for each Diploma course taken.",
    },
  ],

  subjectsIntro:
    "A tutor is picked for the exact course and level, Standard or Higher, and for calm with a student who is hearing IB command terms for the first time.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions and careful algebra, with paper layouts rehearsed and the Higher Level extras introduced slowly." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data handling, modelling and calculator-led problem solving, with real fluency on the graphing tools." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics up to fields and quantum ideas, plus data-analysis questions and how to report an experiment." },
    { name: "Chemistry", levels: "SL / HL", description: "Bonding, energy changes, rates and organic routes, along with the mole arithmetic that quietly decides many marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells through ecosystems, with stress on exact definitions because marking schemes pay for precise terms." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and trade, with local illustrations such as cotton, dairy cooperatives and GST for long answers." },
    { name: "Business Management", levels: "SL / HL", description: "Reading cases, using formulae and applying a framework to an unfamiliar firm, a natural fit for families who trade." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, structures and the pseudocode style expected in the exam." },
    { name: "Psychology", levels: "SL / HL", description: "Key studies, evaluation and the essay form that the criteria reward." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Detailed reading, commentary for the first paper and comparison for the second." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking for those taking Hindi as an added language." },
    { name: "Gujarati language support", levels: "School-based", description: "Help with a home-language component when the school offers one, handy where Gujarati is spoken at home and English at school." },
    { name: "Theory of Knowledge", levels: "Core", description: "Talk-through practice on knowledge questions and the exhibition, while the essay stays the student's own." },
  ],

  igcseSubjectsIntro:
    "Subjects under Cambridge and Pearson Edexcel are matched by board code, since paper layout and tiers differ even where a subject name is the same.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, shape and data handling, practised through timed past papers." },
    { name: "Physics", levels: "Core / Extended", description: "Motion, waves, circuits and the atom, with questions on experimental skills." },
    { name: "Chemistry", levels: "Core / Extended", description: "Bonding, moles, electrolysis and an introduction to organic compounds." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, body systems, genetics and ecology, with graphs and tables to read." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools that run the double-award science route." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Reading comprehension, directed writing and speaking preparation." },
    { name: "Computer Science", levels: "Single tier", description: "Program logic, how data is stored and how networks work." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Core ideas, short calculations and case-style questions." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Reading, writing and spoken practice." },
    { name: "Accounting", levels: "Single tier", description: "Ledgers, final accounts and the presentation marks that mount up." },
  ],

  regionsTitle: "Prantij town, Talod, Himmatnagar and the road to Ahmedabad",
  regionsIntro:
    "Students here live in a town and a ring of villages rather than in a sprawling city, so the useful detail is how each place connects to school, to the railway and to Ahmedabad. These notes describe how the day tends to run.",
  regions: [
    { name: "Prantij town", note: "The taluka centre near the railway station and the old bazaar. Homes are compact, many families run shops or trade farm produce, and quiet study begins after the market closes." },
    { name: "Along the Meshwo river", note: "Villages on the river's plain, where cotton, wheat and groundnut shape the year. Harvest weeks pull children into family work, so lessons are planned around them." },
    { name: "Takaar", note: "A nearby village known for the Gorthiya Mahadev temple, about eight kilometres out. Weekend visitor traffic can fill the roads, so midweek evenings are calmer for a lesson." },
    { name: "Talod", note: "A neighbouring Sabarkantha town with its own schools and market, where families often compare Himmatnagar and Ahmedabad when thinking about a change of board." },
    { name: "Himmatnagar", note: "The district headquarters, linked to Prantij and Gandhinagar by State Highway 141. Families with government and banking jobs often live here and look at Gandhinagar schools." },
    { name: "Dehgam and the Gandhinagar side", note: "The belt toward Gandhinagar, where a daily rail or road commute makes Ahmedabad employers and schools part of life for some households." },
    { name: "Gandhinagar", note: "The state capital, home to institutes and offices that draw relocating professionals; its international-school choice is limited, so many families still look to Ahmedabad." },
    { name: "Ahmedabad's SG Highway and Bopal belt", note: "Where the nearest IB and Cambridge schools sit, roughly fifty kilometres away. Families who relocate or board a child usually settle around this corridor." },
    { name: "Villages toward the Rajasthan border", note: "The farming settlements along the Ahmedabad to Udaipur rail line, where power supply and connectivity vary, so a stable connection is checked before the first lesson." },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time. For a Prantij student the lessons usually fall between late afternoon and the evening meal, hours when most tutors on this rota are already teaching.",

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Prantij family actually reach?",
      paragraphs: [
        "Almost none on a daily basis, and it is more useful to state that than to pad a list. Within Prantij and the surrounding taluka we could not confirm a single school as an authorised IB World School or as an approved Cambridge or Pearson Edexcel centre. The schools here teach Gujarat Board, with some CBSE, and the town's reputation rests on those.",
        "The nearest confirmed options sit around Ahmedabad: schools along the SG Highway and Bodakdev stretch, and a few on the Bopal side. Roughly fifty kilometres separates them from Prantij by road, which is too long for a daily school run for a young child. Families respond in three ways. Some board a child in Ahmedabad from Class 6 or Class 9. Others relocate for a parent's job and keep the family home in Sabarkantha. A third group stays put and uses an online tutor to follow the syllabus of a school the child joins later.",
        "Who are these families? Engineers and managers employed at the industrial estates along the Ahmedabad corridor, bankers and officials posted in Himmatnagar, traders whose business has gone international, and households returning from the Gulf, East Africa or the United Kingdom, which have long Gujarati ties. They tend to arrive with strong ambitions and very little local guidance.",
        "We have kept school names off this page whenever we could not verify them. If a Prantij school announces an IB candidacy or a Cambridge licence, parents will know before anyone, and tutoring can begin against that syllabus within a week of you telling us.",
      ],
    },
    {
      heading: "GSEB, CBSE, IB and IGCSE: how the boards compare for a Prantij student",
      paragraphs: [
        "Gujarat's own system runs on the Secondary School Certificate at Class 10 and the Higher Secondary Certificate at Class 12, both managed by the state board. Class 12 science students then sit GUJCET for engineering and pharmacy seats, while medical hopefuls take NEET. It is a clear, textbook-anchored path that thousands of families trust, and Gujarati-medium teaching is common.",
        "The IB works on a different logic. Marks reward application, argument and command-term fluency, and the Diploma wraps in an essay, a knowledge course and service. IGCSE sits between the two: subject papers at Core or Extended level, a defined syllabus and exams in set sessions. Moving from GSEB to either one is possible, but it is easier before Class 9 than after.",
        "The table is a quick guide for parents weighing a change, and the year in which it makes sense.",
      ],
      table: {
        caption: "How the main boards look from a Prantij household",
        columns: ["Board", "Assessment style", "Teaching language", "Usual exit route", "Local tutor supply"],
        rows: [
          ["GSEB (SSC and HSC)", "State board papers, March season", "Gujarati or English", "GUJCET, NEET, Gujarat colleges", "Plentiful"],
          ["CBSE", "Board papers at Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG", "Moderate"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers, May and November sessions", "English", "Class 11 IB, A Level or an Indian board", "Hardly any"],
          ["IB Diploma", "Exams plus internal assessments, essay and CAS", "English", "AIU recognition, CUET-UG, universities abroad", "Almost none"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Prantij, and what drives the rate?",
      paragraphs: [
        "There is no fixed price list for IB and IGCSE tuition in Prantij because the rate depends on several things that vary from child to child. We do not publish prices. Instead, the rate for your child is sent in writing before any trial lesson is booked, so nothing is settled over a rushed call.",
        "Level and programme come first. A Higher Level Diploma Physics tutor with years of paper experience commands more than someone guiding a Class 7 MYP student through a design project. Scarcity matters as well: a tutor who has taught Further Mathematics or HL Chemistry is simply harder to find than a generalist, and the rate reflects that.",
        "Lesson frequency and duration change the effective cost too. Two lessons a week through a school year is a different commitment from three concentrated weeks before the November session. We would rather describe the shape of the arrangement, then give a figure for that shape, than quote a number that fits no one.",
        "Prantij parents sometimes ask how this compares with sending a child to Ahmedabad for weekend classes. Fuel, a lost Saturday and a long return trip are real costs, and the lesson itself is only part of the picture. An online lesson from the family home removes the travelling altogether.",
      ],
      bullets: [
        "Programme and level (SL, HL, Core, Extended)",
        "How scarce qualified tutors are in the subject",
        "Lessons per week and length of the plan",
        "Steady weekly support versus exam-season blocks",
      ],
    },
    {
      heading: "Online tuition, Ahmedabad centres, local teachers and self-study: which suits Prantij?",
      paragraphs: [
        "Four routes are realistic for a student in Prantij, and the right mix changes with the year. Online one-to-one tuition brings a specialist into the house without anyone leaving it. Ahmedabad centres hold real IB and IGCSE expertise but demand a long, repeated journey and fixed batch hours. A local teacher knows the town and charges accordingly, though few have prepared students for international papers. Self-study with past papers suits only the most disciplined learner.",
        "None of these excludes the others. Many families keep a local teacher for Gujarati or a language component and add an online specialist for Mathematics and the sciences, where syllabus knowledge matters most.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Prantij",
        columns: ["Route", "Specialist depth", "Travel needed", "Timing flexibility", "Suits"],
        rows: [
          ["Live one-to-one online", "High, matched to subject and board", "None", "Evenings and weekends, easily moved", "Every programme and subject"],
          ["Centre in Ahmedabad", "High but group-paced", "Long road or rail trip", "Fixed batch hours", "Families already travelling to the city"],
          ["Local teacher in Prantij or Talod", "Mostly GSEB and CBSE trained", "Short", "Reasonable", "Revision on a familiar syllabus"],
          ["Self-study with past papers", "Depends on the student", "None", "Total", "A very disciplined older student"],
        ],
      },
    },
    {
      heading: "How does the Prantij calendar of exams, festivals and weather affect study?",
      paragraphs: [
        "The first thing to know is that exam windows and local festivals do not line up kindly. The IB Diploma runs May and November sessions, with results in July and January. Cambridge IGCSE uses February and March, May and June, and October and November windows. Pearson Edexcel International GCSE has its own January, May and June, and October and November sessions. A Prantij family has to hold these beside the Gujarat school year.",
        "Local life adds its own rhythm. Navratri brings nine nights of garba across October, and many households keep late hours, so lessons shift to afternoons. Diwali and the Gujarati new year follow soon after, then Uttarayan in mid-January, a festival when rooftops fill and study time vanishes for a day or two. Holi and Dhuleti touch March.",
        "Weather matters too. Summer temperatures near forty degrees make late-afternoon study draining, and monsoon storms can interrupt power and mobile signal. Early-evening slots with buffer minutes work well, and lessons are easy to move to another day when a storm knocks out the connection.",
      ],
      table: {
        caption: "Calendar pressure points for a Prantij student",
        columns: ["Period", "What is happening", "Effect on study", "How tutoring adapts"],
        rows: [
          ["Jan to Mar", "Uttarayan, Holi, board exams, IGCSE Feb and March series", "Busy and distracted at once", "Mock papers on fixed dates, short sessions around festivals"],
          ["Apr to Jun", "IB May session, summer heat", "Fatigue and long power cuts", "Cooler early-evening slots, spare minutes built in"],
          ["Jul to Sep", "Monsoon, school reopens, IB results in July", "New topics, patchy connectivity", "Foundation lessons, flexible rescheduling"],
          ["Oct to Nov", "Navratri, Diwali, IB and IGCSE November sessions", "Late nights and festival gaps", "Compact revision blocks, afternoon slots during garba nights"],
          ["Dec", "IB January results, winter break", "Calmer weeks", "Review of strengths and a plan for the next term"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Prantij go next?",
      paragraphs: [
        "Most students from Sabarkantha with an IB Diploma consider three directions: universities in India, universities abroad, and professional courses. The Association of Indian Universities issues an equivalence certificate for the Diploma, which many Indian institutions ask for at admission, while a growing number accept CUET-UG scores.",
        "Within Gujarat, the obvious destinations are in Ahmedabad and Gandhinagar, where several institutes of national standing admit through their own routes. Engineering and medicine need extra care. The Diploma with Mathematics, Physics and Chemistry or Biology can be pointed at JEE or NEET, but eligibility rules change, so check the current notices from the National Testing Agency and the admitting body before choosing subjects.",
        "IGCSE students usually continue to Class 11 in the IB, A Level or an Indian board. Abroad, the United Kingdom, Canada, the United States and Australia are the common choices, and many Gujarati families already have relatives there who can advise. Predicted grades and teacher references carry real weight in those applications.",
        "A tutor can help a family see how subject choices today keep doors open later: a student who drops Mathematics at fifteen may find several courses closed at seventeen.",
      ],
    },
    {
      heading: "How are IB Mathematics AA and AI and the sciences taught online?",
      paragraphs: [
        "Mathematics Analysis and Approaches suits students who enjoy algebra, calculus and proof, and it is the usual route toward engineering or pure science. Applications and Interpretation leans on statistics, modelling and technology, and suits a student headed toward economics, social science or business. Each has Standard and Higher Level, and the choice is often best made after a trial lesson shows how a child reasons.",
        "Tutors work from the school's pace but fill the gaps: an unfinished calculus unit, shaky use of the graphical calculator, or an answer written without showing the working that earns method marks. Paper 1 and Paper 2 each need a different rhythm, and timed practice under exam conditions is built into the plan.",
        "Physics rewards a feel for units and order of magnitude. Chemistry punishes weak stoichiometry. Biology asks for exact definitions and for the language of the mark scheme. In every case the tutor uses a shared whiteboard, past-paper questions and a short written note afterwards so the parent can see what was done.",
        "Higher Level students gain from longer sessions before a mock exam because the content is deeper and the timing tight. Standard Level students often do better with shorter, regular lessons than with occasional long ones.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how should a Prantij student choose?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in most subjects. Core caps the highest grade, while Extended opens the whole scale, so a student planning to continue Mathematics or the sciences normally sits Extended. Pearson Edexcel International GCSE uses Foundation and Higher tiers with a similar logic.",
        "The decision depends on the child's present level and the destination. Someone aiming for the Diploma or A Level in a science should generally be entered for the upper tier. A student struggling with content may score more securely on the lower tier, and a tutor can judge this after a few weeks of work rather than at the start.",
        "Subject mix matters as much as tier. A balanced spread of language, mathematics, sciences and a business or humanities choice keeps Class 11 options open. Tutors explain how each choice affects what is available later, and how school-based assessment differs between the two boards.",
        "For students from Gujarati-medium backgrounds, the usual hurdle is English writing at the extended level, particularly directed writing and structured answers. It is a fixable gap, and regular practice with feedback closes it within a term or two.",
      ],
    },
  ],

  schoolClusters: [
    {
      city: "Prantij and Sabarkantha",
      note: "We could not confirm any school in Prantij or the wider district as an authorised IB World School or a listed Cambridge or Edexcel centre. Local private schools mostly teach the Gujarat Board or CBSE, so choice for IB and IGCSE is very limited here.",
      schools: [],
    },
    {
      city: "Nearby: Ahmedabad (SG Highway and Bodakdev)",
      note: "These confirmed Ahmedabad schools are the closest established options, though about fifty kilometres from Prantij. They suit families planning to relocate or to arrange boarding, not a daily trip.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Fountainhead School"],
    },
    {
      city: "Nearby: Ahmedabad (Bopal and Science City side)",
      note: "A second confirmed Ahmedabad school on the western growth corridor. As with the first cluster, check travel and boarding carefully before treating it as an option from Prantij.",
      schools: ["Mahatma Gandhi International School"],
    },
  ],
  schoolDisclaimer:
    "School names are included only to show where IB or Cambridge options for Prantij families genuinely sit. IB Gram is an independent tutoring service, with no affiliation to any school, the IB, Cambridge or Pearson, and every admission decision rests with the school concerned.",

  modesIntro:
    "Tutors do not visit homes in Prantij, so each format below is online. Home visits run only in Gurugram and parts of Delhi NCR. All three are live and private, and all are timed to suit a Prantij school day.",
  modes: [
    {
      title: "Online one-to-one from home",
      description: "The main format: a live private session on the family laptop with a specialist who knows the board and level.",
      bullets: ["One tutor, one student, a shared whiteboard", "Past papers solved step by step", "Short written note to parents after every session"],
    },
    {
      title: "Exam-season intensives",
      description: "Dense blocks before school mocks and ahead of the May and November sessions.",
      bullets: ["Timed papers followed by line-by-line review", "Command terms and mark schemes drilled", "Spare slots for power cuts in storm season"],
    },
    {
      title: "Steady weekly support",
      description: "A single weekly class in one subject, enough to hold a student alongside the school's pace.",
      bullets: ["Suits MYP and IGCSE years", "Paused for Navratri or harvest weeks", "Subject can change mid-year"],
    },
  ],

  process: [
    { title: "Share the details", description: "Send the board, subject, level and exam session by WhatsApp or email, and mention anything the school has said about pace." },
    { title: "Meet a matched tutor", description: "We pick someone who has taught that very course and send a brief profile ahead of the first class." },
    { title: "Try a free lesson", description: "A genuine class on a genuine topic, so your child can judge the teaching style first." },
    { title: "Get the rate in writing", description: "After a good trial we put the fee and lesson plan on paper. Nothing begins without your agreement." },
    { title: "Learn week by week", description: "Live sessions on a regular rhythm, a note after each and a swap of tutor if the match is not working." },
  ],

  whyPoints: [
    { title: "Chosen for your paper", description: "A Diploma Chemistry student is not given a generalist who also coaches Class 10 science. The tutor has taught the exam your child will sit." },
    { title: "Shaped by a Sabarkantha day", description: "Slots follow the school van, a parent's shop hours and local festival weeks, never a centre's fixed timetable." },
    { title: "Straight about local supply", description: "If no school nearby teaches your programme, we say so and explain what that means for the year." },
    { title: "Written progress", description: "A brief summary after each session records what was covered and what comes next." },
    { title: "Teaching, not ghost-writing", description: "Tutors explain method and content and never write internal assessments, essays or coursework." },
    { title: "Easy to leave", description: "The trial is free, fees come in writing, and swapping tutors costs nothing extra." },
  ],

  faqs: [
    { question: "Are there IB tutors in Prantij?", answer: "Yes, online. There are no IB specialists teaching in Prantij itself that we could confirm, so our tutors teach live from elsewhere in India. Lessons run on a laptop at your own home, one student with one tutor, matched to the programme, subject and level. The tutor has taught the actual IB papers, which is the main thing a local teacher trained for the Gujarat Board usually cannot offer." },
    { question: "Do tutors come to my home in Prantij?", answer: "No, tutors do not visit homes in Prantij. Home visits run only in Gurugram and parts of Delhi NCR. In Prantij, everything is online: a live private lesson on your own laptop at home, taught by a specialist. Many families find this works as well as a visit, because the tutor can be chosen for the subject rather than for living nearby." },
    { question: "Is online home tuition really private?", answer: "Yes, each lesson is one tutor with one student, never a batch. The word home tuition here means private tuition taken from home, with the tutor joining by video. You will usually sit nearby for the first lesson if your child is young, and you receive a written note afterwards covering what was taught, what the student found hard and what comes next." },
    { question: "Which schools in Prantij offer IB or IGCSE?", answer: "We could not confirm any. Schools in Prantij and the surrounding taluka mostly teach the Gujarat Board or CBSE. The nearest confirmed IB and Cambridge options are in and around Ahmedabad, about fifty kilometres away. If a local school begins an international programme, tell us and we will tutor against its syllabus within about a week." },
    { question: "What does IB tuition cost in Prantij?", answer: "It depends on programme, level, subject scarcity and lesson frequency, so we do not publish prices. A Higher Level Diploma science tutor costs more than a Class 7 MYP tutor. After you describe your child's needs we send the rate in writing, before any trial lesson is booked, so there is nothing to negotiate on a phone call." },
    { question: "Can a student from a Gujarat Board school switch to IGCSE?", answer: "Yes, and it is easiest before Class 9. A GSEB student can move into IGCSE or the IB with bridging lessons in English writing, Mathematics and Science. Switching later is harder but not impossible. A tutor can assess the gaps in a trial lesson and describe how long a bridging plan is likely to take." },
    { question: "How are IB lessons fitted around Navratri and Uttarayan?", answer: "We plan around them. During Navratri many households keep late nights, so lessons move to afternoons or the weekend. At Uttarayan in January a day or two is usually lost entirely. Tutors build the calendar in advance, add buffer weeks before mock exams, and reschedule freely when a festival or a power cut interrupts." },
    { question: "Does IB Gram help with IAs, the Extended Essay or TOK essays?", answer: "No, tutors coach but never write assessed work. They explain the criteria, show how a strong piece is structured, comment on a draft the student has written and teach the method. The writing, the research and the ideas stay entirely the student's own, which is what the IB requires and what examiners expect." },
    { question: "Which IGCSE boards do you cover?", answer: "Both Cambridge International and Pearson Edexcel International GCSE. The two differ in paper structure, tiers and exam sessions, so a tutor is matched by board code as well as subject. Tell us which board your child's school or exam registration uses and we match accordingly. A Level and AS tutoring is available as context for students heading that way." },
    { question: "What is the difference between Core and Extended IGCSE?", answer: "Core papers cover the basic syllabus and limit the top grade, while Extended covers more content and allows the full range of grades. A student planning to take a subject further, especially Mathematics or a science, normally sits Extended. Edexcel uses Foundation and Higher tiers in a similar way. A tutor helps decide after seeing how your child copes with harder questions." },
    { question: "When are the IB and IGCSE exams, and how soon should we start?", answer: "The IB Diploma has May and November sessions. Cambridge IGCSE runs in February and March, May and June, and October and November, while Edexcel has January, May and June, and October and November sessions. For a major exam, starting four to six months ahead is comfortable, and ten to twelve weeks is the realistic minimum for a focused revision plan." },
    { question: "Can an IB Diploma student from Prantij apply to Indian universities?", answer: "Yes. The Association of Indian Universities issues an equivalence certificate for the Diploma, and many universities also accept CUET-UG scores. Engineering and medicine need extra checking, since JEE and NEET eligibility rules are updated by the testing agency. Plan subject choices early, and confirm requirements with each institution before applying." },
    { question: "What internet speed do we need?", answer: "A steady connection of a few megabits per second is enough for a video lesson, along with a laptop, headphones and a shared whiteboard. Mobile hotspots work as a backup. In storm season, and in villages along the rail line where signal varies, we suggest checking the connection a day before the trial and keeping a second device charged." },
    { question: "Is the trial lesson really free?", answer: "Yes, the first lesson is free and carries no obligation. It is a proper lesson on a real topic, not a sales call. Afterwards you receive the rate in writing, and nothing begins until you say yes. If the tutor is not the right fit, we arrange a different one at no extra charge." },
    { question: "What happens if my child does not get along with the tutor?", answer: "We change the tutor at no charge. Fit matters more than most parents expect, especially with younger children and in demanding subjects. Tell us what was not working, whether pace, style or personality, and we shortlist someone different. The written notes after each lesson also help us see early if something is off." },
    { question: "Can you support a child in Class 8 who may move to an IB school next year?", answer: "Yes. A bridging plan for the term before a move usually covers the MYP criteria style, written English, and the subjects the school will test in an entry assessment. Short lessons with a tutor who has taught MYP help the child arrive confident. We do not promise admission, since the school makes that decision." },
    { question: "How do I get started?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the programme, subject, level, board and exam session. We reply with a tutor match and a trial lesson time, usually within a day. You will see a rate in writing before anything is booked." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How the same online service reaches students in towns throughout the country." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "A wider view of the way IB tutoring is arranged." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Subjects for Cambridge and Edexcel with tutors who know each board." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject support through Classes 11 and 12." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Coaching on criterion-based tasks from Class 6 to Class 10." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Both AA and AI, at Standard and Higher Level." },
    { label: "Meet the tutors", href: "/tutors/", description: "Who teaches IB and IGCSE with us." },
    { label: "Contact us", href: "/contact-us/", description: "Send a question or ask for a trial lesson." },
    { label: "IB and IGCSE tutors in Ahmedabad", href: "/ahmedabad/", description: "The nearest big city, where the closest confirmed IB and Cambridge schools are found." },
    { label: "IB and IGCSE tutors in Modasa", href: "/modasa/", description: "A neighbouring Gujarat town in the same northern region." },
    { label: "IB and IGCSE tutors in Udaipur", href: "/udaipur/", description: "The city at the far end of the Ahmedabad to Udaipur line." },
  ],

  closingHeading: "Book a free trial lesson from home in Prantij",
  closingBody:
    "Tell us the programme, subject and exam session your child faces. A tutor is found, a free trial is arranged and the fee is set out in writing before you decide. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp. IB Gram works independently of the IB, Cambridge, Pearson and every school.",
};
