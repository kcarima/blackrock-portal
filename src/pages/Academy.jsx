import React from 'react';
import { Award, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Academy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-700 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full font-semibold text-sm mb-6"><Award className="w-4 h-4" /> BlackRock Academy</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 uppercase">Formación Profesional</h1>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">Módulo: Inspección y Control</h3>
                </div>
                <button onClick={() => navigate('/quiz')} className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold flex items-center gap-2">
                  <PenTool className="w-5 h-5"/> Presentar Prueba
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};