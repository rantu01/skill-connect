export type RplGuide = {
  slug: string;
  trade: string;
  code: string;
  qualification: string;
  industry: string;
  // Fine-grained reference listing category (e.g. "Construction" vs industry
  // "Building & Construction"; "Health Services" vs industry "Community Services")
  category: string;
  // Reference "Last updated" date shown on the guide card and detail page
  updated: string;
  description: string;
  // Top-level trade pathway page slug in this project (if one exists)
  pathwaySlug?: string;
};

export const RPL_INDUSTRIES = [
  "Automotive",
  "Building & Construction",
  "Engineering & Manufacturing",
  "Furnishing & Cabinetmaking",
  "Property Services",
  "Hairdressing & Beauty",
  "Hospitality & Commercial Cookery",
  "Community Services",
  "Health Services",
  "Skills Assessment",
] as const;

// Broad industry cards shown on /resources (reference groups Health Services
// and Skills Assessment guides under "Community Services" — 6 guides).
export const RPL_BROAD_INDUSTRIES = [
  "Automotive",
  "Building & Construction",
  "Engineering & Manufacturing",
  "Furnishing & Cabinetmaking",
  "Property Services",
  "Hairdressing & Beauty",
  "Hospitality & Commercial Cookery",
  "Community Services",
] as const;

// Fine-grained category chips shown on the guide directory (reference labels).
export const RPL_CATEGORIES = [
  "Automotive",
  "Construction",
  "Engineering & Manufacturing",
  "Furnishing & Cabinetmaking",
  "Property Services",
  "Hairdressing & Beauty",
  "Hospitality & Commercial Cookery",
  "Community Services",
  "Health Services",
  "Skills Assessment",
] as const;

const COMMUNITY_GROUP = new Set(["Community Services", "Health Services", "Skills Assessment"]);

// Reference behaviour: the "Community Services" industry card/filter covers
// Community Services + Health Services + Skills Assessment guides (6 total).
export function guideMatchesIndustry(guide: RplGuide, industry: string): boolean {
  if (industry === "Community Services") return COMMUNITY_GROUP.has(guide.industry);
  return guide.industry === industry;
}

export function countGuidesByBroadIndustry(industry: string): number {
  return RPL_GUIDES.filter((g) => guideMatchesIndustry(g, industry)).length;
}

