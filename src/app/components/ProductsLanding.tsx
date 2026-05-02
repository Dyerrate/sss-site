"use client"

import FadeInOnce from "@/app/components/FadeInOnce"
import TransitionLink from "@/app/components/TransitionLink"
import Image from "next/image"

const products = [
  {
    href: "/product",
    label: "Explore Poker Legends",
    eyebrow: "Apple Vision Pro",
    title: "Poker Legends",
    description:
      "A premium tabletop casino experience designed exclusively for Vision Pro — polished, spatial, and built for cinematic poker nights.",
    gradient: "from-amber-400 via-orange-400 to-red-400",
    divider: "from-amber-400 via-orange-400 to-red-400",
    badge: "Coming Soon",
    badgeColor: "bg-amber-400/15 text-amber-300 border-amber-400/20",
    logo: null,
  },
  {
    href: "/products/connectz",
    label: "Learn about Connectz",
    eyebrow: "iOS",
    title: "Connectz",
    description:
      "Meet fellow travelers, explore together, and stay connected privately — everything stored in CloudKit, never on a server.",
    gradient: "from-sky-300 via-blue-400 to-[#264E9B]",
    divider: "from-sky-300 via-blue-500 to-[#264E9B]",
    badge: "Coming Soon",
    badgeColor: "bg-[#47B5DD]/15 text-[#99D6EA] border-[#47B5DD]/20",
    logo: "/brand/connectz-logo.svg",
  },
]

export default function ProductsLanding() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-5xl">
        <FadeInOnce amount={0.2} duration={0.9}>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider mb-3">
              Sub Spatial Studio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Products
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>
        </FadeInOnce>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {products.map((product, i) => (
            <FadeInOnce key={product.title} delay={i * 0.15} duration={0.9} amount={0.2}>
              <div className="rounded-[var(--glass-radius)] border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)] bg-[var(--glass-tint)] backdrop-blur-[var(--glass-backdrop-blur)] backdrop-saturate-[140%] backdrop-brightness-[115%] p-8 sm:p-10 flex flex-col h-full group hover:border-white/20 transition-colors duration-300">

                {/* Logo / icon area */}
                <div className="mb-6">
                  {product.logo ? (
                    <Image
                      src={product.logo}
                      alt={`${product.title} logo`}
                      width={72}
                      height={72}
                      className="w-16 h-16 sm:w-18 sm:h-18"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-red-400/10 border border-white/10 flex items-center justify-center">
                      <svg
                        aria-hidden
                        className="w-7 h-7 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Badge + eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  <span className="text-neutral-500 text-xs uppercase tracking-wider">
                    {product.eyebrow}
                  </span>
                </div>

                <h2 className={`text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${product.gradient} mb-1`}>
                  {product.title}
                </h2>
                <div className={`w-12 h-0.5 bg-gradient-to-r ${product.divider} mb-4 rounded-full`} />

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed flex-1 mb-8">
                  {product.description}
                </p>

                <TransitionLink
                  href={product.href}
                  aria-label={product.label}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/25 active:scale-[0.98] transition w-full sm:w-auto"
                >
                  {product.label}
                  <svg aria-hidden className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </TransitionLink>
              </div>
            </FadeInOnce>
          ))}
        </div>
      </div>
    </section>
  )
}
