// src/components/ScrollResetProvider.tsx
"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from "react"

const ScrollResetCtx = createContext<{ resetKey: number; hasScrolled: boolean }>({
  resetKey: 0,
  hasScrolled: false,
})
export const useScrollReset = () => useContext(ScrollResetCtx)

export default function ScrollResetProvider({ children }: { children: React.ReactNode }) {
  const [resetKey, setResetKey] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const atTopRef = useRef(true)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > 0 && !hasScrolled) setHasScrolled(true)       // ✅ first real scroll
      const atTop = y <= 0
      if (atTop && !atTopRef.current) {
        atTopRef.current = true
        setResetKey(k => k + 1)                              // 🔁 broadcast reset
      } else if (!atTop && atTopRef.current) {
        atTopRef.current = false
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [hasScrolled])

  return (
    <ScrollResetCtx.Provider value={{ resetKey, hasScrolled }}>
      {children}
    </ScrollResetCtx.Provider>
  )
}
