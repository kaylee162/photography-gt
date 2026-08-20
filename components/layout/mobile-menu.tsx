"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { ENGAGE_URL } from "@/lib/constants";

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
          className="fixed inset-0 z-50 bg-black text-white md:hidden"
        >
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <span className="text-lg font-semibold tracking-[-0.03em]">
              Photography Club
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
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
                  className="font-display block border-b border-white/10 py-4 text-4xl tracking-[-0.03em] text-white/90 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-5 pt-10 sm:px-8">
            <a
              href={ENGAGE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Engage &amp; pay dues
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
