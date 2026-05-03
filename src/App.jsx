import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

// Importación de Datos
import { INITIAL_DATA } from './data/mockData.js';

// Importación de Componentes Globales
import { TopHeader } from './components/layout/TopHeader.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { AcademyLayout } from './components/layout/AcademyLayout.jsx';
// import { VirtualAssistant } from './components/ui/VirtualAssistant.jsx';

// Importación de Páginas
import { Home } from './pages/Home.jsx';
import { Quote } from './pages/Quote.jsx';
import { About } from './pages/About.jsx';
import { Services } from './pages/Services.jsx';
import { Team } from './pages/Team.jsx';
import { TestimonialsPage } from './pages/TestimonialsPage.jsx';
import { Earthwork } from './pages/Earthwork.jsx';
import { Civil } from './pages/Civil.jsx';
import { CommercialProjects } from './pages/CommercialProjects.jsx';
import { Contact } from './pages/Contact.jsx';
// import { AcademyLogin } from './pages/AcademyLogin.jsx'; // COMENTADO TEMPORALMENTE
import { Academy } from './pages/Academy.jsx';
import { Quiz } from './pages/Quiz.jsx';
import { Login } from './pages/Login.jsx';
import { AcademyLogin } from './pages/AcademyLogin.jsx';
import { DashboardLayout } from './pages/dashboard/DashboardLayout.jsx';
import { DashboardHome } from './pages/dashboard/DashboardHome.jsx';
import { UsersManagement } from './pages/dashboard/UsersManagement.jsx';
import { Inspections } from './pages/dashboard/Inspections.jsx';
import { AcademyStudentDashboard } from './pages/dashboard/AcademyStudentDashboard.jsx';
import { QuotesPending } from './pages/dashboard/QuotesPending.jsx';
import { QuotesSent } from './pages/dashboard/QuotesSent.jsx';
import { AcademyCourses } from './pages/dashboard/AcademyCourses.jsx';
import { AcademyStudents } from './pages/dashboard/AcademyStudents.jsx';
import { AcademyEvaluations } from './pages/dashboard/AcademyEvaluations.jsx';
import { Configuration } from './pages/dashboard/Configuration.jsx';
import { Projects } from './pages/Projects.jsx';
import { ProjectDetails } from './pages/ProjectDetails.jsx';
import { ProjectGallery } from './pages/ProjectGallery.jsx';
import { Progress } from './pages/Progress.jsx';
import { ProgressLogin } from './pages/ProgressLogin.jsx';

const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [authType, setAuthType] = useState(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('authType') || '';
  });

  const [userRole, setUserRole] = useState(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('userRole') || '';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
      localStorage.setItem('authType', authType || '');
      localStorage.setItem('userRole', userRole || '');
    }
  }, [isAuthenticated, authType, userRole]);

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

  const navigate = useNavigate();
  const location = useLocation();
  const isAcademy = location.pathname.startsWith('/academy');

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthType('');
    setUserRole('');
    navigate('/');
  };

  if (isLoading || !appData) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-yellow-500 font-bold tracking-widest uppercase">Cargando Plataforma...</div>
      </div>
    );
  }

  if (isAcademy) {
    return (
      <AcademyLayout onLogout={handleLogout}>
        <Routes>
          <Route path="/academy" element={
            <ProtectedRoute isAllowed={isAuthenticated && authType === 'academy' && userRole === 'Estudiante'} redirectPath="/academy/login">
              <Academy setIsAuthenticated={setIsAuthenticated} setAuthType={setAuthType} setUserRole={setUserRole} />
            </ProtectedRoute>
          } />
          <Route path="/academy/dashboard" element={
            <ProtectedRoute isAllowed={isAuthenticated && authType === 'academy' && userRole === 'Estudiante'} redirectPath="/academy/login">
              <AcademyStudentDashboard />
            </ProtectedRoute>
          } />
          <Route path="/academy/quiz" element={
            <ProtectedRoute isAllowed={isAuthenticated && authType === 'academy' && userRole === 'Estudiante'} redirectPath="/academy/login">
              <Quiz onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/quiz" element={<Navigate to="/academy/quiz" replace />} />
        </Routes>
      </AcademyLayout>
    );
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 selection:bg-yellow-500 selection:text-black">
      <TopHeader company={appData.company} />
      <Navbar company={appData.company} />
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/earthwork" element={<Earthwork />} />
            <Route path="/civil" element={<Civil />} />
            <Route path="/projects" element={<Projects data={appData} />} />
            <Route path="/gallery" element={<ProjectGallery data={appData} />} />
            <Route path="/commercial" element={<CommercialProjects />} />
            <Route path="/projects/:projectId" element={<ProjectDetails data={appData} />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects data={appData} />} />
            <Route path="/projects/:projectId" element={<ProjectDetails data={appData} />} />
            
            {/* Rutas de Login */}
            <Route
              path="/login"
              element={
                isAuthenticated && authType === 'dashboard' ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login
                    setIsAuthenticated={setIsAuthenticated}
                    setAuthType={setAuthType}
                    setUserRole={setUserRole}
                  />
                )
              }
            />
            <Route
              path="/academy/login"
              element={
                isAuthenticated && authType === 'academy' ? (
                  <Navigate to="/academy" replace />
                ) : (
                  <AcademyLogin
                    setIsAuthenticated={setIsAuthenticated}
                    setAuthType={setAuthType}
                    setUserRole={setUserRole}
                  />
                )
              }
            />
            <Route
              path="/projects/avance/login"
              element={
                isAuthenticated && authType === 'client' ? (
                  <Navigate to="/projects/avance" replace />
                ) : (
                  <ProgressLogin
                    setIsAuthenticated={setIsAuthenticated}
                    setAuthType={setAuthType}
                    setUserRole={setUserRole}
                  />
                )
              }
            />
            <Route
              path="/projects/avance"
              element={
                <Progress
                  isClientAuthenticated={isAuthenticated && authType === 'client'}
                  onLogout={() => {
                    setIsAuthenticated(false);
                    setAuthType('');
                    setUserRole('');
                  }}
                />
              }
            />
            {/* Ruta Protegida: Administrador */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAllowed={isAuthenticated && authType === 'dashboard'} redirectPath="/login">
                  <DashboardLayout setIsAuthenticated={setIsAuthenticated} userRole={userRole} />
                </ProtectedRoute>
              }
            >
              <Route index element={userRole === 'Inspector' ? <Navigate to="inspections" replace /> : <DashboardHome />} />
              <Route path="quotes/pending" element={<QuotesPending />} />
              <Route path="quotes/sent" element={<QuotesSent />} />
              <Route path="academy/courses" element={<AcademyCourses />} />
              <Route path="academy/students" element={<AcademyStudents />} />
              <Route path="academy/evaluations" element={<AcademyEvaluations />} />
              <Route path="users" element={<UsersManagement />} />
              <Route path="inspections" element={<Inspections />} />
              <Route path="configuration" element={<Configuration />} />
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
