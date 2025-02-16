import { MovieResponse, GenreResponse, MovieDetails } from '../types/movie.types';
import { tmdbApi } from './api';
import { AxiosResponse } from 'axios';

export const movieService = {
  getFeatured: (): Promise<AxiosResponse<MovieResponse>> => 
    tmdbApi.get<MovieResponse>('/movie/now_playing'),
  
  getTrending: (): Promise<AxiosResponse<MovieResponse>> => 
    tmdbApi.get<MovieResponse>('/trending/movie/week'),
  
  getPopular: (): Promise<AxiosResponse<MovieResponse>> => 
    tmdbApi.get<MovieResponse>('/movie/popular'),
  
  getGenres: (): Promise<AxiosResponse<GenreResponse>> => 
    tmdbApi.get<GenreResponse>('/genre/movie/list'),
  
  searchMovies: (query: string): Promise<AxiosResponse<MovieResponse>> => 
    tmdbApi.get<MovieResponse>('/search/movie', { 
      params: { 
        query: query,
        include_adult: false,
        language: 'en-US',
        page: 1
      } 
    }),

  getMovieDetails: (movieId: string): Promise<AxiosResponse<MovieDetails>> =>
    tmdbApi.get<MovieDetails>(`/movie/${movieId}`),
};
