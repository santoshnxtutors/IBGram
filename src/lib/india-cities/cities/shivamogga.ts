import type { CitySeoPage } from "../types";

/**
 * /shivamogga/ - IB and IGCSE tutoring page for Shivamogga, Karnataka. Tuition here is entirely
 * online: in-person visits are a Gurugram and Delhi NCR arrangement only. No IB World School or
 * Cambridge/Edexcel IGCSE campus could be confirmed inside Shivamogga district, so stripSchools is
 * empty; schoolClusters point honestly toward Mangaluru, Mysuru and Bengaluru, reusing school facts
 * already verified on those cities' published pages. Rendered with the shared CountryLanding layout
 * used by /gurgaon/.
 */
export const shivamogga: CitySeoPage = {
  slug: "shivamogga",
  countryName: "Shivamogga",
  countryNameLong: "Shivamogga, Karnataka",
  demonym: "Shivamogga",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We plan around Malnad's long monsoon stretch, the Ganesha Chaturthi and Dasara school holidays, and, before any of that, the timetable your own child's school runs on",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.9299, longitude: 75.5681 },
  wikipedia: "https://en.wikipedia.org/wiki/Shivamogga",
  alternateNames: ["Shimoga"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shivamogga | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Shivamogga: Cambridge and IB PYP to DP support, matched to your exact syllabus, live one-to-one online lessons, free trial class.",
  h1: "IB and IGCSE Tutors and Online Tuition in Shivamogga",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SHIVAMOGGA STUDENTS",
  heroSubtitle:
    "Parents in Shivamogga typically start this search wanting private home tuition, and quickly discover the Malnad region has no IB or Cambridge school of its own. That gap is exactly what IB and IGCSE tutors in Shivamogga close: a subject specialist joins your child on a video call, working from the precise Cambridge code or IB level they need, whether that is Grade 10 Maths built up beyond the state syllabus or a Diploma science subject for a boarding student home on holiday. Lessons run on Indian time, fitted around your child's own school hours and Shivamogga's weather.",
  primaryKeyword: "IB and IGCSE tutors in Shivamogga",
  imageAltText: "Shivamogga student reviewing a Chemistry mark scheme on screen with an online IB tutor",
  secondaryKeywords: [
    "IB tutor Shivamogga",
    "IGCSE tutor Shivamogga",
    "IB home tuition Shivamogga",
    "IGCSE home tuition Shivamogga",
    "IB private tuition Shivamogga",
    "IB Maths tutor Shivamogga",
    "IGCSE Maths tutor Shivamogga",
    "IB Physics tutor Shivamogga",
    "IB Chemistry tutor Shivamogga",
    "IB Biology tutor Shivamogga",
    "IB DP tutor Shivamogga",
    "IB MYP tutor Shivamogga",
    "IB PYP tutor Shivamogga",
    "IGCSE online tuition Shivamogga",
    "Cambridge IGCSE tutor Shivamogga",
    "IB tutor Vinoba Nagar Shivamogga",
    "IGCSE tutor Gopala Extension Shivamogga",
    "online IGCSE tutor Bhadravathi",
    "IB tutor Shimoga",
    "IB tutor Shivamogga Karnataka",
  ],

  heroTrustPoints: [
    "Tutors are picked against your child's real Cambridge code and tier or IB subject and level, not a vague label",
    "Lessons happen on a screen. Someone knocking on your Shivamogga door is not how this service runs anywhere outside Gurugram and Delhi NCR",
    "You watch a full class free before any money changes hands",
    "IB Gram has no commercial tie to any school it names, nor to the IB Organisation, Cambridge or Pearson Edexcel",
  ],
  heroStats: [
    { value: "Zero local campuses", label: "So we search the whole country instead" },
    { value: "PYP through DP", label: "The full IB continuum, taught online" },
    { value: "IST throughout", label: "Tutor and student share the same clock" },
    { value: "Trial class, no cost", label: "See the teaching before you pay anything" },
  ],

  intro: {
    heading: "Why Shivamogga families come to us for IB and IGCSE",
    paragraphs: [
      "Shivamogga is Malnad country: coffee and areca traders, engineering and medical colleges, and a school system that runs overwhelmingly on the Karnataka State Board, with a scattering of CBSE and ICSE campuses for professional families. Nothing here carries Cambridge, Edexcel or IB status. So the households that reach us tend to split two ways. One group wants their child's ordinary Maths and Science pulled up to genuine IGCSE depth, usually with a future school move in mind. The other already has a child enrolled in an IB or Cambridge programme somewhere else and is looking for continuity while the family stays put in Shivamogga.",
      "Either way, the lesson looks the same: a tutor and student on a video call, a real past paper or IA draft open on the shared screen, working through whatever the current syllabus actually demands rather than a watered-down 'international curriculum' idea of it.",
      "What makes this worth doing is scale. Shivamogga on its own cannot support a tutor who has recently marked an IB Chemistry investigation or taught Cambridge Additional Maths, because too few students locally need either. Widen the search past B H Road and Gopala Extension to the rest of India, and that specialist exists and has time on their calendar.",
      "None of this involves IB Gram in the schools we mention, nor in the IB Organisation, Cambridge Assessment International Education or Pearson Edexcel. A tutor teaches, corrects and explains. Drafting a student's Internal Assessment, Extended Essay or any piece of graded coursework is outside what we do, always.",
    ],
    bullets: [
      "Full IB continuum support for boarding students and families with a child studying elsewhere",
      "Cambridge and Edexcel IGCSE matched down to the exact paper code",
      "One-to-one, live, on Indian Standard Time",
      "A short written plan arrives once the trial class is done",
      "No house calls anywhere in Shivamogga; that stays a Delhi NCR feature",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught inside Shivamogga district today, so every family arrives at one of these through a slightly indirect route: a child boarding at a school elsewhere, a household that has just moved to Shivamogga, or a student building equivalent depth on top of a state or CBSE timetable. Here is what each stage tends to need in practice.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning here happens through broad units of inquiry rather than separate subject periods, finishing with a student-led Exhibition in the last year. There is no external exam at this stage, so tutoring leans toward reading confidence, number sense and teaching a child to ask a real question worth investigating.",
      countryNote:
        "PYP requests connected to Shivamogga almost always come from a family newly arrived here, often for work tied to one of the district's colleges or industries, needing routines rebuilt after a mid-year move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Work is judged against lettered criteria in each subject rather than a single percentage, the Personal Project comes due in Year 5, and some schools finish with an eAssessment. Students often struggle to move past describing a topic into actually analysing it the way the criteria demand.",
      countryNote:
        "Most MYP work tied to Shivamogga belongs to a boarding student catching up during a school break, usually on science or language tasks marked against those same criteria.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, sit alongside Theory of Knowledge, an Extended Essay and internal assessment that typically counts for a fifth to a third of the final mark in each subject. The main results come out after the May exams.",
      countryNote:
        "Since no Shivamogga school offers the Diploma, families here are usually working around a boarding school's calendar in Bengaluru, Mysuru or elsewhere, not a local one.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A student combines two or more Diploma courses with career-related study, a reflective project and practical workplace skills modules. Few schools in India run it, but whatever Diploma subjects sit inside still need full depth of teaching.",
      countryNote:
        "CP comes up rarely from Shivamogga given the absence of any local IB school; tutoring, when it does, concentrates on the Diploma subjects rather than the career-related component.",
    },
  ],

  subjectsIntro:
    "A student revising IB Chemistry over the Dasara break and a student building Cambridge-level Maths on top of a state-board timetable need entirely different sessions, so we start every match from the exact subject and level rather than the words 'IB' or 'IGCSE'. From there, we look at which exam series a student is actually sitting and find a slot that fits their real school week.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Most requests land after a student hits an unfamiliar Paper 3 question their school never quite prepared them for. Early sessions usually push the exploration forward well ahead of deadline, rather than leaving it for a rushed final week." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data modelling and genuine fluency with a graphic calculator carry more weight here than algebraic manipulation ever does. The exploration is where boarding students most often lose easy marks by starting too late." },
    { name: "IB Physics", levels: "HL / SL", description: "Speed under pressure with the data booklet is usually the real limiting factor, not the physics itself. A tutor's other main job is making the Scientific Investigation's method solid enough to survive a moderator's questions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding and structure rarely trip students up; organic mechanisms further into the course do. Getting the required investigation written up against what examiners are actually looking for takes real, deliberate practice." },
    { name: "IB Biology", levels: "HL / SL", description: "Knowing the content is rarely the problem. Answering the specific command word asked, and handling the statistics an investigation needs, is what usually separates a strong grade from an average one." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams need to be accurate and paired with a current, specific example rather than a textbook one. HL students then move toward the kind of policy judgement Paper 3 rewards." },
    { name: "IB Business Management", levels: "HL / SL", description: "Students lose marks reciting theory instead of applying it to the case in front of them, so sessions work directly from past-paper cases. The Business Research Project needs a real organisation to study." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Both Paper 1's unseen commentary and Paper 2's comparative essay reward technique built through repetition, and the Individual Oral is generally where the most rehearsal time pays off." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory, pseudocode and abstract data structures get paired with actual coding practice, since the IA needs working code whose documentation genuinely matches what was built." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies referenced from the biological, cognitive and sociocultural approaches must be current and correctly cited, and sessions spend real time on structuring a long-response answer that stays coherent under time pressure." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Examiners reward a student willing to question a system critically far more than one who summarises a textbook accurately. Sessions push toward that kind of genuine evaluation." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies need specific places and figures a student can recall under pressure, not vague generalisations, and any fieldwork investigation gets checked for a method that would actually hold up." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 rewards close source analysis; Paper 2 rewards an essay that argues one thing consistently from start to finish. Both get drilled as separate skills." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Unscripted speaking and listening practice starts early, since both the individual oral and the written paper reward genuine spontaneity over rehearsed set phrases." },
    { name: "IB Language A: Kannada", levels: "SL / HL", description: "Most Shivamogga students take this as a self-taught literature course, so tutoring focuses on structuring the comparative essay and pacing the reading list realistically alongside a supervising teacher." },
  ],

  igcseSubjectsIntro:
    "No school in Shivamogga district is confirmed to teach Cambridge or Edexcel IGCSE, so most local interest comes from families raising their child's state-board or CBSE work to that standard, or supporting a child enrolled at a boarding school elsewhere. Preparation still starts from an exact paper code and tier, working back from whichever series, May-June or October-November, a student actually sits.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Students moving up from a state-board or CBSE base usually need calculator-free arithmetic speed rebuilt first, since Cambridge marking penalises a lost method step more heavily than one wrong final answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "This introduces calculus and vectors well ahead of when the IB Diploma would otherwise demand them, making it a genuinely useful bridge for a student later heading toward Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "The physics content is rarely the sticking point; rearranging equations quickly under exam pressure is. The alternative-to-practical paper gets its own dedicated sessions rather than a last-minute add-on." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and organic chemistry are taught alongside alternative-to-practical technique from the start, so neither ends up rushed in the final weeks before an exam." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and inheritance questions carry more weight on Cambridge papers than most students expect, and extended written responses need separate, deliberate drilling to pick up the marks they are worth." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "A correct diagram earns quick marks, but the harder evaluative questions, the ones Core-tier study tends to skip, are where sessions spend most of their time." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Students write and debug real Python programs rather than reading theory in the abstract, since tracing logic on paper rarely sticks until it has actually been tested against a running script." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed practice reading an unfamiliar passage, combined with directly taught summary technique, closes more of the mark gap than general vocabulary building ever manages alone." },
  ],

  regionsTitle: "Shivamogga neighbourhoods we serve online",
  regionsIntro:
    "Every session runs over video, so the areas below are context rather than a coverage map: which school catchment a family sits in, how the monsoon can affect an evening's internet, and roughly how far the nearest confirmed international school actually is.",
  regions: [
    { name: "Vinoba Nagar", note: "A settled residential pocket on the city's south side with a strong local coaching-class culture built around KCET and NEET preparation." },
    { name: "Gopala Extension", note: "An older, central locality near the main market, and usually the first place families weighing a CBSE-to-IGCSE style move come from." },
    { name: "B H Road corridor", note: "The Bangalore-Honnavar highway stretch through the city, busy enough with commercial traffic that most families prefer evening sessions once it quietens down." },
    { name: "Durgigudi", note: "A quieter locality near the Tunga riverbank, home to a number of government-service households whose children mostly attend state-board schools." },
    { name: "Ashoka Circle / Nehru Road", note: "The commercial centre of the city and within easy reach of most of Shivamogga's CBSE and ICSE schools." },
    { name: "Gandhi Bazaar", note: "One of Shivamogga's oldest trading areas, home to many of the areca and coffee trading families who account for a fair share of our enquiries." },
    { name: "Vidyanagar", note: "A newer residential layout that has grown around several private schools, where curiosity about Cambridge and IB options is rising." },
    { name: "Bhadravathi", note: "An industrial town about 20 kilometres out, built around its steel plant, where engineering families often ask specifically about IGCSE Physics and Additional Maths." },
    { name: "Shankarghatta", note: "Home to Kuvempu University, roughly 20 kilometres from the city, where several academic households base themselves while their children attend school in Shivamogga proper." },
  ],

  schoolDisclaimer:
    "We could not independently confirm any school inside Shivamogga district teaching the IB or Cambridge/Edexcel IGCSE curriculum, which is why the strip above carries none. The schools named in the clusters below sit in other cities and appear purely so families know where a physical campus can actually be found; none of it implies a partnership. IB Gram has no contract, endorsement or commercial relationship with any school named here, nor with the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Mangaluru",
      note: "About 195 kilometres west across the Western Ghats, Mangaluru has Karnataka's coastal cluster of confirmed Cambridge IGCSE schools; nobody there has been confirmed to run the IB Diploma, MYP or PYP either.",
      schools: ["The Bharath Academy", "TLC Cambridge International School", "The Cambridge International School, Adyar"],
    },
    {
      city: "Nearby: Mysuru",
      note: "Roughly 210 kilometres south, Mysuru has a small but confirmed Cambridge presence, plus a residential option just outside the city at Srirangapatna that sits both the June and January series.",
      schools: ["I Can International School", "De Paul International Residential School, Srirangapatna"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Karnataka's IB campuses sit almost entirely in Bengaluru, some 267 kilometres away, and it is where most Shivamogga boarding families eventually look once a full Diploma-level campus feels worth the distance.",
      schools: ["Inventure Academy", "Indus International School, Bengaluru"],
    },
  ],

  modesIntro:
    "Strip away the labels and every Shivamogga arrangement comes down to one format: live video, one tutor, one student, both on Indian time. What actually differs is pacing, whether that means a steady weekly class, a tighter push before an exam sitting, or something scheduled entirely around a boarding term's holidays.",
  modes: [
    {
      title: "A regular weekly class",
      description: "Same day, same time, week after week, built around whatever your child's own school day or boarding calendar actually looks like. Almost everyone who works with us starts here.",
      bullets: [
        "Tutor selection is never limited to someone who happens to live close by",
        "Covers everything from IB PYP up through Cambridge IGCSE and the Diploma",
        "Past papers get worked through and marked live, not sent back later",
        "The same tutor stays with a student through the whole term",
      ],
    },
    {
      title: "A term with a written record attached",
      description: "The weekly class stays, but now a short note follows every session and there is a proper review every few weeks, so progress is visible rather than assumed.",
      bullets: [
        "Every lesson ends with a note on exactly what was covered",
        "A real check-in every few weeks, not just a status update",
        "Suits younger PYP and MYP students who need a steady, unhurried pace",
        "Easy to add a second weekly slot as mocks approach",
      ],
    },
    {
      title: "Concentrated revision around school breaks",
      description: "A denser run of sessions during a holiday or the weeks before an exam series, working through timed past papers with fast turnaround on feedback, and timed around Shivamogga's own monsoon and festival calendar.",
      bullets: [
        "Past papers timed and marked to the current board's actual criteria",
        "Feedback comes back in days, not the following week",
        "Fits around boarding-school holiday dates and Shivamogga's festival calendar",
        "Best booked two to three weeks before a boarding term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE families in Shivamogga: who actually asks, and why",
      paragraphs: [
        "Start with the plain fact: nothing in Shivamogga district carries IB, Cambridge or Edexcel status. Schooling here runs on the Karnataka State Board almost everywhere, with a smaller CBSE and ICSE presence for professional families in areas like Vidyanagar and Gopala Extension. That absence shapes who reaches out to us and why.",
        "Four groups make up most of our Shivamogga enquiries. First, parents wanting their child's regular Maths and Science pushed toward IGCSE-level depth, often with an eventual move to a bigger city in mind. Second, families whose child already boards at a confirmed school in Mangaluru, Mysuru or Bengaluru and needs holiday-time continuity. Third, households connected to Kuvempu University or one of the district's engineering and medical colleges who have relocated mid-course. Fourth, trading families around Gandhi Bazaar and Sagar taluk considering an international curriculum for the first time.",
        "The practical effect of having no local school is straightforward: there simply is no resident specialist for something like IB Chemistry HL or Cambridge Additional Maths inside the district. Matching nationally is the only real fix, and it is a complete one. A household near Durgigudi, or out toward Bhadravathi, stops needing someone nearby and instead gets whoever in India has actually taught that exact course recently.",
        "None of this puts a Shivamogga student at a disadvantage academically. Cambridge sets one national paper regardless of postcode, and the IB moderates every Diploma script against the same global standard. A tutor who knows the current mark scheme closes the location gap entirely.",
      ],
      table: {
        caption: "Nearest confirmed IB and Cambridge campuses to Shivamogga",
        columns: ["City", "Approx. distance", "What's confirmed there"],
        rows: [
          ["Mangaluru", "195 km", "Cambridge IGCSE only"],
          ["Mysuru (incl. Srirangapatna)", "210 km", "Cambridge and Edexcel IGCSE"],
          ["Bengaluru", "267 km", "Full IB continuum plus Cambridge"],
        ],
      },
      bullets: [
        "No confirmed IB, Cambridge or Edexcel school anywhere in Shivamogga district",
        "Enquiries come mostly from upgraders, boarding families and recently relocated households",
        "A missing local pool of specialists is the whole reason national matching works",
        "Exam standards and marking are identical no matter where a student is based",
      ],
    },
    {
      heading: "Is IB or IGCSE actually harder than SSLC or PUC?",
      paragraphs: [
        "Harder is the wrong word; different is closer. Most Shivamogga schools run the Karnataka State Board, sitting SSLC at Class 10 and PUC after Class 12, with CBSE running a similar fixed-paper model. Both reward a student who can recall a known method accurately. Cambridge's Extended tier, and IB papers generally, like to present a familiar idea in an unfamiliar wrapping, which trips up students relying on memorised steps alone.",
        "Coursework is the bigger structural difference. SSLC and PUC carry practicals but almost nothing in the way of independently graded project work; CBSE has some internal assessment but nowhere near the depth of an IB Internal Assessment or IGCSE coursework component, both marked against detailed written criteria. A student switching across in Class 9 or 11 has usually never planned a piece of independent assessed work before, and building that skill takes real, dedicated time.",
        "Content depth diverges too, particularly at Diploma level: HL Maths and HL sciences go well beyond what PUC covers at the same age, and IGCSE's Core tier sits roughly at CBSE difficulty while Extended sits noticeably higher. The Grade 9 choice between the two quietly shapes how tough Class 11 will feel down the line.",
        "None of this is an argument against switching. Once families see the spread-out, criteria-based system laid out clearly against a single make-or-break year-end paper, many genuinely prefer it.",
      ],
      table: {
        caption: "Karnataka SSLC/PUC, CBSE and IB/IGCSE for a Shivamogga family",
        columns: ["Feature", "SSLC / PUC", "CBSE", "IB / IGCSE"],
        rows: [
          ["Where it's taught in Shivamogga", "Most schools in the district", "A handful of private schools", "No confirmed school locally"],
          ["How it's assessed", "Fixed paper, recall-focused", "Fixed paper, some internal marks", "Criteria-based, applied questions"],
          ["Coursework share", "Mostly practicals only", "Limited internal assessment", "20-30% in most IB subjects; IGCSE coursework varies"],
          ["Where it's recognised", "Karnataka, mostly", "Across India", "Worldwide"],
        ],
      },
      bullets: [
        "Cambridge Extended and IB papers punish memorised steps far more than SSLC or PUC do",
        "Independent assessment planning is the real gap for a Class 9 or 11 switch",
        "The Grade 9 Core-or-Extended call shapes how hard the Diploma years feel later",
        "Many families end up preferring the criteria-based workload once it's explained plainly",
      ],
    },
    {
      heading: "What does an IB or IGCSE tutor actually cost in Shivamogga?",
      paragraphs: [
        "Rates vary by subject far more than by city. A Shivamogga family asking about Cambridge IGCSE Maths pays noticeably less than a boarding household asking about IB Physics HL, simply because far fewer tutors nationally have taught the second course recently. Whatever a specific match costs gets confirmed before the trial class, never adjusted afterward.",
        "Travel never enters the calculation, since no Shivamogga lesson involves anyone driving anywhere. A tutor in Pune costs a family exactly what a tutor five minutes from Gopala Extension would, which matters a great deal given the second option barely exists for most IB subjects here.",
        "The hourly number matters less than what fills that hour. Someone who has recently marked Cambridge 0625's practical component, or guided several students through the IB Maths AI exploration, works faster than a generalist re-explaining content the student's own school has already taught.",
        "Nothing runs on a fixed-term contract. Families check in every few weeks, sessions can be paused without penalty, and if a tutor is genuinely not the right fit after the trial, we find someone else rather than asking a family to wait it out.",
      ],
      table: {
        caption: "What actually moves the price for a Shivamogga student",
        columns: ["Factor", "Effect on the rate"],
        rows: [
          ["How rare the subject is nationally", "Diploma HL and uncommon Cambridge codes cost more"],
          ["Session length and how often", "Weekly total shifts with frequency and duration"],
          ["How urgent the request is", "Last-minute exam-block bookings can carry a premium"],
          ["Travel", "Not a factor; every Shivamogga lesson is online"],
        ],
      },
      bullets: [
        "Diploma HL work runs higher nationally than IGCSE Core support, purely on scarcity",
        "No travel cost anywhere, since no Shivamogga session involves a commute",
        "Your exact rate is confirmed before, not after, the trial class",
        "No fixed-term contract; stopping or pausing carries no fee",
      ],
    },
    {
      heading: "Coaching centres, home tutors and self-study, weighed against online tutoring",
      paragraphs: [
        "Walk down any coaching lane near Ashoka Circle or B H Road and what you find is SSLC, PUC and KCET or NEET batches, because that is where the demand actually is. A batch for IB Chemistry HL or Cambridge Additional Maths would not fill even a small room; too few students in the whole district need either.",
        "Home tutors work well for ordinary board subjects out of Vinoba Nagar and Vidyanagar, but with no local IB or Cambridge school at all, someone who has genuinely taught, say, current IGCSE Physics 0625 is nearly impossible to find inside the district. A good generalist calms nerves, but cannot substitute for someone marking against the live syllabus.",
        "A disciplined student can get a long way alone on IGCSE Maths, where past papers and mark schemes sit freely online, but self-study almost always breaks down on Internal Assessment planning and on the kind of extended written answer Cambridge and IB examiners are specifically trained to reward. A second, experienced pair of eyes catches what the student cannot see in their own draft.",
        "Online tutoring's real contribution is supply, not novelty: it turns a district with effectively no specialist into one connected to the whole country, while keeping the syllabus-exact precision no coaching batch here is built to deliver.",
      ],
      table: {
        caption: "Shivamogga's real options for IB and IGCSE support",
        columns: ["Route", "Matches the exact syllabus?", "Attention given", "Where it falls short in Shivamogga"],
        rows: [
          ["Coaching batches", "No; built around SSLC, PUC or KCET/NEET", "Shared, group-paced", "No IB or Cambridge batch exists at all"],
          ["Local home tutors", "Inconsistent", "One to one", "Very few have taught the live syllabus"],
          ["Self-study alone", "Depends entirely on the student", "None", "IAs and long-form answers go unchecked"],
          ["Matched online tutor", "Chosen for the exact subject and level", "One to one", "Draws on the whole country, not a thin local pool"],
        ],
      },
      bullets: [
        "District coaching runs on SSLC, PUC and entrance-exam demand, not IB or Cambridge",
        "Almost no tutor in Shivamogga has taught a current IB or Cambridge syllabus",
        "Self-study leaves IAs and extended writing without a second, qualified reader",
        "National matching is the actual fix for Shivamogga's supply problem",
      ],
    },
    {
      heading: "Planning around Shivamogga's monsoon and school calendar",
      paragraphs: [
        "Shivamogga sits deep in the Malnad, and the monsoon runs long here, typically June through early October, with July usually the heaviest month and connectivity in some outlying areas occasionally patchy during the worst spells. Because that stretch overlaps directly with the start of most school terms, a workable tutoring plan accounts for it upfront rather than reacting to it later.",
        "Cambridge IGCSE sits its May-June and October-November series every year, and a Shivamogga-connected student takes whichever series their actual school enrols them for. IB Diploma exams for boarding students run in May, with results in early July and a resit window in November, so families here are generally working to a boarding school's calendar rather than a local one.",
        "Ganesha Chaturthi in late August or early September, and the Dasara break in October, both fall close to or right after the heaviest monsoon weeks, and many schools schedule internal exams around them. Starting IGCSE preparation in January ahead of a May-June sitting, or beginning DP revision at the start of a term break, tends to produce the steadiest results.",
        "For boarding Diploma students specifically, the holidays remain the real working window, since term-time sessions have to bend around a boarding school's own schedule. Dasara and the summer break are consistently where the most productive revision blocks happen.",
      ],
      table: {
        caption: "How Shivamogga's calendar affects tutoring",
        columns: ["Period", "What's happening", "What it means for tutoring"],
        rows: [
          ["June-early October", "Peak Malnad monsoon", "Build in slack for connectivity; avoid over-scheduling"],
          ["May-June", "Cambridge IGCSE series; IB DP exams for boarding students", "Final revision and timed past papers"],
          ["Late August-September", "Ganesha Chaturthi", "A natural short pause in most schedules"],
          ["October", "Dasara holidays", "One of the best windows for boarding-student revision"],
        ],
      },
      bullets: [
        "June to October is a long, heavy monsoon that can affect internet reliability outside the city centre",
        "Cambridge IGCSE runs May-June and October-November series",
        "IB DP boarding students sit exams in May, with resits in November",
        "Dasara and summer holidays are the strongest windows for boarding-student revision",
      ],
    },
    {
      heading: "Where do Shivamogga students go after IB or IGCSE?",
      paragraphs: [
        "Most students finishing IGCSE-level preparation or the IB Diploma while boarding elsewhere apply in more than one direction at once: engineering or medicine within India, management courses, or an undergraduate place abroad. Locally, Kuvempu University at Shankarghatta anchors higher education for the district, alongside Jawaharlal Nehru National College of Engineering and Shimoga Institute of Medical Sciences for those staying closer to home.",
        "Engineering and medical entrance in India needs Association of Indian Universities equivalence for an IB or IGCSE qualification, plus the right subject combination and level for JEE, NEET or Karnataka's own KCET. Shivamogga's coaching scene, concentrated around Ashoka Circle and B H Road, is built almost entirely around KCET rather than international-board equivalence, so this usually needs explaining clearly the first time it comes up.",
        "For study abroad, predicted grades matter more than most families expect, since universities see them well before final results are out. UK offers generally state a total IB points figure with HL minimums; US applications weigh predicted grades alongside the rest of the file; other countries run their own rules again.",
        "IB Gram stays on the academic side of this picture: subject depth, predicted-grade improvement and exam technique. We are happy to explain what a target course typically expects, so tutoring effort lands where it genuinely changes the outcome.",
      ],
      bullets: [
        "Kuvempu University, JNNCE and SIMS anchor higher education locally",
        "AIU equivalence and correct subject levels matter for JEE, NEET and KCET",
        "Shivamogga's coaching culture centres on KCET, a separate track from IB or IGCSE prep",
        "Tutoring covers subject depth and technique, not admissions consulting",
      ],
    },
    {
      heading: "IB Maths and the sciences for Shivamogga students, in detail",
      paragraphs: [
        "Analysis and Approaches fits students heading toward engineering, physical science or economics-heavy degrees, and its HL Paper 3 rewards exactly the unfamiliar problem-solving that a state-board or CBSE-trained tutor market rarely practises in depth. Applications and Interpretation leans into statistics, modelling and genuine graphic-calculator fluency, and its exploration is where students most often lose marks by starting late.",
        "Physics HL demands fast, accurate use of the data booklet and a Scientific Investigation built on a method that could genuinely stand up to questioning, not a repeated textbook experiment. Chemistry HL leans heavily on organic mechanisms and energetics once the early bonding units are done, and both subjects need marking against the actual IB rubric, not a generic science standard.",
        "Biology students generally know the material; what they lack is precision against the command word being asked, plus enough statistical grounding to make an investigation's conclusion defensible. Across all three sciences, students moving over from Karnataka State Board or CBSE tend to under-practise exactly this kind of command-word precision.",
        "With no local school teaching any of this, an online specialist working to the exact HL or SL level and current syllabus remains the fastest way to close these gaps between one school break and the next.",
      ],
      bullets: [
        "AA suits calculus-heavy, proof-based routes; AI suits statistics and modelling",
        "Physics and Chemistry HL both turn on the Scientific Investigation",
        "Biology needs command-word precision as much as raw content knowledge",
        "State-board and CBSE switchers usually know the content but under-practise command words",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and picking subjects sensibly in Shivamogga",
      paragraphs: [
        "Cambridge's Core and Extended tiers cap different grade ranges, and this choice matters for two reasons here: it sets the ceiling on a Grade 10 result, and it decides how steep the climb into DP-level sciences and maths will feel later for anyone boarding elsewhere.",
        "Extended Mathematics 0580, paired with Additional Mathematics 0606 where it's offered, builds the strongest foundation toward IB Maths AA HL. Extended-tier sciences work the same way, easing the jump into DP Physics or Chemistry HL because the depth already sits closer to what the Diploma assumes.",
        "A Shivamogga student coming from a state-board or CBSE background generally needs the tier system explained from first principles, since it is not a distinction their own curriculum makes. Tutoring starts from wherever a student's content knowledge genuinely is, not from an assumption that Cambridge-style question technique is already familiar.",
        "For families later connecting with an Edexcel rather than Cambridge school, the two boards phrase Foundation and Higher tier questions differently even where the underlying maths overlaps heavily, so a tutor who knows both matters more than families usually expect.",
      ],
      bullets: [
        "Core versus Extended affects both the grade ceiling and later DP readiness",
        "Additional Mathematics 0606 is the strongest bridge into IB Maths AA HL",
        "Students from a state-board or CBSE base need the tier system explained from scratch",
        "Edexcel and Cambridge diverge on technique even where the content overlaps",
      ],
    },
  ],

  tutorsIntro:
    "These are tutors already teaching IB PYP through Diploma subjects, and Cambridge or Edexcel IGCSE, to families connected to Shivamogga. Every match is built around the exact syllabus, level and exam session a student is sitting, since every lesson here happens live online rather than in your home.",

  process: [
    { title: "Send us the brief", description: "Board or programme, subject, level, current or predicted grade, and the times that actually suit your household in Shivamogga." },
    { title: "Get a shortlist", description: "Tutors chosen for syllabus fit first, since nothing local matches, each one explained plainly, not just profiles dropped in your inbox." },
    { title: "Try a free class", description: "A real topic, worked through live online, at no cost and with no obligation to continue." },
    { title: "Approve the first month", description: "The tutor sets out topics, pacing and how they'll report progress; you sign off or ask for changes." },
    { title: "Keep the weekly rhythm going", description: "A fixed online slot, a check-in every few weeks, and a straightforward re-match whenever something isn't working." },
  ],

  whyPoints: [
    { title: "We match on syllabus, not on label", description: "Tutors are chosen for the exact subject and level or Cambridge code and tier, never a broad description of 'IB' or 'IGCSE'." },
    { title: "Built for a district with nothing local", description: "Shivamogga has no IB, Cambridge or Edexcel school, so we search the entire country rather than a nonexistent local pool." },
    { title: "Proof before payment", description: "The free trial lets your child judge a tutor on a real lesson, so the decision is based on what actually happened." },
    { title: "Assessed work stays genuinely the student's", description: "Tutors guide IAs, coursework and the Extended Essay, and never write any part of them." },
    { title: "Progress you can actually see", description: "A note after every session, and a proper review every few weeks, so nothing is left to guesswork." },
    { title: "Nothing locks you in", description: "No school or board affiliation, no long contract, and a re-match the moment a fit stops working." },
  ],

  faqs: [
    { question: "How do I get my child an IB tutor in Shivamogga?", answer: "Give us the programme, subject, level and exam series, and we build a shortlist around that syllabus specifically. Because Shivamogga has no local IB school, this matching runs nationally rather than by location, and once a tutor suits, we fit the schedule to your household. Every match opens with a free trial class, and if it isn't right, we try again." },
    { question: "Are there Cambridge or Edexcel IGCSE tutors for Shivamogga students?", answer: "Yes, taught entirely online rather than through a home visit, since neither board is taught at any confirmed school in the district. Matching goes by the actual paper code and tier, Maths 0580 Extended or Chemistry 0620 being common requests, using genuine board past papers and mark schemes throughout." },
    { question: "Will a tutor come to our house in Shivamogga?", answer: "No, not in Shivamogga or anywhere else outside Gurugram and parts of Delhi NCR. Every lesson here runs live, one to one, over video with a shared screen for working through problems together. It is real, personal tuition from home; it simply isn't delivered by someone walking through your door." },
    { question: "How much does IB or IGCSE tutoring cost in Shivamogga?", answer: "It depends on the subject, the level, session length and how recently the tutor taught that exact syllabus, and your specific rate is confirmed before the trial starts. IB Diploma HL subjects generally cost more than IGCSE Core work. Nothing is added for travel, since every session is online, and there's no fixed-term contract locking you in." },
    { question: "Does any school in Shivamogga actually offer IB or IGCSE?", answer: "Not currently. No school across the district has confirmed IB authorisation or Cambridge/Edexcel IGCSE status; local schooling runs mostly on the Karnataka State Board, with a smaller CBSE and ICSE presence. Families wanting a physical campus most often look toward Mangaluru, Mysuru or Bengaluru." },
    { question: "My child studies at a CBSE or state-board school here but wants IGCSE-level Maths or Science. Can that work?", answer: "Yes, and it's one of our more common Shivamogga requests. Tutoring builds existing content knowledge up to IGCSE Extended-tier depth and question style using real Cambridge past papers, useful preparation whether or not the family later moves schools." },
    { question: "Can we try a lesson before committing to anything?", answer: "Yes, every match starts with a free trial class on a real topic from your child's own syllabus, at no cost and no obligation. The tutor then sends a short first-month plan, and you decide whether to continue, ask for changes, or try someone else entirely." },
    { question: "Can a tutor write or help with my child's IB Internal Assessment?", answer: "Guide it, not write it. That covers helping pick a workable research question, explaining exactly what each criterion rewards, planning the data collection and giving honest feedback on drafts. Writing or rewriting any part of it breaks IB academic integrity rules, so it's a hard no on our end." },
    { question: "Which IB Diploma subjects do you cover for Shivamogga families?", answer: "The main ones boarding students from Shivamogga ask about: Maths Analysis and Approaches or Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, plus Theory of Knowledge and the Extended Essay." },
    { question: "What about IB MYP or PYP, not just the Diploma?", answer: "Covered as fully as DP. MYP tutoring focuses on criterion-based analysis in science and language subjects and on the Personal Project's process journal; PYP tutoring builds reading, writing, number sense and the research skills the Exhibition eventually needs." },
    { question: "Can online tutoring really replace in-person help here?", answer: "For Shivamogga, it isn't really a comparison, since no local specialist exists for these subjects to begin with. A shared whiteboard, live-marked past papers and recorded worked examples cover almost everything a tutor sitting beside your child would do, while opening the field to specialists nationwide." },
    { question: "How do you actually vet tutors for Shivamogga students?", answer: "Every tutor is checked on qualifications, recent teaching experience in that exact subject and level, and how they approach assessment criteria, before ever meeting a family. Given Shivamogga has no local IB or Cambridge school, we specifically look for someone who has taught the current syllabus recently. The free trial then lets you judge fit yourself." },
    { question: "When's the right time to start tutoring for a Shivamogga student?", answer: "Ideally at the start of the course: Class 11 for the Diploma, Grade 9 for Cambridge IGCSE, which leaves room to fix gaps before internal exams and IA deadlines pile up. Starting later still helps, with sessions concentrated on the highest-value topics and past papers before the actual exam." },
    { question: "We're moving from Karnataka State Board or CBSE to IGCSE. Where does a tutor actually help?", answer: "Mostly with question style rather than content, since that's the real gap for most switchers here. Command words like 'explain', 'evaluate' and 'justify' need direct teaching, and starting that the term before the switch works better than starting after it." },
    { question: "Does scheduling account for Shivamogga's monsoon?", answer: "Yes. Weekday evenings after school and weekend mornings are the usual slots, and sessions during the heaviest June to October weeks build in a bit of buffer for connectivity in areas outside the city centre where it can be less reliable." },
    { question: "What if the tutor isn't the right fit?", answer: "Tell us, and we find someone else. We check in with families every few weeks specifically to catch this early, rather than expecting a child to push through with someone who isn't working. There's no contract, so pausing or stopping carries no penalty either." },
    { question: "Is IB Gram connected to any Shivamogga school, or to the IB or Cambridge directly?", answer: "No, on both counts. IB Gram is an independent tutoring service with no affiliation to, or endorsement from, any school, the International Baccalaureate Organisation, Cambridge Assessment International Education or Pearson Edexcel. School names mentioned for nearby cities are there for honest context, not partnership." },
    { question: "Can you help with Kannada or Hindi as a second language?", answer: "Yes. Hindi B is covered at both Standard and Higher Level, and Kannada is usually taken by Shivamogga students as a self-taught IB Language A literature course, where tutoring focuses on structuring the comparative essay and pacing the reading realistically, rather than teaching the language itself from the beginning." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works across Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home tuition is actually available." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation, compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles sorted by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial class." },
    { label: "IB and IGCSE tutoring in Mangaluru", href: "/mangaluru/", description: "The nearest confirmed Cambridge IGCSE cluster to Shivamogga." },
    { label: "IB and IGCSE tutoring in Mysuru", href: "/mysuru/", description: "Includes the Srirangapatna boarding option near Mysuru." },
    { label: "IB and IGCSE tutoring in Bengaluru", href: "/bengaluru/", description: "Karnataka's main IB and Cambridge hub, where many Shivamogga boarders study." },
  ],

  closingHeading: "Start with a free trial class for your Shivamogga student",
  closingBody:
    "Tell us the board or programme, the subject and level, where your child currently stands, and when your household is actually free. You'll get back a shortlisted tutor, a note on their background, and trial slots that fit your routine, all online, at no cost and no commitment either way. Email ibgram24@gmail.com or WhatsApp +91 7439 368 115.",
};
