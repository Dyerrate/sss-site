"use client"

import FadeInOnce from "@/app/components/FadeInOnce"

const features = [
  {
    title: "Meet Travelers",
    description:
      "Discover people exploring the same destinations. Spontaneous connections — no algorithm, no feed, just real moments.",
    accent: "#47B5DD",
    icon: (
      <svg
        aria-hidden
        className="w-6 h-6 text-[#47B5DD]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Explore Together",
    description:
      "Share itineraries, tips, and meetup points with your travel connections — all within the app, all on your terms.",
    accent: "#59B16A",
    icon: (
      <svg
        aria-hidden
        className="w-6 h-6 text-[#59B16A]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    title: "Private by Design",
    description:
      "No profile harvesting, no trackers. Everything you share lives in CloudKit — private, encrypted, and on your device.",
    accent: "#99D6EA",
    icon: (
      <svg
        aria-hidden
        className="w-6 h-6 text-[#99D6EA]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function ConnectzFeaturesSection() {
  return (
    <section id="connectz-features" className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Outer glass panel — gives all three cards a consistent backdrop */}
        <div className="rounded-[var(--glass-radius)] border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)] bg-[var(--glass-tint)] backdrop-blur-[var(--glass-backdrop-blur)] backdrop-saturate-[140%] backdrop-brightness-[115%] p-8 sm:p-10 md:p-12">

          <FadeInOnce amount={0.2} duration={0.9}>
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider mb-3">Features</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-[#264E9B]">
                  explorers
                </span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sky-300 via-blue-500 to-[#264E9B] mx-auto rounded-full" />
            </div>
          </FadeInOnce>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feature, i) => (
              <FadeInOnce key={feature.title} delay={i * 0.15} duration={0.9} amount={0.2}>
                <article
                  className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8
                             hover:border-[#47B5DD]/30 hover:bg-[#47B5DD]/5 transition-colors duration-300
                             h-full flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ backgroundColor: `${feature.accent}20` }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </article>
              </FadeInOnce>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
