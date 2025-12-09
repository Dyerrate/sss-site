"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import clsx from "clsx"
import Glass from "@/app/components/Glass"
import { Canvas } from "@react-three/fiber"
import ChipGLB from "@/app/components/ChipGLB"
/**
 * A tall scrolling container (300vh by default) that pins a glass box in the viewport,
 * expands it to fullscreen, reveals text, then hides/shrinks and releases.
 */

const MotionGlass = motion(Glass)
export default function GlassScrollShowcase({
  children,
  className = "",
  heightVh = 300,
  minScale = 0.38,
  // timing stops (keep what you already tuned, or tweak later)
  expandEnd = 0.45,
  holdEnd = 0.95,
  shrinkStart = 0.95,
  textInStart = 0.50,
  textInEnd = 0.60,
  textOutStart = 0.90,
  textOutEnd = 0.94,
  // NEW: product UI props
  title = "Poker Lengends",
  productName = "An VisionOS Exclusive",
  blurb = "A VisionOS-only tabletop casino experience: tactile chips, cinematic lighting, and spatial audio—designed for quick hands and long sessions.",
  ctaHref = "#",
  ctaLabel = "View on the App Store", // how small the card starts/ends
}: React.PropsWithChildren<{
  className?: string
  heightVh?: number
  minScale?: number
  expandEnd?: number
  holdEnd?: number
  shrinkStart?: number
  textInStart?: number
  textInEnd?: number
  textOutStart?: number
  textOutEnd?: number
  title?: string
  productName?: string
  blurb?: string
  ctaHref?: string
  ctaLabel?: string
}>) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Scroll progress through the container: 0 -> 1
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // begins when container hits bottom; ends when it leaves top
  })

  // Box scale: small -> fullscreen -> small
  const scale = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.5, 0.75, 1.0],
    [minScale, 1, 1, 0.35, minScale]
  )

  // Border radius: rounded -> square -> rounded
  const radius = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.5, 0.75, 1.0],
    [32, 8, 0, 20, 24]
  )

  // Panel subtle opacity (keep consistent; optional)
  const panelOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.05, 0.95, 1.0],
    [1, 1, 1, 0.95]
  )

  // Text fade: show only in the middle slice
  const textOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.49, 0.90, 1],
    [0, 1, 1, 0]
  )

return (
    <section
      ref={containerRef}
      className={clsx("relative w-full", className)}
      style={{ height: `min(${heightVh}vh, 2400px)` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <MotionGlass
          style={{ scale, borderRadius: radius as any, opacity: 1 }}
          className={clsx("w-[min(88vw,1100px)] h-[min(72vh,820px)] p-0")}
        >
          {/* Centered vertical layout; all fades together via textOpacity */}
          <motion.div
  style={{ opacity: textOpacity }}
  className="relative z-10 h-full w-full flex flex-col items-center justify-between text-center px-6 md:px-10 py-10 md:py-12"
>
  {/* Title at top */}
  <h4 className="text-white/95 text-2xlg md:text-2xl tracking-wide mb-2">
    {title}
  </h4>

  {/* Middle content wrapper */}
  <div className="flex flex-col items-center gap-6 flex-1 justify-center">
    <div className="w-full max-w-3xl aspect-[4/3] pointer-events-none">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={[1, 2]} // Use device pixel ratio, capped at 2x for performance
        camera={{ position: [0, 0, 2.2], fov: 45 }}
        frameloop="always" // Ensure consistent 60fps rendering
        performance={{ min: 0.5 }} // Auto-adjust quality if framerate drops
        style={{ position: "absolute", inset: 0 }}
      >
        <ChipGLB
          src="/brand/white-chip.glb"
          upright
          scale={15}
          spinSpeed={0.35}
          rotation={[0, 0.2, 0]}
          position={[0, -0.02, 0]}
        />
      </Canvas>
    </div>

    {/* Product name + blurb */}
    <div className="space-y-3 px-2">
      <h4 className="text-white text-2xl md:text-3xl font-semibold">
        {productName}
      </h4>
      <p className="max-w-2xl text-neutral-300 leading-relaxed text-sm md:text-base">
        {blurb}
      </p>
    </div>
  </div>

  {/* CTA at bottom */}
  <div className="pt-4 pb-6">
    <a
      href={ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black/90 hover:opacity-90 transition"
      aria-label={ctaLabel}
    >
      {ctaLabel}
    </a>
  </div>
</motion.div>
        </MotionGlass>
      </div>
    </section>
  )
}