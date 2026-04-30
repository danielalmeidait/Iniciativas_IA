import { AIAgent } from './types';

export const DOMAINS = [
  'Análise e Gestão',
  'Controle e Monitoramento',
  'Diagnóstico e Investigação',
  'Relatórios e Validação',
  'Automação Processual',
  'Suporte Operacional',
  'Conhecimento e Documentação',
  'Planejamento e Controle',
  'Gestão de Incidentes e Problemas',
  'Auditoria e Compliance'
] as const;

// ─── Lista de Iniciativas de IA ──────────────────────────────────────────

export const AI_AGENTS: AIAgent[] = [
  // ── Eficiência e Suporte Operacional ──
  {
    id: 'aria',
    name: 'ARIA',
    department: 'Eficiência e Suporte Operacional',
    domain: 'Relatórios e Validação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Leandro Rosseto',
    ownerEmail: 'leandro.rosseto@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Analista de Requisitos Inteligência Artificial',
    description: 'Analista virtual de requisitos que eleva a qualidade das demandas desde a origem.',
    mission: 'Reduzir retrabalho, acelerar entendimento e padronizar requisitos.',
    longDescription: 'ARIA é uma agente de Inteligência Artificial especializada em requisitos. Ela atua como uma analista virtual, apoiando os times desde a concepção até o detalhamento final. Seu objetivo é elevar a qualidade dos requisitos e reduzir retrabalho e tempo de entrega, apoiando a tomada de decisão desde a origem das demandas.',
    features: [
      {
        category: 'Funcionalidades',
        items: [
          'Criação e validação de Requisitos Funcionais e não Funcionais',
          'Quebra em Épicos, Features e Estórias'
        ]
      },
      {
        category: 'Análises',
        items: [
          'Avaliação de clareza e completude',
          'Identificação de riscos e pontos de atenção',
          'Sugestões de melhoria',
          'Identificação de inconsistências'
        ]
      },
      {
        category: 'QA',
        items: [
          'Geração automática de critérios de aceite',
          'Apoia nos testes, validação e entrega',
          'Reduz ambiguidades na implementação'
        ]
      }
    ],
    benefits: [
      {
        role: 'Product Owner',
        items: [
          'Redução de 60% no tempo na análise e criação de requisitos',
          'Redução de agendas para refinamento de requisitos',
          'Agilidade na fase de levantamento e definição',
          'Melhor alinhamento entre negócio e tecnologia'
        ]
      },
      {
        role: 'Geral',
        items: [
          'Redução de retrabalho e melhoria da qualidade',
          'Padronização de requisitos e impacto organizacional',
          'Uso prático e controlado de IA'
        ]
      }
    ],
    icon: 'aria-logo.png',
    inputs: ['Documentos de Requisitos', 'Arquivos CAD', 'PDF técnico', 'Normas regulatórias', 'Escopos de projeto'],
    outputs: ['Análise crítica detalhada (qualidade/clarza/completude)', 'Arquivo corrigido para download', 'Critérios de aceite', 'Pontos de atenção técnicos'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_70b25520-6647-aeb0-a360-aedb534e2b5e&source=embedded-builder'
  },
  {
    id: 'elisa',
    name: 'ELISA',
    department: 'Eficiência e Suporte Operacional',
    domain: 'Relatórios e Validação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'William Teodoro de Moraes',
    ownerEmail: 'william.moraes.terceiros@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Estrutura, Linguagem e Integração para Soluções Ágeis',
    description: 'Transformação de requisitos em PBIs estruturados para acelerar entregas.',
    mission: 'Aumentar a produtividade dos times de desenvolvimento.',
    longDescription: 'ELISA (Estrutura, Linguagem e Integração para Soluções Ágeis) é uma agente de IA criada para apóiar o(s) Product Owners (POs) com escritas de histórias de usuário (PBIs) completas, claras e padronizadas. Seu objetivo é transformar requisitos e regras de negócio em textos bem estruturados.',
    features: [
      {
        category: 'Capacidades',
        items: [
          'Padronização: PBIs consistentes e claros',
          'Agilidade: Escrita rápida e validada',
          'Qualidade: Critérios de aceite testáveis'
        ]
      },
      {
        category: 'Metodologia',
        items: [
          'Baseada em boas práticas ágeis e escrita orientada a valor',
          'Adaptável a qualquer ferramenta ou sistema',
          'Suporte completo para todo o time'
        ]
      }
    ],
    benefits: [
      {
        role: 'Product Owner',
        items: [
          'Redução de 50% no tempo na elaboração de um PBI',
          'Redução de 20% no tempo de suporte e testes',
          'Mais foco na estratégia do produto e no cliente'
        ]
      },
      {
        role: 'Desenvolvedor & QA',
        items: [
          'Melhor compreensão das regras de negócio',
          'PBIs com sugestão de código e lógica técnica',
          'Orientação prática de testes e redução de bugs'
        ]
      }
    ],
    icon: 'elisa-logo.png',
    inputs: ['Requisitos brutos', 'Regras de Negócio', 'Documentos de negócio', 'Feedbacks de usuários'],
    outputs: ['User Story estruturada', 'Regras de Negócio detalhadas', 'Sugestão Técnica (Código)', 'Critérios de Aceite (Gherkin)'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_abb80b91-c6f5-e7b3-6d69-b9a1bc35d311&source=embedded-builder'
  },
  {
    id: 'facto-ia',
    name: 'FACTOIA',
    department: 'LeSulConNe',
    domain: 'Diagnóstico e Investigação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Ronaldo Evaristo Das Merces',
    ownerEmail: 'ronaldo.merces@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Fato, Causa e Ação - FCA',
    description: 'Realização automática de FCA após o FETEC das RECs.',
    mission: 'Agilizar o fechamento de FECOMs e apoiar a criação de RCAs de qualidade.',
    longDescription: 'Agente criado para para automatizar a análise de falhas e a generation de relatórios de RCA. Ele processa informações técnicas para identificar a causa raiz e sugerir ações corretivas de forma padronizada.',
    features: [
      {
        category: 'Análise de Causa',
        items: [
          'Geração automática de FCA (Fato, Causa e Ação)',
          'Apoio técnico para criação de RCA',
          'Padronização de justificativas técnicas'
        ]
      }
    ],
    benefits: [
      {
        role: 'Operacional',
        items: [
          'Redução drástica no tempo de fechamento de FECOM',
          'Melhoria na qualidade técnica dos relatórios de causa-ação',
          'Facilidade na identificação de falhas recorrentes'
        ]
      }
    ],
    icon: 'factoIA-logo.png',
    inputs: ['Dados do FETEC', 'Logs de equipamentos', 'Histórico de RECs'],
    outputs: ['FCA estruturado', 'Sugestão de RCA', 'Parecer de fechamento'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_36512c08-a28f-34be-f604-087a975b842f&source=embedded-builder'
  },
  {
    id: 'iana',
    name: 'IAnA',
    department: 'LeSulConNe',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Luis Fernando Marks',
    ownerEmail: 'luis.marks@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Análise de Informes - SGIR',
    description: 'Análise inteligente de informes de manutenção programada da rede.',
    mission: 'Automatizar a tradução de designações técnicas e prever riscos de isolamento.',
    longDescription: 'A IAnA é uma agente de IA que processa listas de designações recebidas por e-mail, traduzindo códigos técnicos para nomes amigáveis de sites e identificando preventivamente riscos de isolamento de rede.',
    features: [
      {
        category: 'Processamento',
        items: [
          'Tradução de designações técnicas para nomes de sites',
          'Cálculo de risco de isolamento por manutenção',
          'Geração automática de comunicados para clientes'
        ]
      }
    ],
    benefits: [
      {
        role: 'Rede',
        items: [
          'Maior clareza no impacto de manutenções programadas',
          'Comunicação proativa e precisa com o cliente final',
          'Redução de erros de interpretação técnica'
        ]
      }
    ],
    icon: 'IAna-logo.png',
    inputs: ['Lista de designações por e-mail', 'Base de dados de topologia'],
    outputs: ['Relatório de impacto por site', 'Risco de isolamento detalhado', 'Sugestão de e-mail para cliente'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_a04ded4b-18a3-ea81-d98d-7d649ad0326c&source=embedded-builder'
  },
  {
    id: 'siria',
    name: 'SirIA',
    department: 'LeSulConNe',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Luis Fernando Marks',
    ownerEmail: 'luis.marks@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Análise de RECs - SIR',
    description: 'Análise profunda de históricos de observação de RECs do SIR.',
    mission: 'Transformar logs complexos em visões executivas e linhas do tempo detalhadas.',
    longDescription: 'Uma agente de IA que analisa grandes volumes de texto e históricos de RECs para extrair os eventos principais, criando uma narrativa cronológica dos incidentes e lições aprendidas.',
    features: [
      {
        category: 'Análise de Histórico',
        items: [
          'Resumo executivo consolidado dos eventos',
          'Construção de linha do tempo detalhada',
          'Identificação de lições aprendidas e ações preventivas',
          'Geração de FCA para incidentes de rede'
        ]
      }
    ],
    benefits: [
      {
        role: 'Gestão de Crise',
        items: [
          'Entendimento rápido de incidentes complexos',
          'Facilidade na elaboração de post-mortems',
          'Base de conhecimento para evitar falhas futuras'
        ]
      }
    ],
    icon: 'Siria-logo.png',
    inputs: ['Histórico de observações (Arquivo texto)', 'Logs do SIR'],
    outputs: ['Resumo Executivo', 'Linha do Tempo', 'Plano de Ações Preventivas', 'FCA Completo'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_22360653-26c8-57e4-88fd-e63e00f17f84&source=embedded-builder'
  },
  {
    id: 'check-ia',
    name: 'CHECKIA',
    department: 'LeSulConNe',
    domain: 'Relatórios e Validação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Luis Fernando Marks',
    ownerEmail: 'luis.marks@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Análise de checklist de atividades',
    description: 'Comparação inteligente de checklists em atividades de cliente.',
    mission: 'Garantir que as atividades técnicas não gerem alterações indesejadas na rede.',
    longDescription: 'O Check IA é um agente de IA que compara tabelas de roteamento e configurações antes e depois de janelas de manutenção, apontando divergências críticas que podem impactar o serviço.',
    features: [
      {
        category: 'Validação',
        items: [
          'Comparação de tabelas de roteamento',
          'Validação de checklists de atividades de DR',
          'Destaque automático de alterações de configuração'
        ]
      }
    ],
    benefits: [
      {
        role: 'Qualidade',
        items: [
          'Garantia de que a rede voltou ao estado esperado',
          'Identificação imediata de erros humanos na configuração',
          'Segurança operacional em janelas críticas'
        ]
      }
    ],
    icon: 'CheckIA-logo.png',
    inputs: ['Checklist Pré-atividade', 'Checklist Pós-atividade', 'Tabelas de Roteamento'],
    outputs: ['Relatório de divergências', 'Status de conformidade', 'Destaques de alteração'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_ee211807-6c56-7c15-c4eO-f37443fbdd34&source=embedded-builder'
  },
  {
    id: 'confia',
    name: 'CONFIA',
    department: 'LeSulConNe',
    domain: 'Diagnóstico e Investigação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Luis Fernando Marks',
    ownerEmail: 'luis.marks@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Análise de configurações de roteador',
    description: 'Análise de configurações de roteador para detectar mudanças.',
    mission: 'Identificar alterações de configuração com precisão e rapidez.',
    longDescription: 'O CONFIA é um agente de IA que analisa os arquivos de configuração de roteador para detectar mudanças, garantindo que as intervenções técnicas seguiram o planejado e reduzindo o tempo de auditoria.',
    features: [
      {
        category: 'Configuração',
        items: [
          'Comparação de arquivos running-config',
          'Identificação de comandos adicionados ou removidos',
          'Análise de conformidade com o template padrão'
        ]
      }
    ],
    benefits: [
      {
        role: 'Técnico',
        items: [
          'Redução no tempo de auditoria de configurações',
          'Precisão absoluta na detecção de mudanças',
          'Facilidade no rollback se necessário'
        ]
      }
    ],
    icon: 'confIA-logo.png',
    inputs: ['Configuração Antes', 'Configuração Depois'],
    outputs: ['Relatório de diferenças (Diff)', 'Análise de impacto da mudança'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_a95041b3-4087-5b58-4d3c-9504c8547f45&source=embedded-builder'
  },
  {
    id: 'deserth',
    name: 'DESERTH',
    department: 'LeSulConNe',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Marcia Cristina Souza',
    ownerEmail: 'marcia.souza.terceiros@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Analista de Serviço',
    description: 'Análise especializada de projetos e performance de atendimento.',
    mission: 'Otimizar o tempo de serviço e garantir o cumprimento de SLAs.',
    longDescription: 'O DESERTH, um agente de IA, analisa os dados de atendimento das equipes para identificar gargalos, causas de demora e pontos de falha no centro funcional.',
    features: [
      {
        category: 'Performance',
        items: [
          'Análise de tempo de serviço dos atendimentos',
          'Identificação de causas de demora e perda de SLA',
          'Mapeamento de falhas por equipe ou centro funcional'
        ]
      }
    ],
    benefits: [
      {
        role: 'Gestão',
        items: [
          'Visão clara dos gargalos operacionais',
          'Subsídios para melhoria de processos de atendimento',
          'Aumento da eficiência das equipes de recuperação'
        ]
      }
    ],
    icon: 'Deserth-logo.png',
    inputs: ['Dados de atendimentos', 'Métricas de SLA', 'Logs de produtividade'],
    outputs: ['Relatório de gargalos', 'Indicativos de falha', 'Pontos de melhoria operacional'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_f31ad6bd-b88a-875a-f928-153a54f75a4f&source=embedded-builder'
  },
  {
    id: 'sentinela',
    name: 'SENTINELA',
    department: 'LeSulConNe',
    domain: 'Auditoria e Compliance',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Marcia Cristina Souza',
    ownerEmail: 'marcia.souza.terceiros@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Analista Qualidade de Serviço',
    description: 'Auditoria de qualidade de serviço e conformidade de escalonamentos.',
    mission: 'Garantir que os contatos e escalonamentos sigam o padrão de qualidade exigido.',
    longDescription: 'O SENTINELA é um agente de IA que audita os contatos realizados pelos colaboradores, verificando se os protocolos de escalonamento foram seguidos e se houve efetividade na comunicação.',
    features: [
      {
        category: 'Qualidade',
        items: [
          'Auditoria de escalonamentos item a item',
          'Avaliação de dificuldade em contatos telefônicos',
          'Checagem do nível de escalonamento atingido'
        ]
      }
    ],
    benefits: [
      {
        role: 'Qualidade',
        items: [
          'Padronização no atendimento e escalonamento',
          'Identificação de falhas no processo de comunicação',
          'Melhoria na qualidade do serviço'
        ]
      }
    ],
    icon: 'Sentinela-logo.png',
    inputs: ['Gravações/Logs de chamadas', 'Tickets de escalonamento'],
    outputs: ['Nota de qualidade por atendimento', 'Relatório de inconsistências', 'Feedback para treinamento'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_415b082b-466e-f804-b4d6-914444195cf8&source=embedded-builder'
  },
  {
    id: 'bancodoc',
    name: 'BANCODOC',
    department: 'LeSulConNe',
    domain: 'Relatórios e Validação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Marcia Cristina Souza',
    ownerEmail: 'marcia.souza.terceiros@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Gestão inteligente de pendências documentais',
    description: 'Gestão inteligente de pendências documentais e base de dados.',
    mission: 'Manter as informações documentais sempre atualizadas e em conformidade.',
    longDescription: 'É um agente de IA Especialista em análise de documentos, que propõe correções em planilhas e identifica proativamente pendências de colaboradores.',
    features: [
      {
        category: 'Documental',
        items: [
          'Análise proativa de pendências documentais',
          'Proposta de atualizações para planilhas de dados',
          'Relatórios consolidados por colaborador'
        ]
      }
    ],
    benefits: [
      {
        role: 'Conformidade',
        items: [
          'Redução de erros em cadastros documentais',
          'Facilidade na regularização de colaboradores',
          'Base de dados sempre íntegra e confiável'
        ]
      }
    ],
    icon: 'BancoDoc-logo.png',
    inputs: ['Planilhas de cadastro', 'Repositórios de documentos'],
    outputs: ['Relatório de pendências', 'Sugestão de correção de dados', 'Status de conformidade'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_553ea9cb-5d48-b169-3b82-ab4a655e4c59&source=embedded-builder'
  },
  {
    id: 'automaton',
    name: 'AUTOMATON',
    department: 'LeSulConNe',
    domain: 'Planejamento e Controle',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Zalboeno Lins Ferreira',
    ownerEmail: 'zalboeno.ferreira@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Planejamento e Controle de Produção',
    description: 'Planejamento e Controle de Produção automatizado via Microsoft Copilot.',
    mission: 'Otimizar o fluxo de produção e evitar o vencimento de circuitos técnicos.',
    longDescription: 'É um agente de IA que utiliza dados de produção e calendários operacionais para filtrar, priorizar e organizar demandas de forma inteligente, garantindo o cumprimento das rotinas diárias e o respeito aos prazos estabelecidos.',
    features: [
      {
        category: 'Produção',
        items: [
          'Filtragem automática de base de produção',
          'Controle de circuitos próximos ao vencimento',
          'Automação de rotinas diárias de produção'
        ]
      }
    ],
    benefits: [
      {
        role: 'PCP',
        items: [
          'Visão clara do que é prioritário no dia',
          'Redução de perda de prazos de tecnologia',
          'Geração de base filtrada pronta para ação'
        ]
      }
    ],
    icon: 'Autômaton-logo.png',
    inputs: ['Base de dados de produção', 'Calendário de produção'],
    outputs: ['Base filtrada por valores específicos', 'Alertas de vencimento', 'Plano de produção diário'],
    accessUrl: 'https://m365.cloud.microsoft/chat/entity1-d870f6cd-4aa5-4d42-9626-b690c041429/eyJpZCI6ImNiOTA3ZjU2LWYzMmEtNGU5YS04OTkzLWVjMWJjNGJhNTI1NiIsInNjZW5hcmlvIjoibGF1bmNoY29waWxvdGV4dGVuc2lvbiIsInByb3BlcnRpZXMiOnsiY2xpY2tUaW1lc3RhbXAiOiJXZWQgSmFuIDI4IDIwMjYifSwidmVyc2lvbiI6MSwic291cmNlIjoib25BcHBJbnN0YWxsYXRpb24iLCJjb3JyZWxhdGlvbklkIjoiZmRjMjg3Y2UtMmJhNC00MDk0LTk4NjktODRkZThhMGRmZDNmIiwiaXNVcGdyYWRlIjpmYWxzZX0='
  },
  {
    id: 'bia',
    name: 'BIA',
    department: 'LeSulConNe',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Tiago Elias Bueno',
    ownerEmail: 'tiago.eliasbueno@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Backlog Assistence',
    description: 'Assistente de gestão de links e prazos do backlog.',
    mission: 'Garantir a entrega de links dentro do prazo e organizar o backlog.',
    longDescription: 'A BIA é uma agente de IA que analisa planilhas de backlog de links, gerando relatórios de status e sinalizando riscos de atraso de forma preditiva.',
    features: [
      {
        category: 'Backlog',
        items: [
          'Análise de backlog de links pendentes',
          'Sinalização de prazos vencidos ou a vencer',
          'Geração de relatórios diários, gráficos e tabelas'
        ]
      }
    ],
    benefits: [
      {
        role: 'Operacional',
        items: [
          'Foco nos links com maior risco de atraso',
          'Visibilidade total da receita envolvida nos links',
          'Redução do tempo de gestão manual do backlog'
        ]
      }
    ],
    icon: 'bIA-logo.png',
    inputs: ['Planilha de backlog Excel', 'Dados de previsão de entrega'],
    outputs: ['Relatórios de status diário', 'Gráficos de evolução', 'Alertas de ativação crítica']
  },
  {
    id: 'guara',
    name: 'GUARÁ',
    department: 'Backbone',
    domain: 'Relatórios e Validação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Paulo Avila Rizo',
    ownerEmail: 'paulo.rizo@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Gestor Unificado de Análise de Riscos e Aprovações',
    description: 'Triagem inteligente e qualificação de projetos de melhoria da Rede Fixa.',
    mission: 'Padronizar o racional de análise de riscos e acelerar a aprovação de projetos.',
    longDescription: 'É um agente de IA com ampla atuação no apoio às Operações Regionais, tornando o processo de pré-validação dos projetos mais padronizado, ágil e eficiente antes da submissão ao SUMMeR.',
    features: [
      {
        category: 'Triagem e Qualificação',
        items: [
          'Validação de 10 Campos Obrigatórios',
          'Checagem automática de evidências e anexos',
          'Identificação de lacunas e pendências'
        ]
      }
    ],
    benefits: [
      {
        role: 'Eficiência Operacional',
        items: [
          'Redução de tempo por análise de projeto',
          'Padronização entre Regionais e áreas centrais',
          'Melhoria no fluxo de aprovação'
        ]
      }
    ],
    icon: 'ShieldCheck',
    inputs: ['Propostas de Projeto', 'Evidências Técnicas', 'Matriz de Riscos'],
    outputs: ['Relatório Final Padronizado', 'Parecer Técnico/Executivo']
  },
  {
    id: 'cpe-auto',
    name: 'CPE Auto-Config',
    department: 'Viabilidade e Serviços Centralizados',
    domain: 'Automação Processual',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Andre Luis Mariano',
    ownerEmail: 'andre.mariano@claro.com.br',
    type: 'OpenAI - ChatGPT',
    tagline: 'Automação Config CPE, Suporte N1 e Validação Ativação',
    description: 'Suporte inteligente para técnicos de campo na ativação de CPEs.',
    mission: 'Acelerar entregas e zerar erros de configuração na ativação física B2B.',
    longDescription: 'O CPE Auto-Config é uma automação que utiliza IA para atuar como um assistente de troubleshooting para técnicos de campo, automatizando a configuração de terminais diretamente no local.',
    features: [
      {
        category: 'Configuração',
        items: [
          'Automação de configuração de CPEs',
          'Suporte passo a passo para técnicos',
          'Validação de instalação física'
        ]
      }
    ],
    benefits: [
      {
        role: 'Técnico de Campo',
        items: [
          'Maior autonomia na ativação',
          'Redução de erros de configuração',
          'Menor tempo de visita técnica'
        ]
      }
    ],
    icon: 'Router',
    inputs: ['Dados do Equipamento', 'Status de LEDs', 'Configurações de Rede'],
    outputs: ['Configuração Aplicada', 'Status de Validação']
  },
  {
    id: 'fabia',
    name: 'FABIA',
    department: 'Governo',
    domain: 'Conhecimento e Documentação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Julia Mendonca Ferreira',
    ownerEmail: 'julia.ferreira@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Analista de Portfolio Governo',
    description: 'Analista executiva de portfolio de projetos voltada para alta gestão.',
    mission: 'Transformar planilhas complexas em resumos executivos acionáveis.',
    longDescription: 'É uma agente de IA Especialista em processar grandes volumes de dados de projetos para gerar visões de status e pendências críticas para o setor de Governo.',
    features: [
      {
        category: 'Análise',
        items: [
          'Consolidação de dados de projetos',
          'Identificação de pendências críticas',
          'Geração de relatórios executivos'
        ]
      }
    ],
    benefits: [
      {
        role: 'Gestão',
        items: [
          'Visão atualizada do portfolio',
          'Foco em projetos críticos',
          'Agilidade na tomada de decisão'
        ]
      }
    ],
    icon: 'BarChart4',
    inputs: ['Planilhas de Projetos', 'Status de Rollout'],
    outputs: ['Resumo Executivo', 'Análise de Risco']
  },
  {
    id: 'leia',
    name: 'LÉIA',
    department: 'Governo',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Julia Mendonca Ferreira',
    ownerEmail: 'julia.ferreira@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Assistente de Editais',
    description: 'Assistente analítica de editais complexos e propostas comerciais.',
    mission: 'Garantir viabilidade técnica e mitigar riscos financeiros em contratações.',
    longDescription: 'É uma agente de IA que realiza leitura profunda de editais técnicos para extrair requisitos de SLA e regras de faturamento para o setor de Governo.',
    features: [
      {
        category: 'Análise Documental',
        items: [
          'Resumo analítico de editais',
          'Extração de métricas de SLA',
          'Mapeamento de exigências técnicas'
        ]
      }
    ],
    benefits: [
      {
        role: 'Comercial',
        items: [
          'Decisão baseada em dados reais do edital',
          'Redução de riscos financeiros',
          'Agilidade na resposta a editais'
        ]
      }
    ],
    icon: 'FileText',
    inputs: ['Editais em PDF', 'Cadernos Técnicos'],
    outputs: ['Parecer de Viabilidade', 'Resumo de Métricas']
  },
  {
    id: 'cme',
    name: 'CME',
    department: 'MSO Instalação',
    domain: 'Gestão de Incidentes e Problemas',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Vandemberg De Franca Junior',
    ownerEmail: 'vandemberg.junior@claro.com.br',
    type: 'Anthropic - Claude',
    tagline: 'Correlação de eventos massivos',
    description: 'Identificação de padrões em falhas massivas para acelerar a recuperação.',
    mission: 'Identificar padrões em falhas massivas para acelerar a recuperação.',
    longDescription: 'O CME "Correlação de eventos massivos", é uma automação que utiliza IA para analisar grandes volumes de alarmes e eventos de rede para correlacionar falhas massivas, permitindo que as equipes de instalação e manutenção atuem com precisão na causa raiz.',
    features: [
      {
        category: 'Correlação',
        items: [
          'Agrupamento inteligente de alarmes',
          'Identificação de impacto por região',
          'Predição de falhas em cascata'
        ]
      }
    ],
    benefits: [
      {
        role: 'Operação',
        items: [
          'Redução do tempo de diagnóstico',
          'Menos tickets duplicados',
          'Melhor priorização de equipes de campo'
        ]
      }
    ],
    icon: 'Activity',
    inputs: ['Logs de Alarmes', 'Topologia de Rede'],
    outputs: ['Mapa de Impacto', 'Causa Raiz Sugerida']
  },
  {
    id: 'drrf',
    name: 'DRRF',
    department: 'MSO Instalação',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Vandemberg De Franca Junior',
    ownerEmail: 'vandemberg.junior@claro.com.br',
    type: 'Anthropic - Claude',
    tagline: 'Disponibilidade real de rotas fotônicas',
    description: 'Garantia da resiliência da rede óptica através de análise de rotas.',
    mission: 'Garantir a resiliência da rede óptica através de análise profunda de rotas.',
    longDescription: 'O DRRF "Disponibilidade Real de Rotas Fotônicas", é uma automação que utiliza IA para verificar a integridade e disponibilidade das rotas fotônicas, identificando pontos de vulnerabilidade e sugerindo caminhos alternativos para manter a estabilidade da rede.',
    features: [
      {
        category: 'Análise Óptica',
        items: [
          'Verificação de continuidade de rota',
          'Cálculo de disponibilidade percentual',
          'Mapeamento de fibras críticas'
        ]
      }
    ],
    benefits: [
      {
        role: 'Engenharia',
        items: [
          'Maior confiabilidade no backbone óptico',
          'Prevenção de isolamentos de sites',
          'Otimização do uso de infraestrutura'
        ]
      }
    ],
    icon: 'Activity',
    inputs: ['Dados de OTDR', 'Inventário de Fibras'],
    outputs: ['Relatório de Disponibilidade', 'Mapa de Riscos']
  },
  {
    id: 'rtv-digital',
    name: 'RTV DIGITAL',
    department: 'MSO Instalação',
    domain: 'Relatórios e Validação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Vandemberg De Franca Junior',
    ownerEmail: 'vandemberg.junior@claro.com.br',
    type: 'Anthropic - Claude',
    tagline: 'Download e arquivamento de RVT Digital',
    description: 'Automatização da gestão documental de vistorias técnicas.',
    mission: 'Automatizar a gestão documental de vistorias técnicas.',
    longDescription: 'O RTV DIGITAL é uma automação que utiliza IA para realizar o processamento de vistorias técnicas (RVT), organizando o download e arquivamento seguro dos arquivos para consulta das equipes de instalação.',
    features: [
      {
        category: 'Automação',
        items: [
          'Download em lote de documentos',
          'Indexação automática por projeto',
          'Backup em nuvem estruturado'
        ]
      }
    ],
    benefits: [
      {
        role: 'Administrativo',
        items: [
          'Eliminação de tarefas manuais de download',
          'Fácil localização de evidências de vistoria',
          'Organização padronizada do histórico'
        ]
      }
    ],
    icon: 'FileText',
    inputs: ['Links de Vistoria', 'Metadados de Projetos'],
    outputs: ['Repositório Organizado', 'Log de Arquivamento']
  },
  {
    id: 'irtoa',
    name: 'IRTOA',
    department: 'MSO Instalação',
    domain: 'Automação Processual',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Vandemberg De Franca Junior',
    ownerEmail: 'vandemberg.junior@claro.com.br',
    type: 'Anthropic - Claude',
    tagline: 'Integração inteligente entre REConline e TOA',
    description: 'Sincronização de dados de solicitações para otimização de campo.',
    mission: 'Sincronizar dados de solicitações para otimização de campo.',
    longDescription: 'O IRTOA é uma automação que utiliza IA para atuar na ponte entre o sistema REConline e o TOA (Field Service), garantindo que as informações de campo estejam sempre atualizadas e precisas.',
    features: [
      {
        category: 'Sincronização',
        items: [
          'Atualização em tempo real de status',
          'Mapeamento de campos técnicos',
          'Validação de dados de entrada'
        ]
      }
    ],
    benefits: [
      {
        role: 'Campo',
        items: [
          'Dados precisos no aplicativo do técnico',
          'Menor retrabalho de preenchimento',
          'Melhor cumprimento de janelas de serviço'
        ]
      }
    ],
    icon: 'Activity',
    inputs: ['Dados do REConline', 'Status do TOA'],
    outputs: ['Base Sincronizada', 'Alertas de Divergência']
  },
  {
    id: 'istoa',
    name: 'ISTOA',
    department: 'MSO Instalação',
    domain: 'Automação Processual',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Vandemberg De Franca Junior',
    ownerEmail: 'vandemberg.junior@claro.com.br',
    type: 'Anthropic - Claude',
    tagline: 'Integração inteligente entre Siebel e TOA',
    description: 'Automatização do fluxo de tickets entre sistemas de atendimento e campo.',
    mission: 'Automatizar o fluxo de tickets entre sistemas de atendimento e campo.',
    longDescription: 'O ISTOA "Integração Siebel - TOA" é uma automação que utiliza IA para sincronizar as ordens de serviço geradas no Siebel com o agendamento no TOA, otimizando o despacho de técnicos para o mercado B2B.',
    features: [
      {
        category: 'Workflow',
        items: [
          'Geração automática de tarefas no TOA',
          'Retorno de conclusão para o Siebel',
          'Anexo de evidências fotográficas'
        ]
      }
    ],
    benefits: [
      {
        role: 'Suporte',
        items: [
          'Visibilidade total do status da OS',
          'Redução do delay entre abertura e despacho',
          'Garantia de integridade do ticket'
        ]
      }
    ],
    icon: 'Activity',
    inputs: ['Tickets Siebel', 'Agendas TOA'],
    outputs: ['OS Despachada', 'Confirmação de Execução']
  },
  {
    id: 'painel-fila',
    name: 'PAINELDEFILA',
    department: 'MSO Instalação',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Vandemberg De Franca Junior',
    ownerEmail: 'vandemberg.junior@claro.com.br',
    type: 'Anthropic - Claude',
    tagline: 'Painel de fila de atendimento - Técnico de AT',
    description: 'Otimização da distribuição de carga de trabalho e tempos de espera.',
    mission: 'Otimizar a distribuição de carga de trabalho e tempos de espera.',
    longDescription: 'O PAINELDEFILA é uma automação que utiliza IA para monitorar a fila de chamados técnicos, priorizando atendimentos baseados em criticidade e disponibilidade geográfica via Anthropic Claude.',
    features: [
      {
        category: 'Gestão de Fila',
        items: [
          'Placar em tempo real de chamados',
          'Priorização automática por SLA',
          'Visão por clusters geográficos'
        ]
      }
    ],
    benefits: [
      {
        role: 'Coordenação',
        items: [
          'Equilíbrio na carga dos técnicos',
          'Redução do tempo de espera do cliente',
          'Visibilidade de gargalos na operação'
        ]
      }
    ],
    icon: 'BarChart4',
    inputs: ['Base de Chamados', 'Posicionamento de Técnicos'],
    outputs: ['Placar de Gestão', 'Sugestão de Despacho']
  }
];
