"use client"

import { useCallback, useState } from "react"
import { motion } from "framer-motion"
import ChipGLB from "@/app/components/ChipGLB"
import Glass from "@/app/components/Glass"
import ThreeSection from "@/app/components/ThreeSection"

type Phase = "chip" | "chipOut" | "panel"

export default function ProductChipLanding() {
  const [phase, setPhase] = useState<Phase>("chip")

  const openPanel = useCallback(() => {
    if (phase !== "chip") return
    setPhase("chipOut")
  }, [phase])

  return (
    <section
      className="relative w-full"
      style={{ height: "calc(100dvh - var(--site-nav-h, 0px))" }}
    >
      {/* Chip layer (click to reveal panel) */}
      {phase !== "panel" ? (
        <motion.div
          className="absolute inset-0"
          role="button"
          tabIndex={0}
          aria-label="Open Poker Legends product details"
          onClick={openPanel}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              openPanel()
            }
          }}
          style={{ cursor: phase === "chip" ? "pointer" : "default" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "chip" ? 1 : 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => {
            if (phase === "chipOut") setPhase("panel")
          }}
        >
          <h1 className="sr-only">Poker Legends</h1>
          <ThreeSection className="h-full" height="100%" controls={{ rotate: false, pan: false, zoom: false }}>
            <ChipGLB src="/brand/white-chip.glb" scale={15} upright spinSpeed={1.5} />
          </ThreeSection>
        </motion.div>
      ) : null}

      {/* Panel layer (fades in after chip finishes fading out) */}
      {phase === "panel" ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Glass className="w-full max-w-3xl" padding="p-10 md:p-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Poker Legends</h2>
              <p className="text-neutral-300 leading-relaxed">
                A premium spatial tabletop experience designed for Vision Pro. Product details are being
                finalized—this page will expand with gameplay, features, and release info.
              </p>
              <p className="text-neutral-400 text-sm">
                More coming soon.
              </p>
            </div>
          </Glass>
        </motion.div>
      ) : null}
    </section>
  )
}
