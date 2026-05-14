"use client";

import { motion } from "framer-motion";
import { MotionSection } from "@/components/MotionSection";
import { FeedbackForm } from "@/components/FeedbackForm";

export function FeedbackSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-leaf-50/30 to-transparent">
      <div className="absolute inset-0 bg-organic-noise opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <MotionSection className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango-700 mb-3">
            We Value Your Opinion
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-leaf-950 text-balance">
            Share Your Experience
          </h2>
          <p className="mt-6 text-lg text-leaf-700/80 leading-relaxed">
            Help us serve you better by sharing your feedback. Whether it's praise or suggestions, we're all ears!
          </p>
        </MotionSection>

        <MotionSection delay={0.1} className="max-w-2xl mx-auto">
          <FeedbackForm />
        </MotionSection>

        <MotionSection delay={0.2} className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: "💬",
              title: "Quick Feedback",
              desc: "Share your thoughts in just a minute",
            },
            {
              icon: "⭐",
              title: "Rate Your Experience",
              desc: "Help us understand what we do best",
            },
            {
              icon: "🎯",
              title: "Direct Communication",
              desc: "Your feedback goes directly to our team",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-display text-lg text-leaf-900">{item.title}</h3>
              <p className="mt-2 text-sm text-leaf-600">{item.desc}</p>
            </motion.div>
          ))}
        </MotionSection>
      </div>
    </section>
  );
}
