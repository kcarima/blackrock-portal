import React from 'react';
import { Truck, Mountain, HardHat, CheckCircle } from 'lucide-react';

export const Earthwork = () => {
  const features = [
    "Excavaciones de precisión",
    "Nivelaciones milimétricas",
    "Movimiento de tierras a gran escala",
    "Maquinaria de última generación",
    "Personal altamente capacitado",
    "Cumplimiento de normativas ambientales"
  ];

  const projects = [
    {
      title: "Complejo Industrial Sur",
      description: "Movimiento de tierras para instalación industrial",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Vialidad Troncal 10",
      description: "Excavación y nivelación para carretera",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Terraza Residencial",
      description: "Preparación de terreno para urbanización",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Movimiento de Tierras
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Especialistas en excavaciones, nivelaciones y preparación de terrenos con equipos de alta tecnología
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Excelencia en Movimiento de Tierras
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-8"></div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6 text-justify">
                Contamos con una flota de maquinaria pesada de última generación y un equipo de operadores certificados
                para realizar trabajos de movimiento de tierras con la máxima precisión y eficiencia.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Movimiento de Tierras" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mountain className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Proyectos Realizados
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-justify">{project.description}</p>
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
            ¿Necesitas Movimiento de Tierras?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-justify">
            Contáctanos para una evaluación gratuita de tu proyecto.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Solicitar Información
          </button>
        </div>
      </section>
    </div>
  );
};