import type { ClubEvent } from "@/types";
import { eventTypeLabel } from "@/lib/utils";

const typeStyles: Record<ClubEvent["type"], string> = {
  "photo-walk": "bg-yellow text-ink",
  workshop: "bg-sky text-ink",
  exhibition: "bg-ink text-paper",
  social: "border-2 border-ink text-ink",
  "print-social": "border-2 border-ink text-ink",
  trip: "bg-slate text-paper",
};

export function EventTypeBadge({ type }: { type: ClubEvent["type"] }) {
  return (
    <span
      className={`font-display inline-flex w-fit items-center px-3 py-1 text-xs tracking-[0.08em] uppercase ${typeStyles[type]}`}
    >
      {eventTypeLabel(type)}
    </span>
  );
}
