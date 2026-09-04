import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { merchItems } from "@/data/merch";
import { INSTAGRAM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Merch",
  description: "Georgia Tech Photography Club merch, coming soon.",
};

export default function MerchPage() {
  return (
    <>
      <section className="bg-paper pb-12 pt-28 sm:pt-32">
        <Container>
          <Reveal>
            <p className="font-display text-sm tracking-[0.14em] text-slate">
              Coming soon
            </p>

            <h1 className="font-display mt-5 max-w-4xl text-6xl leading-[0.88] tracking-[0.005em] sm:text-8xl">
              Club merch is in the works.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate">
              We&apos;re designing apparel and gear for members. Nothing is
              available to order yet — this page previews what&apos;s planned,
              and we&apos;ll announce when items go live on Instagram and
              Engage.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Preview" title="What's on the way." />

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {merchItems.map((item) => (
              <RevealItem key={item.id} className="group">
                <div className="relative aspect-square w-full overflow-hidden border-2 border-ink/10 shadow-[0_0_0_0_var(--color-ink)] transition-shadow duration-300 group-hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                  {item.placeholder || !item.image ? (
                    <PlaceholderImage
                      label={item.name}
                      icon={ShoppingBag}
                      className="size-full"
                    />
                  ) : null}

                  <span className="font-display absolute left-3 top-3 bg-yellow px-3 py-1 text-xs tracking-[0.08em] text-ink uppercase">
                    {item.status === "coming-soon"
                      ? "Coming soon"
                      : item.status === "sold-out"
                        ? "Sold out"
                        : "Available"}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-base font-semibold text-ink">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate">{item.price}</p>
                </div>
                <p className="text-sm text-slate">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-14 max-w-xl text-sm text-slate">
            <p>
              Want to know when merch drops? Follow us on{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4"
              >
                Instagram
              </a>{" "}
              — proceeds go back into club workshops, darkroom supplies, and
              the exhibition.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
