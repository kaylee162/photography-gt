import type { Metadata } from "next";
import { Aperture, Clock, GraduationCap, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { darkroomFaq } from "@/data/faq";
import { ENGAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Darkroom",
  description:
    "A new member darkroom is opening for the Georgia Tech Photography Club.",
};

const details = [
  {
    title: "Hours",
    description: "To be announced once the space opens.",
    icon: Clock,
  },
  {
    title: "Training required",
    description: "A short orientation session before members can book time.",
    icon: GraduationCap,
  },
  {
    title: "Member access",
    description: "Open to dues-paying members — details still being finalized.",
    icon: ShieldCheck,
  },
  {
    title: "Black & white printing",
    description: "Develop and print your own black & white film start to finish.",
    icon: Aperture,
  },
];

export default function DarkroomPage() {
  return (
    <>
      <section className="bg-ink pb-14 pt-28 text-paper sm:pt-32">
        <Container>
          <Reveal>
            <p className="font-display text-sm tracking-[0.14em] text-sky">
              Opening soon
            </p>

            <h1 className="font-display mt-5 max-w-4xl text-6xl leading-[0.88] tracking-[0.005em] sm:text-8xl">
              A darkroom of our own.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-paper/65">
              The club is opening a member darkroom for developing and printing
              black &amp; white film. We&apos;re finalizing hours, training, and
              access — this page will update as details are confirmed.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="group relative aspect-[4/3] w-full overflow-hidden border-2 border-ink/15 shadow-[0_0_0_0_var(--color-ink)] transition-shadow duration-300 hover:shadow-[8px_8px_0_0_var(--color-ink)]">
              <PlaceholderImage
                label="Darkroom photos coming soon"
                icon={Aperture}
                className="size-full"
              />
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="What to expect"
                title="Everything you need to develop and print."
                description="From loading film to hanging finished prints, the darkroom will be stocked for members to work through the full black & white process — with a workshop to get you started."
              />
            </div>
          </div>

          <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <div className="group border-2 border-ink/15 p-7 shadow-[0_0_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                    <Icon size={22} strokeWidth={1.5} className="text-ink" />
                    <h3 className="font-display mt-5 text-3xl tracking-[0.005em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Questions" title="Darkroom FAQ." />

          <RevealGroup className="mt-12 grid gap-px overflow-hidden bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {darkroomFaq.map((item) => (
              <RevealItem key={item.question} y={14}>
                <div className="h-full bg-paper p-7">
                  <h3 className="text-base font-semibold text-ink">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    {item.answer}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 max-w-xl text-sm text-slate">
            <p>
              Want first access when the darkroom opens? Make sure your dues
              are paid on{" "}
              <a
                href={ENGAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4"
              >
                Engage
              </a>{" "}
              and watch for the training workshop announcement.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
