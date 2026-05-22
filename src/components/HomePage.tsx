import { motion } from 'motion/react';
import React from 'react';
import {
  FileText,
  Settings,
  Globe,
  Users,
  Rocket,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface HomePageProps {
  onNavigateToCatalog: () => void;
  onNavigateToFacilitador: () => void;
  onNavigateToExperimento: () => void;
}

export default function HomePage({
  onNavigateToCatalog,
  onNavigateToFacilitador,
  onNavigateToExperimento
}: HomePageProps) {

  // Componente auxiliar para renderizar os cards
  const renderCard = (
    title: string,
    description: string,
    sublabel: string,
    Icon: any,
    actions: React.ReactNode,
    delay: number = 0,
    isCentral: boolean = false
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`bg-white border rounded-2xl shadow-sm p-6 w-[260px] min-h-[220px] flex flex-col items-center text-center relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isCentral ? 'border-claro-red/50 ring-2 ring-claro-red/10' : 'border-gray-200'}`}
    >
      <div className="w-14 h-14 bg-red-50 text-claro-red rounded-full flex items-center justify-center mb-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Icon className="w-7 h-7 relative z-10" />
      </div>

      <h3 className="text-lg font-black text-gray-900 mb-2">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow">{description}</p>

      {sublabel && (
        <div className="text-[10px] font-bold text-claro-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full mb-2">
          {sublabel}
        </div>
      )}

      <div className="mt-auto w-full flex flex-col gap-2">
        {actions}
      </div>
    </motion.div>
  );

  const horizontalArrow = (delay: number) => (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="flex-shrink-0 mx-2 my-4 lg:my-0 origin-left"
    >
      <div className="hidden lg:flex items-center gap-0">
        <div className="h-1 w-12 bg-gradient-to-r from-claro-red to-claro-red rounded-full" />
        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-claro-red -ml-1" />
      </div>
      <div className="flex lg:hidden flex-col items-center">
        <div className="w-1 h-8 bg-claro-red rounded-full" />
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-claro-red -mt-1" />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      {/* ── Cabeçalho ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onNavigateToCatalog}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-claro-red hover:border-claro-red/30 hover:bg-red-50 transition-all shadow-sm flex-shrink-0"
            title="Voltar ao Catálogo"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <img src="/ESO-logo.png" alt="ESO Logo" className="h-12 object-contain" />
            <p className="text-sm font-bold text-gray-500 leading-tight">Eficiência e Suporte Operacional</p>
          </div>
          <div className="ml-auto hidden sm:flex items-center">
            <img src="/claro-logo.png" alt="Claro" className="h-10 object-contain" />
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 flex flex-col items-center justify-center overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1.5 bg-claro-red rounded-full mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Fluxo de <span className="text-claro-red">Catalogação</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            Processo integrado de ideação, avaliação e disponibilização das iniciativas de IA e Automação da companhia.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full">

          {/* Passo 1: Cadastro */}
          <a href="https://apps.powerapps.com/play/e/default-55247d4b-b435-47a5-881b-ca7627434e79/a/53cfb538-c10e-4ad9-b70a-96395f3e78af?tenantId=55247d4b-b435-47a5-881b-ca7627434e79" target="_blank" rel="noopener noreferrer" className="outline-none block">
            {renderCard(
              'Cadastro',
              'Registro padronizado do caso de uso',
              'Área',
              FileText,
              null,
              0
            )}
          </a>

          {horizontalArrow(0.2)}

          {/* Passo 2: Refinamento */}
          {renderCard(
            'Refinamento',
            'Conversa técnica com a área de origem',
            'Área + Ponto Focal',
            Settings,
            <button
              onClick={(e) => {
                e.preventDefault();
                onNavigateToFacilitador();
              }}
              className="mt-2 flex items-center justify-center gap-2 text-xs font-bold bg-gray-50 text-gray-700 hover:bg-claro-red hover:text-white active:bg-red-800 border border-gray-200 hover:border-claro-red py-2.5 px-4 rounded-lg w-full transition-all group-button"
            >
              Ver Facilitador <ArrowRight className="w-4 h-4" />
            </button>,
            0.1
          )}

          {horizontalArrow(0.3)}

          {/* Passo 3: Avaliação de Escalabilidade */}
          {renderCard(
            'Avaliação de Escalabilidade',
            'Análise da aplicação de IA',
            'Ponto Focal',
            Globe,
            <button
              onClick={(e) => {
                e.preventDefault();
                onNavigateToFacilitador();
              }}
              className="mt-2 flex items-center justify-center gap-2 text-xs font-bold bg-gray-50 text-gray-700 hover:bg-claro-red hover:text-white active:bg-red-800 border border-gray-200 hover:border-claro-red py-2.5 px-4 rounded-lg w-full transition-all group-button"
            >
              Ver Facilitador <ArrowRight className="w-4 h-4" />
            </button>,
            0.2,
            true // Marca como central/destacado
          )}

          {/* Ramificação para Desktop (Angular e mais clara) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden lg:flex flex-col justify-center h-[280px] mx-2 relative w-16"
          >
            {/* Linha principal horizontal */}
            <div className="absolute left-0 top-[138px] w-6 h-1 bg-claro-red" />

            {/* Linha vertical que divide */}
            <div className="absolute left-6 top-[38px] w-1 h-[202px] bg-claro-red" />

            {/* Ramo Superior */}
            <div className="absolute left-6 top-[38px] w-10 h-1 bg-claro-red" />
            <div className="absolute right-0 top-[32px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-claro-red" />

            {/* Ramo Inferior */}
            <div className="absolute left-6 top-[238px] w-10 h-1 bg-claro-red" />
            <div className="absolute right-0 top-[232px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-claro-red" />
          </motion.div>

          {/* Ramificação Mobile */}
          <div className="flex lg:hidden flex-col items-center w-full py-4 relative">
            <div className="w-1 h-12 bg-claro-red rounded-full" />
          </div>

          <div className="flex lg:hidden flex-col items-center">
            {horizontalArrow(0.5)}
          </div>

          {/* Coluna Final com 2 opções */}
          <div className="flex flex-col gap-8 lg:gap-[40px] items-center">

            {/* Opção A: Inovação Local */}
            {renderCard(
              'Inovação Local',
              'Aproveitamento via Copilot e ganho de produtividade',
              '',
              Users,
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToCatalog();
                }}
                className="mt-2 flex items-center justify-center gap-2 text-xs font-bold bg-claro-red text-white hover:bg-red-700 active:bg-red-800 border border-transparent py-2.5 px-4 rounded-lg w-full transition-all"
              >
                Abrir Catálogo <ArrowRight className="w-4 h-4" />
              </button>,
              0.4
            )}

            {/* Setinha extra no mobile para a segunda opção */}
            <div className="flex lg:hidden flex-col items-center">
              {horizontalArrow(0.6)}
            </div>

            {/* Opção B: Experimento */}
            {renderCard(
              'Experimento com BeOn Labs/TI',
              'Alto potencial que gera impacto relevante no fluxo de trabalho',
              '',
              Rocket,
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToExperimento();
                }}
                className="mt-2 flex items-center justify-center gap-2 text-xs font-bold bg-gray-50 text-gray-700 hover:bg-claro-red hover:text-white active:bg-red-800 border border-gray-200 hover:border-claro-red py-2.5 px-4 rounded-lg w-full transition-all"
              >
                Status Imersão <ArrowRight className="w-4 h-4" />
              </button>,
              0.5
            )}
          </div>
        </div>
      </main>

      <footer className="mt-auto bg-white border-t border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-xs font-bold text-gray-900">© 2026 Eficiência e Suporte Operacional</p>
        </div>
      </footer>
    </div>
  );
}