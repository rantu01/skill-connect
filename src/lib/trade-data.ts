export type TradeContent = {
  slug: string;
  audience: string;
  h1: string;
  heroIntro: string;
  heroSteps: string[];
  qualifications: { code: string; name: string; note: string }[];
  evidenceItems: string[];
  outcomeTabs: {
    id: string;
    label: string;
    icon: string;
    heading: string;
    intro: string;
    points: { title: string; body: string }[];
    cta: string;
  }[];
  costOfInaction: { icon: string; staying: string; certified: string }[];
  quizHeading: string;
  quizQuestions: { question: string; options: { label: string; score: number }[] }[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
};

type TradeSeed = {
  slug: string;
  audience: string;
  tradeLabel: string;
  h1: string;
  heroIntro: string;
  qualifications: { code: string; name: string; note: string }[];
  assessmentBody: string;
  faqHeading: string;
};

// Qualification codes/names match the reference RPL evidence guides.
// All other copy is generic pathway guidance shared across trades.
const STANDARD_EVIDENCE = [
  "Site photos of your work",
  "Job logs and work orders",
  "Tax records and payslips",
  "Employer references",
  "Certificates of any prior training",
];

const STANDARD_QUIZ = [
  {
    question: "How many years of experience do you have in this field?",
    options: [
      { label: "Less than 2 years", score: 1 },
      { label: "2–5 years", score: 3 },
      { label: "5+ years", score: 5 },
    ],
  },
  {
    question: "Do you have site photos or work samples?",
    options: [
      { label: "No", score: 1 },
      { label: "Some", score: 3 },
      { label: "Extensive portfolio", score: 5 },
    ],
  },
  {
    question: "Do you have tax records or payslips?",
    options: [
      { label: "No", score: 1 },
      { label: "Some", score: 3 },
      { label: "Complete records", score: 5 },
    ],
  },
  {
    question: "Do you have employer references?",
    options: [
      { label: "No", score: 1 },
      { label: "1–2 references", score: 3 },
      { label: "3+ references", score: 5 },
    ],
  },
  {
    question: "Have you completed any formal training in this field?",
    options: [
      { label: "No", score: 1 },
      { label: "Some units", score: 3 },
      { label: "Full qualification", score: 5 },
    ],
  },
];

const STANDARD_FAQS = [
  {
    q: "How long does RPL take?",
    a: "Most RPL pathways take 6–12 months from evidence collection to RTO outcome, depending on how complete your evidence is.",
  },
  {
    q: "What evidence do I need?",
    a: "Workplace photos or samples, job records, tax records, employer references and any prior training certificates.",
  },
  {
    q: "Can I do RPL if I have no formal training?",
    a: "Yes. RPL is designed for experienced workers without formal qualifications.",
  },
  {
    q: "Will I need to study anything?",
    a: "You may need to complete a small number of remaining units, but RPL minimises classroom time.",
  },
];

function buildTradeContent(seed: TradeSeed): TradeContent {
  return {
    slug: seed.slug,
    audience: seed.audience,
    h1: seed.h1,
    heroIntro: seed.heroIntro,
    heroSteps: ["Your experience", "Evidence portfolio", "RTO assessment", "Qualification outcome"],
    qualifications: seed.qualifications,
    evidenceItems: STANDARD_EVIDENCE,
    outcomeTabs: [
      {
        id: "qualification",
        label: "Qualification",
        icon: "FileCheck2",
        heading: `Get your ${seed.qualifications[0]?.name ?? "qualification"}`,
        intro:
          "An RTO assesses your evidence and issues credit for units you already satisfy. You may need to complete only a few remaining units.",
        points: [
          { title: "Credit for what you know", body: "Units covered by your experience are granted as credit." },
          { title: "Fast-track completion", body: "Most RPL pathways finish in 6–12 months." },
        ],
        cta: "Start your RPL application",
      },
      {
        id: "licence",
        label: "Licence",
        icon: "HardHat",
        heading: `Licensing for ${seed.tradeLabel}`,
        intro:
          "Where a licence or registration applies, the qualification is usually the prerequisite the authority looks for first.",
        points: [
          { title: "Authority requirements", body: "Each state or industry body sets its own criteria we help you meet." },
          { title: "Paperwork guidance", body: "We guide you through the documents each authority expects." },
        ],
        cta: "Book a licensing consult",
      },
      {
        id: "migration",
        label: "Migration",
        icon: "Globe2",
        heading: `Skills assessment for ${seed.tradeLabel}`,
        intro: seed.assessmentBody,
        points: [
          { title: "Occupation mapping", body: "Your experience is mapped against the relevant occupation standards." },
          { title: "Evidence package", body: "We prepare the documents the assessing body requires." },
        ],
        cta: "Start migration assessment",
      },
    ],
    costOfInaction: [
      { icon: "TrendingUp", staying: "Stuck at unqualified rates", certified: "Access to higher-paying qualified roles" },
      { icon: "Briefcase", staying: "Cannot work independently", certified: "Run your own jobs or business" },
      { icon: "Award", staying: "No formal qualification on record", certified: seed.qualifications[0]?.name ?? "Nationally recognised qualification" },
    ],
    quizHeading: `Check your ${seed.tradeLabel} RPL eligibility`,
    quizQuestions: STANDARD_QUIZ,
    faqHeading: seed.faqHeading,
    faqs: STANDARD_FAQS,
  };
}

const SEEDS: TradeSeed[] = [
  {
    slug: "fabrication-trade",
    audience: "Fabrication",
    tradeLabel: "fabrication",
    h1: "RPL for Fabrication: Turn your workshop experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on boilermaking, welding or metal fabrication experience, we can help you map your skills against the MEM30319 Certificate III in Engineering - Fabrication Trade and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "MEM30319", name: "Cert III in Engineering - Fabrication Trade", note: "Core trade qualification for fabricators" },
    ],
    assessmentBody: "Assessing bodies review fabrication occupations for skilled visa applications.",
    faqHeading: "Fabrication RPL frequently asked questions",
  },
  {
    slug: "cabinet-making",
    audience: "Cabinet Making",
    tradeLabel: "cabinet making",
    h1: "RPL for Cabinet Making: Turn your workshop experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on cabinet making or wood machining experience, we can help you map your skills against the MSF30322 Certificate III in Cabinet Making and Timber Technology and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "MSF30322", name: "Cert III in Cabinet Making and Timber Technology", note: "Core trade qualification for cabinet makers" },
    ],
    assessmentBody: "Assessing bodies review cabinet making occupations for skilled visa applications.",
    faqHeading: "Cabinet making RPL frequently asked questions",
  },
  {
    slug: "glass-and-glazing",
    audience: "Glass & Glazing",
    tradeLabel: "glazing",
    h1: "RPL for Glazing: Turn your site experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on glass and glazing experience, we can help you map your skills against the MSF30413 Certificate III in Glass and Glazing and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "MSF30413", name: "Cert III in Glass and Glazing", note: "Core trade qualification for glaziers" },
    ],
    assessmentBody: "Assessing bodies review glazing occupations for skilled visa applications.",
    faqHeading: "Glazing RPL frequently asked questions",
  },
  {
    slug: "property-agency-management",
    audience: "Property Services",
    tradeLabel: "property agency management",
    h1: "RPL for Agency Principals: Turn your agency experience into a recognised qualification",
    heroIntro:
      "If you have years of experience as an agency principal or licensee in charge, we can help you map your skills against the CPP51122 Diploma of Property (Agency Management) and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "CPP51122", name: "Diploma of Property (Agency Management)", note: "For agency principals and licensees in charge" },
    ],
    assessmentBody: "Skills assessment pathways vary by occupation and visa — we map your evidence accordingly.",
    faqHeading: "Property agency management RPL frequently asked questions",
  },
  {
    slug: "real-estate-practice",
    audience: "Property Services",
    tradeLabel: "real estate",
    h1: "RPL for Real Estate: Turn your agency experience into a recognised qualification",
    heroIntro:
      "If you have years of experience as a real estate agent, property manager or strata officer, we can help you map your skills against the CPP41419 Certificate IV in Real Estate Practice and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "CPP41419", name: "Cert IV in Real Estate Practice", note: "Core qualification for property representatives" },
    ],
    assessmentBody: "Skills assessment pathways vary by occupation and visa — we map your evidence accordingly.",
    faqHeading: "Real estate practice RPL frequently asked questions",
  },
  {
    slug: "beauty-therapy",
    audience: "Hairdressing & Beauty",
    tradeLabel: "beauty therapy",
    h1: "RPL for Beauty Therapy: Turn your salon experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on beauty therapy experience, we can help you map your skills against the SHB50115 Diploma of Beauty Therapy and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SHB50115", name: "Diploma of Beauty Therapy", note: "Core qualification for beauty therapists" },
    ],
    assessmentBody: "Assessing bodies review beauty occupations for skilled visa applications.",
    faqHeading: "Beauty therapy RPL frequently asked questions",
  },
  {
    slug: "hairdressing",
    audience: "Hairdressing & Beauty",
    tradeLabel: "hairdressing",
    h1: "RPL for Hairdressing: Turn your salon experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on hairdressing experience, we can help you map your skills against the SHB30416 Certificate III in Hairdressing and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SHB30416", name: "Cert III in Hairdressing", note: "Core trade qualification for hairdressers" },
    ],
    assessmentBody: "Assessing bodies review hairdressing occupations for skilled visa applications.",
    faqHeading: "Hairdressing RPL frequently asked questions",
  },
  {
    slug: "salon-management",
    audience: "Hairdressing & Beauty",
    tradeLabel: "salon management",
    h1: "RPL for Salon Management: Turn your salon leadership into a recognised qualification",
    heroIntro:
      "If you have years of experience running a salon, we can help you map your skills against the SHB50216 Diploma of Salon Management and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SHB50216", name: "Diploma of Salon Management", note: "For salon managers and owners" },
    ],
    assessmentBody: "Skills assessment pathways vary by occupation and visa — we map your evidence accordingly.",
    faqHeading: "Salon management RPL frequently asked questions",
  },
  {
    slug: "baking",
    audience: "Hospitality",
    tradeLabel: "baking",
    h1: "RPL for Baking: Turn your bakery experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on baking experience producing bread, rolls and cakes, we can help you map your skills against the FBP30521 Certificate III in Baking and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "FBP30521", name: "Cert III in Baking", note: "Core trade qualification for bakers" },
    ],
    assessmentBody: "Assessing bodies review baking occupations for skilled visa applications.",
    faqHeading: "Baking RPL frequently asked questions",
  },
  {
    slug: "kitchen-management",
    audience: "Hospitality",
    tradeLabel: "kitchen management",
    h1: "RPL for Kitchen Management: Turn your kitchen leadership into a recognised qualification",
    heroIntro:
      "If you have years of experience as a chef de partie or sous chef, we can help you map your skills against the SIT40521 Certificate IV in Kitchen Management and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SIT40521", name: "Cert IV in Kitchen Management", note: "For chefs de partie and sous chefs" },
    ],
    assessmentBody: "Assessing bodies review chef occupations for skilled visa applications.",
    faqHeading: "Kitchen management RPL frequently asked questions",
  },
  {
    slug: "commercial-cookery",
    audience: "Hospitality",
    tradeLabel: "commercial cookery",
    h1: "RPL for Commercial Cookery: Turn your kitchen experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on cook and chef experience, we can help you map your skills against the SIT30821 Certificate III in Commercial Cookery and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SIT30821", name: "Cert III in Commercial Cookery", note: "Core trade qualification for cooks and chefs" },
    ],
    assessmentBody: "Assessing bodies review cook and chef occupations for skilled visa applications.",
    faqHeading: "Commercial cookery RPL frequently asked questions",
  },
  {
    slug: "advanced-hospitality-management",
    audience: "Hospitality",
    tradeLabel: "hospitality management",
    h1: "RPL for Hospitality Leadership: Turn your management experience into a recognised qualification",
    heroIntro:
      "If you have years of experience as a hospitality general manager or multi-site manager, we can help you map your skills against the SIT60322 Advanced Diploma of Hospitality Management and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SIT60322", name: "Advanced Diploma of Hospitality Management", note: "For general and multi-site managers" },
    ],
    assessmentBody: "Skills assessment pathways vary by occupation and visa — we map your evidence accordingly.",
    faqHeading: "Hospitality management RPL frequently asked questions",
  },
  {
    slug: "hospitality-management",
    audience: "Hospitality",
    tradeLabel: "hospitality supervision",
    h1: "RPL for Hospitality Supervision: Turn your venue experience into a recognised qualification",
    heroIntro:
      "If you have years of experience as a venue supervisor or hospitality manager, we can help you map your skills against the SIT50422 Diploma of Hospitality Management and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SIT50422", name: "Diploma of Hospitality Management", note: "For venue supervisors and managers" },
    ],
    assessmentBody: "Skills assessment pathways vary by occupation and visa — we map your evidence accordingly.",
    faqHeading: "Hospitality supervision RPL frequently asked questions",
  },
  {
    slug: "patisserie",
    audience: "Hospitality",
    tradeLabel: "patisserie",
    h1: "RPL for Patisserie: Turn your pastry experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on pastry experience, we can help you map your skills against the SIT31021 Certificate III in Patisserie and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "SIT31021", name: "Cert III in Patisserie", note: "Core trade qualification for pastry chefs" },
    ],
    assessmentBody: "Assessing bodies review pastry chef occupations for skilled visa applications.",
    faqHeading: "Patisserie RPL frequently asked questions",
  },
  {
    slug: "ageing-support",
    audience: "Community Services",
    tradeLabel: "ageing support",
    h1: "RPL for Ageing Support: Turn your aged care experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on aged care experience, we can help you map your skills against the CHC43015 Certificate IV in Ageing Support and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "CHC43015", name: "Cert IV in Ageing Support", note: "For team leaders and care coordinators" },
    ],
    assessmentBody: "VETASSESS and ACWA assess community and health occupations for skilled visas.",
    faqHeading: "Ageing support RPL frequently asked questions",
  },
  {
    slug: "community-services",
    audience: "Community Services",
    tradeLabel: "community services",
    h1: "RPL for Community Services: Turn your casework experience into a recognised qualification",
    heroIntro:
      "If you have years of experience as a case manager or community worker, we can help you map your skills against the CHC52021 Diploma of Community Services and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "CHC52021", name: "Diploma of Community Services", note: "Often paired with an ACWA skills assessment" },
    ],
    assessmentBody: "ACWA assesses community work occupations for skilled visas.",
    faqHeading: "Community services RPL frequently asked questions",
  },
  {
    slug: "disability-support",
    audience: "Community Services",
    tradeLabel: "disability support",
    h1: "RPL for Disability Support: Turn your NDIS experience into a recognised qualification",
    heroIntro:
      "If you have years of hands-on NDIS disability support experience, we can help you map your skills against the CHC43121 Certificate IV in Disability Support and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "CHC43121", name: "Cert IV in Disability Support", note: "Built around person-centred practice" },
    ],
    assessmentBody: "VETASSESS and ACWA assess disability and welfare occupations for skilled visas.",
    faqHeading: "Disability support RPL frequently asked questions",
  },
  {
    slug: "individual-support",
    audience: "Community Services",
    tradeLabel: "individual support",
    h1: "RPL for Individual Support: Turn your support work into a recognised qualification",
    heroIntro:
      "If you have years of hands-on support work experience, we can help you map your skills against the CHC33021 Certificate III in Individual Support (Ageing and Disability) and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "CHC33021", name: "Cert III in Individual Support", note: "Covering ageing and disability streams" },
    ],
    assessmentBody: "VETASSESS and ACWA assess care occupations for skilled visas.",
    faqHeading: "Individual support RPL frequently asked questions",
  },
  {
    slug: "health-services-assistance",
    audience: "Health Services",
    tradeLabel: "health services assistance",
    h1: "RPL for Health Services Assistance: Turn your hospital experience into a recognised qualification",
    heroIntro:
      "If you have years of experience as an assistant in nursing or hospital support worker, we can help you map your skills against the HLT33115 Certificate III in Health Services Assistance and prepare the evidence portfolio an independent RTO needs.",
    qualifications: [
      { code: "HLT33115", name: "Cert III in Health Services Assistance", note: "For assistants in nursing and support staff" },
    ],
    assessmentBody: "VETASSESS assesses health support occupations for skilled visas.",
    faqHeading: "Health services assistance RPL frequently asked questions",
  },
  {
    slug: "vetassess-acwa-skills-assessment",
    audience: "Migration",
    tradeLabel: "skills assessment",
    h1: "VETASSESS & ACWA Skills Assessment: Prepare a decision-ready evidence file",
    heroIntro:
      "If you work in a community, health or social welfare occupation, we can help you build an evidence file that satisfies VETASSESS or ACWA — duty mapping, references and supporting documents structured the way assessors expect.",
    qualifications: [
      { code: "VETASSESS / ACWA", name: "Migration skills assessment", note: "For community, health and welfare occupations" },
    ],
    assessmentBody: "VETASSESS and ACWA are the assessing bodies for most community, welfare, disability, aged care and allied health support occupations.",
    faqHeading: "VETASSESS & ACWA skills assessment frequently asked questions",
  },
];

export const NEW_TRADE_CONTENTS: TradeContent[] = SEEDS.map(buildTradeContent);

export function getNewTradeContent(slug: string): TradeContent | undefined {
  return NEW_TRADE_CONTENTS.find((t) => t.slug === slug);
}
