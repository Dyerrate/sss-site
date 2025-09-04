// src/components/ModelTextGLB.tsx
"use client"

import { Suspense } from "react"
import { Center, Html, useGLTF } from "@react-three/drei"

type Props = { src?: string; scale?: number }

/** Loads a GLB and centers it. Wraps content in Suspense with a lightweight fallback. */
export default function ModelTextGLB({ src = "/public/brand/sss-text", scale = 1 }: Props) {
  // Preload hint so the asset is fetched ASAP (outside render)
  useGLTF.preload(src)

  // The actual model renderer (suspense boundary inside Canvas)
  return (
    <Suspense
      fallback={
        <Html center style={{ fontSize: 12, color: "#bbb", letterSpacing: 1 }}>
          loading…
        </Html>
      }
    >
      <ModelInner src={src} scale={scale} />
    </Suspense>
  )
}

function ModelInner({ src, scale }: { src: string; scale: number }) {
  const { scene } = useGLTF(src)              // Suspends until the GLB is loaded
  return (
    <Center>
      <primitive object={scene} scale={scale} />
    </Center>
  )
}
