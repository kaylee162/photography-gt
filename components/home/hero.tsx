"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { featuredPhotos } from "@/data/photos";
import { Container } from "@/components/ui/container";

const heroPhoto = featuredPhotos[0];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <Container className="relative flex min-h-screen items-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70"
            >
              Georgia Tech Photography Club
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[7.5rem]"
            >
              A thousand perspectives.
              <span className="block text-white/60">One community.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
            >
              Explore student photography, join creative events, and capture
              Atlanta with photographers of every experience level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.65 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Explore the gallery
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/join"
                className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Join the club
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-end justify-between gap-6 lg:flex-col lg:items-end"
          >
            <div className="text-left lg:text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                Featured photograph
              </p>
              <p className="mt-2 text-sm font-medium">{heroPhoto.title}</p>
              <p className="mt-1 text-sm text-white/60">
                By {heroPhoto.photographer.name}
              </p>
            </div>

            <a
              href="#featured-work"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition hover:bg-white/10"
              aria-label="Scroll to featured work"
            >
              <ArrowDown size={18} />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}