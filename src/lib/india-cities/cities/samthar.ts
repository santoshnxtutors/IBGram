import type { CitySeoPage } from "../types";

/**
 * /samthar/ - IB and IGCSE tutoring page for Samthar, Jhansi district, Uttar Pradesh (Bundelkhand). No school in
 * Samthar was confirmed to run the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and the school
 * clusters are honestly labelled nearby-city clusters (names reused from the vetted Jhansi, Gwalior and Lucknow
 * pages). Online only.
 */
export const samthar: CitySeoPage = {
  slug: "samthar",
  countryName: "Samthar",
  countryNameLong: "Samthar, Jhansi district, Uttar Pradesh",
  demonym: "Samthar",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings work best in Bundelkhand: lessons avoid the fierce afternoon heat of May and June and make room for Dussehra, Diwali and Holi",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.84, longitude: 78.9 },
  wikipedia: "https://en.wikipedia.org/wiki/Samthar",
  alternateNames: ["Samthar Jhansi", "Samthar State", "Samshergarh", "Samthar UP"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Samthar | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors in Samthar, Jhansi district: one-to-one private tuition at home for DP, MYP and IGCSE, matched by syllabus, free trial first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Samthar",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR SAMTHAR, JHANSI DISTRICT",
  heroSubtitle:
    "Home tuition in Samthar for the IB or the Cambridge and Edexcel IGCSE works through a screen: a private tutor teaches your child alone, live, from the family's own sitting room in this old Bundelkhand town. No tutor can be found nearby who has taught these syllabuses, so we find one anywhere in India and bring the lesson to you. Nobody comes to Samthar in person; home visits exist only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Samthar",
  imageAltText: "A Samthar student studying IB Chemistry notes at home while an online tutor explains a reaction mechanism on a shared screen",
  secondaryKeywords: [
    "IB tutor Samthar",
    "IGCSE tutor Samthar",
    "IB home tuition Samthar",
    "IGCSE home tuition Samthar",
    "IB private tuition Samthar",
    "IB Maths tutor Samthar",
    "IGCSE Maths tutor Samthar",
    "IB Physics tutor Samthar",
    "IB Chemistry tutor Samthar",
    "IB Biology tutor Samthar",
    "IB DP tutor Samthar",
    "IB MYP tutor Samthar",
    "IB PYP tutor Samthar",
    "IGCSE online tuition Samthar",
    "online IB tutor Samthar Jhansi",
    "IB tutor Jhansi district",
    "IGCSE tuition Bundelkhand",
    "IB tutor Samthar Uttar Pradesh",
  ],

  heroTrustPoints: [
    "A tutor chosen for the specific IB subject and level, or the IGCSE board, code and tier your child is taking",
    "All lessons run on a live video call; tutors do not turn up in Samthar, because home visits are limited to Gurugram and parts of Delhi NCR",
    "Watch one free lesson before deciding whether to go further",
    "An independent tutoring service, unconnected to the IB, Cambridge, Pearson or any school mentioned",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "Every IB stage covered" },
    { value: "Two IGCSE boards", label: "Cambridge and Pearson Edexcel" },
    { value: "IST", label: "One time zone throughout" },
    { value: "Free first lesson", label: "No obligation either way" },
  ],

  intro: {
    heading: "What IB and IGCSE learning looks like in a small Bundelkhand town",
    paragraphs: [
      "Samthar was once the capital of a small princely state, known earlier as Samshergarh, and it still carries the shape of that past in its old quarter and its palace precincts. Today it is a municipal-board town in Jhansi district, in the Bundelkhand part of Uttar Pradesh. We could not confirm a single school in Samthar that teaches the IB or a Cambridge or Edexcel IGCSE, so this page does not list one.",
      "That is why a Samthar family who wants an international syllabus has to think differently from a family in Lucknow or Delhi. The child may be enrolled with a school in another state, studying part-time from home. The family may be planning a switch from the UP Board or CBSE at Class 9 or Class 11. A parent may be a government servant, railway employee or businessman whose posting could move next year, and who wants a curriculum that travels with the child. Tutoring bridges these cases.",
      "What happens in a lesson is plain. A tutor who has taught this exact syllabus sits at a screen, opens a shared whiteboard, and asks your child to explain a solution aloud. Misreadings of the question, missing units and loose definitions get fixed on the spot. After the lesson the family receives a short written note on what was covered and what to practise.",
      "We work independently of the IB, Cambridge, Pearson and every school. Tutors teach and mark practice; they do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or any coursework on a student's behalf.",
    ],
    bullets: [
      "Live one-to-one lessons for IB PYP, MYP and Diploma subjects",
      "Cambridge and Pearson Edexcel IGCSE at the tier your child sits",
      "Tutors across India teaching on Indian Standard Time",
      "A free trial lesson, then a written plan and rate",
      "No home visits in Samthar; they run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Samthar runs any IB stage, so a family's reason for asking about a programme tells us more than the programme's name. The notes below reflect the situations we most often hear from Jhansi district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Children explore themes across subjects instead of memorising separate chapters, and finish with a research Exhibition in the last year. Because no external paper exists, tutoring concentrates on confident reading, comfort with number and the habit of asking good questions.",
      countryNote:
        "A Samthar child following the PYP is almost certainly continuing a programme begun in a city, and parents look for a tutor who can match the inquiry style the child already knows.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are graded against four criteria each, and students complete a Personal Project of their own design. The challenge is learning to explain and evaluate rather than describe, which a tutor can model through a handful of well-marked answers.",
      countryNote:
        "The MYP reaches Samthar through relocations or distance schooling, and the Personal Project is the part families most often ask about.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects sit alongside Theory of Knowledge, the Extended Essay and CAS. Marks combine internal assessment with final papers sat in a May or November session.",
      countryNote:
        "Diploma students from the Samthar area usually board or study at a school in another city, and ask for tutoring in the holidays or in the months leading up to the final papers.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students combine Diploma courses with a career-related study, a reflective project and personal and professional skills. Only a handful of Indian schools run it, but the academic courses within it need the same teaching quality as the full Diploma.",
      countryNote:
        "Requests for the CP from Samthar are very few; when they come, we focus on the Diploma courses embedded in the programme.",
    },
  ],

  subjectsIntro:
    "We assign tutors by syllabus: subject, level, and the exam session your child is aiming for. This list shows the IB subjects we most often teach to students in Jhansi district.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "The rigorous, calculus-rich course for students heading to engineering, physical science or mathematics at university." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and calculator work for those aiming at commerce, social science or life science courses." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, fields, waves and modern physics, with steady work on uncertainty and the written explanation of results." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, bonding, equilibrium and organic mechanisms, taught through varied worked examples." },
    { name: "Biology", levels: "SL / HL", description: "From molecules to ecosystems, with practice in writing concise, accurate extended answers." },
    { name: "Economics", levels: "SL / HL", description: "Markets, national economies and trade, with diagram discipline and current examples." },
    { name: "Business Management", levels: "SL / HL", description: "Planning, marketing and operations, tested through case material and calculation questions." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, system design and networks, taught through writing and debugging code." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading, comparative writing and oral commentary skills." },
    { name: "Hindi A: Literature", levels: "SL / HL", description: "A natural subject for Bundelkhand families, with literary analysis and essay structure in Hindi." },
    { name: "History", levels: "SL / HL", description: "Source evaluation and essay planning, covering twentieth-century topics with argument rather than rote learning." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Ecology, resources and sustainability, with local case studies of water use and land in Bundelkhand." },
    { name: "Theory of Knowledge", levels: "Core", description: "Support in thinking through knowledge questions and building an exhibition plan; the written work stays the student's own." },
  ],
  igcseSubjectsIntro:
    "A Samthar student sitting the IGCSE normally registers through an exam centre in a larger city. Choosing the tier and subjects in Class 9 affects later options, so we help families decide with care.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and statistics, plus advice on which tier suits the target grade." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Extra calculus and algebra for students who want a strong base before Class 11 science or mathematics." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, circuits, waves and thermal topics with practical-paper skills." },
    { name: "Chemistry", levels: "Core / Extended", description: "Structure, reactions and rates, with qualitative analysis for the practical paper." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, systems and inheritance, with data interpretation practised regularly." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Algorithms, binary logic and Python programming for the two papers." },
    { name: "English as a Second Language", levels: "Cambridge 0510 / 0511", description: "Reading, writing and speaking skills for Hindi-medium students moving to English-medium study." },
    { name: "Hindi as a Second Language", levels: "Cambridge 0549", description: "Comprehension and composition for students who already speak Hindi at home." },
    { name: "Geography", levels: "Cambridge 0460", description: "Physical and human geography with fieldwork-style questions, drawing on examples from the Indian plateau." },
  ],

  regionsTitle: "Samthar and the places around it",
  regionsIntro:
    "Lessons are online, so students from the whole area can join. The notes below describe the local setting so parents can see how timing and connectivity are handled.",
  regions: [
    { name: "Old town and palace quarter", note: "The historic centre of the former Samthar State; established families here often have relatives in larger cities and think about study elsewhere." },
    { name: "Main market and bus stand area", note: "The commercial heart; shopkeeping families here value evening lessons that do not disturb the working day." },
    { name: "Nagar Palika and tehsil offices", note: "Government employees live around the civil offices, and postings make a portable syllabus attractive." },
    { name: "Roads towards Jhansi", note: "Students who travel to coaching in Jhansi save the road time by taking some lessons at home online." },
    { name: "Residential colonies on the town edge", note: "Newer housing where broadband is more likely; a good place to keep a quiet study desk." },
    { name: "Villages around Samthar", note: "Agricultural families whose children are first-generation English learners; patient, bilingual explanation matters." },
    { name: "Lakeside and tank areas", note: "Bundelkhand's old tanks shape the landscape; monsoon rain can affect the electricity supply, so a backup is wise." },
    { name: "Railway and highway belt", note: "Families with members in transport and trade; connectivity is generally reasonable but should be tested before lessons." },
    { name: "Jhansi, the district headquarters", note: "The nearest large city, with colleges and coaching; some Samthar students stay there during school years." },
  ],

  tutorsIntro:
    "Tutors teach from different cities but all keep Indian Standard Time, so a Samthar student studies in the evening without confusion. Tell us the programme and subject, and we introduce a tutor who has taught that exact syllabus.",

  schoolClusters: [
    {
      city: "Nearby: Bhopal",
      note: "Samthar has no confirmed IB or IGCSE school. The state capital of Madhya Pradesh has a long-established international school that some Bundelkhand families consider. This is a nearby-city list, not a local one.",
      schools: ["Eastern Public School, Bhopal (IB PYP, MYP and Diploma Programme, plus Cambridge IGCSE at Class 9-10)"],
    },
    {
      city: "Nearby: Lucknow and Agra",
      note: "Larger Uttar Pradesh cities where international curricula are taught and where families sometimes arrange boarding or relocation.",
      schools: ["City Montessori School, Cambridge Campus (Cambridge IGCSE and A Level)", "Sharda World School, Agra (IB PYP, MYP and Diploma Programme)"],
    },
    {
      city: "Nearby: Gurugram and Delhi NCR (boarding)",
      note: "The usual choice for families wanting a full IB boarding education.",
      schools: ["Pathways World School, Aravali", "The Shri Ram School, Aravali", "GD Goenka World School"],
    },
  ],
  schoolDisclaimer:
    "None of the schools above is in Samthar. They are listed only to show where international curricula are taught within reach of Bundelkhand families. IB Gram is independent, with no tie to or endorsement from any of them, the IB, Cambridge or Pearson. Please confirm current programmes directly with each school.",

  modesIntro:
    "Every lesson for a Samthar student is delivered online, because tutors do not visit homes here. The three formats differ in rhythm and purpose, not in where the tutor is.",
  modes: [
    {
      title: "Regular weekly lessons",
      description:
        "The same tutor on a fixed evening each week, working through your child's syllabus at the pace of the school year.",
      bullets: [
        "One steady tutor for continuity",
        "Whiteboard teaching and annotated past papers",
        "A short written note after each lesson",
        "Flexible around exams, festivals and power cuts",
      ],
    },
    {
      title: "Pre-exam revision blocks",
      description:
        "A concentrated run of lessons in the weeks before mocks, the IB sessions or a Cambridge or Edexcel series.",
      bullets: [
        "Full timed papers, marked against the official scheme",
        "Repeated drilling of weak topics",
        "Can run on top of coaching taken elsewhere",
        "Stops when the exams end",
      ],
    },
    {
      title: "Check-in tutoring for self-managed learners",
      description:
        "A lighter plan for disciplined students working mostly alone, who want a tutor to review method and unstick topics every so often.",
      bullets: [
        "Two sessions a month, or more as needed",
        "Helpful for private candidates",
        "Notes sent after each call",
        "Easy to scale up as deadlines approach",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a family in Samthar consider an international curriculum?",
      paragraphs: [
        "A decision to look at the IB or IGCSE in Samthar usually has a concrete trigger. A parent working for the railways, the police, a bank or a government department may expect a transfer within a few years, and an international syllabus travels from Kanpur to Chennai to Dubai without a syllabus mismatch. A cousin may have gone abroad for a degree and described how universities there read school results. A teacher may have noticed that a child has an unusual aptitude for writing or for mathematics.",
        "Bundelkhand has a strong tradition of education and government service, and a smaller but growing group of families who think about study abroad. The idea is no longer unusual, but practical help is thin on the ground. Counsellors who understand IB points, Cambridge grade boundaries and visa timelines are concentrated in large cities, so a family in Samthar often assembles information from friends, websites and a distant relative.",
        "The IB asks for breadth, independent projects and sustained writing. The IGCSE asks for precision in a narrower set of subjects over two years. Neither is easier than the UP Board or CBSE; they ask for different habits. A child who enjoys explaining reasoning and reading widely may enjoy them, while one who thrives on short, repeated drilling for objective tests may find the UP Board a better fit.",
        "An honest first step is a conversation, not a commitment. Our free trial lesson lets a child try a real topic with a real tutor and lets parents see how the sessions work before they decide anything about the syllabus.",
      ],
    },
    {
      heading: "How do the UP Board, CBSE, IB and IGCSE differ for a Samthar student?",
      paragraphs: [
        "The UP Board (UPMSP) and CBSE are the two boards most Samthar families already know. Both lean on a fixed textbook, annual papers in Class 10 and 12, and a national entrance-exam culture. The IB and IGCSE are international qualifications with more written analysis, more variety of assessment, and in the IB case a set of compulsory components that a student cannot skip.",
        "Language matters. Many UP Board students study in Hindi medium, and moving to English-medium IB or IGCSE papers asks for a real change in how answers are written. Content that is already understood in Hindi still has to be re-expressed in clear English. This takes months, and tutors can help by teaching a repeatable structure for definitions, explanations and extended answers.",
        "Switching boards is simplest at Class 6, 9 or 11. Moving to the IB Diploma after Class 10 means finding a school that offers it, and in this part of India that means a school in another city. The IGCSE can be taken as a private candidate, but the family must find and register with an exam centre well ahead of time.",
        "The table lists the practical differences. It does not rank the boards; each fits a different child and a different plan for after school.",
      ],
      table: {
        caption: "Boards a Samthar family may be comparing",
        columns: ["Board", "Where it is usually met", "How students are assessed", "Medium", "Typical next step"],
        rows: [
          ["UP Board (UPMSP)", "Government and aided schools in the district", "Annual papers in Class 10 and 12", "Hindi, with some English", "State colleges, national entrance tests"],
          ["CBSE", "Private schools in Jhansi and larger towns", "Board papers plus internal marks in Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG"],
          ["IB Diploma", "Schools in other cities, plus online tutoring", "Final papers, internal assessments and Extended Essay", "English with a second language", "Indian universities by equivalence, study abroad"],
          ["Cambridge IGCSE", "Schools in other cities or private candidacy", "Final papers by subject, some with practical components", "English", "Class 11 in any board, A Level, IB Diploma"],
          ["Pearson Edexcel IGCSE", "Schools in other cities or private candidacy", "Linear exams in January, May-June or November", "English", "Class 11 in any board, A Level, IB Diploma"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a student in Samthar?",
      paragraphs: [
        "We do not publish a price list. Rates depend on the child's programme and level, the subject, the number of lessons each week and how scarce the specialist is. We quote in writing after the free trial lesson, so a family never agrees to a figure before seeing the teaching.",
        "Level is the biggest factor. A Class 7 mathematics tutor for the MYP and a tutor for IB Chemistry at Higher Level are different profiles. The second has to hold deeper content, recent examining experience and the ability to teach internal assessment technique. Frequency is next: one lesson a week costs less in total than a daily revision block, though the daily block may be better value in a crisis month.",
        "Samthar families save on one item that bigger cities cannot avoid: travel. There is no fuel, no auto fare and no hour lost on the road to Jhansi. That does not mean tuition is cheap, but it means the money goes on teaching time.",
        "When you compare offers from anywhere, ask who will teach, how long each lesson is, what the tutor-change policy is, and whether the rate is confirmed in writing. We offer a change of tutor when the fit is wrong and we do not ask for a long advance payment.",
      ],
      bullets: [
        "Programme and level, from PYP to Diploma Higher Level",
        "Number and length of lessons per week",
        "How rare the subject and board combination is",
        "Regular term plan versus a short exam-season block",
        "A quote in writing after the free trial lesson",
      ],
    },
    {
      heading: "Online tuition, Jhansi coaching, a local tutor or self-study: which suits Samthar?",
      paragraphs: [
        "A Samthar family has four realistic options, and the right one depends on the child. Coaching in Jhansi offers company and routine but needs travel and is built around entrance tests. A local private tutor is nearby, but almost never knows IB criteria or Cambridge command words. Self-study is free but lonely. Online one-to-one tuition keeps the child at home while giving access to someone who has taught the exact syllabus.",
        "Online learning has weaknesses we want to state. It needs a stable connection and a quiet corner, and monsoon storms or summer demand can interrupt electricity. We recommend a broadband line plus a mobile hotspot as backup, and evening slots when the supply is usually steadier.",
        "Jhansi coaching is excellent for what it does: JEE, NEET and board preparation. It is not built to coach an IB commentary or explain the markscheme language of Edexcel. If your child follows an international syllabus, general coaching can be like practising cricket for a hockey match.",
        "Self-study with past papers works well for motivated older students, particularly in language subjects. In mathematics and sciences, one misunderstood step compounds. Students often manage alone until their first mock and then ask for help to close the gap quickly.",
      ],
      table: {
        caption: "Ways to study an international syllabus from Samthar",
        columns: ["Choice", "Travel", "Fit with IB or IGCSE", "Individual attention", "Main limit"],
        rows: [
          ["Online one-to-one tuition", "None", "Matched to the exact course", "Whole lesson", "Needs stable power and internet"],
          ["Coaching centre in Jhansi", "Regular road journeys", "Mostly UP Board, CBSE and entrance tests", "Shared with a batch", "Does not teach international mark schemes"],
          ["Local private tutor", "Short", "General school subjects", "High", "Rarely trained on IB or IGCSE"],
          ["Self-study", "None", "Good if papers are chosen well", "None", "No feedback on written method"],
          ["Boarding in another city", "Family separation", "Full IB or IGCSE school life", "Classroom-based", "Cost, distance and homesickness"],
        ],
      },
    },
    {
      heading: "What does a year in Samthar look like for a student: heat, festivals and exam dates?",
      paragraphs: [
        "Bundelkhand is among the hottest parts of India in summer, and May and June afternoons are often impossible for concentrated work. A student does better in early morning and late evening, so our lessons for this period are usually after six in the evening, with timed paper practice at dawn when it is cooler.",
        "The cultural calendar shapes the study year as well. Holi in March, Dussehra and Diwali in the autumn, and the Kartik fairs bring houseguests and travel. Many families go to the home village for weddings. Schools follow their own holiday schedule, but we suggest not planning the heaviest revision around these weeks, and keeping at least a short weekly lesson running.",
        "Exam series are fixed internationally. The IB Diploma examinations are held in May and November. Cambridge IGCSE runs February-March, May-June and October-November. Pearson Edexcel runs in January, May-June and November. Private candidates must register months in advance through a centre in another city, so the earliest conversation should be with that centre.",
        "School-based mocks and internal assessment deadlines are decided by the student's school. Where a child is studying alone, we help set a calendar that works back from the exam series and builds in three timed mock papers.",
      ],
      table: {
        caption: "A study calendar for an international-syllabus student in Samthar",
        columns: ["Months", "What is happening", "Study plan"],
        rows: [
          ["January and February", "Winter chill, Basant Panchami, pre-mock revision", "Good long evening sessions; start new topics"],
          ["March", "Holi, Cambridge February-March series, guests in the house", "Keep a short weekly slot; avoid big topic launches"],
          ["April to June", "Heat peaks; IB May and IGCSE May-June exams", "Evening lessons; timed papers at dawn"],
          ["July to September", "Monsoon, school restarts, internal assessment work begins", "Build foundations and practise investigations"],
          ["October to November", "Dussehra, Diwali, autumn IGCSE and IB November series", "Short blocks around festival days"],
          ["December", "Winter break, mocks for May candidates", "Past-paper marathon and review"],
        ],
      },
    },
    {
      heading: "Where do students from the Samthar area go after the IB or IGCSE?",
      paragraphs: [
        "After the IGCSE, most students from this area move to Class 11 at a school in Jhansi, Gwalior, Kanpur or further afield, on the IB Diploma, Cambridge A Level or an Indian board. Indian boards generally accept the IGCSE as equivalent to Class 10 once the school verifies the certificate and subjects.",
        "After the IB Diploma, a Samthar student can apply to Indian universities through the Association of Indian Universities equivalence, usually with CUET-UG for central universities. IB students are generally eligible for JEE Main when they meet the subject requirements, and for NEET when they have studied Physics, Chemistry and Biology with English. These rules are updated, so check the latest notice from the testing agency.",
        "Nearby options include institutions in Jhansi such as Bundelkhand University and the engineering and medical colleges there, plus IIT Kanpur, universities in Lucknow and Prayagraj, and IIITM Gwalior. Many Samthar students also look at BHU Varanasi and Delhi University through CUET.",
        "Abroad, the IB is well understood by universities in the United Kingdom, United States, Canada, Australia and Singapore. Predicted grades, the Extended Essay and school references matter. A tutor helps with grades and technique; the university shortlist is a family decision that benefits from a qualified counsellor.",
      ],
    },
    {
      heading: "How are IB Maths AA and AI and the sciences taught online to a Samthar student?",
      paragraphs: [
        "The IB offers two mathematics courses, and the choice matters. Analysis and Approaches develops algebra, calculus and proof, the base for engineering, physics and mathematics degrees. Applications and Interpretation focuses on modelling and statistics with technology, suiting economics, psychology and many business courses. The decision should be made before Class 11 begins.",
        "In an online lesson, the tutor and student both write on a shared whiteboard, so the working appears line by line. That is vital because IB mathematics awards method marks. Between lessons the student photographs worked solutions, and the tutor annotates them so that mistakes are caught before they harden into habit.",
        "In Physics, Chemistry and Biology the content is half the work. The rest is interpreting data, using command terms precisely and carrying out the internal assessment. A tutor teaches students to read what a question actually asks, then drills past-paper questions with the official markscheme. For practicals, the tutor discusses design and error analysis, not the write-up.",
        "A Samthar student may not have a well-equipped laboratory. Tutors use simulations, recorded demonstrations and safe home experiments where suitable. The Internal Assessment itself must always be the student's own work.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: choosing IGCSE tiers and subjects",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in many subjects, while Pearson Edexcel offers Foundation and Higher tiers. Core caps the grade available, so a student aiming at science, engineering or economics at a later stage should plan for Extended or Higher where the school permits it.",
        "Subject choice has consequences. Physics or Mathematics at A Level or IB Higher Level needs a strong Extended result in those subjects at IGCSE. A student drawn to commerce may add Business Studies and Economics. Computer Science is an excellent trial of whether a child enjoys programming before committing to it for two more years.",
        "Hindi is a natural strength in Bundelkhand, and Hindi as a second language is a good way to earn a high grade without heavy extra study. English as a Second Language is common for students from non-English-medium schools, though families should check whether a later school or university asks for a particular English qualification.",
        "Private candidates in Samthar need to match each subject to its specification code and exam series. We obtain the syllabus and past papers, create a timetable, and finish with several timed mocks under exam conditions.",
      ],
    },
  ],

  process: [
    { title: "Tell us what your child studies", description: "Programme, subject, level and exam session, so a tutor who has taught that exact course can be found." },
    { title: "Meet the suggested tutor", description: "You receive a short profile of the tutor we think suits your child's subject and learning style." },
    { title: "Try one free lesson", description: "A real topic from the syllabus, taught live, with parents welcome to watch." },
    { title: "Confirm the plan in writing", description: "Lesson days, length and rate are agreed in writing before any payment." },
    { title: "Review as you go", description: "Notes follow every lesson, and we change the tutor if the fit is wrong." },
  ],
  whyPoints: [
    { title: "Tutors who know the syllabus", description: "Matched to IB subject and level or IGCSE code and tier, never to a vague subject label." },
    { title: "Plain about distance", description: "We say clearly that there are no tutor visits in Samthar and design online lessons to work well anyway." },
    { title: "Mark-scheme practice", description: "Past papers are marked against official schemes and examiner reports." },
    { title: "Coaching with integrity", description: "No tutor writes an Internal Assessment, Extended Essay or coursework." },
    { title: "Notes for parents", description: "A written summary after each session shows what was covered and what comes next." },
    { title: "Free change of tutor", description: "If the match is wrong, we replace the tutor without any hassle." },
  ],

  faqs: [
    {
      question: "Can I find an IB or IGCSE tutor in Samthar?",
      answer:
        "There are very few, if any, IB or IGCSE tutors living in Samthar, so we teach Samthar students online. Tutors are based in India, teach live and one to one on Indian Standard Time, and are chosen for your child's subject, level and exam session. A free trial lesson comes first, so you can see the teaching before deciding.",
    },
    {
      question: "Do tutors visit homes in Samthar?",
      answer:
        "No, tutors do not visit homes in Samthar. In-person home tuition is available only in Gurugram and parts of Delhi NCR. In Samthar, the equivalent is online home tuition: your child sits at home with a laptop or tablet while a tutor teaches live, with a shared whiteboard and past papers on the screen.",
    },
    {
      question: "Is there an IB or IGCSE school in Samthar?",
      answer:
        "We could not confirm any school in Samthar offering the IB or a Cambridge or Edexcel IGCSE. Nearby cities such as Bhopal, Lucknow and Agra have international schools, and some families choose boarding in Gurugram. Please check directly with a school before relying on any list, since programmes change.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Samthar?",
      answer:
        "We do not publish prices, because the rate depends on programme, level, subject, lessons per week and the scarcity of the specialist. We quote in writing after a free trial lesson. Samthar families pay for teaching time without travel costs, and can compare quotes on who teaches, lesson length and the change policy.",
    },
    {
      question: "My child studies in the UP Board. Can they switch to IGCSE?",
      answer:
        "Yes, though the switch is easiest at Class 9. We first compare what the child already knows with the IGCSE specification, because basic algebra and science overlap. The biggest change is written English and exam technique rather than content. A tutor can build a bridge course before the child enters an IGCSE class or registers as a private candidate.",
    },
    {
      question: "Can a private candidate take the IGCSE from Samthar?",
      answer:
        "Usually yes, through an approved exam centre in a larger city. You must register several months before the series, choose subjects and tiers, and arrange practical assessments. A tutor helps with preparation, but the registration must be done with the centre. Start by asking centres in Jhansi, Gwalior, Kanpur or Lucknow whether they accept private candidates.",
    },
    {
      question: "Which IB subjects do Samthar students ask for most?",
      answer:
        "Mathematics and the sciences come first, followed by Economics, Business Management, English and Hindi. Mathematics Analysis and Approaches at Higher Level and Physics are especially popular because they reward one-to-one correction. We assign tutors by subject and level rather than by subject name alone.",
    },
    {
      question: "Do tutors write the Extended Essay or Internal Assessment?",
      answer:
        "No. Tutors coach but never write an Extended Essay, Internal Assessment, Theory of Knowledge essay or coursework. They explain the criteria, help a student plan an investigation and comment on the student's own draft. The submitted work must be the student's, and academic honesty rules of the IB and the school apply.",
    },
    {
      question: "What internet and power backup is needed?",
      answer:
        "A steady broadband or fibre line is best, with a mobile hotspot as backup. Power cuts are common in the hot months and during storms, so an inverter or laptop battery helps. We test the connection during the trial lesson, and evening slots usually have the most reliable supply.",
    },
    {
      question: "When are the IB and IGCSE exams, and when should we start?",
      answer:
        "IB Diploma exams run in May and November. Cambridge IGCSE has February-March, May-June and October-November series, and Pearson Edexcel runs January, May-June and November. Start six to nine months before the main exam for most subjects, and earlier for private candidates who must register with a centre.",
    },
    {
      question: "Is the IB or IGCSE accepted by Indian universities?",
      answer:
        "Generally yes, after the right paperwork. The Association of Indian Universities provides equivalence for the IB Diploma, and IGCSE results are accepted as Class 10 for admission to Class 11. CUET-UG accepts IB students who meet subject requirements. JEE Main and NEET have their own rules, so check the latest notice and ask each institution for its document list.",
    },
    {
      question: "My child learns in Hindi. Can lessons support that?",
      answer:
        "Yes. Lessons are in English because the papers are in English, but a tutor can explain a hard idea in Hindi first and then help the child express it in English. This bilingual approach shortens the time needed to become comfortable with written English answers, especially in science and social science.",
    },
    {
      question: "What if my child does not like the tutor?",
      answer:
        "We change the tutor. Tell us what is not working, whether pace, style or personality, and we suggest another tutor with the same subject expertise. You are not tied to a long package, and the rate is always confirmed in writing before you book.",
    },
    {
      question: "How do I begin with IB Gram from Samthar?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com with your child's class, board, subject and exam session. We will suggest a tutor and arrange a free trial lesson. After the trial, you can continue, change the tutor or stop, with no obligation.",
    },
    {
      question: "Can you support IB Theory of Knowledge and CAS?",
      answer:
        "We can help a student understand what Theory of Knowledge asks and how to plan an exhibition or essay, but the written work must be the student's own. CAS is a school-run requirement, so tutors can only advise on reflection quality. If CAS is a worry, raise it with the IB coordinator at the student's school.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Our online tuition service for students in cities and towns across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-wise guide to our International Baccalaureate tutors." },
    { label: "IGCSE tutors", href: "/igcse/", description: "How we teach Cambridge and Pearson Edexcel IGCSE subjects and tiers." },
    { label: "IB Diploma Programme tutoring", href: "/programmes/dp/", description: "Support for Higher and Standard Level subjects and assessment technique." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Help for primary-years learners and their Exhibition." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "A guide to Analysis and Approaches and Applications and Interpretation." },
    { label: "Meet our tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial lesson or ask a question first." },
    { label: "IB and IGCSE tutors in Jhansi", href: "/jhansi/", description: "Our page for Jhansi, the district headquarters near Samthar." },
    { label: "IB and IGCSE tutors in Gwalior", href: "/gwalior/", description: "Our page for Gwalior, the nearest large city across the Madhya Pradesh border." },
    { label: "IB and IGCSE tutors in Lucknow", href: "/lucknow/", description: "Our page for Lucknow, the state capital of Uttar Pradesh." },
  ],

  closingHeading: "A free first lesson for your child in Samthar",
  closingBody:
    "Share the programme, subject and exam series, and we will find a tutor who has taught it. The first lesson is free, the rate comes in writing afterwards, and every session is online so your child studies from home. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
