import React from 'react';
import { Printer } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenPrintModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  onOpenPrintModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-3.5 no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('decalogo');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-teal-700 transition-colors"
        >
          Decálogo Normativo de Autopsias
        </a>

        {/* Zone 2: 4-5 Navigation Links (single line, unboxed, subtle hover) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveSection('decalogo')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'decalogo'
                ? 'text-teal-700 font-semibold border-b-2 border-teal-700'
                : 'hover:text-slate-900'
            }`}
          >
            Decálogo
          </button>
          <button
            onClick={() => setActiveSection('modalidades')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'modalidades'
                ? 'text-teal-700 font-semibold border-b-2 border-teal-700'
                : 'hover:text-slate-900'
            }`}
          >
            Tipos de Autopsia
          </button>
          <button
            onClick={() => setActiveSection('simulador')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'simulador'
                ? 'text-teal-700 font-semibold border-b-2 border-teal-700'
                : 'hover:text-slate-900'
            }`}
          >
            Simulador Técnico
          </button>
          <button
            onClick={() => setActiveSection('leyes')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'leyes'
                ? 'text-teal-700 font-semibold border-b-2 border-teal-700'
                : 'hover:text-slate-900'
            }`}
          >
            Leyes y BOE
          </button>
          <button
            onClick={() => setActiveSection('glosario')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
              activeSection === 'glosario'
                ? 'text-teal-700 font-semibold border-b-2 border-teal-700'
                : 'hover:text-slate-900'
            }`}
          >
            Glosario y Siglas
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPrintModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exportar Guía Canva / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
