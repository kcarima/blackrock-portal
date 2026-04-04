import React, { useState } from 'react';
import { Calculator, Send, AlertTriangle } from 'lucide-react';

export const Quote = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    requirement: 'Construcción General', 
    area: '', 
    location: '', 
    description: '' 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    
    // Generar el cuerpo del correo con los datos del cliente
    const subject = `Solicitud de Presupuesto - ${formData.name}`;
    const body = `Nombre del cliente: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}

Requerimiento: ${formData.requirement}
Cantidad en m2: ${formData.area} m2
Ubicación donde se va a realizar el trabajo: ${formData.location}

Breve resumen o descripción del estado actual de la obra:
${formData.description}

--------------------------------------------------
Nota para el cliente: Este presupuesto puede ser ajustado luego de la visita técnica de nuestro personal calificado.`;

    // Redirigir al cliente de correo por defecto del usuario (Outlook, Gmail, etc.)
    window.location.href = `mailto:contacto@blackrockguayana.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mostrar mensaje de éxito en pantalla
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Calculator className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">Solicitud de Presupuesto</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Complete el siguiente formulario con los detalles de su proyecto. Se generará un correo automático dirigido a nuestro equipo técnico.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-t-4 border-yellow-500">
          {!isSubmitted ? (
            <form onSubmit={handleSendEmail} className="space-y-6">
              
              {/* Información de Contacto */}
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">1. Datos de Contacto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del Cliente *</label>
                    <input type="text" name="name" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.name} onChange={handleChange} placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono *</label>
                    <input type="tel" name="phone" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.phone} onChange={handleChange} placeholder="Ej. +58 412-1234567" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.email} onChange={handleChange} placeholder="correo@empresa.com" />
                  </div>
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="pt-2">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">2. Detalles del Proyecto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Requerimiento *</label>
                    <select name="requirement" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.requirement} onChange={handleChange}>
                      <option value="Construcción General">Construcción General</option>
                      <option value="Movimiento de Tierras">Movimiento de Tierras</option>
                      <option value="Obras Civiles">Obras Civiles</option>
                      <option value="Mantenimiento">Mantenimiento Preventivo / Correctivo</option>
                      <option value="Alquiler de Maquinaria">Alquiler de Maquinaria Pesada</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Cantidad en m² *</label>
                    <input type="number" name="area" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.area} onChange={handleChange} placeholder="Ej. 1500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ubicación de la obra *</label>
                    <input type="text" name="location" required className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.location} onChange={handleChange} placeholder="Ej. Zona Industrial Matanzas, Galpón 4" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Resumen / Estado actual de la obra *</label>
                    <textarea name="description" required rows="4" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" value={formData.description} onChange={handleChange} placeholder="Describa brevemente el estado actual del terreno o estructura y lo que necesita realizar..."></textarea>
                  </div>
                </div>
              </div>

              {/* Mensaje de Advertencia y Botón */}
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex gap-3 items-start mt-6">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800 font-medium leading-relaxed">
                  <strong>Aviso importante:</strong> Este presupuesto puede ser ajustado luego de la visita técnica de nuestro personal calificado.
                </p>
              </div>

              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-gray-900 text-yellow-500 hover:text-white hover:bg-black font-bold py-4 rounded-lg transition-colors text-lg mt-8">
                <Send className="w-5 h-5" /> Generar Correo de Solicitud
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">¡Solicitud Preparada!</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Se ha abierto su cliente de correo con toda la información. Por favor, <strong>envíe el correo</strong> para que nuestro equipo técnico lo reciba y lo contacte a la brevedad.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-left max-w-lg mx-auto border border-gray-200">
                <p className="text-sm text-gray-700 font-medium mb-2">Recuerde:</p>
                <p className="text-sm text-gray-500 italic">"Este presupuesto puede ser ajustado luego de la visita técnica de nuestro personal calificado."</p>
              </div>
              <button onClick={() => setIsSubmitted(false)} className="mt-8 text-yellow-600 font-bold hover:underline">
                Volver a generar otra solicitud
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};