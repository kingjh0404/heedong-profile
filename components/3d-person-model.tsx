"use client"

import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { useRef, Suspense, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"

function EnvironmentMap() {
  const { scene } = useThree()
  const texture = useLoader(RGBELoader, "/model/pine_picnic_4k.hdr")
  
  useEffect(() => {
    if (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping
      scene.environment = texture
      scene.background = texture
    }
  }, [texture, scene])
  
  return null
}

function Person() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/model/base_basic_shaded.glb")

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  // 모델 재질 조정
  const clonedScene = scene.clone()
  clonedScene.traverse((child: THREE.Object3D) => {
    if ((child as any).isMesh) {
      const mesh = child as THREE.Mesh
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat: any) => {
            if (mat.isMeshStandardMaterial || mat.isMeshPhongMaterial) {
              mat.needsUpdate = true
            }
          })
        } else {
          const mat = mesh.material as any
          if (mat.isMeshStandardMaterial || mat.isMeshPhongMaterial) {
            mat.needsUpdate = true
          }
        }
      }
    }
  })

  return (
    <group ref={groupRef} position={[0.1, -2, 0]}>
      <primitive object={clonedScene} scale={1.4} />
    </group>
  )
}

export function PersonModel3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
        <Suspense fallback={null}>
          <EnvironmentMap />
          <Person />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, 3, -5]} intensity={0.3} />
      </Canvas>
    </div>
  )
}
