import React, { useState } from 'react';
import { Menu, X, Calculator, ChevronDown, LayoutDashboard } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Inicio' },
    { 
      id: '/company', 
      label: 'Compañía',
      subItems: [{ id: '/empresa', label: 'Nuestra Empresa' }, { id: '/team', label: 'Nuestro Equipo' }, { id: '/testimonials', label: 'Testimonios' }]
    },
    { 
      id: '/services', 
      label: 'Servicios',
      subItems: [{ id: '/services', label: 'Todos los Servicios' }, { id: '/earthwork', label: 'Movimiento de Tierras' }, { id: '/civil', label: 'Obras Civiles' }]
    },
    { 
      id: '/projects', 
      label: 'Proyectos',
      subItems: [
        { id: '/projects', label: 'Todos los Proyectos' },
        { id: '/gallery', label: 'Galería' },
        { id: '/projects/avance', label: 'Avance' }
      ]
    },
    {id: '/academy/login', label: 'Academía'},
    { id: '/contact', label: 'Contactos' },
  ];

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b-4 border-yellow-500 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="hidden lg:flex space-x-6 items-center">
            {navItems.map(item => (
              <div key={item.id} className="relative group">
                <button onClick={() => !item.subItems && handleNav(item.id)} className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors py-4 ${location.pathname === item.id ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-400'}`}>
                  {item.label} {item.subItems && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.subItems && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-gray-900 border border-gray-800 rounded-b-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.subItems.map(sub => (
                        <button key={sub.id} onClick={() => handleNav(sub.id)} className="block w-full text-left px-5 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-500">{sub.label}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 pl-4 ml-2 border-l border-gray-700">
            <button onClick={() => handleNav('/quote')} className="bg-yellow-500 text-black px-5 py-2.5 rounded-md font-bold flex items-center gap-2 hover:bg-yellow-400">
              <Calculator className="w-4 h-4" /> Presupuesto
            </button>
            <button onClick={() => handleNav('/dashboard')} className="text-gray-400 hover:text-yellow-500 p-2"><LayoutDashboard className="w-5 h-5" /></button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-yellow-500">{isMobileMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-b border-yellow-500/20 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map(item => (
              <div key={item.id}>
                <div className="flex justify-between items-center border-b border-gray-800">
                  <button 
                    onClick={() => !item.subItems && handleNav(item.id)} 
                    className={`block w-full text-left px-3 py-4 text-base font-bold tracking-wide ${location.pathname === item.id ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    {item.label}
                  </button>
                  {item.subItems && (
                    <button onClick={() => toggleMobileDropdown(item.label)} className="p-4 text-gray-400 hover:text-yellow-500">
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180 text-yellow-500' : ''}`} />
                    </button>
                  )}
                </div>
                
                {item.subItems && openDropdown === item.label && (
                  <div className="bg-gray-950 pl-6 border-b border-gray-800">
                    {item.subItems.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => handleNav(sub.id)}
                        className="block w-full text-left px-3 py-3 text-sm font-medium text-gray-400 hover:text-yellow-500"
                      >
                        - {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button onClick={() => handleNav('/quote')} className="w-full text-center mt-6 bg-yellow-500 text-black px-4 py-3 rounded-md font-bold flex items-center justify-center gap-2">
              <Calculator className="w-5 h-5" /> Solicitar Presupuesto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};