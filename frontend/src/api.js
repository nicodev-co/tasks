import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', 
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

apiClient.interceptors.request.use((config) => {
  const xsrfCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('XSRF-TOKEN='));
   
  if (xsrfCookie) {
    
    const token = decodeURIComponent(xsrfCookie.split('=')[1]);
    console.log(token);
    config.headers['X-XSRF-TOKEN'] = token;
  }
  return config;
});

export default apiClient;