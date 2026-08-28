import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { GalleryExplorer } from "@/components/gallery/gallery-explorer";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { galleries } from "@/data/galleries";
import { getCategoryCoverPhotos, getGalleryPhotos } from "@/lib/gallery-photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photography created by members of the Georgia Tech Photography Club.",
};

export default function GalleryPage() {
  const photos = getGalleryPhotos();
  const coverPhotos = getCategoryCoverPhotos();

  return (
    <>
      <section className="bg-paper pb-14 pt-28 sm:pt-32">
        <Container>
          <Reveal>
            <p className="font-display text-sm tracking-[0.14em] text-slate">
              Student work
            </p>

            <h1 className="font-display mt-5 max-w-5xl text-6xl leading-[0.88] tracking-[0.005em] sm:text-8xl">
              The gallery
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate">
              Explore portraits, street photography, cityscapes, nature, sports,
              and more from Georgia Tech photographers.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Collections" title="Browse by category." />

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleries.map((gallery) => {
              const coverPhoto = coverPhotos[gallery.category];

              return (
                <RevealItem key={gallery.id} className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-ink/10 shadow-[0_0_0_0_var(--color-ink)] transition-shadow duration-300 group-hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                    {coverPhoto ? (
                      <Image
                        src={coverPhoto.src}
                        alt={coverPhoto.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <PlaceholderImage
                        label={gallery.title}
                        className="size-full"
                      />
                    )}
                  </div>

                  <p className="mt-3 text-base font-semibold text-ink">
                    {gallery.title}
                  </p>
                  <p className="text-sm text-slate">
                    {gallery.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="All photos" title="Every photo, one grid." />

          <div className="mt-12">
            <GalleryExplorer photos={photos} />
          </div>
        </Container>
      </section>
    </>
  );
}
