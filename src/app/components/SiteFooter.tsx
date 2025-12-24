import TransitionLink from "@/app/components/TransitionLink"

export default function SiteFooter() {
  return (
    <footer className="w-full px-4 pb-10 pt-14">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} Sub Spatial Studio LLC
        </p>

        <div className="flex items-center gap-4 text-sm">
          <TransitionLink href="/" className="text-neutral-400 hover:text-white transition-colors">
            Home
          </TransitionLink>
          <TransitionLink href="/product" className="text-neutral-400 hover:text-white transition-colors">
            Product
          </TransitionLink>
          <TransitionLink href="/about" className="text-neutral-400 hover:text-white transition-colors">
            About
          </TransitionLink>
        </div>
      </div>
    </footer>
  )
}
