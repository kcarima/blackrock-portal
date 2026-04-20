import React from 'react';
import { GraduationCap, BookOpen, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AcademyLayout } from '../components/layout/AcademyLayout.jsx';

export const Academy = ({ setIsAuthenticated, setAuthType, setUserRole }) => {
  const navigate = useNavigate();

  const courses = [
    { id: 'AC-101', name: 'Inspección de Obras Civiles', instructor: 'Ing. López', status: 'En curso', grade: 72, attempts: 1, maxAttempts: 3 },
    { id: 'AC-102', name: 'Seguridad Industrial', instructor: 'Ing. Torres', status: 'Completado', grade: 88, attempts: 2, maxAttempts: 3 },
    { id: 'AC-103', name: 'Gestión de Proyectos', instructor: 'Ing. Ramírez', status: 'En curso', grade: 64, attempts: 2, maxAttempts: 3 },
  ];

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthType('');
    setUserRole('');
    navigate('/');
  };

  return (
    <AcademyLayout onLogout={handleLogout}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">¡Bienvenido a tu Academia!</h2>
            <p className="text-xl text-gray-600 mb-6">Desarrolla tus habilidades profesionales con nuestros cursos especializados</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => navigate('/academy/quiz')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                <BookOpen size={20} />
                Presentar Prueba
              </button>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <GraduationCap size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2</h3>
            <p className="text-gray-600 font-medium">Cursos Activos</p>
            <p className="text-gray-500 text-sm mt-1">En progreso actualmente</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Target size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5/9</h3>
            <p className="text-gray-600 font-medium">Intentos Restantes</p>
            <p className="text-gray-500 text-sm mt-1">Máximo 3 por curso</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <TrendingUp size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">80%</h3>
            <p className="text-gray-600 font-medium">Nota Mínima</p>
            <p className="text-gray-500 text-sm mt-1">Para aprobar cursos</p>
          </div>
        </div>

        {/* Cursos */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Mis Cursos</h3>

          {courses.map((course) => {
            const canAttempt = course.attempts < course.maxAttempts && course.grade < 80;
            const statusLabel = course.grade >= 80 ? 'Aprobado' : 'Pendiente';
            const statusColor = course.status === 'Completado' ? 'bg-green-600' : 'bg-yellow-600';

            return (
              <div key={course.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${statusColor}`}>
                        {course.status}
                      </span>
                      <span className="text-gray-500 text-sm">ID: {course.id}</span>
                    </div>

                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h4>
                    <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-500 text-sm font-medium">Última Calificación</p>
                        <p className="text-2xl font-bold text-gray-900">{course.grade}%</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-500 text-sm font-medium">Estado</p>
                        <p className="text-lg font-bold text-gray-900">{statusLabel}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-500 text-sm font-medium">Intentos</p>
                        <p className="text-lg font-bold text-gray-900">{course.attempts}/{course.maxAttempts}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="text-center">
                      <p className="text-gray-500 text-sm mb-2">Intentos Restantes</p>
                      <div className="text-3xl font-black text-gray-900">
                        {Math.max(0, course.maxAttempts - course.attempts)}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate('/academy/quiz')}
                      disabled={!canAttempt}
                      className={`px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
                        canAttempt
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <BookOpen size={18} />
                      {canAttempt ? 'Presentar Prueba' : 'Intentos Agotados'}
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <strong>Nota:</strong> Para aprobar necesitas alcanzar el 80% y no exceder los 3 intentos por curso.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </AcademyLayout>
  );
};