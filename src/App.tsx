/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import Catalog from './components/Catalog';
import Details from './components/Details';
import { AIAgent, ExecutionType, BusinessDomain } from './types';
import { AI_AGENTS } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Filter, Building2, ChevronRight } from 'lucide-react';

export default function App() {
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null);
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null);

  // Filter State
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [executionFilters, setExecutionFilters] = useState<ExecutionType[]>([]);
  const [domainFilter, setDomainFilter] = useState<BusinessDomain | 'All'>('All');
  const [departmentFilters, setDepartmentFilters] = useState<string[]>([]);
  const [activeFilterMenu, setActiveFilterMenu] = useState<'execution' | 'department' | null>(null);

  // Esc key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAgent(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSelectAgent = (agent: AIAgent) => {
    setSelectedAgent(agent);
    setLastSelectedId(agent.id);
  };

  const executions: (ExecutionType | 'All')[] = [
    'All',
    'Auditoria Preventiva',
    'Diagnóstico de Falha',
    'Relatório / Validação Técnica',
    'Gestão & Qualidade Operacional'
  ];

  const departments = useMemo(() => {
    const sets = new Set(AI_AGENTS.map(a => a.department));
    return ['All', ...Array.from(sets)];
  }, []);

  const toggleExecutionFilter = (val: ExecutionType) => {
    setExecutionFilters(prev => 
      prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]
    );
  };

  const toggleDepartmentFilter = (val: string) => {
    setDepartmentFilters(prev => 
      prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
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

          <div className="flex flex-wrap items-center justify-end gap-3">
            {/* Expanding Search */}
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
                        <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-claro-red">
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

            {/* Execution Filter Button */}
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
                    <div className="fixed inset-0 z-40" onClick={() => setActiveFilterMenu(null)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 origin-top-right text-sm"
                    >
                      {executions.filter(e => e !== 'All').map(exec => (
                        <button
                          key={exec}
                          onClick={() => toggleExecutionFilter(exec as ExecutionType)}
                          className={`flex items-center justify-between w-full p-2 rounded-lg text-left text-xs font-bold transition-all ${
                            executionFilters.includes(exec as ExecutionType) 
                              ? 'bg-claro-red/5 text-claro-red' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {exec}
                          {executionFilters.includes(exec as ExecutionType) && <div className="w-1.5 h-1.5 rounded-full bg-claro-red" />}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Department Filter Button */}
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
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 origin-top-right"
                    >
                      <div className="max-h-60 overflow-y-auto">
                        {departments.filter(d => d !== 'All').map(dept => (
                          <button
                            key={dept}
                            onClick={() => toggleDepartmentFilter(dept)}
                            className={`flex items-center justify-between w-full p-2 rounded-lg text-left text-xs font-bold transition-all ${
                              departmentFilters.includes(dept) 
                                ? 'bg-gray-900/5 text-gray-900' 
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {dept}
                            {departmentFilters.includes(dept) && <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Catalog 
          onSelect={handleSelectAgent}
          search={search}
          executionFilters={executionFilters}
          domainFilter={domainFilter}
          setDomainFilter={setDomainFilter}
          departmentFilters={departmentFilters}
          lastSelectedId={lastSelectedId || undefined}
        />

        <AnimatePresence>
          {selectedAgent && (
            <Details 
              agent={selectedAgent} 
              onBack={() => setSelectedAgent(null)} 
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-gray-500">© 2026 Eficiência e Suporte Operacional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
