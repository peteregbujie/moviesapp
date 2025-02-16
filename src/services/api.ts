import axios, { AxiosInstance } from 'axios';

const VITE_TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

if (!VITE_TMDB_ACCESS_TOKEN) {
  console.error('TMDB access token is not defined in environment variables');
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
  console.log('Starting Request:', request);
  return request;
});

// Add response interceptor for debugging
tmdbApi.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error.response?.data || error);
    return Promise.reject(error);
  }
);
