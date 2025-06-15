import axios from 'axios';
import { ApiResponse, ApiError } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const apiError: ApiError = {
      message: error.response?.data?.error || error.message || 'An error occurred',
      status: error.response?.status || 500,
    };
    
    console.error('API Error:', apiError);
    return Promise.reject(apiError);
  }
);

export default api;

// Helper function for GET requests
export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await api.get<ApiResponse<T>>(endpoint);
  return response.data.data;
}

// Helper function for POST requests
export async function postData<T, U>(endpoint: string, data: U): Promise<T> {
  const response = await api.post<ApiResponse<T>>(endpoint, data);
  return response.data.data;
}