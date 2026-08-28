import Image from "next/image";

import type { Photo } from "@/types";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";

export function PhotoOfTheWeek({ photo: photoOfTheWeek }: { photo: Photo }) {
  return (
    <section className="bg-ink py-16 text-paper sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <p className="font-display text-sm tracking-[0.14em] text-sky">
              Photo of the week
            </p>

            <h2 className="font-display mt-5 max-w-md text-5xl leading-[0.94] tracking-[0.005em] sm:text-6xl">
              {photoOfTheWeek.title}
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-paper/60">
              A new photo, hand-picked from member submissions, every week.
              Tag us on Instagram for a chance to be featured.
            </p>

            <p className="mt-8 text-sm font-medium text-paper/85">
              By {photoOfTheWeek.photographer.name}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="group relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-paper/15 shadow-[0_0_0_0_var(--color-yellow)] transition-shadow duration-300 group-hover:shadow-[8px_8px_0_0_var(--color-yellow)]">
              {photoOfTheWeek.placeholder || !photoOfTheWeek.src ? (
                <PlaceholderImage
                  label={photoOfTheWeek.category}
                  dark
                  className="size-full"
                />
              ) : (
                <Image
                  src={photoOfTheWeek.src}
                  alt={photoOfTheWeek.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
