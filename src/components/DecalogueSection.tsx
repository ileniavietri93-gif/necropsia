import React, { useState } from 'react';
import { DECALOGUE_POINTS, DecaloguePoint } from '../data/autopsyData';
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  FileCheck2,
  Scale,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutGrid,
  List,
  Presentation,
  BookOpen,
  Search,
} from 'lucide-react';

export const DecalogueSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'poster' | 'slides'>('cards');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const filteredPoints = DECALOGUE_POINTS.filter((point) => {
    const matchesCategory =
      selectedCategory === 'all' || point.category === selectedCategory;
    const matchesSearch =
      point.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.keyRules.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.laws.some(
        (l) =>
          l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.aspectRegulated.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const currentSlide = DECALOGUE_POINTS[currentSlideIndex];

  return (
    <section className="space-y-8">
      {/* Editorial Header Block */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-10 border border-slate-800 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-teal-400">
            <span>Guía Técnica & Marco Regulatorio</span>
            <span aria-hidden="true">·</span>
            <span>Unidad de Trabajo 2</span>
            <span aria-hidden="true">·</span>
            <span>Curso Especializado</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Decálogo Normativo y Documental de Autopsias
          </h1>
          <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
            Las 10 reglas jurídicas, procedimentales y de bioseguridad que todo técnico
            especialista debe dominar antes de preparar la sala, verificar la documentación o
            iniciar cualquier estudio necrópsico en el sistema sanitario y judicial español.
          </p>
        </div>

        {/* Quiet metadata strip */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-teal-400" />
            <span>Marco: Ley 29/1980 · RD 2330/1982 · LECrim · RD 32/2009 · R (99) 3 UE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>10 Puntos Clave</span>
            <span aria-hidden="true">·</span>
            <span>Revisión Oficial 2026</span>
          </div>
        </div>
      </div>

      {/* Control Bar: View Mode Switcher + Category Filters + Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        {/* View Mode Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              viewMode === 'cards'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Guía Detallada</span>
          </button>
          <button
            onClick={() => setViewMode('poster')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              viewMode === 'poster'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Póster Canva</span>
          </button>
          <button
            onClick={() => setViewMode('slides')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              viewMode === 'slides'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Diapositivas</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'Todos (10)' },
            { id: 'legal', label: 'Marco Legal' },
            { id: 'documental', label: 'Documentación' },
            { id: 'forense', label: 'Forense & Catástrofes' },
            { id: 'seguridad', label: 'Bioseguridad & PRL' },
            { id: 'calidad', label: 'Calidad & Custodia' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-teal-900 text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar norma, artículo o palabra clave..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* VIEW 1: Cards View (Detailed Operational Guide) */}
      {viewMode === 'cards' && (
        <div className="space-y-4">
          {filteredPoints.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
              <p className="text-slate-500 text-sm">
                No se encontraron puntos del decálogo con los filtros seleccionados.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-teal-800 font-semibold hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            filteredPoints.map((point) => {
              const isExpanded = expandedId === point.id;
              return (
                <article
                  key={point.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all hover:border-slate-300 overflow-hidden"
                >
                  {/* Card Header Bar */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : point.id)}
                    className="p-5 lg:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number Index */}
                      <span className="text-2xl lg:text-3xl font-extrabold text-teal-800 font-mono tracking-tight shrink-0 mt-0.5">
                        {point.number}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="uppercase font-semibold tracking-wider text-teal-800">
                            {point.category === 'legal' && 'Legislación Sanitaria'}
                            {point.category === 'documental' && 'Gestión Documental'}
                            {point.category === 'forense' && 'Medicina Legal y Forense'}
                            {point.category === 'seguridad' && 'Bioseguridad y Salud Laboral'}
                            {point.category === 'calidad' && 'Trazabilidad y Calidad ISO'}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>
                            {point.laws.map((l) => l.name.split(',')[0]).join(' / ')}
                          </span>
                        </div>
                        <h2 className="text-lg lg:text-xl font-bold text-slate-900">
                          {point.title}
                        </h2>
                        <p className="text-sm text-slate-600">{point.subtitle}</p>
                      </div>
                    </div>

                    <button
                      className="p-2 text-slate-400 hover:text-slate-700 transition-colors shrink-0"
                      aria-label={isExpanded ? 'Plegar' : 'Desplegar'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Highlight Banner (Always Visible) */}
                  <div className="px-5 lg:px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-start gap-3 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">
                        Regla de Oro en Sala:{' '}
                      </strong>
                      <span>{point.keyRules}</span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="p-5 lg:p-6 border-t border-slate-100 space-y-6 bg-white">
                      {/* Section 1: Normas Legales y Aspecto Regulado */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                          <Scale className="w-4 h-4 text-teal-700" />
                          <span>Leyes Aplicables y Aspecto Específico Regulado</span>
                        </h3>
                        <div className="space-y-3">
                          {point.laws.map((law, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-slate-900">
                                    {law.name}
                                  </span>
                                  <span className="text-xs font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                                    {law.articles}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  <strong className="text-slate-800">
                                    ¿Qué aspecto regula?{' '}
                                  </strong>
                                  {law.aspectRegulated}
                                </p>
                              </div>
                              <a
                                href={law.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 transition-colors whitespace-nowrap shrink-0 self-start md:self-center"
                              >
                                <span>Ver en BOE / Oficial</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section 2: Technician Responsibilities & Operations */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                          <FileCheck2 className="w-4 h-4 text-teal-700" />
                          <span>Actuación Operativa y Responsabilidad del Técnico</span>
                        </h3>
                        <ul className="space-y-2 text-xs lg:text-sm text-slate-700">
                          {point.technicalRole.map((role, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-700 mt-2 shrink-0" />
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Section 3: Legal Consequences + Glossary Concepts */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {/* Legal Consequence */}
                        <div className="p-4 bg-amber-50/60 rounded-lg border border-amber-200/80 text-xs text-amber-900 space-y-1.5">
                          <div className="flex items-center gap-2 font-bold text-amber-950">
                            <AlertTriangle className="w-4 h-4 text-amber-700" />
                            <span>Consecuencias Legales del Incumplimiento</span>
                          </div>
                          <p className="leading-relaxed">{point.consequences}</p>
                        </div>

                        {/* Acronyms & Terms */}
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                          <div className="flex items-center gap-2 font-bold text-slate-900">
                            <BookOpen className="w-4 h-4 text-teal-800" />
                            <span>Términos y Siglas Clave</span>
                          </div>
                          <div className="space-y-1.5">
                            {point.acronyms.map((ac, idx) => (
                              <div key={idx}>
                                <strong className="font-mono text-slate-900">
                                  {ac.term}:
                                </strong>{' '}
                                <span className="text-slate-600">{ac.meaning}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Canva Visual Tip */}
                      <div className="p-3 bg-teal-50/60 rounded-lg border border-teal-200 flex items-center gap-2.5 text-xs text-teal-950">
                        <Sparkles className="w-4 h-4 text-teal-700 shrink-0" />
                        <div>
                          <strong className="font-semibold">
                            Tip de Diseño para tu Decálogo Canva:{' '}
                          </strong>
                          <span>{point.canvaTip}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>
      )}

      {/* VIEW 2: Canva Poster Grid View (Editorial 10-Card Poster) */}
      {viewMode === 'poster' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Visualización estilo infografía mural de Canva (A4 / Póster)</span>
            <span>10 Mandamientos Legales del Técnico</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-teal-800">
                      #{point.number}
                    </span>
                    <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {point.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{point.subtitle}</p>
                  </div>

                  <div className="pt-2 pb-1 border-y border-slate-100 space-y-1.5">
                    <div className="text-xs font-semibold text-slate-700">
                      Normativa reguladora:
                    </div>
                    {point.laws.map((law, idx) => (
                      <div key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-teal-700 font-bold">•</span>
                        <span>
                          <strong>{law.name.split(',')[0]}</strong> ({law.articles}):{' '}
                          {law.aspectRegulated}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-teal-50/70 rounded-lg text-xs text-teal-950">
                    <strong className="block font-semibold mb-0.5">
                      Obligación del técnico:
                    </strong>
                    <p className="line-clamp-3">{point.keyRules}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate max-w-[200px]">
                    {point.acronyms.map((a) => a.term).join(' · ')}
                  </span>
                  <a
                    href={point.laws[0]?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1"
                  >
                    <span>Ver BOE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: Interactive Slide Presentation Mode (Classroom / Speaker Mode) */}
      {viewMode === 'slides' && currentSlide && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm space-y-8">
          {/* Slide Navigation Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-bold tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded">
                Diapositiva {currentSlideIndex + 1} de {DECALOGUE_POINTS.length}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-medium text-slate-500 uppercase">
                {currentSlide.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentSlideIndex === 0}
                onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Anterior diapositiva"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={currentSlideIndex === DECALOGUE_POINTS.length - 1}
                onClick={() =>
                  setCurrentSlideIndex((prev) =>
                    Math.min(DECALOGUE_POINTS.length - 1, prev + 1)
                  )
                }
                className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Siguiente diapositiva"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slide Main Body */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-extrabold font-mono text-teal-800">
                Punto {currentSlide.number}
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentSlide.title}
              </h2>
              <p className="text-base text-slate-600">{currentSlide.subtitle}</p>
            </div>

            {/* Central Box: Regla de Oro */}
            <div className="p-6 bg-slate-900 text-white rounded-xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Principio Inviolable para el Técnico Especialista
              </span>
              <p className="text-lg font-medium leading-relaxed">{currentSlide.keyRules}</p>
            </div>

            {/* Grid of details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Laws */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Marco Legal Específico
                </h3>
                <div className="space-y-2">
                  {currentSlide.laws.map((law, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1"
                    >
                      <div className="font-bold text-xs text-slate-900">{law.name}</div>
                      <div className="text-xs text-teal-800 font-mono font-medium">
                        {law.articles}
                      </div>
                      <p className="text-xs text-slate-600">{law.aspectRegulated}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Operations */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Procedimiento en Sala
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentSlide.technicalRole.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                      <span className="text-teal-700 font-bold">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Warning */}
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Implicación legal / penal: </strong>
                <span>{currentSlide.consequences}</span>
              </div>
            </div>
          </div>

          {/* Slide Footer Stepper */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Usa las flechas para navegar por el temario</span>
            <div className="flex items-center gap-1">
              {DECALOGUE_POINTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    i === currentSlideIndex
                      ? 'bg-teal-800 w-6'
                      : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Ir al punto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
