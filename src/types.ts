export type AIType = 'GenAI' | 'Machine Learning' | 'Deep Learning' | 'Predição' | 'Linguagem Natural' | 'Visão Computacional' | 'Automação';
export type BusinessDomain = 'Rede & Equipamento' | 'Processos & SLA' | 'Documentos & Backlog';
export type ExecutionType = 'Auditoria Preventiva' | 'Diagnóstico de Falha' | 'Relatório / Validação Técnica' | 'Gestão & Qualidade Operacional';

export interface AIAgent {
  id: string;
  name: string;
  department: string;
  domain: BusinessDomain;
  execution: ExecutionType;
  owner: string;
  ownerEmail: string;
  type: AIType;
  description: string;
  mission: string;
  longDescription: string;
  features: {
    category: string;
    items: string[];
  }[];
  benefits: {
    role: string;
    items: string[];
  }[];
  icon: string;
  inputs?: string[];
  outputs?: string[];
  isHighPotential?: boolean;
}
