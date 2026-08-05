"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 text-white backdrop-blur-xl"
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Georgia Tech Photography Club home"
        >
          <span className="text-lg font-semibold tracking-[-0.03em]">
            Photography Club
          </span>

          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-white/55 sm:inline">
            Georgia Tech
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>
      </Container>
    </motion.header>
  );
}