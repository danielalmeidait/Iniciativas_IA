/**
 * @file options.ts
 * @description Arrays de opções fixas utilizados em filtros, formulários e seletores.
 *
 * Fonte única de verdade para os valores válidos de cada campo categórico
 * dos agentes IA. Importar a partir daqui evita strings duplicadas espalhadas
 * pelos componentes.
 *
 * Utilizado por: App (filtros), Registration (formulário).
 */

import type { AIType, BusinessDomain, ExecutionType } from '../types';

// ─── Domínios de Negócio ───────────────────────────────────────────────────────

/**
 * Todos os domínios de negócio disponíveis para classificação de agentes.
 * Inclui a opção "All" para o filtro que exibe todos os domínios.
 */
export const DOMAIN_OPTIONS: (BusinessDomain | 'All')[] = [
  'All',
  'Rede & Equipamento',
  'Processos & SLA',
  'Documentos & Backlog',
];

/** Apenas os domínios de negócio reais (sem "All"), para uso em formulários. */
export const DOMAINS: BusinessDomain[] = [
  'Rede & Equipamento',
  'Processos & SLA',
  'Documentos & Backlog',
];

// ─── Tipos de Execução ─────────────────────────────────────────────────────────

/**
 * Todos os tipos de execução disponíveis para classificação de agentes.
 * Inclui a opção "All" para o filtro que exibe todos os tipos.
 */
export const EXECUTION_OPTIONS: (ExecutionType | 'All')[] = [
  'All',
  'Auditoria Preventiva',
  'Diagnóstico de Falha',
  'Relatório / Validação Técnica',
  'Gestão & Qualidade Operacional',
];

/** Apenas os tipos de execução reais (sem "All"), para uso em formulários. */
export const EXECUTIONS: ExecutionType[] = [
  'Auditoria Preventiva',
  'Diagnóstico de Falha',
  'Relatório / Validação Técnica',
  'Gestão & Qualidade Operacional',
];

// ─── Tipos de IA ───────────────────────────────────────────────────────────────

/** Todos os tipos de tecnologia IA disponíveis para seleção no formulário. */
export const AI_TYPES: AIType[] = [
  'GenAI',
  'Machine Learning',
  'Deep Learning',
  'Predição',
  'Linguagem Natural',
  'Visão Computacional',
  'Automação',
];
