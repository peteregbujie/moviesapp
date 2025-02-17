import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieservices';

export const useMovieCredits = (movieId: string | undefined) => {
  return useQuery({
    queryKey: ['movieCredits', movieId],
    queryFn: async () => {
      if (!movieId) throw new Error('Movie ID is required');
      const response = await movieService.getMovieCredits(movieId);
      return response.data;
    },
    enabled: !!movieId,
  });
};