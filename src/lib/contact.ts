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