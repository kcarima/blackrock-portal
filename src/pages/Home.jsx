import React from 'react';
import { HardHat, Building2, Wrench, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HeroCarousel } from '../components/ui/HeroCarousel.jsx';

export const Home = ({ data }) => {
  const navigate = useNavigate();
  const renderIcon = (name) => {
    const icons = { HardHat: <HardHat size={32}/>, Building2: <Building2 size={32}/>, Wrench: <Wrench size={32}/>, FileText: <FileText size={32}/>, ShieldCheck: <ShieldCheck size={32}/> };
    return icons[name] || <CheckCircle2 size={32}/>;
  };

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      <HeroCarousel slides={data.heroSlides} />

      {/* Servicios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 uppercase">Nuestros Servicios</h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services.map((s, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-yellow-500 shadow-sm transition-all group">
                <div className="text-yellow-600 mb-6 bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black">{renderIcon(s.iconName)}</div>
                <h3 className="text-xl font-extrabold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academia */}
      <section className="py-24 bg-yellow-500 text-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">{data.academy.title}</h2>
            <div className="w-24 h-1.5 bg-black mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.academy.courses.map(course => (
              <div key={course.id} className="bg-white rounded-2xl p-8 shadow-2xl border-b-4 border-black">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-black">{renderIcon(course.icon)}</div>
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <button onClick={() => navigate('/academy')} className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800">Entrar a la Academia</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};