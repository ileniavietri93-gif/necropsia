import React, { useState } from 'react';
import { SIMULATION_CASES } from '../data/autopsyData';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Award,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

export const SimulatorSection: React.FC = () => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const currentCase = SIMULATION_CASES[currentCaseIndex];
  const userChoiceId = selectedAnswers[currentCase.id];
  const selectedOption = currentCase.options.find((opt) => opt.id === userChoiceId);

  const handleSelectOption = (optId: string) => {
    if (selectedAnswers[currentCase.id]) return; // prevent changing after answered
    setSelectedAnswers((prev) => ({ ...prev, [currentCase.id]: optId }));
  };

  const calculateScore = () => {
    let correct = 0;
    SIMULATION_CASES.forEach((c) => {
      const chosen = c.options.find((opt) => opt.id === selectedAnswers[c.id]);
      if (chosen && chosen.isCorrect) correct++;
    });
    return correct;
  };

  const handleNext = () => {
    if (currentCaseIndex < SIMULATION_CASES.length - 1) {
      setCurrentCaseIndex((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentCaseIndex(0);
    setShowSummary(false);
  };

  const score = calculateScore();

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800">
          <span>Simulador Operativo para Técnicos</span>
          <span aria-hidden="true">·</span>
          <span>Resolución de Conflictos Jurídicos en Sala</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          Simulador de Toma de Decisiones Técnicas y Legales
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-4xl">
          Enfréntate a 5 dilemas reales y situaciones complejas en la recepción y
          preparación de autopsias clínicas, judiciales, catástrofes y riesgos biológicos.
          Aplica las normas estudiadas y valida tu criterio técnico.
        </p>
      </div>

      {!showSummary ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-xs space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded">
                Caso {currentCaseIndex + 1} de {SIMULATION_CASES.length}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-medium text-slate-500">
                {currentCase.autopsyType}
              </span>
            </div>

            <div className="text-xs font-semibold text-slate-500">
              Aciertos: <span className="text-teal-800 font-mono">{score}</span> /{' '}
              {Object.keys(selectedAnswers).length} respondidos
            </div>
          </div>

          {/* Case Title and Narrative */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900">{currentCase.title}</h3>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm leading-relaxed">
              <strong className="text-slate-900 block mb-1">Escenario real en sala:</strong>
              {currentCase.scenario}
            </div>
          </div>

          {/* Technical Question */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <HelpCircle className="w-4 h-4 text-teal-700" />
              <span>{currentCase.question}</span>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-1">
              {currentCase.options.map((opt) => {
                const isSelected = userChoiceId === opt.id;
                let optionStyle =
                  'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300';

                if (userChoiceId) {
                  if (opt.isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium';
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-300 text-rose-950';
                  } else {
                    optionStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    disabled={!!userChoiceId}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs lg:text-sm flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 uppercase">
                      {opt.id}
                    </span>
                    <span className="leading-relaxed flex-1">{opt.text}</span>
                    {userChoiceId && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {userChoiceId && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback Section (Shown after selecting an option) */}
          {userChoiceId && selectedOption && (
            <div
              className={`p-5 rounded-xl border text-xs lg:text-sm space-y-2 transition-all ${
                selectedOption.isCorrect
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50/70 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {selectedOption.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>¡Respuesta Correcta! Dictamen Técnico Válido</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Respuesta Incorrecta. Infracción del Procedimiento Legal</span>
                  </>
                )}
              </div>
              <p className="leading-relaxed">{selectedOption.feedback}</p>
              <div className="pt-2 text-xs border-t border-current/15 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  <strong>Fundamentación jurídica: </strong>
                  {selectedOption.legalBasis}
                </span>
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar simulador</span>
            </button>

            {userChoiceId && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-xs transition-all cursor-pointer"
              >
                <span>
                  {currentCaseIndex < SIMULATION_CASES.length - 1
                    ? 'Siguiente Caso'
                    : 'Ver Evaluación Final'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Summary Evaluation Screen */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm text-center space-y-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto text-teal-800">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
              Evaluación Técnica Final
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Resultado de la Simulación Legal
            </h3>
            <p className="text-sm text-slate-600">
              Has respondido correctamente{' '}
              <span className="font-bold text-teal-800 font-mono text-base">
                {score} de {SIMULATION_CASES.length}
              </span>{' '}
              casos prácticos sobre documentación y marco legal de autopsias.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed text-left space-y-2">
            <strong>Dictamen de aptitud para el técnico especialista:</strong>
            <p>
              {score >= 4
                ? '¡Sobresaliente! Posees un dominio riguroso del régimen de autorizaciones, la inutilidad del permiso familiar en autopsias forenses, el protocolo nacional de catástrofes (RD 32/2009) y la cadena de custodia del INTCF.'
                : 'Se recomienda repasar los puntos clave del decálogo, especialmente la jerarquía de parentesco en autopsias clínicas y la obligatoriedad judicial en la LECrim.'}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-4">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-xs transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Volver a Intentar</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
