import type { Metadata } from "next";
import { Info } from "lucide-react";

import { Container } from "@/components/ui/container";
import { EventFilterGrid } from "@/components/events/event-filter-grid";
import { GoogleCalendar } from "@/components/events/google-calendar";
import { upcomingEvents } from "@/data/events";
import { DISCORD_URL, MEETING_LOCATION, MEETING_SCHEDULE } from "@/lib/constants";

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

        <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600">
          Photo walks about twice a month, workshops every month for every
          skill level, and an exhibition later this semester.
        </p>

        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[#f7f6f2] p-5 text-sm text-neutral-600 ring-1 ring-black/5">
          <Info size={18} className="mt-0.5 shrink-0 text-neutral-400" />
          <p>
            The schedule below is a sample of what a semester looks like.
            Exact dates, times, and locations are confirmed on a rolling
            basis — watch Instagram and our Engage page for the final word,
            or join our{" "}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-neutral-900 underline underline-offset-4"
            >
              Discord
            </a>{" "}
            for reminders as soon as they&apos;re posted.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Regular meetings
          </p>
          <p className="mt-2 text-base font-medium text-neutral-950">
            {MEETING_SCHEDULE}
          </p>
          <p className="mt-1 text-sm text-neutral-500">{MEETING_LOCATION}</p>
        </div>

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
