import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  FileSearch, 
  Code, 
  Activity, 
  ShieldCheck, 
  ChevronRight,
  Filter,
  TrendingUp,
  BrainCircuit,
  Mail,
  X,
  Layers,
  Settings2,
  Building2,
  Cpu,
  Users,
  Router,
  BarChart4,
  FileText,
  Sparkles
} from 'lucide-react';
import { AIAgent, AIType, BusinessDomain, ExecutionType } from '../types';
import { AI_AGENTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

const icons: Record<string, React.ElementType> = {
  FileSearch,
  Code,
  Activity,
  ShieldCheck,
  Router,
  BarChart4,
  FileText
};

const RenderIcon = ({ icon, className }: { icon: string; className: string }) => {
  if (icon.includes('.')) {
    return <img src={`./${icon}`} alt="Logo" className={`${className} object-contain`} />;
  }
  const Icon = icons[icon] || BrainCircuit;
  return <Icon className={className} />;
};

interface CatalogProps {
  onSelect: (agent: AIAgent) => void;
  search: string;
  executionFilters: ExecutionType[];
  domainFilter: BusinessDomain | 'All';
  setDomainFilter: (domain: BusinessDomain | 'All') => void;
  departmentFilters: string[];
  lastSelectedId?: string;
}

export default function Catalog({ 
  onSelect, 
  search, 
  executionFilters, 
  domainFilter, 
  setDomainFilter, 
  departmentFilters,
  lastSelectedId
}: CatalogProps) {
  const filteredAgents = useMemo(() => {
    return AI_AGENTS.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(search.toLowerCase()) || 
                            agent.description.toLowerCase().includes(search.toLowerCase());
      const matchesExecution = executionFilters.length === 0 || executionFilters.includes(agent.execution);
      const matchesDomain = domainFilter === 'All' || agent.domain === domainFilter;
      const matchesDept = departmentFilters.length === 0 || departmentFilters.includes(agent.department);
      return matchesSearch && matchesExecution && matchesDomain && matchesDept;
    });
  }, [search, executionFilters, domainFilter, departmentFilters]);

  const stats = useMemo(() => {
    return {
      rede: AI_AGENTS.filter(a => a.domain === 'Rede & Equipamento').length,
      processos: AI_AGENTS.filter(a => a.domain === 'Processos & SLA').length,
      documentos: AI_AGENTS.filter(a => a.domain === 'Documentos & Backlog').length,
      total: AI_AGENTS.length,
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Domain Quick-Toggle Pills (Keeping these as secondary local filters) */}
      <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-gray-100">
        <button 
          onClick={() => setDomainFilter('All')}
          className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${domainFilter === 'All' ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
        >
          Tudo
        </button>
        {['Rede & Equipamento', 'Processos & SLA', 'Documentos & Backlog'].map((dom) => (
          <button
            key={dom}
            onClick={() => setDomainFilter(dom as any)}
            className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${domainFilter === dom ? 'bg-claro-red text-white shadow-md shadow-claro-red/20' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
          >
            {dom}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredAgents.map((agent) => {
            const isHighlighted = agent.id === lastSelectedId;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={agent.id}
                className={`group relative bg-white rounded-3xl border p-7 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isHighlighted 
                    ? 'border-claro-red ring-1 ring-claro-red/20 shadow-lg shadow-claro-red/5' 
                    : 'border-gray-100 hover:border-claro-red/20'
                }`}
              >
                {agent.isHighPotential && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-claro-red to-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg shadow-claro-red/20 animate-pulse-slow">
                      <Sparkles className="w-2.5 h-2.5" />
                      BeOn Labs
                    </div>
                  </div>
                )}
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-claro-red group-hover:border-claro-red group-hover:scale-105 transition-all duration-300 p-2">
                    <RenderIcon icon={agent.icon} className="w-full h-full text-claro-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-claro-red transition-colors">{agent.name}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                      <Users className="w-3 h-3" />
                      Owner: {agent.owner}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
                  {agent.description}
                </p>

                {/* Footer Section */}
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
                        className="hover:text-claro-red transition-colors font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {agent.ownerEmail}
                      </a>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => onSelect(agent)}
                    className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-claro-red hover:text-white transition-all group/btn"
                  >
                    Ver Detalhes do Agente
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredAgents.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma iniciativa encontrada</h3>
          <p className="text-gray-500">Tente ajustar seus filtros de busca para encontrar o que procura.</p>
        </div>
      )}
    </div>
  );
}
