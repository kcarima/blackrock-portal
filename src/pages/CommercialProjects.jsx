import React, { useState, useEffect } from 'react';
import { Building, ArrowRight } from 'lucide-react';
import { apiService } from '../services/apiService';
import { INITIAL_DATA } from '../data/mockData.js';

export const CommercialProjects = () => {
  const [projects, setProjects] = useState(INITIAL_DATA.projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const projectsData = await apiService.getProjects();
        if (projectsData) {
          setProjects(projectsData);
        }
      } catch (error) {
        console.error('Error loading projects from API:', error);
        // Fallback to localStorage if API fails
        const savedData = localStorage.getItem('portalData');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setProjects(parsedData.projects || INITIAL_DATA.projects);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const commercialProjects = projects.filter(project => project.category === 'Comercial');

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="text-center mt-4">Cargando proyectos...</p>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Proyectos Comerciales
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Descubre nuestros proyectos comerciales más destacados
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Nuestros Proyectos
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialProjects.map(project => (
              <div key={project.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden group cursor-pointer">
                <img 
                  src={project.image_url || project.img} 
                  alt={project.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-8">
                  <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.location} - {project.year}</span>
                    <div className="flex items-center gap-2 text-yellow-500 font-semibold">
                      Ver Detalles <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-8">
            ¿Tienes un Proyecto Comercial?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-justify">
            Cuéntanos sobre tu visión. Desarrollamos proyectos comerciales desde la concepción hasta la entrega final.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Iniciar Proyecto
          </button>
        </div>
      </section>
    </div>
  );
};