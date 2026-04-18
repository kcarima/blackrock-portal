import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importación de Datos
import { INITIAL_DATA } from './data/mockData.js';

// Importación de Componentes Globales
import { TopHeader } from './components/layout/TopHeader.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
// import { VirtualAssistant } from './components/ui/VirtualAssistant.jsx';

// Importación de Páginas
import { Home } from './pages/Home.jsx';
import { Quote } from './pages/Quote.jsx';
// import { AcademyLogin } from './pages/AcademyLogin.jsx'; // COMENTADO TEMPORALMENTE
import { Academy } from './pages/Academy.jsx';
import { Quiz } from './pages/Quiz.jsx';
import { Login } from './pages/Login.jsx';
import { DashboardLayout } from './pages/dashboard/DashboardLayout.jsx';
import { DashboardHome } from './pages/dashboard/DashboardHome.jsx';
import { QuotesPending } from './pages/dashboard/QuotesPending.jsx';
import { QuotesSent } from './pages/dashboard/QuotesSent.jsx';
import { AcademyCourses } from './pages/dashboard/AcademyCourses.jsx';
import { AcademyStudents } from './pages/dashboard/AcademyStudents.jsx';
import { AcademyEvaluations } from './pages/dashboard/AcademyEvaluations.jsx';
import { Projects } from './pages/Projects.jsx';
import { ProjectDetails } from './pages/ProjectDetails.jsx';

const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
    }
  }, [isAuthenticated]);

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
        
        <TopHeader company={appData.company} />
        <Navbar company={appData.company} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home data={appData} />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/projects" element={<Projects data={appData} />} />
            <Route path="/projects/:projectId" element={<ProjectDetails data={appData} />} />
            
            {/* Rutas de Login */}
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            {/* Rutas Protegidas: Estudiantes de Academia */}
            <Route path="/academy" element={<Academy />} />
            <Route path="/quiz" element={<Quiz />} />
            {/* Ruta Protegida: Administrador */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAllowed={isAuthenticated}>
                  <DashboardLayout setIsAuthenticated={setIsAuthenticated} />
                </ProtectedRoute>
              }
            >
              <Route path="quotes/pending" element={<QuotesPending />} />
              <Route path="quotes/sent" element={<QuotesSent />} />
              <Route path="academy/courses" element={<AcademyCourses />} />
              <Route path="academy/students" element={<AcademyStudents />} />
              <Route path="academy/evaluations" element={<AcademyEvaluations />} />
            </Route>

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