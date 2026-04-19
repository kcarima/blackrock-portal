import React, { useState } from 'react';
import { CheckSquare, Clock, ShieldAlert, Database, Plus, ArrowLeft, Save, Edit, Trash2 } from 'lucide-react';

export const AcademyEvaluations = () => {
  const [view, setView] = useState('list');
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    course: '',
    timeLimit: '',
    requiredScore: '',
    questionsNum: '',
    bankSize: ''
  });
  const [selectedCourseForBank, setSelectedCourseForBank] = useState('');
  const [bankQuestions, setBankQuestions] = useState([
    { id: 1, course: 'Operador de Maquinaria Pesada', question: '¿Qué indica la luz roja en el tablero de presión hidráulica?', type: 'Selección Simple', options: ['Baja presión', 'Alta presión', 'Falla eléctrica', 'Temperatura alta'] },
    { id: 2, course: 'Seguridad Industrial', question: '¿Cuál es el procedimiento correcto para manejar sustancias químicas peligrosas?', type: 'Selección Múltiple', options: ['Usar guantes', 'Leer la etiqueta', 'Almacenar correctamente', 'Todas las anteriores'] },
  ]);

  const [evaluations, setEvaluations] = useState([
    { id: "EV-001", course: "Operador de Maquinaria Pesada", timeLimit: "60 Min", requiredScore: "90%", questionsNum: 40, bankSize: 120 },
    { id: "EV-002", course: "Seguridad Industrial", timeLimit: "45 Min", requiredScore: "90%", questionsNum: 30, bankSize: 85 },
  ]);

  const handleOpenCreate = () => {
    setFormData({
      id: `EV-${Date.now()}`,
      course: '',
      timeLimit: '',
      requiredScore: '90%',
      questionsNum: '',
      bankSize: ''
    });
    setSelectedEvaluation(null);
    setView('form');
  };

  const handleEdit = (evaluation) => {
    setFormData({ ...evaluation });
    setSelectedEvaluation(evaluation);
    setView('form');
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (selectedEvaluation) {
      setEvaluations(evaluations.map(ev => ev.id === selectedEvaluation.id ? formData : ev));
    } else {
      setEvaluations([...evaluations, formData]);
    }
    setView('list');
  };

  const handleDelete = (evaluationId) => {
    if (window.confirm('¿Eliminar esta evaluación?')) {
      setEvaluations(evaluations.filter(ev => ev.id !== evaluationId));
    }
  };

  const handleManageBank = (course) => {
    setSelectedCourseForBank(course);
    setView('bank');
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuestion = {
      id: Date.now(),
      course: form.course.value,
      question: form.question.value,
      type: form.type.value,
      options: form.type.value === 'Verdadero / Falso' ? ['Verdadero', 'Falso'] : ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']
    };
    setBankQuestions([...bankQuestions, newQuestion]);
    form.reset();
  };

  const handleDeleteQuestion = (questionId) => {
    if (window.confirm('¿Eliminar esta pregunta del banco?')) {
      setBankQuestions(bankQuestions.filter(q => q.id !== questionId));
    }
  };

  if (view === 'form') {
    return (
      <div className="p-6 md:p-8">
        <button onClick={() => setView('list')} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold mb-6">
          <ArrowLeft size={18} /> Volver a Evaluaciones
        </button>
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase mb-3">{selectedEvaluation ? 'Editar Evaluación' : 'Crear Evaluación'}</h1>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Curso</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="">Seleccionar curso</option>
                  <option>Operador de Maquinaria Pesada</option>
                  <option>Seguridad Industrial</option>
                  <option>Mantenimiento Preventivo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tiempo Límite (minutos)</label>
                <input
                  type="number"
                  required
                  value={formData.timeLimit}
                  onChange={(e) => setFormData({ ...formData, timeLimit: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="60"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Porcentaje Requerido (%)</label>
                <input
                  type="number"
                  required
                  value={formData.requiredScore.replace('%', '')}
                  onChange={(e) => setFormData({ ...formData, requiredScore: e.target.value + '%' })}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="90"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Número de Preguntas</label>
                <input
                  type="number"
                  required
                  value={formData.questionsNum}
                  onChange={(e) => setFormData({ ...formData, questionsNum: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="40"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Tamaño del Banco de Preguntas</label>
                <input
                  type="number"
                  required
                  value={formData.bankSize}
                  onChange={(e) => setFormData({ ...formData, bankSize: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="120"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400 transition">
                <Save size={18} /> Guardar Evaluación
              </button>
              <button type="button" onClick={() => setView('list')} className="rounded-2xl border border-gray-300 px-6 py-3 font-bold text-gray-700 hover:bg-gray-100 transition">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (view === 'bank') {
    const courseQuestions = bankQuestions.filter(q => q.course === selectedCourseForBank);

    return (
      <div className="p-6 md:p-8">
        <button onClick={() => setView('list')} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold mb-6">
          <ArrowLeft size={18} /> Volver a Evaluaciones
        </button>
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Banco de Preguntas: {selectedCourseForBank}</h1>
          <p className="text-gray-500 mt-1">Gestión de preguntas para el curso seleccionado.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4">Preguntas Existentes ({courseQuestions.length})</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {courseQuestions.map((q) => (
                <div key={q.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase">{q.type}</span>
                    <button onClick={() => handleDeleteQuestion(q.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-800 mb-2">{q.question}</p>
                  <div className="text-xs text-gray-600">
                    Opciones: {q.options.join(', ')}
                  </div>
                </div>
              ))}
              {courseQuestions.length === 0 && (
                <p className="text-gray-500 text-center py-8">No hay preguntas en el banco para este curso.</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4">Agregar Nueva Pregunta</h3>
            <form onSubmit={handleAddQuestion} className="space-y-4">
              <input type="hidden" name="course" value={selectedCourseForBank} />
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Pregunta</label>
                <select name="type" className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" required>
                  <option>Selección Simple</option>
                  <option>Selección Múltiple</option>
                  <option>Verdadero / Falso</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pregunta</label>
                <textarea name="question" rows="3" className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Escribe la pregunta aquí..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition">
                Agregar Pregunta
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Evaluaciones y Exámenes</h1>
          <p className="text-gray-500 text-sm mt-1">Configuración de pruebas con porcentaje de aprobación exigido (90%).</p>
        </div>
        <button onClick={handleOpenCreate} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-yellow-400">
          <Plus size={18}/> Crear Evaluación
        </button>
      </div>

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
                <button onClick={() => handleEdit(ev)} className="flex-1 bg-blue-100 text-blue-700 font-bold py-2 rounded-lg hover:bg-blue-200 transition text-sm flex items-center justify-center gap-2">
                  <Edit size={16} /> Editar Configuración
                </button>
                <button onClick={() => handleManageBank(ev.course)} className="bg-gray-900 text-yellow-500 font-bold py-2 px-4 rounded-lg hover:bg-black transition text-sm flex items-center justify-center gap-2">
                  <Database size={16} /> Gestionar Banco
                </button>
                <button onClick={() => handleDelete(ev.id)} className="bg-red-100 text-red-700 font-bold py-2 px-4 rounded-lg hover:bg-red-200 transition text-sm flex items-center justify-center gap-2">
                  <Trash2 size={16} /> Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-yellow-400 shadow-sm p-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -z-10"></div>
         <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-4 border-b pb-2">Añadir al Banco de Preguntas</h3>
         <form onSubmit={handleAddQuestion} className="space-y-4 max-w-3xl">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Enunciado de la Pregunta</label>
              <textarea name="question" rows="2" className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Ej. ¿Qué indica la luz roja en el tablero de presión hidráulica?" required></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tipo de Selección</label>
                <select name="type" className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-yellow-500" required>
                  <option>Selección Simple</option>
                  <option>Selección Múltiple</option>
                  <option>Verdadero / Falso</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Asignar a Curso</label>
                <select name="course" className="w-full p-2.5 border rounded-lg bg-gray-50 focus:ring-yellow-500" required>
                  <option>Operador de Maquinaria Pesada</option>
                  <option>Seguridad Industrial</option>
                  <option>Mantenimiento Preventivo</option>
                </select>
              </div>
            </div>
            <button type="submit" className="bg-gray-900 text-yellow-500 font-bold py-2 px-6 rounded-lg hover:bg-black transition-colors mt-2">Guardar Pregunta</button>
         </form>
      </div>
    </div>
  );
};