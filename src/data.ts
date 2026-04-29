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
    icon: 'FileSearch',
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
    icon: 'Code',
    inputs: ['Requisitos brutos', 'Regras de Negócio', 'Documentos de negócio', 'Feedbacks de usuários'],
    outputs: ['User Story estruturada', 'Regras de Negócio detalhadas', 'Sugestão Técnica (Código)', 'Critérios de Aceite (Gherkin)']
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
          'Identificação imediata de estados: normal, falha ou degradação',
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
