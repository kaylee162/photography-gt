"use client";

import { useMemo, useState } from "react";

import type { ClubEvent } from "@/types";
import { EventCard } from "@/components/events/event-card";

type Filter = "all" | ClubEvent["type"];

const filters: { label: string; value: Filter }[] = [
  { label: "All events", value: "all" },
  { label: "Photo walks", value: "photo-walk" },
  { label: "Workshops", value: "workshop" },
  { label: "Exhibitions", value: "exhibition" },
  { label: "Socials", value: "social" },
];

export function EventFilterGrid({ events }: { events: ClubEvent[] }) {
  const [active, setActive] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      active === "all" ? events : events.filter((event) => event.type === active),
    [active, events],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === filter.value
                ? "bg-neutral-950 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-neutral-500">
          No events in this category yet — check back soon.
        </p>
      ) : null}
    </div>
  );
}
