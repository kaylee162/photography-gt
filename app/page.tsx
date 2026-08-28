import { Hero } from "@/components/home/hero";
import { FeaturedGallery } from "@/components/home/featured-gallery";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { PhotoOfTheWeek } from "@/components/home/photo-of-the-week";
import { QuickLinks } from "@/components/home/quick-links";
import { MembershipCta } from "@/components/home/membership-cta";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { Reveal } from "@/components/ui/reveal";
import { getFeaturedGalleryPhotos, getPhotoOfTheWeek } from "@/lib/gallery-photos";

export default function HomePage() {
  const featuredPhotos = getFeaturedGalleryPhotos(5);
  const photoOfTheWeek = getPhotoOfTheWeek();

  return (
    <>
      <Hero />

      <section id="featured-work" className="bg-paper pt-16 sm:pt-20">
        <Container>
          <div>
            <p className="font-display text-sm tracking-[0.14em] text-slate">
              Featured work
            </p>

            <h2 className="font-display mt-3 max-w-4xl text-5xl leading-[0.9] tracking-[0.005em] sm:text-7xl">
              Photography created by students who see the world differently.
            </h2>
          </div>

          <FeaturedGallery photos={featuredPhotos} />

          <Reveal className="mt-10" delay={0.1}>
            <TextLink href="/gallery" className="text-ink">
              Browse the full gallery
            </TextLink>
          </Reveal>
        </Container>
      </section>

      <UpcomingEvents />
      <PhotoOfTheWeek photo={photoOfTheWeek} />
      <QuickLinks />
      <MembershipCta />
    </>
  );
}
