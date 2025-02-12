import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { authUser } = useContext(AuthContext);
  return authUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
