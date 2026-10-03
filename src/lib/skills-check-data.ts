// Skills Check industry + qualification options.
// Labels reproduced verbatim from the publicly visible reference flow
// (skillscertified.com.au free-skills-check), including original quirks
// such as "Techonology" and MSF30422. "Not sure yet?" is always offered.

export const SKILLS_CHECK_INDUSTRIES = [
  "Automotive Retail Service & Repair Licence",
  "Building & Construction",
  "Business & Finance",
  "Civil Construction",
  "Commercial Cookery & Hospitality",
  "Community Services",
  "Engineering",
  "Events & Entertainment",
  "Hair & Beauty",
  "Information Technology",
  "Mining and Resources",
  "Plumbing Services",
  "Security & Cleaning",
  "Transport & Logistics",
  "Vocational Education & Training",
] as const;

export type SkillsCheckIndustry = (typeof SKILLS_CHECK_INDUSTRIES)[number];

export const NOT_SURE_YET = "Not sure yet?";

export const SKILLS_CHECK_QUALIFICATIONS: Record<SkillsCheckIndustry, string[]> = {
  "Automotive Retail Service & Repair Licence": [
    "Certificate III in Light Vehicle Mechanical Technology - AUR30620",
    "Certificate III in Heavy Commercial Vehicle Mechanical Technology - AUR31120",
    "Certificate IV in Automotive Mechanical Diagnosis - AUR40226",
    "Diploma of Automotive Technology - AUR50216",
  ],
  "Building & Construction": [
    "Advanced Diploma of Building and Construction (Management) - CPC60220",
    "Certificate I in Construction - CPC10126",
    "Certificate II in Split Air-conditioning and Heat Pump Systems - UEE20120",
    "Certificate III in Air-conditioning and Refrigeration - UEE32225",
    "Certificate III in Bricklaying and Blocklaying - CPC33020",
    "Certificate III in Cabinet Making and Timber Technology - MSF30322",
    "Certificate III in Carpentry - CPC30220",
    "Certificate III in Concreting - CPC30320",
    "Certificate III in Construction Waterproofing - CPC31420",
    "Certificate III in Electrotechnology Electrician - UEE30820",
    "Certificate III in Glass and Glazing - MSF30422",
    "Certificate III in Joinery - CPC31920",
    "Certificate III in Landscape Construction - AHC30921",
    "Certificate III in Painting and Decorating - CPC30620",
    "Certificate III in Roof Tiling - CPC30820",
    "Certificate III in Solid Plastering - CPC31020",
    "Certificate III in Stonemasonry - CPC32320",
    "Certificate III in Wall and Floor Tiling - CPC31320",
    "Certificate III in Wall and Ceiling Lining - CPC31220",
    "Certificate III in Work Health and Safety - BSB30719",
    "Certificate IV in Building and Construction - CPC40120",
    "Certificate IV in Work Health and Safety - BSB41419",
    "Diploma of Building and Construction (Building) - CPC50220",
    "Diploma of Project Management - BSB50820",
  ],
  "Business & Finance": [
    "Advanced Diploma of Business - BSB60120",
    "Advanced Diploma of Leadership and Management - BSB60420",
    "Advanced Diploma of Program Management - BSB60720",
    "Advanced Diploma of Work Health and Safety - BSB60619",
    "Certificate III in Business - BSB30120",
    "Certificate IV in Business - BSB40120",
    "Certificate IV in Entrepreneurship and New Business - BSB40320",
    "Certificate IV in Leadership and Management - BSB40520",
    "Certificate IV in Project Management Practice - BSB40920",
    "Diploma of Business - BSB50120",
    "Diploma of Human Resources Management - BSB50320",
    "Diploma of Leadership and Management - BSB50420",
    "Diploma of Marketing and Communication - BSB50620",
    "Diploma of Project Management - BSB50820",
    "Diploma of Quality Auditing - BSB50920",
    "Diploma of Work Health and Safety - BSB51319",
    "Graduate Diploma of Management (Learning) - BSB80120",
    "Graduate Diploma of Portfolio Management - BSB80220",
    "Graduate Diploma of Strategic Leadership - BSB80320",
  ],
  "Civil Construction": [
    "Certificate III in Civil Construction (General) - RII30920",
    "Certificate III in Civil Construction Plant Operations - RII30820",
    "Certificate IV in Civil Construction - RII40720",
  ],
  "Commercial Cookery & Hospitality": [
    "Advanced Diploma of Hospitality Management - SIT60322",
    "Certificate III in Commercial Cookery - SIT30821",
    "Certificate III in Patisserie - SIT31021",
    "Certificate IV in Kitchen Management - SIT40521",
    "Certificate IV in Patisserie - SIT40721",
    "Diploma of Hospitality Management - SIT50422",
  ],
  "Community Services": [
    "Certificate IV in Career Development - CHC41215",
    "Graduate Certificate in Career Development Practice - CHC81315",
  ],
  Engineering: [
    "Certificate III in Engineering - Fabrication Trade - MEM31925",
    "Certificate III in Engineering - Mechanical Trade - MEM30219",
    "Certificate IV in Engineering - MEM40119",
    "Diploma of Engineering - Technical - MEM50222",
  ],
  "Events & Entertainment": [
    "Certificate IV in Screen and Media - CUA41220",
    "Diploma of Screen and Media - CUA51020",
  ],
  "Hair & Beauty": [
    "Certificate II in Salon Assistant - SHB20216",
    "Certificate III in Barbering - SHB30516",
    "Certificate III in Beauty Services - SHB30121",
    "Certificate III in Hairdressing - SHB30416",
    "Certificate III in Make-Up - SHB30221",
    "Certificate III in Nail Technology - SHB30321",
    "Certificate IV in Beauty Therapy - SHB40121",
    "Certificate IV in Hairdressing - SHB40216",
    "Diploma of Beauty Therapy - SHB50121",
    "Diploma of Salon Management - SHB50216",
  ],
  "Information Technology": [
    "Advanced Diploma of Information Technology - ICT60220",
    "Diploma of Information Techonology - ICT50220",
  ],
  "Mining and Resources": ["Certificate III in Surface Extraction Operations - RII30120"],
  "Plumbing Services": [
    "Certificate III in Plumbing - CPC32420",
    "Certificate III in Roof Plumbing - CPC32620",
    "Certificate IV in Plumbing and Services - CPC40920",
  ],
  "Security & Cleaning": [
    "Certificate IV in Security Risk Analysis - CPP41519",
    "Certificate IV in Security Management - CPP40719",
    "Diploma of Security and Risk Management - CPP50619",
  ],
  "Transport & Logistics": ["Diploma of Logistics - TLI50224"],
  "Vocational Education & Training": ["Graduate Diploma of Management (Learning) - BSB80120"],
};

