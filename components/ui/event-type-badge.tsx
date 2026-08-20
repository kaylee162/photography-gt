import type { ClubEvent } from "@/types";
import { eventTypeLabel } from "@/lib/utils";

const typeStyles: Record<ClubEvent["type"], string> = {
  "photo-walk": "bg-[#b3a369]/15 text-[#8a7c47]",
  workshop: "bg-blue-500/10 text-blue-700",
  exhibition: "bg-purple-500/10 text-purple-700",
  social: "bg-orange-500/10 text-orange-700",
  "print-social": "bg-orange-500/10 text-orange-700",
  trip: "bg-emerald-500/10 text-emerald-700",
};

export function EventTypeBadge({ type }: { type: ClubEvent["type"] }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${typeStyles[type]}`}
    >
      {eventTypeLabel(type)}
    </span>
  );
}
