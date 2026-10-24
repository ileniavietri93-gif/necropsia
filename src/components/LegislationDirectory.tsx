import React, { useState } from 'react';
import { OFFICIAL_LAWS, OfficialLaw } from '../data/autopsyData';
import { ExternalLink, Search, Scale, FileText, Check, Shield } from 'lucide-react';

export const LegislationDirectory: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = [
    { id: 'all', label: 'Todas las Normas' },
    { id: 'Clínica', label: 'Autopsia Clínica' },
    { id: 'Judicial', label: 'Ámbito Forense / LECrim' },
    { id: 'Catástrofes', label: 'Catástrofes / DVI' },
    { id: 'Bioseguridad', label: 'Bioseguridad / PRL' },
    { id: 'Policía Mortuoria', label: 'Policía Mortuoria' },
    { id: 'INTCF', label: 'Toxicología / Custodia' },
  ];

  const filteredLaws = OFFICIAL_LAWS.filter((law) => {
    const matchesTag = selectedTag === 'all' || law.tags.includes(selectedTag);
    const matchesSearch =
      law.title.toLowerCase().includes(search.toLowerCase()) ||
      law.code.toLowerCase().includes(search.toLowerCase()) ||
      law.mainAspect.toLowerCase().includes(search.toLowerCase()) ||
      law.relevanceForTechnician.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="space-y-8">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
          <span>Fuentes Oficiales y Verificables</span>
          <span aria-hidden="true">·</span>
          <span>Boletín Oficial del Estado (BOE) & Consejo de Europa</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          Compendio Legislativo y Fuentes Jurídicas Oficiales
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-4xl">
          Relación exhaustiva de las leyes, reales decretos, órdenes ministeriales y normas
          europeas que regulan la práctica necrópsica en España. Cada referencia incluye su
          identificador oficial (código ELI) para consulta y verificación directa en el BOE.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        {/* Filter tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {tags.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedTag === t.id
                  ? 'bg-teal-900 text-white font-semibold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por ley, año o materia..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Laws List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredLaws.map((law) => (
          <article
            key={law.id}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all space-y-4"
          >
            <div className="space-y-3">
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                  {law.code}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Publ.: {law.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {law.title}
              </h3>

              {/* Main Aspect Regulated */}
              <div className="space-y-1 text-xs">
                <span className="font-semibold text-slate-700 block">
                  ¿Qué aspecto de las autopsias regula?
                </span>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-100">
                  {law.mainAspect}
                </p>
              </div>

              {/* Relevance for the technician */}
              <div className="space-y-1 text-xs">
                <span className="font-semibold text-teal-900 block">
                  Relevancia práctica para el Técnico Especialista:
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {law.relevanceForTechnician}
                </p>
              </div>
            </div>

            {/* Footer with verification link */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Shield className="w-3.5 h-3.5 text-teal-700" />
                <span>Norma Oficial Vigente</span>
              </div>

              <a
                href={law.boeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>Consultar en BOE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
