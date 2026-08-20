import type { Metadata } from "next";
import { Aperture, Camera, Image as ImageIcon, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { teamMembers } from "@/data/team";
import { MEETING_LOCATION, MEETING_SCHEDULE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
};

const offerings = [
  {
    title: "Photo walks",
    description:
      "Twice-a-month walks around campus and Atlanta to shoot together and explore new spots.",
    icon: Camera,
  },
  {
    title: "Workshops",
    description:
      "Monthly workshops for every level — beginner basics, film, black & white, composition, and editing.",
    icon: Aperture,
  },
  {
    title: "Exhibitions",
    description:
      "An end-of-semester exhibition where members print and show their favorite work.",
    icon: ImageIcon,
  },
  {
    title: "Darkroom",
    description:
      "A member darkroom for developing and printing black & white film, opening soon.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f7f6f2] pb-20 pt-36">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
            Who we are
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
            A creative community built around photography.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            The Georgia Tech Photography Club is a student-run community for
            anyone who wants to make photographs — from first-time
            shooters with a phone camera to experienced photographers
            looking for a darkroom. We host photo walks, workshops,
            exhibitions, and socials throughout the semester.
          </p>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="Something for every kind of photographer."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-black/10 p-7"
                >
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
          <div className="grid gap-10 rounded-3xl bg-white p-10 ring-1 ring-black/5 sm:p-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Meetings
              </p>
              <h3 className="font-display mt-4 text-3xl tracking-[-0.02em]">
                {MEETING_SCHEDULE}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {MEETING_LOCATION}. Final meeting details will be posted here
                and on our Instagram and Engage page once confirmed.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                Dues
              </p>
              <h3 className="font-display mt-4 text-3xl tracking-[-0.02em]">
                Paid through Engage
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Membership dues cover workshop materials, darkroom supplies,
                and exhibition costs. Amounts and payment are handled through
                our Georgia Tech Engage page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind the club."
            description="Officer bios are on the way — check back soon to meet the board."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-start">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <PlaceholderImage
                    label="Photo coming soon"
                    icon={Users}
                    className="size-full"
                  />
                </div>

                <p className="mt-4 text-base font-semibold text-neutral-950">
                  {member.name ?? "Name TBD"}
                </p>
                <p className="text-sm text-neutral-500">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
