import type { CitySeoPage } from "../types";

/**
 * /mangrol/ - IB and IGCSE tutoring page for Mangrol, Junagadh district, on the Saurashtra coast of
 * Gujarat (not Mangrol in Rajasthan or Surat district). Online-only delivery. No IB or
 * Cambridge/Edexcel school is confirmed locally, so stripSchools is empty and clusters point
 * honestly to Rajkot, Ahmedabad and Vadodara, reusing names verified on the Veraval and Porbandar pages.
 */
export const mangrol: CitySeoPage = {
  slug: "mangrol",
  countryName: "Mangrol",
  countryNameLong: "Mangrol, Gujarat",
  demonym: "Mangrol",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots are set around the monsoon and cyclone-season power cuts, Diwali vacation and the March board weeks, and can be moved at short notice",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.1167, longitude: 70.1167 },
  wikipedia: "https://en.wikipedia.org/wiki/Mangrol,_Junagadh",
  alternateNames: ["Mangrol Junagadh", "Mangrol Saurashtra", "Mangrol Gujarat"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mangrol | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Mangrol, Junagadh: live one-to-one online tuition from home, subject-matched, with written notes and a free trial lesson before you pay.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mangrol",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR MANGROL, SAURASHTRA",
  heroSubtitle:
    "On the Saurashtra coast, home tuition for an IB or IGCSE student means a laptop, a quiet corner and a tutor on video. Lessons are private and one-to-one, matched to the syllabus code and level, and no tutor will arrive at your door in Mangrol; the lesson travels by broadband instead.",
  primaryKeyword: "IB and IGCSE tutors in Mangrol",
  imageAltText: "Mangrol student solving an IB Physics question with a tutor on a live video lesson",
  secondaryKeywords: [
    "IB tutor Mangrol",
    "IGCSE tutor Mangrol",
    "IB home tuition Mangrol",
    "IGCSE home tuition Mangrol",
    "IB private tuition Mangrol",
    "IB Maths tutor Mangrol",
    "IGCSE Maths tutor Mangrol",
    "IB Physics tutor Mangrol",
    "IB Chemistry tutor Mangrol",
    "IB Biology tutor Mangrol",
    "IB DP tutor Mangrol",
    "IB MYP tutor Mangrol",
    "IB PYP tutor Mangrol",
    "IGCSE online tuition Mangrol",
    "online IB tutor Mangrol Junagadh",
    "IGCSE tutor Junagadh district",
    "IB tutor Mangrol Saurashtra",
    "IB tutor Mangrol port",
    "IGCSE tuition Gir Somnath coast",
  ],

  heroTrustPoints: [
    "Tutor selected for the precise IB subject and level or IGCSE board and tier",
    "Live private lessons online; no tutor visits homes in Mangrol",
    "Trial lesson first, with rates confirmed in writing",
    "Notes after every lesson, and a new tutor if the first is not right",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB programmes" },
    { value: "CAIE & Pearson", label: "IGCSE boards" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "No payment first" },
  ],

  intro: {
    heading: "A port town where international study is usually a long-distance plan",
    paragraphs: [
      "Mangrol is a coastal town in the Junagadh district of Saurashtra, better known for its fishing harbour, salt and agri-trade than for any classroom that teaches the IB. No IB World School or Cambridge or Edexcel IGCSE school could be confirmed in the town. Local schooling is GSEB with a few CBSE options, and that is the honest place to start.",
      "Yet Saurashtra is a region that sends its sons and daughters abroad more than most. Families in Mangrol, Keshod, Veraval and Porbandar have cousins in Mombasa, Leicester, Houston and Dubai, and the idea of an internationally recognised qualification is familiar. Enquiries we receive usually fall into three groups: a student in an online school, a student in a hostel in Rajkot or Ahmedabad, and a child preparing privately for IGCSE papers.",
      "That shapes how tuition works. The tutor is often the only person who can read a student's work against the specific marking criteria. Sessions are live, one-to-one and on Indian Standard Time, arranged around the student's school day and not around a commute to Junagadh or Rajkot.",
      "We are an independent service, unconnected to the IB, Cambridge, Pearson or any school on this page. Tutors explain, practise and give feedback. They never write or edit an Internal Assessment, Extended Essay, TOK essay or coursework submitted for assessment.",
    ],
    bullets: [
      "Tutors for IB PYP, MYP, DP and CP coursework",
      "IGCSE with Cambridge (Core, Extended) and Edexcel (Foundation, Higher)",
      "Private lessons, one student at a time, online",
      "Free trial lesson and written notes",
      "Home visits only in Gurugram and parts of Delhi NCR, not in Mangrol",
    ],
  },

  programmesIntro:
    "No IB programme runs locally, so these notes describe what each stage looks like for students connected to Mangrol, whether they study online, in another city or privately.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A primary programme built on inquiry, where children explore themes and show what they have learned in an exhibition. No formal exam, so tutoring leans on reading, number work and curiosity.",
      countryNote:
        "Coastal families with PYP-age children often want English fluency built alongside strong Gujarati, so sessions combine storytelling, phonics and short maths games.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of interconnected subjects judged against published criteria, capped by the Personal Project. The learning curve is steepest for students new to written reflection.",
      countryNote:
        "Mangrol students entering MYP from a GSEB background need help reading criterion descriptors and learning to justify answers, so early tutoring is about writing habits more than content.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year course of six subjects and three core elements, examined in May or November and supported by Internal Assessments.",
      countryNote:
        "Most DP requests linked to Mangrol come from students in Rajkot or Ahmedabad hostels or in online schools, who need a second voice in Maths, sciences or Business.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway mixing Diploma courses with applied studies, a reflective project and personal development. Offered by few Indian schools.",
      countryNote:
        "Requests from the Mangrol area are uncommon. When they do come, the focus is on the Diploma-level courses in the pathway and on planning the reflective project.",
    },
  ],

  subjectsIntro:
    "Being precise about the course is half the job. A student in IB Physics SL and one in Physics HL face different papers, and with no local school to check, we fix the code and level before naming a tutor.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "A rigorous course for students headed to engineering, pure science or economics. HL candidates must practise Paper 3 investigations, where routine methods run out." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use, for students in commerce, biology or social science. The Exploration rewards a topic with real data, such as tide tables or catch records." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, with written papers that test units and estimation as much as formulae." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, kinetics, equilibrium and organic chemistry, with salinity and water-quality examples nearby for the IA." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, where a coastline's marine ecosystems offer strong material for investigations." },
    { name: "IB Economics", levels: "HL / SL", description: "Trade, fisheries and ports give vivid examples for supply, externalities and international economics." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based analysis of operations and finance; students from trading and shipping families often have a head start." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary on unseen texts and comparative essays, with a spoken component that improves with repeated rehearsal." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and OOP, with a solution for the IA that must run and be explained." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches, studies and a replicated experiment, with evaluation as the marker of a high-scoring answer." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Coastal systems, fisheries and climate resilience make this subject feel local to a student on the Arabian Sea." },
    { name: "IB Geography", levels: "HL / SL", description: "Coastal management, urban growth and global change, with fieldwork that can draw on harbour and shoreline change." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Product design and a design project, suited to students interested in boats, machines or packaging." },
    { name: "IB Gujarati and Hindi B", levels: "HL / SL", description: "Writing and speaking practice in the home language, building on natural fluency." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led preparation for the exhibition and the prescribed-title essay, without drafting for the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSEs differ in structure. For a student in Mangrol, the first decision is the board, based on where the exams will be sat, and the second is the tier. Everything else follows from those two answers.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and data, with full written method emphasised and calculators used correctly." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity, waves and atomic physics, with practical-skills questions rehearsed alongside theory." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reactions, rates and the periodic table, including calculations and qualitative analysis." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Organisms, ecosystems and human biology, with diagram work and data response under time." },
    { name: "IGCSE English First Language", levels: "Cambridge / Edexcel", description: "Reading, argument and narrative writing, with attention to paragraphing and accuracy." },
    { name: "IGCSE English Second Language", levels: "Cambridge", description: "All four skills, helpful for students whose first language is Gujarati." },
    { name: "IGCSE Geography", levels: "Cambridge / Edexcel", description: "Coasts, rivers, population and development, using local examples where appropriate." },
    { name: "IGCSE Business Studies", levels: "Cambridge / Edexcel", description: "Business activity, marketing and finance, with case questions and calculations." },
    { name: "IGCSE Economics", levels: "Cambridge / Edexcel", description: "Basic economic problems, markets and trade, with data interpretation." },
    { name: "IGCSE Hindi as a Second Language", levels: "Cambridge", description: "A language paper that draws on home speech to build written and oral confidence." },
  ],

  regionsTitle: "Mangrol and surrounding coastal Saurashtra",
  regionsIntro:
    "Every lesson happens online, but where a student lives still affects the timetable: distance from the harbour, how power behaves in monsoon, and how far the school bus travels. These are the places we are asked about.",
  regions: [
    { name: "Mangrol port and harbour area", note: "Busy in the fishing season, with family members on boats and in markets. Lessons are best placed in the evening after the day's catch is sorted." },
    { name: "Mangrol town centre and bazaar", note: "Older market streets with shop-house families. Students here usually study after the shutters close around 8 pm." },
    { name: "Station Road area", note: "The road towards the railway link, close to schools and tuition lanes. Reliable broadband makes this a convenient area for online lessons." },
    { name: "Keshod Road", note: "Residential pockets along the road to Keshod and its airport, where some families have relatives in the Gulf or Africa." },
    { name: "Veraval Road", note: "On the route towards Veraval and Somnath, with school buses in the morning and afternoon traffic on festival weeks." },
    { name: "Porbandar Road", note: "Stretch heading north to Porbandar, home to families who compare Porbandar and Mangrol options for schooling." },
    { name: "Shil and coastal villages", note: "Villages within a short distance of Mangrol with fishing and agriculture-based households. Internet may be patchier, so a backup slot helps." },
    { name: "Chorvad direction", note: "Students on the southern side use Mangrol as a service town for shopping and healthcare." },
    { name: "Maliya Hatina and Mendarda side", note: "Inland towns where families look for private tuition and have few local international options." },
    { name: "Junagadh route", note: "Families on the road to Junagadh who make regular trips to the district HQ but prefer home-based online lessons." },
  ],

  schoolClusters: [
    {
      city: "Mangrol itself",
      note: "We could not confirm an IB or Cambridge/Edexcel IGCSE school in Mangrol, so none is named. Local options are GSEB and CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Rajkot",
      note: "The largest city in Saurashtra and the most common place for students from the coast to go for a school with an international curriculum. The school listed below appears on our Veraval and Porbandar pages.",
      schools: ["The Galaxy School, Rajkot"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "A long road or rail journey from Mangrol, relevant mainly for boarding.",
      schools: ["Ahmedabad International School", "Udgam School for Children"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Also mainly a boarding decision for families with links to central Gujarat.",
      schools: ["Navrachana International School, Vadodara"],
    },
  ],
  schoolDisclaimer:
    "The schools above are listed only to show where IB or Cambridge options exist, drawn from neighbouring pages of this site. IB Gram is an independent tutoring service and is not affiliated with, endorsed by or partnered with the IB, Cambridge, Pearson or any school named. Please verify admissions, affiliation and fees directly with each school.",

  modesIntro:
    "Everything runs online from Mangrol. The real choice is how many lessons a week, for how long, and whether the goal is steady progress or a push before exams.",
  modes: [
    {
      title: "Steady weekly tutoring",
      description: "One or two live lessons a week with the same tutor, each a full hour or ninety minutes at the student's desk.",
      bullets: [
        "Shared whiteboard and past papers on screen",
        "A written summary after each lesson",
        "Homework set and reviewed next time",
      ],
    },
    {
      title: "Short exam sprints",
      description: "Focused sessions in the weeks before IGCSE or IB papers, built around timed questions and weak topics.",
      bullets: [
        "Marked papers with line-by-line feedback",
        "A topic map updated each week",
        "Extra sessions during the Diwali vacation",
      ],
    },
    {
      title: "Transition support",
      description: "For a student moving into MYP, IGCSE or DP from a GSEB or CBSE background, or returning from abroad.",
      bullets: [
        "Command terms and criteria explained",
        "English writing at the pace of the student",
        "Gap-filling in Maths and Science",
      ],
    },
  ],

  sections: [
    {
      heading: "What does international schooling look like around Mangrol?",
      paragraphs: [
        "Start with what is not there: a confirmed IB World School, or a school we could verify as teaching Cambridge or Edexcel IGCSE, inside Mangrol. The town's classrooms follow the Gujarat board, with a few CBSE schools. That is common across coastal Saurashtra.",
        "Students in the wider region who do follow an international route tend to do so in one of three ways. They enrol in an online school, they board in Rajkot, Ahmedabad or further afield, or they sit IGCSE as private candidates. Each route brings different tutoring needs.",
        "For online-school students, tutors fill the gap left by large online classes: marked work, pace and question time. For hostel students, weekend and holiday lessons catch up on topics missed or on subjects the school does not teach well. For private candidates, a tutor builds the course from the specification and tests it against past papers.",
        "Families considering the international route for the first time should talk to schools directly and compare costs, since fees and boarding add up. Tutoring is a support, not a replacement for a school or exam centre.",
      ],
    },
    {
      heading: "How do GSEB, CBSE, IB and IGCSE compare for a student from Mangrol?",
      paragraphs: [
        "Families on the coast often weigh board choice against a practical question: where will the child be at seventeen? If the answer is Rajkot, Ahmedabad or a Gujarat medical college, GSEB or CBSE may fit. If it is abroad, IGCSE followed by IB or A Level gives a recognised path.",
        "The four boards differ in pace, style and exam timing. The table shows how, and it is worth reading alongside the school or centre's own prospectus.",
        "Assessment style separates them most. GSEB rewards textbook recall, CBSE mixes recall and application, and IGCSE and IB reward reasoning, data handling and written argument. A student from a recall-heavy background can adapt, but it helps to practise extended answers early.",
        "No board is superior in general. The question is fit: language of instruction, university plan, family finances and the student's own temperament.",
      ],
      table: {
        caption: "Board comparison for students connected to Mangrol",
        columns: ["Board", "Exam months", "Assessment style", "Common next step"],
        rows: [
          ["GSEB", "March", "Recall and short-answer, state textbooks", "Gujarat colleges, JEE and NEET preparation"],
          ["CBSE", "February-March", "NCERT-based with some application", "National entrance exams"],
          ["Cambridge IGCSE", "May-June, October-November", "Papers, coursework in some subjects", "A Level, IB Diploma, overseas schools"],
          ["Edexcel IGCSE", "May-June, January", "Tiered papers", "A Level, IB Diploma"],
          ["IB Diploma", "May, November", "Exams, IAs, EE and TOK", "Universities worldwide, CUET-UG"],
        ],
      },
    },
    {
      heading: "What sets the price of IB and IGCSE tutoring for a Mangrol family?",
      paragraphs: [
        "We do not publish rates here. Each quote is given in writing before booking and depends on four things you can weigh up for yourself.",
        "First, the level. Higher Level Diploma subjects, Extended IGCSE papers and scarce subjects such as Further Mathematics or Computer Science HL draw from a smaller pool of tutors.",
        "Second, the schedule. A weekly session is one thing; daily sessions in exam month are another. Third, the tutor's experience: someone who has marked papers or taught the syllabus for a decade is asked for more than a recent graduate.",
        "Fourth, the saving side. Teaching online avoids the long road to Junagadh or Rajkot, the fuel and the hostel visits. It also means a family can begin with a trial and stop without losing anything.",
      ],
      bullets: [
        "Course level and tier",
        "Subject scarcity",
        "Lessons per week and length",
        "Tutor experience",
        "A written quote before booking",
      ],
    },
    {
      heading: "Online tuition, coaching class, private tutor or self-study in Mangrol?",
      paragraphs: [
        "The coaching ecosystem in Saurashtra is concentrated in Rajkot, Junagadh and Jamnagar, and it is built for GSEB, JEE and NEET. Very few centres teach IB or IGCSE. A local private tutor may be excellent at Class 10 Maths, yet may not know IB Analysis and Approaches or the IGCSE mark schemes.",
        "Online one-to-one lessons match a tutor to the syllabus and give feedback on the student's own answers, which is the thing that raises a mark. The cost is a dependence on the internet, which on the coast can falter in a storm.",
        "Self-study with past papers is realistic for motivated students, particularly in Maths and Sciences. It works best when combined with a tutor who marks practice answers and points out recurring errors.",
        "For most families, a hybrid is sensible: online lessons once or twice a week and self-study in between.",
      ],
      table: {
        caption: "Support routes compared for Mangrol students",
        columns: ["Route", "Helps with", "Drawback", "Fit for IB or IGCSE"],
        rows: [
          ["Online one-to-one", "Specific syllabus, marked practice", "Depends on power and broadband", "High"],
          ["Coaching in Rajkot or Junagadh", "Structure and peer pressure", "Long travel, few IB courses", "Low"],
          ["Local private tutor", "Convenience", "May not know IB marking", "Low to medium"],
          ["Self-study", "Flexibility", "No marking", "Medium"],
        ],
      },
    },
    {
      heading: "How do monsoon, cyclone season and festivals shape the study year on the coast?",
      paragraphs: [
        "The Saurashtra coast has a distinct weather calendar. Monsoon runs from June into September, and the pre-monsoon and post-monsoon weeks can bring cyclonic systems that disrupt power and broadband for a day or more. A backup slot in the week, and a device with a charged battery, matter more than they would inland.",
        "Festivals shape the second half of the year. Navratri evenings are taken up with garba in most neighbourhoods, and the Diwali vacation is long enough for a proper block of exam practice. The Mahashivratri fair at nearby Junagadh and Somnath draws visitors in February to March.",
        "Summer days are hot and humid on the coast, with sea breezes easing the evenings. Lessons for younger children work best after 5 pm.",
        "Plan around this calendar and your timetable will survive the year. Put major past-paper work into Diwali, keep festival weeks light and leave April to June for exam practice.",
      ],
      table: {
        caption: "Exam and local calendar for Mangrol students",
        columns: ["Months", "Exam or study focus", "Local factor", "Planning note"],
        rows: [
          ["June-September", "New year starts, unit work", "Monsoon and possible cyclone disruption", "Keep a backup lesson slot"],
          ["October-November", "IGCSE and IB November exams", "Navratri, Diwali vacation", "Full past papers in the break"],
          ["January", "Mock exams", "Uttarayan on 14 January", "Leave the day free"],
          ["February-March", "GSEB and CBSE boards", "Mahashivratri period", "Reduce IGCSE load for board candidates"],
          ["April-June", "IGCSE and IB May papers", "Hot and humid, summer vacation", "Evening lessons"],
        ],
      },
    },
    {
      heading: "Where do students go after IB or IGCSE from Mangrol?",
      paragraphs: [
        "Within India, IB Diploma holders can apply to universities that recognise the Association of Indian Universities equivalence, and to central universities through CUET-UG. Students interested in medicine or engineering should confirm JEE Main and NEET eligibility against subject combinations.",
        "Gujarat offers Gujarat University, Nirma, PDEU, and, for design and architecture, CEPT. Saurashtra University in Rajkot and Junagadh Agricultural University attract students with agriculture and fisheries interests.",
        "Abroad, Saurashtra's strong diaspora gives many students a destination in the UK, East Africa, Canada or the US. The Diploma and strong A Level or IGCSE results are read easily there. Tutors prepare students in subject knowledge and exam technique, but do not write applications.",
        "Students who intend to study marine science, ports management or fisheries may also look to specialist institutes in India and overseas, so the science and geography choices made early matter.",
      ],
    },
    {
      heading: "Which IB science and mathematics options suit students from a coastal town?",
      paragraphs: [
        "Students from Mangrol pick Mathematics and the sciences more than any other group. Analysis and Approaches suits those aiming at engineering, while Applications and Interpretation works for commerce, biology and social sciences.",
        "Physics and Chemistry are demanding, but students with practical sense from family workshops or boats often find the ideas intuitive. The difficulty tends to be in writing answers clearly and in analysing data without mistakes.",
        "Biology and Environmental Systems and Societies can use the marine environment for investigations, such as salinity, mangrove cover or fish catch data. The IA rewards a question the student genuinely wants to answer and data they can collect themselves.",
        "A tutor will help a student check that a proposed investigation is feasible, explain the criteria and review method and analysis, while all writing remains the student's own.",
      ],
    },
    {
      heading: "How do I pick IGCSE subjects and tier from Mangrol?",
      paragraphs: [
        "Start with direction. A student aiming at Diploma sciences needs Mathematics Extended or Higher, two sciences and English. A student leaning towards commerce can pick Economics, Business or Accounting with Mathematics.",
        "Tier is next: Extended or Higher keeps all grades open, while Core or Foundation caps the top grade. A student unsure of their level should take a diagnostic lesson before committing.",
        "Language choices deserve care. English is essential; Gujarati or Hindi adds breadth and a likely good grade. Geography suits students curious about coasts and trade.",
        "Finally, register early with a centre that accepts private candidates, and build a timetable backwards from the exam date. Our tutors will help you map topics to weeks.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the student's class, subjects, board and exam session by WhatsApp or email." },
    { title: "Receive a tutor match", description: "We propose a tutor who has taught the exact course and level." },
    { title: "Try a free lesson", description: "A trial lesson on a real topic, with no payment." },
    { title: "Confirm rates in writing", description: "Weekly slot, lesson length and rate are fixed in writing." },
    { title: "Learn with notes", description: "Weekly lessons, a written note each time, and a change of tutor if required." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus", description: "Tutors are chosen for the exact code, tier and board." },
    { title: "One student per lesson", description: "Pace and examples follow your child." },
    { title: "Notes after each lesson", description: "You know what was covered without asking." },
    { title: "Coast-aware scheduling", description: "Monsoon, cyclone-season and festival weeks are built into the plan." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain and review but never write IAs or essays." },
    { title: "Free trial, easy change", description: "Try first and switch tutor if needed." },
  ],

  tutorsIntro:
    "All tutors teach from India on Indian Standard Time, so there is no time difference for a student in Mangrol. A selection of tutors for IB and IGCSE subjects appears below.",

  faqs: [
    { question: "Are there IB tutors for Mangrol students?", answer: "Yes, online. IB Gram teaches Mangrol students live over video, one-to-one, with tutors matched to the subject and level. Tutors do not come to Mangrol, because in-person home tuition is offered only in Gurugram and parts of Delhi NCR. A free trial lesson comes before any rate is agreed or any payment made." },
    { question: "Is home tuition for IB available in Mangrol?", answer: "Online home tuition is available; a tutor visiting your house is not. The student learns at home on a laptop and the tutor teaches live from elsewhere in India. We say this directly so nobody expects a knock on the door, and lessons are private, with a written note to parents after each one." },
    { question: "Is there an IB or IGCSE school in Mangrol?", answer: "We could not confirm one. Mangrol's schools follow GSEB or CBSE. For an international school, families usually look to Rajkot, Ahmedabad or an online school, and our Veraval and Porbandar pages list options in the region. Please check admissions, curriculum and affiliation directly with any school before deciding." },
    { question: "Can a Mangrol student take IGCSE as a private candidate?", answer: "Potentially yes, through an approved Cambridge or Pearson centre that accepts private entries, but not every centre does, and registration closes months in advance. Practical subjects need extra planning. Once a centre and session are confirmed, a tutor can build a backwards timeline and cover the syllabus." },
    { question: "What does IB tuition cost for Mangrol students?", answer: "IB Gram does not publish prices. Rates are given in writing before booking and depend on the level, how scarce the subject is, weekly hours and proximity to the exam. Teaching online removes travel and batch fees, and the free trial lets you judge the lessons before agreeing a rate or a schedule." },
    { question: "Which subjects are most requested from Mangrol?", answer: "Mathematics, Physics, Chemistry, Biology, Economics and Business Management are common, as is English. Environmental Systems and Geography interest students who live on the coast. Every request is matched to a tutor who has taught that exact course and level, and the match is confirmed before the trial." },
    { question: "Will a tutor write my IA or Extended Essay?", answer: "No. Tutors never write, edit or ghost-write an Internal Assessment, Extended Essay, TOK essay or coursework. They can explain criteria, help a student choose a workable topic, review a plan and give feedback on the student's own draft. The submitted work must be the student's own, as the IB and Cambridge require." },
    { question: "What is the difference between Cambridge and Edexcel IGCSE?", answer: "They are separate boards with different syllabi and papers. Cambridge offers Core and Extended tiers, Edexcel offers Foundation and Higher, and the Mathematics codes are 0580 and 4MA1. A student should prepare for the board their school or exam centre registers them with, and the tutor works to that specification." },
    { question: "Can a GSEB student move to IB or IGCSE?", answer: "Yes, most smoothly at Class 9 or Class 11. The main adjustment is learning to write extended answers and read command terms, not learning new facts. A short bridging unit of a few weeks in English and Science is usually enough, and our tutors can design it before the new course begins." },
    { question: "How do cyclones and monsoon affect online lessons?", answer: "They can interrupt power and broadband for a day or two. We schedule a backup slot each week, and if a lesson is lost to an outage it is rescheduled at no extra charge. A charged laptop, a mobile hotspot and a flexible week make the difference during June to September." },
    { question: "Do you teach younger children?", answer: "Yes. PYP-age students have shorter lessons of about 45 minutes with English, number sense and inquiry projects. MYP students focus on criterion-based writing and planning for the Personal Project. Parents receive a note after each session describing what was done and what comes next." },
    { question: "What do students need for online lessons?", answer: "A laptop or tablet, stable broadband, headphones and a quiet desk, plus paper, pens and whichever calculator the course allows. A stylus helps with the shared whiteboard but is not essential. A mobile hotspot as a backup is sensible on the coast, where outages after storms are common." },
    { question: "What if the tutor is not the right fit?", answer: "Tell us and we will suggest someone else. There is no penalty and no awkward conversation. The written notes from earlier lessons pass to the new tutor so work continues from the same point. We treat a change as a normal part of finding the right match." },
    { question: "Can IB or IGCSE help with JEE, NEET or CUET?", answer: "To a degree. The IB Diploma can support applications via CUET-UG and, where subject and percentage rules are met, JEE Main or NEET. IGCSE alone does not provide Class 12 equivalence. Always check the target institution's rules first. Our tutors teach the IB and IGCSE syllabi and do not offer JEE or NEET coaching." },
    { question: "How do I begin with IB Gram from Mangrol?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the student's class, subjects, board and target exam session. We reply with a tutor suggestion and set up a free trial lesson. Rates follow in writing after the trial, and you are free to stop there without any obligation." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All Indian city pages and online tuition overview." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Tutors for each IB subject." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "DP subjects and core." },
    { label: "Middle Years Programme tutoring", href: "/programmes/myp/", description: "MYP criteria and Personal Project." },
    { label: "Primary Years Programme tutoring", href: "/programmes/pyp/", description: "PYP inquiry and English." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI overview." },
    { label: "Our tutors", href: "/tutors/", description: "Browse tutor profiles." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Start with a free trial lesson." },
    { label: "IB and IGCSE tutors in Veraval", href: "/veraval/", description: "The Gir Somnath coast to the south." },
    { label: "IB and IGCSE tutors in Porbandar", href: "/porbandar/", description: "The coastal city to the north." },
    { label: "IB and IGCSE tutors in Rajkot", href: "/rajkot/", description: "Saurashtra's largest city." },
  ],

  closingHeading: "A free trial lesson, wherever you are on the Mangrol coast",
  closingBody:
    "Send us the class, subjects and exam session. We will suggest a tutor and set up a trial lesson at no cost, then send rates in writing. WhatsApp +91 7439 368 115 or write to support@ibgram.com to get started.",
};
