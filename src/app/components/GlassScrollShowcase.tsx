"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import clsx from "clsx"
import Glass from "@/app/components/Glass"
/**
 * A tall scrolling container (300vh by default) that pins a glass box in the viewport,
 * expands it to fullscreen, reveals text, then hides/shrinks and releases.
 */

const MotionGlass = motion(Glass)
export default function GlassScrollShowcase({
  children,
  className = "",
  heightVh = 300, // scroll duration (in viewport heights)
  minScale = 0.38, // how small the card starts/ends
}: React.PropsWithChildren<{
  className?: string
  heightVh?: number
  minScale?: number
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
    [0.42, 0.52, 0.70, 0.78],
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
          // ✅ animate the actual glass element
          style={{
            scale,
            borderRadius: radius as any,
            opacity: panelOpacity,
          }}
          className={clsx(
            "w-[min(88vw,1100px)] h-[min(72vh,820px)]", // base size; scale drives to fullscreen
            "p-0" // we’ll pad the inner content instead
          )}
        >
          {/* centered content (only visible mid segment) */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="relative z-10 h-full w-full flex items-center justify-center p-6 md:p-10 text-center"
          >
            <div className="max-w-3xl space-y-5">{children}</div>
          </motion.div>
        </MotionGlass>
      </div>
    </section>
  )
}