import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/contact";

// Source: same post data as src/app/blog/page.tsx — detail route only.
// No reference-site blog URLs are invented here.
export const BLOG_POSTS = [
  {
    slug: "how-rpl-works",
    title: "How RPL works for tradies",
    date: "2026-01-15",
    excerpt: "A step-by-step guide to Recognition of Prior Learning for trades.",
    body: [
      "Recognition of Prior Learning (RPL) compares your real-world work history against the units in a formal qualification. If you have spent years on the tools, you may already satisfy most of the requirements — without going back to the classroom.",
      "The process starts with a free skills audit: we review your work history, qualifications and tax records to identify which units you may already satisfy. Then you collect evidence — site photos, job logs, contracts, references and certificates — that proves your competence.",
      "We structure that evidence into a decision-ready portfolio and submit it to an accredited independent RTO for assessment. The RTO issues credit for what you already know, so you can move toward licensing, higher pay or a skills assessment.",
      "Skills Connect is an independent evidence preparation consultancy, not an RTO. Formal assessment and qualification issuance are conducted strictly by accredited independent RTOs.",
    ],
  },
  {
    slug: "evidence-checklist",
    title: "Evidence portfolio checklist",
    date: "2026-02-01",
    excerpt: "What documents you need to prove your trade experience.",
    body: [
      "A decision-ready RPL portfolio has two halves: visual evidence and supporting documents. For visual evidence, plan on around 20 clear workplace photos and 20 short video clips showing you performing real trade tasks across several days and jobs.",
      "Your supporting documents prove the work was real, paid and supervised: photo ID, a résumé with dates and employers, references on company letterhead, payslips or tax records, job cards or invoices with your name on them, and any tickets or prior training certificates.",
      "Name every file clearly, sort files into folders by task group, and add a one-line description per task. That is what turns a folder of photos into assessable evidence an RTO can evaluate quickly.",
      "Book a free skills audit and we will walk you through the exact evidence list for your qualification before you spend weeks collecting the wrong things.",
    ],
  },
  {
    slug: "state-licensing",
    title: "State licensing differences",
    date: "2026-02-20",
    excerpt: "How licensing requirements differ across Australian states.",
    body: [
      "Trade licences are granted solely by state and territory licensing authorities — NSW Fair Trading, the Victorian Building Authority, the QBCC in Queensland, and their interstate equivalents. Each sets its own licence classes, qualification prerequisites and experience rules.",
      "The common thread is the qualification: most contractor licence classes require a relevant Certificate III (or higher) first, which is where an RPL portfolio comes in. We help you build the evidence portfolio to gain the qualification through an independent RTO, then guide your licence paperwork.",
      "Because forms and requirements change, always confirm the current version with the regulator before you apply. Our Resources page links to the official portals so you never rely on an out-of-date copy.",
      "Not sure which licence class fits your work? A free skills audit maps your experience to the right qualification and licence pathway.",
    ],
  },
  {
    slug: "rpl-vs-apprenticeship",
    title: "RPL vs apprenticeship",
    date: "2026-03-10",
    excerpt: "Which pathway is right for your experience level?",
    body: [
      "An apprenticeship teaches you the trade from scratch over several years. RPL recognises the trade you already practise: it converts documented workplace experience into formal qualification credits.",
      "If you have years of paid, supervised experience and can evidence it with photos, references and tax records, RPL is usually the faster route. If you are new to the trade, a structured apprenticeship or training pathway is the honest answer — and we will tell you that upfront.",
      "Either way, the qualification itself is issued by an accredited independent RTO. Our role is to audit your history, structure your evidence and present it in the format an assessor can evaluate fairly.",
      "Take the free skills check or book a skills audit and we will map your experience against the qualification units so you can choose with confidence.",
    ],
  },
];

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Skills Connect`, description: post.excerpt };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
          <p className="text-sm text-primary-foreground/70">
            <Link href="/blog" className="hover:text-primary-foreground hover:underline">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-sm text-primary-foreground/70">
            <Calendar className="size-4" />
            <span>{post.date}</span>
            <User className="size-4" />
            <span>Skills Connect</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-5">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex h-11 items-center rounded-lg border border-border bg-card px-5 text-sm font-semibold transition-colors hover:border-accent"
            >
              <ArrowLeft className="mr-2 size-4" /> Back to blog
            </Link>
            <a
              href={BOOKING_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {BOOKING_LABEL} <ArrowRight className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
