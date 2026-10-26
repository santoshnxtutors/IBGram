import type { TutorJobSeoPage } from "../types";

/**
 * Lane: the IB programme ladder. This page's differentiator is PYP → MYP → DP — what
 * actually changes for a tutor between the three, which is the question a teacher new to
 * the IB cannot get answered anywhere else. Keeps off DP exam detail (that is /ib-dp-tutor-jobs/).
 */
export const ibTutorJobs: TutorJobSeoPage = {
  slug: "ib-tutor-jobs",
  jobFamily: "board",
  scopeLabel: "IB",
  locationScope: "worldwide",
  lastUpdated: "2026-10-26",

  title: "IB Tutor Jobs — Teach PYP, MYP and DP Students | IB Gram",
  metaDescription:
    "Apply for IB tutor jobs with IB Gram. Teach PYP, MYP and DP students online or at home, set your own fee, and keep 100% of home-tuition fees from month two.",
  metaKeywords: [
    "ib tutor jobs",
    "ib tutor vacancy",
    "ib teacher jobs",
    "ib tuition jobs",
    "international baccalaureate tutor jobs",
    "ib dp tutor jobs",
    "ib myp tutor jobs",
    "ib pyp tutor jobs",
    "ib home tutor jobs",
    "ib online tutor jobs",
    "ib tutor jobs india",
    "ib tutor jobs dubai",
    "ib tutor recruitment",
    "ib subject tutor jobs",
    "ib maths tutor jobs",
    "ib physics tutor jobs",
    "ib chemistry tutor jobs",
    "ib english tutor jobs",
    "ib economics tutor jobs",
    "ib tutor part time",
    "work as an ib tutor",
    "become an ib tutor",
    "ib tutor hiring",
    "ib tutoring jobs online",
    "freelance ib tutor",
    "ib tutor salary",
    "ib tutor pay",
    "ib curriculum tutor jobs",
  ],
  h1: "IB tutor jobs: teach PYP, MYP and DP students with IB Gram",
  heroEyebrow: "IB programme tutors",
  heroSubtitle:
    "We match IB students with tutors who know the programme they are actually in — not just the subject. Tell us which stage you can teach, the hours you can keep and the fee you want, and we bring you students who fit.",
  primaryKeyword: "IB tutor jobs",
  secondaryKeywords: [
    "IB teacher jobs",
    "IB tuition jobs",
    "International Baccalaureate tutor vacancy",
    "IB MYP tutor jobs",
    "IB PYP tutor jobs",
    "online IB tutor jobs",
  ],
  imageAltText: "IB Gram tutor teaching an IB Diploma Programme student online",

  heroTrustPoints: [
    "Matched by programme and subject level, not by postcode alone",
    "Home tuition: 100% of the fee is yours from the second month",
    "You set your own fee and decline any student without penalty",
    "Monthly payouts on the 1st, with a per-student statement",
  ],
  heroStats: [
    { value: "PYP–DP", label: "Every IB stage" },
    { value: "100%", label: "Home fee from month 2" },
    { value: "70%", label: "Your share online" },
    { value: "1st", label: "Payout each month" },
  ],

  directAnswer:
    "IB tutor jobs at IB Gram are freelance tutoring engagements, not salaried posts. You apply once, list the IB programmes and subjects you can teach, pass an ID and credential check, then receive matched students. Home tuition is split 50-50 for the first month and is 100% yours from month two; online classes are 70% yours. Payouts land on the 1st of each month.",

  intro: {
    heading: "What an IB tutor job with us actually is",
    paragraphs: [
      "This is not a salaried teaching post and we do not ask you to work fixed shifts. You are an independent professional: you choose which students to take, how many hours a week you teach, whether you teach online or travel to a home, and what you charge. IB Gram finds the students, arranges the first demo class, collects the fees from the family and pays you monthly.",
      "What makes IB work different from general tuition is that a parent is rarely looking for \"a maths tutor\". They are looking for someone who can teach Maths AA at Higher Level to a student sitting the May session, or who can get an MYP Year 4 student to write a decent reflection against Criterion D. Matching on that level is the whole point of the platform, and it is why we ask for your programme and level in detail rather than just a subject list.",
      "Most tutors who join us are already teaching: current or former IB school teachers, examiners and moderators, postgraduates in their subject, and experienced private tutors moving off word-of-mouth referrals. You do not need to have taught in an IB school to be accepted, but you do need to show that you know the programme you are applying to teach, because the first demo class is where a parent decides.",
    ],
    bullets: [
      "You choose your students, your hours, your mode and your fee",
      "No joining fee, no subscription and no charge to receive matches",
      "No exclusivity — you can tutor elsewhere at the same time",
      "Every match tells you the programme, subject, level and target session up front",
    ],
  },

  earnings: {
    heading: "What IB tutors earn and what we take",
    paragraphs: [
      "You set your own hourly fee. We do not cap it and we do not undercut you — the family sees your fee before they book, so there is no haggling after the demo. IB subjects at Higher Level, and DP subjects close to an exam session, are where tutors charge the most, because the supply of people who can teach them properly is small.",
      "Our cut depends only on the mode, never on the subject or the programme. For home tuition, the first month's fee is split 50-50 and from the second month onwards you keep 100% — we take nothing further for as long as you keep teaching that student. For online classes it is a flat 70/30 in your favour, every month.",
      "The split that applies when a student starts is locked for that student. If we ever change these terms, the change is announced at least 30 days ahead and applies only to students who start after it.",
    ],
    table: {
      caption: "How a month's fees are shared, by mode",
      columns: ["Mode", "Month 1", "Month 2 onwards", "Who collects the fee"],
      rows: [
        ["Home tuition", "50% you / 50% IB Gram", "100% you", "IB Gram collects and chases"],
        ["Online classes", "70% you / 30% IB Gram", "70% you / 30% IB Gram", "IB Gram collects and chases"],
        ["Hybrid (both)", "Per mode, per class", "Per mode, per class", "IB Gram collects and chases"],
      ],
    },
    bullets: [
      "Worked example: a ₹16,000/month home student pays you ₹8,000 in month 1, then ₹16,000 every month after",
      "Over six months with that student you receive ₹88,000 of the ₹96,000 paid — about 92%",
      "Online at ₹1,200 a class × 12 classes = ₹14,400, of which ₹10,080 is yours",
      "Classes you cancel are not charged to the family, so they are not paid",
    ],
  },

  requirementsIntro:
    "We review every application by hand. The bar is subject mastery plus evidence you understand how the IB assesses, because that is what separates a tutor a family keeps from one they drop after a month.",
  requirements: [
    {
      label: "Genuine command of your subject at the level you teach",
      detail:
        "A degree in the subject, or a teaching qualification in it, or demonstrable results with students at that level. For Higher Level DP subjects we expect depth beyond the syllabus, not just coverage of it.",
      required: true,
    },
    {
      label: "Working knowledge of the IB programme you apply for",
      detail:
        "You should be able to talk about the assessment model of your stage: criteria and task-specific clarifications in MYP, internal assessment and the grade boundaries in DP, the transdisciplinary units in PYP.",
      required: true,
    },
    {
      label: "Government photo ID for verification",
      detail:
        "Every tutor uploads a government photo ID. We check it before your profile goes live. This confirms identity; it is not a police or criminal-records check, and we say so on your profile rather than implying more.",
      required: true,
    },
    {
      label: "A reliable setup for the mode you choose",
      detail:
        "For online: stable broadband, a working camera and microphone, and a quiet, professional space. For home tuition: the ability to travel reliably to the areas you list.",
      required: true,
    },
    {
      label: "Experience teaching in an IB school",
      detail:
        "A strong signal and we weight it, but we accept excellent subject specialists from outside the IB system who can show they have learned the assessment model.",
      required: false,
    },
    {
      label: "IB examiner or moderator experience",
      detail:
        "Carries real weight with DP parents and lets you charge more. We will display it on your profile once you evidence it.",
      required: false,
    },
  ],

  processIntro:
    "Applying takes about twenty minutes. Review is by a person, not a filter, and most applicants hear back within a few working days.",
  process: [
    {
      title: "Send your profile",
      description:
        "Apply through the tutor form or sign up and build the profile yourself. List the IB programmes and stages you can teach, every subject with its level, your mode, your availability and your fee.",
    },
    {
      title: "Upload your ID and credentials",
      description:
        "A government photo ID plus your degree, teaching qualification or examiner evidence. Our academic team reviews these before anything goes live.",
    },
    {
      title: "Profile review by our academic team",
      description:
        "We check subject depth against the level you have claimed. If we think you are a better fit for a different stage or level we will say so rather than reject you outright.",
    },
    {
      title: "Your verified profile goes live",
      description:
        "Once approved, your profile shows your programmes, subjects and levels, your mode, your availability and your fee, with the verification badge earned by the ID check.",
    },
    {
      title: "We send you matched students",
      description:
        "When a family needs your exact programme, subject and level, we shortlist you. You see the student's stage, subject, level, target exam session and mode before you accept, and you can decline.",
    },
    {
      title: "Teach the free demo class, then start",
      description:
        "The first class is a free demo so the family can judge the teaching. They have already seen your fee. If it goes well, the engagement starts and your first payout lands on the 1st of the following month.",
    },
  ],

  sections: [
    {
      heading: "PYP, MYP and DP: what changes for you as a tutor",
      paragraphs: [
        "The three IB programmes are so different in what they ask of a tutor that treating them as one job is the commonest mistake a new IB tutor makes. The subject may be the same; the thing a parent is paying you to fix is not.",
        "In the Primary Years Programme, there is no external exam and almost no content specification to revise against. Tutoring here is about building literacy and numeracy fluency, and about helping a child engage with transdisciplinary units of inquiry. Parents usually come to you because a child is behind in reading or number work, or because they are moving into a PYP school from a content-heavy national curriculum and are lost in an inquiry classroom.",
        "In the Middle Years Programme, the assessment is criterion-referenced, and this is where most of the confusion sits. A student is not marked out of 100; they are marked against four criteria per subject, each on an eight-point scale, using task-specific clarifications their teacher writes. A tutor who teaches content but never looks at a criterion rubric will not move an MYP grade. The work is teaching the student to produce what Criterion C or D actually asks for, plus the Personal Project in Year 5.",
        "In the Diploma Programme, you are working to a public syllabus, a published assessment outline, internal assessment coursework and a fixed exam session. The job is closest to conventional exam tutoring, but with the internal assessment, Extended Essay and Theory of Knowledge layered on top, and with Higher and Standard Level versions of each subject that differ in both content and depth.",
      ],
      table: {
        caption: "What a tutor is actually asked to do, by IB programme",
        columns: ["Programme", "Typical ages", "What parents ask for", "What you are marked on"],
        rows: [
          [
            "PYP",
            "3–12",
            "Reading fluency, number sense, settling into inquiry learning after a transfer",
            "No external exam; teacher judgement and progress the parent can see",
          ],
          [
            "MYP",
            "11–16",
            "Criterion grades, eAssessment preparation, the Year 5 Personal Project",
            "Four criteria per subject, each 0–8, against task-specific clarifications",
          ],
          [
            "DP",
            "16–19",
            "HL and SL subject grades, internal assessment, Extended Essay, TOK, predicted grades",
            "Published syllabus, IA coursework and the May or November exam session",
          ],
        ],
      },
      bullets: [
        "Most demand sits in DP, then MYP; PYP is smaller but steadier and less seasonal",
        "MYP tutors who can read a criterion rubric are genuinely scarce and in demand",
        "Being able to teach both MYP and DP in one subject keeps your timetable full year-round",
      ],
    },
    {
      heading: "Which IB subjects families ask for most",
      paragraphs: [
        "Demand is not spread evenly across the IB subject groups. Group 4 sciences and Group 5 mathematics account for most of what comes in, followed by Economics and Business Management in Group 3, and English in Group 1 — usually Language A Language and Literature rather than Literature.",
        "Within mathematics, the 2019 restructure into Analysis and Approaches and Applications and Interpretation created a real shortage. Many tutors can teach one route competently and assume the other is simply easier; AI HL in particular has statistics and modelling content that AA tutors have often never taught. If you can genuinely teach both routes at both levels, you will not be short of students.",
        "In the sciences, the current syllabuses put weight on the internal assessment, and a lot of what parents want is not content teaching at all but help designing an investigation with a defensible research question and a sensible method. Tutors who can supervise an IA properly without crossing into writing it are rare and worth more.",
        "Language B and the ab initio courses are a steady niche. So are the less-taught Group 3 options like Psychology and Global Politics, where a school may have only one teacher and a struggling student has nowhere else to turn.",
      ],
      bullets: [
        "Mathematics: AA and AI, both HL and SL — the single largest source of requests",
        "Sciences: Physics, Chemistry and Biology, with heavy IA support demand",
        "Group 3: Economics, Business Management, Psychology, Global Politics",
        "Group 1 and 2: English Language and Literature, Language B, ab initio",
        "Core: Extended Essay supervision and Theory of Knowledge essay guidance",
      ],
    },
    {
      heading: "Teaching online, at a home, or both",
      paragraphs: [
        "You choose, and you can change your mind later. Online is how most of our IB work runs, because IB families are spread across cities and countries and because an HL specialist in one city is often the only realistic option for a student in another. Online also means your reach is not limited by traffic, and the 70/30 split is the same every month with no first-month discount.",
        "Home tuition pays better over time — 100% of the fee from month two — and parents of younger students often prefer it. The trade-off is travel. You list the areas you can genuinely reach, and we only send you students inside them. You can decline any location without giving a reason, and you are never penalised for it.",
        "A lot of tutors run both: home students nearby on weekends, online students on weekday evenings. That is the pattern that fills a timetable fastest, and it hedges you against one student stopping.",
      ],
      bullets: [
        "Online: wider reach, no travel, flat 70/30, works across time zones",
        "Home: 100% yours from month two, preferred for PYP and lower MYP",
        "Hybrid: the split is applied per class by mode, so you are never guessing",
      ],
    },
    {
      heading: "How much work you can expect, and when",
      paragraphs: [
        "IB tutoring is seasonal and it helps to know the shape of the year before you commit. Demand climbs from August as the northern-hemisphere academic year starts and new DP students realise what Year 1 involves. It peaks between January and April, in the run-up to the May examination session, and that is when HL tutors can charge the most and fill every slot they have.",
        "There is a second, smaller peak around October and November for schools sitting the November session, which is most of the southern hemisphere and a number of schools in South and Southeast Asia. May and June are the quietest months for DP work, which is when MYP and PYP students — who have no external session to revise for — keep a timetable ticking over.",
        "We cannot promise a number of students. What we can tell you honestly is that tutors who list more than one programme, who teach at least two subjects, and who offer online as well as home, get matched several times more often than single-subject home-only tutors. Breadth is the thing that most reliably turns an accepted profile into steady work.",
      ],
      table: {
        caption: "The IB tutoring year, from a tutor's point of view",
        columns: ["Period", "What drives demand", "Who is busiest"],
        rows: [
          ["Aug–Oct", "New DP Year 1 students; MYP year starts", "DP Year 1 and MYP tutors"],
          ["Oct–Nov", "November examination session", "DP HL tutors, southern hemisphere"],
          ["Jan–Apr", "May session run-up; IA and EE deadlines", "DP HL tutors — the annual peak"],
          ["May–Jul", "Exams over; results and retakes", "MYP and PYP tutors; retake students"],
        ],
      },
    },
  ],

  policiesIntro:
    "Everything below is a summary of a clause in our tutor policy. We would rather you read the terms before applying than discover them after your first payout.",
  policies: [
    {
      heading: "Home tuition: 50-50 for the first month, then 100% yours",
      summary:
        "The first month's fee for each new home student is split evenly; it is our one-time fee for finding and setting up the match. From month two we take nothing, for as long as you keep teaching that student. The split is per student, so each new student has their own first month.",
      anchor: "home-tuition",
    },
    {
      heading: "Online classes: 70% to you, 30% platform fee",
      summary:
        "A flat 70/30 split in your favour, unchanged every month. The 30% covers finding and matching students, arranging demos, collecting fees, chasing late payment, scheduling support and finding you a replacement if a student stops.",
      anchor: "online-classes",
    },
    {
      heading: "Paid monthly, on the 1st",
      summary:
        "All fees for classes held in a calendar month are paid on the 1st of the next month — September's work is deposited on 1 October. Payment is by bank transfer or UPI, with a statement listing every student, class, fee and split.",
      anchor: "payouts",
    },
    {
      heading: "Your split is locked and changes are notified",
      summary:
        "The split in force when a student starts is the split for that student, and we will never cut it mid-engagement. Policy changes are announced at least 30 days ahead and apply only to students starting after the change.",
      anchor: "tutor-protection",
    },
    {
      heading: "Safeguarding is not optional",
      summary:
        "Many IB students are under 18. Teach home students in a common area with an adult in the house, keep your camera on online, never record without parental consent, and communicate through a parent or a chat that includes them. A breach ends the engagement.",
      anchor: "safeguarding",
    },
    {
      heading: "Academic honesty on IA, EE and coursework",
      summary:
        "You explain, teach and give feedback. You never write an internal assessment, Extended Essay or coursework piece for a student. IB academic-honesty rules put the student's diploma at risk, and this is the line we enforce most strictly.",
      anchor: "professional-standards",
    },
    {
      heading: "You can say no",
      summary:
        "You may decline any student, subject, timing or location without penalty, including home-tuition areas you would rather not travel to. If a family is abusive or discriminatory, tell us and stop teaching them — we step in.",
      anchor: "tutor-protection",
    },
    {
      heading: "You are independent, and taxed as such",
      summary:
        "Tutors are independent professionals, not employees. You are responsible for income tax on your earnings; your monthly statements are your record for filing, and any tax we are legally required to deduct is shown on the statement.",
      anchor: "tax",
    },
  ],

  whyPoints: [
    {
      title: "Matched on level, not just subject",
      description:
        "A request tells you the programme, subject, HL or SL level and target session before you accept. You are never handed a student you are the wrong fit for and expected to improvise.",
    },
    {
      title: "You never chase a parent for money",
      description:
        "We invoice the family, collect the fee and follow up on late payment. If a family pays late it is added to your next payout once received. You teach; we handle the awkward conversation.",
    },
    {
      title: "Home tuition really does become 100% yours",
      description:
        "After the first month we take nothing from home tuition. That is unusual, and it is deliberate — it means we have no reason to keep you on the platform other than sending you more students.",
    },
    {
      title: "Your fee is yours to set",
      description:
        "We publish the fee you choose and the family sees it before booking. No bidding against other tutors, no commission-driven pressure to drop your rate.",
    },
    {
      title: "A free demo instead of a sales pitch",
      description:
        "The first class is a free demo. Good teachers win work in the room, so the demo is a better filter for you than any profile blurb, and parents arrive already knowing your rate.",
    },
    {
      title: "No exclusivity and no lock-in",
      description:
        "Tutor with us alongside your school job, your own private students or another platform. There is no joining fee, no subscription and no notice period for leaving.",
    },
  ],

  faqs: [
    {
      question: "Are IB tutor jobs at IB Gram salaried positions?",
      answer:
        "No. These are freelance tutoring engagements. You are an independent professional who chooses which students, hours, modes and fees to accept, and you are paid per class taught rather than a salary. Salaried roles at IB Gram, when we have them, are listed separately on our jobs page.",
    },
    {
      question: "Do I need to have taught in an IB school to be accepted?",
      answer:
        "No, though it helps and we weight it in review. What is not negotiable is that you can show real command of your subject at the level you are applying to teach, and that you understand how the IB assesses that stage — criteria and task-specific clarifications in MYP, internal assessment and grade boundaries in DP.",
    },
    {
      question: "How much do IB tutors earn?",
      answer:
        "You set your own fee, so your earnings depend on your rate and how many classes you teach. What is fixed is our share: home tuition is split 50-50 for the first month and is 100% yours from month two, and online classes are 70% yours every month. A ₹16,000-a-month home student pays you ₹8,000 in month one and ₹16,000 in every month after.",
    },
    {
      question: "Is there any fee to join or to receive students?",
      answer:
        "No. There is no joining fee, no subscription, no charge to appear in matches and no charge to receive a student request. We earn only from the commission split on fees for classes that actually took place.",
    },
    {
      question: "When exactly do I get paid?",
      answer:
        "On the 1st of the month after the classes. Fees for classes held in September are deposited on 1 October, October's on 1 November, and so on. If the 1st is a Sunday or bank holiday the transfer goes out on the next working day, by bank transfer or UPI, with an itemised statement.",
    },
    {
      question: "Can I teach IB students online from another country?",
      answer:
        "Yes. Most of our IB work is online and our students are spread across India, the UAE, the UK, Southeast Asia and beyond. You set the hours you are available in your own time zone and we only match you with families whose preferred slots overlap.",
    },
    {
      question: "Which IB programme has the most tutoring work?",
      answer:
        "The Diploma Programme, by a wide margin, especially Higher Level mathematics and the sciences between January and April before the May session. MYP is the next largest and is steadier across the year, and tutors who can read a criterion rubric are genuinely scarce there. PYP is the smallest but least seasonal.",
    },
    {
      question: "Can I help a student with their Internal Assessment or Extended Essay?",
      answer:
        "You can and should teach the skills, discuss the research question, explain the assessment criteria and give feedback on the student's own drafts. You must never write any part of it for them. IB academic-honesty rules put the student's whole diploma at risk, and we treat a breach as grounds for removal.",
    },
    {
      question: "What happens if a student stops after a few weeks?",
      answer:
        "For home tuition, the 50-50 first-month split applies only to the fees actually paid for classes that took place, so you are not charged against work you never did. Finding you a replacement student is part of what the platform fee covers, so tell us and we will put you back into matching.",
    },
    {
      question: "Can I keep my school job and tutor with IB Gram?",
      answer:
        "Yes, and many of our tutors do. There is no exclusivity clause and no minimum hours. You set your availability — most school-teacher tutors take weekday evening and weekend slots — and you can pause or decline matches whenever your school term demands it.",
    },
    {
      question: "Is the verification a police or background check?",
      answer:
        "No, and we are careful not to imply otherwise. Every tutor uploads a government photo ID which our team reviews before the profile goes live, and the badge reflects that identity check. It is not a criminal-records check. Safeguarding rules — teaching in a common area with an adult present, no private contact with minors — carry the rest of the weight.",
    },
    {
      question: "Can I decline a student or an area I am sent?",
      answer:
        "Yes, without giving a reason and without penalty. That covers subjects outside your comfort zone, timings that do not work, and home-tuition locations you would rather not travel to. Your right to decline is written into the tutor policy.",
    },
  ],

  internalLinks: [
    {
      label: "IB DP tutor jobs",
      href: "/ib-dp-tutor-jobs/",
      description: "The Diploma Programme in depth: HL and SL, internal assessment, Extended Essay and exam sessions.",
    },
    {
      label: "IGCSE tuition jobs",
      href: "/igcse-tuition-jobs/",
      description: "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers, and the 9–1 grading change.",
    },
    {
      label: "IB and IGCSE online tutor jobs",
      href: "/ib-igcse-online-tutor-jobs/",
      description: "Teach from anywhere on a flat 70/30 split, across Indian, Gulf and UK time zones.",
    },
    {
      label: "IB and IGCSE home tuition jobs",
      href: "/ib-igcse-home-tuition-jobs/",
      description: "In-person teaching, travel zones and the safeguarding rules for teaching in a family home.",
    },
    {
      label: "IB and IGCSE maths tutor jobs",
      href: "/ib-igcse-maths-tutor-jobs/",
      description: "Maths AA and AI at both levels, plus IGCSE Extended — our single largest source of requests.",
    },
    {
      label: "Apply to teach",
      href: "/join-as-tutor/",
      description: "The tutor application itself: subjects, levels, availability, ID upload and your fee.",
    },
  ],

  closingHeading: "Tell us which IB stage you teach",
  closingBody:
    "List your programmes, subjects and levels, set your fee and your hours, and we will bring you students who match. Applying takes about twenty minutes and a person reads every application.",
};
