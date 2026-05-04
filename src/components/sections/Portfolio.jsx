import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Portfolio = ({ projects = [] }) => (
  <div className="py-24 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-8">
        <div className="mb-6 md:mb-0">
          <h2 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
            <span className="w-8 h-1 bg-yellow-500 rounded-full"></span> Nuestro Portafolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">Proyectos Destacados</h3>
        </div>
        <button className="hidden md:inline-flex bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 px-8 py-3 rounded-md font-bold uppercase tracking-wider transition-colors items-center gap-2">
          Ver Todos <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer">
            <img 
              src={project.image_url || project.img} 
              alt={project.title} 
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded mb-4">
                {project.category}
              </span>
              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h4>
              <div className="flex items-center gap-2 text-yellow-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-4">
                Ver Detalles <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center md:hidden">
        <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-colors w-full flex justify-center items-center gap-2">
          Ver Todos los Proyectos <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
);

export default Portfolio;