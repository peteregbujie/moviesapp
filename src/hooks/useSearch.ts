import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Movie } from '../types/movie.types';
import { movieService } from '../services/movieservices';

export const useSearch = (query: string): UseQueryResult<Movie[], Error> => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      const response = await movieService.searchMovies(query);
      return response.data.results;
    },
    enabled: !!query,
  });
};