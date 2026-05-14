"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6">
      <motion.div
        className="relative h-24 w-24"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border-4 border-mango-300/40"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-2 rounded-full bg-gradient-to-br from-mango-300 to-leaf-500 shadow-card"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-3xl">
          🥭
        </span>
      </motion.div>
      <motion.p
        className="font-display text-xl text-leaf-800 tracking-wide"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        GR FARM
      </motion.p>
      <motion.div
        className="h-1 w-40 rounded-full bg-mango-200 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="h-full w-1/3 rounded-full bg-gradient-to-r from-mango-400 to-leaf-500"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
