import React from 'react';
import { Users, FileText, HardHat, GraduationCap, ArrowUpRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DashboardHome = () => {
  const navigate = useNavigate();
  
  const stats = [
    { title: "Visitas del Mes", value: "2,450", icon: <Users className="text-blue-500" />, trend: "+12%" },
    { title: "Presupuestos", value: "45", icon: <FileText className="text-yellow-500" />, trend: "+5%" },
    { title: "Proyectos Activos", value: "12", icon: <HardHat className="text-green-500" />, trend: "Estable" },
    { title: "Alumnos Academia", value: "128", icon: <GraduationCap className="text-purple-500" />, trend: "+24%" },
  ];

  const recentQuotes = [
    { id: "PR-001", client: "Constructora Alfa", service: "Movimiento de Tierras", status: "Pendiente", date: "Hoy" },
    { id: "PR-002", client: "Inversiones Sur", service: "Obras Civiles", status: "Enviado", date: "Ayer" },
  ];

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Panel de Control</h1>
          <p className="text-gray-500 text-sm mt-1">Resumen de actividad de BlackRock Guayana</p>
        </div>
        <button onClick={() => navigate('/')} className="text-sm font-bold text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
          Ver Sitio Web
        </button>
      </div>

      {/* Tarjetas de Estadísticas (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">{stat.icon}</div>
              <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded-full"><ArrowUpRight size={14} className="mr-1"/>{stat.trend}</span>
            </div>
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{stat.title}</h3>
            <p className="text-3xl font-black text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tablas de Datos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tabla: Solicitudes de Presupuesto */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-lg text-gray-900">Últimos Presupuestos</h3>
            <button onClick={() => navigate('/dashboard/quotes/pending')} className="text-yellow-600 text-sm font-bold hover:underline">Ver todos</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="p-4 font-bold">ID</th>
                  <th className="p-4 font-bold">Cliente</th>
                  <th className="p-4 font-bold">Estado</th>
                  <th className="p-4 font-bold">Fecha</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {recentQuotes.map((quote, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-500 font-medium">{quote.id}</td>
                    <td className="p-4 font-bold text-gray-900">{quote.client}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        quote.status === 'Enviado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {quote.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">{quote.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Actividad Reciente */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <h3 className="font-bold text-lg text-gray-900">Actividad Reciente</h3>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              {[
                { time: '10:42 AM', action: 'Nuevo usuario registrado en la Academia' },
                { time: '09:15 AM', action: 'Presupuesto PR-002 enviado' },
                { time: 'Ayer', action: 'Actualización del proyecto "Troncal 10"' }
              ].map((activity, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1"><Clock size={16} className="text-yellow-500" /></div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-gray-50 text-gray-600 font-bold py-2.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              Ver historial completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};