import axios from 'axios';
import { User, ServiceRequest, Booking, WhatsAppMessage } from '../types';

// Configure base URL for your Django backend
const API_BASE_URL = 'http://localhost:8000/api'; // Change this to your Django server URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// User Management
export const userService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login/', { email, password });
    return response.data;
  },

  register: async (userData: Partial<User>) => {
    const response = await api.post('/auth/register/', userData);
    return response.data;
  },

  getProfile: async (userId: string) => {
    const response = await api.get(`/users/${userId}/`);
    return response.data;
  },

  updateProfile: async (userId: string, userData: Partial<User>) => {
    const response = await api.put(`/users/${userId}/`, userData);
    return response.data;
  },
};

// Service Requests
export const serviceRequestService = {
  create: async (requestData: Partial<ServiceRequest>) => {
    const response = await api.post('/service-requests/', requestData);
    return response.data;
  },

  getAll: async (userId: string) => {
    const response = await api.get(`/service-requests/?user_id=${userId}`);
    return response.data;
  },

  getById: async (requestId: string) => {
    const response = await api.get(`/service-requests/${requestId}/`);
    return response.data;
  },

  update: async (requestId: string, requestData: Partial<ServiceRequest>) => {
    const response = await api.put(`/service-requests/${requestId}/`, requestData);
    return response.data;
  },

  cancel: async (requestId: string) => {
    const response = await api.post(`/service-requests/${requestId}/cancel/`);
    return response.data;
  },
};

// Bookings
export const bookingService = {
  create: async (bookingData: Partial<Booking>) => {
    const response = await api.post('/bookings/', bookingData);
    return response.data;
  },

  getAll: async (userId: string) => {
    const response = await api.get(`/bookings/?user_id=${userId}`);
    return response.data;
  },

  getById: async (bookingId: string) => {
    const response = await api.get(`/bookings/${bookingId}/`);
    return response.data;
  },

  update: async (bookingId: string, bookingData: Partial<Booking>) => {
    const response = await api.put(`/bookings/${bookingId}/`, bookingData);
    return response.data;
  },
};

// WhatsApp Integration
export const whatsappService = {
  sendMessage: async (messageData: Partial<WhatsAppMessage>) => {
    const response = await api.post('/whatsapp/send/', messageData);
    return response.data;
  },

  getMessageHistory: async (userId: string) => {
    const response = await api.get(`/whatsapp/messages/?user_id=${userId}`);
    return response.data;
  },

  getMessageStatus: async (messageId: string) => {
    const response = await api.get(`/whatsapp/messages/${messageId}/status/`);
    return response.data;
  },
};

// Location Services
export const locationService = {
  getNearbyTechnicians: async (latitude: number, longitude: number, radius: number = 10) => {
    const response = await api.get(`/technicians/nearby/?lat=${latitude}&lng=${longitude}&radius=${radius}`);
    return response.data;
  },

  updateUserLocation: async (userId: string, latitude: number, longitude: number, address: string) => {
    const response = await api.put(`/users/${userId}/location/`, {
      latitude,
      longitude,
      address,
    });
    return response.data;
  },
};

export default api;
