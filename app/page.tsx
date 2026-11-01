'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const AvatarViewer = dynamic(() => import('./AvatarViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-slate-500 font-mono text-xs uppercase tracking-wider">
      Carregando Estúdio 3D...
    </div>
  ),
})

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<'body' | 'hair' | 'clothes'>('body')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden select-none">
      {/* Visualizador 3D em Tela Cheia no Fundo */}
      <div className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing">
        <AvatarViewer />
      </div>

      {/* Interface Flutuante: Header Topo */}
      <header className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#34d399]" />
          <h1 className="text-xl font-black tracking-widest text-white">WORLDLAND</h1>
        </div>
        <p className="text-xs text-slate-400 mt-1 font-mono">Avatar Creator & Studio v0.3</p>
      </header>

      {/* Interface Flutuante: Painel Lateral Direita (Customização) */}
      <aside className="absolute top-6 right-6 bottom-6 w-80 bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-5 flex flex-col z-10 shadow-2xl">
        <h2 className="text-sm font-bold text-slate-200 tracking-wider uppercase mb-4">Personalizar Avatar</h2>
        
        {/* Navegação de Abas */}
        <div className="flex bg-slate-950/60 rounded-xl p-1 mb-5 border border-slate-800/50">
          <button 
            onClick={() => setActiveTab('body')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === 'body' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'}`}
          >
            Corpo
          </button>
          <button 
            onClick={() => setActiveTab('hair')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === 'hair' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'}`}
          >
            Cabelo
          </button>
          <button 
            onClick={() => setActiveTab('clothes')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === 'clothes' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'}`}
          >
            Roupas
          </button>
        </div>

        {/* Conteúdo da Aba */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/40">
            <span className="text-xs font-medium text-slate-300 block mb-2">Tom de Pele</span>
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-[#f5d0a9] border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform" />
              <div className="w-7 h-7 rounded-full bg-[#d29b71] border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform" />
              <div className="w-7 h-7 rounded-full bg-[#8d5524] border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform" />
              <div className="w-7 h-7 rounded-full bg-[#3c2e28] border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        <button className="w-full mt-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          Salvar Avatar
        </button>
      </aside>

      {/* Dicas de Controle Rodapé */}
      <footer className="absolute bottom-6 left-6 z-10 flex gap-4 text-[11px] bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800 text-slate-400 pointer-events-none">
        <span>🖱️ <b>Clique + Arraste:</b> Girar 360°</span>
        <span className="text-slate-700">•</span>
        <span>🔍 <b>Scroll:</b> Zoom</span>
      </footer>
    </main>
  )
}
