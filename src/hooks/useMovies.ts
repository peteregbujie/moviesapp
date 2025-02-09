import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Movie, MovieType } from '../types/movie.types';
import { movieService } from '../services/movieservices';

export const useMovies = (type: MovieType = 'popular'): UseQueryResult<Movie[], Error> => {
  return useQuery({
    queryKey: ['movies', type],
    queryFn: async () => {
      const response = await (() => {
        switch (type) {
          case 'trending':
            return movieService.getTrending();
          case 'featured':
            return movieService.getFeatured();
          default:
            return movieService.getPopular();
        }
      })();
      return response.data.results;
    },
  });
};