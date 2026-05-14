"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/data";
import { Leaf, Sprout, Truck, Hand, ShieldCheck } from "lucide-react";

const iconMap = {
  leaf: Leaf,
  sprout: Sprout,
  truck: Truck,
  hand: Hand,
  shield: ShieldCheck,
} as const;

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-leaf-200/40 blur-3xl" />
      <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-mango-200/40 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-600 mb-3">
            Why choose us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-leaf-950">
            The GR FARM difference
          </h2>
          <p className="mt-4 text-lg text-leaf-700/90">
            Five promises we renew with every harvest — not marketing lines,
            but farm rules etched into our daily rhythm.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl glass-panel p-6 text-center shadow-glass border border-white/60 hover:shadow-card transition-shadow duration-300"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mango-100 to-leaf-100 text-mango-700 mb-4">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg text-leaf-900">{f.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
