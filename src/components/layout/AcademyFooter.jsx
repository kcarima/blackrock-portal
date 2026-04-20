import React from 'react';

export const AcademyFooter = () => (
  <footer className="bg-gray-100 text-gray-700 py-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">BlackRock Academy</h2>
          <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
            Centro de formación de prestigio con programas avanzados en inspección, seguridad industrial y gestión de proyectos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-gray-900 mb-3">Contacto</p>
            <p>Email: soporte@blackrockacademy.com</p>
            <p>Teléfono: +58 123 456 7890</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-3">Información</p>
            <p>Privacidad y políticas</p>
            <p>Términos del servicio</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        <p>© 2026 BlackRock Academy. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);