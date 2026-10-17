import type { CitySeoPage } from "../types";

/**
 * /kannur/ - IB and IGCSE tutoring page for Kannur, Kerala. One Cambridge school (GEM International School,
 * listed near Kannur University) is confirmed; no IB World School could be confirmed, and with fewer than
 * three confirmed schools stripSchools is empty and GEM is named inside schoolClusters. Online-only delivery.
 */
export const kannur: CitySeoPage = {
  slug: "kannur",
  countryName: "Kannur",
  countryNameLong: "Kannur, Kerala",
  demonym: "Kannur",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are set around the June to September monsoon, the Theyyam and Vishu season, Onam and Eid breaks, and the holiday weeks when families come home from the Gulf",
  lastUpdated: "2026-09-21",
  geo: { latitude: 11.8745, longitude: 75.3704 },
  wikipedia: "https://en.wikipedia.org/wiki/Kannur",
  alternateNames: ["Cannanore", "Kannur Kerala"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Kannur | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Kannur families, incl. returning Gulf students: live one-to-one online lessons at home, DP to PYP, Cambridge or Edexcel. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Kannur",
  heroEyebrow: "IB & IGCSE TUITION FOR KANNUR FAMILIES, ONLINE",
  heroSubtitle:
    "Home tuition in Kannur for an IB or IGCSE student works best as a live private lesson on a laptop, with a teacher who has handled that exact syllabus in a classroom. Tutors do not ring your doorbell, as in-person visits exist only in Gurugram and parts of Delhi NCR, but your child keeps the quiet of a home lesson, a fixed weekly slot and a written note after each class.",
  primaryKeyword: "IB and IGCSE tutors in Kannur",
  imageAltText: "A Kannur student with a laptop at home having a live online IGCSE Chemistry lesson with a private tutor",
  secondaryKeywords: [
    "IB tutor Kannur",
    "IGCSE tutor Kannur",
    "IB home tuition Kannur",
    "IGCSE home tuition Kannur",
    "IB private tuition Kannur",
    "IB Maths tutor Kannur",
    "IGCSE Maths tutor Kannur",
    "IB Physics tutor Kannur",
    "IB Chemistry tutor Kannur",
    "IB Biology tutor Kannur",
    "IB DP tutor Kannur",
    "IB MYP tutor Kannur",
    "IB PYP tutor Kannur",
    "IGCSE online tuition Kannur",
    "IB tutor Thavakkara Kannur",
    "IGCSE tutor Payyambalam",
    "online IB tuition Thalassery",
    "Cannanore IB tutor",
    "Cambridge IGCSE tuition Kannur Kerala",
  ],

  heroTrustPoints: [
    "One Cambridge school is confirmed in Kannur and no IB World School, so tutors are matched to the syllabus a child follows, wherever the school sits",
    "Every lesson is live on screen, and no tutor visits a Kannur house, because home visits run only in Gurugram and parts of Delhi NCR",
    "A full trial class comes before any payment",
    "IB Gram is independent of every school, board and examination body mentioned here",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "Every IB stage" },
    { value: "CAIE + Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Shared clock, even for Gulf holidays" },
    { value: "Trial class free", label: "See it first" },
  ],

  intro: {
    heading: "IB and IGCSE study in Kannur: who it is for",
    paragraphs: [
      "Kannur sits at the northern end of Kerala's Malabar coast, a city of forts, handlooms, beaches and, since late 2018, an international airport at Mattannur. That airport matters to this page, because a large share of Kannur families have someone working in the Gulf, and children regularly move between a British or Indian-curriculum school in the UAE, Qatar or Oman and a classroom at home.",
      "Kannur is better placed than most north Kerala towns for an international syllabus, yet the choice is narrow. We could confirm one school, GEM International School, listed near Kannur University and affiliated with Cambridge for IGCSE and A Level, and no IB World School. Most other schools in the city follow the Kerala State syllabus, CBSE or ICSE.",
      "A tutor fills the space between those facts and a family's plans. A Class 9 student at a Cambridge school may need a second explanation of Extended Mathematics. A child back from Doha on an IB course may need a teacher who can pick up mid-syllabus. A family planning a move may want a year of preparation before it happens.",
      "IB Gram works independently. It has no partnership with the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel, GEM International School or any other school mentioned. Tutors teach, set practice and mark it, but Internal Assessments, Extended Essays, TOK essays and coursework are written only by the student.",
    ],
    bullets: [
      "IB tutoring at PYP, MYP, Diploma and CP level",
      "Cambridge and Edexcel IGCSE at Core, Extended, Foundation and Higher tiers",
      "Live one-to-one lessons on Indian Standard Time, including school holidays in the Gulf",
      "Free trial class and a written note after each lesson",
      "No home visits in Kannur; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Kannur students meet the IB and IGCSE through a Cambridge school at home, a school in the Gulf, or a move planned for later. The four IB stages are set out below by what they demand, along with what our tutors most often see among north Malabar families.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Children work in units of inquiry that draw several subjects into one theme, and the final year closes with an Exhibition they organise themselves. With no external paper, a tutor concentrates on reading stamina, number confidence and the habit of asking questions worth investigating.",
      countryNote:
        "Kannur PYP requests typically come from families home from the Gulf whose child was in an inquiry-based primary school and needs the same style while settling in.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four criteria, set out in writing, decide each MYP grade, and Year 5 ends with the Personal Project. Students raised on Kerala syllabus papers tend to know their facts and must learn to write to a criterion and explain each step.",
      countryNote:
        "Tutors in Kannur mainly see MYP work in Sciences, Mathematics and Language and Literature, with a steady push on the Personal Project journal.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Candidates pair three Higher Level subjects with three Standard Level ones, and add Theory of Knowledge, an Extended Essay and Creativity, Activity, Service. Internal Assessments feed the final grade, and the main papers are sat in May.",
      countryNote:
        "Diploma students linked to Kannur are usually at a school outside the city, in the Gulf or in another Indian state, so tutoring runs alongside their school term and over summer visits home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines a few Diploma courses with career-related study and a reflective project. Very few Indian schools run it, although its Diploma courses are graded to exactly the same standard as those in the DP.",
      countryNote:
        "CP enquiries from Kannur are uncommon and usually involve a specific school in the Gulf or the UK.",
    },
  ],

  subjectsIntro:
    "For a Kannur student the first job is to identify the course and level precisely, because Analysis and Approaches and Applications and Interpretation lead to different papers, and HL asks for a different pace from SL. After that, tutor and family settle the target exam session, where the Internal Assessment stands and a slot that works during monsoon evenings and Gulf holiday weeks.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus and the long unfamiliar questions of HL Paper 3 are worked through aloud, and the exploration is drafted well before the internal deadline." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and confident graphic-calculator use carry the marks, and a good exploration starts from data the student finds worth questioning." },
    { name: "IB Physics", levels: "HL / SL", description: "A student must reach the data booklet quickly and keep units tidy, while the investigation needs a method that a moderator could repeat from the write-up." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles and equilibrium are fixed first because organic chemistry and energetics in the second year rest on them." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms decide marks more than memory does, and Kerala's coastline, backwaters and western ghats supply ready ecology examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Well-drawn diagrams, fresh examples and an evaluation that commits to a judgement lift every paper, and remittances from the Gulf make a vivid local case." },
    { name: "IB Business Management", levels: "HL / SL", description: "Cooperatives, handloom units and small trading firms in north Malabar give students a real organisation to analyse with a named tool." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, the comparative essay and the Individual Oral need separate rehearsal, each against its own marking rubric." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, abstract data structures and object-oriented design are taught through live coding, in support of a working-software internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be quoted exactly and judged, and long answers are marked for argument as much as recall." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Coastal erosion, mangroves and monsoon-driven flooding give systems thinking concrete Malabar material." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies on rivers, coasts and migration are learned in depth, and a fieldwork plan must survive questioning." },
    { name: "IB Malayalam A", levels: "HL / SL", description: "Students who read and write Malayalam fluently are marked on textual analysis and comparison, a real advantage for a north Kerala candidate." },
    { name: "IB Hindi B", levels: "SL / HL", description: "A language acquisition option with written tasks and oral practice for students who have studied Hindi as a third language." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussions centre on the prescribed titles, with the tutor pressing the student to defend a view and then test it." },
  ],

  igcseSubjectsIntro:
    "Because GEM International School is the one Cambridge school we could confirm in the city, most Kannur IGCSE enquiries are Cambridge and mostly for Extended tiers, though Edexcel arrives with Gulf returnees. Board, code and tier decide everything, since 0580 and 4MA1 sound the same but are written differently.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper 1 forbids a calculator at Extended level, so mental speed matters as much as full working, which earns method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and identities arrive early and pave the way to IB Maths AA or A Level Mathematics." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The wording and order of questions differ from Cambridge, which is why Gulf returnees should practise on this board's own papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Circuits, waves and thermal topics dominate, and the alternative-to-practical paper is coached as a separate skill." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations are practised until automatic, since they cost marks across the whole paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, transport and ecosystems carry heavy weight, and extended answers earn marks for clear structure." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Precise diagrams win the early marks, and the evaluation question at the end separates the top grades." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python are practised on unfamiliar problems." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary and directed writing need technique that wide reading alone does not supply." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying a concept to the case matters more than a memorised definition." },
    { name: "IGCSE Malayalam or Hindi as a Second Language", levels: "Grade 9-10", description: "A practical way to earn a language grade in a tongue already spoken at home." },
  ],

  regionsTitle: "Kannur areas where our online IB and IGCSE tutors reach students",
  regionsIntro:
    "Since lessons are online, these neighbourhoods describe schooling habits and daily timing, not distance. Kannur stretches from the fort and harbour to the university belt and the coastal road, and a household's day depends on school runs and monsoon traffic.",
  regions: [
    { name: "Fort Road and Burnacherry", note: "The historic centre around St Angelo Fort and the old harbour, with long-established CBSE and Kerala syllabus schools." },
    { name: "Thavakkara", note: "A central residential and commercial area near the old bus stand, with a steady evening tuition habit." },
    { name: "Payyambalam", note: "A beachfront area known for its park and sea views, popular with families who value a quiet study space." },
    { name: "Caltex and Talap", note: "Busy junction areas on the main road, where many working families arrange tuition around shop and office hours." },
    { name: "Chovva", note: "A residential belt on the Thalassery side of the city, used to commuting between the two towns for work and school." },
    { name: "Kannur Cantonment", note: "A quieter area with defence families who move between postings and therefore think early about portable syllabuses." },
    { name: "Pallikkunnu", note: "A residential area with a mix of government employees, teachers and returnees from the Gulf." },
    { name: "Azhikode", note: "A coastal suburb to the north, known for its port and beach, where online lessons save a long evening drive." },
    { name: "Edakkad", note: "A growing suburb south of the centre, with new housing popular with returning NRI families." },
    { name: "Mattannur", note: "The town beside the airport, where families with frequent Gulf travel plan lessons around flights and holidays." },
  ],

  schoolDisclaimer:
    "We could confirm one Cambridge school in Kannur, GEM International School, and no IB World School. It is named below from its own website and a school directory, and IB Gram has no partnership with it, with any other school or with the International Baccalaureate Organization, Cambridge or Pearson. Schools in other cities appear only as context for regional families.",
  schoolClusters: [
    {
      city: "Kannur city",
      note: "GEM International School is listed near Kannur University as a Cambridge school offering IGCSE and A Level; other Kannur schools follow the Kerala syllabus, CBSE or ICSE, and we could not confirm any IB World School.",
      schools: ["GEM International School"],
    },
    {
      city: "Fort, Thavakkara and the coast",
      note: "The older city and coastal belt is dominated by State syllabus and CBSE schools, so IB and IGCSE families here rely on online tutoring for subject depth.",
      schools: [],
    },
    {
      city: "Nearby: Kochi",
      note: "Kochi, well to the south, has the nearest real choice of IB and Cambridge schools, and families generally treat it as a boarding or relocation decision.",
      schools: ["The Choice School, Ambalamugal", "TIPS Kochi", "Cochin International School"],
    },
    {
      city: "Nearby: Kozhikode and Taliparamba",
      note: "Neighbouring Malabar towns are in a similar position, with no IB or Cambridge school we can confirm, so their students are also taught online.",
      schools: [],
    },
  ],

  modesIntro:
    "Kannur families usually pick a format by what the child needs this term: a weekly class, a slot that follows a Gulf posting, or a compressed run before an exam. Each one is live, private and on video.",
  modes: [
    {
      title: "Private online home tuition",
      description:
        "A tutor teaches on video with a shared whiteboard at a set weekly time while your child sits in their own room. It keeps the quiet and attention of home tuition without anyone travelling across Kannur.",
      bullets: [
        "A specialist chosen for your course from across India",
        "Fits IB DP, MYP and Cambridge or Edexcel IGCSE",
        "Worked examples and past papers on the screen",
        "The same tutor stays unless you ask for a change",
      ],
    },
    {
      title: "Weekly plan with written notes",
      description:
        "A steady class through the term, each one followed by a short note for parents, and a check-in every few weeks to adjust the plan.",
      bullets: [
        "A note after each lesson",
        "Reviews of targets and progress",
        "Good for younger MYP and PYP students",
        "An extra slot can be added before mocks",
      ],
    },
    {
      title: "Holiday and exam-season intensives",
      description:
        "Short, dense runs of lessons, often timed for when a child is home from the Gulf or before mocks, working timed papers and getting quick feedback.",
      bullets: [
        "Timed papers marked to current criteria",
        "Feedback within days",
        "Planned around Onam, Eid, Vishu and flights",
        "Most useful two to three weeks before the exam window",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB and IGCSE in and around Kannur?",
      paragraphs: [
        "Kannur is a small city with an unusually international outlook, because so many households have a parent, sibling or cousin in the Gulf. That shapes the families who ask about the IB and IGCSE. Some are already at a Cambridge school at home, some are returning from a school abroad, and some are preparing for a move later.",
        "Gulf returnees are the largest group. A child who followed the British or Indian-curriculum route in the UAE, Qatar, Kuwait or Oman may come back at the end of a posting or a job loss, and the year of return is a risky one for marks. A tutor keeps the syllabus unbroken.",
        "The second group is students at the Cambridge school in the city who want a specialist alongside classroom teaching, particularly in Extended Mathematics, Physics and Chemistry. The third is State syllabus or CBSE families who want IGCSE or the Diploma for a child who may study abroad or in another Indian city.",
        "A smaller group prepares privately or as Class 11 entrants to IB schools elsewhere, for example in Kochi, Bengaluru or the Gulf. They use tutoring to build Mathematics, sciences and English to the level a new school expects before term begins.",
      ],
      table: {
        caption: "Who asks about IB and IGCSE tutoring in Kannur",
        columns: ["Family type", "Typical background", "What they usually need"],
        rows: [
          ["Gulf returnees", "Child studied an international course in the UAE, Qatar or Kuwait", "Continuity through the year of return"],
          ["Cambridge school students", "Enrolled in an IGCSE or A Level course in the city", "Subject depth in Extended Maths and the sciences"],
          ["State syllabus and CBSE switchers", "Weighing IGCSE or the Diploma for study abroad", "Command words, tier choice and technique"],
          ["Future IB entrants", "Planning Class 11 at a school in another city", "Foundation in Maths, sciences and English"],
        ],
      },
      bullets: [
        "One Cambridge school is confirmed in Kannur and no IB World School",
        "Gulf returnees are the most common enquiry",
        "Cambridge school students want a subject specialist alongside class",
        "Future IB entrants prepare the summer before Class 11",
      ],
    },
    {
      heading: "Does Kannur have an IB school, and what about Cambridge?",
      paragraphs: [
        "On Cambridge, yes, at least one: GEM International School, which its own site presents as affiliated to Cambridge International Education and which a school directory lists near Kannur University. On the IB, we could not confirm any school in Kannur as an authorised IB World School, and we say so rather than implying a choice that does not exist.",
        "Kerala's larger IB and Cambridge clusters are around Kochi and Thiruvananthapuram, and Kozhikode to the south has no confirmed campus of either kind on the lists we use. For a Kannur family, a Kochi school means boarding or relocating, and that is a significant decision for a young child.",
        "We flag this because a city like Kannur is often described in directories as if it had a wide international choice. Families do better knowing the exact position. If your child is not yet on an IB or IGCSE course, pick the school or private route first, then fit tutoring to it.",
        "For a student already on such a course, studying in Kannur changes nothing about the content or marking. The syllabus and exam papers are the same as in Bengaluru or Dubai, and a tutor does not need to live in the same city.",
      ],
      table: {
        caption: "International curriculum options reachable from Kannur",
        columns: ["Place", "IB presence", "Cambridge IGCSE presence", "Typical arrangement"],
        rows: [
          ["Kannur", "None confirmed", "One school confirmed", "Local Cambridge school plus online tutoring"],
          ["Kozhikode and north Malabar", "None confirmed", "None confirmed", "Online tutoring"],
          ["Kochi", "Several campuses", "Several campuses", "Boarding or relocation"],
          ["Mangaluru", "Limited", "Limited", "Nearest major city to the north, roughly 135 km"],
        ],
      },
      bullets: [
        "GEM International School is the Cambridge option we could confirm",
        "No IB World School is confirmed in Kannur",
        "Kochi is the nearest wide choice",
        "Syllabus and exams are identical wherever they are studied",
      ],
    },
    {
      heading: "How does the Kerala syllabus compare with IB, IGCSE and CBSE?",
      paragraphs: [
        "The Kerala State syllabus and CBSE reward accurate recall of a defined body of content, well presented. The IB and IGCSE ask a student to apply what they know to an unfamiliar situation, explain the reasoning and weigh the result. Kannur students with excellent Class 10 results are sometimes surprised that the first IGCSE paper feels different, although the content itself is not beyond them.",
        "Internal work is the clearest structural contrast. Kerala State and CBSE students submit some practicals and projects, but IB students also complete Internal Assessments and an Extended Essay marked on published criteria, and many IGCSE courses include coursework or a practical paper.",
        "Difficulty depends on level. IGCSE Core sits near Class 10, IGCSE Extended goes beyond it, and IB Higher Level mathematics and sciences extend past Class 12 in a number of topics. A student who moves across at Class 11 should expect to close specific gaps, not relearn everything.",
        "Malayalam is taught through school in Kerala, and both IB and IGCSE offer a route to keep it as a graded language, which is an advantage for students who read and write it well.",
      ],
      table: {
        caption: "Kerala syllabus and CBSE compared with IB and IGCSE",
        columns: ["Feature", "Kerala State syllabus", "CBSE", "IB / IGCSE"],
        rows: [
          ["Marks reward", "Accurate recall", "Recall and some application", "Application and justification"],
          ["Internal work", "Modest", "Modest", "IAs, EE and coursework on published criteria"],
          ["Recognition abroad", "Needs equivalence", "Wider", "Widely recognised"],
          ["Teaching in Kannur", "Everywhere", "Widely available", "One Cambridge school; no confirmed IB"],
        ],
      },
      bullets: [
        "IB and IGCSE reward application and explanation",
        "Internal work is marked on criteria",
        "HL goes beyond Class 12 in places",
        "Malayalam can stay a graded language",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor cost in Kannur?",
      paragraphs: [
        "Kannur tutors price on level and subject first. Higher Level Diploma Physics asks a great deal of a teacher, while Class 7 MYP mathematics asks less, and scarcity counts too, because specialists in some subjects are harder to find than general English teachers.",
        "Lesson pattern comes next. One weekly hour, two shorter sessions or a burst of several lessons a week before an exam all give different monthly totals, and the right one depends on the student's age and how close the exam is.",
        "The tutor's recent familiarity with the exact specification is the third factor. Someone who has taught this year's syllabus and marked its papers needs far less preparation and catches errors earlier, which is usually worth more than a cheaper hour.",
        "No travel cost exists in online lessons, so a home in Payyambalam and one in Mattannur pay identically. Rates are sent in writing before booking, and the first class is free.",
      ],
      bullets: [
        "Level, subject and lesson pattern shape the rate",
        "Current syllabus experience pays for itself",
        "No travel cost for online lessons",
        "Rates are confirmed in writing first",
      ],
    },
    {
      heading: "Online tutoring or Kannur's coaching centres and home tutors?",
      paragraphs: [
        "Kannur has plenty of tuition centres and home tutors, mostly serving State syllabus and CBSE subjects and entrance coaching for NEET and JEE. They serve those well, but group batches rarely cover IB Chemistry HL or IGCSE Additional Mathematics.",
        "Private home tutors are common and often dedicated. Few have taught the current IB or Cambridge specification, and the gap shows in command terms, criteria-based writing and the choice of tier. A generalist can steady a child but may not know what an IB examiner wants.",
        "Self-study helps a disciplined student in a subject with many past papers. Where a person must read a plan or a long answer, a student cannot mark their own reasoning fairly, so an Internal Assessment plan or an extended response needs another pair of eyes.",
        "An online specialist gives private attention from someone who has taught the actual course. The student does not leave the house, and because the tutor may live in Pune or Chennai, the pool is national instead of what Kannur happens to have.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Kannur",
        columns: ["Option", "Syllabus fit", "Attention", "Limitation in Kannur"],
        rows: [
          ["Tuition centres", "State syllabus, CBSE, entrance exams", "Group batch", "No IB or IGCSE batch"],
          ["Local home tutors", "Varies", "One to one", "Few know the current specification"],
          ["Self-study", "Depends on the student", "None", "No marked feedback on IAs"],
          ["Online IB and IGCSE tutor", "Matched to the exact course", "One to one", "Needs reliable internet in monsoon weeks"],
        ],
      },
      bullets: [
        "Tuition centres serve State syllabus, CBSE and entrance exams",
        "Local tutors seldom know the current IB or IGCSE course",
        "Self-study lacks marked feedback on criteria-based work",
        "Online tutors are chosen for the course, not the postcode",
      ],
    },
    {
      heading: "Monsoon, Theyyam and Gulf holidays: how does Kannur's year shape study?",
      paragraphs: [
        "Kannur gets heavy rain from June to September, with the northeast monsoon adding more in October and November. Evening power cuts and flooded roads are a normal part of the season, so important lessons get a backup slot and students keep a charged laptop or hotspot ready.",
        "Theyyam season, which runs through much of the dry months from roughly December to April in north Malabar, brings village festivals, late nights and travel for many families. Vishu in April and Onam in August or September mark breaks, and Eid matters to a large part of the city.",
        "Gulf school calendars matter more here than in most Indian cities. Children in Gulf schools have holidays in the summer and around Eid, and they often spend them in Kannur. Those weeks are ideal for concentrated lessons, and our tutors plan accordingly.",
        "For IB Diploma students the May examinations come at the end of the dry season, with mock papers in February and March. Cambridge IGCSE runs in May and June and in October and November, while Edexcel adds a January series. Starting two or three months before a mock gives a steadier run.",
      ],
      table: {
        caption: "Kannur study calendar for IB and IGCSE students",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["December-April", "Theyyam season, mocks, Edexcel January series, Vishu", "Plan around late nights and travel"],
          ["May-June", "IB May session, Cambridge May-June series, Gulf summer holidays", "Intensive blocks while children are home"],
          ["June-September", "Southwest monsoon, Onam", "Backup slots for power and internet failures"],
          ["October-November", "Northeast monsoon, Cambridge second series", "Useful for catch-up and retakes"],
        ],
      },
      bullets: [
        "Heavy monsoon weeks need backup lesson slots",
        "Theyyam season means travel and late nights for many families",
        "Gulf holidays suit intensive catch-up blocks",
        "Mocks in February and March prepare for May",
      ],
    },
    {
      heading: "Which universities can Kannur students target after IB or IGCSE?",
      paragraphs: [
        "Near home, Kannur University and its affiliated colleges, the Government Medical College at Pariyaram, and institutions in Kozhikode such as NIT Calicut and IIM Kozhikode are the regional options. Applicants from the IB or IGCSE need their qualification recognised through Association of Indian Universities equivalence.",
        "For engineering and medicine, JEE Main and NEET require Physics, Chemistry and Mathematics or Biology at suitable levels, so subject choices at Class 11 matter. Central universities and many private ones accept CUET-UG, and Kerala's own entrance process has its own rules for students from other boards.",
        "Abroad, Kannur's Gulf connections make the UK, Canada, Australia and the Gulf itself obvious destinations. Offers depend on predicted grades issued in the autumn of the last year, so improving Class 12 performance early has real value.",
        "A tutor teaches the subject, lifts the predicted grade and sharpens technique. Applications and admissions decisions stay with the family, although tutors say frankly what a course in India or overseas usually expects.",
      ],
      bullets: [
        "Kannur University, Pariyaram and Kozhikode institutions are regional options",
        "AIU equivalence and subject combinations matter for JEE and NEET",
        "CUET-UG opens central university routes",
        "Predicted grades drive overseas applications",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Kannur students",
      paragraphs: [
        "Students aiming at engineering, physics or economics usually choose Analysis and Approaches, where calculus and proof dominate and HL Paper 3 uses long unfamiliar problems. Applications and Interpretation suits future business, biology or social science students with more statistics and technology.",
        "Physics HL depends on fluency with the data booklet and an investigation that holds together. Chemistry HL moves from quantitative work to organic chemistry and energetics in year two, and any weakness in the early material shows up there.",
        "In Biology, marks are more often lost by misreading the command term than by missing facts, and investigations need enough statistics to justify the conclusion. Kerala syllabus students arrive with strong recall and need most help with evaluation.",
        "Only one Kannur school offers anything like this at the top level, and only through Cambridge, so a specialist matched on level and specification closes gaps faster than a generalist.",
      ],
      bullets: [
        "AA suits calculus and proof, AI suits modelling",
        "HL sciences need a strong investigation",
        "Biology rewards exact command-term answers",
        "Kerala syllabus students usually need help with evaluation",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: choosing from Kannur",
      paragraphs: [
        "The choice between Core and Extended shapes later options, since Core caps the grade and Extended is the usual route to IB Higher Level or A Level sciences and mathematics. Families at Cambridge schools often get guidance there, but returnees from the Gulf and private candidates often decide alone.",
        "Extended Mathematics 0580 with Additional Mathematics 0606 prepares a student well for IB Maths AA HL, and Extended sciences serve IB Physics and Chemistry. Core suits a student who wants a secure pass across a wider range of subjects.",
        "Edexcel, common among Gulf returnees, uses Foundation and Higher tiers and orders questions differently from Cambridge, so a tutor familiar with its papers is important. Families should settle the board before buying books or past papers.",
        "Private candidates must find an approved exam centre and enter months before the session. A tutor can help plan the timetable, but the family must confirm the entry early.",
      ],
      bullets: [
        "Core caps grades lower than Extended",
        "0606 is a strong bridge to IB Maths AA HL",
        "Edexcel and Cambridge need board-specific practice",
        "Private candidates should confirm an exam centre early",
      ],
    },
  ],

  tutorsIntro:
    "Explore IB and IGCSE tutors who teach Kannur students in PYP, MYP and the Diploma, plus Cambridge and Edexcel IGCSE. Matches rest on the syllabus code, level and exam series, which matters in a city where only one Cambridge school is confirmed.",

  process: [
    { title: "Send your brief", description: "Board or programme, subject, level, recent grade and the hours that suit a Kannur household." },
    { title: "Read a shortlist", description: "Tutors come back matched on course, each with a short reason." },
    { title: "Try a free class", description: "A real topic taught live, without cost or obligation." },
    { title: "Agree a plan", description: "The tutor sets out topics and a weekly rhythm for you to approve or change." },
    { title: "Review often", description: "Weekly classes, a review every few weeks and an easy swap if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched on the course", description: "Code, subject and level decide the match, not a general IB label." },
    { title: "Built for a Gulf-connected city", description: "Tutors follow children between Kannur and school abroad, because lessons are online." },
    { title: "A real trial first", description: "A free class on actual syllabus content comes before any commitment." },
    { title: "The student's work stays theirs", description: "Help with coursework never becomes writing it." },
    { title: "Parents stay informed", description: "A written note after each class and regular reviews." },
    { title: "Easy to change", description: "No long contract, no school tie and a simple tutor swap." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Kannur?", answer: "For Cambridge, we could confirm one: GEM International School, listed near Kannur University and affiliated with Cambridge. For the IB, we could not confirm any authorised IB World School in the city. Kochi has the nearest wider choice. If that changes, this page will be corrected." },
    { question: "Will a tutor come to our house in Kannur?", answer: "No. Visits to the home are offered only in Gurugram and parts of Delhi NCR. In Kannur every class is online and one to one, with video and a shared whiteboard. Your child studies in their own room at a fixed time, so the quiet of home tuition remains without anyone travelling." },
    { question: "How do we start?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board or programme, subject, level, latest grade and the evenings that suit you. A shortlist of suitable tutors comes back, and one of them gives your child a free trial class." },
    { question: "What influences the fee?", answer: "Level, subject, class length and the tutor's recent experience with the exact specification. No price list is published, but a written quote arrives before you book. Distance adds nothing, since lessons are online, and the first class is free so you can judge the value." },
    { question: "Is the first class really free?", answer: "Yes. Each match begins with a full trial class on real syllabus content, followed by a short note. If it does not suit, we offer another tutor or simply stop, and nothing is owed. Many families use it to see how their child responds to the tutor." },
    { question: "Can a tutor do my child's IA or Extended Essay?", answer: "No. Tutors never write or rewrite Internal Assessments, Extended Essays, TOK essays or coursework. They can clarify the criteria, help narrow a question, react to a plan and mark practice work. The final text must be the student's own, as the examination bodies require." },
    { question: "Which Diploma subjects are available?", answer: "Both Maths courses at HL and SL, the three sciences, Economics, Business Management, English A, Computer Science and Psychology are the most requested, with Malayalam A and Hindi B for languages. If a subject is unusual, ask first and we check that a suitable tutor exists." },
    { question: "We are back from the Gulf. Can the tutor pick up where school left off?", answer: "Yes, and it is one of our most common requests from Kannur. The tutor starts from your child's current subjects and level, finds gaps left by the move and keeps the syllabus continuous, which matters most in Mathematics and the sciences before an exam series." },
    { question: "Does tutoring work if my child is in the Gulf during term?", answer: "Yes. Lessons run on Indian time, so the tutor and student agree a slot that works with the Gulf school day, which is often an hour or two behind India. Because it is all online, the same tutor can carry on across holidays in Kannur and term abroad." },
    { question: "We study at a Cambridge school in Kannur. Is tutoring still useful?", answer: "Often, yes. Many students want a specialist to explain Extended Mathematics, Physics or Chemistry a second way, practise past papers under time or prepare for a retake. The tutor works alongside the school, using its syllabus code and tier, and never replaces classroom teaching." },
    { question: "Do you help younger children?", answer: "Yes. MYP and PYP students are matched with equal care. MYP help is often about writing to criteria and keeping the Personal Project on schedule, and PYP help builds reading, number sense and questioning. Shorter, regular sessions usually suit younger learners best." },
    { question: "Is moving from the Kerala syllabus or CBSE to IGCSE realistic?", answer: "Yes, if technique is taught early. Content is often familiar, but IGCSE marks method, command words and reasoning on new questions. The first sessions concentrate on those habits and on choosing a tier, so the change feels like a shift in style, not a restart." },
    { question: "What happens if rain or a power cut interrupts a lesson?", answer: "We reschedule. The tutor can carry on by voice if video fails, and a lost session moves to another slot. In the heaviest monsoon weeks we suggest a backup time for important lessons, and a charged laptop or mobile hotspot makes a real difference." },
    { question: "How are tutors vetted?", answer: "We check qualifications, recent teaching of the specific subject and level, and how the tutor explains a live topic in a short demonstration. You see their background before choosing, and the free class shows their teaching style directly." },
    { question: "When should tutoring begin?", answer: "As close to the start of the course as possible, Grade 9 for IGCSE and Class 11 for the Diploma. Joining two or three months before a mock still helps, and a late start beats none. The tutor sets goals that fit the time left." },
    { question: "Does IB Gram have any link with GEM International School or an exam board?", answer: "No. IB Gram is independent, with no connection to GEM International School, any other school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. School names appear only to give Kannur families an accurate local picture." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB Gram matches tutors for families across Indian cities." },
    { label: "Gurgaon home tuition", href: "/gurgaon/", description: "The only place with in-person home visits, alongside online lessons." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, TOK, the Extended Essay and internal assessment explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "The criteria, Personal Project and what MYP asks of a student." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects for Cambridge and Edexcel." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Start the brief-and-shortlist process directly." },
    { label: "IB and IGCSE tutoring in Kozhikode", href: "/kozhikode/", description: "Online tutoring for the larger Malabar city to the south." },
    { label: "IB and IGCSE tutoring in Taliparamba", href: "/taliparamba/", description: "Online tutoring for the nearby Kannur district town." },
    { label: "IB and IGCSE tutoring in Kochi", href: "/kochi/", description: "The nearest Kerala city with a wide international school choice." },
  ],

  closingHeading: "Begin with a free class for your Kannur student",
  closingBody:
    "Share the board or programme, the subject and level, your child's latest grade and the hours that work in a Kannur home, including any Gulf holiday weeks. A tutor and a free trial slot come back for you to judge in a live class. Email support@ibgram.com or WhatsApp +91 7439 368 115 to start.",
};
