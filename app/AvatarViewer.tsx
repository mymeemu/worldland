'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, MeshReflectorMaterial } from '@react-three/drei'

function StylizedAvatar() {
  return (
    <group position={[0, -0.2, 0]}>
      {/* Cabeça */}
      <mesh position={[0, 1.45, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#d29b71" roughness={0.5} metalness={0.1} />
      </mesh>

      {/* Olhos simples */}
      <mesh position={[-0.08, 1.48, 0.18]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.1} />
      </mesh>
      <mesh position={[0.08, 1.48, 0.18]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.1} />
      </mesh>

      {/* Tronco / Camiseta */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.19, 0.15, 0.65, 32]} />
        <meshStandardMaterial color="#10b981" roughness={0.3} />
      </mesh>

      {/* Braço Esquerdo */}
      <mesh position={[-0.26, 0.98, 0]} rotation={[0, 0, 0.15]}>
        <capsuleGeometry args={[0.05, 0.5, 4, 16]} />
        <meshStandardMaterial color="#10b981" roughness={0.3} />
      </mesh>

      {/* Braço Direito */}
      <mesh position={[0.26, 0.98, 0]} rotation={[0, 0, -0.15]}>
        <capsuleGeometry args={[0.05, 0.5, 4, 16]} />
        <meshStandardMaterial color="#10b981" roughness={0.3} />
      </mesh>

      {/* Perna Esquerda / Calça */}
      <mesh position={[-0.1, 0.35, 0]}>
        <capsuleGeometry args={[0.07, 0.55, 4, 16]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} />
      </mesh>

      {/* Perna Direita / Calça */}
      <mesh position={[0.1, 0.35, 0]}>
        <capsuleGeometry args={[0.07, 0.55, 4, 16]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} />
      </mesh>

      {/* Sapatos */}
      <mesh position={[-0.1, 0.02, 0.04]}>
        <boxGeometry args={[0.12, 0.08, 0.2]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </mesh>
      <mesh position={[0.1, 0.02, 0.04]}>
        <boxGeometry args={[0.12, 0.08, 0.2]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </mesh>
    </group>
  )
}

function StudioEnvironment() {
  return (
    <>
      {/* Pedestal Circular 3D */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[1.2, 1.3, 0.1, 64]} />
        <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Anel de Neon no Pedestal */}
      <mesh position={[0, -0.19, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.15, 1.19, 64]} />
        <meshBasicMaterial color="#10b981" />
      </mesh>
    </>
  )
}

export default function AvatarViewer() {
  return (
    <Canvas camera={{ position: [0, 0.8, 3.2], fov: 45 }} shadows>
      <color attach="background" args={['#030712']} />
      
      {/* Iluminação de Estúdio */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.8} castShadow color="#ffffff" />
      <directionalLight position={[-4, 3, -3]} intensity={1.2} color="#10b981" />
      <pointLight position={[0, -0.1, 0]} intensity={2} color="#10b981" distance={3} />

      <Suspense fallback={null}>
        <StudioEnvironment />
        <StylizedAvatar />
        <ContactShadows position={[0, -0.2, 0]} opacity={0.8} scale={4} blur={1.5} far={1} color="#000000" />
      </Suspense>

      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        minDistance={1.5}
        maxDistance={4.2}
        target={[0, 0.7, 0]} 
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
