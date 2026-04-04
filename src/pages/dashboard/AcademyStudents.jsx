import React from 'react';
import { Users, AlertCircle, CheckCircle2, RotateCcw, Edit } from 'lucide-react';

export const AcademyStudents = () => {
  // Los estudiantes pueden tener N cursos e indicar si están repitiendo
  const students = [
    { id: "EST-101", name: "Carlos Mendoza", email: "carlos.m@correo.com", courses: [
      { name: "Operador de Maquinaria", status: "Aprobado" },
      { name: "Seguridad Industrial", status: "Cursando" }
    ]},
    { id: "EST-102", name: "Ana Silva", email: "ana.silva@correo.com", courses: [
      { name: "Mantenimiento Preventivo", status: "Reprobado (Repitiendo)" }
    ]},
    { id: "EST-103", name: "Luis Pérez", email: "luisp@correo.com", courses: [
      { name: "Operador de Maquinaria", status: "Cursando" },
      { name: "Obras Civiles Básicas", status: "Cursando" }
    ]},
  ];

  const getStatusIcon = (status) => {
    if(status.includes('Aprobado')) return <CheckCircle2 size={14} className="text-green-500"/>;
    if(status.includes('Repitiendo')) return <RotateCcw size={14} className="text-red-500"/>;
    return <AlertCircle size={14} className="text-yellow-500"/>;
  };

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Directorio de Estudiantes</h1>
        <p className="text-gray-500 text-sm mt-1">Gestión de estudiantes y su seguimiento multicurso.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {students.map((student, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                <Users size={20}/>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.id} | {student.email}</p>
              </div>
            </div>
            
            <div className="flex-1 w-full md:w-auto bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase mb-3">Cursos Inscritos ({student.courses.length})</p>
              <div className="space-y-2">
                {student.courses.map((c, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-800">{c.name}</span>
                    <span className="flex items-center gap-1 text-gray-600 bg-white px-2 py-1 rounded border shadow-sm">
                      {getStatusIcon(c.status)} <span className="text-xs">{c.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <button className="text-gray-500 hover:text-yellow-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Edit size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};