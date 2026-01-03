"use client"

import { motion, Variants } from "framer-motion"
import React from "react"

/**
 * Fades & gently slides content in the first time it enters the viewport.
 * - Nothing runs offscreen
 * - Plays once per page load (stays visible afterward)
 * - Respects prefers-reduced-motion
 */
const DEFAULTS = {
  duration: 1.2,     // how long the fade takes
  amount: 0.2,       // how much of element must be visible to trigger (0–1)
}

export default function FadeInOnce({
  children,
  as: Tag = "div",
  className = "",
  duration = DEFAULTS.duration,
  amount = DEFAULTS.amount,
  y = 16,            // start offset in px
  delay = 0,         // optional delay
}: React.PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  duration?: number
  amount?: number
  y?: number
  delay?: number
}>) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  const variants: Variants = {
    hidden:  { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const MotionTag = React.useMemo(() => motion.create(Tag), [Tag])

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}  // ▶️ triggers only when on-screen
    >
      {children}
    </MotionTag>
  )
}
