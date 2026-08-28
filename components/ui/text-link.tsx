import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-yellow ${className}`}
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
