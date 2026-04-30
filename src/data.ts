import { AIAgent } from './types';

export const AI_AGENTS: AIAgent[] = [
  {
    id: 'aria',
    name: 'ARIA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Documentos & Backlog',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Leandro Rosseto',
    ownerEmail: 'leandro.rosseto@claro.com.br',
    type: 'GenAI',
    description: 'Analista virtual de requisitos via Microsoft Copilot que eleva a qualidade das demandas desde a origem.',
    mission: 'Reduzir retrabalho, acelerar entendimento e padronizar requisitos.',
    longDescription: 'ARIA é um agente de Inteligência Artificial especializado em requisitos. Atua como analista virtual, apoiando times desde a concepção até o detalhamento final. Seu objetivo é elevar a qualidade dos requisitos e reduzir retrabalho e tempo de entrega, apoiando a tomada de decisão desde a origem das demandas.',
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
    outputs: ['Análise crítica detalhada (qualidade/clareza/completude)', 'Arquivo corrigido para download', 'Critérios de aceite', 'Pontos de atenção técnicos']
  },
  {
    id: 'elisa',
    name: 'ELISA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Documentos & Backlog',
    execution: 'Relatório / Validação Técnica',
    owner: 'William Teodoro de Moraes',
    ownerEmail: 'william.moraes.terceiros@claro.com.br',
    type: 'GenAI',
    description: 'Apoio via Microsoft Copilot para transformar requisitos em PBIs estruturados, acelerando entregas.',
    mission: 'Aumentar a produtividade dos times de desenvolvimento.',
    longDescription: 'ELISA (Estrutura, Linguagem e Integração para Soluções Ágeis) apóia Product Owners (POs) com escritas de histórias de usuário (PBIs) completas, claras e padronizadas. Seu objetivo é transformar requisitos e regras de negócio em textos bem estruturados.',
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
    outputs: ['User Story estruturada', 'Regras de Negócio detalhadas', 'Sugestão Técnica (Código)', 'Critérios de Aceite (Gherkin)']
  },
  {
    id: 'facto-ia',
    name: 'Facto IA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Processos & SLA',
    execution: 'Relatório / Validação Técnica',
    owner: 'ESO Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Realização automática de FCA (Fato, Causa e Ação) após o FETEC das RECs.',
    mission: 'Agilizar o fechamento de FECOMs e apoiar a criação de RCAs de qualidade.',
    longDescription: 'O Facto IA foi criado para automatizar a análise de falhas e a geração de relatórios de RCA. Ele processa informações técnicas para identificar a causa raiz e sugerir ações corretivas de forma padronizada.',
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
    outputs: ['FCA estruturado', 'Sugestão de RCA', 'Parecer de fechamento']
  },
  {
    id: 'iana',
    name: 'IAnA',
    department: 'MSO Backbone',
    domain: 'Rede & Equipamento',
    execution: 'Diagnóstico de Falha',
    owner: 'MSO Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Análise inteligente de informes de manutenção programada da rede.',
    mission: 'Automatizar a tradução de designações técnicas e prever riscos de isolamento.',
    longDescription: 'A IAnA processa listas de designações recebidas por e-mail, traduzindo códigos técnicos para nomes amigáveis de sites e identificando preventivamente riscos de isolamento de rede.',
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
    outputs: ['Relatório de impacto por site', 'Risco de isolamento detalhado', 'Sugestão de e-mail para cliente']
  },
  {
    id: 'siria',
    name: 'SirIA',
    department: 'MSO Backbone',
    domain: 'Rede & Equipamento',
    execution: 'Relatório / Validação Técnica',
    owner: 'SIR Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Análise profunda de históricos de observação de RECs do SIR.',
    mission: 'Transformar logs complexos em visões executivas e linhas do tempo detalhadas.',
    longDescription: 'A SirIA analisa grandes volumes de texto de históricos de RECs para extrair os eventos principais, criando uma narrativa cronológica dos incidentes e lições aprendidas.',
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
    outputs: ['Resumo Executivo', 'Linha do Tempo', 'Plano de Ações Preventivas', 'FCA Completo']
  },
  {
    id: 'check-ia',
    name: 'Check IA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Processos & SLA',
    execution: 'Relatório / Validação Técnica',
    owner: 'ESO Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Comparação inteligente de checklists em atividades de cliente.',
    mission: 'Garantir que as atividades técnicas não gerem alterações indesejadas na rede.',
    longDescription: 'O Check IA compara tabelas de roteamento e configurações antes e depois de janelas de manutenção, apontando divergências críticas que podem impactar o serviço.',
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
    outputs: ['Relatório de divergências', 'Status de conformidade', 'Destaques de alteração']
  },
  {
    id: 'confia',
    name: 'ConfIA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Rede & Equipamento',
    execution: 'Relatório / Validação Técnica',
    owner: 'ESO Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Comparação de arquivos de configuração de roteadores Cisco.',
    mission: 'Identificar alterações de configuração com precisão e rapidez.',
    longDescription: 'Focado em equipamentos Cisco, o ConfIA analisa os arquivos de configuração para detectar mudanças, garantindo que as intervenções técnicas seguiram o planejado.',
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
    outputs: ['Relatório de diferenças (Diff)', 'Análise de impacto da mudança']
  },
  {
    id: 'deserth',
    name: 'DESERTH',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Processos & SLA',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'ESO Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Análise especializada de projetos e performance de atendimento.',
    mission: 'Otimizar o tempo de serviço e garantir o cumprimento de SLAs.',
    longDescription: 'O DESERTH analisa os dados de atendimento das equipes para identificar gargalos, causas de demora e pontos de falha no centro funcional.',
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
    outputs: ['Relatório de gargalos', 'Indicativos de falha', 'Pontos de melhoria operacional']
  },
  {
    id: 'aqs',
    name: 'AQS',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Processos & SLA',
    execution: 'Auditoria Preventiva',
    owner: 'ESO Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Analista de Qualidade de Serviço e conformidade de escalonamentos.',
    mission: 'Garantir que os contatos e escalonamentos sigam o padrão de qualidade exigido.',
    longDescription: 'A AQS audita os contatos realizados pelos colaboradores, verificando se os protocolos de escalonamento foram seguidos e se houve efetividade na comunicação.',
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
          'Melhoria na percepção de qualidade do cliente'
        ]
      }
    ],
    icon: 'Sentinela-logo.png',
    inputs: ['Gravações/Logs de chamadas', 'Tickets de escalonamento'],
    outputs: ['Nota de qualidade por atendimento', 'Relatório de inconsistências', 'Feedback para treinamento']
  },
  {
    id: 'bancodoc',
    name: 'BancoDoc',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Documentos & Backlog',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'ESO Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Gestão inteligente de pendências documentais e base de dados.',
    mission: 'Manter as informações documentais sempre atualizadas e em conformidade.',
    longDescription: 'Especialista em análise de documentos, o BancoDoc propõe correções em planilhas e identifica proativamente pendências de colaboradores.',
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
    outputs: ['Relatório de pendências', 'Sugestão de correção de dados', 'Status de conformidade']
  },
  {
    id: 'automaton',
    name: 'Autômaton',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Processos & SLA',
    execution: 'Relatório / Validação Técnica',
    owner: 'PCP Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'Automação',
    description: 'Planejamento e Controle de Produção automatizado.',
    mission: 'Otimizar o fluxo de produção e evitar o vencimento de circuitos técnicos.',
    longDescription: 'Baseado na extração de dados do SGP, o Autômaton filtra e organiza as demandas para garantir que as rotinas diárias e vencimentos sejam respeitados.',
    features: [
      {
        category: 'Produção',
        items: [
          'Filtragem automática de base SGP',
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
    inputs: ['Base extraída do SGP', 'Calendário de produção'],
    outputs: ['Base filtrada por valores específicos', 'Alertas de vencimento', 'Plano de produção diário']
  },
  {
    id: 'bia',
    name: 'bIA',
    department: 'ESO (Eficiência e Suporte Operacional)',
    domain: 'Documentos & Backlog',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Backlog Team',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Backlog Assistence: assistente de gestão de links e prazos.',
    mission: 'Garantir a entrega de links dentro do prazo e organizar o backlog.',
    longDescription: 'A bIA analisa planilhas de backlog de links, gerando relatórios de status e sinalizando riscos de atraso de forma preditiva.',
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
    department: 'MSO Backbone',
    domain: 'Processos & SLA',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'Paulo Avila Rizo',
    ownerEmail: 'paulo.rizo@claro.com.br',
    type: 'GenAI',
    description: 'Triagem inteligente via Microsoft Copilot e qualificação de projetos de melhoria da Rede Fixa.',
    mission: 'Padronizar o racional de análise de riscos e acelerar a aprovação de projetos.',
    longDescription: 'Ampliar a atuação do Agente GUARÁ no apoio às Operações Regionais, tornando o processo de pré-validação dos projetos mais padronizado, ágil e eficiente antes da submissão ao SUMMeR. Além de antecipar riscos e pendências, a proposta busca reduzir retrabalho, aumentar a qualidade das entregas e melhorar o fluxo entre Regionais e áreas centrais. Em uma etapa futura, a iniciativa prevê a implementação de automações em atividades operacionais, como captura de solicitações, acesso a documentos, envio para análise pelo agente e geração de relatórios, sempre com validação humana, garantindo escala com governança e maior eficiência operacional.',
    features: [
      {
        category: 'Triagem e Qualificação',
        items: [
          'Validação de 10 Campos Obrigatórios',
          'Checagem automática de evidências e anexos',
          'Identificação de lacunas e pendências'
        ]
      },
      {
        category: 'Risco e Aprovação',
        items: [
          'Cálculo de probabilidade e Matriz de Riscos',
          'Revisão de proposta técnica e CAPEX',
          'Parecer padronizado: Aprovar, Revisar ou Devolver'
        ]
      }
    ],
    benefits: [
      {
        role: 'Eficiência Operacional',
        items: [
          'Redução de tempo por ID: de 1-4h para 10-20 min',
          'Liberação de 108h/ano por colaborador para valor estratégico',
          'Padronização entre Regionais, MSO e Engenharia'
        ]
      },
      {
        role: 'Governança',
        items: [
          'Redução de erros humanos e subjetividade',
          'Rastreabilidade total das decisões e evidências',
          'Previsibilidade e consistência na tomada de decisão'
        ]
      }
    ],
    icon: 'ShieldCheck',
    inputs: ['PPT de Proposta (SUMMeR)', 'Evidências (E-mails/Logs/Prints)', 'Histórico de 12 meses', 'Matriz de Riscos'],
    outputs: ['Relatório Final Padronizado', 'Nota Final de Referência', 'Parecer Técnico/Executivo', 'JSON para integrações futuras']
  },
  {
    id: 'isa',
    name: 'ISA',
    department: 'ESO - B2B',
    domain: 'Rede & Equipamento',
    execution: 'Diagnóstico de Falha',
    owner: 'Alexandre Alcantara',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Inteligência para Soluções de Anomalias de Rede voltada para o mercado B2B.',
    mission: 'Zerar o tempo de diagnóstico e automatizar a recuperação de falhas críticas.',
    longDescription: 'A ISA automatiza a esteira de recuperação de falhas no ambiente Siebel. Ela realiza monitoramento proativo, diagnóstico correlacional e acionamento de parceiros ou técnicos de campo sem intervenção humana.',
    features: [
      {
        category: 'Monitoramento & Diagnóstico',
        items: [
          'Monitoramento de queda e performance em tempo real',
          'Avaliação automática de alarmes e correlação de falhas',
          'Análise de probabilidade e predição de incidentes'
        ]
      },
      {
        category: 'Ação & Resolução',
        items: [
          'Abertura e fechamento de tickets ITSM (Siebel/SIR)',
          'Acionamento automático de parceiros e técnicos',
          'Interação direta com o cliente via canais digitais'
        ]
      }
    ],
    benefits: [
      {
        role: 'Eficiência de Rede',
        items: [
          'Redução do tempo médio da esteira de 65min para até 1min',
          'Ganhos operacionais superiores a 2MM em CAPEX/OPEX',
          'Melhoria drástica no diagnóstico de falhas complexas'
        ]
      },
      {
        role: 'Cliente',
        items: [
          'Agilidade extrema na recuperação de serviços B2B',
          'Feedback constante e transparente sobre o status da falha',
          'Aumento da confiabilidade da rede backbone'
        ]
      }
    ],
    icon: 'Activity',
    inputs: ['Alarmes de Rede', 'Orquestradores (Meraki/VeloCloud)', 'Tickets Siebel', 'APIs de Provedores'],
    outputs: ['Diagnóstico de Causa Raiz', 'Acionamento de Campo', 'Ticket Recuperado', 'Relatório de Estabilidade'],
    isHighPotential: true
  },
  {
    id: 'cpe-auto',
    name: 'CPE Auto-Config',
    department: 'ESO - Campo',
    domain: 'Rede & Equipamento',
    execution: 'Relatório / Validação Técnica',
    owner: 'André Luis Mariano',
    ownerEmail: 'Andre.mariano@claro.com.br',
    type: 'Visão Computacional',
    description: 'Suporte inteligente via OpenAI - ChatGPT para técnicos de campo na ativação e configuração de CPEs.',
    mission: 'Acelerar entregas e zerar erros de configuração na ativação física B2B.',
    longDescription: 'O CPE Auto-Config atua como um assistente de visão computacional e troubleshooting para técnicos de campo. Ele identifica estados de LEDs, transcreve seriais e automatiza a configuração de terminais diretamente no local, integrando playbooks de acesso e IPRAN.',
    features: [
      {
        category: 'Interpretação & Visão',
        items: [
          'Interpretação automática de LEDs e Etiquetas via smartphone',
          'Identificação imediata de estados: normal, falha ou degranadação',
          'Captura e transcrição de Serial Number e MAC para o MODOS'
        ]
      },
      {
        category: 'Troubleshooting & Escalonamento',
        items: [
          'Diagnóstico automático baseado em playbooks (Acesso, IPRAN e BBIP)',
          'Orientação passo a passo para correção (checklist inteligente)',
          'Escalonamento inteligente ao N2 com diagnóstico inicial e evidências'
        ]
      },
      {
        category: 'Validação Técnica',
        items: [
          'Validação de instalação física e fachada via fotos',
          'Correlação geográfica da instalação com Endereço OS Modos',
          'Transcrição de Carta do Provedor (IP, Autenticação, Login) para MODOS',
          'Certidão de Throughput, Latência, Jitter e Perda de Pacotes'
        ]
      }
    ],
    benefits: [
      {
        role: 'Técnico de Campo',
        items: [
          'Maior autonomia e ativação na primeira visita',
          'Redução de erros no registro de informações seriais',
          'Menor necessidade de suporte direto do N2/N3'
        ]
      },
      {
        role: 'Operação B2B',
        items: [
          'Garantia de qualidade na entrega de BLC Terceiros',
          'Redução de retrabalho e tempo de resolução de falhas',
          'Escalabilidade e padronização do suporte técnico'
        ]
      }
    ],
    icon: 'Router',
    inputs: ['Fotos de Hardware (LEDs/Etiquetas)', 'Fotos de Instalação e Fachada', 'Geolocalização (GPS)', 'Carta do Provedor'],
    outputs: ['Configuração de CPE Aplicada', 'Certidão de Desempenho (Throughput/Latência)', 'Checklist de Aceite técnico', 'Transcrição técnica para MODOS']
  },
  {
    id: 'fabia',
    name: 'FABIA',
    department: 'ESO - Projetos',
    domain: 'Processos & SLA',
    execution: 'Gestão & Qualidade Operacional',
    owner: 'ESO Projetos',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Analista executiva de portfolio de projetos voltada para alta gestão.',
    mission: 'Transformar planilhas complexas em resumos executivos acionáveis.',
    longDescription: 'Especialista em processar grandes volumes de dados de projetos (planilhas) para gerar visões de status, pendências críticas e placares de produção, garantindo visibilidade total para o cliente.',
    features: [
      {
        category: 'Análise de Portfolio',
        items: [
          'Consolidação de dados de GP/GCC e IDPs',
          'Identificação proativa de pendências de aquisição',
          'Geração de Ranking Executivo de projetos críticos'
        ]
      },
      {
        category: 'Relatórios Sociais',
        items: [
          'Criação de Resumos Padrão para apresentações',
          'Placar de produção (Internalizados/Cadastrados)',
          'Simulação de impacto de atraso por projeto'
        ]
      }
    ],
    benefits: [
      {
        role: 'Gestores de Projetos',
        items: [
          'Visão 100% atualizada do status do portfolio',
          'Foco imediato nos projetos com risco de atraso',
          'Redução do tempo de preparação de reports'
        ]
      },
      {
        role: 'Clientes Corporativos',
        items: [
          'Transparência total na evolução da rede contratada',
          'Rastreabilidade de prazos e investimentos',
          'Relatórios executivos prontos para diretoria'
        ]
      }
    ],
    icon: 'BarChart4',
    inputs: ['Planilhas de Projetos', 'Dados de IDP/GCC', 'Status de Rollout', 'Ordens de Serviço'],
    outputs: ['Resumo Executivo (Standard)', 'Placar de Produção', 'Filtro de Projetos Críticos', 'Análise de Risco']
  },
  {
    id: 'leia',
    name: 'LEIA',
    department: 'ESO - Comercial',
    domain: 'Documentos & Backlog',
    execution: 'Relatório / Validação Técnica',
    owner: 'ESO Bidding',
    ownerEmail: 'agentes.ia@claro.com.br',
    type: 'GenAI',
    description: 'Assistente analítica de editais complexos e propostas comerciais.',
    mission: 'Garantir viabilidade técnica e mitigar riscos financeiros em contratações.',
    longDescription: 'Realiza a leitura profunda de editais técnicos (ex: CODEVASF) para extrair requisitos de SLA, multas, regras de faturamento e compor o parecer de viabilidade técnica e financeira.',
    features: [
      {
        category: 'Análise Documental',
        items: [
          'Resumo analítico consolidado de editais PDF',
          'Extração de métricas de SLA e Vigência Contratual',
          'Mapeamento de exigências técnicas e equipamentos'
        ]
      },
      {
        category: 'Mitigação de Risco',
        items: [
          'Simulação de glosas e penalidades por atraso',
          'Checklist de viabilidade Go/No-Go',
          'Cruzamento de viabilidades de fornecedores (Excel)'
        ]
      }
    ],
    benefits: [
      {
        role: 'Área Comercial',
        items: [
          'Decisão técnica baseada em dados reais do edital',
          'Agilidade na resposta a editais complexos',
          'Redução de riscos com cláusulas abusivas'
        ]
      },
      {
        role: 'Engenharia & SLA',
        items: [
          'Clareza total sobre as métricas de desempenho exigidas',
          'Planejamento de prazos alinhado à multa global',
          'Identificação precoce de "última milha" crítica'
        ]
      }
    ],
    icon: 'FileText',
    inputs: ['Editais em PDF (Ex: Pregões)', 'Planilhas de Viabilidade', 'Cadernos Técnicos', 'Tabela de Preços'],
    outputs: ['Parecer de Viabilidade', 'Resumo de Métricas de SLA', 'Simulação de Exposição Financeira', 'Checklist de Requisitos']
  }
];
