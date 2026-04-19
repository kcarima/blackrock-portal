import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AcademyStudentDashboard = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 'AC-101', name: 'Inspección de Obras Civiles', instructor: 'Ing. López', status: 'En curso', grade: 72, attempts: 1, maxAttempts: 3 },
    { id: 'AC-102', name: 'Seguridad Industrial', instructor: 'Ing. Torres', status: 'Completado', grade: 88, attempts: 2, maxAttempts: 3 },
    { id: 'AC-103', name: 'Gestión de Proyectos', instructor: 'Ing. Ramírez', status: 'En curso', grade: 64, attempts: 2, maxAttempts: 3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">Academia - Panel del Estudiante</p>
              <h1 className="mt-4 text-4xl font-extrabold text-gray-900">Mis cursos y pruebas</h1>
              <p className="mt-3 text-gray-500 max-w-2xl">Revisa tus cursos activos, los resultados de tus evaluaciones y el estado de tus oportunidades de prueba. La nota mínima aprobatoria es 80%.</p>
            </div>
            <button onClick={() => navigate('/quiz')} className="inline-flex items-center gap-3 rounded-3xl bg-yellow-500 px-6 py-3 font-bold uppercase text-black hover:bg-yellow-400 transition">
              <BookOpen size={18} /> Ir a la Prueba
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 text-yellow-600"><GraduationCap size={22} /> <span className="font-bold uppercase text-sm">Cursos Actuales</span></div>
            <p className="mt-4 text-4xl font-black text-gray-900">2</p>
            <p className="text-sm text-gray-500 mt-2">Cursos en progreso y próximos.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 text-blue-600"><Award size={22} /> <span className="font-bold uppercase text-sm">Intentos restantes</span></div>
            <p className="mt-4 text-4xl font-black text-gray-900">5 / 9</p>
            <p className="text-sm text-gray-500 mt-2">Máximo 3 oportunidades por curso.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 text-green-600"><CheckCircle2 size={22} /> <span className="font-bold uppercase text-sm">Aprobación mínima</span></div>
            <p className="mt-4 text-4xl font-black text-gray-900">80%</p>
            <p className="text-sm text-gray-500 mt-2">Nota mínima para aprobar cada prueba.</p>
          </div>
        </div>

        <div className="space-y-6">
          {courses.map((course) => {
            const canAttempt = course.attempts < course.maxAttempts && course.grade < 80;
            const statusLabel = course.grade >= 80 ? 'Aprobado' : 'Pendiente';
            return (
              <div key={course.id} className="rounded-[2rem] bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">{course.status}</span>
                    <h2 className="mt-4 text-2xl font-extrabold text-gray-900">{course.name}</h2>
                    <p className="mt-2 text-gray-500">Instructor: {course.instructor}</p>
                  </div>
                  <div className="flex flex-col gap-3 text-right">
                    <div className="text-sm text-gray-500">Intentos usados</div>
                    <div className="text-3xl font-black text-gray-900">{course.attempts} / {course.maxAttempts}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-3xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">Última nota</p>
                    <p className="mt-2 text-3xl font-black text-gray-900">{course.grade}%</p>
                  </div>
                  <div className="rounded-3xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">Estado de prueba</p>
                    <p className="mt-2 font-bold text-gray-900">{statusLabel}</p>
                  </div>
                  <div className="rounded-3xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">Siguiente oportunidad</p>
                    <p className="mt-2 text-gray-900">{Math.max(0, course.maxAttempts - course.attempts)} restantes</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm text-gray-500">Para aprobar necesitas alcanzar 80% y no tener más de 3 intentos.</p>
                  <button
                    onClick={() => navigate('/quiz')}
                    disabled={!canAttempt}
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold transition ${canAttempt ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    <BookOpen size={18} /> {canAttempt ? 'Presentar prueba' : 'Intentos agotados'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
