import type { Metadata } from "next";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#f7f6f2] pb-24 pt-36">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
          Who we are
        </p>

        <h1 className="font-display mt-5 max-w-4xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
          A creative community built around photography.
        </h1>
      </Container>
    </section>
  );
}