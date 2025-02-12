import { createContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";
import apiClient from "../api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) {
      setAuthUser(JSON.parse(user));
    }
  }, []);

  const login = async (credentials) => {
    const data = await AuthService.login(credentials);

    if (data.token) {
      localStorage.setItem("authUser", JSON.stringify(data.user));

      setAuthUser(data.user);
    }
  };

  const register = async (registrationData) => {
    const data = await AuthService.register(registrationData);
    if (data.token) {
      localStorage.setItem("authUser", JSON.stringify(data.user));
      setAuthUser(data.user);
    }
  };

  const logout = async () => {
    await AuthService.logout();
    localStorage.removeItem("authUser");
    delete apiClient.defaults.headers.common["Authorization"];
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
