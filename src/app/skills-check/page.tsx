import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsCheckForm } from "@/components/skills-check/SkillsCheckForm";

export const metadata = {
  title: "Free 60 Second Skills Check | Skills Connect",
  description:
    "Take the free 60 second skills check: tell us your industry, qualification and experience, and a Skills Connect consultant will map your pathway.",
};

export default function SkillsCheckPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="section-eyebrow">Free skills check</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl">
            Take the FREE 60 second skills check now
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Answer five quick questions about your experience and a consultant will map
            your pathway to a recognised qualification.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SkillsCheckForm />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Takes about 60 seconds. Your answers stay in this form until you press Submit.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
