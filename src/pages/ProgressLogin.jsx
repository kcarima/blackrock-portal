import React, { useState } from 'react';
import { LogIn, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProgressLogin = ({ setIsAuthenticated, setAuthType, setUserRole }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.toLowerCase() === 'cliente@blackrock.com' && password === 'avance123') {
      setIsAuthenticated(true);
      setAuthType('client');
      setUserRole('Cliente');
      navigate('/projects/avance');
    } else {
      setError('Usuario o contraseña incorrectos para el acceso de avance.');
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <LogIn className="mx-auto h-16 w-16 text-yellow-500" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 uppercase">Acceso de Avance</h2>
        <p className="mt-2 text-sm text-gray-600">Ingresa con tu cuenta de cliente para ver el estado de tu obra.</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-6 shadow-2xl rounded-3xl border-t-4 border-yellow-500">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="cliente@blackrock.com"
                className="w-full pl-10 p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>
          {error && <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-xl">{error}</div>}
          <button type="submit" className="w-full rounded-3xl bg-yellow-500 px-5 py-3 text-black font-bold hover:bg-yellow-400 transition inline-flex items-center justify-center gap-2">
            <LogIn className="w-5 h-5" /> Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
