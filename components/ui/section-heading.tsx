import { Reveal } from "@/components/ui/reveal";

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
    <Reveal
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <p
        className={`font-display text-sm tracking-[0.14em] ${
          align === "center" ? "text-center" : ""
        } ${dark ? "text-sky" : "text-slate"}`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-display mt-5 max-w-3xl text-4xl leading-[0.94] tracking-[0.005em] sm:text-6xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-6 max-w-xl text-base leading-7 ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-paper/65" : "text-slate"}`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
