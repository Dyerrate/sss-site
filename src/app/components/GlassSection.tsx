"use client"

import Glass from "./Glass"
import clsx from "clsx"

type Props = React.PropsWithChildren<{
  className?: string
  /** Content width container (defaults to a comfy reading width) */
  max?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}>

/**
 * A glass block with sensible page padding + max width.
 * Use this for normal sections; use <Glass full /> for full-screen overlays.
 */
export default function GlassSection({ className = "", max = "3xl", children }: Props) {
  return (
    <div className={clsx("px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex justify-center", className)}>
      <Glass className={clsx(`w-full max-w-${max}`)}>{children}</Glass>
    </div>
  )
}
