import { NextResponse } from "next/server";
import { sendContactEmail, sendContactConfirmation } from "@/lib/email";
import { validateContactForm } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateContactForm(body);

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { name, email, phone, trade, message } = validation.data;

    await sendContactEmail({ name, email, phone, trade, message });
    await sendContactConfirmation(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}