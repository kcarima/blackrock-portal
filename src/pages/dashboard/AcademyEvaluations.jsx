import React from 'react';
import { CheckSquare, Clock, ShieldAlert, Database, Plus } from 'lucide-react';

export const AcademyEvaluations = () => {
  // Evaluaciones atadas a un curso, con banco de preguntas, límite de tiempo y aprobación del 90%
  const evaluations = [
    { id: "EV-001", course: "Operador de Maquinaria Pesada", timeLimit: "60 Min", requiredScore: "90%", questionsNum: 40, bankSize: 120 },
    { id: "EV-002", course: "Seguridad Industrial", timeLimit: "45 Min", requiredScore: "90%", questionsNum: 30, bankSize: 85 },
  ];

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Evaluaciones y Exámenes</h1>
          <p className="text-gray-500 text-sm mt-1">Configuración de pruebas con porcentaje de aprobación exigido (90%).</p>
        </div>
        <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-yellow-400">
          <Plus size={18}/> Crear Evaluación
        </button>
      </div>

      {/* Grid de Configuraciones de Evaluación */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {evaluations.map((ev, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-900 p-4 border-b border-gray-800">
              <h3 className="text-white font-bold tracking-wide flex items-center gap-2">
                <CheckSquare size={18} className="text-yellow-500"/> Evaluación: {ev.course}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                  <Clock size={20} className="mx-auto text-gray-400 mb-2"/>
                  <p className="text-xs font-bold text-gray-500 uppercase">Tiempo Límite</p>
                  <p className="text-xl font-black text-gray-900">{ev.timeLimit}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
                  <ShieldAlert size={20} className="mx-auto text-yellow-600 mb-2"/>
                  <p className="text-xs font-bold text-yellow-800 uppercase">Para Aprobar</p>
                  <p className="text-xl font-black text-yellow-700">{ev.requiredScore}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Database size={16} /> Banco Total: <strong>{ev.bankSize} Preguntas</strong>
                </div>
                <div className="text-sm text-gray-600">
                  A evaluar: <strong>{ev.questionsNum} Preguntas</strong>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button className="flex-1 bg-gray-100 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-200 transition text-sm">Editar Configuración</button>
                <button className="flex-1 bg-gray-900 text-yellow-500 font-bold py-2 rounded-lg hover:bg-black transition text-sm">Gestionar Banco</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simulador de Ingreso al Banco de Preguntas */}
      <div className="bg-white rounded-2xl border border-yellow-400 shadow-sm p-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -z-10"></div>
         <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-4 border-b pb-2">Añadir al Banco de Preguntas</h3>
         <form className="space-y-4 max-w-3xl">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Enunciado de la Pregunta</label>
              <textarea rows="2" className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Ej. ¿Qué indica la luz roja en el tablero de presión hidráulica?"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tipo de Selección</label>
                <select className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-yellow-500">
                  <option>Selección Simple</option>
                  <option>Selección Múltiple</option>
                  <option>Verdadero / Falso</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Asignar a Curso</label>
                <select className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-yellow-500">
                  <option>Operador de Maquinaria Pesada</option>
                  <option>Seguridad Industrial</option>
                </select>
              </div>
            </div>
            <button type="button" className="bg-gray-900 text-yellow-500 font-bold py-2 px-6 rounded-lg hover:bg-black transition-colors mt-2">Guardar Pregunta</button>
         </form>
      </div>

    </div>
  );
};
