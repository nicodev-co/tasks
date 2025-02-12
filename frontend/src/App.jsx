import{ useContext } from 'react';
import { Routes, Route, NavLink } from 'react-router';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskEdit from './components/TaskEdit';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { authUser, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            Administrador de Tareas
          </NavLink>
          <div className="space-x-6">
            {authUser ? (
              <>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? 'text-gray-900 border-b-2 border-indigo-500 pb-1'
                      : 'text-gray-600 hover:text-gray-800'
                  }
                >
                  Tareas
                </NavLink>
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-gray-900 border-b-2 border-indigo-500 pb-1'
                      : 'text-gray-600 hover:text-gray-800'
                  }
                >
                  Crear Tarea
                </NavLink>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-gray-900 border-b-2 border-indigo-500 pb-1'
                      : 'text-gray-600 hover:text-gray-800'
                  }
                >
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-gray-900 border-b-2 border-indigo-500 pb-1'
                      : 'text-gray-600 hover:text-gray-800'
                  }
                >
                  Registro
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<TaskList />} />
            <Route path="/create" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskEdit />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
