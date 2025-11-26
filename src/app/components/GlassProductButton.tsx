"use client"

import clsx from "clsx"
import React from "react"

type Props = {
  targetId: string
  title: string
  className?: string
  children?: React.ReactNode
}

export default function GlassProductButton({ targetId, title, className = "", children }: Props) {
  const onActivate = () => {
    const el = document.getElementById(targetId)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onActivate()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Open ${title}`}
      onClick={onActivate}
      onKeyDown={onKey}
      className={clsx(
        "relative select-none rounded-[var(--glass-radius)] overflow-hidden",
        "border border-[var(--glass-stroke-outer)] shadow-[var(--glass-shadow)]",
        "bg-[var(--glass-tint)]",
        "before:absolute before:inset-0 before:rounded-inherit before:bg-[var(--glass-fill)] before:[background-blend-mode:var(--glass-fill-blend)]",
        "after:absolute after:inset-0 after:rounded-inherit after:blur-[var(--glass-surface-blur)]",
        "flex h-48 w-full items-center justify-center p-4 md:h-56",
        "cursor-pointer transition-transform duration-300 will-change-transform",
        "hover:scale-[1.02] active:scale-[0.99]",
        className
      )}
    >
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="h-16 w-16 md:h-20 md:w-20">{children}</div>
        <div className="text-sm md:text-base font-medium tracking-wide text-neutral-100/90">
         
        </div>
      </div>
      <div aria-hidden className="glass-noise" />
    </div>
  )
}
