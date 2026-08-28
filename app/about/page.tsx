import type { Metadata } from "next";
import { Aperture, Camera, Image as ImageIcon, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { teamMembers } from "@/data/team";
import { MEETING_LOCATION, MEETING_SCHEDULE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
};

const offerings = [
  {
    title: "Photo walks",
    description:
      "Weekly meetings alternate between Photo Walks — group walks to scenic spots around Atlanta for photography — and Print Socials, where members share and discuss their work.",
    icon: Camera,
  },
  {
    title: "Workshops",
    description:
      "Hands-on workshops covering photo editing, lighting, fashion photography, and darkroom processes for every experience level.",
    icon: Aperture,
  },
  {
    title: "Exhibitions",
    description:
      "Each semester concludes in a curated exhibition showcasing member work.",
    icon: ImageIcon,
  },
  {
    title: "Film lab",
    description:
      "An on-campus film lab open to the entire GT student body, made possible through collaboration and support from the AMS MakerSpace.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper pb-14 pt-28 sm:pt-32">
        <Container>
          <Reveal>
            <p className="font-display text-sm tracking-[0.14em] text-slate">
              Who we are
            </p>

            <h1 className="font-display mt-5 max-w-4xl text-6xl leading-[0.88] tracking-[0.005em] sm:text-8xl">
              A creative community built around photography.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate">
              Photography @ GT is a student-organized photography club at
              Georgia Tech, founded in 2024. Since then we have grown to 150+
              members who share a passion for photography across digital and
              analog practices.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
              Our mission is to create an inclusive, collaborative
              environment that supports camera creatives of all experience
              levels. We aim to provide a platform where members can learn,
              create, share, and connect with others and their artistic
              visions through photography.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="Something for every kind of photographer."
          />

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => {
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
          <Reveal className="grid gap-10 border-2 border-ink bg-white p-10 sm:p-14 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm tracking-[0.14em] text-slate">
                Meetings
              </p>
              <h3 className="font-display mt-4 text-3xl tracking-[0.005em]">
                {MEETING_SCHEDULE}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate">
                {MEETING_LOCATION}. Final meeting details will be posted here
                and on our Instagram and Engage page once confirmed.
              </p>
            </div>

            <div>
              <p className="font-display text-sm tracking-[0.14em] text-slate">
                Dues
              </p>
              <h3 className="font-display mt-4 text-3xl tracking-[0.005em]">
                Paid through Engage
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate">
                Membership dues cover workshop materials, darkroom supplies,
                and exhibition costs. Amounts and payment are handled through
                our Georgia Tech Engage page.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind the club."
            description="Meet the officers who plan our events, manage the club, and keep the community running."
          />

          <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <RevealItem key={member.id} className="group flex flex-col items-start">
                <div className="relative aspect-square w-full overflow-hidden border-2 border-ink/15 shadow-[0_0_0_0_var(--color-ink)] transition-shadow duration-300 group-hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                  <PlaceholderImage
                    label="Photo coming soon"
                    icon={Users}
                    className="size-full"
                  />
                </div>

                <p className="mt-4 text-base font-semibold text-ink">
                  {member.name ?? "Name TBD"}
                </p>
                <p className="text-sm text-slate">{member.role}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
