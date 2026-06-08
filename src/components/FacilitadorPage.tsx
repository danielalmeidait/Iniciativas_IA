/**
 * @file FacilitadorPage.tsx
 * @description Página "Facilitador de Inovação e IA" — apresenta Daniel Almeida
 * e seus três papéis: Operação (Base), Governança Interna e Tecnologia (Fábrica).
 */

import React from 'react';
import { motion } from 'motion/react';

interface FacilitadorPageProps {
  onBack: () => void;
}

/** Animação de entrada fade-up */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: 'easeOut' },
  }),
};

/** Cartões de atuação do Facilitador */
const roles = [
  {
    id: 'operacao',
    title: 'Operação (Base)',
    description:
      'Revisar, estruturar ideias do canal de entrada e prestar suporte consultivo aos colaboradores',
    position: 'left' as const,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="3" y="6" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M9 12h14M9 17h10M9 22h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'governanca',
    title: 'Governança Interna',
    description:
      'Garantir a não sobreposição de iniciativas, mapear o ecossistema existente e evitar reinventar a roda',
    position: 'top-right' as const,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M16 4l12 5v8c0 6-5 10.5-12 13C9 27.5 4 23 4 17V9l12-5z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia (Fábrica)',
    description:
      'Atuar como facilitador para internalização de demandas com TI, Dados e IA e BeOn Labs',
    position: 'bottom-right' as const,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M10 20l4-4 3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 24v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function FacilitadorPage({ onBack }: FacilitadorPageProps) {
  const leftRole = roles.find((r) => r.position === 'left')!;
  const topRight = roles.find((r) => r.position === 'top-right')!;
  const bottomRight = roles.find((r) => r.position === 'bottom-right')!;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50/20 flex flex-col font-sans antialiased">
      {/* ── Cabeçalho ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          {/* Botão voltar compacto */}
          <button
            id="btn-facilitador-back"
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-[#da291c] hover:border-[#da291c]/30 hover:bg-red-50 transition-all shadow-sm flex-shrink-0"
            title="Voltar"
            aria-label="Voltar"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Logo ESO + Título */}
          <div className="flex items-center gap-3">
            <img src="./ESO-logo.png" alt="ESO Logo" className="h-12 object-contain" />
            <p className="text-sm font-bold text-gray-500 leading-tight">Eficiência e Suporte Operacional</p>
          </div>

          {/* Logo Claro - Canto Direito */}
          <div className="ml-auto hidden sm:flex items-center">
            <img src="./claro-logo.png" alt="Claro" className="h-10 object-contain" />
          </div>
        </div>
      </header>

      {/* ── Conteúdo principal ────────────────────────────────────────────── */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12">
        {/* Título da página */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Barra vermelha decorativa, como no slide */}
          <div className="w-12 h-1.5 bg-[#da291c] rounded-full mb-4" />
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Facilitador de{' '}
            <span className="text-[#da291c]">Inovação e IA</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 max-w-xl">
            Papel central de articulação entre as áreas regionais, a governança interna e a fábrica de tecnologia.
          </p>
        </motion.div>

        {/* ── Layout do diagrama ────────────────────────────────────────────  */}
        {/*
          Desktop: grid de 3 colunas
            Col 1 → Card Operação (Base)
            Col 2 → Foto central + setas
            Col 3 → Cards Governança + Tecnologia empilhados
          Mobile: coluna única com ordem lógica
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-24 items-center">

          {/* ── Col 1: Card Operação (Base) ────────────────────────────────── */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex justify-center lg:justify-end"
          >
            <RoleCard role={leftRole} />
          </motion.div>

          {/* ── Col 2: Foto + setas ────────────────────────────────────────── */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col items-center gap-2 order-first lg:order-none"
          >
            {/* Foto circular */}
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                <img 
                  src="./ImageDaniel.png" 
                  alt="Daniel Almeida" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              {/* Anel decorativo */}
              <div className="absolute inset-0 rounded-full border-2 border-[#da291c]/20 scale-110 pointer-events-none" />
            </div>

            {/* Nome */}
            <div className="text-center mt-1">
              <p className="text-base font-black text-gray-900">Daniel Almeida</p>
              <p className="text-xs text-[#da291c] font-semibold uppercase tracking-widest">Facilitador IA</p>
            </div>
          </motion.div>

          {/* ── Col 3: Cards Governança + Tecnologia ──────────────────────── */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-5 items-center lg:items-start"
          >
            <RoleCard role={topRight} />
            <RoleCard role={bottomRight} />
          </motion.div>
        </div>

        {/* ── Setas decorativas (desktop only) ─────────────────────────── */}
        {/* Renderizadas como SVG overlay de posição absoluta relativa ao diagrama */}
        <div className="hidden lg:block">
          <ArrowsOverlay />
        </div>
      </main>

      {/* ── Rodapé ────────────────────────────────────────────────────────── */}
      <footer className="mt-auto bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-xs font-bold text-gray-900">© 2026 Eficiência e Suporte Operacional</p>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Sub-componentes                                                              */
/* ─────────────────────────────────────────────────────────────────────────── */

interface Role {
  id: string;
  title: string;
  description: string;
  position: 'left' | 'top-right' | 'bottom-right';
  icon: React.ReactNode;
}

/** Card de papel/atuação do facilitador */
function RoleCard({ role }: { role: Role }) {
  const isLeft = role.position === 'left';

  return (
    <div
      className={`
        bg-white rounded-2xl border shadow-md p-4 sm:p-5 lg:p-6 max-w-[270px] w-full
        hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300
        ${isLeft ? 'border-[#da291c]/15' : 'border-gray-100'}
      `}
    >
      {/* Ícone */}
      <div
        className={`
          w-10 h-10 rounded-xl flex items-center justify-center mb-4
          ${isLeft
            ? 'bg-[#da291c]/8 text-[#da291c] border border-[#da291c]/20'
            : 'bg-gray-50 text-gray-500 border border-gray-100'
          }
        `}
      >
        {role.icon}
      </div>

      {/* Título */}
      <p className={`font-black text-sm mb-2 leading-tight ${isLeft ? 'text-[#da291c]' : 'text-gray-900'}`}>
        {role.title}
      </p>

      {/* Descrição */}
      <p className="text-xs text-gray-500 leading-relaxed">{role.description}</p>

      {/* Linha decorativa inferior */}
      {isLeft && <div className="mt-4 h-0.5 w-8 bg-[#da291c]/30 rounded-full" />}
    </div>
  );
}

/**
 * Setas decorativas (bidirecional ←→) entre o centro e os cards.
 * Posicionadas via layout relativo; aparecem apenas no desktop.
 */
function ArrowsOverlay() {
  return (
    <div className="pointer-events-none select-none mt-[-260px] mb-6 relative h-[260px] flex items-center justify-center w-full">
      {/* Seta ← → (esquerda, bidirrecional) */}
      <div className="absolute left-[calc(50%-150px)] top-1/2 -translate-y-1/2 flex items-center justify-center">
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
          <path d="M8 12H40" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M8 12L16 6M8 12L16 18" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 12L32 6M40 12L32 18" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Seta → direita topo */}
      <div className="absolute right-[calc(50%-150px)] top-[30%] -translate-y-1/2 rotate-[-25deg] flex items-center justify-center">
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
          <path d="M8 12H40" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M40 12L32 6M40 12L32 18" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Seta → direita fundo */}
      <div className="absolute right-[calc(50%-150px)] bottom-[30%] translate-y-1/2 rotate-[25deg] flex items-center justify-center">
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
          <path d="M8 12H40" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M40 12L32 6M40 12L32 18" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
