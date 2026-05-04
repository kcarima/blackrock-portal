import React, { useState, useEffect } from 'react';
import { Users, Award, HardHat, Wrench } from 'lucide-react';
import { apiService } from '../services/apiService';
import { INITIAL_DATA } from '../data/mockData.js';

export const Team = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const teamData = await apiService.getTeam();
        if (teamData) {
          setData(prevData => ({
            ...prevData,
            team: teamData
          }));
        }
      } catch (error) {
        console.error('Error loading team data from API:', error);
        // Fallback to localStorage if API fails
        const savedData = localStorage.getItem('portalData');
        if (savedData) {
          setData(JSON.parse(savedData));
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const teamMembers = data.team;

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
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <Users size={48} className="text-gray-400" />
                    </div>
                  )}
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