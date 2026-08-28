"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

import { featuredPhotos } from "@/data/photos";
import { Container } from "@/components/ui/container";

const heroPhoto = featuredPhotos[0];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="grain relative min-h-screen overflow-hidden bg-ink text-paper"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-[8%] h-[116%]">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/10 to-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

      <div className="absolute right-5 top-24 flex size-16 flex-col items-center justify-center gap-0.5 border-2 border-yellow bg-ink/70 text-yellow shadow-[3px_3px_0_0_var(--color-sky)] sm:right-8 sm:top-28">
        <span className="font-display text-[10px] tracking-[0.1em]">EST</span>
        <span className="font-display text-lg leading-none">2024</span>
      </div>

      <Container className="relative flex min-h-screen items-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65 }}
              className="font-display mb-5 text-sm tracking-[0.2em] text-sky"
            >
              Georgia Tech Photography Club
            </motion.p>

            <h1 className="font-display max-w-4xl text-6xl leading-[0.86] tracking-[0.005em] sm:text-8xl lg:text-[8.5rem]">
              <motion.span
                initial={{ opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Yellow Jackets
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                behind the lens,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block text-yellow"
              >
                capturing a thousand
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block text-yellow"
              >
                perspectives.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.65 }}
              className="mt-7 max-w-xl text-base leading-7 text-paper/80 sm:text-lg"
            >
              Explore student photography, join creative events, and capture
              Atlanta with photographers of every experience level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.65 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border-2 border-yellow bg-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-ink shadow-[4px_4px_0_0_var(--color-sky)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-ink hover:text-yellow hover:shadow-[6px_6px_0_0_var(--color-sky)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                Explore the gallery
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/join"
                className="inline-flex items-center border-2 border-paper/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-paper shadow-[4px_4px_0_0_var(--color-yellow)] backdrop-blur-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-sky hover:text-sky hover:shadow-[6px_6px_0_0_var(--color-yellow)] active:translate-x-0 active:translate-y-0 active:shadow-none"
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
              <p className="text-xs uppercase tracking-[0.18em] text-paper/50">
                Featured photograph
              </p>
              <p className="mt-2 text-sm font-medium">{heroPhoto.title}</p>
              <p className="mt-1 text-sm text-paper/60">
                By {heroPhoto.photographer.name}
              </p>
            </div>

            <a
              href="#featured-work"
              className="flex size-11 items-center justify-center border-2 border-paper/25 bg-paper/5 backdrop-blur-sm transition hover:border-yellow hover:text-yellow"
              aria-label="Scroll to featured work"
            >
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex"
              >
                <ArrowDown size={18} />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}