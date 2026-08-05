import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { navigationItems } from "@/data/navigation";

function InstagramIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-neutral-950 py-14 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-semibold tracking-[-0.03em]"
            >
              Photography Club
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              Georgia Tech students capturing campus, Atlanta, and the world
              from a thousand different perspectives.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
                aria-label="Visit the Photography Club Instagram"
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>

              <a
                href="mailto:photography@example.com"
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Georgia Tech Photography Club
          </p>

          <p>Built by student photographers.</p>
        </div>
      </Container>
    </footer>
  );
}