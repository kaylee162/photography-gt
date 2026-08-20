"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ENGAGE_URL } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const primaryLinks = navigationItems.filter((item) => item.label !== "Join");
  const joinItem = navigationItems.find((item) => item.label === "Join");

  return (
    <>
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
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            {joinItem ? (
              <Link
                href={joinItem.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Join
              </Link>
            ) : null}

            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Engage
              <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </Container>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
