import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';

export const Login = ({ setIsAuthenticated, setAuthType, setUserRole }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userData = await apiService.login(email, password);
      const allowedDashboardRoles = ['Administrador', 'Inspector', 'Analista', 'Asistente'];

      if (userData && allowedDashboardRoles.includes(userData.role)) {
        setIsAuthenticated(true);
        setAuthType('dashboard');
        setUserRole(userData.role);
        navigate('/dashboard');
      } else {
        setError('Credenciales incorrectas o sin permiso para acceder al panel.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error?.message || 'Error al iniciar sesión. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 uppercase">Acceso Restringido</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-6 shadow-2xl rounded-2xl">
        <form className="space-y-6" onSubmit={handleLogin}>
          <input type="email" required className="w-full p-3 border rounded-lg bg-gray-50" placeholder="admin@blackrock.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" required className="w-full p-3 border rounded-lg bg-gray-50" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button type="submit" disabled={loading} className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg disabled:opacity-50">
            {loading ? 'Iniciando sesión...' : <><LogIn className="inline w-5 h-5" /> Iniciar Sesión</>}
          </button>
        </form>
      </div>
    </div>
  );
};