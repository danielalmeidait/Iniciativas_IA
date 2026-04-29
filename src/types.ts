/**
 * @file types.ts
 * @description Definições centrais de tipos e interfaces do Catálogo de Iniciativas IA.
 *
 * Este arquivo é a fonte de verdade para a modelagem de dados da aplicação.
 * Todos os componentes e utilitários devem importar seus tipos a partir daqui.
 */

import type { IconName } from './constants/icons';

// ─── Tipos de Classificação ────────────────────────────────────────────────────

/**
 * Tecnologia de IA utilizada pelo agente.
 * Usada para descrever a stack técnica e exibida na seção "Arquitetura" do modal.
 */
export type AIType =
  | 'GenAI'
  | 'Machine Learning'
  | 'Deep Learning'
  | 'Predição'
  | 'Linguagem Natural'
  | 'Visão Computacional'
  | 'Automação';

/**
 * Domínio de negócio ao qual o agente pertence.
 * Utilizado como filtro principal na tela do catálogo.
 */
export type BusinessDomain =
  | 'Rede & Equipamento'
  | 'Processos & SLA'
  | 'Documentos & Backlog';

/**
 * Tipo de execução ou finalidade operacional do agente.
 * Utilizado como filtro secundário no header da aplicação.
 */
export type ExecutionType =
  | 'Auditoria Preventiva'
  | 'Diagnóstico de Falha'
  | 'Relatório / Validação Técnica'
  | 'Gestão & Qualidade Operacional';

// ─── Sub-interfaces ────────────────────────────────────────────────────────────

/**
 * Agrupa um conjunto de funcionalidades sob uma categoria temática.
 * Exibido na seção "Funcionalidades & Análises" do modal de detalhes.
 *
 * @example
 * { category: 'QA', items: ['Geração automática de critérios de aceite'] }
 */
export interface AgentFeature {
  /** Nome da categoria (ex.: "Funcionalidades", "Análises", "QA"). */
  category: string;
  /** Lista de funcionalidades pertencentes a esta categoria. */
  items: string[];
}

/**
 * Descreve os benefícios do agente para um público-alvo específico.
 * Exibido na seção "Benefícios e Impacto" do modal de detalhes.
 *
 * @example
 * { role: 'Product Owner', items: ['Redução de 60% no tempo de análise'] }
 */
export interface AgentBenefit {
  /** Papel ou perfil profissional beneficiado (ex.: "Product Owner", "Desenvolvedor"). */
  role: string;
  /** Lista de benefícios mensuráveis ou qualitativos para este papel. */
  items: string[];
}

// ─── Interface Principal ───────────────────────────────────────────────────────

/**
 * Representa um agente de Inteligência Artificial no catálogo.
 *
 * Cada agente é um conjunto de metadados que descreve uma iniciativa IA —
 * sua identidade, tecnologia, responsável, funcionalidades e benefícios.
 */
export interface AIAgent {
  /** Identificador único do agente (slug, ex.: "aria", "elisa"). */
  id: string;

  /** Nome de exibição do agente (ex.: "ARIA", "ELISA"). */
  name: string;

  /** Área ou squad responsável pela iniciativa (ex.: "ESO"). */
  department: string;

  /** Domínio de negócio ao qual a iniciativa pertence. */
  domain: BusinessDomain;

  /** Tipo de execução / finalidade operacional da iniciativa. */
  execution: ExecutionType;

  /** Nome do responsável ou time dono da iniciativa. */
  owner: string;

  /** E-mail de contato do responsável (usado para link `mailto:`). */
  ownerEmail: string;

  /** Tecnologia de IA utilizada pelo agente. */
  type: AIType;

  /** Descrição curta exibida no card do catálogo (1–2 linhas). */
  description: string;

  /** Frase de missão exibida em destaque no modal de detalhes. */
  mission: string;

  /** Descrição longa e detalhada exibida no modal de detalhes. */
  longDescription: string;

  /** Lista de grupos de funcionalidades categorizadas. */
  features: AgentFeature[];

  /** Lista de grupos de benefícios por público-alvo. */
  benefits: AgentBenefit[];

  /**
   * Nome do ícone Lucide que representa visualmente o agente.
   * Deve ser um valor válido de `IconName` (definido em `constants/icons.ts`).
   */
  icon: IconName;

  /** Descrição das entradas aceitas pelo agente (opcional). */
  inputs?: string;

  /** Descrição das saídas geradas pelo agente (opcional). */
  outputs?: string;

  /** URL de acesso direto ao agente (opcional). Exibida como botão "Acessar". */
  accessUrl?: string;
}
