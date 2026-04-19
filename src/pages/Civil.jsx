import React from 'react';
import { Building2, HardHat, CheckCircle, Wrench } from 'lucide-react';

export const Civil = () => {
  const services = [
    "Infraestructuras comerciales",
    "Edificaciones industriales",
    "Obras públicas",
    "Construcción residencial",
    "Remodelaciones",
    "Mantenimiento de obras"
  ];

  const technologies = [
    {
      title: "Tecnología Avanzada",
      description: "Utilizamos equipos de medición láser y software BIM para precisión milimétrica",
      icon: <HardHat className="w-8 h-8" />
    },
    {
      title: "Materiales de Calidad",
      description: "Trabajamos con proveedores certificados para garantizar durabilidad",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Equipo Experto",
      description: "Profesionales con más de 30 años de experiencia en obras civiles",
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Obras Civiles
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Especialistas en construcción de infraestructuras comerciales e industriales con los más altos estándares
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building2 className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Servicios Ofrecidos
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <CheckCircle className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service}</h3>
                <p className="text-gray-600 text-justify">
                  Servicio completo con supervisión técnica y control de calidad en cada etapa.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Tecnología y Experiencia
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 text-justify">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-8">
            ¿Proyecto de Obras Civiles?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-justify">
            Hablemos de tu proyecto. Ofrecemos consultoría gratuita y presupuestos detallados.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Contactar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};