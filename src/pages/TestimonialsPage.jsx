import React from 'react';
import { Star, Quote } from 'lucide-react';
import { INITIAL_DATA } from '../data/mockData.js';

export const TestimonialsPage = () => {
  const { testimonials } = INITIAL_DATA;

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Testimonios
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Lo que dicen nuestros clientes sobre nuestros servicios
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500">
                <Quote className="w-8 h-8 text-yellow-500 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-gray-200">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
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
            ¿Quieres Compartir tu Experiencia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-justify">
            Tu opinión es importante para nosotros. Contáctanos para compartir tu testimonio.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
};