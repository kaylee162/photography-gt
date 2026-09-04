"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { DUES_URL, ENGAGE_URL } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ink text-paper md:hidden"
        >
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <span className="font-display text-2xl tracking-[0.01em]">
              Photography Club
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex size-10 items-center justify-center border-2 border-paper/20 bg-paper/5 transition hover:border-yellow hover:text-yellow"
            >
              <X size={20} />
            </button>
          </div>

          <nav
            aria-label="Mobile primary navigation"
            className="flex flex-col gap-1 px-5 pt-6 sm:px-8"
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-display block border-b border-paper/10 py-4 text-5xl tracking-[0.01em] text-paper/90 transition hover:text-yellow"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-wrap gap-3 px-5 pt-10 sm:px-8">
            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-2 border-2 border-yellow bg-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:bg-ink hover:text-yellow"
            >
              Engage
              <ArrowUpRight size={17} />
            </a>

            <a
              href={DUES_URL}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-2 border-2 border-paper/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-paper transition hover:border-yellow hover:text-yellow"
            >
              Pay dues
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
