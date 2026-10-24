import React, { useState } from 'react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/autopsyData';
import { Search, BookMarked, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los Términos' },
    { id: 'siglas', label: 'Siglas Oficiales' },
    { id: 'juridico', label: 'Conceptos Jurídicos' },
    { id: 'clinico', label: 'Clínica & Patología' },
    { id: 'forense', label: 'Medicina Forense' },
  ];

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.shortDefinition.toLowerCase().includes(search.toLowerCase()) ||
      item.detailedExplanation.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="space-y-8">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
          <span>Terminología Especializada & Siglas</span>
          <span aria-hidden="true">·</span>
          <span>Diccionario Operativo del Técnico</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          Glosario Técnico, Jurídico y Desglose de Siglas
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-4xl">
          Definición rigurosa de los conceptos esenciales contemplados en la unidad de
          trabajo: taxonomía de causas de defunción (básica, intermedia, inmediata),
          distinción entre patología secundaria y accesoria, concepto estricto de autopsia
          blanca, órganos forenses y cómputo civil de parentescos.
        </p>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === c.id
                  ? 'bg-teal-900 text-white font-semibold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar término o sigla (ej. LECrim, autopsia blanca)..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Grid of Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((item, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">{item.term}</h3>
                <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  {item.category}
                </span>
              </div>

              {/* Short definition */}
              <p className="text-xs font-semibold text-teal-900 bg-teal-50/70 p-3 rounded-lg border border-teal-100">
                {item.shortDefinition}
              </p>

              {/* Detailed Explanation */}
              <div className="text-xs text-slate-700 leading-relaxed space-y-2">
                <p>{item.detailedExplanation}</p>
                {item.example && (
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-100 text-slate-600">
                    <strong className="text-slate-800">Ejemplo práctico en sala: </strong>
                    <span>{item.example}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Legal / Technical Citation */}
            {item.legalReference && (
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <FileText className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span className="truncate">Ref: {item.legalReference}</span>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Deep-Dive Box: Parentesco Civil & Diagnósticos Primarios Infographic Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        {/* Grados de Parentesco Infographic */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
              Esquema Civil Obligatorio
            </span>
            <h3 className="text-base font-bold text-slate-900">
              Cómputo de Parentesco para Autorizaciones de Autopsia
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="p-3 bg-teal-50/80 rounded-lg border border-teal-200 space-y-1">
              <strong className="text-teal-950 font-bold block">
                Prioridad Excluyente Absoluta:
              </strong>
              <p>
                <strong>Cónyuge no separado legalmente o Pareja de Hecho.</strong> Si
                presta conformidad, no se requiere la firma de otros parientes. Si se opone,
                no se puede realizar la autopsia.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                1.er Grado de Consanguinidad (Línea Recta):
              </strong>
              <p>
                <strong>Hijos</strong> (descendientes mayores de edad) y{' '}
                <strong>Padres</strong> (ascendientes). Tienen prioridad sobre cualquier otro
                familiar consanguíneo.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                1.er Grado de Afinidad (Políticos):
              </strong>
              <p>
                <strong>Suegros, yernos y nueras.</strong> Solo deciden en ausencia de
                cónyuge e hijos/padres biológicos.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                2.º Grado (Consanguinidad y Colaterales):
              </strong>
              <p>
                <strong>Hermanos, abuelos, nietos y cuñados.</strong> No pueden autorizar si
                existen parientes en 1.er grado que no hayan renunciado formalmente.
              </p>
            </div>
          </div>
        </div>

        {/* Diagnósticos Primarios Infographic */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
              Taxonomía Patológica Oficial
            </span>
            <h3 className="text-base font-bold text-slate-900">
              Secuencia Fisiopatológica de la Defunción
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                1. Causa Inicial, Fundamental o Básica:
              </strong>
              <p>
                Enfermedad o lesión originaria que puso en marcha la cadena ininterrumpida de
                acontecimientos patológicos letales.
              </p>
              <span className="text-slate-500 italic block">
                Ej: Traumatismo craneoencefálico grave o Neoplasia de colon.
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                2. Causa Intermedia (si existe):
              </strong>
              <p>
                Estado mórbido sobrevenido que actúa como puente fisiopatológico entre la
                causa inicial y la terminal.
              </p>
              <span className="text-slate-500 italic block">
                Ej: Hematoma epidural masivo o Peritonitis difusa por perforación.
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                3. Causa Directa o Inmediata:
              </strong>
              <p>
                El fallo orgánico final que extingue directamente las funciones vitales.
              </p>
              <span className="text-slate-500 italic block">
                Ej: Enclavamiento amigdalino con parada bulbar o Shock séptico refractario.
              </span>
            </div>

            <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200 space-y-1 text-amber-950">
              <strong className="font-bold block">
                Importante para la cumplimentación del CMD:
              </strong>
              <p>
                Nunca debe consignarse como causa directa de muerte meros mecanismos de parada
                (como 'parada cardiorrespiratoria' o 'asistolia') sin el diagnóstico lesional
                subyacente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
