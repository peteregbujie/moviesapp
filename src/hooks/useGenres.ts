import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieservices';

export const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      const response = await movieService.getGenres();
      return response.data.genres;
    },
  });
};
