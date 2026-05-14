import type { Metadata } from "next";
import { PRODUCTS, SITE } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { MotionSection } from "@/components/MotionSection";

export const metadata: Metadata = {
  title: "Products",
  description: `Shop organic Alphonso, Totapuri, and Sindhura mangoes from ${SITE.name}. Transparent farm pricing per kg.`,
};

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-mango-200/50 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-leaf-200/40 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-600 mb-3">
              Catalogue
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-leaf-900 text-balance">
              Organic mango harvest
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-leaf-700/90">
              Every variety is grown without synthetic chemicals, ripened
              naturally, and packed with care under {SITE.owner}&apos;s
              supervision at {SITE.name}.
            </p>
          </MotionSection>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
