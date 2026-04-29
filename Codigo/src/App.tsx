/**
 * @file App.tsx
 * @description Componente raiz da aplicação Catálogo de Iniciativas IA.
 *
 * Responsabilidades:
 * - Gerenciar o estado global dos agentes e dos filtros ativos.
 * - Orquestrar a navegação entre as três visões: Catálogo, Detalhes e Cadastro.
 * - Renderizar o header com os controles de busca e filtragem.
 */

import React, { useState, useMemo, useEffect } from 'react';
import Catalog from './components/Catalog';
import Details from './components/Details';
import Registration from './components/Registration';
import type { AIAgent, ExecutionType, BusinessDomain } from './types';
import { AI_AGENTS } from './data';
import { EXECUTION_OPTIONS } from './constants/options';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, Building2, ChevronRight, Plus } from 'lucide-react';

// ─── Componente ────────────────────────────────────────────────────────────────

/**
 * Componente principal da aplicação.
 *
 * Mantém o estado centralizado de todos os agentes e filtros, e decide qual
 * visão renderizar (catálogo, modal de detalhes ou formulário de cadastro).
 */
export default function App() {

  // ── Estado dos agentes ────────────────────────────────────────────────────
  const [agents, setAgents] = useState<AIAgent[]>(AI_AGENTS);
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null);
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null);
  const [showRegistration, setShowRegistration] = useState(false);

  // ── Estado dos filtros ────────────────────────────────────────────────────
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [executionFilters, setExecutionFilters] = useState<ExecutionType[]>([]);
  const [domainFilter, setDomainFilter] = useState<BusinessDomain | 'All'>('All');
  const [departmentFilters, setDepartmentFilters] = useState<string[]>([]);
  const [activeFilterMenu, setActiveFilterMenu] = useState<'execution' | 'department' | null>(null);

  // ─── Efeitos ─────────────────────────────────────────────────────────────

  /**
   * Registra o listener global de teclado para fechar o modal de detalhes
   * ao pressionar Esc — padrão de acessibilidade para modais.
   */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAgent(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // ─── Handlers ────────────────────────────────────────────────────────────

  /** Seleciona um agente para exibir no modal de detalhes. */
  const handleSelectAgent = (agent: AIAgent) => {
    setSelectedAgent(agent);
    setLastSelectedId(agent.id);
  };

  /**
   * Alterna a presença de um valor em um array de filtros ativos.
   * Genérico para ser reutilizado com qualquer tipo de filtro de múltipla seleção.
   *
   * @param setter - Função setState do array de filtros.
   * @param value  - Valor a alternar (adiciona se ausente, remove se presente).
   */
  const toggleArrayFilter = <T,>(setter: (fn: (prev: T[]) => T[]) => void, value: T) => {
    setter(prev =>
      prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
    );
  };

  /**
   * Adiciona um novo agente ao catálogo (vindo do formulário de cadastro)
   * e destaca o card recém-criado após a renderização.
   */
  const handleAddAgent = (newAgent: AIAgent) => {
    setAgents(prev => [...prev, newAgent]);
    setShowRegistration(false);
    // Aguarda o catálogo re-renderizar antes de aplicar o highlight
    setTimeout(() => setLastSelectedId(newAgent.id), 100);
  };

  // ─── Dados derivados ──────────────────────────────────────────────────────

  /** Lista de departamentos únicos presentes nos agentes cadastrados (para o filtro de Área). */
  const departments = useMemo(() => {
    const uniqueDepts = new Set(agents.map(a => a.department));
    return ['All', ...Array.from(uniqueDepts)];
  }, [agents]);

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Header fixo com logo, busca e filtros ── */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Logo e título — clique volta ao catálogo sem filtros de detalhe */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setSelectedAgent(null)}
          >
            <div className="w-10 h-10 bg-claro-red rounded-xl flex items-center justify-center shadow-lg shadow-claro-red/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xl italic">C</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-black text-gray-900 leading-tight">Catálogo de</span>
                <span className="text-base font-black text-claro-red leading-tight">Iniciativas IA</span>
              </div>
              <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                Soluções inteligentes projetadas para elevar a eficiência operacional.
              </span>
            </div>
          </div>

          {/* Controles do header: busca + filtros + botão novo */}
          <div className="flex flex-wrap items-center justify-end gap-3">

            {/* Campo de busca expansível */}
            <div className="flex items-center">
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mr-2 relative">
                      <input
                        type="text"
                        autoFocus
                        placeholder="Pesquisar..."
                        className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-claro-red focus:border-claro-red transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      {search && (
                        <button
                          onClick={() => setSearch('')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-claro-red"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 rounded-xl border transition-all ${showSearch ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'}`}
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Filtro por Tipo de Execução */}
            <div className="relative">
              <button
                onClick={() => setActiveFilterMenu(activeFilterMenu === 'execution' ? null : 'execution')}
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-100 shadow-sm hover:border-claro-red/30 transition-all group"
              >
                <Filter className="w-4 h-4 text-gray-400 group-hover:text-claro-red" />
                <div className="text-left leading-tight hidden sm:block">
                  <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest">Status</span>
                  <span className="block text-[10px] font-bold text-gray-900">
                    {executionFilters.length === 0 ? 'Todos' : `${executionFilters.length}`}
                  </span>
                </div>
                <ChevronRight className={`w-3 h-3 text-gray-300 transition-transform ${activeFilterMenu === 'execution' ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {activeFilterMenu === 'execution' && (
                  <>
                    {/* Overlay invisível para fechar o dropdown ao clicar fora */}
                    <div className="fixed inset-0 z-40" onClick={() => setActiveFilterMenu(null)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 origin-top-right text-sm"
                    >
                      {EXECUTION_OPTIONS.filter(e => e !== 'All').map(exec => (
                        <button
                          key={exec}
                          onClick={() => toggleArrayFilter(setExecutionFilters, exec as ExecutionType)}
                          className={`flex items-center justify-between w-full p-2 rounded-lg text-left text-xs font-bold transition-all ${
                            executionFilters.includes(exec as ExecutionType)
                              ? 'bg-claro-red/5 text-claro-red'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {exec}
                          {executionFilters.includes(exec as ExecutionType) && (
                            <div className="w-1.5 h-1.5 rounded-full bg-claro-red" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Filtro por Departamento / Área */}
            <div className="relative">
              <button
                onClick={() => setActiveFilterMenu(activeFilterMenu === 'department' ? null : 'department')}
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-100 shadow-sm hover:border-gray-900/30 transition-all group"
              >
                <Building2 className="w-4 h-4 text-gray-400 group-hover:text-gray-900" />
                <div className="text-left leading-tight hidden sm:block">
                  <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest">Área</span>
                  <span className="block text-[10px] font-bold text-gray-900">
                    {departmentFilters.length === 0 ? 'Todas' : `${departmentFilters.length}`}
                  </span>
                </div>
                <ChevronRight className={`w-3 h-3 text-gray-300 transition-transform ${activeFilterMenu === 'department' ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {activeFilterMenu === 'department' && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setActiveFilterMenu(null)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 origin-top-right"
                    >
                      <div className="max-h-60 overflow-y-auto">
                        {departments.filter(d => d !== 'All').map(dept => (
                          <button
                            key={dept}
                            onClick={() => toggleArrayFilter(setDepartmentFilters, dept)}
                            className={`flex items-center justify-between w-full p-2 rounded-lg text-left text-xs font-bold transition-all ${
                              departmentFilters.includes(dept)
                                ? 'bg-gray-900/5 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {dept}
                            {departmentFilters.includes(dept) && (
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Botão para abrir o formulário de cadastro */}
            <button
              onClick={() => setShowRegistration(true)}
              className="p-2.5 bg-claro-red text-white rounded-xl shadow-lg shadow-claro-red/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
              title="Nova Iniciativa"
            >
              <Plus className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Novo</span>
            </button>

          </div>
        </div>
      </header>

      {/* ── Conteúdo principal ── */}
      <main className="flex-grow">
        <Catalog
          agents={agents}
          onSelect={handleSelectAgent}
          search={search}
          executionFilters={executionFilters}
          domainFilter={domainFilter}
          setDomainFilter={setDomainFilter}
          departmentFilters={departmentFilters}
          lastSelectedId={lastSelectedId || undefined}
        />

        <AnimatePresence>
          {/* Modal de detalhes do agente selecionado */}
          {selectedAgent && (
            <Details
              agent={selectedAgent}
              onBack={() => setSelectedAgent(null)}
            />
          )}

          {/* Modal de formulário de cadastro */}
          {showRegistration && (
            <Registration
              onBack={() => setShowRegistration(false)}
              onAdd={handleAddAgent}
            />
          )}
        </AnimatePresence>
      </main>

    </div>
  );
}
