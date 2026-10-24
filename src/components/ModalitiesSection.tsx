import React, { useState } from 'react';
import { AUTOPSY_MODALITIES } from '../data/autopsyData';
import {
  FileText,
  Scale,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  Stethoscope,
  Users,
  Eye,
} from 'lucide-react';

export const ModalitiesSection: React.FC = () => {
  const [selectedModalityId, setSelectedModalityId] = useState<string>('clinica-adultos');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  const currentModality =
    AUTOPSY_MODALITIES.find((m) => m.id === selectedModalityId) || AUTOPSY_MODALITIES[0];

  const toggleCheckItem = (item: string) => {
    setChecklist((prev) => ({
      ...prev,
      [`${selectedModalityId}_${item}`]: !prev[`${selectedModalityId}_${item}`],
    }));
  };

  const allRequiredChecked = currentModality.priorDocs.every(
    (doc) => checklist[`${selectedModalityId}_${doc}`]
  );

  return (
    <section className="space-y-8">
      {/* Editorial Header */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
          <span>Clasificación Técnica y Régimen Jurídico</span>
          <span aria-hidden="true">·</span>
          <span>Tipología de Estudios Necrópsicos</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          Modalidades de Autopsias y Protocolos de Verificación
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-4xl">
          Cada tipo de autopsia responde a un marco jurídico propio, con diferentes
          autoridades ordenantes, requerimientos documentales indispensables y niveles de
          bioseguridad. Consulta las especificaciones de cada modalidad y valida los
          requisitos en el verificador de sala.
        </p>
      </div>

      {/* Tabs for modalities */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {AUTOPSY_MODALITIES.map((mod) => (
          <button
            key={mod.id}
            onClick={() => setSelectedModalityId(mod.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              selectedModalityId === mod.id
                ? 'bg-teal-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {mod.name}
          </button>
        ))}
      </div>

      {/* Modality Detailed Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Legal and Technical Specifications */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 shadow-xs">
            {/* Title & Core Distinction */}
            <div className="border-b border-slate-100 pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
                  Ficha Técnica Oficial
                </span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded font-semibold ${
                    currentModality.familyAuthorizationNeeded
                      ? 'bg-amber-50 text-amber-900 border border-amber-200'
                      : 'bg-indigo-50 text-indigo-900 border border-indigo-200'
                  }`}
                >
                  {currentModality.familyAuthorizationNeeded
                    ? 'Requiere Autorización Familiar'
                    : 'Orden Judicial Directa (Sin Permiso Fam.)'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{currentModality.name}</h3>
            </div>

            {/* Matrix of Core Properties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Building2 className="w-3.5 h-3.5 text-teal-700" />
                  <span>Autoridad Competente</span>
                </div>
                <p className="text-slate-600">{currentModality.competentAuthority}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
                  <span>Facultativo Responsable</span>
                </div>
                <p className="text-slate-600">{currentModality.executor}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Scale className="w-3.5 h-3.5 text-teal-700" />
                  <span>Base Legal Primaria</span>
                </div>
                <p className="text-slate-600">{currentModality.legalBasis.join(' · ')}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Users className="w-3.5 h-3.5 text-teal-700" />
                  <span>Coste Económico</span>
                </div>
                <p className="text-slate-600">{currentModality.costCoverage}</p>
              </div>
            </div>

            {/* Technical Key Points */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Puntos Clave para la Práctica del Técnico
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {currentModality.technicalKeyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing & Registration */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Cierre, Registro e Informes Finales
              </h4>
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs text-slate-700">
                {currentModality.closingDocs.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specific Risks */}
            <div className="p-4 bg-rose-50/70 rounded-lg border border-rose-200 text-xs text-rose-950 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-rose-900">
                <ShieldAlert className="w-4 h-4 text-rose-700" />
                <span>Riesgos Específicos a Prevenir</span>
              </div>
              <p>{currentModality.specificRisks.join(' · ')}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Document Verification Simulator (Cuadro 2.1) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 shadow-xs sticky top-20">
            <div className="border-b border-slate-100 pb-3 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <FileText className="w-4 h-4 text-teal-700" />
                <span>Verificador Previo de Sala (Cuadro 2.1)</span>
              </div>
              <p className="text-xs text-slate-500">
                Haz clic en los documentos que han sido recibidos para comprobar si la sala
                está legalmente habilitada para comenzar.
              </p>
            </div>

            {/* Document Checklist */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-slate-700 block">
                Documentación Previa Imprescindible:
              </span>
              {currentModality.priorDocs.map((doc, idx) => {
                const key = `${selectedModalityId}_${doc}`;
                const isChecked = !!checklist[key];
                return (
                  <label
                    key={idx}
                    onClick={() => toggleCheckItem(doc)}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all select-none text-xs ${
                      isChecked
                        ? 'bg-teal-50/80 border-teal-300 text-teal-950 font-medium'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 rounded text-teal-700 focus:ring-teal-700 h-4 w-4 shrink-0"
                    />
                    <span>{doc}</span>
                  </label>
                );
              })}
            </div>

            {/* Status Gate Banner */}
            <div
              className={`p-4 rounded-xl border text-xs space-y-2 transition-all ${
                allRequiredChecked
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                {allRequiredChecked ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>AUTORIZADO PARA PROCEDER</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>BLOQUEO DE SALA: EXPEDIENTE INCOMPLETO</span>
                  </>
                )}
              </div>
              <p className="leading-relaxed">
                {allRequiredChecked
                  ? 'Toda la documentación legal y facultativa preceptiva ha sido verificada. El técnico puede preparar el instrumental y colaborar con el patólogo o forense.'
                  : 'Faltan documentos obligatorios según el RD 2330/1982 o LECrim. Queda prohibida terminantemente cualquier incisión o maniobra sobre el cuerpo hasta subsanar el expediente.'}
              </p>
            </div>

            {/* Quick Reset Button */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>{currentModality.priorDocs.length} documentos requeridos</span>
              <button
                onClick={() => {
                  const newCheck = { ...checklist };
                  currentModality.priorDocs.forEach((d) => {
                    delete newCheck[`${selectedModalityId}_${d}`];
                  });
                  setChecklist(newCheck);
                }}
                className="text-teal-800 hover:underline font-semibold cursor-pointer"
              >
                Limpiar verificación
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Synthesis Table */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="space-y-0.5">
            <h3 className="text-base font-bold text-slate-900">
              Cuadro Comparativo Global de Autopsias en España
            </h3>
            <p className="text-xs text-slate-500">
              Síntesis del régimen normativo comparado para técnicos de anatomía patológica y
              forense
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">UT 2 · Síntesis</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                <th className="p-3 whitespace-nowrap">Modalidad</th>
                <th className="p-3 whitespace-nowrap">Normativa Clave</th>
                <th className="p-3 whitespace-nowrap">¿Quién la ordena?</th>
                <th className="p-3 whitespace-nowrap">¿Quién la ejecuta?</th>
                <th className="p-3 whitespace-nowrap">Permiso Familiar</th>
                <th className="p-3 whitespace-nowrap">Coste</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                  Autopsia Clínica
                </td>
                <td className="p-3">Ley 29/1980 · RD 2330/1982</td>
                <td className="p-3">Médico facultativo hospitalario</td>
                <td className="p-3">Médico Anatomopatólogo</td>
                <td className="p-3 font-semibold text-teal-800">Obligatorio por escrito</td>
                <td className="p-3">Hospital (100% gratuito)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                  Autopsia Judicial
                </td>
                <td className="p-3">LECrim (arts. 343, 778) · RD 144/2023</td>
                <td className="p-3">Juez de Instrucción</td>
                <td className="p-3">Médico Forense (IMLCF)</td>
                <td className="p-3 font-semibold text-rose-800">Irrelevante / No procede</td>
                <td className="p-3">Admón. de Justicia</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                  Autopsia Fetal
                </td>
                <td className="p-3">RD 2330/1982 · Ley 20/2011 Registro Civil</td>
                <td className="p-3">Obstetra / Neonatólogo</td>
                <td className="p-3">Patólogo Pediátrico</td>
                <td className="p-3 font-semibold text-teal-800">Obligatorio (Padres)</td>
                <td className="p-3">Hospital (100% gratuito)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                  Grandes Catástrofes
                </td>
                <td className="p-3">Real Decreto 32/2009 · DVI INTERPOL</td>
                <td className="p-3">Juez Encargado de Catástrofe</td>
                <td className="p-3">IMLCF + INTCF + Policía Científica</td>
                <td className="p-3 font-semibold text-rose-800">Irrelevante (DVI científico)</td>
                <td className="p-3">Estado / Emergencias</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                  Alto Riesgo Biológico
                </td>
                <td className="p-3">RD 664/1997 · Ley 33/2011 Salud Pública</td>
                <td className="p-3">Comité Sanitario o Juez</td>
                <td className="p-3">Equipo BSL-3 capacitado</td>
                <td className="p-3">Según origen clínico o judicial</td>
                <td className="p-3">Sistema Sanitario</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
