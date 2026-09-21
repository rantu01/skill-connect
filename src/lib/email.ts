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