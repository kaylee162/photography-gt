import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { navigationItems } from "@/data/navigation";
import {
  CONTACT_EMAIL,
  ENGAGE_URL,
  INSTAGRAM_URL,
  DISCORD_URL, 
} from "@/lib/constants";

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

function DiscordIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028ZM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-neutral-950 py-14 text-white">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
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
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
                aria-label="Join the Photography Club Discord"
              >
                <DiscordIcon className="size-4" />
                Discord
              </a>

              <a
                href={INSTAGRAM_URL}
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
                aria-label="Visit the Photography Club Instagram"
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Membership
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={ENGAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                Engage &amp; pay dues
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>

              <Link
                href="/join"
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                How to join
              </Link>
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