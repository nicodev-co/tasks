import apiClient from '../api';

const AuthService = {
  async getCsrfCookie() {
    return apiClient.get('/sanctum/csrf-cookie');
  },

  async login({ email, password }) {
    await AuthService.getCsrfCookie();
    const response = await apiClient.post('/login', { email, password });
    return response.data; 
  },

  async register({ name, email, password }) {
    await AuthService.getCsrfCookie();
    const response = await apiClient.post('/register', { name, email, password });
    return response.data;
  },

  async logout() {
    const response = await apiClient.post('/logout');
    return response.data;
  },
};

export default AuthService;
