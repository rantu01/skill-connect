import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "My partner Sailesh Kumar and I, Sanjeet Singh, got our qualifications through RPL — me in Health Services and him in Mobile Plant Tech. Great team, respectful and helpful. Highly recommend. We'll be back!",
    name: "Sanjeet Kaur",
    city: "Sydney",
  },
  {
    quote:
      "Skills Connect gave me the clarity I needed. The consultation was professional, honest and super helpful. I now know exactly what path to take!",
    name: "Sarah Thompson",
    city: "Sydney",
  },
  {
    quote:
      "Their consultant explained everything clearly. I finally feel confident about my RPL process. Big thanks to Skills Connect!",
    name: "Jake Harris",
    city: "Melbourne",
  },
  {
    quote:
      "Had an amazing consultation. They genuinely listened and guided me toward the right qualification. Highly recommend.",
    name: "Emily Parker",
    city: "Brisbane",
  },
  {
    quote:
      "Very informative session! Skills Connect made things easy to understand and answered all my questions patiently.",
    name: "Nathan Scott",
    city: "Adelaide",
  },
  {
    quote:
      "I felt supported from the first call. The Skills Connect team helped map out my goals with real care.",
    name: "Laura Bennett",
    city: "Perth",
  },
  {
    quote:
      "The consultation gave me confidence. I had years of experience but didn't know where to start. Now I have a clear plan.",
    name: "Dylan Cooper",
    city: "Hobart",
  },
  {
    quote:
      "Thanks to the expert advice, I finally feel in control of my career path. They were kind, clear and truly helpful.",
    name: "Zoe Anderson",
    city: "Canberra",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow">What happens when skills get connected</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Real stories from tradespeople and professionals across Australia
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <Quote className="size-5 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-foreground">
                {t.name}
                <span className="block text-xs font-normal text-muted-foreground">{t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}