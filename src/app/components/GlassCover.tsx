"use client"

import Glass from "@/app/components/Glass"
import clsx from "clsx"

export default function GlassCover({ className = "" }: { className?: string }) {
  return (
    <Glass
      padding="p-0"
      className={clsx(
        "w-full h-full rounded-none",
        // keep it subtle and consistent with your glass look
        "border-t border-white/10",
        className
      )}
    />
  )
}
