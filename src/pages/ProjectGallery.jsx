import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';

export const ProjectGallery = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Industria', 'Remodelación', 'Casas Trailes', 'Casas', 'Edificios'];

  const filteredProjects = selectedCategory === 'Todos'
    ? data.portfolio
    : data.portfolio.filter(project => project.category === selectedCategory);

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 min-h-screen pb-24">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <p className="text-2xl uppercase tracking-[0.1em] font-bold text-yellow-600 mb-4">Galería de Proyectos</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Nuestro Portafolio Visual</h1>
              <p className="mt-4 max-w-2xl text-gray-800">Explora nuestra colección de proyectos clasificados por tipo. Cada imagen representa la calidad y el compromiso de BlackRock Guayana.</p>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-yellow-600 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-yellow-600 transition hover:bg-yellow-500 hover:text-black">
              Volver al Inicio <ArrowRight size={16} />
            </Link>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-wide transition ${
                  selectedCategory === category
                    ? 'bg-yellow-600 text-black'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Galería */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group block overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img src={project.image_url || project.img} alt={project.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver Proyecto
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">{project.category}</span>
                  <h2 className="mt-5 text-2xl font-extrabold text-gray-900">{project.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No hay proyectos disponibles en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};