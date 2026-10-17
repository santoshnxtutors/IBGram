import type { CitySeoPage } from "../types";

/**
 * /sidhi/ - IB and IGCSE tutoring page for Sidhi, Madhya Pradesh. Online-only delivery: tutors do not
 * visit homes here, that runs only in Gurugram and parts of Delhi NCR. No school in Sidhi district is
 * confirmed to teach the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and schoolClusters
 * point to Rewa, Jabalpur, Bhopal and Varanasi, reusing names already verified on neighbouring pages.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const sidhi: CitySeoPage = {
  slug: "sidhi",
  countryName: "Sidhi",
  countryNameLong: "Sidhi, Madhya Pradesh",
  demonym: "Sidhi",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around the school timetable first, then around April heat that has been recorded as high as 48.8 degrees, the wedding dates that cluster near Akshaya Tritiya and the monsoon weeks when power and broadband can waver",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.4109, longitude: 81.8795 },
  wikipedia: "https://en.wikipedia.org/wiki/Sidhi",
  alternateNames: ["Siddhi", "Sidhi MP", "Sidhi district", "Sidhi Baghelkhand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sidhi | Online Home Tuition, Free Trial",
  metaDescription: "Private IB and IGCSE tuition for Sidhi students, taught live online one to one from home. PYP to DP plus Cambridge and Edexcel IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sidhi",
  heroEyebrow: "ONLINE HOME TUITION FOR SIDHI FAMILIES",
  heroSubtitle: "Private tuition at home, taught live online: IB Gram matches Sidhi students with a tutor for their exact IB subject or Cambridge and Pearson Edexcel IGCSE code, one to one, on a laptop in your own house. No school in Sidhi district is confirmed to teach the IB or the IGCSE, so the specialist reaches you through the screen instead of the front door.",
  primaryKeyword: "IB and IGCSE tutors in Sidhi",
  imageAltText: "Sidhi student working through an IB Mathematics problem on a laptop during a live online tuition lesson",
  secondaryKeywords: [
    "IB tutor Sidhi",
    "IGCSE tutor Sidhi",
    "IB home tuition Sidhi",
    "IGCSE home tuition Sidhi",
    "IB private tuition Sidhi",
    "IB Maths tutor Sidhi",
    "IGCSE Maths tutor Sidhi",
    "IB Physics tutor Sidhi",
    "IB Chemistry tutor Sidhi",
    "IB Biology tutor Sidhi",
    "IB DP tutor Sidhi Madhya Pradesh",
    "IB MYP tutor Sidhi",
    "IB PYP tutor Sidhi",
    "IGCSE online tuition Sidhi",
    "Cambridge IGCSE tutor Sidhi",
    "online home tuition Sidhi",
    "private tuition at home Sidhi",
    "IB tutor Churhat",
    "IGCSE tutor Majhauli",
    "IB tutor Baghelkhand"
  ],
  heroTrustPoints: [
    "A tutor picked for your child's exact IB subject and level, or Cambridge and Edexcel code and tier",
    "Lessons on your own laptop, one student at a time, at hours that suit Sidhi's school day",
    "Try a full lesson free before any decision or payment",
    "A short written note after each session, and a different tutor if the fit is wrong",
    "Independent of every school, the IB, Cambridge and Pearson"
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage covered" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Tutor and student on one clock" },
    { value: "Free trial", label: "Before any commitment" }
  ],

  intro: {
    heading: "What IB and IGCSE home tuition means for a family in Sidhi",
    paragraphs: [
      "Sidhi is the headquarters of a Baghelkhand district in eastern Madhya Pradesh, with about 54,000 people in the town at the 2011 census and the Sanjay Dubri Tiger Reserve within reach. Its schools follow the MP Board or CBSE, and we could not confirm a campus anywhere in the district that teaches the IB or the Cambridge and Edexcel IGCSE. So when a parent here searches for IB and IGCSE tutors in Sidhi, the search is really for an online specialist, because a classroom equivalent does not exist within a day's drive.",
      "The households that do ask tend to share one story: the syllabus came from somewhere else. Officers of the forest, revenue and police services are posted to the district offices and the tiger reserve. Doctors and lecturers arrive on government transfers. Managers work at the cement plant the Aditya Birla group runs in the district, and engineers from the Singrauli power and coal belt, about 100 kilometres east, send children to boarding schools. Many of these children began an international programme in Bhopal, Pune or Delhi and would like to keep it going.",
      "If you typed home tuition in Sidhi hoping a tutor would arrive at your door, here is the plain version. IB Gram offers private one-to-one tuition that the student takes at home, on a laptop, with the tutor live on video. Tutors do not come to houses in Sidhi; the only places where a tutor visits a student's house are Gurugram and some parts of Delhi NCR. The lesson still happens in your sitting room, the teacher just happens to be in another city.",
      "IB Gram is an independent service with no tie-up to any school, the International Baccalaureate, Cambridge or Pearson. Tutors coach, explain and mark practice work. They never write an Internal Assessment, an Extended Essay, a Theory of Knowledge essay or any coursework that a student submits for a grade."
    ],
    bullets: [
      "IB support from PYP through MYP to the Diploma and Career-related Programme",
      "Cambridge and Pearson Edexcel IGCSE matched by subject code and tier",
      "Live one-to-one video lessons on Indian Standard Time",
      "No tutor visits to homes in Sidhi; that exists only in Gurugram and parts of Delhi NCR",
      "A free trial lesson and a written plan before you commit to anything"
    ]
  },

  programmesIntro: "Nothing in Sidhi district is an IB World School, so a family meets each programme from the outside: through a previous school, a boarding placement, or a plan for a future one. The notes below describe what that usually looks like from here, and what a tutor can and cannot do about it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description: "Learning is organised into units of inquiry that cut across subjects, and the final year ends with a student-led Exhibition. Nothing is graded by an external exam, so a tutor's real work is reading fluency, number sense and the habit of asking a question worth investigating.",
      countryNote: "A Sidhi family asking about PYP has almost always just arrived from a city where the child attended one. The first few lessons pick up the threads of the last unit of inquiry so the child does not lose confidence in a new classroom."
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description: "Each subject is marked against four criteria rather than one overall score, the Personal Project closes the programme, and some schools add on-screen eAssessment. Marks usually leak where a student describes a topic when the higher bands want it analysed.",
      countryNote: "From Sidhi, MYP help tends to come in bursts: a boarder home for the long break with criterion-marked science or language work waiting, or a Class 8 student trying to get ready for a move to an IGCSE or IB school."
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "Six subjects, three at Higher Level, plus Theory of Knowledge, the Extended Essay and service. Internal assessment carries a fifth or more of most subject grades, and final papers fall in May or November.",
      countryNote: "No Diploma is taught in the district, so a Sidhi student is always working to some other school's calendar, whether that is a boarding campus in Bhopal or an online school, and the tutor has to learn that calendar first."
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description: "A pair of Diploma courses is combined with a career-related study, a reflective project and work on personal and professional skills. Few Indian schools run it, but the Diploma courses inside it are taught to full depth.",
      countryNote: "CP enquiries from Sidhi are rare and usually come from a family whose child boards elsewhere; tutoring then concentrates on whichever Diploma courses the programme carries."
    }
  ],

  subjectsIntro: "A Physics HL lesson for a boarder revising before the November papers looks nothing like a Mathematics SL lesson for a Class 11 student catching up after a transfer, so matching starts with subject, level and the session the student is entered for, and the label IB comes last.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Students from board-exam schooling are usually fluent at algebra and differentiation and stumble when Paper 3 hides the same idea inside an unfamiliar investigation; practice works backwards from past questions and starts the Exploration early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "A graphic calculator, statistics and modelling carry the course, and the written Exploration is where marks are lost by students who leave it to the final holiday." },
    { name: "IB Physics", levels: "HL / SL", description: "Speed with the data booklet and clean handling of units and uncertainty separate the top grades; the Scientific Investigation needs a method that an examiner could honestly question." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure and bonding feel familiar to a CBSE student, then organic mechanisms and energetics arrive, which is where sessions slow down and use worked examples from real papers." },
    { name: "IB Biology", levels: "HL / SL", description: "Knowing the content matters less than answering the exact command term asked, so tutors train the translation from textbook knowledge to a mark-scheme style answer, along with simple statistics for the investigation." },
    { name: "IB Economics", levels: "HL / SL", description: "Correct diagrams earn marks early; the evaluation that Paper 3 at HL rewards is built by rehearsing real-world examples and policy trade-offs until they come naturally." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers punish definitions that are recited rather than applied, and the Internal Assessment needs a real organisation and real data to be credible." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "For a student schooled in Hindi medium, the gap is academic English, so sessions rebuild essay structure, commentary technique and the confidence to speak in the Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode and theory settle only after real programming practice, and the Internal Assessment product must run correctly and be documented clearly." },
    { name: "IB Psychology", levels: "HL / SL", description: "Accurate recall of key studies across the biological, cognitive and sociocultural approaches is half the battle; holding an extended response together under time is the other half." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A natural fit for a student who has grown up near a tiger reserve and river systems, but marks reward evaluation of a system rather than a description of it." },
    { name: "IB Geography", levels: "HL / SL", description: "Specific case studies with places, figures and dates beat general statements, and a fieldwork investigation needs a method that stands up to a second reading." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Register and text type come first, formal, conversational or journalistic, before the spontaneous conversation that the oral actually tests; a student raised on Hindi and Bagheli often writes it better than they realise." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions run as argument rather than lecture, taking an exhibition object apart and defending a prescribed title from the side the student does not naturally prefer." }
  ],

  igcseSubjectsIntro: "Cambridge and Pearson Edexcel both run International GCSE papers and the two do not phrase questions alike, so a Sidhi student is prepared for the board the exam centre actually uses. Content is taught from the exact specification, then drilled with that board's own past papers and mark schemes.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Moving to the Extended tier asks for speed and method marks more than new topics; early sessions recover the working that rushed students throw away." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and vectors one or two years early, which makes the later step into IB Maths AA far gentler." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Rearranging equations under pressure is the usual problem, and the alternative-to-practical paper gets its own slot rather than the last week." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Mole calculations and practical technique are built together from the first term, not treated as separate worries." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Genetics carries more weight than most students expect, and long-answer questions are where focused drilling wins marks." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Clean diagrams pay quickly, while the longer evaluative questions need deliberate practice with real examples." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Real problems solved in Python turn tracing and algorithm questions from guesswork into habit." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed summary writing against an unseen passage closes more of the gap than any vocabulary list." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "A memorised textbook answer loses to one that uses the facts printed in the case, so practice concentrates there." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A useful credit for a child from a Hindi-speaking home who wants the language on the certificate." }
  ],

  regionsTitle: "Sidhi town and the tehsils around it, served by online matching",
  regionsIntro: "Every lesson happens on a laptop, so these places are context and not destinations: which boards the nearby schools follow, how far the railhead is for a school visit, and what an evening looks like once heat, rain or a wedding procession takes over the road.",
  regions: [
    { name: "Sidhi town centre", note: "Government offices, the courts and most of the town's CBSE and MP Board schools sit close together here, so this is where most board-comparison conversations start." },
    { name: "Gopad Banas", note: "The tehsil that holds Sidhi town, named for two rivers that meet near the Shikarganj rest house; the best time to talk about a second curriculum is before Class 9." },
    { name: "Churhat", note: "A tehsil town with its own market, mostly MP Board schooling, where an online specialist saves a child a trip to a bigger city." },
    { name: "Majhauli", note: "Another tehsil headquarters in the district; a student here and a student in Sidhi town get exactly the same lesson." },
    { name: "Rampur Naikin", note: "A farming tehsil where sowing and harvest weeks shape household routines, so lesson slots are planned around them." },
    { name: "Kusmi", note: "A forest-side tehsil; 4G can be patchy at the edge of a reserve, so run a test video call from the exact room before the trial." },
    { name: "Madwas and Joba", note: "The nearest railway stations to Sidhi, roughly 50 and 60 kilometres away, which matters when a family travels for a school visit in Jabalpur or Bhopal." },
    { name: "Sanjay Dubri edge", note: "Villages and staff quarters beside the tiger reserve, home to forest service families who are often on a posting cycle and value a portable syllabus." },
    { name: "Rewa road", note: "The route toward Rewa, about 70 kilometres by road, where families go for hospitals, shopping and the nearest airport." }
  ],

  schoolDisclaimer: "School names appear here only to show where confirmed IB or Cambridge options exist outside the district. IB Gram is an independent tutoring service with no partnership with any of them, the International Baccalaureate, Cambridge or Pearson, and a mention is not a recommendation.",
  schoolClusters: [
    {
      city: "Sidhi district itself",
      note: "We could not confirm any school in Sidhi district that teaches the IB or Cambridge and Edexcel IGCSE. Schools here run the MP Board or CBSE, and we would rather name nothing than name a school we cannot verify.",
      schools: []
    },
    {
      city: "Nearby: Rewa",
      note: "About 70 kilometres away, Rewa is the natural place to look first, but no school there is confirmed for these curricula either, and a school with International in its name runs CBSE.",
      schools: []
    },
    {
      city: "Nearby: Jabalpur",
      note: "Roughly 300 kilometres by road, Jabalpur has a modest IGCSE option beside CBSE. It is a starting point and not a full international-curriculum campus.",
      schools: ["Little World School, Tilwara"]
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital is over 500 kilometres away and holds the state's most established Cambridge base, which is why boarding enquiries from Sidhi usually point here.",
      schools: ["Shrewsbury International School India", "Eastern Public School, Gandhi Nagar", "The Sanskaar Valley School, Chandanpura"]
    },
    {
      city: "Nearby: Varanasi",
      note: "About 200 kilometres away by road, Varanasi has a Cambridge-track school that is still building up to IGCSE and currently teaches to Class 9.",
      schools: ["Sunbeam International School, Varuna"]
    }
  ],

  modesIntro: "Every arrangement below rests on the same base: one tutor, one student, live on video, on the clock your family already keeps. What changes is the tempo. Some students need a steady weekly hour, some a short bridge before a change of school, and boarders need a plan cut to their school's holiday dates. No tutor comes to a house in Sidhi under any of them.",
  modes: [
    {
      title: "A standing weekly lesson at your own desk",
      description: "One fixed hour each week, timed after school or on a weekend morning, with the tutor on video and a shared screen. Most Sidhi families start here.",
      bullets: [
        "The tutor is chosen for the syllabus, not for being nearby",
        "Works for IB DP, MYP and Cambridge or Edexcel IGCSE alike",
        "Past papers are marked live on the shared screen",
        "The same tutor stays with the student through the term"
      ]
    },
    {
      title: "Bridge courses for a change of board or school",
      description: "A short, focused run of sessions for a child moving from MP Board or CBSE into IGCSE, or from one IB school to another after a transfer.",
      bullets: [
        "Command words such as evaluate and justify taught directly",
        "Gaps between the old and new syllabus mapped in the first week",
        "Best started the term before the move, not after it",
        "Ends with a written summary of what is now secure"
      ]
    },
    {
      title: "Exam-window and holiday intensives",
      description: "Extra hours placed in school breaks or the weeks before an exam series, built around timed papers and quick feedback, and planned around Sidhi's heat and wedding dates.",
      bullets: [
        "Timed papers marked against the current criteria",
        "Feedback in days rather than weeks",
        "Fitted to a boarding school's holiday dates and local festivals",
        "Book two to three weeks ahead of a term ending"
      ]
    }
  ],

  sections: [
    {
      heading: "Who asks for IB and IGCSE tuition in Sidhi, and where do they study?",
      paragraphs: [
        "Mostly families with a transferred earner, a boarding plan or an eye on study abroad, and they study wherever their school happens to be, often in another city. Sidhi district has no school we can confirm for the IB or for Cambridge and Edexcel IGCSE, so the syllabus arrives through a previous school, a boarding placement, an online school or a tutor.",
        "The mix is easy to recognise. Forest, revenue and police officers rotate through the district offices and the tiger reserve. Doctors, lecturers and bank managers come on transfers that run for three or four years. Staff at the district's cement plant and households tied to Singrauli's power and coal operations have children who board in Bhopal or farther. A smaller group is local: trading and farming families who plan a degree in the UK, Canada or Australia and want a qualification those universities read easily.",
        "Picture a child who finished Class 8 at a Cambridge school in Bhopal before a posting order brought the family to Sidhi. The new local school follows the MP Board, the old syllabus has stopped, and IGCSE Mathematics is half finished. A tutor matched to the exact code can keep that course moving, while the school handles the rest of the day.",
        "None of this leaves a Sidhi student behind. Cambridge sets the same 0580 paper nationwide and the IB moderates every Diploma against one global standard, so a student working from a small district town is judged on the same scale as anyone in a metro."
      ],
      table: {
        caption: "Families in Sidhi who ask about IB and IGCSE, and how each usually proceeds",
        columns: ["Family situation", "What the child needs", "Where the classroom is"],
        rows: [
          ["Transferred officers and lecturers", "Continuity with the syllabus of the last posting", "The old school, a boarding school or an online school"],
          ["Cement, power and coal households", "A bridge between postings and help in term breaks", "Boarding in Bhopal or farther, tutoring at home in Sidhi"],
          ["Overseas families returning", "A matching Cambridge or IB syllabus after a move", "An online school or a school outside the district"],
          ["Local families planning study abroad", "A second curriculum for subject depth and predicted grades", "A local school plus a specialist tutor online"]
        ]
      },
      bullets: [
        "No IB World School or confirmed IGCSE centre exists in Sidhi district",
        "Demand comes from transfers, boarding plans and study-abroad goals",
        "Online matching reaches tutors across India, not only those nearby",
        "Papers and mark schemes are identical to those sat in any metro"
      ]
    },
    {
      heading: "How do MP Board and CBSE compare with IGCSE and the IB Diploma in Sidhi?",
      paragraphs: [
        "MP Board and CBSE reward accurate recall of a fixed syllabus in one set of year-end papers, while IGCSE and the IB Diploma reward applying ideas to unfamiliar problems and building assessed work over months. The content overlaps in Classes 9 and 10, but the question style, the coursework and the depth of Higher Level subjects differ, so a move away from the board exam route needs deliberate preparation.",
        "Language is the quiet factor in a district where Hindi is the first language of 63 percent of residents and Bagheli of another 36 percent. A child taught in Hindi medium knows the science but may not yet know how to write a two-paragraph evaluation in English under time pressure. IGCSE and IB papers are in English, so the first job is often academic English, not new content.",
        "Assessment weight differs too. MP Board and CBSE give limited project or practical marks. An IB Internal Assessment counts for roughly a fifth of most subject grades, and IGCSE coursework in some subjects is marked against detailed published criteria. A Sidhi student who has never planned an assessed piece alone usually finds that planning, not subject knowledge, is the first real gap.",
        "Depth is the last difference. IB Higher Level Mathematics and sciences go well beyond a Class 12 board paper in some areas, and IGCSE Extended sits a step above routine board difficulty while Core sits near it. None of this makes switching unwise; it makes the first term the one that needs help."
      ],
      table: {
        caption: "MP Board or CBSE against IGCSE and the IB Diploma, from a Sidhi student's side",
        columns: ["Feature", "MP Board or CBSE", "Cambridge or Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Where to study it near Sidhi", "Nearly every school in the district", "No confirmed school; board elsewhere or learn online", "No IB World School in the district"],
          ["Main assessment", "Year-end papers, mostly recall and standard methods", "External papers in two series a year, some coursework", "Final papers in May or November plus internal assessments"],
          ["Language of the classroom", "Hindi or English", "English", "English plus a second language"],
          ["Typical next step", "Class 11 streams and JEE or NEET routes", "IB Diploma, A Level or Class 11 of an Indian board", "University applications in India and abroad"]
        ]
      },
      bullets: [
        "Hindi-medium learners need a bridge in academic English first",
        "IB internal assessment weighs roughly a fifth of most subject grades",
        "IGCSE Extended sits above routine board difficulty, Core close to it",
        "The first term after a switch is where support matters most"
      ]
    },
    {
      heading: "What decides the cost of IB and IGCSE tuition for a family in Sidhi?",
      paragraphs: [
        "Four things set the rate: the level and subject, how recently the tutor taught that exact syllabus, how many hours you book each week, and how tight the deadline is. Where you live inside Sidhi changes nothing, because nobody travels and no transport or city premium is added. The rate for IB and IGCSE tutors in Sidhi is given to you in writing before the free trial lesson.",
        "Subject and level matter because the national pool of tutors is uneven. Many teachers have taught IGCSE Mathematics Core, while far fewer have taught IB Physics HL or Chemistry HL in the last two years, and those scarcer specialists quote higher rates. For a Sidhi family the local pool is effectively zero for both, so every match is made nationally and the comparison is between tutors, not between neighbourhoods.",
        "Hours drive the monthly total more than any other choice. A steady weekly lesson from the start of a course usually costs less overall and achieves more than a burst of daily sessions two weeks before papers. Bridge courses for a change of school and exam-window blocks are planned as a fixed number of sessions so the total is known in advance.",
        "What you do not pay for is worth stating: no travel, no centre fee, no compulsory bundle of extras and no long contract. A session can be paused, and if the trial shows the pairing is wrong the answer is a better match, not a request to give it time. The test of value is what a tutor changes inside the hour, such as marking against the real criteria, and not the headline hourly figure."
      ],
      bullets: [
        "Level, subject, recent syllabus experience and weekly hours set the rate",
        "No travel or city premium is added for Sidhi",
        "You receive the rate in writing before the free trial",
        "No long contract; pausing or stopping carries no fee"
      ]
    },
    {
      heading: "Online tuition, coaching classes, local tutors and self-study: what works in Sidhi",
      paragraphs: [
        "Entrance-exam coaching, where it is available near Sidhi, is built around MP Board, JEE and NEET papers, because that is where paying demand sits. We know of no batch designed around IB Physics HL or IGCSE Additional Mathematics, and too few students in the district take either subject to fill a classroom.",
        "Local private tutors are subject teachers who know the board syllabus well, which helps a student who is behind in school Maths or Science. The difficulty is narrower and more specific: a tutor who has taught this year's Cambridge 0620 alternative-to-practical paper or has coached a Maths AI Exploration through to a good mark is rare in any small town, and in Sidhi we cannot point to one.",
        "Self-study has real strengths. Cambridge past papers are easy to find and a disciplined student can cover a lot of IGCSE Mathematics alone; IB papers are harder to obtain. Where solo revision stalls is on Internal Assessment planning and long written answers, since a student cannot see their own blind spots. An experienced second reader spots them in minutes.",
        "Online tutoring replaces a local supply that barely exists with a national one. It gives the syllabus precision coaching batches are not built for and adds the correction that self-study cannot. That combination is what a parent searching for IB and IGCSE tutors in Sidhi is actually looking for."
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Sidhi",
        columns: ["Route", "Fit to the exact syllabus", "Attention", "Main limit in Sidhi"],
        rows: [
          ["Coaching batch", "Weak; built for board, JEE or NEET papers", "Shared with a group", "No batch exists for IB or Cambridge subjects"],
          ["Local private tutor", "Uneven, strongest for board subjects", "One to one", "Very few have taught the current IB or IGCSE syllabus"],
          ["Self-study", "Whatever the student finds alone", "None", "IAs and extended writing go unchecked"],
          ["Matched online tutor", "Chosen for the exact code and level", "One to one", "Needs a steady connection at the student's home"]
        ]
      },
      bullets: [
        "Coaching near Sidhi is aimed at board, JEE and NEET papers",
        "A tutor with recent IB or IGCSE teaching is rare in a district town",
        "Self-study leaves internal assessments and long answers unchecked",
        "Online matching turns a missing local pool into a national one"
      ]
    },
    {
      heading: "What does the school year look like in Sidhi once heat, rain and weddings are counted?",
      paragraphs: [
        "The working year runs from the April start of a new class to the March board exams, with the heaviest study load between October and March, and Sidhi adds drags of its own: April and May heat that has been recorded as high as 48.8 degrees, a monsoon that brings about 1,150 millimetres of rain over roughly 54 wet days, and dense wedding dates around Akshaya Tritiya that can empty a household for days.",
        "Cambridge runs two main series, May-June and October-November, and the school or centre a student is entered with decides which one applies. IB Diploma papers fall in May and November, with results in early July and early January. For a Sidhi boarder the calendar that counts is the boarding school's, so a plan usually starts from its holiday dates and works backwards.",
        "Heat shapes the clock. From April to June the best lessons are early in the morning or after dusk, and a laptop with a full battery plus a phone hotspot is a sensible backup when the mains power drops. In January the opposite applies: average minimums around 8.5 degrees make early mornings hard, and an evening slot works better.",
        "Festivals are the last piece. Navratri and Dussehra in autumn and Diwali soon after slow the district for close to a fortnight, Holi lands just before board and school exams, and Makar Sankranti in mid-January is a short pause. A plan that treats these weeks as rest, then restarts with a timed paper, wastes less than one that fights them."
      ],
      table: {
        caption: "Sidhi's seasonal calendar and what it means for lessons",
        columns: ["Months", "What is happening in Sidhi", "What we do with lessons"],
        rows: [
          ["April to early June", "New classes begin, extreme heat, wedding dates around Akshaya Tritiya", "Early-morning or late-evening slots, shorter sessions, Cambridge May-June series under way"],
          ["Late June to September", "Monsoon rain, about 1,150 mm in a year", "Test connection and power backup, steady weekly work, IB May results in July"],
          ["October to November", "Navratri, Dussehra, Diwali, second Cambridge series and IB November papers", "Pause for festival weeks, then focused timed papers"],
          ["December to January", "Cold mornings, Makar Sankranti, school mocks", "Evening slots, mock-paper review, Cambridge and IB November results arrive"],
          ["February to March", "Board exams, Holi, year-end school tests", "Keep sessions light for board-exam students, plan the next course start"]
        ]
      },
      bullets: [
        "April and May heat has touched 48.8 degrees in Sidhi",
        "About 1,150 mm of rain falls in a typical year",
        "Cambridge sits May-June and October-November series",
        "IB Diploma papers fall in May and November"
      ]
    },
    {
      heading: "Which colleges and universities do Sidhi students aim for after IB or IGCSE?",
      paragraphs: [
        "Most look in two directions at once: Indian entrance routes through CUET-UG, JEE Main and NEET-UG, and degrees abroad. Both need the right subject mix and paperwork. For Indian admissions an IB Diploma needs equivalence from the Association of Indian Universities (AIU), and IGCSE results count as a Class 10 qualification that is followed by a Class 11 and 12 pathway.",
        "Within reach of Sidhi, Rewa has Awadhesh Pratap Singh University and Shyam Shah Medical College, and further afield Jabalpur has IIITDM, Bhopal has MANIT, AIIMS and IISER, and Varanasi has Banaras Hindu University with IIT (BHU). Central universities including BHU and the University of Allahabad admit through CUET-UG, so an IB student's subject choices should be checked against the courses they want.",
        "Engineering and medicine from an IB or IGCSE background depend on eligibility rules. JEE Main and NEET-UG ask for specific subjects at the qualifying level, and state counselling can require equivalence documents. A Sidhi family should confirm the rules for the exact course early, because a missing subject in Class 11 cannot be added later.",
        "Study abroad relies on predicted grades, which are issued in autumn of the final year and carry heavy weight. A UK offer usually names a points total with minimums at Higher Level, while US and Canadian applications read the predictions as one part of a wider file. Tutors keep to the academic side, raising predicted grades and exam technique, and do not act as admissions consultants."
      ],
      bullets: [
        "IB Diploma needs AIU equivalence for admission in India",
        "CUET-UG opens central universities such as BHU and Allahabad",
        "JEE Main and NEET-UG require specific subjects to be studied",
        "Predicted grades in the final autumn carry weight abroad"
      ]
    },
    {
      heading: "IB Maths AA and AI, and the sciences, in detail for Sidhi students",
      paragraphs: [
        "Choosing between the two IB Mathematics courses is the first conversation worth having. Analysis and Approaches (AA) is built on algebra, functions, calculus and proof and suits engineering, physics or a quantitative degree; at HL its third paper sets long investigative problems that board-style drilling rarely rehearses. Applications and Interpretation (AI) leans on data, modelling and a graphic calculator, and its Exploration is a piece of independent writing that punishes a late start.",
        "In Physics HL the grade depends on handling the data booklet fluently and keeping accuracy across long papers, backed by a Scientific Investigation whose method survives a sceptical reading. Chemistry HL changes character once bonding gives way to organic mechanisms and energetics, and a tutor who marks against the real IB rubric, not a generic science standard, makes the difference in those weeks.",
        "Biology students mostly struggle to turn textbook knowledge into the extended-response wording that command terms demand, and to bring enough statistics to defend an investigation's conclusion. Across all three sciences, a student from board-exam schooling often knows the content well and has practised command-word precision far too little; fixing that lifts marks faster than covering new topics.",
        "Because no school near Sidhi teaches these courses, an online specialist matched to the exact level and current syllabus is the quickest way to close gaps between one holiday and the next. A generalist working from whichever textbook is nearest costs a term of revision that a student on this route rarely has."
      ],
      bullets: [
        "AA suits proof and calculus-heavy routes; AI suits statistics and modelling",
        "Physics and Chemistry HL both hinge on the Scientific Investigation",
        "Biology needs command-term precision as much as content knowledge",
        "Board-exam students usually know the content but under-practise command words"
      ]
    },
    {
      heading: "IGCSE Core, Extended and subject choices for a Sidhi student",
      paragraphs: [
        "The two IGCSE tiers cap different grade ranges: Core tops out at grade C on the A* to G scale, or grade 5 in the 9 to 1 versions, while Extended opens the highest grades. For a Sidhi student who plans to move on to the IB Diploma, the tier chosen in Class 9 decides how steep Higher Level Mathematics and the sciences will feel two years later.",
        "Extended Mathematics 0580, taken with Additional Mathematics 0606 where a school or exam centre allows it, is the strongest preparation for IB Maths AA at HL. The Extended sciences work the same way: the depth they reach sits close to what DP Physics and Chemistry expect on day one, which takes much of the sting out of the jump.",
        "Students normally follow whichever tier and subject list their own school or exam centre has fixed, wherever it is located, so tutoring works inside that structure. The job is to close the gaps a particular combination leaves thin, not to redesign a timetable that the school has already set.",
        "A family arriving from an Edexcel school needs a tutor who knows how Pearson words its questions differently from Cambridge. The mathematics underneath overlaps heavily, yet exam technique does not transfer, and students who assume it will tend to lose marks on phrasing alone."
      ],
      table: {
        caption: "IGCSE Core and Extended tiers compared",
        columns: ["Point", "Core tier", "Extended tier"],
        rows: [
          ["Highest grade available", "C, or 5 in the 9 to 1 versions", "A*, or 9 in the 9 to 1 versions"],
          ["Best for", "Students aiming to finish at Grade 10 or move to a Class 11 board", "Students heading to IB DP, A Level or STEM pathways"],
          ["Link to IB Maths AA HL", "A larger gap to bridge", "Strongest preparation, especially with Additional Mathematics"]
        ]
      },
      bullets: [
        "Class 9 tier choice decides how steep the later IB jump feels",
        "Additional Mathematics 0606 is the strongest bridge to Maths AA HL",
        "Tutoring works inside the subject list the school has fixed",
        "Edexcel and Cambridge technique differ even where content overlaps"
      ]
    }
  ],

  tutorsIntro: "Meet tutors teaching IB PYP, MYP and Diploma subjects along with Cambridge and Pearson Edexcel IGCSE. For a Sidhi family each introduction is weighed on syllabus, level and exam session first, and every lesson takes place live online.",
  process: [
    { title: "Send your brief", description: "The programme or board, the subject and level, the latest grade, and the evening or weekend hours that work in your Sidhi home." },
    { title: "Review a shortlist", description: "Tutors chosen for syllabus fit first, each with a plain reason why they suit your child." },
    { title: "Take the free trial", description: "A live topic from your child's own syllabus, taught online, with nothing owed afterwards." },
    { title: "Agree a first month", description: "The tutor proposes topics, a weekly rhythm and how progress will be reported, and you approve it or ask for changes." },
    { title: "Settle into lessons", description: "A fixed online slot each week, a check-in every few weeks, and a re-match whenever the pairing stops working." }
  ],
  whyPoints: [
    { title: "Matched on syllabus, not on postcode", description: "Tutors are picked for the exact IB subject and level, or IGCSE code and tier, because nobody near Sidhi can be picked on distance." },
    { title: "Made for places without a local option", description: "With no confirmed IB or IGCSE school in the district, matching reaches specialists across India instead." },
    { title: "You see it before you commit", description: "The free trial lets your child meet the tutor on a live topic first." },
    { title: "Assessed work stays the student's own", description: "Tutors coach Internal Assessments, coursework and the Extended Essay but never write any of it." },
    { title: "Progress you can read", description: "A written note follows every session and a fuller review comes every few weeks." },
    { title: "No lock-in", description: "No long contract, no tie to a school or exam board, and a new tutor on request." }
  ],

  faqs: [
    { question: "How do I find an IB tutor in Sidhi?", answer: "Send IB Gram the programme, subject, level and exam session, and a shortlist of IB and IGCSE tutors in Sidhi is built around that exact course. Sidhi has no IB school to draw a local tutor from, so matching follows syllabus fit across India instead of distance. Timings are fixed afterwards around your household, and a free trial lesson comes before any payment, with a different tutor offered if the first pairing feels wrong." },
    { question: "Do you have IGCSE tutors for Sidhi students, Cambridge or Edexcel?", answer: "Yes, for both boards. Matching is by subject code and tier, such as Cambridge 0580 Extended Mathematics or Edexcel 4PH1 Physics, using that board's genuine past papers and mark schemes. The lessons are live online and one to one, so a student in Sidhi works with the same kind of specialist as a student in a metro, and the tutor's city never limits the choice." },
    { question: "Do your tutors visit homes in Sidhi?", answer: "No. Tutors do not visit homes in Sidhi, and in-person lessons exist only in Gurugram and parts of Delhi NCR. What you get is private tuition at home, online: the student sits at a desk in your house with a laptop while the tutor teaches live on video with a shared screen. Treat any promise of a doorstep visit in Sidhi with caution." },
    { question: "What does IB or IGCSE tuition cost in Sidhi?", answer: "The rate depends on the level, the subject, the tutor's recent experience with that syllabus and the hours you book, not on where in Sidhi you live. IB Higher Level subjects usually sit above IGCSE Core support because fewer tutors have taught them recently. You receive the figure in writing before the free trial, there are no travel charges and no contract locks you in." },
    { question: "Which schools in Sidhi teach the IB or IGCSE?", answer: "None that we can confirm. Schools in the district follow the MP Board or CBSE, and we name no school we cannot verify. The nearest confirmed options are in Jabalpur, Bhopal and Varanasi, which are a long way off, so most families keep the child in a local school and add an online tutor for the international syllabus." },
    { question: "Will online lessons work with Sidhi's power cuts and patchy broadband?", answer: "Yes, with a little preparation. Keep the laptop charged, test the connection from the room you will use and keep a phone hotspot ready as a backup. If a storm or outage cuts a session short, tell the tutor early so a replacement slot can be arranged. Families near the forest edge should run a test call before the free trial." },
    { question: "Is there a free trial lesson before we commit?", answer: "Yes, the first lesson is free. Your child works through a real topic from their own syllabus with the proposed tutor over video, and nothing is owed afterwards. The tutor then sends a short plan for the first month, and you can go ahead, ask for changes or request a different tutor. Many Sidhi families book the trial for a weekend morning." },
    { question: "Can a tutor help with IB Internal Assessments from Sidhi?", answer: "Yes, but only by coaching and never by writing. That means helping choose a researchable question, explaining what each criterion rewards, planning data collection and giving honest feedback on a draft the student has written. Producing or rewriting assessed work would break IB academic integrity rules, so IB Gram tutors refuse any request of that kind." },
    { question: "Which IB Diploma subjects can you cover for a Sidhi student?", answer: "Tutors are matched across the subjects families ask about most: Maths AA and AI at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science and Hindi. Theory of Knowledge and Extended Essay guidance are covered as coaching. A less common subject gets the same matching process, only from a smaller pool." },
    { question: "My child studies in Hindi medium. Can they cope with IB or IGCSE in English?", answer: "Yes, with a bridging plan. Subject content is rarely the obstacle; academic English is. Tutors start with command words and technical vocabulary, and the student writes short timed answers every week. If you would like a tutor who can also explain a stuck concept in Hindi, say so at matching and we will look for one." },
    { question: "Can my child move from MP Board to IGCSE in Class 9 and still live in Sidhi?", answer: "Tutoring can prepare the student, but the exam needs an authorised centre. Cambridge and Edexcel papers are sat at approved centres, so confirm with a school or centre that will enter your child before relying on tuition alone. Meanwhile a tutor can teach the syllabus and the question style, including command words, well before any entry is made." },
    { question: "Do you tutor PYP and MYP students connected to Sidhi?", answer: "Yes, across the whole IB continuum. In PYP the work covers reading, writing, number sense and the research skills behind the Exhibition. In MYP it centres on criterion-based analysis in sciences and languages, plus the Personal Project process journal. These usually suit families whose child attends an IB school elsewhere or is about to move." },
    { question: "When should a Sidhi student start IB or IGCSE tutoring?", answer: "As early as the first term of the course, ideally Class 9 for IGCSE or Class 11 for the IB Diploma. An early start repairs weak foundations before internal exams, IA deadlines and predicted grades crowd into the same few months. A late joiner still gains: sessions narrow to the topics that carry most marks and lean on timed past papers." },
    { question: "Can lessons be in the evening or at the weekend in Sidhi?", answer: "Yes. Most families choose weekday evenings after school or weekend mornings. Summer scheduling allows for the heat, when early-morning or late-evening slots work better, and for Navratri, Diwali and wedding dates when the household is busy. A second weekly slot before mocks or an exam series is simple to add." },
    { question: "What happens if we are not happy with the tutor?", answer: "Tell us and another tutor is found. Progress is reviewed with the family every few weeks, and a re-match is available whenever the fit is off, because a child should not persist with someone who is not helping. There is no long contract, so pausing or stopping carries no penalty. Most changes happen after the trial or the first month." },
    { question: "How are IB Gram tutors vetted for Sidhi students?", answer: "Before any introduction, each tutor is checked on qualifications, recent teaching of the exact subject and level, and how they handle assessment criteria. Because Sidhi has no local specialist base, preference goes to tutors who taught the current syllabus recently over a general subject teacher. The free trial then lets you judge the fit yourself." },
    { question: "Can you arrange AIU equivalence or admissions for my child?", answer: "No. Tutors coach the subject and exam technique, and IB Gram does not process equivalence or admission. The Association of Indian Universities handles equivalence certificates, and each university or counselling body sets its own rules. We are happy to explain what a target course usually asks of applicants so tutoring hours go where they change the result." },
    { question: "Is IB Gram affiliated with any Sidhi school, the IB or Cambridge?", answer: "No. IB Gram is an independent tutoring service with no affiliation to, endorsement from or role for any school named on this page, the International Baccalaureate, Cambridge University Press and Assessment or Pearson Edexcel. School names appear only to describe where confirmed options exist." }
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works in cities and towns across the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person home tuition is actually available." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-by-subject IB tutoring from PYP to the Diploma." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, internal assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches against Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Rewa", href: "/rewa/", description: "The nearest city, about 70 kilometres away by road." },
    { label: "IB and IGCSE tutoring in Satna", href: "/satna/", description: "A neighbouring Baghelkhand city with a similar school landscape." },
    { label: "IB and IGCSE tutoring in Singrauli", href: "/singrauli/", description: "The power and coal district to the east of Sidhi." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "The closest city with a confirmed IGCSE school option." }
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Sidhi student",
  closingBody: "If you are looking for IB and IGCSE tutors in Sidhi, send four details: the programme or board, the subject and level, your child's latest grade, and the hours that suit your Sidhi household. You will hear back with a shortlisted tutor, a short teaching profile and a few trial times. Everything is online, one to one, free of charge at the trial stage and without obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp."
};
