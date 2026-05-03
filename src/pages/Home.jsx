import React, { useState, useEffect } from 'react';
import { HardHat, Building2, Wrench, FileText, ShieldCheck, CheckCircle2, ArrowRight, Home as HomeIcon, PenTool } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroCarousel } from '../components/ui/HeroCarousel.jsx';
import { INITIAL_DATA } from '../data/mockData.js';

export const Home = () => {
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    const savedData = localStorage.getItem('portalData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const navigate = useNavigate();
  const renderIcon = (name) => {
    const icons = {
      HardHat: <HardHat size={32} />,
      Building2: <Building2 size={32} />, 
      Wrench: <Wrench size={32} />, 
      FileText: <FileText size={32} />, 
      ShieldCheck: <ShieldCheck size={32} />,
      Home: <HomeIcon size={32} />,
      PenTool: <PenTool size={32} />
    };
    return icons[name] || <CheckCircle2 size={32} />;
  };

  const leftServices = data.tsServices.slice(0, 3);
  const rightServices = data.tsServices.slice(3);

  const stats = data.stats;

  const testimonials = data.testimonials;

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

      {/* Sección facts */}
      <section id="facts" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-gray-950 p-8 text-center shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">Visitas</p>
              <p className="text-5xl font-extrabold mt-4">{stats.visitors.toLocaleString()}</p>
            </div>
            <div className="rounded-3xl bg-gray-950 p-8 text-center shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">Dirige</p>
              <p className="text-5xl font-extrabold mt-4">{stats.leads}</p>
            </div>
            <div className="rounded-3xl bg-gray-950 p-8 text-center shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">Proyectos</p>
              <p className="text-5xl font-extrabold mt-4">{stats.projects}</p>
            </div>
            <div className="rounded-3xl bg-gray-950 p-8 text-center shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-500">Presupuestos</p>
              <p className="text-5xl font-extrabold mt-4">{stats.pendingQuotes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ts-service-area */}
      <section id="ts-service-area" className="ts-service-area pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-5xl font-extrabold text-gray-900">Somos especialistas en</h2>
            <h3 className="section-sub-title text-xl text-gray-700 mt-4">Lo que hacemos</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <div className="space-y-6">
              {leftServices.map((service, index) => (
                <div key={index} className="ts-service-box flex gap-4 p-6 rounded-3xl border border-gray-400 shadow-sm hover:shadow-lg transition-shadow bg-gray-50">
                  <div className="ts-service-box-img bg-yellow-50 text-yellow-600 w-16 h-16 rounded-3xl flex items-center justify-center">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-800">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md h-54">
                <img src={data.inspector} alt="Service highlight" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              {rightServices.map((service, index) => (
                <div key={index} className="ts-service-box flex gap-4 p-6 rounded-3xl border border-gray-400 shadow-sm hover:shadow-lg transition-shadow bg-gray-50">
                  <div className="ts-service-box-img bg-yellow-50 text-yellow-600 w-16 h-16 rounded-3xl flex items-center justify-center">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="ts-service-box-info">
                    <h3 className="service-box-title text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-800">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección project-area */}
      <section id="project-area" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-8">
        <div className="mb-6 md:mb-0">
          <h2 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
            <span className="w-8 h-1 bg-yellow-500 rounded-full"></span> Nuestro Portafolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">Proyectos Destacados</h3>
        </div>
        <button onClick={() => navigate('/projects')} className="hidden md:inline-flex bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 px-8 py-3 rounded-md font-bold uppercase tracking-wider transition-colors items-center gap-2">
          Ver Todos <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer block">
              <img 
                src={project.img} 
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
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button onClick={() => navigate('/projects')} className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-colors w-full flex justify-center items-center gap-2">
            Ver Todos los Proyectos <ArrowRight size={18} />
          </button>
        </div>
      </div>
      </section>
     
      {/* Sección Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-sub-title text-4xl font-bold uppercase tracking-[0.2em] text-yellow-500 mb-3">Testimonios</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all bg-gray-50">
                <p className="text-gray-700 leading-relaxed mb-6">“{item.quote}”</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-gray-200">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
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