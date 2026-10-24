import React, { useState } from 'react';
import { DECALOGUE_POINTS, AUTOPSY_MODALITIES, OFFICIAL_LAWS } from '../data/autopsyData';
import { X, Printer, Copy, Check, FileDown, ShieldCheck, Scale, ExternalLink } from 'lucide-react';

interface CanvaPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CanvaPrintModal: React.FC<CanvaPrintModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    let text = `# DECÁLOGO NORMATIVO Y DOCUMENTAL DE AUTOPSIAS\n`;
    text += `## Guía Operativa de Legislación, Gestión Documental y Bioseguridad para el Técnico Especialista\n\n`;
    text += `Unidad de Trabajo 2 · Documentación y Legislación de Autopsias\n\n`;

    DECALOGUE_POINTS.forEach((p) => {
      text += `### ${p.number}. ${p.title}\n`;
      text += `*Subtítulo:* ${p.subtitle}\n`;
      text += `*Regla de Oro en Sala:* ${p.keyRules}\n`;
      text += `*Marco Legal:*\n`;
      p.laws.forEach((l) => {
        text += `- ${l.name} (${l.articles}): Regula ${l.aspectRegulated}. Enlace: ${l.url}\n`;
      });
      text += `*Actuación del Técnico:*\n`;
      p.technicalRole.forEach((r) => {
        text += `- ${r}\n`;
      });
      text += `*Consecuencias legales:* ${p.consequences}\n\n`;
    });

    text += `## FUENTES OFICIALES VERIFICABLES (BOE / UE)\n`;
    OFFICIAL_LAWS.forEach((law) => {
      text += `- ${law.title}: ${law.boeUrl}\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs overflow-y-auto">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Top Bar (No-Print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between no-print shrink-0">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-sm">
              Visor de Documento Canva-Ready & Exportador PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              title="Copiar texto para pegar en Canva"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar para Canva</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-700 hover:bg-teal-600 text-white transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar como PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Body (Printable A4 Style) */}
        <div className="p-8 lg:p-12 overflow-y-auto space-y-8 bg-slate-50 print:bg-white print:p-0">
          {/* Printable Document Sheet */}
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-slate-200 print:border-none print:shadow-none print:p-0 space-y-8 max-w-3xl mx-auto">
            {/* Header of the Document */}
            <div className="border-b-2 border-slate-900 pb-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold tracking-wider uppercase text-teal-800">
                <span>UT 2 · Documentación y Legislación de Autopsias</span>
                <span>Ciclo Superior AP & Tanatopraxia</span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                DECÁLOGO NORMATIVO Y DOCUMENTAL DE AUTOPSIAS
              </h1>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Guía operativa de legislación, gestión documental y bioseguridad para el
                Técnico Especialista en Anatomía Patológica y Medicina Legal. Marco de
                autopsias clínicas, judiciales y catástrofes con múltiples víctimas.
              </p>
            </div>

            {/* 10 Points Detailed in Document */}
            <div className="space-y-6">
              {DECALOGUE_POINTS.map((p) => (
                <div
                  key={p.id}
                  className="space-y-2 border-b border-slate-100 pb-5 last:border-none avoid-break"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-bold font-mono text-teal-800">
                      {p.number}.
                    </span>
                    <h2 className="text-sm font-bold text-slate-900">{p.title}</h2>
                  </div>

                  <p className="text-xs text-slate-600 italic pl-7">{p.subtitle}</p>

                  <div className="pl-7 space-y-2 text-xs text-slate-700">
                    {/* Legal citation */}
                    <div className="bg-slate-50 p-2.5 rounded border border-slate-200 space-y-1">
                      <strong className="text-slate-900 block font-semibold">
                        Marco Legal y Aspecto Regulado:
                      </strong>
                      {p.laws.map((l, idx) => (
                        <div key={idx} className="leading-snug">
                          • <strong>{l.name}</strong> ({l.articles}): {l.aspectRegulated}
                        </div>
                      ))}
                    </div>

                    {/* Golden Rule */}
                    <div className="p-2.5 bg-teal-50/80 rounded border border-teal-200 text-teal-950">
                      <strong>Regla de Oro para el Técnico: </strong>
                      <span>{p.keyRules}</span>
                    </div>

                    {/* Operational bullet points */}
                    <div className="space-y-1 pt-1">
                      <strong className="text-slate-900">Actuación del Técnico:</strong>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                        {p.technicalRole.map((role, rIdx) => (
                          <li key={rIdx}>{role}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Consequences */}
                    <div className="text-rose-900 bg-rose-50/50 p-2 rounded border border-rose-100">
                      <strong>Consecuencia legal: </strong>
                      <span>{p.consequences}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Document Verification Table Summary */}
            <div className="pt-6 border-t-2 border-slate-900 space-y-3 avoid-break">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Síntesis de Documentación Previa y Cierre (Cuadro 2.1 Ampliado)
              </h3>
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse border border-slate-200">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-2 border border-slate-200 font-bold">Modalidad</th>
                      <th className="p-2 border border-slate-200 font-bold">
                        Documentación Previa Imprescindible
                      </th>
                      <th className="p-2 border border-slate-200 font-bold">
                        Cierre y Registro
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-2 font-bold border border-slate-200">
                        Autopsia Clínica
                      </td>
                      <td className="p-2 border border-slate-200">
                        Autorización familiar (3 hojas autocalcables) · Certificado médico de
                        muerte cierta · Hoja de petición necrópsica · Resumen de historia
                        clínica.
                      </td>
                      <td className="p-2 border border-slate-200">
                        Inscripción en libro de autopsias · Informe a jefatura · Certificado
                        Defunción (OMC).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border border-slate-200">
                        Autopsia Judicial
                      </td>
                      <td className="p-2 border border-slate-200">
                        Orden judicial del juzgado de instrucción competente (no existe
                        autorización familiar).
                      </td>
                      <td className="p-2 border border-slate-200">
                        Informe pericial forense al juez · Licencia judicial de enterramiento.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border border-slate-200">
                        Autopsia Fetal
                      </td>
                      <td className="p-2 border border-slate-200">
                        Petición médica · Consentimiento familiar firmado · Certificado de
                        defunción/legajo · Datos clínicos maternos y placenta.
                      </td>
                      <td className="p-2 border border-slate-200">
                        Inscripción en libro de autopsias · Informe anatomopatológico
                        perinatal.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold border border-slate-200">
                        Grandes Catástrofes
                      </td>
                      <td className="p-2 border border-slate-200">
                        Declaración de siniestro múltiple (RD 32/2009) · Formulario AM
                        (amarillo) de desaparecidos · Levantamiento cuadrículado.
                      </td>
                      <td className="p-2 border border-slate-200">
                        Formulario PM (rosa) · Acta de cotejo científico DVI · Identificación
                        judicial.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Official Sources & Verification Links */}
            <div className="pt-6 border-t border-slate-200 space-y-2 avoid-break text-xs">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider">
                Fuentes Oficiales Verificables (BOE / Consejo de Europa)
              </h3>
              <ul className="space-y-1 text-slate-600">
                {OFFICIAL_LAWS.map((l, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span>
                      <strong>{l.code}:</strong> {l.title}
                    </span>
                    <span className="font-mono text-teal-800 text-[11px]">{l.boeUrl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 no-print shrink-0">
          <span>
            Documento preparado según los criterios pedagógicos y legales de la UT 2.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white border border-slate-300 font-semibold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cerrar Visor
          </button>
        </div>
      </div>
    </div>
  );
};