export const SKILLS_CHECK_YEARS = [
  "1 - 2 Years",
  "3 - 4 Years",
  "5 - 9 Years",
  "10 Years",
] as const;

export const SKILLS_CHECK_LOCATIONS = ["Australia", "Overseas", "Both"] as const;

export const SKILLS_CHECK_STATES = [
  "NSW",
  "VIC",
  "QLD",
  "SA",
  "WA",
  "ACT",
  "NT",
  "TAS",
] as const;

export const SKILLS_CHECK_FORMAL = ["Yes", "No"] as const;

export const SKILLS_CHECK_DEFAULTS = {
  years: "3 - 4 Years",
  location: "Australia",
  state: "VIC",
  formal: "No",
} as const;

export const SKILLS_CHECK_STEP_TITLES = ["Step1", "Step 2", "Step 3", "Step 4", "Step 5"] as const;

export const SKILLS_CHECK_CONSENT_TEXT =
  "I understand and accept the websites terms and conditions and privacy policy. I agree that Skills Connect may contact me about the services it provides.";

export const SKILLS_CHECK_MAX_UPLOAD_BYTES = 3 * 1024 * 1024;
export const SKILLS_CHECK_ACCEPTED_UPLOADS = [".pdf", ".docx"] as const;

export function qualificationsFor(industry: string): string[] {
  return (SKILLS_CHECK_QUALIFICATIONS as Record<string, string[]>)[industry] ?? [];
}
