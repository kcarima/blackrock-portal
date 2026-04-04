import React, { useState } from 'react';
import { BookOpen, Calendar, Users, PlusCircle, Edit, ArrowLeft, Save, Search, UserMinus, UserPlus, FileText } from 'lucide-react';
import jsPDF from 'jspdf';

export const AcademyCourses = () => {
  const [formData, setFormData] = useState({ id: '', name: '', period: '', capacity: '', status: 'Próximo' });
  const [view, setView] = useState('list');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: "C-001", name: "Operador de Maquinaria Pesada", period: "2024-I", capacity: 30, enrolled: 25, status: "Activo" },
    { id: "C-002", name: "Seguridad Industrial y Riesgos", period: "2024-I", capacity: 20, enrolled: 20, status: "Lleno" },
    { id: "C-003", name: "Mantenimiento Preventivo", period: "2024-II", capacity: 25, enrolled: 0, status: "Próximo" },
  ];

  const [enrolledStudents, setEnrolledStudents] = useState([
    { id: "EST-101", name: "Carlos Mendoza", email: "carlos.m@correo.com", phone: "+51 987 654 321", status: "Cursando" },
    { id: "EST-103", name: "Luis Pérez", email: "luisp@correo.com", phone: "+51 912 345 678", status: "Repitiendo" },
  ]);

  const handleGenerateList = (course) => {
    setSelectedCourse(course);
    setView('students');
  };
  
  // ACCIONES: Vistas de Formulario (Crear o Editar)
  const handleOpenCreate = () => {
    setFormData({ id: '', name: '', period: '', capacity: '', status: 'Próximo' });
    setSelectedCourse(null);
    setView('form');
  };

  const handleOpenEdit = (course) => {
    setFormData(course);
    setSelectedCourse(course);
    setView('form');
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    alert(`Curso ${formData.name} guardado con éxito.`);
    setView('list');
  };

  // ACCIONES: Gestión de Estudiantes (Inclusión / Exclusión)
  const handleRemoveStudent = (studentId) => {
    if(window.confirm("¿Estás seguro de que deseas excluir a este estudiante del curso?")) {
      setEnrolledStudents(enrolledStudents.filter(s => s.id !== studentId));
      alert(`Estudiante excluido del curso exitosamente.`);
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (enrolledStudents.length >= selectedCourse.capacity) {
      alert("No se puede inscribir más estudiantes. El curso ha alcanzado su capacidad máxima.");
      return;
    }
    setEnrolledStudents([...enrolledStudents, { id: "EST-999", name: "Nuevo Alumno Test", email: "nuevo@correo.com", phone: "+51 900 123 456", status: "Cursando" }]);
    alert("Estudiante incluido al curso exitosamente.");
  };

  const handleGeneratePDF = async () => {
    const doc = new jsPDF();
    
    // Cargar logo
    let logoData = null;
    try {
      const response = await fetch('/membrete.jpg');
      const blob = await response.blob();
      const reader = new FileReader();
      logoData = await new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error cargando logo:', error);
    }
    
    if (logoData) {
      doc.addImage(logoData, 'JPEG', 10, 10, 45, 30);
    }
    
    // Fecha del reporte en esquina superior derecha
    const currentDate = new Date().toLocaleDateString('es-ES');
    doc.setFontSize(10);
    doc.text(`Fecha: ${currentDate}`, 170, 20);
    
    // Número de página debajo de la fecha
    doc.text('Página 1', 170, 25);
    
    // Título
    doc.setFontSize(16);
    doc.text('Listado de Estudiantes Inscritos', 105, 50, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`${selectedCourse?.name} - ${selectedCourse?.period}`, 105, 58, { align: 'center' });

    // Encabezado de la tabla
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('ID', 10, 75);
    doc.text('Nombre', 30, 75);
    doc.text('Correo', 80, 75);
    doc.text('Teléfono', 130, 75);
    doc.text('Condición', 170, 75);

    // Lista de estudiantes
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    enrolledStudents.forEach((student, index) => {
      const y = 85 + index * 8;
      doc.text(student.id, 10, y);
      doc.text(student.name, 30, y);
      doc.text(student.email, 80, y);
      doc.text(student.phone || '-', 130, y);
      doc.text(student.status, 170, y);
    });
    
    doc.save(`listado-inscritos-${selectedCourse?.id}.pdf`);
  };

  // ----- VISTA 1: Formulario de Creación / Edición -----
  if (view === 'form') {
    return (
      <div className="p-6 md:p-8 animate-in fade-in duration-300">
        <button onClick={() => setView('list')} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold mb-6">
          <ArrowLeft size={18} /> Volver al listado de cursos
        </button>
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
            {selectedCourse ? `Editar Curso: ${selectedCourse.id}` : 'Crear Nuevo Curso'}
          </h1>
          <p className="text-gray-500 text-sm mt-1">Configure los detalles del programa académico.</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8 max-w-3xl">
          <form onSubmit={handleSaveCourse} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Código del Curso</label>
                <input type="text" required disabled={!!selectedCourse} className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 ${selectedCourse ? 'bg-gray-100' : 'bg-gray-50'}`} placeholder="Ej. C-004" value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Nombre del Curso</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Ej. Obras Civiles Avanzadas" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Periodo Académico</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Ej. 2024-III" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Capacidad Máxima (Cupos)</label>
                <input type="number" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Ej. 25" value={formData.capacity} onChange={e => setFormData({...formData, capacity: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Estado</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                  <option value="Próximo">Próximo</option>
                  <option value="Activo">Activo</option>
                  <option value="Lleno">Lleno</option>
                </select>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-100 flex gap-3">
              <button type="submit" className="bg-gray-900 text-yellow-500 font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                <Save size={18} /> Guardar Cambios
              </button>
              <button type="button" onClick={() => setView('list')} className="bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  // ----- VISTA 2: Inclusión y Exclusión de Estudiantes -----
  if (view === 'students') {
    return (
      <div className="p-6 md:p-8 animate-in fade-in duration-300">
        <button onClick={() => setView('list')} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold mb-6">
          <ArrowLeft size={18} /> Volver al listado de cursos
        </button>
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-center md:text-left w-full md:w-auto">
            <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight text-center">Listado de Estudiantes Inscritos</h1>
            <p className="text-gray-500 text-sm mt-1 text-center">{selectedCourse?.name} - {selectedCourse?.period}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={handleGeneratePDF} className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-sm">
              <FileText size={18} /> Generar PDF
            </button>
            <div className="bg-white px-5 py-2.5 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 h-fit">
              <span className="text-xs font-bold text-gray-500 uppercase">Cupos Ocupados: </span>
              <span className="font-black text-gray-900 text-lg">{enrolledStudents.length} / {selectedCourse?.capacity}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Izquierda: Tabla de Alumnos Inscritos (Exclusión) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-fit">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
               <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm flex items-center gap-2"><Users size={18}/> Alumnos Inscritos</h3>
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                 <input type="text" placeholder="Buscar alumno..." className="pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-yellow-500 w-full sm:w-auto" />
               </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-white text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                     <th className="p-4 font-bold">ID</th>
                     <th className="p-4 font-bold">Estudiante</th>
                     <th className="p-4 font-bold">Correo</th>
                     <th className="p-4 font-bold">Teléfono</th>
                     <th className="p-4 font-bold">Condición</th>
                     <th className="p-4 font-bold text-center">Excluir</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm divide-y divide-gray-100">
                   {enrolledStudents.map((student) => (
                     <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">{student.id}</td>
                        <td className="p-4 text-gray-700">
                          <p className="font-bold text-gray-900">{student.name}</p>
                        </td>
                        <td className="p-4 text-gray-700 text-sm break-words">{student.email}</td>
                        <td className="p-4 text-gray-700 text-sm">{student.phone}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${student.status === 'Repitiendo' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                           <button onClick={() => handleRemoveStudent(student.id)} className="text-red-500 hover:text-white p-2 bg-red-50 rounded-lg hover:bg-red-500 transition-colors" title="Excluir del curso">
                             <UserMinus size={18} />
                           </button>
                        </td>
                     </tr>
                   ))}
                   {enrolledStudents.length === 0 && (
                      <tr><td colSpan="6" className="p-8 text-center text-gray-500">No hay estudiantes inscritos en este curso aún.</td></tr>
                   )}
                 </tbody>
              </table>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Inclusión */}
          <div className="bg-white rounded-2xl border border-yellow-400 shadow-sm p-6 relative overflow-hidden h-fit">
             <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-bl-full -z-10"></div>
             <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wider text-sm flex items-center gap-2">
               <UserPlus size={18} className="text-yellow-600"/> Inscribir Estudiante
             </h3>
             <form onSubmit={handleAddStudent} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Buscar en Directorio</label>
                  <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 text-sm" placeholder="ID del estudiante o correo..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Condición de Inscripción</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 text-sm">
                    <option value="Nuevo Ingreso">Nuevo Ingreso</option>
                    <option value="Repitiendo">Repitiendo Curso</option>
                  </select>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-xs text-yellow-800 leading-relaxed font-medium">
                    Al procesar la inscripción, se le notificará automáticamente por correo y se le dará acceso al material y evaluaciones del curso.
                  </p>
                </div>
                <button type="submit" className="w-full bg-gray-900 text-yellow-500 font-bold py-3 px-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 mt-2">
                  <PlusCircle size={18} /> Procesar Inscripción
                </button>
             </form>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-6 md:p-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Gestión de Cursos</h1>
          <p className="text-gray-500 text-sm mt-1">Cursos ofrecidos en cualquier periodo académico.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar cursos..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64 bg-gray-50" 
            />
          </div>
          <button onClick={handleOpenCreate} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-yellow-400 transition-colors shadow-sm">
            <PlusCircle size={18}/> Nuevo Curso
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-2 sm:p-4 font-bold">Código</th>
                <th className="p-2 sm:p-4 font-bold"><BookOpen size={16} className="text-gray-400 mr-2 inline" />Nombre del Curso</th>
                <th className="p-2 sm:p-4 font-bold hidden sm:table-cell"><Calendar size={14} className="text-gray-400 mr-1 inline" />Periodo</th>
                <th className="p-2 sm:p-4 font-bold"><Users size={14} className="text-gray-400 mr-1 inline" />Cupos / Inscritos</th>
                <th className="p-2 sm:p-4 font-bold">Estado</th>
                <th className="p-2 sm:p-4 font-bold text-center"><Edit size={16} className="text-gray-400 mr-1 inline" />Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {courses.filter(course => 
                course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                course.id.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((course, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-2 sm:p-4 font-bold text-gray-900">{course.id}</td>
                  <td className="p-2 sm:p-4 font-medium">{course.name}</td>
                  <td className="p-2 sm:p-4 text-gray-600 hidden sm:table-cell">{course.period}</td>
                  <td className="p-2 sm:p-4 text-gray-600">
                    {course.enrolled} / {course.capacity}
                  </td>
                  <td className="p-2 sm:p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      course.status === 'Activo' ? 'bg-green-100 text-green-700' : 
                      course.status === 'Lleno' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4 text-center flex gap-2 justify-center">
                    <button onClick={() => handleOpenEdit(course)} className="text-gray-500 hover:text-yellow-600 p-2" title="Editar curso"><Edit size={16} /></button>
                    <button onClick={() => handleGenerateList(course)} className="text-gray-500 hover:text-blue-600 p-2" title="Gestionar estudiantes"><Users size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};