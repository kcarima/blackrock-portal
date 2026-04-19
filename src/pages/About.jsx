import React from 'react';
import { Building2, Target, Calendar, MapPin } from 'lucide-react';
import { INITIAL_DATA } from '../data/mockData.js';

export const About = () => {
  const { company } = INITIAL_DATA;

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Nuestra Empresa
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Conoce más sobre BlackRock Guayana C.A. y nuestro compromiso con la excelencia
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Sobre Nosotros
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-8"></div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6 text-justify">
                {company.about}
              </p>
            </div>
            <div className="relative">
              <img 
                src={company.logo} 
                alt="BlackRock Guayana" 
                className="w-full h-96 object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Nuestra Visión
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed text-xl text-justify">
              {company.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building2 className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Nuestras Metas
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed text-xl text-justify">
              {company.goals}
            </p>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
              Información Legal
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <Calendar className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Fecha de Registro</h3>
              <p className="text-gray-300 text-justify">{company.registrationDate}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Lugar de Registro</h3>
              <p className="text-gray-300 text-justify">{company.registrationPlace}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-8">
            Contáctanos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">Teléfono</h3>
              <p className="text-justify">{company.phone}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-justify">{company.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Dirección</h3>
              <p className="text-justify">{company.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};