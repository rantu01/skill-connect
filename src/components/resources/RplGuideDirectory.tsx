import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, ChevronRight, ClipboardCheck, FileText, MapPin, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const guideData = [
  { title: "Carpentry RPL guide", slug: "carpentry", desc: "Evidence portfolio for carpentry RPL (CPC30220)." },
  { title: "Bricklaying RPL guide", slug: "bricklaying", desc: "Evidence portfolio for bricklaying RPL (CPC33020)." },
  { title: "Concreting RPL guide", slug: "concreting", desc: "Evidence portfolio for concreting RPL (CPC30320)." },
  { title: "Light Vehicle Mechanic RPL guide", slug: "light-vehicle-mechanic", desc: "Evidence portfolio for light vehicle mechanic RPL (AUR30620)." },
  { title: "Commercial Cookery RPL guide", slug: "commercial-cookery", desc: "Evidence portfolio for commercial cookery RPL (SIT30821)." },
  { title: "Community Services RPL guide", slug: "community-services", desc: "Evidence portfolio for community services RPL (CHC52021)." },
];

export function RplGuideDirectory() {
  return (
    <section id="rpl-guides" className="border-t border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow">RPL guides</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your trade-specific RPL guide</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Each guide walks you through the evidence portfolio, eligibility check, and RTO referral for your trade.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guideData.map((guide) => (
            <Card key={guide.title} className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{guide.title}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{guide.desc}</p>
                  </div>
                  <BookOpen className="size-5 shrink-0 text-accent" />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <Button variant="hero" size="sm" asChild><Link href={`/rpl-evidence-guides/${guide.slug}`}>Read guide<ArrowRight className="size-3.5" /></Link></Button>
                  <Button variant="outline" size="sm" asChild><Link href="/rpl-evidence-guides">All guides</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="hero" size="lg" asChild><Link href="/contact">Get RPL help<ArrowRight /></Link></Button>
          <Button variant="outline" size="lg" asChild><Link href="/resources">Browse all guides</Link></Button>
        </div>
      </div>
    </section>
  );
}