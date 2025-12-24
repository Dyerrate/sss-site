"use client"

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import GlassCover from "@/app/components/GlassCover"

type PageTransitionApi = {
  transitionTo: (href: string) => void
  isTransitioning: boolean
}

const PageTransitionContext = createContext<PageTransitionApi | null>(null)

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export function usePageTransition() {
  const api = useContext(PageTransitionContext)
  if (!api) throw new Error("usePageTransition must be used within PageTransitionProvider")
  return api
}

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const controls = useAnimationControls()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const pathnameRef = useRef(pathname)
  useEffect(() => {
    pathnameRef.current = pathname
  }, [pathname])

  const transitionTo = useCallback(
    async (href: string) => {
      if (isTransitioning) return
      if (!href) return

      const current = pathnameRef.current ?? ""
      // basic same-page guard
      if (href === current) return

      setIsTransitioning(true)

      // Start hidden (offscreen at bottom)
      await controls.set({ y: "100%" })

      // Move up under the header (header stays above due to z-index)
      await controls.start({ y: 0, transition: { duration: 1.6, ease: "easeInOut" } })

      const beforePath = pathnameRef.current
      router.push(href)

      // Pause for 1s AND wait for route change (best-effort)
      const waitForPathChange = new Promise<void>((resolve) => {
        const start = Date.now()
        const maxWait = 2500
        const tick = () => {
          const now = Date.now()
          if ((pathnameRef.current ?? "") !== (beforePath ?? "")) return resolve()
          if (now - start >= maxWait) return resolve()
          requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })

      await Promise.all([sleep(400), waitForPathChange])

      // Move back down to reveal the new page
      await controls.start({ y: "100%", transition: { duration: 2.1, ease: "easeInOut" } })

      setIsTransitioning(false)
    },
    [controls, isTransitioning, router]
  )

  const value = useMemo(() => ({ transitionTo, isTransitioning }), [transitionTo, isTransitioning])

  return (
    <PageTransitionContext.Provider value={value}>
      {children}

      {/* Glass cover overlay (below header, above page content) */}
      <motion.div
        aria-hidden
        className="fixed left-0 right-0 bottom-0 z-30 bg-neutral-950/25"
        initial={{ y: "100%" }}
        animate={controls}
        style={{
          top: "var(--site-nav-h, 0px)",
          height: "calc(100vh - var(--site-nav-h, 0px))",
          pointerEvents: isTransitioning ? "auto" : "none",
        }}
      >
        <GlassCover />
      </motion.div>
    </PageTransitionContext.Provider>
  )
}
