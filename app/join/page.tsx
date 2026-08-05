import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Join",
};

export default function JoinPage() {
  return (
    <section className="flex min-h-screen items-center bg-neutral-950 py-32 text-white">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
          Everyone is welcome
        </p>

        <h1 className="font-display mt-5 max-w-5xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
          You do not need expensive gear to create something meaningful.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
          Join photo walks, workshops, socials, exhibitions, and a community of
          student photographers at every skill level.
        </p>

        <Link
          href="#"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
        >
          Join our Discord
          <ArrowUpRight size={17} />
        </Link>
      </Container>
    </section>
  );
}