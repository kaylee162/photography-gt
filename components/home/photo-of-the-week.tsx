import Image from "next/image";

import { photoOfTheWeek } from "@/data/photos";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function PhotoOfTheWeek() {
  return (
    <section className="bg-neutral-950 py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Photo of the week
            </p>

            <h2 className="font-display mt-5 max-w-md text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
              {photoOfTheWeek.title}
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
              A new photo, hand-picked from member submissions, every week.
              Tag us on Instagram for a chance to be featured.
            </p>

            <p className="mt-8 text-sm font-medium text-white/80">
              By {photoOfTheWeek.photographer.name}
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
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
                className="object-cover"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
