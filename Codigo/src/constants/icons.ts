/**
 * @file icons.ts
 * @description Mapa centralizado de ícones Lucide utilizados nos cards de agentes IA.
 *
 * Fonte única de verdade para o mapeamento entre o campo `icon` (string) de um
 * AIAgent e o componente React correspondente da biblioteca lucide-react.
 *
 * Utilizado por: Catalog, Details e Registration.
 */

import {
  Activity,
  BrainCircuit,
  Code,
  FileSearch,
  Rocket,
  ShieldCheck,
  Target,
  Zap,
} from 'lucide-react';
import type { ElementType } from 'react';

// ─── Tipos ────────────────────────────────────────────────────────────────────

/**
 * Nomes de ícones disponíveis para representar um agente IA.
 * Deve estar em sincronia com as entradas de ICON_MAP abaixo.
 */
export type IconName =
  | 'Activity'
  | 'BrainCircuit'
  | 'Code'
  | 'FileSearch'
  | 'Rocket'
  | 'ShieldCheck'
  | 'Target'
  | 'Zap';

// ─── Mapa de ícones ────────────────────────────────────────────────────────────

/**
 * Mapa de string → componente React Lucide.
 * Use este mapa para resolver dinamicamente o ícone de um agente a partir
 * do campo `agent.icon`.
 *
 * @example
 * const Icon = ICON_MAP[agent.icon] ?? BrainCircuit;
 * return <Icon className="w-8 h-8" />;
 */
export const ICON_MAP: Record<IconName, ElementType> = {
  Activity,
  BrainCircuit,
  Code,
  FileSearch,
  Rocket,
  ShieldCheck,
  Target,
  Zap,
};

/**
 * Lista ordenada de ícones para o seletor visual do formulário de cadastro.
 * Cada entrada expõe o nome (string) e o componente para renderização.
 */
export const ICON_OPTIONS: { name: IconName; Icon: ElementType }[] = [
  { name: 'FileSearch', Icon: FileSearch },
  { name: 'Code',       Icon: Code       },
  { name: 'Activity',   Icon: Activity   },
  { name: 'ShieldCheck',Icon: ShieldCheck },
  { name: 'BrainCircuit',Icon: BrainCircuit },
  { name: 'Zap',        Icon: Zap        },
  { name: 'Target',     Icon: Target     },
  { name: 'Rocket',     Icon: Rocket     },
];
