/**
 * @file App.tsx
 * @description Componente raiz que orquestra o estado global da aplicação e o layout principal.
 */

import { useState, useEffect } from 'react';
import { AIAgent } from './types';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Details from './components/Details';
import { AnimatePresence } from 'motion/react';

/**
 * Componente principal da aplicação Catálogo de Iniciativas IA.
 * Gerencia os filtros de busca, domínio e departamento, além da seleção do agente para o modal de detalhes.
 */
export default function App() {
  // ─── Estados de Filtro e Seleção ──────────────────────────────────────────
  
  /** Termo de busca textual digitado pelo usuário */
  const [search, setSearch] = useState('');
  
  /** Lista de domínios ativos para filtragem */
  const [domainFilters, setDomainFilters] = useState<string[]>([]);
  
  /** Lista de departamentos ativos (atualmente suporta seleção única via cards) */
  const [departmentFilters, setDepartmentFilters] = useState<string[]>([]);
  
  /** Filtro de categoria (agent/automation/all) */
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'agent' | 'automation'>('all');
  
  /** Agente selecionado para exibição no modal de detalhes */
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null);
  
  /** ID do último agente selecionado (útil para referências de animação ou foco) */
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null);

  // ─── Efeitos ────────────────────────────────────────────────────────────────

  /** Listener para fechar o modal ao pressionar a tecla ESC */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAgent(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // ─── Handlers de Ação ─────────────────────────────────────────────────────

  /**
   * Seleciona um agente para visualização detalhada.
   * @param agent Objeto do agente clicado
   */
  const handleSelectAgent = (agent: AIAgent) => {
    setSelectedAgent(agent);
    setLastSelectedId(agent.id);
    // Rola para o topo para garantir visibilidade do modal em dispositivos menores
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Alterna a inclusão de um domínio na lista de filtros.
   * @param dom Nome do domínio
   */
  const toggleDomainFilter = (dom: string) => {
    setDomainFilters(prev => 
      prev.includes(dom) ? prev.filter(i => i !== dom) : [...prev, dom]
    );
  };

  /**
   * Reseta todos os filtros e estados de navegação.
   * Acionado ao clicar no logo ou título da aplicação.
   */
  const handleReset = () => {
    setSelectedAgent(null);
    setSearch('');
    setDomainFilters([]);
    setDepartmentFilters([]);
    setCategoryFilter('all');
  };

  // ─── Renderização ──────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      {/* Cabeçalho de Navegação e Busca */}
      <Header 
        search={search}
        setSearch={setSearch}
        domainFilters={domainFilters}
        toggleDomainFilter={toggleDomainFilter}
        onLogoClick={handleReset}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        <Catalog 
          onSelect={handleSelectAgent}
          search={search}
          domainFilters={domainFilters}
          departmentFilters={departmentFilters}
          setDepartmentFilters={setDepartmentFilters}
          lastSelectedId={lastSelectedId || undefined}
          categoryFilter={categoryFilter}
        />

        {/* Modal de Detalhes com Animação de Entrada/Saída */}
        <AnimatePresence>
          {selectedAgent && (
            <Details 
              agent={selectedAgent} 
              onBack={() => setSelectedAgent(null)} 
            />
          )}
        </AnimatePresence>
      </main>

      {/* Rodapé Institucional */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-1 bg-claro-red/20 rounded-full mb-4" />
          <p className="text-sm font-bold text-gray-900 tracking-tight">
            © 2026 Eficiência e Suporte Operacional
          </p>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-[0.2em]">
            Claro Brasil — Transformação Digital
          </p>
        </div>
      </footer>
    </div>
  );
}
