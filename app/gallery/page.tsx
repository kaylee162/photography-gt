import type { Metadata } from "next";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photography created by members of the Georgia Tech Photography Club.",
};

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-[#f7f6f2] pb-24 pt-36">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
          Student work
        </p>

        <h1 className="font-display mt-5 max-w-5xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
          The gallery
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600">
          Explore portraits, street photography, landscapes, events, film,
          architecture, and more from Georgia Tech photographers.
        </p>
      </Container>
    </section>
  );
}