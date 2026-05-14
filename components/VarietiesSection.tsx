import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { MotionSection } from "@/components/MotionSection";

export function VarietiesSection() {
  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-white via-mango-50/40 to-white border-y border-mango-100/60">
      <div className="absolute inset-0 bg-organic-noise opacity-25 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <MotionSection className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-600 mb-3">
            Available varieties
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-leaf-950">
            Three crowns of our orchard
          </h2>
          <p className="mt-4 text-lg text-leaf-700/90">
            Transparent farm pricing — choose your favourite pulp, aroma, and
            kitchen personality.
          </p>
        </MotionSection>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
