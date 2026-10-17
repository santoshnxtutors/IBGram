import type { CitySeoPage } from "../types";

/**
 * /rajgarh/ - IB and IGCSE tutoring page for Rajgarh in Churu district, Rajasthan (the same town that
 * sadulpur.ts covers under its railway name; this page is written from the Rajgarh-name angle and is not
 * about Rajgarh in Madhya Pradesh, Alwar or Himachal Pradesh). No IB or Cambridge / Edexcel school could be
 * confirmed; the clusters are labelled nearby or distant cities. Online one-to-one only.
 */
export const rajgarh: CitySeoPage = {
  slug: "rajgarh",
  countryName: "Rajgarh",
  countryNameLong: "Rajgarh, Churu district, Rajasthan",
  demonym: "Rajgarh",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Hours are set around the summer heat, Holi, Gangaur and Diwali, winter cold snaps and the RBSE and CBSE exam months",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.6383, longitude: 75.3833 },
  wikipedia: "https://en.wikipedia.org/wiki/Sadulpur",
  alternateNames: ["Rajgarh Churu", "Rajgarh Rajasthan", "Sadulpur", "Rajgarh Sadulpur"],
  stripSchools: [],

  title: "Rajgarh Churu IB & IGCSE Tutors | Online Home Tuition",
  metaDescription:
    "Rajgarh (Sadulpur), Churu: IB and IGCSE teachers for one-to-one lessons at home over live video, covering DP, MYP, PYP, Cambridge and Edexcel, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Rajgarh",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION FOR RAJGARH, CHURU",
  heroSubtitle:
    "If you are after private tuition at home in Rajgarh for an IB or IGCSE student, read this line first: the teacher is real, live and one to one, but teaches through a laptop. IB Gram does not send tutors to houses in Rajasthan, because in-person home tuition is limited to Gurugram and parts of Delhi NCR. A desert-edge railway town with no international school that we could confirm is a place where a good video lesson does a lot of work.",
  primaryKeyword: "IB and IGCSE tutors in Rajgarh",
  imageAltText: "A Rajgarh student in Churu district studying IB Mathematics with a tutor on a live video lesson at home",
  secondaryKeywords: [
    "IB tutor Rajgarh",
    "IGCSE tutor Rajgarh",
    "IB home tuition Rajgarh",
    "IGCSE home tuition Rajgarh",
    "IB private tuition Rajgarh",
    "IB Maths tutor Rajgarh",
    "IGCSE Maths tutor Rajgarh",
    "IB Physics tutor Rajgarh",
    "IB Chemistry tutor Rajgarh",
    "IB Biology tutor Rajgarh",
    "IB DP tutor Rajgarh",
    "IB MYP tutor Rajgarh",
    "IB PYP tutor Rajgarh",
    "IGCSE online tuition Rajgarh",
    "online home tuition Rajgarh Churu",
    "IB tutor Sadulpur Rajgarh",
    "IGCSE tutor Taranagar",
    "IB tutor Rajgarh Rajasthan",
    "Cambridge IGCSE tutor Churu district",
  ],

  heroTrustPoints: [
    "Each tutor is picked for your child's precise IB course, or IGCSE code and tier",
    "Every lesson is online; in-person visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson and brief written feedback after each class",
    "The rate is stated in writing before you book",
    "No tie to any school, board or coaching brand",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as every tutor" },
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Hindi and Marwari homes", label: "Language context respected" },
    { value: "Free trial", label: "Decide after one class" },
  ],

  intro: {
    heading: "Which Rajgarh is this, and what does IB or IGCSE tuition mean here?",
    paragraphs: [
      "India has several places called Rajgarh: a district in Madhya Pradesh, a town in Alwar, another in Sirohi and one in Himachal Pradesh. This page is about the Rajgarh in Churu district, northern Rajasthan, which is also known by its railway name, Sadulpur. The town sits at about 479 metres on the edge of the Thar, in what people call the Bagar country, and it counts 40 municipal wards, a large grain market, and a name for peda and kaju katli.",
      "We could not confirm any school here that teaches the IB or a Cambridge or Pearson Edexcel IGCSE. Local schools run RBSE, CBSE and a little ICSE. The fort above the old town was built in the eighteenth century by Maharaja Raj Singh I of Bikaner, and Mohta Post-Graduate College and a government college look after higher study. Families who still ask about IB and IGCSE are planning for elsewhere: traders with relatives in Kolkata, Mumbai or the Gulf, railway and bank employees who may be transferred, or parents who want a child ready for a boarding place in Jaipur or Dehradun.",
      "A tutor fills the gap between plan and classroom. The teacher might live in Hyderabad or Pune and is simply on screen at a Rajgarh dining table. No IB Gram tutor visits homes in Churu district.",
      "IB Gram stands apart from the IB, Cambridge, Pearson and every school mentioned on this page. Tutors explain and correct; they do not write an Internal Assessment, Extended Essay, TOK essay or any coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge and Pearson Edexcel IGCSE",
      "Live private lessons on video, in Indian Standard Time",
      "Nobody comes to your house in Rajgarh; in-person tuition is found only in Gurugram and parts of Delhi NCR",
      "Trial lesson free, written notes, and a replacement tutor if needed",
    ],
  },

  programmesIntro:
    "Nothing in Rajgarh teaches an international curriculum, so each programme arrives in a household sideways, through a transfer, a boarding seat, an online school or an overseas plan. The notes show what each stage asks of a tutor on screen.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5 (from age 6 to 11)",
      description:
        "Children learn through six big themes and questions of their own, ending in a final-year Exhibition. No paper is sat, so a tutor concentrates on reading stamina, number sense and the confidence to explain a thought aloud.",
      countryNote:
        "A PYP child in Rajgarh is generally getting ready to join an international school elsewhere, and the tutor keeps English speech moving while Hindi or Marwari remains the language of home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10 (from age 11 to 16)",
      description:
        "Teachers mark against criteria in every subject, and a Personal Project in the last year demands planning, a journal and an original result.",
      countryNote:
        "Pupils from RBSE or CBSE textbooks often find the openness unsettling at first, because there is rarely one model answer to copy.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12 (from age 16 to 19)",
      description:
        "The Diploma pairs three Higher Level with three Standard Level subjects and adds Theory of Knowledge, the Extended Essay and CAS; the grade blends coursework marks with the May papers.",
      countryNote:
        "A Diploma student with a Rajgarh address normally studies at a boarding school or online, and a tutor takes the subject where the school's pace has left a gap.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12 (from age 16 to 19)",
      description:
        "Here a student mixes several Diploma courses with a vocational qualification, a reflective project and a skills strand. Almost no Indian school offers it, and the academic courses within are no easier than in the Diploma.",
      countryNote:
        "Requests from Churu district are very rare and normally come from families planning technical study overseas.",
    },
  ],

  subjectsIntro:
    "We pin down level and exam series, and then the hours when the house is calm and the power reliable. The subjects listed are the ones Rajgarh students request most.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof for future engineers, where HL papers bury the method inside unfamiliar problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, models and calculator skills, well suited to commerce, economics and biology-led plans." },
    { name: "IB Physics", levels: "HL / SL", description: "Motion, heat, waves and fields, with an investigation that calls for tidy data and candid error analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculations with moles and bonding first, and then rates, equilibrium and organic chemistry." },
    { name: "IB Biology", levels: "HL / SL", description: "An enormous syllabus in which the exact command word in a question decides the marks." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams linked to live examples such as grain-market prices, rail freight and money sent home by migrant workers, all familiar in Rajgarh." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case work plus a research project that can study a real family trading house." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary on passages not seen before, comparative essays and spoken practice for students whose first thoughts come in Hindi or Marwari." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, data structures and a written-up software product for the internal task." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Desert ecosystems, falling groundwater and heat stress make case studies that lie on the doorstep." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies quoted correctly and built into balanced long answers." },
    { name: "IB Geography", levels: "HL / SL", description: "Dry-land water supply, migration and town growth, with a field study that could be repeated by someone else." },
    { name: "IB History", levels: "HL / SL", description: "Judging historical sources and building long arguments, with the history of the princely states close to the town's own past." },
    { name: "IB Hindi B and Hindi A", levels: "HL / SL", description: "Courses for students who must take Hindi within the Diploma, with writing and speaking drills." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talking through the exhibition and the essay, strictly as coaching." },
  ],

  igcseSubjectsIntro:
    "Most IGCSE candidates here sit privately through an approved centre, or belong to a school in a bigger city. Board, code and tier are fixed first, after which the plan counts back from the series picked.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Setting out each step, coping with the paper without a calculator and picking a tier that is realistic." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A first encounter with calculus and trigonometry, useful if IB Maths AA is the next step." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, electricity and waves, plus practice on the written paper taken instead of a lab practical." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and designing an experiment in words and diagrams." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cell biology, genetics and ecosystems, answered in clear structured prose." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing for a purpose, summarising a text and composing with control." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "All four language skills for students who speak Hindi or Marwari at home." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Key terms, supply and demand diagrams and brief judgement paragraphs." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Using business theory on the particular company in the case study." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithms on paper and logic gates, before any programme is run." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading passages, letter writing and spoken Hindi." },
    { name: "IGCSE Urdu as a Second Language 0539", levels: "Grade 9-10", description: "Reading and writing work for Urdu-speaking families, subject to the exam centre." },
  ],

  regionsTitle: "Rajgarh wards and nearby towns our online students log in from",
  regionsIntro:
    "On screen, every address looks alike, so these notes are about school context and daily timing rather than distance. Old-town lanes, railway quarters and farm villages run on different clocks, and lessons are planned accordingly.",
  regions: [
    { name: "Old Rajgarh and the bazaar", note: "Long-settled trading families live here, and many keep shop hours until late, so lessons often follow the day's closing." },
    { name: "Fort side", note: "The quarter near the eighteenth-century fort, with old havelis and narrow lanes where broadband is usually stable." },
    { name: "Sadulpur Junction and station road", note: "The largest railway junction in Churu district, so many households include railway staff whose shifts shape lesson times." },
    { name: "Anaj Mandi area", note: "Grain traders and commission agents live and work around the wholesale market, and their seasons set the family calendar." },
    { name: "Mohta College neighbourhood", note: "A student-heavy area near the post-graduate college where many families already think about the next city." },
    { name: "Hisar Road side", note: "The stretch towards Haryana, where students often have relatives in Hisar or Bhiwani and compare schooling there." },
    { name: "Churu Road side", note: "Homes facing the district headquarters, where families have links to Churu's schools and coaching." },
    { name: "Ward colonies around the municipality", note: "Mixed residential areas with government-school families and a steady evening routine." },
    { name: "Taranagar", note: "A nearby tehsil town where online tuition spares a long trip for specialist subjects." },
    { name: "Bagar villages", note: "Farming hamlets where electricity and connectivity vary and a backup plan is wise." },
  ],

  schoolDisclaimer:
    "No IB or IGCSE school turned up in Rajgarh, which is why the schools below are all in other cities, named as places Rajasthan families occasionally look at. IB Gram has no business link with them or with any exam body.",
  schoolClusters: [
    {
      city: "Rajgarh (Sadulpur) and Churu district",
      note: "Classrooms teach RBSE, CBSE and a little ICSE. None appeared in the IB or IGCSE listings we checked, so international study happens online or elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Jaipur",
      note: "Rajasthan's capital has the state's widest choice of IB and Cambridge schools, and some Churu families weigh boarding or a move there.",
      schools: ["Sanskar School, Sirsi Road", "Jayshree Periwal International School", "Mayoor School Jaipur", "India International School, Mansarovar"],
    },
    {
      city: "Nearby: Bikaner",
      note: "The regional city to the west; the international options families mention for Bikaner sit in Jaipur or further afield, and a family move is the parents' own decision.",
      schools: [],
    },
    {
      city: "Distant: Ahmedabad",
      note: "Some Marwari business families with ties to Gujarat look at Ahmedabad's IB and Cambridge schools.",
      schools: ["Calorx Olive International School", "Fountainhead School"],
    },
  ],

  modesIntro:
    "All of it happens on screen. What varies between Rajgarh homes is the trigger: a wish for steady weekly progress, a school change on the horizon, or an exam series that is coming fast.",
  modes: [
    {
      title: "Regular weekly sessions",
      description:
        "The same teacher every week at a fixed hour, writing on a shared board and handing out papers, then sending home a brief summary.",
      bullets: [
        "IB programmes and both IGCSE boards",
        "Evenings, or Saturdays and Sundays",
        "Model answers recorded if asked",
        "A check-in on progress each month",
      ],
    },
    {
      title: "Preparing for a new curriculum",
      description:
        "When a transfer, a boarding seat or a family relocation will put the child into a different syllabus, the tutor sets old and new side by side and trains the differences in vocabulary and exam habits.",
      bullets: [
        "Most useful a term before the switch",
        "A gap list built from the new syllabus",
        "Parents get a short debrief each time",
        "Ends once the child is comfortable",
      ],
    },
    {
      title: "Final push before an exam series",
      description:
        "Papers written under the clock, marked the same day, with the weakest topics retaught before the next attempt.",
      bullets: [
        "More lessons in the closing weeks",
        "Scores measured against recent grade boundaries",
        "Book about four weeks ahead",
        "A spare hour reserved in case the power fails",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Rajgarh in Churu have an IB or IGCSE school?",
      paragraphs: [
        "Our searches say no. The IB's list of schools, Cambridge's locator and the general directories show nothing in Rajgarh or Sadulpur, and we would rather leave the list empty than pad it. Classrooms in town prepare pupils for RBSE and CBSE papers, and the closest international schools are in Jaipur and beyond.",
        "That alters the question a family asks. Hardly anyone here is weighing two nearby campuses. The real concern is how to keep a child ready for a seat in another city, or how to fit a single international subject around a normal school week.",
        "Families list a few possibilities: a boarding place in Jaipur or Dehradun, enrolment with an online international school, or taking IGCSE papers privately through an approved centre. Whichever is picked, one or two subjects will still need a teacher who has handled them at the right standard.",
        "A specialist on screen meets that need and keeps everyone at home. The tutor's own city is beside the point; their years with the syllabus and its mark schemes are what matter.",
      ],
      table: {
        caption: "What Rajgarh offers and how families cover the rest",
        columns: ["Need", "Confirmed in Rajgarh", "What families do"],
        rows: [
          ["IB Diploma classes", "None found", "Board in another city, enrol online, or move"],
          ["Cambridge or Edexcel IGCSE school", "None found", "A school in Jaipur, or private entry"],
          ["RBSE and CBSE schooling", "Widely available", "Kept for the ordinary school syllabus"],
          ["IB or IGCSE subject specialist", "Very hard to find locally", "A tutor on screen, matched to the course"],
        ],
      },
      bullets: [
        "We confirmed no IB or IGCSE school in Rajgarh",
        "Demand comes from transfers, merchant-family ties and overseas plans",
        "Families choose between boarding, online enrolment and private entry",
        "The specialist teacher arrives on a screen",
      ],
    },
    {
      heading: "What surprises an RBSE or CBSE student in an IB or IGCSE exam room?",
      paragraphs: [
        "A Rajasthan pupil writes the RBSE secondary papers in March and then heads into Class 11 with JEE, NEET or commerce coaching alongside. What earns marks is a faithful memory of the prescribed book and a tidy, complete answer.",
        "Put an IGCSE or IB paper on the same desk and the first shock is wording. Questions start with verbs such as suggest, evaluate or deduce, and each verb asks for a different kind of reply. The second shock is the material itself: a graph, table or passage the student has never seen.",
        "There is a third difference, which is that teacher-marked work during the course feeds into the final grade. Lab reports, investigations and orals are a real portion of the result, not decoration.",
        "Students from this region arrive with genuine strengths, since stamina and respect for past papers travel well. The habit to rebuild is pausing to ask what a question is truly after, and early lessons rehearse exactly that on marked samples.",
      ],
      table: {
        caption: "RBSE, CBSE and the international courses compared",
        columns: ["Point", "RBSE", "CBSE", "IB and IGCSE"],
        rows: [
          ["When Class 10 is examined", "March", "February-March", "IGCSE in May-June or October-November"],
          ["What the question asks", "Recall of prescribed texts", "Recall with some application", "Reasoning, unseen data, judgement"],
          ["After Class 10", "Class 11-12 with Sikar or Kota coaching", "Class 11-12 in school", "IB Diploma or A Level"],
          ["Language subjects", "Hindi, English, Sanskrit, Urdu", "Hindi, English, electives", "Varies by school; Hindi and Urdu possible"],
        ],
      },
      bullets: [
        "RBSE exams come in March",
        "IB and IGCSE both pay for visible reasoning",
        "Stamina and past-paper habits transfer well",
        "Marked samples show what each command verb wants",
      ],
    },
    {
      heading: "How is the cost of IB or IGCSE lessons worked out for a Rajgarh household?",
      paragraphs: [
        "No printed price list exists because requests differ so much. A Higher Level Chemistry candidate needs a teacher who has run that course repeatedly, an IGCSE English candidate needs another kind of expert, and families book anything from one hour to three hours a week. Whether you live beside the fort or out among the Bagar villages does not figure anywhere.",
        "People naturally compare with the class behind the bazaar, sold per subject each month and geared to RBSE work. It costs less, fairly enough, yet it measures the wrong thing for an international paper, where the mark scheme and the teacher's training both differ.",
        "You receive the amount on paper ahead of the trial. Once accepted it stays put until you ask for a revision, and stopping or pausing needs only reasonable notice.",
        "One expense is missing from the bill altogether: the road. A weekly run to Jaipur would eat a whole day, and nobody has to undertake it.",
      ],
      bullets: [
        "The fee follows the teacher, the course and weekly hours",
        "Set it beside other IB or IGCSE help, not school-board classes",
        "You see the figure in writing before the trial",
        "No one spends money on the road",
      ],
    },
    {
      heading: "Coaching hub, local teacher, working alone or a specialist on screen?",
      paragraphs: [
        "Rajasthan's coaching industry is famous, with Sikar close at hand and Kota further off, and ambitious teenagers from Churu district regularly leave for a batch there. Those courses are shaped around entrance tests, and none is aimed at IB or IGCSE papers.",
        "The teacher down the lane may have known the family for years, and that trust counts for a lot. What is usually missing is one specific experience: supervising an IB Internal Assessment, or marking a Cambridge Paper 4 to its published scheme.",
        "Practising past papers alone can suit a self-driven student, but the weak spot is correction. A recurring mistake can survive dozens of attempts because nobody is there to point it out.",
        "A specialist on screen closes the supply gap, as long as the connection stays up. In a desert town that means a fan, a charged laptop and some backup power for the long hot evenings.",
      ],
      table: {
        caption: "Places a Rajgarh IB or IGCSE student might look for help",
        columns: ["Option", "How suitable", "What it involves", "Biggest drawback"],
        rows: [
          ["JEE, NEET or board coaching batch", "Weak, it is built for other exams", "A crowd and one teacher", "Pace and syllabus do not fit"],
          ["A teacher who lives close by", "Uncertain, it depends on what they taught before", "One to one, sitting together", "Probably no contact with international mark schemes"],
          ["Solo past-paper practice", "Good for quantity, little else", "On your own", "Errors stay uncorrected"],
          ["Specialist tutor online", "Strong, selected by course and level", "One to one on video", "Needs dependable connection and power"],
        ],
      },
      bullets: [
        "Coaching batches prepare for different exams",
        "Very few locals have ever marked IB scripts",
        "Solo work has no second reader",
        "A screen lesson needs a backup for the connection",
      ],
    },
    {
      heading: "How do desert heat, winter cold, Holi, Gangaur and Diwali shape the Rajgarh year?",
      paragraphs: [
        "The weather is extreme. Summer afternoons in this part of Rajasthan can pass 45 degrees and on the worst days climb higher, which makes May and June hard for midday study, while winter nights can fall to freezing. In both seasons lessons belong in the gentler hours.",
        "Festivals mark the year. Holi in March is a full holiday in the town, Gangaur and Teej follow in spring and monsoon, Rakshabandhan arrives in late summer, and Diwali brings the longest pause in autumn. Many trading families travel for weddings in the cooler months.",
        "Monsoon comes late and light compared with eastern India, so heat, not flooding, is the main worry, though dust storms can knock out power in the weeks before the rains.",
        "Exam dates pull in two directions. Board papers come in February and March, just when international-course mocks happen, and the real IGCSE and IB sittings follow in May-June and again in October-November.",
      ],
      table: {
        caption: "A Rajgarh calendar with lesson notes",
        columns: ["Period", "What is happening", "Planning note"],
        rows: [
          ["December-January", "Cold nights; mock papers", "Early evening slots before the temperature drops"],
          ["February-March", "RBSE and CBSE board papers; Holi", "Space lessons when a sibling sits board papers"],
          ["April-June", "Extreme heat; main IGCSE and IB series", "Late-evening slots and a tested power backup"],
          ["July-September", "Late light monsoon; Rakshabandhan, Teej", "Normal schedule with a spare slot"],
          ["October-November", "Dussehra, Diwali, wedding season; autumn IGCSE and IB sessions", "Lighter or shifted lessons, then a week to catch up"],
        ],
      },
      bullets: [
        "Afternoons in summer are unfit for study",
        "Holi and Diwali pause the routine anyway",
        "Board papers meet IB mocks in February and March",
        "The IGCSE and IB series are May-June and October-November",
      ],
    },
    {
      heading: "What next for an IB or IGCSE student from Rajgarh?",
      paragraphs: [
        "For most families Jaipur is the first stop, with its universities, engineering colleges and hospitals, and then Delhi, Bengaluru or Kolkata, where many Rajasthani business families have settled over generations. Nearer home sit the local post-graduate college and the University of Bikaner. An equivalence certificate from the Association of Indian Universities is what most Indian colleges ask for; JEE Main, NEET-UG and CUET-UG publish separate conditions that shift from year to year, so read each new notice.",
        "Commerce and management draw many families in this region, and IB Economics and Business Management fit that ambition. A student whose relatives trade in grain, textiles or metals may already hold a live case for the internal assessment.",
        "For study overseas, UK offers are stated in IB points and required Higher Level subjects; in the United States predicted grades sit inside a bigger application; Canada and Australia publish their own tables for converting results.",
        "The tutor's part is the subject itself: explanation, exam technique and, if it can honestly be done, a higher predicted grade. Applications, visas and counselling are for the school, an adviser or the university.",
      ],
      bullets: [
        "Indian eligibility turns on equivalence certificates and subject mix",
        "JEE, NEET and CUET set out their own rules",
        "Commerce and management attract many local families",
        "Predicted grades weigh heavily for UK and Canadian offers",
      ],
    },
    {
      heading: "AA or AI, and which sciences: choices for a Rajgarh student",
      paragraphs: [
        "If you enjoy algebra, functions and proof and expect to read engineering or physics, Analysis and Approaches will feel like home. If data, models and software attract you, and economics, business or life science is the goal, Applications and Interpretation is normally the more comfortable match.",
        "Coaching culture in Rajasthan tugs many towards AA, simply because calculus looks familiar. For an engineering plan, that is sensible. For commerce or management, the other course can deliver a higher and calmer score, and universities respect it equally.",
        "Sciences call for the same planning. Physics with Chemistry leads towards engineering, Biology with Chemistry towards medicine and health, and every science course carries an investigation that takes weeks to design and finish.",
        "There is no IB classroom in town, so the tutor is often the first person to talk these options through, well before any content is taught.",
      ],
      bullets: [
        "AA suits engineering and the physical sciences",
        "AI suits commerce, psychology and biology",
        "Start each investigation early",
        "A trial lesson lets you test a subject first",
      ],
    },
    {
      heading: "Board first, then tier: what should a Rajgarh IGCSE candidate decide before lessons?",
      paragraphs: [
        "Cambridge and Pearson Edexcel each run an IGCSE, with their own codes and paper layouts. A private candidate depends on an exam centre that may support just one of them, so the centre's answer has to come before any planning.",
        "Tier is next. Core blocks the top grades in many subjects whereas Extended leaves them open, which makes Extended the natural choice in Maths and the sciences for anyone aiming at IB Maths AA, A Level or a science degree.",
        "Practicals deserve early thought as well. The Cambridge sciences offer a written alternative to lab work, a real help where no laboratory is available, though that paper has its own style and needs rehearsal.",
        "Entries shut months before each series, so ring the centre first about dates and fees. No quantity of teaching can rescue a missed entry.",
      ],
      bullets: [
        "Find out from the exam centre which board it runs",
        "Extended keeps all grades possible",
        "Rehearse the paper that replaces practicals",
        "Note the deadline for entries",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a student in Rajgarh?",
      paragraphs: [
        "We start by hearing out the parents and the student on programme or board, subject, level, current grade, target, exam session and the trigger for the enquiry, such as a weak topic, a mock, an IA or a coming transfer.",
        "We check each tutor's qualifications, recent classroom experience with the syllabus and approach to assessed work. For Churu district, teachers who cope well with students far from any specialist, and who leave clear tasks between sessions, are favoured.",
        "Next is a trial on a genuine topic, which a parent may watch. If it suits, the first month's plan goes on paper and stays open to revision.",
        "If the pairing feels wrong, another tutor is found, which is simply part of the process.",
      ],
      bullets: [
        "The family's worry and target guide the proposal",
        "Recent teaching of the course is verified",
        "The trial lesson is decisive",
        "Changing tutor is nothing unusual",
      ],
    },
  ],

  tutorsIntro:
    "The teachers below handle IB and IGCSE courses with Rajgarh students over live video. Matching starts from the syllabus and the level, as nothing here is taught anywhere other than online.",

  process: [
    { title: "Send the main facts", description: "Programme or board, subject, level, marks now and marks wanted, and the evenings a Rajgarh household can give." },
    { title: "Receive a proposal", description: "One tutor is named, picked for recent classes that match your child's course, in whichever city they live." },
    { title: "Attend a trial", description: "A real topic taught live, free of charge and with no obligation afterwards." },
    { title: "Confirm terms on paper", description: "The fee, topics, weekly slot and how progress will be reported are written out before anything starts." },
    { title: "Carry on weekly", description: "A fixed hour, regular check-ins, and another tutor if the pairing is not working." },
  ],

  whyPoints: [
    { title: "Picked by syllabus", description: "IB subject and level, or IGCSE board, code and tier, guide each proposal more than a general 'tutor' label does." },
    { title: "No weekly journey to Jaipur", description: "Screen teaching saves a family the long road for every class." },
    { title: "Judge by trying", description: "A free session reveals how a tutor explains far better than any biography." },
    { title: "Clear on coursework", description: "Comments on drafts and help with method are fine, while assessed work is never produced for a student." },
    { title: "Notes after lessons", description: "A short note records what was covered and what follows." },
    { title: "No strings", description: "No links to any school, no lock-in, and a replacement tutor whenever you ask." },
  ],

  faqs: [
    { question: "Where do I look for IB and IGCSE tutors in Rajgarh?", answer: "Message IB Gram with the programme or board, subject, level and exam series in view. A tutor who has recently taught that course is proposed. As Rajgarh has no confirmed IB or IGCSE school, distance is never a constraint, and the first lesson is free." },
    { question: "Is this page about Rajgarh in Churu or some other Rajgarh?", answer: "It is about Rajgarh in Churu district, Rajasthan, which is also known as Sadulpur. Other places share the name, in Madhya Pradesh, Alwar, Sirohi and Himachal Pradesh. Online lessons suit any of them, but the school context, climate and exam calendar here describe Churu." },
    { question: "Is there an IB or Cambridge school in Rajgarh or Sadulpur?", answer: "We found none. Schools in town teach RBSE or CBSE, and neither the IB nor the Cambridge finder lists the town. Jaipur has the nearest group of international schools, so families board there, enrol online or sit papers privately." },
    { question: "Will a teacher come to our house in Rajgarh?", answer: "No. Only Gurugram and parts of Delhi NCR get tutors at the door. What Rajgarh gets is online home tuition: the child remains in the house, the teacher is on the laptop, and both look at the same whiteboard and the same past papers." },
    { question: "What sets the fee for IB or IGCSE lessons in Rajgarh?", answer: "Chiefly the subject and the tutor. A Higher Level science costs more than IGCSE Core English, an experienced IB marker costs more than a newcomer, and weekly hours scale the total. Your ward in Rajgarh is irrelevant, and the figure reaches you in writing before any trial." },
    { question: "Can a student from an RBSE school add one IGCSE subject?", answer: "Yes, as a private candidate. Only an approved exam centre can accept the entry, so call one early for dates, fees and any practical component. We then provide teaching and past papers, and the family completes the registration." },
    { question: "Does the summer heat make online lessons impractical?", answer: "Not with sensible timing. Afternoons can be too hot for concentration, so lessons sit in the evening or early morning, with a fan and a charged laptop. A brief power cut is bridged by a hotspot, and a lost lesson is rebooked without charge." },
    { question: "A transfer may move us next year. What can tuition do?", answer: "Quite a lot. The tutor reads the current syllabus against the IB or IGCSE one awaiting your child, notes where wording and methods part company, and practises exactly those points before the first day. Three or four months is the sweet spot, but a few weeks still counts." },
    { question: "Which Diploma subjects are available?", answer: "Both Maths courses, Physics, Chemistry, Biology, ESS, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, language courses and TOK coaching. Higher and Standard Level go to different teachers, since the pace is not the same." },
    { question: "Can younger children be helped?", answer: "Yes. Early-years IB lessons are short and game-like, nudging reading, writing and number sense forward. In the middle years the work is about answering to the criteria and finishing the Personal Project on time. A few lines of written feedback follow every session." },
    { question: "Which IGCSE examining boards do you work with?", answer: "Both Cambridge and Pearson Edexcel. Cambridge Maths 0580, Physics 0625 and Chemistry 0620 are asked for most often. A private candidate follows the board that the exam centre runs, so ask there first and pass the code to us." },
    { question: "Does a lesson on screen match sitting with a teacher?", answer: "In most cases it gets very near, and where no specialist lives in town it is the stronger choice. A shared page, papers solved live and recorded answers reproduce much of what a person at the child's elbow would do. Keep the connection steady and the sessions short for little ones." },
    { question: "Would a tutor ever write my child's IA or Extended Essay?", answer: "No. A tutor can help a student frame a question, make sense of the marking criteria, organise data and react candidly to drafts. Composing the work would violate the IB's academic honesty code, so our tutors say no, even the night before a deadline." },
    { question: "When is the right time to begin?", answer: "Ideally at the very beginning of the course, which is Grade 9 for IGCSE and Class 11 for the Diploma, because early groundwork makes mocks and IA deadlines lighter. Joining later is still worth doing when the plan concentrates on high-mark topics and papers." },
    { question: "Can lessons fit around Holi, Diwali and wedding season?", answer: "Yes, and they are built into the plan from the start: Holi, Gangaur, Diwali, cooler-month weddings and the board-exam weeks. Sessions can be trimmed or paused, and an extra block before May can be added later." },
    { question: "What happens if the tutor does not suit my child?", answer: "Say so and a different tutor is found without fuss. We also ask how things are going every few weeks. There is no lock-in, so a pause or an end to lessons costs nothing." },
    { question: "Does IB Gram have any link to a school or exam body?", answer: "IB Gram is not part of any of them. It is independent of schools, the International Baccalaureate, Cambridge and Pearson, and uses Jaipur and Ahmedabad school names purely as background. Syllabuses are followed as published." },
    { question: "Can ideas be explained in Hindi?", answer: "English is the language of the lessons because it is the language of the papers. A tutor might first paraphrase a difficult idea, and a few can briefly explain in Hindi. Hindi is also on offer as a subject where the school or board permits." },
    { question: "What is the first step?", answer: "Write to support@ibgram.com or WhatsApp +91 7439 368 115 with the programme or board, subject, level and where your child stands today. You will get a tutor's background and some trial times back, free of cost and free of obligation." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Sadulpur", href: "/sadulpur/", description: "The same town under its railway name, with its own guide." },
    { label: "IB and IGCSE tutoring in Sujangarh", href: "/sujangarh/", description: "A nearby Churu district town served online." },
    { label: "IB and IGCSE tutoring in Bikaner", href: "/bikaner/", description: "The regional city to the west." },
    { label: "IB and IGCSE tutoring in Jaipur", href: "/jaipur/", description: "Rajasthan's largest cluster of IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How lessons work for families in other Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors visit homes." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What HL and SL mean, plus IAs, TOK and the essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How criteria work, and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the final Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Which boards, which tiers, which subjects and when." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Browse by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and book a free trial." },
  ],

  closingHeading: "Ask for a free trial lesson for your Rajgarh student",
  closingBody:
    "Pass on the programme or board, the subject, the level and a line about how your child is doing. A suggested tutor and a few trial times will follow, live online and one to one, at no cost. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
