import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieservices';

export const useRelatedMovies = (movieId: string | undefined) => {
  return useQuery({
    queryKey: ['relatedMovies', movieId],
    queryFn: async () => {
      if (!movieId) throw new Error('Movie ID is required');
      const response = await movieService.getRelatedMovies(movieId);
      return response.data.results;
    },
    enabled: !!movieId,
  });
};