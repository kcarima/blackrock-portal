import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, FileText, HardHat, Settings, LogOut, 
  Bell, Search, Menu, GraduationCap, ChevronDown, BookOpen, CheckSquare, Clock, CheckCircle2
} from 'lucide-react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
/* { setIsAuthenticated }  va dentro de const DashboardLayout */
export const DashboardLayout = ({ setIsAuthenticated, userRole }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isQuotesMenuOpen, setIsQuotesMenuOpen] = useState(false);
  const [isAcademyMenuOpen, setIsAcademyMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  const isInspector = userRole === 'Inspector';
  const canManageUsers = ['Administrador', 'Analista', 'Asistente'].includes(userRole);
  const canManageAcademy = ['Administrador', 'Analista', 'Asistente'].includes(userRole);
  const canManageQuotes = !isInspector;
  const canManageInspections = ['Administrador', 'Inspector'].includes(userRole);
  const showDashboardHome = !isInspector;

  const isQuotesActive = location.pathname.includes('/dashboard/quotes');
  const isAcademyActive = location.pathname.includes('/dashboard/academy');
  const isInspectionsActive = location.pathname.includes('/dashboard/inspections');
  const isUsersActive = location.pathname.includes('/dashboard/users');

  return (
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
            {showDashboardHome && (
              <li>
                <Link to="/dashboard" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-colors ${location.pathname === '/dashboard' ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                  <LayoutDashboard size={20} />
                  {isSidebarOpen && <span>Resumen General</span>}
                </Link>
              </li>
            )}

            {canManageQuotes && (
              <li>
                <button 
                  onClick={() => setIsQuotesMenuOpen(!isQuotesMenuOpen)} 
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-lg font-medium transition-colors ${isQuotesActive ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                >
                  <div className="flex items-center gap-3">
                    <FileText size={20} className={isQuotesActive ? "text-yellow-500" : ""} />
                    {isSidebarOpen && <span>Presupuestos</span>}
                  </div>
                  {isSidebarOpen && <ChevronDown size={16} className={`transition-transform duration-200 ${isQuotesMenuOpen ? 'rotate-180 text-yellow-500' : ''}`} />}
                </button>
                {isQuotesMenuOpen && isSidebarOpen && (
                  <ul className="pl-11 pr-3 py-2 space-y-2">
                    <li>
                      <Link to="/dashboard/quotes/pending" className={`flex items-center gap-2 text-sm font-medium transition-colors  ${location.pathname === '/dashboard/quotes/pending' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}><Clock size={14}/>
                        Pendientes
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/quotes/sent" className={`flex items-center gap-2 text-sm font-medium transition-colors ${location.pathname === '/dashboard/quotes/sent' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}><CheckCircle2 size={14}/>
                        Enviados
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            )}

            {canManageInspections && (
              <li>
                <Link to="/dashboard/inspections" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-colors ${isInspectionsActive ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                  <HardHat size={20} />
                  {isSidebarOpen && <span>Inspecciones</span>}
                </Link>
              </li>
            )}

            {canManageAcademy && (
              <li>
                <button onClick={() => setIsAcademyMenuOpen(!isAcademyMenuOpen)} className={`w-full flex items-center justify-between px-3 py-3 rounded-lg font-medium transition-colors ${isAcademyActive ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                  <div className="flex items-center gap-3"><GraduationCap size={20} className={isAcademyActive ? "text-yellow-500" : ""} />{isSidebarOpen && <span>Academia</span>}</div>
                  {isSidebarOpen && <ChevronDown size={16} className={`transition-transform duration-200 ${isAcademyMenuOpen ? 'rotate-180 text-yellow-500' : ''}`} />}
                </button>
                {isAcademyMenuOpen && isSidebarOpen && (
                  <ul className="pl-11 pr-3 py-2 space-y-2">
                    <li><Link to="/dashboard/academy/courses" className={`flex items-center gap-2 text-sm font-medium transition-colors ${location.pathname.includes('/courses') ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}><BookOpen size={14}/> Cursos</Link></li>
                    <li><Link to="/dashboard/academy/students" className={`flex items-center gap-2 text-sm font-medium transition-colors ${location.pathname.includes('/students') ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}><Users size={14}/> Estudiantes</Link></li>
                    <li><Link to="/dashboard/academy/evaluations" className={`flex items-center gap-2 text-sm font-medium transition-colors ${location.pathname.includes('/evaluations') ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}><CheckSquare size={14}/> Evaluaciones</Link></li>
                  </ul>
                )}
              </li>
            )}

            {canManageUsers && (
              <li>
                <Link to="/dashboard/users" className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-colors ${isUsersActive ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                  <Users size={20} />
                  {isSidebarOpen && <span>Usuarios</span>}
                </Link>
              </li>
            )}

            {canManageUsers && (
              <li>
                <Link to="/dashboard/configuration" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-3 rounded-lg font-medium transition-colors">
                  <Settings size={20} />
                  {isSidebarOpen && <span>Configuración</span>}
                </Link>
              </li>
            )}
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
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-sm">{userRole ? userRole[0] : 'A'}</div>
              <span className="text-sm font-bold text-gray-700 hidden sm:block">{userRole || 'Administrador'}</span>
            </div>
          </div>
        </header>

        {/* Área donde se inyectan las vistas hijas (DashboardHome, QuotesPending, etc) */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <Outlet />
        </div>
      </main>
    </div>
  );
};