import React from 'react';
import { Users, Award, HardHat, Wrench } from 'lucide-react';

export const Team = () => {
  // Placeholder data - in a real app, this would come from a database
  const teamMembers = [
    {
      name: "Juan Pérez",
      role: "Director General",
      experience: "15 años",
      specialization: "Obras Civiles",
      image: "/api/placeholder/300/300"
    },
    {
      name: "María González",
      role: "Jefa de Inspección",
      experience: "12 años",
      specialization: "Inspección de Obras",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Carlos Rodríguez",
      role: "Supervisor de Construcción",
      experience: "10 años",
      specialization: "Construcción Residencial",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Nuestro Equipo
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Conoce al equipo profesional detrás de BlackRock Guayana C.A.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Profesionales Calificados
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold text-center mb-4">{member.role}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{member.experience} de experiencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardHat className="w-4 h-4" />
                    <span>{member.specialization}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-8">
            Experiencia Comprobada
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-2xl">
              <Wrench className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Más de 30 años</h3>
              <p className="text-gray-300">Experiencia colectiva en el sector de la construcción</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Certificaciones</h3>
              <p className="text-gray-300">Profesionales certificados a nivel internacional</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Equipo Comprometido</h3>
              <p className="text-gray-300">Personal dedicado a la calidad y seguridad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};