import React from 'react';
import { Globe, Camera } from 'lucide-react';

export const Footer = ({ company }) => (
  <footer className="bg-black text-white py-16 border-t border-gray-800 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
        <div>
          <img src={company.logo} alt="BlackRock Logo" className="h-20 w-auto object-contain mb-6" />
          <p className="text-sm text-gray-400 leading-relaxed pr-4">{company.about}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider border-b border-gray-800 pb-2 inline-block">Contacto</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>{company.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider border-b border-gray-800 pb-2 inline-block">Redes Sociales</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61584070753728" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black">
              <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/blackrockguayana?igsh=MW9pdmYwN3ozdGZyZA==" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black">
              <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://www.tiktok.com/@blackrockguayana?_r=1&_t=ZS-95DdJIRyNr6" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors">
              {/* SVG TikTok */}
              <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {company.name}. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);