import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GuidePdfButtons } from "@/components/guides/GuidePdfButtons";
import { BOOKING_HREF, BOOKING_LABEL, QUIZ_HREF } from "@/lib/contact";
import { RPL_GUIDES, getGuideBySlug } from "@/lib/rpl-guides";
import { getGuideDetails } from "@/lib/rpl-guide-details";
import { toPdfInput } from "@/lib/guide-pdf";

export function generateStaticParams() {
  return RPL_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.trade} (${guide.code}) RPL Evidence Portfolio Guide | Skills Connect`,
    description: guide.description,
  };
}

const SECTION_NUMBERS = ["1", "2", "3", "4", "5", "6"] as const;

export default async function RplGuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const details = getGuideDetails(slug);
  if (!guide || !details) notFound();
  const pdfInput = toPdfInput(guide, details);
  const evidenceRows = Array.from(
    { length: Math.max(details.acceptable.length, details.unacceptable.length) },
    (_, i) => ({
      acceptable: details.acceptable[i] ?? "",
      unacceptable: details.unacceptable[i] ?? "",
    })
  ).filter((r) => r.acceptable || r.unacceptable);

  return (
    <div className="min-h-screen bg-background">
      <div className="print:hidden">
        <SiteHeader />
      </div>

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <p className="text-sm text-primary-foreground/70">
            <Link href="/resources" className="hover:text-primary-foreground hover:underline">
              Prepare your RPL portfolio
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/rpl-evidence-guides"
              className="hover:text-primary-foreground hover:underline"
            >
              RPL evidence guides
            </Link>
          </p>
          <p className="mt-6 inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            {guide.industry}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] font-bold sm:text-5xl">
            {guide.trade} ({guide.code}) — RPL Evidence Portfolio Guide
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-primary-foreground/90">
            {guide.qualification}
          </p>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">{guide.description}</p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            Last updated {details.lastUpdated}
          </p>
          {/* Download / Preview / Print generate the guide PDF in-browser. */}
          <div className="mt-8">
            <GuidePdfButtons input={pdfInput} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Who this guide is for</h2>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            {details.whoFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">{details.evidenceHeading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            To satisfy independent RTO assessment criteria, submit{" "}
            <strong className="text-foreground">{details.photoLine}</strong> and{" "}
            <strong className="text-foreground">{details.videoLine}</strong>.
          </p>
          {details.visualNote && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {details.visualNote}
            </p>
          )}
          <div className="mt-8 space-y-5">
            {details.options.map((option) => (
              <div
                key={option.name}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{option.name}</h3>
                  {option.mandatory ? (
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      Mandatory
                    </span>
                  ) : (
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                      3 to 4 tasks
                    </span>
                  )}
                </div>
                <ul className="mt-3 space-y-2">
                  {option.tasks.map((task) => (
                    <li key={task} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {details.optionDisclaimer && (
            <p className="mt-4 rounded-lg border-l-2 border-accent bg-card p-4 text-xs text-muted-foreground">
              {details.optionDisclaimer}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {SECTION_NUMBERS[1]}. Acceptable vs unacceptable visual evidence
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-card">
            <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="bg-card p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-green-700">
                  <CheckCircle2 className="size-4" /> Acceptable evidence (do this)
                </p>
              </div>
              <div className="bg-secondary p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-red-700">
                  <XCircle className="size-4" /> Unacceptable evidence (avoid this)
                </p>
              </div>
            </div>
            {evidenceRows.map((row) => (
              <div
                key={row.acceptable || row.unacceptable}
                className="grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0"
              >
                <div className="flex gap-3 bg-card p-5 text-sm text-muted-foreground">
                  {row.acceptable ? (
                    <>
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" />
                      <span>{row.acceptable}</span>
                    </>
                  ) : null}
                </div>
                <div className="flex gap-3 bg-secondary p-5 text-sm text-muted-foreground">
                  {row.unacceptable ? (
                    <>
                      <XCircle className="mt-0.5 size-4 shrink-0 text-red-600" />
                      <span>{row.unacceptable}</span>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {SECTION_NUMBERS[2]}. Supporting documents checklist
          </h2>
          <ul className="mt-6 space-y-3">
            {details.docs.map((doc) => (
              <li key={doc} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {SECTION_NUMBERS[3]}. How to organise and submit your portfolio
          </h2>
          <ol className="mt-8 space-y-5">
            {details.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <p className="font-semibold">
                  {i + 1}. {step.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {SECTION_NUMBERS[4]}. Why portfolios get sent back
          </h2>
          <ul className="mt-6 space-y-3">
            {details.sendBack.map((reason) => (
              <li key={reason} className="flex gap-3 text-sm text-muted-foreground">
                <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {SECTION_NUMBERS[5]}. Questions we get asked
          </h2>
          <div className="mt-8 space-y-4">
            {details.faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-lg border border-border bg-card p-5"
              >
                <summary className="cursor-pointer text-base font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 print:hidden">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Not sure your evidence is strong enough?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Take the free skills check, or book a call and we&apos;ll review what you already
            have before you spend weeks collecting the wrong things.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={QUIZ_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Take the skills check <ArrowRight className="ml-2 size-4" />
            </a>
            <a
              href={BOOKING_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-lg border border-border bg-card px-6 text-sm font-semibold transition-colors hover:border-accent"
            >
              {BOOKING_LABEL}
            </a>
          </div>
          {guide.pathwaySlug ? (
            <p className="mt-8 text-sm text-muted-foreground">
              See the full{" "}
              <Link
                href={`/${guide.pathwaySlug}`}
                className="font-semibold text-accent hover:underline"
              >
                {guide.trade} pathway page
              </Link>{" "}
              for qualification, licence and visa outcomes.
            </p>
          ) : (
            <p className="mt-8 text-sm text-muted-foreground">
              See{" "}
              <Link href="/industries" className="font-semibold text-accent hover:underline">
                Industries
              </Link>{" "}
              for qualification, licence and visa outcomes.
            </p>
          )}
          <p className="mt-4 max-w-2xl text-xs text-muted-foreground">
            Skills Connect (EDUTEK PTY LTD) prepares and reviews RPL evidence. Assessment
            and certification are carried out by an independent registered training
            organisation or assessing authority.
          </p>
          <Link
            href="/rpl-evidence-guides"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            <ArrowLeft className="size-4" /> Back to all guides
          </Link>
        </div>
      </section>

      <div className="print:hidden">
        <SiteFooter />
      </div>
    </div>
  );
}
