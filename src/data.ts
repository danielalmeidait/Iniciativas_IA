/**
 * @file data.ts
 * @description Dados estáticos dos agentes IA cadastrados no catálogo.
 *
 * Este arquivo é a fonte de verdade para os agentes exibidos na aplicação.
 * Para adicionar um novo agente permanentemente ao catálogo, insira um novo
 * objeto no array `AI_AGENTS` respeitando a interface `AIAgent` (ver `types.ts`).
 *
 * Para cadastros temporários (runtime), utilize o formulário "Cadastrar Iniciativa"
 * diretamente na interface — os dados serão mantidos em memória durante a sessão.
 */

import type { AIAgent } from './types';

// ─── Agentes Cadastrados ───────────────────────────────────────────────────────

export const AI_AGENTS: AIAgent[] = [
  // ── ARIA ──────────────────────────────────────────────────────────────────
  {
    id: 'aria',
    name: 'ARIA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Documentos & Backlog',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'ESO Team',
    ownerEmail: 'suporte.eso@claro.com.br',
    type: 'GenAI',
    description:
      'Analista virtual de requisitos IA que eleva a qualidade das demandas desde a origem.',
    mission: 'Reduzir retrabalho, acelerar entendimento e padronizar requisitos.',
    longDescription:
      'ARIA é um agente de Inteligência Artificial especializado em requisitos. Atua como ' +
      'analista virtual, apoiando times desde a concepção até o detalhamento final. Seu ' +
      'objetivo é elevar a qualidade dos requisitos e reduzir retrabalho e tempo de entrega.',
    features: [
      {
        category: 'Funcionalidades',
        items: [
          'Criação e validação de Requisitos Funcionais e não Funcionais',
          'Quebra em Épicos, Features e Estórias',
        ],
      },
      {
        category: 'Análises',
        items: [
          'Avaliação de clareza e completude',
          'Identificação de riscos e pontos de atenção',
          'Sugestões de melhoria',
        ],
      },
      {
        category: 'QA',
        items: [
          'Geração automática de critérios de aceite',
          'Apoia nos testes, validação e entrega',
        ],
      },
    ],
    benefits: [
      {
        role: 'Product Owner',
        items: [
          'Redução de 60% no tempo na análise e criação de requisitos',
          'Redução de agendas para refinamento',
        ],
      },
    ],
    icon: 'FileSearch',
    inputs: 'Documentos brutos, notas de reunião, especificações técnicas parciais',
    outputs: 'Épicos, Features, Histórias de Usuário, Critérios de Aceite',
    // TODO: substituir pela URL real do agente em produção
    accessUrl: 'https://claro.com.br/aria',
  },

  // ── ELISA ─────────────────────────────────────────────────────────────────
  {
    id: 'elisa',
    name: 'ELISA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Documentos & Backlog',
    execution: 'Relatório / Validação Técnica',
    owner: 'SQUADS Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description:
      'Apoia POs com escritas de histórias de usuário (PBIs) completas e padronizadas.',
    mission: 'Aumentar a produtividade dos times de desenvolvimento.',
    longDescription:
      'ELISA (Estrutura, Linguagem e Integração para Soluções Ágeis) é uma agente criada ' +
      'para apoiar os Product Owners com escritas de histórias de usuário (PBIs) claras e ' +
      'padronizadas.',
    features: [
      {
        category: 'Principais Funções',
        items: [
          'Padronização: PBIs consistentes e claros',
          'Agilidade: Escrita rápida e validada',
          'Qualidade: Critérios de aceite testáveis',
        ],
      },
      {
        category: 'Integração',
        items: [
          'Baseada em boas práticas ágeis',
          'Adaptável a qualquer ferramenta ou sistema',
        ],
      },
    ],
    benefits: [
      {
        role: 'Product Owner',
        items: [
          'Redução de 50% no tempo na elaboração de um PBI',
          'Redução de 20% no tempo de suporte aos desenvolvedores',
        ],
      },
      {
        role: 'Desenvolvedor',
        items: [
          'Melhor compreensão das regras de negócio',
          'PBIs com sugestão de código',
        ],
      },
    ],
    icon: 'Code',
    inputs: 'Briefing da demanda, regras de negócio, protótipos (opcional)',
    outputs: 'Histórias de Usuário (PBI) padronizadas, sugestões técnicas',
    // TODO: substituir pela URL real do agente em produção
    accessUrl: 'https://claro.com.br/elisa',
  },
];
