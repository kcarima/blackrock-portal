import React, { useState } from 'react';
import { AlertCircle, Eye, ArrowLeft, Send, Save } from 'lucide-react';
import jsPDF from 'jspdf';

export const QuotesPending = () => {
  const [selectedQuote, setSelectedQuote] = useState(null);
  
  // Datos simulados más detallados
  const pendingQuotes = [
    { id: "PR-001", client: "Constructora Alfa", phone: "+58 414-1234567", email: "alfa@correo.com", service: "Movimiento de Tierras", area: "1500", location: "Zona Industrial Matanzas", description: "Terreno irregular, requiere nivelación y remoción de escombros de antigua estructura.", date: "Hoy, 10:30 AM" },
    { id: "PR-004", client: "Acero y Concreto C.A.", phone: "+58 412-9876543", email: "aceroyconcreto@correo.com", service: "Mantenimiento", area: "0", location: "Galpón 4", description: "Revisión preventiva de flota de maquinaria pesada (3 excavadoras, 2 tractores).", date: "Hace 3 días" },
  ];

  // Estado del formulario interno de inspección
  const [inspectionData, setInspectionData] = useState({ costPerM2: '', estimatedTime: '', expertNotes: '' });

  const handleApproveAndSend = async (e) => {
    e.preventDefault();
    
    const doc = new jsPDF();
    
    // Cargar logo
    let logoData = null;
    try {
      const response = await fetch('/membrete.jpg');
      const blob = await response.blob();
      const reader = new FileReader();
      logoData = await new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error cargando logo:', error);
    }
    
    if (logoData) {
      doc.addImage(logoData, 'JPEG', 10, 10, 45, 30);
    }
    
    // Fecha del reporte en esquina superior derecha
    const currentDate = new Date().toLocaleDateString('es-ES');
    doc.setFontSize(10);
    doc.text(`Fecha: ${currentDate}`, 170, 20);
    
    // Número de página debajo de la fecha
    doc.text('Página 1', 170, 25);
    
    // Título
    doc.setFontSize(16);
    doc.text(`Cotización - ${selectedQuote.id}`, 10, 50);
    
    // Información del Cliente
    doc.setFontSize(12);
    let y = 70;
    doc.text('Información del Cliente:', 10, y);
    y += 10;
    doc.text(`Cliente: ${selectedQuote.client}`, 10, y);
    y += 10;
    doc.text(`Teléfono: ${selectedQuote.phone}`, 10, y);
    y += 10;
    doc.text(`Email: ${selectedQuote.email}`, 10, y);
    y += 10;
    doc.text(`Servicio: ${selectedQuote.service}`, 10, y);
    y += 10;
    doc.text(`Área: ${selectedQuote.area} m²`, 10, y);
    y += 10;
    doc.text(`Ubicación: ${selectedQuote.location}`, 10, y);
    y += 10;
    doc.text(`Descripción: ${selectedQuote.description}`, 10, y);
    
    // Datos de Inspección
    y += 20;
    doc.text('Datos de Inspección Técnica:', 10, y);
    y += 10;
    doc.text(`Costo Estimado: $${inspectionData.costPerM2} / m²`, 10, y);
    y += 10;
    doc.text(`Tiempo de Ejecución: ${inspectionData.estimatedTime}`, 10, y);
    y += 10;
    doc.text(`Notas: ${inspectionData.expertNotes}`, 10, y);
    
    // Descargar el PDF
    doc.save(`cotizacion-${selectedQuote.id}.pdf`);
    
    // Simular envío por correo
    alert(`Presupuesto ${selectedQuote.id} aprobado. PDF generado y enviado por correo al cliente ${selectedQuote.email}.`);
    
    setSelectedQuote(null); // Regresar a la tabla
  };

  if (selectedQuote) {
    return (
      <div className="p-6 md:p-8 animate-in fade-in duration-300">
        <button onClick={() => setSelectedQuote(null)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold mb-6">
          <ArrowLeft size={18} /> Volver a Pendientes
        </button>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Evaluación de Presupuesto: {selectedQuote.id}</h1>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold border border-yellow-200 flex items-center gap-2"><AlertCircle size={16}/> Pendiente de Inspección</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel Izquierdo: Datos del Cliente */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 uppercase tracking-wider text-sm">Información de la Solicitud</h3>
            <div className="space-y-4">
              <div><p className="text-xs text-gray-500 font-bold uppercase">Cliente</p><p className="font-medium text-gray-900">{selectedQuote.client}</p></div>
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-xs text-gray-500 font-bold uppercase">Teléfono</p><p className="text-gray-800">{selectedQuote.phone}</p></div>
                <div><p className="text-xs text-gray-500 font-bold uppercase">Email</p><p className="text-gray-800">{selectedQuote.email}</p></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-xs text-gray-500 font-bold uppercase">Servicio</p><p className="text-gray-800">{selectedQuote.service}</p></div>
                <div><p className="text-xs text-gray-500 font-bold uppercase">Área Requerida</p><p className="text-gray-800">{selectedQuote.area} m²</p></div>
              </div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Ubicación</p><p className="text-gray-800">{selectedQuote.location}</p></div>
              <div><p className="text-xs text-gray-500 font-bold uppercase">Estado Actual / Resumen</p><p className="text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 mt-1 italic">"{selectedQuote.description}"</p></div>
            </div>
          </div>

          {/* Panel Derecho: Acción Técnica */}
          <div className="bg-white rounded-2xl border border-yellow-400 shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-bl-full -z-10"></div>
            <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 uppercase tracking-wider text-sm">Datos de Inspección Técnica</h3>
            
            <form onSubmit={handleApproveAndSend} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Costo Estimado ($ / m² o Fijo)</label>
                  <input type="number" required className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Ej. 120" value={inspectionData.costPerM2} onChange={e => setInspectionData({...inspectionData, costPerM2: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tiempo de Ejecución</label>
                  <input type="text" required className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Ej. 3 Semanas" value={inspectionData.estimatedTime} onChange={e => setInspectionData({...inspectionData, estimatedTime: e.target.value})} />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Notas de Inspección / Restricciones</label>
                <textarea required rows="4" className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Detalles técnicos para justificar el costo final..." value={inspectionData.expertNotes} onChange={e => setInspectionData({...inspectionData, expertNotes: e.target.value})}></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="submit" className="flex-1 bg-gray-900 text-yellow-500 font-bold py-3 px-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                  <Send size={18} /> Aprobar y Cotizar al Cliente
                </button>
                <button type="button" className="bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <Save size={18} /> Guardar Borrador
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Vista predeterminada: Tabla
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Presupuestos Pendientes</h1>
        <p className="text-gray-500 text-sm mt-1">Solicitudes que requieren revisión y envío de cotización</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-4 font-bold">ID Solicitud</th>
                <th className="p-4 font-bold">Cliente</th>
                <th className="p-4 font-bold">Servicio / Requerimiento</th>
                <th className="p-4 font-bold">Área</th>
                <th className="p-4 font-bold">Fecha Recibido</th>
                <th className="p-4 font-bold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {pendingQuotes.map((quote, idx) => (
                <tr key={idx} className="hover:bg-yellow-50/50 transition-colors">
                  <td className="p-4 font-bold text-gray-900">{quote.id}</td>
                  <td className="p-4 font-medium text-gray-800">{quote.client}</td>
                  <td className="p-4 text-gray-600">{quote.service}</td>
                  <td className="p-4 text-gray-500">{quote.area} m²</td>
                  <td className="p-4 text-gray-500 flex items-center gap-2">
                    <AlertCircle size={14} className="text-yellow-500" /> {quote.date}
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => setSelectedQuote(quote)} className="bg-gray-900 text-yellow-500 p-2 rounded hover:bg-black transition-colors" title="Ver e Inspeccionar">
                      <Eye size={16} />
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