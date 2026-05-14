"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { SITE } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/feedback", label: "Feedback" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 md:py-3"
          : "py-3 md:py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 md:px-6 transition-all duration-300 ${
            scrolled
              ? "glass-panel shadow-glass border border-white/50"
              : "bg-white/40 backdrop-blur-md border border-white/30 shadow-sm"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-mango-400 to-leaf-500 text-white shadow-md group-hover:scale-105 transition-transform">
              <Leaf className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="font-display text-xl sm:text-2xl tracking-tight text-leaf-900">
              {SITE.name}
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                      active
                        ? "text-leaf-900"
                        : "text-leaf-700/80 hover:text-leaf-900"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-mango-100/80 -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-xl bg-leaf-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-leaf-800 transition-colors"
            >
              Order Now
            </Link>
          </div>
          <button
            type="button"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-leaf-200/60 bg-white/80 text-leaf-800"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              className="md:hidden mt-2 overflow-hidden rounded-2xl glass-panel shadow-glass border border-white/50"
            >
              <ul className="flex flex-col p-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block rounded-xl px-4 py-3 text-base font-medium ${
                        pathname === l.href
                          ? "bg-mango-100 text-leaf-900"
                          : "text-leaf-800 hover:bg-white/60"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <Link
                  href="/contact"
                  className="m-2 rounded-xl bg-leaf-700 px-4 py-3 text-center text-white font-semibold"
                >
                  Order Now
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
