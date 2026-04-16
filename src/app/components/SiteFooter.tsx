import TransitionLink from "@/app/components/TransitionLink"

export default function SiteFooter() {
  return (
    <footer className="w-full px-4 pb-10 pt-14">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} Sub Spatial Studio LLC
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <TransitionLink href="/" className="text-neutral-400 hover:text-white transition-colors">
            Home
          </TransitionLink>
          <TransitionLink href="/products" className="text-neutral-400 hover:text-white transition-colors">
            Products
          </TransitionLink>
          <TransitionLink href="/products/connectz" className="text-neutral-400 hover:text-white transition-colors">
            Connectz
          </TransitionLink>
          <TransitionLink href="/about" className="text-neutral-400 hover:text-white transition-colors">
            About
          </TransitionLink>
          <span className="text-white/10 hidden sm:inline" aria-hidden>·</span>
          <TransitionLink
            href="/products/connectz/privacypolicy"
            className="text-neutral-600 hover:text-neutral-400 transition-colors text-xs"
          >
            Connectz Privacy Policy
          </TransitionLink>
        </div>
      </div>
    </footer>
  )
}
