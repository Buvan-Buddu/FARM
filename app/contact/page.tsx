import type { Metadata } from "next";
import { MotionSection } from "@/components/MotionSection";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/data";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Orders",
  description: `Order organic mangoes from ${SITE.name}. Call ${SITE.phone}, WhatsApp, or send a message — ${SITE.owner} will assist you.`,
};

export default function ContactPage() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi ${SITE.name}, I'd like to place an order for organic mangoes.`
  )}`;
  const tel = `tel:+91${SITE.phone}`;

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-mango-300/30 blur-3xl animate-blob-slow" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-leaf-300/30 blur-3xl animate-blob-medium" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-600 mb-3">
              Get in touch
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-leaf-900 text-balance">
              We would love to hear from you
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-leaf-700/90">
              Share your city, preferred varieties, and approximate quantity.
              {SITE.owner} typically replies within a few hours during harvest
              season.
            </p>
          </MotionSection>
          <div className="mt-14 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <MotionSection delay={0.05}>
                <a
                  href={tel}
                  className="glass-panel flex items-center gap-4 rounded-2xl p-5 shadow-glass hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mango-100 text-mango-700 group-hover:bg-mango-200 transition-colors">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-leaf-600">
                      Call now
                    </p>
                    <p className="text-lg font-semibold text-leaf-900">
                      {SITE.phoneDisplay}
                    </p>
                  </div>
                </a>
              </MotionSection>
              <MotionSection delay={0.1}>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel flex items-center gap-4 rounded-2xl p-5 shadow-glass hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 group border-leaf-100/80"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700 group-hover:bg-leaf-200 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-leaf-600">
                      WhatsApp order
                    </p>
                    <p className="text-lg font-semibold text-leaf-900">
                      Chat with {SITE.name}
                    </p>
                  </div>
                </a>
              </MotionSection>
              <MotionSection delay={0.15}>
                <div className="glass-panel rounded-2xl p-5 shadow-glass flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mango-50 text-mango-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-leaf-600">
                      Farm visits
                    </p>
                    <p className="text-leaf-800/90 leading-relaxed">
                      Peramandapatti
பெரமாண்டப்பட்டி
Tamil Nadu 635304
                    </p>
                  </div>
                </div>
              </MotionSection>
            </div>
            <MotionSection delay={0.08} className="lg:col-span-3">
              <ContactForm />
            </MotionSection>
          </div>
        </div>
      </section>
    </div>
  );
}
