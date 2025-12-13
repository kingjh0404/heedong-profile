"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function FloatingShape({
  position,
  size,
  speed,
  color,
  shapeType,
}: {
  position: [number, number, number]
  size: number
  speed: number
  color: string
  shapeType: "sphere" | "box" | "cone" | "torus"
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialY = position[1]
  const randomOffset = Math.random() * Math.PI * 2
  const driftX = (Math.random() - 0.5) * 0.005
  const driftZ = (Math.random() - 0.5) * 0.005

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + randomOffset) * 1.5
      meshRef.current.position.x += driftX
      meshRef.current.position.z += driftZ

      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.z += 0.002
    }
  })

  const geometry = {
    sphere: <sphereGeometry args={[size * 1.5, 32, 32]} />,
    box: <boxGeometry args={[size * 2, size * 2, size * 2]} />,
    cone: <coneGeometry args={[size * 1.5, size * 3, 32]} />,
    torus: <torusGeometry args={[size * 1.5, size * 0.6, 16, 32]} />,
  }

  return (
    <mesh ref={meshRef} position={position}>
      {geometry[shapeType]}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.7}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  )
}

// Bubble 컴포넌트 추가
function Bubble({
  position,
  size,
  speed,
  color,
}: {
  position: [number, number, number]
  size: number
  speed: number
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialY = position[1]
  const randomOffset = Math.random() * Math.PI * 2
  const driftX = (Math.random() - 0.5) * 0.003
  const driftZ = (Math.random() - 0.5) * 0.003

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + randomOffset) * 2
      meshRef.current.position.x += driftX
      meshRef.current.position.z += driftZ
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.3}
        metalness={0.1}
        roughness={0.1}
        transmission={0.9}
        thickness={0.5}
      />
    </mesh>
  )
}

function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 150

  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 40
    positions[i + 1] = (Math.random() - 0.5) * 40
    positions[i + 2] = (Math.random() - 0.5) * 30
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function ParticleWave() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 3000

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const gridSize = 60
    const particlesPerRow = Math.sqrt(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const x = (i % particlesPerRow) * (gridSize / particlesPerRow) - gridSize / 2
      const z = Math.floor(i / particlesPerRow) * (gridSize / particlesPerRow) - gridSize / 2
      const y = 0

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const time = state.clock.elapsedTime

      for (let i = 0; i < particleCount; i++) {
        const x = positions[i * 3]
        const z = positions[i * 3 + 2]

        // 웨이브 효과
        const waveX = Math.sin(x * 0.3 + time * 0.5) * 2
        const waveZ = Math.cos(z * 0.3 + time * 0.5) * 2
        const waveY = Math.sin(x * 0.2 + z * 0.2 + time * 0.8) * 3

        positions[i * 3 + 1] = waveX + waveZ + waveY
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#8b5cf6" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export function ThreeDBackground() {
  const shapes = [
    {
      position: [-15, 8, -8] as [number, number, number],
      size: 1,
      speed: 0.15,
      color: "#a78bfa",
      type: "sphere" as const,
    },
    {
      position: [12, -6, -12] as [number, number, number],
      size: 0.8,
      speed: 0.12,
      color: "#06b6d4",
      type: "box" as const,
    },
    {
      position: [-10, -5, -5] as [number, number, number],
      size: 0.9,
      speed: 0.18,
      color: "#8b5cf6",
      type: "cone" as const,
    },
    {
      position: [16, 10, -15] as [number, number, number],
      size: 1.2,
      speed: 0.16,
      color: "#3b82f6",
      type: "torus" as const,
    },
    {
      position: [-18, -8, -10] as [number, number, number],
      size: 1.1,
      speed: 0.13,
      color: "#0ea5e9",
      type: "sphere" as const,
    },
    {
      position: [10, 7, -6] as [number, number, number],
      size: 0.7,
      speed: 0.14,
      color: "#a78bfa",
      type: "box" as const,
    },
    {
      position: [-6, 12, -11] as [number, number, number],
      size: 1,
      speed: 0.17,
      color: "#06b6d4",
      type: "cone" as const,
    },
    {
      position: [8, -10, -8] as [number, number, number],
      size: 1.3,
      speed: 0.11,
      color: "#8b5cf6",
      type: "torus" as const,
    },
  ]

  const bubbles = [
    { position: [-8, 5, -7] as [number, number, number], size: 1.2, speed: 0.1, color: "#a78bfa" },
    { position: [14, -4, -9] as [number, number, number], size: 1.5, speed: 0.08, color: "#06b6d4" },
    { position: [-12, -7, -6] as [number, number, number], size: 1, speed: 0.12, color: "#8b5cf6" },
    { position: [5, 9, -10] as [number, number, number], size: 1.3, speed: 0.09, color: "#3b82f6" },
  ]

  return (
    <div className="fixed inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#a78bfa" />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#06b6d4" />
        <pointLight position={[0, 10, 0]} intensity={0.4} color="#ffffff" />

        <ParticleWave />

        <ParticleCloud />

        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            size={shape.size}
            speed={shape.speed}
            color={shape.color}
            shapeType={shape.type}
          />
        ))}

        {bubbles.map((bubble, index) => (
          <Bubble
            key={`bubble-${index}`}
            position={bubble.position}
            size={bubble.size}
            speed={bubble.speed}
            color={bubble.color}
          />
        ))}
      </Canvas>
    </div>
  )
}
