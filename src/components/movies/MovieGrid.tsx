import { Movie } from '../../types/movie.types';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Movie[];
  selectedGenreId: number | null;
}

const MovieGrid = ({ movies, selectedGenreId }: MovieGridProps) => {
  const filteredMovies = selectedGenreId
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenreId))
    : movies;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
