/**
 * @file types.ts
 * @description Definições de tipos e interfaces para o ecossistema de Iniciativas IA.
 */

/** Tipos de tecnologia de IA suportados no catálogo */
export type AIType = 
  | 'GenAI' 
  | 'Machine Learning' 
  | 'Deep Learning' 
  | 'Predição' 
  | 'Linguagem Natural' 
  | 'Visão Computacional' 
  | 'Automação';

/** Domínios de negócio principais de atuação das iniciativas */
export type BusinessDomain = 
  | 'Rede & Equipamento' 
  | 'Processos & SLA' 
  | 'Documentos & Backlog';

/** Categorias de execução técnica do agente */
export type ExecutionType = 
  | 'Auditoria Preventiva' 
  | 'Diagnóstico de Falha' 
  | 'Relatório / Validação Técnica' 
  | 'Gestão & Qualidade Operacional';

/**
 * Interface principal representando uma Iniciativa/Agente de IA.
 */
export interface AIAgent {
  /** Identificador único (slug ou ID numérico) */
  id: string;
  /** Nome comercial do agente (ex: ARIA, ELISA) */
  name: string;
  /** Área ou departamento responsável (ex: MSO Instalação) */
  department: string;
  /** Domínio de negócio principal */
  domain: BusinessDomain;
  /** Tipo de execução técnica */
  execution: ExecutionType;
  /** Nome do gestor/responsável direto */
  owner: string;
  /** Email de contato do responsável */
  ownerEmail: string;
  /** Stack tecnológica (ex: Microsoft Copilot, Anthropic Claude) */
  type: string;
  /** Descrição curta de uma linha (ex: "Analista de Requisitos") */
  tagline: string;
  /** Resumo executivo para exibição rápida no card */
  description: string;
  /** Frase de impacto que define o propósito do agente */
  mission: string;
  /** Texto detalhado para a seção "Quem é o agente?" */
  longDescription: string;
  /** Lista de funcionalidades agrupadas por categorias */
  features: {
    /** Nome da categoria (ex: Workflow, Análise) */
    category: string;
    /** Itens específicos da funcionalidade */
    items: string[];
  }[];
  /** Lista de benefícios segmentados por público-alvo */
  benefits: {
    /** Público beneficiado (ex: Técnico de Campo, Gestão) */
    role: string;
    /** Ganhos e impactos gerados */
    items: string[];
  }[];
  /** Ícone representativo (Nome do Lucide Icon ou URL da imagem) */
  icon: string;
  /** Lista opcional de insumos de dados necessários */
  inputs?: string[];
  /** Lista opcional de entregas/resultados gerados */
  outputs?: string[];
  /** Flag para destacar iniciativas de alto potencial (ex: BeOn Labs) */
  isHighPotential?: boolean;
  /** Link direto para acesso à interface do agente */
  accessUrl?: string;
  /** Categoria da iniciativa: Agente ou Automação */
  category: 'agent' | 'automation';
  /** Estimativa de ganho em horas por dia */
  dailySavingsHours?: number;
  /** Estimativa de ganho em horas por mês (dias úteis) */
  monthlySavingsHours?: number;
  /** Destaque de ganhos de produtividade exibido no card (ex: "Redução do SLA de 4 horas para apenas 20 minutos!") */
  productivityHighlight?: string;
  /** Objetivos Estratégicos aos quais a iniciativa se conecta, com as justificativas */
  strategicObjectives?: {
    nps?: string;
    receita?: string;
    margem?: string;
  };
}
