/**
 * @file Header.tsx
 * @description Componente de navegação superior, contendo logo, busca e filtros globais.
 */

import React, { useState } from 'react';
import { Search, X, Layers, ChevronRight, Bot, Sparkles, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DOMAINS } from '../data';

interface HeaderProps {
  /** Valor atual da busca de texto */
  search: string;
  /** Função para atualizar a busca */
  setSearch: (val: string) => void;
  /** Domínios selecionados para filtro */
  domainFilters: string[];
  /** Função para alternar a seleção de um domínio */
  toggleDomainFilter: (dom: string) => void;
  /** Callback acionado ao clicar no logo/título (reseta seleção) */
  onLogoClick: () => void;
  categoryFilter: 'all' | 'agent' | 'automation';
  setCategoryFilter: (val: 'all' | 'agent' | 'automation') => void;
}

/**
 * Header principal da aplicação.
 * 
 * Inclui:
 * - Logo e Título com ação de reset.
 * - Busca expansível com animação.
 * - Menu suspenso (Dropdown) para filtros de Domínio de Atuação.
 */
export default function Header({ 
  search, 
  setSearch, 
  domainFilters, 
  toggleDomainFilter, 
  onLogoClick,
  categoryFilter,
  setCategoryFilter
}: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [activeFilterMenu, setActiveFilterMenu] = useState<'domain' | null>(null);

  const isLite = import.meta.env.VITE_APP_EDITION === 'lite';

  return (
    <header className="bg-white border-b border-gray-100 py-8 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Identidade Visual */}
        <div 
          className="flex items-center gap-6 cursor-pointer group"
          onClick={onLogoClick}
        >
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transition-transform overflow-hidden shadow-sm border border-gray-50">
            <img src="./claro-logo.png" alt="Claro" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-gray-900 leading-tight">Catálogo de</span>
              <span className="text-3xl font-black text-claro-red leading-tight">Iniciativas IA</span>
            </div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mt-1.5">
              DOT - Rede Interna e Empresarial
            </span>
          </div>
        </div>

        {/* Ações e Filtros */}
        <div className="flex flex-wrap items-center justify-end gap-3">
          
          {/* Busca Expansível */}
          <div className="flex items-center">
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mr-2 relative group-search">
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
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-claro-red transition-colors"
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
              className={`p-2 rounded-xl border transition-all ${
                showSearch 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'
              }`}
              title="Pesquisar iniciativas"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Toggle de Categoria (Agentes / Automações) */}
          <div className="flex items-center gap-2 mr-2">
            {!isLite && (
              <button
                onClick={() => setCategoryFilter(categoryFilter === 'automation' ? 'all' : 'automation')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all ${
                  categoryFilter === 'automation' 
                    ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm' 
                    : 'bg-white border-gray-100 text-gray-400 hover:border-blue-100 hover:bg-blue-50/50'
                }`}
                title="Filtrar por Automações"
              >
                <Bot className="w-5 h-5 mb-0.5" />
                <span className="text-[8px] font-bold uppercase tracking-wider">Automações</span>
              </button>
            )}

            <button
              onClick={() => setCategoryFilter(categoryFilter === 'agent' ? 'all' : 'agent')}
              className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all ${
                categoryFilter === 'agent' 
                  ? 'bg-purple-50 border-purple-200 text-purple-600 shadow-sm' 
                  : 'bg-white border-gray-100 text-gray-400 hover:border-purple-100 hover:bg-purple-50/50'
              }`}
              title="Filtrar por Copilot"
            >
              <Sparkles className="w-5 h-5 mb-0.5" />
              <span className="text-[8px] font-bold uppercase tracking-wider">Copilot</span>
            </button>
          </div>
          {/* Menu de Filtro por Domínio */}
          {!isLite && (
          <div className="relative">
            <button 
              onClick={() => setActiveFilterMenu(activeFilterMenu === 'domain' ? null : 'domain')}
              className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-100 shadow-sm hover:border-claro-red/30 transition-all group"
            >
              <Layers className="w-4 h-4 text-gray-400 group-hover:text-claro-red" />
              <div className="text-left leading-tight hidden sm:block">
                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest">Domínio</span>
                <span className="block text-[10px] font-bold text-gray-900">
                  {domainFilters.length === 0 ? 'Todos' : `${domainFilters.length}`}
                </span>
              </div>
              <ChevronRight className={`w-3 h-3 text-gray-300 transition-transform ${activeFilterMenu === 'domain' ? 'rotate-90' : ''}`} />
            </button>

            <AnimatePresence>
              {activeFilterMenu === 'domain' && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setActiveFilterMenu(null)} />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 origin-top-right text-sm"
                  >
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      {DOMAINS.map(dom => (
                        <button
                          key={dom}
                          onClick={() => {
                            toggleDomainFilter(dom);
                          }}
                          className={`flex items-center justify-between w-full p-2 rounded-lg text-left text-[11px] font-bold transition-all ${
                            domainFilters.includes(dom) 
                              ? 'bg-claro-red/5 text-claro-red' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {dom}
                          {domainFilters.includes(dom) && <div className="w-1.5 h-1.5 rounded-full bg-claro-red" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          )}

          {/* Botão de Cadastro de Iniciativa */}
          <a
            href="https://apps.powerapps.com/play/e/default-55247d4b-b435-47a5-881b-ca7627434e79/a/53cfb538-c10e-4ad9-b70a-96395f3e78af?tenantId=55247d4b-b435-47a5-881b-ca7627434e79"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-claro-red text-white px-4 py-2.5 rounded-xl border border-claro-red shadow-sm hover:bg-red-700 transition-all ml-2"
          >
            <Plus className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">
              Cadastrar Iniciativa
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
