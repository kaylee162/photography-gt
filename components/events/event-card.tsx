import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

import type { ClubEvent } from "@/types";
import { EventTypeBadge } from "@/components/ui/event-type-badge";
import { MapLink } from "@/components/ui/map-link";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { formatEventDate, formatEventTime } from "@/lib/utils";

export function EventCard({ event }: { event: ClubEvent }) {
  return (
    <div className="group flex flex-col overflow-hidden border-2 border-ink/15 bg-white shadow-[0_0_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_0_var(--color-ink)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {event.placeholder || !event.image ? (
          <PlaceholderImage label={event.imageAlt} className="size-full" />
        ) : (
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <EventTypeBadge type={event.type} />
          {event.level ? (
            <span className="font-display inline-flex w-fit items-center border-2 border-ink/15 px-3 py-1 text-xs tracking-[0.08em] text-slate uppercase">
              {event.level}
            </span>
          ) : null}
        </div>

        <h3 className="font-display text-3xl leading-tight tracking-[0.005em]">
          {event.title}
        </h3>

        <p className="text-sm leading-6 text-slate">
          {event.description}
        </p>

        <div className="mt-auto flex flex-col gap-1.5 pt-3 text-sm text-slate">
          <span className="flex items-center gap-2">
            <Calendar size={15} className="shrink-0 text-slate" />
            {formatEventDate(event.startDate)} &middot;{" "}
            {formatEventTime(event.startDate)}
          </span>
          <MapLink
            address={event.location}
            className="flex w-fit items-center gap-2 hover:text-ink hover:underline underline-offset-4"
          >
            <MapPin size={15} className="shrink-0 text-slate" />
            {event.location}
          </MapLink>
        </div>
      </div>
    </div>
  );
}
