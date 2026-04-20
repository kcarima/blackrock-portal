import React from 'react';
import { User, LogOut } from 'lucide-react';
import logoAcademia from '../../assets/logo_academia.png';

export const AcademyTopHeader = ({ onLogout }) => (
  <header className="bg-white shadow-sm border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={logoAcademia} alt="BlackRock Academy" className="h-16 w-auto object-contain" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">BlackRock Academy</p>
            <h1 className="text-2xl font-bold text-slate-900">Formación Ejecutiva de Alto Nivel</h1>
            <p className="text-sm text-slate-500">Programas diseñados para supervisores, gerentes y equipos técnicos.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-2 text-slate-700">
            <User size={18} />
            <span className="font-medium">Alumno registrado</span>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            <LogOut size={16} />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  </header>
);