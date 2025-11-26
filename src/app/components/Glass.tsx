// src/components/Glass.tsx
// src/components/Glass.tsx
"use client"

import React, { forwardRef } from "react"
import clsx from "clsx"

export type GlassProps = React.HTMLAttributes<HTMLDivElement> & {
  padding?: string
}

const Glass = forwardRef<HTMLDivElement, GlassProps>(function Glass(
  { className = "", padding = "p-8", children, style, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("relative overflow-hidden rounded-[var(--glass-radius)]",
        "border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)]",
        "bg-[var(--glass-tint)]",
        "before:absolute before:inset-0 before:rounded-inherit before:bg-[var(--glass-fill)] before:[background-blend-mode:var(--glass-fill-blend)]",
        "after:absolute after:inset-0 after:rounded-inherit after:blur-[var(--glass-surface-blur)]",
        // ✅ add Tailwind backdrop utilities too (works in most setups)
        "backdrop-blur-[var(--glass-backdrop-blur)]",
        "backdrop-saturate-[140%] backdrop-brightness-[115%]",
        padding,
        className
      )}
      style={{
        // ✅ hard fallback in case Tailwind utils or CSS class are missing
        backdropFilter: "blur(var(--glass-backdrop-blur)) saturate(140%) brightness(115%)",
        WebkitBackdropFilter: "blur(var(--glass-backdrop-blur)) saturate(140%) brightness(115%)",
        ...style,
      }}
      {...rest}
    >
      <div aria-hidden className="glass-noise" />
      {children}
    </div>
  )
})

export default Glass



