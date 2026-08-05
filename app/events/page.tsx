import type { Metadata } from "next";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <section className="min-h-screen bg-white pb-24 pt-36">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
          Meet, learn, and create
        </p>

        <h1 className="font-display mt-5 text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
          Events
        </h1>
      </Container>
    </section>
  );
}