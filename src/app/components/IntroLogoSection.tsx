"use client"

import { useEffect, useState } from "react"
import ModelTextGLB from "@/app/components/ModelTextGLB"
import ThreeSection from "@/app/components/ThreeSection"

export default function IntroLogoSection() {
  const [scale, setScale] = useState(1.25)

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScale(0.65)
      } else if (width < 768) {
        setScale(0.85)
      } else if (width < 1024) {
        setScale(1.0)
      } else {
        setScale(1.25)
      }
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return (
    <section
      className="w-full"
      style={{ height: "calc(100dvh - var(--site-nav-h, 0px))" }}
    >
      <ThreeSection
        className="h-full"
        height="100%"
        controls={{ rotate: false, pan: false, zoom: false }}
      >
        <ModelTextGLB src="/brand/sss-text-logo2.glb" scale={scale} />
      </ThreeSection>
    </section>
  )
}
