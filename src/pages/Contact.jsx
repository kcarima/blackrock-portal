import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { INITIAL_DATA } from '../data/mockData.js';

// Fix for default markers in webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const Contact = () => {
  const { company } = INITIAL_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Mensaje enviado exitosamente');
  };

  return (
    <div className="animate-in fade-in duration-500 bg-gray-50 pb-0">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
            Contactos
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto text-justify">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta o cotización.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">{company.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">{company.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">{company.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Horario de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              Nuestra Ubicación
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <MapContainer 
              center={[8.274485, -62.767127]} 
              zoom={15} 
              style={{ height: '400px', width: '100%' }}
              className="rounded-xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[8.274485, -62.767127]}>
                <Popup>
                  BLACK ROCK GUAYANA C.A.<br />
                  {INITIAL_DATA.company.address}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};