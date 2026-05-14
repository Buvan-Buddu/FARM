"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SITE } from "@/lib/data";

function MangoBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-20 -right-16 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-mango-300/70 to-mango-500/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-32 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-leaf-300/50 to-leaf-500/20 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-mango-200/60 blur-2xl animate-blob-fast"
      />
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi ${SITE.name}, I'd like to place a mango order.`
  )}`;

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-mango-100/90 via-white to-leaf-50/90" />
      <MangoBlobs />
      <div className="absolute inset-0 bg-organic-noise opacity-40 mix-blend-multiply pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          style={{ opacity }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-sm text-leaf-800 shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-mango-600" />
            <span>Luxury farm harvest · 100% organic</span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl text-leaf-950 leading-[1.08] text-balance"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Taste the sun in every{" "}
            <span className="bg-gradient-to-r from-mango-500 via-mango-400 to-leaf-600 bg-clip-text text-transparent">
              golden slice
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-leaf-800/85 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            {SITE.tagline} — Alphonso, Totapuri & Sindhura mangoes nurtured by{" "}
            {SITE.owner} at {SITE.name}, delivered farm-fresh to your door.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-leaf-700 to-leaf-800 px-8 py-4 text-base font-semibold text-white shadow-card hover:from-leaf-800 hover:to-leaf-900 transition-all hover:-translate-y-0.5"
            >
              Order Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-mango-400/80 bg-white/70 backdrop-blur-sm px-8 py-4 text-base font-semibold text-leaf-900 hover:bg-mango-50 transition-colors shadow-sm"
            >
              WhatsApp Order
            </a>
            <a
              href={`tel:+91${SITE.phone}`}
              className="inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold text-leaf-800 hover:text-mango-700 underline-offset-4 hover:underline"
            >
              Call Now
            </a>
          </motion.div>
          <motion.dl
            className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {[
              { k: "Organic", v: "Certified ethos" },
              { k: "Handpicked", v: "Peak ripeness" },
              { k: "Delivery", v: "Pan-India*" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 px-3 py-3 text-center shadow-sm"
              >
                <dt className="text-xs uppercase tracking-wider text-leaf-600">
                  {item.k}
                </dt>
                <dd className="mt-1 font-display text-lg text-leaf-900">
                  {item.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          style={{ y, scale }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-square">
            <motion.div
              className="absolute inset-6 rounded-full bg-gradient-to-tr from-mango-200/80 to-leaf-200/50 blur-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden ring-4 ring-white/80 shadow-card">
              <Image
                src="/images/alphonso.jpg"
                alt="Ripe organic mangoes — GR FARM hero"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/25 via-transparent to-mango-100/10" />
            </div>
            <motion.div
              className="absolute -bottom-4 -left-2 sm:left-0 glass-panel rounded-2xl px-4 py-3 shadow-glass max-w-[200px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <p className="text-xs text-leaf-600 uppercase tracking-wide">
                Today&apos;s pick
              </p>
              <p className="font-display text-lg text-leaf-900">Alphonso crate</p>
            </motion.div>
            <motion.div
              className="absolute -right-2 top-12 glass-panel rounded-2xl px-3 py-2 shadow-glass hidden sm:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-3xl" aria-hidden>
                🥭
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
