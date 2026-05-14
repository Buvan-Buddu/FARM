"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = `Hi ${SITE.name},\n\nName: ${name}\nEmail: ${email}\nContact: ${phone}\nAddress: ${address}\n\nOrder Details:\n${message}`;
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
      window.open(url, "_blank", "noopener,noreferrer");
    }, 450);
  }

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-glass border border-white/60 h-full">
      <h2 className="font-display text-2xl text-leaf-900">Send a message</h2>
      <p className="mt-2 text-sm text-leaf-600">
        Submit the form to open WhatsApp with your details — {SITE.owner} will
        reply as soon as possible.
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
              WhatsApp should open in a new tab.
            </p>
            <p className="text-sm text-leaf-600 mt-2">
              If it did not, message us manually on{" "}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                className="text-mango-700 font-semibold underline"
              >
                WhatsApp
              </a>{" "}
              or call {SITE.phoneDisplay}.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-leaf-800 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-leaf-200/80 bg-white/80 px-4 py-3 text-leaf-900 placeholder:text-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400/80 focus:border-transparent transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-leaf-800 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-leaf-200/80 bg-white/80 px-4 py-3 text-leaf-900 placeholder:text-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400/80 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-leaf-800 mb-1.5"
              >
                Contact Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-xl border border-leaf-200/80 bg-white/80 px-4 py-3 text-leaf-900 placeholder:text-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400/80 focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-leaf-800 mb-1.5"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                required
                className="w-full rounded-xl border border-leaf-200/80 bg-white/80 px-4 py-3 text-leaf-900 placeholder:text-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400/80 focus:border-transparent"
                placeholder="City, state, postal code"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-leaf-800 mb-1.5"
              >
                Order details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-leaf-200/80 bg-white/80 px-4 py-3 text-leaf-900 placeholder:text-leaf-400 focus:outline-none focus:ring-2 focus:ring-mango-400/80 focus:border-transparent resize-y min-h-[120px]"
                placeholder="City, varieties, approximate kg…"
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-leaf-700 to-leaf-800 py-3.5 text-white font-semibold hover:from-leaf-800 hover:to-leaf-900 transition-all disabled:opacity-60"
            >
              {pending ? (
                "Opening WhatsApp…"
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
