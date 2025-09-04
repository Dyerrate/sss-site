"use client"

import React from "react"
import FadeIn from "./FadeIn"

/**
 * Wraps each direct child in <FadeIn/> so you don't add it manually everywhere.
 */
export default function AutoFadeIn({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  const kids = React.Children.toArray(children)
  return (
    <div className={className}>
      {kids.map((child, i) => (
        <FadeIn key={i}>{child}</FadeIn>
      ))}
    </div>
  )
}
