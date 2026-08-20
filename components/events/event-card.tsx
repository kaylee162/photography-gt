import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

import type { ClubEvent } from "@/types";
import { EventTypeBadge } from "@/components/ui/event-type-badge";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { formatEventDate, formatEventTime } from "@/lib/utils";

export function EventCard({ event }: { event: ClubEvent }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
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
            <span className="inline-flex w-fit items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">
              {event.level}
            </span>
          ) : null}
        </div>

        <h3 className="font-display text-2xl leading-tight tracking-[-0.02em]">
          {event.title}
        </h3>

        <p className="text-sm leading-6 text-neutral-600">
          {event.description}
        </p>

        <div className="mt-auto flex flex-col gap-1.5 pt-3 text-sm text-neutral-500">
          <span className="flex items-center gap-2">
            <Calendar size={15} className="shrink-0 text-neutral-400" />
            {formatEventDate(event.startDate)} &middot;{" "}
            {formatEventTime(event.startDate)}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} className="shrink-0 text-neutral-400" />
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}
