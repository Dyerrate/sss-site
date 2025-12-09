"use client"

import { useRef, useState } from "react"
import { Group, Euler, Vector3 } from "three"
import { useFrame, ThreeEvent } from "@react-three/fiber"
import { useGLTF, Center, Environment } from "@react-three/drei"

type V3 = [number, number, number]

export default function InteractiveChipGLB({
  src = "/brand/white-chip.glb",
  scale = 5,
  position = [0, 0, 0] as V3,
  rotation: initialRotation = [0, 0, 0] as V3,
}: {
  src?: string
  scale?: number | V3
  position?: V3
  rotation?: V3
}) {
  const group = useRef<Group>(null)
  const { scene } = useGLTF(src)
  
  const [isDragging, setIsDragging] = useState(false)
  const [rotationZ, setRotationZ] = useState(initialRotation[2])
  const [velocity, setVelocity] = useState(0)
  const lastMouseX = useRef(0)

  // Optimize materials for better performance
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      if (child.geometry) {
        child.geometry.computeVertexNormals()
      }
    }
  })

  useFrame((_, dt) => {
    if (group.current) {
      if (!isDragging) {
        // Apply momentum when not dragging
        setRotationZ((prev) => prev + velocity * dt)
        setVelocity((prev) => prev * 0.95) // Friction/damping
      }
      group.current.rotation.x = initialRotation[0]
      group.current.rotation.y = initialRotation[1]
      group.current.rotation.z = rotationZ
    }
  })

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setIsDragging(true)
    lastMouseX.current = e.clientX
    setVelocity(0)
    e.target.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging) return
    
    const deltaX = e.clientX - lastMouseX.current
    const rotationDelta = deltaX * 0.01 // Sensitivity factor
    
    setRotationZ((prev) => prev + rotationDelta)
    setVelocity(rotationDelta / 0.016) // Calculate velocity for momentum (assuming ~60fps)
    
    lastMouseX.current = e.clientX
  }

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(false)
    // @ts-ignore - accessing the canvas element
    e.target.releasePointerCapture(e.pointerId)
  }

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 8]} intensity={1.2} castShadow />
      <spotLight position={[-4, 4, 6]} intensity={0.5} angle={0.3} penumbra={1} castShadow />
      <Environment preset="city" environmentIntensity={0.6} />
      
      <Center>
        <group 
          ref={group} 
          position={position as Vector3}
          scale={scale as any}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' } as any}
        >
          <primitive object={scene} />
        </group>
      </Center>
    </>
  )
}

useGLTF.preload("/brand/white-chip.glb")
