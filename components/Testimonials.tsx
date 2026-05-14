"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-leaf-900 via-leaf-800 to-leaf-950 text-white relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-organic-noise opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango-200 mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
            Voices from our mango circle
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-3xl glass-panel-dark p-8 shadow-glass border border-white/10"
            >
              <Quote className="h-8 w-8 text-mango-300/40 mb-4" />
              <p className="text-white/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 pt-6 border-t border-white/10">
                <cite className="not-italic font-display text-lg text-mango-200">
                  {t.name}
                </cite>
                <p className="text-sm text-white/60 mt-1">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
