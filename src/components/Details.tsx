/**
 * @file Details.tsx
 * @description Componente de modal (pop-up) que exibe as informações detalhadas, funcionalidades e benefícios de um agente.
 */

import React from 'react';
import { 
  FileSearch, 
  Code, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  X,
  Router,
  BarChart4,
  FileText,
  ExternalLink
} from 'lucide-react';
import { AIAgent } from '../types';
import { motion } from 'motion/react';

// ─── Mapeamento de Ícones ───────────────────────────────────────────────────

const lucideIcons: Record<string, React.ElementType> = {
  FileSearch,
  Code,
  Activity,
  ShieldCheck,
  Router,
  BarChart4,
  FileText,
};

/**
 * Renderiza um ícone baseado em uma string (URL ou nome do componente Lucide).
 */
const RenderIcon = ({ icon, className }: { icon: string; className: string }) => {
  if (icon.includes('.')) {
    return <img src={`./${icon}`} alt="Logo" className={`${className} object-contain`} />;
  }
  const Icon = lucideIcons[icon] || Zap;
  return <Icon className={className} />;
};

// ─── Tipagem das Props ──────────────────────────────────────────────────────

interface DetailsProps {
  /** Objeto completo do agente a ser exibido */
  agent: AIAgent;
  /** Callback para fechar o modal */
  onBack: () => void;
}

// ─── Componente Principal ───────────────────────────────────────────────────

export default function Details({ agent, onBack }: DetailsProps) {

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      
      {/* Backdrop com efeito de desfoque */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onBack}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
      />

      {/* Container do Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-[40px] shadow-2xl border border-white/20 overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        
        {/* Botão de Fechar flutuante */}
        <button 
          onClick={onBack}
          className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all border border-white/20 group shadow-lg"
          title="Fechar (Esc)"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
        </button>

        {/* ── Cabeçalho do Modal (Branding) ── */}
        <div className="bg-gradient-to-br from-claro-red to-claro-dark p-8 md:p-10 text-white relative overflow-hidden">
          {/* Elemento decorativo de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Ícone/Logo do Agente */}
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[24px] flex items-center justify-center shrink-0 p-3 border border-white/20 shadow-inner">
              <RenderIcon icon={agent.icon} className="w-full h-full text-white" />
            </div>

            {/* Títulos e Metadados */}
            <div className="text-center md:text-left flex-grow">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider border border-white/10">
                  {agent.type}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider border border-white/10">
                  {agent.department}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-black mb-2 tracking-tight">{agent.name}</h1>
              <p className="text-white/70 text-xs md:text-sm max-w-2xl font-bold leading-tight">
                Owner: {agent.owner} — <span className="opacity-80">{agent.ownerEmail}</span>
              </p>
            </div>
            
            {/* Botão de Acesso Direto (se disponível) */}
            {agent.accessUrl && (
              <div className="md:ml-auto flex items-center pr-4 md:pr-14">
                <a 
                  href={agent.accessUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/access flex flex-col items-center gap-2 transition-all hover:scale-110 active:scale-95"
                >
                  <div className="w-20 h-14 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 flex items-center justify-center group-hover/access:bg-white/20 group-hover/access:border-white/40 transition-all shadow-xl">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">Acessar</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* ── Conteúdo do Modal ── */}
        <div className="p-8 md:p-12 space-y-12">
          
          {/* Seção 1: Missão e Descrição Longa */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-claro-red rounded-full" />
              Quem é a {agent.name}?
            </h2>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {agent.longDescription}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-50 border-l-4 border-claro-red p-6 rounded-r-3xl shadow-sm italic">
                  <p className="text-gray-900 font-black tracking-tight text-sm leading-snug">
                    "Missão: {agent.mission}"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2: Fluxo de Processo (Inputs/Outputs) */}
          {(agent.inputs || agent.outputs) && (
            <section>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Processamento de Dados</p>
              <div className="grid md:grid-cols-2 gap-4">
                {agent.inputs && (
                  <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200/50">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-claro-red/60">Entradas (Inputs)</p>
                    <p className="text-gray-900 font-bold text-sm leading-relaxed">
                      {Array.isArray(agent.inputs) ? agent.inputs.join(' • ') : agent.inputs}
                    </p>
                  </div>
                )}
                {agent.outputs && (
                  <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200/50">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-claro-red/60">Saídas (Outputs)</p>
                    <p className="text-gray-900 font-bold text-sm leading-relaxed">
                      {Array.isArray(agent.outputs) ? agent.outputs.join(' • ') : agent.outputs}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Seção 3: Funcionalidades Detalhadas */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-6 bg-gray-900 rounded-full" />
              Funcionalidades & Capacidades
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {agent.features.map((feat, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-t-gray-50 hover:border-t-claro-red">
                  <h3 className="font-black text-gray-900 mb-4 pb-2 border-b border-gray-50 text-[11px] uppercase tracking-widest flex items-center">
                    <Zap className="w-4 h-4 text-claro-red mr-2" />
                    {feat.category}
                  </h3>
                  <ul className="space-y-3">
                    {feat.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-[12px] font-bold leading-tight">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 4: Benefícios e Valor de Negócio */}
          <section className="pb-4">
            <h2 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-6 bg-claro-red rounded-full" />
              Benefícios e Impacto
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {agent.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-100 rounded-[32px] p-8 border border-gray-200/50">
                  <h3 className="text-xs font-black text-claro-red mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                    <div className="w-1 h-1 bg-claro-red rounded-full" />
                    Público: {benefit.role}
                  </h3>
                  <ul className="space-y-4">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-claro-red" />
                        </div>
                        <p className="text-gray-800 font-bold text-xs leading-snug">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
