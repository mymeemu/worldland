import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'

function BaseAvatar() {
  return (
    <group position={[0, 0, 0]}>
      {/* Cabeça */}
      <mesh position={[0, 1.45, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.4} />
      </mesh>

      {/* Tronco */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.18, 0.14, 0.65, 32]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.4} />
      </mesh>

      {/* Braço Esquerdo */}
      <mesh position={[-0.26, 0.98, 0]} rotation={[0, 0, 0.15]}>
        <capsuleGeometry args={[0.05, 0.5, 4, 16]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.4} />
      </mesh>

      {/* Braço Direito */}
      <mesh position={[0.26, 0.98, 0]} rotation={[0, 0, -0.15]}>
        <capsuleGeometry args={[0.05, 0.5, 4, 16]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.4} />
      </mesh>

      {/* Perna Esquerda */}
      <mesh position={[-0.1, 0.35, 0]}>
        <capsuleGeometry args={[0.07, 0.55, 4, 16]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.4} />
      </mesh>

      {/* Perna Direita */}
      <mesh position={[0.1, 0.35, 0]}>
        <capsuleGeometry args={[0.07, 0.55, 4, 16]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.4} />
      </mesh>
    </group>
  )
}

export default function AvatarViewer() {
  return (
    <Canvas 
      camera={{ position: [0, 1.0, 3.2], fov: 45 }}
      shadows
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 4]} intensity={1.5} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#a7f3d0" />

      <Suspense fallback={null}>
        <BaseAvatar />
        <ContactShadows opacity={0.6} scale={4} blur={1.5} far={0.8} resolution={256} color="#000000" />
      </Suspense>

      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        minDistance={1.2}
        maxDistance={4.5}
        target={[0, 0.9, 0]} 
        maxPolarAngle={Math.PI / 2 + 0.1}
      />
    </Canvas>
  )
}
