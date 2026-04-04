import React, { useState } from 'react';
import { CheckCircle2, FileText, ArrowLeft, Edit, Save, FileDown } from 'lucide-react';

export const QuotesSent = () => {
  const [selectedQuote, setSelectedQuote] = useState(null);

  // Datos simulados
  const sentQuotes = [
    { id: "PR-002", client: "Inversiones Sur", phone: "+58 416-2223344", email: "compras@inversur.com", service: "Obras Civiles", area: "3000", location: "Centro Empresarial Alta Vista", description: "Construcción de losa de fundación para nuevo galpón.", amount: 12500, time: "4 Semanas", expertNotes: "Suelo rocoso. Requiere maquinaria de alto impacto extra.", date: "Ayer" },
    { id: "PR-003", client: "Minera Guayana", phone: "+58 424-9988776", email: "logistica@mineraguayana.com", service: "Alquiler de Maquinaria", area: "0", location: "Mina Norte", description: "Alquiler de 2 payloaders por 15 días.", amount: 3200, time: "15 Días", expertNotes: "Costo incluye operador certificado.", date: "Hace 2 días" },
  ];

  const [editData, setEditData] = useState({ amount: '', expertNotes: '', time: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenDetail = (quote) => {
    setSelectedQuote(quote);
    setEditData({ amount: quote.amount, expertNotes: quote.expertNotes, time: quote.time });
    setIsEditing(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(`Presupuesto ${selectedQuote.id} reajustado a $${editData.amount} y guardado.`);
    setIsEditing(false);
  };

  if (selectedQuote) {
    return (
      <div className="p-6 md:p-8 animate-in fade-in duration-300">
        <button onClick={() => setSelectedQuote(null)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold mb-6">
          <ArrowLeft size={18} /> Volver a Enviados
        </button>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Presupuesto Enviado: {selectedQuote.id}</h1>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold border border-green-200 flex items-center gap-2"><CheckCircle2 size={16}/> Emitido</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel Izquierdo: Resumen Solicitud */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 opacity-90">
            <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 uppercase tracking-wider text-sm flex justify-between">Información Original</h3>
            <div className="space-y-4">
              <div><p className="text-xs text-gray-500 font-bold uppercase">Cliente</p><p className="font-medium text-gray-900">{selectedQuote.client}</p></div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Servicio</p><p className="text-gray-800">{selectedQuote.service} ({selectedQuote.area} m²)</p></div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Ubicación</p><p className="text-gray-800">{selectedQuote.location}</p></div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Estado Actual</p><p className="text-gray-600 italic">"{selectedQuote.description}"</p></div>
            </div>
          </div>

          {/* Panel Derecho: Visualización / Edición de Costos */}
          <div className={`bg-white rounded-2xl shadow-sm p-6 border-2 transition-colors ${isEditing ? 'border-yellow-500' : 'border-gray-200'}`}>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Cotización Técnica</h3>
              {!isEditing && (
                <button onClick={() => setIsEditing(true)} className="text-yellow-600 hover:text-yellow-700 font-bold text-sm flex items-center gap-1">
                  <Edit size={14}/> Modificar Valores
                </button>
              )}
            </div>
            
            <form onSubmit={handleUpdate} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Monto Total ($)</label>
                  <input type="number" disabled={!isEditing} required className={`w-full p-2.5 border rounded-lg focus:ring-yellow-500 font-bold ${!isEditing ? 'bg-gray-100 text-gray-600 border-gray-200' : 'bg-gray-50 border-gray-300'}`} value={editData.amount} onChange={e => setEditData({...editData, amount: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tiempo Ejecución</label>
                  <input type="text" disabled={!isEditing} required className={`w-full p-2.5 border rounded-lg focus:ring-yellow-500 ${!isEditing ? 'bg-gray-100 text-gray-600 border-gray-200' : 'bg-gray-50 border-gray-300'}`} value={editData.time} onChange={e => setEditData({...editData, time: e.target.value})} />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Notas de Inspección Registradas</label>
                <textarea disabled={!isEditing} required rows="3" className={`w-full p-2.5 border rounded-lg focus:ring-yellow-500 ${!isEditing ? 'bg-gray-100 text-gray-600 border-gray-200' : 'bg-gray-50 border-gray-300'}`} value={editData.expertNotes} onChange={e => setEditData({...editData, expertNotes: e.target.value})}></textarea>
              </div>

              {isEditing ? (
                <div className="pt-4 flex gap-3">
                  <button type="submit" className="flex-1 bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                    <Save size={18} /> Guardar Cambios
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                    Cancelar
                  </button>
                </div>
              ) : (
                <div className="pt-4 flex gap-3">
                  <button type="button" className="flex-1 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                    <FileDown size={18} /> Descargar PDF
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Vista Predeterminada: Tabla
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Presupuestos Enviados</h1>
        <p className="text-gray-500 text-sm mt-1">Cotizaciones que ya fueron procesadas y enviadas al cliente</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-4 font-bold">ID Solicitud</th>
                <th className="p-4 font-bold">Cliente</th>
                <th className="p-4 font-bold">Servicio</th>
                <th className="p-4 font-bold">Monto Cotizado</th>
                <th className="p-4 font-bold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {sentQuotes.map((quote, idx) => (
                <tr key={idx} className="hover:bg-green-50/30 transition-colors">
                  <td className="p-4 font-bold text-gray-900">{quote.id}</td>
                  <td className="p-4 font-medium text-gray-800">{quote.client}</td>
                  <td className="p-4 text-gray-600">{quote.service}</td>
                  <td className="p-4 font-bold text-green-700">${quote.amount.toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <button onClick={() => handleOpenDetail(quote)} className="bg-gray-100 text-gray-600 p-2 rounded hover:bg-yellow-500 hover:text-black transition-colors" title="Ver Documento">
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};