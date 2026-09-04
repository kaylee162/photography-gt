import Link from "next/link";
import { ArrowUpRight, Aperture, ShoppingBag, Users, type LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { DUES_URL, ENGAGE_URL } from "@/lib/constants";

type QuickLinkCta = {
  label: string;
  href: string;
  external: boolean;
};

type QuickLink = {
  title: string;
  description: string;
  icon: LucideIcon;
  ctas: QuickLinkCta[];
};

const links: QuickLink[] = [
  {
    title: "The Darkroom",
    description:
      "Our new darkroom is opening up — develop and print your own black & white film.",
    icon: Aperture,
    ctas: [{ label: "Explore the darkroom", href: "/darkroom", external: false }],
  },
  {
    title: "Merch",
    description:
      "Club apparel and gear is in the works. Take a look at what's coming.",
    icon: ShoppingBag,
    ctas: [{ label: "See merch", href: "/merch", external: false }],
  },
  {
    title: "Engage & Dues",
    description:
      "Officially join the club through Georgia Tech Engage, and pay dues separately through GT ePay.",
    icon: Users,
    ctas: [
      { label: "Go to Engage", href: ENGAGE_URL, external: true },
      { label: "Pay dues", href: DUES_URL, external: true },
    ],
  },
];

const boxClassName =
  "group flex flex-col border-2 border-ink/15 bg-paper p-8 shadow-[0_0_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper hover:shadow-[6px_6px_0_0_var(--color-ink)] [&_span]:group-hover:text-yellow [&_a]:group-hover:text-yellow [&_p]:group-hover:text-paper/70";

const ctaClassName =
  "inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition hover:underline";

export function QuickLinks() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Container>
        <RevealGroup className="grid gap-6 sm:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            const body = (
              <>
                <Icon size={22} strokeWidth={1.5} className="text-ink transition group-hover:text-yellow" />

                <h3 className="font-display mt-6 text-3xl tracking-[0.005em]">
                  {link.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate">
                  {link.description}
                </p>
              </>
            );

            if (link.ctas.length > 1) {
              return (
                <RevealItem key={link.title} y={30}>
                  <div className={boxClassName}>
                    {body}

                    <div className="mt-6 flex flex-col gap-2">
                      {link.ctas.map((cta) => (
                        <a
                          key={cta.href}
                          href={cta.href}
                          target="_blank"
                          rel="noreferrer"
                          className={ctaClassName}
                        >
                          {cta.label}
                          <ArrowUpRight size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              );
            }

            const cta = link.ctas[0];
            const content = (
              <>
                {body}
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  {cta.label}
                  <ArrowUpRight size={16} />
                </span>
              </>
            );

            return (
              <RevealItem key={link.title} y={30}>
                {cta.external ? (
                  <a href={cta.href} target="_blank" rel="noreferrer" className={boxClassName}>
                    {content}
                  </a>
                ) : (
                  <Link href={cta.href} className={boxClassName}>
                    {content}
                  </Link>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
