import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add auth token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth API
export const authAPI = {
    login: (email, password) => api.post('/auth/login', { email, password }),
    verify: () => api.get('/auth/verify')
};

// Public API  
export const publicAPI = {
    getProjects: () => api.get('/projects'),
    getSkills: () => api.get('/skills'),
    getExperience: () => api.get('/experience'),
    getProfile: () => api.get('/profile'),
    getAchievements: () => api.get('/achievements')
};

// Admin Projects API
export const projectsAPI = {
    create: (data) => api.post('/admin/projects', data),
    update: (id, data) => api.put(`/admin/projects/${id}`, data),
    delete: (id) => api.delete(`/admin/projects/${id}`),
    reorder: (projects) => api.patch('/admin/projects/reorder', { projects })
};

// Admin Skills API
export const skillsAPI = {
    create: (data) => api.post('/admin/skills', data),
    update: (id, data) => api.put(`/admin/skills/${id}`, data),
    delete: (id) => api.delete(`/admin/skills/${id}`)
};

// Admin Experience API
export const experienceAPI = {
    create: (data) => api.post('/admin/experience', data),
    update: (id, data) => api.put(`/admin/experience/${id}`, data),
    delete: (id) => api.delete(`/admin/experience/${id}`)
};

// Admin Profile API
export const profileAPI = {
    update: (data) => api.put('/admin/profile', data)
};

// Admin Achievements API
export const achievementsAPI = {
    create: (data) => api.post('/admin/achievements', data),
    update: (id, data) => api.put(`/admin/achievements/${id}`, data),
    delete: (id) => api.delete(`/admin/achievements/${id}`)
};

// Image Upload API
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const token = localStorage.getItem('adminToken');
    const response = await axios.post(`${API_URL}/admin/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data;
};

export default api;
