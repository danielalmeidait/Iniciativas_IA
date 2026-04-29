/**
 * @file Registration.tsx
 * @description Formulário dinâmico para cadastrar um novo agente IA no catálogo.
 *
 * Responsabilidades:
 * - Exibir um modal com formulário estruturado em seções temáticas.
 * - Permitir adicionar/remover grupos de funcionalidades e benefícios dinamicamente.
 * - Validar campos obrigatórios via HTML nativo antes do envio.
 * - Emitir o novo agente via callback `onAdd` para o componente pai (App).
 */

import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Save,
  Rocket,
  Users,
  Zap,
  Target,
} from 'lucide-react';
import type { AIAgent, AIType, BusinessDomain, ExecutionType } from '../types';
import { ICON_OPTIONS } from '../constants/icons';
import { AI_TYPES, DOMAINS, EXECUTIONS } from '../constants/options';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Tipos das props ───────────────────────────────────────────────────────────

interface RegistrationProps {
  /** Callback para fechar o modal sem salvar. */
  onBack: () => void;
  /** Callback chamado com o novo agente após submissão válida do formulário. */
  onAdd: (agent: AIAgent) => void;
}

// ─── Estado inicial do formulário ──────────────────────────────────────────────

/** Valores padrão do formulário ao abrir o modal de cadastro. */
const INITIAL_FORM: Omit<AIAgent, 'id'> = {
  name: '',
  department: '',
  domain: 'Rede & Equipamento',
  execution: 'Auditoria Preventiva',
  owner: '',
  ownerEmail: '',
  type: 'GenAI',
  description: '',
  mission: '',
  longDescription: '',
  features: [{ category: '', items: [''] }],
  benefits: [{ role: '', items: [''] }],
  icon: 'BrainCircuit',
  inputs: '',
  outputs: '',
  accessUrl: '',
};

// ─── Componente ────────────────────────────────────────────────────────────────

/**
 * Modal de cadastro de nova iniciativa IA.
 *
 * O formulário é dividido em 6 seções:
 * 1. Informações Básicas
 * 2. Responsabilidade e Tecnologia
 * 3. Conteúdo Detalhado
 * 4. Processo e Acesso (Inputs/Outputs/URL)
 * 5. Funcionalidades (dinâmico — N categorias × M itens)
 * 6. Benefícios e Impacto (dinâmico — N públicos × M impactos)
 */
