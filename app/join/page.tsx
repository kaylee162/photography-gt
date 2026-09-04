import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { joinFaq } from "@/data/faq";
import { DISCORD_URL, DUES_URL, ENGAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join",
};

const steps = [
  {
    title: "Sign up on Engage",
    description:
      "Create an account and join Photography at GT on Georgia Tech's Engage platform.",
  },
  {
    title: "Pay dues",
    description:
      "Dues are paid separately through our GT ePay store and go toward workshops, darkroom supplies, and the exhibition.",
  },
  {
    title: "Come to a meeting",
    description:
      "Meeting time and location are still being finalized — check back here or on Instagram once they're confirmed.",
  },
  {
    title: "Join the Discord",
    description:
      "Get event reminders, photo walk meetups, and chat with other members between meetings.",
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="bg-ink pb-14 pt-28 text-paper sm:pt-32">
        <Container>
          <Reveal>
            <p className="font-display text-sm tracking-[0.14em] text-sky">
              Everyone is welcome
            </p>

            <h1 className="font-display mt-5 max-w-5xl text-6xl leading-[0.88] tracking-[0.005em] sm:text-8xl">
              You do not need expensive gear to create something meaningful.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-paper/65">
              Join photo walks, workshops, socials, exhibitions, and a community
              of student photographers at every skill level.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={ENGAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-yellow bg-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-ink shadow-[4px_4px_0_0_var(--color-sky)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-ink hover:text-yellow hover:shadow-[6px_6px_0_0_var(--color-sky)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                Join on Engage
                <ArrowUpRight size={17} />
              </a>

              <a
                href={DUES_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-paper/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-paper shadow-[4px_4px_0_0_var(--color-yellow)] backdrop-blur-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-sky hover:text-sky hover:shadow-[6px_6px_0_0_var(--color-yellow)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                Pay dues
                <ArrowUpRight size={17} />
              </a>

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border-2 border-paper/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-paper shadow-[4px_4px_0_0_var(--color-yellow)] backdrop-blur-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-sky hover:text-sky hover:shadow-[6px_6px_0_0_var(--color-yellow)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                Join our Discord
              </a>
            </div>

            <p className="mt-4 text-xs text-paper/40">
              Engage link: {ENGAGE_URL} · Dues link: {DUES_URL}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How to join" title="Four steps to get involved." />

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealItem key={step.title}>
                <div className="group border-2 border-ink/15 p-7 shadow-[0_0_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                  <span className="font-display text-4xl text-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-3xl tracking-[0.005em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate">
                    {step.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Questions" title="Frequently asked questions." />

          <RevealGroup className="mt-12 grid gap-px overflow-hidden bg-ink/15 sm:grid-cols-2">
            {joinFaq.map((item) => (
              <RevealItem key={item.question} y={14}>
                <div className="h-full bg-paper p-7">
                  <h3 className="text-base font-semibold text-ink">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    {item.answer}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 text-sm text-slate">
            <p>
              Curious about the darkroom or merch?{" "}
              <Link href="/darkroom" className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4">
                Visit the darkroom page
              </Link>{" "}
              or{" "}
              <Link href="/merch" className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4">
                see what merch is coming
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
