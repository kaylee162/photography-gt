import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { joinFaq } from "@/data/faq";
import {
  DISCORD_URL,
  ENGAGE_URL,
  MEETING_LOCATION,
  MEETING_SCHEDULE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join",
};

const steps = [
  {
    title: "Sign up on Engage",
    description:
      "Create an account and join Photography at GT on Georgia Tech's Engage platform. This is also where you'll pay dues.",
  },
  {
    title: "Pay dues",
    description:
      "Dues are paid through Engage and go toward workshops, darkroom supplies, and the exhibition. Amount posted on our Engage page.",
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
      <section className="bg-neutral-950 pb-20 pt-36 text-white">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Everyone is welcome
          </p>

          <h1 className="font-display mt-5 max-w-5xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
            You do not need expensive gear to create something meaningful.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
            Join photo walks, workshops, socials, exhibitions, and a community
            of student photographers at every skill level.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Join &amp; pay dues on Engage
              <ArrowUpRight size={17} />
            </a>

            <a
              href={DISCORD_URL}
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Join our Discord
            </a>
          </div>

          <p className="mt-4 text-xs text-white/40">
            Engage link: {ENGAGE_URL}
          </p>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="How to join" title="Four steps to get involved." />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-black/10 p-7">
                <span className="font-display text-4xl text-neutral-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-2xl tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#f7f6f2] p-6 ring-1 ring-black/5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Regular meetings
            </p>
            <p className="mt-2 text-base font-medium text-neutral-950">
              {MEETING_SCHEDULE}
            </p>
            <p className="mt-1 text-sm text-neutral-500">{MEETING_LOCATION}</p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f6f2] py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Questions" title="Frequently asked questions." />

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-black/10 sm:grid-cols-2">
            {joinFaq.map((item) => (
              <div key={item.question} className="bg-[#f7f6f2] p-7">
                <h3 className="text-base font-semibold text-neutral-950">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-neutral-500">
            Curious about the darkroom or merch?{" "}
            <Link href="/darkroom" className="font-semibold text-neutral-900 underline underline-offset-4">
              Visit the darkroom page
            </Link>{" "}
            or{" "}
            <Link href="/merch" className="font-semibold text-neutral-900 underline underline-offset-4">
              see what merch is coming
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
