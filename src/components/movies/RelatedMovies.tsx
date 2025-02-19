import { Movie } from '../../types/movie.types';
import MovieCard from './MovieCard';
import LoadingSpinner from '../common/LoadingSpinner';

interface RelatedMoviesProps {
  movies: Movie[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

const RelatedMovies = ({ movies, isLoading, error }: RelatedMoviesProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading related movies</div>;
  }

  if (!movies || movies.length === 0) {
    return <div className="text-gray-500">No related movies found</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.slice(0, 10).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default RelatedMovies;