export default function Registration({ onBack, onAdd }: RegistrationProps) {
  const [formData, setFormData] = useState<Omit<AIAgent, 'id'>>(INITIAL_FORM);

  // ─── Submissão ────────────────────────────────────────────────────────────

  /**
   * Cria um novo AIAgent com ID único baseado em timestamp e envia ao pai.
   * O ID gerado é suficiente para sessões em memória; em produção, use UUID.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAgent: AIAgent = {
      ...formData,
      id: `agent-${Date.now()}`,
    };
    onAdd(newAgent);
  };

  // ─── Handlers de Funcionalidades ─────────────────────────────────────────

  /** Adiciona uma nova categoria de funcionalidade com um item vazio. */
  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, { category: '', items: [''] }],
    }));
  };

  /** Remove a categoria de funcionalidade no índice `idx`. */
  const removeFeature = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== idx),
    }));
  };

  /** Atualiza o nome da categoria de funcionalidade no índice `fIdx`. */
  const updateFeatureCategory = (fIdx: number, category: string) => {
    const newFeatures = [...formData.features];
    newFeatures[fIdx] = { ...newFeatures[fIdx], category };
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  /** Adiciona um item vazio à categoria de funcionalidade `fIdx`. */
  const addFeatureItem = (fIdx: number) => {
    const newFeatures = [...formData.features];
    newFeatures[fIdx] = { ...newFeatures[fIdx], items: [...newFeatures[fIdx].items, ''] };
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  /** Atualiza o texto do item `iIdx` dentro da categoria `fIdx`. */
  const updateFeatureItem = (fIdx: number, iIdx: number, val: string) => {
    const newFeatures = [...formData.features];
    const updatedItems = [...newFeatures[fIdx].items];
    updatedItems[iIdx] = val;
    newFeatures[fIdx] = { ...newFeatures[fIdx], items: updatedItems };
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  // ─── Handlers de Benefícios ───────────────────────────────────────────────

  /** Adiciona um novo grupo de benefícios com um item vazio. */
  const addBenefit = () => {
    setFormData(prev => ({
      ...prev,
      benefits: [...prev.benefits, { role: '', items: [''] }],
    }));
  };

  /** Atualiza o público-alvo do grupo de benefícios no índice `idx`. */
  const updateBenefitRole = (idx: number, role: string) => {
    const newBenefits = [...formData.benefits];
    newBenefits[idx] = { ...newBenefits[idx], role };
    setFormData(prev => ({ ...prev, benefits: newBenefits }));
  };

  /** Adiciona um item de impacto vazio ao grupo de benefícios `bIdx`. */
  const addBenefitItem = (bIdx: number) => {
    const newBenefits = [...formData.benefits];
    newBenefits[bIdx] = { ...newBenefits[bIdx], items: [...newBenefits[bIdx].items, ''] };
    setFormData(prev => ({ ...prev, benefits: newBenefits }));
  };

  /** Atualiza o texto do impacto `iIdx` dentro do grupo `bIdx`. */
  const updateBenefitItem = (bIdx: number, iIdx: number, val: string) => {
    const newBenefits = [...formData.benefits];
    const updatedItems = [...newBenefits[bIdx].items];
    updatedItems[iIdx] = val;
    newBenefits[bIdx] = { ...newBenefits[bIdx], items: updatedItems };
    setFormData(prev => ({ ...prev, benefits: newBenefits }));
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">

      {/* Backdrop — clique cancela o cadastro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onBack}
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
      />

      {/* Container do modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        className="relative bg-white rounded-[32px] shadow-2xl border border-gray-100 w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
      >

        {/* ── Cabeçalho do modal ── */}
        <div className="p-8 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Cadastrar Iniciativa</h2>
            <p className="text-gray-500 text-sm font-medium">Preencha os dados para adicionar ao catálogo.</p>
          </div>
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* ── Corpo rolável com o formulário ── */}
        <div className="flex-grow overflow-y-auto p-8 no-scrollbar">
          <form id="reg-form" onSubmit={handleSubmit} className="space-y-12">

            {/* ── Seção 1: Informações Básicas ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-claro-red rounded-full" />
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider">Informações Básicas</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Nome da Iniciativa</label>
                  <input
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold"
                    placeholder="Ex: Auditor Pro"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Área Demandante</label>
                  <input
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold"
                    placeholder="Ex: Compliance"
                    value={formData.department}
                    onChange={e => setFormData({ ...formData, department: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Domínio de Negócio</label>
                  <select
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold text-sm"
                    value={formData.domain}
                    onChange={e => setFormData({ ...formData, domain: e.target.value as BusinessDomain })}
                  >
                    {DOMAINS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Tipo de Execução</label>
                  <select
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold text-sm"
                    value={formData.execution}
                    onChange={e => setFormData({ ...formData, execution: e.target.value as ExecutionType })}
                  >
                    {EXECUTIONS.map(ex => <option key={ex} value={ex}>{ex}</option>)}
                  </select>
                </div>
              </div>
            </section>

            {/* ── Seção 2: Responsabilidade e Tecnologia ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-gray-900 rounded-full" />
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider">Responsabilidade e Tecnologia</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Owner da Iniciativa</label>
                  <input
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold"
                    placeholder="Nome do Responsável"
                    value={formData.owner}
                    onChange={e => setFormData({ ...formData, owner: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email do Owner</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold"
                    placeholder="email@claro.com.br"
                    value={formData.ownerEmail}
                    onChange={e => setFormData({ ...formData, ownerEmail: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Stack Tecnológica</label>
                  <select
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold text-sm"
                    value={formData.type}
                    onChange={e => setFormData({ ...formData, type: e.target.value as AIType })}
                  >
                    {AI_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Seletor visual de ícone representativo */}
                <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">Ícone Representativo</label>
                  <div className="flex flex-wrap gap-2">
                    {ICON_OPTIONS.map(({ name, Icon }) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => setFormData({ ...formData, icon: name })}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                          formData.icon === name
                            ? 'bg-claro-red border-claro-red text-white shadow-lg shadow-claro-red/20'
                            : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-gray-100'
                        }`}
                      >
                        <Icon size={18} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── Seção 3: Conteúdo Detalhado ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-claro-red rounded-full" />
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider">Conteúdo Detalhado</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Resumo Curto (Para o Card)</label>
                  <textarea
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-medium h-20 resize-none"
                    placeholder="Breve descrição do que o agente faz..."
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Missão da Iniciativa</label>
                  <input
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold italic text-claro-red"
                    placeholder="Garantir 100% de conformidade..."
                    value={formData.mission}
                    onChange={e => setFormData({ ...formData, mission: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Descrição Completa</label>
                  <textarea
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-medium h-32"
                    placeholder="Explicação detalhada sobre a solução..."
                    value={formData.longDescription}
                    onChange={e => setFormData({ ...formData, longDescription: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* ── Seção 4: Processo e Acesso ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-gray-900 rounded-full" />
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider">Processo e Acesso</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Inputs (Entradas)</label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-medium h-24 resize-none"
                    placeholder="Ex: Documentos CAD, PDF técnico, normas..."
                    value={formData.inputs}
                    onChange={e => setFormData({ ...formData, inputs: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Outputs (Saídas)</label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-medium h-24 resize-none"
                    placeholder="Ex: Relatório de validação, lista de desvios..."
                    value={formData.outputs}
                    onChange={e => setFormData({ ...formData, outputs: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">URL de Acesso</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-claro-red focus:bg-white outline-none transition-all font-bold"
                    placeholder="https://claro.com.br/meu-agente"
                    value={formData.accessUrl}
                    onChange={e => setFormData({ ...formData, accessUrl: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* ── Seção 5: Funcionalidades (dinâmico) ── */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-gray-900 rounded-full" />
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider">Funcionalidades</h3>
                </div>
                <button
                  type="button"
                  onClick={addFeature}
                  className="px-4 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <Plus className="w-3 h-3" /> Adicionar Categoria
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.features.map((feat, fIdx) => (
                  <div key={fIdx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4">
                    {/* Cabeçalho da categoria: nome + botão de remoção */}
                    <div className="flex items-center justify-between gap-2">
                      <input
                        className="flex-grow bg-transparent border-b border-gray-200 focus:border-claro-red outline-none text-sm font-black uppercase tracking-widest py-1"
                        placeholder="Nome da Categoria"
                        value={feat.category}
                        onChange={e => updateFeatureCategory(fIdx, e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => removeFeature(fIdx)}
                        className="text-gray-300 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {/* Lista de itens da categoria */}
                    <div className="space-y-2">
                      {feat.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex gap-2">
                          <input
                            className="flex-grow px-3 py-2 bg-white rounded-xl border border-gray-100 text-xs font-bold focus:ring-1 focus:ring-claro-red outline-none"
                            placeholder="Descreva a funcionalidade"
                            value={item}
                            onChange={e => updateFeatureItem(fIdx, iIdx, e.target.value)}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addFeatureItem(fIdx)}
                        className="w-full py-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-claro-red hover:border-claro-red transition-colors"
                      >
                        + Item
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Seção 6: Benefícios e Impacto (dinâmico) ── */}
            <section className="pb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-claro-red rounded-full" />
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider">Benefícios e Impacto</h3>
                </div>
                <button
                  type="button"
                  onClick={addBenefit}
                  className="px-4 py-2 bg-claro-red text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-claro-red/20"
                >
                  <Plus className="w-3 h-3" /> Adicionar Público
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="bg-gray-900 p-6 rounded-3xl space-y-4">
                    {/* Campo do público-alvo */}
                    <input
                      className="w-full bg-transparent border-b border-white/10 focus:border-claro-red outline-none text-sm font-black uppercase tracking-widest py-1 text-claro-red"
                      placeholder="Público Beneficiado (Ex: Jurídico)"
                      value={benefit.role}
                      onChange={e => updateBenefitRole(bIdx, e.target.value)}
                    />
                    {/* Lista de impactos do público */}
                    <div className="space-y-2">
                      {benefit.items.map((item, iIdx) => (
                        <input
                          key={iIdx}
                          className="w-full px-3 py-2 bg-white/5 rounded-xl border border-white/5 text-xs font-bold text-white focus:ring-1 focus:ring-claro-red outline-none"
                          placeholder="Fale sobre o impacto"
                          value={item}
                          onChange={e => updateBenefitItem(bIdx, iIdx, e.target.value)}
                        />
                      ))}
                      <button
                        type="button"
                        onClick={() => addBenefitItem(bIdx)}
                        className="w-full py-2 border border-dashed border-white/10 rounded-xl text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                      >
                        + Impacto
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </form>
        </div>

        {/* ── Rodapé com ações do formulário ── */}
        <div className="p-8 border-t border-gray-100 flex justify-end gap-4 shrink-0 bg-gray-50/50">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-3 bg-white border border-gray-200 text-gray-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-100 transition-all"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="reg-form"
            className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            <Save className="w-4 h-4" /> Salvar Iniciativa
          </button>
        </div>

      </motion.div>
    </div>
  );
}
