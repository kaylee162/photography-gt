import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { DISCORD_URL, ENGAGE_URL } from "@/lib/constants";

export function MembershipCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20">
      <div
        className="absolute right-6 top-10 hidden size-24 items-center justify-center border-2 border-sky text-center text-sky sm:right-10 sm:flex lg:right-16"
        aria-hidden="true"
      >
        <span className="font-display text-lg leading-tight tracking-[0.04em]">
          JOIN
          <br />
          NOW
        </span>
      </div>

      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-display text-sm tracking-[0.14em] text-sky">
            Join the club
          </p>

          <h2 className="font-display mt-5 text-5xl leading-[0.94] tracking-[0.005em] sm:text-7xl">
            You don&apos;t need expensive gear to get started.
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-paper/70">
            Membership is open to every Georgia Tech student, at every skill
            level. Sign up and pay dues through Engage, then join our Discord
            to catch event reminders and chat with other members between
            meetings.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-yellow bg-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-ink shadow-[4px_4px_0_0_var(--color-sky)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-ink hover:text-yellow hover:shadow-[6px_6px_0_0_var(--color-sky)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              Join on Engage
              <ArrowUpRight size={17} />
            </a>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border-2 border-paper/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-paper shadow-[4px_4px_0_0_var(--color-yellow)] backdrop-blur-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-sky hover:text-sky hover:shadow-[6px_6px_0_0_var(--color-yellow)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              Join our Discord
            </a>

            <Link
              href="/join"
              className="inline-flex items-center border-2 border-paper/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-paper shadow-[4px_4px_0_0_var(--color-yellow)] backdrop-blur-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-sky hover:text-sky hover:shadow-[6px_6px_0_0_var(--color-yellow)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              How it works
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
