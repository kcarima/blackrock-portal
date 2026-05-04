import React, { useState, useEffect } from 'react';
import { Settings, Eye, Save, Plus, Edit, Trash2, X } from 'lucide-react';
import { apiService } from '../../services/apiService';
import { INITIAL_DATA } from '../../data/mockData.js';

export const Configuration = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [data, setData] = useState(INITIAL_DATA);
  const [publishedData, setPublishedData] = useState(INITIAL_DATA);
  const [previewMode, setPreviewMode] = useState(false);
  const [previewTab, setPreviewTab] = useState('inicio');
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [loading, setLoading] = useState(true);

  // Estados para edición
  const [editingService, setEditingService] = useState(null);
  const [editingSpecialty, setEditingSpecialty] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [editingAcademy, setEditingAcademy] = useState(null);
  const [editingCompany, setEditingCompany] = useState(null);
  const [editingTeamMember, setEditingTeamMember] = useState(null);
  const [testimonialEdit, setTestimonialEdit] = useState({ name: '', role: '', quote: '', image_url: '' });
  const [teamEdit, setTeamEdit] = useState({ name: '', role: '', experience: '', specialization: '', image_url: '' });
  const [editingHeroSlide, setEditingHeroSlide] = useState(null);
  const [heroSlideEdit, setHeroSlideEdit] = useState({ title: '', subtitle: '', image_url: '' });
  const [editingFooter, setEditingFooter] = useState(false);
  const [footerEdit, setFooterEdit] = useState({ copyright: '', socialLinks: [] });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [
          companyData,
          servicesData,
          specialtiesData,
          testimonialsData,
          teamData,
          academyData
        ] = await Promise.all([
          apiService.getCompany(),
          apiService.getServices(),
          apiService.getSpecialties(),
          apiService.getTestimonials(),
          apiService.getTeam(),
          apiService.getAcademy()
        ]);

        const newData = { ...INITIAL_DATA };

        if (companyData) newData.company = companyData;
        if (servicesData) newData.services = servicesData;
        if (specialtiesData) newData.specialties = specialtiesData;
        if (testimonialsData) newData.testimonials = testimonialsData;
        if (teamData) newData.team = teamData;
        if (academyData) {
          newData.academy = academyData.academy || INITIAL_DATA.academy;
          newData.academy.courses = academyData.courses || INITIAL_DATA.academy.courses;
        }

        setData(newData);
        setPublishedData(newData);
      } catch (error) {
        console.error('Error loading data from API:', error);
        // Fallback to localStorage if API fails
        const savedData = localStorage.getItem('portalData');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setData(parsedData);
          setPublishedData(parsedData);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const updateData = (newData) => {
    setData(newData);
    setUnsavedChanges(true);
  };

  const publishChanges = () => {
    localStorage.setItem('portalData', JSON.stringify(data));
    setPublishedData(data);
    setUnsavedChanges(false);
    alert('Cambios publicados definitivamente.');
  };

  const closePreview = () => {
    setPreviewMode(false);
  };

  // Función para convertir imagen a base64
  const handleImageUpload = (event, callback) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        callback(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para vista previa por pestaña
  const handlePreview = (tab = null) => {
    setPreviewTab(tab || activeTab);
    setPreviewMode(true);
  };

  // Funciones CRUD para Servicios
  const addService = () => {
    const newService = { iconName: 'HardHat', title: '', desc: '' };
    updateData({ ...data, services: [...data.services, newService] });
    setEditingService(data.services.length);
  };

  const updateService = (index, field, value) => {
    const updatedServices = [...data.services];
    updatedServices[index][field] = value;
    updateData({ ...data, services: updatedServices });
  };

  const deleteService = (index) => {
    const updatedServices = data.services.filter((_, i) => i !== index);
    updateData({ ...data, services: updatedServices });
  };

  // Funciones CRUD para Testimonios
  const updateTestimonial = (index, field, value) => {
    const updatedTestimonials = [...data.testimonials];
    updatedTestimonials[index][field] = value;
    updateData({ ...data, testimonials: updatedTestimonials });
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = data.testimonials.filter((_, i) => i !== index);
    updateData({ ...data, testimonials: updatedTestimonials });
  };

  const addTestimonial = () => {
    setTestimonialEdit({ name: '', role: '', quote: '', image_url: '' });
    setEditingTestimonial(-1);
  };

  // Funciones CRUD para Equipo
  const updateTeamMember = (index, field, value) => {
    const updatedTeam = [...data.team];
    updatedTeam[index][field] = value;
    updateData({ ...data, team: updatedTeam });
  };

  const deleteTeamMember = (index) => {
    const updatedTeam = data.team.filter((_, i) => i !== index);
    updateData({ ...data, team: updatedTeam });
  };

  const addTeamMember = () => {
    setTeamEdit({ name: '', role: '', experience: '', specialization: '', image_url: '' });
    setEditingTeamMember(-1);
  };

  // Funciones CRUD para Carrusel
  const handleDeleteHeroSlide = (index) => {
    const newSlides = data.heroSlides.filter((_, i) => i !== index);
    updateData({ ...data, heroSlides: newSlides });
  };

  const handleSaveHeroSlide = () => {
    const newSlides = [...data.heroSlides];
    if (editingHeroSlide === -1) {
      // Agregar nuevo slide
      newSlides.push(heroSlideEdit);
    } else {
      // Editar slide existente
      newSlides[editingHeroSlide] = heroSlideEdit;
    }
    updateData({ ...data, heroSlides: newSlides });
    setEditingHeroSlide(null);
    setHeroSlideEdit({ title: '', subtitle: '', image_url: '' });
  };

  // Funciones CRUD para Footer
  const handleSaveFooter = () => {
    updateData({ ...data, footer: footerEdit });
    setEditingFooter(false);
    setFooterEdit({ copyright: '', socialLinks: [] });
  };

  // Modal de edición para Servicios
  const renderServiceModal = () => {
    if (editingService === null) return null;
    const service = data.services[editingService];
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Editar Servicio</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={service.title}
              onChange={(e) => updateService(editingService, 'title', e.target.value)}
              className="w-full p-3 border rounded"
              placeholder="Título del servicio"
            />
            <textarea
              value={service.desc}
              onChange={(e) => updateService(editingService, 'desc', e.target.value)}
              className="w-full p-3 border rounded"
              rows={3}
              placeholder="Descripción"
            />
            <select
              value={service.iconName}
              onChange={(e) => updateService(editingService, 'iconName', e.target.value)}
              className="w-full p-3 border rounded"
            >
              <option value="HardHat">HardHat</option>
              <option value="Building2">Building2</option>
              <option value="Wrench">Wrench</option>
              <option value="FileText">FileText</option>
              <option value="ShieldCheck">ShieldCheck</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => setEditingService(null)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
            <button onClick={() => setEditingService(null)} className="px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
          </div>
        </div>
      </div>
    );
  };

  // Modal de edición para Testimonios
  const renderTestimonialModal = () => {
    if (editingTestimonial === null) return null;
    const isAdding = editingTestimonial === -1;
    const testimonial = isAdding ? testimonialEdit : data.testimonials[editingTestimonial];
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">{isAdding ? 'Agregar' : 'Editar'} Testimonio</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={testimonial.name}
              onChange={(e) => setTestimonialEdit({ ...testimonialEdit, name: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Nombre"
            />
            <input
              type="text"
              value={testimonial.role}
              onChange={(e) => setTestimonialEdit({ ...testimonialEdit, role: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Rol"
            />
            <textarea
              value={testimonial.quote}
              onChange={(e) => setTestimonialEdit({ ...testimonialEdit, quote: e.target.value })}
              className="w-full p-3 border rounded"
              rows={3}
              placeholder="Testimonio"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Imagen</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, (result) => setTestimonialEdit({ ...testimonialEdit, image_url: result }))}
                className="w-full p-3 border rounded"
              />
              {testimonialEdit.image_url && (
                <img src={testimonialEdit.image_url} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded" />
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => { setEditingTestimonial(null); setTestimonialEdit({ name: '', role: '', quote: '', image_url: '' }); }} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
            <button onClick={() => {
              if (isAdding) {
                updateData({ ...data, testimonials: [...data.testimonials, testimonialEdit] });
              } else {
                updateTestimonial(editingTestimonial, 'name', testimonialEdit.name);
                updateTestimonial(editingTestimonial, 'role', testimonialEdit.role);
                updateTestimonial(editingTestimonial, 'quote', testimonialEdit.quote);
                if (testimonialEdit.image_url) {
                  updateTestimonial(editingTestimonial, 'image_url', testimonialEdit.image_url);
                }
              }
              setEditingTestimonial(null);
              setTestimonialEdit({ name: '', role: '', quote: '', image_url: '' });
            }} className="px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
          </div>
        </div>
      </div>
    );
  };

  // Modal de edición para Equipo
  const renderTeamModal = () => {
    if (editingTeamMember === null) return null;
    const isAdding = editingTeamMember === -1;
    const member = isAdding ? teamEdit : data.team[editingTeamMember];
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">{isAdding ? 'Agregar' : 'Editar'} Miembro del Equipo</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={member.name}
              onChange={(e) => setTeamEdit({ ...teamEdit, name: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Nombre"
            />
            <input
              type="text"
              value={member.role}
              onChange={(e) => setTeamEdit({ ...teamEdit, role: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Rol"
            />
            <input
              type="text"
              value={member.experience}
              onChange={(e) => setTeamEdit({ ...teamEdit, experience: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Experiencia"
            />
            <input
              type="text"
              value={member.specialization}
              onChange={(e) => setTeamEdit({ ...teamEdit, specialization: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Especialización"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Imagen</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, (result) => setTeamEdit({ ...teamEdit, image: result }))}
                className="w-full p-3 border rounded"
              />
              {teamEdit.image && (
                <img src={teamEdit.image_url} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded" />
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => { setEditingTeamMember(null); setTeamEdit({ name: '', role: '', experience: '', specialization: '', image: '' }); }} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
            <button onClick={() => {
              if (isAdding) {
                updateData({ ...data, team: [...data.team, teamEdit] });
              } else {
                updateTeamMember(editingTeamMember, 'name', teamEdit.name);
                updateTeamMember(editingTeamMember, 'role', teamEdit.role);
                updateTeamMember(editingTeamMember, 'experience', teamEdit.experience);
                updateTeamMember(editingTeamMember, 'specialization', teamEdit.specialization);
                if (teamEdit.image) {
                  updateTeamMember(editingTeamMember, 'image', teamEdit.image);
                }
              }
              setEditingTeamMember(null);
              setTeamEdit({ name: '', role: '', experience: '', specialization: '', image: '' });
            }} className="px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
          </div>
        </div>
      </div>
    );
  };

  const renderHeroSlideModal = () => {
    if (editingHeroSlide === null) return null;
    const isAdding = editingHeroSlide === -1;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">{isAdding ? 'Agregar' : 'Editar'} Slide del Carrusel</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={heroSlideEdit.title}
              onChange={(e) => setHeroSlideEdit({ ...heroSlideEdit, title: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Título del slide"
            />
            <input
              type="text"
              value={heroSlideEdit.subtitle}
              onChange={(e) => setHeroSlideEdit({ ...heroSlideEdit, subtitle: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Subtítulo del slide"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Imagen</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, (result) => setHeroSlideEdit({ ...heroSlideEdit, image_url: result }))}
                className="w-full p-3 border rounded"
              />
              {heroSlideEdit.image_url && (
                <img src={heroSlideEdit.image_url} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded" />
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => { setEditingHeroSlide(null); setHeroSlideEdit({ title: '', subtitle: '', image_url: '' }); }} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
            <button onClick={handleSaveHeroSlide} className="px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
          </div>
        </div>
      </div>
    );
  };

  const renderFooterModal = () => {
    if (!editingFooter) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Editar Footer</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={footerEdit.copyright || data.footer?.copyright || ''}
              onChange={(e) => setFooterEdit({ ...footerEdit, copyright: e.target.value })}
              className="w-full p-3 border rounded"
              placeholder="Texto de copyright"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enlaces de Redes Sociales (JSON)</label>
              <textarea
                value={JSON.stringify(footerEdit.socialLinks || data.footer?.socialLinks || [], null, 2)}
                onChange={(e) => {
                  try {
                    const links = JSON.parse(e.target.value);
                    setFooterEdit({ ...footerEdit, socialLinks: links });
                  } catch (error) {
                    // Invalid JSON, keep current value
                  }
                }}
                className="w-full p-3 border rounded h-32"
                placeholder='[{"platform": "Facebook", "url": "https://facebook.com/page"}, {"platform": "Instagram", "url": "https://instagram.com/user"}]'
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => { setEditingFooter(false); setFooterEdit({ copyright: '', socialLinks: [] }); }} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
            <button onClick={handleSaveFooter} className="px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
          </div>
        </div>
      </div>
    );
  };

  const renderInicioTab = () => (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">Inicio</h3>

      {/* Nuestros Servicios */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Nuestros Servicios</h4>
          <button onClick={() => handlePreview('inicio')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <div className="space-y-4">
          {data.services.map((service, index) => (
            <div key={index} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h5 className="font-medium">{service.title}</h5>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditingService(index)} className="text-blue-500 hover:text-blue-700">
                  <Edit size={16} />
                </button>
                <button onClick={() => deleteService(index)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addService} className="flex items-center gap-2 text-yellow-500 hover:text-yellow-700">
            <Plus size={16} /> Agregar Servicio
          </button>
        </div>
      </div>

      {/* Somos Especialistas */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Somos Especialistas</h4>
          <button onClick={() => handlePreview('inicio')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <textarea
          value={data.servicesDescription}
          onChange={(e) => updateData({ ...data, servicesDescription: e.target.value })}
          className="w-full p-3 border rounded"
          rows={4}
        />
      </div>

      {/* Nuestro Portafolio */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h4 className="text-xl font-semibold mb-4">Nuestro Portafolio</h4>
        {/* Aquí iría la gestión del portafolio */}
        <p>Gestión de portafolio próximamente.</p>
      </div>

      {/* Testimonios */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Testimonios</h4>
          <button onClick={() => handlePreview('inicio')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <div className="space-y-4">
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="border p-4 rounded flex justify-between items-center">
              <div className="flex items-center gap-4">
                {testimonial.image_url && (
                  <img src={testimonial.image_url} alt={testimonial.name} className="w-12 h-12 object-cover rounded-full" />
                )}
                <div>
                  <p>"{testimonial.quote}"</p>
                  <p className="font-medium">{testimonial.name} - {testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { setEditingTestimonial(index); setTestimonialEdit(data.testimonials[index]); }} className="text-blue-500 hover:text-blue-700">
                  <Edit size={16} />
                </button>
                <button onClick={() => deleteTestimonial(index)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addTestimonial} className="flex items-center gap-2 text-yellow-500 hover:text-yellow-700">
            <Plus size={16} /> Agregar Testimonio
          </button>
        </div>
      </div>

      {/* Academia */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Academia</h4>
          <button onClick={() => handlePreview('inicio')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            value={data.academy.title}
            onChange={(e) => updateData({ ...data, academy: { ...data.academy, title: e.target.value } })}
            className="w-full p-3 border rounded"
            placeholder="Título de Academia"
          />
          <textarea
            value={data.academy.description}
            onChange={(e) => updateData({ ...data, academy: { ...data.academy, description: e.target.value } })}
            className="w-full p-3 border rounded"
            rows={3}
            placeholder="Descripción de Academia"
          />
        </div>
      </div>
    </div>
  );

  const renderCompaniaTab = () => (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">Compañía</h3>

      {/* Nuestra Empresa */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Nuestra Empresa</h4>
          <button onClick={() => handlePreview('compania')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <div className="space-y-4">
          <textarea
            value={data.company.about}
            onChange={(e) => updateData({ ...data, company: { ...data.company, about: e.target.value } })}
            className="w-full p-3 border rounded"
            rows={6}
            placeholder="Descripción de la empresa"
          />
          <input
            type="text"
            value={data.company.vision}
            onChange={(e) => updateData({ ...data, company: { ...data.company, vision: e.target.value } })}
            className="w-full p-3 border rounded"
            placeholder="Visión"
          />
          <input
            type="text"
            value={data.company.goals}
            onChange={(e) => updateData({ ...data, company: { ...data.company, goals: e.target.value } })}
            className="w-full p-3 border rounded"
            placeholder="Objetivos"
          />
        </div>
      </div>

      {/* Nuestro Equipo */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Nuestro Equipo</h4>
          <button onClick={() => handlePreview('compania')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <div className="space-y-4">
          {data.team.map((member, index) => (
            <div key={index} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h5 className="font-medium">{member.name}</h5>
                <p className="text-sm text-gray-600">{member.role} - {member.experience}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { setEditingTeamMember(index); setTeamEdit(data.team[index]); }} className="text-blue-500">
                  <Edit size={16} />
                </button>
                <button onClick={() => deleteTeamMember(index)} className="text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addTeamMember} className="flex items-center gap-2 text-yellow-500 hover:text-yellow-700">
            <Plus size={16} /> Agregar Miembro
          </button>
        </div>
      </div>
    </div>
  );

  const renderProyectoTab = () => (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">Proyecto</h3>

      {/* Todos los Proyectos */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Todos los Proyectos</h4>
          <button onClick={() => handlePreview('proyecto')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <p>Gestión de proyectos próximamente.</p>
      </div>

      {/* Galería */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Galería</h4>
          <button onClick={() => handlePreview('proyecto')} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Eye size={14} /> Vista Previa
          </button>
        </div>
        <p>Gestión de galería próximamente.</p>
      </div>
    </div>
  );

  const renderCarruselTab = () => (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">Carrusel de Inicio</h3>

      {/* Lista de Slides */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Slides del Carrusel</h4>
          <button onClick={() => { setHeroSlideEdit({ title: '', subtitle: '', image_url: '' }); setEditingHeroSlide(-1); }} className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
            <Plus size={14} /> Agregar Slide
          </button>
        </div>
        <div className="space-y-4">
          {data.heroSlides.map((slide, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <img src={slide.image_url || '/api/placeholder/100/60'} alt={slide.title} className="w-16 h-10 object-cover rounded" />
                <div>
                  <h5 className="font-semibold">{slide.title}</h5>
                  <p className="text-sm text-gray-600">{slide.subtitle}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { setHeroSlideEdit(slide); setEditingHeroSlide(index); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDeleteHeroSlide(index)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFooterTab = () => (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">Configuración del Footer</h3>

      {/* Información del Footer */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Información del Footer</h4>
          <button onClick={() => setEditingFooter(true)} className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            <Edit size={14} /> Editar Footer
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Copyright</label>
            <p className="text-gray-900">{data.footer?.copyright || '© 2026 BlackRock Guayana C.A. Todos los derechos reservados.'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enlaces de Redes Sociales</label>
            <div className="flex gap-4">
              {data.footer?.socialLinks?.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {link.platform}
                </a>
              )) || <p className="text-gray-500">No hay enlaces configurados</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // La vista previa ahora se renderiza como overlay, de modo que al cerrarla vuelve al editor sin problemas.

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Configuración del Portal</h2>
        <div className="flex items-center gap-4">
          <button onClick={() => handlePreview()} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <Eye size={16} /> Vista Previa General
          </button>
          <button onClick={publishChanges} className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            <Save size={16} /> Publicar Cambios
          </button>
          <span className={`text-sm font-medium ${unsavedChanges ? 'text-yellow-700' : 'text-green-700'}`}>
            {unsavedChanges ? 'Cambios sin publicar' : 'Todo publicado'}
          </span>
        </div>
      </div>

      {previewMode && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black/50 p-6">
          <div className="mx-auto max-w-6xl bg-white rounded-3xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Vista Previa - {previewTab === 'inicio' ? 'Inicio' : previewTab === 'compania' ? 'Compañía' : 'Proyecto'}</h2>
                <p className="text-sm text-gray-600">Revisa los cambios antes de publicarlos definitivamente.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={publishChanges} disabled={!unsavedChanges} className={`flex items-center gap-2 px-4 py-2 rounded text-white ${unsavedChanges ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'}`}>
                  <Save size={16} /> Publicar ahora
                </button>
                <button onClick={closePreview} className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                  <X size={16} /> Cerrar Vista Previa
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {previewTab === 'inicio' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Nuestros Servicios</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.services.map((service, index) => (
                        <div key={index} className="border p-4 rounded">
                          <h4 className="font-semibold">{service.title}</h4>
                          <p className="text-sm text-gray-600">{service.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Somos Especialistas</h3>
                    <p>{data.servicesDescription}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Testimonios</h3>
                    {data.testimonials.map((testimonial, index) => (
                      <div key={index} className="border p-4 rounded mb-4 flex items-center gap-4">
                        {testimonial.image_url && (
                          <img src={testimonial.image_url} alt={testimonial.name} className="w-16 h-16 object-cover rounded-full" />
                        )}
                        <div>
                          <p>"{testimonial.quote}"</p>
                          <p className="font-medium">{testimonial.name} - {testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Academia</h3>
                    <h4 className="text-xl font-semibold">{data.academy.title}</h4>
                    <p>{data.academy.description}</p>
                  </div>
                </div>
              )}
              {previewTab === 'compania' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Nuestra Empresa</h3>
                    <p className="mb-4">{data.company.about}</p>
                    <p><strong>Visión:</strong> {data.company.vision}</p>
                    <p><strong>Objetivos:</strong> {data.company.goals}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Nuestro Equipo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.team.map((member, index) => (
                        <div key={index} className="border p-4 rounded flex items-center gap-4">
                          {member.image && (
                            <img src={member.image_url} alt={member.name} className="w-16 h-16 object-cover rounded-full" />
                          )}
                          <div>
                            <h4 className="font-semibold">{member.name}</h4>
                            <p>{member.role}</p>
                            <p className="text-sm text-gray-600">{member.experience}</p>
                            <p className="text-sm text-gray-600">{member.specialization}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {previewTab === 'proyecto' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Todos los Proyectos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.projects.map((project, index) => (
                        <div key={index} className="border p-4 rounded">
                          <h4 className="font-semibold">{project.title}</h4>
                          <p className="text-sm text-gray-600">{project.description}</p>
                          <p className="text-sm">{project.location} - {project.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Galería</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {data.portfolio.slice(0, 8).map((item, index) => (
                        <div key={index} className="border p-2 rounded">
                          <img src={item.image_url} alt={item.title} className="w-full h-24 object-cover rounded" />
                          <p className="text-sm mt-2">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pestañas */}
      <div className="mb-6">
        <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'compania', label: 'Compañía' },
            { id: 'proyecto', label: 'Proyecto' },
            { id: 'carrusel', label: 'Carrusel' },
            { id: 'footer', label: 'Footer' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-yellow-500 text-black'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="bg-gray-50 p-6 rounded-lg">
        {activeTab === 'inicio' && renderInicioTab()}
        {activeTab === 'compania' && renderCompaniaTab()}
        {activeTab === 'proyecto' && renderProyectoTab()}
        {activeTab === 'carrusel' && renderCarruselTab()}
        {activeTab === 'footer' && renderFooterTab()}
      </div>

      {/* Modales */}
      {renderServiceModal()}
      {renderTestimonialModal()}
      {renderTeamModal()}
      {renderHeroSlideModal()}
      {renderFooterModal()}
    </div>
  );
};