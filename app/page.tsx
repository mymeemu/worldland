'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const AvatarViewer = dynamic(() => import('./AvatarViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-slate-500 font-mono text-xs">
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
    <main className="relative w-screen h-screen bg-slate-950 text-white overflow-hidden flex">
      {/* Canvas 3D a ocupar o fundo inteiro */}
      <div className="absolute inset-0 z-0">
        <AvatarViewer />
      </div>

      {/* Header Superior Esquerdo */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <h1 className="text-2xl font-black tracking-widest text-emerald-400">WORLDLAND</h1>
        <p className="text-xs text-slate-400 font-mono mt-1">Avatar Studio v0.3</p>
      </div>

      {/* Painel Lateral Direito de Customização */}
      <div className="absolute top-6 right-6 bottom-6 w-80 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-6 z-10 flex flex-col shadow-2xl">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-6 border-b border-slate-800 pb-3">
          Personalizar Avatar
        </h2>

        <div className="space-y-6 flex-1">
          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-3">Tom de Pele</label>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-[#f5d0a9] ring-2 ring-offset-2 ring-offset-slate-900 ring-emerald-400 transition-transform hover:scale-110" />
              <button className="w-8 h-8 rounded-full bg-[#d29b71] ring-1 ring-slate-700 transition-transform hover:scale-110" />
              <button className="w-8 h-8 rounded-full bg-[#8d5524] ring-1 ring-slate-700 transition-transform hover:scale-110" />
              <button className="w-8 h-8 rounded-full bg-[#3c2e28] ring-1 ring-slate-700 transition-transform hover:scale-110" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-3">Cor da Roupa</label>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-[#10b981] ring-1 ring-slate-700 transition-transform hover:scale-110" />
              <button className="w-8 h-8 rounded-full bg-[#3b82f6] ring-1 ring-slate-700 transition-transform hover:scale-110" />
              <button className="w-8 h-8 rounded-full bg-[#ef4444] ring-1 ring-slate-700 transition-transform hover:scale-110" />
              <button className="w-8 h-8 rounded-full bg-[#8b5cf6] ring-1 ring-slate-700 transition-transform hover:scale-110" />
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/20">
          Guardar Avatar
        </button>
      </div>

      {/* Rodapé de Instruções */}
      <div className="absolute bottom-6 left-6 z-10 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800 text-xs text-slate-400 pointer-events-none flex gap-3 items-center">
        <span>🖱️ <b>Arrastar:</b> Girar 360°</span>
        <span className="text-slate-600">•</span>
        <span>🔍 <b>Scroll:</b> Zoom</span>
      </div>
    </main>
  )
}
