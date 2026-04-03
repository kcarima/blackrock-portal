import React, { useState } from 'react';
import { ChevronLeft, LogOut, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [stats] = useState({ visitors: 1250, leads: 45, projects: 12 });

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate('/')} className="text-gray-500 font-bold flex items-center"><ChevronLeft/> Volver al Sitio</button>
          <button onClick={handleLogout} className="text-red-500 font-bold bg-white px-4 py-2 rounded-lg border border-red-100 flex items-center"><LogOut size={20}/> Cerrar Sesión</button>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-3xl font-extrabold uppercase mb-8"><LayoutDashboard className="inline text-yellow-500 mb-1"/> Panel de Administración</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl border">
              <p className="text-sm font-bold uppercase mb-2">Visitas Totales</p>
              <p className="text-4xl font-black">{stats.visitors}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border">
              <p className="text-sm font-bold uppercase mb-2">Presupuestos</p>
              <p className="text-4xl font-black">{stats.leads}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};