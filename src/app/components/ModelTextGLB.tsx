// src/components/ModelTextGLB.tsx
"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { Center, Html, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type Props = { src?: string; scale?: number }

/** Loads a GLB and centers it. Wraps content in Suspense with a lightweight fallback. */
export default function ModelTextGLB({ src = "/public/brand/sss-text", scale = 10 }: Props) {
  // Preload hint so the asset is fetched ASAP (outside render)
  useGLTF.preload(src)

  // Track normalized mouse position (-1 to 1)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert to normalized device coordinates (-1 to +1)
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // The actual model renderer (suspense boundary inside Canvas)
  return (
    <Suspense
      fallback={
        <Html center style={{ fontSize: 12, color: "#bbb", letterSpacing: 1 }}>
          loading…
        </Html>
      }
    >
      <ModelInner src={src} scale={scale} mouse={mouse} />
    </Suspense>
  )
}

function ModelInner({ src, scale, mouse }: { src: string; scale: number; mouse: { x: number; y: number } }) {
  const { scene } = useGLTF(src)              // Suspends until the GLB is loaded
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return

    // Smoothly interpolate rotation based on mouse position
    // Adjust multipliers to control sensitivity (0.3 = subtle)
    const targetRotationY = mouse.x * 0.3
    const targetRotationX = mouse.y * 0.2

    // Smooth damping effect (lerp)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.1
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.1
    )
  })

  return (
    <Center>
      <group ref={groupRef} onPointerOver={(e) => e.stopPropagation()} onPointerDown={(e) => e.stopPropagation()}>
        <primitive object={scene} scale={scale} />
      </group>
    </Center>
  )
}
