"use client";

import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ADDRESS,
  ADDRESS_MAP_HREF,
  BOOKING_HREF,
  BOOKING_LABEL,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
} from "@/lib/contact";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      goal: String(formData.get("goal") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      throw new Error("send_failed");
    } catch {
      setStatus("error");
      const body = [`Name: ${payload.name}`, `Phone: ${payload.phone}`, `Email: ${payload.email}`, `Goal: ${payload.goal}`, ``, payload.message].join("\n");
      window.location.href = `${EMAIL_HREF}?subject=${encodeURIComponent(`Callback request from ${payload.name}`)}&body=${encodeURIComponent(body)}`;
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader ctaHref={PHONE_HREF} ctaLabel={`Call ${PHONE}`} ctaExternal={false} />

      <section className="relative overflow-hidden bg-hero-gradient px-6 py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">Get in touch</span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">Book your free skills audit</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">Speak with a Skills Connect consultant. We'll map your experience to the right qualification, licence or migration pathway and explain exactly what evidence you need.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><Calendar className="size-5" /></span>
                <div>
                  <h3 className="font-semibold">Book online</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Schedule a free skills audit with a consultant at a time that suits you.</p>
                  <a href={BOOKING_HREF} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">{BOOKING_LABEL}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><Phone className="size-5" /></span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Call us for a free skills audit or to discuss your pathway.</p>
                  <a href={PHONE_HREF} className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><Mail className="size-5" /></span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Send your enquiry and we'll reply within one business day.</p>
                  <a href={EMAIL_HREF} className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><MapPin className="size-5" /></span>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Visit our office, or book an Australia-wide phone or video consultation.</p>
                  <a href={ADDRESS_MAP_HREF} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-semibold text-foreground hover:text-accent">{ADDRESS}</a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-2xl font-bold">Request a callback</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fill in your details and a consultant will call you back. Fields marked with * are required.</p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full name *</label>
                    <input id="name" name="name" type="text" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone *</label>
                    <input id="phone" name="phone" type="tel" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="goal" className="text-sm font-medium">What is your main goal?</label>
                  <select id="goal" name="goal" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select an option</option>
                    <option value="qualification">Turn experience into a qualification</option>
                    <option value="licence">Get a trade licence or registration</option>
                    <option value="migration">Migration skills assessment</option>
                    <option value="career">Career counselling</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <Button type="submit" variant="hero" className="w-full sm:w-auto" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Request callback"}
                </Button>
                {status === "sent" && <p className="text-sm font-medium text-accent">Thanks — your request has been sent to <a href={EMAIL_HREF} className="underline hover:no-underline">{EMAIL}</a>. We'll be in touch within one business day.</p>}
                {status === "error" && <p className="text-sm text-muted-foreground">We couldn't send it automatically, so we've opened your email app addressed to <a href={EMAIL_HREF} className="underline hover:text-accent">{EMAIL}</a>. You can also call {PHONE}.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}