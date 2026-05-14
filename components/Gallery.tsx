"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/alphonso.jpg",
    alt: "Mangoes arranged on slate",
  },
  {
    src: "/images/totapuri.jpg",
    alt: "Fresh mango slices",
  },
  {
    src: "/images/sindhura.jpg",
    alt: "Mango orchard rows",
  },
  {
    src: "/images/alphonso.jpg",
    alt: "Basket of harvested mangoes",
  },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango-700 mb-3">
              Gallery
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-leaf-950">
              Colours of the season
            </h2>
          </div>
          <p className="text-leaf-700/90 max-w-md md:text-right leading-relaxed">
            Golden hours, dew-heavy mornings, and the first cut of summer —
            glimpses from life behind your box of mangoes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative aspect-square rounded-2xl overflow-hidden shadow-glass ring-1 ring-white/50 ${
                i === 1 ? "md:mt-8" : i === 2 ? "md:-mt-6" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
