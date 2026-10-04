const EMAIL = "enquires@skillsconnect.au";

export async function sendContactEmail(data: { name: string; email: string; phone: string; trade: string; message: string }) {
  if (process.env.NODE_ENV === "development") {
    console.log("[DEV EMAIL] To:", EMAIL, "| From:", data.email, "| Subject: New RPL enquiry —", data.trade);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Skills Connect <enquiries@skillsconnect.au>",
      to: EMAIL,
      subject: `New RPL enquiry — ${data.trade}`,
      reply_to: data.email,
      html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone}</p><p><strong>Trade:</strong> ${data.trade}</p><p><strong>Message:</strong> ${data.message}</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Email API error: ${res.status}`);
}

export async function sendContactConfirmation(toEmail: string) {
  if (process.env.NODE_ENV === "development") {
    console.log("[DEV EMAIL] Confirmation to:", toEmail);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Skills Connect <enquiries@skillsconnect.au>",
      to: toEmail,
      subject: "Thanks for your enquiry",
      html: "<p>Thanks for contacting Skills Connect. We&apos;ll review your enquiry and get back to you soon.</p>",
    }),
  });
  if (!res.ok) throw new Error(`Confirmation email API error: ${res.status}`);
}

export type SkillsCheckEmailAttachment = {
  filename: string;
  contentBase64: string;
};

export async function sendSkillsCheckEmail(data: {
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
  cv?: SkillsCheckEmailAttachment | null;
}) {
  if (process.env.NODE_ENV === "development") {
    console.log(
      "[DEV EMAIL] To:",
      EMAIL,
      "| Subject: New 60-second skills check —",
      data.qualification,
      data.cv ? `| CV: ${data.cv.filename}` : "| No CV"
    );
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Skills Connect <enquiries@skillsconnect.au>",
      to: EMAIL,
      subject: `New 60-second skills check — ${data.qualification}`,
      reply_to: data.email,
      html: `<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone}</p><p><strong>Industry:</strong> ${data.industry}</p><p><strong>Qualification:</strong> ${data.qualification}</p><p><strong>Experience:</strong> ${data.years} (${data.location})</p><p><strong>State:</strong> ${data.state}</p><p><strong>Formal qualifications:</strong> ${data.hasFormal}${data.formalDetails ? ` — ${data.formalDetails}` : ""}</p><p><strong>Questions:</strong> ${data.questions || "—"}</p>${data.cv ? `<p><strong>CV attached:</strong> ${data.cv.filename}</p>` : ""}`,
      ...(data.cv ? { attachments: [{ filename: data.cv.filename, content: data.cv.contentBase64 }] } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Email API error: ${res.status}`);
}

export async function sendSkillsCheckConfirmation(
  toEmail: string,
  firstName: string,
  qualification: string
) {
  if (process.env.NODE_ENV === "development") {
    console.log("[DEV EMAIL] Skills check confirmation to:", toEmail);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Skills Connect <enquiries@skillsconnect.au>",
      to: toEmail,
      subject: "Thanks for completing your free skills check",
      html: `<p>Hi ${firstName},</p><p>Thanks for completing your free 60-second skills check for <strong>${qualification}</strong>.</p><p>A Skills Connect consultant will be in touch shortly.</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Confirmation email API error: ${res.status}`);
}