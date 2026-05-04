import React, { useState, useEffect } from 'react';
import { CheckCircle, Wrench, Building, Zap, Droplets, Paintbrush, TreePine, HardHat } from 'lucide-react';
import { apiService } from '../services/apiService';
import { INITIAL_DATA } from '../data/mockData.js';

export const Services = () => {
  const [servicesDescription, setServicesDescription] = useState(INITIAL_DATA.servicesDescription);
  const [servicesList, setServicesList] = useState(INITIAL_DATA.servicesList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const servicesData = await apiService.getServices();
        if (servicesData) {
          setServicesDescription(servicesData.servicesDescription || INITIAL_DATA.servicesDescription);
          setServicesList(servicesData.servicesList || INITIAL_DATA.servicesList);
        }
      } catch (error) {
        console.error('Error loading services from API:', error);
        // Fallback to localStorage if API fails
        const savedData = localStorage.getItem('portalData');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setServicesDescription(parsedData.servicesDescription || INITIAL_DATA.servicesDescription);
          setServicesList(parsedData.servicesList || INITIAL_DATA.servicesList);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getIcon = (service) => {
    const iconMap = {
      'Construcción': <Building className="w-8 h-8" />,
      'Diseño': <HardHat className="w-8 h-8" />,
      'Dirección': <CheckCircle className="w-8 h-8" />,
      'Remodelación': <Wrench className="w-8 h-8" />,
      'Mantenimiento': <Wrench className="w-8 h-8" />,
      'electricidad': <Zap className="w-8 h-8" />,
      'plomeria': <Droplets className="w-8 h-8" />,
      'pintura': <Paintbrush className="w-8 h-8" />,
      'áreas verdes': <TreePine className="w-8 h-8" />,
      'Inspección': <CheckCircle className="w-8 h-8" />,
      'Proyectos': <Building className="w-8 h-8" />,
      'tráiler': <Building className="w-8 h-8" />,
      'Formación': <HardHat className="w-8 h-8" />,
      'Aire acondicionado': <Zap className="w-8 h-8" />
    };
    for (const key in iconMap) {
      if (service.toLowerCase().includes(key.toLowerCase())) return iconMap[key];
    }
    return <CheckCircle className="w-8 h-8" />;
  };

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="text-center mt-4">Cargando servicios...</p>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Nuestros Servicios
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Ofrecemos una amplia gama de servicios de construcción, remodelación e inspección con los más altos estándares de calidad
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Sobre Nuestros Servicios
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              {servicesDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Servicios Ofrecidos
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="text-yellow-500 mb-4">
                  {getIcon(service)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service}</h3>
                <p className="text-gray-600 text-justify">
                  Servicio especializado con equipos de alta tecnología y personal calificado para garantizar resultados óptimos.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-8">
            ¿Necesitas Nuestros Servicios?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-justify">
            Contáctanos para obtener una cotización personalizada y discutir cómo podemos ayudarte con tu proyecto.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Solicitar Cotización
          </button>
        </div>
      </section>
    </div>
  );
};