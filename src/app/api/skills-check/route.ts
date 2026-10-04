import { NextResponse } from "next/server";
import { sendSkillsCheckConfirmation, sendSkillsCheckEmail } from "@/lib/email";
import {
  SKILLS_CHECK_MAX_UPLOAD_BYTES,
  qualificationsFor,
} from "@/lib/skills-check-data";
import { validateSkillsCheckForm } from "@/lib/contact";

const ALLOWED_EXTENSIONS = [".pdf", ".docx"];
const ALLOWED_MIME = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateSkillsCheckForm(body);

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const data = validation.data;

    // The qualification must belong to the selected industry's list
    // (or be the explicit "Not sure yet?" choice).
    const allowed = qualificationsFor(data.industry);
    if (!allowed.includes(data.qualification)) {
      return NextResponse.json(
        { error: "Please select a valid qualification for your industry." },
        { status: 400 }
      );
    }

    // Optional CV upload, delivered as a base64 attachment.
    let cv: { filename: string; contentBase64: string } | null = null;
    const rawCv = body.cv as unknown;
    if (rawCv && typeof rawCv === "object") {
      const { filename, mime, contentBase64 } = rawCv as {
        filename?: unknown;
        mime?: unknown;
        contentBase64?: unknown;
      };
      if (
        typeof filename !== "string" ||
        typeof mime !== "string" ||
        typeof contentBase64 !== "string" ||
        !filename ||
        !contentBase64
      ) {
        return NextResponse.json({ error: "The uploaded file is invalid." }, { status: 400 });
      }
      const ext = filename.slice(filename.lastIndexOf(".")).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext) || !ALLOWED_MIME.includes(mime)) {
        return NextResponse.json(
          { error: "Only PDF or DOCX files can be uploaded." },
          { status: 400 }
        );
      }
      const size = Math.floor((contentBase64.length * 3) / 4);
      if (size > SKILLS_CHECK_MAX_UPLOAD_BYTES) {
        return NextResponse.json(
          { error: "The uploaded file must be smaller than 3MB." },
          { status: 400 }
        );
      }
      cv = { filename, contentBase64 };
    }

    await sendSkillsCheckEmail({ ...data, cv });
    await sendSkillsCheckConfirmation(data.email, data.firstName, data.qualification);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Skills check API error:", error);
    return NextResponse.json({ error: "Failed to submit your skills check" }, { status: 500 });
  }
}
