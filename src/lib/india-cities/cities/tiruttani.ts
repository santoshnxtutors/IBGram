import type { CitySeoPage } from "../types";

/**
 * /tiruttani/ - IB and IGCSE tutoring page for Tiruttani, Tiruvallur district, Tamil Nadu. Online-only:
 * tutors do not visit homes in Tiruttani (home visits run only in Gurugram and parts of Delhi NCR). No IB or
 * Cambridge school could be confirmed inside the town, so stripSchools is empty and the clusters point honestly
 * to the Chennai side of Tiruvallur district, central Chennai and Tirupati. Facts: Wikipedia (town, taluk,
 * Pallipattu, Arakkonam, temple), edustoke.com listings, Chennai Public School's own site.
 */
export const tiruttani: CitySeoPage = {
  slug: "tiruttani",
  countryName: "Tiruttani",
  countryNameLong: "Tiruttani, Tamil Nadu",
  demonym: "Tiruttani",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around school hours, the Aadi Krithigai festival days at the hill temple and the October to December north-east monsoon",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.1746, longitude: 79.6117 },
  wikipedia: "https://en.wikipedia.org/wiki/Tiruttani",
  alternateNames: ["Thiruthani", "Tiruthani", "Thiruttani", "Tirutani"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Tiruttani | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Tiruttani students: live one-to-one online home tuition from PYP to Diploma and Cambridge or Edexcel IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tiruttani",
  heroEyebrow: "IB & IGCSE HOME TUITION, LIVE ONLINE, FOR TIRUTTANI STUDENTS",
  heroSubtitle:
    "Searching for private tuition at home in Tiruttani for an IB or Cambridge IGCSE course? Nothing in the town teaches either syllabus, so the help has to come from outside it. Your child sits down at home with a laptop and a specialist tutor, live and one-to-one, matched to the exact IB subject and level or the Cambridge and Edexcel IGCSE code, and timed around school hours, Aadi Krithigai and the north-east monsoon.",
  primaryKeyword: "IB and IGCSE tutors in Tiruttani",
  imageAltText: "Tiruttani student working through an IB Mathematics problem with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Tiruttani",
    "IGCSE tutor Tiruttani",
    "IB home tuition Tiruttani",
    "IGCSE home tuition Tiruttani",
    "IB private tuition Tiruttani",
    "IB Maths tutor Tiruttani",
    "IGCSE Maths tutor Tiruttani",
    "IB Physics tutor Tiruttani",
    "IB Chemistry tutor Tiruttani",
    "IB Biology tutor Tiruttani",
    "IB DP tutor Tiruttani",
    "IB MYP tutor Tiruttani",
    "IB PYP tutor Tiruttani",
    "IGCSE online tuition Tiruttani",
    "Cambridge IGCSE tutor Tiruttani",
    "Edexcel IGCSE tutor Tiruttani",
    "IB tutor Thiruthani",
    "IGCSE tuition Tiruvallur district",
    "online IB tutor near Arakkonam",
  ],

  heroTrustPoints: [
    "Tutors are chosen for your child's exact course: the IB subject and level, or the Cambridge or Edexcel syllabus code and tier",
    "Every lesson is a live video call, because tutors do not visit homes in Tiruttani; home visits run only in Gurugram and parts of Delhi NCR",
    "A real trial lesson comes first, and any decision about further sessions comes after it",
    "IB Gram is independent of the IB, Cambridge, Pearson and every school named here, and its tutors coach without ever writing assessed work",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered, plus CP" },
    { value: "IGCSE", label: "Cambridge and Pearson Edexcel" },
    { value: "IST", label: "Tutors teach on Indian time" },
    { value: "Free trial", label: "One lesson before you decide" },
  ],

  intro: {
    heading: "Why Tiruttani families look outside the town for IB and IGCSE help",
    paragraphs: [
      "Tiruttani is a temple town of a little under 45,000 people (44,781 at the 2011 census), set among low rocky hills in Tiruvallur district, close to the Andhra Pradesh border. The Tamil Nadu state board is the syllabus most families here know, with CBSE the usual alternative. We could not confirm an IB or Cambridge IGCSE school anywhere inside the town, so a parent hunting for IB Diploma Physics help or an IGCSE Chemistry teacher finds the local shelf empty.",
      "The real IB and Cambridge campuses are in Chennai, 84 km away by road, and in Tirupati, 67 km away across the state line. Neither works as a daily school run. The families most likely to look are those whose child already attends an international school there, those preparing for that move, and those linked to the Navy station at Arakkonam, 13 km away, or to a job along the Chennai corridor.",
      "Every IB Gram lesson is a live video call from your own table. Tutors do not visit homes in Tiruttani: in-person lessons run only in Gurugram and parts of Delhi NCR. What you get is a choice of tutors from across India, teaching on Indian Standard Time, so for IB and IGCSE tutors in Tiruttani the practical answer is online home tuition matched to the exact syllabus. Tutors coach, explain and mark, and never write assessed coursework; IB Gram is independent of the IB, Cambridge, Pearson and every school named on this page.",
    ],
    bullets: [
      "IB support from PYP to the Diploma and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Tutors picked by syllabus code and level, never by postcode",
      "A free trial lesson, then a written note after every session",
      "No home visits in Tiruttani; in-person lessons are only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Families write to us from Tiruttani at very different stages, from a Class 3 child whose school follows the PYP to a Class 11 student planning the Diploma. Each programme is summarised below with a note on how it tends to look from this part of Tamil Nadu.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Units of inquiry replace the subject-by-subject timetable, and children are watched for how they question, collaborate and explain rather than ranked by marks. The final year brings the Exhibition. Tutoring helps most with reading fluency, number sense and asking a good question.",
      countryNote:
        "Where the PYP comes up in Tiruttani it is usually because of a move between a Chennai PYP school and a local one, so early sessions bridge from state-board habits to inquiry-style work.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against four lettered criteria, and students meet the Personal Project in the last year. The skill that separates a 6 from a 4 is usually giving a reason, not naming a fact.",
      countryNote:
        "No school near Tiruttani teaches the MYP that we could confirm, so a student following it is boarding or living in Chennai, and lessons tend to land on weekends and holidays.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus Theory of Knowledge, the Extended Essay and a Creativity, Activity, Service record. Internal assessments carry around 20-30% of most subject grades, and final exams are sat in May.",
      countryNote:
        "Because no school near Tiruttani offers the Diploma, a student on it is most likely at a Chennai or Tirupati campus, so lessons follow that school's timetable and IA deadlines.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "At least two Diploma courses combined with a career-related study chosen by the school, plus a reflective project, language development and a personal and professional skills course. Very few Indian schools run it.",
      countryNote:
        "We found no CP school near Tiruttani. Where it does arise, the Diploma courses inside it are what a tutor can teach.",
    },
  ],

  subjectsIntro:
    "These are the subjects Tiruttani students ask about most. For each one we look at the level, the exam session and the assessment components before choosing a tutor, since someone who teaches HL Physics well is not automatically right for SL.",
  subjects: [
    { name: "IB Mathematics: Analysis and Approaches", levels: "HL / SL", description: "State-board students arrive with sharp algebra and quick arithmetic. What needs building is written reasoning that earns method marks, and an Exploration topic picked weeks before the school deadline." },
    { name: "IB Mathematics: Applications and Interpretation", levels: "HL / SL", description: "Modelling, statistics and the graphic display calculator. Students who enjoyed data handling in Class 10 do well once they practise saying what a regression line or a confidence interval means." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics and waves are familiar ground. The data booklet, uncertainty and a Scientific Investigation that could survive a moderator's questions are where lessons usually begin." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry and bonding are rarely the trouble. Organic pathways, equilibrium calculations and a practical report written the way IB markers read it need slower, repeated practice." },
    { name: "IB Biology", levels: "HL / SL", description: "Broad rather than hard. Marks leak away on command terms, where 'outline' and 'evaluate' ask for different depths, and on choosing a statistical test that fits the data." },
    { name: "IB Economics", levels: "HL / SL", description: "Fully labelled diagrams plus a recent Indian or global example carry Paper 1. A running file of current cases, such as fuel prices or the rupee, saves last-minute scrambling." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward applying a concept to the named firm. The research project needs a real, cooperative organisation, so finding one early matters." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and pseudocode need as much practice as programming. The IA is a working product with documentation, so weekly coding beats extra reading." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Paper 1 commentary and Paper 2 comparison reward rehearsed structure more than flair. Students from Tamil-medium schools gain most from extended writing practice in English." },
    { name: "IB Tamil A / B", levels: "HL / SL", description: "For students for whom Tamil is a home language or a language of study. Availability depends on the school, so we look for a tutor who has taught that exact level." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Many Tamil Nadu students meet Hindi late, so SL is often a fresh start with Devanagari. Lessons target the written register and unscripted speaking for the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP core", description: "Works well as a conversation in which a student defends a position under questioning, using real examples to test an exhibition commentary and plan the essay." },
  ],

  igcseSubjectsIntro:
    "IGCSE help covers Cambridge and Pearson Edexcel. A student from Tiruttani is most likely to meet it at a school in Chennai or Tirupati, or to be preparing for a move, so the list begins from the syllabus code and not from the subject name alone.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Moving to Extended is mainly about speed and stamina, especially on the non-calculator paper, where an unclear method can cost more than a slip in the answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Brings calculus and further algebra forward by a year or two, which sets a student up for IB Mathematics Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The mathematics overlaps with Cambridge but the question styles do not, so a student crossing boards needs Edexcel's own past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging formulae under time pressure is the usual weak spot, and the alternative-to-practical paper deserves attention from the first term." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and the organic chemistry that builds on them need steady weekly practice, along with precise description of experiments." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and inheritance carry more weight than students expect, and the longer structured answers reward a practised, stepwise style." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pair theory with real Python practice, since tracing an algorithm only sinks in once it has been run and debugged." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Learn the diagrams exactly right early on, because the higher marks sit in the evaluative answers that follow them." },
    { name: "IGCSE Tamil as a Second Language", levels: "Grade 9-10", description: "For students who want the home language on their IGCSE record. We look for a tutor who has taught the course recently, because few have." },
  ],

  regionsTitle: "Tiruttani and the towns around it, all taught online",
  regionsIntro:
    "A lesson reaches your child wherever in the Tiruttani belt you live. What differs from one locality to the next is the school context and the road or rail link to Chennai, which matters when a family is deciding between staying put and moving closer to an international school.",
  regions: [
    { name: "Thanigai hill and Saravana Poigai", note: "The temple quarter at the foot of the 365-step hill, busiest on Aadi Krithigai and on New Year's Eve, when the steps are washed and a midnight puja is held." },
    { name: "Tiruttani railway station", note: "The station on the Arakkonam to Renigunta line, served by suburban trains towards Chennai, a link families weigh when thinking about a Chennai school." },
    { name: "The Arakkonam road", note: "Leads about 13 km to Arakkonam, a long-established railway junction and the base of the Navy's INS Rajali air station; a posting there can bring children from schools on any board." },
    { name: "The Chennai highway through Thiruvallur", note: "The route a family weighing a Chennai IB school would drive, 84 km to the city, with Thirumazhisai's IB campus on the Chennai side of the district." },
    { name: "The Renigunta road towards Nagari and Tirupati", note: "Crosses into Andhra Pradesh. Tirupati, 67 km away, lists two Cambridge IGCSE schools, and Telugu is the home language for many households on this side." },
    { name: "Pallipattu and the Kusasthalai valley", note: "A farming town about 36 km away on the Kusasthalai river; it and Tiruttani taluk were both transferred from Andhra to Madras State in 1960." },
    { name: "Thiruvalangadu", note: "A village on the Chennai to Arakkonam line, known for the Vadaranyeswarar temple and as the birthplace of the saint Pattinathar." },
    { name: "The town's three colleges", note: "Arulmigu Sri Subramaniya Swamy Government Arts College, Tiruttani Polytechnic College and GRT Institute of Engineering and Technology bring staff families and students into the town." },
  ],

  schoolDisclaimer:
    "Schools are named only to show where the IB or Cambridge IGCSE is actually taught within reach of Tiruttani, drawn from the schools' own websites and public school directories. IB Gram is an independent tutoring service with no partnership, endorsement or arrangement with Chennai Public School, CPS Global School, M.CT.M. Chidambaram Chettyar International School, Akshar Arbol International School, Edify School, Slate - The School, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Tiruttani itself",
      note: "We found no school in the town listing the IB or Cambridge IGCSE, so none is named here. Schools inside Tiruttani work to Indian boards, chiefly the Tamil Nadu state board.",
      schools: [],
    },
    {
      city: "Nearby: Chennai, the Thirumazhisai side",
      note: "Chennai Public School's own website says its Thirumazhisai campus teaches the IB from KG to Class 12 alongside CBSE, with Cambridge and IB listed under CPS Global School.",
      schools: ["Chennai Public School (CPS Global School), Thirumazhisai", "CPS Global School, Anna Nagar"],
    },
    {
      city: "Nearby: central Chennai, 84 km away",
      note: "Directory listings show IGCSE, IB or both here. Reaching these schools from Tiruttani means boarding or relocating, so they matter mainly to families planning a move.",
      schools: ["M.CT.M. Chidambaram Chettyar International School, Alwarpet", "Akshar Arbol International School, West Mambalam"],
    },
    {
      city: "Nearby: Tirupati, 67 km away",
      note: "Across the border in Andhra Pradesh, directory listings show Edify School for CBSE and IGCSE and Slate - The School for IGCSE.",
      schools: ["Edify School, Tirupati", "Slate - The School, Tirupati"],
    },
  ],

  modesIntro:
    "Whatever the timetable, the lesson itself is a live one-to-one video call between your child and the tutor, on IST, at your own table. These three patterns suit the Tiruttani year, and none involves a tutor coming to your door.",
  modes: [
    {
      title: "Weekday evening lessons",
      description:
        "A fixed hour after school and homework, repeated weekly so the tutor builds a running picture of where your child loses marks.",
      bullets: [
        "Suits students in class through the day",
        "Marked practice fits between lessons",
        "One tutor stays through a term",
        "Easy to shift around a festival or exam week",
      ],
    },
    {
      title: "Weekend morning blocks",
      description:
        "A longer Saturday or Sunday session for work an hour cannot hold: a Mathematics Exploration plan, a science investigation or an oral rehearsal.",
      bullets: [
        "Room for a full past paper with immediate marking",
        "Useful for IA and Personal Project planning",
        "Cooler mornings suit April and May",
        "Keeps weekday evenings free",
      ],
    },
    {
      title: "Holiday and pre-exam intensives",
      description:
        "Several lessons a week for a defined stretch, usually before mocks, a boarding school's exam block or the Cambridge and IB sessions.",
      bullets: [
        "Timed papers marked to the published scheme",
        "Corrected work discussed in the next lesson",
        "Planned clear of festival days and the wettest monsoon weeks",
        "Book two or three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in and around Tiruttani?",
      paragraphs: [
        "Not inside the town, as far as we could confirm. Schools in Tiruttani work to Indian boards, chiefly the Tamil Nadu state board. The nearest campuses publishing an IB or Cambridge IGCSE offering are on the Chennai side of Tiruvallur district, in Chennai itself, and across the state line in Tirupati, so every school named below is labelled as nearby.",
        "On the Chennai side, Chennai Public School's Thirumazhisai campus says on its own website that it teaches the IB from KG to Class 12 alongside CBSE, with Cambridge under its CPS Global School wing. Inside Chennai, directory listings show M.CT.M. Chidambaram Chettyar International School at Alwarpet and Akshar Arbol International School at West Mambalam. At 84 km by road, these mean boarding or relocating, not commuting.",
        "Tirupati is nearer, at 67 km, and matters to households on the Telugu-speaking side of the border. Directory listings show Edify School there for CBSE and IGCSE, and Slate - The School for CBSE up to Class 10 and IGCSE.",
        "A thin local supply does not mean thin preparation. Every IGCSE candidate sits the same Cambridge or Pearson Edexcel papers, and IB examiners mark to one worldwide standard, so a tutor who has taught your child's exact course recently gives a Tiruttani student the same footing as a classmate in a city with ten international schools.",
      ],
      table: {
        caption: "IB and IGCSE schools within reach of Tiruttani",
        columns: ["School", "Place", "What its listing says"],
        rows: [
          ["Chennai Public School (CPS Global School)", "Thirumazhisai, Tiruvallur district", "IB from KG to Class 12 with CBSE; Cambridge and IB under CPS Global School"],
          ["M.CT.M. Chidambaram Chettyar International School", "Alwarpet, Chennai", "IGCSE and IB Diploma"],
          ["Edify School", "Tirupati, Andhra Pradesh", "CBSE and IGCSE"],
          ["Slate - The School", "Tirupati, Andhra Pradesh", "CBSE to Class 10 and IGCSE"],
        ],
      },
      bullets: [
        "No IB or Cambridge school could be confirmed inside Tiruttani",
        "Thirumazhisai has the closest confirmed IB campus, on the Chennai side of the district",
        "Tirupati, 67 km away, lists Cambridge IGCSE at two schools",
      ],
    },
    {
      heading: "Tamil Nadu State Board, CBSE, ICSE, IB or IGCSE: how do they differ for a Tiruttani student?",
      paragraphs: [
        "The biggest difference is how marks are earned. The Tamil Nadu State Board and CBSE mostly reward accurate recall and practised procedure on a fixed syllabus, while the IB and IGCSE reward applying knowledge to unfamiliar wording, and the IB adds internally assessed coursework marked against published criteria. Families often notice it in the first unit test after a move, when a fully correct answer loses marks because the reasoning was never written out.",
        "Students raised on the state board's Samacheer Kalvi textbooks are often quick and accurate with calculation, a real advantage in IB Mathematics and IGCSE Physics. What changes is presentation: markers want each step shown, units stated and a short reason for the method. That habit costs nothing in content and improves within a few weeks of marked practice.",
        "Language is the second shift. Tamil is the medium or a required subject for many state-board students, while IB and Cambridge papers are in English from the first page, with command words such as 'discuss' and 'justify' that carry exact meanings. Extended English writing, such as an IB English A Paper 2 essay, usually needs help before the content does.",
        "CBSE and ICSE sit between the two camps: English-medium and national, but still paper-centred, with ICSE adding more written and practical work. No route closes a door. A state-board student can move into IGCSE at Class 9 or the Diploma at Class 11 with a few months of preparation beforehand.",
      ],
      table: {
        caption: "Tamil Nadu State Board, CBSE, ICSE, IB and IGCSE at a glance",
        columns: ["Feature", "Tamil Nadu State Board", "CBSE / ICSE", "IB / Cambridge IGCSE"],
        rows: [
          ["Language of study", "Tamil or English medium, Tamil as a subject", "English, with Hindi or a regional language as a subject", "English, with Tamil, Telugu or Hindi as language courses"],
          ["How marks are earned", "Public exams on a fixed syllabus; recall and procedure", "National board exams; recall with some application", "Application and analysis; internal assessment in the IB"],
          ["Weight of coursework", "Small, mostly practical records", "Modest; more project and practical work in ICSE", "Around 20-30% in most IB subjects; coursework in some IGCSE subjects"],
          ["Entrance route in India", "Class 12 marks, then NEET or JEE where relevant", "NEET, JEE and CUET-UG", "AIU equivalence first, then the same exams"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a family in Tiruttani?",
      paragraphs: [
        "IB Gram does not publish prices, and the honest answer is that the rate depends on the lesson, not the town. Programme, subject and level, session length and how scarce the tutor's exact experience is all feed in, and the figure is quoted in writing before anything is booked. For IB and IGCSE tutors in Tiruttani nothing is added for distance, because no tutor travels.",
        "Scarcity is the main driver. Someone who taught HL Chemistry or HL Mathematics this academic year is harder to find than a tutor for IGCSE Core Mathematics, so the first costs more per hour. Length matters too: 45 minutes for a PYP learner is priced differently from a two-hour Saturday block for planning a Mathematics Exploration. Ask what a quote covers, including marking between lessons.",
        "Count the costs outside the quote. A dependable broadband or mobile data connection, a headset and a way to show handwritten working are all a lesson needs, and a phone on a stand pointing at the notebook does the last job well enough.",
        "The fairest comparison is with what actually exists. A weekly class at a Chennai centre means an 84 km journey each way for one hour of teaching, and moving house to be near an international school changes the whole household budget. Online tuition removes the travel, not the specialist, and lessons can be timed around school breaks and exam weeks.",
      ],
    },
    {
      heading: "Online lessons at home, coaching classes, local tutors or self-study: which suits IB and IGCSE in Tiruttani?",
      paragraphs: [
        "For an IB or Cambridge syllabus, a specialist online tutor is the option built around the course. Coaching classes and local private tutors in towns of Tiruttani's size mostly serve the state board, CBSE and entrance-exam preparation, which is where the batch sizes are, and self-study helps with past papers but leaves assessed writing unchecked. None is wrong in itself; the question is which one matches the syllabus your child will actually be examined on.",
        "Coaching classes in towns like Tiruttani tend to be built for volume: board-exam revision and foundation courses for NEET and JEE, taught to large groups after school. An IB Chemistry HL student cannot be taught there because no batch exists, and a class of forty cannot mark an Internal Assessment draft line by line. Coaching can still help with a general Science or Mathematics base, alongside IB teaching and not instead of it.",
        "A private tutor down the road can be excellent for Class 10 Mathematics and still be the wrong person for IGCSE 0580 Extended, because paper structure, calculator rules and mark scheme conventions differ. The useful test is recent, specific experience: has this person taught your child's exact course this year? Online, that test can be applied to tutors across the country instead of the few who live nearby.",
        "Self-study has its place. A disciplined student can work through free Cambridge past papers and mark schemes, and many do. What rarely holds up alone is assessed writing: an Exploration, a science investigation or an oral needs a second reader who knows what the criteria reward.",
      ],
      table: {
        caption: "Four ways to study an international curriculum from Tiruttani",
        columns: ["Option", "Built around IB or IGCSE?", "Format", "Main limit for Tiruttani families"],
        rows: [
          ["Online one-to-one tutor matched by syllabus", "Yes, chosen for the exact course and level", "Live video lesson at home", "Needs a steady connection and a fixed weekly hour"],
          ["Coaching classes in or near the town", "Rarely; built for board exams, NEET and JEE", "Batches, usually large", "No batch exists for IB Higher Level or IGCSE subjects"],
          ["A private tutor nearby", "Sometimes, often not", "One student, taught locally", "Recent experience of the current syllabus is hard to find"],
          ["Self-study with past papers", "Only as far as published papers go", "Alone, at your own pace", "Coursework and long answers go unchecked"],
        ],
      },
    },
    {
      heading: "How do Aadi Krithigai, the north-east monsoon and exam dates shape the school year in Tiruttani?",
      paragraphs: [
        "They shape it more than most families expect. The school year starts in June, Aadi Krithigai brings crowds to the hill temple in July or August, and the north-east monsoon makes October the wettest month, with about 194 mm of rain against roughly 1,109 mm for the whole year. IB and Cambridge exam dates sit on top of this, and good planning moves lessons around the pressure points instead of through them.",
        "Aadi Krithigai is a three-day festival in the Tamil month of Aadi, when Murugan is carried in procession from the Saravana pond at the foot of the hill to the shrine on top. The town fills, roads near the hill slow down and many families travel or host relatives. We keep lesson slots flexible on those days and use them for light revision. On 31 December the 365 steps are washed and a midnight puja is held, another evening to leave free.",
        "From October to December the north-east monsoon brings the year's heaviest rain, and cyclone alerts can close schools for days across the northern districts of Tamil Nadu. At the other extreme, May highs near 39.9 degrees Celsius make early-morning weekend blocks more comfortable than afternoon ones.",
        "On the exam side, IB Diploma papers fall in May with results in early July. Cambridge IGCSE runs its main series in May and June and a second in October and November, with a limited February and March series for some syllabuses in India, and Pearson Edexcel adds a January window for some subjects. State-board public exams come in March and April and CBSE in February and March, which matters when siblings study on different boards.",
      ],
      table: {
        caption: "The Tiruttani year: exams, festivals, weather and what they mean for lessons",
        columns: ["Months", "What is happening", "What it means for tutoring"],
        rows: [
          ["January", "Pongal holidays; lows near 17.8 C, the coolest month", "Expect a short mid-month gap; IB and IGCSE mocks often begin"],
          ["March to April", "State-board public exams; heat builds", "Final-revision plans for IB and IGCSE students; lessons avoid siblings' exam days"],
          ["May", "IB Diploma exams and the Cambridge and Edexcel May-June series; highs near 39.9 C", "Short early or late sessions; timed past papers"],
          ["July to August", "IB results in early July; Aadi Krithigai at the hill temple", "Lighter schedule on festival days; new-year study plans"],
          ["October to December", "North-east monsoon, October wettest at about 194 mm; Cambridge October and November series", "Backup slots for power or data loss; mock and November-series preparation"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Tiruttani go after school?",
      paragraphs: [
        "Most look towards Chennai, Vellore or abroad. The Indian route runs through an Association of Indian Universities equivalence certificate for IB or IGCSE-based qualifications, then CUET-UG, JEE Main or NEET as the course demands. The overseas route runs through predicted grades and each country's own entry tests. Either way, the subjects and levels chosen at Class 11 quietly decide which doors stay open.",
        "Close to home there are Arulmigu Sri Subramaniya Swamy Government Arts College, Tiruttani Polytechnic College and GRT Institute of Engineering and Technology. For wider choice, families look to Chennai, with IIT Madras, Anna University, Loyola College and Madras Christian College, and to Vellore, with VIT and the Christian Medical College. Further afield are SRM at Kattankulathur, Shiv Nadar University Chennai and Krea University at Sri City in Andhra Pradesh.",
        "JEE Main and NEET are open to candidates with IB or IGCSE-based qualifications once equivalence is cleared, but each has subject and percentage conditions that change by year. NEET, for example, asks for Physics, Chemistry and Biology, so a student who wants medicine should make sure all three are in the subject choice. Counselling bodies, including those for Tamil Nadu engineering seats, publish their own rules for IB and Cambridge candidates; read them a year early.",
        "For universities abroad, British applications ask for predicted IB points with named Higher Level subjects, American ones combine predicted grades with essays and, at some colleges, SAT or ACT scores, and Canada and Australia convert IB points through their own tables. Dr Sarvepalli Radhakrishnan, born in Tiruttani in 1888, is remembered every 5 September on Teachers' Day. Our tutors sharpen subject depth and exam technique; they do not run admissions counselling.",
      ],
    },
    {
      heading: "Choosing subjects and levels: IB Mathematics AA or AI, the sciences, and IGCSE Core or Extended",
      paragraphs: [
        "Mathematics comes first because every Diploma student takes it. Analysis and Approaches suits students who enjoy proof, functions and calculus and may study engineering, physical science or economics. Applications and Interpretation suits those who would rather model data, use technology and read statistics. State-board students drift towards Approaches because it feels familiar, but a student who dislikes abstraction may score higher on Applications, and a tutor can watch past-paper performance for a week or two before the family commits.",
        "Both courses include an Exploration, a short independent piece of mathematical writing, and it is the component most often left too late. A topic with real data or real curiosity behind it, such as decades of rainfall records, cricket scoring statistics or the geometry of a temple gopuram, makes the writing easier.",
        "In Physics and Chemistry a strong state-board base helps, but three things are new: the data booklet, which lists constants and formulae without saying when to use them; uncertainty and error propagation in practical work; and the Scientific Investigation, where the student poses a question, controls variables and justifies the method. Begin early, pick a variable that school or home equipment can measure, and run a pilot.",
        "Biology is tested through command terms, and students used to a one-line definition lose marks by stopping early. Its investigation also needs a statistical test chosen and justified for the data. Families thinking about medicine should check that Physics, Chemistry and Biology are all in the subject choice, because NEET eligibility asks for them, and then check the level each target course wants.",
        "For IGCSE, choose Extended Mathematics and sciences if the Diploma, A Levels or a STEM degree is even a possibility, since Core caps the grade and leaves a larger gap at Class 11. Additional Mathematics (0606) suits students with solid algebra and sets up IB Mathematics Analysis and Approaches. Pearson Edexcel Mathematics A (4MA1) is tiered Foundation and Higher and words questions differently from Cambridge, so practise on the board's own papers, and confirm tier entries with the school before its deadline.",
      ],
      bullets: [
        "Choose AA for calculus and proof, and AI for modelling and statistics",
        "Start the Exploration early, with a question the student is curious about",
        "Check Physics, Chemistry and Biology are all in the subject choice if NEET is a goal",
        "Take Extended Mathematics and sciences whenever the Diploma or STEM is possible",
      ],
    },
  ],

  tutorsIntro:
    "IB and IGCSE tutors in Tiruttani are matched from a roster spread across India, and every lesson is delivered live online. A tutor is proposed only when they have recently taught your child's exact course, level and exam series, because the syllabus matters more than where the tutor lives.",

  process: [
    { title: "Share the brief", description: "Programme or board, subject and level, current grade, exam series and the hours your household can protect." },
    { title: "Review a short list", description: "One or two tutor profiles, each with the reason it was chosen for that exact course." },
    { title: "Take a free trial", description: "A live online lesson on a real topic from your child's syllabus, with nothing to pay or sign." },
    { title: "Approve the first month", description: "The tutor proposes what to cover and how progress is reported; you agree or ask for changes." },
    { title: "Settle into a routine", description: "A weekly slot, a written note after each lesson, progress talked through with you and a new tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Chosen for your syllabus", description: "The tutor is picked for the precise IB subject and level or the exact Cambridge or Edexcel code, not for a general claim to cover international boards." },
    { title: "An honest picture of Tiruttani", description: "We say plainly that no IB or IGCSE school is confirmed in the town, that tutors do not visit homes here, and where the nearest campuses are." },
    { title: "Judge before you pay", description: "A free trial lesson on real content lets your child meet the tutor, and lets you decide on what you saw." },
    { title: "Coaching, never ghost-writing", description: "Guidance on Internal Assessments, coursework and the Extended Essay is given; writing any part of them is not." },
    { title: "A record of each lesson", description: "A short written note follows every session, and progress is talked through with you along the way." },
    { title: "Free to change course", description: "No ties to any school or board, and a straightforward re-match if the fit is wrong." },
  ],

  faqs: [
    { question: "How do I find an IB or IGCSE tutor in Tiruttani?", answer: "You book one online rather than searching the town, because no school or coaching class in Tiruttani teaches either syllabus. Tell us the programme or board, subject, level, current grade and preferred hours. We reply with tutors who have taught that exact course recently, and your child takes a free trial lesson before you decide. IB and IGCSE tutors in Tiruttani are matched by syllabus and level first, never by distance." },
    { question: "Will a tutor come to our home in Tiruttani?", answer: "No, tutors do not visit homes in Tiruttani. In-person home tuition runs only in Gurugram and parts of Delhi NCR. What we offer here is online home tuition: a live one-to-one lesson on a laptop while your child sits at your own table, with a shared whiteboard standing in for the desk, and a choice of tutors from across India." },
    { question: "Is there a school in Tiruttani that teaches the IB or Cambridge IGCSE?", answer: "We could not confirm one. Schools inside the town work to Indian boards, chiefly the Tamil Nadu state board. The nearest confirmed options are in Thirumazhisai and Chennai, 84 km away, and in Tirupati, 67 km away, where Chennai Public School, M.CT.M. Chidambaram Chettyar International School, Edify School and others are listed. Ask any school directly before relying on a directory entry." },
    { question: "How much do IB and IGCSE lessons cost for students in Tiruttani?", answer: "The rate depends on the programme, subject, level and lesson length, and we quote it in writing before you book. Higher Level sciences and HL Mathematics sit above IGCSE Core subjects because fewer tutors have taught them recently. Living in Tiruttani neither adds nor removes anything, since no one travels. There are no published prices, and the trial lesson is free." },
    { question: "Can my child study IGCSE while still in a Tamil Nadu state board school?", answer: "Yes for learning, with one caveat for exams. A tutor can teach the Cambridge or Edexcel syllabus alongside school, which suits a child preparing to move to an IGCSE school in Chennai or Tirupati. Sitting the exams requires entry through a registered Cambridge or Pearson centre that accepts private candidates, so check that centre's rules and deadlines early, because entries close months before each series." },
    { question: "Will the tutor write my child's IA, Extended Essay or coursework?", answer: "No, tutors coach and never write or rewrite assessed work. They can help a student choose a workable research question, explain what each criterion rewards, plan data collection and comment honestly on drafts the student has written. That line protects your child, because the IB and Cambridge both treat work that is not the candidate's own as malpractice, with serious consequences for results." },
    { question: "Which IB and IGCSE subjects can my child study with you?", answer: "Most of the common ones. On the IB side that means Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English A, Tamil, Hindi and Theory of Knowledge. On the IGCSE side it includes Mathematics, Additional Mathematics, the three sciences, Computer Science, Economics and Tamil. Tell us the exact course and level, and we confirm a suitable tutor before the trial." },
    { question: "Do the lessons run in Tamil or English?", answer: "Lessons run in English, because IB and Cambridge papers, mark schemes and command words are all in English. A tutor can slow down and rephrase for a younger child who is still gaining confidence. For Tamil A or B, or for Telugu and Hindi, we look for a tutor who teaches that language at the right level, so a language specialist teaches the language subject." },
    { question: "What happens if the north-east monsoon cuts power or internet during a lesson?", answer: "Tell your tutor as early as you can, and the lesson can normally be moved to another slot. October to December is the wettest stretch in Tiruttani, with about 194 mm in October alone, and storms can interrupt power or mobile data. Written notes and shared documents from earlier sessions let a student keep working meanwhile, and a charged phone hotspot gives you a backup." },
    { question: "Can tutoring promise a particular IB or IGCSE grade?", answer: "No, and any tutor who promises one is overreaching. Grades depend on the student's work, the school's teaching, the exam paper and the marking. What a tutor can do is find the specific gaps, teach exam technique, mark practice papers to the published scheme and give honest feedback, all of which improve the odds. IB Gram makes no promises about results or admission anywhere." },
    { question: "When should a Tiruttani student start IB or IGCSE tuition?", answer: "Ideally at the start of the course, Grade 9 for IGCSE and Class 11 for the Diploma, so weak foundations are repaired before internal exams and predicted grades start to matter. For a child planning a move, begin two to three terms before the transfer. Starting later still helps, though the plan then narrows to the topics carrying the most marks." },
    { question: "Can lessons run alongside NEET or JEE preparation?", answer: "Yes, with realistic scheduling. Many Tamil Nadu students balance entrance coaching with school, so we agree a fixed, modest weekly load and avoid stacking sessions on coaching days. IB and IGCSE Physics, Chemistry, Biology and Mathematics overlap strongly with entrance syllabuses, but command-word technique differs, and a tutor keeps the two styles of preparation from blurring." },
    { question: "How does the free trial lesson work?", answer: "It is a real lesson on a real topic from your child's course, taken live online with the tutor we propose, at no charge and with no obligation. Afterwards the tutor shares a short written note on what was covered and what to do next, and you decide whether to book more, change the tutor or stop. The rate is quoted in writing before the trial." },
    { question: "Is IB Gram connected to any school, exam board or the IB itself?", answer: "No. IB Gram is an independent tutoring service with no affiliation to the International Baccalaureate, Cambridge, Pearson or any school named on this page. Schools are mentioned only so that you can see where these syllabuses are taught near Tiruttani. Tutors teach and coach; they do not represent any school or board, and they never write assessed coursework." },
    { question: "My child boards at a Chennai school. Can lessons fit around term breaks?", answer: "Yes. Lessons can be booked in the holidays or, if the school allows it, in a fixed weekend or evening slot during term. The tutor is matched to the course the school teaches, and the session notes help when the student returns to school. Send us the school's term dates and internal exam weeks so that we can plan the year around them." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How IB Gram works with families in cities and towns across the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The place where home visits are available: Gurugram and parts of Delhi NCR." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam series in one place." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma explained: HL and SL, internal assessments, TOK and the Extended Essay." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches compared with Applications and Interpretation." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and arrange the free trial lesson." },
    { label: "IB and IGCSE tutoring in Chennai", href: "/chennai/", description: "The region's main cluster of international schools, 84 km down the highway." },
    { label: "IB and IGCSE tutoring in Arakkonam", href: "/arakkonam/", description: "The railway junction town 13 km from Tiruttani." },
    { label: "IB and IGCSE tutoring in Thiruvallur", href: "/thiruvallur/", description: "The district headquarters, in the same district as Tiruttani." },
    { label: "IB and IGCSE tutoring in Tirupati", href: "/tirupati/", description: "The Andhra Pradesh city 67 km across the border." },
  ],

  closingHeading: "Start with a free trial lesson from Tiruttani",
  closingBody:
    "Tell us the programme or board, the subject and level, where your child stands now and the hours that work at home. We reply with a tutor matched to that course and a trial slot online, free of charge. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp, and ask for IB and IGCSE tutors in Tiruttani by name if you like.",
};
