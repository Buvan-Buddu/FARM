"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/data";

export function ContactCTA() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi ${SITE.name}, I'd like to place an order.`
  )}`;
  const tel = `tel:+91${SITE.phone}`;

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-mango-200/50 via-white to-leaf-200/50" />
      <div className="absolute top-10 left-1/4 h-40 w-40 rounded-full bg-mango-300/40 blur-3xl animate-blob-slow" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] glass-panel p-10 md:p-14 shadow-card border border-white/70"
        >
          <span className="text-4xl mb-4 block" aria-hidden>
            🥭
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-leaf-950 text-balance">
            Ready for your first crate?
          </h2>
          <p className="mt-4 text-lg text-leaf-700/90 max-w-xl mx-auto">
            Tell us your city and preferred varieties — {SITE.owner} will guide
            availability, pricing, and delivery windows.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-leaf-800 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-leaf-900 transition-colors w-full sm:w-auto"
            >
              Order Now
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-md hover:brightness-110 transition-all w-full sm:w-auto"
            >
              WhatsApp Order
            </a>
            <a
              href={tel}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-leaf-300 bg-white/80 px-8 py-4 text-base font-semibold text-leaf-900 hover:border-leaf-500 transition-colors w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
