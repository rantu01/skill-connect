import type { GuideDetails } from "@/lib/rpl-guide-details";
import type { RplGuide } from "@/lib/rpl-guides";

// Client-side PDF generation for RPL evidence guides.
// Mirrors the reference website's approach: the PDF is generated in the
// browser with jsPDF from the guide's structured data (no static PDF files,
// no invented content). Filename pattern matches the reference:
//   {slug}-rpl-evidence-portfolio-guide.pdf

export type GuidePdfOption = {
  label: string;
  name: string;
  mandatory: boolean;
  examples: string[];
};

export type GuidePdfInput = {
  slug: string;
  trade: string;
  qualificationCode: string;
  qualificationTitle: string;
  lastUpdated: string;
  summary: string;
  intro: string;
  whoFor: string[];
  visual: {
    photos: number;
    videos: number;
    clipSeconds: number;
    note: string;
    options: GuidePdfOption[];
    indicativeCounts: boolean;
  };
  evidencePairs: { acceptable: string; unacceptable: string }[];
  documents: string[];
  submission: { title: string; body: string }[];
  rejectionReasons: string[];
  faq: { question: string; answer: string }[];
};

export function guidePdfFilename(slug: string): string {
  return `${slug}-rpl-evidence-portfolio-guide.pdf`;
}

