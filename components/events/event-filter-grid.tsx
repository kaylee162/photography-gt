"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
            className={`font-display relative border-2 px-4 py-2 text-sm tracking-[0.04em] uppercase transition-colors ${
              active === filter.value
                ? "border-ink text-yellow"
                : "border-ink/15 text-slate hover:border-ink hover:text-ink"
            }`}
          >
            {active === filter.value ? (
              <motion.span
                layoutId="active-event-filter"
                className="absolute inset-0 -z-10 bg-ink"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
            {filter.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-slate">
          No events in this category yet — check back soon.
        </p>
      ) : null}
    </div>
  );
}
