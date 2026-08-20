import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ENGAGE_URL } from "@/lib/constants";

export function MembershipCta() {
  return (
    <section className="bg-black py-24 text-white sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Join the club
          </p>

          <h2 className="font-display mt-5 text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl">
            You don&apos;t need expensive gear to get started.
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/65">
            Membership is open to every Georgia Tech student, at every skill
            level. Sign up and pay dues through Engage, then join us for the
            next photo walk, workshop, or meeting.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Join on Engage
              <ArrowUpRight size={17} />
            </a>

            <Link
              href="/join"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              How it works
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
