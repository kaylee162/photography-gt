import type { ClubEvent } from "@/types";

export function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatEventTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

const eventTypeLabels: Record<ClubEvent["type"], string> = {
  "photo-walk": "Photo Walk",
  workshop: "Workshop",
  "print-social": "Print Social",
  social: "Social",
  exhibition: "Exhibition",
  trip: "Trip",
};

export function eventTypeLabel(type: ClubEvent["type"]) {
  return eventTypeLabels[type];
}
