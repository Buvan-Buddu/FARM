import Link from "next/link";
import { Leaf, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-mango-200/60 bg-gradient-to-b from-white/90 via-mango-50/80 to-leaf-100/40">
      <div className="absolute inset-0 bg-organic-noise pointer-events-none opacity-60" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-mango-400 to-leaf-500 text-white shadow-md">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl text-leaf-900">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-leaf-700/90 leading-relaxed max-w-xs">
              {SITE.tagline}. Premium organic mangoes from orchards tended by{" "}
              {SITE.owner}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf-200/80 bg-white/70 text-leaf-700 hover:bg-mango-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf-200/80 bg-white/70 text-leaf-700 hover:bg-mango-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg text-leaf-900">Explore</h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Farm" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-leaf-700 hover:text-mango-700 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-leaf-900">Varieties</h3>
            <ul className="mt-4 space-y-2 text-leaf-700">
              <li>Alphonso — ₹80/kg</li>
              <li>Totapuri — ₹40/kg</li>
              <li>Sindhura — ₹50/kg</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-leaf-900">Contact</h3>
            <p className="mt-4 text-leaf-700/90">
              Owner: {SITE.owner}
              <br />
              <a
                href={`tel:+91${SITE.phone}`}
                className="font-semibold text-leaf-900 hover:text-mango-700"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-xl bg-leaf-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-leaf-900 transition-colors"
            >
              Order enquiry
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-mango-200/50 pt-8 text-sm text-leaf-600">
          <p>© {year} {SITE.name}.</p>
          <p className="text-leaf-500">Farm fresh · Seasonal harvest</p>
        </div>
      </div>
    </footer>
  );
}
