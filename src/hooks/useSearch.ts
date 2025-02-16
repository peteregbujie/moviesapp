import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MovieResponse } from '../types/movie.types';
import { movieService } from '../services/movieservices';

export const useSearch = (query: string): UseQueryResult<MovieResponse, Error> => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      if (!query.trim()) return { results: [] };
      const response = await movieService.searchMovies(query);
      return response.data;
    },
    enabled: !!query.trim(),
    retry: 1,
  });
};
