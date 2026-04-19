import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2, Save, ArrowLeft } from 'lucide-react';

export const UsersManagement = () => {
  const [view, setView] = useState('list');
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ id: '', name: '', email: '', role: 'Estudiante' });
  const [users, setUsers] = useState([
    { id: 'U-001', name: 'María Rodríguez', email: 'maria.rodriguez@blackrock.com', role: 'Administrador' },
    { id: 'U-002', name: 'José Pérez', email: 'jose.perez@blackrock.com', role: 'Inspector' },
    { id: 'U-003', name: 'Laura Montero', email: 'laura.montero@blackrock.com', role: 'Estudiante' },
    { id: 'U-004', name: 'Andrés Gómez', email: 'andres.gomez@blackrock.com', role: 'Analista' },
  ]);
  const roles = ['Cliente', 'Estudiante', 'Administrador', 'Inspector', 'Analista', 'Asistente'];

  const handleOpenCreate = () => {
    setSelectedUser(null);
    setFormData({ id: `U-${Date.now()}`, name: '', email: '', role: 'Estudiante' });
    setView('form');
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFormData(user);
    setView('form');
  };

  const handleDelete = (userId) => {
    if (window.confirm('¿Eliminar este usuario? Esta acción no se puede deshacer.')) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (selectedUser) {
      setUsers(users.map((user) => (user.id === selectedUser.id ? formData : user)));
    } else {
      setUsers([...users, formData]);
    }
    setView('list');
  };

  return (
    <div className="p-6 md:p-8">
      {view === 'form' ? (
        <div className="space-y-6">
          <button onClick={() => setView('list')} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold">
            <ArrowLeft size={18} /> Volver a Usuarios
          </button>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h1 className="text-2xl font-extrabold text-gray-900 uppercase mb-3">{selectedUser ? 'Editar Usuario' : 'Crear Usuario'}</h1>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="usuario@dominio.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Rol asignado</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400 transition">
                  <Save size={18} /> Guardar Usuario
                </button>
                <button type="button" onClick={() => setView('list')} className="rounded-2xl border border-gray-300 px-6 py-3 font-bold text-gray-700 hover:bg-gray-100 transition">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 uppercase">Gestión de Usuarios</h1>
              <p className="text-gray-500 mt-2">Crea, edita y administra roles dentro del dashboard.</p>
            </div>
            <button onClick={handleOpenCreate} className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-2xl font-bold hover:bg-black transition">
              <PlusCircle size={18} /> Nuevo Usuario
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-6 py-4 font-semibold">ID</th>
                    <th className="px-6 py-4 font-semibold">Nombre</th>
                    <th className="px-6 py-4 font-semibold">Correo</th>
                    <th className="px-6 py-4 font-semibold">Rol</th>
                    <th className="px-6 py-4 font-semibold text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold">{user.id}</td>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4 text-gray-500">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold text-yellow-600">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <button onClick={() => handleEdit(user)} className="text-blue-600 hover:text-blue-800"><Edit size={16} /></button>
                        <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
