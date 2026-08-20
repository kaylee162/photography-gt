"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import type { Photo } from "@/types";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const categoryLabels: Record<Photo["category"], string> = {
  portrait: "Portrait",
  street: "Street",
  architecture: "Architecture",
  nature: "Nature",
  sports: "Sports",
  film: "Film",
  night: "Night",
  event: "Events",
  other: "Other",
};

export function GalleryExplorer({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<"all" | Photo["category"]>("all");

  const categories = useMemo(() => {
    const present = new Set(photos.map((photo) => photo.category));
    return Array.from(present);
  }, [photos]);

  const visible = useMemo(
    () => (active === "all" ? photos : photos.filter((photo) => photo.category === active)),
    [active, photos],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            active === "all"
              ? "bg-neutral-950 text-white"
              : "bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === category
                ? "bg-neutral-950 text-white"
                : "bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((photo) => (
          <div
            key={photo.id}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
          >
            {photo.placeholder || !photo.src ? (
              <PlaceholderImage
                label={categoryLabels[photo.category]}
                className="aspect-[4/5] w-full"
              />
            ) : (
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              <p className="text-xs font-medium text-white">{photo.title}</p>
              <p className="text-[11px] text-white/70">
                {photo.photographer.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
