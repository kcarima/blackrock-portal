import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, FileText, HardHat, Settings, LogOut, 
  Bell, Search, Menu, GraduationCap, ArrowUpRight, Clock 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const stats = [
    { title: "Visitas del Mes", value: "2,450", icon: <Users className="text-blue-500" />, trend: "+12%" },
    { title: "Presupuestos", value: "45", icon: <FileText className="text-yellow-500" />, trend: "+5%" },
    { title: "Proyectos Activos", value: "12", icon: <HardHat className="text-green-500" />, trend: "Estable" },
    { title: "Alumnos Academia", value: "128", icon: <GraduationCap className="text-purple-500" />, trend: "+24%" },
  ];

  const recentQuotes = [
    { id: "PR-001", client: "Constructora Alfa", service: "Movimiento de Tierras", status: "Pendiente", date: "Hoy" },
    { id: "PR-002", client: "Inversiones Sur", service: "Obras Civiles", status: "Aprobado", date: "Ayer" },
    { id: "PR-003", client: "Minera Guayana", service: "Alquiler de Maquinaria", status: "En revisión", date: "Hace 2 días" },
    { id: "PR-004", client: "Acero y Concreto C.A.", service: "Mantenimiento", status: "Pendiente", date: "Hace 3 días" },
  ];

  return (
    // 'fixed inset-0' superpone este componente sobre el Navbar y Footer de App.jsx
    <div className="fixed inset-0 z-[100] flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      
      {/* Barra Lateral (Sidebar) */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-gray-900 border-r border-gray-800 flex flex-col`}>
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
          <span className="text-yellow-500 font-extrabold text-xl tracking-wider uppercase">
            {isSidebarOpen ? 'BlackRock' : 'BR'}
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            <li>
              <a href="#" className="flex items-center gap-3 bg-yellow-500/10 text-yellow-500 px-3 py-3 rounded-lg font-medium">
                <LayoutDashboard size={20} />
                {isSidebarOpen && <span>Resumen General</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-3 rounded-lg font-medium transition-colors">
                <FileText size={20} />
                {isSidebarOpen && <span>Presupuestos</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-3 rounded-lg font-medium transition-colors">
                <HardHat size={20} />
                {isSidebarOpen && <span>Obras y Proyectos</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-3 rounded-lg font-medium transition-colors">
                <GraduationCap size={20} />
                {isSidebarOpen && <span>Academia</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-3 rounded-lg font-medium transition-colors">
                <Users size={20} />
                {isSidebarOpen && <span>Usuarios</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-3 rounded-lg font-medium transition-colors">
                <Settings size={20} />
                {isSidebarOpen && <span>Configuración</span>}
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="flex items-center gap-3 text-red-400 hover:text-red-300 w-full px-3 py-2 rounded-lg font-medium transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span>Cerrar Sesión</span>}
          </button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Barra Superior (Topbar) */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-900 transition-colors">
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Buscar..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64 bg-gray-50" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-yellow-500 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-sm">A</div>
              <span className="text-sm font-bold text-gray-700 hidden sm:block">Administrador</span>
            </div>
          </div>
        </header>

        {/* Área de Contenido con Scroll */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
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
                <button className="text-yellow-600 text-sm font-bold hover:underline">Ver todos</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                      <th className="p-4 font-bold">ID</th>
                      <th className="p-4 font-bold">Cliente</th>
                      <th className="p-4 font-bold">Servicio</th>
                      <th className="p-4 font-bold">Estado</th>
                      <th className="p-4 font-bold">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {recentQuotes.map((quote, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-gray-500 font-medium">{quote.id}</td>
                        <td className="p-4 font-bold text-gray-900">{quote.client}</td>
                        <td className="p-4 text-gray-600">{quote.service}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            quote.status === 'Aprobado' ? 'bg-green-100 text-green-700' :
                            quote.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
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
                    { time: '09:15 AM', action: 'Presupuesto PR-002 aprobado' },
                    { time: 'Ayer', action: 'Actualización del proyecto "Troncal 10"' },
                    { time: 'Hace 2 días', action: 'Se añadió nueva maquinaria al inventario' }
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
      </main>
    </div>
  );
};