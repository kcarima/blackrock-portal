import React, { useState } from 'react';
import { PlusCircle, Edit, Save, ArrowLeft, Calendar, DollarSign, CheckCircle2, Trash2, FileText, AlertTriangle } from 'lucide-react';

export const Inspections = () => {
  const [view, setView] = useState('list');
  const [selectedInspection, setSelectedInspection] = useState(null);
  const [inspections, setInspections] = useState([
    { 
      id: 'I-001', 
      project: 'Planta Industrial Norte', 
      inspector: 'José Pérez', 
      date: '2024-04-22', 
      status: 'Programada', 
      budget: 12000,
      type: 'Estructural',
      description: 'Inspección completa de estructura metálica y cimentación',
      notes: 'Requiere verificación de soldaduras críticas',
      priority: 'Alta'
    },
    { 
      id: 'I-002', 
      project: 'Edificio Centro', 
      inspector: 'María Rodríguez', 
      date: '2024-04-18', 
      status: 'Completa', 
      budget: 8500,
      type: 'Eléctrica',
      description: 'Verificación de instalaciones eléctricas y sistemas de seguridad',
      notes: 'Aprobado con observaciones menores',
      priority: 'Media'
    },
    { 
      id: 'I-003', 
      project: 'Carretera Oriente', 
      inspector: 'José Pérez', 
      date: '2024-04-28', 
      status: 'En Proceso', 
      budget: 16000,
      type: 'Vial',
      description: 'Inspección de pavimentos y señalización vial',
      notes: 'Pendiente de correcciones en demarcación',
      priority: 'Alta'
    },
  ]);
  const [formData, setFormData] = useState({ 
    id: '', 
    project: '', 
    inspector: '', 
    date: '', 
    status: 'Programada', 
    budget: '',
    type: 'Estructural',
    description: '',
    notes: '',
    priority: 'Media'
  });

  const handleOpenCreate = () => {
    setSelectedInspection(null);
    setFormData({ id: `I-${Date.now()}`, project: '', inspector: '', date: '', status: 'Programada', budget: '' });
    setView('form');
  };

  const handleEdit = (inspection) => {
    setSelectedInspection(inspection);
    setFormData({ ...inspection, budget: inspection.budget.toString() });
    setView('form');
  };

  const handleDelete = (inspectionId) => {
    if (window.confirm('¿Eliminar esta inspección?')) {
      setInspections(inspections.filter((item) => item.id !== inspectionId));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const payload = { ...formData, budget: Number(formData.budget) };
    if (selectedInspection) {
      setInspections(inspections.map((item) => (item.id === selectedInspection.id ? payload : item)));
    } else {
      setInspections([...inspections, payload]);
    }
    setView('list');
  };

  return (
    <div className="p-6 md:p-8">
      {view === 'form' ? (
        <div className="space-y-6">
          <button onClick={() => setView('list')} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold">
            <ArrowLeft size={18} /> Volver a Inspecciones
          </button>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h1 className="text-2xl font-extrabold text-gray-900 uppercase mb-3">{selectedInspection ? 'Editar Inspección' : 'Crear Inspección'}</h1>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Proyecto</label>
                  <input
                    type="text"
                    required
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Nombre del proyecto"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Inspector responsable</label>
                  <input
                    type="text"
                    required
                    value={formData.inspector}
                    onChange={(e) => setFormData({ ...formData, inspector: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Nombre del inspector"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Fecha</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Inspección</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option>Estructural</option>
                    <option>Eléctrica</option>
                    <option>Vial</option>
                    <option>Hidráulica</option>
                    <option>Seguridad</option>
                    <option>Ambiental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Estado</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option>Programada</option>
                    <option>En Proceso</option>
                    <option>Completa</option>
                    <option>Requiere Seguimiento</option>
                    <option>Cancelada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Prioridad</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option>Baja</option>
                    <option>Media</option>
                    <option>Alta</option>
                    <option>Crítica</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Presupuesto asociado</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full pl-10 p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Monto en USD"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Descripción</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Descripción detallada de la inspección"
                    rows="3"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Notas adicionales</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Observaciones, hallazgos o recomendaciones"
                    rows="3"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400 transition">
                  <Save size={18} /> Guardar Inspección
                </button>
                <button type="button" onClick={() => setView('list')} className="rounded-2xl border border-gray-300 px-6 py-3 font-bold text-gray-700 hover:bg-gray-100 transition">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 uppercase">Inspecciones y Presupuestos</h1>
              <p className="text-gray-500 mt-2">Administra las inspecciones sobre obras y controla su presupuesto.</p>
            </div>
            <button onClick={handleOpenCreate} className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-2xl font-bold hover:bg-black transition">
              <PlusCircle size={18} /> Nueva Inspección
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {inspections.map((inspection) => (
              <div key={inspection.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-bold uppercase tracking-[0.2em] ${
                        inspection.status === 'Completa' ? 'bg-green-50 text-green-600' :
                        inspection.status === 'En Proceso' ? 'bg-blue-50 text-blue-600' :
                        inspection.status === 'Programada' ? 'bg-yellow-50 text-yellow-600' :
                        inspection.status === 'Requiere Seguimiento' ? 'bg-orange-50 text-orange-600' :
                        'bg-red-50 text-red-600'
                      }`}>
                        {inspection.status}
                      </span>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-bold uppercase tracking-[0.2em] ${
                        inspection.priority === 'Crítica' ? 'bg-red-50 text-red-600' :
                        inspection.priority === 'Alta' ? 'bg-orange-50 text-orange-600' :
                        inspection.priority === 'Media' ? 'bg-yellow-50 text-yellow-600' :
                        'bg-green-50 text-green-600'
                      }`}>
                        {inspection.priority}
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold text-gray-900 mt-2">{inspection.project}</h2>
                    <p className="text-sm text-gray-600 mt-1">{inspection.type} • {inspection.inspector}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p className="flex items-center gap-1"><Calendar size={14} /> {inspection.date}</p>
                  </div>
                </div>
                
                {inspection.description && (
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">{inspection.description}</p>
                )}
                
                {inspection.notes && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-600 flex items-start gap-2">
                      <FileText size={14} className="mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{inspection.notes}</span>
                    </p>
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <DollarSign size={16} className="text-yellow-500" />
                    Presupuesto: <span className="font-bold text-gray-900">${inspection.budget.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleEdit(inspection)} className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(inspection.id)} className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
