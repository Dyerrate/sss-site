// src/components/ThreeSection.tsx
"use client"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import React from "react"

type ControlRules = {
  /** allow orbit rotation with drag */
  rotate?: boolean
  /** allow panning (right/middle drag) */
  pan?: boolean
  /** allow zoom (wheel/pinch) — we’ll keep this false to stop scroll-zoom */
  zoom?: boolean
  /** optional angle limits for “title” locking */
  minPolar?: number
  maxPolar?: number
  minAzimuth?: number
  maxAzimuth?: number
}


export default function ThreeSection({
  children,
  /** Use full viewport height (100vh) */
  full = false,
  /** Responsive height: clamp(min, preferred, max). Accepts number (px) or CSS string. */
  height = "clamp(420px, 80vh, 1000px)",
  controls = {
    rotate: true,
    pan: false,
    zoom: false,
    minPolar: Math.PI * 0.45,
    maxPolar: Math.PI * 0.55,
    minAzimuth: -Math.PI / 12,
    maxAzimuth: +Math.PI / 12,
  },
  className = "",
  style,
}: React.PropsWithChildren<{
  full?: boolean
  height?: number | string
  controls?: ControlRules
  className?: string
  style?: React.CSSProperties
}>) {
  const resolvedHeight =
    typeof height === "number" ? `${height}px` : height

  // If all controls are disabled, allow touch events to pass through for scrolling
  const allowTouchPassthrough = !controls.rotate && !controls.pan && !controls.zoom

  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        height: full ? "100vh" : resolvedHeight,
        ...style,
        /* IMPORTANT: lets the canvas fill the parent and not trap page scroll */
        overscrollBehavior: "auto",
        /* Allow vertical touch scrolling when no controls are enabled */
        touchAction: allowTouchPassthrough ? "pan-y" : "none",
      }}
    >
      {/* Canvas auto-resizes to its parent; alpha keeps background clear */}
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          /* Allow touch events to pass through for scrolling on mobile when controls are disabled */
          touchAction: allowTouchPassthrough ? "pan-y" : "none",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Environment preset="city" />

        {children}

        <OrbitControls
          makeDefault
          enableRotate={!!controls.rotate}
          enablePan={!!controls.pan}
          enableZoom={!!controls.zoom}   // you set this false earlier to stop wheel zoom
          zoomSpeed={0}
          enableDamping
          dampingFactor={0.08}
          minPolarAngle={controls.minPolar ?? 0}
          maxPolarAngle={controls.maxPolar ?? Math.PI}
          minAzimuthAngle={controls.minAzimuth ?? -Infinity}
          maxAzimuthAngle={controls.maxAzimuth ?? Infinity}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: controls.pan ? THREE.MOUSE.PAN : undefined,
            RIGHT: controls.pan ? THREE.MOUSE.PAN : undefined,
          }}
          touches={{
            ONE: allowTouchPassthrough ? undefined : THREE.TOUCH.ROTATE,
            TWO: undefined,
          }}
        />
      </Canvas>
    </div>
  )
}