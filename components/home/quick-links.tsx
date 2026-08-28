import Link from "next/link";
import { ArrowUpRight, Aperture, ShoppingBag, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ENGAGE_URL } from "@/lib/constants";

const links = [
  {
    title: "The Darkroom",
    description:
      "Our new darkroom is opening up — develop and print your own black & white film.",
    href: "/darkroom",
    cta: "Explore the darkroom",
    icon: Aperture,
    external: false,
  },
  {
    title: "Merch",
    description:
      "Club apparel and gear is in the works. Take a look at what's coming.",
    href: "/merch",
    cta: "See merch",
    icon: ShoppingBag,
    external: false,
  },
  {
    title: "Engage & Dues",
    description:
      "Officially join the club and pay dues through Georgia Tech Engage.",
    href: ENGAGE_URL,
    cta: "Go to Engage",
    icon: Users,
    external: true,
  },
];

export function QuickLinks() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Container>
        <RevealGroup className="grid gap-6 sm:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            const content = (
              <>
                <Icon size={22} strokeWidth={1.5} className="text-ink transition group-hover:text-yellow" />

                <h3 className="font-display mt-6 text-3xl tracking-[0.005em]">
                  {link.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate">
                  {link.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  {link.cta}
                  <ArrowUpRight size={16} />
                </span>
              </>
            );

            const className =
              "group flex flex-col border-2 border-ink/15 bg-paper p-8 shadow-[0_0_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper hover:shadow-[6px_6px_0_0_var(--color-ink)] [&_span]:hover:text-yellow [&_p]:hover:text-paper/70";

            return (
              <RevealItem key={link.title} y={30}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
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
