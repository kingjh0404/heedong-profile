"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { TextureLoader } from "three"
import * as THREE from "three"

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null)

  // 실제 지구 텍스처 로드
  const earthTexture = useLoader(
    TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/r152/examples/textures/planets/earth_atmos_2048.jpg"
  )

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={earthTexture} roughness={0.7} metalness={0.2} />
    </mesh>
  )
}

export function Globe3D() {
  return (
    <div className="relative w-full h-full min-h-[500px] rounded-lg bg-gradient-to-b from-slate-800 to-slate-700 dark:from-slate-900 dark:to-slate-800 overflow-hidden border border-border">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 3, -5]} intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[0, 10, 0]} intensity={1.0} />

        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

        <Suspense fallback={null}>
          <Globe />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* 하단 안내 텍스트 */}
      <div className="absolute bottom-3 left-3 text-xs text-muted-foreground bg-black/30 backdrop-blur-sm px-2 py-1.5 rounded">
        마우스로 드래그하여 회전, 스크롤로 확대/축소
      </div>
    </div>
  )
}
