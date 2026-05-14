"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/data";

export function BrandTagline() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-gradient-to-r from-leaf-800 via-leaf-700 to-mango-600" />
      <div className="absolute inset-0 bg-organic-noise opacity-30 mix-blend-overlay" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p
          className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {SITE.tagline}
        </motion.p>
        <motion.p
          className="mt-6 text-mango-100/90 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A quiet promise from our rows of trees — no rush, no shortcuts. Just
          mangoes the way nature meant them to taste.
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-mango-200/80"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
