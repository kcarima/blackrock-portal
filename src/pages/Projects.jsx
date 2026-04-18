import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Projects = ({ data }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 min-h-screen pb-24">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-4">Proyectos</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Nuestro portafolio completo</h1>
              <p className="mt-4 max-w-2xl text-gray-600">Explora los proyectos ejecutados por BlackRock Guayana y revisa cada desarrollo con enfoque en calidad, seguridad y resultados.</p>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
              Volver al Home <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="group block overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">{project.category}</span>
                  <h2 className="mt-5 text-2xl font-extrabold text-gray-900">{project.title}</h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="mt-8 flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-wide">
                    Ver detalles <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
