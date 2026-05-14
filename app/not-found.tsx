import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl mb-2" aria-hidden>
        🥭
      </p>
      <h1 className="font-display text-4xl text-leaf-900">Page not found</h1>
      <p className="mt-3 text-leaf-700 max-w-md">
        This corner of the orchard is empty. Let us walk you back to ripe
        pages.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-2xl bg-leaf-800 px-8 py-3 text-white font-semibold hover:bg-leaf-900 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
