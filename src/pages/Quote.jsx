import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const Quote = () => {
  const [formData, setFormData] = useState({ type: 'residencial', area: '', service: 'construccion' });
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = (e) => {
    e.preventDefault();
    const area = parseFloat(formData.area);
    if (!area) return;
    const basePrice = formData.service === 'construccion' ? 450 : 80;
    setEstimate(area * basePrice);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Calculator className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">Presupuesto en Línea</h1>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={calculateEstimate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Servicio</label>
                <select className="w-full p-3 border rounded-lg bg-gray-50" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                  <option value="construccion">Construcción</option>
                  <option value="movimiento">Movimiento Tierras</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Área Estimada (m²)</label>
                <input type="number" required className="w-full p-3 border rounded-lg bg-gray-50" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-gray-800">Calcular</button>
          </form>
          {estimate && (
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-center">
              <p className="text-4xl font-extrabold text-gray-900">${estimate.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
