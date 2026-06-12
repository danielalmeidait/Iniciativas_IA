/**
 * @file ExperimentoPage.tsx
 * @description Página "Status das iniciativas da Imersão" - Fluxo de Experimentação e Pilotagem.
 */

import { motion } from 'motion/react';

interface ExperimentoPageProps {
  onBack: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function ExperimentoPage({ onBack }: ExperimentoPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      {/* ── Cabeçalho ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          {/* Botão Voltar - Primeiro item */}
          <button
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-[#da291c] hover:border-[#da291c]/30 hover:bg-red-50 transition-all shadow-sm flex-shrink-0"
            title="Voltar"
            aria-label="Voltar"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Logo ESO + Título */}
          <div className="flex items-center gap-3">
            <img src="/ESO-logo.png" alt="ESO Logo" className="h-12 object-contain" />
            <p className="text-sm font-bold text-gray-500 leading-tight">Eficiência e Suporte Operacional</p>
          </div>

          {/* Logo Claro - Canto Direito */}
          <div className="ml-auto hidden sm:flex items-center">
            <img src="/claro-logo.png" alt="Claro" className="h-10 object-contain" />
          </div>
        </div>
      </header>

      {/* ── Conteúdo Principal ──────────────────────────────────────────── */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10 overflow-hidden">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-between items-start"
        >
          <div>
            <h1 className="text-xl sm:text-3xl font-black text-[#a61d15] leading-tight mb-1">
              Status das iniciativas da Imersão
            </h1>
            <h2 className="text-sm sm:text-lg font-semibold text-gray-400">
              Fluxo de Experimentação e Pilotagem
            </h2>
          </div>
        </motion.div>

        {/* ── Diagrama Mobile (< md) ─────────────────────────────────────── */}
        <div className="md:hidden mt-6 flex flex-col gap-5">

          {/* Etapas como stepper vertical */}
          <div className="flex flex-col gap-1.5">
            {([
              { label: 'Iniciativas', color: '#a61d15' },
              { label: 'Apresentação da Iniciativa', color: '#b92b27' },
              { label: 'Refinamento', color: '#b92b27' },
              { label: 'Experimentação', color: '#b92b27' },
              { label: 'Comitê Executivo', color: '#a61d15' },
              { label: 'Piloto', color: '#a61d15' },
              { label: 'Adoção / Produto', color: '#a61d15' },
            ] as const).map((stage, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-black text-white shadow"
                  style={{ backgroundColor: stage.color }}
                >
                  {i + 1}
                </div>
                <div
                  className="flex-1 py-1.5 px-3 rounded-md text-xs font-bold text-white"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grupos BeOn Labs / IA BD */}
          <div className="flex gap-2">
            <div className="flex-1 bg-[#1e293b]/10 border border-[#1e293b]/20 rounded-lg py-1.5 text-center text-[9px] font-black text-[#1e293b] uppercase tracking-wide">BeOn Labs</div>
            <div className="flex-1 bg-[#1e293b]/10 border border-[#1e293b]/20 rounded-lg py-1.5 text-center text-[9px] font-black text-[#1e293b] uppercase tracking-wide">IA BD</div>
          </div>

          {/* Cards por fase */}
          <div className="grid grid-cols-2 gap-3">

            {/* Iniciativas */}
            <div className="col-span-2">
              <p className="text-[9px] uppercase font-black text-[#a61d15] tracking-wider mb-1.5">Iniciativas</p>
              <div className="grid grid-cols-2 gap-2">
                {['Backbone', 'Instalação', 'Qualidade', 'Viabilidade'].map(item => (
                  <div key={item} className="bg-white border border-gray-200 rounded-md shadow-sm py-2 text-center text-xs text-gray-700 font-medium">{item}</div>
                ))}
              </div>
              <div className="mt-2 bg-[#1e293b] text-white rounded-md shadow-md py-3 flex flex-col items-center justify-center border-b-4 border-[#0f172a]">
                <div className="text-xl font-black leading-none">7</div>
                <div className="text-[10px] uppercase font-bold text-gray-300">Iniciativas</div>
              </div>
            </div>

            {/* Refinamento */}
            <div>
              <p className="text-[9px] uppercase font-black text-[#b92b27] tracking-wider mb-1.5">Refinamento</p>
              <div className="flex flex-col gap-2">
                <div className="bg-white border border-gray-200 rounded-md shadow-sm py-2 px-1 text-center text-xs text-gray-700 font-medium">Coordenação (IAGO)</div>
                <div className="bg-white border border-gray-200 rounded-md shadow-sm py-2 px-1 text-center text-xs text-gray-700 font-medium">Controle de Ações</div>
              </div>
            </div>

            {/* Experimentação */}
            <div>
              <p className="text-[9px] uppercase font-black text-[#b92b27] tracking-wider mb-1.5">Experimentação</p>
              <div className="relative bg-white border border-gray-200 rounded-md shadow-sm py-2 px-1 text-center text-xs text-gray-700 font-medium">
                Recuperação (ISA)
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full border border-white" />
              </div>
            </div>

          </div>
        </div>

        {/* ── Diagrama Desktop (≥ md) ─────────────────────────────────────── */}
        <div className="hidden md:block relative mt-10 pb-10">

          {/* Brackets Superiores */}
          <div className="absolute top-[-40px] left-0 w-full flex text-sm font-bold">
            <div className="absolute left-[30%] w-[27%] border-t border-l border-r border-[#da291c] h-4 rounded-t-sm flex justify-center items-start">
              <div className="bg-[#1e293b] text-white px-4 py-1 rounded-sm -mt-3 text-xs tracking-wide">
                BeOn Labs
              </div>
            </div>
            <div className="absolute left-[60%] w-[38%] border-t border-l border-r border-[#da291c]/50 h-4 rounded-t-sm flex justify-center items-start">
              <div className="bg-[#1e293b] text-white px-4 py-1 rounded-sm -mt-3 text-xs tracking-wide">
                IA BD
              </div>
            </div>
          </div>

          {/* Chevrons */}
          <div className="flex w-full items-stretch h-16 text-white font-bold text-xs text-center">

            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="relative flex-1 bg-[#a61d15] flex items-center justify-center pl-4 pr-6">
              Iniciativas
              <div className="absolute -right-[15px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-[#a61d15] z-10"></div>
            </motion.div>

            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp} className="relative flex-1 bg-[#b92b27] flex items-center justify-center pl-8 pr-6 ml-1">
              <div className="absolute -left-[1px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-gray-50 z-0"></div>
              Apresentação da<br />Iniciativa
              <div className="absolute -right-[15px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-[#b92b27] z-10"></div>
            </motion.div>

            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="relative flex-1 bg-[#b92b27] flex items-center justify-center pl-8 pr-6 ml-1">
              <div className="absolute -left-[1px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-gray-50 z-0"></div>
              Refinamento
              <div className="absolute -right-[15px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-[#b92b27] z-10"></div>
            </motion.div>

            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="relative flex-1 bg-[#b92b27] flex items-center justify-center pl-8 pr-6 ml-1">
              <div className="absolute -left-[1px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-gray-50 z-0"></div>
              Experimentação
              <div className="absolute -right-[15px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-[#b92b27] z-10"></div>
            </motion.div>

            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="relative flex-1 bg-[#a61d15] flex items-center justify-center pl-8 pr-6 ml-1">
              <div className="absolute -left-[1px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-gray-50 z-0"></div>
              Comitê Executivo
              <div className="absolute -right-[15px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-[#a61d15] z-10"></div>
            </motion.div>

            <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="relative flex-1 bg-[#a61d15] flex items-center justify-center pl-8 pr-6 ml-1">
              <div className="absolute -left-[1px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-gray-50 z-0"></div>
              Piloto
              <div className="absolute -right-[15px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-[#a61d15] z-10"></div>
            </motion.div>

            <motion.div custom={6} initial="hidden" animate="visible" variants={fadeUp} className="relative flex-1 bg-[#a61d15] flex items-center justify-center pl-8 ml-1">
              <div className="absolute -left-[1px] top-0 w-0 h-0 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent border-l-[16px] border-l-gray-50 z-0"></div>
              Adoção/Produto
            </motion.div>
          </div>

          {/* Elementos abaixo dos chevrons */}
          <div className="mt-8 flex w-full relative">

            {/* Coluna 1: Iniciativas */}
            <div className="flex-1 flex flex-col gap-2 items-center relative">
              <div className="absolute left-[50%] top-[-32px] w-[1px] h-[32px] bg-[#da291c] z-[-1]"></div>
              <motion.div custom={7} initial="hidden" animate="visible" variants={fadeUp} className="w-3/4 bg-white border border-gray-200 rounded-md shadow-sm py-2 min-h-[48px] flex items-center justify-center text-center text-xs text-gray-700 font-medium">Backbone</motion.div>
              <motion.div custom={8} initial="hidden" animate="visible" variants={fadeUp} className="w-3/4 bg-white border border-gray-200 rounded-md shadow-sm py-2 min-h-[48px] flex items-center justify-center text-center text-xs text-gray-700 font-medium">Instalação</motion.div>
              <motion.div custom={9} initial="hidden" animate="visible" variants={fadeUp} className="w-3/4 bg-white border border-gray-200 rounded-md shadow-sm py-2 min-h-[48px] flex items-center justify-center text-center text-xs text-gray-700 font-medium">Qualidade</motion.div>
              <motion.div custom={10} initial="hidden" animate="visible" variants={fadeUp} className="w-3/4 bg-white border border-gray-200 rounded-md shadow-sm py-2 min-h-[48px] flex items-center justify-center text-center text-xs text-gray-700 font-medium">Viabilidade</motion.div>
              <motion.div custom={11} initial="hidden" animate="visible" variants={fadeUp} className="mt-2 w-3/4 bg-[#1e293b] text-white rounded-md shadow-md py-3 min-h-[48px] flex flex-col items-center justify-center text-center border-b-4 border-[#0f172a]">
                <div className="text-xl font-black leading-none">7</div>
                <div className="text-[10px] uppercase font-bold text-gray-300">Iniciativas</div>
              </motion.div>
            </div>

            {/* Coluna 2: Vazia */}
            <div className="flex-1 relative">
              <div className="absolute left-[50%] top-[-32px] w-[1px] h-[150px] bg-[#da291c]/50 z-[-1]"></div>
            </div>

            {/* Coluna 3: Refinamento */}
            <div className="flex-1 flex flex-col gap-2 items-center relative">
              <div className="absolute left-[50%] top-[-32px] w-[1px] h-[32px] bg-[#da291c] z-[-1]"></div>
              <motion.div custom={12} initial="hidden" animate="visible" variants={fadeUp} className="w-3/4 bg-white border border-gray-200 rounded-md shadow-sm py-2 min-h-[48px] flex items-center justify-center text-center text-xs text-gray-700 font-medium">Coordenação<br />(IAGO)</motion.div>
              <motion.div custom={13} initial="hidden" animate="visible" variants={fadeUp} className="w-3/4 bg-white border border-gray-200 rounded-md shadow-sm py-2 min-h-[48px] flex items-center justify-center text-center text-xs text-gray-700 font-medium">Controle de Ações</motion.div>
              <div className="absolute left-[50%] top-[90px] w-[1px] h-[60px] bg-[#da291c]/50 z-[-1]"></div>
            </div>

            {/* Coluna 4: Experimentação */}
            <div className="flex-1 flex flex-col gap-2 items-center relative">
              <div className="absolute left-[50%] top-[-32px] w-[1px] h-[32px] bg-[#da291c] z-[-1]"></div>
              <motion.div custom={14} initial="hidden" animate="visible" variants={fadeUp} className="w-[90%] bg-white border border-gray-200 rounded-md shadow-sm py-2 min-h-[48px] flex items-center justify-center text-center text-xs text-gray-700 font-medium relative">
                Recuperação (ISA)
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full border border-white"></div>
              </motion.div>
              <div className="absolute left-[50%] top-[40px] w-[1px] h-[110px] bg-[#da291c]/50 z-[-1]"></div>
            </div>

            {/* Colunas 5, 6, 7 com linhas verticais finas */}
            <div className="flex-1 relative">
              <div className="absolute left-[50%] top-[-32px] w-[1px] h-[150px] bg-[#da291c]/50 z-[-1]"></div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute left-[50%] top-[-32px] w-[1px] h-[150px] bg-[#da291c]/50 z-[-1]"></div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute left-[50%] top-[-32px] w-[1px] h-[150px] bg-[#da291c]/50 z-[-1]"></div>
            </div>

          </div>
        </div>
      </main>

      <footer className="mt-auto bg-white border-t border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-xs font-bold text-gray-900">© 2026 | ESO -Eficiência e Suporte Operacional</p>
        </div>
      </footer>
    </div>
  );
}
