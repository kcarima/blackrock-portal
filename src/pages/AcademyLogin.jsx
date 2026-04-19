import React, { useState } from 'react';
import { GraduationCap, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AcademyLogin = ({ setIsAuthenticated, setAuthType, setUserRole }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.toLowerCase() === 'estudiante@blackrock.com' && password === 'blackrock2024') {
      setIsAuthenticated(true);
      setAuthType('academy');
      setUserRole('Estudiante');
      navigate('/academy/dashboard');
    } else {
      setError('Credenciales inválidas. Contacta al administrador para ingresar a la academia.');
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <GraduationCap className="mx-auto h-16 w-16 text-yellow-500" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 uppercase">Portal de Academia</h2>
        <p className="mt-2 text-sm text-gray-600">Ingrese sus credenciales enviadas por correo</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-6 shadow-2xl rounded-2xl border-t-4 border-yellow-500">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input type="email" required className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="estudiante@blackrock.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input type="password" required className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          {error && <div className="text-red-600 text-sm text-center font-medium bg-red-50 p-2 rounded">{error}</div>}
          <button type="submit" className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold py-3 rounded-lg transition-colors">Ingresar a Clases</button>
        </form>
      </div>
    </div>
  );
};