function leadingCount(line: string): number {
  const m = line.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

function clipSeconds(line: string): number {
  const m = line.match(/(\d+)\s*seconds?/i);
  return m ? parseInt(m[1], 10) : 30;
}

// Split "Option E — Structural masonry" / "Category A — ..." into label + name.
function splitOptionName(name: string): { label: string; name: string } {
  const m = name.match(/^(Option [A-E]|Category [A-C]|Bundle [A-E])\s*[—–-]\s*(.+)$/i);
  if (m) return { label: m[1], name: m[2] };
  const m2 = name.match(/^(.+?)\s*[—–-]\s*(.+)$/);
  if (m2) return { label: m2[1], name: m2[2] };
  return { label: name, name: "" };
}

export function toPdfInput(guide: RplGuide, details: GuideDetails): GuidePdfInput {
  const docBased = leadingCount(details.photoLine) === 0 && leadingCount(details.videoLine) === 0;
  const maxPairs = Math.max(details.acceptable.length, details.unacceptable.length);
  const evidencePairs = Array.from({ length: maxPairs }, (_, i) => ({
    acceptable: details.acceptable[i] ?? "",
    unacceptable: details.unacceptable[i] ?? "",
  })).filter((p) => p.acceptable || p.unacceptable);

  return {
    slug: guide.slug,
    trade: guide.trade,
    qualificationCode: guide.code,
    qualificationTitle: guide.qualification,
    lastUpdated: details.lastUpdated,
    summary: guide.description,
    intro: guide.description,
    whoFor: details.whoFor,
    visual: {
      photos: docBased ? 0 : leadingCount(details.photoLine),
      videos: docBased ? 0 : leadingCount(details.videoLine),
      clipSeconds: docBased ? 0 : clipSeconds(details.videoLine),
      note: details.visualNote ?? "",
      options: details.options.map((o) => {
        const { label, name } = splitOptionName(o.name);
        return { label, name, mandatory: o.mandatory, examples: o.tasks };
      }),
      indicativeCounts: Boolean(details.optionDisclaimer),
    },
    evidencePairs,
    documents: details.docs,
    submission: details.steps,
    rejectionReasons: details.sendBack,
    faq: details.faqs.map((f) => ({ question: f.q, answer: f.a })),
  };
}

type JsPdf = {
  internal: { pageSize: { getWidth(): number; getHeight(): number } };
  setFont(name: string, style?: string): void;
  setFontSize(size: number): void;
  setTextColor(r: number, g: number, b: number): void;
  setFillColor(r: number, g: number, b: number): void;
  setDrawColor(r: number, g: number, b: number): void;
  setLineWidth(w: number): void;
  splitTextToSize(text: string, maxWidth: number): string[];
  text(text: string | string[], x: number, y: number, opts?: { align?: string }): void;
  rect(x: number, y: number, w: number, h: number, style?: string): void;
  line(x1: number, y1: number, x2: number, y2: number): void;
  addPage(): void;
  getNumberOfPages(): number;
  setPage(n: number): void;
  save(filename: string): void;
  output(type: "blob"): Blob;
};

export async function buildGuidePdf(input: GuidePdfInput): Promise<JsPdf> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" }) as unknown as JsPdf;

  const MARGIN = 48;
  const LINE = 15;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const contentW = pageW - 96;
  let y = MARGIN;

  const ensure = (needed: number) => {
    if (y + needed > pageH - MARGIN) {
      doc.addPage();
      y = MARGIN;
    }
  };
  const para = (
    text: string,
    opts: { size?: number; style?: string; gap?: number; indent?: number } = {}
  ) => {
    const { size = 10, style = "normal", gap = 6, indent = 0 } = opts;
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.splitTextToSize(text, contentW - indent).forEach((line) => {
      ensure(LINE);
      doc.text(line, MARGIN + indent, y);
      y += size < 11 ? LINE : size + 6;
    });
    y += gap;
  };
  const section = (title: string) => {
    ensure(46);
    y += 8;
    doc.setDrawColor(24, 203, 149);
    doc.setLineWidth(2);
    doc.line(MARGIN, y - 12, 84, y - 12);
    para(title, { size: 13, style: "bold", gap: 4 });
  };
  const bullets = (items: string[]) => {
    items.forEach((item) => para(`\u2022  ${item}`, { gap: 2, indent: 8 }));
    y += 6;
  };

  // Header band
  doc.setFillColor(56, 54, 68);
  doc.rect(0, 0, pageW, 132, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("SKILLS CONNECT  |  RPL EVIDENCE PORTFOLIO GUIDE", MARGIN, 46);
  doc.setFontSize(19);
  const titleLines = doc.splitTextToSize(
    `${input.trade} (${input.qualificationCode})`,
    contentW
  );
  let ty = 76;
  titleLines.slice(0, 2).forEach((line) => {
    doc.text(line, MARGIN, ty);
    ty += 23;
  });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`${input.qualificationTitle}  |  Updated ${input.lastUpdated}`, MARGIN, 118);

  doc.setTextColor(30, 30, 30);
  y = 168;
  para(input.intro, { gap: 12 });

  section("Who this guide is for");
  bullets(input.whoFor);

  const docBased = input.visual.photos === 0 && input.visual.videos === 0;
  section(
    docBased
      ? "1. What the assessor expects to see"
      : "1. Visual evidence guidelines (photos & videos)"
  );
  para(
    docBased
      ? "This assessment is decided on documents. Work through each bundle below and make sure every claim is supported by paperwork the assessor can verify independently."
      : `Submit ${input.visual.photos} clear workplace photos and ${input.visual.videos} video clips of approximately ${input.visual.clipSeconds} seconds each, demonstrating hands-on work.`,
    { gap: 10 }
  );
  if (input.visual.note) para(input.visual.note, { gap: 10 });
  input.visual.options.forEach((o) => {
    para(`${o.label} \u2014 ${o.name}${o.mandatory ? " (MANDATORY)" : ""}`, {
      style: "bold",
      gap: 2,
    });
    bullets(o.examples);
  });
  if (input.visual.indicativeCounts) {
    para(
      "These task counts are our standard preparation guidance. Your assessing RTO may set different requirements - we confirm them before you start collecting.",
      { gap: 10 }
    );
  }

  section("2. Acceptable vs unacceptable visual evidence");
  input.evidencePairs.forEach((p) => {
    if (p.acceptable) para(`Do this: ${p.acceptable}`, { gap: 1 });
    if (p.unacceptable) para(`Avoid: ${p.unacceptable}`, { gap: 8, indent: 8 });
  });

  section("3. Supporting documents checklist");
  bullets(input.documents);

  section("4. How to organise and submit your portfolio");
  input.submission.forEach((s) => {
    para(s.title, { style: "bold", gap: 2 });
    para(s.body, { gap: 8, indent: 8 });
  });

  section("5. Why portfolios get sent back");
  bullets(input.rejectionReasons);

  section("6. Questions we get asked");
  input.faq.forEach((f) => {
    para(f.question, { style: "bold", gap: 2 });
    para(f.answer, { gap: 8, indent: 8 });
  });

  section("Next step");
  para(
    "Skills Connect prepares and reviews your evidence. Assessment and certification are carried out by an independent registered training organisation or assessing authority."
  );
  para("Call 0488 289 005  |  enquires@skillsconnect.au  |  skillsconnect.au");

  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`${input.trade} RPL Evidence Portfolio Guide \u2014 Skills Connect`, MARGIN, pageH - 24);
    doc.text(`Page ${p} of ${pages}`, pageW - MARGIN, pageH - 24, { align: "right" });
  }

  return doc;
}

export async function downloadGuidePdf(input: GuidePdfInput): Promise<void> {
  const doc = await buildGuidePdf(input);
  doc.save(guidePdfFilename(input.slug));
}

export async function getGuidePdfPreviewUrl(input: GuidePdfInput): Promise<string> {
  const doc = await buildGuidePdf(input);
  return URL.createObjectURL(doc.output("blob"));
}
