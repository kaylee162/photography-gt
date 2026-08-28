"use client";

import Image from "next/image";
import { motion } from "motion/react";

import type { Photo } from "@/types";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function FeaturedGallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className={`group relative overflow-hidden border-2 border-ink/15 bg-paper shadow-[0_0_0_0_var(--color-ink)] transition-shadow duration-300 hover:shadow-[6px_6px_0_0_var(--color-ink)] ${
            index === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-[4/5]" : "aspect-square"
          }`}
        >
          {photo.placeholder || !photo.src ? (
            <PlaceholderImage label={photo.category} className="size-full" />
          ) : (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-yellow opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-20" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-4">
            <p className="text-xs font-medium text-paper">{photo.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
