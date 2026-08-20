type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.24em] ${
          dark ? "text-white/45" : "text-neutral-500"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-display mt-5 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-6xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-6 max-w-xl text-base leading-7 ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/60" : "text-neutral-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
