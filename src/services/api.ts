import axios, { AxiosInstance } from 'axios';

const API_KEY = process.env.API_KEY as string;
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdbApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});