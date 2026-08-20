"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { featuredPhotos } from "@/data/photos";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function FeaturedGallery() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {featuredPhotos.slice(0, 4).map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: index * 0.08, duration: 0.6 }}
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${
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
              className="object-cover transition duration-500 hover:scale-105"
            />
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-xs font-medium text-white/90">{photo.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
