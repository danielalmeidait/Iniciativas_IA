/**
 * @file Catalog.tsx
 * @description Componente responsável por exibir a grade de iniciativas e os cartões de estatísticas por área.
 */

import React, { useMemo, useState } from 'react';
import {
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  BrainCircuit,
  Mail,
  Building2,
  FileSearch,
  Code,
  Activity,
  Router,
  BarChart4,
  FileText,
  Sparkles,
  LayoutGrid,
  Search,
  TrendingUp,
  Clock,
  Users,
  Smile,
  CircleDollarSign,
  PieChart
} from 'lucide-react';
import { AIAgent } from '../types';
import { AI_AGENTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

// ─── Mapeamento de Ícones ───────────────────────────────────────────────────

/** Dicionário de ícones do Lucide para renderização dinâmica baseada em strings */
const lucideIcons: Record<string, React.ElementType> = {
  FileSearch,
  Code,
  Activity,
  ShieldCheck,
  Router,
  BarChart4,
  FileText,
  Building2,
  LayoutGrid
};

/**
 * Renderiza um ícone baseado em uma string (URL ou nome do componente Lucide).
 */
const RenderIcon = ({ icon, className }: { icon: string; className: string }) => {
  if (icon.includes('.')) {
    return <img src={`./${icon}`} alt="Logo" className={`${className} object-contain`} />;
  }
  const Icon = lucideIcons[icon] || BrainCircuit;
  return <Icon className={className} />;
};

// ─── Tipagem das Props ──────────────────────────────────────────────────────

interface CatalogProps {
  /** Callback acionado ao selecionar um agente */
  onSelect: (agent: AIAgent) => void;
  /** Termo de busca atual */
  search: string;
  /** Lista de filtros de domínio ativos */
  domainFilters: string[];
  /** Lista de filtros de departamento ativos */
  departmentFilters: string[];
  /** Função para atualizar os filtros de departamento */
  setDepartmentFilters: React.Dispatch<React.SetStateAction<string[]>>;
  /** ID do último agente visualizado (para realce visual) */
  lastSelectedId?: string;
  /** Filtro de categoria (agent/automation/all) */
  categoryFilter: 'all' | 'agent' | 'automation';
}

// ─── Componente Principal ───────────────────────────────────────────────────

export default function Catalog({
  onSelect,
  search,
  domainFilters,
  departmentFilters,
  setDepartmentFilters,
  lastSelectedId,
  categoryFilter
}: CatalogProps) {

  // Estados para o toggle (ocultar/exibir) das seções
  const [showAgents, setShowAgents] = useState(true);
  const [showAutomations, setShowAutomations] = useState(true);

  // ─── Lógica de Filtragem ──────────────────────────────────────────────────

  // Para a versão "lite", forçamos a exibição apenas da categoria 'agent'
  const isLite = import.meta.env.VITE_APP_EDITION === 'lite';
  const baseList = useMemo(() => {
    return isLite ? AI_AGENTS.filter(a => a.category === 'agent') : AI_AGENTS;
  }, [isLite]);

  /** Lista filtrada de agentes baseada em busca, domínio, departamento e versão */
  const filteredAgents = useMemo(() => {
    return baseList.filter(agent => {
      const matchesSearch =
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.description.toLowerCase().includes(search.toLowerCase()) ||
        agent.tagline?.toLowerCase().includes(search.toLowerCase());

      const matchesDomain = domainFilters.length === 0 || domainFilters.includes(agent.domain);
      const matchesDept = departmentFilters.length === 0 || departmentFilters.includes(agent.department);

      return matchesSearch && matchesDomain && matchesDept;
    });
  }, [baseList, search, domainFilters, departmentFilters]);

  const agents = useMemo(() => filteredAgents.filter(a => a.category === 'agent'), [filteredAgents]);
  const automations = useMemo(() => filteredAgents.filter(a => a.category === 'automation'), [filteredAgents]);

  /** Estatísticas de quantidade por departamento */
  const departmentStats = useMemo(() => {
    const stats: Record<string, number> = {};
    baseList.forEach(agent => {
      stats[agent.department] = (stats[agent.department] || 0) + 1;
    });
    return stats;
  }, [baseList]);

  const totalIniciativas = baseList.length;

  // ─── Handlers ─────────────────────────────────────────────────────────────

  /**
   * Alterna o filtro de departamento. 
   * Se for 'All', limpa os filtros. Caso contrário, aplica seleção única.
   */
  const toggleDept = (dept: string) => {
    if (dept === 'All' || departmentFilters.includes(dept)) {
      setDepartmentFilters([]);
      return;
    }
    setDepartmentFilters([dept]);
  };

  const renderAgentCard = (agent: AIAgent) => {
    const isHighlighted = agent.id === lastSelectedId;
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        key={agent.id}
        className={`group relative bg-white rounded-3xl border p-4 sm:p-5 lg:p-7 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 ${isHighlighted
            ? 'border-claro-red ring-1 ring-claro-red/20 shadow-lg shadow-claro-red/5'
            : 'border-gray-100 hover:border-claro-red/20'
          }`}
      >
        {/* Selo BeOn Labs (High Potential) */}
        {agent.isHighPotential && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-claro-red to-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg shadow-claro-red/20">
              <Sparkles className="w-2.5 h-2.5" />
              BeOn Labs
            </div>
          </div>
        )}

        {/* Cabeçalho do Card */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-claro-red group-hover:border-claro-red group-hover:scale-105 transition-all duration-300 p-2 shadow-sm">
            <RenderIcon icon={agent.icon} className="w-full h-full text-claro-red group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 tracking-tight group-hover:text-claro-red transition-colors">
              {agent.name}
            </h3>
            <div className="text-gray-400 text-[11px] font-bold leading-tight mt-1 uppercase tracking-wider">
              {agent.tagline}
            </div>
          </div>
        </div>

        {/* Descrição Curta */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-4">
          {agent.description}
        </p>




        {/* Objetivos Estratégicos */}
        <div className="mb-6 flex items-center justify-center gap-3 sm:gap-4">
          {/* NPS */}
          <div className="flex flex-col items-center gap-1.5">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center relative group/obj transition-all duration-300 ${agent.strategicObjectives?.nps ? 'hover:bg-claro-red hover:border-claro-red cursor-help shadow-sm hover:shadow-md hover:scale-105' : 'opacity-30 grayscale pointer-events-none'}`}>
              <img src="./nps-logo.png" alt="NPS" className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-all" />
              {agent.strategicObjectives?.nps && (
                <div className="absolute bottom-full mb-3 hidden group-hover/obj:block w-56 bg-gray-900 text-white text-[11px] p-3 rounded-xl shadow-xl z-50 text-center pointer-events-none transform -translate-x-1/2 left-1/2 font-medium leading-relaxed">
                  <div className="font-black text-white mb-1.5 uppercase tracking-widest text-[10px]">70% NPS</div>
                  <div className="text-gray-300">{agent.strategicObjectives.nps}</div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${agent.strategicObjectives?.nps ? 'text-gray-500' : 'text-gray-300'}`}>70 NPS</span>
          </div>
          
          {/* Receita */}
          <div className="flex flex-col items-center gap-1.5">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center relative group/obj transition-all duration-300 ${agent.strategicObjectives?.receita ? 'hover:bg-claro-red hover:border-claro-red cursor-help shadow-sm hover:shadow-md hover:scale-105' : 'opacity-30 grayscale pointer-events-none'}`}>
              <img src="./receita-logo.png" alt="Receita" className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-all" />
              {agent.strategicObjectives?.receita && (
                <div className="absolute bottom-full mb-3 hidden group-hover/obj:block w-56 bg-gray-900 text-white text-[11px] p-3 rounded-xl shadow-xl z-50 text-center pointer-events-none transform -translate-x-1/2 left-1/2 font-medium leading-relaxed">
                  <div className="font-black text-white mb-1.5 uppercase tracking-widest text-[10px]">70% Receita</div>
                  <div className="text-gray-300">{agent.strategicObjectives.receita}</div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${agent.strategicObjectives?.receita ? 'text-gray-500' : 'text-gray-300'}`}>70 Receita</span>
          </div>

          {/* Margem */}
          <div className="flex flex-col items-center gap-1.5">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center relative group/obj transition-all duration-300 ${agent.strategicObjectives?.margem ? 'hover:bg-claro-red hover:border-claro-red cursor-help shadow-sm hover:shadow-md hover:scale-105' : 'opacity-30 grayscale pointer-events-none'}`}>
              <img src="./margem-logo.png" alt="Margem" className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-all" />
              {agent.strategicObjectives?.margem && (
                <div className="absolute bottom-full mb-3 hidden group-hover/obj:block w-56 bg-gray-900 text-white text-[11px] p-3 rounded-xl shadow-xl z-50 text-center pointer-events-none transform -translate-x-1/2 left-1/2 font-medium leading-relaxed">
                  <div className="font-black text-white mb-1.5 uppercase tracking-widest text-[10px]">50% Margem</div>
                  <div className="text-gray-300">{agent.strategicObjectives.margem}</div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${agent.strategicObjectives?.margem ? 'text-gray-500' : 'text-gray-300'}`}>50 Margem</span>
          </div>
        </div>

        {/* Rodapé do Card (Responsabilidade e Ação) */}
        <div className="pt-6 border-t border-gray-50 mt-auto">
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-gray-500 font-bold uppercase text-[10px] tracking-widest">
              <ShieldCheck className="w-3 h-3 text-green-500" />
              Owner: <span className="text-gray-900">{agent.owner}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <Mail className="w-3 h-3" />
              <a
                href={`mailto:${agent.ownerEmail}`}
                className="hover:text-claro-red transition-colors font-medium underline underline-offset-4 decoration-gray-100 hover:decoration-claro-red/30"
                onClick={(e) => e.stopPropagation()}
              >
                {agent.ownerEmail}
              </a>
            </div>
          </div>

          <button
            onClick={() => onSelect(agent)}
            className="w-full py-3 bg-gray-50 text-gray-900 font-black uppercase tracking-widest text-[10px] rounded-xl flex items-center justify-center gap-2 hover:bg-claro-red hover:text-white transition-all group/btn shadow-sm active:scale-95"
          >
            Ver Detalhes do Agente
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    );
  };

  // ─── Renderização ──────────────────────────────────────────────────────────

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── Seção de Estatísticas (Filtros por Área) ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 mb-10 pb-8 border-b border-gray-100">

        {/* Card de Totalização */}
        <button
          onClick={() => toggleDept('All')}
          className={`group flex flex-col p-4 rounded-2xl border transition-all text-left ${departmentFilters.length === 0
              ? 'bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/10'
              : 'bg-white border-gray-100 hover:border-gray-900/30'
            }`}
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors ${departmentFilters.length === 0 ? 'bg-white/20 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
            }`}>
            <LayoutGrid className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest mb-1 text-gray-400">Total</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-black ${departmentFilters.length === 0 ? 'text-white' : 'text-gray-900'}`}>
              {totalIniciativas}
            </span>
          </div>
        </button>

        {/* Cards por Departamento */}
        {Object.entries(departmentStats).map(([dept, count]) => {
          const isActive = departmentFilters.includes(dept);
          return (
            <button
              key={dept}
              onClick={() => toggleDept(dept)}
              className={`group flex flex-col p-4 rounded-2xl border transition-all text-left ${isActive
                  ? 'bg-claro-red border-claro-red shadow-lg shadow-claro-red/10'
                  : 'bg-white border-gray-100 hover:border-claro-red/30'
                }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                }`}>
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-wider mb-1 text-gray-400 line-clamp-1 group-hover:text-gray-500">
                {dept}
              </span>
              <div className="flex items-baseline gap-1">
                <span className={`text-2xl font-black ${isActive ? 'text-white' : 'text-gray-900'}`}>
                  {count}
                </span>
                <span className={`text-[10px] font-bold ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                  {count === 1 ? 'item' : 'itens'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Painel de Ganhos Consolidados ── */}
      {(() => {
        // Aplica o mesmo filtro de categoria que controla as seções de agentes e automações
        const filteredByCategory = categoryFilter === 'all'
          ? filteredAgents
          : filteredAgents.filter(a => a.category === categoryFilter);

        const itemsComGanho = filteredByCategory.filter(a => (a.monthlySavingsHours ?? 0) > 0);
        const totalHoras = itemsComGanho.reduce((acc, a) => acc + (a.monthlySavingsHours ?? 0), 0);
        const totalFTE = totalHoras / 176;
        const ranking = [...itemsComGanho].sort((a, b) => (b.monthlySavingsHours ?? 0) - (a.monthlySavingsHours ?? 0));
        const maxHoras = ranking[0]?.monthlySavingsHours ?? 1;

        // Label do painel muda conforme o filtro ativo
        const panelLabel = categoryFilter === 'agent'
          ? 'Ganhos com Agentes Copilot'
          : categoryFilter === 'automation'
          ? 'Ganhos com Automações de IA'
          : 'Ganhos com Agentes de IA + Copilot';

        if (itemsComGanho.length === 0) return null;

        return (
          <section className="mb-10 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header do painel */}
            <div className="px-6 pt-5 pb-4 border-b border-gray-100">
              <h2 className="text-base font-black text-gray-900 tracking-tight">{panelLabel}</h2>
              <p className="text-gray-400 text-[11px] font-medium mt-0.5">Visão consolidada dos ganhos de produtividade por solução de IA e total capturado pelas áreas</p>
            </div>

            <div className="flex">
              {/* ── Card esquerdo: Ganho Total ── */}
              <div className="w-56 flex-shrink-0 flex flex-col items-center justify-center py-6 px-4 bg-gray-50 border-r border-gray-100">
                <div className="w-11 h-11 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 text-center leading-tight mb-2">Ganho total<br/>consolidado</span>
                <div className="flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-[2.25rem] leading-none font-black text-emerald-500">{totalHoras}</span>
                  <span className="text-xs font-bold text-gray-400">h/mês</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-lg border border-emerald-100 mt-3">
                  <Users className="w-3 h-3 text-emerald-500" />
                  <span className="text-[11px] font-black text-emerald-600">{totalFTE.toFixed(1)} FTE</span>
                </div>
              </div>

              {/* ── Tabela de ranking ── */}
              <div className="flex-1 min-w-0 overflow-hidden flex flex-col">
                {/* Linha de sub-título da tabela */}
                <div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-100">
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Ganho por IA / Agente</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Ranking por horas e FTE</span>
                </div>

                {/* Tabela com alinhamento nativo */}
                <div className="overflow-y-auto max-h-52">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/70 border-b border-gray-100">
                        <th className="px-5 py-2 text-[9px] font-black uppercase tracking-widest text-gray-400 w-[40%]">IA / Agente</th>
                        <th className="px-3 py-2 text-[9px] font-black uppercase tracking-widest text-gray-400 w-[28%]">Área</th>
                        <th className="px-3 py-2 text-[9px] font-black uppercase tracking-widest text-gray-400 text-right w-[18%]">Horas Ganhas</th>
                        <th className="px-5 py-2 text-[9px] font-black uppercase tracking-widest text-gray-400 text-right w-[14%]">FTE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {ranking.map((agent) => {
                        const horas = agent.monthlySavingsHours ?? 0;
                        const fte = horas / 176;
                        const barWidth = Math.round((horas / maxHoras) * 100);
                        return (
                          <tr key={agent.id} className="hover:bg-gray-50/60 transition-colors">
                            <td className="px-5 py-3">
                              <div className="text-[11px] font-black text-gray-900 uppercase tracking-wide">{agent.name}</div>
                              <div className="text-[9px] text-gray-400 font-semibold mt-0.5 uppercase">{agent.type}</div>
                              <div className="mt-1.5 h-[3px] bg-gray-100 rounded-full w-24">
                                <div
                                  className="h-[3px] bg-emerald-400 rounded-full"
                                  style={{ width: `${barWidth}%` }}
                                />
                              </div>
                            </td>
                            <td className="px-3 py-3 text-[11px] text-gray-500 font-medium">{agent.department}</td>
                            <td className="px-3 py-3 text-[12px] font-black text-gray-700 text-right whitespace-nowrap">{horas} h/mês</td>
                            <td className="px-5 py-3 text-right">
                              <span className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-md whitespace-nowrap">{fte.toFixed(1)} FTE</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── Seção: Agentes de IA ── */}
      {agents.length > 0 && (categoryFilter === 'all' || categoryFilter === 'agent') && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowAgents(!showAgents)}
              className="group flex items-center gap-2 border-b-2 border-claro-red pb-1 focus:outline-none"
            >
              <h2 className="text-lg font-black text-claro-red uppercase tracking-wider group-hover:text-red-700 transition-colors">
                Agentes Copilot
              </h2>
              <ChevronDown className={`w-5 h-5 text-claro-red transition-transform ${!showAgents ? '-rotate-90' : ''}`} />
            </button>
            <div className="flex-grow border-b border-claro-red/30" />
          </div>

          {showAgents && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {agents.map(renderAgentCard)}
              </AnimatePresence>
            </div>
          )}
        </section>
      )}

      {/* ── Seção: Automações com IA ── */}
      {automations.length > 0 && (categoryFilter === 'all' || categoryFilter === 'automation') && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShowAutomations(!showAutomations)}
              className="group flex items-center gap-2 border-b-2 border-claro-red pb-1 focus:outline-none"
            >
              <h2 className="text-lg font-black text-claro-red uppercase tracking-wider group-hover:text-red-700 transition-colors">
                Automações com IA
              </h2>
              <ChevronDown className={`w-5 h-5 text-claro-red transition-transform ${!showAutomations ? '-rotate-90' : ''}`} />
            </button>
            <div className="flex-grow border-b border-claro-red/30" />
          </div>

          {showAutomations && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {automations.map(renderAgentCard)}
              </AnimatePresence>
            </div>
          )}
        </section>
      )}

      {/* ── Estado Vazio ── */}
      {filteredAgents.length === 0 && (
        <div className="text-center py-24">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Search className="w-10 h-10 text-gray-300" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">Nenhuma iniciativa encontrada</h3>
          <p className="text-gray-500 font-medium">Tente ajustar seus filtros ou termos de busca.</p>
          <button
            onClick={() => {
              // Ações para resetar filtros poderiam ser disparadas aqui
            }}
            className="mt-6 text-claro-red font-bold text-sm hover:underline"
          >
            Limpar filtros ativos
          </button>
        </div>
      )}
    </div>
  );
}
