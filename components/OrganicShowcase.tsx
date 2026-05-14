"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/MotionSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Check } from "lucide-react";

const points = [
  "Ripened on the tree, never with carbide",
  "Soil-first farming with natural compost",
  "Cold-chain friendly packing for transit",
];

export function OrganicShowcase() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-mango-200/25 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-14 items-center">
        <MotionSection className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango-700 mb-3">
            Organic showcase
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-leaf-950 text-balance">
            Mangoes with pedigree you can taste
          </h2>
          <p className="mt-6 text-lg text-leaf-800/90 leading-relaxed">
            Each season we walk the orchard daily, watching colour break and
            sugar build. Only fruit that passes our snap test makes it into a
            GR FARM box.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-leaf-800">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <AnimatedCounter
                value={500}
                suffix="+"
                className="font-display text-4xl text-mango-700"
              />
              <p className="text-sm text-leaf-600 mt-1">Happy households</p>
            </div>
            <div>
              <AnimatedCounter
                value={12}
                suffix=" yrs"
                className="font-display text-4xl text-leaf-700"
              />
              <p className="text-sm text-leaf-600 mt-1">Orchard heritage</p>
            </div>
          </div>
        </MotionSection>
        <MotionSection delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-mango-200/50">
            <Image
              src="/images/totapuri.jpg"
              alt="Organic mangoes in a wooden bowl"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-leaf-900/20 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 shadow-glass"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-leaf-700">Featured this week</p>
              <p className="font-display text-xl text-leaf-900">
                Totapuri & Sindhura crates
              </p>
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
