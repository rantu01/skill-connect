export const PHONE = "0488 289 005";
export const PHONE_HREF = "tel:0488289005";
export const PHONE_ALT = "0468 289 005";
export const PHONE_ALT_HREF = "tel:0468289005";
export const EMAIL = "enquires@skillsconnect.au";
export const EMAIL_HREF = "mailto:enquires@skillsconnect.au";
export const ADDRESS = "Suite 11, 41-45 Rickard Road, Bankstown NSW 2200";
export const ADDRESS_MAP_HREF = "https://maps.app.goo.gl/fMbiYq154ohCwZ9FA";
export const BOOKING_HREF =
  "https://meetings-ap1.hubspot.com/skillsconnect/skills-connect-consultant-meeting";
export const BOOKING_LABEL = "Book a free skills audit";
export const QUIZ_HREF = "https://skillsconnect.au/60-second-free-skills-check/";
export const QUIZ_LABEL = "Take the 2-minute eligibility quiz";

export type SkillsCheckPayload = {
  industry: string;
  qualification: string;
  years: string;
  location: string;
  state: string;
  hasFormal: string;
  formalDetails: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  questions: string;
  consent: boolean;
  cvName?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSkillsCheckForm(body: Record<string, unknown>) {
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const industry = str(body.industry);
  const qualification = str(body.qualification);
  const years = str(body.years);
  const location = str(body.location);
  const state = str(body.state);
  const hasFormal = str(body.hasFormal);
  const formalDetails = str(body.formalDetails);
  const firstName = str(body.firstName);
  const lastName = str(body.lastName);
  const phone = str(body.phone).replace(/[\s()-]/g, "");
  const email = str(body.email);
  const questions = str(body.questions);
  const consent = body.consent === true;

  if (!industry) return { valid: false as const, error: "Please select your industry." };
  if (!qualification)
    return { valid: false as const, error: "Please select the qualification you are looking for." };
  if (!years) return { valid: false as const, error: "Please select your years of experience." };
  if (!location) return { valid: false as const, error: "Please select where your experience is from." };
  if (!state) return { valid: false as const, error: "Please select the state you live in." };
  if (hasFormal !== "Yes" && hasFormal !== "No")
    return { valid: false as const, error: "Please tell us whether you have formal qualifications." };
  if (!firstName) return { valid: false as const, error: "First name is required." };
  if (!lastName) return { valid: false as const, error: "Last name is required." };
  if (!phone || phone.replace(/\D/g, "").length < 8)
    return { valid: false as const, error: "Please enter a valid contact number." };
  if (!email || !EMAIL_RE.test(email))
    return { valid: false as const, error: "Please enter a valid email address." };
  if (!consent)
    return {
      valid: false as const,
      error: "Please accept the terms and conditions and privacy policy.",
    };

  const data: SkillsCheckPayload = {
    industry,
    qualification,
    years,
    location,
    state,
    hasFormal,
    formalDetails,
    firstName,
    lastName,
    phone,
    email,
    questions,
    consent,
  };
  return { valid: true as const, data };
}

export function validateContactForm(body: Record<string, unknown>) {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const trade = typeof body.trade === "string" ? body.trade.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length < 2) return { valid: false, error: "Name is required." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { valid: false, error: "Valid email is required." };
  if (!phone || phone.length < 5) return { valid: false, error: "Valid phone is required." };
  if (!trade) return { valid: false, error: "Trade is required." };

  return { valid: true, data: { name, email, phone, trade, message } };
}