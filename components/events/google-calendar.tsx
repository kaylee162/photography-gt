import { CalendarPlus } from "lucide-react";

import {
  GOOGLE_CALENDAR_EMBED_URL,
  GOOGLE_CALENDAR_SUBSCRIBE_URL,
} from "@/lib/constants";
import { TextLink } from "@/components/ui/text-link";
import { Reveal } from "@/components/ui/reveal";

export function GoogleCalendar() {
  return (
    <Reveal className="overflow-hidden border-2 border-ink/15 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
        <div>
          <p className="font-display text-sm tracking-[0.12em] text-slate">
            Club calendar
          </p>
          <h3 className="font-display mt-3 text-3xl tracking-[0.005em]">
            Everything, in one place.
          </h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate">
            Photo walks, workshops, and socials as they&apos;re scheduled —
            synced straight from our Google Calendar.
          </p>
        </div>

        <TextLink
          href={GOOGLE_CALENDAR_SUBSCRIBE_URL}
          className="shrink-0 text-ink"
        >
          <CalendarPlus size={16} className="mr-0.5" />
          Add to your calendar
        </TextLink>
      </div>

      <div className="border-t-2 border-ink/15 bg-paper p-3 sm:p-4">
        <div className="relative w-full overflow-hidden border-2 border-ink/10 bg-white aspect-[4/3] sm:aspect-[16/9]">
          <iframe
            src={GOOGLE_CALENDAR_EMBED_URL}
            title="Georgia Tech Photography Club calendar"
            className="absolute inset-0 size-full border-0"
            frameBorder={0}
            scrolling="no"
          />
        </div>
      </div>
    </Reveal>
  );
}
