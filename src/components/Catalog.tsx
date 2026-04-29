/**
 * @file Catalog.tsx
 * @description Componente de listagem dos agentes IA em formato de cards.
 *
 * Responsabilidades:
 * - Receber a lista de agentes e os filtros ativos do componente pai (App).
 * - Aplicar os filtros localmente via `useMemo` para performance.
 * - Renderizar os cards com as opções de "Ver Detalhes" e "Acessar Iniciativa".
 * - Exibir estado vazio quando nenhum agente corresponde aos filtros ativos.
 */

import { useMemo } from 'react';
import {
  Search,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  BrainCircuit,
  Mail,
  Users,
} from 'lucide-react';
import type { AIAgent, BusinessDomain, ExecutionType } from '../types';
import { ICON_MAP } from '../constants/icons';
import { DOMAINS } from '../constants/options';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Tipos das props ───────────────────────────────────────────────────────────

interface CatalogProps {
  /** Lista completa de agentes (filtrada internamente pelo componente). */
  agents: AIAgent[];
  /** Callback disparado quando o usuário clica em "Ver Detalhes". */
  onSelect: (agent: AIAgent) => void;
  /** Texto digitado na busca do header. */
  search: string;
  /** Tipos de execução atualmente selecionados como filtro. */
  executionFilters: ExecutionType[];
  /** Domínio de negócio atualmente selecionado como filtro. */
  domainFilter: BusinessDomain | 'All';
  /** Setter do filtro de domínio (elevado ao App para sincronia com os pills). */
  setDomainFilter: (domain: BusinessDomain | 'All') => void;
  /** Departamentos/áreas atualmente selecionados como filtro. */
  departmentFilters: string[];
  /** ID do agente recém-selecionado ou cadastrado (para destaque visual). */
  lastSelectedId?: string;
}

// ─── Componente ────────────────────────────────────────────────────────────────

/**
 * Exibe o grid de cards de agentes com filtros aplicados.
 *
 * Todos os filtros são combinados: a lista resultante só mostra agentes que
 * satisfazem simultaneamente a busca por texto, o domínio, o tipo de execução
 * e o departamento selecionados.
 */
export default function Catalog({
  agents,
  onSelect,
  search,
  executionFilters,
  domainFilter,
  setDomainFilter,
  departmentFilters,
  lastSelectedId,
}: CatalogProps) {

  // ─── Filtragem combinada ─────────────────────────────────────────────────

  /**
   * Aplica todos os filtros ativos em sequência.
   * O useMemo garante que o cálculo só é refeito quando algum filtro ou a
   * lista de agentes mudar.
   */
  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch =
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.description.toLowerCase().includes(search.toLowerCase());
      const matchesExecution =
        executionFilters.length === 0 || executionFilters.includes(agent.execution);
      const matchesDomain =
        domainFilter === 'All' || agent.domain === domainFilter;
      const matchesDept =
        departmentFilters.length === 0 || departmentFilters.includes(agent.department);

      return matchesSearch && matchesExecution && matchesDomain && matchesDept;
    });
  }, [agents, search, executionFilters, domainFilter, departmentFilters]);

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Pills de filtragem rápida por Domínio de Negócio */}
      <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-gray-100">
        <button
          onClick={() => setDomainFilter('All')}
          className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            domainFilter === 'All'
              ? 'bg-gray-900 text-white shadow-md'
              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
          }`}
        >
          Tudo
        </button>

        {DOMAINS.map((dom) => (
          <button
            key={dom}
            onClick={() => setDomainFilter(dom)}
            className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              domainFilter === dom
                ? 'bg-claro-red text-white shadow-md shadow-claro-red/20'
                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
            }`}
          >
            {dom}
          </button>
        ))}
      </div>

      {/* Grid de cards — usa AnimatePresence para entrada/saída animada */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredAgents.map((agent) => {
            const Icon = ICON_MAP[agent.icon] ?? BrainCircuit;
            const isHighlighted = agent.id === lastSelectedId;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                key={agent.id}
                className={`group bg-white rounded-3xl border p-7 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isHighlighted
                    ? 'border-claro-red ring-1 ring-claro-red/20 shadow-lg shadow-claro-red/5'
                    : 'border-gray-100 hover:border-claro-red/20'
                }`}
              >
                {/* Cabeçalho do card: ícone + nome + responsável */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-claro-red group-hover:border-claro-red group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-8 h-8 text-claro-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-claro-red transition-colors">
                      {agent.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                      <Users className="w-3 h-3" />
                      {agent.owner}
                    </div>
                  </div>
                </div>

                {/* Descrição curta */}
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
                  {agent.description}
                </p>

                {/* Rodapé do card: responsável + ações */}
                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                      <ShieldCheck className="w-3 h-3 text-green-500" />
                      Responsável: <span className="text-gray-900">{agent.owner}</span>
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

                  <div className="flex flex-col gap-3">
                    {/* Botão de detalhes — abre o modal */}
                    <button
                      onClick={() => onSelect(agent)}
                      className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all group/btn"
                    >
                      Ver Detalhes do Agente
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Link de acesso direto — só exibido quando a URL está disponível */}
                    {agent.accessUrl && (
                      <a
                        href={agent.accessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-3 bg-claro-red text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-claro-dark transition-all shadow-lg shadow-claro-red/10"
                      >
                        Acessar Iniciativa
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Estado vazio: nenhum agente corresponde aos filtros ativos */}
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
