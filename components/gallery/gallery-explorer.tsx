"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import type { Photo } from "@/types";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const categoryLabels: Record<Photo["category"], string> = {
  cityscapes: "Cityscapes",
  street: "Street",
  nature: "Nature",
  people: "People",
  portrait: "Portrait",
  sports: "Sports",
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
          className={`font-display relative border-2 px-4 py-2 text-sm tracking-[0.04em] uppercase transition-colors ${
            active === "all"
              ? "border-ink text-yellow"
              : "border-ink/15 text-slate hover:border-ink hover:text-ink"
          }`}
        >
          {active === "all" ? (
            <motion.span
              layoutId="active-gallery-filter"
              className="absolute inset-0 -z-10 bg-ink"
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
            />
          ) : null}
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`font-display relative border-2 px-4 py-2 text-sm tracking-[0.04em] uppercase transition-colors ${
              active === category
                ? "border-ink text-yellow"
                : "border-ink/15 text-slate hover:border-ink hover:text-ink"
            }`}
          >
            {active === category ? (
              <motion.span
                layoutId="active-gallery-filter"
                className="absolute inset-0 -z-10 bg-ink"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {visible.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden border-2 border-ink/10 shadow-[0_0_0_0_var(--color-ink)] hover:shadow-[6px_6px_0_0_var(--color-ink)]"
              style={{ transitionProperty: "box-shadow", transitionDuration: "300ms" }}
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

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="text-xs font-medium text-paper">{photo.title}</p>
                <p className="text-[11px] text-paper/70">
                  {photo.photographer.name}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
