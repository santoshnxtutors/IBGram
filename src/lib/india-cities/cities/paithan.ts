import type { CitySeoPage } from "../types";

/**
 * /paithan/ - IB and IGCSE tutoring page for Paithan, Chhatrapati Sambhajinagar district, Maharashtra.
 * Online-only delivery; tutors do not visit homes in Paithan. No IB or Cambridge/Edexcel school is
 * confirmed in the town, so stripSchools is empty and clusters point to the city 56 km north, Pune
 * and Mumbai, clearly labelled as nearby options.
 */
export const paithan: CitySeoPage = {
  slug: "paithan",
  countryName: "Paithan",
  countryNameLong: "Paithan, Chhatrapati Sambhajinagar district, Maharashtra",
  demonym: "Paithan",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "The Nath Shashti yatra in March, the long Marathwada summer, Ganesh Chaturthi week and the date your child's own board or mock papers begin are the four things that most often move a lesson",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.4833, longitude: 75.3833 },
  wikipedia: "https://en.wikipedia.org/wiki/Paithan",
  alternateNames: ["Pratishthana", "Paithan Aurangabad", "Paithan Sambhajinagar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Paithan | Private Tuition at Home Online",
  metaDescription:
    "Online IB and IGCSE tutors for Paithan families near Chhatrapati Sambhajinagar: one-to-one private tuition from home, Maths and sciences, free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Paithan",
  heroEyebrow: "IB & IGCSE ONLINE PRIVATE TUITION IN PAITHAN",
  heroSubtitle:
    "Home tuition for Paithan students, taught online: a laptop at the kitchen table, a tutor who has taught the exact IB or IGCSE course, and no hour on the Sambhajinagar road. Paithan sits about fifty-six kilometres from the nearest big-city schools, so a specialist who arrives through the screen is often the most workable answer.",
  primaryKeyword: "IB and IGCSE tutors in Paithan",
  imageAltText: "A student in Paithan working through IGCSE Physics questions during an online one-to-one lesson",
  secondaryKeywords: [
    "IB tutor Paithan",
    "IGCSE tutor Paithan",
    "IB home tuition Paithan",
    "IGCSE home tuition Paithan",
    "IB private tuition Paithan",
    "IB Maths tutor Paithan",
    "IGCSE Maths tutor Paithan",
    "IB Physics tutor Paithan",
    "IB Chemistry tutor Paithan",
    "IB Biology tutor Paithan",
    "IB DP tutor Paithan",
    "IB MYP tutor Paithan",
    "IB PYP tutor Paithan",
    "IGCSE online tuition Paithan",
    "Cambridge IGCSE tutor Paithan",
    "IB tutor Chhatrapati Sambhajinagar",
    "IGCSE tutor Aurangabad Maharashtra",
    "online IB tuition Marathwada",
    "IB tutor Paithan Aurangabad",
  ],

  heroTrustPoints: [
    "Live online lessons only: tutors do not come to Paithan, since house calls are limited to Gurugram and parts of Delhi NCR",
    "Course-matched tutors in Mathematics, the sciences, economics, English and Hindi",
    "Free trial lesson, then a written note on what the tutor observed",
    "Not connected to any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB range" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "Try before paying" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for a town with a long past and few international schools",
    paragraphs: [
      "Paithan was the Satavahana capital Pratishthana two thousand years ago, and today it is a Godavari-bank town known for Paithani silk weaving, the shrine of Sant Eknath and the Jayakwadi dam upstream. Its schools follow the Maharashtra State Board and CBSE. A parent here who is asking for private tuition from home in an international syllabus has usually made a deliberate choice, often for a child heading abroad or to a school in Pune.",
      "The honest position on schools is that we cannot confirm an IB or Cambridge/Edexcel school in Paithan itself, and we name none. Chhatrapati Sambhajinagar is the closest large city, with Pune and Mumbai further off. A child may attend a school in one of those places, board there, or study from Paithan and sit exams privately; each arrangement needs different tutoring.",
      "Our lessons are online and one-to-one. A tutor does not travel to Paithan, because in-person home tuition is offered only in Gurugram and parts of Delhi NCR. What the family receives instead is a tutor who has taught the specific course, a lesson on a screen shared with the student and a short note afterwards.",
      "IB Gram is independent. It is not connected with the International Baccalaureate, Cambridge, Pearson or a school, and tutors coach rather than ghost-write Internal Assessments, Extended Essays or coursework.",
    ],
    bullets: [
      "For students enrolled at an IB or Cambridge school elsewhere",
      "For private candidates sitting IGCSE through an authorised centre",
      "For families planning a move to Pune, Mumbai or overseas",
      "Online one-to-one only; no tutor visits Paithan",
      "Free first lesson with a written note",
    ],
  },

  programmesIntro:
    "These descriptions are for orientation. None of the four programmes is confirmed at a Paithan school, so each card also says what the stage typically means for a family here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "A broad, inquiry-based primary curriculum organised around six themes such as how we express ourselves and where we are in place and time. Learning is reflected in portfolios, exhibitions and teacher observation, not in end-of-year scores.",
      countryNote:
        "A Paithan child entering PYP is usually changing from a Marathi-medium or semi-English classroom. Early tutoring tends to focus on spoken English confidence and on explaining why an answer is right.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups over five years, graded on criteria, and a Personal Project at the end of the programme. Interdisciplinary units link maths, science and languages in tasks that do not look like a traditional school test.",
      countryNote:
        "Students who join an MYP school from a Maharashtra State Board classroom often need a term of weekly support to adjust to criterion-based marking and written reflection.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year course of six subjects with a Theory of Knowledge course, a 4,000-word Extended Essay and service activities. Final examinations are in May. Grades run from 1 to 7 per subject with up to 3 bonus points from the core.",
      countryNote:
        "Diploma students linked to Paithan usually study in Pune or Mumbai. Tutoring concentrates on HL Mathematics, Physics and Chemistry, where a missed topic compounds quickly.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more IB Diploma courses alongside a career-related qualification and a reflective project. It suits students who want a practical route into design, business or technology while keeping university options open.",
      countryNote:
        "Very few Maharashtra schools offer CP, and none is known in Paithan. We include it so that families comparing options understand what the programme involves before they decide.",
    },
  ],

  subjectsIntro:
    "Paithan students most often ask about the courses below. If your subject is not shown, send a message and the matching team will check whether a tutor teaches it at your level.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, functions, calculus and proof, built up through graded problem sets and weekly timed papers." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data handling, probability and modelling, with calculator technique drilled until it is automatic." },
    { name: "Physics", levels: "SL / HL", description: "Kinematics through to quantum and nuclear physics, with attention to uncertainties and the data-analysis questions." },
    { name: "Chemistry", levels: "SL / HL", description: "From stoichiometry to organic synthesis routes, with method-writing practice for the Internal Assessment." },
    { name: "Biology", levels: "SL / HL", description: "Genetics, ecology and physiology, taught alongside command-term vocabulary and diagram-based answers." },
    { name: "Economics", levels: "SL / HL", description: "Market structures, macro indicators and trade, with real examples from agriculture, textiles and industry in Marathwada." },
    { name: "Business Management", levels: "SL / HL", description: "Strategy, finance and human resources, with case-study answers practised against official markbands." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, programming and networks, with trace-table and pseudocode drills." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis and oral commentary for students who use Marathi at home." },
    { name: "Marathi A (school-supported self-taught)", levels: "SL", description: "Where a school arranges it, tutors can support literary analysis in Marathi alongside the supervising teacher." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and oral work for students who already speak Hindi in daily life." },
    { name: "History", levels: "SL / HL", description: "Source analysis and essay structure, useful for students drawn to the region's Satavahana and Maratha heritage." },
    { name: "Theory of Knowledge", levels: "Core", description: "Help structuring arguments about knowledge, without writing the exhibition or essay for the student." },
  ],
  igcseSubjectsIntro:
    "Tutors teach the Cambridge and Pearson Edexcel IGCSE specifications by code, and distinguish Core from Extended preparation from the first lesson.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Algebra, geometry, mensuration and statistics, using past-paper cycles every fortnight." },
    { name: "Additional Mathematics", levels: "Extended", description: "Quadratics, differentiation and trigonometry at pace, useful before IB HL or A Level mathematics." },
    { name: "Physics", levels: "Core / Extended", description: "Electricity, waves and energy, with graph and equation-rearranging practice." },
    { name: "Chemistry", levels: "Core / Extended", description: "Periodic trends, electrolysis and organic basics, with mole-calculation drills." },
    { name: "Biology", levels: "Core / Extended", description: "Plant and animal systems, ecology and genetics, with labelled-diagram and data-response practice." },
    { name: "Computer Science", levels: "Core", description: "Programming logic and data representation, rehearsed with exam-style pseudocode questions." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading, writing and listening for students whose first language is Marathi." },
    { name: "Hindi as a Second Language", levels: "Core", description: "Written and oral Hindi for the Cambridge syllabus." },
    { name: "Economics and Business Studies", levels: "Core / Extended", description: "Introductory economics and enterprise, with Indian small-business examples." },
  ],

  regionsTitle: "Paithan and the villages along the Godavari",
  regionsIntro:
    "Because lessons are online, the questions that matter are connectivity and timing, not distance. These are places Paithan families write from, with a note on each.",
  regions: [
    { name: "Paithan town centre", note: "Close to the Sant Eknath Maharaj temple and the old market. Fixed broadband is available, though many households use mobile hotspots." },
    { name: "Paithani weaving lanes", note: "Weaving households keep daytime hours at the loom, so lessons are better in the late afternoon or evening." },
    { name: "Nath Mandir area", note: "The busiest part of town in the days before Nath Shashti, when visiting families fill every lane." },
    { name: "Paithan MIDC", note: "The industrial area with families who work in factories, and who often have shift-based schedules." },
    { name: "Jayakwadi dam side", note: "Residents near the dam and bird sanctuary often rely on mobile data; a second SIM is a sensible backup." },
    { name: "Pimpalwadi", note: "A village area close to town where students travel in for school and tuition." },
    { name: "Bidkin", note: "A town on the Sambhajinagar road, closer to the larger city, with a newer industrial presence." },
    { name: "Aurangabad Road corridor", note: "Families on the road towards the city, who may pick up a lesson from a bus stop on busy days." },
    { name: "Godavari left-bank villages", note: "Agricultural settlements where the harvest calendar shapes evening availability." },
  ],

  tutorsIntro:
    "The tutors below teach from India on Indian Standard Time. None of them travels to Paithan; each profile shows the courses, the board and the levels taught, and the first lesson is free.",
  schoolClusters: [
    {
      city: "Paithan and the district: what is local",
      note: "We found no confirmed IB or Cambridge/Edexcel school in Paithan, so none is named. The local choice is the Maharashtra State Board or CBSE. Chhatrapati Sambhajinagar, the nearest city, has schools that advertise international-style teaching, but we have not verified an authorisation for them.",
      schools: [],
    },
    {
      city: "Nearby: Pune",
      note: "Pune is the nearest large centre with confirmed IB and Cambridge schools, and a common move for Marathwada families who want the Diploma.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Mumbai",
      note: "Mumbai is further, but has long-established IB schools and many Marathwada families with relatives there.",
      schools: ["Dhirubhai Ambani International School", "Oberoi International School"],
    },
  ],
  schoolDisclaimer:
    "This is an independent tutoring service. We are not endorsed by, and have no commercial tie with, any of these schools, the IB, Cambridge or Pearson. Names are given only so families can see where nearby students study; confirm every school's current authorisation and fees with the school.",

  modesIntro:
    "All three formats run on a video call. Paithan is an hour's drive from a bigger city, so none of them involves a journey for either side.",
  modes: [
    {
      title: "Steady weekly lessons",
      description: "A single hour each week with the same tutor, repeated across the term. Best for building a subject from the ground up.",
      bullets: ["Same tutor, same slot", "Shared whiteboard and worked examples", "Written note afterwards", "Easy to move around festival days"],
    },
    {
      title: "Intensive revision blocks",
      description: "Three or four sessions a week in the run-up to mock papers or final examinations, then back to a lighter pace.",
      bullets: ["Timed past papers", "Examiner-style marking", "Targeted topic repair", "Paused during unavoidable travel"],
    },
    {
      title: "Online home tuition for two students",
      description: "Two children studying the same subject at similar levels share one lesson. The tutor stays online; nobody visits the house.",
      bullets: ["Same board and subject", "Lower rate per child", "Separate notes", "Rate confirmed in writing"],
    },
  ],

  sections: [
    {
      heading: "What schools can a Paithan child realistically attend for IB or IGCSE?",
      paragraphs: [
        "The first answer is that Paithan itself has no school we can confirm for an international board. Schools in the town are run by trusts, municipal bodies and private management on the Maharashtra State Board, with CBSE as an alternative. That matches most taluk towns in Marathwada.",
        "The second answer is distance. Chhatrapati Sambhajinagar is roughly an hour north by road, and is where families usually look first. Pune is a longer day trip and has verified IB and Cambridge schools. Mumbai has the oldest set. Boarding in one of those cities is the common pattern for a child entering Class 9 or Class 11.",
        "The third option is private candidacy. A student can study IGCSE subjects at home and register through an authorised exam centre, which in Maharashtra is generally a school or a British Council-linked centre in a major city. Science practicals need extra planning. A tutor can teach the content and rehearse the alternative-to-practical papers, though the centre and entry process are the family's job.",
        "Whichever route you choose, start by asking the school for its syllabus codes and assessment calendar. That one document tells a tutor what to teach and when.",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE, IGCSE or IB: how do they compare?",
      paragraphs: [
        "The Maharashtra State Board SSC in Class 10 and HSC in Class 12 are well understood locally and connect directly to MHT-CET, NEET and JEE Main. Most colleges in Marathwada and across the state admit on those marks. CBSE offers a more uniform national syllabus, with similar routes.",
        "IGCSE is a two-year course ending at Class 10 age. It is wide and applied, with fewer rote questions and more command-term thinking. IB Diploma is the university-preparation course for ages sixteen to nineteen, and carries a long essay and coursework alongside six subjects.",
        "None of the boards is easier. They test different habits. State board students tend to be quick at recall but may find IGCSE and IB papers unusual in how they phrase questions and award marks for reasoning. Tutors help bridge that gap with worked examples before mock papers.",
        "The table is a snapshot, not a recommendation to switch. For most families in Paithan, the question is whether the move is worth the distance and cost.",
      ],
      table: {
        caption: "Maharashtra State Board, CBSE, IGCSE and IB at a glance",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Years covered", "Class 1-12", "Class 1-12", "Class 9-10", "Class 11-12"],
          ["Final papers", "SSC and HSC, March", "Board exams, Feb-March", "May-June, Oct-Nov, March", "May, with some November sittings"],
          ["Marking style", "Mostly marks for correct recall", "Mixed recall and application", "Command-term and structured answers", "Analysis, essay and coursework"],
          ["Entrance link", "MHT-CET, NEET, JEE Main", "JEE Main, NEET, CUET", "Via A Level, IB or AIU equivalence", "AIU equivalence; CUET-UG; abroad"],
          ["Local availability", "Everywhere in Paithan", "A few private schools", "Not confirmed; private entry possible", "Not confirmed; Pune or Mumbai"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition cost for a Paithan student?",
      paragraphs: [
        "A fixed price per town would be misleading, so we do not publish one. What we do is quote you the exact hourly rate in writing before you commit, and that rate depends on the course, the tutor and the weekly pattern.",
        "Higher Level IB Mathematics, Physics and Chemistry, and IGCSE Additional Mathematics, cost more than lower-level or language support. A tutor with a long record of marking IB papers or teaching in international schools charges more than a recent graduate. Twice-weekly or block bookings often lower the hourly rate.",
        "For Paithan families the largest saving is not in the hourly rate but in what you avoid. There is no petrol or bus fare for a trip to Sambhajinagar, no lost afternoon and no hostel bill just for tuition. The money goes into lesson time.",
        "If you are comparing with a local coaching class, ask whether it covers the specific code your child sits. A group class in an unrelated syllabus is cheaper per hour but not necessarily cheaper per mark gained.",
      ],
      bullets: [
        "Course level, with Higher Level and Additional Mathematics at the upper end",
        "Experience of the tutor with the exact board",
        "Number of lessons per week and the length of the arrangement",
        "A fully written quote before the first paid lesson",
      ],
    },
    {
      heading: "Which is better for a Paithan student: online tutor, city coaching, local tutor or self-study?",
      paragraphs: [
        "There is no single right answer, but the options are clear. Coaching in Chhatrapati Sambhajinagar is strong for state-board and entrance preparation, such as MHT-CET and NEET, and weaker for IB and IGCSE specifics. A local tutor is cheap and close and usually knows the state board well. Self-study depends on discipline and access to marked papers.",
        "Online one-to-one lessons offer the one thing the others rarely can: a tutor who has taught the exact IB or IGCSE course, who can mark a paper to the real scheme. The trade-off is connectivity and the need for the student to be comfortable learning through a screen.",
        "Many families combine approaches. A child keeps a local tutor for state-board homework and adds a weekly online lesson for an international subject. That blend is common during a school change.",
        "The table below compares the four on the points that matter most to Paithan families.",
      ],
      table: {
        caption: "Support options for IB and IGCSE from Paithan",
        columns: ["Option", "Matches the exact syllabus", "Journey required", "Marked feedback", "Cost level"],
        rows: [
          ["Online one-to-one tutor", "Yes, chosen by course and board", "None", "Detailed and written", "Mid to higher per hour, no travel cost"],
          ["Coaching in Chhatrapati Sambhajinagar", "Rarely for IB or IGCSE", "About an hour each way", "Group-level", "Lower per hour, plus travel"],
          ["Local school teacher giving private lessons", "Usually state board", "Short walk or ride", "Varies", "Low"],
          ["Self-study", "Only if the student finds the papers", "None", "None unless marked by someone", "Lowest"],
        ],
      },
    },
    {
      heading: "Exam dates and Paithan's year: monsoon, heat and the Nath Shashti yatra",
      paragraphs: [
        "IB Diploma exams take place in May, and results appear in July. Cambridge IGCSE has main sessions in May-June and October-November, with a March session available in India. Pearson Edexcel IGCSE has sittings in January, May-June and October-November. Internal deadlines at school typically fall in the months before.",
        "Paithan's year has its own rhythm. Marathwada summers are hot and dry, often above forty degrees from April to early June, and water shortage is a recurring concern. The monsoon is uneven. Ganesh Chaturthi in August or September brings ten days of public gatherings, and Diwali takes up a week in autumn.",
        "The yatra at Sant Eknath's shrine, known as Nath Shashti, draws pilgrims to the town in March. For families near the temple, roads close and relatives arrive. March is also the period when many mock exams and Cambridge March series papers land, so we suggest planning lessons around those dates early.",
        "A tutor will adjust to your calendar. Tell us the dates when the house is busy, and we will shift or add sessions on the days before and after.",
      ],
      table: {
        caption: "Study calendar for a Paithan IB or IGCSE student",
        columns: ["Months", "School and exam activity", "Paithan factor", "How tutoring adapts"],
        rows: [
          ["June to August", "New academic year, coursework starts", "Monsoon arrives, sometimes late", "Content catch-up; IA topic choices"],
          ["September to October", "Term tests, IA drafts", "Ganesh Chaturthi, Dussehra", "Short, regular lessons around holidays"],
          ["November to January", "Mocks, Cambridge October series results", "Diwali, cooler weather", "Past papers, error analysis"],
          ["February to March", "Pre-boards, Cambridge March series", "Nath Shashti yatra, rising heat", "Exam technique; schedule around yatra"],
          ["April to June", "Final exams, results", "Heat above 40 degrees", "Early morning or evening slots"],
        ],
      },
    },
    {
      heading: "Where do Paithan IB and IGCSE students go after school?",
      paragraphs: [
        "Many Paithan students aim at Pune, Mumbai or Chhatrapati Sambhajinagar's own university and engineering colleges. An IB Diploma holder applying to an Indian university normally needs an equivalence certificate from the Association of Indian Universities. CUET-UG gives access to central and many state universities with subject-wise scores.",
        "Engineering and medicine need extra care. JEE Main and NEET have published rules about subject combinations and Class 12 equivalence, and these change. Parents should read the National Testing Agency's current notice, and the state counselling cell's rules for Maharashtra, not rely on older advice or a brochure.",
        "For study abroad, the IB Diploma and Cambridge A Levels are widely recognised. Predicted grades, subject combinations, English test scores and for some countries SAT or ACT results all matter. A tutor can strengthen the subject and test skills but does not write personal statements.",
        "Students who want to study in Maharashtra's state institutions should check eligibility early. Rules for candidates from outside the state board change from year to year, and they differ between courses.",
      ],
    },
    {
      heading: "What should a Paithan student know about IB Maths and the sciences?",
      paragraphs: [
        "IB Mathematics Analysis and Approaches is the stronger path toward engineering, physics or computer science, and is calculus-heavy. Applications and Interpretation suits economics, psychology and business. The choice is made in Class 11 and cannot easily be reversed, so we recommend a short diagnostic lesson first.",
        "IB sciences are assessed through three papers and an Internal Assessment. Many students from state-board backgrounds are surprised by the amount of data interpretation. A tutor trains the habits that raise marks quickly: stating units, reading graph scales, using the right command term.",
        "Practical work matters in all three sciences. If your school has limited lab time, a tutor can explain the method of an experiment, how to process results and how to evaluate errors, even though the experiment itself must be done in school.",
        "For students hoping to take both Mathematics HL and a science at HL, planning time is essential. A good tutor builds a weekly cycle across subjects so that no single topic is left until the last two months.",
      ],
    },
    {
      heading: "IGCSE Core versus Extended and how to choose subjects",
      paragraphs: [
        "Core papers cap the highest grade at C, while Extended papers allow A* to E. The decision usually belongs to the school and is made in Class 9. If a student wants to take sciences or mathematics at IB or A Level, Extended is the safer choice.",
        "A typical IGCSE student takes between five and ten subjects. For a Paithan family planning a move to an IB school, the strongest combination is English, Mathematics, two sciences and one humanities or business subject. Languages add flexibility.",
        "Edexcel and Cambridge differ in layout. Edexcel Mathematics papers (4MA1) have a distinct style, while Cambridge 0580 has several routes. We match the tutor to the code on your child's paper so the practice is correct.",
        "Private candidates need to plan science practical assessments early, since not every centre offers them. A tutor can prepare the alternative-to-practical paper, which is a written test that many candidates sit.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the course, class, board and exam date on WhatsApp (+91 7439 368 115) or by email to support@ibgram.com." },
    { title: "Answer a few questions", description: "A short conversation about the school, current marks and what feels hard." },
    { title: "Review the tutor match", description: "You get a profile with subject, experience and a rate in writing." },
    { title: "Try the first lesson free", description: "A full lesson on a real topic, then a written note on what the tutor observed." },
    { title: "Settle into a weekly slot", description: "A regular time, a written note each session and a tutor change if the fit is not right." },
  ],
  whyPoints: [
    { title: "Right tutor, not nearest tutor", description: "Matching is based on course and board, not on distance from Paithan." },
    { title: "The road to Sambhajinagar stays unused", description: "Lessons happen at home, so no travel time is lost." },
    { title: "Clear about what we offer", description: "No tutor visits Paithan, and nothing about grades is promised." },
    { title: "A note after every lesson", description: "Parents can follow progress without sitting in on the call." },
    { title: "Change tutors freely", description: "A poor fit is fixed by matching someone else." },
    { title: "Coaching within the rules", description: "Help with method and understanding, never ghost-writing coursework." },
  ],

  faqs: [
    { question: "Are there IB and IGCSE tutors for Paithan students?", answer: "Yes, online. Tutors teach live and one-to-one over video, in Indian Standard Time, to students in Paithan. They do not travel to the town, since in-person home tuition is offered only in Gurugram and parts of Delhi NCR. A free trial lesson comes first, and you receive a written note on what the tutor saw." },
    { question: "Can I get IB or IGCSE home tuition in Paithan?", answer: "Only in the online form. The student studies at home on a laptop and the tutor teaches live from elsewhere in India. No tutor will arrive at your door in Paithan. Many families prefer this because the specialist can be chosen by subject, not by who lives nearby, and no travel time is lost." },
    { question: "Is there an IB or IGCSE school in Paithan?", answer: "We could not confirm one, so we do not name any. Schools in Paithan follow the Maharashtra State Board or CBSE. Students who need an international syllabus normally look at Pune, Mumbai or other cities, or take IGCSE as private candidates. Always check authorisation and fees with the school or the exam board directly." },
    { question: "How much will it cost?", answer: "There is no fixed town rate. The price depends on the tutor, the course level and how many lessons a week you want. IB Higher Level courses and IGCSE Additional Mathematics sit at the upper end. You will receive the rate in writing before you pay, and the trial lesson is free." },
    { question: "Can a student in Paithan sit IGCSE privately?", answer: "Yes, through an authorised exam centre that accepts private entries. Centres are usually in larger cities, and science practicals need advance arrangement. A tutor can teach the syllabus and mark past papers, while you handle registration and fees. Allow at least six months before the exam series you plan to sit." },
    { question: "Does the Nath Shashti yatra affect lessons?", answer: "It can. In March, roads near the shrine close and relatives visit, so households near the temple are busy. Tell the tutor the dates and we shift or add sessions around them. March is also close to Cambridge March papers and many mocks, so it helps to plan early." },
    { question: "Will tutors write my child's Internal Assessment?", answer: "No. Tutors explain how an Internal Assessment works, discuss ideas and check that the method is sound, but the student writes every word. The same applies to the Extended Essay, Theory of Knowledge essay and any coursework. The IB takes authorship seriously and so do we." },
    { question: "My child is in a Marathi-medium school. Can they manage IGCSE English?", answer: "With practice, yes. A tutor starts with reading comprehension and short summaries, then moves to directed writing. Most students need a term or two to feel at ease. Reading widely in English outside lessons makes a visible difference. Marathi remains an asset and can be used for first-language literary analysis in some programmes." },
    { question: "Is the internet in Paithan good enough for video lessons?", answer: "Usually yes, with a plan. Fixed broadband works well in the town; villages and the dam side often use mobile data. A second SIM or hotspot is a sensible backup. Lessons use little bandwidth, and if a connection drops we reschedule the remaining time. Power cuts in summer are the other thing to prepare for." },
    { question: "Which subjects are most requested?", answer: "Mathematics comes first, then Physics, Chemistry and Biology. Economics and Business Management follow, along with English. Many Paithan families start with Mathematics because it builds confidence and affects every other subject. Tell us what is hardest, and a tutor can start there instead." },
    { question: "Can two siblings share one tutor?", answer: "Yes, if they study the same subject at close levels. A shared lesson lowers the cost per child. Each child still receives a separate written note. If the levels are too different, we suggest separate lessons, and the matching team will advise which is better for you." },
    { question: "What timings are available?", answer: "Evenings and weekends are most popular, and mornings suit older students on study leave. Tutors work on Indian Standard Time, so there is no time-zone gap. Share school hours, festival dates and family travel, and the matching team will propose a weekly pattern that fits." },
    { question: "Do you teach MYP and PYP too?", answer: "Yes. All four IB stages are covered, along with Cambridge and Edexcel IGCSE. PYP and MYP tutoring focuses on inquiry skills, criterion-based writing, number sense and the Personal Project. The Diploma and CP courses are taught at both Higher and Standard levels." },
    { question: "Does IB or IGCSE help with admission to Indian colleges?", answer: "It can, but rules apply. IB Diploma holders usually need an AIU equivalence certificate, and entrance tests such as CUET-UG, JEE Main and NEET have eligibility conditions that change. Maharashtra's state counselling has its own rules. Check the current notices and ask the college before committing to a path." },
    { question: "What if the tutor is not right?", answer: "Tell us and we will match someone else. There is no penalty, and the new tutor reads the earlier written notes so your child does not repeat work. The first trial is free, and the rate is always agreed in writing before you pay for the first full lesson." },
    { question: "Are you linked to any school, the IB or Cambridge?", answer: "No. IB Gram is an independent tutoring service. We are not affiliated with any school, the International Baccalaureate, Cambridge or Pearson. We do not handle admissions, registrations or examination results; we teach, practise and report progress through written notes." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Where our online tutors work and how lessons are run." },
    { label: "Chhatrapati Sambhajinagar (Aurangabad)", href: "/aurangabad/", description: "The nearest large city, with coaching and exam centres." },
    { label: "Nashik", href: "/nashik/", description: "A northern Maharashtra city with its own board landscape and exam-centre options." },
    { label: "Parbhani", href: "/parbhani/", description: "Another Marathwada town for comparison of boards and support." },
    { label: "Pune", href: "/pune/", description: "The state's main IB and Cambridge school hub." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subjects, levels and matching." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tutoring." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The two-year Diploma explained." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA versus AI and how to choose." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles and subjects." },
    { label: "Contact us", href: "/contact-us/", description: "Start a free trial." },
  ],

  closingHeading: "Book a free trial lesson from Paithan",
  closingBody:
    "Write with the course, the class and the exam date. We will propose a tutor, put the rate in writing and arrange a trial lesson you can watch. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
