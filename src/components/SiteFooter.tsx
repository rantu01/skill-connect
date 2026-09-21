import Link from "next/link";
import {
  Check,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import {
  ADDRESS,
  ADDRESS_MAP_HREF,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
} from "@/lib/contact";

const industries = [
  "Building & Construction",
  "Automotive",
  "Engineering & Manufacturing",
  "Community Services",
];

const serviceLinks = [
  { label: "RPL Portfolio Preparation", to: "/resources" },
  { label: "RPL Evidence Guides", to: "/rpl-evidence-guides" },
  { label: "Licensing Service", to: "/industries" },
  { label: "Skills Assessment", to: "/resources#migration-forms" },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blogs", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
  { label: "FAQs", to: "/contact" },
];

const legalLinks = [
  { label: "Payment & Refund Policy", to: "/payment-refund-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

interface FooterLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  children: ReactNode;
}

function FooterLink({ children, className = "", ...props }: FooterLinkProps) {
  return (
    <Link
      className={`
        group inline-flex items-center gap-2.5 text-sm leading-relaxed
        text-primary-foreground/75 transition-all duration-200
        hover:text-accent hover:translate-x-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
        focus-visible:ring-offset-2 focus-visible:ring-offset-primary
        ${className}
      `}
      {...props}
    >
      <Check
        className="
          size-3.5 shrink-0 text-accent transition-transform duration-200
          group-hover:scale-110
        "
        aria-hidden="true"
      />
      <span>{children}</span>
    </Link>
  );
}

interface ExternalFooterLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  href: string;
  children: ReactNode;
}

function ExternalFooterLink({
  children,
  className = "",
  ...props
}: ExternalFooterLinkProps) {
  return (
    <a
      className={`
        group inline-flex items-start gap-3 text-sm leading-relaxed
        text-primary-foreground/75 transition-all duration-200
        hover:text-accent
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
        focus-visible:ring-offset-2 focus-visible:ring-offset-primary
        ${className}
      `}
      {...props}
    >
      {children}
    </a>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-base font-semibold tracking-tight text-primary-foreground">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function FooterLinkList({
  items,
}: {
  items: { label: string; to: string }[];
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <FooterLink href={item.to}>{item.label}</FooterLink>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.75fr_0.85fr_0.85fr_0.85fr]">
        <FooterColumn title="Skills Connect">
          <div className="space-y-3">
            <ExternalFooterLink href={ADDRESS_MAP_HREF} target="_blank" rel="noreferrer">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{ADDRESS}</span>
            </ExternalFooterLink>
            <ExternalFooterLink href={PHONE_HREF}>
              <Phone className="size-4 shrink-0 text-accent" />
              <span>{PHONE}</span>
            </ExternalFooterLink>
            <ExternalFooterLink href={EMAIL_HREF}>
              <Mail className="size-4 shrink-0 text-accent" />
              <span>{EMAIL}</span>
            </ExternalFooterLink>
          </div>
          <div className="mt-7 flex gap-3">
            <a
              href="https://www.facebook.com/skillsconnet"
              target="_blank"
              rel="noreferrer"
              aria-label="Skills Connect on Facebook"
              className="
                inline-flex size-9 items-center justify-center rounded-md
                border border-primary-foreground/20 text-primary-foreground/80
                transition-all duration-200
                hover:border-accent hover:text-accent hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                focus-visible:ring-offset-2 focus-visible:ring-offset-primary
              "
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="http://www.youtube.com/@SkillsConnect-AU"
              target="_blank"
              rel="noreferrer"
              aria-label="Skills Connect on YouTube"
              className="
                inline-flex size-9 items-center justify-center rounded-md
                border border-primary-foreground/20 text-primary-foreground/80
                transition-all duration-200
                hover:border-accent hover:text-accent hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                focus-visible:ring-offset-2 focus-visible:ring-offset-primary
              "
            >
              <Youtube className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/skillsconnect.au/"
              target="_blank"
              rel="noreferrer"
              aria-label="Skills Connect on Instagram"
              className="
                inline-flex size-9 items-center justify-center rounded-md
                border border-primary-foreground/20 text-primary-foreground/80
                transition-all duration-200
                hover:border-accent hover:text-accent hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                focus-visible:ring-offset-2 focus-visible:ring-offset-primary
              "
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </FooterColumn>

        <FooterColumn title="Industries">
          <ul className="space-y-2.5">
            {industries.map((industry) => (
              <li key={industry}>
                 <FooterLink href="/industries">{industry}</FooterLink>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Services">
          <FooterLinkList items={serviceLinks} />
        </FooterColumn>

        <FooterColumn title="Company">
          <FooterLinkList items={companyLinks} />
        </FooterColumn>

        <FooterColumn title="Legal">
          <FooterLinkList items={legalLinks} />
        </FooterColumn>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10">
        <a
          href={ADDRESS_MAP_HREF}
          target="_blank"
          rel="noreferrer"
          className="
            flex min-h-56 items-center justify-center overflow-hidden rounded-md
            border border-primary-foreground/15 bg-primary-foreground/5 p-6
            text-center transition-all duration-200
            hover:border-accent hover:bg-primary-foreground/10
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
            focus-visible:ring-offset-2 focus-visible:ring-offset-primary
          "
        >
          <span>
            <MapPin className="mx-auto size-8 text-accent" />
            <span className="mt-3 block text-sm font-semibold text-primary-foreground">
              Open location in Google Maps
            </span>
            <span className="mt-1 block text-xs text-primary-foreground/60">
              {ADDRESS}
            </span>
          </span>
        </a>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-7 text-center">
          <p className="text-xs leading-relaxed text-primary-foreground/65">
            <strong className="text-primary-foreground">Skills Connect Consulting</strong> is a
            registered trading name owned by <strong className="text-primary-foreground">EDUTEK PTY LTD</strong>.
            We provide educational consulting and advisory services. Skills Connect is not a Registered
            Training Organisation (RTO); we do not deliver training, conduct assessments, issue
            qualifications, or guarantee employment outcomes. All training, assessments, and
            certifications are handled and issued exclusively by our accredited partner RTOs.
          </p>
          <p className="mt-5 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Skills Connect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}