import React from 'react';
import { 
  FileSearch, 
  Code, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Target, 
  Rocket, 
  Users, 
  Zap,
  Mail,
  X,
  Router,
  BarChart4,
  FileText
} from 'lucide-react';
import { AIAgent } from '../types';
import { motion } from 'motion/react';

const icons: Record<string, React.ElementType> = {
  FileSearch,
  Code,
  Activity,
  ShieldCheck,
  Router,
  BarChart4,
  FileText,
};

const RenderIcon = ({ icon, className }: { icon: string; className: string }) => {
  if (icon.includes('.')) {
    return <img src={`./${icon}`} alt="Logo" className={`${className} object-contain`} />;
  }
  const Icon = icons[icon] || Zap;
  return <Icon className={className} />;
};

interface DetailsProps {
  agent: AIAgent;
  onBack: () => void;
}

export default function Details({ agent, onBack }: DetailsProps) {

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onBack}
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        {/* Close Button */}
        <button 
          onClick={onBack}
          className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all border border-white/20 group"
          title="Fechar (Esc)"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
        </button>

        {/* Header Section */}
        <div className="bg-gradient-to-br from-claro-red to-claro-dark p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 p-2">
              <RenderIcon icon={agent.icon} className="w-full h-full text-white" />
            </div>
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-wider">
                  {agent.type}
                </span>
                <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-wider">
                  {agent.department}
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-black mb-1 tracking-tight">{agent.name}</h1>
              <p className="text-white/80 text-xs md:text-sm max-w-2xl font-medium leading-tight">
                Owner: {agent.owner} — <span className="opacity-75">{agent.ownerEmail}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Mission & Description */}
          <section className="mb-8">
            <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-claro-red rounded-full" />
              Quem é a {agent.name}?
            </h2>
            <div className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {agent.longDescription}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-50 border-l-4 border-claro-red p-4 rounded-r-2xl h-full flex items-center">
                  <p className="italic text-gray-800 font-bold tracking-tight text-sm">
                    "Missão: {agent.mission}"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Inputs & Outputs */}
          {(agent.inputs || agent.outputs) && (
            <section className="mb-8">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Inputs & Outputs</p>
              <div className="grid md:grid-cols-2 gap-3">
                {agent.inputs && (
                  <div className="bg-[#12141d] rounded-xl p-4 border border-white/5">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1 text-gray-400">Inputs</p>
                    <p className="text-gray-300 font-medium text-xs leading-snug">
                      {agent.inputs.join(', ')}
                    </p>
                  </div>
                )}
                {agent.outputs && (
                  <div className="bg-[#12141d] rounded-xl p-4 border border-white/5">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1 text-gray-400">Outputs</p>
                    <p className="text-gray-300 font-medium text-xs leading-snug">
                      {agent.outputs.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Features Grid */}
          <section className="mb-8">
            <h2 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-gray-900 rounded-full" />
              Funcionalidades & Análises
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {agent.features.map((feat, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                  <h3 className="font-black text-gray-900 mb-3 pb-2 border-b border-gray-50 text-[11px] uppercase tracking-widest flex items-center">
                    <Zap className="w-3.5 h-3.5 text-claro-red mr-2" />
                    {feat.category}
                  </h3>
                  <ul className="space-y-2">
                    {feat.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-[12px] font-medium leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-claro-red rounded-full" />
              Benefícios e Impacto
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {agent.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-900 rounded-2xl p-5 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-claro-red/20 blur-3xl -mr-12 -mt-12 group-hover:bg-claro-red/30 transition-colors" />
                  <h3 className="text-xs font-black text-claro-red mb-3 uppercase tracking-wider relative z-10">Público: {benefit.role}</h3>
                  <ul className="space-y-2 relative z-10">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-5 h-5 bg-white/10 backdrop-blur-md rounded flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-claro-red" />
                        </div>
                        <p className="text-gray-300 font-medium text-xs leading-snug">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
