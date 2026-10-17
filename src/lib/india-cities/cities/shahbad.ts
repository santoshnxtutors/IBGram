import type { CitySeoPage } from "../types";

/**
 * /shahbad/ - IB and IGCSE tutoring page for Shahbad (Shahabad Markanda), Kurukshetra district,
 * Haryana. Not the Karnataka Shahabad (/shahabad/) or Hardoi's Shahabad (/shahabadc-hardoi/).
 * Online-only delivery; no IB or Cambridge/Edexcel school confirmed in town, so stripSchools is empty
 * and clusters point at the Chandigarh tricity and Delhi NCR, reusing names from thanesar.ts.
 */
export const shahbad: CitySeoPage = {
  slug: "shahbad",
  countryName: "Shahbad",
  countryNameLong: "Shahbad Markanda, Kurukshetra, Haryana",
  demonym: "Shahbad",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after school and tuition-free Sundays work best here, with paddy-harvest weeks, winter fog on the GT Road and Gita Jayanti all kept in view when we fix the slot",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.1667, longitude: 76.8667 },
  wikipedia: "https://en.wikipedia.org/wiki/Shahabad,_Kurukshetra",
  alternateNames: ["Shahabad Markanda", "Shahbad Markanda", "Shahabad Kurukshetra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shahbad | Online Private Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition for Shahbad Markanda students in Kurukshetra district: PYP to DP, Cambridge and Edexcel, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition in Shahbad",
  heroEyebrow: "ONE-TO-ONE IB & IGCSE TUITION FOR SHAHBAD MARKANDA",
  heroSubtitle:
    "Private tuition from home is what most Shahbad Markanda parents ask us for, and for IB and Cambridge subjects it can only be done on a screen. No tutor walks into a house in Kurukshetra district. Instead the subject and level are matched against teachers anywhere in India, and the lesson runs live on video in your own evening, after school and the usual HBSE or CBSE homework are out of the way.",
  primaryKeyword: "IB and IGCSE tutors in Shahbad",
  imageAltText: "Student in Shahbad Markanda working through an IGCSE Physics paper with a tutor on a video call",
  secondaryKeywords: [
    "IB tutor Shahbad",
    "IGCSE tutor Shahbad",
    "IB home tuition Shahbad",
    "IGCSE home tuition Shahbad",
    "IB private tuition Shahbad",
    "IB Maths tutor Shahbad",
    "IGCSE Maths tutor Shahbad",
    "IB Physics tutor Shahbad",
    "IB Chemistry tutor Shahbad",
    "IB Biology tutor Shahbad",
    "IB DP tutor Shahbad",
    "IB MYP tutor Shahbad",
    "IB PYP tutor Shahbad",
    "IGCSE online tuition Shahbad",
    "Cambridge IGCSE tutor Shahbad Markanda",
    "IB tutor Kurukshetra district",
    "online IGCSE tutor Ambala Cantt",
    "IB tutor Shahabad Markanda Haryana",
    "IGCSE tutor near Ladwa Road Shahbad",
  ],

  heroTrustPoints: [
    "Every shortlist is built from the IB subject and level or the Cambridge/Edexcel code, not from a vague subject name",
    "Lessons are online only; home visits belong to Gurugram and parts of Delhi NCR and nowhere in Kurukshetra district",
    "A free trial lesson comes before any commitment, followed by a written note after every session",
    "An independent service with no link to any Shahbad school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Online only", label: "Live video, never a visit" },
    { value: "PYP to DP", label: "All four IB stages covered" },
    { value: "IGCSE too", label: "Cambridge and Edexcel codes" },
    { value: "Free trial", label: "Judge a lesson before paying" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a Shahbad Markanda family",
    paragraphs: [
      "Anyone looking for private tuition in Shahbad Markanda will find plenty: batches for Class 10 board maths, medical and engineering coaching rooms near the grain market, home tutors who teach every subject from one flat. What you will not find, as far as we could confirm, is a school in town that is authorised to teach the IB or to enter pupils for Cambridge or Edexcel IGCSE. The families who write to us are almost always in one of three positions, and each has a different reason for asking.",
      "Some are parents of children already enrolled at an IB or IGCSE school in the Chandigarh tricity or Delhi NCR, whether as boarders or because the family is shifting. Some are Ambala Cantonment defence households who move every few years and want a curriculum a child can carry between postings. The rest are HBSE or CBSE families who have read about the IB Diploma and want to know what the jump involves before committing a Class 9 or Class 11 year to it.",
      "In all three cases the lesson itself is simple. One tutor, one student, a shared screen and a marked past paper. Where Shahbad matters is in how the tutor is found: with nobody in Kurukshetra district teaching these courses, the search is run across India and the closest fit for the exact subject and level is chosen, wherever that person lives. This is why IB and IGCSE tutors in Shahbad are, for the moment, tutors who teach you over a video link.",
      "We are an independent service. We are not part of the IB, Cambridge Assessment International Education, Pearson or any school, and our tutors never write a student's Internal Assessment, Extended Essay, TOK essay or coursework. They teach, question, explain and mark practice work.",
    ],
    bullets: [
      "IB tutoring from PYP to the Diploma for boarders, movers and families still deciding",
      "Cambridge and Edexcel IGCSE help matched to the exact code and tier",
      "Live one-to-one video sessions in Indian Standard Time",
      "A written plan after the free trial and a short note after each lesson",
      "Online only, because home visits run solely in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Shahbad Markanda runs any of the four IB stages, so a family meets the programme through a school elsewhere or a coming move. These are the stages as a tutor actually meets them, and what each one tends to look like for a child connected to Kurukshetra district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A PYP classroom is organised around big questions that cut across subjects, with six transdisciplinary themes and a closing Exhibition in the last year. Marks are largely absent. What a tutor adds is fluency in reading and number work, and the habit of turning a curiosity into a question that can actually be investigated.",
      countryNote:
        "Most PYP requests from Shahbad Markanda come from a family about to relocate, and the early sessions go into rebuilding routine and reading stamina rather than covering new content.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every MYP subject is graded on four separate criteria, and the Personal Project at the end of the programme is a year-long piece of self-directed work. Students used to a single HBSE or CBSE percentage often find it odd that a report shows several small scores per subject. The common stumbling block is describing when the criterion asks for explaining or evaluating.",
      countryNote:
        "A Shahbad child in an MYP school elsewhere usually returns home for the long summer break, which makes June the natural month for catching up on criterion-based tasks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma pairs six subjects, three at Higher Level and three at Standard, with Theory of Knowledge, the Extended Essay and a Creativity, Activity, Service record. Internal assessments carry a sizeable share of most subject grades. The main May exam session ends with results in early July.",
      countryNote:
        "With no Diploma school near Shahbad, DP tutoring for the town means supporting a boarder or a family that has just moved, so the tutor works to the other school's term dates.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP students study a smaller number of Diploma courses alongside a career-related study and a reflective project. Few Indian schools offer it, but the Diploma subjects inside it are taught at full depth and need the same close attention to command words and mark schemes.",
      countryNote:
        "Enquiries tied to Shahbad are rare. When one arrives, tutoring simply concentrates on the Diploma courses the student has already chosen.",
    },
  ],

  subjectsIntro:
    "A request from Shahbad Markanda is never just 'IB help'. It names a subject, a level and an exam session: Physics HL for May, or Economics SL with an exploration due in January. We begin there and then find the weekly time that fits around school hours and the paddy-season calendar.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Suits students who enjoy algebraic proof. HL Paper 3 is the real separator, and the exploration topic should be fixed long before the deadline season." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology carry this course. Sessions focus on setting up a graphic calculator properly and reading a data set critically." },
    { name: "IB Physics", levels: "HL / SL", description: "Two long papers reward speed in rearranging equations. The Scientific Investigation needs a method a moderator could repeat, which students used to textbook practicals underestimate." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry carries over comfortably from CBSE, but equilibrium, energetics and organic reaction pathways need fresh practice in IB style." },
    { name: "IB Biology", levels: "HL / SL", description: "Marks follow the command term, so students practise the difference between outline, explain and evaluate on real past questions." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy is the entry ticket; the extra marks come from weighing a policy against its likely side effects in a real economy." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward applying a model to the named firm, so sessions use published past cases rather than textbook definitions." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1 commentary and Paper 2 comparison are learnt by timed repetition, and the Individual Oral gets its own rehearsal block." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms are written, traced and then actually run, since the internal assessment depends on working code and clear documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Accurate recall of key studies helps, but the grade turns on structuring a short response under time pressure." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies need named places and figures; the fieldwork write-up must show a method that would survive scrutiny." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and sustained argument are taught as two separate skills before they are combined on a full paper." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Register and text type usually cost the first marks; the oral is rehearsed with unscripted conversation on cultural themes." },
    { name: "IB Punjabi B", levels: "SL", description: "For families from the Punjabi-speaking belt who want a language they already use at home counted towards the Diploma, taught by a tutor who holds the current guide." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Taught as a habit of asking how we know, with practice on exhibition objects and prescribed titles, never by supplying essay text." },
  ],

  igcseSubjectsIntro:
    "Students here who ask about IGCSE are usually in a Cambridge or Edexcel classroom somewhere else, or are considering a move from HBSE or CBSE before Class 9. Their tutor works from the syllabus code and tier their school has fixed, with the May-June or October-November session set by that school.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Students trained on board-style long calculations often lose time on the non-calculator paper; Extended punishes that more than a wrong final answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus and vectors arrive early, which makes IB Maths AA HL feel like a continuation instead of a leap." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Content is manageable; the loss comes from unit slips and from the alternative-to-practical paper, which gets its own drills." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and qualitative analysis are practised alongside the written descriptions of practical work." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Heredity and ecology questions are long, and most gained marks come from structured extended answers." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams earn the early marks, and the evaluation questions separate the top grades." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Paper 2 pseudocode and Python are practised at a keyboard, because reading a program is not the same as writing one." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed reading on unseen passages and a step-by-step method for summary writing do more than vocabulary lists." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Answers must refer to the business in the case, so practice is built around released case material." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Students strong in conversational Hindi still need drilling on formal letter and essay structure for the writing paper." },
  ],

  regionsTitle: "Shahbad Markanda and nearby areas our online IB and IGCSE tutors cover",
  regionsIntro:
    "Delivery is the same everywhere, a video call, so these places matter for context: where schools sit, how the GT Road shapes the school run, and what a typical evening looks like around the grain market or the sugar mill.",
  regions: [
    { name: "Grand Trunk Road belt", note: "The busy NH-44 corridor through town, whose evening traffic often decides when students get home from tuition or from Ambala." },
    { name: "Anaj Mandi area", note: "The grain market zone, noisy in the paddy arrival season, so a quiet room matters for an online lesson." },
    { name: "Railway Road", note: "Close to the station on the Delhi-Ambala line, convenient for families who commute by train for work or school." },
    { name: "Ambala Road side", note: "The northern approach, where parents with Ambala Cantonment ties often live and compare school options in both towns." },
    { name: "Ladwa Road", note: "The eastern link towards Ladwa and Yamunanagar, with a mix of older housing and new plots." },
    { name: "Markanda riverbank", note: "Low-lying near the seasonal Markanda, where monsoon water can disrupt movement but not an online class." },
    { name: "Sugar mill side", note: "A working neighbourhood tied to the cooperative mill, with a strong CBSE and HBSE school base." },
    { name: "Pipli", note: "A junction town south on the highway, a common reference point for people travelling to Kurukshetra University." },
    { name: "Ismailabad", note: "A block town to the south-east with a rural, farm-based economy and a small private school sector." },
    { name: "Ambala Cantonment", note: "The large military station roughly 20 km north, source of many defence families who consider portable curricula." },
    { name: "Thanesar and Kurukshetra", note: "About 22 km south, home to Kurukshetra University and NIT, where many local families look for higher education." },
  ],

  schoolDisclaimer:
    "No school in Shahbad Markanda is named as an IB or Cambridge/Edexcel centre on this page because we could not confirm one. Schools listed in other cities are given only as places families from Haryana sometimes send a child. IB Gram has no business link, sponsorship or endorsement arrangement with any of them, nor with the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Shahbad Markanda and Kurukshetra district",
      note: "HBSE and CBSE schools make up the local system. Our checks did not turn up an IB or Cambridge/Edexcel centre, so tutoring here means finding a specialist from outside the district.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh tricity",
      note: "About 75 km away by road, and the closest group of schools running international curricula. Families from Ambala and Kurukshetra most often look here first, either for admission or for a boarding plan.",
      schools: ["Strawberry Fields High School, Chandigarh (IB)", "Oakridge International School, Mohali (IB and Cambridge IGCSE)"],
    },
    {
      city: "Nearby: Delhi and Gurugram",
      note: "A three-hour drive or a train ride down the GT Road corridor, with a wide set of IB and Cambridge schools. Families who relocate for work usually end up here.",
      schools: ["Pathways World School, Aravali (IB)", "GD Goenka World School (IB and Cambridge IGCSE)"],
    },
    {
      city: "Nearby: Ambala and Karnal",
      note: "Both are larger neighbours with CBSE and ICSE choices, but we could not confirm an IB or IGCSE centre in either, so we name none.",
      schools: [],
    },
  ],

  modesIntro:
    "Whatever the label, a Shahbad lesson runs the same way: video call, one tutor, one learner, Indian time. What changes is how often. Some families want one steady hour a week, some want two before an exam. Nobody visits your door here; that remains a Gurugram and parts-of-Delhi-NCR service.",
  modes: [
    {
      title: "A fixed weekly hour",
      description:
        "A single slot each week with the same tutor, set around school, HBSE or CBSE homework and any coaching batch your child already attends.",
      bullets: [
        "Matching is by syllabus code and level, not by distance",
        "Works for MYP, DP and IGCSE alike",
        "Past papers are marked live on the call",
        "The same tutor continues from week to week",
      ],
    },
    {
      title: "Weekly lessons with a paper trail",
      description:
        "The same weekly hour, plus a short written note after each session and a longer review every few weeks, which suits parents who like to see progress in black and white.",
      bullets: [
        "A note on topics, errors and homework after every lesson",
        "Plan adjusted at each review",
        "A good fit for PYP and MYP students on a slow, steady pace",
        "A second weekly slot can be added before mocks",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "Two or three lessons a week in the stretch before an exam series or a boarding school's mocks, with timed papers followed by prompt feedback.",
      bullets: [
        "Timed papers marked against the official criteria",
        "Feedback within a few days rather than weeks",
        "Dates planned around Diwali, Lohri and the harvest season",
        "Best booked two to three weeks before the series",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools and families are connected to Shahbad Markanda?",
      paragraphs: [
        "Within Shahbad Markanda itself the answer is that we know of no authorised IB school and no Cambridge or Edexcel IGCSE centre. The local picture is HBSE and CBSE, with a handful of private schools and older government institutions, plus the colleges in town such as Markanda National College. We would rather say that plainly than list a name we cannot stand behind.",
        "The families who reach out cluster into three groups. Defence and other transferable-job households around Ambala Cantonment want a curriculum their child can keep following when the posting changes. Parents of a boarder in the Chandigarh tricity or Delhi NCR need holiday-time help. And local HBSE or CBSE parents are curious about the Diploma or IGCSE before Class 9 or Class 11.",
        "For each group the underlying problem is the same: there is no one nearby who has taught the IB Diploma or marked a Cambridge paper this year. Online matching fixes this by searching nationwide for someone who has taught that exact course and level recently, not for someone who happens to live near the Grand Trunk Road.",
        "That matters because IB and IGCSE tutors in Shahbad cannot be chosen from a local shortlist. The examiners do not care where a script was written. A Chemistry 0620 paper from Ladwa Road is marked against the same scheme as one from a Mumbai international school, so what counts is how well the tutor knows that scheme.",
      ],
      table: {
        caption: "Where Haryana families connected to Shahbad Markanda find IB or Cambridge schooling",
        columns: ["Place", "Rough distance", "What it offers"],
        rows: [
          ["Shahbad Markanda itself", "0 km", "HBSE and CBSE, no confirmed IB or IGCSE centre"],
          ["Ambala and Karnal", "20 to 55 km", "CBSE and ICSE, no international centre we could confirm"],
          ["Chandigarh tricity", "About 75 km", "Several IB and Cambridge schools, day and boarding"],
          ["Delhi and Gurugram", "About 170 km", "The widest set of IB and Cambridge schools"],
        ],
      },
      bullets: [
        "We found no IB or Cambridge/Edexcel school inside the town",
        "Enquiries come from defence families, boarders and curious HBSE or CBSE parents",
        "Nationwide matching replaces a local shortlist that does not exist",
        "Examiners mark every script to one standard wherever it was written",
      ],
    },
    {
      heading: "How do HBSE and CBSE compare with IB and IGCSE for a Shahbad student?",
      paragraphs: [
        "The first difference a Shahbad student notices is the question style. HBSE and CBSE papers lean on recall of a textbook chapter. An IGCSE Extended or IB question will often take a familiar idea and put it in an unfamiliar setting, then ask the student to explain, justify or evaluate. Students who learnt answers by heart tend to freeze on the first such question.",
        "The second difference is how marks are earned over time. Under HBSE and CBSE, one board exam in March carries nearly everything for Class 10 and 12. The IB spreads credit across internal assessments, orals, practical work and a final examination session, and IGCSE coursework or practical papers play a smaller but similar part. This favours steady workers over last-minute crammers.",
        "Depth is the third. IB Maths and Science at Higher Level go beyond what CBSE Class 12 covers in places, and IGCSE Extended sits a notch above Class 10. A student who finishes HBSE Class 10 and joins a Diploma programme finds the first term demanding, which is exactly when a tutor with current knowledge of the course helps most.",
        "None of this makes the move impossible. Many Haryana families find, once they compare, that the spread-out workload suits their child better than a single high-stakes March paper.",
      ],
      table: {
        caption: "What changes between the boards a Shahbad family compares",
        columns: ["Feature", "HBSE", "CBSE", "IB / IGCSE"],
        rows: [
          ["Where offered", "Most local schools", "Several private schools", "Not in town; reached by moving or boarding"],
          ["Question style", "Textbook recall", "Mix of recall and application", "Unfamiliar contexts, command terms"],
          ["Internal marking", "Small", "Modest practical and project marks", "Large in IB; coursework or practicals in IGCSE"],
          ["Recognition abroad", "Mainly Indian universities", "Mainly Indian universities", "Widely recognised by universities overseas"],
        ],
      },
      bullets: [
        "Unfamiliar wording catches rote learners first",
        "Credit builds across two years, not one March paper",
        "Higher Level courses go beyond Class 12 in places",
        "Core versus Extended is a decision worth making carefully",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost in Shahbad Markanda, and what drives it?",
      paragraphs: [
        "We do not publish a price list, because the figure depends on several things that vary between families. The biggest are the subject and level, and how few tutors nationwide have taught it recently. IB Physics HL or Maths AA HL has a narrower pool than IGCSE Core subjects, and a tutor who sat as an examiner or recently coached the same internal assessment will charge accordingly.",
        "Session length and frequency also matter. A single weekly hour costs differently from three lessons a week before mocks, and some families prefer a longer double session at weekends. The third factor is the tutor's depth of experience with your child's specific syllabus code, something we ask about directly before anyone is shortlisted.",
        "Because lessons are online, there is no travel cost to put into a Shahbad bill. A tutor in Bengaluru and one in Chandigarh are priced the same way. The rate for your family is given in writing before the free trial, and it does not change after the trial.",
        "There is no minimum term. If a match does not work you can switch tutors without penalty, and pausing for a harvest fortnight or a family wedding costs nothing.",
      ],
      bullets: [
        "Subject, level and tutor scarcity matter more than location",
        "More lessons a week and longer sessions change the monthly figure",
        "No travel cost ever enters a Shahbad quote",
        "Rates are in writing before the trial and no long contract applies",
      ],
    },
    {
      heading: "Online tuition, coaching centres, local tutors or self-study: what suits a Shahbad student?",
      paragraphs: [
        "Walk around the Anaj Mandi and Railway Road areas and the coaching boards advertise board-exam batches, NEET and JEE foundations and Olympiad classes. These work well for the subjects they target. None targets IB Chemistry HL, IGCSE Additional Mathematics or the Extended Essay, because the demand in town is too small to fill a classroom.",
        "Private home tutors are easy to find for ordinary school subjects, and a good one can lift a Class 9 student quickly. The gap appears when the syllabus changes. A teacher who has not recently taught the IB Diploma, or who has never marked a Cambridge alternative-to-practical paper, can only guess at what an examiner wants.",
        "Self-study is more feasible than people assume for IGCSE Mathematics, as past papers and mark schemes are widely available online. It falls down on extended writing, internal assessments and orals, where a second reader is essential.",
        "A matched online tutor combines the strengths of the other three: individual attention, exam precision and a free choice of teacher from across the country. It does not replace school, but it fills the exact gap that Shahbad leaves open.",
      ],
      table: {
        caption: "Four routes compared for IB and IGCSE support in Shahbad Markanda",
        columns: ["Route", "Syllabus match", "Attention", "Main weakness"],
        rows: [
          ["Local coaching batch", "Aimed at board and entrance exams", "Group", "No batch exists for IB or IGCSE content"],
          ["Local home tutor", "Varies widely", "One to one", "Few have taught the international courses"],
          ["Self-study", "Depends on the student", "None", "No reader for orals, IAs or extended writing"],
          ["Matched online tutor", "Chosen for the code and level", "One to one", "Needs a quiet room and a stable connection"],
        ],
      },
      bullets: [
        "Local coaching serves HBSE, CBSE and entrance exams, not IB or IGCSE",
        "Home tutors rarely have recent experience of the Diploma",
        "Self-study stalls at internal assessments and extended answers",
        "Online matching reaches tutors who actually teach the course",
      ],
    },
    {
      heading: "How do the harvest, GT Road fog and Gita Jayanti shape a Shahbad study year?",
      paragraphs: [
        "The calendar here is set by the land. Paddy arrives in the Anaj Mandi through October and early November, and rice mills in town run at full tilt. Households tied to farming or trade are busy, evenings are shorter, and smoke from stubble burning sometimes settles across the region, which is not kind to students with asthma. Plan lighter weeks, not heavier ones, for this stretch.",
        "Winter brings dense fog on the Grand Trunk Road from December into January, and schools sometimes delay their start. Exams do not wait: CBSE and HBSE boards arrive in February and March, mocks for the IB May session fall in the same weeks, and IGCSE entries for May-June are usually closed by then. Early mornings suit the fog badly, so we favour late-afternoon and evening slots.",
        "Kurukshetra's religious calendar also touches the town. Gita Jayanti in the winter months draws visitors to the region, and traffic towards Thanesar thickens. Solar eclipses used to bring huge bathing crowds. Diwali, Lohri, Teej and Gurpurab are all observed locally, so we agree a pause in advance rather than lose a lesson.",
        "Summer is hot, with the Markanda low and then, from July, prone to rising in heavy monsoon spells. Roads can flood, schools may close, and an online lesson is the one thing that keeps running. Cambridge's October-November session and the IB's November exams for retakers sit just after the festival season.",
      ],
      table: {
        caption: "How the Shahbad Markanda year shapes a tutoring plan",
        columns: ["Period", "What happens locally", "Planning advice"],
        rows: [
          ["Oct to early Nov", "Paddy harvest, mill rush, stubble smoke", "Lighter weeks; avoid cramming into evenings when families are busiest"],
          ["Dec to Jan", "Dense fog on the GT Road, Gita Jayanti crowds", "Use late afternoon slots, not early mornings"],
          ["Feb to Mar", "HBSE and CBSE boards, IB mocks", "Raise frequency before mocks; send papers early"],
          ["Jul to Sep", "Monsoon, Markanda in spate, flooded roads", "Online lessons continue untouched; keep a back-up connection"],
        ],
      },
      bullets: [
        "Paddy season fills Anaj Mandi evenings and changes family routine",
        "Fog and board-exam season overlap from December to March",
        "Festivals and local fairs are agreed as pauses in advance",
        "Flooded roads do not affect an online lesson",
      ],
    },
    {
      heading: "Where do Shahbad students go after IB or IGCSE?",
      paragraphs: [
        "A student who finishes IGCSE or the Diploma has several routes. Many stay in India: Kurukshetra University and NIT Kurukshetra are about 22 km south, Panjab University is in Chandigarh, and Delhi University, Ashoka and the private universities of the NCR draw large numbers. Others look abroad at the UK, Canada, Australia and the United States.",
        "For Indian degrees, the key step is equivalence. The Association of Indian Universities issues the document that treats an IB Diploma or IGCSE-plus-A-Level record as equal to Class 12. CUET-UG is the entrance route to central universities, and JEE Main or NEET-UG eligibility depends on having studied the required subjects, so check the subject combination early.",
        "Overseas applications run on predicted grades. UK universities issue offers in points or grade bands and ask for specific Higher Level subjects. US admissions use predicted grades as one piece alongside essays and activities. Each country has its own conversion, and we explain the typical expectations for a course without pretending to run admissions.",
        "IB Gram does not manage applications and does not guarantee a place anywhere. Tutors concentrate on the academic side: closing gaps, practising command terms, and lifting a predicted grade through honest feedback on past papers.",
      ],
      bullets: [
        "Kurukshetra University, NIT Kurukshetra and Chandigarh institutions are close by",
        "AIU equivalence is the first paperwork step for Indian courses",
        "CUET-UG, JEE and NEET eligibility depend on the exact subject combination",
        "Predicted grades carry real weight for overseas offers",
      ],
    },
    {
      heading: "IB Maths AA or AI, and how are the sciences taught for Shahbad students?",
      paragraphs: [
        "Most HBSE and CBSE students are comfortable with algebra and trigonometry, so Analysis and Approaches feels familiar for those who like proofs and calculus. Applications and Interpretation suits a student who prefers data, probability and technology, and who may be headed to business, psychology or social sciences. The choice is less about ability than about what comes next.",
        "In Physics, Chemistry and Biology the content is not the main hurdle. The Internal Assessment is. A student must design, run and write up an investigation that stands up to a moderator, and a copied textbook practical will not. Tutors help with research questions, error analysis and presenting uncertainty, without ever drafting the report.",
        "Paper timing is the next trap. Physics HL has long multi-part questions, Chemistry HL leans on organic mechanisms, and Biology wants precise terminology. We practise these with timed past papers, marked line by line against the published scheme.",
      ],
      bullets: [
        "Maths AA suits proof and calculus lovers; AI suits data and modelling",
        "Science internal assessments need original method and honest error analysis",
        "Timed past papers build speed and command-term accuracy",
        "Tutors guide the work but never write any assessed piece",
      ],
    },
    {
      heading: "Core or Extended: choosing IGCSE tiers and subjects from Shahbad",
      paragraphs: [
        "Cambridge sets two tiers in many subjects. Core caps the grade lower, while Extended opens the highest grades. A student who may continue to IB Diploma Maths or Science HL should aim for Extended where the school allows it, because the content is a better base and the Class 11 jump will be smaller.",
        "Subject choice tends to follow future plans. A student heading towards engineering benefits from Mathematics, Additional Mathematics, Physics and Chemistry. A future commerce student can pair Economics and Business Studies with Mathematics. Languages count too: Hindi as a second language is common among Haryana families.",
        "If the child already attends a Cambridge school elsewhere, the tier and subject list are set, and tutoring improves what the school has chosen rather than reopening the decision. For families still deciding, a trial lesson on an Extended topic gives a real sense of the level.",
        "Edexcel IGCSE is different in format from Cambridge. Questions are phrased differently and Foundation and Higher tiers are used, so a tutor who knows both specifications saves a switching student from relearning exam habits.",
      ],
      bullets: [
        "Extended is the stronger base for later IB Maths and Science HL",
        "Subject mix should follow future degree plans",
        "Hindi is a popular IGCSE language choice among Haryana families",
        "Edexcel and Cambridge expect different exam habits",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects alongside Cambridge and Edexcel IGCSE for Shahbad Markanda families. Each match weighs the syllabus, level and exam session, because all lessons run live online and none at a student's door.",

  process: [
    { title: "Tell us about your child", description: "Share the programme or board, the subject and level, current grades and the evening hours that fit around Shahbad school timings." },
    { title: "Get a reasoned shortlist", description: "Because no local pool exists, tutors come from a nationwide search, each with a short note on why they fit." },
    { title: "Attend a free trial lesson", description: "A real topic from your child's syllabus is taught live online, with nothing to pay and no obligation." },
    { title: "Approve the written plan", description: "Topics, pace and reporting come in writing from the tutor; accept it or ask for changes." },
    { title: "Settle into a weekly rhythm", description: "A fixed online slot, regular reviews, and a tutor change whenever the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the exact course", description: "Tutors are chosen for the IB subject and level or the IGCSE code and tier, not a rough subject label." },
    { title: "Built for towns without IB schools", description: "Shahbad Markanda has no confirmed IB or IGCSE centre, so the search is national by design." },
    { title: "Try before you pay", description: "A free trial lesson shows how the tutor actually teaches before any commitment." },
    { title: "Coaching, not ghost-writing", description: "Tutors guide Internal Assessments, essays and coursework but never write a word of them." },
    { title: "Progress on paper", description: "A short note follows every session and a fuller review every few weeks." },
    { title: "Easy to change course", description: "No long contract, rates stated in writing first, and a new tutor if the first is not right." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Shahbad Markanda?", answer: "Send us the IB programme, subject, level and exam session, and we shortlist tutors who teach that exact course. With no IB school in Shahbad, matching is nationwide rather than local, and lessons run online. A free trial lesson comes first, and you can ask for a different tutor afterwards without any fuss." },
    { question: "Do you have IGCSE tutors for Shahbad students?", answer: "Yes, for both Cambridge and Pearson Edexcel IGCSE. A tutor is matched on the syllabus code and tier, for example Mathematics 0580 Extended or Chemistry 0620, and teaches live over video. Sessions use past papers and mark schemes from the relevant board, and the May-June or October-November session is set by your child's school." },
    { question: "Will a tutor come to our house in Shahbad?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR, so tutors do not visit homes in Shahbad Markanda. What you get is online home tuition: a live one-to-one lesson that your child takes from home on a laptop, with a tutor who may be anywhere in India." },
    { question: "How much does an IB or IGCSE tutor cost in Shahbad?", answer: "The figure depends on subject, level, lesson length, frequency and how recently the tutor has taught your child's exact syllabus. IB Higher Level sciences and Maths sit above IGCSE Core. Online delivery means no travel charge, and the rate is given in writing before the free trial and does not change afterwards." },
    { question: "Which schools in Shahbad Markanda offer IB or IGCSE?", answer: "We could not confirm any. Local schools follow HBSE or CBSE. Families who want IB or Cambridge usually look at the Chandigarh tricity or Delhi NCR for admission or boarding, and we name those schools only as places where Haryana families sometimes go, not as partners." },
    { question: "My child boards at an IB school in Chandigarh or Delhi. Can you help in the holidays?", answer: "Yes, this is a common request. We match a tutor to the subject, level and syllabus your child's boarding school follows and plan sessions around the school's holiday dates. In term time we can sometimes fit short evening slots if the school allows screen time." },
    { question: "Is there a free trial lesson before we commit?", answer: "Every match starts with one. Your child works through a real topic from their own syllabus with the tutor, online and at no charge. A short written plan follows, and you decide whether to continue, adjust or try another tutor." },
    { question: "Can a tutor help with my child's IB Internal Assessment?", answer: "Tutors can help your child understand the criteria, choose a workable research question, plan data collection and respond to draft feedback. They cannot write or rewrite any part of it. Producing assessed work for a student breaks IB academic integrity rules, and our tutors decline it." },
    { question: "Which IB Diploma subjects can you cover?", answer: "We cover Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, Hindi and Punjabi B, plus TOK and Extended Essay guidance. If your subject is not listed, ask and we will check." },
    { question: "Do you teach IB MYP and PYP students as well?", answer: "Yes. MYP tutoring concentrates on criterion-based tasks in sciences, maths and languages, plus guidance on the Personal Project process. PYP tutoring builds reading, writing and number sense and helps with the research habits needed for the Exhibition. Both suit children whose families are about to move or already study elsewhere." },
    { question: "Is online tuition as good as having a tutor in the room?", answer: "For IB and IGCSE it is the practical choice in Shahbad, because nobody local teaches these courses. A shared whiteboard, live marking of past papers and recorded worked solutions cover most of what a classroom tutor does, and you gain access to specialists from across India." },
    { question: "How do you check your tutors?", answer: "We look at qualifications, recent teaching of the exact subject and level, and understanding of the assessment criteria. For a town like Shahbad, where there is no local school to compare with, recent hands-on syllabus experience matters more than a general profile, and the free trial lets you test it." },
    { question: "When should my child start tutoring?", answer: "The ideal moment is at the start of the course, Class 9 for IGCSE or Class 11 for the Diploma, so foundations are sound before internal exams and IA deadlines arrive. Starting in the exam year still helps if sessions focus on the highest-value topics and real papers." },
    { question: "My child is moving from HBSE or CBSE to IGCSE. How can a tutor help?", answer: "Content is rarely the obstacle; exam language is. Command words such as explain, evaluate and justify need deliberate practice, along with the shift from textbook recall to application. We suggest starting a term before the move so the first IGCSE tests do not come as a shock." },
    { question: "Can lessons run in the evening or on weekends?", answer: "Yes. Most Shahbad families choose weekday evenings after school and tuition, or weekend mornings. We avoid the paddy-arrival rush and the fog-hit early mornings in winter where possible, and we plan pauses for Diwali, Lohri and family weddings." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us and we will arrange another tutor. We review each match every few weeks and change it when it is not working. There is no long contract, so pausing or stopping carries no penalty." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram is an independent tutoring service with no affiliation to any Shahbad school, the Haryana education department, the International Baccalaureate, Cambridge or Pearson Edexcel. Tutors follow your child's own school calendar and the board's published syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How city-by-city online matching works for IB and IGCSE families." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where our in-person home visits actually run." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects explained plainly." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, internal assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and MYP assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Filter tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Thanesar", href: "/thanesar/", description: "Matching for families in Kurukshetra's neighbouring city." },
    { label: "IB and IGCSE tutoring in Karnal", href: "/karnal/", description: "Online tutor matching for Karnal students." },
    { label: "IB and IGCSE tutoring in Panchkula", href: "/panchkula/", description: "For families near the Chandigarh tricity schools." },
  ],

  closingHeading: "Start a free trial with IB and IGCSE tutors in Shahbad",
  closingBody:
    "Tell us the programme or board, the subject and level, how your child is doing and the evenings that suit your household. You will get a tutor shortlisted for that brief, an honest note on their experience, and a free trial slot, all taught one to one over video. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
