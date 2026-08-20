import { Hero } from "@/components/home/hero";
import { FeaturedGallery } from "@/components/home/featured-gallery";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { PhotoOfTheWeek } from "@/components/home/photo-of-the-week";
import { QuickLinks } from "@/components/home/quick-links";
import { MembershipCta } from "@/components/home/membership-cta";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="featured-work" className="bg-[#f7f6f2] py-24 sm:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Featured work
            </p>

            <h2 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              Photography created by students who see the world differently.
            </h2>
          </div>

          <FeaturedGallery />

          <div className="mt-10">
            <TextLink href="/gallery" className="text-neutral-900">
              Browse the full gallery
            </TextLink>
          </div>
        </Container>
      </section>

      <UpcomingEvents />
      <PhotoOfTheWeek />
      <QuickLinks />
      <MembershipCta />
    </>
  );
}
