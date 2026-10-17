import type { CitySeoPage } from "../types";

/**
 * /madhubani/ - IB and IGCSE tutoring for Madhubani, Bihar. Online only: tutors do not visit homes
 * in Madhubani (in-person home tuition exists only in Gurugram and parts of Delhi NCR). No IB or
 * Cambridge/Edexcel school is confirmed in Madhubani, so stripSchools is empty and the clusters use
 * Kolkata, Delhi NCR and Bhubaneswar names already verified on other city pages.
 */
export const madhubani: CitySeoPage = {
  slug: "madhubani",
  countryName: "Madhubani",
  countryNameLong: "Madhubani, Bihar",
  demonym: "Madhubani",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fixed after the family checks the school's exam dates, the Kamla and Balan flood weeks, Chhath and the Mithila wedding season",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.3537, longitude: 86.0719 },
  wikipedia: "https://en.wikipedia.org/wiki/Madhubani,_Bihar",
  alternateNames: ["Madhubani Bihar", "Madhuban", "Mithila painting town"],
  stripSchools: [],

  title: "Madhubani IB & IGCSE Tutors | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE private tuition for Madhubani students: PYP, MYP, DP and Cambridge or Edexcel subjects, one to one in IST, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition for Madhubani, Online",
  heroEyebrow: "ONLINE IB AND IGCSE TUITION FOR THE ART CITY OF MITHILA",
  heroSubtitle:
    "Families in Madhubani who search for home tuition in an IB or IGCSE subject will rarely find a local teacher, so the private lesson comes to the laptop instead: one student, one tutor, a live video room, and a syllabus matched to the exact board and year. Nothing here depends on a school in town offering the curriculum. A child may be enrolled at a boarding school in Kolkata or Delhi NCR, may be sitting a Cambridge or Edexcel IGCSE subject privately next to a Bihar Board timetable, or may simply be testing whether an international route suits the family. Tutors are based in India, teach on IST, and do not travel to Madhubani.",
  primaryKeyword: "IB and IGCSE tutors in Madhubani",
  imageAltText: "A Madhubani student studying IB Visual Arts alongside a traditional Mithila painting while an online tutor reviews the work on screen",
  secondaryKeywords: [
    "IB tutor Madhubani",
    "IGCSE tutor Madhubani",
    "IB home tuition Madhubani",
    "IGCSE home tuition Madhubani",
    "IB private tuition Madhubani",
    "IB Maths tutor Madhubani",
    "IGCSE Maths tutor Madhubani",
    "IB Physics tutor Madhubani",
    "IB Chemistry tutor Madhubani",
    "IB Biology tutor Madhubani",
    "IB DP tutor Madhubani",
    "IB MYP tutor Madhubani",
    "IB PYP tutor Madhubani",
    "IGCSE online tuition Madhubani",
    "IB tutor Madhubani Bihar",
    "IGCSE tutor Madhubani Bihar",
    "online IB tuition Mithila",
    "IB tutor Jhanjharpur",
    "IB tutor Laukaha",
  ],

  heroTrustPoints: [
    "Each tutor is picked for the syllabus code and year your child is actually on, not for where the school sits",
    "Home visits run only in Gurugram and parts of Delhi NCR, so every Madhubani lesson happens online",
    "A free trial lesson comes first, followed by a written note after every session",
    "Rates are sent in writing before booking, and the tutor can be changed if the fit is wrong",
    "IB Gram is an independent service with no tie to any school, board or exam body",
  ],
  heroStats: [
    { value: "PYP to DP", label: "every IB stage, taught online" },
    { value: "Two boards", label: "Cambridge and Pearson Edexcel IGCSE" },
    { value: "IST", label: "tutor and student on the same clock" },
    { value: "Free trial", label: "before any commitment" },
  ],

  intro: {
    heading: "An international syllabus for a town best known for a folk art",
    paragraphs: [
      "Madhubani is a district headquarters in the Darbhanga division of Bihar, roughly 26 km from Darbhanga and not far from the Nepal border, and the wider world knows it for Madhubani painting, which carries a Geographical Indication tag. Its schools follow the Bihar School Examination Board or CBSE. As far as we can confirm, none of them teaches the IB or a Cambridge or Edexcel IGCSE course, and this page says so openly instead of pretending otherwise.",
      "That shapes who writes to us. Some parents have a child at an IB boarding school in Kolkata or Delhi NCR and want a local-hours tutor for one weak subject. Some are a doctor or bank officer family posted to the district, unwilling to drop an IB subject mid-course. A few are entering a Cambridge or Edexcel IGCSE subject as a private candidate because it reads well on a foreign university file. A tutor in Bengaluru or Pune can serve all three with the same ease as a tutor down the road.",
      "Tutoring is a coaching relationship. The tutor explains, sets practice, marks it and points out what the examiner wanted. The student writes every Internal Assessment, Extended Essay, Theory of Knowledge piece and coursework item personally, and no tutor drafts any of them. IB Gram is independent and is not affiliated with the IB, Cambridge, Pearson or any school named here.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP support, subject by subject",
      "Cambridge and Pearson Edexcel IGCSE at Core, Extended, Foundation or Higher tier",
      "Live one-to-one online lessons on Indian Standard Time",
      "A free trial lesson and a written note after every session",
      "No tutor visits in Madhubani; in-person home tuition is limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is delivered by a school in Madhubani that we can verify, so the notes below speak to the real routes: a child enrolled elsewhere, a family planning a move, or a private IGCSE candidate.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-11",
      description:
        "Teaches through units of inquiry that tie subjects to a central idea, and ends with a pupil-led Exhibition. Tutoring here is light: reading aloud, number talk, and helping a child explain why an answer is right in a full sentence.",
      countryNote:
        "A Madhubani PYP request usually comes from a family about to relocate, asking how to keep a child close to the inquiry style before the new school begins.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Marks work against published criteria in eight subject groups and closes with a Personal Project. Students who are strong on content still lose marks by not answering the criterion in front of them, which is the skill a tutor trains.",
      countryNote:
        "MYP help for Madhubani students is continuity work for a child enrolled in another city, or a bridge before a planned admission there.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, plus Theory of Knowledge, the Extended Essay and CAS. Internal Assessments feed the final grade, and most schools sit the exams in May.",
      countryNote:
        "DP students linked to Madhubani normally study at a boarding school outside Bihar, so the tutor follows that school's internal deadlines, not a Bihar term.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Pairs at least two Diploma courses with a career-related study, a reflective project and personal and professional skills. Few Indian schools run it, but its Diploma courses are taught to full Diploma standard.",
      countryNote:
        "CP is rare in any Bihar family's plans. When it comes up, tutoring covers the Diploma courses inside it and the reflective project.",
    },
  ],

  subjectsIntro:
    "Subject support is set by the exact course and level, so a Biology SL student and a Biology HL student receive different plans. Because most Madhubani students here belong to a school outside Bihar, the first question is always which May or November session applies.",
  subjects: [
    { name: "IB Maths Analysis and Approaches", levels: "HL / SL", description: "Proof, calculus and functions, with HL Paper 3 problem solving practised well before the exploration is due." },
    { name: "IB Maths Applications and Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology use, where calculator fluency decides how many method marks survive." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields, with the data booklet used quickly and the experimental write-up planned early." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics and organic reaction pathways, plus stoichiometry drilled until it becomes automatic." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms and data-based questions matter more than memorising every cell process." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams tied to a named real example, including markets with flood-linked price swings that Bihar students know first-hand." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based answers and the internal research project built around a real organisation." },
    { name: "IB Visual Arts", levels: "HL / SL", description: "Process portfolio, exhibition and comparative study, where a student raised on Mithila line work needs help with critical writing, not technique." },
    { name: "IB English A Language and Literature", levels: "HL / SL", description: "Unseen commentary, comparative essays and the individual oral, practised aloud." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension is rarely the gap for a Hindi and Maithili household; spontaneous speaking for the oral usually is." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Object-oriented ideas, data structures and a documented coding project." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Systems thinking applied to real issues such as river flooding, a live topic in north Bihar." },
    { name: "IB Psychology", levels: "HL / SL", description: "Accurate study recall and structured long-response essays." },
    { name: "Theory of Knowledge", levels: "DP Core", description: "Exhibition and essay coaching through conversation and counter-argument." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel set different papers, tiers and session months, so the plan starts from board, code and tier. Most Madhubani candidates sit as private candidates or continue a school syllabus from elsewhere, so the tutor works to the board's own calendar.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended scripts lose marks to unread command words more than to arithmetic; every line of working is protected." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Introduces calculus and vectors early, which makes the later step to IB Maths AA HL gentler." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar content to Cambridge but a different question style, so practice uses Edexcel papers only." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement and circuit reading, plus the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and qualitative analysis practised as a routine." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Diagram labelling, experiment design and the explanation style examiners reward." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and listening practice for families who use Maithili or Hindi at home." },
    { name: "IGCSE Economics 0455", levels: "Grade 10", description: "Clear definitions and short data-response answers from a first principles start." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 10", description: "Pseudocode, Boolean logic and the programming paper practised on a laptop." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 10", description: "Writing accuracy and oral confidence for a language the student already speaks." },
  ],

  regionsTitle: "Madhubani localities our online tutors teach",
  regionsIntro:
    "Lessons are online, so a locality only tells us about timing: power cuts, school end times and the rail or road trip that decides when a student is free.",
  regions: [
    { name: "Madhubani town centre", note: "Close to the railway station and the main bazaar; most CBSE and Bihar Board day-school students live within a short rickshaw ride, so a 6 pm lesson is usually realistic." },
    { name: "Station Road", note: "A busy corridor where traffic can stretch the return from school; evening lessons after 6:30 pm work better than 5 pm slots." },
    { name: "Ram Krishna College area", note: "A student-heavy stretch around the long-established degree college, with many households that already plan around university entrance tests." },
    { name: "Jitwarpur", note: "A village beside the town known for Mithila painting, where art-minded families ask about IB Visual Arts and design pathways." },
    { name: "Ranti", note: "Another painting village in the same belt, with students who travel to town for school and need lessons after daylight hours." },
    { name: "Jhanjharpur", note: "A sub-division town east of Madhubani; families here often combine school, a hostel stay and online tuition across different weeks." },
    { name: "Laukaha", note: "Near the Nepal trade route; parents with business or cross-border links sometimes ask about internationally recognised qualifications." },
    { name: "Benipatti", note: "An agricultural block to the south where flood weeks can interrupt travel, making online sessions easier to keep." },
    { name: "Pandaul and Rajnagar side", note: "Semi-rural belts where the reliability of the home connection, not distance, sets the lesson plan." },
  ],

  schoolDisclaimer:
    "Schools named on this page are listed only to show where IB or Cambridge and Edexcel study is actually reachable from Madhubani. IB Gram has no contract, partnership or endorsement with any of them, and is not affiliated with the IB, Cambridge Assessment International Education or Pearson. Families should confirm admissions and exam entries directly with each school or board.",
  schoolClusters: [
    {
      city: "Inside Madhubani",
      note: "We have not been able to confirm any school in Madhubani teaching the IB or a Cambridge or Edexcel IGCSE course. Local schooling runs on the Bihar Board and CBSE, so this page stays honest about online study as the practical route.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The usual eastern destination for Bihar families wanting a full IB continuum, reachable by overnight train; many keep the same online tutor after the move.",
      schools: ["Calcutta International School", "The Heritage School", "RP Goenka International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Far away but well connected by rail and air, and the other common boarding choice for Mithila families.",
      schools: ["American Embassy School, New Delhi", "Genesis Global School, Noida"],
    },
    {
      city: "Nearby: Bhubaneswar",
      note: "A longer trip from north Bihar, yet a real option for families who want an Odisha boarding or day school.",
      schools: ["KIIT International School", "SAI International School"],
    },
  ],

  modesIntro:
    "Every Madhubani lesson is live, private and online. What varies is the weekly rhythm: steady, exam push or short catch-up. No tutor visits a home here, because home tuition runs only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Online one-to-one tuition",
      description: "A private live class on a laptop at home, with a shared screen for diagrams, graphs and past papers.",
      bullets: ["One student, one tutor", "Shared whiteboard for working", "Written note after each class"],
    },
    {
      title: "Exam-season intensive",
      description: "A tighter block before May or November sessions, built around past papers, timed answers and error logs.",
      bullets: ["Timed paper practice", "Mark-scheme walkthroughs", "Weekly targets"],
    },
    {
      title: "Bridge and catch-up support",
      description: "Short courses for a child joining an IB or IGCSE school after a Bihar Board or CBSE start.",
      bullets: ["Gap diagnosis in week one", "Terminology and command words", "Hand-over notes for the new school"],
    },
  ],

  sections: [
    {
      heading: "Why are IB and IGCSE schools hard to find near Madhubani?",
      paragraphs: [
        "Madhubani's school market is built on the Bihar Board, CBSE and a scattering of convent and private day schools. The city has a medical college and a degree college, yet no school we can verify through the usual sources offers the IB or a Cambridge or Edexcel IGCSE programme. Darbhanga, the larger neighbour, is in the same position, and that is why families here so rarely meet another household that has tried the international route.",
        "The reason is demand and staffing rather than intent. An international school needs a critical mass of families who can pay international fees and who expect to leave for overseas study, plus teachers trained in the curriculum. Bihar's strongest aspirations still point at NEET, JEE, civil services and state jobs, which the local boards serve directly and which a local coaching market already supports at every price point.",
        "Families who still want an international route therefore split into three groups: those who board a child in Kolkata, Delhi NCR or Bhubaneswar, those who relocate whole households for a posting or a business, and those who study a single IGCSE subject privately. The third group is growing because Cambridge and Pearson allow private candidates through registered centres, although the centre and exam fees are the family's responsibility and the nearest centre may be in another city.",
        "What we can do is teach. A tutor can cover the whole content and exam technique of one subject online. What we cannot do is enter a student for the exam, issue a school transcript or replace the coordinator an IB school provides. Families should plan those pieces early and separately, ideally before the first lesson is booked.",
      ],
    },
    {
      heading: "Bihar Board, CBSE, IB and IGCSE side by side",
      paragraphs: [
        "A Madhubani parent usually compares four options. The Bihar Board gives the widest local reach and the lowest cost, and its Class 10 and Class 12 results feed straight into state colleges. CBSE adds national portability and aligns with JEE, NEET and CUET-UG. IB and IGCSE are international, project-heavy and assessed in English.",
        "The table shows how they feel for a student. It is a guide, not a ranking, and the right fit depends on a child's language strength, exam temperament and the university the family has in mind. A child who freezes in a three-hour paper may prefer a course with coursework, while a child who loves open-ended projects may find the IB a relief.",
        "Switching is easier at some points than others. Moving into IGCSE at Class 9 or into the IB Diploma at Class 11 works; changing mid-year rarely does. A tutor can close vocabulary and method gaps in a term, but cannot compress two years of IB Diploma internal assessment into one.",
        "Language matters too. A child who thinks in Maithili or Hindi and writes in English at school usually copes with IGCSE science and IB Maths, yet struggles with extended argument in Economics or Literature. That is teachable, and it is a large part of what online tutoring here focuses on.",
      ],
      table: {
        caption: "How the four routes compare for a Madhubani family",
        columns: ["Route", "Who sets exams", "Assessment style", "Typical fit"],
        rows: [
          ["Bihar Board", "BSEB, Patna", "Board papers and practicals in Class 10 and 12", "Students aiming for state colleges and state services"],
          ["CBSE", "CBSE, Delhi", "Board papers with internal marks", "Students aiming for JEE, NEET or CUET-UG"],
          ["IB Diploma", "IB, Geneva and Cardiff", "Exams plus internal assessments, EE and TOK", "Students targeting study abroad or broad degrees"],
          ["IGCSE", "Cambridge or Pearson Edexcel", "Mostly written papers at Core, Extended, Foundation or Higher", "Students wanting a strong Class 9-10 base before A Level or IB"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Madhubani, and what moves the rate?",
      paragraphs: [
        "IB Gram does not publish prices. Every rate is quoted in writing before booking, after the free trial, so a Madhubani family can compare it with local options on real figures. The rate depends on factors that can be explained plainly.",
        "The first is scarcity: an IB Maths AA HL or Physics HL tutor with years of May-exam experience costs more than a Class 8 Maths tutor. The second is level, because Diploma HL and Extended IGCSE need more preparation per lesson than Foundation-tier work. The third is frequency, since two lessons a week over six months is priced differently from a short exam block.",
        "Because the lesson is online, there is no travel cost to add and no rent for a coaching centre. Families should watch instead for the hidden costs of the international route: school fees if boarding, IB or Cambridge exam entry, and registration as a private candidate. None of these is an IB Gram charge, and all of them deserve a line in the family budget.",
        "To keep money sensible, start with one subject and a trial, read the written note after each class, and add lessons only where the note shows a clear gap. If the fit is wrong the tutor can be changed, and the rate for the new tutor is again sent in writing.",
      ],
      bullets: [
        "Level and scarcity of the subject tutor",
        "Lessons per week and length of commitment",
        "Exam proximity and need for past-paper marking",
        "Extra costs outside IB Gram: school, exam entry and private-candidate fees",
      ],
    },
    {
      heading: "Online tuition, coaching centres, private tutors and self-study compared",
      paragraphs: [
        "A Madhubani family has four practical ways to cover an IB or IGCSE subject. A local coaching centre is convenient but tuned to the Bihar Board and competitive exams. A private tutor in town can teach school subjects well but seldom knows the IB command terms or Cambridge mark schemes. Self-study with videos is cheap and lonely. Online one-to-one tutoring brings a specialist to the desk.",
        "The real trade-off is depth against convenience. A specialist online tutor knows the assessment objectives of one syllabus, while a neighbourhood teacher knows the child. The sensible plan is often both: the school or local teacher for routine work, and the online tutor for the subject where marks are leaking.",
        "Power and connectivity deserve honest mention. Madhubani has power interruptions and patchy mobile data in some areas, so we suggest a backup such as a phone hotspot and a short recording of the lesson if the student misses a segment.",
        "Whichever option a family picks, the student should keep a mistake log. It costs nothing and turns repeated errors into a revision list long before the exam.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help from Madhubani",
        columns: ["Option", "Strength", "Limit", "Best used for"],
        rows: [
          ["Online one-to-one tutor", "Syllabus specialist, flexible timing, written notes", "Needs a steady connection", "A weak subject, exam preparation, a missing teacher"],
          ["Local coaching centre", "Nearby, routine, peer group", "Tuned to Bihar Board and entrance tests", "General school subjects"],
          ["Private tutor in town", "Knows the child, familiar language", "Rarely trained in IB or Cambridge marking", "Early grades and language support"],
          ["Self-study and video", "Low cost, self-paced", "No feedback on written answers", "Revision after a tutor has fixed technique"],
        ],
      },
    },
    {
      heading: "The Madhubani school year: floods, Chhath and the exam calendar",
      paragraphs: [
        "North Bihar's calendar affects study more than most families admit. The monsoon from late June to September swells the Kamla, Balan and other rivers of the region, and flood weeks can close roads or cut power. In those weeks an online lesson often survives when travel would not, and we keep a catch-up slot for exactly that reason.",
        "Chhath in October or November is the largest family festival, and students often travel to villages or return from hostels. Mithila weddings in the winter months also pull households away. Lesson plans are lighter in these weeks, and revision is front-loaded earlier.",
        "IB Diploma exams are usually held in May, with some schools also using November; Cambridge IGCSE runs in May-June and October-November, and Edexcel in January and May-June. The table gives a planning view, but each school or exam centre publishes its own dates, and those always override ours.",
        "May is hot in the plains, and the heat affects concentration and power supply. Morning lessons before 10 am or evening lessons after 6 pm usually give the student a better chance of a clear hour.",
      ],
      table: {
        caption: "A planning calendar for Madhubani students",
        columns: ["Period", "Local effect", "Study plan"],
        rows: [
          ["January to February", "Cold mornings, winter weddings, Edexcel January window", "Mocks, error logs and Edexcel revision"],
          ["March to April", "Final IB and Cambridge preparation, rising heat", "Past papers under time, weekly feedback"],
          ["May to June", "IB, Cambridge and Edexcel exam sessions, peak heat", "Short morning lessons and rest days"],
          ["July to September", "Monsoon and flood weeks, new academic year", "Content building with flexible catch-up slots"],
          ["October to November", "Chhath, Cambridge October-November series", "Lighter plan around the festival, then final revision"],
        ],
      },
    },
    {
      heading: "University pathways from Madhubani: AIU, CUET-UG, JEE, NEET and abroad",
      paragraphs: [
        "IB Diploma and IGCSE students from Madhubani have more options than their families sometimes assume. The Association of Indian Universities recognises the IB Diploma for admission to Indian universities, and CUET-UG is open to candidates who meet a university's subject requirements. Students should check each university's published rules for the year they apply.",
        "For engineering and medicine, eligibility is more detailed. JEE Main and NEET-UG have rules about subjects and qualifying examinations, and IB or IGCSE students should read the current notification before choosing subjects, because rules and counselling practices change. We coach the content, not the admission process.",
        "Study abroad is the usual reason for choosing the IB. UK, US, Canadian and Australian universities read predicted grades, essays and subject mix, and Indian students with strong Maths and Sciences often aim at engineering, economics and computing courses. A Mithila-art background can also support design and architecture portfolios.",
        "Families should also weigh costs, since overseas study involves currency risk, visas and living expenses. A tutor can only raise a child's performance in subjects; counselling on scholarships and admissions belongs with the school or an education counsellor.",
      ],
      bullets: [
        "IB Diploma: check AIU equivalence and each university's rules",
        "CUET-UG: confirm subject mapping for the target course",
        "JEE and NEET: read the current eligibility notice before subject selection",
        "Study abroad: plan predicted grades and subject mix early",
      ],
    },
    {
      heading: "Can a Madhubani painting habit help with IB Visual Arts?",
      paragraphs: [
        "Yes, in a specific way. A student who has grown up around Madhubani painting already understands line, fill, symmetry and narrative space. Traditional styles such as Bharni, Kachni, Tantrik and Kohbar teach control and pattern. That gives a real head start on technique in IB Visual Arts.",
        "What the IB adds is a different demand: the student must explain intentions, compare artists, document experiments and reflect on cultural context in a process portfolio. A talented painter can still lose marks by under-writing the critical side, and a tutor can help plan that writing without painting or writing a single piece.",
        "The same habit supports other subjects indirectly. Pattern recognition helps in Maths geometry, patient observation helps in Biology diagrams, and the discipline of repeated strokes suits timed practice. We do not promise a grade from any of this, only that a student's strengths can be used deliberately.",
        "Students aiming at design, architecture or fine art courses should start portfolio work early and keep dated records. The tutor coaches structure and vocabulary, the student makes the work, and the school supplies the assessment.",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the IB sciences in detail",
      paragraphs: [
        "IB Maths Analysis and Approaches suits students who enjoy algebra, calculus and proof, and is the usual choice for engineering, physics and pure mathematics. Applications and Interpretation leans on statistics, modelling and technology, and suits economics, psychology and business. The choice should be made with a university's entry requirements in hand.",
        "HL students should treat Paper 3 and the exploration as long projects rather than late tasks. Standard Level students often need more help with function notation and exam timing. Early diagnostics show whether a gap is conceptual or simply lack of practice.",
        "In the sciences, IB Physics, Chemistry and Biology share a pattern: concepts, calculations and a practical investigation. The internal assessment is the student's own work, and a tutor can explain how a good method is judged without designing it. Weekly practice in data questions pays off more than last-week cramming.",
        "Students who came from the Bihar Board sometimes find IB sciences lighter on recall but heavier on explanation and application. A plan that mixes short conceptual explanations, calculation drills and past-paper marking works well online, because the shared screen makes every step visible.",
      ],
    },
    {
      heading: "IGCSE Core and Extended: choosing tiers and subjects",
      paragraphs: [
        "Cambridge IGCSE lets a school or candidate enter Core or Extended tier in many subjects. Core caps the top grade and suits students who need a secure pass; Extended opens the full grade range and is the usual path to A Level or IB. Edexcel uses Foundation and Higher in a similar way.",
        "A sensible Madhubani plan is to start a subject in Extended or Higher and move down only if the first mock shows a real gap. Students who aim at IB Maths AA HL, Sciences or Economics later should keep the higher tier.",
        "Subject choice should balance strengths and later plans. A typical private candidate might take Mathematics, Physics, Chemistry, Biology, English as a Second Language and one more subject. Each needs registered exam entry, so the family must find a centre early and confirm dates with it.",
        "Coursework and practicals are a practical issue for private candidates, because some components need centre arrangements. We advise on the content and technique; the family should confirm the practical or alternative-to-practical route with the centre before enrolling.",
      ],
    },
  ],

  tutorsIntro:
    "Tutors listed below teach from India on IST and work with Madhubani students online. A match is made on syllabus, level and teaching style, and the trial lesson is the test of fit.",
  process: [
    { title: "Send a short brief", description: "Share the programme or board, subject, level, current grade and the exam session that applies." },
    { title: "Receive a tutor shortlist", description: "We reply with tutors who have taught that syllabus, and their relevant background." },
    { title: "Take the free trial", description: "A live lesson tests the fit, with no payment and no obligation." },
    { title: "Confirm rates in writing", description: "If you continue, the rate and schedule are sent in writing before anything is booked." },
    { title: "Learn and review", description: "Regular lessons, a written note after each, and a tutor change if the fit is wrong." },
  ],
  whyPoints: [
    { title: "Syllabus-matched tutors", description: "A Maths AA HL student gets a tutor who has taught that exact course, not a generalist." },
    { title: "Honest about local supply", description: "We say plainly that Madhubani has no confirmed IB or IGCSE school and plan around it." },
    { title: "Written notes", description: "Every session ends with a note on what was covered and what to practise." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain and mark, but never write IAs, essays or coursework." },
    { title: "Clear rates", description: "Rates come in writing before booking, with no hidden extras from IB Gram." },
    { title: "Flexible around local life", description: "Flood weeks, Chhath and exam dates are built into the plan." },
  ],

  faqs: [
    {
      question: "Are there IB tutors in Madhubani?",
      answer: "Online IB tutors are available to Madhubani students through IB Gram, but tutors do not visit homes here. Each tutor is based in India, teaches on IST and is matched to the student's subject, level and school calendar. The free trial shows whether the style suits the child, and a different tutor can be assigned if not.",
    },
    {
      question: "Is IGCSE home tuition available in Madhubani?",
      answer: "Private IGCSE tuition from home is available online, not in person. A student studies on a laptop at home in a live one-to-one lesson. In-person home tuition is offered only in Gurugram and parts of Delhi NCR, so nobody travels to Madhubani. The lesson content, notes and tutor quality are the same as any online class.",
    },
    {
      question: "Does any school in Madhubani teach the IB or IGCSE?",
      answer: "We have not been able to confirm any. Madhubani's schools follow the Bihar Board or CBSE, and this page does not name a local school as offering IB or IGCSE. Families who want an international curriculum usually look at boarding options in Kolkata, Delhi NCR or Bhubaneswar, or study an IGCSE subject privately with an online tutor.",
    },
    {
      question: "Can a student in Madhubani take IGCSE as a private candidate?",
      answer: "Often yes, through an exam centre registered with Cambridge or Pearson, but the family arranges it. The centre sets entry deadlines, fees and practical arrangements, and may be in another city. IB Gram tutors the content and exam technique only. Confirm the centre, syllabus code and session before starting lessons.",
    },
    {
      question: "How much do IB and IGCSE online tutors in Madhubani cost?",
      answer: "Rates are not published, because they depend on the level, subject, frequency and the tutor's experience. After the free trial, a rate is quoted in writing before any booking. There is no travel cost, since lessons are online, but school fees and exam entry fees from the IB or Cambridge are separate and are not IB Gram charges.",
    },
    {
      question: "What happens during the free trial lesson?",
      answer: "The trial is a real lesson, usually on a topic the student finds hard. The tutor checks current understanding, explains one idea, sets a short task and gives feedback. Afterwards you receive a written note and can ask for a different tutor if the style does not fit. There is no payment and no commitment.",
    },
    {
      question: "Will the tutor write my IA, Extended Essay or coursework?",
      answer: "No. IB Gram tutors coach the student through ideas, structure and marking criteria, but never write or rewrite an Internal Assessment, Extended Essay, TOK essay or coursework. Examiners expect the work to be the student's own, and schools treat ghost-writing as malpractice that can cost a result.",
    },
    {
      question: "Which IB Maths should a Madhubani student pick, AA or AI?",
      answer: "Analysis and Approaches suits students aiming at engineering, physics or pure maths, and Applications and Interpretation suits economics, business and social sciences. Check the target university's entry requirements first. A tutor can run a diagnostic lesson and describe how each course feels, but the school's timetable and the university decide the final choice.",
    },
    {
      question: "Can Maithili or Hindi speakers cope with IB and IGCSE in English?",
      answer: "Yes, with steady practice. Students who speak Maithili or Hindi at home usually do well in Maths and Sciences, where language is technical, and need more support in essay subjects. Tutors work on command terms, paragraph structure and spoken English, and IB Hindi B or IGCSE Hindi can be taken as a language strength.",
    },
    {
      question: "Do flood weeks or power cuts affect online lessons?",
      answer: "They can, so we plan for them. Keep a phone hotspot as backup, tell the tutor early if a storm or flood is expected, and use the catch-up slot built into the schedule. Lessons can be recorded for the student's own revision if the tutor agrees, and missed sessions are rescheduled under the terms quoted in writing.",
    },
    {
      question: "Which exam sessions apply to a Madhubani student?",
      answer: "It depends on the school or exam centre, not the town. IB Diploma exams are mostly in May. Cambridge IGCSE runs in May-June and October-November, and Edexcel in January and May-June. Your school or centre publishes the exact dates, and those override any general calendar, so check before fixing a lesson plan.",
    },
    {
      question: "Can Class 9 or 10 students from a Bihar Board school try IGCSE subjects?",
      answer: "Yes, as a supplement or as private candidates, but the workload is real. A student who is already managing Bihar Board subjects should start with one subject, usually Mathematics or a science, and see how the load feels over a term. The tutor can also explain the difference between Core and Extended so the entry tier is chosen sensibly.",
    },
    {
      question: "Is IB or IGCSE useful for studying in India after school?",
      answer: "It can be. The Association of Indian Universities recognises the IB Diploma, and CUET-UG is open to candidates who meet a university's conditions. JEE and NEET have their own rules that change from year to year. Read the official notices for the year of application, and use tutoring to strengthen subjects, not to interpret admission rules.",
    },
    {
      question: "Can a student of Madhubani painting take IB Visual Arts?",
      answer: "Yes, if their school offers it. A student who paints in a Mithila style brings real technique, and the IB asks for additional skills in critical writing, comparison and documenting experiments. A tutor can coach the structure of the process portfolio and the vocabulary for reflection, while the student creates every piece of work.",
    },
    {
      question: "How do I start with IB Gram from Madhubani?",
      answer: "Message support@ibgram.com or WhatsApp +91 7439 368 115 with the board, subject, level, current grade and exam session. You receive a shortlist of tutors with their background, a few trial times in IST, and a rate in writing if you decide to continue. The tutor can be changed if the fit is wrong.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works for families in cities across the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where in-person home tuition is offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Programme and subject guides for every IB stage." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based grading and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the final Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How the CP combines Diploma courses and a career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds by subject and syllabus." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book a free trial lesson." },
    { label: "IB and IGCSE tutors in Darbhanga", href: "/darbhanga/", description: "The neighbouring Mithila city, with the same online-only arrangement." },
    { label: "IB and IGCSE tutors in Sitamarhi", href: "/sitamarhi/", description: "Another north Bihar city served online." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "Bihar's capital and its international school picture." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for Madhubani",
  closingBody:
    "Write with the programme or board, subject, level and the exam session that applies. You receive a tutor shortlist, trial times on IST and, if you continue, a written rate. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
