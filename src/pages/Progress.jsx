import React from 'react';
import { BarChart3, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Progress = ({ isClientAuthenticated, onLogout }) => {
  const progress = [
    { id: 'P-101', name: 'Centro Comercial Norte', stage: 'Fase de cimentación', progress: 65 },
    { id: 'P-102', name: 'Torre Empresarial', stage: 'Estructura metálica', progress: 42 },
    { id: 'P-103', name: 'Planta de Hidrógeno', stage: 'Instalaciones eléctricas', progress: 78 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="rounded-[2rem] bg-white border border-gray-200 p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Avance de Proyectos</p>
              <h1 className="mt-4 text-4xl font-extrabold text-gray-900">Sigue el progreso de tus obras</h1>
              <p className="mt-3 text-gray-500 max-w-2xl">Este espacio está diseñado para clientes con login independiente. Ingresa para revisar el avance detallado y los hitos de cada proyecto.</p>
            </div>
            {isClientAuthenticated ? (
              <button onClick={onLogout} className="inline-flex items-center gap-2 rounded-3xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 hover:border-gray-400 transition">
                <Lock size={18} /> Cerrar Sesión
              </button>
            ) : (
              <Link to="/projects/avance/login" className="inline-flex items-center gap-2 rounded-3xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400 transition">
                <ShieldCheck size={18} /> Iniciar Sesión de Avance
              </Link>
            )}
          </div>
        </div>

        {isClientAuthenticated ? (
          <div className="grid gap-6 md:grid-cols-3">
            {progress.map((item) => (
              <div key={item.id} className="rounded-[2rem] bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{item.stage}</p>
                    <h2 className="mt-3 text-xl font-extrabold text-gray-900">{item.name}</h2>
                  </div>
                  <BarChart3 size={24} className="text-yellow-500" />
                </div>
                <div className="mt-6 rounded-2xl bg-gray-100 h-3 overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: `${item.progress}%` }} />
                </div>
                <p className="mt-4 text-sm text-gray-500">Avance actual: <span className="font-bold text-gray-900">{item.progress}%</span></p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] bg-white border border-dashed border-yellow-500 p-8 text-center">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-lg font-bold text-gray-900">Tu acceso al avance es exclusivo para clientes registrados.</p>
            <p className="mt-3 text-gray-500">Regístrate con un login independiente y consulta el estado real de tu proyecto con claridad.</p>
            <Link to="/projects/avance/login" className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-gray-900 px-6 py-3 text-white font-bold hover:bg-gray-800 transition">
              <ArrowRight size={18} /> Acceder al seguimiento
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
