'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Componente temporário para testar o ambiente 3D
function BaseMeshPlaceholder() {
  return (
    <mesh position={[0, 0, 0]}>
      <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
      <meshStandardMaterial color="#f0f0f0" roughness={0.3} />
    </mesh>
  )
}

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Header UI */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 pointer-events-none">
        <h1 className="text-2xl font-bold tracking-wider text-emerald-400">WORLDLAND</h1>
        <span className="text-xs bg-slate-800/80 px-3 py-1 rounded-full text-slate-300 border border-slate-700">
          Avatar Creator v0.1
        </span>
      </header>

      {/* 3D Canvas */}
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Suspense fallback={null}>
            <BaseMeshPlaceholder />
          </Suspense>
          <OrbitControls enableZoom={true} minDistance={1.5} maxDistance={5} target={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Footer Instructions */}
      <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-400 text-sm bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
        Clica e arrasta para girar o visualizador 3D
      </footer>
    </main>
  )
}
