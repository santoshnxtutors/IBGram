import type { CitySeoPage } from "../types";

/**
 * /polur/ - IB and IGCSE page for Polur, Tiruvannamalai district, Tamil Nadu. Online-only: no tutor
 * visits homes in Polur. No IB or Cambridge/Edexcel school is confirmed in the town; stripSchools is
 * empty and clusters point at Vellore, Tiruvannamalai and Chennai.
 */
export const polur: CitySeoPage = {
  slug: "polur",
  countryName: "Polur",
  countryNameLong: "Polur, Tiruvannamalai, Tamil Nadu",
  demonym: "Polur",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are set after the school day, kept away from the northeast monsoon downpours of October and November and from the Pongal and Karthigai Deepam weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 12.5167, longitude: 79.1333 },
  wikipedia: "https://en.wikipedia.org/wiki/Polur",
  alternateNames: ["Polur Tiruvannamalai", "Pollur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Polur | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Polur, Tiruvannamalai district: live one-to-one online tuition from PYP to DP and IGCSE, with a free trial lesson and written notes.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Polur",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR POLUR FAMILIES",
  heroSubtitle:
    "Polur sits at the foot of the Javvadhi hills on the road between Vellore and Tiruvannamalai, close enough to both to borrow their colleges and hospitals but without an international school of its own. A child here who needs private tuition from home for the IB or IGCSE gets a live one-to-one video lesson, because tutors do not come to houses in Polur, and the teacher can be anywhere in India.",
  primaryKeyword: "IB and IGCSE tutors in Polur",
  imageAltText: "Student in Polur, Tamil Nadu, in a live online IB Chemistry class with a tutor, notebook open beside a laptop",
  secondaryKeywords: [
    "IB tutor Polur",
    "IGCSE tutor Polur",
    "IB home tuition Polur",
    "IGCSE home tuition Polur",
    "IB private tuition Polur",
    "IB Maths tutor Polur",
    "IGCSE Maths tutor Polur",
    "IB Physics tutor Polur",
    "IB Chemistry tutor Polur",
    "IB Biology tutor Polur",
    "IB DP tutor Polur",
    "IB MYP tutor Polur",
    "IB PYP tutor Polur",
    "IGCSE online tuition Polur",
    "IB tutor Tiruvannamalai district",
    "IGCSE tutor Tiruvannamalai",
    "IB tutor Vellore region",
    "online IGCSE tutor Tamil Nadu",
    "Cambridge IGCSE tutor Polur Tamil Nadu",
  ],

  heroTrustPoints: [
    "Each tutor is picked for the specific IB subject and level or Cambridge or Edexcel code your child studies",
    "Lessons are screen-based; a tutor knocking on a door is a Gurugram and Delhi NCR arrangement and never happens in Polur",
    "A free first lesson, then a written plan, then your decision",
    "No tie-up with any Polur school, coaching centre, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Live video", label: "One tutor with one student" },
    { value: "PYP to DP", label: "The whole IB range" },
    { value: "IST", label: "Same clock on both ends" },
    { value: "Free first class", label: "Before any payment" },
  ],

  intro: {
    heading: "What IB or IGCSE tuition looks like for a family in Polur",
    paragraphs: [
      "Polur is a municipality and divisional headquarters in Tiruvannamalai district, about 29 km north of Tiruvannamalai town and 45 km south of Vellore, with some 55,000 residents by recent counts. Its classrooms teach the Tamil Nadu State Board syllabus and, in a growing number of private schools, CBSE. Searching for an IB World School or a Cambridge or Edexcel centre in the town turned up nothing we could verify, so no school is named on this page as offering either.",
      "The reasons a family here still asks are quite specific. Polur sends many young people to Vellore and Chennai for study and work, and some end up in Singapore, the Gulf or the United States, from where they send word about international schooling. A cousin may be in an IB school in Chennai. A parent employed in the region's sugar and agro-processing industries may be offered a posting that moves the family. Or a student may simply want a route that does not funnel everything into one board exam.",
      "None of that needs a local school to be useful. A tutor who has taught Cambridge Physics or IB Biology this year can teach a student in Polur as well as one in Chennai if the connection holds, and Tamil Nadu has a large pool of such teachers. Houses are not visited: the only places where tutors come in person are Gurugram and parts of Delhi NCR, so for Polur the format is a camera, a whiteboard and an hour of undivided attention.",
      "IB Gram works independently of the IB Organization, Cambridge, Pearson Edexcel, the Tamil Nadu State Board and every school in the district. A tutor can explain, set practice and mark it, and give feedback on a draft, yet the Internal Assessment, Extended Essay, TOK essay or coursework a student submits has to be that student's own writing.",
    ],
    bullets: [
      "Tutoring for PYP, MYP and Diploma students linked to Polur",
      "Cambridge and Pearson Edexcel IGCSE matched to the syllabus code and tier",
      "Live online lessons in IST with a short note after each class",
      "A free trial class and a written plan before you commit",
      "No visits to homes in Polur; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Polur has no IB classroom, so each programme reaches a family indirectly, through a school in Chennai or abroad, a job move, or a deliberate switch away from the State Board. The notes below describe what a tutor does at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "A PYP year is built from units of inquiry, each posing a big question that language, maths, science and social studies help answer. Children are assessed through observation, portfolios and conversation, and the final year concludes with the Exhibition. For a tutor the first aim is plain: make reading and number work easy enough in English that the inquiry itself becomes enjoyable.",
      countryNote:
        "A Polur child needing PYP help is typically about to join a school in Chennai, Bengaluru or overseas, and the first weeks go into English reading stamina and spoken confidence.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Where the State Board grades through term and annual papers, MYP teachers mark each task against published criteria and ask pupils to relate subjects to real-life contexts. Many schools end with a Personal Project, an independent piece of work with a report. Students trained to reproduce textbook answers often need practice in saying why, which is where lessons concentrate.",
      countryNote:
        "MYP tutoring for Polur families most often happens in the long May holiday, when a boarder returns and has weeks to work through criterion feedback that term time never allowed.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects make up the Diploma, three at Higher Level, supported by TOK, a 4,000-word Extended Essay and a CAS record. The total reaches 45 points and is reported in July after the May session. Most subjects include an Internal Assessment counting for a fifth to a third of the mark, which demands a steady calendar over two years.",
      countryNote:
        "With no Diploma school in Tiruvannamalai district, a Polur student studying the DP is enrolled somewhere else, so our plan follows that school's term dates and internal deadlines.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme asks a student to take two or three Diploma courses beside a career-related study and a reflective project. It suits someone already pointed at a field such as design, business or engineering technology. Only a few Indian schools run it, and its academic courses are taught at full Diploma depth.",
      countryNote:
        "Questions about CP from Polur are rare and always depend on a school elsewhere offering it; when they arrive, the tutoring concerns the Diploma subjects chosen.",
    },
  ],

  subjectsIntro:
    "Enquiries from Polur tend to name the subject first: Physics HL, Maths for a Class 9 IGCSE start, Biology for a student with medicine in mind. We begin from that subject, the level and the exam date, then look for someone whose recent teaching fits it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and reasoning. Tamil Nadu students are strong on technique; the stretch is writing out an argument and handling unfamiliar Paper 3 problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology, with an exploration that can use real local data such as rainfall, crop prices or bus timetables." },
    { name: "IB Physics", levels: "HL / SL", description: "Familiar mechanics and waves, then new demands in uncertainty, data handling and long reasoning chains." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculation-heavy early topics, then organic pathways and equilibrium that benefit from a hand-drawn reaction map." },
    { name: "IB Biology", levels: "HL / SL", description: "A subject of detail, where answering exactly what the command term asks matters as much as recall." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams first, evaluation next, using Tamil Nadu cases such as textile clusters, farm prices and state subsidies." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and the internal project on a real firm, suited to families in trading and agro-processing." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Students whose first language is Tamil build confidence through frequent timed analysis of unseen texts." },
    { name: "IB Tamil A Literature", levels: "HL / SL", description: "A mother-tongue option where a school supports it, with close reading of set works and a structured comparative essay." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and databases on paper, with working code for the internal project." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, models and evaluation, with long answers practised under exam time." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Hill-forest, tank irrigation and monsoon examples give students real material to evaluate sustainability." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies with place, date and figure, drawn from Tamil Nadu's river systems and urban growth." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay planning, with feedback on argument." },
  ],

  igcseSubjectsIntro:
    "In Polur, IGCSE is met through a school elsewhere or weighed before Class 9 as a change from the State Board. Cambridge and Pearson Edexcel both publish a code and tier for each subject, so we start from the code your school lists.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended demands quick algebra and tidy multi-step working; Core rewards exact method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and functions, which makes the jump to IB Maths AA gentler." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations quickly and handling units, plus the alternative-to-practical paper as a skill of its own." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and electrolysis with worked examples, and qualitative analysis for the practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Physiology, genetics and ecology, with extended answers trimmed to the marks available." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and data response using familiar Tamil Nadu markets." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and Python, so that students can reason on paper and also run programs." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and descriptive tasks, with feedback on register and sentence variety." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and speaking skills for students who study mainly in Tamil medium and want to strengthen English." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Short case scenarios tied to theory the examiner wants applied." },
  ],

  regionsTitle: "Polur and the Tiruvannamalai area our online IB and IGCSE tutors already serve",
  regionsIntro:
    "Lessons happen online, so the places below set the scene: where a family sits in relation to Vellore's colleges and Chennai's schools, which road connects them, and how monsoon and festival weeks change an evening.",
  regions: [
    { name: "Polur town", note: "The municipality and divisional headquarters at about 171 m elevation, with State Board and CBSE schools and a lively market." },
    { name: "Chittoor-Cuddalore Road", note: "The main road through the town, used for buses to Vellore, Tiruvannamalai and beyond." },
    { name: "Sampathgiri Narasimha hill temple", note: "The hill temple area, a landmark for local families and a quiet residential pocket." },
    { name: "Javvadhi Hills foothills", note: "Villages on the Eastern Ghats edge where school choice is limited and many students travel into Polur." },
    { name: "Arahanthgiri", note: "The Jain heritage site near Polur, reflecting the town's old Tamil Jain history." },
    { name: "Kalambur", note: "A nearby farming town linked to rice cultivation, in the same belt of the district." },
    { name: "Arani", note: "A town to the east known for its silk weaving, often a reference point for families who travel for work." },
    { name: "Tiruvannamalai", note: "The district headquarters about 29 km south, home to the Annamalaiyar temple and a large pilgrim population." },
    { name: "Vellore", note: "A city about 45 km north with major colleges and hospitals, and a wider range of private schools." },
    { name: "Chengam", note: "A town to the south-west in the same district, served by State Board and CBSE schools." },
  ],

  schoolDisclaimer:
    "We name no Polur school here, as none could be confirmed as offering the IB or Cambridge or Edexcel IGCSE. Cities listed below are where Tamil Nadu families look for such schools, with no endorsement implied, and IB Gram has no association with any board, trust or school.",
  schoolClusters: [
    {
      city: "Polur and Tiruvannamalai district",
      note: "Schools in the district teach the Tamil Nadu State Board syllabus or CBSE. We found no IB World School and no Cambridge or Edexcel centre, so tutoring for these programmes has to be online.",
      schools: [],
    },
    {
      city: "Nearby: Vellore",
      note: "The largest city within an hour of Polur, with big private schools and a major university campus. Whether any teaches an international curriculum should be checked on the IB or Cambridge website.",
      schools: [],
    },
    {
      city: "Nearby: Tiruvannamalai",
      note: "The district headquarters has the broadest school and coaching choice nearby, though we confirmed no international curriculum there.",
      schools: [],
    },
    {
      city: "Nearby: Chennai and Bengaluru",
      note: "Chennai, about 193 km away, and Bengaluru have the nearest wide choice of IB and Cambridge schools, and are where most boarding and relocation decisions point. We name none without checking.",
      schools: [],
    },
  ],

  modesIntro:
    "Whichever pattern a Polur family chooses, the lesson is the same: laptop, camera, whiteboard, one tutor. The patterns differ in how often the pair meet and how tightly the work is tied to an examination.",
  modes: [
    {
      title: "An hour every week",
      description:
        "One fixed slot, usually in the early evening or on Sunday, with the same tutor each time. It is the steadiest rhythm and the one most families keep for the whole course.",
      bullets: [
        "Tutor found by syllabus, from any city in India",
        "Works for DP, MYP or IGCSE",
        "Past-paper questions are marked during the call",
        "Continuity with one teacher",
      ],
    },
    {
      title: "Weekly lessons plus a progress record",
      description:
        "The same weekly hour, with a brief written summary after each class and a longer review every few weeks, aimed at parents who are new to IB and Cambridge terminology.",
      bullets: [
        "Each summary lists topics covered and next steps",
        "Reviews reset the plan if progress stalls",
        "A calmer pace for younger students",
        "An extra slot before mocks is easy to add",
      ],
    },
    {
      title: "An exam-season sprint",
      description:
        "Lessons bunched more closely in the weeks before a sitting, with timed papers and rapid feedback, planned around the northeast monsoon and the festival season so that power cuts and holidays do not derail it.",
      bullets: [
        "Timed papers marked to the genuine mark scheme",
        "Feedback returned within days",
        "Planned around Diwali, Karthigai Deepam and Pongal",
        "Best set up two weeks in advance",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools and families around Polur ask about the IB and IGCSE?",
      paragraphs: [
        "The short answer on schools is that we found none to name. Tiruvannamalai district's schools follow the State Board or CBSE, and nothing we could verify near Polur holds IB World School status or Cambridge or Edexcel centre approval. Chennai and Bengaluru have such schools, and Vellore may too, but each one needs checking on the official websites before a family relies on it.",
        "Families who raise the subject are often connected to the wider Tamil world. A son or daughter works in Singapore, Dubai or the United States. A relative runs a business in Chennai. A parent's employer, perhaps in the sugar or agro-processing sector, has offered a transfer. In each case the family wants to understand an unfamiliar qualification before a decision that may cost a year.",
        "Others are driven by dissatisfaction with a pattern they see all around them: Tamil Nadu's intense focus on NEET and engineering entrance preparation, which can leave little room for broader study. The IB and IGCSE offer breadth, and a family may want to see what that looks like in a real lesson.",
        "Because a tutor's usefulness does not fall with distance, a Polur family can pick from specialists in Chennai, Coimbatore or Bengaluru for the same fee as anyone else. The papers and moderation are identical everywhere, so the only gap to close is familiarity with the style, and weekly practice does that.",
      ],
      table: {
        caption: "Where Polur families look for international schooling",
        columns: ["Place", "Rough distance from Polur", "What families find"],
        rows: [
          ["Polur and district", "Local", "State Board and CBSE; no confirmed IB or IGCSE school"],
          ["Vellore", "About 45 km", "More private schools and a university campus; verify each school's curriculum"],
          ["Chennai", "About 193 km", "A wide range of IB and Cambridge schools, often reached by boarding or relocation"],
          ["Bengaluru", "A long road or rail journey", "Another large market for international-curriculum schools"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in the district",
        "Enquiries link to overseas relatives, job moves and curiosity about alternatives to NEET-first schooling",
        "Distance does not limit tutor quality online",
        "Marking standards do not change with postcode",
      ],
    },
    {
      heading: "How does the Tamil Nadu State Board compare with CBSE, the IB and IGCSE?",
      paragraphs: [
        "Tamil Nadu's State Board runs public examinations at Class 10 and Class 12, with Class 11 results now counted too, and emphasises thorough textbook knowledge. CBSE places a little more weight on applying ideas. The IB and Cambridge IGCSE go a step further: they present familiar content in unfamiliar situations and ask the student to explain, compare and evaluate in English prose.",
        "Language shapes the experience. A Polur student may have studied most subjects in Tamil medium and be sharp in content but short of the English phrasing a Chemistry or Economics answer requires. Spoken and written English are trainable, and many students find their marks rise quickly once they practise timed paragraphs with feedback.",
        "Coursework is the other change. IB students plan their own investigations and write them up for the Internal Assessment, while IGCSE sciences test practical skills in a separate paper. State Board students do practical examinations, but the open-ended planning and evaluation expected in the IB is a fresh skill that tutors scaffold with questions.",
        "Neither route is superior for every child. A student aiming for Tamil Nadu's engineering or medical counselling may find the State Board a straighter road, while a student drawn to study abroad or to a liberal curriculum may thrive on the IB. A trial lesson in a single subject is a cheap way to test the difference.",
      ],
      table: {
        caption: "Boards compared for a Polur family",
        columns: ["Feature", "Tamil Nadu State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Presence in Polur", "Most schools", "Some private schools", "None confirmed"],
          ["Language of study", "Tamil or English medium", "Mostly English", "English, with Tamil possible as a subject"],
          ["Assessment", "Public exam papers", "Board papers plus internals", "Papers, coursework and practicals"],
          ["Recognition abroad", "Limited", "Moderate", "Wide"],
        ],
      },
      bullets: [
        "English phrasing is the first adjustment for Tamil-medium students",
        "Independent investigations are the second",
        "State Board and CBSE suit Tamil Nadu entrance routes",
        "IB and IGCSE suit study abroad and broad curricula",
      ],
    },
    {
      heading: "What goes into the fee for IB or IGCSE tuition near Polur?",
      paragraphs: [
        "Nobody can quote a fair single figure without knowing the course, so none is printed here. The fee moves with the programme and level, the number of tutors able to teach that precise course, the length of each lesson and how often the pair meet. HL Diploma Maths and science tend to sit above IGCSE Core. Your quote arrives in writing before the trial.",
        "Online delivery removes two costs that matter in Polur. No tutor travels, so no travel is priced in. And no student has to spend an evening on a bus to Vellore or Tiruvannamalai for a class, which can eat up as much time as the lesson itself, particularly during heavy rain.",
        "Spending is best staged. Pick the subject that causes most worry, run it for a month, and review. Add another subject only if the first is steady. Families who try everything at once pay more and often find students tired, whereas those who stage the lessons see where the money is working.",
        "Compare providers by what the tutors have done recently. A teacher who has moderated or coached the Mathematical Exploration, or who has prepared a class for Cambridge 0625 Extended, offers something a general science tutor cannot, and that is the proper basis for judging a fee.",
      ],
      bullets: [
        "Programme, level, subject scarcity and session length drive the rate",
        "Written quote before the trial",
        "No travel cost and no commute",
        "Stage subjects and review monthly",
      ],
    },
    {
      heading: "Is online home tuition better than coaching in Vellore, a local tutor or self-study?",
      paragraphs: [
        "A Polur student can choose among four. Coaching in Vellore or Tiruvannamalai is organised around State Board, NEET and JEE timetables. A local tutor knows the child but has most likely never prepared a student for a Diploma paper. Free online material is cheap but nobody marks it. A live online tutor who has taught the exact course adds the missing feedback.",
        "The format deserves a clear description. Tutors do not visit homes in Polur; in-person home tuition exists only in Gurugram and parts of Delhi NCR. Polur families get private tuition from home through a screen, with a webcam on the student's page and a shared board that both can write on. For Maths and the sciences this is close to sitting side by side.",
        "Weather is a quiet argument for it. The northeast monsoon between October and December brings heavy rain and flooded roads in Tamil Nadu, and the summer months are hot and humid. A lesson at the study table is not disrupted by either, while a class that needs a bus or a two-wheeler ride sometimes is.",
        "Self-study keeps its place. The IB and Cambridge post syllabuses, past papers and mark schemes openly, and a disciplined student can use them to great effect. What a tutor adds is a reader for long answers, and an hour a week with one is usually the most efficient step up.",
      ],
      table: {
        caption: "Four routes to IB or IGCSE preparation from Polur",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Live online tutor", "Specialist for the exact course; written feedback; no travel", "Needs a dependable internet connection"],
          ["Coaching in a larger town", "Peer group and a fixed schedule", "Mostly aimed at State Board, NEET and JEE, not Diploma or IGCSE"],
          ["Local private tutor", "Personal familiarity with the child", "Seldom has recent IB or Cambridge teaching"],
          ["Self-study", "Free and flexible", "No one marks extended answers or investigations"],
        ],
      },
      bullets: [
        "A laptop and a connection are all the lesson needs",
        "House visits by tutors exist only in Gurugram and parts of Delhi NCR",
        "Monsoon rain does not interrupt a lesson at the desk",
        "Past papers are free and work well alongside feedback from a tutor",
      ],
    },
    {
      heading: "How do the northeast monsoon, Pongal and exam sessions fit together for a Polur student?",
      paragraphs: [
        "Diploma papers are sat twice a year, in May and November, with results in July and January. Cambridge IGCSE has June and November sessions, with a smaller March series for some candidates, and Pearson Edexcel runs windows in January, May and June, and November. Whichever school holds a Polur student's registration sets the dates, so the first job is to put exams, mocks and holidays on one calendar.",
        "Local life has its own calendar. The northeast monsoon from October to December brings the heaviest rain in Tamil Nadu and can cut power and flood low roads. Pongal in mid-January is a major family festival with several days off. Karthigai Deepam draws huge crowds to Tiruvannamalai in November or December, and Deepavali sits close to it.",
        "Rather than pretend these weeks are normal, plans use them. During the Pongal break there is time for a slow, thorough topic review. During the monsoon a student can focus on reading and written practice that does not depend on lab access. Power cuts are managed with a charged laptop and a phone hotspot.",
        "Heat arrives from March. Students sitting May papers from Polur are best served by lessons early in the morning, before the day warms up, so that the evening is left for homework. Evenings suit the cooler months better, from December to February.",
      ],
      table: {
        caption: "A study year for a student connected to Polur",
        columns: ["Period", "Academic event", "Local factor", "Tutoring focus"],
        rows: [
          ["January to March", "IB mocks; IGCSE March series", "Pongal, then rising heat", "Full mocks and topic repair"],
          ["April to June", "IB May and IGCSE June exams", "Summer heat and humidity", "Morning sessions; revision"],
          ["July to September", "IB results; new school year", "Southwest monsoon showers", "Foundation work; flexible slots"],
          ["October to December", "November exams", "Northeast monsoon, Deepavali, Karthigai Deepam", "Timed papers with outage back-ups"],
        ],
      },
      bullets: [
        "Put every exam, mock and holiday date on one page",
        "Use Pongal weeks for slow, full-topic review",
        "Heavy-rain weeks suit reading and writing practice",
        "Charge devices and keep a phone hotspot ready",
      ],
    },
    {
      heading: "Where can a Polur student study after the IB or IGCSE?",
      paragraphs: [
        "In India the Association of Indian Universities recognises the IB Diploma as equal to a Class 12 certificate, which opens most universities. Central universities mostly admit through CUET-UG, and IB students sit it for the subjects their course lists. Tamil Nadu's own institutions publish separate rules, and some state-run courses use Tamil Nadu Board marks, so check each prospectus.",
        "Engineering and medicine need extra care. NEET-UG and JEE Main have conditions on subjects and equivalence that change from year to year, and Tamil Nadu's state counselling has its own eligibility points. A family should read the current bulletins before fixing Diploma or A Level subjects, and should do so a full year ahead.",
        "Vellore sits nearby with some of the best-known medical and technology campuses in the south, and Chennai adds many more. Students who finish an international curriculum can apply to these places as long as the subject and eligibility rules are met. Many also look at Bengaluru, Pune or Delhi.",
        "Abroad, the Diploma is read easily by universities in the UK, USA, Canada, Australia, Singapore and Europe, and IGCSE results demonstrate secondary-level study. Predicted grades, references and English tests all count. Tutors work on the academic side; counselling stays with the school.",
      ],
      bullets: [
        "AIU treats the IB Diploma as equal to Class 12",
        "CUET-UG is the main route into central universities",
        "NEET, JEE and Tamil Nadu counselling rules must be read each year",
        "Study abroad needs predicted grades and references too",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught live to a Polur student?",
      paragraphs: [
        "IB Maths has two courses, Analysis and Approaches and Applications and Interpretation, each at HL or SL. AA is for the student who enjoys proof, algebra and calculus and intends engineering, physics or mathematics. AI is for someone heading for business, economics, psychology or design who will use statistics and software. Choose by the degree you want, not by the label.",
        "In a live Maths lesson the tutor and student share a digital board or point a camera at paper. The student tries a past-paper question aloud, the tutor interrupts at the first misstep, and the pair rebuild the solution in lines an examiner can follow. The Mathematical Exploration is developed over weeks, with the student writing every word.",
        "Science lessons start with a map of the syllabus and a timetable for the Internal Assessment. Physics students practise long reasoning chains, Chemistry students organic pathways and equilibrium, and Biology students the many terms and diagrams. All three learn to answer to the exact verb used, whether it is state, explain or evaluate.",
        "Where a small town school has limited lab time, tutors bring in simulations, data from earlier investigations and safe kitchen experiments, then coach the analysis and evaluation. The aim is that the student can plan, collect, analyse and conclude, even if the equipment is simple.",
      ],
      table: {
        caption: "IB Maths and science options at a glance",
        columns: ["Course", "Suited to", "Common difficulty"],
        rows: [
          ["Maths AA HL", "Engineering, physics, pure maths", "Paper 3 and proof-style questions"],
          ["Maths AI", "Business, economics, social sciences", "Technology and interpretation"],
          ["Physics HL", "Engineering, physical sciences", "Long reasoning chains"],
          ["Chemistry HL", "Medicine, pharmacy, chemical engineering", "Organic and equilibrium"],
          ["Biology HL", "Medicine, life sciences", "Volume and command terms"],
        ],
      },
      bullets: [
        "Pick Maths by degree goal",
        "Live working catches errors early",
        "The student writes all internal assessments",
        "Simulations and simple experiments cover lab gaps",
      ],
    },
    {
      heading: "Core or Extended: how should a Polur student plan IGCSE subjects?",
      paragraphs: [
        "Most IGCSE candidates sit six to ten subjects, typically a first language, a second language, Mathematics, at least two sciences and one or two others from humanities, business or technology. The school's list decides what is available, but a student who may take IB Diploma sciences later does well to study Additional Mathematics and the sciences separately.",
        "The next choice is tier. Core covers less of the syllabus and caps the grade at a lower level; Extended covers all and allows the top grades. A student who is secure in algebra and can manage time should aim for Extended, while one who is still building basics can start on Core and move up if the school allows before entries close.",
        "For Polur students from Tamil-medium backgrounds the adjustment is vocabulary and extended writing. Science and business terms learnt in Tamil need English counterparts, and a tutor can build a glossary in the lessons, then set short writing tasks marked line by line. English as a Second Language can be a sensible subject for those who need it.",
        "Coursework and practical papers differ by board and subject. Cambridge uses a practical or alternative-to-practical paper for the sciences, Edexcel structures its assessments differently, and subjects such as Art or English Literature use portfolios. Tutors learn which applies to the student's code and coach to it without writing any submitted piece.",
      ],
      bullets: [
        "Start from the school's list of available subjects",
        "Extended suits students secure in algebra",
        "Build an English glossary for technical terms",
        "Coursework is coached, not written, by the tutor",
      ],
    },
  ],

  tutorsIntro:
    "These are the kind of specialists who would teach your child: people with recent classroom experience of IB PYP, MYP and Diploma courses and of Cambridge and Edexcel IGCSE, working from their own homes in different parts of India. In Polur the screen replaces the front door.",

  process: [
    { title: "Describe the student", description: "Send the board or programme, subject and level, recent results, the exam month and the evening hours your Polur household can protect." },
    { title: "Look at a shortlist with reasons", description: "Since the district has no specialist pool, names come from a search across India, each with a note on why they fit this syllabus." },
    { title: "Try one lesson free", description: "A real topic from the course is taught live, so your child and you can see the teacher at work before anything is paid." },
    { title: "Check the written plan", description: "Topics, pace, lesson length and fee reach you in writing, open to changes." },
    { title: "Carry on week by week", description: "A set slot, a brief report after each class, and a straightforward swap if the tutor is not the right match." },
  ],

  whyPoints: [
    { title: "Matched to the course", description: "We search for the exact IB subject and level or IGCSE code, not a general subject label." },
    { title: "Fits a district with no local option", description: "Where Tiruvannamalai district has no IB or Cambridge classroom, the pool simply becomes the whole country." },
    { title: "Evidence before payment", description: "A free lesson shows how your child responds, so the decision rests on what actually happened." },
    { title: "Hands off the assessed work", description: "Tutors question and respond to drafts, but all Internal Assessment and essay writing remains the student's." },
    { title: "Clear records", description: "Short reports after sessions and fuller reviews every few weeks let parents follow progress without the jargon." },
    { title: "Free to change", description: "No school link and no long contract, so a new tutor can be arranged quickly." },
  ],

  faqs: [
    { question: "Where do I begin if I want an IB tutor in Polur?", answer: "Send the programme, subject, level and exam session. We then offer tutors with recent experience of that precise course and arrange a free first lesson. As no IB school exists near Polur, the search covers India, and the video call means distance plays no part in the choice." },
    { question: "Can a Polur student get IGCSE tuition?", answer: "Yes. Cambridge and Pearson Edexcel IGCSE subjects are taught live, matched to the code and tier on your school's list, for example Edexcel 4MA1 Mathematics Higher or Cambridge 0610 Biology. The code governs the papers, so we match on it and not only on the subject name." },
    { question: "Will the tutor come to our home?", answer: "No tutor visits houses in Polur. Visiting is available only in Gurugram and parts of Delhi NCR. In Polur the lessons are private tuition from home over video: your child sits at a desk with a laptop and camera and works one-to-one with the tutor for the full session." },
    { question: "How is the fee decided?", answer: "By the programme and level, how rare the tutor's expertise is, the length of the lesson and how many a week you want. HL Diploma Maths and sciences usually cost more than IGCSE Core. We publish no fixed list; the quote arrives in writing ahead of the trial, and the tutor's home city has no effect on it." },
    { question: "Is there an IB or IGCSE school in Polur?", answer: "Not that we could confirm. Local schools teach the State Board or CBSE. Families wanting an international school usually check Vellore, Chennai or Bengaluru, and it is wise to confirm each school's present authorisation on the IB or Cambridge website before applying." },
    { question: "Our daughter is at an IB boarding school. Can she study with a tutor at home during holidays?", answer: "Yes, and it is a common use. The tutor is picked for her school's subject and level, and lessons fit her term dates, so the May break or Deepavali week at home in Polur turns into marked past papers and steady progress on the Internal Assessment." },
    { question: "Is the first lesson free?", answer: "It is. Your child works through a real topic from the course with the tutor on video, and nothing is charged. Afterwards you get a short written plan and may continue, ask for another tutor or stop, without any pressure from us." },
    { question: "What can a tutor do for the Internal Assessment?", answer: "A tutor can coach: help choose a question that can be investigated, explain what each criterion wants, suggest how to plan data collection and comment on a draft. Writing the report, doing the calculations or composing the conclusion belongs entirely to the student, in line with the IB's own rules on authenticity." },
    { question: "Which Diploma subjects do you cover?", answer: "Maths in both forms at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, Geography, History and English are covered, with Tamil and Hindi subject to tutor availability. Tell us your full subject combination when you write so we can check." },
    { question: "Are MYP and PYP also taught?", answer: "They are. MYP lessons deal with criterion-based tasks and the Personal Project; PYP lessons strengthen reading, writing and numbers before a move to an IB school. Polur parents usually ask when a child is about to join a school in Chennai or abroad." },
    { question: "Does learning over video really work for these courses?", answer: "It does. A shared board shows the working as it appears, a camera can look at the student's notebook and papers can be marked while both are watching. A specialist elsewhere is of more use than a general tutor locally. A stable connection is the main thing to arrange." },
    { question: "How do you select tutors?", answer: "We look at qualifications, recent teaching of the particular programme and subject, and familiarity with the assessment criteria. The free lesson then tests how well they teach. If the pairing does not work, we find someone else without fuss." },
    { question: "When is the right time to begin?", answer: "As early as the course allows: Class 9 for IGCSE, Class 11 for the Diploma. Early weeks are the cheapest time to fix gaps. A student who starts late, perhaps after a move, can still catch up with a plan built backwards from the first paper." },
    { question: "We are considering leaving the State Board for IGCSE. What would a tutor do?", answer: "Compare the two syllabuses subject by subject, show where English writing and practical skills need work, and help choose between Core and Extended. The school change itself happens elsewhere; we prepare the student before and after, and suggest an honest timeline." },
    { question: "Can lessons be held in the evening or at weekends?", answer: "Yes. Most Polur families take a weekday evening or a weekend morning. In the monsoon season we keep a back-up plan for power cuts, and slots can be moved around Pongal, Karthigai Deepam and Deepavali if you let us know in advance." },
    { question: "What if the tutor does not suit?", answer: "Tell us, and a different tutor will be arranged. A poor match is treated as our problem, not the student's. Reviews every few weeks and the notes after each class make it easy to see whether the lessons are helping." },
    { question: "Does IB Gram have any link to schools or boards?", answer: "None. It is an independent service, not affiliated with the IB Organization, Cambridge, Pearson Edexcel, the Tamil Nadu State Board, CBSE or any school in Polur or Tiruvannamalai district. Any body or place named on this page is there for context only." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How tutor matching works for students in cities and small towns alike." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where tutors do visit the house." },
    { label: "IGCSE guide", href: "/igcse/", description: "A plain guide to Cambridge and Edexcel boards, tiers and subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the subjects, core and assessments combine across two years." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How criteria, projects and reporting work in MYP." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "The inquiry units leading up to the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which Maths course matches which degree." },
    { label: "Browse tutors", href: "/tutors/", description: "Look through profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief to arrange the free first lesson." },
    { label: "IB and IGCSE tutoring in Tiruvannamalai", href: "/tiruvannamalai/", description: "The district headquarters south of Polur, served the same way." },
    { label: "IB and IGCSE tutoring in Vellore", href: "/vellore/", description: "The nearest big city, a common reference point for Polur families." },
    { label: "IB and IGCSE tutoring in Chennai", href: "/chennai/", description: "The state capital, home to the widest choice of international schools in Tamil Nadu." },
  ],

  closingHeading: "Arrange a free lesson with an IB or IGCSE tutor for Polur",
  closingBody:
    "Put the board or programme, the subject and level, the latest marks and the hours you can spare into one message to support@ibgram.com or on WhatsApp at +91 7439 368 115. You will receive a tutor chosen for that brief, an honest summary of their background and a first lesson booked in Indian Standard Time.",
};
