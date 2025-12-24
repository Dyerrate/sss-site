import type { Metadata } from "next"
import GlassSection from "@/app/components/GlassSection"
import FadeInOnce from "@/app/components/FadeInOnce"
import TransitionLink from "@/app/components/TransitionLink"

export const metadata: Metadata = {
  title: "About | Sub Spatial Studio",
  description: "Learn about Sub Spatial Studio — an indie, solo-focused spatial computing studio building for Apple Vision Pro.",
}

export default function AboutPage() {
  return (
    <section className="w-full">
      <GlassSection>
        <div className="space-y-10">
          <FadeInOnce amount={0.3} duration={0.9}>
            <div className="text-center space-y-4">
              <p className="text-neutral-400 text-sm uppercase tracking-wider">About</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sub{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Spatial
                </span>{" "}
                Studio
              </h1>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Sub Spatial Studio is an indie, solo development studio (for now) focused on building high-quality spatial
                experiences—starting with Apple Vision Pro.
              </p>
            </div>
          </FadeInOnce>

          <FadeInOnce amount={0.25} duration={0.9}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white mb-2">Indie & solo</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Right now it’s a one-person shop—design, engineering, and 3D all under one roof. The goal is to stay
                  nimble, ship often, and iterate quickly.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white mb-2">Built for Vision Pro</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Spatial computing deserves careful interaction design, readable UI, and satisfying feedback. Everything
                  here is shaped around comfort, clarity, and presence.
                </p>
              </div>
            </div>
          </FadeInOnce>

          <FadeInOnce amount={0.25} duration={0.9}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What we’re aiming for</h2>
              <p className="text-neutral-300 leading-relaxed max-w-4xl">
                Great AR/VR apps feel intentional: the lighting, the scale, the sound, and the motion all work together.
                Sub Spatial Studio is focused on building experiences that are fun, polished, and designed to feel at home
                in mixed reality.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-white font-semibold mb-1">Spatial interaction</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">Comfortable, readable UI with tactile feedback.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-white font-semibold mb-1">3D-first design</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">Cinematic lighting and purposeful motion.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-white font-semibold mb-1">Quality over noise</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">Small details that make the experience feel premium.</p>
                </div>
              </div>
            </div>
          </FadeInOnce>

          <FadeInOnce amount={0.25} duration={0.9}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <TransitionLink
                href="/product"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 active:scale-[0.98] transition"
              >
                Explore the Product
              </TransitionLink>
              <TransitionLink
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-white/5 border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/25 active:scale-[0.98] transition"
              >
                Back to Home
              </TransitionLink>
            </div>
          </FadeInOnce>
        </div>
      </GlassSection>
    </section>
  )
}
