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
        dark ? "bg-paper/10" : "bg-slate/15"
      } ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,213,40,0.22) 0px, rgba(255,213,40,0.22) 2px, transparent 2px, transparent 14px)",
        }}
      />
      <div
        className={`relative flex flex-col items-center gap-2 px-4 text-center ${
          dark ? "text-paper/40" : "text-ink/40"
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
