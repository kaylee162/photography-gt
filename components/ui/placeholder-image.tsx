import { ImageIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PlaceholderImageProps = {
  label?: string;
  icon?: LucideIcon;
  className?: string;
  dark?: boolean;
};

/**
 * Stand-in for a real photo. Used anywhere the club doesn't have final
 * imagery yet — swap the corresponding data entry over to a real `src`
 * and this disappears automatically.
 */
export function PlaceholderImage({
  label,
  icon: Icon = ImageIcon,
  className = "",
  dark = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        dark ? "bg-white/5" : "bg-neutral-200"
      } ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(179,163,105,0.16) 0px, rgba(179,163,105,0.16) 2px, transparent 2px, transparent 14px)",
        }}
      />
      <div
        className={`relative flex flex-col items-center gap-2 px-4 text-center ${
          dark ? "text-white/35" : "text-neutral-400"
        }`}
      >
        <Icon size={26} strokeWidth={1.5} />
        {label ? (
          <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
