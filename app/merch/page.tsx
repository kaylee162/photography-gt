import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { merchItems } from "@/data/merch";
import { INSTAGRAM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Merch",
  description: "Georgia Tech Photography Club merch, coming soon.",
};

export default function MerchPage() {
  return (
    <>
      <section className="bg-[#f7f6f2] pb-16 pt-36">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
            Coming soon
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
            Club merch is in the works.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600">
            We&apos;re designing apparel and gear for members. Nothing is
            available to order yet — this page previews what&apos;s planned,
            and we&apos;ll announce when items go live on Instagram and
            Engage.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Preview" title="What's on the way." />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {merchItems.map((item) => (
              <div key={item.id} className="group">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  {item.placeholder || !item.image ? (
                    <PlaceholderImage
                      label={item.name}
                      icon={ShoppingBag}
                      className="size-full"
                    />
                  ) : null}

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-700 shadow-sm">
                    {item.status === "coming-soon"
                      ? "Coming soon"
                      : item.status === "sold-out"
                        ? "Sold out"
                        : "Available"}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-base font-semibold text-neutral-950">
                    {item.name}
                  </p>
                  <p className="text-sm text-neutral-500">{item.price}</p>
                </div>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-xl text-sm text-neutral-500">
            Want to know when merch drops? Follow us on{" "}
            <a
              href={INSTAGRAM_URL}
              className="font-semibold text-neutral-900 underline underline-offset-4"
            >
              Instagram
            </a>{" "}
            — proceeds go back into club workshops, darkroom supplies, and
            the exhibition.
          </p>
        </Container>
      </section>
    </>
  );
}
