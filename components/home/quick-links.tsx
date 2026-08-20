import Link from "next/link";
import { ArrowUpRight, Aperture, ShoppingBag, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
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
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            const content = (
              <>
                <Icon size={22} strokeWidth={1.5} className="text-[#8a7c47]" />

                <h3 className="font-display mt-6 text-2xl tracking-[-0.02em]">
                  {link.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {link.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
                  {link.cta}
                  <ArrowUpRight size={16} />
                </span>
              </>
            );

            const className =
              "group flex flex-col rounded-3xl border border-black/10 p-8 transition hover:border-black/20 hover:bg-neutral-50";

            return link.external ? (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={link.title} href={link.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
