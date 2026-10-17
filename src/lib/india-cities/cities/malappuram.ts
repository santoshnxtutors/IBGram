import type { CitySeoPage } from "../types";

/**
 * /malappuram/ - IB and IGCSE tutoring page for Malappuram, Kerala. One school in the district
 * (Silvermount International School, Perinthalmanna) is confirmed to offer Cambridge IGCSE; no IB
 * school is confirmed, so stripSchools is empty and delivery is online one-to-one. The Gulf
 * returnee angle is central. Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const malappuram: CitySeoPage = {
  slug: "malappuram",
  countryName: "Malappuram",
  countryNameLong: "Malappuram, Kerala",
  demonym: "Malappuram",
  state: "Kerala",
  stateCode: "IN-KL",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions leave Ramadan evenings, the Eid weeks and the wettest monsoon days alone, and follow the rhythm of your child's own school term",
  lastUpdated: "2026-09-21",
  geo: { latitude: 11.0509, longitude: 76.0711 },
  wikipedia: "https://en.wikipedia.org/wiki/Malappuram",
  alternateNames: ["Malappuram district", "Malabar Malappuram"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Malappuram | Gulf-Return Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Malappuram: Gulf-returned and local students, private lessons at home, scheduled with Ramadan in mind, free trial.",
  h1: "IB and IGCSE Tutors and Home Tuition in Malappuram",
  heroEyebrow: "MALAPPURAM: IB & IGCSE TUITION FOR HOME AND GULF-RETURN FAMILIES",
  heroSubtitle:
    "Home tuition in Malappuram for a child coming back from a Gulf school, or one aiming for an international syllabus from Kerala? Tutors teach online, one to one, from India: no one turns up at the gate, because visits run only in Gurugram and parts of Delhi NCR. Every lesson is live at your child's own desk.",
  primaryKeyword: "IB and IGCSE tutors in Malappuram",
  imageAltText: "A Malappuram student who moved back from the Gulf reviewing an IB Chemistry problem with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Malappuram",
    "IGCSE tutor Malappuram",
    "IB home tuition Malappuram",
    "IGCSE home tuition Malappuram",
    "IB private tuition Malappuram",
    "IB Maths tutor Malappuram",
    "IGCSE Maths tutor Malappuram",
    "IB Physics tutor Malappuram",
    "IB Chemistry tutor Malappuram",
    "IB Biology tutor Malappuram",
    "IB DP tutor Malappuram",
    "IB MYP tutor Malappuram",
    "IB PYP tutor Malappuram",
    "IGCSE online tuition Malappuram",
    "IB tutor Perinthalmanna",
    "IB tutor Manjeri",
    "IGCSE tutor Tirur",
    "tuition for Gulf returned students Malappuram",
    "IB tutor Kondotty",
    "online IB tuition Kerala Malappuram",
  ],

  heroTrustPoints: [
    "Tutors in India on IST, which suits families who are used to Gulf-hour timetables",
    "A free trial lesson before you decide, then written rates",
    "A short written note after every session",
    "A tutor switch on request if the match is off",
    "Coaching only: never IAs, Extended Essays or TOK essays written for a child",
  ],
  heroStats: [
    { value: "IST", label: "One clock for tutor and family" },
    { value: "PYP to DP", label: "IB stages plus IGCSE" },
    { value: "Free trial", label: "See a lesson before deciding" },
    { value: "May & Nov", label: "The sessions we plan towards" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Malappuram, where so many households have a Gulf story",
    paragraphs: [
      "Ask around Malappuram and you will find that almost every extended family has someone who works, or worked, in Saudi Arabia, the UAE, Qatar, Oman, Kuwait or Bahrain. Gulf remittances built many of the houses along the roads out of Kondotty and Perinthalmanna, and they also shape schooling. Children raised in Gulf classrooms may have studied Cambridge IGCSE, the IB or a British-style course, and some return to Kerala at the end of Class 8, 9 or 10 when a parent's contract ends. Others stay home while a parent works abroad and want an international qualification. Both groups look for IB and IGCSE tutors in Malappuram.",
      "Options on the ground are narrow. Silvermount International School in Perinthalmanna offers CBSE alongside Cambridge IGCSE, and it is the only IGCSE school we could confirm in the district. We could not confirm any IB school here. Most of Malappuram's schools follow the Kerala state syllabus, CBSE or ICSE, so a returning child often finds no syllabus match and needs help with continuity.",
      "IB Gram tutors are based in India and teach on Indian Standard Time. One tutor works with one student on video, using a shared whiteboard and past papers. Because in-person home tuition is offered only in Gurugram and parts of Delhi NCR, Malappuram lessons run online, at home. A free trial comes first and rates follow in writing, never before.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Primary school work built on themed inquiries, such as how we organise ourselves, where reading, number sense and research habits grow out of the unit itself.",
      countryNote:
        "Returning families with a child who did PYP abroad ask for continuity in reading, writing and inquiry work while the child settles into a Kerala school.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Ages eleven to sixteen, taught through key concepts and global contexts, marked against published criteria, and capped by a personal project the student chooses.",
      countryNote:
        "A child leaving a Gulf MYP school mid-course often needs a bridge into a Kerala syllabus or a plan to stay on MYP through an online route.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The pre-university years: six chosen subjects, a 4,000-word essay, a knowledge course and a service strand, with written papers mostly in May.",
      countryNote:
        "Some Malappuram students complete the DP in Kochi or the Gulf and use home tuition at Onam and summer breaks to strengthen weaker subjects.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A shorter route that puts a pair of academic courses beside vocational study and a reflective project.",
      countryNote:
        "Some Gulf schools offer it, so returning students occasionally ask how its subjects map onto the Kerala system.",
    },
  ],
  programmesIntro:
    "Whether a child is mid-programme after a Gulf posting or starting fresh in Kerala, the first lesson explains how the assessment works and where the child stands against it.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, calculus and proof for aspiring engineers, with a tutor insisting on written justification." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data handling, modelling and calculator work, a comfortable fit for future doctors, economists and social scientists." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and quantum topics, with investigation design and data questions." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, energetics and organic chemistry, including how mark schemes split a long answer." },
    { name: "Biology", levels: "SL / HL", description: "A data-rich course with experimental design and evaluation, popular with future doctors." },
    { name: "Economics", levels: "SL / HL", description: "Trade, development and macroeconomics, with a natural link to remittance economies like Kerala's." },
    { name: "Business Management", levels: "SL / HL", description: "Built on case studies, and relevant to children from trading, construction and hospitality households." },
    { name: "Computer Science", levels: "SL / HL", description: "Coding, hardware and networks, learned through trace tables and timed questions." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, evaluation and the internal assessment method." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Reading texts closely and comparing them, for students who move between Malayalam, Arabic and English at home and school." },
    { name: "Malayalam A / Malayalam B", levels: "SL / HL", description: "Either literature or language acquisition; a natural option locally, and useful for children whose Malayalam faded while abroad." },
    { name: "Arabic B", levels: "SL / HL", description: "A language acquisition course that rewards what Gulf-returned students absorbed living abroad." },
    { name: "Theory of Knowledge", levels: "Core", description: "Help thinking through knowledge questions; the essay and exhibition remain the student's own." },
  ],
  subjectsIntro:
    "Subject planning starts from what the student already studied abroad or at school here, and from the degree in view, not from what is easiest to teach.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Number, shape and data across two tiers, with plenty of practice on problems that need several steps." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "An early taste of calculus and functions before A Level Mathematics." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Motion, waves, circuits and heat, examined through scenarios the student has not met before." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Bonding, reaction types, calculations and lab analysis, with written practical questions." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Living things, inheritance and ecosystems, with graph and table questions." },
    { name: "English as a First / Second Language", levels: "Cambridge 0500 / 0510", description: "Reading, writing and speaking, valuable for children crossing from one school system to another." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Pseudocode, networks and how data is stored." },
    { name: "Economics", levels: "Cambridge 0455", description: "Basic economic problems, markets and government policy." },
    { name: "Accounting", levels: "Cambridge 0452", description: "Double-entry and financial statements, useful for business families." },
    { name: "Arabic as a Foreign Language", levels: "Cambridge 0544", description: "A language option that recognises Gulf-acquired ability." },
    { name: "Islamiyat", levels: "Cambridge 0493", description: "Where a family's school route includes it, tutors can support the written papers." },
  ],
  igcseSubjectsIntro:
    "Gulf schools often use Cambridge or Edexcel, so returning students may already know the format. Tutors check the specification code first, since papers and tiers differ.",

  regionsTitle: "Malappuram towns and areas our online students study from",
  regionsIntro:
    "Lessons happen at home, wherever in the district you live. These notes explain how each area's daily pattern tends to influence lesson timing.",
  regions: [
    { name: "Malappuram town", note: "The district headquarters on the Kozhikode-Palakkad hills road, with a dense mix of schools and a strong tuition culture; evening slots are popular." },
    { name: "Kottakkal", note: "Known for the Arya Vaidya Sala and its hospital campus; families with health-sector employment often plan around shift patterns." },
    { name: "Manjeri", note: "A fast-growing commercial town with a government medical college, drawing families who think early about medicine and NEET." },
    { name: "Perinthalmanna", note: "Home to Silvermount International School and a cluster of private schools and hospitals, and a natural centre for the IGCSE conversation in the district." },
    { name: "Tirur", note: "A railway and trading town in the south of the district, with strong Gulf links and the Malayalam University campus nearby." },
    { name: "Kondotty and Karipur", note: "Next to Calicut International Airport, where many Gulf-linked families live and children arrive with a parent's leave." },
    { name: "Nilambur", note: "A hill and forest area in the east famed for teak, with quieter roads and less school choice." },
    { name: "Ponnani and Valanchery", note: "Coastal and inland towns with old Malabar trading roots, and families who follow Gulf jobs and Kozhikode schools." },
  ],

  schoolClusters: [
    {
      city: "Perinthalmanna, Malappuram district",
      note: "The only school we could confirm in the district offering a Cambridge IGCSE course; we could not confirm any IB school locally.",
      schools: ["Silvermount International School, Perinthalmanna"],
    },
    {
      city: "Nearby: Kozhikode",
      note: "About 50 kilometres from Malappuram town, Kozhikode is the nearest big city, yet no IB or IGCSE school could be confirmed there, so many families still rely on online tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Kochi",
      note: "Around 180 kilometres south, Kochi has a wider set of international-curriculum schools, and some Malappuram families consider boarding or relocating there for the DP or IGCSE years.",
      schools: ["The Choice School, Ambalamugal", "TIPS Kochi", "Cochin International School"],
    },
  ],
  schoolDisclaimer:
    "The schools named above are listed only because families in the Malappuram area sometimes consider them. IB Gram is independent of the IB, Cambridge, Pearson and every school named, and a mention is neither an endorsement nor a claim that any school partners with us.",

  modesIntro:
    "No tutor comes to a Malappuram home, because visits happen solely in Gurugram and some Delhi NCR neighbourhoods. Families use the online lessons in three ways.",
  modes: [
    {
      title: "Weekly private lessons at home",
      description: "A fixed weekly slot with one tutor on one subject, live marking of the student's work and a clear task for the week ahead.",
      bullets: ["Consistent day and hour", "Live written feedback", "Parent summary note"],
    },
    {
      title: "Re-entry support after a Gulf posting",
      description: "For a child returning to Kerala mid-programme, a focused plan to match the new syllabus or keep the old one going.",
      bullets: ["Syllabus gap check", "Malayalam or Arabic language support", "Slow, steady catch-up"],
    },
    {
      title: "Exam sprint before May or November",
      description: "A short intensive block of timed papers and error review before the main sessions.",
      bullets: ["Timed past papers", "Mistake log", "Priority topics by marks"],
    },
  ],

  sections: [
    {
      heading: "Why is Gulf return such a common reason for IB and IGCSE tuition in Malappuram?",
      paragraphs: [
        "A Gulf-based family often chooses a school for its curriculum, not for Kerala. Indian schools in Dubai, Sharjah, Doha or Riyadh offer CBSE, but many also run Cambridge IGCSE, the IB or British-style courses. When a contract ends or a parent's health calls the family home, the child steps out of one of these systems and into a Kerala school that runs something else.",
        "The transfer is rarely smooth. Class 9 or 10 IGCSE students may find that the local school teaches only state syllabus or CBSE and has no place for them to complete IGCSE. IB students face a harder choice: finish the Diploma elsewhere or switch boards, which can waste a year.",
        "Tutoring buys options. A child who wants to keep the IGCSE path can register as a private candidate, and a tutor prepares papers and mock exams. A child who chooses CBSE or state syllabus can still use an IB or IGCSE-trained tutor to bridge subject gaps and build English writing.",
        "The other group is children who never left. A father in Riyadh, a mother at home in Manjeri, and a wish for the child to go to a UK, Canadian or Australian university one day. These families look for a route that does not depend on moving.",
      ],
    },
    {
      heading: "How do Kerala state syllabus, CBSE and ICSE compare with IGCSE and the IB?",
      paragraphs: [
        "Most Malappuram schools follow the Kerala SCERT syllabus, with English or Malayalam as the medium, and a sizeable minority follow CBSE. Both prepare students for a public examination at the end of Class 10, and the state board exam in Class 12 (Higher Secondary) leads into KEAM and NEET. IGCSE and IB have a different feel.",
        "For a student moving from the Gulf, the contrast can go either way. Coming out of IGCSE, the Kerala Class 10 paper can feel content-heavy but predictable. Going from Kerala into IGCSE, the reverse applies: less content, more reasoning.",
        "The table gives a general comparison for parents deciding between staying on an international route and moving to a local board.",
        "Parents should also consider language. Kerala schools teach Malayalam as a subject up to Class 10, and Gulf-schooled children may have dropped it. A tutor can help with that gap alongside the main subjects.",
      ],
      table: {
        caption: "Boards a Malappuram family may weigh up",
        columns: ["Aspect", "Kerala state syllabus", "CBSE / ICSE", "Cambridge IGCSE", "IB Diploma"],
        rows: [
          ["Medium", "Malayalam or English", "English", "English", "English plus second language"],
          ["Final exam at Class 10", "SSLC public exam", "Board exam", "IGCSE series exams", "Not applicable, MYP or IGCSE precedes"],
          ["Question style", "Textbook-based with application", "Recall and application", "Structured and applied", "Extended reasoning and data analysis"],
          ["Presence in Malappuram", "Everywhere", "Many schools", "One confirmed school", "None confirmed"],
          ["Route to KEAM or NEET", "Direct", "Direct", "Needs Class 12 equivalent", "Needs equivalence and subject check"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition in Malappuram?",
      paragraphs: [
        "There is no fixed price on this page. Families ask for such different things that a single figure would mislead. One might want twice-weekly IB Physics HL with a tutor experienced in that specification, while another wants a monthly check-in on IGCSE English writing. After a free trial you receive rates in writing.",
        "The most significant factor is tutor experience. A tutor who has taught the same syllabus for years and understands its mark schemes in detail typically charges more than someone new to the field. Subject also matters: higher-level mathematics and sciences are usually at the higher end.",
        "Session length and frequency come next. Two shorter lessons a week can be priced differently from one long one, and exam-window intensives differ again. Ask the tutor to propose a plan and adjust it to your budget.",
        "Gulf-returned families sometimes compare with tuition costs abroad. Rates in India are set by India-based tutors and are quoted in rupees, and there are no travel or premises costs to add.",
      ],
    },
    {
      heading: "Is an online tutor a better choice than a Kozhikode centre, a local tuition class or self-study?",
      paragraphs: [
        "Malappuram has a large tuition culture, with evening and weekend classes for state syllabus, CBSE, KEAM and NEET. Many are effective for those goals. For IB and IGCSE, they generally teach the wrong syllabus.",
        "Travelling to Kozhikode or Kochi for specialised coaching is possible, but the road adds hours, and the monsoon makes it harder. For a student in Class 10 or 11 already carrying school and entrance-exam load, it is rarely a good use of time.",
        "Self-study works for a disciplined student, especially with access to past papers and mark schemes. The weakness is the lack of a second reader. A tutor spots patterns in errors the student cannot see.",
        "Online tutoring with a specialist keeps the student at home, in a familiar routine, with an expert reading their actual work. The table compares the choices.",
      ],
      table: {
        caption: "Ways a Malappuram student can prepare for an international syllabus",
        columns: ["Option", "Knows IB or IGCSE marking", "Attention", "Practical burden"],
        rows: [
          ["Online one-to-one tutor", "Yes, subject specialist", "Individual", "Laptop and stable connection"],
          ["Local evening tuition class", "Usually not", "Group", "Daily travel and fixed timings"],
          ["Coaching in Kozhikode or Kochi", "Sometimes", "Small group", "Long travel, often an overnight stay"],
          ["Private teacher at home", "Seldom", "Individual", "Good for basics, limited syllabus knowledge"],
          ["Self-study", "Only from past papers", "None", "Needs strong discipline"],
        ],
      },
    },
    {
      heading: "When do exams fall, and how do Ramadan, Onam and the monsoon affect study time?",
      paragraphs: [
        "IB Diploma written exams run in May, with November for some schools, and Cambridge and Edexcel IGCSE in May-June and October-November. A student should confirm the exact session with the school or exam centre, and the tutor then plans backwards.",
        "Ramadan matters in Malappuram, where a majority of the population observes it. Concentration drops in the hour before iftar, and late-night prayers shorten sleep. Tutors shift lessons to late evening or early morning, or lighten the week, and Eid stays a proper holiday.",
        "The southwest monsoon arrives in June and can bring heavy rain, landslides in the eastern hills and flooded roads. Keep a backup slot each week, and a mobile hotspot for power cuts. Onam brings a school break in August or September, and Christmas and the winter holidays give a long stretch for catch-up.",
        "The table shows how a Malappuram year can be organised around these events.",
      ],
      table: {
        caption: "A Malappuram study year around exams and local events",
        columns: ["Months", "Local factor", "Exam or school context", "Tutor approach"],
        rows: [
          ["June to August", "Southwest monsoon, new school year", "Term start and first tests", "Foundations and gap-closing, backup slots"],
          ["September", "Onam break", "Term-one exams", "Light revision, then timed papers"],
          ["October to December", "Northeast monsoon showers, Christmas break", "November sessions, mock exams", "Timed papers, long catch-up in December"],
          ["January to March", "Dry and pleasant", "Mocks and internal assessments", "Full papers and IA method coaching"],
          ["April to May", "Hot, humid, pre-monsoon storms", "May exam sessions", "Short focused revision"],
          ["Ramadan and Eid (dates move each year)", "Fasting and family time", "Can fall near exams", "Late or early lessons, reduced load"],
        ],
      },
    },
    {
      heading: "IB Mathematics AA or AI, and how do the sciences fit a Kerala student?",
      paragraphs: [
        "Many Kerala students bring a sturdy base in algebra and calculus from the state syllabus, which is a real advantage in IB Mathematics. The difference lies in presentation. Marks depend on clear working, precise language and the correct use of a graphing calculator.",
        "Analysis and Approaches is the natural fit for engineers, physicists and mathematicians, as it emphasises algebra, calculus and proof. Applications and Interpretation is better for medics, economists and social scientists, thanks to its statistics and modelling content.",
        "Returning Gulf students often already know one of these courses. The tutor's task is then continuity: matching the pace of the new school, or keeping the old programme alive through independent study.",
        "In the sciences, Kerala's strong practical culture is a benefit, but the IB internal assessment asks the student to design an experiment, not follow a manual. Tutors coach the method, and the student runs and writes the work.",
        "Medical aspirants should discuss workload openly. Biology and Chemistry at Higher Level together with Mathematics is heavy, and NEET preparation adds another layer.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and how should returning students choose subjects?",
      paragraphs: [
        "Core papers cover the basics and cap the highest grade. Extended papers open every grade but ask for more depth. Students who did well in Class 8 or 9 mathematics are usually ready for Extended, and a tutor can check that in the first lessons.",
        "A student coming back from a Gulf IGCSE school may already have chosen subjects. The question is then whether to finish them as a private candidate, and a tutor can help a family think about exam centre access, practical papers and registration deadlines.",
        "A student starting IGCSE for the first time in Malappuram has broader options. English, Mathematics, a language and sciences form the usual core. Future doctors should keep Biology and Chemistry, and engineers Physics and Mathematics.",
        "Cambridge and Pearson Edexcel differ in question layout and command words, and tutors confirm which applies before building a plan. Silvermount's Cambridge route, for example, differs in detail from Edexcel practice.",
      ],
    },
    {
      heading: "What universities and careers follow from IB or IGCSE for students in Malappuram?",
      paragraphs: [
        "Malappuram students look in several directions. The University of Calicut at Thenhipalam and the AMU Malappuram centre offer local options, while NIT Calicut and IIM Kozhikode are close by. For each, an IB student should check how equivalence and entrance tests apply, since rules change year to year.",
        "In India, the Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG is the route to central universities. Kerala engineering admission through KEAM and medical admission through NEET-UG have their own conditions about qualifying examinations and subjects.",
        "Abroad, the Gulf is a familiar option for work, but many Malappuram students now aim for the UK, Canada, Australia and Ireland, where IB scores are recognised directly. Gulf-linked family networks often help with information on visas and living costs.",
        "Tutors do not manage applications, but they will explain honestly which subject choices keep doors open, for example the combination of Mathematics, Physics and Chemistry for engineering.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send a WhatsApp message or email with your child's class, the board or school they are coming from and the subject that worries you." },
    { title: "Share the syllabus", description: "We check the exam board, tier and session, and whether your child is in a school or a private candidate." },
    { title: "Try a free lesson", description: "A matched tutor teaches a real trial class at a time that suits your evening." },
    { title: "See rates in writing", description: "Only after the trial do you receive a quote and a proposed weekly plan, with nothing booked in advance." },
    { title: "Continue with notes", description: "Classes start, a written note follows each one, and you can ask for a different tutor at any time." },
  ],

  whyPoints: [
    { title: "Syllabus specialists", description: "Tutors work from IB subject guides and Cambridge and Edexcel specifications." },
    { title: "Clear about online delivery", description: "No tutor visits Malappuram homes; every lesson is live, private and one to one." },
    { title: "Gulf-return experience", description: "We understand the mid-programme move and plan for continuity, language gaps and exam entry." },
    { title: "Written rates first", description: "You see a quote after the trial and before committing." },
    { title: "Guidance, not ghost-writing", description: "Tutors coach the student's own IA, essay and coursework, never write them." },
    { title: "Respect for the local calendar", description: "Ramadan, Eid, Onam and the monsoon are built into the plan." },
  ],

  tutorsIntro:
    "All tutors teach live from India, matched on subject and programme. Use the trial lesson to check fit before you decide anything.",

  faqs: [
    { question: "Do tutors visit homes in Malappuram?", answer: "Tutors never turn up at a Malappuram front door. Physical home visits are limited to Gurugram and a few Delhi NCR areas. Here the lesson is online: your child sits at home with a laptop, the tutor appears on video and writes on a shared board, and the session is still one adult and one student, undivided." },
    { question: "Is there an IB or IGCSE school in Malappuram district?", answer: "One IGCSE school is confirmed: Silvermount International School in Perinthalmanna, offering CBSE beside Cambridge IGCSE. No IB school in the district could be confirmed. The rest of the district's schools run the Kerala syllabus, CBSE or ICSE, which is why online tutoring covers most IB and IGCSE needs." },
    { question: "What does IB or IGCSE tuition cost in Malappuram?", answer: "No single rate exists, since it moves with subject, level, the tutor's experience and how often you meet. The sequence is a free trial, then a written quote, then your decision. Should money be tight, say so early; the tutor can concentrate on the topics that carry most marks before the next paper." },
    { question: "My child just returned from the Gulf. What should we do first?", answer: "Start with a diagnostic lesson. The tutor checks which syllabus your child followed, where they stand and what the new school teaches. Then you decide whether to continue the old programme, switch boards or combine the two. A calm plan in the first month usually prevents the worst of the transfer stress." },
    { question: "Can my child finish IGCSE from Malappuram?", answer: "Often yes, as a private candidate or through Silvermount if it fits. You will need an exam centre that accepts your child, and practical exams need early planning. A tutor prepares the papers and mock exams, and we suggest asking centres about fees and deadlines well in advance." },
    { question: "How does Ramadan affect lessons?", answer: "We shift lessons to the late evening or first thing in the morning, or lighten the week, so nobody is stretched in the hour before iftar. Eid stays a real holiday, with catch-up afterwards. Describe your household routine at the start and the plan follows it." },
    { question: "Can tutors help with Malayalam or Arabic?", answer: "Yes, for IB Malayalam or Arabic B, and for IGCSE Arabic. A Gulf-returned child may have lost Malayalam fluency or gained Arabic, and a tutor can build on whichever language is stronger. Availability varies, so we confirm a tutor before you commit." },
    { question: "Will the tutor write IAs or essays?", answer: "No, and that rule protects your child. IAs, Extended Essays, TOK essays and coursework are written by the student alone. What a tutor does is unpack the marking criteria, test whether a research question is workable, react to an outline and give notes on a draft. Authorship stays with the student, as the IB demands." },
    { question: "Is the IB Diploma accepted in Indian universities?", answer: "For the most part, yes. The AIU treats the Diploma as a Class 12 equivalent, and CUET-UG is how most central universities admit students. Individual courses can add subject requirements, so read each admission brochure closely, including those of the University of Calicut and AMU Malappuram if either interests you." },
    { question: "Can IB or IGCSE students take KEAM or NEET?", answer: "Sometimes, depending on the subjects studied and marks earned. NEET asks for Physics, Chemistry, Biology and English at the senior stage; KEAM sets its own conditions for the qualifying exam. An IGCSE certificate on its own is a Class 10 level qualification, so a senior-stage course must follow. Read the latest official notices before fixing subjects." },
    { question: "When should tutoring start?", answer: "Sooner than most families expect, though there is no fixed age. Primary children can begin with reading and number confidence; MYP and IGCSE help usually starts between Classes 7 and 9; DP help in Class 11. If a Gulf return is planned, begin a term before travel, because early preparation softens the first months in the new school." },
    { question: "How does the free trial work?", answer: "Tell us the class, the school or board your child is arriving from and the subject. We name a tutor and fix a genuine lesson at a convenient hour, with no strings. You then get a short summary of what happened and, if you want to go on, the rates written out." },
    { question: "Can we change tutors?", answer: "Whenever you like. A good teacher for one child can be a poor match for another, through pace, tone or timetable, and nobody needs to feel awkward about it. Explain what felt off and a different tutor is proposed; the second pairing tends to work better because the brief is sharper." },
    { question: "Which IGCSE boards do tutors cover?", answer: "Both Cambridge International and Pearson Edexcel, plus AS and A Level where they help as background. Before any teaching, the tutor asks for the subject code and tier, since papers and command words differ between boards, and revising from the wrong set of past papers costs weeks." },
    { question: "How do I get started?", answer: "Write on WhatsApp to +91 7439 368 115 or email support@ibgram.com, mentioning the class, the previous school or board and the troublesome subject. A suggested tutor and trial time come back, and nothing is confirmed until the lesson and the written rates satisfy you." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Every tutor, subject and programme in one place." },
    { label: "India city pages", href: "/india/", description: "The list of Indian cities we teach in online." },
    { label: "Gurugram", href: "/gurgaon/", description: "The single area with in-person home visits." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find a tutor by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel subjects at IGCSE." },
    { label: "IB MYP", href: "/programmes/myp/", description: "How MYP years 1 to 5 are structured." },
    { label: "IB DP", href: "/programmes/dp/", description: "What the DP asks of a student over two years." },
    { label: "Contact us", href: "/contact-us/", description: "Reach us with a question or to book the trial." },
    { label: "Kozhikode", href: "/kozhikode/", description: "The closest city, about 50 kilometres north." },
    { label: "Kochi", href: "/kochi/", description: "Kerala's centre for international-curriculum schools." },
    { label: "Thrissur", href: "/thrissur/", description: "A central Kerala city page." },
    { label: "Palakkad", href: "/palakkad/", description: "The district east of Malappuram." },
  ],

  closingHeading: "Begin with one free lesson from your home in Malappuram",
  closingBody:
    "Anyone who has been hunting for IB and IGCSE tutors in Malappuram can begin with a few lines: the class, the previous school or board, the subject. A tutor and a trial slot come back to you, and written rates follow the lesson. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
