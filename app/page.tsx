'use client'

import React, { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Carrega o componente 3D apenas no navegador do cliente (evita erros no build da Vercel)
const CanvasContent = dynamic(() => import('@/components/AvatarViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-slate-400">
      A carregar estúdio 3D...
    </div>
  ),
})

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center bg-slate-950 text-white overflow-hidden select-none">
      {/* Top Header UI */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 pointer-events-none">
        <div>
          <h1 className="text-2xl font-black tracking-widest text-emerald-400">WORLDLAND</h1>
          <p className="text-xs text-slate-400">Avatar Studio / Visualizador 3D</p>
        </div>
        <span className="text-xs bg-slate-800/80 px-3 py-1.5 rounded-full text-slate-300 border border-slate-700 font-mono">
          v0.2 - Full Body View
        </span>
      </header>

      {/* Canvas 3D */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <CanvasContent />
      </div>

      {/* Footer com Dicas de Controle */}
      <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4 text-xs bg-slate-900/90 backdrop-blur px-5 py-2.5 rounded-full border border-slate-800 text-slate-300 shadow-xl">
        <span>🖱️ <b>Clique esquerdo + Arraste:</b> Girar</span>
        <span className="text-slate-600">•</span>
        <span>🔍 <b>Scroll:</b> Zoom</span>
      </footer>
    </main>
  )
}
