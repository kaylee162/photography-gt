import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { GalleryExplorer } from "@/components/gallery/gallery-explorer";
import { galleries } from "@/data/galleries";
import { featuredPhotos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photography created by members of the Georgia Tech Photography Club.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#f7f6f2] pb-20 pt-36">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
            Student work
          </p>

          <h1 className="font-display mt-5 max-w-5xl text-6xl leading-[0.92] tracking-[-0.045em] sm:text-8xl">
            The gallery
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600">
            Explore portraits, street photography, landscapes, events, film,
            architecture, and more from Georgia Tech photographers.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Collections" title="Browse by category." />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleries.map((gallery) => (
              <div key={gallery.id} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  {gallery.placeholder || !gallery.coverImage ? (
                    <PlaceholderImage
                      label={gallery.title}
                      className="size-full"
                    />
                  ) : (
                    <Image
                      src={gallery.coverImage}
                      alt={gallery.coverImageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <p className="mt-3 text-base font-semibold text-neutral-950">
                  {gallery.title}
                </p>
                <p className="text-sm text-neutral-500">
                  {gallery.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f6f2] py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="All photos" title="Every photo, one grid." />

          <div className="mt-12">
            <GalleryExplorer photos={featuredPhotos} />
          </div>
        </Container>
      </section>
    </>
  );
}
