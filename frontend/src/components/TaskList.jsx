import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import apiClient from '../api';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await apiClient.get('/tasks');
      setTasks(response.data.data || response.data);
    } catch (error) {
      setError('Error al obtener las tareas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta tarea?')) return;
    try {
      await apiClient.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      alert('Error al eliminar la tarea.');
    }
  };

  if (loading)
    return <p className="text-center text-gray-600">Cargando tareas...</p>;
  if (error)
    return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-700">
          No se encontraron tareas.{' '}
          <NavLink to="/create" className="text-indigo-600 hover:underline">
            Crear una
          </NavLink>
          .
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                  Estado
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium uppercase">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{task.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <NavLink
                      to={`/edit/${task.id}`}
                      className="text-indigo-600 hover:text-indigo-900 mr-4 font-medium"
                    >
                      Editar
                    </NavLink>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-600 hover:text-red-900 font-medium"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TaskList;
