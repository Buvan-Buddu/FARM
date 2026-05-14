import type { Metadata } from "next";
import Image from "next/image";
import { MotionSection } from "@/components/MotionSection";
import { SITE } from "@/lib/data";
import { Sprout, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Farm",
  description: `Learn how ${SITE.name} grows premium organic mangoes with traditional wisdom and modern quality — led by ${SITE.owner}.`,
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-mango-100/60 via-white to-leaf-100/50" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-600 mb-3">
              Our story
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-leaf-900 text-balance">
              Roots deep in the soil, eyes on the sky
            </h1>
            <p className="mt-6 text-lg text-leaf-800/90 leading-relaxed">
              {SITE.name} is a family-led orchard where {SITE.owner} and the team
              nurture each tree like a legacy. We believe luxury is not
              packaging — it is flavour earned through patience, clean water,
              and rich earth.
            </p>
            <p className="mt-4 text-leaf-700/90 leading-relaxed">
              Our mangoes ripen on the branch, not in a warehouse. When the
              season peaks, we harvest by hand so every crate carries the same
              warmth you would taste walking under our trees.
            </p>
          </MotionSection>
          <MotionSection delay={0.12}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card ring-1 ring-white/60">
              <Image
                src="/images/sindhura.jpg"
                alt="Lush mango orchard at golden hour"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-panel-dark rounded-2xl p-4 text-white">
                <p className="font-display text-xl">{SITE.name}</p>
                <p className="text-sm text-white/80 mt-1">
                  Naturally grown · {SITE.owner}
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white/60 backdrop-blur-sm border-y border-mango-100/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Sprout,
              title: "Living soil",
              text: "Compost, mulch, and cover crops keep our orchards alive season after season.",
            },
            {
              icon: Heart,
              title: "Crafted care",
              text: "Pruning, irrigation, and harvest windows are decided tree by tree, not spreadsheet by spreadsheet.",
            },
            {
              icon: Users,
              title: "Fair hands",
              text: "Pickers are trained partners — many have been with us since the first Alphonso crate left the farm.",
            },
          ].map((item, i) => (
            <MotionSection key={item.title} delay={0.08 * i}>
              <div className="glass-panel rounded-3xl p-8 h-full shadow-glass hover:shadow-card transition-shadow duration-300">
                <item.icon className="h-10 w-10 text-mango-600 mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-leaf-900">{item.title}</h3>
                <p className="mt-3 text-leaf-700/90 leading-relaxed">{item.text}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>
    </div>
  );
}
