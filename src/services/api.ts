import axios, { AxiosInstance } from 'axios';

const VITE_TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

if (!VITE_TMDB_ACCESS_TOKEN) {
  throw new Error('TMDB access token is not defined in environment variables');
}

export const tmdbApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${VITE_TMDB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for debugging
tmdbApi.interceptors.request.use(request => {
  console.log('Starting Request:', JSON.stringify(request, null, 2));
  return request;
});

// Add response interceptor for debugging
tmdbApi.interceptors.response.use(
  response => {
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response;
  },
  error => {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
    });
    return Promise.reject(error);
  }
);
