"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS, SITE } from "@/lib/data";

type Product = (typeof PRODUCTS)[number];

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi ${SITE.name}, I'd like to order ${product.name}.`
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col rounded-3xl overflow-hidden glass-panel shadow-glass hover:shadow-card transition-shadow duration-500 border border-white/60"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/50 via-transparent to-transparent opacity-80" />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mango-700">
          {product.badge}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3 className="font-display text-2xl text-leaf-950">{product.variety}</h3>
        <p className="mt-2 text-sm text-leaf-600 uppercase tracking-wider">
          {product.name}
        </p>
        <p className="mt-3 text-leaf-700/90 text-sm leading-relaxed flex-1">
          {product.description}
        </p>
        <div className="mt-6 flex items-end justify-between gap-4 flex-wrap">
          <p className="font-display text-3xl text-mango-700">
            ₹{product.price}
            <span className="text-base font-sans text-leaf-600 font-normal">
              /{product.unit}
            </span>
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="flex-1 inline-flex justify-center items-center rounded-xl bg-leaf-800 py-3 text-sm font-semibold text-white hover:bg-leaf-900 transition-colors"
          >
            Order Now
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center rounded-xl border-2 border-mango-400/70 bg-mango-50/50 py-3 text-sm font-semibold text-leaf-900 hover:bg-mango-100 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
