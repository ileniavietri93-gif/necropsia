import React, { useState } from 'react';
import { Header } from './components/Header';
import { DecalogueSection } from './components/DecalogueSection';
import { ModalitiesSection } from './components/ModalitiesSection';
import { SimulatorSection } from './components/SimulatorSection';
import { LegislationDirectory } from './components/LegislationDirectory';
import { GlossarySection } from './components/GlossarySection';
import { CanvaPrintModal } from './components/CanvaPrintModal';
import {
  Scale,
  ShieldCheck,
  FileText,
  HelpCircle,
  BookOpen,
  Printer,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('decalogo');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Top Bar following Top Bar Contract */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Sub-Header Breadcrumb / Quick Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-slate-200/80 text-xs text-slate-500 no-print">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-teal-800">UT 2</span>
            <span aria-hidden="true">·</span>
            <span>Documentación y Legislación de Autopsias</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-700 font-medium">Guía para el Técnico Especialista</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="inline-flex items-center gap-1.5 font-semibold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Plantilla Canva & Exportador</span>
            </button>
          </div>
        </div>

        {/* Dynamic Section Rendering */}
        {activeSection === 'decalogo' && <DecalogueSection />}
        {activeSection === 'modalidades' && <ModalitiesSection />}
        {activeSection === 'simulador' && <SimulatorSection />}
        {activeSection === 'leyes' && <LegislationDirectory />}
        {activeSection === 'glosario' && <GlossarySection />}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-10 px-6 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-lg">
            <div className="font-bold text-slate-800 text-sm">
              Decálogo y Guía Normativa de Autopsias
            </div>
            <p className="leading-relaxed">
              Recurso interactivo y documental para técnicos de Anatomía Patológica, Citodiagnóstico y Medicina Forense. Basado en la legislación vigente del BOE, Ley de Enjuiciamiento Criminal y Protocolos Europeos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <button
              onClick={() => setActiveSection('decalogo')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Decálogo
            </button>
            <button
              onClick={() => setActiveSection('modalidades')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Modalidades
            </button>
            <button
              onClick={() => setActiveSection('leyes')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Fuentes BOE
            </button>
            <button
              onClick={() => setActiveSection('glosario')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Glosario
            </button>
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="font-semibold text-teal-800 hover:underline cursor-pointer"
            >
              Exportar Guía
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            <span>Curso Especializado 2026/2027 · Formación Profesional Sanitaria</span>
          </div>
          <div>
            <span>Normativa consolidada de aplicación en territorio nacional (España)</span>
          </div>
        </div>
      </footer>

      {/* Canva Export / Print Modal */}
      <CanvaPrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </div>
  );
}
