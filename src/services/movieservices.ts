import { MovieResponse, GenreResponse } from '../types/movie.types';
import { tmdbApi } from './api';

export const movieService = {
  getFeatured: () => 
    tmdbApi.get<MovieResponse>('/movie/now_playing'),
  
  getTrending: () => 
    tmdbApi.get<MovieResponse>('/trending/movie/week'),
  
  getPopular: () => 
    tmdbApi.get<MovieResponse>('/movie/popular'),
  
  getGenres: () => 
    tmdbApi.get<GenreResponse>('/genre/movie/list'),
  
  searchMovies: (query: string) => 
    tmdbApi.get<MovieResponse>('/search/movie', { params: { query } }),
};