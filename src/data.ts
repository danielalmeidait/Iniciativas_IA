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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_70b25520-6647-aeb0-a360-aedb534e2b5e&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      margem: 'Redução de retrabalho e tempo na concepção de projetos técnicos.',
    },
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_abb80b91-c6f5-e7b3-6d69-b9a1bc35d311&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      margem: 'Redução de 50% no tempo de elaboração de requisitos, com mais foco estratégico.',
    },
  },
  {
    id: 'facto-ia',
    name: 'FACTOIA',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_36512c08-a28f-34be-f604-087a975b842f&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      nps: 'Melhoria na qualidade técnica das análises de causa.',
      margem: 'Redução no tempo de fechamento de FECOM.',
    },
  },
  {
    id: 'iana',
    name: 'IAnA',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_a04ded4b-18a3-ea81-d98d-7d649ad0326c&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      nps: 'Comunicação proativa com o cliente e prevenção de impactos por manutenção programada.',
    },
  },
  {
    id: 'siria',
    name: 'SirIA',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_22360653-26c8-57e4-88fd-e63e00f17f84&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      nps: 'Análise estruturada de incidentes melhora a confiabilidade da rede.',
      margem: 'Base de conhecimento que previne falhas recorrentes.',
    },
  },
  {
    id: 'check-ia',
    name: 'CHECKIA',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_ee211807-6c56-7c15-c4eO-f37443fbdd34&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      nps: 'Segurança nas janelas de manutenção e garantia de que a rede retornou ao estado esperado.',
    },
  },
  {
    id: 'confia',
    name: 'CONFIA',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_a95041b3-4087-5b58-4d3c-9504c8547f45&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      margem: 'Redução de esforço e tempo na auditoria de configurações de roteadores.',
    },
  },
  {
    id: 'deserth',
    name: 'DESERTH',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_f31ad6bd-b88a-875a-f928-153a54f75a4f&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      nps: 'Identificação proativa de causas de atraso nos atendimentos.',
      margem: 'Apoio na redução de perda de SLA e risco de penalidades.',
    },
  },
  {
    id: 'sentinela',
    name: 'SENTINELA',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_415b082b-466e-f804-b4d6-914444195cf8&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      nps: 'Padronização do atendimento e melhoria direta na qualidade do serviço prestado.',
    },
  },
  {
    id: 'bancodoc',
    name: 'BANCODOC',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_553ea9cb-5d48-b169-3b82-ab4a655e4c59&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      margem: 'Automação documental reduz esforço manual e tempo de regularização. Prevenção de perdas por erros de conformidade documental.',
    },
  },
  {
    id: 'automaton',
    name: 'AUTOMATON',
    department: 'GCC - LESULCONNE',
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
    accessUrl: 'https://m365.cloud.microsoft/chat/entity1-d870f6cd-4aa5-4d42-9626-b690c041429/eyJpZCI6ImNiOTA3ZjU2LWYzMmEtNGU5YS04OTkzLWVjMWJjNGJhNTI1NiIsInNjZW5hcmlvIjoibGF1bmNoY29waWxvdGV4dGVuc2lvbiIsInByb3BlcnRpZXMiOnsiY2xpY2tUaW1lc3RhbXAiOiJXZWQgSmFuIDI4IDIwMjYifSwidmVyc2lvbiI6MSwic291cmNlIjoib25BcHBJbnN0YWxsYXRpb24iLCJjb3JyZWxhdGlvbklkIjoiZmRjMjg3Y2UtMmJhNC00MDk0LTk4NjktODRkZThhMGRmZDNmIiwiaXNVcGdyYWRlIjpmYWxzZX0=',
    category: 'agent',
    monthlySavingsHours: 35,
    strategicObjectives: {
      nps: 'Cumprimento de prazos estipulados melhora a percepção do cliente.',
      margem: 'Redução do risco de perda de prazos, prevenindo penalidades financeiras.',
    },
  },
  {
    id: 'bia',
    name: 'BIA',
    department: 'GCC - LESULCONNE',
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
    outputs: ['Relatórios de status diário', 'Gráficos de evolução', 'Alertas de ativação crítica'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_ce7a4b2b-53a4-c0f5-18bd-b796a036294f',
    category: 'agent',
    strategicObjectives: {
      margem: 'Foco nos links com maior risco de atraso, garantindo faturamento no prazo e evitando multas.',
    },
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
    icon: 'guara-logo.png',
    inputs: ['Propostas de Projeto', 'Evidências Técnicas', 'Matriz de Riscos'],
    outputs: ['Relatório Final Padronizado', 'Parecer Técnico/Executivo'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_4e0b2b1e-5e6e-04b6-4b65-5a41f5c68037&source=embedded-builder',
    category: 'agent',
    productivityHighlight: 'Redução do SLA de 4 horas para apenas 20 minutos! (91,7% de ganho)',
    strategicObjectives: {
      margem: 'Otimização expressiva do tempo de análise de viabilidade de projetos, poupando horas de engenharia.',
    },
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
    outputs: ['Configuração Aplicada', 'Status de Validação'],
    category: 'automation',
    strategicObjectives: {
      nps: 'Menor tempo de visita técnica e agilidade na entrega do serviço.',
      margem: 'Maior autonomia técnica e redução de erros.',
    },
  },
  {
    id: 'fabia',
    name: 'FABIA',
    department: 'GCC - GOVERNO',
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
    icon: 'fabia-logo.png',
    inputs: ['Planilhas de Projetos', 'Status de Rollout'],
    outputs: ['Resumo Executivo', 'Análise de Risco'],
    accessUrl: 'https://teams.microsoft.com/l/app/?source=embedded-builder&titleId=T_0ef6e3cb-1cf0-4593-b990-049cd544336e',
    category: 'agent',
    monthlySavingsHours: 30,
    strategicObjectives: {
      margem: 'Agilidade na tomada de decisão gerencial com consolidação de status de portfolio.',
    },
  },
  {
    id: 'leia',
    name: 'LÉIA',
    department: 'GCC - GOVERNO',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Julia Mendonca Ferreira',
    ownerEmail: 'julia.ferreira@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'Assistente de Editais',
    description: 'Assistente analítica de editais complexos e propostas comerciais.',
    mission: 'Garantir viabilidade técnica e mitigar riscos financeiros em contratações.',
    longDescription: 'A LEIA é uma agente de IA que realiza leitura profunda e análise contextual de editais técnicos, pregões e documentos licitatórios, extraindo informações críticas para apoiar a tomada de decisão nas áreas comercial, pré-vendas e pós-vendas. Seu papel é consolidar, de forma clara e estruturada, os principais pontos do edital, incluindo viabilidade, requisitos, SLAs, regras de faturamento, glossas, penalidades e obrigações contratuais, reduzindo esforço manual e aumentando a segurança da análise.',
    features: [
      {
        category: 'Funcionalidades & Capacidades',
        items: [
          'Consolidação de prazos críticos',
          'Resumo de métricas relevantes para decisão comercial',
          'Resumo analítico de editais',
          'Mapeamento de exigências técnicas'
        ]
      }
    ],
    benefits: [
      {
        role: 'Benefícios e Impacto',
        items: [
          'Apoio à decisão com base em dados reais do edital',
          'Redução significativa do tempo de leitura e interpretação de editais',
          'Redução de riscos financeiros e contratuais',
          'Mais agilidade na resposta a editais e licitações'
        ]
      }
    ],
    icon: 'leia-logo.png',
    inputs: ['Editais em PDF', 'Cadernos Técnicos', 'Pregões e documentos licitatórios'],
    outputs: ['Parecer de viabilidade', 'Relatório com SLAs e glossas', 'Mapeamento de requisitos e obrigações', 'Relatório de apoio ao Pós-Venda'],
    accessUrl: 'https://teams.microsoft.com/l/app/?source=embedded-builder&titleId=T_8d3f553d-d8f0-e60c-cfaa-8f6aedcf510c',
    category: 'agent',
    monthlySavingsHours: 170,
    productivityHighlight: 'Redução do tempo de leitura de edital de 1 dia para cerca de 1 hora. (87,5% de ganho)',
    strategicObjectives: {
      margem: 'Aceleração nas respostas a licitações e redução de esforço da equipe.',
    },
  },
  {
    id: 'cme',
    name: 'EVENTOS MASSIVOS',
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
    outputs: ['Mapa de Impacto', 'Causa Raiz Sugerida'],
    category: 'automation',
    monthlySavingsHours: 105,
    strategicObjectives: {
      nps: 'Redução do tempo de diagnóstico de falhas massivas, diminuindo o impacto ao cliente.',
    },
  },
  {
    id: 'drrf',
    name: 'ROTAS FOTÔNICAS',
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
    outputs: ['Relatório de Disponibilidade', 'Mapa de Riscos'],
    category: 'automation',
    monthlySavingsHours: 105,
    strategicObjectives: {
      nps: 'Prevenção de isolamento de clientes e incremento na confiabilidade do backbone.',
    },
  },
  {
    id: 'rtv-digital',
    name: 'RVT DIGITAL',
    department: 'MSO Instalação',
    domain: 'Relatórios e Validação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Vandemberg De Franca Junior',
    ownerEmail: 'vandemberg.junior@claro.com.br',
    type: 'Anthropic - Claude',
    tagline: 'Download e arquivamento de RVT Digital',
    description: 'Automatização da gestão documental de vistorias técnicas.',
    mission: 'Automatizar o processamento, a organização e o arquivamento de relatórios digitais de visita, promovendo mais segurança da informação, rastreabilidade, produtividade e eliminação do uso excessivo de papel.',
    longDescription: 'O RTV DIGITAL é um agente de Inteligência Artificial voltado à digitalização e automação do processo de arquivamento de relatórios de visita técnicas do TOA/OFS, substituindo atividades manuais por um fluxo automatizado, ágil e confiável.',
    features: [
      {
        category: 'Funcionalidades & Capacidades',
        items: [
          'Automatização do arquivamento de relatórios TOA/OFS',
          'Captura de relatórios digitais sem necessidade de intervenção manual',
          'Upload direto para diretórios estruturados no SharePoint',
          'Padronização da organização documental'
        ]
      }
    ],
    benefits: [
      {
        role: 'Benefícios e Impacto',
        items: [
          'Redução do risco de perda de dados',
          'Eliminação de atividades manuais repetitivas',
          'Redução do uso de papel e dos custos associados ao processo físico',
          'Geração de economia anual estimada em aproximadamente R$ 70 mil nas regionais'
        ]
      }
    ],
    icon: 'FileText',
    inputs: ['Captura de dados de chamados com relatórios de visita TOA'],
    outputs: ['Download automático dos relatórios para o SharePoint', 'Disponibilização dos arquivos em ambiente digital centralizado'],
    category: 'automation',
    monthlySavingsHours: 105,
    strategicObjectives: {
      margem: 'Economia anual estimada em custos operacionais e eliminação de processos manuais.',
    },
  },
  {
    id: 'irtoa',
    name: 'INTEGRAÇÃO RECONLINE',
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
    outputs: ['Base Sincronizada', 'Alertas de Divergência'],
    category: 'automation',
    monthlySavingsHours: 114,
    strategicObjectives: {
      nps: 'Melhor cumprimento de janelas de atendimento agendadas.',
      margem: 'Diminuição do retrabalho com preenchimento manual.',
    },
  },
  {
    id: 'istoa',
    name: 'INTEGRAÇÃO SIEBEL',
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
    outputs: ['OS Despachada', 'Confirmação de Execução'],
    category: 'automation',
    monthlySavingsHours: 54,
    strategicObjectives: {
      nps: 'Eliminação do atraso entre a abertura do chamado e o despacho do técnico.',
    },
  },
  {
    id: 'painel-fila',
    name: 'PAINEL DE FILA',
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
          'Visão por regional'
        ]
      }
    ],
    benefits: [
      {
        role: 'Coordenação',
        items: [
          'Equilíbrio na carga dos técnicos',
          'Redução do tempo de espera do cliente',
          'Visibilidade de gargalos na operação',
          'Monitoramento efetivo das filas de atendimento através do TOA',
          'Cobrar regional da ausência do técnico e monitoramento do técnico de campo'
        ]
      }
    ],
    icon: 'BarChart4',
    inputs: ['Base de Chamados', 'Posicionamento de Técnicos'],
    outputs: ['Placar de Gestão', 'Sugestão de Despacho'],
    category: 'automation',
    monthlySavingsHours: 114,
    strategicObjectives: {
      nps: 'Redução do tempo de espera do cliente final e maior controle da operação.',
    },
  },
  {
    id: 'isa',
    name: 'ISA',
    department: 'Recuperação',
    domain: 'Análise e Gestão',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Victor Matheus Falcao Fonseca',
    ownerEmail: 'victor.matheus@claro.com.br',
    type: 'Python + Google Gemini',
    tagline: 'Inteligência em Suporte e Avaliação',
    description: 'Agente focado em melhorar a recuperação de clientes e fluxo operacional.',
    mission: 'Atuar de forma estratégica na recuperação de passivos e retenção inteligente.',
    longDescription: 'A ISA (Inteligência em Suporte e Avaliação) é uma iniciativa estratégica focada na recuperação de processos. A agente analisa o histórico de clientes e o desempenho das abordagens para recomendar melhores trilhas de contato, aumentando as taxas de sucesso e retenção.',
    features: [
      {
        category: 'Recuperação',
        items: [
          'Análise de perfil de ofensores',
          'Sugestão de ações para recuperação de faturamento',
          'Otimização do fluxo de experimentação e imersão'
        ]
      }
    ],
    benefits: [
      {
        role: 'Operacional',
        items: [
          'Aumento da taxa de recuperação',
          'Visibilidade das tendências de comportamento de cliente',
          'Agilidade na condução dos processos de imersão'
        ]
      }
    ],
    icon: 'logo-isa.png',
    inputs: ['Base de dados de recuperação', 'Histórico de atendimento', 'Relatórios financeiros'],
    outputs: ['Trilha de ação de recuperação', 'Insights comportamentais'],
    category: 'automation',
    productivityHighlight: 'Redução de 65 minutos para apenas 9 minutos! (86,2% de ganho)',
    strategicObjectives: {
      margem: 'A recuperação mais rápida traz ganho de tempo e otimização do fluxo operacional.',
    },
  },
  {
    id: 'hannah',
    name: 'HANNAH',
    department: 'GCC - LESULCONNE',
    domain: 'Conhecimento e Documentação',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Zalboeno Lins Ferreira',
    ownerEmail: 'zalboeno.ferreira@claro.com.br',
    type: 'Microsoft - Copilot',
    tagline: 'ASSISTENTE DIGITAL',
    description: 'Apoia na elaboração e revisão de e-mails, textos corporativos e organização de informações.',
    mission: 'Aumentar a produtividade e clareza na comunicação, construindo textos claros e profissionais.',
    longDescription: 'Hannah é uma agente de IA que recebeu esse nome em homenagem à pensadora Hannah Arendt. Ela atua apoiando os usuários na elaboração e revisão de e-mails, criação de textos corporativos, organização de informações e auxílio em análises textuais, adaptando o tom e conteúdo para formal ou casual e promovendo eficiência na comunicação.',
    features: [
      {
        category: 'Comunicação',
        items: [
          'Elaboração e revisão de e-mails',
          'Criação de textos corporativos',
          'Organização de informações',
          'Auxílio em análises textuais'
        ]
      }
    ],
    benefits: [
      {
        role: 'Usuário',
        items: [
          'Ganho de tempo na comunicação corporativa',
          'Assertividade na escrita',
          'Adaptação do tom ao contexto (formal ou casual)'
        ]
      }
    ],
    icon: 'FileText',
    inputs: ['Textos'],
    outputs: ['E-mails bem redigidos de acordo com o público-alvo'],
    accessUrl: 'https://m365.cloud.microsoft/chat/?titleId=T_73efaa04-a4c6-6db2-86ef-488ca0209e00&source=embedded-builder',
    category: 'agent',
    strategicObjectives: {
      margem: 'Ganho expressivo de tempo na formulação de comunicações corporativas rotineiras.',
    },
  }
];
