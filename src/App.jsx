import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importación de Datos
import { INITIAL_DATA } from './data/mockData.js';

// Importación de Componentes Globales
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
// import { VirtualAssistant } from './components/ui/VirtualAssistant.jsx';

// Importación de Páginas
import { Home } from './pages/Home.jsx';
import { Quote } from './pages/Quote.jsx';
import { AcademyLogin } from './pages/AcademyLogin.jsx';
import { Academy } from './pages/Academy.jsx';
import { Quiz } from './pages/Quiz.jsx';
import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Para el Admin
  const [isAcademyAuthenticated, setIsAcademyAuthenticated] = useState(false); // Para el Estudiante
  const [isLoading, setIsLoading] = useState(true);
  const [appData, setAppData] = useState(null);

  // Simulamos el tiempo de carga
  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setAppData(INITIAL_DATA);
        setIsLoading(false);
      }, 1500);
    };
    loadData();
  }, []);

  if (isLoading || !appData) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-yellow-500 font-bold tracking-widest uppercase">Cargando Plataforma...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50 selection:bg-yellow-500 selection:text-black">
        <Navbar company={appData.company} />
        
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home data={appData} />} />
            <Route path="/quote" element={<Quote />} />
            
            {/* Rutas de Login */}
            <Route path="/academy-login" element={<AcademyLogin setIsAcademyAuthenticated={setIsAcademyAuthenticated} />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            
            {/* Rutas Protegidas: Estudiantes de Academia */}
            <Route 
              path="/academy" 
              element={isAcademyAuthenticated ? <Academy /> : <Navigate to="/academy-login" replace />} 
            />
            <Route 
              path="/quiz" 
              element={isAcademyAuthenticated ? <Quiz /> : <Navigate to="/academy-login" replace />} 
            />
            
            {/* Ruta Protegida: Administrador */}
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" replace />} 
            />

            {/* Ruta comodín */}
            <Route path="*" element={
              <div className="py-32 px-4 text-center">
                <h2 className="text-4xl font-extrabold uppercase mb-6">Página en Construcción</h2>
              </div>
            } />
          </Routes>
        </main>

        {/* <VirtualAssistant /> */}
        <Footer company={appData.company} />
      </div>
    </BrowserRouter>
  );
}