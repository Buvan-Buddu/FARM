"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/data";

export function WhatsAppFloat() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi ${SITE.name}, I would like to order organic mangoes.`
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-green-900/20 hover:brightness-110 transition-all md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      aria-label="WhatsApp order"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline text-sm font-semibold pr-1">
        WhatsApp
      </span>
    </motion.a>
  );
}
