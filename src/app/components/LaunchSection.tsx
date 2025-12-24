import GlassSection from "@/app/components/GlassSection"
import FadeInOnce from "@/app/components/FadeInOnce"
import InteractiveChipGLB from "@/app/components/InteractiveChipGLB"
import ThreeSection from "@/app/components/ThreeSection"
import TransitionLink from "@/app/components/TransitionLink"

export default function LaunchSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <FadeInOnce amount={0.3} duration={0.9}>
        <GlassSection className="text-center max-w-5xl w-full px-10 md:px-16 py-20 rounded-3xl relative overflow-visible">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Launch
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-8 rounded-full" />

            <div className="mb-8">
              <p className="text-neutral-400 text-sm uppercase tracking-wider mb-3">Introducing</p>
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 mb-4">
                Poker Legends
              </h3>
              <p className="text-neutral-300 text-base md:text-lg italic max-w-2xl mx-auto">
                A premium tabletop casino experience designed exclusively for Vision Pro
              </p>
            </div>

            <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              A polished, spatial take on classic poker nights—built for quick hands, cinematic lighting, and satisfying
              interactions.
            </p>

            <div className="my-8">
              <ThreeSection height={300} controls={{ rotate: false, pan: false, zoom: false }}>
                <InteractiveChipGLB scale={25} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} />
              </ThreeSection>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <TransitionLink
                href="/product"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 active:scale-[0.98] transition"
              >
                Explore the Product
              </TransitionLink>
              <TransitionLink
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl bg-white/5 border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/25 active:scale-[0.98] transition"
              >
                About the Studio
              </TransitionLink>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2">
              <span className="text-neutral-400 text-sm">Entertainment purposes only</span>
              <div className="group/tooltip relative">
                <svg
                  className="w-5 h-5 text-neutral-400 hover:text-blue-400 transition-colors cursor-help"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80 p-4 rounded-lg bg-neutral-900 border border-white/30 backdrop-blur-sm shadow-2xl opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-[100]">
                  <p className="text-neutral-200 text-sm leading-relaxed">
                    <strong className="text-white">Legal Disclaimer:</strong> Poker Legends is a social casino game for entertainment
                    purposes only. This app does not offer real money gambling or an opportunity to win real money or prizes.
                    Practice or success at social gaming does not imply future success at real money gambling.
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px]">
                    <div className="border-8 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassSection>
      </FadeInOnce>
    </section>
  )
}
