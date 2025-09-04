// src/components/Glass.tsx
"use client"

import React, { forwardRef } from "react"
import clsx from "clsx"

export type GlassProps = React.HTMLAttributes<HTMLDivElement> & {
  padding?: string
}

const Glass = forwardRef<HTMLDivElement, GlassProps>(function Glass(
  { className = "", padding = "p-8", children, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      // ✅ single root element that actually has the glass styling
      className={clsx(
        "relative overflow-hidden rounded-[var(--glass-radius)]",
        // glass look (same tokens you already use)
        "border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)]",
        "bg-[var(--glass-tint)]",
        "before:absolute before:inset-0 before:rounded-inherit before:bg-[var(--glass-fill)] before:[background-blend-mode:var(--glass-fill-blend)]",
        "after:absolute after:inset-0 after:rounded-inherit after:blur-[var(--glass-surface-blur)]",
        padding,
        className
      )}
      {...rest}   // ✅ lets framer set style/borderRadius/transform
    >
      <div aria-hidden className="glass-noise" />
      {children}
    </div>
  )
})

export default Glass


