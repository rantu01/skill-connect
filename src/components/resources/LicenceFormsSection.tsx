import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, Globe, MapPin, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export function LicenceFormsSection() {
  const tabs = [
    { value: "licence", label: "Licence & forms" },
    { value: "licence-1", label: "Licence & forms" },
  ];

  return (
    <section id="licence-forms" className="border-t border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow">Licence &amp; forms</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything you need to get licensed</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Our guide covers the forms, fees, and steps for every state licensing pathway.</p>
        <Tabs defaultValue="licence" className="mt-10 w-full">
          <TabsList className="grid w-full grid-cols-2">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>{t.label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="licence" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: MapPin, title: "NSW licence", desc: "Step-by-step guide for NSW contractor licence." },
                { icon: ShieldCheck, title: "VIC licence", desc: "VIC building & plumbing licence pathways." },
                { icon: Globe, title: "QLD licence", desc: "QLD contractor licence requirements." },
                { icon: FileText, title: "WA licence", desc: "WA trade licence application guide." },
                { icon: Users, title: "SA licence", desc: "SA trades & contracting licence info." },
                { icon: CheckCircle2, title: "TAS licence", desc: "TAS licence application steps." },
              ].map((item) => (
                <Card key={item.title} className="border-border shadow-card">
                  <CardContent className="p-6">
                    <item.icon className="size-6 text-accent" />
                    <p className="mt-3 font-semibold">{item.title}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="licence-1" className="mt-6">
            <div className="rounded-lg border border-border bg-card p-8 text-center shadow-card">
              <p className="text-muted-foreground">Additional licence &amp; forms content coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="hero" size="lg" asChild><Link href="/contact">Get licence help<ArrowRight /></Link></Button>
          <Button variant="outline" size="lg" asChild><Link href="/resources">Download all forms</Link></Button>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";