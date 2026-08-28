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
        className="fixed inset-x-0 top-0 z-50 border-b-2 border-yellow bg-ink text-paper"
      >
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Georgia Tech Photography Club home"
          >
            <span className="font-display text-2xl tracking-[0.01em]">
              Photography Club
            </span>

            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-paper/55 sm:inline">
              Georgia Tech
            </span>
          </Link>

          <nav
            className="font-display hidden items-center gap-8 text-lg tracking-[0.02em] lg:flex"
            aria-label="Primary navigation"
          >
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1 text-paper/75 transition-colors hover:text-yellow"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-[3px] origin-left scale-x-0 bg-yellow transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {joinItem ? (
              <Link
                href={joinItem.href}
                className="inline-flex items-center gap-1.5 border-2 border-yellow bg-yellow px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-ink shadow-[3px_3px_0_0_var(--color-sky)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-ink hover:text-yellow hover:shadow-[5px_5px_0_0_var(--color-sky)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                Join
              </Link>
            ) : null}

            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 border-2 border-paper/30 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-paper transition hover:border-sky hover:text-sky"
            >
              Engage
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex size-10 items-center justify-center border-2 border-paper/25 bg-paper/5 transition hover:border-yellow hover:text-yellow lg:hidden"
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
