import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroCarousel = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <section className="relative bg-gray-900 text-white h-[85vh] min-h-[600px] overflow-hidden group">
      {slides.map((slide, idx) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <img src={slide.image_url || slide.img} alt={slide.title} className="w-full h-full object-cover opacity-100" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="inline-block bg-yellow-500/10 px-5 py-2 rounded-full text-yellow-500 font-bold mb-6 uppercase tracking-widest backdrop-blur-sm">{slide.subtitle}</div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg">{slide.title}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-500 text-white p-3 rounded-full"><ChevronLeft size={28}/></button>
      <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-500 text-white p-3 rounded-full"><ChevronRight size={28}/></button>
    </section>
  );
};