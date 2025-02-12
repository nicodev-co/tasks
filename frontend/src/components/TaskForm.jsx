import { useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from '../api';

function TaskForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/tasks', formData);
      navigate('/');
    } catch (error) {
      setError('Error al crear la tarea.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Crear Tarea</h2>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-6 text-center">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>
        <div className="mb-5">
          <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
            Estado
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="pending">Pendiente</option>
            <option value="completed">Completada</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Crear Tarea
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
