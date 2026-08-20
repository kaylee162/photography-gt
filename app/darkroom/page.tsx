import type { Metadata } from "next";
import { Aperture, Clock, GraduationCap, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
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
      <section className="bg-neutral-950 pb-20 pt-36 text-white">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Opening soon
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
            A darkroom of our own.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            The club is opening a member darkroom for developing and printing
            black &amp; white film. We&apos;re finalizing hours, training, and
            access — this page will update as details are confirmed.
          </p>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <PlaceholderImage
                label="Darkroom photos coming soon"
                icon={Aperture}
                className="size-full"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="What to expect"
                title="Everything you need to develop and print."
                description="From loading film to hanging finished prints, the darkroom will be stocked for members to work through the full black & white process — with a workshop to get you started."
              />
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-black/10 p-7">
                  <Icon size={22} strokeWidth={1.5} className="text-[#8a7c47]" />
                  <h3 className="font-display mt-5 text-2xl tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f6f2] py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Questions" title="Darkroom FAQ." />

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {darkroomFaq.map((item) => (
              <div key={item.question} className="bg-[#f7f6f2] p-7">
                <h3 className="text-base font-semibold text-neutral-950">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-xl text-sm text-neutral-500">
            Want first access when the darkroom opens? Make sure your dues
            are paid on{" "}
            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-neutral-900 underline underline-offset-4"
            >
              Engage
            </a>{" "}
            and watch for the training workshop announcement.
          </p>
        </Container>
      </section>
    </>
  );
}
