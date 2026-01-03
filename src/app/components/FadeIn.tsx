"use client"

import { motion, type Variants } from "framer-motion"
import React from "react"
import { useScrollReset } from "./ScrollResetProvider"

/**
 * Wrap any content to get a slow, subtle fade-in the first time it enters view.
 * It keeps the "visible" state until the user scrolls back to the very top
 * (or on hard refresh). Respects prefers-reduced-motion.
 */

type Props = React.PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  /** fade duration (s) */
  duration?: number
  /** how much should be visible before triggering (0–1) */
  amount?: number
  /** start offset in px */
  y?: number
  /** delay (s) */
  delay?: number
  /** viewport margin to tweak trigger threshold */
  margin?: string
}>

export default function FadeIn({
  children,
  as: Tag = "div",
  className = "",
  duration = 1.2,
  amount = 0.2,
  y = 16,
  delay = 0,
  margin = "0px 0px -10% 0px",
}: Props) {
  const { resetKey } = useScrollReset()

  // Respect reduced motion: just show content
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  const variants: Variants = {
    hidden:  { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
  }

  const MotionTag = React.useMemo(() => motion.create(Tag), [Tag])

  return (
    <MotionTag
      key={resetKey}                 // 🔁 remount on top-of-page reset
      className={className}
      variants={variants}
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"          // ▶️ only run when in viewport
      viewport={{
        once: true,                  // play once per mount
        amount,                      // % of element that must be visible
        margin,                      // tweak trigger if needed
      }}
    >
      {children}
    </MotionTag>
  )
}