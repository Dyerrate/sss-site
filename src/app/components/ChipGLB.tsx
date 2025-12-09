"use client"

import { useRef } from "react"
import { Group, Euler, Vector3 } from "three"
import { useFrame } from "@react-three/fiber"
import { useGLTF, Center, Environment } from "@react-three/drei"

type V3 = [number, number, number]

export default function ChipGLB({
  src = "/brand/white-chip.glb",
  scale = 5,
  position = [0, 0, 0] as V3,
  rotation = [0, 0, 0] as V3,  // radians: [x, y, z]
  spinSpeed = 1.5,
  upright = false,            // rotate 90° around X to "stand up"
}: {
  src?: string
  scale?: number | V3
  position?: V3
  rotation?: V3
  spinSpeed?: number
  upright?: boolean
}) {
  const group = useRef<Group>(null)
  const { scene } = useGLTF(src)

  // Optimize materials for better performance
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      // Enable smooth shading
      if (child.geometry) {
        child.geometry.computeVertexNormals()
      }
    }
  })

  useFrame((_, dt) => {
    if (group.current) {
      // Use a more precise rotation calculation for smooth 60fps
      group.current.rotation.z += dt * spinSpeed
    }
  })

  const finalRotation: V3 = [
    rotation[0] + (upright ? Math.PI / 2 : 0), // stand it up if requested
    rotation[1],
    rotation[2],
  ]

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 8]} intensity={1.2} castShadow />
      <spotLight position={[-4, 4, 6]} intensity={0.5} angle={0.3} penumbra={1} castShadow />
      <Environment preset="city" environmentIntensity={0.6} />
      {/* Center keeps the model's bounds centered; your transforms go on the group */}
      <Center>
        <group ref={group} position={position as Vector3} rotation={finalRotation as Euler} scale={scale as any}>
          <primitive object={scene} />
        </group>
      </Center>
    </>
  )
}

useGLTF.preload("/brand/white-chip.glb")



