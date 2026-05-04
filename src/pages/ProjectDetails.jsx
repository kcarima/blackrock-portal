import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Calendar, ShieldCheck } from 'lucide-react';

export const ProjectDetails = ({ data }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = data.projects.find((item) => item.id.toString() === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-2xl rounded-3xl border border-gray-200 bg-white p-10 shadow-xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Proyecto no encontrado</h1>
          <p className="text-gray-600 mb-8">El proyecto solicitado no existe o ya no está disponible.</p>
          <button onClick={() => navigate('/projects')} className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black hover:bg-yellow-400 transition">
            Volver a Proyectos <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <section className="relative overflow-hidden bg-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button onClick={() => navigate('/projects')} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-yellow-500 hover:text-yellow-400 mb-8">
            <ArrowLeft size={16} /> Volver a Proyectos
          </button>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-start">
            <div>
              <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">{project.category}</span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900">{project.title}</h1>
              <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl">{project.description}</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-center gap-3 text-yellow-500 mb-4"><MapPin size={24} /><span className="font-bold">Ubicación</span></div>
                  <p className="text-gray-700">{project.location}</p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-center gap-3 text-yellow-500 mb-4"><Calendar size={24} /><span className="font-bold">Año</span></div>
                  <p className="text-gray-700">{project.year}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Alcance del proyecto</h2>
                <ul className="space-y-3">
                  {project.details.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 text-yellow-500"><CheckCircle2 size={18} /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6 rounded-3xl bg-gray-900 p-8 text-white shadow-2xl">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                <img src={project.image_url || project.img} alt={project.title} className="w-full h-96 object-cover" />
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/5 p-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-3">Resumen</h3>
                  <p className="text-gray-200 leading-relaxed">Este proyecto combina experiencia en obras civiles, infraestructura y gestión de obra para garantizar entregas seguras y eficientes.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-3">Beneficios</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center gap-2"><ShieldCheck size={18} /> Mayor seguridad constructiva</li>
                    <li className="flex items-center gap-2"><ShieldCheck size={18} /> Control total de tiempos</li>
                    <li className="flex items-center gap-2"><ShieldCheck size={18} /> Calidad certificada</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
