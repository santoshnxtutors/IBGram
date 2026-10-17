import type { CitySeoPage } from "../types";

/**
 * Sangrur (Sangrur district, Punjab). No IB or Cambridge / Edexcel school could be confirmed in the city, so
 * stripSchools is empty and the clusters point honestly to Ludhiana, Mohali-Chandigarh and Jalandhar, whose
 * schools are already verified on neighbouring pages. Online only; no in-person tuition outside Gurugram and
 * parts of Delhi NCR.
 */
export const sangrur: CitySeoPage = {
  slug: "sangrur",
  countryName: "Sangrur",
  countryNameLong: "Sangrur, Punjab",
  demonym: "Sangrur",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and Sunday lessons that leave room for paddy-transplanting and wheat-harvest weeks, the May furnace and December fog",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.2458, longitude: 75.8421 },
  wikipedia: "https://en.wikipedia.org/wiki/Sangrur",
  alternateNames: ["Sangrur city", "Sangrur Punjab", "Sangrur district"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sangrur | Live Online Home Tuition",
  metaDescription:
    "Sangrur students get one-to-one online home tuition in IB and IGCSE: DP, MYP, PYP, Cambridge and Edexcel, matched to the exact course, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sangrur",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR SANGRUR, TAUGHT ONLINE",
  heroSubtitle:
    "Searching for home tuition in Sangrur for an IB or IGCSE subject is a frustrating exercise, because the Malwa belt's tutors are experts in PSEB and CBSE, not in Diploma papers or Cambridge mark schemes. We teach that gap: a live private lesson at home, over video, with a tutor from elsewhere in India who has recently taught your child's exact syllabus, arranged around the school day in Sangrur.",
  primaryKeyword: "IB and IGCSE tutors in Sangrur",
  imageAltText: "Sangrur student working through an IGCSE Physics question with an online tutor over video",
  secondaryKeywords: [
    "IB tutor Sangrur",
    "IGCSE tutor Sangrur",
    "IB home tuition Sangrur",
    "IGCSE home tuition Sangrur",
    "IB private tuition Sangrur",
    "IB Maths tutor Sangrur",
    "IGCSE Maths tutor Sangrur",
    "IB Physics tutor Sangrur",
    "IB Chemistry tutor Sangrur",
    "IB Biology tutor Sangrur",
    "IB DP tutor Sangrur",
    "IB MYP tutor Sangrur",
    "IB PYP tutor Sangrur",
    "IGCSE online tuition Sangrur",
    "IB tutor Dhuri",
    "IB tutor Sunam",
    "IB tutor Malwa Punjab",
    "online IGCSE tutor Punjab",
  ],

  heroTrustPoints: [
    "Private online home tuition, live with a tutor and never in a group",
    "Tutors who have recently taught your child's own IB or IGCSE course",
    "A free trial class before any payment conversation",
    "No affiliation with any school or awarding body",
    "Short written feedback after each class for parents",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB programmes taught" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Live video, IST", label: "How lessons run in Sangrur" },
    { value: "Trial class free", label: "No charge to begin" },
  ],

  intro: {
    heading: "What Sangrur parents find when they search for IB or IGCSE tutoring",
    paragraphs: [
      "Sangrur is a district headquarters in the Malwa belt, a city of about ninety thousand people with a former princely past: Banasar Bagh, the Jind State museum and the royal tombs known as Shahi Samadhan are reminders that it once served the rulers of Jind. Today its economy rests on grain, cotton, small industry, government offices and trade. Its schooling rests on PSEB and CBSE, with a busy coaching scene for competitive exams.",
      "An IB or IGCSE learner in this setting is unusual, but not unheard of. A family might have returned from Canada or the Gulf, a parent may work in a transferable post, or a student may be enrolled at a school in Ludhiana or the Chandigarh tricity and live at home in Sangrur during holidays. All of them face the same practical problem: finding a tutor who understands the course, and finding one at all.",
      "Online home tuition is how we solve it. The lesson is live, private and taught over video on a laptop at your own desk. Tutors do not visit homes in Sangrur, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. Instead the tutor, based elsewhere in India, sees the student's working through the camera, annotates a shared screen, and sends a written note after each class.",
      "This page lays out what is available near Sangrur, how the syllabuses compare, how costs are built, what the local climate does to revision, and how students here reach universities. It is written for families searching for IB and IGCSE tutors in Sangrur who want facts rather than slogans.",
    ],
  },

  programmesIntro:
    "Four IB programmes and two IGCSE boards, taught by tutors who have worked with each. For a Sangrur student these are the things that usually matter at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "An inquiry-led primary course where children explore themes through units rather than textbooks. Tutoring keeps to reading, number sense and clear speaking, in short and friendly sessions.",
      countryNote:
        "A child on PYP near Sangrur is typically studying at a school in a bigger city or has just returned from abroad. Lessons of half an hour, with a parent close by in the first weeks, suit this age best.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects assessed by criteria, with interdisciplinary units and a personal project. Tutors work on interpreting criteria and on explaining reasoning, not just arriving at answers.",
      countryNote:
        "Sangrur students who shift from MYP to a PSEB or CBSE class mid-way need help keeping written-explanation habits. Tutoring can also ease a move in the opposite direction.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, the Extended Essay, Theory of Knowledge and CAS. Our tutors cover subject content and exam technique, and students write their own internal assessments and essays.",
      countryNote:
        "DP students from Sangrur are commonly at schools in Ludhiana, Mohali or Chandigarh. Weekend lessons from home cover what a crowded weekday timetable leaves behind.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three DP courses combined with a career-related study and a reflective project. Tutors concentrate on the DP courses inside the combination.",
      countryNote:
        "CP is scarce in Punjab. It comes up mostly as a comparison with the full Diploma, and a tutor can describe what each leaves open for later study.",
    },
  ],

  subjectsIntro:
    "IB subjects at Higher and Standard Level. A Sangrur student is matched to a tutor who has taught that specific course recently.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Functions, calculus and proof-style reasoning, the usual choice for engineering and science aspirants." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Data, probability and modelling supported by calculator skills, suited to economics and social science." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and modern physics, with practice in explaining results clearly in words." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, equilibria, kinetics and organic mechanisms, with structured long-answer practice." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology, genetics, physiology and ecology, taught with attention to exact terminology." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and development economics, including evaluation using real examples, such as agriculture and trade." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study analysis of companies, finance and operations, for students from business families." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, data structures and networks, practised against the paper format." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Close analysis of non-literary and literary texts with guided essay planning." },
    { name: "English A: Literature", levels: "SL and HL", description: "Set works, poetry and drama, with support for the individual oral." },
    { name: "Punjabi and Hindi", levels: "SL and HL", description: "Language courses for students who speak Punjabi or Hindi at home, where their school offers them." },
    { name: "Psychology", levels: "SL and HL", description: "Studies, theory and research methods, with extended-response coaching." },
    { name: "Environmental Systems and Societies", levels: "SL and HL", description: "Systems thinking, land use and water resources, relevant to Punjab's own groundwater and crop debates." },
    { name: "Theory of Knowledge", levels: "DP core", description: "Help with how knowledge questions work. Essays and exhibitions remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE subjects, each checked against the board's paper codes and tiers before lessons begin.",
  igcseSubjects: [
    { name: "Mathematics (0580 and 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, stretched into functions and vectors at Extended tier." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "A fast course in calculus and algebra that supports later IB Mathematics HL." },
    { name: "Physics", levels: "Core and Extended", description: "Thermal physics, electricity, waves and atomic structure, plus practical-skills questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Bonding, reaction rates, organic chemistry and calculations." },
    { name: "Biology", levels: "Core and Extended", description: "Plant and animal systems, inheritance and ecology, with clear definitions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "Double-award science with balanced attention to all three disciplines." },
    { name: "Computer Science", levels: "Extended", description: "Algorithms, pseudocode and database tasks." },
    { name: "English First Language and Second Language", levels: "Extended", description: "Writing for purpose, comprehension and oral skills, with mark-scheme focus." },
    { name: "Punjabi, Hindi and other languages", levels: "Core and Extended", description: "Reading and writing support for students whose home language is Punjabi or Hindi." },
    { name: "Economics, Business Studies and Accounting", levels: "Extended", description: "Definitions, calculations and structured short essays." },
  ],

  regionsTitle: "Sangrur neighbourhoods and nearby towns our online students live in",
  regionsIntro:
    "We teach online, so these are not teaching sites. They are the places where students live, with a note on how the local pattern of the day affects a sensible lesson time.",
  regions: [
    { name: "Banasar Bagh and Shahi Samadhan side", note: "The heritage quarter. A calm residential pocket where evening lessons suit families used to early dinners." },
    { name: "Railway station and bus stand belt", note: "A busy commercial zone. Traffic eases after eight, and lessons run best then or on Sunday mornings." },
    { name: "Patiala Road", note: "The road towards Patiala and Chandigarh. Students commuting to schools outside the city often live along it." },
    { name: "Barnala Road", note: "Toward Barnala and Bathinda. Families here mix farm and trade work, so weekends can be irregular." },
    { name: "Dhuri Road", note: "Leading west to Dhuri. A growing residential stretch with families who value a flexible lesson slot." },
    { name: "Dhuri", note: "A neighbouring town with its own rail junction. Students study online without the trip to Sangrur." },
    { name: "Sunam", note: "A historic town in the district, with its own school circuit and a steady stream of students going to Patiala and Ludhiana." },
    { name: "Bhawanigarh", note: "On the Patiala side. Families often look at Patiala and Mohali for school and use online tuition for extra subjects." },
    { name: "Longowal", note: "Home to SLIET, an engineering institute. Staff and faculty families here sometimes choose international syllabuses." },
  ],

  schoolClusters: [
    {
      city: "Sangrur and its district",
      note: "No IB or Cambridge or Edexcel IGCSE school could be confirmed in Sangrur. Schools here run PSEB or CBSE, so an international learner is generally enrolled further away or studying privately.",
      schools: [],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Ludhiana is the closest big city with confirmed international schools. Families mention it for day school or boarding.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Mohali and Chandigarh",
      note: "The tricity has the broadest spread of IB and British-curriculum schools within a day's travel.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Chandigarh (IB)"],
    },
    {
      city: "Nearby: Jalandhar",
      note: "Jalandhar has a Cambridge-curriculum option. Check the current offer and entry rules with the school directly.",
      schools: ["Cambridge International School, Jalandhar"],
    },
  ],
  schoolDisclaimer:
    "IB Gram works independently of every school, exam board and university on this page. The schools are named solely to show where international courses exist near Sangrur, which is not a recommendation, and we have no commercial link with any of them.",

  modesIntro:
    "Since tutors do not visit homes in Sangrur, the choice is among three online formats, each suited to a different stage of the year.",
  modes: [
    {
      title: "Steady weekly classes",
      description: "One tutor, one subject, one fixed slot, on live video from your child's room in Sangrur.",
      bullets: [
        "The same tutor across the term",
        "Whiteboard, shared screen and past papers",
        "A brief written note after each class",
        "Change of tutor on request",
      ],
    },
    {
      title: "Short revision sprint",
      description: "A condensed run of lessons to tackle one weak area or prepare for a mock or board-style test.",
      bullets: [
        "Two to three weeks of focused sessions",
        "Questions chosen from the student's own mistakes",
        "Timed practice with immediate feedback",
        "Easy to restart before a later exam",
      ],
    },
    {
      title: "Transition support",
      description: "For a student moving between PSEB or CBSE and an international syllabus, in either direction.",
      bullets: [
        "A first lesson that maps what is already known",
        "Practice with command terms and mark schemes",
        "Gentle build-up of written-answer skills",
        "Parents updated as the student adapts",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there any IB or IGCSE school in or near Sangrur?",
      paragraphs: [
        "Not one that we could confirm inside Sangrur, and we prefer to say that plainly. The city's schools, from the long-established convent and public schools to newer private campuses, follow PSEB or CBSE, and some CISCE. International curricula live in the bigger cities.",
        "Ludhiana is the natural first look, since it is a large industrial city with international schools and a long history of Punjabi families moving abroad. The Chandigarh-Mohali belt has the widest choice of IB and British-curriculum schools. Jalandhar has at least one Cambridge-curriculum option. For any of them, the distance from Sangrur means either boarding, renting nearby, or long daily travel.",
        "Families who stay in Sangrur and follow an international syllabus therefore tend to fall into three groups. Some have a child at a school elsewhere and are home at weekends or in the holidays. Some have just returned from overseas and want continuity. Others choose to prepare privately for IGCSE or IB-style subjects as a route to a foreign degree, sitting papers at an approved centre.",
        "For all three, the tutor has to come through a screen. A good one can cover the gaps a school timetable leaves, keep a returnee aligned with a syllabus studied abroad, or carry a private candidate through a specification topic by topic. That is the honest role of IB and IGCSE tutors in Sangrur.",
      ],
      bullets: [
        "No confirmed IB or IGCSE school inside the city",
        "Ludhiana, Mohali, Chandigarh and Jalandhar are the nearest options",
        "Three common profiles: weekend boarders, returnees, private candidates",
        "Tutoring is online, with a focus on gaps in syllabus depth",
      ],
    },
    {
      heading: "How do PSEB and CBSE compare with the IB and IGCSE for Sangrur students?",
      paragraphs: [
        "PSEB syllabuses are designed around state textbooks, and results often decide entry to local government colleges. CBSE keeps to NCERT and is the standard base for JEE, NEET and CUET. Both ask, for the most part, for clear recall, worked derivations and well-rehearsed formats.",
        "Cambridge and Edexcel IGCSE, and the IB, are organised around application. A science paper may show a graph the student has never seen and ask what it means. A Mathematics paper may present a real situation and expect the student to choose a method. In English and Humanities, a good answer is an argument with evidence, not a summary.",
        "Malwa students coming from PSEB Punjabi-medium backgrounds may find the language shift the hardest part. Technical English vocabulary, command terms such as evaluate or justify, and timed written work are new skills. A tutor working one-to-one can train these without slowing down the rest of the subject.",
        "The table gives a quick comparison of how the four systems treat the things parents ask about.",
      ],
      table: {
        caption: "PSEB, CBSE, IB and IGCSE for families in Sangrur",
        columns: ["Feature", "PSEB", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Typical assessment", "Board exam on a fixed syllabus", "Board exam plus internal marks", "Exams plus internal assessment and essay", "Mostly exams, limited coursework"],
          ["Teaching medium", "Punjabi or English", "English or Hindi", "English with language options", "English with language options"],
          ["Local tutors", "Many, across the district", "Many, plus entrance coaching", "None confirmed locally", "None confirmed locally"],
          ["Indian university route", "Direct for state admissions", "Direct, including JEE and NEET", "Needs AIU equivalence", "Often a stage before A Level or IB"],
        ],
      },
    },
    {
      heading: "What is behind the price of IB and IGCSE tuition in Sangrur?",
      paragraphs: [
        "We do not list a price, since one number would mislead. The rate depends on who teaches and what. After a free trial class, we send the rate in writing, so you read it at home and decide without pressure.",
        "Factors that change the rate include the course level, the tutor's exam experience, the subject, the length of each session and how many you take per week. A tutor who has guided many students through Diploma HL Physics will charge differently from one helping a Class 8 student with MYP Mathematics. The weeks before a May or November exam are busier, and intensive blocks carry a different cost from a relaxed term.",
        "Comparison with local options is fair. A coaching batch in Sangrur costs less per hour, but it teaches dozens of students a syllabus set by PSEB or CBSE. A neighbourhood tutor may be affordable and skilled, yet rarely knows IB command terms. You pay for a specialist's undivided attention and for a match to the actual course.",
        "Some families arrange lessons just for one term or just before exams, and we write those plans down as well. Changing tutors costs nothing, so no one is locked into a bad fit.",
      ],
      bullets: [
        "Higher Level and Additional Mathematics cost differently from Core",
        "Tutor experience in the specific syllabus and board",
        "Session length and sessions per week",
        "Exam proximity: intensive blocks near May and November",
        "Every rate is given in writing before you book",
      ],
    },
    {
      heading: "Online home tuition or coaching in Sangrur: which fits an IB or IGCSE student?",
      paragraphs: [
        "Sangrur has a steady coaching scene, from entrance-exam institutes to Class 10 and 12 batch classes, and private tutors teaching in homes. These are useful for students on PSEB or CBSE. They are built around a single exam style, and an IB or IGCSE paper uses another.",
        "A private tutor who lives locally can be superb for Mathematics or Science at the school level, but very few have worked with international mark schemes. An explanation that is correct for a CBSE paper can still lose marks in an IGCSE paper because the wording or method differs from what the examiner looks for.",
        "Self-study is an option for strong, disciplined students, and the boards publish past papers and examiner reports for free. Its limit is feedback. Students working alone often cannot tell why an answer lost marks, and they keep repeating the same habit.",
        "Online tuition offers a specialist's attention without travel, and suits a household where a school day in another city already consumes the week. The table sets out the trade-offs.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE learner in Sangrur",
        columns: ["Choice", "Fits the syllabus", "Personal attention", "Travel", "Main drawback"],
        rows: [
          ["Online home tuition", "Tutor selected for the course", "One student per class", "None", "Needs good internet and a quiet place"],
          ["Coaching institute in Sangrur", "Mostly PSEB, CBSE and entrance exams", "Batch of many students", "Daily local travel", "Different exam style, few IB-trained staff"],
          ["Neighbourhood private tutor", "Depends on the tutor", "Good for subjects they know", "Tutor or student travels", "Rarely verified for IB or IGCSE"],
          ["Self-study", "Good with the right past papers", "None without an adult checking", "None", "No expert marking of written work"],
        ],
      },
    },
    {
      heading: "How do Sangrur's summers, fog and farming seasons affect revision?",
      paragraphs: [
        "The exam year for IB and IGCSE runs to May and November sessions, and most Indian students sit May. Practice exams fall in January or February, so a student typically has about four months between mocks and finals.",
        "Sangrur's climate is continental. Records show highs near forty-eight degrees in May and freezing lows in January. In practice that means mid-afternoon heat in the weeks before the May exam, fog in December and January, and heavy rain in the monsoon from July. Families in the district often depend on farm work, and paddy transplanting in June and harvest in October reorganise household time.",
        "Festivals add to it. Lohri and Maghi in January, Baisakhi in April, Diwali in autumn and wedding seasons in winter take evenings and sometimes weeks. Because lessons run online, rescheduling is easier than with a travelling tutor, but planning early still matters.",
        "At the start of each term we map these dates with parents, and pencil in lessons around them. The table shows the typical Sangrur calendar laid over the exam calendar.",
      ],
      table: {
        caption: "Sangrur's year against the exam year",
        columns: ["Period", "Local pattern", "What it means for tuition"],
        rows: [
          ["December to February", "Fog, Lohri, Maghi, mock exams", "Lessons on mock review; avoid late evening on fog nights"],
          ["March to April", "Wheat harvest begins, Baisakhi", "Final revision; flexible Sunday slots"],
          ["May to June", "Extreme heat, May exams, paddy planting", "Early-morning or night lessons to avoid the heat"],
          ["July to September", "Monsoon, new academic year", "Best time to start a new course"],
          ["October to November", "Paddy harvest, Diwali, November exams", "Short, focused lessons around festival days"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Sangrur go for university?",
      paragraphs: [
        "Locally, the options include Punjabi University in Patiala, Thapar Institute, Panjab University in Chandigarh and Longowal's SLIET for engineering. Students with a strong IB profile also look to IIT Ropar, IISER Mohali and Delhi-based universities. For many of these, an AIU equivalence certificate is needed for IB and some other international qualifications.",
        "Eligibility for JEE Main and NEET-UG is published each year, with notes for IB and IGCSE students. The rules usually ask for Physics, Chemistry and Mathematics or Biology at certain levels. Because they change, parents should check the current brochure early, in Class 11 and not in Class 12.",
        "Many Malwa families have relatives in Canada, the UK, Australia or the United States, and study abroad is a real route. An IB Diploma gives a score that overseas admissions offices read directly. IGCSE results serve as the foundation for A Level or IB and feed predicted grades.",
        "A tutor can explain how subject choices shape these doors, for example why IB Mathematics AA HL suits engineering and economics, or why Biology and Chemistry keep medical routes open. We make no promise of admission to any university.",
      ],
      bullets: [
        "Regional options: Patiala, Chandigarh, Ropar, Mohali and Longowal",
        "AIU equivalence certificate for most Indian applications",
        "JEE Main and NEET-UG publish separate IB and IGCSE notes",
        "Overseas study supported by IB points or IGCSE plus A Level",
      ],
    },
    {
      heading: "How are IB Mathematics AA and AI, and the sciences, taught online to Sangrur students?",
      paragraphs: [
        "The two Mathematics courses are genuinely different. Analysis and Approaches spends more time on algebra, calculus and proof, and suits students aiming at engineering, mathematics or physics. Applications and Interpretation spends more time on data, statistics and modelling, and suits those heading to economics, business, psychology or life sciences. A tutor can help a family pick the right one at the start.",
        "Lessons go well when the tutor poses a question, the student writes the solution on paper, and the camera or a shared tablet lets the tutor see each line. The tutor corrects the method as it happens, then sets a similar problem. After a few weeks, timed past-paper work starts to build exam stamina.",
        "For Physics, Chemistry and Biology, tutors concentrate on the gap between knowing and writing. Many Sangrur students are strong at calculation from PSEB or CBSE, but their written explanations are short. We teach a pattern for longer answers: state the principle, apply it to the data, explain the link, and conclude.",
        "Practical skills are taught through reasoning about experiments: variables, uncertainty, and evaluation. The tutor may use data from the student's school laboratory or from simulations. The internal assessment stays the student's own, and tutors do not write or edit it.",
      ],
    },
    {
      heading: "IGCSE Core or Extended for a Sangrur student, and how to pick subjects?",
      paragraphs: [
        "Core papers limit the top grade and cover fewer topics. Extended papers allow the full range and add harder questions. Anyone thinking of IB Diploma sciences or Mathematics, A Levels, or engineering should take the Extended tier in those subjects, since Core leaves gaps that show up later.",
        "Subjects follow the plan. A student aiming at medicine or engineering should keep separate Physics, Chemistry, Biology and Mathematics, with Additional Mathematics if available. A commerce-minded student can add Economics, Business Studies or Accounting. English and a language option round out the set and keep universities open.",
        "Board choice matters as well. Cambridge and Pearson Edexcel International GCSE papers are laid out differently, and topics sometimes come in a different order. If a student changes boards, a tutor can map the differences in a few sessions and close the gaps.",
        "Students who prepare privately should begin from the board's specification, confirm an exam centre early, and use past papers with examiner reports. Our tutors follow the specification topic by topic and keep a log of what has been covered.",
      ],
      table: {
        caption: "Core or Extended: choosing for a Sangrur student",
        columns: ["Factor", "Core", "Extended"],
        rows: [
          ["Top grade", "Capped lower", "Full range"],
          ["Best for", "Students who need solid basics", "Students aiming at IB HL, A Level or engineering"],
          ["Question type", "More structured", "Open, with stretch problems"],
          ["Tutoring focus", "Accuracy and steady confidence", "Problem solving and exam technique"],
        ],
      },
    },
  ],

  process: [
    { title: "Tell us about your child", description: "Send class, programme or IGCSE board, subject and exam month through WhatsApp or email." },
    { title: "Get a tutor suggestion", description: "We propose a tutor who has taught that course recently and explain the reasoning." },
    { title: "Attend a free trial class", description: "Your child has a live class with the tutor. You are under no obligation to continue." },
    { title: "See the rate on paper", description: "If you want to go ahead, we send the rate and weekly timetable in writing before booking." },
    { title: "Start and review", description: "Classes begin on the agreed slot, each ending with a note. If the fit is wrong, we find another tutor." },
  ],

  whyPoints: [
    { title: "A tutor chosen for the course", description: "Matched on programme, subject, level and board, not on a general claim of IB experience." },
    { title: "Designed for smaller cities", description: "Sangrur has no international-school tutor market, so online teaching is how the service works." },
    { title: "Parents see progress", description: "A written note after each class records what was covered and what comes next." },
    { title: "Coaching within limits", description: "Tutors teach and give feedback, but they never write internal assessments, essays or coursework." },
    { title: "Easy to switch", description: "A poor fit is fixed by changing tutors without any penalty or awkward conversation." },
    { title: "Scheduling that knows Punjab", description: "Lessons are planned around fog, harvest weeks and festival days where they can be foreseen." },
  ],

  faqs: [
    {
      question: "Do IB and IGCSE tutors exist in Sangrur?",
      answer: "Not in a way that matches international syllabuses, which is why we teach online. Our tutors are based in India, teach in Indian Standard Time and are selected for the exact IB programme or IGCSE board your child follows. Lessons happen over live video at your own desk in Sangrur, with a shared whiteboard for problem solving.",
    },
    {
      question: "Will a tutor come to my home in Sangrur?",
      answer: "No. Tutors do not visit homes in Sangrur, since in-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Sangrur we offer online home tuition instead, meaning a private one-to-one class that your child attends from home, with a tutor on video reviewing their written working in real time.",
    },
    {
      question: "Is there an IB school in Sangrur?",
      answer: "We could not confirm one. Sangrur schools follow PSEB or CBSE. The nearest schools with international curricula that we have verified are in Ludhiana, Mohali, Chandigarh and Jalandhar. Always check a school's current curriculum, admission rules and transport directly, because these change and we have no connection with any school.",
    },
    {
      question: "How much does a class cost?",
      answer: "We quote in writing and do not publish a fixed fee. The rate depends on the level, subject, the tutor's experience with that course, session length, and weekly frequency. After a free trial class, the written quote arrives, so you can compare it with local options calmly and decide whether it suits your family.",
    },
    {
      question: "Can my child switch from PSEB to IGCSE?",
      answer: "Yes, though it needs planning. Moving to a school that offers IGCSE is the cleanest route, while private study requires an approved exam centre. A tutor can test what the student already knows and plan the bridge. Expect the biggest change to be in how answers are written, which usually takes a few months to settle.",
    },
    {
      question: "Do you teach Punjabi or Hindi?",
      answer: "Hindi tutors are available at IB and IGCSE levels, and Punjabi can be arranged where the syllabus includes it. Lessons cover set texts, writing in the right register and oral practice. The tutor begins by finding out whether the language is the student's first or second, and adjusts the lessons to that.",
    },
    {
      question: "Will you write my child's Extended Essay or IA?",
      answer: "No. Tutors coach and never write. They can explain the criteria, help a student shape a research question, and comment on the structure of a draft. The Extended Essay, internal assessments, TOK essay and coursework must be the student's own work, and we decline any request to ghost-write or rewrite them.",
    },
    {
      question: "What if there is a power cut or weak signal during a lesson?",
      answer: "Keep a charged laptop and a mobile hotspot ready, and tell the tutor at once if sound or video drops. A lesson interrupted for long can be rescheduled at no charge. In summer, when grid demand peaks, choose early-morning slots, and in fog season, choose times when the household is settled.",
    },
    {
      question: "When should we start for May exams?",
      answer: "Start around seven to nine months before, which is August or September. That leaves time for content, past papers and a January mock. A student who starts later can still benefit, but the plan will be more compressed. The tutor begins by testing what is secure so early classes are not wasted.",
    },
    {
      question: "Can younger children learn online?",
      answer: "Yes. We teach PYP and MYP students as well as DP and CP. PYP classes are short, often thirty minutes, with reading and number games. MYP classes are criterion-based subject work. A parent near the desk in the first few lessons helps a young child settle into the format.",
    },
    {
      question: "Do Indian universities accept IB and IGCSE?",
      answer: "Yes, typically with an AIU equivalence certificate for IB and some international qualifications. Apply early, since processing overlaps admission rounds. JEE Main and NEET-UG publish eligibility notes for IB and IGCSE students each year. A tutor can explain how subject choices relate, but we do not handle the paperwork or promise admissions.",
    },
    {
      question: "What equipment does my child need?",
      answer: "A laptop or tablet with a camera and microphone, dependable internet and a quiet place. A phone as a second camera is useful for showing handwritten work. For Mathematics and Science, paper and pen are better than a stylus, and a graphic calculator is needed only if the school requires it.",
    },
    {
      question: "Can students from Dhuri, Sunam or Longowal join?",
      answer: "Yes. Anyone with stable internet can join, including students in Dhuri, Sunam, Bhawanigarh, Longowal and nearby villages. Test the connection at the lesson time, since evening speeds vary. If the signal is weak, we can shift slots or use audio-first lessons with photos of written work.",
    },
    {
      question: "Which IGCSE board is better, Cambridge or Edexcel?",
      answer: "Neither is better in general, and most students follow whichever board their school registers with. Cambridge leans towards structured multi-part questions, while Edexcel International GCSE has a slightly different layout and weighting. Private candidates should compare the specifications for their subjects, and a tutor who has taught both can help with that choice.",
    },
    {
      question: "How do I arrange a free trial class?",
      answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's class, programme or board, subject and exam session. We suggest a tutor and set up the free class. No payment is taken at that point, and a written rate is sent only if you choose to continue.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "All the Indian cities we serve online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE, subject by subject." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "How we plan the two-year Diploma." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criterion-based help for Class 6 to 10." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Short lessons for primary learners." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "What CP combines and who it suits." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI, SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "Tutor profiles and subjects." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free class." },
    { label: "Patiala", href: "/patiala/", description: "Nearby district city with online IB and IGCSE tuition." },
    { label: "Barnala", href: "/barnala/", description: "A neighbouring Malwa town covered by our online tutors." },
    { label: "Malerkotla", href: "/malerkotla/", description: "Close by, with the same online service." },
  ],

  closingHeading: "Book a free trial class from your home in Sangrur",
  closingBody:
    "Send the programme or board, subject and exam session, and we will suggest a tutor who has taught it. The first class is free, rates come in writing, and tutors can be changed. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
  tutorsIntro:
    "Tutors teach from across India in Indian Standard Time. For Sangrur, we start by finding someone who has recently taught your child's syllabus, because there is no local specialist to turn to.",
};