// Source: reference website /resources and /rpl-evidence-guides listings
// (titles, qualification codes and descriptions match the reference cards).
export const RPL_GUIDES: RplGuide[] = [
  {
    slug: "vetassess-acwa-skills-assessment",
    trade: "VETASSESS & ACWA Skills Assessment",
    code: "VETASSESS / ACWA",
    qualification: "Migration skills assessment for community, health and social welfare occupations",
    industry: "Skills Assessment",
    category: "Skills Assessment",
    updated: "7 September 2026",
    description:
      "How to build an evidence file that satisfies VETASSESS or ACWA for community, welfare, disability, aged care and allied health support occupations.",
  },
  {
    slug: "ageing-support",
    trade: "Ageing Support",
    code: "CHC43015",
    qualification: "Certificate IV in Ageing Support",
    industry: "Community Services",
    category: "Community Services",
    updated: "7 September 2026",
    description:
      "Evidence portfolio guide for experienced aged care workers stepping up to team leader, care coordination and CHC43015 recognition.",
    pathwaySlug: "ageing-support",
  },
  {
    slug: "community-services",
    trade: "Community Services",
    code: "CHC52021",
    qualification: "Diploma of Community Services",
    industry: "Community Services",
    category: "Community Services",
    updated: "7 September 2026",
    description:
      "Evidence portfolio guide for case managers and community workers seeking CHC52021, and the qualification most often paired with an ACWA skills assessment.",
    pathwaySlug: "community-services",
  },
  {
    slug: "disability-support",
    trade: "Disability Support",
    code: "CHC43121",
    qualification: "Certificate IV in Disability Support",
    industry: "Community Services",
    category: "Community Services",
    updated: "7 September 2026",
    description:
      "Evidence portfolio guide for NDIS disability support workers seeking CHC43121 recognition, built around person-centred practice and positive behaviour support.",
    pathwaySlug: "disability-support",
  },
  {
    slug: "individual-support",
    trade: "Individual Support (Ageing & Disability)",
    code: "CHC33021",
    qualification: "Certificate III in Individual Support (Ageing and Disability)",
    industry: "Community Services",
    category: "Community Services",
    updated: "7 September 2026",
    description:
      "Evidence portfolio guide for support workers seeking recognition against CHC33021, including the supervised workplace hours assessors must see.",
    pathwaySlug: "individual-support",
  },
  {
    slug: "health-services-assistance",
    trade: "Health Services Assistance",
    code: "HLT33115",
    qualification: "Certificate III in Health Services Assistance (Assisting in Nursing Work)",
    industry: "Health Services",
    category: "Health Services",
    updated: "7 September 2026",
    description:
      "Evidence portfolio guide for assistants in nursing and hospital support staff seeking HLT33115 recognition under registered nurse supervision.",
    pathwaySlug: "health-services-assistance",
  },
  {
    slug: "mechanical-diagnosis",
    trade: "Automotive Mechanical Diagnosis",
    code: "AUR40216",
    qualification: "Certificate IV in Automotive Mechanical Diagnosis",
    industry: "Automotive",
    category: "Automotive",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate IV in Automotive Mechanical Diagnosis.",
    pathwaySlug: "mechanical-diagnosis",
  },
  {
    slug: "heavy-diesel-mechanic",
    trade: "Heavy Diesel Mechanic",
    code: "AUR31120",
    qualification: "Certificate III in Heavy Commercial Vehicle Mechanical Technology",
    industry: "Automotive",
    category: "Automotive",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Heavy Commercial Vehicle Mechanical Technology.",
    pathwaySlug: "heavy-diesel-mechanic",
  },
  {
    slug: "light-vehicle-mechanic",
    trade: "Light Vehicle Mechanic",
    code: "AUR30620",
    qualification: "Certificate III in Light Vehicle Mechanical Technology",
    industry: "Automotive",
    category: "Automotive",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for independent RTO evaluation.",
    pathwaySlug: "light-vehicle-mechanic",
  },
  {
    slug: "bricklaying",
    trade: "Bricklaying and Blocklaying",
    code: "CPC33020",
    qualification: "Certificate III in Bricklaying and Blocklaying",
    industry: "Building & Construction",
    category: "Construction",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Bricklaying and Blocklaying.",
    pathwaySlug: "bricklaying",
  },
  {
    slug: "carpentry",
    trade: "Carpentry",
    code: "CPC30220",
    qualification: "Certificate III in Carpentry",
    industry: "Building & Construction",
    category: "Construction",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Carpentry.",
    pathwaySlug: "carpentry",
  },
  {
    slug: "concreting",
    trade: "Concreting",
    code: "CPC30320",
    qualification: "Certificate III in Concreting",
    industry: "Building & Construction",
    category: "Construction",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Concreting.",
    pathwaySlug: "concreting",
  },
  {
    slug: "waterproofing",
    trade: "Construction Waterproofing",
    code: "CPC31420",
    qualification: "Certificate III in Construction Waterproofing",
    industry: "Building & Construction",
    category: "Construction",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Construction Waterproofing.",
    pathwaySlug: "waterproofing",
  },
  {
    slug: "painting-decorating",
    trade: "Painting and Decorating",
    code: "CPC30620",
    qualification: "Certificate III in Painting and Decorating",
    industry: "Building & Construction",
    category: "Construction",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Painting and Decorating.",
    pathwaySlug: "painting-decorating",
  },
  {
    slug: "roofing",
    trade: "Roof Tiling",
    code: "CPC32620",
    qualification: "Certificate III in Roof Tiling",
    industry: "Building & Construction",
    category: "Construction",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Roof Tiling.",
    pathwaySlug: "roofing",
  },
  {
    slug: "wall-floor-tiling",
    trade: "Wall and Floor Tiling",
    code: "CPC31320",
    qualification: "Certificate III in Wall and Floor Tiling",
    industry: "Building & Construction",
    category: "Construction",
    updated: "7 September 2026",
    description:
      "Step-by-step preparation guide for building a decision-ready RPL evidence portfolio for Certificate III in Wall and Floor Tiling.",
    pathwaySlug: "wall-floor-tiling",
  },
  {
    slug: "fabrication-trade",
    trade: "Fabrication Trade (Boilermaker / Welder)",
    code: "MEM30319",
    qualification: "Certificate III in Engineering - Fabrication Trade",
    industry: "Engineering & Manufacturing",
    category: "Engineering & Manufacturing",
    updated: "8 September 2026",
    description:
      "Complete preparation guide for boilermakers, welders and metal fabricators assembling a decision-ready RPL evidence portfolio for MEM30319.",
    pathwaySlug: "fabrication-trade",
  },
  {
    slug: "cabinet-making",
    trade: "Cabinet Maker / Wood Machinist",
    code: "MSF30322",
    qualification: "Certificate III in Cabinet Making and Timber Technology",
    industry: "Furnishing & Cabinetmaking",
    category: "Furnishing & Cabinetmaking",
    updated: "8 September 2026",
    description:
      "Step-by-step evidence portfolio guide for cabinet makers and wood machinists seeking RPL for MSF30322.",
    pathwaySlug: "cabinet-making",
  },
  {
    slug: "glass-and-glazing",
    trade: "Glazier",
    code: "MSF30413",
    qualification: "Certificate III in Glass and Glazing",
    industry: "Furnishing & Cabinetmaking",
    category: "Furnishing & Cabinetmaking",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for glaziers and glass installers seeking RPL for MSF30413.",
    pathwaySlug: "glass-and-glazing",
  },
  {
    slug: "property-agency-management",
    trade: "Agency Principal / Licensed Property Manager",
    code: "CPP51122",
    qualification: "Diploma of Property (Agency Management)",
    industry: "Property Services",
    category: "Property Services",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for agency principals, licensees in charge and senior property managers seeking RPL for CPP51122.",
    pathwaySlug: "property-agency-management",
  },
  {
    slug: "real-estate-practice",
    trade: "Real Estate / Property Services Representative",
    code: "CPP41419",
    qualification: "Certificate IV in Real Estate Practice",
    industry: "Property Services",
    category: "Property Services",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for real estate agents, property managers and strata officers seeking RPL for CPP41419.",
    pathwaySlug: "real-estate-practice",
  },
  {
    slug: "beauty-therapy",
    trade: "Beauty Therapist",
    code: "SHB50115",
    qualification: "Diploma of Beauty Therapy",
    industry: "Hairdressing & Beauty",
    category: "Hairdressing & Beauty",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for beauty therapists seeking RPL for SHB50115.",
    pathwaySlug: "beauty-therapy",
  },
  {
    slug: "hairdressing",
    trade: "Hairdresser",
    code: "SHB30416",
    qualification: "Certificate III in Hairdressing",
    industry: "Hairdressing & Beauty",
    category: "Hairdressing & Beauty",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for hairdressers and salon stylists seeking RPL for SHB30416.",
    pathwaySlug: "hairdressing",
  },
  {
    slug: "salon-management",
    trade: "Salon Manager / Salon Owner",
    code: "SHB50216",
    qualification: "Diploma of Salon Management",
    industry: "Hairdressing & Beauty",
    category: "Hairdressing & Beauty",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for salon managers and owners seeking RPL for SHB50216.",
    pathwaySlug: "salon-management",
  },
  {
    slug: "baking",
    trade: "Baker",
    code: "FBP30521",
    qualification: "Certificate III in Baking",
    industry: "Hospitality & Commercial Cookery",
    category: "Hospitality & Commercial Cookery",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for bakers producing bread, rolls and cakes seeking RPL for FBP30521.",
    pathwaySlug: "baking",
  },
  {
    slug: "kitchen-management",
    trade: "Chef de Partie / Sous Chef",
    code: "SIT40521",
    qualification: "Certificate IV in Kitchen Management",
    industry: "Hospitality & Commercial Cookery",
    category: "Hospitality & Commercial Cookery",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for chefs de partie and sous chefs seeking RPL for SIT40521.",
    pathwaySlug: "kitchen-management",
  },
  {
    slug: "commercial-cookery",
    trade: "Commercial Cook / Chef",
    code: "SIT30821",
    qualification: "Certificate III in Commercial Cookery",
    industry: "Hospitality & Commercial Cookery",
    category: "Hospitality & Commercial Cookery",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for cooks and chefs seeking RPL for SIT30821.",
    pathwaySlug: "commercial-cookery",
  },
  {
    slug: "advanced-hospitality-management",
    trade: "Hospitality General Manager / Multi-site Manager",
    code: "SIT60322",
    qualification: "Advanced Diploma of Hospitality Management",
    industry: "Hospitality & Commercial Cookery",
    category: "Hospitality & Commercial Cookery",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for general managers and multi-site hospitality leaders seeking RPL for SIT60322.",
    pathwaySlug: "advanced-hospitality-management",
  },
  {
    slug: "hospitality-management",
    trade: "Hospitality Supervisor / Venue Manager",
    code: "SIT50422",
    qualification: "Diploma of Hospitality Management",
    industry: "Hospitality & Commercial Cookery",
    category: "Hospitality & Commercial Cookery",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for venue supervisors and hospitality managers seeking RPL for SIT50422.",
    pathwaySlug: "hospitality-management",
  },
  {
    slug: "patisserie",
    trade: "Pastry Chef / Pâtissier",
    code: "SIT31021",
    qualification: "Certificate III in Patisserie",
    industry: "Hospitality & Commercial Cookery",
    category: "Hospitality & Commercial Cookery",
    updated: "8 September 2026",
    description:
      "Evidence portfolio guide for pastry chefs and pâtissiers seeking RPL for SIT31021.",
    pathwaySlug: "patisserie",
  },
];

export function getGuideBySlug(slug: string): RplGuide | undefined {
  return RPL_GUIDES.find((g) => g.slug === slug);
}

export function countGuidesByIndustry(industry: string): number {
  return RPL_GUIDES.filter((g) => g.industry === industry).length;
}
