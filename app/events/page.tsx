import type { Metadata } from "next";
import { Info } from "lucide-react";

import { Container } from "@/components/ui/container";
import { EventFilterGrid } from "@/components/events/event-filter-grid";
import { GoogleCalendar } from "@/components/events/google-calendar";
import { Reveal } from "@/components/ui/reveal";
import { upcomingEvents } from "@/data/events";
import { DISCORD_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <section className="min-h-screen bg-white pb-16 pt-28 sm:pt-32">
      <Container>
        <Reveal>
          <p className="font-display text-sm tracking-[0.14em] text-slate">
            Meet, learn, and create
          </p>

          <h1 className="font-display mt-5 text-6xl leading-[0.88] tracking-[0.005em] sm:text-8xl">
            Events
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate">
            Photo walks about twice a month, workshops every month for every
            skill level, and an exhibition later this semester.
          </p>
        </Reveal>

        {/* 
        <Reveal delay={0.1} className="mt-8 flex items-start gap-3 border-2 border-ink/10 bg-paper p-5 text-sm text-slate">
          <Info size={18} className="mt-0.5 shrink-0 text-slate" />
          <p>
            The schedule below is a sample of what a semester looks like.
            Exact dates, times, and locations are confirmed on a rolling
            basis — watch Instagram and our Engage page for the final word,
            or join our{" "}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4"
            >
              Discord
            </a>{" "}
            for reminders as soon as they&apos;re posted.
          </p>
        </Reveal>
        */}

        <div className="mt-10">
          <GoogleCalendar />
        </div>

        <div className="mt-16">
          <EventFilterGrid events={upcomingEvents} />
        </div>
      </Container>
    </section>
  );
}
