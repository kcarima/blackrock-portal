import React from 'react';
import { AcademyTopHeader } from './AcademyTopHeader.jsx';
import { AcademyFooter } from './AcademyFooter.jsx';

export const AcademyLayout = ({ children, onLogout }) => (
  <div className="min-h-screen bg-slate-50 text-gray-900">
    <AcademyTopHeader onLogout={onLogout} />
    <main className="flex-grow"> 
      {children}
    </main>
    <AcademyFooter />
  </div>
);
