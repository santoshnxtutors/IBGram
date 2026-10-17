import type { CitySeoPage } from "../types";

/**
 * /mussoorie/ - IB and IGCSE tutoring page for Mussoorie, Dehradun district, Uttarakhand. Woodstock School
 * (IB World School, MYP grades 6-10, Diploma grades 11-12 per woodstockschool.in) is confirmed; Mussoorie
 * International School is listed on Wikipedia with CISCE, Cambridge and IBDP but its own site was a
 * placeholder, so it is named with that caveat. Fewer than three firmly confirmed, so stripSchools is []
 * and the clusters carry the names. Dehradun names reused from dehradun.ts. Online only: in-person home
 * tuition runs just in Gurugram and parts of Delhi NCR.
 */
export const mussoorie: CitySeoPage = {
  slug: "mussoorie",
  countryName: "Mussoorie",
  countryNameLong: "Mussoorie, Uttarakhand",
  demonym: "Mussoorie",
  state: "Uttarakhand",
  stateCode: "IN-UT",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttarakhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Hours bend around boarding-school prep periods, the long winter break, snow days and the July to September rains on the ridge",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.4598, longitude: 78.0644 },
  wikipedia: "https://en.wikipedia.org/wiki/Mussoorie",
  alternateNames: ["Mussouri", "Masuri", "Queen of the Hills"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mussoorie | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Mussoorie students, day scholars and boarders: DP, MYP, Cambridge and Edexcel taught online one to one, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mussoorie",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR MUSSOORIE STUDENTS",
  heroSubtitle:
    "Few hill towns in India have a real IB school on their ridges, and Mussoorie does, yet a student here can still need a subject specialist the timetable lacks, in term, in the winter break or at home in Landour. Home tuition in Mussoorie for the IB or IGCSE arrives as a live one-to-one online lesson. Tutors do not climb to your door, and visiting lessons exist only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Mussoorie",
  imageAltText: "A Mussoorie student in a hill-town room with a mountain view, revising IB Physics with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Mussoorie",
    "IGCSE tutor Mussoorie",
    "IB home tuition Mussoorie",
    "IGCSE home tuition Mussoorie",
    "IB private tuition Mussoorie",
    "IB Maths tutor Mussoorie",
    "IGCSE Maths tutor Mussoorie",
    "IB Physics tutor Mussoorie",
    "IB Chemistry tutor Mussoorie",
    "IB Biology tutor Mussoorie",
    "IB DP tutor Mussoorie",
    "IB MYP tutor Mussoorie",
    "IB PYP tutor Mussoorie",
    "IGCSE online tuition Mussoorie",
    "IB tutor Landour",
    "IB tutor Mussoorie Uttarakhand",
    "Woodstock School IB tutor",
    "online IB tuition Dehradun Mussoorie",
  ],

  heroTrustPoints: [
    "Tutors who have taught the same IB subject and level, or the same IGCSE board, code and tier, your child is facing",
    "Online lessons only: nobody climbs to a Mussoorie home, since in-person tuition is limited to Gurugram and parts of Delhi NCR",
    "A free first lesson, then a written quote",
    "No link with the IB, Cambridge, Pearson, Woodstock School or any other school named below",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Whole IB range" },
    { value: "Cambridge, Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Same clock as the hills" },
    { value: "Free trial", label: "Before any fee" },
  ],

  intro: {
    heading: "IB and IGCSE tuition in a hill town that already has an IB school",
    paragraphs: [
      "Mussoorie differs from most towns on this site. It has a long boarding-school tradition, and Woodstock School in Landour is an IB World School that teaches the Middle Years Programme in Grades 6 to 10 and the Diploma in Grades 11 and 12. Wikipedia also lists Mussoorie International School, a girls' school, as offering ISC, Cambridge and the IB Diploma, although its own website gave no curriculum details when we looked. Other well-known schools here follow CBSE or ICSE and ISC.",
      "So the request here is rarely about finding any IB teaching at all. It is about gaps. A day student at a local school may want a second explanation of Higher Level Chemistry. A boarder may need a subject specialist during the winter break, when the dormitories close and the family is at home. A child in a CBSE school may be preparing for a move to the Diploma. A family returning from abroad may want a tutor who knows the Cambridge IGCSE, not the Indian board.",
      "A hill town has its own logistics, with steep lanes, limited late transport and thin evening mobile coverage in places. Learning online from a quiet room avoids all of it. Tutors teach from elsewhere in India, one pupil at a time, and mark work against the board's own scheme.",
      "They coach and explain; they do not write or rewrite an Internal Assessment, Extended Essay or coursework.",
    ],
    bullets: [
      "Courses from the PYP, MYP, DP and CP",
      "Cambridge and Pearson Edexcel IGCSE, by board and tier",
      "Live private lessons online in Indian Standard Time",
      "A free first lesson and a plan in writing",
      "Nobody visits Mussoorie homes; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Mussoorie families come to the programmes from several angles: a child already inside an IB school, a student moving across from CBSE, or one catching up after a stretch abroad. The notes below describe those routes so the tutoring starts where the student actually stands.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "Teaching is organised in units of inquiry across six themes, and learners finish with a group Exhibition. Without an exam to prepare for, extra lessons mostly build confident reading and writing in English, and comfortable number work.",
      countryNote:
        "In Mussoorie the PYP is usually met by a younger child whose family has recently arrived from another city or country.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four criteria mark each MYP subject and a Personal Project brings the programme to a close. Woodstock teaches it in Grades 6 to 10, so many local students meet criteria-based assessment early; a tutor helps decode each band.",
      countryNote:
        "Requests here often come from boarders who want a specialist in Maths or Sciences for the holidays, or from day scholars needing a quiet evening hour.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Grades 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects join Theory of Knowledge, a 4,000-word Extended Essay and CAS. Exams cluster in May, and the volume of Internal Assessments makes the autumn term heavy.",
      countryNote:
        "A Mussoorie Diploma student typically asks for HL Mathematics, Chemistry or Physics support, sometimes after a switch from the Indian boards.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses are combined with a career-related study and a short core. Very few schools in India offer it.",
      countryNote:
        "Mussoorie enquiries are uncommon; any that arise concern the Diploma courses within the pathway.",
    },
  ],

  subjectsIntro:
    "A Higher Level Chemistry student and a Standard Level Visual Arts student are served by quite different people. Matching therefore starts with subject and level, moves to the target sitting, and ends with when the tutor and the student are both free around the school's prep hours.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus and functions for students heading to engineering or pure science, with HL Paper 3 demanding patience on unfamiliar problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical modelling and technology-heavy work; the Exploration is best chosen before the winter break." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields and nuclear physics, with a investigation marked for method, data and evaluation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Atomic structure through organic synthesis, with the data booklet mastered early so time is not lost in exams." },
    { name: "IB Biology", levels: "HL / SL", description: "Describe, explain and evaluate are three different tasks, and the lessons rehearse each against past mark schemes." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams tied to real events and, at HL, a separate data-response paper." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study application, with a research project built on a real firm." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1 analysis, Paper 2 comparison and the Individual Oral, each taught as its own skill." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object-oriented thinking and an internal solution whose documentation matches its code." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies recalled accurately, then built into structured extended-response essays." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems reasoning with Himalayan watersheds, forests and tourism as natural local cases." },
    { name: "IB Geography", levels: "HL / SL", description: "Case study depth, fieldwork design and evaluative writing, with mountain environments as strong examples." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Text types, register and an oral, for Hindi speakers who want a high-scoring language subject." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions build the habit of arguing a knowledge question from two sides with real examples." },
  ],

  igcseSubjectsIntro:
    "The label IGCSE covers two separate boards. Cambridge 0580 Extended and Edexcel 4MA1 Higher have different layouts, so every plan fixes board, code and tier first and the exam series second: February-March, May-June or October-November for Cambridge; January or summer for Edexcel.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Fast algebra and every working line shown; lost marks are usually omitted steps." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus and trigonometry ahead of the IB, a solid bridge to Mathematics HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson wording differs from Cambridge; practise on Pearson papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Comfort with equations and graphs, plus the paper that replaces practical work." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic reactions, with experiments designed on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, ecosystems and body systems, answered in the wording markers expect." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams first, then evaluation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithms traced by hand and pseudocode written under time." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Directed writing, summary and descriptive tasks practised to the clock." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, comprehension and writing in correct register." },
  ],

  regionsTitle: "Mussoorie neighbourhoods and ridges our online tutors serve",
  regionsIntro:
    "Everything runs online, so these places matter for rhythm: the walk or taxi from school, the hours a boarder is free, the winter weeks when roads close and the families who live above the tourist crowds. Greater Mussoorie spreads across several ridges.",
  regions: [
    { name: "Landour", note: "The cantonment ridge above the town, home to Woodstock School and a quiet community of residents and writers." },
    { name: "Mall Road and Kulri", note: "The busy tourist spine of the town; locals living here plan study around peak-season noise and crowds." },
    { name: "Library Bazaar", note: "At the western end of the Mall, close to the Tibetan community and older boarding institutions." },
    { name: "Barlowganj", note: "A residential suburb on the ridge, with a mix of school staff and long-standing families." },
    { name: "Jharipani", note: "A township on the way down to Dehradun, where Oak Grove School stands, a CBSE school." },
    { name: "Happy Valley", note: "Home to a Tibetan settlement and several institutions, a short descent from the Mall." },
    { name: "Kyarkulli and Dhanaulti road", note: "Residential ridge-top areas on the route towards Kempty and Dhanaulti, with slower mobile coverage in places." },
    { name: "Dehradun valley (nearby)", note: "About an hour's drive down, where many Mussoorie families shop, work and sometimes school their children." },
    { name: "Rajpur Road (nearby)", note: "The foothill road between Dehradun and Mussoorie, home to many school staff and parents commuting upward." },
  ],

  schoolDisclaimer:
    "Woodstock School in Landour is an IB World School, as stated on its own website. Mussoorie International School is listed by Wikipedia as offering Cambridge and the IB Diploma, but its website gave no curriculum details when we checked, so please verify directly. IB Gram is an independent tutoring service with no affiliation to any school named here, nor to the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Mussoorie and Landour",
      note: "Woodstock School teaches the IB Middle Years Programme in Grades 6 to 10 and the Diploma in Grades 11 and 12, alongside an American high school diploma. Mussoorie International School is listed as offering IB and Cambridge; please verify before relying on it.",
      schools: ["Woodstock School", "Mussoorie International School"],
    },
    {
      city: "Nearby: Dehradun",
      note: "The valley city, about an hour below, holds a wider set of Cambridge and international schools and is where many Mussoorie families look when a day school nearer to home is wanted.",
      schools: ["SelaQui International School", "Unison World School", "Ecole Globale International Girls' School"],
    },
    {
      city: "Mussoorie: CBSE, ICSE and ISC schools",
      note: "Most other Mussoorie schools follow CBSE or ICSE and ISC. Students in them who want IB or IGCSE subjects use private tuition or prepare for a later move.",
      schools: [],
    },
  ],

  modesIntro:
    "In Mussoorie the lesson is always a tutor and one student, live on screen. The three options differ in how they fit a boarder's or a day student's calendar. No tutor visits houses here.",
  modes: [
    {
      title: "A weekly slot inside the school timetable",
      description:
        "One fixed evening or weekend morning with the same tutor, placed outside prep and games hours. Suitable for a day student, or for a boarder whose house allows supervised online work.",
      bullets: [
        "Specialists from across India",
        "MYP, DP and IGCSE subjects",
        "Papers shared on screen",
        "Same tutor throughout the year",
      ],
    },
    {
      title: "A winter-break programme",
      description:
        "Daily or alternate-day lessons during the long break, when boarders are at home and a gap in a subject can be closed. Includes a written note after each class and a review at the end.",
      bullets: [
        "Intensive teaching in a quiet stretch",
        "Review of marks at the end",
        "Ideal before mocks and the Internal Assessment",
        "Plan chosen before the break begins",
      ],
    },
    {
      title: "A pre-exam sprint",
      description:
        "Two or three lessons a week for several weeks, mostly timed papers with prompt feedback, set around exam leave and any snow-related disruption.",
      bullets: [
        "Real time limits",
        "Fast feedback",
        "Avoids peak-season distractions",
        "Book three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Mussoorie needs an IB or IGCSE tutor, and when?",
      paragraphs: [
        "Mussoorie's population is small, a little over thirty thousand, but its school life is unusually layered. There are old residential schools, convents and cantonment institutions, a handful of CBSE and ICSE day schools, and the IB at Woodstock. Alongside them sits a floating population of staff, officers at the civil service academy and families who settle for the climate. That mix creates demand for private tutoring that is rare in a town this size.",
        "The commonest case is the student already in an IB programme who needs another voice in one subject. A boarder tackling Higher Level Mathematics may find that the school day offers little room for repeated questions. The second case is the child in a CBSE or ICSE school who is planning the switch to the Diploma and wants Class 10 foundations strengthened in Mathematics and Sciences.",
        "A third case belongs to families who return from abroad or relocate from another city with a child already on the IGCSE or the IB, and must keep the syllabus going while the household settles. A fourth is the private candidate, who sits Cambridge IGCSE papers through an approved exam centre.",
        "In each case the missing element is a tutor who has taught the specific course, which an online match supplies.",
      ],
      table: {
        caption: "Typical Mussoorie requests",
        columns: ["Who", "School situation", "What the tutor adds"],
        rows: [
          ["Boarder at an IB school", "Supervised prep, limited one-to-one time", "Holiday and weekend depth in the hardest subject"],
          ["Day student in Landour or the town", "Home by late afternoon, free evenings", "Regular weekly lesson alongside school"],
          ["CBSE or ICSE student planning the Diploma", "Indian board syllabus today", "Bridging Maths, sciences and English into IB style"],
          ["Returning or relocating family", "Mid-programme transfer", "Continuity on the exact course and board"],
        ],
      },
      bullets: [
        "Mussoorie has a real IB school, so most requests are about gaps",
        "Boarders and day students need different timing",
        "Online avoids steep roads and weak evening transport",
        "Marking is identical to any other city",
      ],
    },
    {
      heading: "How does the Uttarakhand Board, CBSE or ISC compare with IB and IGCSE?",
      paragraphs: [
        "The Uttarakhand Board and CBSE test recall of a defined syllabus in annual papers, while ISC leans towards wider reading and written expression. IB and IGCSE ask a different question: can you apply what you know to something you have not seen, and can you justify your method? A top ISC student is often better prepared than most, but still has to learn the command words and mark-scheme conventions.",
        "Assessment spread differs too. IB subjects hold twenty to thirty per cent of their grade in Internal Assessments, and IGCSE has coursework or a practical-skills paper. Planning a project over months, writing drafts and responding to feedback is a skill that must be taught.",
        "Depth varies by subject. IB Higher Level Mathematics goes beyond CBSE Class 12 in proof, modelling and calculus applications. IGCSE Core is roughly Class 9 level, with Extended above it. Choosing the tier benefits from outside advice when the home school has little experience of the system.",
        "A switch is realistic. Many students find the published criteria fairer than a single board paper, once the language of the rubric is learnt.",
      ],
      table: {
        caption: "Indian boards beside the IB and IGCSE",
        columns: ["Feature", "Uttarakhand Board / CBSE", "ICSE / ISC", "IB / IGCSE"],
        rows: [
          ["What earns marks", "Recall and reproduction", "Broader reading and expression", "Application and evaluation"],
          ["Internal assessment", "Light", "Moderate project work", "Substantial, criteria-marked"],
          ["Medium", "Hindi or English", "English", "English"],
          ["In Mussoorie", "Several schools", "Several schools", "Woodstock and one other listed school"],
        ],
      },
      bullets: [],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Mussoorie student?",
      paragraphs: [
        "There is no fixed price list on this site. The charge rests on the course, the level, the tutor's experience and the number of lessons per week, and a written quote follows the free trial and comes before any booking.",
        "Higher Level Mathematics and sciences generally cost more than Standard Level humanities since fewer tutors can teach them with depth. A tutor with years of classroom or examining experience asks more than a newer one. Intensive winter-break blocks cost more in total than a single weekly slot, but a month of daily lessons can close a gap that a term of weekly ones would not.",
        "Teaching online removes the hill-road element. A Mussoorie family seeking a Dehradun tutor would spend an hour or more each way on the Rajpur Road, a real cost in time and fuel.",
        "If funds are limited, say so. A short plan on a single weak area, or a monthly check-in alongside self-study, is possible.",
      ],
      bullets: [],
    },
    {
      heading: "Online tuition, school extra help, a Dehradun tutor or self-study?",
      paragraphs: [
        "For IB and IGCSE, online one-to-one tuition is the most dependable route to a tutor who has taught the exact course. The hill location makes this stronger, not weaker, because the ridge has few specialists and a Dehradun class is a long drive away.",
        "School extra help is valuable and free where it exists, but it is tied to the staff and the timetable, and a boarding house rarely offers a Higher Level specialist at nine in the evening. A Dehradun tutor may be good, though a round trip eats an evening. Self-study works for a disciplined student with good papers, though without marking the same error repeats.",
        "Online lessons suit a boarding rhythm, with a fixed weekly slot in term and daily sessions in the break. A shared whiteboard handles graphs, circuits and structures.",
        "Many families use two or three methods together: school for the base, online lessons for the weakest subject, self-study for revision.",
      ],
      table: {
        caption: "Study options for a Mussoorie student",
        columns: ["Option", "IB or IGCSE knowledge", "Time cost", "Feedback"],
        rows: [
          ["Online one-to-one tuition", "Matched to the exact course", "Lesson hour only", "Marked to scheme with a note"],
          ["School extra help", "Strong if the teacher knows the course", "Within the timetable", "Informal"],
          ["Tutor in Dehradun", "Varies", "Long drive each way", "Depends on the tutor"],
          ["Self-study", "Whatever books you gather", "None", "Little without a marker"],
        ],
      },
      bullets: [],
    },
    {
      heading: "How do snow, monsoon and the hill-school year shape study in Mussoorie?",
      paragraphs: [
        "Diploma papers fall in May and November. Cambridge IGCSE has February-March, May-June and October-November series; Edexcel has January and May-June. In a hill school, December and January mocks often land on or beside the winter break.",
        "Mussoorie sits at about two thousand metres. Snow falls in some years between December and February, the roads can close for a day or two, and the famous winterline shows from October. Boarding schools often run a long winter holiday, so a student can be at home for weeks when classes would normally be in session.",
        "The monsoon from July to September brings heavy rain, mist and landslides on the approach roads, and power or mobile outages. Summer from April to June is mild but crowded, as the town fills with visitors and local roads jam.",
        "A good plan uses the winter break for intensive teaching, the monsoon term for steady weekly lessons and the pre-exam weeks for papers.",
      ],
      table: {
        caption: "Exam sessions against the hill calendar",
        columns: ["Period", "Exam or school event", "Effect in Mussoorie"],
        rows: [
          ["December-February", "IB mocks, Edexcel January series, winter break", "Snow possible; boarders home; ideal for intensives"],
          ["March-April", "Cambridge Feb-March series, term resumes", "Cold clears; tourist season begins"],
          ["May-June", "IB May exams, Cambridge and Edexcel summer", "Mild weather, heavy visitor traffic"],
          ["July-September", "Monsoon term, IB November preparation", "Rain, landslides, network faults"],
          ["October-November", "Cambridge Oct-Nov, winterline season", "Clear views, Diwali break"],
        ],
      },
      bullets: [],
    },
    {
      heading: "Where do IB and IGCSE students from Mussoorie go afterwards?",
      paragraphs: [
        "Indian colleges widely accept the equivalence certificate that the Association of Indian Universities gives to IB Diploma holders, and central universities select by CUET-UG. JEE Main asks for Mathematics, Physics and Chemistry, and NEET for Biology, Chemistry, Physics and English, so check each body's treatment of IB and IGCSE candidates every year.",
        "In Uttarakhand, students look to the institutions of Dehradun and Roorkee, including IIT Roorkee, as well as Delhi University, Ashoka, Shiv Nadar and the Manipal group. The proximity of the civil services academy also inspires many local students towards public service.",
        "Abroad, the IB Diploma is well known to universities in the UK, the US, Canada, Australia and Europe, and IGCSE grades feed into applications that continue through A Levels or the IB. Many Mussoorie students, especially from international families, apply overseas.",
        "Subject choice made in Grade 9 and 10 matters, and a tutor can advise on combinations that keep Indian and overseas doors open.",
      ],
      table: {
        caption: "Next steps from the IB or IGCSE for a Mussoorie student",
        columns: ["Goal", "What is needed", "How a tutor helps"],
        rows: [
          ["Indian universities", "AIU equivalence, CUET-UG for central universities", "Papers scored higher, CUET preparation"],
          ["Engineering via JEE Main", "Mathematics, Physics, Chemistry", "HL Maths and Physics with JEE overlap planned"],
          ["Medicine via NEET", "Biology, Chemistry, Physics, English", "Strong HL Biology and Chemistry"],
          ["Study abroad", "Predicted IB points or IGCSE then A Level grades", "Work towards the grades universities ask for"],
        ],
      },
      bullets: [],
    },
    {
      heading: "How are IB Maths and the sciences taught online to a Mussoorie student?",
      paragraphs: [
        "IB Mathematics is available as Analysis and Approaches or Applications and Interpretation, each at Higher or Standard Level. We ask about the intended degree before the first lesson, because a future engineer and a future psychologist should not take the same course.",
        "In the sciences the tutor and student take one past paper at a time. Paper 1 is multiple choice, Paper 2 is structured questions and data, and the investigation is a separate internal task. Every script is marked against the official scheme, and each lost mark is explained.",
        "On the investigation, a tutor can help choose a measurable question, plan a repeatable method and understand uncertainty. The report and the data remain the student's own.",
        "IGCSE sciences follow the same pattern, with extra work on the alternative-to-practical paper.",
      ],
      bullets: [],
    },
  ],

  process: [
    { title: "Share the facts", description: "Send programme, subject, level, board and school to +91 7439 368 115 on WhatsApp or support@ibgram.com, noting if your child boards." },
    { title: "Read the shortlist", description: "We propose tutors who have taught that course and list their open slots, with boarding hours in mind." },
    { title: "Take a trial class", description: "Your child tries a genuine lesson online, free of charge." },
    { title: "Approve the plan", description: "A schedule and quote arrive in writing before you book." },
    { title: "Review as you go", description: "A short note follows each class, and a different tutor is available if the fit is poor." },
  ],

  whyPoints: [
    { title: "Course-matched tutors", description: "Chosen for the IB subject and level or IGCSE board and tier." },
    { title: "Straight about format", description: "Online only in Mussoorie; no visit is promised." },
    { title: "Boarding-aware timing", description: "Slots avoid prep and games, and winter-break blocks are offered." },
    { title: "Notes after every class", description: "A record of topics covered and tasks set." },
    { title: "Easy tutor change", description: "A poor fit is replaced without fuss." },
    { title: "Coaching, not ghostwriting", description: "Tutors never write coursework." },
  ],

  faqs: [
    {
      question: "Are there IB tutors in Mussoorie?",
      answer:
        "Some teachers at local schools know the IB, but a private specialist for each subject is hard to find on the ridge, so our tutors teach online. A tutor elsewhere in India is matched to your child's subject and level, and the first lesson is free. Nobody visits homes in Mussoorie.",
    },
    {
      question: "Do you offer IGCSE home tuition in Mussoorie?",
      answer:
        "The lesson happens at your child's own desk with the tutor on a laptop. We do not send tutors to Mussoorie; in-person tuition is offered only in Gurugram and parts of Delhi NCR. A laptop, headset and stable connection are enough.",
    },
    {
      question: "Which Mussoorie schools teach the IB?",
      answer:
        "Woodstock School in Landour is an IB World School, offering the MYP in Grades 6 to 10 and the Diploma in Grades 11 and 12, per its website. Wikipedia lists Mussoorie International School as offering the IB Diploma and Cambridge, but we could not confirm this from the school's own site, so please verify.",
    },
    {
      question: "Can a boarder have online tuition?",
      answer:
        "It depends on the house rules. Many boarding schools allow supervised online study during set hours, and some require staff permission. We schedule outside prep and games, and the long winter break is a natural time for intensive lessons at home.",
    },
    {
      question: "Can my child take Cambridge IGCSE as a private candidate from Mussoorie?",
      answer:
        "Yes, through an approved exam centre, which may be in Dehradun. The family arranges entry and the centre, and a tutor prepares the student. Deadlines are fixed and centre availability for private candidates changes by year, so ask early.",
    },
    {
      question: "How are fees decided?",
      answer:
        "Prices are not posted on the site. The quote depends on the course, level, the tutor's experience and lessons per week, and arrives in writing after the free trial. Online delivery has no travel charge, and a short plan on one subject may cost less than a long one.",
    },
    {
      question: "Which subjects do Mussoorie students ask for most?",
      answer:
        "Mathematics, Physics, Chemistry and Biology lead, followed by Economics, English A and Computer Science. The pattern follows the Diploma's heaviest courses, where an extra explanation helps most.",
    },
    {
      question: "Will a tutor write my child's Internal Assessment?",
      answer:
        "No, and a boarding-house prefect or a Dehradun tutor should not either. Our tutors read the criteria with your child, test whether a topic is feasible and comment on drafts. Producing text, data or analysis for an IA, Extended Essay, TOK essay or coursework is outside the service, since a school can sanction work that is not the student's own.",
    },
    {
      question: "What happens during snow days or network failures?",
      answer:
        "We reschedule, or shift to audio with a shared document if video fails. Hill coverage can be patchy, so a wired connection or a mobile hotspot from a second provider helps. A few Mbps is enough for video and a shared board.",
    },
    {
      question: "Cambridge or Edexcel IGCSE: which should we choose?",
      answer:
        "Usually the school or exam centre settles it, because a candidate sits the board they are entered for. With a free choice, Cambridge offers more centres and an autumn series, and Edexcel a January one.",
    },
    {
      question: "When should we start tutoring?",
      answer:
        "For the Diploma, at the start of Grade 11, or a year earlier for Mathematics if the base is weak. MYP students can join whenever. Exam-year students can take an intensive, though early help is gentler.",
    },
    {
      question: "How long is a lesson?",
      answer:
        "Sixty to ninety minutes, once or twice a week, with extra sessions before exams. In the winter break, daily lessons are common. Students should plan a few hours of independent practice per subject, which we help schedule.",
    },
    {
      question: "Can IB be combined with JEE or NEET preparation?",
      answer:
        "Possible, but only with a realistic timetable. HL Mathematics and HL Physics share large areas with JEE, and HL Biology with NEET, so a Mussoorie student who plans for both can reuse some revision. Because the testing agency changes eligibility conditions, check them each year before committing.",
    },
    {
      question: "How do we start?",
      answer:
        "Open a WhatsApp chat on +91 7439 368 115, or email support@ibgram.com, and say which programme, subject, level and board your child follows, which school, and whether they board. A shortlist and a free-trial time come back, and you choose afterwards whether to carry on.",
    },
    {
      question: "Can we change tutors?",
      answer:
        "Yes. A word after the trial or any later class is enough, and we suggest someone with a comparable profile, handing over the earlier notes.",
    },
    {
      question: "Is IB Gram connected to Woodstock School or the IB?",
      answer:
        "No. IB Gram is a separate tutoring business. It has no tie to Woodstock School, any other school, the International Baccalaureate, Cambridge or Pearson, and school names appear only so families can orient themselves.",
    },
  ],

  tutorsIntro:
    "These tutors are based elsewhere in India and teach live online in Indian Standard Time, the same clock as school in Mussoorie. They are chosen for the course, not the postcode, and none travels to homes in the hills.",

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How online lessons work for families in other places." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Specialists in Diploma, MYP and PYP courses." },
    { label: "IGCSE tutors", href: "/igcse/", description: "IGCSE courses on both boards." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma's subjects, core and exam dates." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria grading and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Learning through inquiry." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Which IB maths course suits which degree." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles by subject strength." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "Gurugram, where visits at home are possible." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book your free trial." },
    { label: "Tutors in Dehradun", href: "/dehradun/", description: "The valley city, with a wider set of international schools." },
    { label: "Tutors in Haridwar", href: "/haridwar/", description: "Another Uttarakhand page with regional context." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson for your child in Mussoorie",
  closingBody:
    "Send us the course, the level and whether your child boards. We will find a tutor who has taught it and a slot that respects school, snow and the winter holiday. The trial lesson is free, the plan is written down, and everything is taught online. Our contacts are support@ibgram.com and +91 7439 368 115.",
};
