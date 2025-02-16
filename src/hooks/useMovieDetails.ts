import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieservices';

export const useMovieDetails = (movieId: string | undefined) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: async () => {
      if (!movieId) throw new Error('Movie ID is required');
      const response = await movieService.getMovieDetails(movieId);
      return response.data;
    },
    enabled: !!movieId,
  });
};