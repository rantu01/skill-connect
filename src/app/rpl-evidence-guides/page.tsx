import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GuidesDirectory, type GuideSort } from "@/components/resources/GuidesDirectory";
import { RPL_BROAD_INDUSTRIES, RPL_CATEGORIES } from "@/lib/rpl-guides";

export const metadata = {
  title: "RPL Evidence Portfolio Guides by Trade | Skills Connect",
  description:
    "Free RPL evidence portfolio guides by trade. See exactly which photos, videos and documents an independent RTO needs.",
};

type SearchParams = {
  industry?: string;
  category?: string;
  q?: string;
  sort?: string;
};

const SORTS: GuideSort[] = ["recent", "title", "industry"];

export default async function RplEvidenceGuidesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const rawIndustry = params.industry ?? "All";
  const rawCategory = params.category ?? "All";
  const initialIndustry =
    rawIndustry === "All" || (RPL_BROAD_INDUSTRIES as readonly string[]).includes(rawIndustry)
      ? rawIndustry
      : "All";
  const initialCategory =
    rawCategory === "All" || (RPL_CATEGORIES as readonly string[]).includes(rawCategory)
      ? rawCategory
      : "All";
  const initialSort: GuideSort = SORTS.includes(params.sort as GuideSort)
    ? (params.sort as GuideSort)
    : "recent";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="text-sm text-primary-foreground/70">
            <Link href="/resources" className="hover:text-primary-foreground hover:underline">
              Prepare your RPL portfolio
            </Link>
            <span className="mx-2">/</span>
            <span>RPL evidence guides</span>
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            RPL evidence portfolio guides
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Trade-by-trade guides showing exactly which photos, videos and documents an
            independent RTO needs before it can recognise your experience. Search your trade,
            read the guide online, or download it as a PDF to take to work.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <GuidesDirectory
            initialQuery={params.q ?? ""}
            initialIndustry={initialIndustry}
            initialCategory={initialCategory}
            initialSort={initialSort}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
