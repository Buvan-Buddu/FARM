"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Star } from "lucide-react";
import { SITE } from "@/lib/data";

export function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    setPending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const feedback = String(data.get("feedback") || "").trim();
    const text = `Hi ${SITE.name},\n\nFeedback from ${name}\nEmail: ${email}\nRating: ${"⭐".repeat(rating)}\n\nFeedback:\n${feedback}`;
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
      window.open(url, "_blank", "noopener,noreferrer");
    }, 450);
  }

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-glass border border-white/60 h-full">
      <h2 className="font-display text-2xl text-leaf-900">Share Your Feedback</h2>
      <p className="mt-2 text-sm text-leaf-600">
        We'd love to hear about your experience with our mangoes. Your feedback helps us improve!
      </p>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 flex flex-col items-center text-center py-8"
          >
            <CheckCircle className="h-14 w-14 text-leaf-500 mb-4" />
            <p className="text-leaf-800 font-medium">
              Thank you for your feedback!
            </p>
            <p className="mt-2 text-sm text-leaf-600">
              Your message will be sent via WhatsApp.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setRating(0);
              }}
              className="mt-6 px-6 py-2 bg-leaf-600 text-white rounded-lg hover:bg-leaf-700 transition-colors text-sm font-medium"
            >
              Submit Another Feedback
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-leaf-700 mb-2">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-leaf-200 text-leaf-900 placeholder-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-leaf-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-leaf-200 text-leaf-900 placeholder-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-leaf-700 mb-3">
                How would you rate your experience? *
              </label>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={`${
                        star <= (hoverRating || rating)
                          ? "fill-mango-400 text-mango-400"
                          : "text-leaf-200"
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="mt-2 text-xs text-leaf-600">
                  Rating: {rating} out of 5 stars
                </p>
              )}
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-leaf-700 mb-2">
                Your Feedback *
              </label>
              <textarea
                id="feedback"
                name="feedback"
                required
                placeholder="Tell us about your experience with our mangoes..."
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-leaf-200 text-leaf-900 placeholder-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-leaf-600 px-8 py-3 text-sm font-semibold text-white hover:bg-leaf-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              {pending ? "Sending..." : "Send Feedback"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
