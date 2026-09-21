import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PHONE } from "@/lib/contact";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="section-eyebrow">Legal</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm text-muted-foreground">Last updated: 1 January 2026</p>
            <p className="mt-6 text-sm text-muted-foreground">Skills Connect values your privacy. This policy explains how we collect, use, and protect your personal information when you use our services.</p>
            <p className="mt-4 text-sm text-muted-foreground">We collect information you provide directly, such as your name, email, phone, and trade experience details. We also collect usage data through analytics to improve our services.</p>
            <p className="mt-4 text-sm text-muted-foreground">Your data is stored securely and never sold to third parties. You may request access, correction, or deletion of your data at any time by contacting us.</p>
            <p className="mt-4 text-sm text-muted-foreground">For questions about this policy, contact us via the contact page or call {PHONE}.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}