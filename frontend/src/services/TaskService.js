import apiClient from '../api';

const TaskService = {
  async getTasks() {
    const response = await apiClient.get('/api/v1/tasks');
    return response.data; 
  },

  async getTask(id) {
    const response = await apiClient.get(`/api/v1/tasks/${id}`);
    return response.data;
  },

  async createTask(taskData) {
    const response = await apiClient.post('/api/v1/tasks', taskData);
    return response.data;
  },

  async updateTask(id, taskData) {
    const response = await apiClient.put(`/api/v1/tasks/${id}`, taskData);
    return response.data;
  },

  async deleteTask(id) {
    const response = await apiClient.delete(`/api/v1/tasks/${id}`);
    return response.data;
  },
};

export default TaskService;
