/**
 * @file Details.tsx
 * @description Modal de detalhes completo de um agente IA.
 *
 * Responsabilidades:
 * - Exibir todas as informações do agente selecionado em um modal fullscreen.
 * - Permitir fechar via botão X, clique no backdrop ou tecla Esc (controlado pelo App).
 * - Renderizar condicionalmente as seções de Inputs/Outputs e botão de acesso.
 */

import {
  CheckCircle2,
  Rocket,
  Users,
  Zap,
  Mail,
  X,
} from 'lucide-react';
import type { AIAgent } from '../types';
import { ICON_MAP } from '../constants/icons';
import { motion } from 'framer-motion';

// ─── Tipos das props ───────────────────────────────────────────────────────────

interface DetailsProps {
  /** Agente cujos detalhes serão exibidos no modal. */
  agent: AIAgent;
  /** Callback para fechar o modal (chamado pelo X, Esc ou clique no backdrop). */
  onBack: () => void;
}

// ─── Componente ────────────────────────────────────────────────────────────────

/**
 * Modal de detalhes de um agente IA.
 *
 * Renderizado sobre o catálogo com um backdrop semitransparente. O fechamento
 * via tecla Esc é gerenciado pelo componente pai (App) via `useEffect`.
 */
export default function Details({ agent, onBack }: DetailsProps) {
  /** Ícone Lucide correspondente ao agente; usa Zap como fallback. */
  const Icon = ICON_MAP[agent.icon] ?? Zap;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">

      {/* Backdrop — clique fecha o modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onBack}
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
      />

      {/* Container do modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        className="relative bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        {/* Botão de fechar (X) */}
        <button
          onClick={onBack}
          className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all border border-white/20 group"
          title="Fechar (Esc)"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
        </button>

        {/* ── Header degradê com identidade do agente ── */}
        <div className="bg-gradient-to-br from-claro-red to-claro-dark p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div className="text-center md:text-left">
              {/* Badges de classificação */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {agent.type}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {agent.department}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-black mb-2 tracking-tight">{agent.name}</h1>
              <p className="text-white/80 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                {agent.description}
              </p>
            </div>
          </div>
        </div>

        {/* ── Corpo do modal ── */}
        <div className="p-8 md:p-12">

          {/* Seção: Missão e visão geral */}
          <section className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-claro-red rounded-full" />
                Quem é a {agent.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                {agent.longDescription}
              </p>
              {/* Citação de missão em destaque */}
              <div className="bg-gray-50 border-l-4 border-claro-red p-6 rounded-r-2xl">
                <p className="italic text-gray-800 font-bold tracking-tight text-base">
                  &ldquo;Missão: {agent.mission}&rdquo;
                </p>
              </div>
            </div>

            {/* Card lateral: responsável e arquitetura */}
            <div className="bg-gray-50 p-8 rounded-3xl h-fit border border-gray-100">
              <div className="mb-6 pb-6 border-b border-gray-200/50">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Responsável</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-claro-red">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold leading-none mb-1">{agent.owner}</p>
                    <p className="text-gray-500 text-xs font-semibold">{agent.department}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${agent.ownerEmail}`}
                  className="flex items-center text-xs font-bold text-gray-400 hover:text-claro-red transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 mr-2 group-hover:scale-110 transition-transform" />
                  {agent.ownerEmail}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Arquitetura</p>
                <div className="flex items-center text-gray-900 font-black gap-2">
                  <Rocket className="w-4 h-4 text-claro-red" />
                  {agent.type} AI
                </div>
              </div>
            </div>
          </section>

          {/* Seção: Funcionalidades */}
          <section className="mb-16">
            <h2 className="text-xl font-black text-gray-900 mb-10 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-gray-900 rounded-full" />
              Funcionalidades &amp; Análises
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {agent.features.map((feat, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-black text-gray-900 mb-6 pb-4 border-b border-gray-50 text-[13px] uppercase tracking-widest flex items-center">
                    <Zap className="w-4 h-4 text-claro-red mr-2" />
                    {feat.category}
                  </h3>
                  <ul className="space-y-4">
                    {feat.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Seção: Inputs & Outputs — exibida apenas quando ao menos um campo existe */}
          {(agent.inputs || agent.outputs) && (
            <section className="mb-16">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                Inputs &amp; Outputs
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-claro-red/5 blur-2xl transition-all group-hover:bg-claro-red/10" />
                  <p className="text-[10px] font-black text-[#5e6679] uppercase tracking-[0.1em] mb-3">Inputs</p>
                  <p className="text-white font-medium leading-relaxed">{agent.inputs || 'Não especificado'}</p>
                </div>
                <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-claro-red/5 blur-2xl transition-all group-hover:bg-claro-red/10" />
                  <p className="text-[10px] font-black text-[#5e6679] uppercase tracking-[0.1em] mb-3">Outputs</p>
                  <p className="text-white font-medium leading-relaxed">{agent.outputs || 'Não especificado'}</p>
                </div>
              </div>
            </section>
          )}

          {/* Seção: Benefícios por público-alvo */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-10 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-claro-red rounded-full" />
              Benefícios e Impacto
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {agent.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-claro-red/20 blur-3xl -mr-16 -mt-16 group-hover:bg-claro-red/30 transition-colors" />
                  <h3 className="text-base font-black text-claro-red mb-6 uppercase tracking-wider relative z-10">
                    Público: {benefit.role}
                  </h3>
                  <ul className="space-y-5 relative z-10">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-claro-red" />
                        </div>
                        <p className="text-gray-300 font-medium leading-tight">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Botão de acesso direto — exibido apenas quando a URL está disponível */}
          {agent.accessUrl && (
            <div className="mt-16 flex justify-center">
              <a
                href={agent.accessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-claro-red text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-claro-red/30 hover:scale-105 active:scale-95 transition-all overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Acessar {agent.name}
              </a>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
